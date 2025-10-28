import { LitElement, html, css, TemplateResult } from "lit";
import { customElement, property, state } from "lit/decorators.js";

@customElement("queue-scroll")
export class QueueScroll extends LitElement {
  @property() token?: string;
  @property() orgId?: string;
  @property() teamId?: string;
  @property() agentId?: string;

  // queueStats contains rendered <li> TemplateResults
  @state() queueStats: TemplateResult[] = [];
  @state() queueFilter: object[] = [];
  @state() _timerInterval?: number;
  @state() queueData?: any;
  @state() mapUpdate?: number;

  static styles = [
    css`
      :host {
        display: flex;
      }
      .marquee-container {
        width: 80vw;
        height: 40px;
        overflow: hidden;
        border: solid;
        border-radius: 25px;
      }

      .marquee {
        list-style: none;
        display: flex;
        padding: 0;
        margin: 0;
        height: 100%;
        width: max-content;
        align-items: center;
        font-size: 0.8rem;
      }

      .marquee li {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
        white-space: nowrap;
        padding: 0 1rem;
      }
    `,
  ];

  connectedCallback() {
    super.connectedCallback();
    this.getQueues();
    // Poll stats every 30s
    this._timerInterval = window.setInterval(() => this.getStats(), 30000);
    // Update template every second (keeps the timestamp "wait" live)
    this.mapUpdate = window.setInterval(() => this.updateTemplate(), 1000);
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    if (this._timerInterval) clearInterval(this._timerInterval);
    if (this.mapUpdate) clearInterval(this.mapUpdate);
  }

  async getQueues() {
    const myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${this.token}`);
    myHeaders.append("Accept", "*/*");

    const requestOptions: object = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    const paths = [
      `/v2/contact-service-queue/by-user-id/${this.agentId}/agent-based-queues`,
      `/v2/contact-service-queue/by-user-id/${this.agentId}/skill-based-queues`,
      `/team/${this.teamId}/incoming-references`,
    ];

    this.queueFilter = [];

    // use for..of so we can await each fetch if desired (avoids race/ordering issues)
    for (let i = 0; i < paths.length; i++) {
      const path = paths[i];
      try {
        const response = await fetch(
          `https://api.wxcc-us1.cisco.com/organization/${this.orgId}${path}`,
          requestOptions
        );
        const result = await response.json();
        if (result && Array.isArray(result.data)) {
          result.data.forEach((q: any) =>
            this.queueFilter.push({ lastQueue: { id: { equals: q.id } } })
          );
        }
        console.log("getQueues:", result);
      } catch (error) {
        console.error(error);
      }
    }

    // After building filters, fetch stats
    this.getStats();
  }

  async getStats() {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Accept", "application/json");
    myHeaders.append("Authorization", `Bearer ${this.token}`);

    const raw = JSON.stringify({
      query:
        "query queueStats($from:Long! $to:Long! $timeComparator:QueryTimeType $filter:TaskFilters $aggregations:[TaskV2Aggregation]){task(from:$from to:$to timeComparator:$timeComparator filter:$filter aggregations:$aggregations){tasks{lastQueue{name}aggregation{name value}}}}",
      variables: {
        from: `${Date.now() - 86400000}`,
        to: `${Date.now()}`,
        timeComparator: "createdTime",
        filter: {
          and: [
            {
              isActive: {
                equals: true,
              },
            },
            {
              status: {
                equals: "parked",
              },
            },
            {
              or: this.queueFilter,
            },
          ],
        },
        aggregations: [
          {
            field: "id",
            type: "count",
            name: "contacts",
          },
          {
            field: "createdTime",
            type: "min",
            name: "oldestStart",
          },
        ],
      },
    });

    const requestOptions: object = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    try {
      const response = await fetch("https://api.wxcc-us1.cisco.com/search", requestOptions);
      const result = await response.json();
      // guard against missing shape
      this.queueData = result?.data?.task?.tasks ?? [];
      console.log("getStats:", result);
      // update immediately after fetching new data
      this.updateTemplate();
    } catch (error) {
      console.error(error);
      this.queueData = [];
      this.updateTemplate();
    }
  }

  // build <li> entries; guard if queueData not ready
  updateTemplate() {
    if (!this.queueData || !Array.isArray(this.queueData)) {
      this.queueStats = [];
      return;
    }

    this.queueStats = this.queueData.map((item: any) => {
      // defensive checks for aggregation array shape
      const contacts = item?.aggregation?.find((a: any) => a.name === "contacts")?.value ?? "-";
      const oldestStartVal = item?.aggregation?.find((a: any) => a.name === "oldestStart")?.value ?? null;
      const wait = oldestStartVal
        ? new Date(Date.now() - oldestStartVal).toISOString().slice(11, -5)
        : "00:00";
      const queueName = item?.lastQueue?.name ?? "Unknown";

      return html`<li> | Queue: ${queueName} Contacts: ${contacts} Wait: ${wait} |</li>`;
    });
  }

  render() {
    return html`
      <div class="marquee-container">
        <ul class="marquee">
          ${this.queueStats}
        </ul>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "queue-scroll": QueueScroll;
  }
}

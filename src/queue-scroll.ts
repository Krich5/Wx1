import { LitElement, html, css } from "lit";
import { customElement, property, state } from "lit/decorators.js"

@customElement("queue-scroll")
export class QueueScroll extends LitElement {
    @property() token?: string
    @property() orgId?: string
    @property() teamId?: string
    @property() agentId?: string
    @state() queueStats = []
    @state() queueFilter: object[] = []
    @state() _timerInterval?: any
    @state() queueData?: any
    @state() mapUpdate?: any
    static styles = [
        css`
            :host {
            display: flex;
            }
            .marquee-container {
            width: 80vw;
            height: 40px; /* Set a fixed height for the container */
            overflow: hidden; 
            border:solid;
            border-radius:25px;
            }

            .marquee {
            list-style: none; /* Remove default list styles */
            display:flex;
            padding: 0;
            margin: 0;
            height:100%;
            width:max-content;
            animation: scroll linear infinite;
            animation-duration: 10s;
            align-items:center;
            }
            .marquee li {
            display:flex;
            align-self:center;
            align-items:center;
            justify-content:center;
            flex-shrink:0;
            font-size:0.8rem;
            white-space:nowrap;
            padding: 0 1rem 0 1rem;
            }
            .marquee:hover{
            animation-play-state: paused;

            }

            @keyframes scroll {
            0% {
                transform: translateX(0); /* Start position */
            }
            100% {
                transform: translateX(-50%); /* End position (fully scrolled) */
            }
            }
        `
    ];
    connectedCallback() {
        super.connectedCallback()
        this.getQueues()
        this._timerInterval = setInterval(() => this.getStats(), 30000);
        this.mapUpdate = setInterval(() => this.updateTemplate(), 1000);
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        clearInterval(this._timerInterval);
        clearInterval(this.mapUpdate);
    }
    async getQueues() {
        const myHeaders = new Headers();
        myHeaders.append("Authorization", `Bearer ${this.token}`);
        myHeaders.append("Accept", "*/*");

        const requestOptions: object = {
            method: "GET",
            headers: myHeaders,
            redirect: "follow"
        };
        const paths = [`/v2/contact-service-queue/by-user-id/${this.agentId}/agent-based-queues`, `/v2/contact-service-queue/by-user-id/${this.agentId}/skill-based-queues`, `/team/${this.teamId}/incoming-references`]
        this.queueFilter = []
        paths.forEach(async (path, i) => {
            try {
                const response = await fetch(`https://api.wxcc-us1.cisco.com/organization/${this.orgId}${path}`, requestOptions);
                const result = await response.json();
                result.data.forEach((q: any) => this.queueFilter.push({ lastQueue: { id: { equals: q.id } } }))
                console.log(result)
            } catch (error) {
                console.error(error);
            };
            if (i >= paths.length - 1) { this.getStats() }
        })
    }
    async getStats() {
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("Accept", "application/json");
        myHeaders.append("Authorization", `Bearer ${this.token}`);

        const raw = JSON.stringify({
            "query": "query queueStats($from:Long! $to:Long! $timeComparator:QueryTimeType $filter:TaskFilters $aggregations:[TaskV2Aggregation]){task(from:$from to:$to timeComparator:$timeComparator filter:$filter aggregations:$aggregations){tasks{lastQueue{name}aggregation{name value}}}}",
            "variables": {
                "from": `${Date.now() - 86400000}`,
                "to": `${Date.now()}`,
                "timeComparator": "createdTime",
                "filter": {
                    "and": [
                        {
                            "isActive": {
                                "equals": true
                            }
                        },
                        {
                            "status": {
                                "equals": "parked"
                            }
                        },
                        {
                            "or": this.queueFilter
                        }
                    ]
                },
                "aggregations": [
                    {
                        "field": "id",
                        "type": "count",
                        "name": "contacts"
                    },
                    {
                        "field": "createdTime",
                        "type": "min",
                        "name": "oldestStart"
                    }
                ]
            }
        });

        const requestOptions: object = {
            method: "POST",
            headers: myHeaders,
            body: raw,
            redirect: "follow"
        };

        try {
            const response = await fetch("https://api.wxcc-us1.cisco.com/search", requestOptions);
            const result = await response.json();
            this.queueData = await result.data.task.tasks
            console.log(result)
        } catch (error) {
            console.error(error);
        };
    }
    updateTemplate(){
        this.queueStats = this.queueData.map((item: any) => { return html`<li> | Queue: ${item.lastQueue.name} Contacts: ${item.aggregation[1].value} Wait: ${new Date(Date.now() - item.aggregation[0].value).toISOString().slice(11, -5)} |</li>` })
    }
    render() {
        return html`
        <div class="marquee-container" style="--qs-font-size: ${this.fontSize}">
            <ul class="marquee" style="animation-duration: ${this.queueStats.length * 10}s">
                ${this.queueStats}
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

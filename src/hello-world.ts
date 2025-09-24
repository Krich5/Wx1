import { LitElement, html, css } from "lit";
import { customElement, property, state } from "lit/decorators.js"

@customElement("hello-world")
export class HelloWorld extends LitElement {
    @property() myprop: string = "My Property"
    @state() mystate: string = "My State"
    static styles = [
        css`
            :host {
                display: block;
            }
                        div{
                border:solid black 2px;
            }
            h1{
                color:blue;
            }
            h2{
                color:red;
            }
        `
    ];

    changeValues(newValue:string) {
        this.myprop = newValue
        this.mystate = "set by method"

    }
    render() {
        return html`
        <div>
            <h1>${this.myprop}</h1>
            <h2>${this.mystate}</h2>
            <input value=${this.myprop} @change=${(e: any) => this.myprop = e.target.value}> 
            <input value=${this.mystate} @change=${(e: any) => this.mystate = e.target.value}>
            <button @click=${this.changeValues.bind(this,"set by button")}>Call Method</button>
        </div>`;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        "hello-world": HelloWorld;
    }
}

import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('counter-element')
export class CounterElement extends LitElement {
  @property({ type: Number })
  private count = 0;

  private setCount(to: number) {
    this.count = to;
  }

  protected render() {
    return html`
      <button type="button" @click=${() => this.setCount(this.count + 1)}>
        +
      </button>
      <button type="button" @click=${() => this.setCount(this.count - 1)}>
        -
      </button>
      <div>${this.count}</div>
    `;
  }
}

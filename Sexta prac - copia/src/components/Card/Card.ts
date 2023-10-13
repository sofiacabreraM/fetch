export enum AttributeCard {
  "name" = "name",
  "gender" = "gender",
  "eye_color" = "eye_color"
}

export default class Card extends HTMLElement {
name?: string = "";
gender?: string = "";
eye_color?: string = "";

static get observedAttributes(){
  const attrs: Record<AttributeCard, null> = {
name: null,
gender: null,
eye_color: null,
  }
 return Object.keys(attrs)
}

constructor(){
  super();
  this.attachShadow({mode: `open`})
}
attributeChangedCallback(
  propName: AttributeCard,
  oldValue: unknown,
  newValue: string
){
switch (propName) {
  default:
this[propName] = newValue;
    break;
}
}

connectedCallback(){
  this.render()
}

render(){
  if(this.shadowRoot)this.shadowRoot.innerHTML = ``
  const container = this.ownerDocument.createElement(`div`)

  const name = this.ownerDocument.createElement(`h1`)
  name.innerHTML = `${this.name}`
  container.appendChild(name)

  const gender = this.ownerDocument.createElement(`h1`)
  gender.innerHTML = `${this.gender}`
  container.appendChild(gender)

  const eye_color = this.ownerDocument.createElement(`h1`)
  eye_color.innerHTML = `${this.eye_color}`
  container.appendChild(eye_color)

  this.shadowRoot?.appendChild(container)
}
}

customElements.define(`app-card`, Card)
 import "./screens/dashboard"
// import "./components/export"

class AppContainer extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({mode: "open"});
    }

    connectedCallback(){
        this.render();
    }

    render(){
        if(this.shadowRoot)this.shadowRoot.innerHTML = `
        <section>
        <h1>HOLSSSS</h1>
     
        </section>
        `
        const something = this.ownerDocument.createElement('app-dashboard');
        this.shadowRoot?.appendChild(something);
    }
}

customElements.define('app-container', AppContainer);

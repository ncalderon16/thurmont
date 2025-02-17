const footerTemplate = document.createElement("template");
footerTemplate.innerHTML = `
    <div id="footer">
        <p>Copyright Thurmont Education</p>   
    </div>
`;

class CustomFooter extends HTMLElement {
    constructor(){
        super();

        const clone = footerTemplate.content.cloneNode(true);
        this.appendChild(clone);
    }
}

window.customElements.define("custom-footer", CustomFooter);

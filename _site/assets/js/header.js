const template = document.createElement("template");
template.innerHTML = `
    <div id="header">
        <div id="header-logo">
            <a href="../../pages/home.html">
                <img src="../../image/thurmont-logo.jpg" width="110" height="110">
            </a>
        </div>
        
        <div class="header-options">
            <div class="header-option">
                <a href="../../pages/home.html" target="_self">
                    <span class="header-option">Home</span>
                </a>
            </div>
            
            <div class="header-option">
                <a href="../../pages/services.html" target="_self">
                    <span class="header-option">Services</span>
                </a>
            </div>
            
            <div class="header-option">
                <a href="../../pages/about.html" target="_self">
                    <span class="header-option">About</span>
                </a>
            </div>
            
            <div class="header-option">
                <a href="../../pages/partners.html" target="_self">
                    <span class="header-option">Partners</span>
                </a>
            </div>
       </div>
    </div>
`;



class CustomHeader extends HTMLElement {
    constructor(){
        super();

        const clone = template.content.cloneNode(true);
        this.appendChild(clone);
    }
}

window.customElements.define("custom-header", CustomHeader);

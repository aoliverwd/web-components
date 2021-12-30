const template = document.createElement('template');
template.innerHTML = `
    <style>
        .banner{
            background-color: hsl(0, 0%, 91%);
            box-shadow: 2px 2px 6px rgba(0,0,0,0.2);
            border: solid 1px;
            border-radius: 4px;
            padding: 10px 30px;
            font-size: 0.95rem;
        }

        .content{
            border-left: solid 3px;
            padding-left: 10px;
        }

        [data-type="success"]{
            background-color: hsl(120, 73%, 75%);
            border-color: hsl(120, 73%, 60%);
            color: hsl(120, 73%, 15%);
        }

        [data-type="warning"]{
            background-color: hsl(16, 100%, 66%);
            border-color: hsl(16, 100%, 60%);
            color: hsl(16, 100%, 15%);
        }

        [data-type="error"]{
            background-color: hsl(0, 79%, 72%);
            border-color: hsl(0, 79%, 60%);
            color: hsl(0, 79%, 15%);
        }


        h2{
            margin-bottom: 0;
            font-size: 1.4em;
            line-height: 1;
        }
    </style>

    <div class="banner">
        <div class="content"></div>
    </div>
`;

export class ContentBanner extends HTMLElement {

    constructor() {
        super();

        this.attachShadow({mode: 'open'});
        this.shadowRoot.appendChild(template.content.cloneNode(true));
        this.shadowRoot.querySelector(".banner").setAttribute("data-type", this.getAttribute("type"));
        this.shadowRoot.querySelector(".banner .content").innerHTML = this.innerHTML;
    }
}

window.customElements.define('content-banner', ContentBanner);
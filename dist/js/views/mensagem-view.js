import { View } from "./view.js";
export class MensagemView extends View {
    //construtor opcional, se quiser usar o "scape"
    template(model) {
        return `
        <p class="alert alert-info">${model}</p>
        `;
    }
}

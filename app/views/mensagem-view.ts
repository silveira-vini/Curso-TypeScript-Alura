import { View } from "./view.js";

export class MensagemView extends View<string> {

    //construtor opcional, se quiser usar o "scape"

    protected template(model: string): string {
        return `
        <p class="alert alert-info">${model}</p>
        `;
    }

}
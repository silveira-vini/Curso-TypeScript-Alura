export class View {
    constructor(selector, scape) {
        this.scape = false;
        const element = document.querySelector(selector);
        if (!element) {
            throw Error(`Seletor ${selector} não existe no DOM. Verifique.`);
        }
        this.element = element;
        if (scape) {
            this.scape = scape;
        }
    }
    update(model) {
        let template = this.template(model);
        if (this.scape) {
            template = template.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '');
        }
        this.element.innerHTML = template;
    }
    clear() {
        this.element.innerHTML = '';
    }
}

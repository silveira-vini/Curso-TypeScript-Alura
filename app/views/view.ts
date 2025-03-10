export abstract class View<T> {
    protected element: HTMLElement;
    private scape = false;


    constructor(selector: string, scape?: boolean) {
        const element = document.querySelector(selector);
        if (element) {
            this.element = element as HTMLElement;
        } else {
            throw new Error(`Seletor ${selector} não existe no DOM. Verifique`);
        }
        
        if (scape) {
            this.scape = scape;
        }
    }

    protected abstract template(model: T): string;

    public update(model: T): void {
        let template = this.template(model);
        if (this.scape) {
            template = template.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
        }
        this.element.innerHTML = template;
    }

    public clear(): void {
        this.element.innerHTML = '';
    }
}
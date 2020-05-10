export class MenuItem {
    constructor(public icon: string, public label: string, public route: string, public active: boolean = false) {}

    equals(item: MenuItem): boolean {
        if (!item) {
            return false;
        }

        return this.icon === item.icon && this.label === item.label && this.route === item.route;
    }

    activate(): void {
        this.active = true;
    }

    deactivate(): void {
        this.active = false;
    }
}
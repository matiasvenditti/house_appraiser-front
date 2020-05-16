import { FormControl } from '@angular/forms';

export class CardInput {
    constructor(public type: string, public label: string, public formControl: FormControl){}
}
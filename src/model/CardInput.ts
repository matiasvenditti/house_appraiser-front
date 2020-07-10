import { AbstractControl } from '@angular/forms';

export class CardInput {
    constructor(
        public type: string,
        public label: string,
        public formControl: AbstractControl,
        public controlName: string,
        public placeholder: string,
        public icon?: string,
        public options?: string[]){}
}
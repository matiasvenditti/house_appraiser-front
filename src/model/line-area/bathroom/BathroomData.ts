import { LineAreaConvertable } from '../LineAreaConvertable';
import { LineAreaElement } from '../LineAreaElement';
import { BathroomItem } from './BathroomItem';

export class BathroomData implements LineAreaConvertable {

    constructor(public data: BathroomItem[]){}

    convert(): LineAreaElement {
        const series = this.data.map(coveredItem => {
            return {
                name: coveredItem.bathrooms,
                value: coveredItem.average_price
            }
        })

        return new LineAreaElement("Bathrooms", series);
    }

}
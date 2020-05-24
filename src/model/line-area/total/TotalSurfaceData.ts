import { LineAreaConvertable } from '../LineAreaConvertable';
import { LineAreaElement } from '../LineAreaElement';
import { TotalSurfaceItem } from './TotalSurfaceItem';

export class TotalSurfaceData implements LineAreaConvertable{

    constructor(public data: TotalSurfaceItem[]) {}

    convert(): LineAreaElement {
        const series = this.data.map(totalItem => {
            return {
                name: totalItem.total_surface,
                value: totalItem.average_price
            }
        })

        return new LineAreaElement("Total Surface", series);
    }

}
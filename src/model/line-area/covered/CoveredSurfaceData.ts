import { LineAreaConvertable } from '../LineAreaConvertable';
import { LineAreaElement } from '../LineAreaElement';
import { CoveredSurfaceItem } from './CoveredSurfaceItem';

export class CoveredSurfaceData implements LineAreaConvertable{
    
    constructor(public data: CoveredSurfaceItem[]){}

    convert(): LineAreaElement {
        const series = this.data.map(coveredItem => {
            return {
                name: coveredItem.covered_surface,
                value: coveredItem.average_price
            }
        })

        return new LineAreaElement("Covered Surface", series);
    }

}
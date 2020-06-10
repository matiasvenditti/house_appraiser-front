import { HeatmapConvertable } from './HeatmapConvertable';
import { HeatmapElement } from './HeatmapElement';

export class HeatmapData implements HeatmapConvertable {

    constructor(public data: any) {}

    convert(asc: boolean, top: number): HeatmapElement[] {
        const elements: HeatmapElement[] = Object.entries(this.data).map(entry => {
            return new HeatmapElement(entry[0], entry[1]['series'], entry[1]['total']);
        });

        const ascending = ((a, b) => a.total - b.total);
        const descending = ((a, b) => b.total - a.total);
        const ordering = asc ? ascending : descending;

        return elements.sort(ordering).slice(0, top);
    }

}
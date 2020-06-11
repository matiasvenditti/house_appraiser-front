import { HeatmapConvertable } from './HeatmapConvertable';
import { HeatmapElement, SeriesElement } from './HeatmapElement';

export class HeatmapData implements HeatmapConvertable {

    constructor(public data: any) {}

    convert(asc: boolean, top: number): HeatmapElement[] {
        const elements: HeatmapElement[] = Object.entries(this.data).map(entry => {
            const series: SeriesElement[] = entry[1]['series'].map(elem => new SeriesElement(elem.name, elem.value))
            return new HeatmapElement(entry[0], series, entry[1]['total']);
        });

        const ascending = ((a, b) => a.total - b.total);
        const descending = ((a, b) => b.total - a.total);
        const ordering = asc ? ascending : descending;

        return elements.sort(ordering).slice(0, top);
    }

}
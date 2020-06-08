import { BarChartConvertable } from '../BarChartConvertable';
import { ZoneItem } from './ZoneItem';
import { BarChartElement } from '../BarChartElement';

export class ZoneData implements BarChartConvertable{
    constructor(public data: ZoneItem[]){}

    convert(): BarChartElement {
        const series = this.data.map(zoneItem => {
            return {
                name: zoneItem.zone,
                value: zoneItem.amount
            }
        });
        return new BarChartElement(series); 
    }
}
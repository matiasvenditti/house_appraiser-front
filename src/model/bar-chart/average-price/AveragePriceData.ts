import { AveragePriceItem } from './AveragePriceItem';
import { BarChartElement } from '../BarChartElement';
import { BarChartConvertable } from '../BarChartConvertable';

export class AveragePriceData implements BarChartConvertable {
    constructor(public data: AveragePriceItem[]){}

    convert(): BarChartElement {
        const series = this.data.map(zoneItem => {
            return {
                name: zoneItem.zone,
                value: zoneItem.average_price
            }
        });
        return new BarChartElement(series); 
    }
}
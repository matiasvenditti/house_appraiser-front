import { HeatmapElement } from './HeatmapElement';

export interface HeatmapConvertable {

    convert(asc: boolean, top: number): HeatmapElement[]

}
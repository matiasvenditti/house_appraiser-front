export class HeatmapElement {
    constructor(public name: string, public series: SeriesElement[], public total: number){}
}

export class SeriesElement {
    constructor(public name: string, public value: number) {}
}
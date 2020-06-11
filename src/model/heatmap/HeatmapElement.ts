export class HeatmapElement {
    constructor(public name: string, public series: SeriesElement[], public total: number){}
}

export class SeriesElement {
    constructor(public name: string, public value: number) {
        this.name = this.classify(this.name);
    }

    classify(name): string {
        switch(name) {
            case 0:
                return '[0 - 250]';
            case 1: 
                return '[250 - 500]';
            case 2:
                return '[500 - 750]';
            case 3:
                return '[750 Onwards]'
        }
    }
}
export class PredictionRequest {
    constructor(public total_surface: number, public covered_surface: number, public rooms: number, public bathrooms: number, public garages: number, public bedrooms: number, public toilettes: number, public antiquity: number, public zone: string){}
}
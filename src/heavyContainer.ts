import { ShippingContainer } from "./ShippingContainerInterface";

export class HeavyContainer implements ShippingContainer{
    tareweight: number;
    destination: string;
    cargoWeight: number;
    constructor(tareWeight: number, destination: string, cargoWeight: number = 0){
        this.tareweight = tareWeight;
        this.destination = destination;
        this.cargoWeight = cargoWeight;
    }
    getGrossWeight(){
        return this.cargoWeight + this.tareweight
    }
}
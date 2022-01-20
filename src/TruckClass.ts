import { Transporter } from "./TansporterInterface";
import { ShippingContainer } from "./ShippingContainerInterface";

export class Truck implements Transporter {
    maxWeight: number;
    container: ShippingContainer | null = null;
    constructor(maxWeight: number){
        this.maxWeight = maxWeight;
    }
    addContainer(container: ShippingContainer): void {
        this.container = container;
    }
    getTotalWeight(): number {
        return this.container === null ? 0 : this.container.getGrossWeight();
    }
    isOverWeight(): boolean {
        return this.getTotalWeight() > this.maxWeight ? true : false; 
    }
}
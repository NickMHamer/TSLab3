import { Transporter } from "./TansporterInterface";
import { ShippingContainer } from "./ShippingContainerInterface";

export class Ship implements Transporter{
    maxWeight: number;
    containers: ShippingContainer[] = [];
    constructor(maxWeight: number){
        this.maxWeight = maxWeight;
    }
    addContainer(container: ShippingContainer): void {
        this.containers.push(container)
    }
    getTotalWeight(): number {
        if (this.containers.length > 0){
            let total: number = 0
            for (let container of this.containers){
                total += container.getGrossWeight()
            }
            return total;
        }else{
            return 0;
        }
    }
    isOverWeight(): boolean {
        return this.getTotalWeight() > this.maxWeight ? true : false;
    }
}
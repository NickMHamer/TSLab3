import { ShippingContainer } from "./ShippingContainerInterface";
export interface Transporter{
    maxWeight: number;
    addContainer(container: ShippingContainer):void;
    getTotalWeight(): number;
    isOverWeight(): boolean;
}
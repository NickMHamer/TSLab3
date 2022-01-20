import {Truck} from './TruckClass'
import {Ship} from './ShipClass'
import { ShippingContainer } from './ShippingContainerInterface'
import { Transporter } from './TansporterInterface'

export function findContainersByDestination(containers: ShippingContainer[], destination: string): ShippingContainer[]{
    return containers.filter(container => container.destination === destination)
}

export function findOverweightTransporters(transporters:Transporter[]): Transporter[]{
    return transporters.filter(transporter => transporter.isOverWeight() === true)
}

export function isSafeToAddContainer(ship:Ship, container:ShippingContainer):boolean{
    return (ship.getTotalWeight() + container.getGrossWeight()) > ship.maxWeight ? false : true
}
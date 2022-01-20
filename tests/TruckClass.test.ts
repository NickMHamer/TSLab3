import { HeavyContainer } from '../src/heavyContainer'
import { LightContainer } from '../src/lightContainer'
import {Truck} from '../src/TruckClass'

describe('Test Truck Class', () =>{
    test('The maxWeight property is set to 10000 and container is null from constructor', ()=>{
        const truck = new Truck(10000)
        expect(truck.maxWeight).toEqual(10000)
        expect(truck.container).toEqual(null)
    })
    test('calling addContainer adds container property', ()=>{
        const truck = new Truck(10000)
        const container = new LightContainer('Lansing', 1000)
        truck.addContainer(container)
        expect(truck.container).toEqual(container)
    })
    test('Calling getTotalWeight with container added using addContainer returns 1000', ()=>{
        const truck = new Truck(10000)
        const container = new LightContainer('Lansing', 1000)
        truck.addContainer(container)
        expect(truck.getTotalWeight()).toEqual(1000)
    })
    test('Calling getTotalWeight with container added using addContainer returns 2000', ()=>{
        const truck = new Truck(10000)
        const container = new HeavyContainer(1000, 'Lansing', 1000)
        truck.addContainer(container)
        expect(truck.getTotalWeight()).toEqual(2000)
    })
    test('Calling getTotalWeight with container added using addContainer returns 0', ()=>{
        const truck = new Truck(10000)
        const container = new LightContainer('Lansing')
        truck.addContainer(container)
        expect(truck.getTotalWeight()).toEqual(0)
    })
    test('Calling getTotalWeight with container added using addContainer returns 1000', ()=>{
        const truck = new Truck(10000)
        const container = new HeavyContainer(1000, 'Lansing')
        truck.addContainer(container)
        expect(truck.getTotalWeight()).toEqual(1000)
    })
    test('Calling getTotalWeight with no container added returns 0', ()=>{
        const truck = new Truck(10000)
        expect(truck.getTotalWeight()).toEqual(0)
    })
    test('isOverweight returns true given maxWeight of 1000 and cargoWeight of 2000', ()=>{
        const truck = new Truck(1000)
        const container = new LightContainer('Lansing', 2000)
        truck.addContainer(container)
        expect(truck.isOverWeight()).toEqual(true)
    })
    test('isOverweight returns false given maxWeight of 1000 and cargoWeight of 500', ()=>{
        const truck = new Truck(1000)
        const container = new LightContainer('Lansing', 500)
        truck.addContainer(container)
        expect(truck.isOverWeight()).toEqual(false)
    })
    test('isOverweight returns false given maxWeight of 500 and cargoWeight of 500', ()=>{
        const truck = new Truck(500)
        const container = new LightContainer('Lansing', 500)
        truck.addContainer(container)
        expect(truck.isOverWeight()).toEqual(false)
    })
})
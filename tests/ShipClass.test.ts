import { Ship } from "../src/ShipClass";
import { LightContainer } from "../src/lightContainer";
import { HeavyContainer } from "../src/heavyContainer";

describe('Testing Ship Class', () =>{
    test('The maxWeight property is set from the constructor parameter', () =>{
        const ship = new Ship(10000)
        expect(ship.maxWeight).toEqual(10000)
        expect(ship.containers).toEqual([])
    })
    test('Calling addContainer adds to the containers array', () =>{
        const ship = new Ship(10000)
        const container1 = new LightContainer('China')
        ship.addContainer(container1)
        expect(ship.containers).toEqual([container1])
    })
    test('Calling addContainer twice adds 2 containers to the containers array', () =>{
        const ship = new Ship(10000)
        const container1 = new LightContainer('China')
        const container2 = new HeavyContainer(1000, 'Japan')
        ship.addContainer(container1)
        ship.addContainer(container2)
        expect(ship.containers).toEqual([container1, container2])
    })
    test('Calling getTotalWeight returns the combined gross weight of the containers in the array', () =>{
        const ship = new Ship(10000)
        const container1 = new LightContainer('China', 2000)
        const container2 = new HeavyContainer(1000, 'Japan' , 3000)
        ship.addContainer(container1)
        ship.addContainer(container2)
        expect(ship.getTotalWeight()).toEqual(6000)
    })
    test('Calling getTotalWeight returns the combined gross weight of the containers in the array', () =>{
        const ship = new Ship(10000)
        const container1 = new LightContainer('China', 2000)
        const container2 = new HeavyContainer(1000, 'Japan' , 3000)
        const container3 = new HeavyContainer(2000, 'Japan' , 4000)
        const container4 = new LightContainer('China')
        const container5 = new HeavyContainer(1000, 'Japan')
        ship.addContainer(container1)
        ship.addContainer(container2)
        ship.addContainer(container3)
        ship.addContainer(container4)
        ship.addContainer(container5)
        expect(ship.getTotalWeight()).toEqual(13000)
    })
    test('Calling getTotalWeight returns 0 when containers array is empty', () => {
        const ship = new Ship(10000)
        expect(ship.getTotalWeight()).toEqual(0)
    })
    test('isOverweight returns true when the total weight is greater than maxWeight', () => {
        const ship = new Ship(10000)
        const container1 = new LightContainer('China', 2000)
        const container2 = new HeavyContainer(1000, 'Japan' , 3000)
        const container3 = new HeavyContainer(2000, 'Japan' , 4000)
        const container4 = new LightContainer('China')
        const container5 = new HeavyContainer(1000, 'Japan')
        ship.addContainer(container1)
        ship.addContainer(container2)
        ship.addContainer(container3)
        ship.addContainer(container4)
        ship.addContainer(container5)
        expect(ship.isOverWeight()).toEqual(true)
    })
    test('isOverweight returns false when the total weight is less than maxWeight', () => {
        const ship = new Ship(20000)
        const container1 = new LightContainer('China', 2000)
        const container2 = new HeavyContainer(1000, 'Japan' , 3000)
        const container3 = new HeavyContainer(2000, 'Japan' , 4000)
        const container4 = new LightContainer('China')
        const container5 = new HeavyContainer(1000, 'Japan')
        ship.addContainer(container1)
        ship.addContainer(container2)
        ship.addContainer(container3)
        ship.addContainer(container4)
        ship.addContainer(container5)
        expect(ship.isOverWeight()).toEqual(false)
    })
    test('isOverweight returns false when the total weight is less than maxWeight', () => {
        const ship = new Ship(15000)
        const container1 = new LightContainer('China', 2000)
        const container2 = new HeavyContainer(1000, 'Japan' , 3000)
        const container3 = new HeavyContainer(2000, 'Japan' , 4000)
        const container4 = new LightContainer('China')
        const container5 = new HeavyContainer(1000, 'Japan')
        ship.addContainer(container1)
        ship.addContainer(container2)
        ship.addContainer(container3)
        ship.addContainer(container4)
        ship.addContainer(container5)
        expect(ship.isOverWeight()).toEqual(false)
    })
})
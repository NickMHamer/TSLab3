import { findOverweightTransporters, findContainersByDestination, isSafeToAddContainer } from "../src/functions";
import { HeavyContainer } from "../src/heavyContainer";
import { LightContainer } from "../src/lightContainer";
import { Ship } from "../src/ShipClass";
import { Truck } from "../src/TruckClass";

describe('Testing findContainersByDestination function', () =>{
    test('Given 5 LightContainer destinations with 2 matching returns the 2 matching', () =>{
        const lansingContainer1 = new LightContainer('Lansing')
        const lansingContainer2 = new LightContainer('Lansing')
        const detroitContainer1 = new LightContainer('Detroit')
        const detroitContainer2 = new LightContainer('Detroit')
        const grandRapidsContainer1 = new LightContainer('Grand Rapids')
        const containers = [lansingContainer1, lansingContainer2, detroitContainer1, detroitContainer2, grandRapidsContainer1]
        expect(findContainersByDestination(containers, 'Lansing')).toEqual([lansingContainer1, lansingContainer2])
    })
    test('Given 5 destinations with a mix of LightContainers and HeavyContainers returns the 2 that are matching', () => {
        const lansingContainer1 = new LightContainer('Lansing')
        const lansingContainer2 = new HeavyContainer(1000, 'Lansing')
        const detroitContainer1 = new LightContainer('Detroit')
        const detroitContainer2 = new HeavyContainer(1000, 'Detroit')
        const grandRapidsContainer1 = new LightContainer('Grand Rapids')
        const containers = [lansingContainer1, lansingContainer2, detroitContainer1, detroitContainer2, grandRapidsContainer1]
        expect(findContainersByDestination(containers, 'Lansing')).toEqual([lansingContainer1, lansingContainer2])
    })
    test('Given 5 destinations with a mix of LightContainers and HeavyContainers returns the 2 that are matching', () => {
        const lansingContainer1 = new LightContainer('Lansing')
        const lansingContainer2 = new HeavyContainer(1000, 'Lansing')
        const detroitContainer1 = new LightContainer('Detroit')
        const detroitContainer2 = new HeavyContainer(1000, 'Detroit')
        const grandRapidsContainer1 = new LightContainer('Grand Rapids')
        const containers = [lansingContainer1, lansingContainer2, detroitContainer1, detroitContainer2, grandRapidsContainer1]
        expect(findContainersByDestination(containers, 'Lansing')).toEqual([lansingContainer1, lansingContainer2])
    })
    test('Given 5 destinations with a mix of LightContainers and HeavyContainers returns empty array when none of the containers match the destination', () => {
        const lansingContainer1 = new LightContainer('Lansing')
        const lansingContainer2 = new HeavyContainer(1000, 'Lansing')
        const detroitContainer1 = new LightContainer('Detroit')
        const detroitContainer2 = new HeavyContainer(1000, 'Detroit')
        const grandRapidsContainer1 = new LightContainer('Grand Rapids')
        const containers = [lansingContainer1, lansingContainer2, detroitContainer1, detroitContainer2, grandRapidsContainer1]
        expect(findContainersByDestination(containers, 'Flint')).toEqual([])
    })
    test('Given an empty array of containers returns an empty array', () => {
        const containers = []
        expect(findContainersByDestination(containers, 'Lansing')).toEqual([])
    })
})

describe('Testing findOverweightTransporters function', () =>{
    test('given an array of 4 trucks returns the 2 that are overweight', () => {
        const overweightTruck1 = new Truck(1000)
        const overweightTruck2 = new Truck(500)
        const underweightTruck1 = new Truck(1000)
        const underweightTruck2 = new Truck(500)
        const container1500 = new LightContainer('Lansing', 1500)
        const container250 = new LightContainer('Lansing', 250)
        overweightTruck1.addContainer(container1500)
        overweightTruck2.addContainer(container1500)
        underweightTruck1.addContainer(container250)
        underweightTruck2.addContainer(container250)
        const arrayOfTrucks = [overweightTruck2, overweightTruck1, underweightTruck2, underweightTruck1]
        expect(findOverweightTransporters(arrayOfTrucks)).toEqual([overweightTruck2, overweightTruck1])
    })
    test('Given an array of 2 ships and 2 trucks returns the 1 ship that is overweight and 1 truck that is overweight when the remaining 2 ships are underweight', () => {
        const overweightShip = new Ship(1000)
        const overweightTruck = new Truck(1000)
        const underweightShip = new Truck(1000)
        const underweightTruck = new Truck(1000)
        const container1500 = new LightContainer('Lansing', 1500)
        const container250 = new LightContainer('Lansing', 250)
        overweightTruck.addContainer(container1500)
        overweightShip.addContainer(container1500)
        overweightShip.addContainer(container250)
        underweightTruck.addContainer(container250)
        underweightShip.addContainer(container250)
        underweightShip.addContainer(container250)
        const arrayOfTransporters = [overweightTruck, overweightShip, underweightTruck, underweightShip]
        expect(findOverweightTransporters(arrayOfTransporters)).toEqual([overweightTruck, overweightShip])
    })
    test('Given an array of 2 ships and 2 trucks where none are overweight returns an empty array', () => {
        const overweightShip = new Ship(3000)
        const overweightTruck = new Truck(1500)
        const underweightShip = new Truck(1000)
        const underweightTruck = new Truck(1000)
        const container1500 = new LightContainer('Lansing', 1500)
        const container250 = new LightContainer('Lansing', 250)
        overweightTruck.addContainer(container1500)
        overweightShip.addContainer(container1500)
        overweightShip.addContainer(container250)
        underweightTruck.addContainer(container250)
        underweightShip.addContainer(container250)
        underweightShip.addContainer(container250)
        const arrayOfTransporters = [overweightTruck, overweightShip, underweightTruck, underweightShip]
        expect(findOverweightTransporters(arrayOfTransporters)).toEqual([])
    })
    test('given an empty array returns and empty array', () => {
        const arrayOfTransporters = []
        expect(findOverweightTransporters(arrayOfTransporters)).toEqual([])
    })
})

describe('Testing isSafeToAddContainer function', () => {
    test('isSafeToAddContainer returns true for an empty ship and an empty LightContainer', ()=>{
        const ship = new Ship(5000)
        const container = new LightContainer('Lansing')
        expect(isSafeToAddContainer(ship, container)).toEqual(true)
    })
    test('isSafeToAddContainer returns true for an empty ship and a LightContainer with some cargo, but less than maxWeight.', ()=>{
        const ship = new Ship(5000)
        const container = new LightContainer('Lansing', 2500)
        expect(isSafeToAddContainer(ship, container)).toEqual(true)
    })
    test('isSafeToAddContainer returns true for an empty ship and a HeavyContainer with some cargo, but less than maxWeight.', () => {
        const ship = new Ship(5000)
        const container = new HeavyContainer(1000, 'Lansing', 2500)
        expect(isSafeToAddContainer(ship, container)).toEqual(true)
    })
    test('isSafeToAddContainer returns false for an empty ship and a LightContainer with some cargo, more than maxWeight.', ()=>{
        const ship = new Ship(5000)
        const container = new LightContainer('Lansing', 6000)
        expect(isSafeToAddContainer(ship, container)).toEqual(false)
    })
    test('isSafeToAddContainer returns false for an empty ship and a HeavyContainer with some cargo, more than maxWeight.', ()=>{
        const ship = new Ship(5000)
        const container = new HeavyContainer(2000, 'Lansing', 3500)
        expect(isSafeToAddContainer(ship, container)).toEqual(false)
    })
    test('isSafeToAddContainer returns true for an empty ship and a container with the same gross weight as the maxWeight.', () =>{
        const ship = new Ship(5000)
        const container = new HeavyContainer(2500, 'Lansing', 2500)
        expect(isSafeToAddContainer(ship, container)).toEqual(true)
    })
    test('Given a ship with 2 containers already added isSafeToAddContainer returns true for a container that is light enough to be added to this ship.', ()=>{
        const ship = new Ship(5000)
        const lightContainer = new LightContainer('Lansing', 1000)
        const heavyContainer = new HeavyContainer(500, 'Lansing', 1000)
        ship.addContainer(lightContainer)
        ship.addContainer(heavyContainer)
        const lastContainerToAdd = new LightContainer('Lansing', 1000)
        expect(isSafeToAddContainer(ship, lastContainerToAdd)).toEqual(true)
    })
    test('Given a ship with 2 containers already added isSafeToAddContainer returns false for a container that is too heavy to add to the ship.', ()=>{
        const ship = new Ship(5000)
        const lightContainer = new LightContainer('Lansing', 1000)
        const heavyContainer = new HeavyContainer(500, 'Lansing', 1000)
        ship.addContainer(lightContainer)
        ship.addContainer(heavyContainer)
        const lastContainerToAdd = new LightContainer('Lansing', 3000)
        expect(isSafeToAddContainer(ship, lastContainerToAdd)).toEqual(false)
    })
})
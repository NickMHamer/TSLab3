import { LightContainer } from "../src/lightContainer";

describe('Test LightContainer Class', () =>{
    test("Destination and CargoWeight set from parameter", ()=>{
        const container = new LightContainer('Lansing', 500)
        expect(container.destination).toEqual('Lansing')
        expect(container.cargoWeight).toEqual(500)
    })
    test('cargoWeight defaults to 0 when param is omitted', () =>{
        const container = new LightContainer('Lansing')
        expect(container.cargoWeight).toEqual(0)
    })
    test('getGrossWeight returns the cargoWeight 1000', () =>{
        const container = new LightContainer('Lansing', 1000)
        expect(container.getGrossWeight()).toEqual(1000)
    })
    test('getGrossWeight returns the cargoWeight 2000', () =>{
        const container = new LightContainer('Lansing', 2000)
        expect(container.getGrossWeight()).toEqual(2000)
    })
    test('getGrossWeight returns 0 when cargoWeight param is omitted', () =>{
        const container = new LightContainer('Lansing')
        expect(container.getGrossWeight()).toEqual(0)
    })
})
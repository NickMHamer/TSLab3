import { HeavyContainer } from "../src/heavyContainer";

describe("Test HeavyContainer Class", ()=>{
    test("tareWeight, destination and cargoWeight set from parameter", ()=>{
        const container = new HeavyContainer(1000, 'Lansing', 5000)
        expect(container.tareweight).toEqual(1000)
        expect(container.destination).toEqual('Lansing')
        expect(container.cargoWeight).toEqual(5000)
    })
    test('cargoWeight defaults to 0 when param is omitted', () =>{
        const container = new HeavyContainer(1000,'Lansing')
        expect(container.cargoWeight).toEqual(0)
    })
    test('getGrossWeight returns tarWeight 1000 and cargoWeight 5000 as 6000', ()=>{
        const container = new HeavyContainer(1000, 'Lansing', 5000)
        expect(container.getGrossWeight()).toEqual(6000)
    })
    test('getGrossWeight returns tarWeight 9999 and cargoWeight 9999 as 19998', ()=>{
        const container = new HeavyContainer(9999, 'Lansing', 9999)
        expect(container.getGrossWeight()).toEqual(19998)
    })
    test('getGrossWeight returns tarWeight 1000 when cargoWeight param is omitted', ()=>{
        const container = new HeavyContainer(1000, 'Lansing')
        expect(container.getGrossWeight()).toEqual(1000)
    })
})
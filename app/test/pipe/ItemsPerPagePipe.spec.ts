import {ItemsPerPagePipe} from "../../pipe/ItemsPerPagePipe";
describe('ItemsPerPagePipe', () => {

    let sut:ItemsPerPagePipe;

    beforeEach(() => {
        sut = new ItemsPerPagePipe();
    });

    it('given null will return null', () => {
        expect(sut.transform(null, null)).toEqual(null)
    });

    it('given empty will return empty list', () => {
        expect(sut.transform([], null)).toEqual([])
    });

    it("given list will return ['one']", () => {
        expect(sut.transform(["one", "two"], [0, 1])).toEqual(['one'])
    });

    it("given start gt end will return default list", () => {
        expect(sut.transform(["one", "two"], [2, 1])).toEqual(["one", "two"])
    });

    it("given start gt list#length will return ['two']", () => {
        expect(sut.transform(["one", "two"], [3, 5])).toEqual(["two"])
    });

    it("given start gt list#length will return ['two','three']", () => {
        expect(sut.transform(["one", "two", "three"], [1, 3])).toEqual(["two", "three"])
    });

});
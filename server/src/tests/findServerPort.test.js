const util = require("../util/util")

describe("Can find a valid port", () => {
    test("findServerPort rejects restricted port", () => {
        expect(() => util.findServerPort(1)).toThrow();
    })
})
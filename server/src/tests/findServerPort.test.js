const util = require("../util/util")

describe("Can find a valid port", () => {
    test("findServerPort rejects restricted port", () => {
        expect(() => util.findServerPort(1)).toThrow();
    })

   test("findServerPort does not throw error for input within valid range", () => {
    expect(() => util.findServerPort(8080)).not.toThrow();
   })
})
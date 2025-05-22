const util = require("../util/util")
const Task = require("../models/Task.js")

describe("Can find a valid port", () => {
    test("findServerPort rejects restricted port", () => {
        expect(() => util.findServerPort(1)).toThrow();
    })

   test("findServerPort does not throw error for input within valid range", () => {
    expect(() => util.findServerPort(8080)).not.toThrow();
   })

   test("findServerPort returns valid port", () => {
    const port = util.findServerPort(8080);
    expect(port).toBeGreaterThanOrEqual(8080);
   })

   test("findServerPort throws error when port > 64,000", () => {
    expect(() => util.findServerPort(64001)).toThrow()
   })
})
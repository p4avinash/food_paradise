import { sum } from "../utils/sum"

describe("'add' utility", () => {
  it("given 2 and 2 as arguments, returns 4", () => {
    const result = sum(2, 2)
    expect(result).toEqual(4)
  })
  it("given -2 and -2 as arguments, returns -4", () => {
    const result = sum(-2, -2)
    expect(result).toEqual(-4)
  })
  it("given 2 and -2 as arguments, returns 0", () => {
    const result = sum(2, -2)
    expect(result).toEqual(0)
  })
})

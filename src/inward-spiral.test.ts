import { describe, it, expect } from "vitest"

import { inWardSpiral_cw, inWardSpiral_ccw } from "./inward-spiral"

describe("inWardSpiral_cw", () => {
    it.each([
        {
            input: 0,
            expected: []
        },
        {
            input: 1,
            expected: [
                0,
            ]
        },
        {
            input: 2,
            expected: [
                0, 1,
                3, 2
            ]
        },
        {
            input: 3,
            expected: [
                0, 1, 2,
                7, 8, 3,
                6, 5, 4,
            ]
        }
    ])("should able to sort into spiral inward $input", ({ input, expected}) => {
        expect(inWardSpiral_cw(input)).toStrictEqual(expected)
    })
})

describe("inWardSpiral_ccw", () => {
    it.each([
        {
            input: 0,
            expected: []
        },
        {
            input: 1,
            expected: [
                0,
            ]
        },
        {
            input: 2,
            expected: [
                0, 3,
                1, 2
            ]
        },
        {
            input: 3,
            expected: [
                0, 7, 6,
                1, 8, 5,
                2, 3, 4,
            ]
        }
    ])("should able to sort into spiral inward $input", ({ input, expected}) => {
        expect(inWardSpiral_ccw(input)).toStrictEqual(expected)
    })
})

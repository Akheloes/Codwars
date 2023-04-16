import { describe, expect, test } from 'vitest'

import { callBingoNumbers, numbersArray, scramble } from '.'

function randomnessTester(suite: number[]): number {
    const calledBingoNumber: number = callBingoNumbers(suite)

    expect(calledBingoNumber).toBeLessThanOrEqual(75)
    expect(calledBingoNumber).toBeGreaterThanOrEqual(1)

    return calledBingoNumber
}

// Given I have a Bingo caller
// When I call a number
// Then the number is between 1 and 75 inclusive ✅
describe('Given I have a bingo caller', () => {
    describe('When I call a number', () => {
        test('Then the number is between 1 and 75 inclusive', () => {
            const suite = numbersArray()

            for (let index = 0; index < 75; index++) {
                randomnessTester(suite)
            }
        })
    })
})

describe('scramble', () => {
    test('works fine', () => {
        const entry = numbersArray()
        const result = numbersArray()

        expect(scramble(entry).length).toEqual(result.length)
        expect(scramble(entry).sort()).toEqual(result.sort())
    })
})

// Given I have a Bingo caller
// When I call a number 75 times
// Then all numbers between 1 and 75 are present ✅
// And no number has been called more than once ✅
describe('Given I have a bingo caller', () => {
    describe('When I call a number 75 times', () => {
        test('Then all numbers between 1 and 75 are present', () => {
            const suite = numbersArray()
            const allCalledNumbers: number[] = []
            const expected = numbersArray().sort()

            for (let index = 1; index <= 75; index++) {
                allCalledNumbers.push(randomnessTester(suite))
            }

            expect(allCalledNumbers.sort()).toEqual(expected)
        })
    })
})
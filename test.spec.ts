import { expect, test, describe } from 'vitest'

import { findMissingLetter, setOfTwoLettersArrays } from '.'

describe('Two letters arrays', () => {
    test('Should return "b" for array ["a", "c"]', () => {
        const array = ['a', 'c']
        const missingLetter = 'b'

        expect(findMissingLetter(array)).toEqual(missingLetter)
    })

    test('Should return "y" for array ["x", "z"]', () => {
        const array = ['x', 'z']
        const missingLetter = 'y'

        expect(findMissingLetter(array)).toEqual(missingLetter)
    })

    test('Should return "o" for array ["n", "p"]', () => {
        const array = ['n', 'p']
        const missingLetter = 'o'

        expect(findMissingLetter(array)).toEqual(missingLetter)
    })
})

describe('Three letters arrays', () => {
    test('Should return "o" for array ["n", "p", "q"]', () => {
        const array = ['n', 'p', 'q']
        const missingLetter = 'o'

        expect(findMissingLetter(array)).toEqual(missingLetter)
    })

    test('Should return "p" for array ["n", "o", "q"]', () => {
        const array = ['n', 'o', 'q']
        const missingLetter = 'p'

        expect(findMissingLetter(array)).toEqual(missingLetter)
    })

    test('Should return "p" for array ["a", "b", "d"]', () => {
        const array = ['a', 'b', 'd']
        const missingLetter = 'c'

        expect(findMissingLetter(array)).toEqual(missingLetter)
    })

    test('Should return "p" for array ["a", "c", "d"]', () => {
        const array = ['a', 'c', 'd']
        const missingLetter = 'b'

        expect(findMissingLetter(array)).toEqual(missingLetter)
    })
})

describe('setOfTwoLettersArrays', () => {
    test('Should return two arrays from a three-letter\'s array', () => {
        const threeLettersArray = ['a', 'b', 'c']

        expect(setOfTwoLettersArrays(threeLettersArray).length).toBe(2)
    })

    test('Should return the two arrays ["a", "b"] and ["b", "c"] from a three-letter\'s array ["a", "b", "c"]', () => {
        const threeLettersArray = ['a', 'b', 'c']
        const result = [['a', 'b'], ['b', 'c']]

        expect(setOfTwoLettersArrays(threeLettersArray)).toEqual(result)
    })

    test('Should return the two arrays ["x", "y"] and ["y", "z"] from a three-letter\'s array ["x", "y", "z"]', () => {
        const threeLettersArray = ['x', 'y', 'z']
        const result = [['x', 'y'], ['y', 'z']]

        expect(setOfTwoLettersArrays(threeLettersArray)).toEqual(result)
    })

    test('Should return the two arrays ["a", "b"], ["b", "c"] and ["c", "d"] from a three-letter\'s array ["a", "b", "c", "d"]', () => {
        const threeLettersArray = ['a', 'b', 'c', 'd']
        const result = [['a', 'b'], ['b', 'c'], ['c', 'd']]

        expect(setOfTwoLettersArrays(threeLettersArray)).toEqual(result)
    })

    test('Should return the two arrays ["v", "w"], ["w", "x"], ["x", "y"] and ["y", "z"] from a three-letter\'s array ["v", "w", "x", "y", "z"]', () => {
        const threeLettersArray = ['v', 'w', 'x', 'y', 'z']
        const result = [['v', 'w'], ['w', 'x'], ['x', 'y'], ['y', 'z']]

        expect(setOfTwoLettersArrays(threeLettersArray)).toEqual(result)
    })
})

describe('Four letters arrays', () => {
    test('Should return "o" for array ["n", "p", "q", "r"]', () => {
        const array = ['n', 'p', 'q', 'r']
        const missingLetter = 'o'

        expect(findMissingLetter(array)).toEqual(missingLetter)
    })
})

describe('Five letters arrays', () => {
    test('Should return "o" for array ["n", "p", "q", "r", "s"]', () => {
        const array = ['n', 'p', 'q', 'r', 's']
        const missingLetter = 'o'

        expect(findMissingLetter(array)).toEqual(missingLetter)
    })
})

describe('Five letters arrays with UPPER CASE letters', () => {
    test('Should return "O" for array ["N", "P", "Q", "R", "S"]', () => {
        const array = ['N', 'P', 'Q', 'R', 'S']
        const missingLetter = 'O'

        expect(findMissingLetter(array)).toEqual(missingLetter)
    })
})

test.skip('Should__name__test', () => {
    const array = ['']

    expect(findMissingLetter(array)).toEqual([[]])
})
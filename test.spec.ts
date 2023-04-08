import { expect, test } from 'vitest'

import { multiplicationTable } from '.'


test('Should return empty array for no input', () => {
    expect(multiplicationTable()).toEqual([[]])
})

test('Should return empty array for input equal zero', () => {
    expect(multiplicationTable(0)).toEqual([[]])
})

test('Should return array [[1]] for input 1', () => {
    expect(multiplicationTable(1)).toEqual([[1]])
})

test('Should return array [[1, 2], [2, 4]] for input 2', () => {
    expect(multiplicationTable(2)).toEqual([[1, 2], [2, 4]])
})

test('Should return array [[1, 2, 3], [2, 4, 6], [3, 6, 9]] for input 3', () => {
    expect(multiplicationTable(3)).toEqual([[1, 2, 3], [2, 4, 6], [3, 6, 9]])
})
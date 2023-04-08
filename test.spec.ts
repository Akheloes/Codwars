import { expect, test } from 'vitest'

import { multiplicationTable } from '.'


test('Should __name_test', () => {
    expect(multiplicationTable()).toEqual([[]])
})
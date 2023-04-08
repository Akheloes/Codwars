import { expect, test } from 'vitest'

import { func } from '.'


test('Should__name__test', () => {
    expect(func()).toEqual([[]])
})
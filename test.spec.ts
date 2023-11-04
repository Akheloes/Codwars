import { expect, test } from 'vitest'

import { moveRover } from '.'


test('Should test that on command M move a rover a step ahead', () => {
    expect(moveRover('M')).toEqual('0:1:N')
})
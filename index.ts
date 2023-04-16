
export function callBingoNumbers(suite: number[]): number {

    return suite.length ? Number(suite.pop()) : 0
}

export function numbersArray(): number[] {
    return Array.from({ length: 75 }, (_, index) => index + 1)
}

export function scramble(array: number[]): number[] {
    const clone = Array.from(array)
    // Scrambling action
    for (let index = 0; index < clone.length; index++) {
        const newPosition = randomPosition()
        const tmp = clone[index]
        clone[index] = clone[newPosition]
        clone[newPosition] = tmp
    }

    return clone
}

export function randomPosition(): number {

    return Math.floor(Math.random() * 75)
}
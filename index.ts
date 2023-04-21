// https://www.codewars.com/kata/5839edaa6754d6fec10000a2
// I guess a somewhat lengthy solution to this Kata, lol.

export function findMissingLetter(array: string[]): string {
    if (array.length === 2) {
        return twoLettersFinder(array)
    }

    // Somehow, generate all sequential two-letter's array from your four-letter's array.
    const subArray = setOfTwoLettersArrays(array)

    for (let twoLettersArray of subArray) {

        if (lettersDistance(twoLettersArray) !== 1) {

            return twoLettersFinder(twoLettersArray)
        }
    }

    return ''
}

function twoLettersFinder(array: string[]): string {
    const firstLetter = array[0].toLocaleLowerCase()

    if (firstLetter === 'z') {
        return 'a'
    }

    const followingLetter = firstLetter.charCodeAt(0) + 1
    const stringifiedLetter = String.fromCharCode(followingLetter)

    return formatResult(array[0], stringifiedLetter)
}

function lettersDistance(array: string[]): number {

    return array[1].charCodeAt(0) - array[0].charCodeAt(0)
}

export function setOfTwoLettersArrays(array: string[]): string[][] {
    const twoLettersArrays: string[][] = []

    for (let index = 0; index < array.length - 1; index++) {
        twoLettersArrays.push([array[index], array[index + 1]])
    }

    return twoLettersArrays
}

function formatResult(benchmark: string, letter: string): string {
    const isUpperCase = benchmark.toUpperCase() === benchmark

    return isUpperCase ? letter.toUpperCase() : letter
}
export function multiplicationTable(size?: number): number[][] {
    if (size) {
        // Generating the initial row.
        const array: number[] = Array.from({ length: size }, (_, index) => index + 1)
        // Generating all rows.
        const final: number[][] = []
        for (let j = 1; j <= size; j++) {
            const row = array.map(item => item * j)

            final.push(row)
        }

        return final
    }

    return [[]]
}
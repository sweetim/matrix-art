/**
 * Generates an inward spiral matrix of size N x N, in a clockwise direction.
 *
 * @param {number} N - The size of the square matrix to generate.
 * @returns {number[][]} An inward spiral matrix in a clockwise direction.
 */
export function inWardSpiral_cw(N: number) {
    const results: number[][] = Array(N)
        .fill(0)
        .map(i => [])

    let startRow = 0
    let endRow = N - 1
    let startColumn = 0
    let endColumn = N - 1
    let index = 0

    while (startRow <= endRow && startColumn <= endColumn) {
        for (let i = startColumn; i <= endColumn; i++) {
            results[startRow][i] = index++
        }
        startRow++

        for (let i = startRow; i <= endRow; i++) {
            results[i][endColumn] = index++
        }
        endColumn--

        for (let i = endColumn; i >= startColumn; i--) {
            results[endRow][i] = index++
        }
        endRow--

        for (let i = endRow; i >= startRow; i--) {
            results[i][startColumn] = index++
        }
        startColumn++
    }

    return results.flat()
}

/**
 * Generates an inward spiral matrix of size N x N, in a counter-clockwise direction.
 *
 * @param {number} N - The size of the square matrix to generate.
 * @returns {number[][]} An inward spiral matrix in a counter-clockwise direction.
 */
export function inWardSpiral_ccw(N: number) {
    const results: number[][] = Array(N)
        .fill(0)
        .map(i => [])

    let startRow = 0
    let endRow = N - 1
    let startColumn = 0
    let endColumn = N - 1
    let index = 0

    while (startRow <= endRow && startColumn <= endColumn) {
        for (let i = startRow; i <= endRow; i++) {
            results[i][startColumn] = index++
        }
        startColumn++

        for (let i = startColumn; i <= endColumn; i++) {
            results[endRow][i] = index++
        }
        endRow--

        for (let i = endRow; i >= startRow; i--) {
            results[i][endColumn] = index++
        }
        endColumn--

        for (let i = endColumn; i >= startColumn; i--) {
            results[startRow][i] = index++
        }
        startRow++
    }

    return results.flat()
}

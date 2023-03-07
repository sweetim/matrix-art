type MatrixInfo = {
    start: number
    end: number
}

function createMatrixInfo(N: number): MatrixInfo {
    return {
        start: 0,
        end: N - 1
    }
}

/**
 * Generates an inward spiral matrix of size N x N, in a clockwise direction.
 *
 * @param {number} N - The size of the square matrix to generate.
 * @returns {number[]} An inward spiral matrix in a clockwise direction.
 */
export function inWardSpiral_cw(N: number) {
    const results: number[][] = Array(N)
        .fill(0)
        .map(i => [])

    let row: MatrixInfo = createMatrixInfo(N)
    let column: MatrixInfo = createMatrixInfo(N)

    let index = 0

    while (row.start <= row.end && column.start <= column.end) {
        for (let i = column.start; i <= column.end; i++) {
            results[row.start][i] = index++
        }
        row.start++

        for (let i = row.start; i <= row.end; i++) {
            results[i][column.end] = index++
        }
        column.end--

        for (let i = column.end; i >= column.start; i--) {
            results[row.end][i] = index++
        }
        row.end--

        for (let i = row.end; i >= row.start; i--) {
            results[i][column.start] = index++
        }
        column.start++
    }

    return results.flat()
}

/**
 * Generates an inward spiral matrix of size N x N, in a counter-clockwise direction.
 *
 * @param {number} N - The size of the square matrix to generate.
 * @returns {number[]} An inward spiral matrix in a counter-clockwise direction.
 */
export function inWardSpiral_ccw(N: number) {
    const results: number[][] = Array(N)
        .fill(0)
        .map(i => [])

    let row: MatrixInfo = createMatrixInfo(N)
    let column: MatrixInfo = createMatrixInfo(N)

    let index = 0

    while (row.start <= row.end && column.start <= column.end) {
        for (let i = row.start; i <= row.end; i++) {
            results[i][column.start] = index++
        }
        column.start++

        for (let i = column.start; i <= column.end; i++) {
            results[row.end][i] = index++
        }
        row.end--

        for (let i = row.end; i >= row.start; i--) {
            results[i][column.end] = index++
        }
        column.end--

        for (let i = column.end; i >= column.start; i--) {
            results[row.start][i] = index++
        }
        row.start++
    }

    return results.flat()
}

const { inWard_cw, inWard_ccw, outWard_cw } = require("matrix-art")

function visualizeLinearArray(input, N) {
    const output = Array(N)
        .fill(0)
        .map(_ => Array(N).fill(0))

    for (let row = 0; row < N; row++) {
        for (let column = 0; column < N; column++) {
            output[row][column] = input[(row * N) + column]
        }
    }

    console.table(output)
}

const N = 5
visualizeLinearArray(inWard_cw(N), N)
visualizeLinearArray(inWard_ccw(N), N)
visualizeLinearArray(outWard_cw(N), N)

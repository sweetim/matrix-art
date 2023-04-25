struct MatrixInfo {
    start: i32,
    end: i32,
}

impl MatrixInfo {
    pub fn create(n: i32) -> Self {
        MatrixInfo {
            start: 0,
            end: n - 1
        }
    }
}

struct Result {
    matrix: Vec<Vec<i32>>
}

impl Result {
    pub fn init(n: i32) -> Self {
        let n = n as usize;

        Self {
            matrix: vec![vec![0; n]; n]
        }
    }

    pub fn set(&mut self, row: i32, column: i32, value: i32) {
        self.matrix[row as usize][column as usize] = value
    }

    pub fn flatten(&self) -> Vec<i32> {
        self.matrix
            .clone()
            .into_iter()
            .flatten()
            .collect()
    }
}

/**
 * Generates an inward spiral matrix of size N x N, in a clockwise direction.
 *
 * @param {i32} N - The size of the square matrix to generate.
 * @returns {Vec<i32>} An inward spiral matrix in a clockwise direction.
 */
pub fn in_ward_cw(n: i32) -> Vec<i32> {
    if n < 0 {
        return Result::init(0).flatten();
    }

    let mut result = Result::init(n);

    let mut row = MatrixInfo::create(n);
    let mut column = MatrixInfo::create(n);

    let mut index = 0;

    while row.start <= row.end && column.start <= column.end {
        for i in column.start..=column.end {
            result.set(row.start, i, index);
            index += 1;
        }
        row.start += 1;

        for i in row.start..=row.end {
            result.set(i, column.end, index);
            index += 1;
        }
        column.end -= 1;

        for i in (column.start..=column.end).rev() {
            result.set(row.end, i, index);
            index += 1;
        }
        row.end -= 1;

        for i in (row.start..=row.end).rev() {
            result.set(i, column.start, index);
            index += 1;
        }
        column.start += 1;
    }

    result.flatten()
}

/**
 * Generates an inward spiral matrix of size N x N, in a counter-clockwise direction.
 *
 * @param {usize} N - The size of the square matrix to generate.
 * @returns {Vec<usize>} An inward spiral matrix in a counter-clockwise direction.
 */
pub fn in_ward_ccw(n: i32) -> Vec<i32> {
    if n < 0 {
        return Result::init(0).flatten();
    }

    let mut result = Result::init(n);

    let mut row = MatrixInfo::create(n);
    let mut column = MatrixInfo::create(n);

    let mut index = 0;

    while row.start <= row.end && column.start <= column.end {
        for i in row.start..=row.end {
            result.set(i, column.start, index);
            index += 1;
        }
        column.start += 1;

        for i in column.start..=column.end {
            result.set(row.end, i, index);
            index += 1;
        }
        row.end -= 1;

        for i in (row.start..=row.end).rev() {
            result.set(i, column.end, index);
            index += 1;
        }
        column.end -= 1;

        for i in (column.start..=column.end).rev() {
            result.set(row.start, i, index);
            index += 1;
        }
        row.start += 1;
    }

    result.flatten()
}

/**
 * Generates an outward spiral matrix of size N x N, in a clockwise direction.
 *
 * @param {usize} N - The size of the square matrix to generate.
 * @param {i32} cw - The direction of the spiral, either 1 or -1.
 * @returns {Vec<usize>} An outward spiral matrix in a clockwise direction.
 */
pub fn out_ward_cw(n: i32, cw: Option<i32>) -> Vec<i32> {
    let cw = cw.unwrap_or(1);

    let mut di = -1;
    let mut dj = 0;
    let mut segment_length = 1;
    let mut i = 0;
    let mut j = 0;
    let mut segment_passed = 0;

    let mut output = vec![vec![0; n as usize]; n as usize];
    let offset = if n % 2 == 0 {
        n / 2 - 1
    } else {
        n / 2
    };

    for k in 0..n * n {
        output[(i + offset) as usize][(-j + offset) as usize] = k;
        i += di;
        j += dj;
        segment_passed += 1;

        if segment_passed == segment_length {
            segment_passed = 0;
            let buffer = di;
            di = -dj * cw;
            dj = buffer * cw;

            if dj == 0 {
                segment_length += 1;
            }
        }
    }

    output
        .into_iter()
        .flatten()
        .collect()
}

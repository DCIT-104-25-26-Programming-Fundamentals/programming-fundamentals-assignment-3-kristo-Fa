// =============================================================================
// PROGRAMMING FUNDAMENTALS — Assignment 4
// =============================================================================
//
// TASK: Matrix Operations
//
// Write a JavaScript program that performs three operations on matrices
// (2D arrays), each implemented in its own function.
//
// In JavaScript, a matrix is represented as an array of arrays:
//   let matrix = [[1, 2, 3], [4, 5, 6]];   // 2 rows, 3 columns
//
// -----------------------------------------------------------------------------
// HOW TO RUN THIS PROGRAM
// -----------------------------------------------------------------------------
// 1. Install the input library (only once):  npm install readline-sync
// 2. Run the program:                        node assignment_04_matrix_operations.js
//
// -----------------------------------------------------------------------------
// PART A — Transpose a Matrix
// -----------------------------------------------------------------------------
// - Read an M x N matrix from the user.
// - Compute and display its transpose (rows become columns, columns become rows).
//
// Example (2 x 3 input):
//
//   Original Matrix:      Transposed Matrix:
//   1  2  3               1  4
//   4  5  6               2  5
//                         3  6
//
// -----------------------------------------------------------------------------
// PART B — Add Two Matrices
// -----------------------------------------------------------------------------
// - Read two matrices of exactly the same size (M x N).
// - Compute their element-wise sum and display the result.
//
// -----------------------------------------------------------------------------
// PART C — Multiply Two Matrices
// -----------------------------------------------------------------------------
// - Read matrix A of size M x N and matrix B of size N x P.
//   (Number of COLUMNS in A must equal number of ROWS in B.)
// - Compute and display the matrix product A x B (result is M x P).
//
// -----------------------------------------------------------------------------
// EXPECTED INPUT FORMAT
// -----------------------------------------------------------------------------
// When entering a row, the user types all values on one line separated by spaces:
//
//   Enter number of rows: 2
//   Enter number of columns: 3
//   Enter row 1: 1 2 3
//   Enter row 2: 4 5 6
//
// Hint: Use row.split(' ').map(Number) to convert a line of text into an array
// of numbers.
//
// -----------------------------------------------------------------------------
// REQUIREMENTS
// -----------------------------------------------------------------------------
// - Use nested loops for all operations (no external libraries).
// - Each operation must be in its own function (see scaffold below).
// - Display each matrix in a neat, aligned grid format.
// - Tip: Complete Part A first, then Parts B and C.
//

// =============================================================================
// YOUR CODE BELOW — remove the // symbols from the scaffold and fill it in
// =============================================================================

const readlineSync = require('readline-sync');


function readMatrix(rows, cols) {
    let matrix = [];
    for (let i = 0; i < rows; i++) {
        let rowInput = readlineSync.question("Enter row " + (i + 1) + ": ");
        let rowArray = rowInput.split(' ').map(Number);
        matrix.push(rowArray);
    }
    return matrix;
}

function displayMatrix(matrix) {
    for (let i = 0; i < matrix.length; i++) {
        let rowStr = "";
        for (let j = 0; j < matrix[i].length; j++) {
            rowStr += matrix[i][j].toString().padStart(6);
        }
        console.log(rowStr);
    }
}

function transposeMatrix(matrix) {
    let rows = matrix.length;
    let cols = matrix.length;
    let result = [];
    for (let j = 0; j < cols; j++) {
        result[j] = [];
        for (let i = 0; i < rows; i++) {
            result[j][i] = matrix[i][j];
        }
    }
    return result;
}

function addMatrices(matrixA, matrixB) {
    let rows = matrixA.length;
    let cols = matrixA.length;
    let result = [];
    for (let i = 0; i < rows; i++) {
        result[i] = [];
        for (let j = 0; j < cols; j++) {
            result[i][j] = matrixA[i][j] + matrixB[i][j];
        }
    }
    return result;
}

function multiplyMatrices(matrixA, matrixB) {
    let M = matrixA.length;
    let N = matrixA.length;
    let P = matrixB.length;
    let result = [];
    for (let i = 0; i < M; i++) {
        result[i] = [];
        for (let j = 0; j < P; j++) {
            let sum = 0;
            for (let k = 0; k < N; k++) {
                sum += matrixA[i][k] * matrixB[k][j];
            }
            result[i][j] = sum;
        }
    }
    return result;
}

function main() {
    console.log("--- PART A: Transpose ---");
    let rowsA = readlineSync.questionInt("Enter number of rows: ");
    let colsA = readlineSync.questionInt("Enter number of columns: ");
    let matrixA = readMatrix(rowsA, colsA);

    console.log("\nOriginal Matrix:");
    displayMatrix(matrixA);

    let transposed = transposeMatrix(matrixA);
    console.log("\nTransposed Matrix:");
    displayMatrix(transposed);

    console.log("\n--- PART B: Addition ---");
    let rowsB = readlineSync.questionInt("Enter number of rows: ");
    let colsB = readlineSync.questionInt("Enter number of columns: ");
    console.log("Matrix 1:");
    let matB1 = readMatrix(rowsB, colsB);
    console.log("Matrix 2:");
    let matB2 = readMatrix(rowsB, colsB);

    let sumResult = addMatrices(matB1, matB2);
    console.log("\nSum of Matrices:");
    displayMatrix(sumResult);

    console.log("\n--- PART C: Multiplication ---");
    let m = readlineSync.questionInt("Enter rows for Matrix A: ");
    let n = readlineSync.questionInt("Enter columns for Matrix A (and rows for B): ");
    let p = readlineSync.questionInt("Enter columns for Matrix B: ");

    console.log("Matrix A:");
    let matC1 = readMatrix(m, n);
    console.log("Matrix B:");
    let matC2 = readMatrix(n, p);

    let productResult = multiplyMatrices(matC1, matC2);
    console.log("\nProduct of Matrices (A x B):");
    displayMatrix(productResult);
}

main();

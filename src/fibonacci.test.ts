// import {
//   fibonacciIterative,
//   fibonacciRecursive,
//   fibonacciMemo
// } from './fibonacci';

// const cases: Array<[number, number]> = [
//   [0, 0],
//   [1, 1],
//   [2, 1],
//   [3, 2],
//   [5, 5],
//   [10, 55],
//   [15, 610],
// ];

// describe('Pruebas ampliadas de Fibonacci', () => {
//   test.each(cases)('Iterativa: F(%i) = %i', (n, expected) => {
//     expect(fibonacciIterative(n)).toBe(expected);
//   });

//   test.each(cases)('Recursiva simple: F(%i) = %i', (n, expected) => {
//     expect(fibonacciRecursive(n)).toBe(expected);
//   });

//   test.each(cases)('Memoizada: F(%i) = %i', (n, expected) => {
//     expect(fibonacciMemo(n)).toBe(expected);
//   });
// });

// describe('Casos límite y validaciones', () => {
//   test('Debe lanzar RangeError si n es negativo', () => {
//     expect(() => fibonacciIterative(-1)).toThrow(RangeError);
//     expect(() => fibonacciRecursive(-1)).toThrow(RangeError);
//     expect(() => fibonacciMemo(-1)).toThrow(RangeError);
//   });

//   test('Debe lanzar TypeError si n no es entero', () => {
//     // @ts-ignore Forzamos número no entero para test
//     expect(() => fibonacciIterative(3.5)).toThrow(TypeError);
//     // @ts-ignore
//     expect(() => fibonacciRecursive(3.5)).toThrow(TypeError);
//     // @ts-ignore
//     expect(() => fibonacciMemo(3.5)).toThrow(TypeError);
//   });

//   test('La versión recursiva simple no debe lanzar errores para n moderados', () => {
//     expect(() => fibonacciRecursive(20)).not.toThrow();
//   });
// });

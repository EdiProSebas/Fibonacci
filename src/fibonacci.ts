// src/fibonacci.ts

import { MathLogger } from "./mathLogger";

export function fibonacciWithLogging(n: number, logger: MathLogger): number {
  if (!Number.isInteger(n)) {
    throw new TypeError("El valor debe ser un número entero");
  }
  if (n < 0) {
    throw new RangeError("El valor debe ser mayor o igual que 0");
  }

  logger.logOperation("fibonacci", n);

  if (n < 2) return n;

  let a = 0;
  let b = 1;

  for (let i = 2; i <= n; i++) {
    const temp = a + b;
    a = b;
    b = temp;
  }

  return b;
}

export function fibonacciRecursive(n: number): number {
  if (!Number.isInteger(n)) throw new TypeError('n debe ser un entero');
  if (n < 0) throw new RangeError('n debe ser >= 0');
  if (n < 2) return n;
  return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
}

// Recursiva con memoization
const memo: Record<number, number> = {};

export function fibonacciMemo(n: number): number {
  if (!Number.isInteger(n)) throw new TypeError('n debe ser un entero');
  if (n < 0) throw new RangeError('n debe ser >= 0');

  if (n in memo) return memo[n];
  if (n < 2) return n;

  memo[n] = fibonacciMemo(n - 1) + fibonacciMemo(n - 2);
  return memo[n];
}
// src/fibonacci.logging.test.ts
import { fibonacciWithLogging } from './fibonacci';
import { MathLogger } from './mathLogger';

describe('fibonacciWithLogging — interacción con MathLogger', () => {
  // Mock de la instancia: solo necesitamos mockear logOperation
  let mockLogger: MathLogger & { logOperation: jest.Mock };

  beforeEach(() => {
    mockLogger = {
      // @ts-ignore: satisface la forma de MathLogger para las pruebas
      logOperation: jest.fn(),
    } as unknown as MathLogger & { logOperation: jest.Mock };

    jest.clearAllMocks();
  });

  test('Debe llamar a logOperation una vez con ("fibonacci", n) para entrada válida', () => {
    const n = 7;
    const result = fibonacciWithLogging(n, mockLogger);
    // Comprobación funcional adicional
    expect(result).toBeGreaterThanOrEqual(0);
    // Verificar interacción
    expect(mockLogger.logOperation).toHaveBeenCalledTimes(1);
    expect(mockLogger.logOperation).toHaveBeenCalledWith('fibonacci', n);
  });

  test('No debe llamar a logOperation si n es negativo (error antes de la invocación)', () => {
    const n = -3;
    expect(() => fibonacciWithLogging(n, mockLogger)).toThrow(RangeError);
    expect(mockLogger.logOperation).not.toHaveBeenCalled();
  });

  test('No debe llamar a logOperation si n no es entero (TypeError)', () => {
    // @ts-ignore: forzamos un no entero para la prueba
    expect(() => fibonacciWithLogging(4.2, mockLogger)).toThrow(TypeError);
    expect(mockLogger.logOperation).not.toHaveBeenCalled();
  });
});

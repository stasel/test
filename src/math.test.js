import { describe, it, expect } from 'vitest';
import { add, subtract, multiply } from './math.js';

describe('add', () => {
  it('adds two positive numbers', () => {
    expect(add(2, 3)).toBe(5);
  });

  it('adds a negative and a positive number', () => {
    expect(add(-1, 4)).toBe(3);
  });
});

describe('subtract', () => {
  it('subtracts two numbers', () => {
    expect(subtract(10, 4)).toBe(6);
  });

  it('returns a negative result', () => {
    expect(subtract(3, 7)).toBe(-4);
  });
});

describe('multiply', () => {
  it('multiplies two numbers', () => {
    expect(multiply(3, 4)).toBe(12);
  });

  it('multiplying by zero returns zero', () => {
    expect(multiply(5, 0)).toBe(0);
  });
});

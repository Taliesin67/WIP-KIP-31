/**
 * Core utility functions for project testing
 */
export function add(a: number, b: number): number {
  return a + b;
}

export function subtract(a: number, b: number): number {
  return a - b;
}

export function validateInput(input: string | null | undefined): boolean {
  return input !== null && input !== undefined && input.trim() !== '';
}
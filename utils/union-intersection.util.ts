// The type operator | is used to create union types:

type A = 'a' | 'b' | 'c';
type B = 'b' | 'c' | 'd';

type Union = A | B;

// !!!TypeScript represents collections of metavalues as unions of literal types.

type Intersection = A & B; // The members of the result are members of both operands.

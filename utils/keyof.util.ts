// In JavaScript it is fairly common to have APIs that expect property names as parameters,
// but so far it hasn’t been possible to express the type relationships that occur in those APIs.

// An indexed type query keyof T yields the type of permitted property names for T.
// A keyof T type is considered a subtype of string.

interface Person {
  name: string;
  age: number;
  location: string;
}

type K1 = keyof Person;
type K2 = keyof Person[];
type K3 = keyof { [x: string]: Person };

// !!!Indexed access operator
// The dual of this is indexed access types, also called lookup types.
// Syntactically, they look exactly like an element access, but are written as types:
type P1 = Person['age'];
type P20 = Person['name' | 'age'];
type P21 = Person['name'] | Person['age']; // same

// You can use this pattern with other parts of the type system to get type-safe lookups.

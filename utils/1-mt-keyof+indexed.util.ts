// ### Indexed type query
// An indexed type query keyof T yields the type of permitted property names for T.
// A keyof T type is considered a subtype of string.
interface Person {
  name: string;
  age: number;
  birthDate: Date;
}

type K1 = keyof Person;
type K2 = keyof Person[];

// !!!Indexed access operator (lookup types)
// The dual of this is indexed access types, also called lookup types.
// Syntactically, they look exactly like an element access, but are written as types:
type P1 = Person['age'];
// Distributivity: same as -> Person['name'] | Person['age'] | Person['birthDate']
type P2 = Person['name' | 'age' | 'birthDate'];

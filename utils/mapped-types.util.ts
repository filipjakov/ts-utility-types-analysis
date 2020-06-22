// https://mariusschulz.com/blog/mapped-types-in-typescript
// A common task is to take an existing type and make each of its properties optional or readonly (for example)
// This happens often enough in JavaScript that TypeScript provides a way to create new types based on old types — mapped types.
// In a mapped type, the new type transforms each property in the old type in the same way.

// type Readonly<T> = {
//   readonly [P in keyof T]: T[P];
// }

// Note that this syntax describes a type rather than a member. If you want to add members, you can use an intersection type.

// Repetition
type options = {
  option1: boolean;
  readonly option2: boolean;
  option3?: boolean;
}

type Keys = 'option1' | 'option2';
type Flags = { [K in Keys]: boolean };
type Flags2 = { [K in keyof options]: boolean }
type Flags3 = { -readonly [K in keyof options]: boolean }
type Flags4 = { [K in keyof options]-?: boolean }

// type Flags = {
//   [K in 'option1' | 'option2']: boolean
// }
// type Flags = {
//   option1: boolean;
//   option2: boolean;
// }

// !!!
// A mapped type produces an object by looping over a collection of keys 
// The operator in is a crucial part of a mapped type: It specifies where the keys for the new object literal type come from.

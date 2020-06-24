type A = 'a' | 'b' | 'c';
type B = 'b' | 'c' | 'd';
type C = {
  propA: string;
  sharedProp: string;
}
type D = {
  propB: string;
  sharedProp: string;
}

// !!!TypeScript represents collections of metavalues as unions of literal types.
type Union = A | B;
type UnionObj = C | D;

// To access non-shared properties, we need a type guard
function func(arg: UnionObj) {
  arg.sharedProp; 
  arg.propB;

  if ('propB' in arg) { // type guard
    arg.propB;
  }
}

// If we view type A and type B as sets, then A & B is the set-theoretic intersection of these sets.
// Put differently: The members of the result are members of both operands.
type Intersection = A & B;

// The intersection of two object types has the properties of both types:
type IntersectionObj = C & D;
let shared: IntersectionObj = { propA: "", propB: "", sharedProp: "" };

// Intersection types are often used for mixins and other concepts that don’t fit in the classic object-oriented mold.
type LinkedList<T> = T & { next: LinkedList<T> };
interface Animal {
  name: string;
}
let animals: LinkedList<Animal>; // { name: string; } & { next: LinkedList<{ name: string; }> }
// @ts-ignore
animals.next.next.next.next.next.next.name

/**
 * ### TIP ###
 * Because an ideal property of software is being open to extension, you should always use an interface over a type alias if possible.
 * On the other hand, if you can’t express some shape with an interface and you need to use a union or tuple type, type aliases are usually the way to go
 */

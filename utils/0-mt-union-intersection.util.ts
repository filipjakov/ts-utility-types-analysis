// !!!TypeScript represents collections of metavalues as unions of literal types.
// type A = 'a' | 'b' | 'c' | Promise<any>;
type A = 'a' | 'b' | 'c';
type B = 'b' | 'c' | 'd';

// In traditional object-oriented code, we might abstract over the two types by creating a hierarchy of types
type Union = A | B;
// Intersection types are often used for mixins and other concepts that don’t fit in the classic object-oriented mold.
type Intersection = A & B;

// Example
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

/**
 * It represents any non-primitive type. The following types are considered to be primitive types in JavaScript:
 * - string
 * - boolean
 * - number
 * - bigint
 * - symbol
 * - null
 * - undefined
*/

// All primitive types
type Primitive =
  | string
  | boolean
  | number
  | bigint
  | symbol
  | null
  | undefined;

// All non-primitive types
type NonPrimitive = object;

// Example
type ObjectCreate = Parameters<typeof Object.create>
const proto = {};

Object.create(proto);
Object.create(null);
Object.create(undefined);
Object.create(123);
Object.create(true);
Object.create("oops");

// ###object vs. Object vs. {}
// Object - describes functionality that is common to all JavaScript objects
type funcs = keyof Object;

// The empty type -> {} - It describes an object that has no members on its own// Type {}
const obj = {};
obj.prop = "value";
obj.toString();
type EmptyType = typeof obj;
type EmptyTypeKeys = keyof typeof obj;

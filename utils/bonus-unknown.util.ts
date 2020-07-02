// type-safe counterpart of the any type.
let value: any;

value = true;
value = 42;
value = "Hello World";
value = [];
value = {};
value = Math.random;
value = null;
value = undefined;
value = new TypeError();
value = Symbol("type");

value.foo.bar;
value.trim();
value();
new value();
value[0][1]; 

// What if there were a top type that was safe by default?
let val: unknown;

// All types are assignable to unknown
val = true;
val = 42;
val = "Hello World";
val = [];
val = {};
val = Math.random;
val = null;
val = undefined;
val = new TypeError();
val = Symbol("type");

// The unknown type is only assignable to the any type and the unknown type itself
let value1: unknown = val;
let value2: any = val;
let value3: boolean = val;
let value4: number = val;
let value5: string = val;
let value6: object = val;
let value7: any[] = val;
let value8: Function = val;

val.foo.bar;
val.trim();
val();
new val();
val[0][1];

// Intuition: only a container that is capable of holding values of arbitrary types can hold a value of type unknown
// Narrowing unknown
function stringifyForLogging(value: unknown): string {
  if (typeof value === "function") {
    // Within this branch, `value` has type `Function`,
    // so we can access the function's `name` property
    const functionName = value.name || "(anonymous)";
    return `[function ${functionName}]`;
  }

  if (value instanceof Date) {
    // Within this branch, `value` has type `Date`,
    // so we can call the `toISOString` method
    return value.toISOString();
  }

  const force = value as string;
  return String(value);
}

// Unknown in unions -> unknown absorbs every type.
type UnionType1 = unknown | null;
type UnionType2 = unknown | undefined;
type UnionType3 = unknown | any;
type UnionType4 = unknown | { a: string };

// As we've learned before, all types are assignable to unknown
// This includes all strings, and therefore, unknown | string represents the same set of values as unknown itself.
// Hence, the compiler can simplify the union type to unknown.
type UnionType5 = string | unknown;

// Unknown in intersections -> every type absorbs unknown
type IntersectionType1 = unknown & null;
type IntersectionType2 = unknown & undefined;

// Since every type is assignable to unknown, including unknown in an intersection type does not change the result.
// We're left with just string.
type IntersectionType3 = unknown & string;

/**
 * Only 4 operators can be used on unknown:
 * - ===
 * - ==
 * - !==
 * - !=
 */

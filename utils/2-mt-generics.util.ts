// Being able to create a component that can work over a variety of types rather than a single one.
// This allows users to consume these components and use their own types.

// Generic types are functions at the metalevel – for example:
type Wrap<T> = [T];
type Wrapped = Wrap<string>;

// #Hello world of generics -> The identity function
// Use case -> default value for function argument?
function identity(arg: number): number
function identity(arg: string): string
function identity(arg: any): any {
  return arg;
}

// While using any is certainly generic in that it will cause the function to accept any and all types for the type of arg,
// we actually are losing the information about what that type was when the function returns.
// If we passed in a number, the only information we have is that any type could be returned.
// T -> type variable
function i<T>(arg: T): T {
  return arg;
}

// 2 ways to call - with and without the type information
const n0 = i(11); // type argument inference – we want the compiler to set the value of T for us automatically based on the type of the argument we pass in
const n1 = i<number>(11); // may happen in more complex examples.

// Interfaces or classes also
// interface GenericIdentityFn<T> {
//   (arg: T): T;
// }
// class GenericNumber<T> {
//   zeroValue: T;
//   add: (x: T, y: T) => T;
// }

function loggingIdentity<T extends ArrayLike<any>>(arg: T): T {
  console.log(arg.length);  // Error: T doesn't have .length
  return arg;
}

// TODO: Using Type Parameters in Generic Constraints #
function getProperty<T, K extends keyof T>(obj: T, key: K) {
  return obj[key];
}

// We can also have a type alias refer to itself in a property via generics
type Tree<T> = {
  value: T;
  left?: Tree<T>;
  right?: Tree<T>;
}

// interface Treez<T> {
//   value: T;
//   left?: TreeZ<T>;
//   right?: TreeZ<T>;
// }

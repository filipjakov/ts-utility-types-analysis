// https://www.typescriptlang.org/docs/handbook/generics.html
// Being able to create a component that can work over a variety of types rather than a single one.
// This allows users to consume these components and use their own types.

// Generic types are functions at the metalevel – for example:
type Wrap<T> = [T];
type Wrapped = Wrap<string>;

// #Hello world of generics -> The identity function
function identity(arg: number): number
function identity(arg: string): string
function identity(arg: any): any {
  return arg;
}

// While using any is certainly generic in that it will cause the function to accept any and all types for the type of arg, we actually are losing the information about what that type was when the function returns.
// If we passed in a number, the only information we have is that any type could be returned.
// T -> type variable
function i<T>(arg: T): T {
  return arg;
}

// 2 ways to call - with and without the type information
const n = i(11);

// type argument inference – we want the compiler to set the value of T for us automatically based on the type of the argument we pass in
const array = i([1, 2]);

// While type argument inference can be a helpful tool to keep code shorter and more readable,
// you may need to explicitly pass in the type arguments as we did in the previous example when the compiler fails to infer the type,
// as may happen in more complex examples.
const touple = i<[number, number]>([1, 2]); // Knows it's a touple


// Interfaces or classes
// interface GenericIdentityFn<T> {
//   (arg: T): T;
// }
// class GenericNumber<T> {
//   zeroValue: T;
//   add: (x: T, y: T) => T;
// }

function loggingIdentity<T>(arg: T): T {
  console.log(arg.length);  // Error: T doesn't have .length
  return arg;
}

// function loggingIdentity<T>(arg: T[]): T[] {
//   console.log(arg.length);  // Array has a .length, so no more error
//   return arg;
// }

// Generic contraints
// interface Lengthwise {
//   length: number;
// }

// function loggingIdentity<T extends Lengthwise>(arg: T): T {
//   console.log(arg.length);  // Now we know it has a .length property, so no more error
//   return arg;
// }

// TODO: Using Type Parameters in Generic Constraints #
function getProperty<T, K extends keyof T>(obj: T, key: K) {
  return obj[key];
}


// 1. Type variable - ex identity
// 2. 2 ways to call - with and without the type information
// 3. functions, interfaces, classes
// 4. generic constraints

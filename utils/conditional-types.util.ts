// https://mariusschulz.com/blog/conditional-types-in-typescript
// Conditional types let us express non-uniform type mappings, that is, type transformations that differ depending on a condition.
// conditional type describes a type relationship test and selects one of two possible types, depending on the outcome of that test. It always has the following form:

// T extends U ? X : Y
// If the type T is assignable to the type U, select the type X; otherwise, select the type Y.

/**
 * So why is the combination of a conditional type and the never type useful?
 * It effectively allows us to remove constituent types from a union type.
 * If the relationship test in the conditional type checks a naked type parameter, the conditional type is called a distributive conditional type, and it is distributed over a union type when that union type is instantiated.
 */

type EmailAddress = string | string[] | null | undefined;

type S0 = NonNullable<EmailAddress>;

type S1 = NonNullable<
  | string
  | string[]
  | null
  | undefined
>;

type S2 =
  | NonNullable<string>
  | NonNullable<string[]>
  | NonNullable<null>
  | NonNullable<undefined>;

type S3 =
  | (string extends null | undefined ? never : string)
  | (string[] extends null | undefined ? never : string[])
  | (null extends null | undefined ? never : null)
  | (undefined extends null | undefined ? never : undefined);

type S4 =
  | string
  | string[]
  | never
  | never;

type S5 = string | string[];

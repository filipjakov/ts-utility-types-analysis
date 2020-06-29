export namespace Never {
  // Characteristics:
  // - never is a subtype of and assignable to every type.
  // - no type is a subtype of or assignable to never (except never itself).
  type T1<T extends string> = [T];
  type T11 = T1<never>;

  type T2<T extends never> = [T];
  type T21 = T2<string>;

  type T3 = string | never;


  // - functions That Never Return
  const sing = function() {
    while (true) {
      console.log('loop')
    }
  };

  const failwith = (message: string) => {
    throw new Error(message);
  };

  // - variables with Impossible Types
  function controlFlowAnalysisWithNever(
    value: string | number
  ) {
    if (typeof value === "string") {
      value; // Type string
    } else if (typeof value === "number") {
      value; // Type number
    } else {
      value; // Type never
    }
  }


  // The Difference Between never and void:
  // 1. A function that doesn't explicitly return a value implicitly returns the value undefined in JavaScript.
  // Although we typically say that such a function "doesn't return anything", it returns.
  // We usually ignore the return value in these cases. Such a function is inferred to have a void return type in TypeScript.
  // 2. A function that has a never return type never returns. It doesn't return undefined, either.
  // The function doesn't have a normal completion, which means it throws an error or never finishes running at all.

  // Type theory, the never type is a bottom type (⊥), also known as a zero type or an empty type

  // ### backward compatibility:
  // Return type: void
  function failwith1(message: string) { // -> must explicitly annotate
    throw new Error(message);
  }

  // Return type: never
  const failwith2 = function(message: string) {
    throw new Error(message);
  };

  /**
   * So why is the combination of a conditional type and the never type useful?
   * It effectively allows us to remove constituent types from a union type.
   * If the relationship test in the conditional type checks a naked type parameter,
   * the conditional type is called a distributive conditional type,
   * and it is distributed over a union type when that union type is instantiated.
   */

  type EmailAddress = string | string[] | null | undefined;

  type cNonNullable<T> = T extends null | undefined ? never : T;
  type S0 = cNonNullable<EmailAddress>;

  type S1 = cNonNullable<
    | string
    | string[]
    | null
    | undefined
  >;

  type S2 =
    | cNonNullable<string>
    | cNonNullable<string[]>
    | cNonNullable<null>
    | cNonNullable<undefined>;

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
}


export namespace Extract {
  // ### 1. Give definition - Extract<T, U>
  // Constructs a type by extracting from T all properties that are assignable to U.
  // ### 2. Try out the original
  type T0 = Extract<"a" | "b" | "c", "a" | "f">;  // "a"
  type T1 = Extract<string | number | (() => void), Function>;  // () => v

  // ### 3. Custom example - reverse engineer + custom destructure
  type cExtract<T, U> = T extends U ? T : never;
  // Steps destructured
  type S0 = cExtract<"a" | "b" | "c", "a" | "f">;
  type S1 = 
    | cExtract<"a", "a" | "f">
    | cExtract<"b", "a" | "f">
    | cExtract<"c", "a" | "f">;
  type S2 =
    | "a" extends "a" | "f" ? "a" : never
    | "b" extends "a" | "f" ? "b" : never
    | "c" extends "a" | "f" ? "c" : never;
  type S3 = 
    | "a"
    | never
    | never;
  type S4 = "a";
}

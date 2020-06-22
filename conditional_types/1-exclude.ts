export namespace Exclude {
  // ### 1. Give definition - Pick<T, K>
  // Constructs a type by extracting from T all properties that are assignable to U.
  // ### 2. Try out the original
  // ### 3. Example
  type T0 = Extract<"a" | "b" | "c", "a" | "f">;  // "a"
  type T1 = Extract<string | number | (() => void), Function>;  // () => v
  // ### 4. Custom example - reverse engineer + custom destructure
  type cExtract<T, U> = T extends U ? T : never;
  // Steps destructured
}

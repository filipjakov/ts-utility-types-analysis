export namespace Exclude {
  // ### 1. Give definition - Exclude<T, U>
  // Exclude from T those types that are assignable to U
  type T0 = Exclude<"a" | "b" | "c", "a" | "f">;

  // 2. Custom + re
  type cExclude<T, U> = T extends U ? never : T

  type S0 = cExclude<"a" | "b" | "c", "a" | "f">;
  type S1 =
    | cExclude<"a", "a" | "f">
    | cExclude<"b", "a" | "f">
    | cExclude<"c", "a" | "f">;
  type S2 =
    | "a" extends ("a" | "f") ?  never : "a"
    | "b" extends ("a" | "f") ?  never : "b"
    | "c" extends ("a" | "f") ?  never : "c";
  type S3 =
    | never
    | "b"
    | "c"
  type S4 = "b" | "c";
}

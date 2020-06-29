export namespace Omit {
  // ### 1. Definition - Omit<T, K>
  // Constructs a type by picking all properties from T and then removing K.
  // ### 2. Example
  type User = {
    id: string;
    name: string;
    email: string;
  };
  
  type PreviewUser = Omit<User, "email">;

  // ### 3. Custom example - reverse engineer + custom destructure
  type cOmit<T, K extends keyof any> = Pick<T, Exclude<keyof T, K>>
  // Improvement?
  // type cOmit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>

  type S0 = cOmit<User, "email">;
  type S1 = Pick<User, Exclude<keyof User, "email">>;
  
  // Exclude
  type S2_E0 = Exclude<keyof User, "email">;
  type S2_E1 = Exclude<"id" | "name" | "email", "email">; // Exclude
  type S2_E2 = "id" | "name"; // -->
  type S2_P0 = Pick<User, "id" | "name">; // Pick

  // Alternative Approach:
  type A0 = cOmit<User, "email">;
  type A1 = Pick<User, Exclude<keyof User, "email">>;
  type A2 = Pick<
    User,
    Exclude<"id" | "name" | "email", "email">
  >;
  type A3 = Pick<
    User,
    | Exclude<"id", "email">
    | Exclude<"name", "email">
    | Exclude<"email", "email">
  >;
  type A4 = Pick<
    User,
    | ("id" extends "email" ? never : "id")
    | ("name" extends "email" ? never : "name")
    | ("email" extends "email" ? never : "email")
  >;
  type A5 = Pick<User, "id" | "name" | never>;
  type A6 = Pick<User, "id" | "name">;
  type A7 = {
    [P in "id" | "name"]: User[P];
  };
  type A8 = {
    id: User["id"],
    name: User["name"]
  };
  type A9 = {
    id: string;
    name: string;
  };
}

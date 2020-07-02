export namespace AdvancedUtility {
  type NonNullablePropertyKeys<T> = {
    [P in keyof T]: null extends T[P] ? never : P
  }[keyof T];
  
  type User = {
    name: string;
    email: string | null;
  };
  
  type NonNullableUserPropertyKeys = NonNullablePropertyKeys<User>;

  type S0 = {
    [P in keyof User]: null extends User[P] ? never : P
  }[keyof User];

  type S1 = {
    [P in "name" | "email"]: null extends User[P] ? never : P
  }[keyof User];

  type S2 = {
    name: null extends User["name"] ? never : "name";
    email: null extends User["email"] ? never : "email";
  }[keyof User];

  type S3 = {
    name: null extends string ? never : "name";
    email: null extends string | null ? never : "email";
  }[keyof User];

  type S4 = {
    name: "name";
    email: never;
  }[keyof User];

  type S5 = {
    name: "name";
    email: never;
  }["name" | "email"];

  type S6 =
    | { name: "name"; email: never }["name"]
    | { name: "name"; email: never }["email"];

  type S7 =
    | "name"
    | never;

  type S8 = "name";

  // Example - composition
  type NonNullableProperties<T> = Pick<T, NonNullablePropertyKeys<T>>;
  type NonNullableUserProperties = NonNullableProperties<User>;
}


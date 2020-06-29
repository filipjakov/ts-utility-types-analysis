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
  // Improvment?
  // type cOmit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>

  // Pick<T, K extends keyof T> = { [P in K]: T[P]; } + Exclude<T, U> = T extends U ? never : T;
  type S0 = cOmit<User, "email">;
  type S1 = Pick<User, Exclude<keyof User, "email">>;
  
  // Exclude
  type S2_E0 = Exclude<keyof User, "email">;
  type S2_E1 = Exclude<"id" | "name" | "email", "email">;
  type S2_E2 = "id" | "name"
  
  // Pick
  type S2_P0 = Pick<User, "id" | "name">
}

export namespace Parameters {
  // 1. Definition - Parameters<T>
  // Constructs a tuple type of the types of the parameters of a function type T.
  // 2. Example
  declare function f1(arg: { a: number, b: string }): void
  type T0 = Parameters<() => string>;
  type T1 = Parameters<(s: string) => void>;
  type T2 = Parameters<(<T>(arg: T) => T)>;
  type T4 = Parameters<typeof f1>;
  type T5 = Parameters<any>;
  type T6 = Parameters<never>;
  type T7 = Parameters<string>;
  type T8 = Parameters<Function>;

  // 3. Custom + re
  type cParameters<T extends (...args: any) => any> = T extends (...args: infer P) => any ? P : never;
}

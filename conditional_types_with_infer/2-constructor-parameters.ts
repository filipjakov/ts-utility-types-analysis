export namespace ConstructorParameters {
  // 1. Definition - ConstructorParameters<T>
  // Constructs a tuple type of the types of the parameters of a function type T.
  // 2. Example
  type T0 = ConstructorParameters<ErrorConstructor>;
  type T1 = ConstructorParameters<FunctionConstructor>;
  type T2 = ConstructorParameters<RegExpConstructor>;

  // 3. Custom + re
  // new keyword that indicates that the function can be constructed.
  type ConstructorParameters<T extends new (...args: any) => any> = T extends new (...args: infer P) => any ? P : never;
}

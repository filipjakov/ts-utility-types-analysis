export namespace ReturnType {
  // 1. Definition - ReturnType<T>
  // Constructs a type consisting of the return type of function T.
  // 2. Example
  declare function f1(): { a: number, b: string }
  type T0 = ReturnType<() => string>;
  type T1 = ReturnType<(s: string) => void>;
  type T2 = ReturnType<(<T>() => T)>;
  type T3 = ReturnType<(<T extends U, U extends number[]>() => T)>;
  type T4 = ReturnType<typeof f1>;
  type T5 = ReturnType<any>;
  type T6 = ReturnType<never>;
  type T7 = ReturnType<string>;
  type T8 = ReturnType<Function>;

  // 3. Custom + re
  // new keyword that indicates that the function can be constructed.
  type ReturnType<T extends (...args: any) => any> = T extends (...args: any) => infer R ? R : any;

  // Async example
  // async function f2() {
  //   return Promise.resolve(1);
  // }
  declare function f2(): Promise<number>;
  type retf0 = ReturnType<typeof f2>;

  // Custom
  type AsyncReturnType<T extends (...args: any) => any> =
    T extends (...args: any) => Promise<infer U>
      ? U 
      : ReturnType<T>

  type retf1 = AsyncReturnType<typeof f1>;
  type retf2 = AsyncReturnType<typeof f2>;
}

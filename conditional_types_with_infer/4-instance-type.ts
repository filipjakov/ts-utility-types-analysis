export namespace InstanceType {
  // 1. Definition - InstanceType<T>
  // Constructs a type consisting of the return type of function T.
  // 2. Example
  class C {
    x = 0;
    y = 0;
  }
  type T0 = InstanceType<typeof C>;  // C
  type T1 = InstanceType<any>;  // any
  type T2 = InstanceType<never>;  // any
  type T3 = InstanceType<string>;  // Error
  type T4 = InstanceType<Function>;  // Error

  // 3. Custom + re
  // new keyword that indicates that the function can be constructed.
  type InstanceType<T extends new (...args: any) => any> = T extends new (...args: any) => infer R ? R : any
}

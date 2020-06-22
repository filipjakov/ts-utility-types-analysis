# ts-utility-types-analysis
Reverse engineering Typescript's utility types:

- Partial<T> - mapped type
- Readonly<T> - mapped type
- Record<K,T> - mapped type
- Pick<T,K> - mapped type
- Omit<T,K> - conditional type (pick + exclude)
- Exclude<T,U> - conditional type
- Extract<T,U> - conditional type
- NonNullable<T> - conditional type
- Parameters<T> - conditional + infer
- ConstructorParameters<T> - conditional + infer
- ReturnType<T> - conditional + infer
- InstanceType<T> - conditional + infer
- Required<T> - mapped type
- ThisParameterType<T> - conditional + infer
- OmitThisParameter<T> - conditional + infer
- ThisType<T> - ???

Source: https://github.com/microsoft/TypeScript/blob/master/lib/lib.es5.d.ts

1. Types as metavalues

Consider the following two levels of TypeScript code:
- Program level: At runtime, we can use values and functions.
- Type level: At compile time, we can use specific types and generic types.

The type level is a metalevel of the program level.

| Level   | Available at | Operands       | Operations    |
|---------|--------------|----------------|---------------|
| Program | Runtime      | Values         | Functions     |
| Type    | Compile time | Specific types | Generic types |

```ts
type ObjectLiteralType = {
  first: 1,
  second: 2,
};

type Result = keyof ObjectLiteralType; // (A)
```

In line A, we are taking the following steps:

- The input of our computation is the type ObjectLiteralType, an object literal type.
- We apply the operation keyof to the input. It lists the property keys of an object type.
- We give the output of keyof the name Result.

```js
const ObjectLiteralType = {
  first: 1,
  second: 2,
};

console.log(Object.keys(ObjectLiteralType));
```

## Resources

- Generics:
  - https://www.typescriptlang.org/docs/handbook/generics.html
  - https://mariusschulz.com/blog/generic-parameter-defaults-in-typescript

- Mapped types:
  - https://mariusschulz.com/blog/mapped-types-in-typescript

- Types vs. interfaces:
  - https://stackoverflow.com/questions/37233735/typescript-interfaces-vs-types

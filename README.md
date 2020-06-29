# ts-utility-types-analysis
Analysing and reverse engineering Typescript's utility types:

- [x] Partial<T> - mapped type
- [x] Readonly<T> - mapped type
- [x] Record<K,T> - mapped type
- [x] Pick<T,K> - mapped type
- [x] Omit<T,K> - conditional type (pick + exclude)
- [x] Exclude<T,U> - conditional type
- [x] Extract<T,U> - conditional type
- [x] NonNullable<T> - conditional type
- [x] Parameters<T> - conditional + infer
- [x] ConstructorParameters<T> - conditional + infer
- [x] ReturnType<T> - conditional + infer
- [x] InstanceType<T> - conditional + infer
- [x] Required<T> - mapped type
- [ ] ThisParameterType<T> - conditional + infer
- [ ] OmitThisParameter<T> - conditional + infer
- [ ] ThisType<T> - ???

Source: https://github.com/microsoft/TypeScript/blob/master/lib/lib.es5.d.ts

## Types as metavalues

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

## Content

1. mapped types
  - union and intersection
  - indexed type query and indexed access operator
  - generics
  - mapped types
2. conditional types
  - conditionals
  - "naked" type parameters
  - never
3. conditional types with infer
  - infering
4. Bonus
  - object
  - unknown

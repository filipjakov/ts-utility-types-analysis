// !!!Within the extends clause of a conditional type,
// we can use the new infer keyword to infer a type variable,
// effectively performing pattern matching on types:

type Unpromisify<T> = T extends Promise<infer R> ? R : T
type Unpromised = Unpromisify<Promise<string>>;

type First<T> = T extends [infer U, ...unknown[]] ? U : never;
type FirstElementType = First<[string, number, boolean]>;

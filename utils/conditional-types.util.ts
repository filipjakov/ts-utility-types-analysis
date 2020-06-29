// Conditional types let us express non-uniform type mappings -> type transformations that differ depending on a condition.
// conditional type describes a type relationship test and selects one of two possible types, depending on the outcome of that test.
// It always has the following form: T extends U ? X : Y
// If the type T is assignable to the type U, select the type X; otherwise, select the type Y.

type StupidType<T> = T extends string ? String: number;
type Stupid1 = StupidType<string>;
type Stupid2 = StupidType<object>;

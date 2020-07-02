// It always has the following form: T extends U ? X : Y
// If the type T is assignable to the type U, select the type X; otherwise, select the type Y.
type isStringPrimitive<T> = T extends string ? true: false;
type Stupid1 = isStringPrimitive<string>;
type Stupid2 = isStringPrimitive<object>;

type WrapInObject<T> =
    T extends string ? String
  : T extends number ? Number
  : Object;
type Stupid3 = WrapInObject<string>;
type Stupid4 = WrapInObject<number>;
type Stupid5 = WrapInObject<undefined>;

// ### Distribution over a union and "naked" type parameters
// the type parameter is present without being wrapped in another type,
// (ie, an array, or a tuple, or a function, or a promise or any other generic type)
type NakedUsage<T> = T extends boolean ? "YES" : "NO"
type WrappedUsage<T> = [T] extends [boolean] ? "YES" : "NO";

type Distributed = NakedUsage<number | boolean>;
type Distributed_S0 = NakedUsage<number> | NakedUsage<boolean>;
type Distributed_S1 = (number extends boolean ? "YES" : "NO") | (boolean extends boolean ? "YES" : "NO");
type Distributed_S2 = "YES" | "NO";

type NotDistributed = WrappedUsage<number | boolean>;
type NotDistributed_S0 = [number | boolean] extends [boolean] ? "YES" : "NO";
type NotDistributed_S1 = "NO";

type NotDistributed2 = WrappedUsage<boolean>;
type NotDistributed2_S0 = [boolean] extends [boolean] ? "YES" : "NO";
type NotDistributed2_S1 = "YES";

// It always has the following form: T extends U ? X : Y
// If the type T is assignable to the type U, select the type X; otherwise, select the type Y.
type StupidType1<T> = T extends string ? String: number;
type Stupid1 = StupidType1<string>;
type Stupid2 = StupidType1<object>;

type StupidType2<T> =
    T extends string ? String
  : T extends number ? Number
  : object;
type Stupid3 = StupidType2<string>;
type Stupid4 = StupidType2<number>;
type Stupid5 = StupidType2<undefined>;

// ### Distribution over a union and "naked" type parameters
// the type parameter is present without being wrapped in another type,
// (ie, an array, or a tuple, or a function, or a promise or any other generic type)
type NakedUsage<T> = T extends boolean ? "YES" : "NO"
type WrappedUsage<T> = [T] extends [boolean] ? "YES" : "NO";
type Distributed = NakedUsage<number | boolean>; // Same as NakedUsage<number> | NakedUsage<boolean>
type NotDistributed = WrappedUsage<number | boolean>;  
type NotDistributed2 = WrappedUsage<boolean>;

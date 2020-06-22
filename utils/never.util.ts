// The never type is TypeScript's bottom type, the type for values that never occur:
// - As the return type of functions that never return.
// - As the type of variables under type guards that are never true.

/**
 * - never is a subtype of and assignable to every type
 * - No type is a subtype of or assignable to never (except never itself).
 * - In a function expression or arrow function with no return type annotation,
 * if the function has no return statements, or only return statements with expressions of type never,
 * and if the end point of the function is not reachable (as determined by control flow analysis),
 * the inferred return type for the function is never.
 * - In a function with an explicit never return type annotation, all return statements (if any) must
 * have expressions of type never and the end point of the function must not be reachable.
 */

function controlFlowAnalysisWithNever(
  value: string | number
) {
  if (typeof value === "string") {
    value; // Type string
  } else if (typeof value === "number") {
    value; // Type number
  } else {
    value; // Type never
  }
}

const failwith = (message: string) => {
  throw new Error(message);
};


/**
 * - A function that doesn't explicitly return a value implicitly returns the value undefined in JavaScript.
 * Although we typically say that such a function "doesn't return anything", it returns.
 * We usually ignore the return value in these cases. Such a function is inferred to have a void return type in TypeScript.
 * 
 * - A function that has a never return type never returns.
 * It doesn't return undefined, either.
 * The function doesn't have a normal completion, which means it throws an error or never finishes running at all.
 */

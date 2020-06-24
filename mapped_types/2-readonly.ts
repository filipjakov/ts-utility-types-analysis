export namespace Readonly {
  // ### 1. Give definition - Partial<T>
  // Constructs a type with all properties of T set to readonly,
  // meaning the properties of the constructed type cannot be reassigned.
  // Use case - immutable structures or just if you want to prevent some properties from changes.

  // ### 2. Try out the original
  interface Todo {
    title: string;
    description: string;
    complete: boolean;
  }

  type readonlyTodo = Readonly<Todo>;

  // ### 3. Example
  interface Point {
    x: number;
    y: number;
  }
  
  interface FrozenPoint {
    readonly x: number;
    readonly y: number;
  }
  
  function freezePoint(p: Point): FrozenPoint {
    return Object.freeze(p);
  }
  
  const origin = freezePoint({ x: 0, y: 0 });
  
  // Error! Cannot assign to 'x' because it
  // is a constant or a read-only property.
  origin.x = 42;
  // !!! We need two interfaces
  // !!! We need the freezePoint function

  // ### 4. Custom example - reverse engineer + custom destructure
  // readonly -> Mapped Type Modifier
  type cReadonly<T> = {
    readonly [P in keyof T]: T[P]
  }

  const todo: cReadonly<Todo> = {
    title: 'Title',
    description: 'Description',
    complete: true
  };

  todo.title = 'Hello'; // Error: cannot reassign a readonly property

  // Steps destructured:
  type S0 = cReadonly<Todo>;
  type S1 = {
    readonly [P in keyof Todo]: Todo[P] 
  }
  type S2 = {
    readonly [P in 'title' | 'description' | 'complete']: Todo[P]
  }
  type S3 = {
    readonly title: Todo['title'];
    readonly description: Todo['description'],
    readonly complete: Todo['complete']
  }
  type S4 = {
    readonly title: string;
    readonly description: string;
    readonly complete: boolean;
  }
}

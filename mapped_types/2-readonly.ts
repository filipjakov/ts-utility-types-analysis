export namespace Readonly {
  // ### 1. Give definition - Partial<T>
  // Constructs a type with all properties of T set to readonly,
  // meaning the properties of the constructed type cannot be reassigned.

  // ### 2. Try out the original
  type T1 = Readonly<Todo>;

  // ### 3. Example -> Object.freeze
  // function freeze<T>(obj: T): Readonly<T>;

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

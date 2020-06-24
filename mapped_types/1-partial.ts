export namespace Partial {
  // ### 1. Give definition - Partial<T>
  // Constructs a type with all properties of T set to optional.
  // This utility will return a type that represents all subsets of a given type.
  // Use case - Suppose we have a situation when the object could be filled from multiple places

  // ### 2. Try out the original
  interface Todo {
    title: string;
    description: string;
  }

  type optionalTodo = Partial<Todo>;

  // ### 3. Example -> Update object utility
  function updateTodo(todo: Todo, fieldsToUpdate: Partial<Todo>) {
    return { ...todo, ...fieldsToUpdate };
  }

  const updated = updateTodo({ title: 'title', description: 'desc' }, { title: 'title-new' });

  // ### 4. Reverse engineer + destructure
  type cPartial<T> = {
    [P in keyof T]?: T[P]
  }
  type TodoKeys = keyof Todo; // Indexed type query

  // Steps destructured:
  type S0 = cPartial<Todo>;
  type S1 = {
    [P in keyof Todo]?: Todo[P] 
  }
  type S2 = {
    [P in 'title' | 'description']?: Todo[P]
  }
  type S3 = {
    title?: Todo['title'],
    description?: Todo['description'],
  }
  type S4 = {
    title?: string,
    description?: string,
  }
}


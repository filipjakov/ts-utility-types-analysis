export namespace Partial {
  // ### 1. Give definition - Partial<T>
  // Constructs a type with all properties of T set to optional.
  // This utility will return a type that represents all subsets of a given type.

  // ### 2. Try out the original
  type optionalTodo = Partial<Todo>;

  // ### 3. Example -> Update object utility
  function updateTodo(todo: Todo, fieldsToUpdate: Partial<Todo>) {
    return { ...todo, ...fieldsToUpdate };
  }

  const updated = updateTodo({ title: 'title', description: 'desc', complete: false }, { title: 'title-new' });


  // ### 4. Custom example - reverse engineer + custom destructure
  // ? -> Mapped Type Modifier
  type cPartial<T> = {
    [P in keyof T]?: T[P]
  }

  type TodoKeys = keyof Todo; // Indexed type query
  type TodoTitleValue = Todo['title']; // Indexed access operator
  // Same as (Todo['title'] | Todo['description'] | Todo['complete']) and Todo[keyof Todo]
  type TodoValues = Todo['title' | 'description' | 'complete'];

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
    complete?: Todo['complete']
  }
  type S4 = {
    title?: string,
    description?: string,
    complete?: boolean;
  }
}


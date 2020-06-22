export namespace Pick {
  // ### 1. Give definition - Pick<T, K>
  // Constructs a type by picking the set of properties K from T.

  // ### 2. Try out the original
  type TodoPreview = Pick<Todo, 'title' | 'complete'>;

  // ### 3. Example
  // TODO
  // ### 4. Custom example - reverse engineer + custom destructure
  type cPick<T, K extends keyof T> = {
    [P in K]: T[P]
  }

  type keys = keyof Todo;
  // Steps destructured
  type S0 = cPick<Todo, 'title' | 'complete'>;
  type S1 = {
    [P in 'title' | 'complete']: Todo[P]
  }
  type S2 = {
    title: Todo['title'],
    complete: Todo['complete'],
  }
  type S3 = {
    title: string,
    complete: boolean
  }

  // 1. Check and explain limitation for key
}

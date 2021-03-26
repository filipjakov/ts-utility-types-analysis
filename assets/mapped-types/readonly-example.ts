interface Todo {
  title: string;
}

type Readonly<T> = {
  readonly [P in keyof T]: T[P];
};

const todo: Readonly<Todo> = {
  title: "Title",
};

// Cannot assign to 'title' because
// it is a read-only property
todo.title = "New title";

// Object.freeze signature
ObjectConstructor.freeze<T>(o: T): Readonly<T>;
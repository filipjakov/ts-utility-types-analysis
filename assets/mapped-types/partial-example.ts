interface Todo {
  title: string;
  description: string;
}

function update<T extends {}>(obj: T, fieldsToUpdate: Partial<T>): T {
  return { ...obj, ...fieldsToUpdate };
}

const todo = {
  title: "Title",
  description: "Description",
};

const updated = update(todo, { title: "title-new" });

// Err
const err = update(todo, { rand: 11 });

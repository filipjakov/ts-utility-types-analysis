interface Todo {
  title: string;
  description: string;
}

type Partial<T> = {
  [P in keyof T]?: T[P];
};

type Step0 = Partial<Todo>;

type Step1 = {
  [P in keyof Todo]?: Todo[P];
};

type Step2 = {
  [P in "title" | "description"]?: Todo[P];
};

type Step3 = {
  title?: Todo["title"];
  description?: Todo["description"];
};

type Step4 = {
  title?: string;
  description?: string;
};

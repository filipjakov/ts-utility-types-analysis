interface Props {
  a?: number;
  b?: string;
}

type Required<T> = {
  [P in keyof T]-?: T[P];
};

function updateProps(todo: Props, fieldsToUpdate: Required<Props>) {
  return { ...todo, ...fieldsToUpdate };
}

// Error: Property 'b' is missing
// in type '{ a: number; }'
const newProps = updateProps({}, { a: 1 });

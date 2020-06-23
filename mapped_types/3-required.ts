export namespace Required {
  // ### 1. Give definition - Required<T>
  // Constructs a type consisting of all properties of T set to required.

  // ### 2. Try out the original
  interface Props {
    a?: number;
    b?: string;
  };

  type requiredProps = Required<Props>;

  // ### 3. Example
  function updateProps(todo: Props, fieldsToUpdate: Required<Props>) {
    return { ...todo, ...fieldsToUpdate };
  }

  // ### 4. Custom example - reverse engineer + custom destructure
  type cRequired<T> = {
    [P in keyof T]-?: T[P];
  };

  // Steps destructured
  type S0 = cRequired<Props>;
  type S1 = {
    [P in keyof Props]-?: Props[P] 
  }
  type S2 = {
    [P in 'a' | 'b']-?: Props[P]
  }
  type S3 = {
    a: Props['a'];
    b: Props['b'],
  }
  type S4 = {
    a: number;
    b: string;
  }
}

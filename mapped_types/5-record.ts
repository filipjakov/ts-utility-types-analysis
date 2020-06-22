export namespace Record {
  // ### 1. Give definition - Record<K, T>
  // Constructs a type with a set of properties K of type T. This utility can be used to map the properties of a type to another type.

  // ### 2. Try out the original
  interface PageInfo {
    title: string;
  }

  type Page = 'home' | 'about' | 'contact';
  // type Page = { x: 1 };

  const x: Record<Page, PageInfo> = {
    about: { title: 'about' },
    contact: { title: 'contact' },
    home: { title: 'home' },
  };

  // ### 3. Example
  // TODO
  // ### 4. Custom example - reverse engineer + custom destructure
  // keyof any represents the type of any value that can be used as an index to an object.
  // Currently you can use string or number or symbol to index into an object.
  type keys = keyof any;
  type cRecord<K extends keyof any, T> = {
    [P in K]: T
  }

  // 1. Check limit for K key
  // 2. Why any???
}

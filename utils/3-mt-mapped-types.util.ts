// Control flow in the meta-world?
export namespace MappedTypes {
  // In a mapped type, the new type transforms each property of the old type in the same way.
  // Note that this syntax describes a type rather than a member. If you want to add members, use intersections.

  // Repetition
  type options = {
    read: boolean;
    write: boolean;
    execute: boolean;
  }

  type Keys = 'read' | 'write' | 'execute';

  // A mapped type produces an object by looping over a collection of keys
  // The operator **in** is a crucial part of a mapped type: It specifies where the keys for the new object literal type come from.
  type Flags = {
    [K in Keys]: boolean
  };

  type S0 = {
    [K in 'read' | 'write' | 'execute']: boolean
  }
  type S1 = {
    read: boolean,
    write: boolean,
    execute: boolean
  }
}


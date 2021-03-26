interface PageInfo {
  title: string;
}

/**
 * `keyof any` represents the type of any value
 * that can be used as an index to an object.
 * You can use a string, number or a symbol
 * to index into an object.
 */
type Record<K extends keyof any, T> = {
  [P in K]: T;
};

type Page = "home" | "about" | "contact";

const pages: Record<Page, PageInfo> = {
  about: { title: "about" },
  contact: { title: "contact" },
  home: { title: "home" },
};

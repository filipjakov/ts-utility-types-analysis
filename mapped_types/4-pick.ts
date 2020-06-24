export namespace Pick {
  // ### 1. Give definition - Pick<T, K>
  // Constructs a type by picking the set of properties K from T.
  // Gives the ability to create a new type by picking properties from the already existing models/types.

  // ### 2. Try out the original
  interface Article {
    title: string;
    content: string;
    published: Date;
  }

  // Todo: check with non-existing property
  type ArticlePreview = Pick<Article, 'title' | 'published'>;

  // ### 3. Custom example - reverse engineer + custom destructure
  type cPick<T, K extends keyof T> = {
    [P in K]: T[P]
  }

  type keys = keyof Article;
  // Steps destructured
  type S0 = cPick<Article, 'title' | 'published'>;
  type S1 = {
    [P in 'title' | 'published']: Article[P]
  }
  type S2 = {
    title: Article['title'],
    published: Article['published'],
  }
  type S3 = {
    title: string,
    complete: Date
  }
}

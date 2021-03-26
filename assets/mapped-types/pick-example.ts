interface Article {
  title: string;
  content: string;
  published: Date;
}

type Pick<T, K extends keyof T> = {
  [P in K]: T[P];
};

type ArticlePreview = Pick<Article, "title" | "published">;

const preview: ArticlePreview = {
  title: "Title",
  published: new Date(),
};

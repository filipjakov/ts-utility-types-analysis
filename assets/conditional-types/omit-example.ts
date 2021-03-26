interface Article {
  title: string;
  content: string;
  published: Date;
}

type ArticlePreview = Omit<Article, "content">;

const preview: ArticlePreview = {
  title: "Title",
  published: new Date(),
};

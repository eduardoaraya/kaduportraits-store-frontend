export type Content = {
  Key: string;
  Size: number;
  Url?: string;
};

export type Catalog = {
  data: Content[];
  url: string;
};

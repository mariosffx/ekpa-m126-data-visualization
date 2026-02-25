export type BrandProps = string;

export type ItemProps = {
  text: string;
  href: string;
};

export type PartialProps = {
  brand: BrandProps;
  items: ItemProps[];
};

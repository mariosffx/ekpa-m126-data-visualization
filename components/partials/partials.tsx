import { MaxWidthContainer } from "@/components/containers/containers";
import styles from "@/components/partials/partials.module.css";
import type { ItemProps, PartialProps } from "@/types/partials";
import NextLink from "next/link";

function Nav({ children }: { children: React.ReactNode }) {
  return <nav className={styles.nav}>{children}</nav>;
}

function Brand({ brand }: Pick<PartialProps, "brand">) {
  return <span className={styles.brand}>{brand}</span>;
}

function Item({ href, text }: ItemProps) {
  return (
    <li
      key={href}
      className={styles.link}
    >
      <NextLink href={href}>{text}</NextLink>
    </li>
  );
}

function Items({ items }: Pick<PartialProps, "items">) {
  return (
    <ul className={styles.items}>
      {items.map(({ href, text }) => (
        <Item
          key={href}
          href={href}
          text={text}
        />
      ))}
    </ul>
  );
}

function Content({ children }: { children: React.ReactNode }) {
  return <div className={styles.content}>{children}</div>;
}

export function Navbar({ brand, items }: PartialProps) {
  return (
    <Nav>
      <MaxWidthContainer>
        <Content>
          <Brand brand={brand} />
          <Items items={items} />
        </Content>
      </MaxWidthContainer>
    </Nav>
  );
}

export function Footer({ brand, items }: PartialProps) {
  return (
    <footer className={styles.footer}>
      <Brand brand={brand} />
      <Items items={items} />
    </footer>
  );
}

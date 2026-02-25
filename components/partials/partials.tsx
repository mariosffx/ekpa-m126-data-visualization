import Link from "next/link";
import type { NavbarProps } from "@/types/partials";

export default function Navbar({ title, links }: NavbarProps) {
  return (
    <nav>
      <span>{title}</span>
      <ul>
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
          >
            {link.name}
          </Link>
        ))}
      </ul>
    </nav>
  );
}

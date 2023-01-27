import Link from "next/link";

export const Header = () => {
  return (
    <header>
      <nav>
        <Link href="/">home</Link>
        <Link href="/docs">docs</Link>
      </nav>
    </header>
  );
};

import Link from "next/link";
import React from "react";

type Props = {};

function Header({}: Props) {
  return (
    <header className="container flex items-center gap-4 py-4">
      <Link
        className="underline"
        href={"https://github.com/anuarshaidenov/end-month-event"}
        target="_blank"
      >
        Star on Github ⭐️
      </Link>
    </header>
  );
}

export default Header;

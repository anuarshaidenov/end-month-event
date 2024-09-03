import Link from "next/link";
import React from "react";

type Props = {};

function Header({}: Props) {
  return (
    <header className="container flex items-start justify-between gap-4 py-4">
      <Link
        className="underline"
        href={"https://github.com/anuarshaidenov/end-month-event"}
        target="_blank"
      >
        Star on Github ⭐️
      </Link>
      <a
        href="https://www.producthunt.com/posts/end-month-event-creator-for-calendar?embed=true&utm_source=badge-featured&utm_medium=badge&utm_souce=badge-end&#0045;month&#0045;event&#0045;creator&#0045;for&#0045;calendar"
        target="_blank"
        className="block"
      >
        <img
          src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=486118&theme=dark"
          alt="End&#0032;Month&#0032;Event&#0032;Creator&#0032;for&#0032;Calendar - Recurring&#0032;Google&#0032;Calendar&#0032;Events&#0032;for&#0032;Month&#0032;End | Product Hunt"
          style={{ width: "250px", height: "54px" }}
          width="250"
          height="54"
        />
      </a>
    </header>
  );
}

export default Header;

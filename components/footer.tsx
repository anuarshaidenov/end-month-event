import Link from "next/link";
import React from "react";

type Props = {};

export const Footer = (props: Props) => {
  return (
    <footer className="container flex items-center gap-4 py-24">
      <Link href={"/"}>Home</Link>
      <Link href={"/privacy-policy"}>Privacy Policy</Link>
    </footer>
  );
};

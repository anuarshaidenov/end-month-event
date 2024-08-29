import { Footer } from "@/components/footer";
import Header from "@/components/header";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

function LandingLayout({ children }: Props) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}

export default LandingLayout;

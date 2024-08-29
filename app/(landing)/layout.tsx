import { Footer } from "@/components/footer";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

function LandingLayout({ children }: Props) {
  return (
    <>
      {children}
      <Footer />
    </>
  );
}

export default LandingLayout;

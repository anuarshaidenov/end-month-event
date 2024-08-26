import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

function LandingLayout({ children }: Props) {
  return <>{children}</>;
}

export default LandingLayout;

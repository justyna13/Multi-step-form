// import { FormNavigation } from '@/components/organisms';
import { Outlet } from "react-router-dom";
import { Footer } from "@/components/molecules/Footer/Footer.tsx";

interface ILayout {
  testid: string;
}

export const Layout: React.FC<ILayout> = ({ testid }: ILayout) => {
  return (
    <div data-testid={testid}>
      {/*<FormNavigation testid="main-menu" />*/}
      <Outlet />
      <Footer testid={'footer'} />
    </div>
  )
}

import "@/components/molecules/Footer/Footer.scss";

interface IFooter {
  testid: string;
}

export const Footer: React.FC<IFooter> = ({
  testid
}: IFooter) => {
  return (
    <footer data-testid={testid}>
     <small> Challenge by Frontend Mentor. Coded by Justyna.</small>
    </footer>
  )
}

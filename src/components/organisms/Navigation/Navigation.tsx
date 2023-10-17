

interface INavigation {
  testid: string;
}

export const Navigation: React.FC<INavigation> = ({
  testid
}: INavigation) => {

  return (
    <div data-testid={testid} >
      menu
    </div>
  );
};

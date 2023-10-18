

interface IFormNavigation {
  testid: string;
}

export const FormNavigation: React.FC<IFormNavigation> = ({
  testid
}: IFormNavigation) => {

  return (
    <div data-testid={testid} >
      menu
    </div>
  );
};

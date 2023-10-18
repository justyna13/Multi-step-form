interface IDashboardPageTemplate {
  testid: string;
}

export const FormPageTemplate: React.FC<IDashboardPageTemplate> = ({
  testid
}: IDashboardPageTemplate) => {
  return (
    <div data-testid={testid}>
      dashboard
    </div>
  );
};

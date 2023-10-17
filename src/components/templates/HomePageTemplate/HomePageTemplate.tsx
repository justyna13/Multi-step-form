interface IDashboardPageTemplate {
  testid: string;
}

export const HomePageTemplate: React.FC<IDashboardPageTemplate> = ({
  testid
}: IDashboardPageTemplate) => {
  return (
    <div data-testid={testid}>
      dashboard
    </div>
  );
};

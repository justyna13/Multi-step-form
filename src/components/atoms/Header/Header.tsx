import '@/components/atoms/Header/Header.scss';

interface IHeader {
  testid: string;
  title: string;
  description: string;
}
export const Header: React.FC<IHeader> = ({
  testid,
  title,
  description
}: IHeader) => {
  return (
    <div className="header" data-testuid={testid}>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
};

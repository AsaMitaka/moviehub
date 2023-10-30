import Button from '../ui/button';

interface ContainerButtonProps {
  page: number;
  setPage: (page: number) => void;
}

const ContainerButton: React.FC<ContainerButtonProps> = ({ page, setPage }) => {
  const nextPage = () => {
    setPage(page + 1);
  };

  const prevPage = () => {
    if (page < 2) {
      return;
    }

    setPage(page - 1);
  };

  return (
    <div className="float">
      {page > 1 && (
        <div className="float-left">
          <Button label="Prev" onClick={prevPage} />
        </div>
      )}
      <div className="float-right">
        <Button label="Next" onClick={nextPage} />
      </div>
    </div>
  );
};

export default ContainerButton;

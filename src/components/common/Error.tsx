type Props = {
  errorMsg: string;
};

const Error: React.FC<Props> = ({ errorMsg }) => {
  return (
    <div className="col py-5 text-center d-flex align-items-center justify-content-center">
      <h2>{errorMsg}...</h2>
    </div>
  );
};

export default Error;

type Props = {
  onClick?: () => {};
  className?: string;
  [x: string]: any;
};

const Button: React.FC<Props> = ({ className, onClick, children, ...rest }) => {
  return (
    <button
      {...rest}
      onClick={onClick}
      className={`px-3 py-2 btn btn-primary fw-bold ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;

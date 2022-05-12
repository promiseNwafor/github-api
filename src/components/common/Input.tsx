import React from "react";

type Props = {
  className?: string;
  type?: string;
  value?: string;
  onChange?: () => void;
  [x: string]: any;
};

const Input: React.FC<Props> = ({
  className,
  onKeyPress,
  onChange,
  type,
  value,
  ...rest
}) => {
  return (
    <input
      onKeyPress={onKeyPress}
      onChange={onChange}
      type={type}
      value={value}
      {...rest}
      className={`border py-2 px-4 ${className}`}
    />
  );
};

export default Input;

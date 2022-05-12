type Props = {
  src: string;
  alt: string;
  className?: string;
  [x: string]: any;
};

const Image: React.FC<Props> = ({ src, className, alt, ...rest }) => {
  return <img {...rest} className={`${className}`} src={src} alt={alt} />;
};

export default Image;

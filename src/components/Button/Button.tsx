import s from './Button.module.css';

interface IButtonProps {
  children: React.ReactNode;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button = (props: IButtonProps) => {
  const { children, onClick } = props;
  return (
    <button className={s.root} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;

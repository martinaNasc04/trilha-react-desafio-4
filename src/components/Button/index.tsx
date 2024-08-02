import { ButtonContainer } from "./styles";
import { IButtonProps } from "./types";

const Button = ({ title, onClick, disabled }: IButtonProps) => {
  return <button onClick={onClick} disabled={disabled}>{title}</button>
  

};

export default Button;

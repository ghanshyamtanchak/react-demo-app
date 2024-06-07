import { FC } from "react";
import { Button as RAButton } from "react-aria-components";
import { ButtonProps } from "./types";

const Button: FC<ButtonProps> = ({ children, ...rest }) => {
  return <RAButton {...rest}>{children}</RAButton>;
};

export default Button;

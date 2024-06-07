import { useRef } from "react";
import { TextFieldProps as RATextFieldProps } from "react-aria-components";

export interface TextFieldProps extends RATextFieldProps {
  ref?: any;
}

type UseTextFieldProps = TextFieldProps;

export const useTextField = (props: UseTextFieldProps) => {
  const domRef = useRef(props.ref);

  return { domRef };
};

import { forwardRef } from "react";
import { TextFieldProps, useTextField } from "./useTextField";

const TextField = forwardRef<"input", TextFieldProps>((props, ref) => {
  const { domRef } = useTextField({ ref });
  return <TextField ref={domRef} {...props} />;
});

TextField.displayName = "TextField";

export default TextField;

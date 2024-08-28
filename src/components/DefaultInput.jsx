import { TextInput } from "react-native-paper";
import MaskInput from "react-native-mask-input";
import React, { forwardRef, useEffect } from "react";

const DefaultInput = forwardRef(
  ({ label, mode, mask, secureTextEntry, right, name, setValue, value, error, ...rest }, ref) => {
    useEffect(() => {
      if (name) {
        setValue(name, value || "");
      }
    }, [name]);

    return mask === "" ? (
      <TextInput
      blurOnSubmit={true}
        label={label}
        mode={mode}
        secureTextEntry={secureTextEntry}
        right={right}
        onChangeText={(text) => setValue(name, text)}
        value={value}
        ref={ref}
        error={error} 
        {...rest}
      />
    ) : (
      <TextInput
        label={label}        
        mode={mode}
        render={(props) => (
          <MaskInput
            {...props}
            blurOnSubmit={true}
            mask={mask}
            onChangeText={(text) => setValue(name, text)}
            value={value}
            ref={ref}
            {...rest}
            />
          )}
          error={error} 
      />
    );
  }
);

export default DefaultInput;

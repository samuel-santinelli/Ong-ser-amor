import { TextInput } from "react-native-paper";
import MaskInput from "react-native-mask-input";
import React, { forwardRef, useEffect } from "react";

const DefaultInput = forwardRef(
  (
    {
      label,
      mode,
      mask,
      secureTextEntry,
      right,
      name,
      setValue,
      value,
      error,
      maxLength,
      autoCorrect,
      autoCapitalize,
      spellCheck,
      keyboardType,
      onPress,
      ...rest
    },
    ref
  ) => {
    useEffect(() => {
      if (name) {
        setValue(name, value || "");
      }
    }, [name]);

    return mask === "" ? (
      <TextInput
        blurOnSubmit={true}
        label={label}
        autoCorrect={autoCorrect}
        autoCapitalize={autoCapitalize}
        spellCheck={spellCheck}
        keyboardType={keyboardType}
        mode={mode}
        secureTextEntry={secureTextEntry}
        right={right}
        onChangeText={(text) => setValue(name, text)}
        onPress={onPress}
        value={value}
        ref={ref}
        error={error}
        {...rest}
      />
    ) : (
      <TextInput
        mode={mode}
        label={label}
        maxLength={maxLength}
        render={(props) => (
          <MaskInput
            {...props}
            blurOnSubmit={true}
            mask={mask}
            autoCorrect={autoCorrect}
            autoCapitalize={autoCapitalize}
            spellCheck={spellCheck}
            keyboardType={keyboardType}
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

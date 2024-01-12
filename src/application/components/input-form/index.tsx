import { stylesheet } from "./styles";
import { TextProps, View } from "react-native";
import React, { useMemo, useState } from "react";
import { Eye, EyeOff } from "lucide-react-native";
import { useStyles } from "react-native-unistyles";
import { Control, Controller } from "react-hook-form";

// COMPONENTS
import { Text } from "@components/base/text";
import { IconButton } from "@components/icon-button";
import { TextInput, TextInputProps } from "@components/base/text-input";

interface InputFormProps extends TextInputProps {
  name: string;
  label?: string;
  control: Control;
  labelProps?: TextProps;
  left?: React.ReactNode;
  right?: React.ReactNode;
}

export const InputForm = ({
  name,
  left,
  label,
  right,
  control,
  labelProps,
  ...rest
}: InputFormProps) => {
  const { styles, theme } = useStyles(stylesheet);

  const isPassword = useMemo(
    () => name.toLowerCase().includes("password"),
    [name]
  );

  const [showPassword, setShowPassword] = useState(!isPassword);

  const EyeIcon = ({ show }: { show: boolean }) => {
    const Icon = show ? EyeOff : Eye;
    return <Icon size={20} color={theme.colors.text} />;
  };

  return (
    <View style={styles.container}>
      {label && <Text {...labelProps}>{label}</Text>}

      <View style={styles.horizontalContainer}>
        {left && <>{left}</>}

        <Controller
          name={name}
          control={control}
          render={({ field: { ref, value, onBlur, onChange } }) => (
            <TextInput
              ref={ref}
              value={value}
              autoComplete="off"
              autoCorrect={false}
              autoCapitalize="none"
              secureTextEntry={!showPassword}
              onBlur={onBlur}
              onChangeText={onChange}
              {...rest}
            />
          )}
        />

        {isPassword && (
          <IconButton
            icon={<EyeIcon show={showPassword} />}
            onPress={() => setShowPassword((value) => !value)}
          />
        )}

        {!isPassword && right && <>{right}</>}
      </View>
    </View>
  );
};

import { stylesheet } from "./styles";
import React, { useMemo, useState } from "react";
import { useStyles } from "react-native-unistyles";
import { Image as ImageIcon } from "lucide-react-native";
import {
  ImageBackground,
  ActivityIndicator,
  ImageBackgroundProps,
  ActivityIndicatorProps,
} from "react-native";

export interface ImageProps extends Omit<ImageBackgroundProps, "source"> {
  uri?: string;
  iconProps?: { size?: number; color?: string };
  activityIndicatorProps?: ActivityIndicatorProps;
}

export const Image = ({
  uri,
  style,
  children,
  iconProps,
  activityIndicatorProps,
  ...rest
}: ImageProps) => {
  const { styles, theme } = useStyles(stylesheet);
  const [isLoading, setIsLoading] = useState(false);

  const loadSize = useMemo(
    () => activityIndicatorProps?.size ?? "small",
    [activityIndicatorProps]
  );

  const loadColor = useMemo(
    () => activityIndicatorProps?.color ?? theme.colors.secondary,
    [activityIndicatorProps]
  );

  const iconSize = useMemo(() => iconProps?.size ?? 15, [iconProps]);

  const iconColor = useMemo(
    () => iconProps?.color ?? theme.colors.placeholder,
    [iconProps]
  );

  return (
    <ImageBackground
      source={{ uri }}
      resizeMode="contain"
      onLoadEnd={() => setIsLoading(false)}
      onLoadStart={() => setIsLoading(true)}
      style={[styles.imageBackground, style]}
      {...rest}
    >
      {isLoading ? (
        <ActivityIndicator size={loadSize} color={loadColor} />
      ) : (
        <>{children}</>
      )}

      {!isLoading && !uri && <ImageIcon size={iconSize} color={iconColor} />}
    </ImageBackground>
  );
};

import React from "react";
import { Image, View } from "react-native";
import { stylesheet } from "./styles";
import { UnistylesRuntime, useStyles } from "react-native-unistyles";
import { IRepository } from "@/application/models/IRepository";
import { Text } from "@/application/components/text";
import { Button } from "@/application/components/button";
import { ArrowRight, Star, StarOff, Trash2 } from "lucide-react-native";

interface OwnerCardProps {
  data: IRepository;
  isLast: boolean;
  onPress: (owner: string) => void;
  handleFavorite: (owner: string) => void;
  handleDelete: (owner: string) => void;
}

export const OwnerCard = ({
  data,
  isLast,
  onPress,
  handleFavorite,
  handleDelete,
}: OwnerCardProps) => {
  const { styles, theme } = useStyles(stylesheet);
  
  const { themeName } = UnistylesRuntime;
  const isDark = themeName === "dark";

  const StarIcon = data.isFavorite ? Star : StarOff;
  const starColor = data.isFavorite
    ? theme.colors.text
    : theme.colors.primary.dark;
  const starFillColor = data.isFavorite ? theme.colors.text : "transparent";

  return (
    <View style={styles.container}>
      <Button
        style={styles.horizontal}
        onPress={() => onPress(data.owner.login)}
      >
        <Image source={{ uri: data?.owner?.avatar_url }} style={styles.image} />

        <View style={styles.content}>
          <Text family="medium">{data?.owner?.login}</Text>
          <Text style={styles.label(isDark)}>
            {data?.data?.length} Repositórios
          </Text>
        </View>

        <View style={styles.buttonContainer}>
          <Button onPress={() => handleFavorite(data?.owner?.login)}>
            <StarIcon size={20} color={starColor} fill={starFillColor} />
          </Button>

          <Button onPress={() => handleDelete(data?.owner?.login)}>
            <Trash2 size={20} color={theme.colors.text} />
          </Button>

          <ArrowRight size={20} color={theme.colors.text} />
        </View>
      </Button>

      <View style={styles.divider(isLast)} />
    </View>
  );
};

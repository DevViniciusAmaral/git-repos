import React from "react";
import { View } from "react-native";
import { stylesheet } from "./styles";
import { IOwnerRepository } from "@models/IRepositoryContext";
import { useStyles, UnistylesRuntime } from "react-native-unistyles";

// COMPONENTS
import { Image } from "@components/image";
import { Text } from "@components/base/text";
import { IconButton } from "@components/icon-button";
import { ArrowRight, Trash2, Star } from "lucide-react-native";
import { useRepositories } from "@hooks/useRepositories";

interface RepositoryCardProps {
  data: IOwnerRepository;
}

export const RepositoryCard = ({ data }: RepositoryCardProps) => {
  const { styles, theme } = useStyles(stylesheet);
  const appTheme = UnistylesRuntime.themeName;

  const { handleFavoriteRepository } = useRepositories();

  const arrowColor =
    appTheme === "light" ? theme.colors.placeholder : theme.colors.text;

  const starColor = data.isFavorite
    ? theme.colors.warning
    : appTheme === "light"
    ? theme.colors.placeholder
    : theme.colors.text;

  const starStrokeWidth = data.isFavorite ? 0 : 2;

  const starFillColor = data.isFavorite ? starColor : "transparent";

  return (
    <View style={styles.container}>
      <View style={styles.horizontalContainer(8)}>
        <Image
          uri={data.owner.photo}
          style={styles.imageProfile}
          imageStyle={{ borderRadius: 25 }}
        />

        <View>
          <Text style={styles.label()}>{data.owner.name}</Text>

          <Text size={12} style={styles.label(true)}>
            Repositórios: {data.repositories.length}
          </Text>
        </View>
      </View>

      <View style={styles.horizontalContainer(16)}>
        <IconButton
          icon={
            <Star
              size={20}
              color={starColor}
              fill={starFillColor}
              strokeWidth={starStrokeWidth} 
            />
          }
          onPress={() => handleFavoriteRepository(data.owner.name)}
        />

        <IconButton
          icon={<Trash2 size={20} color={theme.colors.alert} />}
          onPress={() => {}}
        />

        <IconButton
          icon={<ArrowRight size={20} color={arrowColor} />}
          onPress={() => {}}
        />
      </View>
    </View>
  );
};

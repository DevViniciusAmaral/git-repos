import React from "react";
import { View } from "react-native";
import { stylesheet } from "./styles";
import { IOwnerRepository } from "@models/IRepositoryContext";
import { ArrowRight, Trash2, Star } from "lucide-react-native";
import { useStyles, UnistylesRuntime } from "react-native-unistyles";

// COMPONENTS
import { Image } from "@components/image";
import { Text } from "@components/base/text";
import { Button } from "@components/base/button";
import { IconButton } from "@components/icon-button";

// HOOKS
import { useRepositories } from "@hooks/useRepositories";
import { useNavigation } from "@react-navigation/native";

interface RepositoryOwnerCardProps {
  data: IOwnerRepository;
}

export const RepositoryOwnerCard = ({ data }: RepositoryOwnerCardProps) => {
  const { navigate } = useNavigation();

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
    <Button
      style={styles.container}
      onPress={() => navigate("RepositoryDetails", { owner: data.owner.name })}
    >
      <View style={styles.horizontalContainer(8)}>
        <Image
          uri={data.owner.photo}
          style={styles.imageProfile}
          imageStyle={{ borderRadius: 25 }}
        />

        <View>
          <Text style={styles.label()}>{data.owner.name}</Text>

          <Text size={12} style={styles.label(true)}>
            {data.repositories.length} repositórios
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

        <ArrowRight size={20} color={arrowColor} />
      </View>
    </Button>
  );
};

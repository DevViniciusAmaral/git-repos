import React from "react";
import { Image, View } from "react-native";
import { stylesheet } from "./styles";
import { useStyles } from "react-native-unistyles";
import { IRepository } from "@/application/models/IRepository";
import { Text } from "@/application/components/text";
import { Button } from "@/application/components/button";
import { ArrowRight } from "lucide-react-native";

interface RepositoryCardProps {
  data: IRepository;
  isLast: boolean;
  onPress: (owner: string) => void;
}

export const RepositoryCard = ({
  data,
  isLast,
  onPress,
}: RepositoryCardProps) => {
  const { styles, theme } = useStyles(stylesheet);

  return (
    <View style={styles.container}>
      <Button
        style={styles.horizontal}
        onPress={() => onPress(data.owner.login)}
      >
        <Image source={{ uri: data?.owner?.avatar_url }} style={styles.image} />

        <View style={styles.content}>
          <Text family="medium">{data?.owner?.login}</Text>
          <Text style={styles.label}>{data?.data?.length} Repositórios</Text>
        </View>

        <Button>
          <ArrowRight size={20} color={theme.colors.text} />
        </Button>
      </Button>

      <View style={styles.divider(isLast)} />
    </View>
  );
};

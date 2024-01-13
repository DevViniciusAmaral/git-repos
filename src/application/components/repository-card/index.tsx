import React from "react";
import { View } from "react-native";
import { stylesheet } from "./styles";
import * as Linking from "expo-linking";
import { formatDate } from "@utils/Date";
import { Star } from "lucide-react-native";
import { IRepository } from "@models/IRepository";
import { useStyles } from "react-native-unistyles";

// COMPONENTS
import { Text } from "@components/base/text";
import { Button } from "@components/base/button";

interface RepositoryCardProps {
  data: IRepository;
}

export const RepositoryCard = ({ data }: RepositoryCardProps) => {
  const { styles, theme } = useStyles(stylesheet);

  return (
    <Button
      style={styles.container}
      onPress={() => Linking.openURL(data.html_url)}
    >
      <View style={styles.horizontalContainer}>
        <Text style={styles.label()}>{data.name}</Text>
        <Text size={12}>{formatDate(data.created_at, "dd MMM yyyy")}</Text>
      </View>

      {data.description && (
        <Text style={styles.label(true)}>{data.description}</Text>
      )}

      <View style={styles.horizontalContainer}>
        <Text style={styles.language}>{data.language}</Text>

        <View style={styles.horizontalWrapper}>
          <Text>{data.stargazers_count}</Text>
          <Star size={15} color={theme.colors.warning} />
        </View>
      </View>
    </Button>
  );
};

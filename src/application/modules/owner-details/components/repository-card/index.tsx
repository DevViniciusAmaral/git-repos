import React from "react";
import { View, Linking } from "react-native";
import { stylesheet } from "./styles";
import { useStyles } from "react-native-unistyles";
import { IRepositoryData } from "@/application/models/IRepository";
import { Text } from "@/application/components/text";
import { Link, Star } from "lucide-react-native";
import { Button } from "@/application/components/button";

interface RepositoryCardProps {
  data: IRepositoryData;
}

export const RepositoryCard = ({ data }: RepositoryCardProps) => {
  const { styles, theme } = useStyles(stylesheet);

  const handleOpenLink = async () => {
    await Linking.openURL(data?.html_url);
  };

  return (
    <View style={styles.container}>
      <View>
        <Text family="medium">{data?.name}</Text>
        {data?.description && (
          <Text style={styles.label}>{data?.description}</Text>
        )}
      </View>

      <Button style={styles.linkButton} onPress={handleOpenLink}>
        <Link size={20} color={theme.colors.text} />
      </Button>
    </View>
  );
};

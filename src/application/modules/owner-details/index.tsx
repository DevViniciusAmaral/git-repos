import React from "react";
import { FlatList, Image, View } from "react-native";
import { stylesheet } from "./styles";
import { useStyles } from "react-native-unistyles";
import { Layout } from "@/application/components/layout";
import { NavigatorRootProps } from "@/application/routes/NavigatorRootProps";
import { Button } from "@/application/components/button";
import { ArrowLeft } from "lucide-react-native";
import { Text } from "@/application/components/text";
import { useRepository } from "@/application/hooks/useRepository";
import { RepositoryCard } from "./components/repository-card";

export const OwnerDetails = ({
  route,
  navigation,
}: NavigatorRootProps<"OwnerDetails">) => {
  const { login } = route.params;
  const { styles, theme } = useStyles(stylesheet);

  const { repositories } = useRepository();
  const repository = repositories.find((repo) => repo.owner.login === login);

  return (
    <Layout
      style={styles.container}
      header={
        <View style={styles.header}>
          <View style={styles.headerContent}>
            <Button onPress={navigation.goBack}>
              <ArrowLeft size={24} color={theme.colors.text} />
            </Button>

            <Text size={24} family="medium">
              {repository?.owner?.login}
            </Text>
          </View>

          <Image
            source={{ uri: repository.owner.avatar_url }}
            style={styles.image}
          />
        </View>
      }
    >
      <FlatList
        numColumns={2}
        data={repository?.data}
        showsVerticalScrollIndicator={false}
        columnWrapperStyle={styles.wrapperList}
        contentContainerStyle={styles.contentList}
        keyExtractor={(item) => item?.id?.toString()}
        renderItem={({ item }) => <RepositoryCard data={item} />}
      />
    </Layout>
  );
};

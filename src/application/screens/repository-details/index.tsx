import { stylesheet } from "./styles";
import React, { useMemo } from "react";
import { Layout } from "@components/layout";
import { StackRootProps } from "src/application/routes/stack-navigator/StackRootProps";

// HOOKS
import { useStyles } from "react-native-unistyles";
import { useRepositories } from "@hooks/useRepositories";
import { Image } from "@components/image";
import { FlatList, View } from "react-native";
import { Text } from "@components/base/text";
import { IconButton } from "@components/icon-button";
import { ArrowLeft } from "lucide-react-native";
import { RepositoryCard } from "@components/repository-card";
import { IRepository } from "@models/IRepository";

export const RepositoryDetails = ({
  route,
  navigation,
}: StackRootProps<"RepositoryDetails">) => {
  const { owner } = route.params;
  const { repositories } = useRepositories();

  const repository = useMemo(
    () => repositories.find((repo) => repo.owner.name === owner),
    [repositories]
  );

  const { styles, theme } = useStyles(stylesheet);

  return (
    <Layout
      paddingTopEnabled
      style={styles.container}
      header={
        <View style={styles.header}>
          <IconButton
            icon={<ArrowLeft size={20} color={theme.colors.text} />}
            onPress={navigation.goBack}
          />
        </View>
      }
    >
      <View style={styles.horizontalContainer}>
        <Image
          style={styles.imageProfile}
          uri={repository.owner.photo}
          imageStyle={{ borderRadius: 25 }}
        />

        <View>
          <Text style={styles.label()}>{repository.owner.name}</Text>
          <Text size={12} style={styles.label(true)}>
            {repository.repositories.length} repositórios
          </Text>
        </View>
      </View>

      <FlatList
        data={repository.repositories}
        contentContainerStyle={{ gap: 16 }}
        showsVerticalScrollIndicator={false}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ item }) => <RepositoryCard data={item as IRepository} />}
      />
    </Layout>
  );
};

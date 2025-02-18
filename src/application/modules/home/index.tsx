import React, { useState } from "react";
import { stylesheet } from "./styles";
import { useStyles } from "react-native-unistyles";
import { Text } from "@/application/components/text";
import { Layout } from "@/application/components/layout";
import { Searchbar } from "@/application/components/searchbar";
import { FlatList, View } from "react-native";
import { useRepository } from "@/application/hooks/useRepository";
import { RepositoryCard } from "./components/repository-card";
import { NavigatorRootProps } from "@/application/routes/NavigatorRootProps";

export const Home = ({
  navigation,
}: NavigatorRootProps<"BottomTabsNavigator">) => {
  const { styles } = useStyles(stylesheet);
  const { repositories, findRepository, saveRepository } = useRepository();

  const [searchValue, setSearchValue] = useState("");

  const onSearchRepository = async () => {
    const repository = await findRepository(searchValue);
    saveRepository(repository);
    setSearchValue("");
  };

  return (
    <Layout
      style={styles.container}
      header={
        <View style={styles.header}>
          <Text size={18} family="bold">
            Git Repos
          </Text>
        </View>
      }
    >
      <Searchbar
        value={searchValue}
        placeholder="Pesquisar"
        onChangeText={setSearchValue}
        onSearch={onSearchRepository}
      />

      <FlatList
        data={repositories}
        keyExtractor={(_, index) => index.toString()}
        contentContainerStyle={{ gap: 16, paddingTop: 8 }}
        renderItem={({ item, index }) => (
          <RepositoryCard
            data={item}
            isLast={index === repositories.length - 1}
            onPress={(login) => navigation.navigate("OwnerDetails", { login })}
          />
        )}
      />
    </Layout>
  );
};

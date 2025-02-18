import React, { useState } from "react";
import { stylesheet } from "./styles";
import { useStyles } from "react-native-unistyles";
import { Text } from "@/application/components/text";
import { Layout } from "@/application/components/layout";
import { useRepository } from "@/application/hooks/useRepository";
import { FlatList, View } from "react-native";
import { OwnerCard } from "@/application/components/owner-card";
import { NavigatorRootProps } from "@/application/routes/NavigatorRootProps";
import { Searchbar } from "@/application/components/searchbar";

export const Favorites = ({
  navigation,
}: NavigatorRootProps<"BottomTabsNavigator">) => {
  const { styles } = useStyles(stylesheet);
  const { repositories, deleteRepository, favoriteRepository } =
    useRepository();

  const [searchValue, setSearchValue] = useState("");

  const favoriteRepositories = repositories.filter((repo) => repo.isFavorite);

  const filteredRepositories =
    searchValue.length > 0
      ? favoriteRepositories.filter((repo) =>
          repo.owner.login.toLowerCase().includes(searchValue.toLowerCase())
        )
      : favoriteRepositories;

  return (
    <Layout
      style={styles.container}
      header={
        <View style={styles.header}>
          <Text size={24} family="bold">
            Favoritos
          </Text>
        </View>
      }
    >
      <Searchbar
        value={searchValue}
        placeholder="Pesquisar"
        onChangeText={setSearchValue}
      />

      <FlatList
        data={filteredRepositories}
        keyExtractor={(_, index) => index.toString()}
        contentContainerStyle={{ gap: 16, paddingTop: 8 }}
        renderItem={({ item, index }) => (
          <OwnerCard
            data={item}
            isLast={index === filteredRepositories.length - 1}
            handleDelete={deleteRepository}
            handleFavorite={favoriteRepository}
            onPress={(login) => navigation.navigate("OwnerDetails", { login })}
          />
        )}
        ListEmptyComponent={() => (
          <Text style={styles.label}>
            Nenhum repositório favoritado até o momento!
          </Text>
        )}
      />
    </Layout>
  );
};

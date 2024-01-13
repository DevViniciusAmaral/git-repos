import { stylesheet } from "./styles";
import { FlatList } from "react-native";
import React, { useCallback, useState } from "react";
import { IOwnerRepository } from "@models/IRepositoryContext";

// COMPONENTS
import { Layout } from "@components/layout";
import { Divider } from "@components/divider";
import { SearchBar } from "@components/search-bar";
import { HeaderApp } from "@components/header-app";
import { RepositoryCard } from "@components/repository-card";

// HOOKS
import { useMutation } from "react-query";
import { useStyles } from "react-native-unistyles";
import { useRepositories } from "@hooks/useRepositories";

export const Home = () => {
  const { styles } = useStyles(stylesheet);

  const { repositories, saveRepository, getRepository } = useRepositories();
  const { isLoading, mutateAsync } = useMutation(getRepository);

  const [inputValue, setInputValue] = useState("");

  const handleOnSearch = useCallback(
    async () => saveRepository(await mutateAsync(inputValue)),
    [repositories]
  );

  return (
    <Layout paddingTopEnabled style={styles.container} header={<HeaderApp />}>
      <SearchBar
        isLoading={isLoading}
        placeholder="Pesquisar"
        onSearch={handleOnSearch}
        onChangeText={setInputValue}
      />

      <FlatList
        data={repositories}
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={() => <Divider />}
        keyExtractor={(_, index) => index.toString()}
        contentContainerStyle={{ gap: 16, paddingVertical: 16 }}
        renderItem={({ item }) => (
          <RepositoryCard data={item as IOwnerRepository} />
        )}
      />
    </Layout>
  );
};

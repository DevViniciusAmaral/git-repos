import { stylesheet } from "./styles";
import { FlatList } from "react-native";
import React, { useCallback, useState } from "react";
import { IOwnerRepository } from "@models/IRepositoryContext";

// COMPONENTS
import { Layout } from "@components/layout";
import { Divider } from "@components/divider";
import { SearchBar } from "@components/search-bar";
import { HeaderApp } from "@components/header-app";
import { RepositoryOwnerCard } from "@components/repository-owner-card";

// HOOKS
import { useMutation } from "react-query";
import { useStyles } from "react-native-unistyles";
import { useRepositories } from "@hooks/useRepositories";

export const Home = () => {
  const { styles } = useStyles(stylesheet);

  const { repositories, saveRepository, getRepository } = useRepositories();
  const { isLoading, mutateAsync, error } = useMutation(getRepository);

  const [inputValue, setInputValue] = useState("");

  const handleOnSearch = useCallback(async () => {
    try {
      saveRepository(await mutateAsync(inputValue));
    } catch (error) {}
  }, [repositories, inputValue]);

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
          <RepositoryOwnerCard data={item as IOwnerRepository} />
        )}
      />
    </Layout>
  );
};

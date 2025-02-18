import React, { useState } from "react";
import { stylesheet } from "./styles";
import { useStyles } from "react-native-unistyles";
import { Text } from "@/application/components/text";
import { Layout } from "@/application/components/layout";
import { Searchbar } from "@/application/components/searchbar";
import { View } from "react-native";
import { useRepository } from "@/application/hooks/useRepository";

export const Home = () => {
  const { styles } = useStyles(stylesheet);
  const { findRepository } = useRepository();

  const [searchValue, setSearchValue] = useState("");

  const onSearchRepository = async () => {
    const repository = await findRepository(searchValue);
    console.log(repository);
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
    </Layout>
  );
};

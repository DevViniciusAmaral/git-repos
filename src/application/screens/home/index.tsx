import { stylesheet } from "./styles";
import React, { useState } from "react";
import { useStyles } from "react-native-unistyles";

// COMPONENTS
import { Layout } from "@components/layout";
import { SearchBar } from "@components/search-bar";
import { HeaderApp } from "@components/header-app";

export const Home = () => {
  const { styles } = useStyles(stylesheet);

  const [inputValue, setInputValue] = useState("");

  const handleOnSearch = () => {};

  return (
    <Layout paddingTopEnabled style={styles.container} header={<HeaderApp />}>
      <SearchBar
        placeholder="Pesquisar"
        onSearch={handleOnSearch}
        onChangeText={setInputValue}
      />
    </Layout>
  );
};

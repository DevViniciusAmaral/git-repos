import React from "react";
import { stylesheet } from "./styles";
import { Layout } from "@components/layout";
import { Text } from "@components/base/text";
import { useStyles } from "react-native-unistyles";

export const Home = () => {
  const { styles } = useStyles(stylesheet);

  return (
    <Layout paddingTopEnabled style={styles.container}>
      <Text size={50}>Home</Text>
    </Layout>
  );
};

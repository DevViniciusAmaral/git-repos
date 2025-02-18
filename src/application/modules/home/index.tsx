import React from "react";
import { stylesheet } from "./styles";
import { useStyles } from "react-native-unistyles";
import { Text } from "@/application/components/text";
import { Layout } from "@/application/components/layout";

export const Home = () => {
  const { styles } = useStyles(stylesheet);

  return (
    <Layout style={styles.container}>
      <Text size={50} family="bold">
        Home
      </Text>
    </Layout>
  );
};

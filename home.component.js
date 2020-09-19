import React from "react";
import { Platform, SafeAreaView, StatusBar, StyleSheet } from "react-native";
import { Button, Divider, Layout, TopNavigation } from "@ui-kitten/components";

export const HomeScreen = ({ navigation }) => {
  const navigateDetails = () => {
    navigation.navigate("Details");
  };

  return (
    <SafeAreaView style={styles.container}>
      <TopNavigation title='MyApp' alignment='center' />
      <Divider />
      <Layout
        style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
      >
        <Button onPress={() => navigation.openDrawer()}>OPEN DRAWER</Button>
        <Button onPress={navigateDetails}>OPEN DETAILS</Button>
      </Layout>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // android status bar padding
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});

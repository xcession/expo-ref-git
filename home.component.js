import React from "react";
import { Platform, SafeAreaView, StatusBar, StyleSheet } from "react-native";
import { Button, Divider, Layout, TopNavigation } from "@ui-kitten/components";

export const HomeScreen = ({ navigation }) => {
  const navigateDetails = () => {
    navigation.navigate("Details");
  };

  return (
    <SafeAreaView style={[styles.container, styles.droidSafeArea]}>
      <TopNavigation title='Home' alignment='center' />
      <Divider />
      <Layout style={styles.container}>
        <Button onPress={() => navigation.openDrawer()}>OPEN DRAWER</Button>
        <Button onPress={navigateDetails}>OPEN DETAILS</Button>
      </Layout>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  droidSafeArea: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});

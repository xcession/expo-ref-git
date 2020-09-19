import React from "react";
import { Platform, SafeAreaView, StatusBar, StyleSheet } from "react-native";
import {
  Divider,
  Icon,
  Layout,
  Text,
  TopNavigation,
  TopNavigationAction,
} from "@ui-kitten/components";

const BackIcon = (props) => <Icon {...props} name='arrow-back' />;

export const AboutScreen = ({ navigation }) => {
  const navigateBack = () => {
    navigation.goBack();
  };

  const BackAction = () => (
    <TopNavigationAction icon={BackIcon} onPress={navigateBack} />
  );

  return (
    <SafeAreaView style={[styles.container, styles.droidSafeArea]}>
      <TopNavigation
        title='About'
        alignment='center'
        accessoryLeft={BackAction}
      />
      <Divider />
      <Layout style={styles.container}>
        <Text category='h1'>ABOUT</Text>
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

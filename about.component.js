import React from "react";
import Constants from "expo-constants";
import {
  Image,
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
} from "react-native";
import {
  Divider,
  Icon,
  Layout,
  Text,
  TopNavigation,
  TopNavigationAction,
} from "@ui-kitten/components";
import { version } from "./app.json";

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
      <Layout
        style={[
          styles.container,
          { justifyContent: "center", alignItems: "center" },
        ]}
      >
        <Icon
          style={{ width: 128, height: 128 }}
          fill='#7B847A'
          name='github-outline'
        />
        <Text style={styles.fontPrimary} category='h1'>
          Git Reference
        </Text>
        <Text
          style={[styles.textVersion, { marginBottom: 8 }]}
          category='c1'
          appearance='hint'
        >
          Version {Constants.manifest.version}
        </Text>
        <Image
          style={{ width: 136, height: 20 }}
          source={require("./assets/logo-rev.png")}
        />
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
  fontPrimary: { fontFamily: "RobotoSlab_700Bold" },
  fontSecondary: { fontFamily: "Roboto_400Regular" },
  textVersion: { fontFamily: "RobotoMono_400Regular" },
});

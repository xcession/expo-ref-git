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
const MenuIcon = (props) => <Icon {...props} name='menu' />;

export const ReferenceScreen = ({ navigation }) => {
  const navigateBack = () => {
    navigation.goBack();
  };
  const BackAction = () => (
    <TopNavigationAction icon={BackIcon} onPress={navigateBack} />
  );

  const openDrawer = () => {
    navigation.openDrawer();
  };
  const DrawerAction = () => (
    <TopNavigationAction icon={MenuIcon} onPress={openDrawer} />
  );

  return (
    <SafeAreaView style={[styles.container, styles.droidSafeArea]}>
      <TopNavigation
        title='Reference'
        alignment='center'
        accessoryLeft={BackAction}
        accessoryRight={DrawerAction}
      />
      <Divider />
      <Layout style={[styles.container, { padding: 8 }]}>
        <Text style={styles.fontPrimary} category='h1'>
          Reference
        </Text>
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
});

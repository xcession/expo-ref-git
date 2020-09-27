import React from 'react';
import { Image, SafeAreaView, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import {
  Divider,
  Icon,
  Layout,
  Text,
  TopNavigation,
  TopNavigationAction,
} from '@ui-kitten/components';
import { version } from './app.json';

const BackIcon = props => <Icon {...props} name="arrow-back" />;

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
        title="About"
        alignment="center"
        accessoryLeft={BackAction}
      />
      <Divider />
      <Layout
        style={[
          styles.container,
          { justifyContent: 'center', alignItems: 'center' },
        ]}
      >
        <Icon
          style={{ width: 128, height: 128 }}
          fill="#7B847A"
          name="github-outline"
        />
        <Text style={styles.fontPrimary} category="h1">
          Git Reference
        </Text>
        <Text style={{ marginBottom: 8 }} category="c1" appearance="hint">
          Version {Constants.manifest.version}
        </Text>
        <Image
          style={{ width: 136, height: 20 }}
          source={require('./assets/logo-rev.png')}
        />
      </Layout>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  fontPrimary: { fontFamily: 'RobotoSlab_700Bold' },
  fontSecondary: { fontFamily: 'Roboto_400Regular' },
});

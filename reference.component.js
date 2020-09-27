import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import {
  Card,
  Divider,
  Icon,
  Layout,
  MenuItem,
  OverflowMenu,
  Text,
  TopNavigation,
  TopNavigationAction,
} from '@ui-kitten/components';
import { ThemeContext } from './theme-context';
import _ from 'lodash';

// icons
const BackIcon = props => <Icon {...props} name="arrow-back" />;
const SunIcon = props => <Icon {...props} name="sun" />;
const MoonIcon = props => <Icon {...props} name="moon" />;
const MenuIcon = props => <Icon {...props} name="more-vertical" />;
const InfoIcon = props => <Icon {...props} name="info" />;

export const RefScreen = ({ navigation, route }) => {
  const { refIndex } = route.params;
  const refContents = refIndex.contents;

  const themeContext = React.useContext(ThemeContext);

  const toggleTheme = () => {
    // console.log("Theme toggled");
    themeContext.toggleTheme();
  };

  const [menuVisible, setMenuVisible] = React.useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  const navigateAbout = () => {
    navigation.navigate('About');
    toggleMenu();
  };

  const navigateBack = () => {
    navigation.goBack();
  };

  const BackAction = () => (
    <TopNavigationAction icon={BackIcon} onPress={navigateBack} />
  );

  const renderMenuAction = () => (
    <TopNavigationAction icon={MenuIcon} onPress={toggleMenu} />
  );

  const renderRightActions = () => (
    <React.Fragment>
      <TopNavigationAction
        icon={themeContext.theme === 'light' ? SunIcon : MoonIcon}
        onPress={toggleTheme}
      />
      <OverflowMenu
        anchor={renderMenuAction}
        visible={menuVisible}
        onBackdropPress={toggleMenu}
      >
        <MenuItem
          accessoryLeft={InfoIcon}
          title="About"
          onPress={navigateAbout}
        />
      </OverflowMenu>
    </React.Fragment>
  );

  return (
    <SafeAreaView style={[styles.container, styles.droidStatusBar]}>
      {/* navigation bar */}
      <TopNavigation
        alignment="center"
        title={refIndex.title}
        subtitle={_.truncate(refIndex.summary, { length: 40 })}
        accessoryLeft={BackAction}
        accessoryRight={renderRightActions}
      />
      {/* end of navigation bar */}
      <Divider />
      {/* content wrapper */}
      <Layout style={styles.container}>
        <ScrollView style={{ padding: 8 }}>
          {refContents.map((data, key) => {
            return (
              // card
              <Card style={styles.card} key={key}>
                <Text style={styles.fontPrimary} category="h4">
                  {data.title}
                </Text>
                <Text
                  style={styles.fontSecondary}
                  category="p1"
                  appearance="hint"
                >
                  {data.summary}
                </Text>
                <Card style={styles.code}>
                  <Text style={styles.fontSnippet} category="p1">
                    {data.command}
                  </Text>
                </Card>
              </Card>
              // end of card
            );
          })}
        </ScrollView>
      </Layout>
      {/* end of content wrapper */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  fontPrimary: { fontFamily: 'RobotoSlab_700Bold' },
  fontSecondary: { fontFamily: 'Roboto_400Regular' },
  fontSnippet: { fontFamily: 'RobotoMono_400Regular' },
  droidStatusBar: {
    paddingTop: Platform.OS === 'android' ? Constants.statusBarHeight : 0,
  },
  card: {
    marginBottom: 6,
  },
  code: {
    marginTop: 6,
  },
});

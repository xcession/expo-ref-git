import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import Constants from 'expo-constants';
import {
  Card,
  Divider,
  Icon,
  Input,
  Layout,
  MenuItem,
  OverflowMenu,
  Text,
  TopNavigation,
  TopNavigationAction,
} from '@ui-kitten/components';
import { refData } from './data';
import { ThemeContext } from './theme-context';

// icons
const GitIcon = props => <Icon {...props} name="github-outline" />;
const SunIcon = props => <Icon {...props} name="sun" />;
const MoonIcon = props => <Icon {...props} name="moon" />;
const MenuIcon = props => <Icon {...props} name="more-vertical" />;
const InfoIcon = props => <Icon {...props} name="info" />;

export const HomeScreen = ({ navigation }) => {
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

  const navigateReference = data => {
    // console.log(data);
    navigation.navigate('Reference', { refIndex: data });
  };

  const renderMenuAction = () => (
    <TopNavigationAction icon={MenuIcon} onPress={toggleMenu} />
  );

  const renderLeftAction = () => <TopNavigationAction icon={GitIcon} />;

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

  const SearchIcon = props => (
    <TouchableOpacity onPress={() => console.log('pressed')}>
      <Icon {...props} name="search" />
    </TouchableOpacity>
  );

  // const [value, setValue] = React.useState("");

  return (
    <SafeAreaView style={[styles.container, styles.droidStatusBar]}>
      {/* navigation bar */}
      <TopNavigation
        alignment="center"
        title="Git Reference"
        // subtitle='Subtitle'
        accessoryLeft={renderLeftAction}
        accessoryRight={renderRightActions}
      />
      {/* end of navigation bar */}
      {/* header bar */}
      {/* <Layout style={styles.headerBar}>
        <Input
          placeholder="Search"
          // value={value}
          // onChangeText={(nextValue) => setValue(nextValue)}
          accessoryRight={SearchIcon}
        />
      </Layout> */}
      {/* end of header bar */}
      <Divider />
      {/* content wrapper */}
      <Layout style={styles.container}>
        <ScrollView style={{ padding: 8 }}>
          {refData.map((data, key) => {
            return (
              // card
              <Card
                style={styles.card}
                key={key}
                onPress={() => {
                  navigateReference(data);
                }}
              >
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
  headerBar: {
    paddingHorizontal: 16,
    paddingBottom: 6,
  },
  card: {
    marginBottom: 6,
  },
});

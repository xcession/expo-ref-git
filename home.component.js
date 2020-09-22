import React from "react";
import {
  Platform,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import {
  Card,
  Divider,
  Icon,
  Input,
  Layout,
  OverflowMenu,
  Text,
  TopNavigation,
  TopNavigationAction,
  MenuItem,
} from "@ui-kitten/components";
import _ from "lodash";
import { referenceData } from "./data";

// icons
const GitIcon = (props) => <Icon {...props} name='github-outline' />;
const MenuIcon = (props) => <Icon {...props} name='more-vertical' />;
const InfoIcon = (props) => <Icon {...props} name='info' />;

export const HomeScreen = ({ navigation }) => {
  const [menuVisible, setMenuVisible] = React.useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  const renderMenuAction = () => (
    <TopNavigationAction icon={MenuIcon} onPress={toggleMenu} />
  );

  const renderLeftAction = () => <TopNavigationAction icon={GitIcon} />;

  const renderRightActions = () => (
    <React.Fragment>
      <OverflowMenu
        anchor={renderMenuAction}
        visible={menuVisible}
        onBackdropPress={toggleMenu}
      >
        <MenuItem
          accessoryLeft={InfoIcon}
          title='About'
          onPress={() => console.log("About pressed")}
        />
      </OverflowMenu>
    </React.Fragment>
  );

  const SearchIcon = (props) => (
    <TouchableOpacity onPress={() => console.log(value)}>
      <Icon {...props} name='search' />
    </TouchableOpacity>
  );

  const [value, setValue] = React.useState("");

  return (
    <SafeAreaView style={[styles.container, styles.droidSafeArea]}>
      {/* navigation bar */}
      <TopNavigation
        alignment='center'
        title='Git Reference'
        subtitle='HELLO'
        accessoryLeft={renderLeftAction}
        accessoryRight={renderRightActions}
      />
      {/* end of navigation bar */}
      {/* header bar */}
      <Layout style={styles.headerBar}>
        <Input
          placeholder='Search'
          value={value}
          onChangeText={(nextValue) => setValue(nextValue)}
          accessoryRight={SearchIcon}
        />
      </Layout>
      <Divider />
      {/* end of header bar */}
      {/* content wrapper */}
      <Layout style={[styles.container, { padding: 8 }]}>
        <ScrollView>
          {referenceData.map((data, key) => {
            return (
              <Card
                style={styles.card}
                key={key}
                onPress={() => console.log("Pressed:", { key })}
              >
                <Text style={styles.fontPrimary} category='h4'>
                  {data.title}
                </Text>
                <Text
                  style={styles.fontSecondary}
                  category='p1'
                  appearance='hint'
                >
                  {data.summary}
                </Text>
              </Card>
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
  droidSafeArea: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  fontPrimary: { fontFamily: "RobotoSlab_700Bold" },
  fontSecondary: { fontFamily: "Roboto_400Regular" },
  fontSnippet: { fontFamily: "RobotoMono_400Regular" },
  headerBar: {
    paddingHorizontal: 16,
    paddingBottom: 6,
  },
  card: {
    marginBottom: 6,
  },
});

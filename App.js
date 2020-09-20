import React from "react";
import * as eva from "@eva-design/eva";
import { ApplicationProvider, IconRegistry } from "@ui-kitten/components";
import { default as theme } from "./theme.json"; // <-- Import app theme
import { EvaIconsPack } from "@ui-kitten/eva-icons";
import { AppNavigator } from "./navigation.component";
import { AppLoading } from "expo";
import {
  useFonts,
  Roboto_400Regular,
  Roboto_400Regular_Italic,
  Roboto_700Bold,
  Roboto_700Bold_Italic,
  RobotoMono_400Regular,
  RobotoMono_400Regular_Italic,
  RobotoMono_700Bold,
  RobotoMono_700Bold_Italic,
  RobotoSlab_400Regular,
  RobotoSlab_700Bold,
} from "@expo-google-fonts/dev";

export default () => {
  let [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_400Regular_Italic,
    Roboto_700Bold,
    Roboto_700Bold_Italic,
    RobotoMono_400Regular,
    RobotoMono_400Regular_Italic,
    RobotoMono_700Bold,
    RobotoMono_700Bold_Italic,
    RobotoSlab_400Regular,
    RobotoSlab_700Bold,
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <>
        <IconRegistry icons={EvaIconsPack} />
        <ApplicationProvider {...eva} theme={{ ...eva.light, ...theme }}>
          <AppNavigator />
        </ApplicationProvider>
      </>
    );
  }
};

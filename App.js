import React from "react";
import * as eva from "@eva-design/eva";
import {
  ApplicationProvider,
  Button,
  Layout,
  Text,
} from "@ui-kitten/components";

const App = () => {
  return (
    <ApplicationProvider {...eva} theme={eva.light}>
      <Layout
        style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
      >
        <Text category='h1'>HELLO</Text>
        <Text>Open up App.js to start working on your app!</Text>
        <Button
          icon='camera'
          mode='contained'
          onPress={() => console.log("Pressed")}
        >
          Press me
        </Button>
      </Layout>
    </ApplicationProvider>
  );
};

export default App;

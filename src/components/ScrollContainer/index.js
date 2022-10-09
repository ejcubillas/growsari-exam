import React from "react";
import { ScrollView, SafeAreaView } from "react-native";

function ScrollContainer(props) {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView style={{ backgroundColor: '#fff' }}>
        {props.children}
      </ScrollView>
    </SafeAreaView>
  );
}

export default ScrollContainer;
import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  SectionList,
  StatusBar,
  TextInput,
  ScrollView,
  Image,
} from "react-native";

export default function App() {
  const DATA = [
    {
      title: "Education",
      data: [
        "University of Santo Tomas",
        "Romarinda International School",
        "St' Mary's College QC",
      ],
    },
    {
      title: "Skills",
      data: ["Python", "PHP", "JavaScript"],
    },
  ];

  return (
    <SafeAreaView
      style={{
        width: "100%",
        height: "100%",
      }}
    >
      {
        <Image
          source={{
            uri: "https://i.chzbgr.com/full/9470547712/hF818AEAC/dog",
          }}
          style={{
            alignSelf: "center",

            width: 120,
            height: 120,
            borderRadius: 100,
            borderWidth: 5,
            borderColor: "black",
          }}
        ></Image>
      }
      <Text
        style={{
          padding: 20,
          color: "white",
          backgroundColor: "black",
          opacity: 0.9,
          fontSize: 32,
          fontWeight: "bold",
        }}
      >
        Robin Cruz
      </Text>
      <Text
        style={{
          height: 20,
          padding: 12,
          color: "black",
          backgroundColor: "lightgrey",
          fontSize: 15,
        }}
      >
        About myself.
      </Text>
      <Text
        style={{
          height: 100,
          padding: 12,
          color: "black",
          opacity: 0.5,
          backgroundColor: "white",
          fontSize: 20,
        }}
      >
        Bark bark bark bark bark bark bark bark bark bark bark bark bark bark
        bark bark. Bark bark bark bark bark bark bark bark bark bark bark bark
        bark bark bark bark. Bark bark bark bark bark bark bark bark bark bark
        bark bark bark bark bark bark.
      </Text>
      <SectionList
        sections={DATA}
        renderSectionHeader={({ section: { title } }) => (
          <Text
            style={{
              padding: 7,
              color: "black",
              backgroundColor: "lightgrey",
              fontSize: 20,
              fontWeight: "bold",
            }}
          >
            {title}
          </Text>
        )}
        renderItem={({ item }) => (
          <Text
            style={{
              padding: 9,
              fontSize: 20,
              borderBottomWidth: 1,
              backgroundColor: "white",
              borderBottomColor: "black",
            }}
          >
            {item}
          </Text>
        )}
      />
    </SafeAreaView>
  );
  const styles = StyleSheet.create({});
}

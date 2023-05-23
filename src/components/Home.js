import React, { useState } from "react";
import { Image, StyleSheet, View, Text, PermissionsAndroid, Platform } from "react-native";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import { connect } from "react-redux";

import DocumentPicker, {
  isCancel,
  isInProgress,
} from "react-native-document-picker";
import { Theme } from "../styles/theme";

const uris = [
  "file:///android_asset/documents/demo.pdf",
  "file:///android_asset/images/demo.jpg",
  "file:///android_asset/images/demo-png.png",
];

const Home = (props) => {
  const navigation = useNavigation();
  const [selectedFile, setSelectedFile] = useState(null);
  const [selectedUri, setSelectedUri] = useState(null);

  function handleError(error) {
    if (isCancel(error)) {
      console.warn("cancelled");
      // User cancelled the picker, exit any dialogs or menus and move on
    } else if (isInProgress(error)) {
      console.warn(
        "multiple pickers were opened, only the last will be considered"
      );
    } else {
      throw error;
    }
  }

  async function selectFile() {
    const granted = Platform.OS === "android"
      ? await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE, {
        buttonNeutral: 'Ask Me Later',
        buttonNegative: 'Cancel',
        buttonPositive: 'OK',
      })
      : null;

    const allowed = Platform.OS === "android"
      ? await PermissionsAndroid.check(PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE)
      : false;

    if(!allowed && granted !== PermissionsAndroid.RESULTS.GRANTED) {
      return;
    }

    try {
      const pickerResult = await DocumentPicker.pickSingle({
        presentationStyle: "fullScreen",
        copyTo: "cachesDirectory",
      });
      setSelectedFile([pickerResult]);
      setSelectedUri(pickerResult.fileCopyUri);
      onClick(selectedUri);
    } catch (e) {
      handleError(e);
    }
  }

  function onClick(selectedUri) {
    setSelectedUri(selectedUri);
    navigation.navigate("Viewer", { selectedUri });
  }

  return (
    <ScrollView style={styles.marginedView}>
      <TouchableOpacity
        style={styles.appPressable}
        onPress={() => onClick(uris[0])}
      >
        <Image
          source={{ uri: "asset:/images/demo-pdf.jpg" }}
          style={{ width: "100%", height: 150 }}
        />
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.appPressable}
        onPress={() => onClick(uris[1])}
      >
        <Image
          source={{ uri: "asset:/images/demo.jpg" }}
          style={{ width: "100%", height: 150 }}
        />
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.appPressable}
        onPress={() => onClick(uris[2])}
      >
        <Image
          source={{ uri: "asset:/images/demo-png.jpg" }}
          style={{ width: "100%", height: 150 }}
        />
      </TouchableOpacity>

      <View style={[styles.appButtonContainer, { marginTop: 32 }]}>
        <TouchableOpacity onPress={selectFile} style={styles.appButton}>
          <Text style={styles.appButtonText}>Choose my own file</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.appButtonContainer}>
        <TouchableOpacity onPress={onClick} style={styles.appButton}>
          <Text style={styles.appButtonText}>Reset to sample</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  ...Theme,
});

export default connect(null)(Home);

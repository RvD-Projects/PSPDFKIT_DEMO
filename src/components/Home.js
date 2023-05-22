import React, { useState, useEffect } from "react";
import { Image, StyleSheet, View, Text } from "react-native";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import { connect } from "react-redux";

import DocumentPicker, {
  isCancel,
  isInProgress,
} from "react-native-document-picker";
import { Colors } from "../styles/theme";

const uris = [
  "file:///android_asset/documents/demo.pdf",
  "file:///android_asset/images/demo.jpg",
  "file:///android_asset/images/demo-png.jpg",
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
    try {
      const pickerResult = await DocumentPicker.pickSingle({
        presentationStyle: "fullScreen",
        copyTo: "cachesDirectory",
      });
      setSelectedFile([pickerResult]);
      setSelectedUri(pickerResult.fileCopyUri);
    } catch (e) {
      handleError(e);
    }
  }

  useEffect(() => {
    selectedUri && navigation.navigate("Viewer", { selectedUri });
  }, [selectedUri]);

  return (
    <ScrollView style={styles.marginedView}>
      <TouchableOpacity
        style={styles.appPressable}
        onPress={() => setSelectedUri(uris[0])}
      >
        <Image
          source={{ uri: "asset:/images/demo-pdf.jpg" }}
          style={{ width: "100%", height: 150 }}
        />
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.appPressable}
        onPress={() => setSelectedUri(uris[1])}
      >
        <Image
          source={{ uri: "asset:/images/demo.jpg" }}
          style={{ width: "100%", height: 150 }}
        />
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.appPressable}
        onPress={() => setSelectedUri(uris[2])}
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
        <TouchableOpacity
          onPress={() => navigation.navigate("Viewer")}
          style={styles.appButton}
        >
          <Text style={styles.appButtonText}>Go to Viewer</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  marginedView: {
    marginVertical: 12,
    paddingHorizontal: 12,
  },
  appPressable: {
    elevation: 6,
    marginBottom: 10,
    borderWidth: 2,
    borderColor: Colors.black,
    backgroundColor: Colors.secondary,
  },
  appButtonContainer: {
    elevation: 6,
    marginBottom: 10,
    backgroundColor: Colors.primary,
  },
  appButton: {
    borderWidth: 1,
    borderColor: Colors.black,
  },
  appButtonText: {
    fontSize: 16,
    color: "#000",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase",
    padding: 10,
  },
});

export default connect(null)(Home);

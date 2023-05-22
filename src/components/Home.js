import React, { useState, useEffect } from "react";
import { Image, StyleSheet, View, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import { connect } from "react-redux";

import DocumentPicker, {
  isCancel,
  isInProgress,
} from "react-native-document-picker";

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
    <View>
      <TouchableOpacity
        style={{ marginBottom: 4 }}
        onPress={() => setSelectedUri(uris[0])}
      >
        <Image
          source={{ uri: "asset:/images/demo-pdf.jpg" }}
          style={{ width: "100%", height: 150 }}
        />
      </TouchableOpacity>

      <TouchableOpacity
        style={{ marginVertical: 4 }}
        onPress={() => setSelectedUri(uris[1])}
      >
        <Image
          source={{ uri: "asset:/images/demo.jpg" }}
          style={{ width: "100%", height: 150 }}
        />
      </TouchableOpacity>

      <TouchableOpacity
        style={{ marginVertical: 4 }}
        onPress={() => setSelectedUri(uris[2])}
      >
        <Image
          source={{ uri: "asset:/images/demo-png.jpg" }}
          style={{ width: "100%", height: 150 }}
        />
      </TouchableOpacity>

      <View style={styles.appButtonContainer}>
        <TouchableOpacity onPress={selectFile} style={styles.appButton}>
          <Text style={styles.appButtonText}>Choose my own file</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  appButtonContainer: {
    marginTop: 100,
    marginVertical: 4,
  },
  appButton: {
    elevation: 8,
    backgroundColor: "#00C2CE",
    paddingVertical: 10,
    paddingHorizontal: 12,
  },
  appButtonText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase",
  },
});

const mapDispatchToProps = {};

export default connect(null, mapDispatchToProps)(Home);

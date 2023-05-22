import { Image, StyleSheet, View, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { connect } from "react-redux";

import DocumentPicker, {
  isCancel,
  isInProgress,
} from "react-native-document-picker";
import { useState } from "react";

const uris = [

]

const Home = (props) => {
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
  };

  async function selectFile() {
    try {
      const pickerResult = await DocumentPicker.pickSingle({
        presentationStyle: "fullScreen",
        copyTo: "cachesDirectory",
      });
      setSelectedFile([pickerResult]);
    } catch (e) {
      handleError(e);
    }
  }

  return (
    <View>
      <TouchableOpacity style={{ marginBottom: 4 }} onPress={() => setSelectedUri(uris[0])}>
        <Image
          source={{ uri: "asset:/images/demo-pdf.jpg" }}
          style={{ width: "100%", height: 150 }}
        />
      </TouchableOpacity>

      <TouchableOpacity style={{ marginVertical: 4 }} onPress={() => setSelectedUri(uris[0])}>
        <Image
          source={{ uri: "asset:/images/demo.jpg" }}
          style={{ width: "100%", height: 150 }}
        />
      </TouchableOpacity>

      <TouchableOpacity style={{ marginVertical: 4 }} onPress={() => setSelectedUri(uris[0])}>
        <Image
          source={{ uri: "asset:/images/demo-png.jpg" }}
          style={{ width: "100%", height: 150 }}
        />
      </TouchableOpacity>

      <TouchableOpacity onPress={selectFile} style={styles.appButtonContainer}>
        <Text style={styles.appButtonText}>Choose my own file</Text>
      </TouchableOpacity>
      
    </View>
  );
};

const styles = StyleSheet.create({
  appButtonContainer: {
    marginTop: 140, 
    marginVertical: 4,
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
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});

const mapDispatchToProps = {};

export default connect(null, mapDispatchToProps)(Home);

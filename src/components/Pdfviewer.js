import React, { createRef } from "react";
import { StyleSheet, Alert, View } from "react-native";
import PSPDFKitView from "react-native-pspdfkit";
import { useNavigation } from "@react-navigation/native";
import { connect } from "react-redux";
import { Text } from "@rneui/themed";
import { Theme } from "../styles/theme";
import { TouchableOpacity } from "react-native-gesture-handler";

function Pdfviewer(props) {
  const { selectedUri } = props;

  const defaultUri = "file:///android_asset/documents/sample.pdf";
  const usedUri = selectedUri ?? defaultUri;

  const navigation = useNavigation();
  const viewerRef = createRef();

  function onViewerStateChange(e) {
    console.warn("PSPDFKIT: State changed");
    console.log(e);
  }

  function onViewerAnnotChange(e) {
    console.warn("PSPDFKIT: Annot changed");
    console.log(e);
  }

  function onViewerDocSave(e) {
    console.warn("PSPDFKIT: Saved OK");
    console.log(e);
  }

  function onViewerDocSaveFailed(e) {
    console.warn("PSPDFKIT: Saved failed");
    console.log(e);
  }

  function onViewerDataReturn(e) {
    console.warn("PSPDFKIT: Data returned");
    console.log(e);
  }

  return (
    <View style={styles.viewContainer}>
      <View style={styles.appButtonContainer}>
        <TouchableOpacity style={[styles.appButton]}>
          <Text style={[styles.appButtonText]}>Loaded Uri: </Text>
          <Text
            style={[styles.appButtonText, { paddingVertical: 0, fontSize: 10 }]}
          >
            {usedUri}
          </Text>
        </TouchableOpacity>
      </View>

      <PSPDFKitView
        ref={viewerRef}
        fragmentTag="PDF1"
        document={usedUri}
        configuration={{
          showThumbnailBar: "scrollable",
          pageTransition: "scrollContinuous",
          scrollDirection: "vertical",
        }}
        style={{ flex: 1 }}
        onDocumentSaved={(e) => onViewerDocSave(e)}
        onDocumentSaveFailed={(e) => onViewerDocSaveFailed(e)}
        onDataReturned={(e) => onViewerDataReturn(e)}
        onStateChanged={(e) => onViewerStateChange(e)}
        onAnnotationsChanged={(e) => onViewerAnnotChange(e)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  ...Theme,
});

const mapStateToProps = (state, props) => {
  return { selectedUri: props.route.params?.selectedUri };
};

export default connect(mapStateToProps)(Pdfviewer);

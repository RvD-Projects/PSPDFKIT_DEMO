import React, { createRef, useState, useEffect, useRef } from "react";
import PSPDFKitView from "react-native-pspdfkit";
import { useNavigation } from "@react-navigation/native";
import { connect } from "react-redux";

function Pdfviewer(props) {
  const { selectedUri } = props;

  const defaultUri = "file:///android_asset/documents/sample.pdf";
  const navigation = useNavigation();
  const viewerRef = useRef();

  onViewerStateChange = (e) => {
    console.warn("PSPDFKIT: State changed");
    console.log(e);
  };

  onViewerAnnotChange = (e) => {
    console.warn("PSPDFKIT: Annot changed");
    console.log(e);
  };

  onViewerDocSave = (e) => {
    console.warn("PSPDFKIT: Saved OK");
    console.log(e);
  };

  onViewerDocSaveFailed = (e) => {
    console.warn("PSPDFKIT: Saved failed");
    console.log(e);
  };

  onViewerDataReturn = (e) => {
    console.warn("PSPDFKIT: Data returned");
    console.log(e);
  };

  return (
    <PSPDFKitView
      ref={viewerRef}
      fragmentTag="PDF1"
      document={selectedUri ?? defaultUri}
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
  );
}

const mapStateToProps = (state, props) => {
  return { selectedUri: props.route.params?.selectedUri };
};

export default connect(mapStateToProps)(Pdfviewer);

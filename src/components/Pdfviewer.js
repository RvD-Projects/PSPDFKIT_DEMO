import React, { createRef } from 'react';
import PSPDFKitView from 'react-native-pspdfkit';

function Pdfviewer() {
  const viewerRef = createRef(null);
  const docs = [
    'demo.pdf'
  ];

  onViewerStateChange = e => {
    console.warn("PSPDFKIT: State changed");
    console.log(e);
  }

  onViewerAnnotChange = e => {
    console.warn("PSPDFKIT: Annot changed");
    console.log(e);
  }

  onViewerDocSave = e => {
    console.warn("PSPDFKIT: Saved OK");
    console.log(e);
  }

  onViewerDocSaveFailed = e => {
    console.warn("PSPDFKIT: Saved failed");
    console.log(e);
  }

  onViewerDataReturn = e => {
    console.warn("PSPDFKIT: Data returned");
    console.log(e);
  }

  return (
      <PSPDFKitView
        ref={viewerRef}
        fragmentTag="PDF1"
        document={"file:///android_asset/documents" + docs[0]}
        configuration={{
          showThumbnailBar: "scrollable",
          pageTransition: "scrollContinuous",
          scrollDirection: "vertical",
        }}
        style={{ flex: 1 }}
        onDocumentSaved={e => onViewerDocSave(e)}
        onDocumentSaveFailed={e => onViewerDocSaveFailed(e)}
        onDataReturned={e => onViewerDataReturn(e)}
        onStateChanged={e => onViewerStateChange(e)}
        onAnnotationsChanged={e => onViewerAnnotChange(e)}
      />
  );
}

export default Pdfviewer;

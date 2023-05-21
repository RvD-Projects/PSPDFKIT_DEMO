import React, { createRef } from 'react';
import PSPDFKitView from 'react-native-pspdfkit';

function App() {
  const viewerRef = createRef(null);
  const docs = [
    '6255.pdf',
    '00000.jpeg',
    'documents/0000.jpg',
    'documents/11111.jpg',
    'documents/111111.jpeg',
    'documents/6132.pdf',
    'documents/6206.pdf',
    'documents/6221.pdf'
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
        document={"file:///android_asset/" + docs[0]}
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

export default App;

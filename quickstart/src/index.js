import * as gcpdfviewer from '@grapecity/gcpdfviewer';
import repQuickStartSample from './pdfs/diodocs_pricelist.pdf';

var viewer = new gcpdfviewer.GcPdfViewer('#pdfviewer', { supportApi: 'https://localhost:7133/api/pdf-viewer' });
    viewer.addDefaultPanels();
    viewer.addAnnotationEditorPanel();
    viewer.addFormEditorPanel();
    viewer.open(repQuickStartSample);
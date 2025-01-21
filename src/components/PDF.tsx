import { useEffect, useRef, useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import { AnimatePresence, motion } from "framer-motion";

import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";
import { RESUME_URL } from "../consts";
import { getResume } from "../utils";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url
).toString();

export default function PDF() {
  const docRef = useRef<HTMLDivElement>(null);
  const [numPages, setNumPages] = useState<number>();
  const [width, setWidth] = useState<number>();
  const [data, setData] = useState<Blob | null>(
    // @ts-ignore
    (window.resumeBlob as Blob | undefined) ?? null
  );

  useEffect(() => {
    if (data) return;
    // Going to resume url directly, blob not prefetched
    getResume().then(() => {
      // @ts-ignore
      setData(window.resumeBlob as Blob);
    });
  });

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.1 }}
        ref={docRef}
        className="w-full"
      >
        <Document
          loading={<></>}
          noData={<></>}
          className="flex w-full flex-col gap-2 rounded-md overflow-clip border"
          file={data}
          onLoadSuccess={({ numPages: nextNumPages }) => {
            if (docRef.current) setWidth(docRef.current.clientWidth);
            setNumPages(nextNumPages);
          }}
        >
          {Array.from(new Array(numPages), (_, index) => (
            <Page
              loading={<></>}
              key={`page_${index + 1}`}
              pageNumber={index + 1}
              className="w-full shadow-sm"
              width={width ?? 0}
            ></Page>
          ))}
        </Document>
      </motion.div>
    </AnimatePresence>
  );
}

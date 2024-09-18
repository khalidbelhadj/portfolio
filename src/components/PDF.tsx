import { useEffect, useRef, useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import { AnimatePresence, motion } from "framer-motion";

import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url
).toString();

export default function PDF() {
  const docRef = useRef<HTMLDivElement>(null);
  const [numPages, setNumPages] = useState<number>();
  const [width, setWidth] = useState<number>();
  const [data, setData] = useState<Blob | null>(null);

  useEffect(() => {
    if (data) return;
    const f = async () => {
      const url =
        "https://raw.githubusercontent.com/khalidbelhadj/cv/main/build/Khalid-Belhadj-CV.pdf";
      const contentRes = await fetch(url);
      if (!contentRes.ok) return;
      const blob = await contentRes.blob();
      setData(blob);
    };

    f();
  });

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        ref={docRef}
        className="w-full"
      >
        <Document
          loading={<></>}
          noData={<></>}
          className="flex w-full flex-col gap-2 rounded-md overflow-clip outline outline-border"
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

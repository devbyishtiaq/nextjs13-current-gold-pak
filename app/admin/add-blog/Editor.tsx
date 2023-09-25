"use client";
import React, { FC, useState } from "react";
import dynamic from "next/dynamic";

const ReactQuillNoSSR = dynamic(() => import("react-quill"), { ssr: false });
import "react-quill/dist/quill.snow.css";

const modules = {
  toolbar: [
    [{ header: [1, 2, 3, 4, 5, 6, false] }],
    [{ font: [] }],
    [{ size: [] }],
    ["bold", "italic", "underline", "strike", "blockquote"],
    [
      { list: "ordered" },
      { list: "bullet" },
      { indent: "-1" },
      { indent: "+1" },
    ],
    ["link", "image", "video"],
  ],
};

type EditorProps = {
  content: string;
  setContent: any;
};

const Editor: FC<EditorProps> = ({ content, setContent }) => {
  const [value, setValue] = useState("");

  return (
    <ReactQuillNoSSR
      modules={modules}
      theme="snow"
      value={content}
      onChange={setContent}
    />
  );
};
export default Editor;

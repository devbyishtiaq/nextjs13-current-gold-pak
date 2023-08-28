"use client";
import React, { useState } from "react";
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

export default function Editor() {
  const [value, setValue] = useState("");

  return (
    <ReactQuillNoSSR
      modules={modules}
      theme="snow"
      value={value}
      onChange={setValue}
    />
  );
}

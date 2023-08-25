"use client";
import React, { useState, useRef, useMemo } from "react";
import JoditEditor from "jodit-react";

interface EditorProps {
  placeholder?: string;
}

const Editor: React.FC<EditorProps> = ({ placeholder }) => {
  const editor = useRef<any>(null);
  const [content, setContent] = useState<string>("");

  const config = useMemo(
    () => ({
      readonly: false,
      placeholder: placeholder || "Start typing...",
    }),
    [placeholder]
  );

  return (
    <JoditEditor
      ref={editor}
      value={content}
      config={config}
      onBlur={(newContent: string) => setContent(newContent)}
      onChange={(newContent: string) => {}}
    />
  );
};

export default Editor;

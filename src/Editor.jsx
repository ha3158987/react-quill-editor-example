import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import styled from "styled-components";

const modules = {
  toolbar: [
    //[{ 'font': [] }],
    [{ header: [1, 2, false] }],
    ["bold", "italic", "underline", "strike", "blockquote"],
    [
      { list: "ordered" },
      { list: "bullet" },
      { indent: "-1" },
      { indent: "+1" },
    ],
    ["link", "image"],
    [{ align: [] }, { color: [] }, { background: [] }], // dropdown with defaults from theme
    ["clean"],
  ],
};

const formats = [
  //'font',
  "header",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "list",
  "bullet",
  "indent",
  "link",
  "image",
  "align",
  "color",
  "background",
];

function Editor() {
  const [value, setValue] = useState("");

  const handleChange = (content, delta, source, editor) => {
    // console.log(editor.getHTML()); // html 사용시
    console.log(JSON.stringify(editor.getContents())); // delta 사용시
    setValue(editor.getHTML());
  };

  return (
    <Container>
      <ReactQuill
        style={{ height: "600px" }}
        theme="snow"
        modules={modules}
        formats={formats}
        value={value}
        onChange={handleChange}
      />
    </Container>
  );
}

const Container = styled.div`
  height: 650px;
`;

export default Editor;

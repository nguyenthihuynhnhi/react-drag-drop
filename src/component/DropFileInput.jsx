import React, { useRef, useState } from 'react';

import "./drop-file-input.css";
import { ImageConfig } from "../config/ImageConfig";
import uploadImg from "../assets/cloud-upload-regular-240.png";

const DropFileInput = props => {

  const wrapperRef = useRef(null);
  const [fileList, setFileList] = useState([]);


  // chọn thư mục kéo
  const onDragEnter = () => {
    return wrapperRef.current.classList.add("dragover");
  };
  //cho phép thư mục dời đi
  const onDragLeave = () => {
    return wrapperRef.current.classList.remove("dragover");
  };
  //thả thư mục vào nơi upload
  const onDrop = () => {
    return wrapperRef.current.classList.remove("dragover");
  };

  const onFileDrop = (e) => {
    const newFile = e.target.files[0];
    console.log("👙 🏊‍♀️  🏄‍♀️ 🌴 🌊  ~ newFile:", newFile);

    if (newFile) {
      const updatedList = [...newFile, newFile];
      setFileList(updatedList);
    }
  };

  return (
    < div
      ref={wrapperRef}
      className='drop-file-input'
      onDragEnter={onDragEnter}
      onDragLeave={onDragLeave}
      onDrop={onDrop}
    >
      <div className="drop-file-input__label">
        <img src={uploadImg} alt="" />
        <p>Drag & Drop your file here</p>
      </div>
      <input type="file" name="" value="" onChange={onFileDrop} />
    </ div>
  );
};

DropFileInput.propTypes = {};

export default DropFileInput;;;
"use client";

import { ImageType } from "@/app/admin/add-products/AddProductForm";
import React, { useCallback, useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";
import Button from "../Button";

interface SelectImageProps {
  addImageToState: (value: ImageType) => void;
  removeImageFromState: (value: ImageType) => void;
  isProductCreated: boolean;
  item?: ImageType;
}

const SelectImage: React.FC<SelectImageProps> = ({
  item,
  isProductCreated,
  addImageToState,
  removeImageFromState,
}) => {
  const [file, setFile] = useState<File | null>(null);

  useEffect(() => {
    if (isProductCreated) {
      setFile(null);
    }
  }, [isProductCreated]);

  const handleFileChange = useCallback((value: File) => {
    setFile(value);
    addImageToState({ ...item, image: value });
  }, []);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    if (acceptedFiles.length > 0) {
      handleFileChange(acceptedFiles[0]);
    }
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: { "image/*": [".jpeg", ".png", ".jpg"] },
  });
  return (
    <div
      {...getRootProps()}
      className="border-2 border-slate-400 p-2 border-dashed cursor-pointer text-lg font-normal text-slate-400 flex items-center justify-center"
    >
      <input {...getInputProps()} />
      {isDragActive ? <p>Drop the files here...</p> : <p> + Upload Gambar</p>}
      {file && (
        <div className="flex flex-row gap-8 text-lg col-span-2 items-center justify-between">
          <p>{file?.name}</p>
          <div className="w-70px">
            <Button
              label="Cancel"
              small
              outline
              onClick={() => {
                setFile(null);
                removeImageFromState({ ...item, image: null });
              }}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default SelectImage;

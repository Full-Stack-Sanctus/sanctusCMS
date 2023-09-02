import React, { useState } from "react";
import Button from "../common/Button";

const ThumbnailUpload = ({ defaultValue, setValue }) => {
  const [imageSrc, setImageSrc] = useState(defaultValue);
  const [loading, setLoading] = useState(false);
  const [uploadData, setUploadData] = useState();
  const handleOnChange = (changeEvent) => {
    // ...
  };

  const handleUpload = async (uploadEvent) => {
    uploadEvent.preventDefault();
    setLoading(true);
    const form = uploadEvent.currentTarget;
    const fileInput = Array.from(form.elements).find(
      ({ name }) => name === "file"
    );
    try {
      const formData = new FormData();
      // specifying cloudinary upload preset
      formData.append("upload_preset", "ecommerce~cms");
      for (const file of fileInput.files) {
        formData.append("file", file);
      }
      const res = await fetch(
        "https://api.cloudinary.com/v1_1/scrapbook/image/upload",
        {
          method: "POST",
          body: formData,
        }
      );
      const data = await res.json();
      setImageSrc(data.secure_url);
      // adding the thumbnail URL to te main form data
      setValue("thumbnail", data.secure_url);
      setUploadData(data);
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };

  return (
    <form onSubmit={handleUpload}>
      // ...
      
      
      <input
        name="file"
        type="file"
        onChange={handleOnChange}
        className="mb-3 w-full rounded-md border p-3 focus:border-sky-300 focus:ring-sky-300"
      />
      <div>
        <img className="mb-2 aspect-video rounded" src={imageSrc} alt="" />
        {imageSrc && !uploadData && (
          <Button
            type="submit"
            variant="text"
            className="w-full"
            loading={loading}
            loadingText="Uploading..."
          >
            Upload
          </Button>
        )}
      </div>
      
    </form>
  );
};
export default ThumbnailUpload;

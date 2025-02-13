import { useState } from "react";
import axios from "axios";
import cloud from "../assets/cloud-download.svg"; // Ensure the path is correct

const AvatarUpload = ({ setAvatarUrl }) => {
  const [image, setImage] = useState(null);
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [avatarClicked, setAvatarClicked] = useState(false);

  const cloudName = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME;

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
      setImage(URL.createObjectURL(selectedFile));
    }
  };

  const handleFileUpload = async () => {
    if (!file) return;

    setLoading(true);

    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "hng_tickets");

    try {
      const response = await axios.post(
        `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
        formData
      );
      setAvatarUrl(response.data.secure_url);
      setImage(response.data.secure_url);
    } catch (err) {
      console.error("An error occurred during the upload:", err);
    } finally {
      setLoading(false);
    }
  };

  const handleAvatarReset = () => {
    setAvatarClicked(true);
    setImage(null);
    setFile(null);
  };

  return (
    <div className="avatar-upload">
      <section className="h-[200px] bg-[#000] flex items-center">
        <section className="w-[240px] h-[240px] flex flex-col items-center justify-center text-center mx-auto rounded-[32px] bg-[var(--color-tertiary)] border-4 border-[var(--color-light-blue)] shadow-inner">
          <label htmlFor="avatarUpload" className="cursor-pointer">
            {image ? (
              <img
                src={image}
                alt="Avatar Preview"
                className=" w-full rounded-[30px]"
                onClick={handleAvatarReset}
              />
            ) : (
              <>
                <img src={cloud} className="m-auto" alt="cloud icon" />
                <p className="mx-[24px]">Drag & drop or click to upload</p>
              </>
            )}

            <input
              onClick={{ handleFileUpload }}
              onChange={handleFileChange}
              type="file"
              accept="image/*"
              id="avatarUpload"
              className="hidden"
            />
          </label>
        </section>

        {loading && <p className="mt-4 text-blue-500">Uploading...</p>}
      </section>
    </div>
  );
};

export default AvatarUpload;

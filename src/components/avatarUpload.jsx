import { useState, useEffect } from "react";
import axios from "axios";
import cloud from "../assets/cloud-download.svg";

const AvatarUpload = ({ setAvatarUrl, onClick }) => {
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);

  const cloudName = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME;

  useEffect(() => {
    const storedImage = localStorage.getItem("avatarImage");
    console.log(storedImage);
    if (storedImage) {
      console.log("stored Image", storedImage);
      setImage(storedImage);
      setAvatarUrl(storedImage);
    }
  }, [setAvatarUrl]);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      setImage(URL.createObjectURL(selectedFile));
      console.log(image);
      handleFileUpload(selectedFile);
    }
  };

  const handleFileUpload = async (selectedFile) => {
    if (!selectedFile) {
      return;
    }

    setLoading(true);

    const formData = new FormData();
    formData.append("file", selectedFile);
    formData.append("upload_preset", "hng_tickets");
    console.log(formData);

    try {
      const response = await axios.post(
        `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
        formData
      );
      console.log(response.data);
      setAvatarUrl(response.data.secure_url);
      setImage(response.data.secure_url);
      console.log(image);
      localStorage.setItem("avatarImage", response.data.secure_url);
    } catch (err) {
      console.error(
        "Upload failed:",
        err.response ? err.response.data : err.message || "Unknown error o"
      );
    } finally {
      setLoading(false);
    }
  };

  const handleAvatarReset = () => {
    setImage(null);
    localStorage.removeItem("avatarImage");
  };

  return (
    <div className="avatar-upload" onClick={onClick}>
      <section className="h-50 avatar-bg flex items-center">
        <section
          tabIndex={0}
          onKeyDown={(e) =>
            e.key === "Enter" && document.getElementById("avatarUpload").click()
          }
          className="w-full relative max-w-60 h-60 focus-within:border-white flex flex-col text-center mx-auto rounded-[32px] bg-[var(--color-tertiary)] border-4 border-[var(--color-light-blue)] shadow-inner p-6"
        >
          <label htmlFor="avatarUpload" className="cursor-pointer">
            {image ? (
              <section>
                <img
                  src={image}
                  alt="Avatar Preview"
                  className="w-full h-full absolute inset-0 rounded-[32px] object-cover"
                  onClick={handleAvatarReset}
                />
                <div className="absolute inset-0 bg-black/30 rounded-[32px] opacity-0 hover:opacity-100 transition-opacity flex flex-col gap-2 justify-center items-center">
                  <img src={cloud} alt="cloud icon" />
                  <p className="mx-[24px]">Drag & drop or click to upload</p>
                </div>
              </section>
            ) : (
              <>
                <div
                  tabIndex={0}
                  onKeyDown={(e) =>
                    e.key === "Enter" &&
                    document.getElementById("avatarUpload").click()
                  }
                  className="absolute inset-0 bg-black/30 rounded-[32px] flex flex-col gap-2 focus-within:ring-2 focus-within:ring-white justify-center items-center"
                >
                  <img src={cloud} alt="cloud icon" />
                  <p className="mx-[24px]">Drag & drop or click to upload</p>
                </div>
              </>
            )}

            <input
              onChange={handleFileChange}
              type="file"
              accept="image/*"
              id="avatarUpload"
              className="hidden"
              aria-describedby="avatarError"
            />
          </label>
        </section>
      </section>

      {loading && (
        <p className="mt-4 text-white">Please wait while photo uploads...</p>
      )}
    </div>
  );
};

export default AvatarUpload;

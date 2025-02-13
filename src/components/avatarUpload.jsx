import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import cloud from "../assets/cloud-download.svg";

const AvatarUpload = ({ setAvatarUrl }) => {
  const [image, setImage] = useState(null);
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const {
    register,
    formState: { errors },
  } = useForm();

  const cloudName = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME;

  useEffect(() => {
    const storedImage = localStorage.getItem("avatarImage");
    console.log(storedImage);
    if (storedImage) {
      console.log("stored Image", storedImage);
      setImage(storedImage);
      setAvatarUrl(storedImage);
    }
  }, [image]);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
      setImage(URL.createObjectURL(selectedFile));
      console.log(image);
      handleFileUpload(selectedFile);
    }
  };

  const handleFileUpload = async (selectedFile) => {
    if (!selectedFile) return;

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
      console.error("An error occurred during the upload:", err);
    } finally {
      setLoading(false);
    }
  };

  const handleAvatarReset = () => {
    // setAvatarClicked(true);
    setImage(null);
    setFile(null);
    localStorage.removeItem("avatarImage");
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
              onChange={handleFileChange}
              type="file"
              accept="image/*"
              id="avatarUpload"
              className="hidden"
              aria-describedby="avatarError"
            />
            {errors.avatar && (
              <p
                id="avatarError"
                aria-live="polite"
                className="text-red-500 text-sm"
              >
                {errors.avatar.message}
              </p>
            )}
          </label>
        </section>

        {loading && <p className="mt-4 text-blue-500">Uploading...</p>}
      </section>
    </div>
  );
};

export default AvatarUpload;

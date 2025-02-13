import { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

const AvatarUpload = ({ setAvatarUrl }) => {
  const [file, setFile] = useState(null);

  const { register } = useForm({});

  const cloudName = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME;
  //   const apiKey = import.meta.env.VITE_CLOUDINARY_API_KEY;

  // Handle file change
  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  // Handle file upload
  const handleFileUpload = async () => {
    if (!file) return;

    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "hng_tickets");
    formData.append("cloud_name", cloudName);

    try {
      const response = await axios.post(
        `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
        formData
      );
      setAvatarUrl(response.data.secure_url);
      console.log("Uploaded image URL:", response.data.secure_url);
    } catch (err) {
      console.error("Upload error:", err);
    }
  };

  return (
    <div className="avatar-upload">
      <section className=" h-[200px] bg-[#000] flex items-center">
        <section
          onClick={handleFileUpload}
          className="w-[240px] h-[240px] cursor-pointer flex flex-col items-center justify-center text-center mx-auto p-[24px] rounded-[32px] bg-[var(--color-tertiary)] border-4 border-[var(--color-light-blue)] shadow-inner"
        >
          <label htmlFor="avatarUpload" className="cursor-pointer">
            {/* <img src={cloud} className="m-auto" alt="" /> */}
            <p>Drag & drop or click to upload</p>
            <input
              onChange={handleFileChange}
              type="file"
              id="avatarUpload"
              {...register("avatar", {
                required: "Avatar is required",
                validate: (fileList) =>
                  fileList[0]?.name.includes("cloudinary") ||
                  "Avatar must be a Cloudinary link",
              })}
              className="hidden"
              onKeyDown={(e) => e.key === "Enter" && e.target.click()}
            />
          </label>
          {file && (
            <img
              src={URL.createObjectURL(file)}
              alt="Preview"
              width="150"
              height="150"
            />
          )}
        </section>
      </section>
    </div>
  );
};

export default AvatarUpload;

import { useState } from "react";
import { api } from "../auth/auth";

export default function AddApp() {
  const [title, setTitle] = useState<string>("");
  const [url, setUrl] = useState<string>("");
  const [description1, setDescription1] = useState<string>("");
  const [description2, setDescription2] = useState<string>("");
  const [image1, setImage1] = useState<File | null>(null);
  const [image2, setImage2] = useState<File | null>(null);
  const [message, setMessage] = useState<string>("");

  const handleSubmit = async (): Promise<void> => {
    if (!title || !url || !description1 || !description2 || !image1 || !image2) {
      setMessage("Missing data");
    } else {
      setMessage("");

      try {
        // Upload images
        const uploadFile = async (file: File) => {
          const formData = new FormData();
          formData.append("image", file);
          const res = await api.post("/upload", formData, {
            headers: { "Content-Type": "multipart/form-data" },
          });
          return res.data.secure_url;
        };

        const [url1, url2] = await Promise.all([
          uploadFile(image1),
          uploadFile(image2),
        ]);

        const response = await api.post("/apps", {
          title,
          url,
          description1,
          description2,
          image1: url1,
          image2: url2,
        });

        setMessage("Sucessfully saved " + response.data.title);
      } catch (error) {
        setMessage("Error: " + error);
        return;
      }
    }
  };

  return (
    <div className="flex flex-col min-h-screen justify-center items-center text-text-primary">
      <h1>Add App</h1>

      <div className="flex w-[50%] flex-col justify-center items-center border p-2 rounded-lg">
        <span className="m-1">Title</span>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="p-2 w-[75%] bg-light rounded-lg text-text-on-light"
        />

        <span className="m-1">URL</span>
        <input
          type="text"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          className="p-2 w-[75%] bg-light rounded-lg text-text-on-light"
        />

        <span className="m-1">Description 1</span>
        <textarea
          value={description1}
          onChange={(e) => setDescription1(e.target.value)}
          className="p-2 w-[75%] bg-light rounded-lg text-text-on-light"
        />

        <span className="m-1">Description 2</span>
        <textarea
          value={description2}
          onChange={(e) => setDescription2(e.target.value)}
          className="p-2 w-[75%] bg-light rounded-lg text-text-on-light"
        />

        <span className="m-1">Image 1</span>
        <input
          type="file"
          accept="image/*"
          onChange={(e) => setImage1(e.target.files?.[0] || null)}
          className="p-2 w-[75%] bg-light rounded-lg text-text-on-light"
        />
        <span className="m-1">Image 2</span>
        <input
          type="file"
          accept="image/*"
          onChange={(e) => setImage2(e.target.files?.[0] || null)}
          className="p-2 w-[75%] bg-light rounded-lg text-text-on-light"
        />
      </div>
      <span className="m-2">{message}</span>
      <button
        onClick={() => handleSubmit()}
        className="px-4 py-2 m-2 rounded-lg bg-blue-600 text-white cursor-pointer hover:bg-blue-700"
      >
        Submit
      </button>
    </div>
  );
}

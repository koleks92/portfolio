import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getApps } from "../auth/auth";

type AppType = {
  id: string;
  title: string;
  url: string;
  description1: string;
  description2: string;
  image1: string;
  image2: string;
  created_at: string;
  updated_at: string;
};

export default function Dashboard() {
  const [appsList, setAppsList] = useState<AppType[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const navigate = useNavigate();

  const token = localStorage.getItem("token");

  if (!token) {
    navigate("/login");
  }

  useEffect(() => {
    console.log(appsList);
  }, [appsList]);

  useEffect(() => {
    async function fetchApps() {
      const apps = await getApps();
      setAppsList(apps);
      setLoading(false);
    }
    fetchApps();
  }, []);

  return (
    <div className="flex flex-col min-h-screen justify-center items-center text-text-primary">
      <div>
        <h1 className="m-2">Dashboard</h1>
        <h3 className="m-2 text-center cursor-pointer" onClick={() => navigate("/add_app")}>
          Add App
        </h3>
      </div>
      <div className="flex w-[90%] border-1 rounded-lg p-2">
        <table className="w-full border-collapse">
          <thead>
            <tr className="border-b-2 border-gray-300 text-left">
              <th className="px-4 py-2">Title</th>
              <th className="px-4 py-2">URL</th>
              <th className="px-4 py-2">Description 1</th>
              <th className="px-4 py-2">Description 2</th>
              <th className="px-4 py-2">Image 1</th>
              <th className="px-4 py-2">Image 2</th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <span className="p-2">Loading...</span>
            ) : (
              appsList.map((app) => (
                <tr
                  key={app.id}
                  className="rounded-lg hover:bg-dark cursor-pointer"
                  onClick={() => navigate("/add_app")}
                >
                  <td className="px-4 py-2">{app.title}</td>
                  <td className="px-4 py-2">{app.url}</td>
                  <td className="px-4 py-2">{app.description1}</td>
                  <td className="px-4 py-2">{app.description2}</td>
                  <td className="px-4 py-2">{app.image1}</td>
                  <td className="px-4 py-2">{app.image2}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

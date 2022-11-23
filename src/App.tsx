import "./App.css";
import { useQuery } from "@tanstack/react-query";
import { getLights } from "./api/lights";
import LightCard from "./components/LightCard";

function App() {
  const { data: lights, isLoading, isError } = useQuery(["lights"], getLights);

  if (isError) {
    return <p className="text-red-500">Error getting information !</p>;
  }

  if (isLoading) {
    return <p>loading ....</p>;
  }

  return (
    <div className="grid grid-cols-3 gap-4">
      {lights.data.map((light) => (
        <LightCard key={light.id} light={light} />
      ))}
    </div>
  );
}

export default App;

import { useEffect, useState } from "react";
import { fetchPopularPeople } from "../api/tmdbApi";
import Spinner from "../components/common/Spinner";

function People() {
  const [people, setPeople] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadPeople() {
      try {
        const res = await fetchPopularPeople();
        setPeople(res.data.results);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }

    loadPeople();
  }, []);

  if (loading) return <Spinner />;

  return (
    <div className="px-4 py-6 bg-[#2b0a0a] text-white space-y-6">
      <h1 className="text-2xl font-bold mb-4">Popular People 🧑</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
        {people.map((person) => (
          <div key={person.id} className="text-center">
            <img
              src={`https://image.tmdb.org/t/p/w300${person.profile_path}`}
              alt={person.name}
              className="w-full h-64 object-cover rounded-lg shadow-md"
            />
            <p className="mt-2">{person.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default People;

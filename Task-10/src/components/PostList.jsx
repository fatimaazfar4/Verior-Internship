import { useFetch } from "../hooks/useFetch";

const PostList = () => {
  const { data: posts, loading, error } = useFetch(
    "https://jsonplaceholder.typicode.com/posts?_limit=10"
  );

  if (loading) return <p className="text-blue-500">Loading...</p>;
  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Fetched Posts</h2>
      <ul className="space-y-3">
        {posts.map((post) => (
          <li key={post.id} className="p-4 bg-gray-100 rounded shadow">
            <h3 className="font-semibold">{post.title}</h3>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostList;

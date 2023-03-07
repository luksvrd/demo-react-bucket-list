import Bucket from "./components/Bucket";
import Form from "./components/BucketForm";
import { useState } from "react";

const buckets = JSON.parse(localStorage.getItem("buckets"));

function App() {
  const [bucketList, setBucketList] = useState(buckets);

  return (
    <>
      <h1 className="my-8 text-center text-4xl underline">🪣 List 👩🏾‍💻</h1>

      <main className="container mx-auto flex flex-col items-center gap-y-10 divide-y">
        <Form />
        <ul className="space-y-6 py-8">
          {bucketList?.map((bucket) => (
            <Bucket key={bucket.id} bucket={bucket} />
          ))}
        </ul>
        <footer className="border-t border-red-200 pt-4 text-9xl">⚰️</footer>
      </main>
    </>
  );
}

export default App;

import { lazy, Suspense, useState } from "react";
const User = lazy(() => import("./UserName"));

export default function LazyLoading() {
  const [load, setLoad] = useState(false);
  return (
    <div>
      <h1>Lazy Loading</h1>

      {load ? (
        <Suspense fallback={<h3>loading...</h3>}>
          <User />
        </Suspense>
      ) : null}
      <button onClick={() => setLoad(load ? false : true)}>
        {load ? "Hide user" : "Show user"}
      </button>
    </div>
  );
}

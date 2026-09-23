import { useTransition } from "react";

function UseTransition() {
  const [pending, startTransition] = useTransition();

  function handleButton() {
    startTransition(async () => {
      await new Promise((res) => setTimeout(res, 2000));
    });
  }

  return (
    <div>
      <h1>useTransition Hook in React</h1>
      <div
        style={{
          display: "flex",
          justifyContent: "start",
          alignItems: "center",
        }}
      >
        {pending ? (
          <img
            style={{ width: "60px" }}
            src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original"
            alt="Preloader"
          />
        ) : null}

        <button disabled={pending} onClick={handleButton}>
          {pending ? "taped..." : "tap"}
        </button>
      </div>
    </div>
  );
}

export default UseTransition;

import { useState } from "react";

function DynamicCondInlineStyle() {
  const [theme, setTheme] = useState({
    border: "1px solid #ccc",
    borderRadius: "8px",
    width: "200px",
    boxShadow: "2px 2px 17px 3px #ccc",
  });

  function updateTheme(bgColor, textColor) {
    setTheme({ ...theme, backgroundColor: bgColor, color: textColor });
  }

  return (
    <div>
      <h1>Dyamic & Conditional Inline Style in React</h1>
      <div style={theme}>
        <img
          src="https://img.magnific.com/free-vector/blue-circle-with-white-user_78370-4707.jpg?semt=ais_hybrid&w=740&q=80"
          alt="User Image"
          style={{
            width: "200px",
            borderRadius: "8px",
            borderBottom: "1px solid #ccc",
          }}
        />
        <div style={{ padding: "10px" }}>
          <h3>Muhammad Moeez</h3>
          <p style={{ color: "#333", marginTop: "-10px", fontSize: "14px" }}>
            Website developer
          </p>
        </div>
      </div>
      <div style={{ marginTop: "20px" }}>
        <button
          style={{ marginRight: "10px" }}
          onClick={() => updateTheme("gray", "white")}
        >
          Update Theme
        </button>
        <button onClick={() => updateTheme("white", "#333")}>
          Default Theme
        </button>
      </div>
    </div>
  );
}

export default DynamicCondInlineStyle;

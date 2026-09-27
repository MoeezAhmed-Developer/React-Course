import { useActionState } from "react";
import "../css/advanced-validation.css";

export default function AdcValidation() {
  const handleLogin = (prevData, formData) => {
    const username = formData.get("username");
    const password = formData.get("password");
    const regex = /^[A-Z0-9]+$/i;

    if (!username) {
      return { error: "Please fill your username.", username, password };
    }

    if (!password) {
      return { error: "Please fill your password.", username, password };
    }

    if (username.length > 5) {
      return {
        error: "Your username should be under 5 characters.",
        username,
        password,
      };
    }

    if (!regex.test(password)) {
      return {
        error:
          "Use only numbers or alphabets in your password. Don't use special characters.",
        username,
        password,
      };
    }

    return { success: "Login successful!", username, password };
  };

  const [data, action, pending] = useActionState(handleLogin, undefined);

  return (
    <div>
      <h1>Advanced Validation In React</h1>
      {data?.error && (
        <span className={data?.error && "err"}>{data.error}</span>
      )}
      {data?.success && (
        <span className={data.success && "success"}>{data.success}</span>
      )}

      <form action={action}>
        <input
          defaultValue={data?.username}
          type="text"
          placeholder="Enter name"
          name="username"
        />
        <input
          defaultValue={data?.password}
          type="text"
          placeholder="Enter Password"
          name="password"
        />
        <button disabled={pending}>
          {pending ? "Logging in..." : "Login"}
        </button>
      </form>
    </div>
  );
}

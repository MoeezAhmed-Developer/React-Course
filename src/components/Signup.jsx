import { useFormStatus } from "react-dom";

function Signup() {
  async function handleSignup() {
    await new Promise((res) => setTimeout(res, 2000));
  }

  function DivBox() {
    const { pending } = useFormStatus();
    return (
      <div>
        <input type="text" placeholder="Enter username" />
        <input type="email" placeholder="Enter email address" />
        <input type="password" placeholder="Enter password" />
        <button disabled={pending}>
          {pending ? "Creating account..." : "Create Account"}
        </button>
      </div>
    );
  }

  return (
    <div>
      <form action={handleSignup}>
        <DivBox />
      </form>
    </div>
  );
}

export default Signup;

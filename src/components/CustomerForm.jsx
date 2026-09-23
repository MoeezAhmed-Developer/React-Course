import { useFormStatus } from "react-dom";

function CustomerForm() {
  const { pending } = useFormStatus();
  // console.log(pending);

  return (
    <div>
      <input type="text" placeholder="neter usernme" id="username" />
      <input type="password" placeholder="Enetr password" id="password" />
      <button disabled={pending}>
        {pending ? "Submitting...." : "Submit"}
      </button>
    </div>
  );
}
export default CustomerForm;

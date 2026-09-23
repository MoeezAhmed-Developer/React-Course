import { useFormStatus } from "react-dom";

function CustomerForm() {
  const { pending } = useFormStatus();

  return (
    <div>
      <input type="text" placeholder="Enter username" />
      <input type="password" placeholder="Enter password" />
      <button disabled={pending}>
        {pending ? "Submitting...." : "Submit"}
      </button>
    </div>
  );
}
export default CustomerForm;

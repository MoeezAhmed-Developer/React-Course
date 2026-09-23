// import { forwardRef } from "react";

// function InputRef(props, ref) {
//   return (
//     <>
//       <input type="text" ref={ref} />
//     </>
//   );
// }

// export default forwardRef(InputRef);

function InputRef(props) {
  return (
    <>
      <input type="text" ref={props.ref} />
    </>
  );
}

export default InputRef;

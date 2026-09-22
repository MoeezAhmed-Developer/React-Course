import { Button } from "react-bootstrap";

function BootstrapCss() {
  return (
    <div>
      <h1>Bootstrap css with React Js</h1>
      <div style={{ width: "300px" }}>
        <h4 style={{ fontSize: "22px" }}>BulandiHub digital marketing</h4>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
          nostrum fugiat qui illum voluptatem a similique natus cum delectus
          ipsum.
        </p>
        <Button as="a" variant="success">
          BT Button
        </Button>
      </div>
    </div>
  );
}

export default BootstrapCss;

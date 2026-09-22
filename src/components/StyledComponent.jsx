import styled from "styled-components";
const Heading = styled.h4`
  color: red;
  font-size: 28px;
  text-decoration: underline wavy green;
`;

const StyledBtn = styled.button({
  backgroundColor: "green",
  color: "white",
  border: "none",
  outline: "none",
  padding: "10px",
  margin: "10px",
});

function StyledComponent() {
  return (
    <div>
      <h1>Style with Styled Component React</h1>
      <Heading>Styled Heading</Heading>
      <StyledBtn>Click here</StyledBtn>
      <StyledBtn>Tap here</StyledBtn>
      <StyledBtn>Click me</StyledBtn>
    </div>
  );
}

export default StyledComponent;

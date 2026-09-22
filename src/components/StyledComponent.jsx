import styled from "styled-components";

function StyledComponent() {
  const Heading = styled.h4`
    color: red;
    font-size: 28px;
    text-decoration: underline wavy green;
  `;

  return (
    <div>
      <h1>Style with Styled Component React</h1>
      <Heading>Styled Heading</Heading>
    </div>
  );
}

export default StyledComponent;

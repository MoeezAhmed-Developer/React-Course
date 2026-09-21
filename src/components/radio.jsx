function RadioDropdown() {
  return (
    <div>
      <h1>Handle Radio and Dropdown</h1>
      <h4>Select Gender:</h4>

      <input type="radio" name="gender" id="male" />
      <label htmlFor="male">Male</label>

      <input type="radio" id="female" name="gender" />
      <label htmlFor="female">Female</label>
    </div>
  );
}

export default RadioDropdown;

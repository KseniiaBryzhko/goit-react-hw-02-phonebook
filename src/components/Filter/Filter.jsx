export const Filter = ({ value, onChange }) => {
  return (
    <label>
      Find contacts by name
      <input onChange={onChange} value={value} type="text" name="filter" />
    </label>
  );
};

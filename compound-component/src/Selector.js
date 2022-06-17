const Selector = ({ options }) => {
  return (
    <>
      {options.map((opt) => (
        <option key={opt.value} value={opt.value}>
          {opt.display}
        </option>
      ))}
    </>
  );
};

export default Selector;

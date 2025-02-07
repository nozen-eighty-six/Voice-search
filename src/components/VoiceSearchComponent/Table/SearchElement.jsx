const SearchElement = ({ el }) => {
  return (
    <tr>
      <td>{el.firstname}</td>
      <td>{el.lastname}</td>
      <td>{el.age}</td>
      <td>{el.placeOfBirth}</td>
    </tr>
  );
};

export default SearchElement;

import SearchElement from "./SearchElement";

const SearchTable = ({ data }) => {
  return (
    <div className="flex justify-center ">
      <div className="xs:w-full lg:w-[60%] ">
        <table className="search-table  w-full  border-collapse    border border-gray-500">
          <thead>
            <tr className="">
              <th>Firstname</th>
              <th>Lastname</th>
              <th>Age</th>
              <th>Place of Birth</th>
            </tr>
          </thead>
          <tbody>
            {data.length > 0 ? (
              data.map((el) => <SearchElement key={el.id} el={el} />)
            ) : (
              <tr>
                <td colSpan={4}>No data</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SearchTable;

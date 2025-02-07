const Search = ({ elementRef, form, setForm }) => {
  return (
    <div className=" flex xs:justify-start lg:justify-center mb-4  ">
      <form
        className="search__form   xs:w-full md:w-[50%] lg:w-[60%]  flex xs:justify-between md:justify-normal lg:justify-normal  items-center gap-4"
        onSubmit={(e) => e.preventDefault()}
      >
        <div className="search__input xs:flex-grow  lg:flex-grow-0">
          <input
            type="text"
            name="searched"
            value={form.searched || ""}
            onChange={(e) => setForm({ ...form, searched: e.target.value })}
            placeholder="search..."
            className="py-1 px-3 border-2 outline-none xs:w-full"
          />
        </div>
        <div className="search_buttons flex gap-2">
          <button
            className="xs:py-1 xs:px-2  lg:py-2 lg:px-4 bg-gray-300 rounded-sm"
            ref={elementRef}
          >
            <i className="ri-mic-line text-black text-lg"></i>
          </button>
          <button className="xs:py-1 xs:px-2 lg:py-2 lg:px-4 bg-gray-300 rounded-sm">
            <i className="ri-search-line text-black text-lg "></i>
          </button>
        </div>
      </form>
    </div>
  );
};

export default Search;

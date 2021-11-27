import React from "react";
interface ICategories {
  sets: string[];
  filterHandler: (e: React.MouseEvent<HTMLButtonElement>) => void;
  selected: string;
}
function Categories({ sets, filterHandler, selected }: ICategories) {
  return (
    <div className="categories">
      {sets.map((x, i, a) => (
        <button
          className={selected === x ? "active" : ""}
          onClick={filterHandler}
        >
          {x}
        </button>
      ))}
    </div>
  );
}

export default Categories;

import React, { useEffect, useState } from "react";
import Categories from "./Categories";
import Grid from "./Grid";
export interface IData {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}
function App() {
  const [data, setData] = useState([] as IData[]);
  const [dataCopy, setDataCopy] = useState([] as IData[]);
  const [selected, setSelected] = useState<string>("all");
  const getData = async () => {
    const res = await fetch("https://fakestoreapi.com/products");
    const info = await res.json();
    setData(info);
    setDataCopy(info);
  };
  useEffect(() => {
    getData();
  }, []);
  const filterHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    const filteredItem = dataCopy.filter(
      (x) => x.category === e.currentTarget.textContent
    );
    if (e.currentTarget.textContent === "all") {
      setData(dataCopy);
      setSelected(e.currentTarget.textContent);
    } else if (e.currentTarget.textContent !== "all") {
      setData(filteredItem);
      e.currentTarget.textContent && setSelected(e.currentTarget.textContent);
    }
  };
  const uniqueCategories = [
    "all",
    ...new Set(dataCopy.map((x) => x.category.toLowerCase())),
  ];

  return (
    <div>
      <Categories
        sets={uniqueCategories}
        filterHandler={filterHandler}
        selected={selected}
      />
      <Grid data={data} />
    </div>
  );
}

export default App;

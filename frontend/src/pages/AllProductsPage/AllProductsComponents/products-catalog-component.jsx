/* eslint-disable react/prop-types */
import axios from "axios";
import clsx from "clsx";
import { slice } from "lodash";
import { useEffect, useState } from "react";
import { UnitComponent } from "../../../components/ReusedComponents";

const LIMIT = 3;

export function ProductsCatalogComponent({ className, filters }) {
  const [data, setData] = useState([]);
  const [list, setList] = useState([]);
  const [index, setIndex] = useState(LIMIT);
  const [showMore, setShowMore] = useState(true);
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5001/api/products")
      .then((res) => {
        const fetchedData = res.data.data;
        setData(fetchedData);
        setList(slice(fetchedData, 0, LIMIT));
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    const applyFilters = () => {
      let filtered = [...data];

      if (filters["Type"] && filters["Type"].length > 0) {
        filtered = filtered.filter((item) =>
          filters["Type"].includes(item.type),
        );
      }

      if (filters["Price"] && filters["Price"].length > 0) {
        filtered = filtered.filter((item) => {
          return filters["Price"].some((range) => {
            const [min, max] = range.split("-").map(Number);
            return item.cost >= min && (!max || item.cost <= max);
          });
        });
      }

      if (filters["Designer"] && filters["Designer"].length > 0) {
        filtered = filtered.filter((item) =>
          filters["Designer"].includes(item.designer),
        );
      }

      if (
        (!filters["Type"] || filters["Type"].length === 0) &&
        (!filters["Price"] || filters["Price"].length === 0) &&
        (!filters["Designer"] || filters["Designer"].length === 0)
      ) {
        filtered = [...data];
      }

      setFilteredData(filtered);
      setList(slice(filtered, 0, LIMIT));
      setIndex(LIMIT);
      setShowMore(filtered.length > LIMIT);
    };

    applyFilters();
  }, [filters, data]);

  const loadMore = () => {
    const newIndex = index + LIMIT;
    // console.log(newIndex);
    const newList = slice(filteredData, 0, newIndex);
    setList(newList);
    setIndex(newIndex);
    setShowMore(filteredData.length > newIndex);
  };

  return (
    <div className={clsx(className, "xs:mt-10")}>
      <div className="grid grid-cols-3 gap-5 mobile:grid-cols-1 mobile:gap-0">
        {list.map((item) => (
          <UnitComponent
            className="mx-2 mobile:mt-3"
            id={item.id}
            key={item.id}
            image={`http://localhost:5001/${item.img}`}
            title={item.title}
            cost={item.cost}
          />
        ))}
      </div>
      {showMore && (
        <button
          onClick={loadMore}
          className="mt-10 px-8 py-4 font-DMSans text-base font-normal text-[#2A254B] transition-colors hover:text-[#2A254B]/70"
        >
          Load more
        </button>
      )}
    </div>
  );
}

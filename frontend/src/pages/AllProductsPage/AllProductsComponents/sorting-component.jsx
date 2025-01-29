import clsx from "clsx";

/* eslint-disable react/prop-types */
export function SortingComponent({ className, onFilterChange, onTitleChange }) {
  const categories = [
    {
      title: "Type",
      options: ["chairs", "sofas", "tables", "storage", "beds"],
    },
    { title: "Price", options: ["0-100", "101-250", "250-10000"] },
    {
      title: "Designer",
      options: [
        "John Doe",
        "Alice Smith",
        "Mark Taylor",
        "Sophia Lee",
        "Michael Brown",
      ],
    },
  ];

  const handleCheckboxChange = (category, option) => (e) => {
    onFilterChange(category, option, e.target.checked);
  };

  return (
    <div className={clsx(className, "")}>
      <form
        className="font-DMSans text-base font-normal text-[#2A254B]"
        action=""
      >
        <h1 className="mb-3">Find by title:</h1>
        <input
          onChange={onTitleChange}
          placeholder="title..."
          className="mb-10 w-3/4 rounded-md border border-[#2A254B] p-2 xs:w-full"
          type="text"
        />
        {categories.map((category, categoryIndex) => (
          <div key={categoryIndex} className="mb-12 last:mb-0">
            <h1 className="mb-5">{category.title}</h1>
            {category.options.map((option, optionIndex) => {
              const id = `${category.title.toLowerCase().replace(/\s+/g, "-")}-${optionIndex}`;
              return (
                <div key={optionIndex} className="mb-3">
                  <input
                    className="mr-4 cursor-pointer"
                    id={id}
                    type="checkbox"
                    onChange={handleCheckboxChange(category.title, option)}
                  />
                  <label htmlFor={id}>{option}</label>
                </div>
              );
            })}
          </div>
        ))}
      </form>
    </div>
  );
}

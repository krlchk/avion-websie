import { useState } from "react";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { PopUpModal } from "../../components/ReusedComponents";
import { AllProductsHeroComponent, ProductsCatalogComponent, SortingComponent } from "./AllProductsComponents";

export function AllProductsPage() {
  const [filters, setFilters] = useState({});

  const handleFilterChange = (category, option, isChecked) => {
    setFilters((prevFilters) => {
      const categoryFilters = prevFilters[category] || [];
      if (isChecked) {
        return { ...prevFilters, [category]: [...categoryFilters, option] };
      }
      return { ...prevFilters, [category]: categoryFilters.filter((item) => item !== option) };
    });
  };

  return (
    <div className="mx-auto max-w-[1700px]">
      <PopUpModal />
      <Header className="container" />
      <AllProductsHeroComponent />
      <div className="grid grid-cols-4 container xs:grid-cols-1">
        <SortingComponent
          className="grid mobile:col-span-2"
          onFilterChange={handleFilterChange}
        />
        <ProductsCatalogComponent
          className="grid col-span-3 mobile:col-span-2"
          filters={filters}
        />
      </div>
      <Footer className="container" />
    </div>
  );
}


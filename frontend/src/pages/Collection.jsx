import React, { use, useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/assets";
import Title from "../components/Title";
import ProductItem from "../components/ProductItem";

const Collection = () => {
  const { products,search,showSearch } = useContext(ShopContext);
  const [showFilter, setShowFilter] = useState(true);
  const [filterProducts, setFilterProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);
  const [sortType,setSortType] = useState('relavent');


  // Toggle Category Selection
  const toggleCategory = (e) => {
    const value = e.target.value.toLowerCase(); // Ensure lowercase for consistency
    setCategory((prev) =>
      prev.includes(value) ? prev.filter((item) => item !== value) : [...prev, value]
    );
  };

  // Toggle SubCategory Selection
  const toggleSubCategory = (e) => {
    const value = e.target.value.toLowerCase(); // Ensure lowercase for consistency
    setSubCategory((prev) =>
      prev.includes(value) ? prev.filter((item) => item !== value) : [...prev, value]
    );
  };

  // Apply Filters
  const applyFilter = () => {
    // if(!products) return ; 
    let productsCopy = products.slice();

    if(showSearch && search){
      productsCopy=productsCopy.filter(item=>item.name.toLowerCase().includes(search.toLowerCase()))
    }

    if (category.length > 0) {
      productsCopy = productsCopy.filter((item) =>
        category.includes(item.category.toLowerCase())
      );
    }

    if (subCategory.length > 0) {
      productsCopy = productsCopy.filter((item) =>
        subCategory.includes(item.subCategory.toLowerCase())
      );
    }

    setFilterProducts(productsCopy);
  };


  const sortProduct=() =>{
    let fpCopy = filterProducts.slice();
    switch(sortType){
      case 'low-high':
        setFilterProducts(fpCopy.sort((a,b) => (a.price - b.price)));
        break;
      case 'high-low':
          setFilterProducts(fpCopy.sort((a,b)=>(b.price -a.price)));
          break;
      default :
        applyFilter();
          break;
    }

  }

  // useEffect(()=>{
  //   setFilterProducts(products)
  // },[])

  // Reapply filters when category or subCategory changes
  useEffect(() => {
    applyFilter();
  }, [category, subCategory,search,showSearch,products]);

useEffect(()=>{
  sortProduct();
},[sortType,products])

  return (
    <div className="flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t">
      {/* Filter options */}
      <div className="min-w-60">
        <p
          onClick={() => setShowFilter(!showFilter)}
          className="my-2 text-xl flex items-center cursor-pointer gap-2"
        >
          FILTERS
          <img
            src={assets.dropdown_icon}
            alt=""
            className={`h-3 sm:hidden ${showFilter ? "rotate-90" : ""}`}
          />
        </p>

        {/* Category Filter */}
        <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilter ? "" : "hidden"} sm:block`}>
          <p className="mb-3 text-sm font-medium">CATEGORIES</p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">

            <p className="flex gap-2">
              <input className="w-3" onChange={toggleCategory} type="checkbox" value={'Men'} />Men
            </p>

            <p className="flex gap-2">
              <input className="w-3" onChange={toggleCategory} type="checkbox" value="women" />Women
            </p>

            <p className="flex gap-2">
              <input className="w-3" onChange={toggleCategory} type="checkbox" value="kids" />Kids
            </p>

          </div>
        </div>

        {/* SubCategory Filter */}
        <div className={`border border-gray-300 pl-5 py-3 my-5 ${showFilter ? "" : "hidden"} sm:block`}>
          <p className="mb-3 text-sm font-medium">TYPE</p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            <p className="flex gap-2">
              <input onChange={toggleSubCategory} className="w-3" type="checkbox" value="topwear" />TopWear
            </p>
            <p className="flex gap-2">
              <input onChange={toggleSubCategory} className="w-3" type="checkbox" value="bottomwear" />BottomWear
            </p>
            <p className="flex gap-2">
              <input onChange={toggleSubCategory} className="w-3" type="checkbox" value="winterwear" />WinterWear
            </p>
          </div>
        </div>
      </div>


      {/* Right side */}
      <div className="flex-1">
        <div className="flex justify-between text-base sm:text-2xl mb-4">
          <Title text1={"ALL"} text2={"COLLECTIONS"} />

          {/* Product Sorting */}
          <select onChange={(e) =>setSortType(e.target.value)} className="border-2 border-gray-300 text-sm px-2">
            <option value="relevant">Sort by: Relevant</option>
            <option value="low-high">Sort by: Low to High</option>
            <option value="high-low">Sort by: High to Low</option>
          </select>
        </div>

        {/* Map Products */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6">
          { 
            filterProducts.map((item, index) => (
              <ProductItem
                key={index}
                name={item.name}
                id={item._id}
                price={item.price}
                img={item.image}
              />
            ))
           }
        </div>
      </div>
    </div>
  );
};

export default Collection;

// HomePage.js
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import LoadingSpinner from "../Components/Common/LoadingSpinner";
import HomeSlides from "../Components/home/HomeSlides";
import TrendingSearches from "../Components/home/TrendingSearches";
import BestSellingCategories from "../Components/home/BestSellingCategories";
import BestSellingItems from "../Components/home/BestSellingItems";
import AllItems from "../Components/home/AllItems";
import TopSupplier from "../Components/home/TopSuppliers";
import ProductSearch from "../Components/Common/SearchBar";
import { Box, Heading, Select } from "@chakra-ui/react";
import { fetchBestItems, fetchBestSelling } from "../redux/action";

function HomePage() {
  const dispatch = useDispatch();
  const bestSelling = useSelector((state) => state.bestSelling);
  const bestItems = useSelector((state) => state.bestItems);
  const loading = useSelector((state) => state.loading);


  useEffect(() => {
    dispatch(fetchBestSelling());
    dispatch(fetchBestItems());
  }, [dispatch]);

  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <div>
      <Box
        display="flex"
        justifyContent="space-between"
        p={2}
        background="rgb(243, 240, 240)"
      >
        <Box width={{ base: "80%", md: "55%" }}>
          <ProductSearch />
        </Box>
        <Box display={{ base: "none", md: "flex" }} gap="20px">
          <Select placeholder="Filter" size="md" width="200px">
            <option value="option1">Furniture</option>
            <option value="option2">Electronics</option>
            <option value="option3">Cloths</option>
          </Select>

          <Select placeholder="Sort by" size="md" width="200px">
            <option value="option1">Short by price</option>
            <option value="option2">Low to high</option>
            <option value="option3">High to low</option>
          </Select>
        </Box>
      </Box>
      <HomeSlides />

      {/* Best Selling Categories */}
      <Box
        padding="10px 50px 10px 50px"
        margin="20px 10px 0px 10px"
        boxShadow="rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"
      >
        <Heading as="h2" mb={4} fontSize="xl" textAlign="start">
          BEST SELLING CATEGORIES
        </Heading>

        {/* Check if bestSelling is not empty before rendering */}
        {bestSelling.length > 0 && (
          <BestSellingCategories categories={bestSelling} />
        )}
      </Box>

      {/* Best Selling Items */}
      <Box
        padding="10px 50px 10px 50px"
        margin="20px 10px 0px 10px"
        boxShadow="rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"
      >
        <Heading as="h2" mb={4} fontSize="xl" textAlign="start">
          BEST SELLING ITEMS
        </Heading>

        {/* Check if bestItems is not empty before rendering */}
        {bestItems.length > 0 && <BestSellingItems data={bestItems} />}
      </Box>

   
      <Box
        padding="10px 50px 10px 50px"
        margin="20px 10px 0px 10px"
        boxShadow="rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"
      >
        <Heading as="h2" mb={4} fontSize="xl" textAlign="start">
          ALL ITEMS
        </Heading>

        {bestItems.length > 0 && <AllItems data={bestItems} />}
      </Box>

      <Box
        padding="10px 50px 10px 50px"
        margin="20px 10px 0px 10px"
        boxShadow="rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"
      >
        <Heading as="h2" mb={4} fontSize="xl" textAlign="start">
          TOP SUPPLIER
        </Heading>

        {bestSelling.length > 0 && <TopSupplier categories={bestSelling} />}
      </Box>

      <TrendingSearches />
    </div>
  );
}

export default HomePage;

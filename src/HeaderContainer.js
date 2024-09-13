import { useLocation } from "react-router-dom";
import React, { useState } from "react";
import Header from "./components/Header";

const HeaderContainer = () => {
  const location = useLocation();
  const [searchQuery, setSearchQuery] = useState("");
  const handleSubmit = async (event) => {
    // ...
  };

  return <Header searchQuery={searchQuery} handleSubmit={handleSubmit} />;
};

export default HeaderContainer;

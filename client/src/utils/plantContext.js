import React from "react";

const UserContext = React.createContext({
  name: "",
  genus: "",
  image: "",
  species: "",
  date: "",
  handleBtnClick: () => {}
});

export default UserContext;

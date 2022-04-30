import React from "react";

const userContext = React.createContext();

const provider = userContext.Provider
const consumer = userContext.Consumer

export {provider, consumer}

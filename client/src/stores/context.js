import appStore from "./appStore";
import React from "react";

export const storeContext = React.createContext({ appStore: new appStore() })
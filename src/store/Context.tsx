/**
 * @Author lester
 * @Date 2021-02-03
 */

import React, { createContext } from "react";

interface RouteContext {
  currentPath: string;
  pushState?: (path: string) => void
}

const initVal: RouteContext = {
    currentPath: ''
};

export default createContext(initVal);

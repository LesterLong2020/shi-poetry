/**
 * @Author lester
 * @Date 2021-02-02
 */

import React, { useEffect, useState } from "react";
import Context from "src/store/Context";

const getBrowserPath = () => {
  const { pathname } = window.location;
  return pathname === '/' ? '/index' : pathname;
};

const BrowserRouter: React.FC = ({ children }) => {
  const [currentPath, setCurrentPath] = useState<string>(getBrowserPath());

  const onPopState = () => setCurrentPath(getBrowserPath());

  const pushState = (path: string) => {
    window.history.pushState(null, '', path);
    onPopState();
  };

  useEffect(() => {

    window.addEventListener("popstate", onPopState);

    return () => {
      window.removeEventListener("popstate", onPopState);
    }
  }, []);

  return (
    <Context.Provider value={{ currentPath, pushState }}>
      {children}
    </Context.Provider>
  )
};

export default BrowserRouter;

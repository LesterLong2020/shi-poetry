/**
 * @Author lester
 * @Date 2021-02-02
 */

import React, { useEffect, useState } from "react";
import Context from "src/store/Context";

const getHashPath: (url: string) => string = (url: string) => {
  const pathArr: null|string[] = url.match(/(#=?)(\/[\w\/]+)(\?=?|$)/);
  return pathArr && pathArr.length > 0 ? pathArr[2] : '/index';
};

const HashRouter: React.FC = ({ children }) => {
  const [currentPath, setCurrentPath] = useState<string>(getHashPath(window.location.href));

  const onHashChange = (e: HashChangeEvent) => setCurrentPath(getHashPath(e.newURL));

  useEffect(() => {

    window.addEventListener("hashchange", onHashChange);

    return () => {
      window.removeEventListener("hashchange", onHashChange);
    }
  }, []);

  return (
    <Context.Provider value={{ currentPath }}>
      {children}
    </Context.Provider>
  )
};

export default HashRouter;

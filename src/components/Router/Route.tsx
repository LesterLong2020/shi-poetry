/**
 * @Author lester
 * @Date 2021-02-03
 */

import React, { useState, useEffect, useContext } from "react";
import Context from "src/store/Context";

interface Route {
  path: string;
  component: () => Promise<React.ReactNode>;
}

const Index: React.FC<Route> = ({ path, component }) => {
  const { currentPath } = useContext(Context);
  const [Component, setComponent] = useState<any>({});

  useEffect(() => {
    component().then((module : any) => {
      setComponent({
        current: module.default
      })
    });
  }, []);

  useEffect(() => {
    console.log(currentPath, path)
  }, []);

  return (
    currentPath === path && Component.current ? <Component.current /> : null
  )
};

export default Index;

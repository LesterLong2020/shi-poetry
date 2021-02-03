import React from "react";

/**
 * @Author lester
 * @Date 2021-02-03
 */

export interface RouteProps {
  path: string;
  component: () => Promise<React.ReactNode>;
}

export const routes: RouteProps[] = [{
  path: '/index',
  component: () => import("src/pages/Index/Index")
}, {
  path: '/demo',
  component: () => import("src/pages/Demo/Index")
}];

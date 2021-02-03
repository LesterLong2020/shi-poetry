/**
 * @Author lester
 * @Date 2020-12-22
 */

import React, { useContext } from "react";
import Context from "src/store/Context";

const Index: React.FC = () => {
  const { pushState } = useContext(Context);

  return (
    // <a href="#/demo">首页 - 前往Demo页</a>
    <div onClick={() => pushState && pushState('/demo')}>首页 - 前往Demo页</div>
  )
};

export default Index;

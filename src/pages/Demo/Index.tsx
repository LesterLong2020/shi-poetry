/**
 * Created by Lester on 2021/2/1
 */

import React, {useContext, useEffect, useState} from "react";
import Context from "src/store/Context";
import style from "./style.less";

const Index = () => {
    const { pushState } = useContext(Context);
    const [count, setCount] = useState<number>(0);

    useEffect(() => {

    }, []);

    return (
        // <div className={style.count} onClick={() => setCount(count + 1)}> {count}</div>
        // <a href="#/index">Demo页 - 前往首页</a>
      <div onClick={() => pushState && pushState('/index')}>Demo页 - 前往首页</div>
    )
};

export default Index;

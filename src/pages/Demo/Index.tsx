/**
 * Created by Lester on 2021/2/1
 */

import React, { useEffect, useState } from "react";
import style from "./style.less";

const Index = () => {
    const [count, setCount] = useState<number>(0);

    useEffect(() => {
        console.log('Index is mounted');
        return () => {
            console.log('Index is unmounted');
        }
    }, []);

    return (
        <div className={style.count} onClick={() => setCount(count + 1)}> {count}</div>
    )
};

export default Index;
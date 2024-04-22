"use client";

import { useState } from "react";
import Pagination from "rc-pagination";

const App = () => {
  const [current, setCurrent] = useState(1);
  const onChange = (page: number) => {
    setCurrent(page);
  };
  return <Pagination onChange={onChange} current={current} total={25} />;
};

export default Pagination;

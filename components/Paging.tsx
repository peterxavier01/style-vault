"use client";

import { useState } from "react";
import Pagination from "rc-pagination";

type PagingProps = {
  total: number;
};

const Paging = ({ total }: PagingProps) => {
  const [current, setCurrent] = useState(1);

  const onChange = (page: number) => {
    setCurrent(page);
  };

  return <Pagination onChange={onChange} current={current} total={total} />;
};

export default Paging;

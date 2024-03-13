import { Meta, StoryFn } from "@storybook/react";
import React, { useState } from "react";
import Pagination from "./index";
export default {
  component: Pagination,
  tags: ['autodocs'],
} as Meta;

export const Primary: StoryFn<any> = (args) => {
  const [page, setPage] = useState(1);

  return (
    <>
      <Pagination
        currentPage={page}
        totalCount={20}
        pageSize={3}
        onPageChange={(page) => setPage(page)}
      />
    </>
  );
};

import React, { useState } from "react";
import MySelect from "./UI/select/MySelect";
import MyInput from "./UI/input/MyInput";

const PostFilter = function ({filter, setFilter}) {

  return (
<div>
        <MyInput
        value={filter.query}
        onChange={e => setFilter({...filter, query: e.target.value})}
        placeholder='Поиск...'
        />
        <MySelect
        value={filter.sort}
        onChange={selectedSort => setFilter({...filter, sort: selectedSort})}
           defaultValue="sort by"
           options={[
            {value: 'title', name: 'by name'},
            {value: 'body', name: 'by desc'}
           ]}
        />
      </div>
  );
};

export default PostFilter;
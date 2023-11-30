import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import ProductDisplay from './ProductDisplay';
import { categories } from '../data/categories';

export default function Filters() {
  const [limit, setLimit] = React.useState(20);
  const [category, setCategory] = React.useState("");

  const categoryFilter = categories.map((cat) => (
    <MenuItem key={cat.id} value={cat.category}>{cat.category}</MenuItem>
  ))

  const handleChangeLimit = (event) => {
    setLimit(event.target.value);
  };

  const handleChangeCategory = (e) => {
    setCategory(e.target.value);
  };

  return (
    <>
    <div>
      <FormControl variant="filled" sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="select-limit">Show</InputLabel>
        <Select
          labelId="select-limit"
          id="select-limit"
          value={limit}
          onChange={handleChangeLimit}
        >
          <MenuItem value="">
          </MenuItem>
          <MenuItem value={10}>10</MenuItem>
          <MenuItem value={20}>20</MenuItem>
          <MenuItem value={30}>30</MenuItem>
          <MenuItem value={40}>40</MenuItem>
          <MenuItem value={50}>50</MenuItem>
          <MenuItem value={100}>all</MenuItem>
        </Select>
      </FormControl>
      <FormControl variant="filled" sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="select-category">Category</InputLabel>
        <Select
          labelId="select-category"
          id="select-category"
          value={category}
          onChange={handleChangeCategory}
        >
          <MenuItem value="">All
          </MenuItem>
          {categoryFilter}
        </Select>
      </FormControl>
    </div>
    <div>
        <ProductDisplay limit={limit} category={category}/>
    </div>
    </>
  );
}
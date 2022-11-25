import SearchIcon from '@mui/icons-material/Search';
import { IconButton, InputAdornment, TextField } from '@mui/material';
import { useState } from 'react';

export const SearchBar = (props: any) => {
  const [onChange, setOnChange] = useState('');

  return (
    <>
      <TextField
        // label='Buscar...'
        fullWidth
        placeholder='Buscar...'
        variant='filled'
        onChange={({ target }) => setOnChange(target.value)}
        onKeyPress={({ key }) => key === 'Enter' && props.inputSearch(onChange)}
        InputProps={{
          startAdornment: (
            <InputAdornment position='start'>
              <IconButton onClick={() => props.inputSearch(onChange)}>
                <SearchIcon />
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
    </>
  );
};

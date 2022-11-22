import { Box } from "@mui/material";
import { useState } from "react";
import { GifList, SearchBar } from "./components";

function App() {
  const [inputSearch, setInputnSearch] = useState("");

  return (
    <Box sx={{p:5}}>
      <div style={{ display: "flex" }}>
        <h1>Gif search </h1>by Anderson Charry
      </div>
      <SearchBar inputSearch={(e: string) => setInputnSearch(e)} />
      <GifList URL={URL} inputSearch={inputSearch} />
    </Box>
  );
}

export default App;

import { Grid, Pagination } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";

export const GifList = (props: any) => {
  const [gifData, setGifdata] = useState([] as any);
  const [gifMeta, setGifMeta] = useState<any>();
  const [page, setPage] = useState(1);

  const ApiGifKey: string = "LmtGw2XxXoJQQRFT8KLksEg8BrG02gUb";
  const URL: string = `https://api.giphy.com/v1/gifs/${props.inputSearch !== "" ? "search" : "trending"}?api_key=${ApiGifKey}&q=${props.inputSearch}&offset=${page}&total_count=${
    gifMeta?.total_count
  }&count=${gifMeta?.count}&limit=15`;

  useEffect(() => {
    axios.get(URL).then(({ data }) => {
      setGifdata(data.data);
      setGifMeta(data.pagination);
    });
  }, [props.inputSearch, page]);
  console.log()

  return (
    <>
      <Grid container sx={{ my: 5 }}>
        {gifData?.map((item: any, key: number) => (
          <img src={item.images.downsized.url} alt={item.title} key={key} style={{ borderRadius: 10, margin: 5 }} />
        ))}
      </Grid>

      <Pagination
        style={{ display: "flex", alignItems: "center", justifyContent: "center", margin: "2%" }}
        count={gifMeta?.total_count&&Math.round(gifMeta?.total_count / 15)}
        variant='outlined'
        shape='rounded'
        color='primary'
        page={page}
        onChange={(e, v) => setPage(v)}
      />
    </>
  );
}


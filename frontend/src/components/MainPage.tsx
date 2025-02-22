import { Paper } from "@mui/material";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
function srcset(image: string, size: number, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

const MainPage = () => {
  const itemData = [
    {
      img: "https://aurora-gem-images-bucket.s3.eu-north-1.amazonaws.com/pics/rings/jewelery-2.webp",

      title: "jewelery",
      rows: 3,
      cols: 2,
    },
    {
      img: "https://aurora-gem-images-bucket.s3.eu-north-1.amazonaws.com/pics/pendants/jewelery-4.webp",
    },
    {
      img: "https://aurora-gem-images-bucket.s3.eu-north-1.amazonaws.com/pics/necklaces/jewelery-3.webp",
    },
    {
      img: "https://aurora-gem-images-bucket.s3.eu-north-1.amazonaws.com/pics/watches/jewelery-1.webp",

      cols: 2,
      rows: 3,
    },
    {
      img: "https://aurora-gem-images-bucket.s3.eu-north-1.amazonaws.com/pics/earrings/jewelery-5.webp",

      cols: 2,
      rows: 2,
    },
    {
      img: "https://aurora-gem-images-bucket.s3.eu-north-1.amazonaws.com/pics/rings/jewelery-6.webp",

      rows: 3,
      cols: 2,
    },
    {
      img: "https://aurora-gem-images-bucket.s3.eu-north-1.amazonaws.com/pics/bracelets/jewelery-6.webp",

      cols: 2,
      rows: 3,
    },
  ];
  return (
    <Paper className="flex flex-col items-center justify-center bg-slate-50 m-4 p-8 w-full max-w-full">
      <h1 className="text-md md:text-5xl font-serif italic font-light w-full text-center">
        Inspired by the Aurora, Designed for You.{" "}
      </h1>
      <div className="hidden md:block p-3">
        <ImageList
          sx={{ width: 1000, height: 1400 }}
          variant="quilted"
          cols={4}
          rowHeight={160}
          className="p-4"
        >
          {itemData.map((item) => (
            <ImageListItem
              key={item.img}
              cols={item.cols || 1}
              rows={item.rows || 1}
                className="border-2 border-slate-700 px-2 transition ease-in-out delay-150 hover:scale-105 rounded-lg"
            >
              <img
                {...srcset(item.img, 121, item.rows, item.cols)}
                alt={item.title}
                className="rounded-md"
                loading="lazy"
              />
            </ImageListItem>
          ))}
        </ImageList>
      </div>
      <div className="md:hidden">
        <img
          src="https://aurora-gem-images-bucket.s3.eu-north-1.amazonaws.com/pics/rings/jewelery-2.avif"
          alt="jewelery"
        />
        <img
          src="https://aurora-gem-images-bucket.s3.eu-north-1.amazonaws.com/pics/rings/jewelery-1.avif"
          alt="jewelery"
        />
        <img
          src="https://aurora-gem-images-bucket.s3.eu-north-1.amazonaws.com/pics/bracelets/jewelery-6.avif"
          alt="jewelery"
        />
        <img
          src="https://aurora-gem-images-bucket.s3.eu-north-1.amazonaws.com/pics/rings/jewelery-5.avif"
          alt="jewelery"
        />
        <img
          src="https://aurora-gem-images-bucket.s3.eu-north-1.amazonaws.com/pics/rings/jewelery-6.avif"
          alt="jewelery"
        />
      </div>
    </Paper>
  );
};

export default MainPage;

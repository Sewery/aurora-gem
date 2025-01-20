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
      img: "https://aurora-gem-images-bucket.s3.eu-north-1.amazonaws.com/pics/rings/jewelery-2.avif",

      title: "jewelery",
      rows: 3,
      cols: 2,
    },
    {
      img: "https://aurora-gem-images-bucket.s3.eu-north-1.amazonaws.com/pics/rings/jewelery-1.avif",
    },
    {
      img: "https://aurora-gem-images-bucket.s3.eu-north-1.amazonaws.com/pics/rings/jewelery-3.avif",
    },
    {
      img: "https://aurora-gem-images-bucket.s3.eu-north-1.amazonaws.com/pics/rings/jewelery-4.avif",

      cols: 2,
      rows: 3,
    },
    {
      img: "https://aurora-gem-images-bucket.s3.eu-north-1.amazonaws.com/pics/rings/jewelery-5.avif",

      cols: 2,
      rows: 2,
    },
    {
      img: "https://aurora-gem-images-bucket.s3.eu-north-1.amazonaws.com/pics/rings/jewelery-6.avif",

      rows: 3,
      cols: 2,
    },
    {
      img: "https://aurora-gem-images-bucket.s3.eu-north-1.amazonaws.com/pics/bracelets/jewelery-6.avif",

      cols: 2,
      rows: 3,
    },
  ];
  return (
    <Paper className="flex flex-col items-center justify-center bg-slate-50 m-4 p-8">
      <h1 className="text-lg md:text-5xl font-serif italic font-light underline underline-offset-8 ">
        Inspired by the Aurora, Designed for You.{" "}
      </h1>
      <div className="hidden md:block p-3">
        <ImageList
          sx={{ width: 1000, height: 1200 }}
          variant="quilted"
          cols={4}
          rowHeight={121}
          className="p-4"
        >
          {itemData.map((item) => (
            <ImageListItem
              key={item.img}
              cols={item.cols || 1}
              rows={item.rows || 1}
                className="border-2 border-slate-700 px-2 transition ease-in-out delay-150 hover:scale-110 hover:rounded-md"
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

import { books } from "@/constants/books";
import { works } from "@/constants/works";
import type { PostContentType } from "@/types/posts";
import { Bookmark, Heart } from "lucide-react";

export default function Content({
  content,
  ...restProps
}: {
  content: PostContentType;
}) {
  const {
    workRef,
    // text,
    images,
  } = content;
  const work = works.find((w) => w.id === workRef?.workId);

  const book = books.find((b) => b.id === work?.bookId);

  return (
    <div
      className={`comp-Content 
    `}
      {...restProps}
    >
      <div className="wrapper">
        <div className="images ">
          <div className="wrapper">
            {images?.map((image) => (
              <img src={image} alt="post image" className="image" />
            ))}
            {book && (
              <img
                src={work?.cover || book.cover}
                alt="book cover"
                className="image"
              />
            )}

            {/* <div className="overlay top-0 left-3 hidden"></div> */}
            <div className="overlay top-2 right-1">
              <button className="iconButton">
                <Bookmark
                  className="icon"
                  style={{
                    stroke: "deeppink",
                    fill: "deeppink",
                  }}
                />
              </button>
            </div>
            <div className="overlay bottom-4 left-3">
              <button className="iconButton">
                <Heart
                  className="icon"
                  style={{
                    stroke: "red",
                    fill: "red",
                  }}
                />
              </button>
            </div>
            {/* <div className="overlay bottom-4 right-1 hidden"></div> */}
            <div className="overlay slideIndicator bottom-4 right-1">
              <div className="indicator active" />
              <div className="indicator" />
              <div className="indicator" />
            </div>
          </div>
        </div>
        {/* {text && <p className="py-0 px-6 text-gray-800">{text}</p>} */}
      </div>
    </div>
  );
}

import type { CastType } from "@/types";
import { StatusAvatar } from "../Avatar";

export const Create = () => {
  return (
    <div className="comp-CreateCast card">
      <div
        className="wrapper border-dashed border-cyan-300 border-2
        flex flex-col items-center justify-around
        p-4 space-x-0"
      >
        <button
          className="aspect-square p-2 rounded-full
          bg-cyan-300"
        >
          <p className="text">+</p>
        </button>
        <p className="text">Create a cast</p>
      </div>
    </div>
  );
};

export default function Cast({ cast, ...restProps }: { cast: CastType }) {
  const { id, book, profile } = cast;
  return (
    <div key={id} className="comp-Cast card" {...restProps}>
      {/* Book Cover / Placeholder */}
      <div className="wrapper">
        <img src={book?.cover} alt="book cover" className="bookCover" />
      </div>

      {/* Profile Circle Overlay */}
      {profile && <StatusAvatar profile={profile} className="-mt-7" />}
    </div>
  );
}

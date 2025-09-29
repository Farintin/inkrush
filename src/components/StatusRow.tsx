import { books } from "@/constants/books";
import { statusCards } from "@/constants/casts";
import users from "@/constants/users";
import // Play
"lucide-react";
import Cast, { Create } from "./UI/Cast";

export default function StatusRow() {
  const filteredStatusCards = statusCards.map((sts) => ({
    ...sts,
    profile: users.find((u) => u.id === sts.profileId),
    book: books.find((b) => b.id === sts.bookId),
  }));
  return (
    <div className="comp-StatusRow no-scrollbar">
      <Create />
      {filteredStatusCards.map((cast) => (
        <Cast cast={cast} />
      ))}
    </div>
  );
}

// {filteredStatusCards.map((card) => (
//   <div key={card.id} className="card status">
//     {/* Book Cover / Placeholder */}
//     <div className="wrapper">
//       {/* {card.type === "new" && (
//         <span className="text-2xl">+ New Cast</span>
//       )}
//       {card.type === "quote" && (
//         <p className="text-sm p-2 italic">{card.text}</p>
//       )}
//       {card.type === "audio" && (
//         <Play className="h-8 w-8 text-gray-700" />
//       )}
//       {card.type === "club" && (
//         <p className="text-sm font-semibold text-center">
//           {card.clubName}
//         </p>
//       )} */}

//       <img
//         src={card.book?.cover}
//         alt="book cover"
//         className="bookCover"
//       />
//     </div>

//     {/* Profile Circle Overlay */}
//     {card.profile && (
//       <div className="profileImg ">
//         <img src={card.profile.profilePic} alt="profile" className=" " />
//       </div>
//     )}
//   </div>
// ))}

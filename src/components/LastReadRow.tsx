import { books } from "@/constants/books";
import // Play
"lucide-react";

export default function LastReadRow() {
  const filteredBookCards = books.map((b) => ({
    ...b,
  }));
  return (
    <div className="comp-LastReadRow no-scrollbar">
      {filteredBookCards.map((card) => (
        <div key={card.id} className="card">
          <img src={card.cover} alt="book cover" className="bookCover" />

          <p className="text title">{card.title.substring(0, 30)}...</p>
        </div>
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

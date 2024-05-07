import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"

export interface Artwork {
  artist: string
  art: string
}

export const works: Artwork[] = [
  {
    artist: "Ornella Binni",
    art: "npcp.jpg",
  },
  {
    artist: "Tom Byrom",
    art: "bigb.jpg",
  },
  {
    artist: "Vladimir Malyavko",
    art: "ezra.jpg",
  },
  {
    artist: "Ornfdella Binni",
    art: "npcp.jpg",
  },
  {
    artist: "Tofdfm Byrom",
    art: "bigb.jpg",
  },
  {
    artist: "Vladfdimir Malyavko",
    art: "ezra.jpg",
  },
]

export default function HorizontalList() {
  return (
    <ScrollArea className="bg-black w-full rounded-md border-black">
      {/* <div className="flex w-max space-x-4 p-4"> */}
      <div className="flex p-4 ">

        {works.map((artwork) => (
          <figure key={artwork.artist} className="shrink-0">
            <div className="overflow-hidden rounded-md">
              <img
                src={artwork.art}
                alt={`Photo by ${artwork.artist}`}
                className="aspect-[16/9] mx-2 h-40 object-cover"
                height={200}
              />
            </div>
            <figcaption className="pt-2 text-xs text-muted-foreground">
              Photo by{" "}
              <span className="font-semibold text-foreground">
                {artwork.artist}
              </span>
            </figcaption>
          </figure>
        ))}
      </div>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  )
}




//       <div className="flex p-4 overflow-x-auto scrollbar-hide">
//         {works.map((artwork, index) => (
//           <figure key={index} className="mr-4">
//             <div className="overflow-hidden rounded-md">
//               <img
//                 src={artwork.art}
//                 alt={`Photo by ${artwork.artist}`}
//                 className="aspect-w-16 aspect-h-9 w-48 h-48 object-cover"
//               />
//             </div>
//             {/* <figcaption className="pt-2 text-xs text-muted-foreground">
//               Photo by{" "}
//               <span className="font-semibold text-foreground">
//                 {artwork.artist}
//               </span>
//             </figcaption> */}
//           </figure>
//         ))}
//       </div>
//       <ScrollBar orientation="horizontal" />
//     </ScrollArea>
//   );
// }

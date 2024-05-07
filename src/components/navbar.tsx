import { Search } from "lucide-react";
import { Bell } from "lucide-react";

export default function Navbar() {
  return (
    <div className="flex justify-between">
      <div className="left flex w-3/4 justify-between flex-row align-middle">
        <img src="/public/logo.png" className="logo" width={80} alt="" />
        <p>Home</p>
        <p>TV Shows</p>
        <p>Movies</p>
        <p>New & Popular</p>
        <p>My List</p>
        <p>Browse by Languages</p>
      </div>

      <div className="right gap-x-2 flex">
        <Search size={24} />
        <Bell size={24} />
        <img src="/public/avatar.jpg" height={26} width={26} alt="" />
      </div>
    </div>
  );
}

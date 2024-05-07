import { Button } from "./components/ui/button";
import { Play, Info } from "lucide-react";

export default function Header() {
  return (
    <>
      <div className="head relative ">
        <div className="absolute">
        </div>
        <img src="house-of-ninjas.jpg" alt="" />
        <div className="absolute top-0 left-0 bottom-0 flex items-center justify-center">
          <div className="mx-20 flex flex-col">
            <p className="text-6xl w-1/3 text-white font-bold">
              House of Ninjas
            </p>
            <p className="text-white w-1/2 pt-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
              adipisci nostrum, consequuntur assumenda debitis unde, aspernatur
              amet nemo, porro commodi enim magnam expedita recusandae quas est
              possimus repellendus harum sunt consectetur repudiandae!
            </p>
            <div className="w-full gap-2">
              <Button className="px-8" variant={"secondary"}>
                <Play />
                Play
              </Button>
              <Button className="ml-3">
                <Info />
                More info
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

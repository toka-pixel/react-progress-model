import { useState } from "react";
import data from "./data.json";
import { useRecoilState } from "recoil";
import { rightCommunityAtom } from "../../recoil/atom/rightCommunity";
import { Button } from "@chakra-ui/react";

type GalleryProps = {
  handleNext: () => void;
};

const Gallery: React.FC<GalleryProps> = ({ handleNext }) => {
  const [activities, setActivities] = useState<string[]>([]);

  const checkActivity = (title: string) => activities.includes(title);

  const [_, setRightCommunityData] = useRecoilState(rightCommunityAtom);

  const handleActivities = (title: string) => {
    if (!checkActivity(title)) {
      setActivities((prev) => [...prev, title]);
    } else {
      setActivities((prev) => prev.filter((item) => item !== title));
    }
  };

  const handleGalleryData = () => {
    if (activities.length > 2) {
      setRightCommunityData((prev) => ({ ...prev, activities }));
      handleNext();
    }
  };

  return (
    <div className="text-center">
      <div className="text-blue text-[28px] font-bold mb-[40px] ">
        Tell us what you’re <br /> interested in
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-1 place-items-center">
        {data.map((item, index) => (
          <div
            key={index}
            className="relative cursor-pointer "
            onClick={() => handleActivities(item.title)}
          >
            <div
              className={`  ${
                checkActivity(item.title)
                  ? " border border-solid border-[color:orange]"
                  : ""
              }  p-[3px] rounded-lg w-fit`}
            >
              <img
                className={`bg-white/30 rounded-lg w-[130.7px] h-[125.04px]   ${
                  checkActivity(item.title) ? " brightness-50 " : ""
                } `}
                src={`/imgs/${item.src}`}
                alt=""
              />
            </div>
            <div className="absolute bottom-0  px-4 py-3 text-white  text-[color:white] ">
              {item.title}
            </div>
            <div
              className={`absolute top-0 right-0  px-4 py-3 ${
                checkActivity(item.title) ? "block" : "hidden"
              }`}
            >
              <img src="/imgs/check.svg" />
            </div>
          </div>
        ))}
      </div>

      <Button
        colorScheme={`${activities.length > 2 ? "orange" : "gray"}`}
        className={`h-[41.14px]  text-sm/[14px] mt-[60px] m-auto shadow-xl `}
        variant="solid"
        onClick={handleGalleryData}
        isDisabled={activities.length < 3}
        width={{ base: "100%", sm: "244.71px" }}
      >
        {activities.length < 3 ? "Pick 3 more" : "Submit"}
      </Button>

      {/* <div className="flex h-screen justify-center items-center flex-col">
          <div className="w-full h-screen">
            <img
              src="https://placekitten.com/1400"
              alt="Kitten"
              className="rounded-lg w-[130.7px] h-[125.04px] ] filter brightness-50 border-solid border-[color:orange] p-[10px]"
            />
          </div>
        </div> */}
    </div>
  );
};

export default Gallery;

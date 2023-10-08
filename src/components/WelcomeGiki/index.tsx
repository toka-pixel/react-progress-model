import { Button ,Text } from "@chakra-ui/react";


type WelcomeGikiProps = {
  handleNext: () => void;
};

const WelcomeGiki: React.FC<WelcomeGikiProps> = ({ handleNext }) => {
  return (
    <div className="text-center">
      <div className="w-[123.77px] h-[110px]  rounded-md bg-blue m-auto flex items-center h-ful">
        <p className=" font-bold m-auto text-[40px] text-[color:white]">A</p>
      </div>
      <div className="pt-[15px]  text-gray drop-shadow-lg" >
        alice@wonderland.space
      </div>
      <h1 className="pt-[25px] font-bold text-blue  text-[30px]">
        Welcome to Giki
      </h1>
      <div
        className="flex justify-around items-baseline w-[244.71px] h-[41.14px] mt-[10px]  m-auto rounded-md"
        style={{ backgroundColor: "rgb(249 250 251)" }}
      >
        <p></p>
        <p className="text-orange font-bold text-[28px] leading-normal">Hans</p>
        <img
          src="/imgs/edit.svg"
          className="w-[41.14px] h-[10.37px]"
          alt="edit"
        />
      </div>
      <p className="text-black text-[13px] pt-[25px] drop-shadow-2xl shadow-blue-600/50 font-[700] tex-black">
        Your answers to the next few questions will help <br />
        us find the right communities for you
      </p>

      <Button
        colorScheme="teal "
        className=" h-[41.14px] bg-orange text-sm/[14px] mt-[60px] m-auto shadow-xl "
        variant="solid"
        onClick={handleNext}
        width={{ base: "100%" , sm: "244.71px" }} 
      >
        Next
      </Button>
    </div>
  );
};

export default WelcomeGiki;

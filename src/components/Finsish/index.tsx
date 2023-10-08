import { Button } from "@chakra-ui/react";

type FinsishProps = {
  handleFinsish: () => void;
};

const Finsish: React.FC<FinsishProps> = ({ handleFinsish }) => {
  return (
    <div className="text-center m-auto">
      <img
        width="100px"
        src="/imgs/happy-smile.svg"
        alt="happy-smile"
        className="inline-block"
      />
      <div className="mt-[30px]  text-[30px]">Success</div>

      <div>You have completed the questions</div>

      <Button
        colorScheme="orange"
        className=" h-[41.14px] text-sm/[14px] mt-[60px] uppercase"
        variant="outline"
        onClick={handleFinsish}
        width={{ base: "100%", sm: "244.71px" }}
      >
        Go To Home
      </Button>
    </div>
  );
};

export default Finsish;

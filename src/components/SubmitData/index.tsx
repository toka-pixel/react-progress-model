import { Box, Button } from "@chakra-ui/react";
import { useRecoilValue } from "recoil";
import { rightCommunityAtom } from "../../recoil/atom/rightCommunity";

type SubmitDataProps = {
  handleFinsish: () => void;
};

const SubmitData: React.FC<SubmitDataProps> = ({ handleFinsish }) => {
  const rightCommunityData = useRecoilValue(rightCommunityAtom);

  return (
    <Box boxSize="xs" className="m-auto">
      <img
        width="100px"
        src="/imgs/happy-smile.svg"
        alt="happy-smile"
        className="inline-block "
      />
      <div className="mt-[30px]  text-[30px]">Success!</div>

      <div>You have completed the questions</div>

      <Button
        colorScheme="orange"
        className=" h-[41.14px]  text-sm/[14px] mt-[60px] uppercase"
        variant="solid"
        width={{ base: "100%", sm: "244.71px" }}
        onClick={handleFinsish}
      >
        Go To Home
      </Button>
    </Box>
  );
};

export default SubmitData;

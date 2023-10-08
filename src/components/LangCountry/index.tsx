import { Button, FormControl, Select } from "@chakra-ui/react";
import { useRecoilState } from "recoil";
import { rightCommunityAtom } from "../../recoil/atom/rightCommunity";

type LangCountryProps = {
  handleNext: () => void;
};

const LangCountry: React.FC<LangCountryProps> = ({ handleNext }) => {
  const [_, setRightCommunityData] = useRecoilState(rightCommunityAtom);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const language = event.currentTarget.language.value;
    const country = event.currentTarget.country.value;

    setRightCommunityData((prev) => ({ ...prev, language, country }));

    handleNext();
  };

  return (
    <div className="text-center ">
      <div className="text-blue text-[28px] font-bold mb-[40px] ">
        Pick your language and <br />
        country/region
      </div>

      <form onSubmit={handleSubmit}>
        <FormControl isRequired>
          <Select
            name="language"
            placeholder="Language"
            bg="gray.50"
            border="none"
          >
            <option>English (US)</option>
            <option>Arabic</option>
          </Select>
        </FormControl>
        <FormControl className="pt-[20px]" isRequired>
          <Select
            name="country"
            placeholder="Country"
            bg="gray.50"
            border="none"
          >
            <option>United Arab Emirates</option>
            <option>Italy (Italia)</option>
          </Select>
        </FormControl>

        <Button
          colorScheme="teal "
          className=" h-[41.14px] bg-orange text-sm/[14px] mt-[130px] m-auto shadow-xl "
          variant="solid"
          type="submit"
          width={{ base: "100%" , sm: "244.71px" }} 
        >
          Next
        </Button>
      </form>
    </div>
  );
};

export default LangCountry;

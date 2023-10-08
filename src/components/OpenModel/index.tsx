import { Button, useDisclosure } from "@chakra-ui/react";
import GenericModel from "../GenericModel";
import WelcomeGiki from "../WelcomeGiki";
import LangCountry from "../LangCountry";
import Finsish from "../Finsish";
import Gallery from "../Gallery";
import { useState } from "react";
import Steps from "../Steps";

const OpenModel = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [activeStep, setActiveStep] = useState<number>(0);


  const handleNext = () => {
    if (activeStep >= 0 && activeStep < 3) {
      setActiveStep((prev) => ++prev);
    }
  };

  const handlePrevious = () => {
    if (activeStep > 0 && activeStep < 3) {
      setActiveStep((prev) => --prev);
    }
  };

  const handleFinsish = () => {
    setActiveStep(0);
    onClose();
  };

  const GetSectionComponent = () => {
    switch (activeStep) {
      case 0:
        return <WelcomeGiki handleNext={handleNext} />;
      case 1:
        return <LangCountry handleNext={handleNext} />;
      case 2:
        return <Gallery handleNext={handleNext} />;
      case 3:
        return <Finsish handleFinsish={handleFinsish} />;
      default:
        return null;
    }
  };

  return (
    <div className="text-center">
      <img
        src={"/imgs/logo.png"}
        className="App-logo w-[285.48px] h-[257.27px] m-auto"
        alt="logo"
      />
      <Button
        colorScheme="orange"
        className=" h-[41.14px]  text-sm/[14px] mt-[60px]"
        variant="solid"
        onClick={onOpen}
        width={{ base: "100%", sm: "409px" }}
      >
        Open Model
      </Button>

      <GenericModel isOpen={isOpen} onOpen={onOpen} onClose={onClose}>
        <GetSectionComponent />

        {activeStep > 0 && activeStep !== 3 && (
          <>
            <Button
              className=" h-[41.14px] text-sm/[14px] mt-[60px] m-auto"
              variant="unstyled"
              onClick={handlePrevious}
              width={{ base: "100%", sm: "244.71px" }}
            >
              Back
            </Button>
            <Steps activeStep={activeStep} />
          </>
        )}
      </GenericModel>
    </div>
  );
};

export default OpenModel;

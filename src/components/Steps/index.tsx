type StepsProps = {
  activeStep: number;
};

const Steps: React.FC<StepsProps> = ({ activeStep }) => {
  const steps = Array.from({ length: 3 });

  return (
    <div className="flex space-x-2 justify-center mt-[20px]">
      {steps.map((_, index) => (
        <img
          key={index}
          src={`${
            index <= activeStep ? "/imgs/active.png" : "/imgs/not-active.png"
          }`}
          alt={"steps"}
        />
      ))}
    </div>
  );
};

export default Steps;

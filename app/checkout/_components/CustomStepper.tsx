import { Stepper } from "react-form-stepper";

interface Step {
  label: string;
}

interface CustomStepperProps {
  steps: Step[];
  activeStep: number;
}

const CustomStepper = ({ steps, activeStep }: CustomStepperProps) => {
  const isMobile = window.matchMedia("(max-width: 767px)").matches;

  return (
    <Stepper
      steps={steps}
      activeStep={activeStep}
      connectorStateColors={true}
      styleConfig={{
        activeBgColor: "#043a44",
        completedBgColor: "#03343d",
        inactiveBgColor: "#eee",
        activeTextColor: "#f2f2f2",
        completedTextColor: "#fff",
        inactiveTextColor: "#444",
        size: 35,
        circleFontSize: 16,
        labelFontSize: isMobile ? 14 : 15,
        borderRadius: "100px",
        fontWeight: 500,
      }}
      connectorStyleConfig={{
        completedColor: "#03343d",
        activeColor: "#043a44",
        disabledColor: "rgb(189, 189, 189)",
        size: 1,
        style: "solid",
      }}
    />
  );
};

export default CustomStepper;

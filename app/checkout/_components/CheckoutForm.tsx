"use client";

import { SubmitHandler, useForm } from "react-hook-form";
import { SetStateAction, useEffect } from "react";

import TextInput from "@/components/TextInput";
import Button from "@/components/Button";
import useCheckoutData from "@/hooks/useCheckoutData";

export interface IFormData {
  firstName: string;
  lastName: string;
  address: string;
  mobileNumber: string;
  email: string;
  city: string;
  postalCode: string;
}

interface CheckoutFormProps {
  activeStep: number;
  setActiveStep: React.Dispatch<SetStateAction<number>>;
}

const CheckoutForm = ({ activeStep, setActiveStep }: CheckoutFormProps) => {
  const { register, setFocus, handleSubmit, formState } = useForm<IFormData>();

  const { isDirty, isValid } = formState;

  const setCheckoutData = useCheckoutData((state) => state.setCheckoutData);

  // Set focus to firstName input when component mounts
  useEffect(() => {
    setFocus("firstName");
  }, [setFocus]);

  const onSubmit: SubmitHandler<IFormData> = (data) => {
    setCheckoutData({ ...data });

    setActiveStep(activeStep + 1);
  };

  return (
    <form
      className="w-full max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6 mb-8"
      onSubmit={handleSubmit(onSubmit)}
    >
      <TextInput
        type="text"
        label="First Name"
        {...register("firstName", { required: true })}
      />
      <TextInput
        type="text"
        label="Last Name"
        {...register("lastName", { required: true })}
      />
      <TextInput
        type="text"
        label="Address"
        {...register("address", { required: true })}
      />
      <TextInput
        type="tel"
        label="Mobile Number"
        {...register("mobileNumber")}
      />
      <TextInput
        type="email"
        label="Email"
        {...register("email", { required: true })}
      />
      <TextInput
        type="text"
        label="City"
        {...register("city", { required: true })}
      />
      <TextInput
        type="number"
        label="Zip/Postal Code"
        {...register("postalCode", { minLength: 2 })}
      />

      <Button
        type="submit"
        className="w-full max-w-xs mt-4 mx-auto sm:col-span-2 disabled:bg-primary/80 disabled:text-gray-300 disabled:cursor-not-allowed focus-visible:outline focus-visible:outline-primary"
        disabled={!isDirty || !isValid}
      >
        Next
      </Button>
    </form>
  );
};

export default CheckoutForm;

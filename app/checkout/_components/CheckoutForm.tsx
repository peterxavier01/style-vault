"use client";

import { SubmitHandler, useForm } from "react-hook-form";
import { SetStateAction, useCallback, useEffect, useState } from "react";
import toast from "react-hot-toast";

import commerce from "@/utils/commerce";
import { CheckoutToken } from "@chec/commerce.js/types/checkout-token";
import { GetShippingOptionsResponse } from "@chec/commerce.js/features/checkout";

import Select from "@/components/Select";
import TextInput from "@/components/TextInput";
import Button from "@/components/Button";
import useCheckoutData from "@/hooks/useCheckoutData";

interface Options {
  code: string;
  label: string;
}

export interface IFormData {
  firstName: string;
  lastName: string;
  address: string;
  mobileNumber: string;
  email: string;
  city: string;
  postalCode: string;
  shippingCountry: string;
  shippingSubdivision: string;
  shippingOption: string;
}

interface CheckoutFormProps {
  checkoutToken: CheckoutToken | null;
  activeStep: number;
  setActiveStep: React.Dispatch<SetStateAction<number>>;
}

const CheckoutForm = ({
  checkoutToken,
  activeStep,
  setActiveStep,
}: CheckoutFormProps) => {
  const { register, setFocus, handleSubmit, formState } = useForm<IFormData>();

  const { errors, isDirty, isValid } = formState;

  const setCheckoutData = useCheckoutData((state) => state.setCheckoutData);

  const [shippingCountries, setShippingCountries] = useState<Options[] | null>(
    null
  );
  const [shippingCountry, setShippingCountry] = useState("");
  const [shippingSubdivisions, setShippingSubdivisions] = useState<
    Options[] | null
  >(null);
  const [shippingSubdivision, setShippingSubdivision] = useState("");
  const [shippingOptions, setShippingOptions] = useState<
    GetShippingOptionsResponse[] | null
  >(null);
  const [shippingOption, setShippingOption] = useState("");

  const options = shippingOptions?.map((option) => ({
    id: option.id,
    label: `${option.description} - (${option.price.formatted_with_symbol})`,
  }));

  const fetchShippingCountries = useCallback(
    async (checkoutTokenId: string) => {
      try {
        const { countries } =
          await commerce.services.localeListShippingCountries(checkoutTokenId);

        const countryArray = Object.entries(countries).map(([code, name]) => ({
          code,
          label: name,
        }));
        setShippingCountries(countryArray);

        if (!shippingCountry) setShippingCountry(Object.keys(countries)[0]);
      } catch (error) {
        toast.error("Something went wrong. Failed to generate token");
      }
    },
    [shippingCountry]
  );

  const fetchSubdivisions = useCallback(
    async (checkoutToken: string, countryCode: string) => {
      try {
        const { subdivisions } =
          await commerce.services.localeListShippingSubdivisions(
            checkoutToken,
            countryCode
          );

        const subdivisionArray = Object.entries(subdivisions).map(
          ([code, name]) => ({
            code,
            label: name,
          })
        );
        setShippingSubdivisions(subdivisionArray);

        if (!shippingSubdivision)
          setShippingSubdivision(Object.keys(subdivisions)[0]);
      } catch (error) {
        toast.error("Something went wrong. Failed to generate token");
      }
    },
    [shippingSubdivision]
  );

  const fetchShippingOptions = async (
    checkoutTokenId: string,
    country: string,
    region: string = ""
  ) => {
    const options = await commerce.checkout.getShippingOptions(
      checkoutTokenId,
      { country, region }
    );

    setShippingOptions(options);
    setShippingOption(options[0].id);
  };

  // Set focus to firstName input when component mounts
  useEffect(() => {
    setFocus("firstName");
  }, [setFocus]);

  useEffect(() => {
    if (checkoutToken) fetchShippingCountries(checkoutToken.id);
  }, [checkoutToken, fetchShippingCountries]);

  useEffect(() => {
    if (shippingCountry && checkoutToken)
      fetchSubdivisions(checkoutToken?.id, shippingCountry);
  }, [shippingCountry, checkoutToken, fetchSubdivisions]);

  useEffect(() => {
    if (shippingSubdivision && checkoutToken)
      fetchShippingOptions(
        checkoutToken.id,
        shippingCountry,
        shippingSubdivision
      );
  }, [shippingSubdivision, shippingCountry, checkoutToken]);

  const onSubmit: SubmitHandler<IFormData> = (data) => {
    setCheckoutData({ ...data });

    setActiveStep(activeStep + 1);
  };

  return (
    <>
      <form
        className="w-full max-w-4xl mx-auto grid sm:grid-cols-2 gap-4 mt-6 mb-8"
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
        <Select
          label="Shipping Country"
          defaultOption="Select country"
          value={shippingCountry}
          {...register("shippingCountry", {
            onChange: (event) => setShippingCountry(event.target.value),
          })}
        >
          {shippingCountries?.map((option) => (
            <option key={option.code} value={option.code}>
              {option.label}
            </option>
          ))}
        </Select>
        <Select
          label="Shipping Subdivision"
          defaultOption="Select subdivision"
          value={shippingSubdivision}
          {...register("shippingSubdivision", {
            onChange: (event) => setShippingSubdivision(event.target.value),
          })}
        >
          {shippingSubdivisions?.map((subdivision) => (
            <option key={subdivision.code} value={subdivision.code}>
              {subdivision.label}
            </option>
          ))}
        </Select>
        <Select
          label="Shipping Options"
          defaultOption="Select shipping options"
          value={shippingOption}
          {...register("shippingOption", {
            onChange: (e) => setShippingOption(e.target.value),
          })}
        >
          {options?.map((option) => (
            <option key={option.id} value={option.id}>
              {option.label}
            </option>
          ))}
        </Select>

        <Button
          type="submit"
          className="w-full max-w-xs mt-4 mx-auto col-span-2 disabled:bg-primary/80 disabled:text-gray-300 disabled:cursor-not-allowed focus-visible:outline focus-visible:outline-primary"
          disabled={!isDirty || !isValid}
        >
          Next
        </Button>
      </form>
    </>
  );
};

export default CheckoutForm;

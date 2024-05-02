"use client";

import { useEffect } from "react";
import Link from "next/link";
import { useFormState } from "react-dom";
import { FaGoogle } from "react-icons/fa";

import Button from "@/components/Button";

import { signUpWithGoogle, signup } from "../../actions";
import toast from "react-hot-toast";

const initialState = {
  success: false,
  message: "",
};

const PageComponent = () => {
  const [state, formAction] = useFormState(signup, initialState);

  useEffect(() => {
    if (state.message !== "") {
      state.success ? toast.success(state.message) : toast.error(state.message);
    }
  }, [state]);

  return (
    <form className="flex flex-col order-1 md:order-2">
      <h1 className="text-3xl md:text-5xl mb-2 text-center text-slate-800">
        Create an account
      </h1>
      <p className="text-center mb-6 text-slate-800">
        Welcome to Style Vault. The Home of Trend.
      </p>
      <label htmlFor="email" className="mb-2 text-slate-800 font-medium">
        Name*:
      </label>
      <input
        id="fullname"
        name="fullname"
        type="text"
        placeholder="Your Full Name"
        required
        className="p-3 bg-transparent border border-slate-800 text-slate-800 rounded-lg mb-4"
      />
      <label htmlFor="email" className="mb-2 text-slate-800 font-medium">
        Email*:
      </label>
      <input
        id="email"
        name="email"
        type="email"
        placeholder="example@gmail.com"
        required
        className="p-3 bg-transparent border border-slate-800 text-slate-800 rounded-lg mb-4"
      />
      <label htmlFor="password" className="mb-2 text-slate-800 font-medium">
        Password*:
      </label>
      <input
        id="password"
        name="password"
        type="password"
        required
        placeholder="**********"
        className="p-3 bg-transparent border border-slate-800 text-slate-800 rounded-lg mb-4"
      />
      <Button type="submit" formAction={formAction} className="mb-4 text-base">
        Create Account
      </Button>
      <Button
        type="submit" // remove to prevent form submission
        formAction={signUpWithGoogle}
        className="bg-transparent border-2 border-primary text-primary text-base hover:bg-primary/5"
      >
        <FaGoogle size={24} />
        Continue with Google
      </Button>

      <div className="flex items-center gap-1 justify-center mt-6">
        <p className="font-medium text-slate-600">Already have an account?</p>
        <Link href="/login" className="font-semibold text-primary">
          Sign in
        </Link>
      </div>
    </form>
  );
};

export default PageComponent;

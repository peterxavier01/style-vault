"use client";

import Link from "next/link";
import React, { useEffect } from "react";
import { useFormState } from "react-dom";
import toast from "react-hot-toast";
import { FaGoogle } from "react-icons/fa";

import Button from "@/components/Button";

import { login, signUpWithGoogle } from "../../actions";

const initialState = {
  success: false,
  message: "",
};

const PageComponent = () => {
  const [state, formAction] = useFormState(login, initialState);

  useEffect(() => {
    if (state.message !== "") {
      state.success ? toast.success(state.message) : toast.error(state.message);
    }
  }, [state]);

  return (
    <form className="flex flex-col order-1 md:order-2">
      <h1 className="text-3xl md:text-5xl mb-2 text-center text-slate-800">
        Sign In
      </h1>
      <p className="text-center mb-6 text-slate-800">
        Welcome to Style Vault. The Home of Trend.
      </p>
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
        Log in
      </Button>
      <Button
        type="submit"
        formAction={signUpWithGoogle}
        className="bg-transparent border-2 border-primary text-primary text-base hover:bg-primary/5"
      >
        <FaGoogle size={24} />
        Continue with Google
      </Button>

      <div className="flex items-center gap-1 justify-center mt-6">
        <p className="font-medium text-slate-600">
          Don&apos;t have an account?
        </p>
        <Link href="/signup" className="font-semibold text-primary">
          Sign up
        </Link>
      </div>
    </form>
  );
};

export default PageComponent;

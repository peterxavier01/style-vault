"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import { createClient } from "@/utils/supabase/server";
import { cookies } from "next/headers";

type prevStateType = {
  success: boolean;
  message: string;
};

export async function login(prevState: prevStateType, formData: FormData) {
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);

  const data = {
    // TODO: Remove type-casting and provide type of data
    email: formData.get("email") as string,
    password: formData.get("password") as string,
  };

  const { error } = await supabase.auth.signInWithPassword(data);

  if (error) {
    return {
      success: false,
      message: "Login failed. Check your email and password.",
    };
  }

  const user = await supabase.auth.getUser();
  if (user) {
    // If the user is signed in, revalidate and redirect
    revalidatePath("/", "layout");
    redirect("/");
  } else {
    return {
      success: false,
      message: "Sign-in failed",
    };
  }
}

export async function signup(prevState: prevStateType, formData: FormData) {
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);

  const data = {
    email: formData.get("email") as string,
    password: formData.get("password") as string,
  };

  const username = formData.get("fullname") as string;
  const { error: userError } = await supabase
    .from("users")
    .insert({ name: username });

  if (userError) {
    return {
      success: false,
      message: "Error creating user account. Please try again",
    };
  }

  const { error } = await supabase.auth.signUp(data);

  if (!error) {
    return {
      success: true,
      message: "Please check your email for the confirmation mail",
    };
  }

  if (error) {
    return {
      success: false,
      message: error.message,
    };
  }

  revalidatePath("/login", "layout");
  redirect("/login");
}

export async function signUpWithGoogle() {
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);

  const { error } = await supabase.auth.signInWithOAuth({
    provider: "google",
    options: {
      queryParams: {
        access_type: "offline",
        prompt: "consent",
      },
    },
  });

  if (error) {
    console.log(error.message);
    return { error: error.message };
  }

  revalidatePath("/", "layout");
  redirect("/");
}

export async function signOut() {
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);

  const { error } = await supabase.auth.signOut();

  if (error) {
    throw new Error("Something went wrong. Please try again");
  }

  revalidatePath("/login", "layout");
  redirect("/login");
}

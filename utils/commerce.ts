import CommerceSDK from "@chec/commerce.js";

let commerce: CommerceSDK;

try {
  const publicKey = process.env.NEXT_PUBLIC_CHEC_PUBLIC_API_KEY as string;
  commerce = new CommerceSDK(publicKey);
} catch (error) {
  console.error("Error initializing Commerce.js:", error);
  throw new Error("Failed to initialize Commerce.js");
}

export default commerce;

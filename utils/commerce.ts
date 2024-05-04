import CommerceSDK from "@chec/commerce.js";

let commerce;

try {
  commerce = new CommerceSDK(
    process.env.NEXT_PUBLIC_CHEC_PUBLIC_API_KEY as string
  );
  // Continue with your Commerce.js operations
} catch (error) {
  console.error("Error initializing Commerce.js:", error);
}

export default commerce;

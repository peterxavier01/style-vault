import CommerceSDK from "@chec/commerce.js";

const client = new CommerceSDK(
  encodeURIComponent((process.env.NEXT_PUBLIC_CHEC_API_KEY || "").trim())
);

export default client;

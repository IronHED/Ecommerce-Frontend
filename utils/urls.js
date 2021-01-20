export const API_URL =
  process.env.NEXT_PUBLIC_API_URL || "http://localhost:1337"

export const MAGIC_PUBLIC_KEY = process.env.NEXT_PUBLIC_MAGIC_PUBLIC_KEY || 'pk_test_AEE54B0C64BC6C7A'

export const STRIPE_PK = process.env.NEXT_PUBLIC_STRIPE_PK || 'pk_test_51IAKpaCekxGqlvDk0dqariWSjKZPsztboHEM2JQmEKrViLhvpAEMTEKpwL0RqyL1n2pv7MjqMuR9ej4yLc7kFV9f00QrBt40Y5'

/**
 * Given a image object return the proper path to display it
 * Provides a default as well
 * @param {any} image 
 */
export const fromImageToUrl = (image) => {
    if (!image) {
      return "/vercel.svg"; //Or default image here
    }
    if (image.url.indexOf("/") === 0) {
      //It's a relative url, add API URL
      return `${API_URL}${image.url}`;
    }
  
    return image.url;
};
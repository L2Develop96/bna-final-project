import { IProduct } from '../model/product';

export const isValidEmail = (email: string): boolean => {
  const emailRegex = /^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i;
  return emailRegex.test(email);
};

export const isValidPassword = (
  password: string,
  confirmPassword: string
): boolean => {
  return password === confirmPassword;
};

export const productGroupById = (
  products: IProduct[]
): Record<string, IProduct[]> => {
  return products.reduce(function (
    results: Record<string, IProduct[]>,
    product
  ) {
    (results[product.id] = results[product.id] || []).push(product);
    return results;
  },
  {});
};

export const BASE_URL = 'ch-react-site';
export const APP_URL = 'chat';
export const CHANNEL_URL = `${BASE_URL}/${APP_URL}`;
export const PRICING_URL = `${BASE_URL}/pricing`;
export const DETAILS_URL = `${PRICING_URL}/:productCategory/details/:productId`;
export const CART_URL = `${BASE_URL}/cart`;

export const TO_DETAILS_URL = (category: string, id: string) =>
	`/${PRICING_URL}/${category}/details/${id}`;

export function isEmptyObject(obj: object) {
	return !(Object.keys(obj).length > 0);
}

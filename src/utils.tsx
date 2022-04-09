import { HTMLAttributes } from 'react';

export const BASE_URL = 'ch-react-site';
export const APP_URL = 'chat';
export const CHANNEL_URL = `${BASE_URL}/${APP_URL}`;
export const PRICING_URL = 'pricing';
export const DETAILS_URL = `${PRICING_URL}/:productCategory/details`;
export const CART_URL = 'cart';

export type DivProps = HTMLAttributes<HTMLDivElement>;

export function isEmptyObject(obj: object) {
	return !(Object.keys(obj).length > 0);
}

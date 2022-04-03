import { HTMLAttributes } from 'react';

export const BASE_URL = 'ch-react-site';

export type DivProps = HTMLAttributes<HTMLDivElement>;

export function isEmptyObject(obj: object) {
	return !(Object.keys(obj).length > 0);
}

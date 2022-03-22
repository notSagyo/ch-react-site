import { Icon, User, Users } from 'tabler-icons-react';
import { HTMLAttributes } from 'react';

export type DivProps = HTMLAttributes<HTMLDivElement>;

export let iconsMap = new Map<string, Icon>([
	['user', User],
	['users', Users]
]);
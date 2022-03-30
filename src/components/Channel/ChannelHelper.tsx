import { User, Users } from 'tabler-icons-react';
import { iChannel } from '../../types';

export async function getChannels() {
	const channels = fetch('https://api.npoint.io/b9709844c16d16fbd3bc')
		.then(res => res.json())
		.then(json => {
			json.USERS.forEach((user: iChannel) => { Object.assign(user, { icon: User }); });
			json.TEAMS.forEach((team: iChannel) => { Object.assign(team, { icon: Users }); });
			return json;
		});
	return channels;
}

export function createChannel({
	label,
	type,
	description
}: {
	label: string,
	type: 'user' | 'team'
	description?: string,
}) {
	return {
		description: description || '',
		id: String(Date.now()),
		created: Date.now(),
		updated: Date.now(),
		label: label,
		messages: [],
		type: type,
		members: [],
	};
}

export function createMockupChannels() {
	const channels = {
		USERS: [
			createChannel({ label: 'Savlian Matius', type: 'user' }),
			createChannel({ label: 'Mannimarco', type: 'user' }),
			createChannel({ label: 'Mankar Camoran', type: 'user' }),
			createChannel({ label: 'Sheogorath', type: 'user' }),
			createChannel({ label: 'Pelinal Whitestrake', type: 'user' }),
			createChannel({ label: 'St. Alessia', type: 'user' }),
			createChannel({ label: 'Hermaeus Mora', type: 'user' }),
			createChannel({ label: 'Adoring Fan', type: 'user' }),
			createChannel({ label: 'Vanus Galerion', type: 'user' }),
			createChannel({ label: 'Lucien Lachance', type: 'user' }),
			createChannel({ label: 'Vicente Valtieri', type: 'user' }),
			createChannel({ label: 'Uriel Septim', type: 'user' }),
			createChannel({ label: 'Baurus', type: 'user' }),
			createChannel({ label: 'Macaulay Culkin', type: 'user' }),
			createChannel({ label: 'Chanandler Bong', type: 'user' }),
			createChannel({ label: 'Marito Baracus', type: 'user' }),
			createChannel({ label: 'Gaspi', type: 'user' }),
			createChannel({ label: 'july3p', type: 'user' }),
			createChannel({ label: 'El Maestruli', type: 'user' }),
			createChannel({ label: 'Princess Consuela Banana-Hammock', type: 'user' })
		],
		TEAMS: [
			createChannel({ label: 'Cloud9', type: 'team' }),
			createChannel({ label: 'Cloud9', type: 'team' }),
			createChannel({ label: 'SSG', type: 'team' }),
			createChannel({ label: 'TSM', type: 'team' }),
			createChannel({ label: 'Team Liquid', type: 'team' }),
		]
	};

	console.log(JSON.stringify(channels, null, 2));
}

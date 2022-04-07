import { User, Users } from 'tabler-icons-react';
import { iChannel } from '../../types';

export async function getChannels() {
	const channels = fetch('https://api.jsonbin.io/b/6244cf1ad96a510f028d0a38/5')
		.then(res => res.json())
		.then(json => {
			json.USERS.forEach((user: iChannel) => { Object.assign(user, { icon: User }); });
			json.TEAMS.forEach((team: iChannel) => { Object.assign(team, { icon: Users }); });
			return json;
		});
	return channels;
}

export async function getChannel(id: string) {
	const channels = await getChannels();
	let channel: iChannel | undefined;
	for (const key in channels) {
		const prop = channels[key];
		if (Array.isArray(prop))
			channel = prop.find((channel: iChannel) => channel?.id == id);
		if (channel)
			break;
	}
	return channel;
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

import { Group, Text, useMantineTheme } from '@mantine/core';
import { ContextModalProps } from '@mantine/modals';
import { useEffect, useState } from 'react';
import { AlertCircle, AlertOctagon, AlertTriangle, CircleCheck } from 'tabler-icons-react';

type alertModalProps = ContextModalProps<{
	modalBody: JSX.Element;
	type: 'error' | 'success' | 'warning' | 'info';
}>

function AlertModal({ innerProps }: alertModalProps) {
	const theme = useMantineTheme();
	const [icon, setIcon] = useState(<></>);

	useEffect(() => {
		if (innerProps.type === 'error') setIcon(<AlertOctagon color={theme.colors.red[7]} size={24}/>);
		else if (innerProps.type === 'success') setIcon(<CircleCheck color={theme.colors.green[7]} size={24} />);
		else if (innerProps.type === 'warning') setIcon(<AlertTriangle color={theme.colors.yellow[7]} size={24} />);
		else if (innerProps.type === 'info') setIcon(<AlertCircle color={theme.colors.blue[7]} size={24} />);
	}, [innerProps.type]);

	return (
		<Group noWrap spacing={'xs'}>
			{icon}
			<Text size='sm'>
				{innerProps.modalBody}
			</Text>
		</Group>
	);
}

export default AlertModal;

import { ActionIcon } from '@mantine/core'
import { RxReader } from 'react-icons/rx'

interface PostLinkIconProps {
    to: string
}

export const PostLinkIcon = ({ to }: PostLinkIconProps) => {
    const icon = (
        <ActionIcon
            variant="subtle"
            size="md"
            title="Details"
            component="span"
            style={{ color: '#DC175F', verticalAlign: 'bottom', marginLeft: 5 }}
        >
            <RxReader />
        </ActionIcon>
    )

    return <a href={to} target="_blank" rel="noopener noreferrer">{icon}</a>
}
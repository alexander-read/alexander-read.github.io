import {Outlet, useNavigate, useLocation, NavigateFunction} from 'react-router-dom'
import { Container, Tabs, Anchor, Box, Paper } from '@mantine/core'
import '../styles/styles.css'

const NAV_TABS = [
    { label: 'About',    to: '/' },
    { label: 'Projects', to: '/projects' },
    { label: 'Notes',    to: '/notes' },
]

export default function Layout() {
    const navigate: NavigateFunction = useNavigate()
    const { pathname } = useLocation()

    return (
        <Box style={{ backgroundColor: '#FAFAFA', minHeight: '100vh', fontSize: '1.0625rem' }}>
            <Container size={840} style={{ padding: '1.5em', backgroundColor: '#FAFAFA', color: '#111111' }}>
                {/* Sticky navbar */}
                <Box
                    style={{
                        padding: '1em 0 0 0',
                        position: 'sticky',
                        top: 0,
                        zIndex: 100,
                        backgroundColor: '#FAFAFA',
                        paddingBottom: 8,
                        width: "max-content",
                    }}
                >
                    <Paper withBorder radius="sm" p={4} style={{ borderColor: '#8796A2', backgroundColor: '#FAFAFA' }}>
                        <Tabs
                            value={pathname}
                            onChange={(to) => to && navigate(to)}
                            variant="pills"
                            fz={`lg`}
                        >
                            <Tabs.List style={{ gap: 4, borderBottom: 'none', alignItems: 'center' }}>
                                {NAV_TABS.map(({ label, to }) => (
                                    <Tabs.Tab key={to} value={to} className={`navTab ${pathname === to ? 'navTabActive' : ''}`}>
                                        {label}
                                    </Tabs.Tab>
                                ))}
                                <Anchor
                                    href="https://github.com/alexander-read"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="navGithub"
                                >
                                    {`GitHub`}
                                </Anchor>
                            </Tabs.List>
                        </Tabs>
                    </Paper>
                </Box>

                {/* Page content */}
                <Box mt="md">
                    <Outlet />
                </Box>

            </Container>
        </Box>
    )
}
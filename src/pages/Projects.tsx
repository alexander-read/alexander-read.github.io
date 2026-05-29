import React from 'react';
import {Text, List, Title} from '@mantine/core';
import {PostLinkIcon} from "../components/PostLink.tsx";

interface Project {
    name: string
    url: string
    description: React.ReactNode
    notesLink?: string
}

const PROJECTS: Project[] = [
    {
        name: 'meredith',
        url: 'https://github.com/alexander-read/positive-imp',
        notesLink: '/notes/meredith.pdf',
        description: (
            <Text mt={4}>
                A command-line environment for doing Hilbert-style proofs in the implicational
                fragment of the intuitionistic propositional calculus. This uses the
                Unification algorithm from Damas-Hindley-Milner type inference to compute
                the{' '}
                <a href="https://en.wikipedia.org/wiki/Condensed_detachment" className={`embeddedLink`}>
                    condensed detachment
                </a>{' '}
                of pairs of formulae. Eventually I'd like to add an evaluator.
            </Text>
        ),
    },
    {
        name: 'SKI-machine',
        url: 'https://github.com/alexander-read/combinators',
        description: (
            <Text mt={4}>
                A combinator reduction machine for the un-typed lambda-calculus. Part of
                an in-progress project to build a compiler for a small, lazy functional
                language, using graph-reduction and a fixed set of combinators like{' '}
                <a href="https://www.cs.kent.ac.uk/people/staff/dat/miranda/" className={`embeddedLink`}>
                    Miranda
                </a>
                .
            </Text>
        ),
    },
]

export default function Projects() {
    return (
        <div style={{ textAlign: 'justify' }}>
            <Text mb="md">Here are some projects I'm working on:</Text>
            <List spacing="lg" listStyleType="none" pl={0}>
                {PROJECTS.map(project => (
                    <List.Item key={project.name} className={`projectItem`}>
                        <Title order={2} fw={800} fz="lg" display="inline">
                            <a href={project.url} target="_blank" rel="noopener noreferrer" className={`projectTitle`}>
                                {project.name}
                            </a>
                        </Title>
                        {project.notesLink && <PostLinkIcon to={project.notesLink}/>}
                        <span className={`projectDescription`}>
                            {project.description}
                        </span>
                    </List.Item>
                ))}
            </List>
        </div>
    )
}
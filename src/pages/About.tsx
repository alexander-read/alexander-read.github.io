import { Text, Box } from '@mantine/core'
import CombinatorDerivation from "../components/CombinatorDerivation.tsx";


function VimBorder({ rows = 20, char = "~", style = {} }) {
    return (
        <div style={{
            fontFamily: 'monospace',
            lineHeight: '1.1',
            color: '#4A4A8A',
            ...style,
        }}>
            {Array.from({ length: rows }, (_, i) => (
                <div key={i}>{char}</div>
            ))}
        </div>
    );
}

const ySteps = [
    { term: 'Yx' },
    { term: 'S(K(SI))(SII)Ux', arrow: '===',    rule: 'Y'  },
    { term: 'K(SI)U(SIIU)x',   arrow: '-->_w',  rule: 'S'  },
    { term: 'SI(SIIU)x',       arrow: '-->_w',  rule: 'K'  },
    { term: 'Ix(SIIUx)',       arrow: '-->_w',  rule: 'S'  },
    { term: 'x(SIIUx)',        arrow: '-->_w',  rule: 'I'  },
    { term: 'x(IU(IU)x)',      arrow: '-->_w',  rule: 'S'  },
    { term: 'x(UUx)',          arrow: '-->>_w', rule: 'I', },
    { term: 'x(Yx)',           arrow: '===',    rule: 'U'  },
]

export default function About() {
  return (
    <div className="about-tab">
        <Box>
            <Text>I'm a software engineer at Paradine Performance, building a next-generation data analysis platform for motorsports.</Text>
            <Text mt="sm">
                I'm interested in compilers, typed systems, and formal methods as practical tools for building reliable and performant software.
            </Text>
        </Box>
        <Box>
            <div style={{ display: 'inline-flex', alignItems: 'flex-start' }}>
                <CombinatorDerivation
                    steps={ySteps}
                    description={`Weak contraction and reduction steps for Turing's fixed-point combinator`}
                />
                <VimBorder rows={15} char="#" style={{ paddingLeft: '0.4em' }} />
            </div>
        </Box>
    </div>
  )
}

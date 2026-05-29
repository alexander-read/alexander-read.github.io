// Renders combinator reduction sequences.
import React, { CSSProperties } from 'react';

export type ReductionStep =
    | '==='    // AST equality
    | '-->_w'  // Weak contraction
    | '-->_b'  // Beta contraction
    | '-->>_w' // Weak reduction
    | '-->>_b' // Beta reduction
    | string;  // Custom

export interface DerivationStep {
    term: string;
    arrow?: ReductionStep;
    rule?: string;
}

export interface CombinatorDerivationProps {
    steps: DerivationStep[];
    description?: string;
}

const COMBINATOR_COLORS: Record<string, string> = {
    S: '#2962FF',
    K: '#827717',
    I: '#7C4DFF',
    Y: '#FF4081',
    U: '#009688',
};

const DEFAULT_COMBINATOR_COLOUR = '#34495e';

const THEME = {
    bg:          '#FAFAFA',
    variable:    '#424242',
    paren:       '#424242',
    other:       '#424242',
    arrow:       '#263238',
    rule:        '#263238',
};

const KNOWN_COMBINATORS = new Set([
    'S','K','I','B','C','W','Y','U',
]);

interface Token {
    text: string;
    type: 'combinator' | 'variable' | 'paren' | 'other';
    offset: number;
}

function tokenise(term: string): Token[] {
    const tokens: Token[] = [];
    let i = 0;
    while (i < term.length) {
        const ch = term[i];
        if (ch === '(' || ch === ')') {
            tokens.push({ text: ch, type: 'paren', offset: i });
            i++;
        } else if (ch >= 'A' && ch <= 'Z' && KNOWN_COMBINATORS.has(ch)) {
            tokens.push({ text: ch, type: 'combinator', offset: i });
            i++;
        } else if (ch >= 'a' && ch <= 'z') {
            let j = i + 1;
            while (j < term.length && (
                (term[j] >= '0' && term[j] <= '9') ||
                term[j] === '_' || term[j] === '\'' ||
                (term[j] >= 'a' && term[j] <= 'z')
            )) j++;
            tokens.push({ text: term.slice(i, j), type: 'variable', offset: i });
            i = j;
        } else {
            tokens.push({ text: ch, type: 'other', offset: i });
            i++;
        }
    }
    return tokens;
}

function renderArrow(arrow: ReductionStep): string {
    switch (arrow) {
        case '-->_w':  return '-->_w';
        case '-->_n':  return '-->_n';
        case '-->_b':  return '-->_β';
        case '-->>_w': return '->>_w';
        case '-->>_b': return '->>_β';
        case '===':    return '  ===';
        case '=':      return '  ═══';
        default:       return arrow;
    }
}

function TermSpans({ term, combinatorColors }: { term: string; combinatorColors: Record<string, string>; }): React.JSX.Element {
    const tokens: Token[] = tokenise(term);

    const spans = tokens.map((tok, idx) => {
        let color: string;
        if (tok.type === 'combinator') {
            color = combinatorColors[tok.text] ?? DEFAULT_COMBINATOR_COLOUR;
        } else if (tok.type === 'variable') {
            color = THEME.variable;
        } else if (tok.type === 'paren') {
            color = THEME.paren;
        } else {
            color = THEME.other;
        }

        const style: CSSProperties = { color };
        if (tok.type === 'combinator') style.fontWeight = '600';

        return <span key={idx} style={style}>{tok.text}</span>;
    });

    return <>{spans}</>;
}

function PrintDerivation({ steps, combinatorColors }: {
    steps: DerivationStep[];
    combinatorColors: Record<string, string>;
}): React.JSX.Element {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
            {steps.map((step, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'baseline', gap: '0.6em' }}>
                    {/* Arrow cell — empty on first row, fixed-width thereafter so terms align */}
                    <span style={{ minWidth: '3em', flexShrink: 0, color: THEME.arrow, fontSize: '0.95em', letterSpacing: '-0.02em' }}>
                        {i === 0 ? '' : renderArrow(step.arrow ?? '')}
                    </span>
                    {step.rule && i > 0 && (
                        <span style={{ fontSize: '0.68em', color: THEME.rule, flexShrink: 0 }}>
                            [{step.rule}]
                        </span>
                    )}
                    <span>
                        <TermSpans term={step.term} combinatorColors={combinatorColors} />
                    </span>
                </div>
            ))}
        </div>
    );
}

export default function CombinatorDerivation({ steps, description }: CombinatorDerivationProps): React.JSX.Element {
    return (
        <figure
            aria-label={description}
            style={{
                display: 'inline-block',
                background: THEME.bg,
                fontFamily: "'JetBrains Mono', 'Courier New', monospace",
                fontSize: '18px',
                lineHeight: '1.8',
                padding: '0 1.8em',
                margin: 0,
            }}
        >
            <pre style={{ margin: 0, fontFamily: 'inherit', fontSize: 'inherit' }}>
                <PrintDerivation steps={steps} combinatorColors={COMBINATOR_COLORS} />
            </pre>
        </figure>
    );
}
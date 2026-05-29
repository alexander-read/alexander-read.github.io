import {GoArrowRight} from "react-icons/go";

export interface NoteMetadata {
  note: string   // The URL segment, e.g. "fixed-point-combinators"
  title: string  // The title of the notes
  date: string   // Date in ISO format: "2024-08-22"
}

const NOTES: NoteMetadata[] = [
  { note: 'meredith.pdf', title: 'Intuitionistic Propositional Logic', date: '2024-08-22' },
]

function formatDate(iso: string): string {
  const [year, month, day] = iso.split('-')
  return `${day}/${month}/${year}`
}

export default function Notes() {
    return (
        <div>
            <h4 className="embeddedTitle">Notes</h4>
            <div className="notes-list">
                {NOTES.map(note => (
                    <div key={note.note} className="notes-item">
                        <span className="dateString">{formatDate(note.date)}</span>
                        <GoArrowRight className={`embeddedSeparator`}/>
                        <a href={`/notes/${note.note}`} target="_blank" rel="noopener noreferrer" className="notes-title">
                            {note.title}
                        </a>
                    </div>
                ))}
            </div>
        </div>
    )
}

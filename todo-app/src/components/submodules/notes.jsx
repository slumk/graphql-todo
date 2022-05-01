import { useState } from "react"
import { useQuery } from "@apollo/client"
import { fetchNotes } from "./graphql/fetchNotes"

const NotePanel = ({ note }) => {
    const [deleted, updateDeletionStatus] = useState(false)
    if (deleted){
        return null
    }
    return (
    <div className="grid grid-cols-2 px-1 py-2 border-2 border-black">
            <div className="grid gap-1">
            <span className="text-lg text-black font-bold">
                { note.note_name }
                </span>
                <span className="italic">
                    {note.note_content}
                </span>
            </div>
            <button className="justify-self-end bg-green-200 hover:bg-red-400 rounded-full px-2 py-0.5"
                onClick={() => {
                    if (deleteItem(note.id)) {
                        updateDeletionStatus(true)
                    }
                }}>
                Remove
            </button>
    </div> )
}

const ShowNotes = () => {
    const { loading, error, data } = useQuery(fetchNotes)
    if (loading) return <p>Loading</p>
    if (error) return <p>Error</p>
    if (data) {
        return (
            <div className="grid gap-1">
                {data.notes.map((note) => (<NotePanel key={note.id} note={note} />))}
            </div>
        )
    }
}
export default ShowNotes
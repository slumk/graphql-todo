import { useState } from "react"
import { useMutation } from "@apollo/client"
import { addNote } from "./graphql/addNotes"
import { fetchNotes } from "./graphql/fetchNotes"

const NavBar = () => {
    const [noteName, updateNoteName] = useState('')
    const [noteContent, updateContent] = useState('')
    const [isFormShown, updateDisplayStatus] = useState(false)
    const [createNote, { error, loading }] = useMutation(addNote,
        {
            refetchQueries: [
                fetchNotes,
                'fetchNotes'
        ]
    })
    return (
    <div className="grid">
        <div className="flex gap-4 justify-center bg-emerald-300 px-10 py-2">
            <h1 className='text-3xl font-mono text-center self-center'>TODO APP</h1>
            <button onClick={() => updateDisplayStatus(!isFormShown)} className="bg-white hover:bg-gray-400 rounded-full px-4 py-2">+</button>
            </div>
            {(error || loading) ? null :
                <div className={isFormShown ? 'py-2 border-2 border-red-300 rounded-xl p-3' : 'hidden'}>
                    <form className="grid gap-2"
                        onSubmit={(e) => {
                            e.preventDefault()
                            createNote({ variables: { name: noteName, content: noteContent } })
                        }}>
                        <div className="flex gap-1">
                            <span>Enter Note Name:</span>
                            <input type="text" className="p-1 border-2 border-black rounded-xl" onChange={(e) => updateNoteName(e.target.value)} />
                        </div>
                        <div className="flex gap-1">
                            <span>Enter Content:</span>
                            <textarea onChange={(e) => updateContent(e.target.value)} className="border-2 p-1 border-black rounded-xl"/>
                        </div>
                        <div className="flex gap-1 justify-self-center">
                            <button type="submit" className='bg-green-200 rounded-full py-2 px-1 hover:bg-red-200'>
                                Add Note
                            </button>
                            <button type="reset" className='bg-green-200 rounded-full py-2 px-3 hover:bg-red-200'>
                                Clear
                            </button>
                        </div>
                    </form>
                </div>}
    </div>
    )}
export default NavBar
import { gql } from "@apollo/client";

export const addNote = gql`
    mutation CreateNote($name: String!, $content: String!) {
        createNote(name: $name, content: $content){
            id
        }
    }
`
export const deleteNotes = gql`
    mutation DeleteNote($id: ID!){
        deleteNote(id: $id){
            id
        }
    }
`
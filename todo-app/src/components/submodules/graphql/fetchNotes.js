import { gql } from "@apollo/client";

export const fetchNotes = gql`
    {
	notes {
		id
		note_name
		note_content
	}
}
`
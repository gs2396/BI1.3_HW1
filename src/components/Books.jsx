import { useState } from "react";
import useFetch from "../useFetch";
const Books = () => {
    const [bookSuccessMessage, setBookSuccessMessage] = useState("")
    const {data, loading, error} = useFetch("http://localhost:3000/books")
    //console.log(data)
    const handleDelete = async (bookId) => {
        try{
            const response = await fetch(`http://localhost:3000/books/${bookId}`,{
                method: "DELETE"
            });
            if(!response.ok) {
                throw "Failed to delete book."
            } 
            const data = await response.json()
            if(data) {
                setBookSuccessMessage("Book deleted successfully.")
                window.location.reload()

            }

        }catch(error) {
            console.log(error)
        }
    }

    return (
        <div>
            <h1>All Books</h1>
            <ul>
                {data?.map(book => (
                    <li key={book._id}>{book.title}{" "}<button onClick={() => handleDelete(book._id)}>Delete</button></li>
                ))}
            </ul>
            <p>{bookSuccessMessage}</p>
        </div>
    )


}
export default Books;
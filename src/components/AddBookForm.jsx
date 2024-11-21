import react, { useState } from "react"

const AddBookForm = () => {
    const [bookForm, setBookForm] = useState({
       title: "",
       author: "",
       publishedYear: "",
       genre: [],
       language: "",
       country: "",
       rating: "",
       summary: "",
       coverImageUrl: "" 
    })
    const handleChange = (event) => {
        const {name, value} = event.target;
        setBookForm((prevState) => ({...prevState, [name]: value}))
    }
    {/*const handleGenreChange = (e) => {
        const { value } = e.target;
        const genres = value.split(",").map((genre) => genre.trim());
        setBookForm({ ...bookForm, genre: genres });
      }  */}

    const handleSubmit = async (event) => {
        event.preventDefault()
        try{
            const response = await fetch("http://localhost:3000/books",{
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(bookForm)
            });
            if(!response.ok){
                throw "Failed to add book."
            }
            const data = await response.json()
            console.log("Added Book ", data)

        }catch(error){
            console.log(error)
        }
    }
     
   
    return(
        
        
        <form onSubmit={handleSubmit}>
      <div>
        <h2>Add New Book</h2>
        <label>Title:</label>
        <input type="text" name="title" value={bookForm.title} onChange={handleChange} required />
      </div>
      <div>
        <label>Author:</label>
        <input type="text" name="author" value={bookForm.author} onChange={handleChange} required />
      </div>
      <div>
        <label>Published Year:</label>
        <input type="number" name="publishedYear" value={bookForm.publishedYear} onChange={handleChange} required />
      </div>
      <div>
        <label>Genre:</label>
        <input type="text" name="genre" value={bookForm.genre} onChange={handleChange} />
      </div>
      <div>
        <label>Language:</label>
        <input type="text" name="language" value={bookForm.language} onChange={handleChange} required />
      </div>
      <div>
        <label>Country:</label>
        <input type="text" name="country" value={bookForm.country} onChange={handleChange} />
      </div>
      <div>
        <label>Rating:</label>
        <input type="number" name="rating" value={bookForm.rating} onChange={handleChange} />
      </div>
      <div>
        <label>Summary:</label>
        <textarea name="summary" value={bookForm.summary} onChange={handleChange}></textarea>
      </div>
      <div>
        <label>Cover Image URL:</label>
        <input type="url" name="coverImageUrl" value={bookForm.coverImageUrl} onChange={handleChange} />
      </div>
      <button type="submit">Add Book</button>
    </form>

    )

}
export default AddBookForm;
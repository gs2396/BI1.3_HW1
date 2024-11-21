import useFetch from "../useFetch";
const BookByAuthor = ({author}) => {
    const {data, loading, error} = useFetch(`http://localhost:3000/books/author/${author}`)

    console.log(data)

    return data? (
        <div>
            <h1>Books by {author}</h1>
            <ul>
               <li>{data.title}</li>
            </ul>
        </div>
    
    ) : (loading && <p>Loading...</p>)

}
export default BookByAuthor;
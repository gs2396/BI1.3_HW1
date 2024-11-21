import useFetch from "../useFetch";
const BookByTitle = ({title}) => {
    const {data, loading, error} = useFetch(`http://localhost:3000/books/${title}`)
    console.log(data)

    return data? (
        <div>
            <h1>{data.title}</h1>
            <p>Author: {data.author}</p>
            <p>Releae Year: {data.publishedYear}</p>
            <p>Genre: {data.genre[1]}</p>
        </div>
    ) : (loading && <p>Loading...</p>)

}
export default BookByTitle;
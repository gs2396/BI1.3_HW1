import './App.css'
import AddBookForm from './components/AddBookForm'
import Books from "./components/Books"
import BookByTitle from './components/BookByTitle'
import BookByAuthor from './components/BookByAuthor'


function App() {
  

  return (
    <>
    <AddBookForm />
     <Books /> 
     <BookByTitle title="Shoe Dog"/>
     <BookByAuthor author="Harper Lee" />
     
    </>
  )
}

export default App

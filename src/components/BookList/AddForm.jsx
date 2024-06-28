import React, { useLayoutEffect, useState } from 'react'
import Book from './Book'
export default function AddForm() {

    const [books, setBooks] = useState([])
    const [auther, setAuther] = useState('')
    const [year, setYear] = useState('')
    const [title, settitle] = useState('')


    const handelTitleChenge = (event) =>{
        let value = event.target.value
        settitle(value)
    }

    const handelAutherChenge = (event)=>{
        let value = event.target.value
        setAuther(value)
    }
    const handelYearChenge = (event)=>{
        let value = event.target.value
        setYear(value)
    }

    const handelSubmitForm = (event) =>{
        event.preventDefault()
        if(title && auther && year){
            let newBook = {
                title,
                auther,
                year,
                id:books.length +1

            }
            
         setBooks(oldbook=>[...oldbook,newBook])
            
            setAuther('')
            setYear('')
            settitle('')

            
        }else{
            // error handeling for full of inputs
        }
    }
    const handelRemoveBook=(getIp)=>{
        let mainBooks = [...books]
        let removebleId = books.findIndex(book=>{return book.id === getIp})
        mainBooks.splice(removebleId,1)
        setBooks(mainBooks)
        console.log(removebleId);
    }
  return ( <>
    <form id="book-form" autoComplete="off" onSubmit={handelSubmitForm}>
        <div className="form-group">
            <label htmlFor="title">Title</label>
            <input type="text" id="title" className="form-control" value={title} onChange={handelTitleChenge}/>
        </div>

        <div className="form-group">
            <label htmlFor="author">Auth</label>
            <input type="text" id="author" className="form-control" value={auther} onChange={handelAutherChenge} />
        </div>

        <div className="form-group">
            <label htmlFor="year">Year</label>
            <input type="text" id="year" className="form-control" value={year} onChange={handelYearChenge} />
        </div>
        <input type="submit" value="Add Book" className="submitaddbook"  />
    </form>
    <table className="table table-striped mt-5 text-center">
        <thead>
            <tr>
                <th>Title</th>
                <th>Author</th>
                <th>Year</th>
            </tr>
        </thead>
        <tbody id="book-list">
            {books.map((book)=>(<Book {...book} key={book.id} onRemove={()=> handelRemoveBook(book.id)}/>))}
        </tbody>
    </table>


</>
  )
}


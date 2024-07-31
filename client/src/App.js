import React, { useState } from "react";
// import logo from "./logo.svg";
import "./App.css";
import api from "./utils/api.js";
// import { NextUIProvider } from "@nextui-org/react";
import { Button, Container, Row, Col, Text,Spacer } from "@nextui-org/react";
import {Input} from "@nextui-org/input";
import {Card, CardHeader, CardBody, CardFooter, Divider, Link, Image} from "@nextui-org/react";

// import SearchBar from "./components/SearchBar";
// import Form from "./components/Division";
// import Button from "./components/Button";
// import {Button, ButtonGroup} from "@nextui-org/button";

function App() {  
  const [name, setName] = useState("");
  function handleChange(event) {
    console.log(event.target.value);
    setName(event.target.value);
  }

  const [searchAuthor, setsearchAuthor] = useState("");
  // const [renderAuthor, setrenderAuthor] = useState("");
  function authorChange(event) {
    console.log(event.target.value);
    setsearchAuthor(event.target.value);
  }

  const [bookName, setbookName] = useState([]);
  const [authorName, setauthorName] = useState([]);
  const [searchedBookName, setSearchedBookName] = useState(false);
  const [searchedAuthorName, setSearchedAuthorName] = useState(false);

  var getBookDetails = async () => {
    var res = await api("http://localhost:3001/allBooks");
    console.log("Heloooo=", res);
    setbookName(res.Books);
  };
  var getAuthorDetails = async () => {
    var author = await api("http://localhost:3001/allAuthors");
    // console.log("Full author=",author);
    console.log("author=", author.Authors);
    setauthorName(author.Authors);
  };
  var getSearchedBookdetails = async () => {
    var bookRes = await api(`http://localhost:3001/searchedBook/${name}`);
    console.log("bookRes=", typeof bookRes);
    setSearchedBookName(bookRes);
  };
  var getSearchedAuthordetails = async () => {
    var authorRes = await api(
      `http://localhost:3001/searchedAuthor/${searchAuthor}`
    );
    console.log("authorRes=", authorRes);
    // setrenderAuthor(bookRes);
    // console.log("renderAuthor=",renderAuthor);
    setSearchedAuthorName(authorRes);
    // console.log("searchedAuthorName=",searchedAuthorName);
  };

  return (
    <div>
      {/* <>
      <h1>Hello World!</h1></> */}
      <h1 className="heading">React APP with Express</h1>  
    
      {/* ***************Get all book name Working************** */}
      {/* <h1>Get all book name</h1>
      <Button color="primary" variant="ghost" onClick={() => getBookDetails()}> Search </Button>
      <div className="allBooks">
        <ul>
          {bookName.map((val) => {
            return <li>{val}</li>;
          })}
        </ul>
      </div> */}
      {/* ***************Get all book name Working ends************** */}
      <div className="allBooks flex">
      <h1>Get all Book names</h1><Spacer x={4} />
      <Button color="primary" variant="ghost" size="sm" onClick={() => getBookDetails()}> Search </Button>
      </div>
      <div>
          {bookName.map((val) => {
            return <li>{val}</li>;
          })}<br></br>        
      </div>





      {/* *************Get Searched book detail********** */}
      <div className="searchedBook">
      <h1>Get Searched book detail:</h1>
        {/* {name} */}
      {/* <div className="flex w-full flex-wrap md:flex-nowrap gap-4"> */}
      <Input  size="sm" className="custom-width" 
        onChange={handleChange}
        type="text"
        placeholder="Enter book name"
        value={name}/><br></br>
      {/* </div> */}
      <Button color="primary" variant="ghost" type="submit" size="sm" onClick={getSearchedBookdetails}>
        Search
      </Button><br></br>
      {searchedBookName && (
        <ul>
          <li>Author Name: {searchedBookName.author_name}</li>
          <li>Language: {searchedBookName.language}</li>
          <li>Publisher: {searchedBookName.publisher}</li>
          <li>First published year: {searchedBookName.first_publish_year}</li>
        </ul>
      )}
      <br></br>
      </div>
      

      {/* ***********Get Searched Author detail */}
      <div className="searchedAuthor">
      <h1>Get Searched Author detail:</h1>
      {/* <div className="flex w-full flex-wrap md:flex-nowrap gap-4"> */}
      <Input size="sm" className="custom-width"
        onChange={authorChange}
        type="text"
        placeholder="Enter author name"
        value={searchAuthor}
      /><br></br>
      {/* </div> */}
      <Button color="primary" variant="ghost" type="submit" size="sm" onClick={getSearchedAuthordetails}>
        Search
      </Button><br></br>
      {searchedAuthorName && (
        <ul>
          <li>Writer Name: {searchedAuthorName.writerName}</li>
          <li>Birth Date: {searchedAuthorName.birth_date}</li>
          <li>Death Date: {searchedAuthorName.death_date}</li>
          <li>Top Work: {searchedAuthorName.top_work}</li>
        </ul>
      )}
      <br></br>
      </div>
      

      {/*  ***************************GET ALL AUTHOR******************* */}
      <div className="allAuthors flex">        
      <h1>Get All Authors</h1><Spacer x={4} />
      <Button color="primary" variant="ghost" size="sm"  onClick={() => getAuthorDetails()}> Search </Button>  
      </div>
      <div> 
        {authorName.map((val) => {
          return <li>{val}</li>;
        })}
      </div>
    </div>
  );
}

export default App;

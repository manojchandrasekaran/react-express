const getBook = (async (req,res)=>{   
    var fromServer = await fetch('https://openlibrary.org/people/mekBot/books/want-to-read.json')
    .then(function(response) {
      return response.json()
    })
    .then(function(data){                
        const allBooks = data.reading_log_entries.map((val) => {
            // console.log("vall=", val.work.title);
            // console.log("valueee=", val);
            // if(val.work.title == "Strange tools"){
            //     console.log("Strange tools found");
            //     console.log("Author name=",val.work.author_names[0]);
            //     console.log("Published year=",val.work.first_publish_year);
            // }
            return val.work.title;
        })
        console.log("res==",allBooks);
        res.send({Books: allBooks});
        // res.send(allBooks);    
    })
});
const getSearchedBook = (async (req,res)=>{    
    // var body = req.body;
    // console.log("body=",body);
    var bookName = req.params.id;
    console.log("bookName=",bookName);
    var url = `https://openlibrary.org/search.json?q=${bookName}`;
    console.log("URLLLL=",url);
    var fromServer = await fetch(url)
    .then(function(response) {
      return response.json()
    })
    .then(function(data){
        
        // console.log("Testingggg",data);  
        var author_name = data?.docs[0]?.author_name[0];
        var language = data.docs[0]?.language[0];
        var publisher = data.docs[0]?.publisher[0];
        var first_publish_year = data.docs[0]?.first_publish_year;
        
        console.log("Autour name=",data.docs[0]?.author_name);   
        console.log("language=",data.docs[0]?.language[0]);   
        console.log("Publisher=",data.docs[0]?.publisher[0]);   
        console.log("Published year=",data.docs[0]?.publish_year[0]);   
        // console.log("data=",data);   
        res.send({author_name: author_name, language:language, publisher:publisher, first_publish_year:first_publish_year});
    })
});


const getSearchedAuthor = (async (req,res)=>{    
    // var body = req.body;
    // console.log("body=",body);
    var authorName = req.params.id;
    console.log("authorName=",authorName);
    var url = `https://openlibrary.org/search/authors.json?q=${authorName}`;
    console.log("URLLLL=",url);
    var fromServer = await fetch(url)
    .then(function(response) {
      return response.json()
    })
    .then(function(data){
        
        
        // console.log("Author data=",typeof(data));
        // console.log("my data=",data);
        // res.status(200).send(body);

        var writerName= data?.docs[0]?.name;
        var birth_date= data?.docs[0]?.birth_date;
        var death_date= data?.docs[0]?.death_date;
        var top_work= data?.docs[0]?.top_work;

        console.log("Name=",data?.docs[0]?.name);   
        console.log("birth_date=",data?.docs[0]?.birth_date);   
        console.log("death_date=",data?.docs[0]?.death_date);   
        // console.log("Published year=",data.docs[0].publish_year[0]);   
        // console.log("data=",data);   
        // res.send({Author: data});
        res.send({writerName: writerName, birth_date:birth_date, death_date:death_date, top_work:top_work});
    })
});

const getAuthor = (async (req,res)=>{
    var fromServer = await fetch(`https://openlibrary.org/people/mekBot/books/want-to-read.json`)
    .then(function(response) {
      return response.json()
    })
    // .then((data) => res.send(data.reading_log_entries));
    .then(function(data){
        
        console.log("Testtt");
        // var arr=[];
        // var key;
        // var value;
        const result = data.reading_log_entries.map((val) => {
            console.log("vall=", val.work.author_names[0]);
            return val.work.author_names[0];
        })
        console.log("res==",result);
        res.send({Authors: result});        
    })
});

export default getBook;
export {getAuthor,getSearchedBook,getSearchedAuthor};
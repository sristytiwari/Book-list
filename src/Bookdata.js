 import React, { Component } from 'react'
import BookList from './BookList'
 
 export default class Bookdata extends Component {
     constructor(props){
         super(props)
         this.state={
             bookData : [
                {   count:0,
                    id:1,
                    img:require('./img/713rQq1bF6L._AC_UL480_SR318,480_.jpg'),
                    title:'Think and grow rich',
                    author:'Napoleon Hill',
                    info:"Think and Grow Rich. Think and Grow Rich was written by Napoleon Hill in 1937 and promoted as a personal development and self-improvement book. He claimed to be inspired by a suggestion from business magnate and later-philanthropist Andrew Carnegie. It remains the biggest seller of Napoleon Hill's books."
                },
                {   
                    count:0,
                    id:2,
                    img:require('./img/9780735219090.jpg'),
                    title:'Where the crawdads sing',
                    author:'Delia Owens',
                    info:"The story follows two timelines that slowly intertwine. The first timeline describes the life and adventures of a young girl named Kya as she grows up isolated in the marsh of North Carolina from 1952–1969. and Grow Rich."
                },
                {   
                    count:0,
                    id:3,
                    img:require('./img/9781250209764.jpg'),
                    title:'American Dirt',
                    author:'Jeanine Cummins',
                    info:"American Dirt is a 2020 novel by American author Jeanine Cummins, about the ordeal of a Mexican woman who had to leave behind her life and escape as an undocumented immigrant to the United States with her son."
                }, {
                    count:0,
                    id:4,
                    img:require('./img/images.jpeg'),
                    title:'The water Dancer',
                    author:'Ta-Nehi Goats',
                    info:"It is a surrealist story set in the pre–Civil War South, concerning a superhuman protagonist named Hiram Walker who possesses photographic memory, but who cannot remember his mother, and is able to transport people over long distances."
                },{  
                    count:0,
                    id:5,
                    img:require('./img/Jacket.jpeg'),
                    title:'The Nest',
                    author:'Cynthia swenegy',
                    info:"It is a surrealist story set in the pre–Civil War South, concerning a superhuman protagonist named Hiram Walker who possesses photographic memory, but who cannot remember his mother, and is able to transport people over long distances."
                },
                {  
                     count:0,
                    id:6,
                    img:require('./img/the_german_midwife.jpg'),
                    title:'The German Midwife',
                    author:'Mandy Robotham',
                    info:"It is a surrealist story set in the pre–Civil War South, concerning a superhuman protagonist named Hiram Walker who possesses photographic memory, but who cannot remember his mother, and is able to transport people over long distances."
                }
            
            ]

         }
     }
     deleteBook=(id)=>{
        let bookIndex = null;
         this.bookData.forEach((element,index) => {
             
             if(element.id === id){
                 bookIndex= index;

             }
             
         });
         if(bookIndex !== null){
             let bookData = this.state.bookData
             bookData.splice(bookIndex, 1)
             this.setState({
                 bookData
             })
         }
     }
     render() {
         return (
             <div>
                 {this.state.bookData.map((item,key)=>
                 <BookList item = {item} key = {key} deleteBook = {this.deleteBook}/>
                 )}
                 </div>
         )
                 }
                }
 
  
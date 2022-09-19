import React from 'react'
import ReactDom from 'react-dom'

import "./index.css"
function BookList() {
  return (
    <section className="booklist">
      <Book/>
      <Book/>
      <Book/>
      <Book/>
      <Book/>
      <Book/>
      
    </section>
  )
}

const Book=(props)=> {
return (
<article className="book">
  <Image></Image>
  <Title></Title>
  <Author></Author>
</article>
);
}
const Image=()=>{
  return <img src="https://m.media-amazon.com/images/I/81pXwpRhK0L._AC_SR180,120_QL70_.jpg" alt=""/>
}

// const Greeting=()=>{
//   return React.createElement("article", {}, "hello world")
// }
const Title=()=>{
  return (
    <h1>The Last Lieutenant</h1>
  )
}
const Author=()=><h4>The Todd Ingram Series Book 1</h4>
ReactDom.render(<BookList/>,document.getElementById('root'));
// import  ListOfPost from './components/ListOfPost';

import  ListOfPost  from "./components/ListOfPost"


// const Postpage = () => {

  export default async function PostPage(params: any):Promise<any> {
    return (
      <>
        <h2>Noticias del Periódico</h2>
        <ListOfPost />
      </>
    )
  }
  
  


// export default Postpage

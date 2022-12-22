// import  ListOfPost from './components/ListOfPost';

import  ListOfPost  from "./components/ListOfPost"


// const Postpage = () => {

  export default async function PostPage(params: any):Promise<any> {
    return (
      <section>
        <ListOfPost key={1} />
      </section>
    )
  }
  
  


// export default Postpage

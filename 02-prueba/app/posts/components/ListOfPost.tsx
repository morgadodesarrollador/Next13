import { IPost } from '../interfaces/IPosts';
import PostItem from './PostItem';



// const getPosts = async (): Promise<IPost[]> => {
//   const dataPosts = await fetch('https://jsonplaceholder.typicode.com/posts',
//       { cache: 'no-store' });
//   return dataPosts.json();;
// }
const getPosts = () => {
  return  fetch('https://jsonplaceholder.typicode.com/posts',{ cache: 'no-store' })
    .then(res => res.json());
}

export async function ListOfPost(){

  return getPosts()
  .then( posts => (
  // return (
    <> {
      posts.slice(0,5).map( (post: IPost) => { //paginador
        return (
          <PostItem key={post.id} post={post} />
        )   
      })
      }
    </>
  ))
}

// export default ListOfPost

import { FC } from 'react';
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
interface Props {
  
}
const ListOfPost = async () => {
  const posts = await getPosts();
  return (
    <section>
      {
        posts.slice(0,17).map( (post: IPost) => ( //paginador
              <PostItem key={post.id} post={post} />
        ))
      }
    </section>   
)}

export default ListOfPost

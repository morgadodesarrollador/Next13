import PostItem from './components/PostItem';
import { IPost } from './interfaces/IPosts';

const getPosts = async (): Promise<IPost[]> => {
    const dataPosts = await fetch('https://jsonplaceholder.typicode.com/posts',{ 
      next: {
            revalidate: 10
          }
        });
    return dataPosts.json();;
}
const Postpage = async() => {
    const posts = await getPosts();
    console.log (posts);

  return (
    <>
        {
            posts.slice(10,20).map ( (post: IPost) => { //paginador
              return (
                <PostItem key={post.id} post={post} />
              )   
            })
        }
    </>
    
  )
}

export default Postpage

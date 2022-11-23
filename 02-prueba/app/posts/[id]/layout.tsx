import Link from 'next/link';
import PostId from '../components/PostId';
import { IPost } from '../interfaces/IPosts';
import { Children } from 'react';

const getPost = async( postId: number): Promise<IPost> => {
    const post = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`, {
        next: { revalidate: 60 }
    });

    return await post.json()
}

interface Props {
    children: React.ReactNode,
    params: {
        id: string
    }
}

const PostIdPage = async ({children, params}: Props ) => {
    const post = await getPost(+params.id);
   const  { id } = params;
  return (
    <>
        <PostId key={ id } post = {post} />
        <Link href={`/posts/${post.id}/comments`}> Ver comentarios ...</Link>
        <hr />
        { children }
    </>
  )
}





export default PostIdPage

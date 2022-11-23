import { IComment } from '../../interfaces/IPosts';

const getPostComments = async( postId: number): Promise<IComment[]> => {
    const comments = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`, {
        next: { revalidate: 60 }
    });

    return await comments.json()
}

interface Props {
    params: {
        id: string
    }
}
const CommentsPage = async ({params}: Props) => {
    const  { id } = params;

   const comments = await getPostComments(+params.id);
   
   console.log(comments);
  return (
        <ul>
            { 
                comments.map( (comment: IComment) => (
                    <li key={comment.id}>
                        <h2>{ comment.name }</h2>
                        <p>{comment.body}</p>
                    </li>
                ))
            }
        </ul>
    )
}






export default CommentsPage
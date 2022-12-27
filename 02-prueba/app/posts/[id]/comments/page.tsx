import { IComment } from '../../interfaces/IPosts';
import ListOfComments from './components/ListOfComments';

const getPostComments = async( postId: number): Promise<IComment[]> => {
    await new Promise (resolve => setTimeout(resolve, 2000));

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
   
   return <ListOfComments key={id} id={ id }   />
}






export default CommentsPage
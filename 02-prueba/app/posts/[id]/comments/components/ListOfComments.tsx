import { FC } from 'react';
import { IComment } from '../../../interfaces/IPosts';
import CommentItem from './CommentItem';

const getPostComments = async( postId: number): Promise<IComment[]> => {

    const comments = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`, {
        next: { revalidate: 60 }
    });
    return await comments.json()
}
interface Props {
    id: string;
}
const ListOfComments = async ( {id}: Props) => {
    const comments = await getPostComments(+id);
    return (
        <ul style= {{background:'#f0000',  fontSize: '10px' }}>
            { 
                comments.map( (comment: IComment) => (
                    <CommentItem 
                        key={ comment.id } comment={comment} />
                ))
            }
        </ul>
    )
}

export default ListOfComments;
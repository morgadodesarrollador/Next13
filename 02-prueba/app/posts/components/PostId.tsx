import Link from 'next/link';
import { FC } from 'react';
import { IPost } from '../interfaces/IPosts';

interface Props {
    post: IPost
}
const PostId:FC<Props> = ( { post } : Props) => {
  return (
    <div className='card'>
        <div className='card-body'>
            <h5 className='card-title'>{post.title}</h5>
            <p className='card-text'>{ post.body}</p>
            <a href="#" className='btn btn-primary'>{ post.id}</a>
            
        </div>

    </div>
  )
}

export default PostId

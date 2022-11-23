import { IPost } from '../interfaces/IPosts';
import Link from 'next/link';
import LikeButton from './LikeButton';
import './../../styles/globals.css'
import { FC } from 'react';

interface Props {
    post: IPost
}
const PostItem:FC<Props> = ( { post }: Props) => {
    
  return (
    <div  className='row'>
        <div className='col-1' >
            <Link href={`/posts/${post.id}`}>
                { post.id}
            </Link>
        </div>
        <div className='col-9'>
            { post.title}
        </div>
        <LikeButton id={ post.id } />
    </div>
  )
}

export default PostItem

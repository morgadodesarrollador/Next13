import React, { FC } from 'react'
import { IComment } from '../../../interfaces/IPosts';

interface Props {
    comment: IComment;
}
const CommentItem:FC<Props> = ( { comment }: Props) => {
  return (
            <li key={comment.id}>
                <h5>{ comment.name }</h5>
                <small>{comment.body}</small>
            </li>
  )
}

export default CommentItem

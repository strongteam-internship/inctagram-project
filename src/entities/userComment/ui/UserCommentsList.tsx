import React from 'react'

import { CommentType } from '@/entities/userComment/model/types'
import { UserComment } from '@/entities/userComment/ui/UserComment'

export const UserCommentsList = ({ comments }: { comments: CommentType[] }) => {
  console.log('CommentsList', comments)

  return (
    <div>
      {comments &&
        comments.map((c: CommentType) => (
          <div key={c.id}>
            <UserComment commentData={c} />
          </div>
        ))}
    </div>
  )
}

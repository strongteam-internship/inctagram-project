import { CommentType } from '@/entities/userComment/model/types'
import { Avatar } from '@/shared/avatar/avatar'
import dayjs from '@/shared/lib/dayjs'
import Link from 'next/link'

import styles from './UserComment.module.scss'

export const UserComment = ({ commentData }: { commentData: CommentType }) => {
  console.log('UserComment', commentData)

  return (
    <>
      <div className={styles.userCommentContainer}>
        {/*<Image src={commentData.from.avatars[0].src}>*/}
        {/* Посмотреть что приходит с сервера при добавлении комментария*/}
        <Link className={styles.userLogo} href={`/public/users/${commentData.from.id}`}>
          <Avatar
            alt={'testAlt'}
            size={'small'}
            src={commentData.from.avatars.length > 0 && commentData.from.avatars[0].url}
          />
        </Link>
        <div className={styles.userNameAvatarContentContainer}>
          <div>
            <Link
              className={styles.commentAuthorUserName}
              href={`/public/users/${commentData.from.id}`}
            >
              {commentData.from.username}
            </Link>
            <span className={styles.commentContent}>{commentData.content}</span>
          </div>
          <div className={styles.commentDateCreated}>{dayjs(commentData.createdAt).fromNow()}</div>

          {commentData.answerCount > 0 && (
            <div className={styles.separatorAnswerCountContainer}>
              <hr className={styles.lineSeparator} />
              <button
                className={styles.viewCommentAnswersBtn}
                type={'button'}
              >{`View Answers (${commentData.answerCount})`}</button>
            </div>
          )}
        </div>
      </div>
    </>
  )
}

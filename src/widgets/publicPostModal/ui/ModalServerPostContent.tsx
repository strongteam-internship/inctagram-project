'use client'

import { Post } from '@/entities/post/model/types'
import { useGetCommentsByPostIdQuery } from '@/entities/userComment/api/commentsApi'
import { UserCommentsList } from '@/entities/userComment/ui/UserCommentsList'
import { Avatar } from '@/shared/avatar/avatar'
import dayjs from '@/shared/lib/dayjs'
import { Modal } from '@/shared/modal'
import { Slider } from '@/shared/slider/Slider'
import Link from 'next/link'

import styles from './modalServerPostContent.module.scss'

type ModalPostContentPropsType = {
  openModal: boolean
  postData: Post
  setOpenModal: (open: boolean) => void
}

export default function ModalServerPostContent({
  openModal,
  postData,
  setOpenModal,
}: ModalPostContentPropsType) {
  console.log('ModalServerPostContent', postData)

  const { data, isLoading } = useGetCommentsByPostIdQuery({ postId: postData.id })

  console.log('commentsData', data)

  return (
    <Modal open={openModal} setOpen={setOpenModal}>
      <div className={styles.mainContainer}>
        <div className={styles.slider}>
          <Slider navigation pagination sliderItems={postData.images} />
        </div>
        <div className={styles.postContentSidebar}>
          <div>
            <Link className={styles.avatarNameContainer} href={`/public/users/${postData.ownerId}`}>
              <Avatar alt={'test'} size={'small'} src={postData.avatarOwner} />
              <div>{postData.userName}</div>
            </Link>
            <div className={styles.commentsContainer}>
              <div className={styles.postDescriptionContainer}>
                <Avatar alt={'test'} size={'small'} src={postData.avatarOwner} />
                <div className={styles.postDescription}>
                  <div>
                    <span className={styles.userName}>{postData.userName}</span>
                    <span className={styles.description}>{postData.description}</span>
                  </div>
                  <div className={styles.date}>{dayjs(postData.createdAt).fromNow()}</div>
                </div>
              </div>
              <div>
                {data?.items && data.items.length > 0 && <UserCommentsList comments={data.items} />}
              </div>
            </div>
          </div>
          <div className={styles.postFooterContainer}>
            <div style={{ display: 'flex', gap: '12px' }}>
              <div>
                Photos{' '}
                {postData.avatarWhoLikes.map(el => (
                  <span key={el}>{el}</span>
                ))}
              </div>
              <div>
                <span>{postData.likesCount}</span>{' '}
                <span style={{ fontWeight: 'bold' }}>{`"Like"`}</span>
              </div>
            </div>
            <div className={styles.date}>{dayjs(postData.createdAt).format('MMMM D, YYYY')}</div>
          </div>
        </div>
      </div>
    </Modal>
  )
}

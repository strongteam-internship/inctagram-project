'use client'
import { useGetPublicProfileByIdQuery } from "@/entities/user/api/userApi";
import { Avatar } from "@/shared/avatar/avatar";
import { Typography } from "@/shared/typography/typography";
import { PublicUserPostsList } from "@/widgets/publicUserPostsList/PublicUserPostsList";
import { useParams } from "next/navigation";

import s from './PublicUserPage.module.scss'

export function PublicUserPage() {
  const {user} = useParams()
  const { data, isSuccess } = useGetPublicProfileByIdQuery(user as string)

  return (<div className={s.container}>
      { isSuccess && <div className={s.userInfo}>
        <Avatar alt={"User Avatar"} size={'large'} src={data.avatars[0].url}/>
        <div>
          <Typography variant={'H2'}>{data.userName}</Typography>
          <div className={s.userMetadata}>
            <div className={s.metaDataItem}>
              <Typography variant={'bold_text_14'}>{data.userMetadata.following}</Typography>
              <Typography variant={'regular_text_14'}>Following</Typography>
            </div>
            <div className={s.metaDataItem}>
              <Typography variant={'bold_text_14'}>{data.userMetadata.followers}</Typography>
              <Typography variant={'regular_text_14'}>Followers</Typography>
            </div>
            <div className={s.metaDataItem}>
              <Typography variant={'bold_text_14'}>{data.userMetadata.publications}</Typography>
              <Typography variant={'regular_text_14'}>Publications</Typography>
            </div>
          </div>
          <Typography variant={'regular_text_14'}>{data.aboutMe?data.aboutMe:'User dont tell about your self'}</Typography>
        </div>
      </div>
      }
      <PublicUserPostsList id={user as string} />
  </div>
)
}
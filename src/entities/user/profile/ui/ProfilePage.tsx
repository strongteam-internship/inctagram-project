'use client'
import { useGetProfileQuery } from '@/entities/user/api/userApi'
import { Typography } from '@/shared/typography/typography'

export function ProfilePage() {
  const { data } = useGetProfileQuery()

  console.log(data)

  return (
    <>
      <Typography variant={'H3'}>Hello this is Profile Page its not done yet</Typography>
    </>
  )
}

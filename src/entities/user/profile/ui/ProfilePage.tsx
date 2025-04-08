'use client'
import { useGetProfileQuery } from '@/entities/user/api/userApi'
import { Typography } from '@/shared/typography/typography'
import { useParams } from 'next/navigation'

export function ProfilePage() {
  const params = useParams()
  const { data } = useGetProfileQuery()

  return (
    <>
      <Typography variant={'H3'}>Hello this is Profile Page its not done yet</Typography>
    </>
  )
}

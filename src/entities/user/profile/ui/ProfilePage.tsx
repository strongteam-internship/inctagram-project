// 'use client'
import React from 'react'

import { useGetProfileQuery } from '@/entities/user/api/userApi'
import { Modal } from '@/shared/modal'
import { Slider } from '@/shared/slider/Slider'
import { Typography } from '@/shared/typography/typography'
import { Navigation, Pagination } from 'swiper/modules'

import './styles.scss'

export function ProfilePage() {
  const { data } = useGetProfileQuery()

  //   component data
  const imgs = [
    {
      url: 'https://plus.unsplash.com/premium_photo-1676923902105-19d5c90d585c?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      url: 'https://images.unsplash.com/photo-1741006727915-d25215fdaf04?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      url: 'https://plus.unsplash.com/premium_photo-1710519991831-505131675c1a?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
  ]
  const [openModal, setOpenModal] = React.useState(true)

  return (
    <>
      <Typography variant={'H3'}>Hello this is Profile Page its not done yet</Typography>
      <button type={'button'}>Open modal</button>
      <Modal className={'test111'} open={openModal} setOpen={setOpenModal}>
        <div style={{ display: 'flex', maxHeight: '564px' }}>
          <div>
            <Slider modules={[Navigation, Pagination]} navigation pagination sliderItems={imgs} />
          </div>
          <div
            style={{
              color: 'white',
              display: 'flex',
              flexDirection: 'column',
              padding: '0 24px',
              width: '480px',
            }}
          >
            <div style={{ display: 'flex', gap: '12px', padding: '12px 0' }}>
              <div>User photo</div>
              <div>User name</div>
            </div>
            <hr
              style={{
                backgroundColor: '#ccc',
                border: 'none',
                height: '1px',
                marginBottom: '20px',
              }}
            />
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '36px',
                overflowY: 'scroll',
                scrollbarWidth: 'none',
              }}
            >
              <UserComment />
              <UserComment />
              <UserComment />
              <UserComment />
              <UserComment />
              <UserComment />
            </div>
            <hr
              style={{
                backgroundColor: '#ccc',
                border: 'none',
                height: '1px',
                margin: '20px 0 12px 0',
              }}
            />
            <UsersLikes />
          </div>
        </div>
      </Modal>
    </>
  )
}

const UserComment = () => {
  return (
    <>
      <div style={{ display: 'flex', gap: '12px' }}>
        <div>Photo</div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <div>
            <span style={{ fontWeight: 'bold', marginRight: '5px' }}>User Name</span>
            <span>
              URLProfiele Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua.
            </span>
          </div>
          <CurrentDate />
        </div>
      </div>
    </>
  )
}

const UsersLikes = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
      <div style={{ display: 'flex', gap: '12px' }}>
        <div>Photos</div>
        <div>
          2 243 <span style={{ fontWeight: 'bold' }}>Like</span>
        </div>
      </div>
      <CurrentDate />
    </div>
  )
}

const CurrentDate = () => {
  return <div className={'date'}>date</div>
}

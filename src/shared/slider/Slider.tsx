'use client'
import * as React from 'react'

import Image from 'next/image'
import { Swiper, SwiperProps, SwiperSlide } from 'swiper/react'

import './Slider.scss'
// eslint-disable-next-line import/extensions
import 'swiper/css'
// eslint-disable-next-line import/extensions
import 'swiper/css/navigation'
// eslint-disable-next-line import/extensions
import 'swiper/css/pagination'

type postImagesType = {
  createdAt?: string
  fileSize?: number
  height?: number
  uploadId?: string
  url: string
  width?: number
}
type SliderProps = {
  sliderItems: postImagesType[]
  style?: React.CSSProperties
} & SwiperProps
export const Slider = ({ sliderItems, style, ...swiperProps }: SliderProps): React.ReactNode => {
  const defaultStyle = {
    display: 'flex',
    height: '562px',
    width: '490px',
  }

  return (
    <div style={{ ...defaultStyle, ...style }}>
      <Swiper {...swiperProps}>
        {Array.isArray(sliderItems) &&
          sliderItems?.map((item, index) => {
            return (
              <SwiperSlide key={index}>
                <div style={{ height: '100%', position: 'relative', width: '100%' }}>
                  <Image
                    alt={`${item}_description`}
                    fill
                    src={item.url}
                    style={{ objectFit: 'cover' }}
                  />
                </div>
              </SwiperSlide>
            )
          })}
      </Swiper>
    </div>
  )
}

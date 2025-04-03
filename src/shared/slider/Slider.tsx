'use client'
import * as React from 'react'

import { Swiper, SwiperProps, SwiperSlide } from 'swiper/react'

import './Slider.scss'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import Image from 'next/image'

type postImagesType = {
  url: string
  width?: number
  height?: number
  fileSize?: number
  createdAt?: string
  uploadId?: string
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
                <div style={{ position: 'relative', width: '100%', height: '100%' }}>
                  <Image
                    fill
                    alt={`${item}_description`}
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

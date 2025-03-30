import * as React from 'react'

import { SwiperProps, Swiper, SwiperSlide } from 'swiper/react'

import './Slider.scss'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

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
                <img
                  alt={`${item}_description`}
                  src={item.url}
                  style={{ height: '100%', objectFit: 'cover', width: '100%' }}
                />
              </SwiperSlide>
            )
          })}
      </Swiper>
    </div>
  )
}

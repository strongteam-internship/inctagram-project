import { Ref, SVGProps, forwardRef, memo } from 'react'

const SvgMic = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    fill={'none'}
    height={24}
    ref={ref}
    width={24}
    xmlns={'http://www.w3.org/2000/svg'}
    {...props}
  >
    <defs>
      <clipPath id={'mic_svg__a'}>
        <rect
          fill={'#fff'}
          fillOpacity={0}
          height={23}
          rx={0}
          transform={'translate(.5 .5)'}
          width={23}
        />
      </clipPath>
    </defs>
    <rect fill={'none'} height={23} rx={0} transform={'translate(.5 .5)'} width={23} />
    <g clipPath={'url(#mic_svg__a)'} fill={'#000'}>
      <path
        d={
          'M12 15c1.06 0 2.07-.43 2.82-1.18A4 4 0 0 0 16 11V6c0-1.07-.43-2.08-1.18-2.83A3.98 3.98 0 0 0 12 2c-1.07 0-2.08.42-2.83 1.17S8 4.93 8 6v5c0 1.06.42 2.07 1.17 2.82S10.93 15 12 15'
        }
      />
      <path
        d={
          'M19 11a1 1 0 0 0-.3-.71.98.98 0 0 0-.7-.29.99.99 0 0 0-1 1c0 1.32-.53 2.59-1.47 3.53S13.32 16 12 16a5.003 5.003 0 0 1-5-5 1 1 0 0 0-.3-.71A.98.98 0 0 0 6 10a.99.99 0 0 0-1 1c0 1.68.6 3.3 1.71 4.57 1.1 1.27 2.62 2.1 4.29 2.35V20H8.89a.86.86 0 0 0-.63.26.86.86 0 0 0-.26.63v.22c0 .23.09.46.26.62.16.17.39.27.63.27h6.22c.23 0 .46-.1.62-.27.17-.16.27-.39.27-.62v-.22c0-.24-.1-.47-.27-.63a.85.85 0 0 0-.62-.26H13v-2.08a7.05 7.05 0 0 0 4.28-2.35A7 7 0 0 0 19 11'
        }
      />
    </g>
  </svg>
)
const ForwardRef = forwardRef(SvgMic)
const Memo = memo(ForwardRef)

export default Memo

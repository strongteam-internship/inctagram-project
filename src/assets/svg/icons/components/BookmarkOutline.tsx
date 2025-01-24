import { Ref, SVGProps, forwardRef, memo } from 'react'
const SvgBookmarkOutline = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    fill={'none'}
    height={24}
    ref={ref}
    width={24}
    xmlns={'http://www.w3.org/2000/svg'}
    {...props}
  >
    <defs>
      <clipPath id={'bookmark-outline_svg__a'}>
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
    <g clipPath={'url(#bookmark-outline_svg__a)'}>
      <path
        d={
          'M6.09 21.06a1 1 0 0 1-.71-.3.98.98 0 0 1-.29-.7L4.94 5.39c-.02-.29.03-.59.13-.87.11-.28.26-.53.47-.75.2-.22.44-.4.71-.52.27-.13.57-.19.87-.21L16.7 3c.3 0 .6.06.87.18s.52.29.73.51a2.25 2.25 0 0 1 .64 1.62l.14 14.65c0 .18-.05.35-.13.51-.09.15-.21.28-.36.37-.16.08-.33.13-.5.13-.18 0-.35-.05-.5-.13l-5.7-3.16-5.29 3.23c-.16.08-.34.13-.51.15m5.76-5.55c.17 0 .34.04.5.12l4.71 2.61-.12-12.95c0-.2-.13-.34-.21-.34l-9.6.09c-.08 0-.19.13-.19.34l.12 12.9 4.28-2.63c.15-.09.33-.14.51-.14'
        }
        fill={'currentColor'}
      />
    </g>
  </svg>
)
const ForwardRef = forwardRef(SvgBookmarkOutline)
const Memo = memo(ForwardRef)

export default Memo

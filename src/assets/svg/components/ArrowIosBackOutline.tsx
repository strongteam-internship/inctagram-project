import type { SVGProps } from 'react'
import { Ref, forwardRef, memo } from 'react'
const SvgArrowIosBackOutline = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" ref={ref} {...props}>
    <defs>
      <clipPath id="arrow-ios-back-outline_svg__a">
        <rect
          width={23}
          height={23}
          fill="#fff"
          fillOpacity={0}
          rx={0}
          transform="translate(.5 .5)"
        />
      </clipPath>
    </defs>
    <rect width={23} height={23} fill="none" rx={0} transform="translate(.5 .5)" />
    <g clipPath="url(#arrow-ios-back-outline_svg__a)">
      <path
        fill="#000"
        d="M13.83 19c-.15 0-.3-.04-.44-.1-.13-.07-.25-.16-.34-.28l-4.84-5.99c-.14-.18-.22-.41-.22-.64s.08-.46.22-.63l5.01-6c.16-.21.41-.34.67-.36.27-.03.53.06.74.23.2.16.33.41.35.67.03.27-.06.53-.22.74L10.29 12l4.32 5.36c.12.14.19.32.22.51.02.19-.01.38-.09.55-.08.18-.21.32-.37.42-.17.1-.35.16-.54.16"
      />
    </g>
  </svg>
)
const ForwardRef = forwardRef(SvgArrowIosBackOutline)
const Memo = memo(ForwardRef)
export default Memo

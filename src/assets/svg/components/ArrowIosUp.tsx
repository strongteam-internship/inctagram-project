import type { SVGProps } from 'react'
import { Ref, forwardRef, memo } from 'react'
const SvgArrowIosUp = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" ref={ref} {...props}>
    <defs>
      <clipPath id="arrow-ios-up_svg__a">
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
    <g clipPath="url(#arrow-ios-up_svg__a)">
      <path
        fill="#000"
        d="M19.54 14.51c0 .23-.08.46-.23.64-.09.1-.19.18-.31.25-.11.06-.24.09-.37.11-.13.01-.26-.01-.39-.04a1 1 0 0 1-.34-.19l-5.36-4.48-5.37 4.32c-.11.08-.22.14-.35.18s-.26.05-.39.04c-.13-.02-.26-.06-.37-.12a.9.9 0 0 1-.3-.25c-.09-.1-.16-.23-.21-.36-.04-.13-.05-.27-.04-.4.02-.14.06-.27.13-.39.06-.12.16-.23.27-.31l6-4.83c.18-.15.4-.23.63-.23s.46.08.64.23l6 5c.12.1.21.23.28.37.06.15.09.3.08.46"
      />
    </g>
  </svg>
)
const ForwardRef = forwardRef(SvgArrowIosUp)
const Memo = memo(ForwardRef)
export default Memo

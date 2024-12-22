import type { SVGProps } from 'react'
import { Ref, forwardRef, memo } from 'react'
const SvgArrowIosDownOutline = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" ref={ref} {...props}>
    <defs>
      <clipPath id="arrow-ios-down-outline_svg__a">
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
    <g clipPath="url(#arrow-ios-down-outline_svg__a)">
      <path
        fill="#000"
        d="M5.51 9.45c0-.23.08-.46.23-.64a1 1 0 0 1 .68-.35c.13-.02.26 0 .39.04.12.04.24.1.34.18l5.36 4.48 5.37-4.32c.1-.08.22-.14.35-.18q.18-.06.39-.03c.13.01.25.05.37.11.11.07.22.15.3.25.09.11.16.23.2.36s.06.27.04.41a.93.93 0 0 1-.39.69l-6 4.83c-.18.15-.4.23-.64.23-.23 0-.45-.08-.63-.23l-6-5a.93.93 0 0 1-.28-.37c-.06-.14-.09-.3-.08-.46"
      />
    </g>
  </svg>
)
const ForwardRef = forwardRef(SvgArrowIosDownOutline)
const Memo = memo(ForwardRef)
export default Memo

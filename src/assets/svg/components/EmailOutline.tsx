import type { SVGProps } from 'react'
import { Ref, forwardRef, memo } from 'react'
const SvgEmailOutline = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" ref={ref} {...props}>
    <defs>
      <clipPath id="email-outline_svg__a">
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
    <g clipPath="url(#email-outline_svg__a)">
      <path
        fill="#000"
        d="M19 4H5c-.8 0-1.56.31-2.13.87C2.31 5.44 2 6.2 2 7v10c0 .79.31 1.55.87 2.12.57.56 1.33.88 2.13.88h14c.79 0 1.55-.32 2.12-.88.56-.57.88-1.33.88-2.12V7c0-.8-.32-1.56-.88-2.13C20.55 4.31 19.79 4 19 4m-.67 2L12 10.75 5.67 6zM19 18H5a1 1 0 0 1-.71-.3A.98.98 0 0 1 4 17V7.25l7.4 5.55c.17.12.38.2.6.2.21 0 .42-.08.6-.2L20 7.25V17c0 .26-.11.51-.3.7s-.44.3-.7.3"
      />
    </g>
  </svg>
)
const ForwardRef = forwardRef(SvgEmailOutline)
const Memo = memo(ForwardRef)
export default Memo

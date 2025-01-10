import type { SVGProps } from 'react'
import { Ref, forwardRef, memo } from 'react'
const SvgPlusCircle = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" ref={ref} {...props}>
    <defs>
      <clipPath id="plus-circle_svg__a">
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
    <g clipPath="url(#plus-circle_svg__a)">
      <path
        fill="#000"
        d="M12 2c-1.98 0-3.92.58-5.56 1.68a9.9 9.9 0 0 0-3.68 4.49 9.95 9.95 0 0 0-.57 5.78c.38 1.94 1.34 3.72 2.73 5.12 1.4 1.39 3.18 2.35 5.12 2.73 1.94.39 3.95.19 5.78-.57a9.9 9.9 0 0 0 4.49-3.68A10 10 0 0 0 22 12c0-1.32-.26-2.62-.77-3.83-.5-1.22-1.24-2.32-2.16-3.25-.93-.92-2.03-1.66-3.25-2.16A9.8 9.8 0 0 0 12 2m3 11h-2v2c0 .26-.11.51-.3.7s-.44.3-.7.3a1 1 0 0 1-.71-.3.98.98 0 0 1-.29-.7v-2H9a1 1 0 0 1-.71-.3A.98.98 0 0 1 8 12a.99.99 0 0 1 1-1h2V9a.99.99 0 0 1 1-1c.26 0 .51.1.7.29A1 1 0 0 1 13 9v2h2c.26 0 .51.1.7.29a1 1 0 0 1 .3.71c0 .26-.11.51-.3.7s-.44.3-.7.3"
      />
    </g>
  </svg>
)
const ForwardRef = forwardRef(SvgPlusCircle)
const Memo = memo(ForwardRef)
export default Memo

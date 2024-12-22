import type { SVGProps } from 'react'
import { Ref, forwardRef, memo } from 'react'
const SvgPerson = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" ref={ref} {...props}>
    <defs>
      <clipPath id="person_svg__a">
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
    <g fill="#000" clipPath="url(#person_svg__a)">
      <path d="M12 11c.79 0 1.56-.24 2.22-.68s1.17-1.06 1.47-1.79c.3-.74.38-1.54.23-2.32a4.05 4.05 0 0 0-3.14-3.14C12 2.92 11.2 3 10.46 3.3c-.73.3-1.35.81-1.79 1.47S8 6.2 8 7c0 1.06.42 2.07 1.17 2.82S10.93 11 12 11M18 21c.26 0 .51-.11.7-.3s.3-.44.3-.7c0-1.86-.74-3.64-2.06-4.95A6.95 6.95 0 0 0 12 13c-1.86 0-3.64.73-4.95 2.05A6.96 6.96 0 0 0 5 20c0 .26.1.51.29.7A1 1 0 0 0 6 21z" />
    </g>
  </svg>
)
const ForwardRef = forwardRef(SvgPerson)
const Memo = memo(ForwardRef)
export default Memo

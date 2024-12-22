import type { SVGProps } from 'react'
import { Ref, forwardRef, memo } from 'react'
const SvgLogOutOutline = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" ref={ref} {...props}>
    <defs>
      <clipPath id="log-out-outline_svg__a">
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
    <g fill="#000" clipPath="url(#log-out-outline_svg__a)">
      <path d="M7 6c.26 0 .51-.11.7-.3S8 5.26 8 5a1 1 0 0 0-.3-.71A.98.98 0 0 0 7 4H5a.99.99 0 0 0-1 1v14c0 .26.1.51.29.7A1 1 0 0 0 5 20h2c.26 0 .51-.11.7-.3s.3-.44.3-.7a1 1 0 0 0-.3-.71A.98.98 0 0 0 7 18H6V6zM20.82 11.42l-2.82-4a1 1 0 0 0-.65-.41.93.93 0 0 0-.74.17c-.11.07-.21.17-.28.28s-.11.23-.14.36c-.02.14-.02.27.01.4s.09.25.17.36L18.09 11H10a.99.99 0 0 0-1 1c0 .26.1.51.29.7a1 1 0 0 0 .71.3h8l-1.8 2.4a.9.9 0 0 0-.17.35c-.04.12-.04.26-.02.39.01.13.06.25.12.36.07.12.16.22.27.29.17.13.38.21.6.21.15 0 .3-.04.44-.11s.26-.17.35-.29l3.01-4c.12-.17.19-.38.2-.59 0-.21-.06-.42-.18-.59" />
    </g>
  </svg>
)
const ForwardRef = forwardRef(SvgLogOutOutline)
const Memo = memo(ForwardRef)
export default Memo

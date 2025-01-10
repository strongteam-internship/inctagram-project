import type { SVGProps } from 'react'
import { Ref, forwardRef, memo } from 'react'
const SvgPin = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" ref={ref} {...props}>
    <defs>
      <clipPath id="pin_svg__a">
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
    <g fill="#000" clipPath="url(#pin_svg__a)">
      <path
        fillRule="evenodd"
        d="M13.5 9.5c0 .82-.68 1.5-1.5 1.5-.83 0-1.5-.68-1.5-1.5 0-.83.67-1.5 1.5-1.5.82 0 1.5.67 1.5 1.5"
      />
      <path d="M12 2c-2.11-.01-4.14.83-5.63 2.31A8 8 0 0 0 4 9.92c0 5.48 7.05 11.58 7.35 11.84.18.15.41.24.65.24.23 0 .46-.09.65-.24C13 21.5 20 15.4 20 9.92a8.04 8.04 0 0 0-2.38-5.61A7.95 7.95 0 0 0 12 2m0 11c-.7 0-1.37-.21-1.95-.59-.58-.39-1.02-.94-1.29-1.58-.26-.64-.33-1.34-.2-2.02.14-.68.47-1.3.96-1.79s1.11-.82 1.79-.96c.68-.13 1.38-.06 2.02.2.64.27 1.19.71 1.58 1.29.38.58.59 1.25.59 1.95 0 .92-.37 1.81-1.03 2.47S12.92 13 12 13" />
    </g>
  </svg>
)
const ForwardRef = forwardRef(SvgPin)
const Memo = memo(ForwardRef)
export default Memo

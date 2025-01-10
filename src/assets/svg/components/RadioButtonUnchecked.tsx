import type { SVGProps } from 'react'
import { Ref, forwardRef, memo } from 'react'
const SvgRadioButtonUnchecked = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" ref={ref} {...props}>
    <defs>
      <clipPath id="radio_button_unchecked_svg__a">
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
    <g clipPath="url(#radio_button_unchecked_svg__a)">
      <path
        fill="#000"
        d="M12 2C6.47 2 2 6.48 2 12s4.47 10 10 10c5.52 0 10-4.48 10-10S17.52 2 12 2m0 18c-4.42 0-8-3.58-8-8 0-4.43 3.58-8 8-8s8 3.57 8 8c0 4.42-3.58 8-8 8"
      />
    </g>
  </svg>
)
const ForwardRef = forwardRef(SvgRadioButtonUnchecked)
const Memo = memo(ForwardRef)
export default Memo

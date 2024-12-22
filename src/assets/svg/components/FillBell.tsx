import type { SVGProps } from 'react'
import { Ref, forwardRef, memo } from 'react'
const SvgFillBell = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" ref={ref} {...props}>
    <rect width={23} height={23} fill="none" rx={0} transform="translate(.5 .5)" />
    <path
      fill="#000"
      fillRule="evenodd"
      d="m18.72 13.404 1.801 1.803c.468.47.607 1.17.352 1.783A1.63 1.63 0 0 1 19.362 18H16v.341c0 2.018-1.794 3.66-4 3.66s-4-1.642-4-3.66v-.34H4.637a1.63 1.63 0 0 1-1.512-1.01 1.63 1.63 0 0 1 .354-1.783l1.8-1.804.001-4.677c0-1.934.839-3.779 2.303-5.06a6.72 6.72 0 0 1 5.316-1.608c3.319.44 5.821 3.396 5.821 6.877zM12 20c1.084 0 2-.76 2-1.659v-.34h-4v.34c0 .9.916 1.66 2 1.66"
      clipRule="evenodd"
    />
    <mask
      id="fill-bell_svg__a"
      width={17.999}
      height={20}
      x={3}
      y={2.001}
      mask-type="alpha"
      maskUnits="userSpaceOnUse"
    >
      <path
        fill="#231F20"
        fillRule="evenodd"
        d="m18.72 13.404 1.801 1.803c.468.47.607 1.17.352 1.783A1.63 1.63 0 0 1 19.362 18H16v.341c0 2.018-1.794 3.66-4 3.66s-4-1.642-4-3.66v-.34H4.637a1.63 1.63 0 0 1-1.512-1.01 1.63 1.63 0 0 1 .354-1.783l1.8-1.804.001-4.677c0-1.934.839-3.779 2.303-5.06a6.72 6.72 0 0 1 5.316-1.608c3.319.44 5.821 3.396 5.821 6.877zM12 20c1.084 0 2-.76 2-1.659v-.34h-4v.34c0 .9.916 1.66 2 1.66"
        clipRule="evenodd"
      />
    </mask>
    <g mask="url(#fill-bell_svg__a)">
      <rect width={23} height={23} fill="none" rx={0} transform="translate(.5 .5)" />
      <path fill="#000" d="M0 0h24v24H0z" />
      <path d="M0 0h24v24H0z" />
    </g>
  </svg>
)
const ForwardRef = forwardRef(SvgFillBell)
const Memo = memo(ForwardRef)
export default Memo

import { Ref, SVGProps, forwardRef, memo } from 'react'

const SvgPersonRemoveOutline = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    fill={'none'}
    height={24}
    ref={ref}
    width={24}
    xmlns={'http://www.w3.org/2000/svg'}
    {...props}
  >
    <defs>
      <clipPath id={'person-remove-outline_svg__a'}>
        <rect
          fill={'#fff'}
          fillOpacity={0}
          height={23}
          rx={0}
          transform={'translate(.5 .5)'}
          width={23}
        />
      </clipPath>
    </defs>
    <rect fill={'none'} height={23} rx={0} transform={'translate(.5 .5)'} width={23} />
    <g clipPath={'url(#person-remove-outline_svg__a)'} fill={'#000'}>
      <path
        d={
          'M21 6h-4a.99.99 0 0 0-1 1c0 .26.1.51.29.7A1 1 0 0 0 17 8h4c.26 0 .51-.11.7-.3s.3-.44.3-.7a1 1 0 0 0-.3-.71A.98.98 0 0 0 21 6M10 11c.79 0 1.56-.24 2.22-.68s1.17-1.06 1.47-1.79c.3-.74.38-1.54.23-2.32a4.05 4.05 0 0 0-3.14-3.14C10 2.92 9.2 3 8.46 3.3c-.73.3-1.35.81-1.79 1.47S6 6.2 6 7c0 1.06.42 2.07 1.17 2.82S8.93 11 10 11m0-6a1.955 1.955 0 0 1 1.84 1.23c.15.37.19.77.12 1.16-.08.38-.27.74-.55 1.02s-.64.47-1.02.55c-.39.07-.79.03-1.16-.12A1.955 1.955 0 0 1 8 7c0-.54.21-1.04.58-1.42C8.96 5.21 9.46 5 10 5M10 13c-1.86 0-3.64.73-4.95 2.05A6.96 6.96 0 0 0 3 20c0 .26.1.51.29.7A1 1 0 0 0 4 21c.26 0 .51-.11.7-.3s.3-.44.3-.7c0-1.33.52-2.6 1.46-3.54S8.67 15 10 15a5.003 5.003 0 0 1 5 5c0 .26.1.51.29.7a1 1 0 0 0 .71.3c.26 0 .51-.11.7-.3s.3-.44.3-.7c0-1.86-.74-3.64-2.06-4.95A6.95 6.95 0 0 0 10 13'
        }
      />
    </g>
  </svg>
)
const ForwardRef = forwardRef(SvgPersonRemoveOutline)
const Memo = memo(ForwardRef)

export default Memo

import { Ref, SVGProps, forwardRef, memo } from 'react'

const EyeIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    fill={'none'}
    height={'24'}
    ref={ref}
    viewBox={'0 0 24 24'}
    width={'24'}
    xmlns={'http://www.w3.org/2000/svg'}
    {...props}
  >
    <defs>
      <clipPath id={'eye_svg__a'}>
        <rect
          fill={'#fff'}
          fillOpacity={0}
          height={23}
          rx={0.5}
          transform={'translate(.5 .5)'}
          width={23}
        />
      </clipPath>
    </defs>
    <rect fill={'none'} height={23} rx={0.5} transform={'translate(.5 .5)'} width={23} />
    <g clipPath={'url(#eye_svg__a)'} fill={'currentColor'}>
      <path
        d={
          'M13.5 12c0 .82-.68 1.5-1.5 1.5-.83 0-1.5-.68-1.5-1.5 0-.83.67-1.5 1.5-1.5.82 0 1.5.67 1.5 1.5'
        }
        fillRule={'evenodd'}
      />
      <path
        d={
          'M21.87 11.5c-.64-1.11-4.17-6.69-10.14-6.5-5.53.14-8.73 5-9.6 6.5-.09.15-.14.32-.14.5 0 .17.05.34.14.5.63 1.09 4 6.5 9.89 6.5h.25c5.52-.14 8.74-5 9.6-6.5.08-.16.13-.33.13-.5 0-.18-.05-.35-.13-.5m-9.87 4c-.7 0-1.37-.21-1.95-.59-.58-.39-1.02-.94-1.29-1.58-.26-.64-.33-1.34-.2-2.02.14-.68.47-1.3.96-1.79s1.11-.82 1.79-.96c.68-.13 1.38-.06 2.02.2.64.27 1.19.71 1.58 1.29.38.58.59 1.25.59 1.95 0 .92-.37 1.81-1.03 2.47S12.92 15.5 12 15.5'
        }
      />
    </g>
  </svg>
)
const ForwardRef = forwardRef(EyeIcon)
const Memo = memo(ForwardRef)

export default Memo

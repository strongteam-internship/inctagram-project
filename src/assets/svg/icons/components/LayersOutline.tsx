import { Ref, SVGProps, forwardRef, memo } from 'react'

const SvgLayersOutline = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    fill={'none'}
    height={24}
    ref={ref}
    width={24}
    xmlns={'http://www.w3.org/2000/svg'}
    {...props}
  >
    <defs>
      <clipPath id={'layers-outline_svg__a'}>
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
    <g clipPath={'url(#layers-outline_svg__a)'}>
      <path
        d={
          'M21 11.35c-.02-.19-.08-.37-.19-.52a1 1 0 0 0-.42-.34l-2.15-.92 2.26-1.3c.16-.1.29-.23.38-.39.08-.17.12-.35.12-.53-.02-.19-.08-.37-.19-.52a1 1 0 0 0-.42-.34l-8-3.41A.9.9 0 0 0 12 3c-.14 0-.27.02-.39.08l-8 3.41c-.18.07-.32.19-.43.34s-.17.33-.18.52c-.01.18.03.36.11.53q.135.24.39.39l2.26 1.3-2.15.92c-.18.07-.32.19-.43.34s-.17.33-.18.52c-.01.18.03.36.11.53q.135.24.39.39l2.26 1.3-2.15.92c-.18.07-.32.19-.43.34s-.17.33-.18.52c-.01.18.03.36.11.53q.135.24.39.39l8 4.6c.15.08.32.13.5.13.17 0 .34-.05.5-.13l8-4.6c.16-.1.29-.23.38-.39.08-.17.12-.35.12-.53-.02-.19-.08-.37-.19-.52a1 1 0 0 0-.42-.34l-2.15-.92 2.26-1.3c.16-.1.29-.23.38-.39.08-.17.12-.35.12-.53m-9-6.26 5.76 2.45L12 10.85 6.24 7.54zm-.5 7.78c.15.08.32.13.5.13.17 0 .34-.05.5-.13l3.57-2 1.69.72L12 14.85l-5.76-3.31 1.69-.72zm6.26 2.67L12 18.85l-5.76-3.31 1.69-.72 3.57 2.05c.15.08.32.13.5.13.17 0 .34-.05.5-.13l3.57-2.05z'
        }
        fill={'#000'}
      />
    </g>
  </svg>
)
const ForwardRef = forwardRef(SvgLayersOutline)
const Memo = memo(ForwardRef)

export default Memo

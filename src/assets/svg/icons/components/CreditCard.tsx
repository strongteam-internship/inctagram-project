import { Ref, SVGProps, forwardRef, memo } from 'react'

const SvgCreditCard = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    fill={'none'}
    height={24}
    ref={ref}
    width={24}
    xmlns={'http://www.w3.org/2000/svg'}
    {...props}
  >
    <defs>
      <clipPath id={'credit-card_svg__a'}>
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
    <g clipPath={'url(#credit-card_svg__a)'}>
      <path
        d={
          'M19 5H5c-.8 0-1.56.31-2.13.87C2.31 6.44 2 7.2 2 8v8c0 .79.31 1.55.87 2.12.57.56 1.33.88 2.13.88h14c.79 0 1.55-.32 2.12-.88.56-.57.88-1.33.88-2.12V8c0-.8-.32-1.56-.88-2.13C20.55 5.31 19.79 5 19 5m-8 10H7a1 1 0 0 1-.71-.3A.98.98 0 0 1 6 14a.99.99 0 0 1 1-1h4c.26 0 .51.1.7.29a1 1 0 0 1 .3.71c0 .26-.11.51-.3.7s-.44.3-.7.3m6 0h-2a1 1 0 0 1-.71-.3.98.98 0 0 1-.29-.7.99.99 0 0 1 1-1h2c.26 0 .51.1.7.29a1 1 0 0 1 .3.71c0 .26-.11.51-.3.7s-.44.3-.7.3m3-6H4V8a.99.99 0 0 1 1-1h14c.26 0 .51.1.7.29A1 1 0 0 1 20 8z'
        }
        fill={'#000'}
      />
    </g>
  </svg>
)
const ForwardRef = forwardRef(SvgCreditCard)
const Memo = memo(ForwardRef)

export default Memo

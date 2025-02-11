import { Ref, SVGProps, forwardRef, memo } from 'react'

const SvgSettingsOutline = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    fill={'none'}
    height={24}
    ref={ref}
    width={24}
    xmlns={'http://www.w3.org/2000/svg'}
    {...props}
  >
    <defs>
      <clipPath id={'settings-outline_svg__a'}>
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
    <g clipPath={'url(#settings-outline_svg__a)'} fill={'#000'}>
      <path
        d={
          'M8.61 22c-.49-.01-.97-.17-1.35-.46L5.19 20c-.48-.38-.8-.92-.89-1.52s.05-1.21.4-1.7c.18-.27.29-.58.33-.91.04-.32.01-.65-.11-.95l-.05-.16a1.842 1.842 0 0 0-1.12-1.22h-.16c-.59-.2-1.07-.62-1.35-1.17s-.33-1.19-.13-1.77L2.92 8c.08-.31.22-.59.41-.83.2-.24.44-.44.72-.58.25-.14.53-.22.82-.24s.58.02.86.12c.29.1.61.12.92.07s.6-.18.86-.37l.13-.1a1.988 1.988 0 0 0 .73-1.5v-.25c-.01-.61.23-1.2.66-1.63.43-.44 1.01-.69 1.63-.69h2.55c.29 0 .59.06.86.17.28.12.53.28.74.5.44.44.68 1.05.68 1.68v.28c-.01.27.05.54.17.79s.3.47.52.64l.11.08c.22.16.48.27.76.32s.56.02.82-.07l.34-.1c.29-.1.6-.14.9-.11a2.217 2.217 0 0 1 1.56.82c.2.23.34.5.43.79l.79 2.53c.18.58.13 1.21-.14 1.75-.28.55-.75.97-1.32 1.18l-.2.07c-.3.09-.57.26-.78.48s-.37.5-.45.8c-.08.27-.1.56-.06.85.04.28.15.55.31.8l.26.37c.34.51.48 1.12.39 1.72-.1.6-.41 1.14-.89 1.52L17 21.41c-.25.18-.53.31-.82.39-.3.07-.61.09-.91.04s-.59-.16-.85-.33c-.25-.17-.47-.38-.64-.63l-.12-.17c-.17-.25-.39-.45-.65-.59-.27-.13-.56-.2-.85-.19-.29 0-.56.08-.81.21s-.46.32-.62.56l-.23.33c-.18.25-.4.47-.65.64-.26.16-.55.27-.85.33-.13.01-.27.01-.39 0M4.39 11.62c.57.2 1.08.53 1.49.96.42.44.72.96.9 1.54v.12c.21.59.28 1.23.2 1.86s-.31 1.23-.66 1.76c-.07.06-.1.16-.1.25s.03.19.1.26L8.47 20c.02.02.06.03.09.04s.07.01.11 0c.03 0 .06-.02.09-.04s.06-.04.08-.07l.23-.33c.34-.51.81-.92 1.35-1.2s1.14-.43 1.75-.43c.6 0 1.21.15 1.75.43.53.28 1 .69 1.35 1.2l.12.18q.06.09.18.12c.03 0 .06 0 .1-.01.03-.01.06-.02.09-.04l2.06-1.56c.07-.06.11-.14.13-.24a.4.4 0 0 0-.06-.26l-.27-.37c-.33-.5-.56-1.06-.65-1.65-.09-.6-.05-1.2.13-1.77.17-.61.49-1.16.92-1.61.44-.46.97-.8 1.57-1l.2-.07c.08-.04.15-.1.18-.19.04-.08.04-.17.01-.25l-.78-2.49a.3.3 0 0 0-.09-.12.26.26 0 0 0-.11-.07.2.2 0 0 0-.1-.03c-.03 0-.07.01-.09.03l-.35.11c-.57.18-1.18.23-1.78.13s-1.16-.34-1.64-.71L15 7.64c-.47-.35-.84-.8-1.1-1.32s-.4-1.09-.39-1.68v-.3c0-.1-.04-.19-.1-.27A.28.28 0 0 0 13.2 4h-2.54q-.075 0-.12.03c-.04.01-.07.04-.1.07a.27.27 0 0 0-.07.22v.25c0 .6-.14 1.19-.41 1.73-.26.53-.64 1-1.11 1.37l-.13.09c-.52.39-1.11.65-1.75.75-.63.11-1.28.05-1.88-.16a.3.3 0 0 0-.14 0c-.06.04-.1.09-.12.16L4 11.12c-.03.08-.03.18.01.26.04.09.12.15.2.19z'
        }
      />
      <path
        d={
          'M12 15.5c-.7 0-1.37-.21-1.95-.59-.58-.39-1.02-.94-1.29-1.58-.26-.64-.33-1.34-.2-2.02.14-.68.47-1.3.96-1.79s1.11-.82 1.79-.96c.68-.13 1.38-.06 2.02.2.64.27 1.19.71 1.58 1.29.38.58.59 1.25.59 1.95 0 .92-.37 1.81-1.03 2.47S12.92 15.5 12 15.5m0-5c-.3 0-.59.08-.84.25-.24.16-.44.4-.55.67-.11.28-.14.58-.09.87.06.29.2.56.41.77s.48.35.77.41c.29.05.59.02.87-.09.27-.11.51-.3.67-.55.17-.25.26-.54.26-.83 0-.4-.16-.78-.44-1.07-.29-.28-.67-.43-1.06-.43'
        }
      />
    </g>
  </svg>
)
const ForwardRef = forwardRef(SvgSettingsOutline)
const Memo = memo(ForwardRef)

export default Memo

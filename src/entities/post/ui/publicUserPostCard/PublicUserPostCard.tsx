import Image from 'next/image'

type Props = {
  src: string
}

export function PublicUserPostCard({ src }: Props) {
  return (
    <div>
      <Image alt={'Post image'} height={228} src={src} width={234} />
    </div>
  )
}

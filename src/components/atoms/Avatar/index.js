import { AvatarImage, AvatarContainer } from './style'

export function Avatar ({ children, src, alt }) {
  return (
    <AvatarContainer>
      {children && children}
      {!children && <AvatarImage
        src={src}
        alt={alt}
                    />}

    </AvatarContainer>
  )
}
import Link, { LinkProps } from 'next/link'
import { useRouter } from 'next/router'
import { cloneElement } from 'react'

export type ActiveLinkProps = LinkProps & {
  children: React.ReactElement;
  shouldMatchExactHref?: boolean;
}

export function ActiveLink({
  children,
  shouldMatchExactHref = false,
  ...linkProps
}: ActiveLinkProps) {
  const { asPath } = useRouter()

  let isActive = false;

  if (
    shouldMatchExactHref && 
    ([linkProps.href, linkProps.as].some(href => asPath === href))
  ) {
    isActive = true
  }

  if (
    !shouldMatchExactHref &&
    [linkProps.href, linkProps.as].some(href => asPath.startsWith(String(href)))
  ) {
    isActive = true
  }

  return (
    <Link {...linkProps}>
      {cloneElement(children, {
        color: isActive ? 'pink.400' : 'gray.50',
      })}
    </Link>
  )
}
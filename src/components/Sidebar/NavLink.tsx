import { Icon, Link as ChakraLink, Text, LinkProps } from "@chakra-ui/react";
import { IconType } from "react-icons";
import { ActiveLink } from '../ActiveLink';

type NavLinkProps = (LinkProps) & {
  icon?: IconType;
  href: string;
  children: React.ReactNode;
}

export function NavLink({ icon, href, children, ...linkProps }: NavLinkProps) {
  return (
    <ActiveLink href={href} passHref>
      <ChakraLink
        display="flex"
        alignContent="center"
        paddingY="1"
        color="gray.50"
        {...linkProps}
      >
        {!!icon && (
          <Icon as={icon} fontSize="20" />
        )}
        <Text marginLeft="4">{children}</Text>
      </ChakraLink>
    </ActiveLink>
  )
}
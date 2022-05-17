import { Icon, Link, Text, LinkProps } from "@chakra-ui/react";
import { IconType } from "react-icons";

type NavLinkProps = LinkProps & {
  icon?: IconType;
  focus?: boolean;
  children: React.ReactNode;
}

export function NavLink({ icon, focus = false, children, ...linkProps }: NavLinkProps) {
  return (
    <Link 
      display="flex" 
      alignContent="center" 
      paddingY="1" 
      color={focus && 'pink.400'}
      {...linkProps}
    >
      { !!icon && (
        <Icon as={icon} fontSize="20" />
      ) }
      <Text marginLeft="4">{children}</Text>
    </Link>
  )
}
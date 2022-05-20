import { Flex, Icon, IconButton, useBreakpointValue } from '@chakra-ui/react'
import { RiMenuLine } from 'react-icons/ri'
import { useSidebarDrawer } from '../../contexts/SidebarDrawerContext'
import { Logo } from './Logo'
import { NotificationsNav } from './NotificationsNav'

import { Profile } from './Profile'
import { SearchBox } from './SearchBox'

export function Header() {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  })
  const { onOpen } = useSidebarDrawer()

  return (
    <Flex
      as="header"
      width="100%"
      maxWidth={1480}
      height="20"
      marginX="auto"
      marginTop="4"
      paddingX="6"
      alignItems="center"
    >
      {
        !isWideVersion && (
          <IconButton 
            aria-label="Open Drawer Navigation"
            icon={<Icon as={RiMenuLine} />}
            fontSize="24"
            variant="unstyled"
            onClick={onOpen}
            marginRight="2"
            display="flex"
          >

          </IconButton>
        )
      }

      <Logo />

      { isWideVersion && <SearchBox /> }

      <Flex
        alignContent="center"
        marginLeft="auto"
      >
        <NotificationsNav />

        <Profile showProfileInfo={isWideVersion} />
      </Flex>
    </Flex>
  )
}
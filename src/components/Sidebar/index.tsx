import { Box, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay, useBreakpointValue } from "@chakra-ui/react";
import { useSidebarDrawer } from "../../contexts/SidebarDrawerContext";
import { SideBarNav } from "./SideBarNav";

export function SideBar() {
  const isDrawerSideBar = useBreakpointValue({
    base: true,
    lg: false,
  })
  const { isOpen, onClose } = useSidebarDrawer()

  if (isDrawerSideBar) {
    return (
      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay>
          <DrawerContent backgroundColor="gray.800" padding="4" >
            <DrawerCloseButton marginTop="6" />
            <DrawerHeader>Navegação</DrawerHeader>

            <DrawerBody>
              <SideBarNav />
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    )
  }

  return (
    <Box as="aside" width="64" marginRight="8">
      <SideBarNav />
    </Box>
  )
}
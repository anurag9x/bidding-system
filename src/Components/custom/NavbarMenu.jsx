import React from "react";
import { Button, Menu, Portal } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../Redux/Action/auth/logoutAction";

export const NavbarMenu = () => {
  const userData = useSelector((state) => state?.Login?.userData);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <Menu.Root>
      <Menu.Trigger asChild>
        <Button variant="surface" size={{ base: "xs", md: "md" }}>
          {userData?.name}
        </Button>
      </Menu.Trigger>
      <Portal>
        <Menu.Positioner>
          <Menu.Content>
            <Menu.Item value="new-txt-a">
              Acount No.
              <Menu.ItemCommand>{userData?.accountno}</Menu.ItemCommand>
            </Menu.Item>
            <Menu.Item
              value="delete"
              color="fg.error"
              _hover={{ bg: "bg.error", color: "fg.error" }}
              onClick={handleLogout}
            >
              Logout
            </Menu.Item>
          </Menu.Content>
        </Menu.Positioner>
      </Portal>
    </Menu.Root>
  );
};

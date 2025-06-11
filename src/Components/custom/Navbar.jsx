import { Box, Button, HStack, Kbd } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { NavbarMenu } from "./NavbarMenu";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

export const Navbar = () => {
  const userData = useSelector((state) => state?.Login?.userData);
  const [isRouteKYCAuth, setIsRouteKYCAuth] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/kycauth") {
      setIsRouteKYCAuth(true);
    } else {
      setIsRouteKYCAuth(false);
    }
  }, [location.pathname]);
  return (
    <HStack
      position="fixed"
      zIndex="100"
      w="100%"
      display="flex"
      flexDirection="column"
      bgColor="#F0F0F0"
    >
      <HStack
        w="100%"
        display="flex"
        padding="12px"
        justifyContent="space-between"
        boxShadow="rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px"
      >
        <Box
          width="100%"
          display="flex"
          justifyContent="end"
          alignItems="center"
        >
          {isRouteKYCAuth ? (
            <Box
              gap="1rem"
              display="flex"
              justifyContent="space-evenly"
              alignItems="center"
            >
              <Button variant="outline" size="md">
                KYC Auth
              </Button>
            </Box>
          ) : (
            <Box
              gap="1rem"
              display="flex"
              justifyContent="space-evenly"
              alignItems="center"
            >
              <Button variant="surface" size={{ base: "xs", md: "md" }}>
                Account No: <Kbd>{userData?.accountno}</Kbd>
              </Button>
              <NavbarMenu />
            </Box>
          )}
        </Box>
      </HStack>
    </HStack>
  );
};

import * as React from "react";
import { Box, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
import links from "../data/links";

import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { useStateContext } from "../contexts/ContextProvider";

function Sidebar({}) {
  const { isOpenSidebar, setIsOpenSidebar } = useStateContext();
  return (
    <Box
      sx={{
        width: "250px",
        height: "100%",
        position: "fixed",
        // boxShadow: "0px 2px 2px rgba(0 0 0 / 20%)",
        boxSizing: "border-box",
        padding: "0 16px",
        transform: isOpenSidebar ? "translateX(0%)" : "translateX(-101%)",
        transition: "all 0.3s ease-out",
      }}
    >
      <div className="title">
        {links.map((item) => (
          <div key={item.title}>
            <Typography
              sx={{
                textTransform: "capitalize",
                lineHeight: "10px",
                fontSize: "16px",
                fontWeight: 500,
                color: "rgb(33, 33, 33)",
                padding: "6px",
              }}
            >
              {item.title}
            </Typography>

            <List>
              {item.links.map((link) => (
                <ListItem
                  disablePadding
                  key={link.name}
                  sx={{
                    ".active, .active svg": {
                      color: "rgb(94, 53, 177) !important",
                      backgroundColor: "rgb(237, 231, 246)",
                      fontWeight: 500,
                    },
                  }}
                >
                  <ListItemButton
                    sx={{
                      borderRadius: "12px",
                      padding: "10px 16px 10px 24px",
                      textTransform: "capitalize",
                      color: "rgb(97, 97, 97)",
                    }}
                    component={NavLink}
                    to={`/${link.name}`}
                    // style={({ isActive }) =>
                    //   isActive ? { color: "red" } : undefined
                    // }
                  >
                    <ListItemIcon sx={{ minWidth: "36px" }}>
                      {link.icon}
                    </ListItemIcon>
                    <ListItemText
                      primary={link.name}
                      primaryTypographyProps={{ fontSize: "14px" }}
                    />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </div>
        ))}
      </div>
    </Box>
  );
}

export default Sidebar;

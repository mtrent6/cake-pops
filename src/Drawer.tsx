import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import { Divider } from "@mui/material";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useState } from "react";
import CollectionsIcon from "@mui/icons-material/Collections";
import InstagramIcon from "@mui/icons-material/Instagram";
import LiveHelpIcon from "@mui/icons-material/LiveHelp";

const HamburgerMenu = (props) => {
  const { setIsOpen } = props;
  const isOpen = false; //come back and fix
  const genericHamburgerLine = `h-1 w-6 my-1 rounded-full bg-black transition ease transform duration-300`;
  return (
    <div style={{ position: "fixed", right: 0, zIndex: 1000 }}>
      <button
        className="flex flex-col h-12 w-12 justify-center items-center group"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div
          className={`${genericHamburgerLine} ${
            isOpen
              ? "rotate-45 translate-y-3 opacity-50 group-hover:opacity-100"
              : "opacity-50 group-hover:opacity-100"
          }`}
        />
        <div
          className={`${genericHamburgerLine} ${
            isOpen ? "opacity-0" : "opacity-50 group-hover:opacity-100"
          }`}
        />
        <div
          className={`${genericHamburgerLine} ${
            isOpen
              ? "-rotate-45 -translate-y-3 opacity-50 group-hover:opacity-100"
              : "opacity-50 group-hover:opacity-100"
          }`}
        />
      </button>
    </div>
  );
};

export default function TemporaryDrawer(props) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen(false);
  };

  const getIcon = (index) => {
    switch (index) {
      case 0:
        return <ShoppingCartIcon />;
      case 1:
        return <CollectionsIcon />;
      case 2:
        return <InstagramIcon />;
    }
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onKeyDown={toggleDrawer}
    >
      <List>
        {["Order", "Gallery", "Social Media"].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>{getIcon(index)}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <ListItem button key={0}>
        <ListItemIcon>
          <LiveHelpIcon />
        </ListItemIcon>
        <ListItemText primary={"FAQ"} />
      </ListItem>
    </Box>
  );

  return (
    <div>
      <React.Fragment>
        <HamburgerMenu isOpen={isOpen} setIsOpen={setIsOpen} />

        <Drawer anchor={"right"} open={isOpen} onClose={toggleDrawer}>
          {list("right")}
        </Drawer>
      </React.Fragment>
    </div>
  );
}

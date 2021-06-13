import React from "react";
import { Icon, Menu, MenuGroup, MenuItem, Avatar } from "@ui-kitten/components";
import { Image } from "react-native-elements";

const SmartphoneIcon = (props) => (
  <Avatar
    source={{
      uri: "https://cdn.nguyenkimmall.com/images/companies/_1/Content/tin-tuc/gia-dung/top-10-smartphone-gia-re-khong-nen-bo-lo-trong-nam-2020-h2.jpg",
    }}
  ></Avatar>
);

const BrowserIcon = (props) => <Icon {...props} name="browser-outline" />;

const ColorPaletteIcon = (props) => (
  <Icon {...props} name="color-palette-outline" />
);

const StarIcon = (props) => <Icon {...props} name="star" />;

const MenuGroupsShowcase = () => {
  const [selectedIndex, setSelectedIndex] = React.useState(null);

  return (
    <React.Fragment>
      <Menu
        selectedIndex={selectedIndex}
        onSelect={(index) => setSelectedIndex(index)}
      >
        <MenuGroup title="Akveo React Native" accessoryLeft={SmartphoneIcon}>
          <MenuItem title="UI Kitten" accessoryLeft={StarIcon} />
          <MenuItem title="Kitten Tricks" accessoryLeft={StarIcon} />
        </MenuGroup>
        <MenuGroup title="Akveo Angular" accessoryLeft={BrowserIcon}>
          <MenuItem title="Nebular" accessoryLeft={StarIcon} />
          <MenuItem title="ngx-admin" accessoryLeft={StarIcon} />
          <MenuItem title="UI Bakery" accessoryLeft={StarIcon} />
        </MenuGroup>
        <MenuGroup title="Akveo Design" accessoryLeft={ColorPaletteIcon}>
          <MenuItem title="Eva Design System" accessoryLeft={StarIcon} />
          <MenuItem title="Eva Icons" accessoryLeft={StarIcon} />
        </MenuGroup>
      </Menu>
    </React.Fragment>
  );
};
export default MenuGroupsShowcase;

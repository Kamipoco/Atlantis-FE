import { Box } from "../box";

const boxes = [
  {
    id: 0,
    boxName: "Hero Box Normal",
    image: "/assets/images/openBox/Box_hero_lv1_color_opt1.png",
  },
  {
    id: 1,
    boxName: "Hero Box Vip",
    image: "/assets/images/openBox/Box_hero_lv2_color_opt1.png",
  },
  {
    id: 2,
    boxName: "Armor Box Nomal",
    image: "/assets/images/openBox/Box_armor_lv1_color_opt1.png",
  },
  {
    id: 3,
    boxName: "Armor Box Vip",
    image: "/assets/images/openBox/Box_armor_lv2_color_opt1.png",
  },
  {
    id: 4,
    boxName: "Weapon Box Normal",
    image: "/assets/images/openBox/Box_weapon_lv1_color_opt1.png",
  },
  {
    id: 5,
    boxName: "Weapon Box Vip",
    image: "/assets/images/openBox/Box_weapon_lv2_color_opt1.png",
  },
];

export function Listing() {
  return (
    <div className="listing">
      <div className="grid">
        <div className="grid__row">
          {boxes.map((box, index) => {
            return (
              <div className="grid-4" key={index}>
                <Box box={box} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

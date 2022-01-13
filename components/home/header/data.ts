export interface SocialProps {
  id: string;
  path: string;
  image: string;
  alt: string;
}

export const socialLinks: SocialProps[] = [
  {
    id: "1",
    path: "/",
    image: "/assets/images/icons/facebook.png",
    alt: "facebook",
  },
  {
    id: "2",
    path: "/",
    image: "/assets/images/icons/telegram.png",
    alt: "telegram",
  },
  {
    id: "3",
    path: "/",
    image: "/assets/images/icons/discord.png",
    alt: "discord",
  },
];

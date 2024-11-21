"use client";
import {
  PrimaryTypography,
  SecondaryTypography,
  TeritaryTypography,
} from "@/app/components/CustomTypography";
import GButton from "@/app/components/global/GButton";
import GlobalCarousel from "@/app/components/global/GCarousel";
import BackDrop from "@/app/components/portfolioComponents/BackDrop";
import { flexStyle } from "@/app/styles/commonStyles";
import { Box, Stack } from "@mui/material";
import React from "react";

type Props = {};

export default function ProjectPage({}: Props) {
  return (
    <Stack id="works">
      <BackDrop>
        <Stack sx={{ position: "absolute", width: "max-content" }}>
          <PrimaryTypography name={"JersApp"} size="lg" />
          <TeritaryTypography
            name={"Better API Visibility, Lesser Complexity"}
          />
          <Box
            sx={{ ...flexStyle("", 2, "", "flex-start"), padding: "20px 0" }}
          >
            <Box
              sx={{
                height: "80px",
                width: "80px",
                borderRadius: 5,
                background: "var(--cardBg)",
              }}
            ></Box>
            <GButton
              lable="Download"
              variant="secondary"
              sx={{ width: "min-content" }}
            />
          </Box>
        </Stack>
      </BackDrop>
      <Stack sx={{ padding: 2, position: "relative" }}>
        <GlobalCarousel
          next="button-next"
          prev="button-prev"
          cardVariant="website"
        />
        <Stack sx={{ padding: { md: "30px 80px", sm: 5, xs: 3 } }}>
          <PrimaryTypography name={"About this website"} variant="primary" />
          <TeritaryTypography
            name={
              "Join hundreds of millions of players for FREE and start the fun slingshot adventure now! Team up with your friends, climb the leaderboards, gather in clans, collect hats, take on challenges, and play fun events in all-new game modes. Evolve your team and show your skills in this exciting Angry Birds game !Get to know all of the iconic Angry Birds characters and experience the fun gameplay that has captured the hearts of millions of players.Features:● DAILY CHALLENGES. Have a minute? Complete a daily challenge and earn some quick rewards.● LEVEL UP your characters with feathers and up their scoring power. Build the ultimate flock!● JOIN A CLAN to take down the pigs with friends and players around the world.● COMPETE in the ARENA. Compete with other players for some friendly bird flinging fun and prove who is the best.● COLLECT SILLY HATS. Collect hats with different fun themes to level up your flock’s fashion game and take part in special events.● IMPRESS THE MIGHTY EAGLE in special challenges in Mighty Eagle’s Bootcamp and earn coins to use in his exclusive shop.● LOTS OF LEVELS. Play hundreds of levels with more added in regular updates and limited time events.● LEADERBOARDS. Compete with your friends and other players and prove who is the best on the global leaderboards.● CHOOSE YOUR BIRD. Choose which bird to put in the slingshot and defeat the pigs with strategy!● MULTI-STAGE LEVELS. Play fun, challenging levels with multiple stages – just watch out for Boss Pigs!● FREE to download! --- Angry Birds 2 is completely free to play. Although Angry Birds 2 can be downloaded for free, there are optional in-app purchases available.---When playing this game, Rovio will offset the carbon footprint caused by the device’s energy consumption.This game may include:- Direct links to social networking websites that are intended for an audience over the age of 13.- Direct links to the internet that can take players away from the game with the potential to browse to any web page.- Advertising of Rovio products and also products from third parties.Although some features are available offline, this game may require internet connectivity for certain features. Normal data transfer charges apply. Note: When the game is played for the first time, there is a one-time download of additional content that cannot be completed while offline.We may update the game periodically, for example to add new features or content or to fix bugs or other technical issues. Please note that the game may not function properly if you do not have the newest version installed. If you have not installed the latest update, Rovio will not be responsible for the game failing to function as expected.Terms of use: http://www.rovio.com/terms-of-servicePrivacy Policy: http://www.rovio.com/privacy"
            }
          />
        </Stack>
      </Stack>
    </Stack>
  );
}

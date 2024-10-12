import React, { useState, useEffect } from "react";
import App from "../../../../App";
import CommitteePage from "../../../CommitteePage";

function Formula1() {
  return (
    <>
      <CommitteePage
        src={require("../../../images/committees/spec/f1.avif")}
        committee="F1: Survive to Drive"
        skill="Skill Level: Novice"
        description="Welcome to the high-stakes world of Formula 1 at BearMUN! In this committee, delegates will step into the shoes of team principals from the top F1 teams to navigate through a series of challenges both on and off the track. From negotiating broadcasting rights and sponsorships to addressing technical regulations and sustainability initiatives and even selecting your winning pair of drivers, delegates will experience the thrill and strategic complexity of managing an F1 team. Prepare for intense negotiations, tactical alliances, and high-speed decision-making as you race to secure your team's legacy in the history of Formula 1. Whether you're a seasoned MUN delegate or a newcomer, this committee promises to deliver an exhilarating blend of diplomacy and the dynamic world of motorsports. Start your engines and get ready for an unforgettable journey at the BearMUN Autodrome!"
        chair1="Sehr Ali Dada"
        position1='Chair'
        bio11="Hello, hello, hello!"
        bio12="I am Sehr, and welcome to F1: Survive to Drive!"
        bio13="As a fourth-year student at Cal, majoring in Political Science and Comparative Literature, I've been a part of UCBMUN since my freshman fall. Having served as the Director General of UCBMUN XXVIII and previously as the Chief of Staff, I assure you that you’re in capable hands. My journey with UCBMUN has been nothing short of incredible, and I'm excited to share this passion with you alongside Olivia!"
        bio14="I have enjoyed watching Formula 1 since I was a wee kid—literally since I was six years old. My love and knowledge of the sport predate Drive to Survive and the TikTok hype, so don’t think you can pull a fast one. However, feel free to strike up a conversation with me about the sport unless it's Ferrari slander…everybody loves Ferrari…"
        bio15="Gear up for captivating debate, and I can’t wait to see you showcase your creativity in the pursuit of pole position!"
        bio16="Best,"
        bio17="Sehr Ali Dada"
        photo1={require("../../../images/headshots/dias/sehr.jpeg")}
        chair2="Olivia Bruner"
        position2='Chair'
        bio21="Dear Delegates,"
        bio22="Welcome to UCBMUN and Survive to Drive! My name is Olivia Bruner (she/her) and I am honored to serve as one of your chairs for this exciting weekend. "
        bio23="I am a second year at Berkeley studying Rhetoric and Journalism amongst other things. I am from Merced, California which is objectively one of the greatest cities to ever exist. I joined UCBMUN during my freshman fall and as a newbie to debate, it was one of the ebst decisions I have ever made. From travelling to debating, MUN has opened so many doors and helped me find some of my closest friends. Outside of a committee session, you can find me walking all over campus for my job, reading any book off Pinterest (currently on The Anthropocene Reviewed), or trying out a new food place in Berkeley."
        bio24="I started watching Formula One for a sibling rivalry, as my brother loves NASCAR, but grew to love it with each race. I do not have a particular inclination for a team, but am always undoubtedly a sucker for the underdog. I look forward to seeing how you all navigate the obstacles and turns throughout this weekend as we explore the world of Formula One!"
        bio25="Best,"
        bio26="Olivia Bruner"
        // bio27="Sameera Menon"
        photo2={require("../../../images/headshots/dias/oliviab.png")}
      />
    </>
  );
}

export default Formula1;

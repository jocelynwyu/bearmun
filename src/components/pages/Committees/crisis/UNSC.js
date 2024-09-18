import React, { useState, useEffect } from "react";
import App from "../../../../App";
import CommitteePage from "../../../CommitteePage";

function UNSC() {
  return (
    <>
      <CommitteePage
        src={require("../../../images/committees/crisis/unsc cyprus.webp")}
        committee="UNSC: Reunification of Cyprus"
        skill="Skill Level: Novice"
        description="Greetings delegates! You’ve been tasked by the UN as powerful members of the United Nations Security Council to attempt to reunify Cyprus. Thus far, a proposal has been set forth as a result of fierce debate between the political parties of Cyrpus known as the Annan Plan. Over the course of committee it will be up to you all to ensure that Cyprus can be reuinified in such a manner that prioritzed the well being of its citizens and the economic and political stability of the fledling nation to come. There are many factions at play and many ideologies to take into account, ranging from the citizens of the nation, to the political parties at play, to even foreign nations which may have strong preferences about the new nation. Take everything into account, and ultimately whether that means enforning the Annan Plan and working to ammas support for the proposal or to draft a new means entirely is up to you. Good luck delegates, all future Cypriots are counting on you."
        chair1="Maanas Shah"
        position1="Crisis Director"
        bio11="Hey everyone! My name is Maanas Shah and I'm a 3rd year studying Physics and Computer Science, from Pleasanton, California! I've been doing mun for 10 years now, and so I'm thrilled to be your CD for an action-packed 2 days at BearMUN!"
        bio12="Despite being primarily focused on the maths and sciences when it comes to my academic journey, the study of war and diplomacy has always fascinated me and ultimately is what brought me to MUN in the first place. I hope that I'll be able to bring this interest to your backroom and weave some exciting tales about the subject! I believe the Reunification of Cyprus is a great setting to explore the interplay between warfare, alliances, nation-building, and so much more, all while being an underutilized setting that will be interesting to research and learn about."
        bio13="Another huge passion of mine is board games and game design, especially strategy games about warfare, so keep your eyes peeled for some crazy mechanics and ROP (rules of procedure) in this committee!"
        bio14="I'm eager to see you all in committee, and I hope you're ready for the tales that await you and your fellow delegates in the backroom!"
        bio15="Best,"
        bio16="Maanas Shah"
        photo1={require("../../../images/headshots/dias/maanas.jpg")}
        chair2="Dylan Nokleby"
        position2="Chair"
        bio21="Hi!"
        bio22="My name is Dylan Nokleby (he/him), I'm a junior here at UC Berkeley and will be the chair for our UNSC committee this week! I'm currently studying Mechanical Engineering and am serving as the External Vice President of UCBMUN's travel team. I grew up as an expat kid--living in Australia, Scotland, Singapore, and the States--before ending up here in sunny California. Outside of MUN, I am an avid sports fan but I also love food, music, and travel. My other involvements on campus include playing for the Cal Men's Club Soccer team and being a member of a consulting club here at Berkeley"
        bio23="Although I normally compete on the more GA side of things, I am a big believer that the UNSC is actually the most advanced application of MUN skills there is. Mixing GA and Crisis is no easy task, but I can assure you that Manaas and I have a great weekend filled with fun debate and, well, just normal fun. I can't wait to see everyone in November for what I'm sure will be a great conference!"
        bio24="Best,"
        bio25="Dylan Nokleby"
        photo2={require("../../../images/headshots/dias/dylan.png")}
      />
    </>
  );
}

export default UNSC;

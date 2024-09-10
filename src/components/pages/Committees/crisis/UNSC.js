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
        description="Coming Soon!"
        chair1="Maanas Shah"
        position1="Chair"
        bio11="Hey everyone! My name is Maanas Shah and I'm a 3rd year studying Physics and Computer Science, from Pleasanton, California! I've been doing mun for 10 years now, and so I'm thrilled to be your CD for an action-packed 2 days at BearMUN!"
        bio12="Despite being primarily focused on the maths and sciences when it comes to my academic journey, the study of war and diplomacy has always fascinated me and ultimately is what brought me to MUN in the first place. I hope that I'll be able to bring this interest to your backroom and weave some exciting tales about the subject! I believe the Reunification of Cyprus is a great setting to explore the interplay between warfare, alliances, nation-building, and so much more, all while being an underutilized setting that will be interesting to research and learn about."
        bio13="Another huge passion of mine is board games and game design, especially strategy games about warfare, so keep your eyes peeled for some crazy mechanics and ROP (rules of procedure) in this committee!"
        bio14="I'm eager to see you all in committee, and I hope you're ready for the tales that await you and your fellow delegates in the backroom!"
        bio15="Best,"
        bio16="Maanas Shah"
        photo1={require("../../../images/committees/ga/iaea nuclear energy.jpg")}
        // chair2="Anushka Rajasekhar"
        // position2="Vice Chair"
        // bio21="Dear Delegates,"
        // bio22="My name is Anushka Rajasekhar (she/her), and I will be your [what am I] for the
        // Barbenheimer Committee! I’m not a big fan of the Oppenheimer or Barbie movie (I fell asleep in
        // the theater), but I played with barbies as a child and I like physics so I suppose there’s some hope
        // for me after all. However, this committee will indeed be filled with chaos, entertainment, and
        // scheming: all things I do adore. With that being said, I encourage you all to think of creative
        // solutions and be bold in your speeches. I recommend that you all step outside your comfort
        // zones and use your limitless imagination in committee (be creative!!)."
        // bio23="This is my second semester in collegiate MUN, but I’ve been dabbling in MUN since
        // middle school. I remember the day that a GA committee I signed up for in high school
        // miraculously became a crisis committee with purple penguins. Since then, I have been a crisis
        // delegate and absolutely love how insane it is. Within UCBMUN, I am currently a USG for our
        // collegiate conference that happens every spring!"
        // bio24="I am currently a sophomore at Berkeley, studying geophysics and philosophy. I am
        // pre-law, but also wildy fascinated by everything volcanoes and seismology related. I am from
        // Pleasanton, CA, but I spent the beginning half of my life moving around the Midwest. Outside of
        // MUN, I love to discover new music, find new adventures, and am part of a pre-law fraternity on
        // campus."
        // bio25="I am excited to see what you all have in store for our committee, and am looking forward to
        // meeting you all. Have a wonderful time at BearMUN, and feel free to reach out if you have any
        // questions."
        // photo2={require("../../../images/committees/ga/iaea nuclear energy.jpg")}
      />
    </>
  );
}

export default UNSC;

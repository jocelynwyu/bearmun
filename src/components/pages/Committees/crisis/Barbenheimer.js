import React, { useState, useEffect } from "react";
import App from "../../../../App";
import CommitteePage from "../../../CommitteePage";

function Barbenheimer() {
  return (
    <>
      <CommitteePage
        src={require("../../../images/committees/crisis/barbenheimer.jpg")}
        committee="Barbenheimer"
        skill="Skill Level: Novice"
        description="What happens when two worlds on the opposite spectrums and timelines collide. Barbie and her
        friends have now been brought to the 1940s Oppenheimer’s world. Barbie fears that
        Oppenheimer’s work will fall into the wrong hands and be used for malicious purposes.
        Oppenheimer comes to realize the moral implications of his work and finds his work renderless
        compared to a utopian society like Barbie’s. How will the two sides work together? What does
        the use of atomic weapons mean for the real world and Barbie’s world? In this committee,
        delegates will work together to settle ethical strifes, technological advancements, societal
        challenges, and resolve chaos. Welcome to the world of Barbenheimer."
        chair1="Jomari Encarnacion"
        position1="Chair"
        bio11=" Dear Delegates,"
        bio12="My name is Jomari Encarnacion (she/her), and I will be your acting Crisis Director. It is
        my pleasure to welcome you all to the Barbenheimer committee! I am thrilled to be the Chair for
        Barbenheinmer, as I absolutely enjoy these two movies, especially how both films discuss
        important themes while being extremely different. I urge delegates to create exciting solutions,
        prioritizing thinking outside the box to ensure a chaotic yet entertaining committee (basically
        expand from the context of the movies and don’t be afraid to go creative)."
        bio13=" This is my second year participating in Model UN in college. However, I did a mixture of
        Youth and Government, Mock Trial, Speech and Debate, etc... from my experiences before
        transferring to UC Berkeley. Since joining Berkeley’s MUN team, I have constantly grown from
        my conference experiences, taking some of what I learned to each new conference. I am excited
        to learn more from this committee experience, and I hope to help make this committee an
        interesting and fun experience!"
        bio14=" For more information about me, I am a Senior originally from Orange County,
        specifically the Huntington Beach/Fountain Valley area. I am majoring in Political Science,
        focusing on International Relations and minoring in History. Outside of MUN, I enjoy reading (I
        am currently going through my Hunger Games phase again by re-reading the series after hearing
        the announcement for the Sunrise on the Reaping), vinyl collecting (I LOVE Fleetwood Mac and
        Big Thief), binge-watching rom-com movies, and baking pastries. If you guys ever have book or
        song recommendations, please let me know!"
        bio15=" I look forward to seeing how delegates manage the absurdity of intermingling two vastly
        different worlds, and I hope you all have a great BearMUN Conference! If you have any
        questions or comments, please feel free to contact us!"
        bio16=" Best,"
        bio17="Jomari Encarnacion"
        photo1={require("../../../images/committees/ga/iaea nuclear energy.jpg")}
        chair2="Anushka Rajasekhar"
        position2="Vice Chair"
        bio21="Dear Delegates,"
        bio22="My name is Anushka Rajasekhar (she/her), and I will be your [what am I] for the
        Barbenheimer Committee! I’m not a big fan of the Oppenheimer or Barbie movie (I fell asleep in
        the theater), but I played with barbies as a child and I like physics so I suppose there’s some hope
        for me after all. However, this committee will indeed be filled with chaos, entertainment, and
        scheming: all things I do adore. With that being said, I encourage you all to think of creative
        solutions and be bold in your speeches. I recommend that you all step outside your comfort
        zones and use your limitless imagination in committee (be creative!!)."
        bio23="This is my second semester in collegiate MUN, but I’ve been dabbling in MUN since
        middle school. I remember the day that a GA committee I signed up for in high school
        miraculously became a crisis committee with purple penguins. Since then, I have been a crisis
        delegate and absolutely love how insane it is. Within UCBMUN, I am currently a USG for our
        collegiate conference that happens every spring!"
        bio24="I am currently a sophomore at Berkeley, studying geophysics and philosophy. I am
        pre-law, but also wildy fascinated by everything volcanoes and seismology related. I am from
        Pleasanton, CA, but I spent the beginning half of my life moving around the Midwest. Outside of
        MUN, I love to discover new music, find new adventures, and am part of a pre-law fraternity on
        campus."
        bio25="I am excited to see what you all have in store for our committee, and am looking forward to
        meeting you all. Have a wonderful time at BearMUN, and feel free to reach out if you have any
        questions."
        photo2={require("../../../images/committees/ga/iaea nuclear energy.jpg")}
      />
    </>
  );
}

export default Barbenheimer;

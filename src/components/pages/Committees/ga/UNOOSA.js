import React, { useState, useEffect } from "react";
import App from "../../../../App";
import CommitteePage from "../../../CommitteePage";

function UNOOSA() {
  return (
    <>
      <CommitteePage
        src={require("../../../images/committees/ga/unoosa mars.png")}
        committee="UNOOSA 2050: Mars Exploration and Resource Extraction"
        skill="Skill Level: Novice"
        description="Coming Soon!"
        chair1="Drishti Gupta"
        position1='Chair'
        bio11="Hey everyone!"
        bio12="	I’m Drishti (she/her), one of your chairs this weekend for what’s to be the BEST GA ever 🙂 I’m so excited to meet all of you and see how you navigate the futuristic twists and turns that are bound to be present in this committee."
        bio13="	A little more about me: I’m a fourth year Data Science major at Cal and I’ve been in UCBMUN since my freshman year. Currently, I serve as the General Assembly Head Delegate for our club, something that I thoroughly enjoy doing in my free time. This is my first time chairing BearMUN, but I’ve staffed UCBMUN (our college conference) four times. I vice-chaired the SAd-Hoc in 2022, was chief of staff external in 2023, chaired Lok Sabha (spec) last conference, and can’t wait to chair UNOOSA with Joanna. On the circuit I compete only in GAs, and love the collaborative aspect the activity brings to the table. I’ve met a bunch of amazing people in my three years competing, and am so excited to start the end of my MUN career with this committee :)"
        bio14="	I was born in India but moved to the Bay Area when I was 2, and have been here ever since. If you’re looking for recs on what to do in your free time at this conference, I’m definitely your person to ask. In my free time I love adding onto my Lego collection, building jigsaw puzzles, trying out new recipes, and watching cricket. I also love discovering new TV shows and have recently started watching The Crown and Baby Reindeer (highly recommend but kinda morbid)."
        bio15="	This committee will definitely be a committee of all time, and can’t wait to see the unique ideas you all come up with. We encourage you to be creative with your solutions! There will be a lot of room to collaborate, so please make sure to have tons of fun! I’m thrilled to be chairing this committee, and am looking forward to meeting all of you and bonding with you. See you very soon and hope you’re ready for it!"
        bio16="Best,"
        bio17="Drishti Gupta"
        photo1={require("../../../images/headshots/dias/drishti.png")}
        // chair2="Joanna"
        // position2='Vice Chair'
        // bio2=" Sophia Martinez (she/her) is an English major from Orange County, California, and will be a sophomore this upcoming academic year. She joined Berkeley's Model United Nations club to better her speaking abilities and become more involved with this campus. With how many great people she has found through this club, she wanted to become more involved as a new member and join the Secretariat for BEARMUN! Some other groups she is involved with are Berkeley PAD and the ASUC Student Union, where she works as a lead barista. Outside of academics, she loves listening to music (Fiona Apple and Lana Del Rey are some of her favorites!) and playing tennis with her coworkers. She is incredibly excited to work with everyone and ensure BearMUN is fun and successful for all groups involved.
        // bio approaching?"
        // photo2={require("../../../images/committees/ga/iaea nuclear energy.jpg")}
      />
    </>
  );
}

export default UNOOSA;

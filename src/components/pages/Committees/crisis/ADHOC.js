import React, { useState, useEffect } from "react";
import App from "../../../../App";
import CommitteePage2 from "../../../CommitteePage2";

function ADHOC() {
  return (
    <>
      <CommitteePage2
        src={require("../../../images/committees/crisis/gavel adhoc.jpg")}
        committee="ADHOC"
        skill="Skill Level: Novice"
        description1=" I have no hands, yet I can hold,"
        description2=" A precious thing worth more than gold."
        description3=" I carry whispers through the air,"
        description4=" Though you can't see me, I'm always there."

        description5=" In the morning, I greet your face,"
        description6=" But by noon, I've left no trace."
        description7=" What am I, that comes with light,"
        description8="And fades away come darkest night?"
        chair1="Christina Mueller"
        position1="Chair"
        bio11="Dear Delegates,"
        bio12="I am pleased to welcome you to the Crisis Ad-hoc at this year’s BearMUN. I am looking forward to meeting you all and presiding over what will surely be an exciting couple of days!"
        bio13="I am especially thrilled to be running this committee alongside Laia. At our collegiate conference, we were able to run an Ad-hoc General Assembly together and we currently serve as UCBMUN’s co-presidents! We hope to use all that we have learned from our years of collegiate Model U.N. to craft the perfect experience for you all."
        bio14="Model United Nations has been a defining aspect of my college experience. On a whim, I decided to apply for UCBMUN during the fall semester of my freshman year and have loved it ever since. As much as I love the travel and the debate, however, I am most grateful for the friendships I have found through this organization. I have met so many of my best friends through UCBMUN, and have made many core memories with them."
        bio15="This will be my third time staffing BearMUN — last year I chaired the UN Women Advanced General Assembly and the year prior I vice-chaired a crisis committee. This year, I am especially excited to be directing the Ad-hoc crisis. When we were deciding on the Ad-hoc topic, we wanted to choose something interesting and hands-on but also unique to Berkeley and the Bay Area. Alcatraz Island is something very central to this region and is also an enigma in itself. We were inspired by the 1962 Alcatraz escape and wanted to do something of a similar nature but we also wanted it to have a little spice. So our little twist was to create a dystopian society where everyone is a supervillain in their own right and have these brilliant minds battle it out for their freedom from Alcatraz 2.0, a new and improved version of the old monument. Most importantly, I hope you all have an amazing time in this committee and that you bring all the energy and positivity necessary to create an uplifting environment!"
        bio16="Yours,"
        bio17="Christina Mueller"
        photo1={require("../../../images/headshots/dias/christina.png")}
        chair2="Laia Malburet-Breuil"
        position2="Vice Chair"
        bio21="Hello, delegates,"
        bio22="I am pleased to welcome you to BearMUN’s second-ever Ad-Hoc. I am looking forward to meeting you all and presiding over what will surely be an exciting few days!"
        bio23="My name is Laia (she/her) and I will be serving as your chair. I am a political science and media studies major entering my fourth and last year at Cal. I joined UCBMUN my very first semester and have found my closest friends in the organization. Last semester, I was the Secretary-general of BearMUN 2023. Our past iteration was extremely thrilling, and I cannot wait to meet —and surprise— more of you. This year, I am the co-president of UCBMUN, which has given me an incredible chance to meet students from the entire world and support our members on the circuit. On the circuit, I have competed in GAs, Crisis bodies, and Specialized assemblies. I am always very excited to chair committees, as I love to observe dynamics between delegates, vivacious debates over complex topics, and bonding moments between delegates."
        bio24="I grew up in France but was born in Barcelona, and studying in the USA has allowed me to explore different cultures. In addition to MUN, I am the Vice President of our marketing consulting club UMA. Aside from my extracurricular activities, I love to read, though I have not had much opportunity to do so since coming to Cal. I also love to watch shows and movies, my favorites being Gilmore Girls, Gossip Girl, and Friends. I look forward to any and all recommendations you might have. "
        bio25="I am so excited to introduce you to a committee unlike any other; I encourage you to think outside the box, get creative, and take this committee in the direction YOU want to see. Take this wonderful opportunity to have fun and bond with your fellow delegates. As this BearMUN is the last I will staff, I look most forward to connecting with you all. I am certain you will enjoy what we have in store for you. Think of everything you have learned in MUN, and unlearn it, for our committee will be like no other before. Let the games begin!"
        bio26="Yours sincerely,"
        bio27="Laia Malburet-Breuil"
        photo2={require("../../../images/headshots/dias/laia.png")}
      />
    </>
  );
}

export default ADHOC;

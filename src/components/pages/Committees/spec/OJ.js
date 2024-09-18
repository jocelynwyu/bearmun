import React, { useState, useEffect } from "react";
import App from "../../../../App";
import CommitteePage from "../../../CommitteePage";

function OJ() {
  return (
    <>
      <CommitteePage
        src={require("../../../images/committees/spec/oj simpson.webp")}
        committee="Los Angeles County Superior Court: The Trial of OJ Simpson"
        skill="Skill Level: Novice"
        description="Welcome to the O.J. Simpson Trial Crisis Committee, where you will dive into one of the most notorious legal battles in modern history. As tensions run high and media scrutiny mounts, you will assume the roles of key figures, from legal teams to law enforcement, media, and even witnesses. The trial, which captivated the world, raises questions of justice, race, and celebrity influence. In this crisis committee, expect unexpected developments, media leaks, and moral dilemmas as you work to influence the outcome. Will justice prevail, or will public opinion sway the course of history? The power to shape the trial’s legacy is in your hands."
        chair1="Milad Brown"
        position1='Chair'
        bio11="Greetings delegates,"
        bio12="I'm Milad Brown, your Chair for the Los Angeles County Superior Court: The Trial of OJ Simpson. I am a junior at UC Berkeley majoring in Computer Science, so while I was not alive when this trial happened, I am always hearing about it in the news. I grew up in San Mateo, CA, very far from LA where it all went down, however, with this committee I hope we can all experience the thrill of the trial in real-time. When I'm not busy being a code monkey or practicing holding my breath, you can find me working on BEARMUN, so I am so excited to be here!"
        bio13="This trial rocked Hollywood and with OJ’s recent death, everything was brought up again. So let’s revisit the past with this committee and hope the glove fits this time! I am very excited for this committee and I know you will all be very creative and fun to work with."
        bio14="Best,"
        bio15="Milad Brown"
        bio16="Chair, Los Angeles County Superior Court: The Trial of OJ Simpson"
        photo1={require("../../../images/headshots/dias/milad.jpg")}
        chair2="Emma Solomon"
        position2='Vice Chair'
        bio21="Dear Delegates,"
        bio22="My name is Emma Solomon, and as your chair, it is my absolute pleasure to welcome you to the Los Angeles County Superior Court: The Trial of OJ Simpson!"
        bio23="I have been involved in Model United Nations for a total of seven years now — beginning with my freshman year of high school and joining UCBMUN during my sophomore year at UC Berkeley. Although my senior year in college will serve as my final year within the extracurricular, there is no better beginning to the year than chairing this committee. "
        bio24="I am currently a senior at Cal studying Political Science with a double minor in Journalism and History. Outside of MUN, my campus involvement also includes membership in the Daily Californian Newspaper and the Sigma Kappa Sorority. I also work for the Goldman School of Public Policy, serving as a student assistant within Sec. Janet Napolitano’s Center for Security in Politics. While my post-grad plans are nowhere near solidified, I hope to combine these interests into an eventual career in Press Law — a topic heavily relevant in the story of this Trial. When I am free, I am an avid viewer of Vanderpump Rules and anything else on Bravo. I also enjoy hiking with my mom and exploring the outdoors in hopes of checking off many National Parks on my bucket list."
        bio25="I am looking forward to joining you all for what will be an exciting committee."
        bio26="Best,"
        bio27="Emma Solomon"
        photo2={require("../../../images/headshots/dias/emma.png")}
      />
    </>
  );
}

export default OJ;

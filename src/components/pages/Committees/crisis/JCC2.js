import React, { useState, useEffect } from "react";
import App from "../../../../App";
import CommitteePage from "../../../CommitteePage";

function JCC2() {
  return (
    <>
      <CommitteePage
        src={require("../../../images/committees/crisis/jcc cbi.jpg")}
        committee="JCC: Central Bureau of Investigation"
        skill="Skill Level: Novice"
        description="Coming Soon!"
        chair1="Arhant Ghanta"
        position1='Chair'
        bio11="Dear delegates,"
        bio12="It is with great excitement that I welcome you to the World Health Organization General Assembly Committee at UCBMUN XXIX! My name is Arhant and I am a fourth-year student double majoring in Molecular & Cellular Biology and Public Health, along with a minor in Political Economy. I have always loved both STEM and the humanities, and especially enjoy studying current events in global culture and politics in my free time."
        bio13="Outside of MUN, I am involved in genome editing research involving CRISPR-Cas proteins at the Innovative Genomics Institute here at Berkeley. I have also served on the board of two pre-health volunteering clubs on campus, the Kidney Disease Screening and Awareness Program (KDSAP) and Volunteer Health Interpreters Organization (VHIO).  In my free time, I enjoy reading, biking, cooking, and learning languages!"
        bio14="I wish you all the best of luck and cannot wait to meet you all in Berkeley in November. Please do not hesitate to reach out to me or Harsh with any questions!"
        bio15="Sincerely,"
        bio16="Arhant Ghanta"
        // bio17="Saranyu Nel"
        photo1={require("../../../images/headshots/dias/arhant.jpeg")}
        chair2="Harsh Kumbhat"
        position2='Crisis Director'
        bio21="Hello fellow LARP enthusiasts! Welcome to the JCC!"
        bio22="I'm your Crisis Director, Harsh. I'm a senior at UC Berkeley studying Film with a minor in Creative Writing. I'm originally from Kolkata, India, and have been competing at and staffing Model UN conferences for almost 9 years now (idk why either). Outside of Model UN, I spend my time devouring books, watching an ungodly amount of movies, and occasionally touching grass. Within UCBMUN, I've served as the Secretary General for our collegiate conference, as well as trained our delegates for competition for the past four years. I'm looking forward to having you all in Berkeley. "
        bio23="Best,"
        bio24="Harsh Kumbhat"
        // bio25="Jade Mon"
        // bio26="Crisis Director, JCC: Adani Group"
        photo2={require("../../../images/headshots/dias/harsh.png")}
      />
    </>
  );
}

export default JCC2;

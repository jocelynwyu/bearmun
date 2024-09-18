import React, { useState, useEffect } from "react";
import App from "../../../../App";
import CommitteePage from "../../../CommitteePage";

function Legal() {
  return (
    <>
      <CommitteePage
        src={require("../../../images/committees/ga/6th legal biotech.jpg")}
        committee="6th Legal: Implications of Biotechnology and Biosecurity"
        skill="Skill Level: Novice"
        description="Delegates, welcome to UC Berkeley! From the Calvin Cycle to CRISPR, this university has played
        a critical role in discovering the natural patterns that govern the nature of life itself. At
        BEARMUN, you’ll have the chance to discuss the applications of these discoveries first hand.
        Today’s biotechnologies are not growing in steps, but rather in great leaps and
        bounds—whether we’re discussing climate change, national defenses, or world hunger &
        disease, these tools have potential for both incredible health and harm. How can we ensure
        that this rapidly changing field is effectively regulated without hindering scientific
        development? How can we make sure biotechnology is accessible not just to wealthy
        superpowers, but to countries who need them the most? We’re thrilled to welcome you to the
        BEARMUN 6th Legal—see you soon!"
        chair1="Adi Lane"
        position1="Chair"
        bio11="Welcome delegates!"
        bio12="My name is Adi Lane (he/him/his), and I am so excited to be your Chair for 6th Legal at
        BEARMUN 2024! I’m a third-year student at Berkeley majoring in Molecular and Cell Biology
        as well as Public Health, so the implications of this committee are a subject dear to my heart.
        How will you be able to balance innovation with communication, ensuring that your policies
        grant equitable access to new systems without reducing efficacy in the process?"
        bio13="As you prepare for committee, remember not to examine the world of biotechnology in a
        vacuum; effective change must incorporate a knowledge of community well-being beyond just
        your medical “bugs and drugs”--keep other social determinants of health in mind! I’ll be looking
        for thoughtful, holistic, and evidence-based suggestions to make sure we apply these
        technologies for maximal benefit while mitigating risk. From a behavioral standpoint, I’ll be
        looking for delegates who can effectively negotiate and cooperate with parties that may have
        opposing viewpoints–”power delegates” that yell over committee or disregard others will be
        highly frowned upon."
        bio14="A little about myself: I’ve lived in Palo Alto since moving from Gurugram when I was five, but
        try to go back every year (I’m currently writing this just after landing in Delhi). I was never a
        part of Model United Nations in high school (go Gunn!), but I’m so happy that I joined UC
        Berkeley’s MUN team in my freshman spring semester—the creativity, talent, and friendliness of
        everyone on the team is incredible. I’m also the Secretary-General for our February UCBMUN
        collegiate conference in San Francisco, so I know how hard Sara, Anna, and the rest of your
        wonderful BEARMUN secretariat worked to make this conference spectacular."
        bio15="Outside of Model UN, I’m a member of one of Berkeley’s premed fraternities, volunteer at a
        local elementary school, and help fundraise with the school’s Fighting Cancer at Berkeley club.
        Otherwise, I’m probably walking through Berkeley’s dinosaur exhibits, hiking along the Bay’s
        many trails, or sleeping under the sun on Memorial Glade. Feel free to email me at
        adinathlane@berkeley.edu with questions–we can’t wait to meet you!"
        bio16="Adinath Paul Wayne Lane"
        photo1={require("../../../images/headshots/dias/Adi.jpg")}
        chair2="Gargee Piplani"
        position2="Vice Chair"
        bio21="Dear Delegates,"
        bio22="My name is Gargee Piplani and I am absolutely delighted to serve as your chair for BEARMUN
        6th Legal. My interest in this topic stems from a philosophy class I took in my first semester of
        college – we discussed morality in many contexts, including biotechnology. I had never
        previously questioned the ethics of this field, especially considering how helpful the
        advancements have been to humans, and was drawn to the complexity behind these constantly
        developing technologies. I am excited to see how you guys tackle this intricate topic, and
        diplomatically resolve an issue that our world is facing today."
        bio23="My MUN career began in my sophomore year of high school and I never abandoned the activity
        since then. Most of my coursework does not touch on international relations or policy, which I
        loved to learn about, so I made it a point to pursue these interests by joining MUN in college. I
        have been competing on the circuit since my first semester on campus, primarily in GA
        committees, but with conferences, I served as the Chief of Staff External for UCBMUN and a vice
        chair for Hunger Games at BEARMUN last year."
        bio24="I'm originally from the East Bay, but spent a lot of my early life moving around places including
        India, NYC, Ohio, and Michigan. Currently, I am a junior at UC Berkeley studying Business
        Administration, Data Science, and Computer Science. Outside of MUN, I am also a part of a
        hedge fund and Greek life on campus. In my free time, I love going on walks, enjoying a good
        matcha, cheering on the Golden State Warriors, and side questing around the Bay Area."
        bio25="I look forward to an exciting weekend with everyone and welcoming you all to our wonderful
        campus!"
        bio26="Gargee Piplani"
        photo2={require("../../../images/headshots/dias/gargee.png")}
      />
    </>
  );
}

export default Legal;

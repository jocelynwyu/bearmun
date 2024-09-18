import React, { useState, useEffect } from "react";
import App from "../../../../App";
import CommitteePage from "../../../CommitteePage";

function JCC1() {
  return (
    <>
      <CommitteePage
        src={require("../../../images/committees/crisis/jcc adani.jpg")}
        committee="JCC: Adani Group"
        skill="Skill Level: Novice"
        description="In 1988, Gautam Adani founded one of India’s largest conglomerates ever - The Adani Group. From humble beginnings, it quickly skyrocketed to the top, expanding into various different sectors. Today, the Adani Group has subsidiaries in numerous industries, including energy, mining, food processing, and even sports teams. However, in early 2023, American short-seller Hindenburg Research released a report claiming the firm had engaged in stock manipulation and accounting fraud, among other crimes. The company lost more than $104 billion in market cap following this, and has been under numerous investigations by India and the US. With the Central Bureau of Investigation beginning to initiate investigations into these accusations of corruption and fraud, the company spiraled into a frenzy. This committee will begin at the start of this blow, and will aim to steer the company in a better direction. Members of the board will be tasked with serving Adani's best interest, while also doing their best to expand their own personal and professional influence."
        chair1="Akash Mahajan"
        position1='Chair'
        bio11="Greetings Delegates, "
        bio12="My name is Akash Mahajan, I am a senior studying business and data science. This is my 7th and last year participating in Model UN. I’m super excited to chair the Adani committee, we previously ran a similar committee in our collegiate conference and I think it will be a great opportunity for those looking to get better at crisis committees."
        bio13="Outside of UCBMUN, I’m part of the Berkeley Finance Club, where I teach an introductory investment banking curriculum and plan to pursue a career in finance. I love to try new restaurants, attend concerts, and watch/play sports. Feel free to reach out with any questions!"
        bio14="Best,"
        bio15="Akash Mahajan"
        // bio16="Best,"
        // bio17="Saranyu Nel"
        photo1={require("../../../images/headshots/dias/akash.png")}
        chair2="Jade Mon"
        position2='Crisis Director'
        bio21="Greetings Delegates,"
        bio22=" My name is Jade (she/her/hers) and I'm honored to be your Crisis Director for BEARMUNXXIV JCC Adani Group. I'm a junior from the Bay Area, double majoring in computer science and data science. I joined UCBMUN in my first semester at Cal, having previously served on Officer Board as the vice president of finance. In my free time, I enjoy biking, playing the piano and shooting hoops."
        bio23="The Adani Group is one of India's largest multinational conglomerates, with operations in more industries than I can count. Founded by Gautam Adani in 1988, the group is headquartered in Ahmedabad, India. Its primary business sectors range from energy to agriculture to defense. With so many industries, so many people, and a little bit of controversy, this will be a committee to remember! I cannot wait to work with everyone and I hope everyone has a great time!"
        bio24="Best,"
        bio25="Jade Mon"
        bio26="Crisis Director, JCC: Adani Group"
        photo2={require("../../../images/headshots/sec/jade.png")}
      />
    </>
  );
}

export default JCC1;

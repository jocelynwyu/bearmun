import React, { useState, useEffect } from "react";
import App from "../../../../App";
import CommitteePage from "../../../CommitteePage";
import IAEABG from "../../../guides/IAEA.pdf";


function IAEA() {
  return (
    <>
      <CommitteePage
        src={require("../../../images/committees/ga/iaea nuclear energy.jpg")}
        committee="IAEA: Peaceful Use of Nuclear Energy"
        skill="Skill Level: Novice"
        description="Welcome to the UN International Atomic Energy Agency! This committee will focus on nuclear
        energy in the modern setting with a focus on the decision making behind adopting nuclear
        power. The committee will focus on the following two topics: nuclear disarmament and peaceful
        uses of nuclear energy. With the power to destroy the world, nuclear proliferation has led to the
        defining moments of international destruction seen within the history of mankind. As states
        begin to arm themselves with nuclear weapons as a mode of international bargaining, the
        balance between threat and negotiation remains subtle. On the other hand, development of
        nuclear energy has led to some of the most sustainable practices of energy production.
        Overshadowed largely due to the historical disasters surrounding nuclear energy, it remains a
        minority portion of the energy sector of the world today. Delegates will be expected to bring
        solutions inviting international cooperation and define what the ideal future of nuclear energy will
        shape out to be."
        guide={IAEABG}
        chair1="Minyoung Kim"
        position1="Chair"
        bio11="Hello delegates! My name is Minyoung Kim and I am so excited to be chairing Bearmun’s IAEA
        general assembly. I am a junior majoring in Political Science and minoring in Public Policy. Prior
        to this year, I have served as the chair for the Cuban Crisis in last year’s Bearmun as well as the
        Chief of Staff Internal for UCBMUN XXVIII. As a General Assembly delegate myself, I am
        excited to co-chair this committee with my good friend Josephine. We are both expecting a
        talented group of minds to bring real world solutions through the power of intuitive policy making
        and collaborative delegating. I cannot wait to see what ideas will be shared in the upcoming
        future."
        bio12="Best,"
        bio13="Minyoung Kim"
        
        photo1={require("../../../images/headshots/dias/minyoung.png")}
        chair2="Josephine Yasuda"
        position2="Chair"
        bio21="Distinguished Delegates,"
        bio22="Welcome to BearMUN 2024! My name is Josephine Yasuda and I am honoured to serve as the
        Vice Chair of our International Atomic Energy Agency (IAEA) committee this year. I am a senior
        political science major at UC Berkeley and am pursuing a career in environmental sustainaility
        and legal studies."
        bio23="This year will mark my seventh year of Model UN. Through MUN I have not only found a variety
        of interesting topics but also a community in which we continuously challenge each other in the
        best of ways. This year will be my first time vice chairing for BearMUN 2024 and I am beyond
        excited for the opportunity our IAEA committee will present."
        bio24="Our committee holds a significant and influential position in today's society as we traverse a
        global landscape that is progressively placing greater importance on the concept of green
        energy. The world's attention is being drawn more and more to environmentally friendly and
        sustainable practices, in an effort to combat the ongoing issues related to energy and energy
        production. Our committee's involvement in these efforts is not only prevalent but also pivotal. I
        hope that your time with here provokes a myriad of thoughtful and engaging debates while also
        curating an extensive understanding of our topics at hand."
        bio25="I am excited to see what you all have in store for our committee, and am looking forward to
        meeting you all. Have a wonderful time at BearMUN, and feel free to reach out if you have any
        questiI look forward to your creativity, and passion, and can not wait to welcome you this upcoming
        conference, and welcome to IAEA."
        bio26="Sincerely,"
        bio27="Josephine Yasuda"
        photo2={require("../../../images/headshots/dias/josie.png")}
      />
    </>
  );
}

export default IAEA;

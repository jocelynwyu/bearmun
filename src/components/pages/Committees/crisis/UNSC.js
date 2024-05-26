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
        description=" Sophia Martinez (she/her) is an English major from Orange County, California, and will be a sophomore this upcoming academic year. She joined Berkeley's Model United Nations club to better her speaking abilities and become more involved with this campus. With how many great people she has found through this club, she wanted to become more involved as a new member and join the Secretariat for BEARMUN! Some other groups she is involved with are Berkeley PAD and the ASUC Student Union, where she works as a lead barista. Outside of academics, she loves listening to music (Fiona Apple and Lana Del Rey are some of her favorites!) and playing tennis with her coworkers. She is incredibly excited to work with everyone and ensure BearMUN is fun and successful for all groups involved.
                bio approaching?"
        chair1="Sameera"
        position1='Chair'
        bio1=" Sophia Martinez (she/her) is an English major from Orange County, California, and will be a sophomore this upcoming academic year. She joined Berkeley's Model United Nations club to better her speaking abilities and become more involved with this campus. With how many great people she has found through this club, she wanted to become more involved as a new member and join the Secretariat for BEARMUN! Some other groups she is involved with are Berkeley PAD and the ASUC Student Union, where she works as a lead barista. Outside of academics, she loves listening to music (Fiona Apple and Lana Del Rey are some of her favorites!) and playing tennis with her coworkers. She is incredibly excited to work with everyone and ensure BearMUN is fun and successful for all groups involved.
        bio approaching?"
        photo1={require("../../../images/committees/ga/iaea nuclear energy.jpg")}
        chair2="Joanna"
        position2='Vice Chair'
        bio2=" Sophia Martinez (she/her) is an English major from Orange County, California, and will be a sophomore this upcoming academic year. She joined Berkeley's Model United Nations club to better her speaking abilities and become more involved with this campus. With how many great people she has found through this club, she wanted to become more involved as a new member and join the Secretariat for BEARMUN! Some other groups she is involved with are Berkeley PAD and the ASUC Student Union, where she works as a lead barista. Outside of academics, she loves listening to music (Fiona Apple and Lana Del Rey are some of her favorites!) and playing tennis with her coworkers. She is incredibly excited to work with everyone and ensure BearMUN is fun and successful for all groups involved.
        bio approaching?"
        photo2={require("../../../images/committees/ga/iaea nuclear energy.jpg")}
      />
    </>
  );
}

export default UNSC;

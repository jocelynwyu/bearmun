import React, { useState, useEffect } from "react";
import App from "../../../../App";
import CommitteePage from "../../../CommitteePage";

function Regional() {
  return (
    <>
      <CommitteePage
        src={require("../../../images/committees/ga/nato south china sea.jpg")}
        committee="NATO - South China Sea: Territorial Disputes"
        skill="Skill Level: Novice"
        description="The North Atlantic Treaty Organization (NATO) is a military alliance of 30
        European states and 2 North American states. Originally founded on April 4, 1949 the
        alliance would later go on to rival the Warsaw Pact throughout the rest of the cold war.
        And since its founding, no NATO member state has ever attacked another member
        state. The foundational principle of NATO is article 5, which states that an attack against
        one member is an attack against all member states. Although NATO never went to war
        with the Warsaw Pact, several pro-democratic revolutions in eastern europe between
        1989-1991 would lead to the dissolution of the Warsaw Pact. Nonetheless, NATO
        continued to exist. And after the September 11 attacks of 2001, article 5 would be
        invoked for the first time ever, jumpstarting the US-led invasion of Afghanistan. Apart
        from this war, NATO mostly operated by holding joint military exercises together and
        sharing military technology. The organization may also make decisions on the shipment
        of military aid to other countries like Ukraine, the decision on where to position nuclear
        ICBMs, and of course the decision to admit prospective member states."
        chair1="Saranyu Nel"
        position1='Chair'
        bio11="Dear esteemed delegates,"
        bio12="Welcome to a Model UN simulation of the North Atlantic Treaty Organization. My name
        is Saranyu Nel and I will be one of your chairs this year. Congratulations on taking a step into
        your Model UN journey. You will quickly come to learn that Model UN is a very stressful but
        incredible experience, much like a good movie. Although this is a simulation of international
        affairs, your speeches are real, your debates are real, and the connections you’ll form with your
        fellow delegates at the end of this conference will be real. This is perhaps the most important
        gift of Model UN, and why it’s why I have done it since 2017."
        bio13="I choose to chair NATO because in recent years this organization has become more
        important in light of recent events. Much like the United Nations, I would argue that the primary
        function of NATO is to maintain peace and not war. Although it’s well known that NATO’s design
        functions as a deterrent from outside states attacking a member state, it also prevents member
        states from attacking each other. As you begin your research by reading this background guide,
        I hope you are able to pick up on the importance of collective action to maintain peace."
        bio14="I am a fourth year student at Berkeley double majoring in psychology and molecular and
        cell biology with an emphasis in neurobiology. I have a keen interest in visiting museums,
        over-managed city parks, and concerts."
        bio15="Good luck!"
        bio16="Best,"
        bio17="Saranyu Nel"
photo1={require("../../../images/headshots/dias/Saranyu.png")}
        chair2="Sam Wang"
        position2='Chair'
        bio21="Dear delegates,"
        bio22="While this committee is serious, I look forward to seeing your creative solutions to the problems we’ll propose. I also expect collaboration with your fellow delegates. And finally, I hope you’ll learn nuance. You must find a way to advance your character’s interests through solutions that work for everyone. "
        bio23="I joined Model UN to continue my public speaking arc from high school speech and debate, but ended up finding much more. I’ve made new friends through the club, I’ve loved traveling during conferences, and I’ve found MUN committees very interesting. I love hearing wildly creative ideas from other delegates and the cooperative aspect in MUN, which is a change from academic debate. This conference, I am a part of secretariat as Director of Business where I secure sponsorships. In addition, I serve on secretariat for UCBMUN, our college conference, as well. "
        bio24="Outside of MUN, I am a sophomore studying computer science at UC Berkeley. I love writing data-driven articles for the Daily Californian, coding games and AI algorithms, and creating other cool coding/data related projects. I also work as a researcher in Berkeley’s School of Education and a college admissions mentor, hoping to improve student outcomes. My hobbies include playing the violin, reading, and eating (particularly Japanese food). "
        bio25="Looking forward to meeting you all and chairing this committee! "
        bio26="Best,"
        bio27="Sam Wang"
        photo2={require("../../../images/headshots/dias/sam.png")}
      />
    </>
  );
}

export default Regional;

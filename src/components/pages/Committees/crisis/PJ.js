import React, { useState, useEffect } from "react";
import App from "../../../../App";
import CommitteePage from "../../../CommitteePage";

function PJ() {
  return (
    <>
      <CommitteePage
        src={require("../../../images/committees/crisis/percy jackson.webp")}
        committee="Percy Jackson — The Heroes of Olympus"
        skill="Skill Level: Novice"
        description="Look, you didn't want to be a half blood. But if you're reading this because you think you might be one, then we recommend you keep reading. As Camp Jupiter marches on Camp Half Blood, and the Seven on their quest to Greece, you are one of the lucky demigods chosen for your camp's war counsel. As the final battle looms forth, the political
        landscape and divine conflicts become only more pressing. It's your sworn duty to defeat the other camp, but who is the greatest enemy? The Giants? Gaea? The other camp? Or even your fellow campers? As you navigate the new terrain, just remember: there is always a way out for those clever enough to find it. And if you kind of try to kill one another
        in a duel to the death... well, you tried the diplomatic approach. At least there's nothing like watching your relatives fight. Legion, cuneum formate! And Greeks, let's, um, fight stuff!"
        chair1="Jocelyn Yu"
        position1='Chair'
        bio11="Dear delegates,"
        bio12="My name is Jocelyn Yu, and I'm excited to welcome you to Percy Jackson — The Heroes of Olympus. Percy Jackson was possibly the first book I've ever read, and it's what shaped my childhood, literature interests, and really, just how I consume media.
        While the original series, to me, is near perfect, The Heroes of Olympus itself had, to me, a multitude of missed opportunities. The final battle with Gaea was especially something I found lacking, and I'm excited to see what you all will bring to the new turn of events!"
        bio13="This is my second semester in collegiate Model UN, but I've been participating in Model UN since high school, where I helped host SFMUN at Lowell. In high school, I also participated in Parliamentary debate, and this spring, I helped staff UCBMUN's Cuban Crisis Committee. Outside of this committee, I serve on the BearMUN Secretariat as the Director of Technology."
        bio14="I'm currently a junior majoring in Computer Science, but history (and English!) will always be my first love, especially Greco-Roman history and mythology. Thus, I'm excited to see all the concepts you bring to the table, outside of just the Percy Jackson world, whether it be the Age of Heroes or reign of Titans."
        bio15="Good luck, delegates, but just remember: where's the glory in repeating what others have done?"
        bio16="Best,"
        bio17="Jocelyn Yu"
        photo1={require("../../../images/headshots/sec/jocelyn.png")}
        chair2="Anousha Athreya"
        position2='Vice Chair'
        bio21="Hey all,"
        bio22="I'm Anousha Athreya, and I'm beyond excited to be your Vice Chair for Percy Jackson — The Heroes of Olympus this year! I'm a third-year majoring in Electrical Engineering and Computer Science and Data Science, with a minor in Public Policy. In the past, I served as a Chair for the My Way Killings Committee, on UCBMUN XXVIII Secretariat as the Director of Technology, and currently serve as the Generalized Head Delegate for the travel team. "
        bio23="At Berkeley, I currently work on security research, and serve on the Computing and Information Technology Academic Senate committee. I really enjoy watching mystery & detective shows, so let me know if you have any recommendations."
        bio24="Before and even in my current major, I have always loved to relax by reading science fiction, including Percy Jackson! With the new TV show out, we thought this would be a fun way to remember our childhood classic book series. I am so excited for this committee and I know all of you will be able to live up to the characters, making equally exciting and entertaining choices. I can't wait to see you all, good luck, and I look forward to meeting you next year!"
        bio25="Looking forward to meeting you all and chairing this committee! "
        bio26="Best,"
        bio27="Anousha Athreya"
        photo2={require("../../../images/headshots/dias/anousha.png")}
      />
    </>
  );
}

export default PJ;

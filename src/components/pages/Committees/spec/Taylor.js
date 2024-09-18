import React, { useState, useEffect } from "react";
import App from "../../../../App";
import CommitteePage from "../../../CommitteePage";

function Taylor() {
  return (
    <>
      <CommitteePage
        src={require("../../../images/committees/spec/taylor swift presidential campaign.jpg")}
        committee="Taylor Swift’s Presidential Campaign"
        skill="Skill Level: Novice"
        description="It’s 2027 and legendary pop star Taylor Swift is hitting the campaign trail for none other than the 2028 U.S. Presidential Election. In this dynamic and imaginative session, delegates will take on various roles as a collection of Taylor Swift’s collaborators, friends, advisors, and even enemies as they navigate the complexities of a celebrity candidacy, exploring policy proposals, media strategies, and public perception. From her stance on key national issues to the influence of her massive fanbase, this committee will critically analyze the impact of Swift's bid for the highest office. Join us for a thought-provoking debate that merges the realms of governance and entertainment, challenging participants to envision the future of American leadership in the age of celebrity influence."
        chair1="Olivia Lapinsky"
        position1="Chair"
        bio11="Dear Delegates,"
        bio12="My name is Olivia Lapinsky and as one of your Co-Chairs, I am so excited to welcome you to the Taylor Swift Presidential Campaign committee at BearMUN this year! As a diehard Swiftie, this is my dream committee to run and I look forward to a weekend filled with singing and Taylor Swift puns! Whether I’m blasting Taylor Swift alone in my room or at listening parties with my friends, her music has a very special place in my heart, with my favorite albums being folklore and evermore. This committee provides an opportunity to bridge my love of Taylor Swift with Model UN as it delves into the realm of politics and political campaigning, which is especially pertinent given that it is an election year. As a result, I hope your weekend will turn out to be both fun and informative."
        bio13="I am a junior at Berkeley studying Political Economy and Public Policy originally from the Seattle area. Although I did not compete in Model UN until college, I was very involved with my high school Mock Trial team, where I developed my love for debate and civic discourse. That same passion is what drew me to Model UN during the spring of my freshman year of college. Since then, I have competed in a variety of committees on the collegiate circuit, but specialized bodies are definitely my favorite, which is why I am so excited to chair one this weekend! I have also staffed both BearMun as a Vice Chair for our Hogwarts committee last year and our collegiate conference, UCBMUN, as an Assistant Crisis Director and as Chief of Staff Generalized. Currently, I serve as the Director-General for the next iteration of UCBMUN, UCBMUN XXIX! UCBMUN has become a huge part of my life at Berkeley, and I hope that after this weekend, you will be excited to continue participating in this activity!"
        bio14="This committee offers a perfect blend of silliness and serious debate. Of course, Taylor Swift is not actually running for President, giving you a lot of creative freedom in how you approach this topic. However, this committee touches on the serious, real-world topics of gender inequality and stereotypes, the structure and flaws of the American political system, American celebrity culture, and what it means to have power in society. As such, I encourage you to approach this committee ready to discuss these issues in the context of this fictional presidential campaign."
        bio15="Best,"
        bio16="Olivia Lapinsky"
        bio17="Co-Chair, Taylor Swift’s Presidential Campaign"
        photo1={require("../../../images/headshots/dias/Olivia.JPG")}
        chair2="Audrey Watson"
        position2="Chair"
        bio21="Dear Delegates, "
        bio22="I am honored to welcome you to be a part of Taylor Swift’s Presidential Campaign (MUN Version). My name is Audrey Watson and I am so excited for you all to join me in this committee that Olivia, Marvin, and I worked hard to bring to life! I am currently a second-year student at UC Berkeley studying chemistry. I only joined UCBMUN last semester, however, I did Model UN all throughout high school and loved it so I was looking for a way to continue that passion for debate into college! Outside of MUN you will probably find me either behind my camera taking photos for my portfolio, or curled up with a blanket and a good book, or listening to Taylor Swift on repeat."
        bio23="In this committee, we will step into an imaginative scenario where global superstar Taylor Swift embarks on a campaign for the presidency of the United States. This unconventional topic provides a platform to examine a variety of significant issues, from policy-making and media influence to the dynamics of celebrity endorsements and public engagement in the political arena."
        bio24="As a Swiftie myself, I am thrilled to be able to co-chair this committee and see how we can plan for the eventual takeover of Miss Taylor Alison Swift while also relating these topics to bigger issues that are facing our world. I am really looking forward to meeting all of you and discussing the important global issue that is Taylor Swift’s eminent reign over the United States!"
        bio25="Best,"
        bio26="Audrey Watson"
        bio27="Co-Chair, Taylor Swift Presidental Campaign"
        photo2={require("../../../images/headshots/dias/Audrey.jpg")}
      />
    </>
  );
}

export default Taylor;

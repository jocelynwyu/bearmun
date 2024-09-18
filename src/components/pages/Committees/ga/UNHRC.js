import React, { useState, useEffect } from "react";
import App from "../../../../App";
import CommitteePage from "../../../CommitteePage";

function UNHRC() {
  return (
    <>
      <CommitteePage
        src={require("../../../images/committees/ga/unhrc refugees.jpg")}
        committee="UNHRC: Healthcare Access for Refugee Women and Children"
        skill="Skill Level: Novice"
        description="Welcome to UNHRC! Healthcare access for refugee women and children is one of the biggest global challenges today. From the Rohingyas in Bangladesh to Palestinians in Egypt to refugees from the Democratic Republic of the Congo, refugees face limited access to essential medical services. Overcrowded camps, insufficient infrastructure, and inadequate funding all contribute to an appalling lack of medical care. Cultural and language barriers further complicate their ability to communicate context and receive timely care. Additionally, the trauma of displacement often exacerbates health issues, including mental health conditions, which are frequently overlooked. Humanitarian organizations and host countries struggle to meet the overwhelming demand, leaving many refugees without the healthcare they desperately need. We expect delegates to be equipped with an understanding of healthcare solutions and political tensions to bring forth comprehensive and long-lasting solutions."
        chair1="Nishita Belur"
        position1="Chair"
        bio11="Greetings delegates,"
        bio12="Welcome to UNHRC! My name is Nishita Belur (she/her), and I am excited to be your
        Chair for the United Nations Security Council. I am a senior from the Bay Area studying
        Neurobiology and Public Health, and I have been on the UCBMUN travel team since the fall of
        my freshman year. Throughout these years, I have staffed conferences, competed on both coasts
        and had a (short-lived) tenure as General Assembly Head Delegate. Outside of MUN, I research
        substance abuse at UCSF, read fantasy books, and obsessively binge cooking competition shows."
        bio13="Our aim is to foster a respectful, engaging, and intellectually stimulating environment
        where you can develop your skills in research and critical thinking. Remember that the ultimate
        goal of the UNHRC is to protect and promote human rights for all individuals, and your
        contributions in this committee can simulate the impact that international cooperation can
        achieve. As a Public Health major, I really look forward to seeing the connections you all make
        from human rights to important public health matters like sanitation, water rights, and
        availability of medicines/vaccines. All three are often disrupted by conflict, tensions, and war
        and discussing these demonstrates a well rounded understanding of our topics."
        bio14="We look forward to meaningful debates on the political, economic, and environmental
        policies necessary to address the complex situations UNHRC often encounters. I am so excited
        to meet all of you, and I hope you all have a great conference!"
        bio15="Nishita Belur"
        // bio16="Chair, This is Guinea-Bissau Crazy: United Nations Security Council"

        photo1={require("../../../images/headshots/dias/nishita.png")}
        chair2="Sameera Menon"
        position2="Vice Chair"
        bio21="Dear Delegates,"
        bio22="I am ecstatic to welcome you to BearMUN’s UNHRC committee! I am especially thrilled
        to be spending the next few days hearing your perspectives on a topic that has increasing global
        prevalence, and is a passion of mine."
        bio23="A little about myself- I am from Orange County, California and am a third-year at
        Berkeley, pursuing Public Health on the premedical track. In addition to chairing for BearMUN,
        I am the Under-Secretary General of General Assemblies for our upcoming collegiate
        conference: UCBMUN XXIX. Like many of you, I am relatively new to the world of MUN.
        While I joined UCBMUN to explore my interest in health policy, I stayed for the thrill of
        competing, excitement for leading, and feeling of community it has fostered. Whether this is
        your first or fifteenth conference, I hope you can leave BearMUN MMXXIV with some of these
        sentiments."
        bio24="Outside of MUN, I can be found thrifting trinkets, going for night drives, or eating sushi.
        I am sure that many of you share these interests, and I cannot wait to swap music
        recommendations in between committee sessions! One of my true passions in life, in addition to
        The Neighborhood, is expanding health equity, especially within vulnerable communities."
        bio25="The United Nations Human Rights Council plays a critical role in furthering the overall
        goal of the UN: promoting global well-being. Too often, people are encouraged to look towards
        their individual governments in ensuring their reception of basic privileges. But what happens
        when a person no longer has a government to look to? Refugee rights are a highly contested,
        relevant, and multifaceted topic. I encourage you to think critically about the unique landscape of
        healthcare in the context of asylum-seekers, and why seemingly simple solutions may not be so
        feasible. With this in mind, please know that I am beyond intrigued to hear your diverse and
        fresh takes on a decades-old issue, and hope you can go back home with a newfound or fortified
        interest in human rights. Welcome to UNHRC!"
        bio26="Sincerely,"
        bio27="Sameera Menon"
        photo2={require("../../../images/headshots/dias/sameera.png")}
      />
    </>
  );
}

export default UNHRC;

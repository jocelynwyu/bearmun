import React, { useState, useEffect } from "react";
import App from "../../../../App";
import CommitteePage from "../../../CommitteePage";

function Tables() {
  return (
    <>
      <CommitteePage
        src={require("../../../images/committees/spec/les grandes tables du monde.jpg")}
        committee="Les Grandes Tables du Monde"
        skill="Skill Level: Novice"
        description="Welcome to Les Excellentes Cuisines du Monde, a global organization composed of the finest
        chefs and culinary talent from across the planet. The menu for this weekend will feature the
        relevancy of the Michelin Guide. Our starter will be celebrity chef culture as a whole, and if it is
        healthy to the industry. Controversy of the Michelin Guide will compose the entree, and will be
        sure to not leave anyone hungry. And finally, for dessert, a question that only the finest in the
        industry can answer: what defines fine dining? Get your palates ready chefs for a weekend full of
        flavor and flair as we take a deep dive into the culinary world. Bon appétit!"
        chair1="Jackson Englar-Carlson"
        position1="Chair"
        bio11="Bonjour and Welcome Delegates,"
        bio12="My name is Jackson Englar-Carlson, and I am more than excited to be one of your chairs for
        Caviar, Champagne, and Truffles: Excellentes Cuisines du Monde! This committee is special to
        me, as my culinary journey has been rather unique, and food has played a very big part in my
        life. In my experiences, I have had the opportunity to dine at some of the finest restaurants in the
        world, many of which are featured in the Michelin Guide (our focus for this weekend). The
        Guide holds a special place in the culinary world, 1 star meaning “a very good restaurant”, 2
        stars meaning “excellent cooking that is worth a detour”, and 3 stars signifying “exceptional
        cuisine that is worth a special journey”. However, should these stars really hold such an
        important place?"
        bio13=" This is my third (ok technically 2 1⁄2) year of being in UCBMUN, having joined in spring 2023.
        Currently, I also serve in the club as the crisis committee Head Delegate! This is my first time
        serving as a chair, however in BearMUN 2023 I was the crisis director for the Harry Potter
        committee, along with serving as the crisis director for a UCBMUN Somaliland committee."
        bio14="I’m currently a junior double majoring in political science and public health, with a double minor
        in public policy and city planning! My current emphasis is on federal healthcare policy, along
        with pharmaceutical policy. I’m from Southern California, Huntington Beach specifically, so
        living in the Bay has been an amazing experience (especially when it comes to certain types of
        food). Away from UCBMUN, you can probably find me exploring for new food to try (my
        favorite is Italian and Japanese), working in an internship of some sort, and just wandering San
        Francisco. I’m looking forward to welcoming you to San Francisco, and I’m hoping for a
        fantastic weekend of food!"
        bio15="Best,"
        bio16="Jackson Englar-Carlson"
        photo1={require("../../../images/headshots/dias/Jackson.jpg")}
        chair2="Alana Basmajian"
        position2="Vice Chair"
        bio21="Hello fellow food lovers!"
        bio22="Welcome to BearMUN 2024. My name is Alana Basmajian and I will be one of your
        co-chairs for this committee! I am a sophomore double majoring in global studies and social
        welfare with a minor in German. I am from LA and took a gap year in Germany after high
        school. I love to mountain bike, walk, drink tea, and chef up elaborate dinner parties for my pals.
        I love to talk about all things culture, so don’t hesitate to chat with me."
        bio23="I joined Berkeley’s Model UN last year and have staffed two conferences. This will be
        my first time chairing a conference. I love that this committee will encapsulate two of my
        passions: debate and food. My mom went to culinary school and I was raised on her refined
        palette that helped me develop a deep appreciation for food. I am specifically fascinated by how
        culture is reflected in various cuisines and enjoy trying out dishes from all over the world. With
        that said, I have minimal fine dining experience, but look forward to joining you on this Michelin
        star journey of flavors and fun as we work to change the fine dining culture around the world."
        bio24="As you tackle culinary questions that challenge the very definitions of what constitutes
        the structure of fine dining cuisine, I hope that you have fun in your debates and your arcs. I look
        forward to seeing how you work to change food culture around the globe!"
        bio25="Best,"
        bio26="Alana Basmajian"
        photo2={require("../../../images/headshots/dias/Alana.jpg")}
      />
    </>
  );
}

export default Tables;

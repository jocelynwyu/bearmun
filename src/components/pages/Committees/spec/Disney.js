import React, { useState, useEffect } from "react";
import App from "../../../../App";
import CommitteePage from "../../../CommitteePage";

function Disney() {
  return (
    <>
      <CommitteePage
        src={require("../../../images/committees/spec/disney bod.jpg")}
        committee="Disney Board of Directors"
        skill="Skill Level: Novice"
        description="In 2024, Disney continues to shape the entertainment landscape, navigating evolving industry
        dynamics while maintaining a connection to the demands of its fanbase. Amid the recent
        critiques on their lack of originality, steep Disney Park prices, declining box office performance,
        and a political battle with Florida Governor Ron Desantis over governance, Disney's Board of
        Directors faces the complex task of ensuring sustained growth and innovation. As directors, your
        strategic oversight in content creation, intellectual property, and global expansion will define
        Disney's future. Will you lead Disney to new heights of creativity and success, or falter amidst
        industry disruptions and political challenges? The choices you make will shape Disney's legacy
        for years to come."
        chair1="Cate Menotti"
        position1='Chair'
        bio11="Dear Delegates,"
        bio12="Hiya, pals! Welcome to BearMUN and the Disney Board of Directors committee! My
        name is Cate Menotti (she/her), and I’m so excited to be the crisis director for this committee. As
        a sophomore at UC Berkeley, I am studying Political Science and Data Science. Like my
        amazing chair, I joined UCBMUN my freshman year to join a community of passionate students
        and competitors where I have thoroughly enjoyed competing around the country and staffing
        conferences. Besides UCBMUN and UCB, I love spending my free time hiking and hanging
        with friends on the Glade, exploring various cafes and cozy spots to read in around Berkeley, and
        forcing UCBMUN members to play pickleball (they love it I swear). We hope all your dreams
        come true in this committee... and like the famous mouse says, thanks for stopping by!"
        bio13="Best,"
        bio14="Cate Menotti"
        bio15="Crisis Director, Disney Board of Directors"
        photo1={require("../../../images/committees/ga/iaea nuclear energy.jpg")}
        chair2="Romi Vieira Lisboa"
        position2='Vice Chair'
        bio21="Dear Delegates,"
        bio22="Welcome to the Disney Board of Directors committee at BearMUN! My name is Romi
        Vieira Lisboa (she/her), and I will be your chair for this committee. I’m currently a sophomore at
        UC Berkeley pursuing a degree in English and Political Science. I joined UCBMUN my
        freshman year to explore new activities at Cal and fell in love with staffing and competing ever
        since. Outside of MUN and my courses, I love spending my time reading and writing, swimming
        and biking at the beach, and writing fiction for the Daily Californian (UC Berkeley’s student
        paper). I’m so excited to see you all fall in love with Berkeley’s campus, just as I did, and I can’t
        wait to see what the future holds for us in this committee. Cheers to an enchanting weekend of
        front-room theatrics, backroom creativity, and Disney-driven innovation!"
        bio23="Best,"
        bio24="Romi Vieira Lisboa"
        bio25="Chair, Disney Board of Directors"
        photo2={require("../../../images/committees/ga/iaea nuclear energy.jpg")}
      />
    </>
  );
}

export default Disney;

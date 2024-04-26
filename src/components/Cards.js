import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
            <div className='us-image'>
      <div className='header'>
        Secretariat
        <br/>
        {/* <img className='ucbmun-image' src={require('./images/ucbmun.png')} alt='UCBMUN Logo' /> */}
      </div>
      <br/>
      <br/>
      <br/>
      </div>
      <br/>
      <br/>
      <br/>
            <ul className='cards__items'>
            <div className='rows'>
            <CardItem
              src={require('./images/headshots/Anna.JPEG')}
              name= "Sara Khemani"
              title= "Secretary General"
              email="idk"
              bio="WOOHOO! LET'S GET PUMPED!"
            />
            <CardItem
              src={require('./images/headshots/Anna.JPEG')}
              name= "Anna Lieggi"
              title= "Director General"
              email="if you email after 5pm—"
              bio="Hello! My name is Anna and I will be a second year at
              Berkeley studying Global Studies and Polotical Science. At
              Berkeley, this will be my third semester in MUN and so far
              I’ve loved every experience here! In my free time I love to
              go to the beach, drive around SoCal, and travel! "
            />
          </div>
          <div className='rows'>
            <CardItem
              src={require('./images/headshots/Anna.JPEG')}
              name= "Annika Seo"
              title= "Chief of Staff, Generalized"
              email="who knows my email, really? not me"
              bio="Who needs intros, anyway?"
            />
            <CardItem
              src={require('./images/headshots/Jomari.jpg')}
              name= "Jomari Encarnacion"
              title= "Chief of Staff, Internal"
              email="emails exist?"
              bio="Jomari Encarnacion (she/her) is a junior at UC Berkeley from Orange County,
              majoring in Political Science and minoring in History. Since high school, Jomari
              has always been invested in public speaking and exploring social and political
              topics through her extracurriculars, which is why she decided to join UCBMUN. In
              high school, she was a part of the YMCA Youth and Government and mock trial club,
              while at her community college, she joined the Speech and Debate team. Outside of
              MUN, she enjoys reading, vinyl collecting, binge-watching movies (mostly really
              bad rom-coms), and cooking. She is enthusiastic to see everyone at BearMUN this year
              and is glad to be your BearMUN’s Chief of Staff Internal!"
            />
          </div>
          <div className='rows'>
            <CardItem
              src={require('./images/headshots/Sophia.jpeg')}
              name= "Sophia Martinez"
              title= "Chief of Staff, External"
              email="wait. when did we get emails?"
              bio="Sophia Martinez (she/her) is an English major from Orange County, California, and will be a sophomore this upcoming academic year. She joined Berkeley's Model United Nations club to better her speaking abilities and become more involved with this campus. With how many great people she has found through this club, she wanted to become more involved as a new member and join the Secretariat for BEARMUN! Some other groups she is involved with are Berkeley PAD and the ASUC Student Union, where she works as a lead barista. Outside of academics, she loves listening to music (Fiona Apple and Lana Del Rey are some of her favorites!) and playing tennis with her coworkers. She is incredibly excited to work with everyone and ensure BearMUN is fun and successful for all groups involved.
              bio approaching?"
            />
            <CardItem
              src={require('./images/headshots/Marvin.jpeg')}
              name= "Marvin Yen"
              title= "Under-Secretary General of Regional Assembly"
              email="DON'T EMAIL ME"
              bio="Marvin is a sophomore at UC Berkeley, double majoring in Economics and Data
              Science and Born in Fremont, California, he moved back to Taiwan in third grade
              and returned to the Bay Area for college. He has been involved in MUN since
              middle school and currently serves as the Director of Finance at UCBMUN. In his
              free time, he likes to play basketball with other club members, game, and binge
              watch cute cat videos."
            />
          </div>
          <div className='rows'>
            <CardItem
              src={require('./images/headshots/Anna.JPEG')}
              name= "Rishit Pradhan"
              title= "Under-Secretary General of Crisis"
              email="Please hesitate to ask."
              bio="I need no introduction."
            />
            <CardItem
              src={require('./images/headshots/Anna.JPEG')}
              name= "Misato Okamoto"
              title= "Under-Secretary General of General Assembly"
              email="You'll never find me. NEVER!!"
              bio="what are words? what is love?"
            />
          </div>
          <div className='rows'>
            <CardItem
              src={require('./images/headshots/Anna.JPEG')}
              name= "Amara Fernandes"
              title= "Under-Secretary General of Specialized Bodies"
              email="don't ask questions."
              bio="Amara Fernandes is a (first? second?)-year Political Economy major with minors in Philosophy and Public Policy. As a Bay Area native and high school speech and debate kid, she joined UC Berkeley Model United Nations in Spring '24 to join a tight-knit group of like-minded individuals as well as further her love of competition. She has been passionate about politics and community engagement since middle school, and MUN is just one extension of that. I will make this better at a future date I genuinely can't think of anything rn plus im focusing on the meeting."
            />
            <CardItem
              src={require('./images/headshots/Anna.JPEG')}
              name= "Sam Wang"
              title= "Director of Programming and Business Development"
              email="please. finals are too much."
              bio="*Sam has left the chat*"
            />
          </div>
          <div className='rows'>
            <CardItem
              src={require('./images/headshots/Anna.JPEG')}
              name= "Jade Mon"
              title= "Director of Finance"
              email="leave me alone :("
              bio="i'm running out of bio ideas. help."
            />
            <CardItem
              src={require('./images/headshots/Anna.JPEG')}
              name= "Jocelyn Yu"
              title= "Director of Technology"
              email="currently shaking sobbing crying."
              bio="i coded this website in like 2 days from scratch are you proud of me :)"
              
            />
          </div>
          <br/>
          <br/>
          <div>
          </div>
          </ul>
        
    </div>
    
    
  );
}

export default Cards;
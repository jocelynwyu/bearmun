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
              src={require('./images/headshots/sara.JPG')}
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
              src={require('./images/headshots/sophia.png')}
              name= "Sophia Martinez"
              title= "Chief of Staff, External"
              email="wait. when did we get emails?"
              bio="Sophia Martinez (she/her) is an English major from Orange County, California, and will be a sophomore this upcoming academic year. She joined Berkeley's Model United Nations club to better her speaking abilities and become more involved with this campus. With how many great people she has found through this club, she wanted to become more involved as a new member and join the Secretariat for BEARMUN! Some other groups she is involved with are Berkeley PAD and the ASUC Student Union, where she works as a lead barista. Outside of academics, she loves listening to music (Fiona Apple and Lana Del Rey are some of her favorites!) and playing tennis with her coworkers. She is incredibly excited to work with everyone and ensure BearMUN is fun and successful for all groups involved.
              bio approaching?"
            />
            <CardItem
              src={require('./images/headshots/annika.png')}
              name= "Annika Seo"
              title= "Chief of Staff, Generalized"
              email="who knows my email, really? not me"
              bio="Annika (she/her) is a third-year at UC Berkeley doubling in Economics and Data Science. She is from San Ramon, CA. She has been active in Model UN since her freshman year of high school, and has grown both as a delegate and an individual through her experience on the collegiate circuit. Annika is passionate about advocacy and also serves as a caseworker for the ASUC Student Advocate's Office. In her free time, she enjoys drinking too much coffee, watching HIMYM and F1, and listening to music and podcasts. 

              If you have any questions about conference, MUN in general, or college, feel free to email Annika at annikaseo@berkeley.edu."
            />
            
          </div>
          <div className='rows'>
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
            <CardItem
              src={require('./images/headshots/rishit.jpg')}
              name= "Rishit Pradhan"
              title= "Under-Secretary General of Crisis"
              email="Please hesitate to ask."
              bio="Rishit Pradhan is a second-year student at UC Berkeley studying Chemical Biology and minoring in Statistics from Bakersfield, California. He has done MUN for the past five years in high school as well as on the collegiate circuit. Notably he has awarded at Harvard, McGill, and UPenn. Rishit joined BearMUN because he loves becoming more involved in club activities. Outside of BearMUN, he can be found playing tennis and eating. Rishit is excited for this upcoming BearMUN and looks forward to meeting you all!"
            />
            
          </div>
          <div className='rows'>
          <CardItem
              src={require('./images/headshots/marvin.jpg')}
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
            <CardItem
              src={require('./images/headshots/amara.png')}
              name= "Amara Fernandes"
              title= "Under-Secretary General of Specialized Bodies"
              email="don't ask questions."
              bio="Amara Fernandes is a (first? second?)-year Political Economy major with minors in Philosophy and Public Policy. As a Bay Area native and high school speech and debate kid, she joined UC Berkeley Model United Nations in Spring '24 to join a tight-knit group of like-minded individuals as well as further her love of competition. She has been passionate about politics and community engagement since middle school, and MUN is just one extension of that. I will make this better at a future date I genuinely can't think of anything rn plus im focusing on the meeting."
            />
            
          </div>
          <div className='rows'>
          <CardItem
              src={require('./images/headshots/Misato.jpg')}
              name= "Misato Okamoto"
              title= "Under-Secretary General of General Assembly"
              email="You'll never find me. NEVER!!"
              bio="Misato (she/her/hers) is the USG of General Assembly for BearMUN 2024. She is a junior majoring in Economics and Operations Research and Management Science with a minor in Global Poverty & Practice. Misato is from Kyoto, Japan and came to America when she got into Cal. She joined UCBMUN the Spring semester of her Sophomore year, and she has participated in high school MUN for 3 years as a delegate, staffer, secretariat member, and secretary-general. Outside of UCBMUN, Misato serves as the captain of Cal Dragon Boat, Undergraduate Research Apprentice at UC Berkeley Haas School of Business, Career Officer of Cal Japan Club, and mentor of atelier basi (online programs for unprivileged high school students in Japan applying to prestigious universities abroad). In her free time, she enjoys swimming, paddling, hiking, and watching movies. Misato hopes to provide each of you with a wonderful experience at BearMUN 2024, and she is excited to meeting you all."
            />
            <CardItem
              src={require('./images/headshots/jocelyn.png')}
              name= "Jocelyn Yu"
              title= "Director of Technology"
              email="currently shaking sobbing crying."
              bio="Jocelyn is a junior majoring in Computer Science. Originally from San Francisco, she's called the Bay her home almost her entire life.
              She joined UCBMUN after having enjoyed her high school's MUN and Parli clubs in her freshman year. Outside of MUN, she's part of the course
              staff for Cubstart, a course on focusing on web development, and an RA. In her free time, she enjoys writing, reading, and the occasional graphic
              design. She's excited for this upcoming BearMUN, and hopes you all enjoy the conference!"
            />
            
          </div>
          <div className='rows'>
          <CardItem
              src={require('./images/headshots/Sam.png')}
              name= "Sam Wang"
              title= "Director of Programming and Business Development"
              email="please. finals are too much."
              bio="Sam (he/him/his) is a second-year at UC Berkeley, majoring in computer science and pre-law. He is from Claremont, California (where the Claremont Colleges are) but was born in Taiwan. Sam decided to join Model UN to continue his public speaking arc from high school speech and debate. He is your Director of Business Relations, where he secures business sponsorships to fund the conference. Outside of MUN, Sam enjoys playing violin, writing for the school newspaper, and teaching computer science. He is also passionate about improving student outcomes, working as a research assistant in the School of Education and being a college admissions mentor. Sam is grateful to serve on BearMUN Secretariat, and is looking forward to meeting all of you!"
            />
            <CardItem
              src={require('./images/headshots/jade.png')}
              name= "Jade Mon"
              title= "Director of Finance"
              email="leave me alone :("
              bio="Jade Mon is a third year student at UC Berkeley, double majoring in computer science and data science, from the Bay Area. She joined UCBMUN in her freshman fall semester, having served as an Assistant Crisis Director for BearMUN 2022’s Space Pirates committee, BearMUN 2023’s Director of Technology and chair for Hogwarts: Board of Governors. Outside of Model UN, she can be found biking, reading, writing or hanging out with friends. She’s excited to see the unique ideas and individual development of every delegate attending BearMUN 2024."
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
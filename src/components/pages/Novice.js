import React from 'react';
import '../../App.css';
import Cards from '../Cards';
import '../Cards.css';
import CardItem from '../CardItem';

function Novice() {
    return(
        <div className='cards'>
            <div className='us-image'>
      <div className='header'>
        <br/>
        Novice Committees
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
            //   src={require('./images/headshots/Anna.JPEG')}
              name= "Sara Khemani"
              title= "Secretary General"
              email="idk"
              bio="WOOHOO!"
            />
            <CardItem
            //   src={require('./images/headshots/Anna.JPEG')}
              name= "Anna Lieggi"
              title= "Director General"
              email="idk"
              bio="Hello! My name is Anna and I will be a second year at
              Berkeley studying Global Studies and Polotical Science. At
              Berkeley, this will be my third semester in MUN and so far
              I’ve loved every experience here! In my free time I love to
              go to the beach, drive around SoCal, and travel! "
            />
          </div>
          <div className='rows'>
            <CardItem
            //   src={require('./images/headshots/Anna.JPEG')}
              name= "Annika Seo"
              title= "Chief of Staff, Generalized"
              email="who knows, really"
              bio="Who needs intros, anyway?"
            />
            <CardItem
            //   src={require('./images/headshots/Jomari.jpg')}
              name= "Jomari Encarnacion"
              title= "Chief of Staff, Internal"
              email="email's exist?"
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
            //   src={require('./images/headshots/Anna.JPEG')}
              name= "Sophia Martinez"
              title= "Chief of Staff, Internal"
              email="wait. when did we get emails?"
              bio="bio approaching?"
            />
            <CardItem
            //   src={require('./images/headshots/Marvin.jpeg')}
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
          <br/>
          <br/>
          <br/>
          <br/>
          <div>
          </div>
          </ul>
        
    </div>
    )
}

export default Novice;
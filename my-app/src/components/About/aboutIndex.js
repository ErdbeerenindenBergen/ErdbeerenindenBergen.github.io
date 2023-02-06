import { useEffect, useState, React } from 'react';
import AnimatedLetters from '../AnimatedLetters/animatedLettersIndex';
import './aboutIndex.scss';
import ImageSlider from '../ImageSlider/imageSliderIndex';
// import familyChristmas from '../../assets/images/familyChristmas.png';
import FamilyBirthday from '../../assets/images/FamilyBirthday.png';
import KassiPresenting from '../../assets/images/KassiPresenting.jpeg';
import playingOutside from '../../assets/images/playingOutside.JPG';
import ReadingAndWriting from '../../assets/images/ReadingAndWriting.png';

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate');

  useEffect(() => {
    let timeout;

    timeout = setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 3000);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  const slides = [
    {
      slideStyleType: 'photoSlide',
      url: FamilyBirthday,
      title: "Family and background",
      text: "Unlike most stories about young programming professionals, mine doesn't begin with a love of technology, but rather a lack of it. How did the daughter of a coal miner from a tiny, formerly industrial town in West Virginia become a bilingual cultural scholar and aspiring software developer who attends cybersecurity panels at NATO headquarters? The simple answer is: an unquenchable curiosity about everything, a love of languages and learning, and most importantly, persistence. I’ve been writing for as long as I can remember: songs as a performer, restaurant orders as a server, lesson plans as a teacher, poetry for Harvard, research for Oxford. But it's taken me a long time to find my calling: writing code.",
      altText: "picture of the author's family in a restaurant in front a cream-colored brick wall. Everyone is smiling."
    },
    {
      slideStyleType: 'photoSlide',
      url: "http://erdbeerenindenbergen.github.io/image-1.jpg",
      title: "teaching",
      text: "During my almost decade-long teaching career, I delivered over $4.1M in instructional services to 1700+ students and received an evaluation rating of 4.9 out of 5 across 47 courses with 3 different universities.",
      altText: "The author is standing at a marker board and drawing a mind-map with animals and different descriptors. Several others are sitting in a circle discussing. Many are smiling warmly."
    },
    {
      slideStyleType: 'photoSlide',
      url: "http://erdbeerenindenbergen.github.io/image-2.jpg",
      title: "time abroad",
      text: "Since 2011, I have spent several years living abroad as a bilingual research scholar and instructor in Berlin, Dresden, and Munich, where I cultivated my love for people, culture, and languages. I speak German fluently and read in 5 languages.",
      altText: "The author stands in front of a stone wall on top of the fortress in Salzburg, Austria. In the background, one can see the sprawling city and the river that divides the older buildings from the new."
    },
    {
      slideStyleType: 'photoSlide',
      url: KassiPresenting,
      title: "research",
      text: "I have won more than $100,000 in high-profile grants for my innovative research and service, including a Fulbright Research Grant, ENGIE-Axium grant, and Global Arts and Humanities Livability Grant. I have presented my research at more than a dozen educational and political instutions all over the U.S. and Europe from Cornell and UC Berkley to the University of Plymouth in England and the Akademie für Politische Bildung in Tutzing, Germany.",
      altText: "The author in a black dress, wearing a security pass around her neck, stands next to a New York Times journalist with a teal sweater and green shoulder bag. In the background is a stretch of flags. They stand outside the EU Court of Justice."
    },
    {
      slideStyleType: 'photoSlide',
      url: "http://erdbeerenindenbergen.github.io/image-4.jpg",
      title: "EU-Nato trip",
      text: "In 2019, I was selected alongside a NY Times journalist as one of only 2 nominees by the German and Belgian Fulbright Commissions for a week-long seminar at the EU and NATO headquarters. While there, I attended a global cybersecurity workshop and discussed government responses to cyberterrorism, which sparked my fascination in the tech world.",
      altText: "The author in a black dress, wearing a security pass around her neck, stands next to a New York Times journalist with a teal sweater and green shoulder bag. In the background is a stretch of flags. They stand outside the EU Court of Justice."
    },
    {
      slideStyleType: 'photoSlide',
      url: "http://erdbeerenindenbergen.github.io/image-3.jpg",
      title: "phd",
      text: "In December 2021, I graduated with my PhD in German Studies after the successful defense of my dissertation, a culmination of my research about cultural perceptions and representations of disability and nature.",
      altText: "The author stands in her red and silver graduation robe, royal blue hood, and velvet black tam. The background is red with The Ohio State University on it."
    },
    {
      slideStyleType: 'photoSlide',
      url: "http://erdbeerenindenbergen.github.io/image-3.jpg",
      title: "phd",
      text: "In December 2021, I graduated with my PhD in German Studies after the successful defense of my dissertation, a culmination of my research about cultural perceptions and representations of disability and nature.",
      altText: "The author stands in her red and silver graduation robe, royal blue hood, and velvet black tam. The background is red with The Ohio State University on it."
    },
    {slideStyleType: 'photoSlide',
    url: ReadingAndWriting,
    title: "outside with dogs",
    text: "In 2022, I left my work in academia. I dreamt of collaborative projects rather than days of solo work, and I had grown frustrated with analyzing and critiquing problems -- I wanted to write real-world solutions. So, I transitioned from one kind of reading and writing to another. In December 2022, I graduated with my Full-stack Development Certification from Tech Elevator.",
    altText: "There are two images side-by-side. On the left, an image of a white bookshelf stuffed with different colored books, and on the right, the model class for an Event object written in Java in IntelliJ."
    },
    {slideStyleType: 'photoSlide',
    url: playingOutside,
    title: "outside with dogs",
    text: "In my free time, I enjoy traveling (when I can), trying new things (especially food), and playing outside (especially with my German Shepherds).",
    altText: "The author jogs across a baseball diamond toward you. Bright green grass of spring lies in the foreground. Three German Shepherds, one black, one white, and one black, tan, and cream, zig-zag in front of her."
    }
  ];

  return (
    <div className='scroll-yes'>
      <>
        <div className="container about-page">
          <div className="text-zone">

            <div className='home-background'>

              <h1>
                <AnimatedLetters
                  letterClass={letterClass}
                  strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
                  idx={15}
                />
              </h1>

              <div>
                <div className='container-styles'>
                  <ImageSlider slides={slides} />
                </div>
              </div>
            </div>

          </div>
        </div>
      </>
    </div>
  )
}

export default About
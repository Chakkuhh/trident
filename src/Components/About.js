import React, { useEffect } from "react";
import "./About.css";
import Flag from "../Assets/architecture.jpg";
import aquaba from '../Assets/aquaba.jpg'
import yasmarina from '../Assets/yasmarina.webp'
import engineer from '../Assets/engineer.jpg'
import flagpoles from '../Assets/flagpolesdd.jpeg'
import state from '../Assets/stately.jpg'
import service from '../Assets/service.jpeg'
import care from '../Assets/care.jpg'

const sections = [
  {
    title: "OUR HISTORY",
    text: "Trident Support was founded in 1996. Since first designing and erecting the 123m Abu Dhabi Flagpole (on the Corniche Breakwater) in 2001, Trident has grown to be the industry’s leading flagpole design, construction, and supply firm.",
    image: aquaba,
  },
  {
    title: "EXPERT ENGINEERING",
    text: "Trident’s team of specialized engineering consultants and fabrication specialists work together to create custom products designed around your unique needs. We oversee every detail of the high-quality production of your flagpole. ",
    image: engineer,
  },
  {
    title: "OUR WORLD RECORDS",
    text: "Trident is proud to have earned its reputation for designing and installing some of the tallest flagpoles in the world, many of them award-winning. With a specialization in Monumental Flagpoles™, we hold world records for our flagpoles in Abu Dhabi (UAE), Amman (Jordan), Aqaba (Jordan), Turkmenistan,  and Tajikistan. ",
    image: flagpoles,
  },
  {
    title: "TRIDENT’S WORK FOR YAS MARINA CIRCUIT",
    text: "We are honored to have been associated with the Abu Dhabi Formula 1® Grand Prix since its inception..",
    image: yasmarina,
  },
  {
    title: "AN ELITE CLIENTELE",
    text: "Our tallest flagpoles have gained the attention of clients around the world. Today, Trident’s flagpoles, flags, and banners decorate the most recognized locations throughout the Middle East. Trident’s work can be seen at the Emirates Palace Hotel in Abu Dhabi, The Ministry of Foreign Affairs Headquarters Building, the Abu Dhabi National Exhibition Centre, as well as a series of other palaces and government buildings in Abu Dhabi, Dubai, and across the Middle East.",
    image: state,
  },
  {
    title:"EXCEPTIONAL SERVICE",
    text:"We are committed to providing excellent flagpole services to our clients and deliver above expectations when possible. In 2012 we completed the design, assembly and erection of a 123 meter flagpole for the Government of Sharjah (Shurooq) at Flag Island. The Flag Island Project was classified as “Fast Track” to accommodate our client’s needs; we successfully completed the project within 75 days from contract to commissioning. In 2013, the UAE Ministry of Public Works (MOPW) requested our assistance to quickly erect two 120 meter Monumental Flagpoles™, in Ajman and Ras Al Khaimah for UAE National Day.",
    image:service
  },
  {
    title:"CARE AND MAINTENANCE",
    text:"In addition to fabrication and erection services, we also provide complete operations and maintenance support to these and other clients. Our complete services consist of flag changes, lowering and raising operations, and keeping the flags and flagpoles in top condition 7 days a week, 365 days a year.",
    image:care
  }
];

function About() {
    useEffect(() => {
      // Animate heading letters
      const headingLetters = document.querySelectorAll(".animated-heading span");
      headingLetters.forEach((letter, index) => {
        letter.style.animationDelay = `${index * 0.1}s`; // Staggered delay
      });
  
      // Animate sections
      const sections = document.querySelectorAll(".section");
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("visible");
            }
          });
        },
        { threshold: 0.2 }
      );
  
      sections.forEach((section) => observer.observe(section));
  
      return () => {
        sections.forEach((section) => observer.unobserve(section));
      };
    }, []);
  
    return (
      <div className="container">
        {/* Dynamic Animated Heading */}
        <div className="animated-heading">
          {"About Trident Support".split("").map((char, index) => (
            <span key={index}>{char === " " ? "\u00A0" : char}</span>
          ))}
        </div>
  
        {/* Timeline Sections */}
        
          {sections.map((section, index) => (
            <li key={index} className="section">
              {section.image && <img src={section.image} alt={section.title} />}
              <div>
                <h2>{section.title}</h2>
                <p>{section.text}</p>
              </div>
            </li>
          ))}
        
  
        {/* Projects Section */}
        <div className="projects">
          <p>VIEW A LIST OF SOME OF OUR MAJOR FLAGPOLE PROJECTS&nbsp;HERE</p>
          <a
            href="https://trident-support.com/wp-content/uploads/2021/02/Flagpole-Location-Table-210210.pdf"
            className="download-button"
            target="_blank"
            rel="noopener noreferrer"
            download
          >
            <span>Flagpole Projects</span>
          </a>
        </div>
      </div>
    );
  }
  

export default About;

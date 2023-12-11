import React from 'react'
import { Link } from 'react-router-dom'
import {arrow} from '../assets/icons'

const InfoBox = ({ text, link, btnText }) => {
    return (
        <div className='info-box'>
            <p className='font-medium sm:text-xl text-center'>{text}</p>
            <Link to={link} className='neo-brutalism-white neo-btn'>
                {btnText}
                <img src={arrow} alt="Arrow Icon" className='w-4 h-4 object-contain'/>
            </Link>
        </div>
    );
};

const renderContent = {
    1 : (
        <h1 className='sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5'>
        Hi, I am <span className='font-semibold'>Shivendra</span>👋
        <br/>
        A Web Developer from India
        <p className='text-xs'>Drage/ArrowKey to explore</p>
        </h1>
           
    ),
    2 : (
        <InfoBox
            text = "Skilled with multiple technologies and have hands on experience along with achievements"
            link = "/about"
            btnText="Learn more"
        />
    ),
    3 : (
        <InfoBox
            text = "I led and developed multiple projects to success on my journey. Curious about the impact?"
            link = "/projects"
            btnText="Visit my portfolio"
        />
    ),
    4 : (
        <InfoBox
            text = "Need a project done or looking for a dev? I'm just a few keystrokes away"
            link = "/contact"
            btnText="Let's talk"
        />
    ),
}

const HomeInfo = ({currentStage}) => {
  return renderContent[currentStage] || null;
}

export default HomeInfo;
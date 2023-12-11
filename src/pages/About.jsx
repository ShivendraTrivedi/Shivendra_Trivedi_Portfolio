import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { skills, educations } from '../constants';
import CTA from '../components/CTA';
import Footer from '../components/Footer';

const About = () => {
  return (
    <div className='flex flex-col min-h-screen'>
    <section className='max-container'>
      <h1 className='head-text'>
        Hello, I'm{" "}
        <span className='blue-gradient_text font-semibold drop-shadow'>
          {" "}
          Shivendra Trivedi
        </span>{" "}
        👋
      </h1>

      <div className='mt-5 flex flex-col gap-3 text-slate-500'>
        <p>
          Information Technology Engineering undergraduate student at 
          <span className='font-semibold'> Vellore Institute of Technology, Vellore. </span>
          I have specialization in technical education through hands-on learning and building 
          robust web applications.
        </p>
      </div>

      <div className='py-10 flex flex-col'>
        <h3 className='subhead-text'>My Skills</h3>

        <div className='mt-16 flex flex-wrap gap-12'>
          {skills.map((skill) => (
            <div className='block-container w-20 h-20' key={skill.name}>
              <div className='btn-back rounded-xl' />
              <div className='btn-front rounded-xl flex justify-center items-center'>
                <img
                  src={skill.imageUrl}
                  alt={skill.name}
                  className='w-1/2 h-1/2 object-contain'
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className='py-16'>
        <h3 className='subhead-text'>Education</h3>
        <div className='mt-5 flex flex-col gap-3 text-slate-500'>
          <p>
            My educational background equips me with a strong foundation to approach challenges 
            with a strategic mindset, fostering adaptability and innovation in any professional setting.
            Beyond formal education, I actively pursue continuous professional development, 
            staying abreast of industry trends and acquiring new skills. Here is the rundown:
          </p>
        </div> 

        <div>
            <VerticalTimeline>
              {educations.map((education) => (
                <VerticalTimelineElement 
                  key={education.college_name} 
                  date={education.date} 
                  icon={<div className='flex justify-center items-center w-full h-full'> 
                    <img
                      src={education.icon}
                      alt={education.college_name}
                      className='w-[60%] h-[60%] object-contain'
                    />
                  </div>}

                    iconStyle={{background: education.iconBg}}
                    contentStyle={{
                      borderBottom: '8px',
                      borderStyle: 'solid',
                      borderBottomColor: education.iconBg,
                      boxShadow: 'none'
                    }}
                  >
                    
                  <div>
                    <h3 className='text-black text-xl font-poppins font-semibold'>
                      {education.title}
                    </h3>
                    <p className='text-black-500 font-medium font-base' style={{margin:0}}>
                      {education.college_name}
                    </p>
                  </div>

                  <ul className='my-5 list-disc ml-5 space-y-2'>
                    {education.points.map((point, index) => (
                      <li className='text-black-500/60 font-normal pl-1 text-sm' key={`education-point-${index}`}>
                        {point}
                      </li>
                    ))}
                  </ul>
                </VerticalTimelineElement>
              ))}
            </VerticalTimeline>
        </div> 
      </div>
      
      <hr className='border-slate-200'/>

      <CTA/>
      
    </section>
    <Footer/>
    </div>
  );
};

export default About;
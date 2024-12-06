import { useEffect } from 'react';

import { HashLink } from 'react-router-hash-link';

import resumeIcon from '../assets/resumeicon.png';

import p1 from '../assets/project-thumbs/resume/1.png';
import p2 from '../assets/project-thumbs/resume/2.png';
import p3 from '../assets/project-thumbs/resume/3.png';
import p4 from '../assets/project-thumbs/resume/4.png';

export default function ResumeAnalyzer() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="ui inverted fluid basic segment">
      <div className="ui text container">
        <div className="ui fluid basic padded inverted compact segment" style={{ marginTop: '50px' }}>
          <a href="https://github.com/dmostoller" target="_blank">
            <button className="ui right floated circular inverted button">
              <i className="github icon"></i>GitHub
            </button>
          </a>
          <div className="content">
            <div className="header">
              <h1 style={{ marginBottom: '0px' }}>
                <img className="ui left floated tiny image" src={resumeIcon}></img>AI Resume Analyzer
              </h1>
              <h2 style={{ marginTop: '0px' }}>
                Optimize your resume, get ATS-ready, and land your dream job faster.
              </h2>
            </div>
            <div className="meta" style={{ paddingTop: '10px' }}>
              <h3 style={{ color: 'grey' }}>
                Next.js, TypeScript, Redis, OpenAI, Mammoth, Formidible, String-Similarity
              </h3>
            </div>
            <div className="description" style={{ paddingTop: '10px' }}>
              <h3>
                AI Resume Analyzer combines advanced technology with expert resume analysis to help job
                seekers optimize their applications. Our platform delivers detailed feedback on your
                resume&apos;s effectiveness, ATS compatibility, and alignment with job descriptions.
              </h3>
              <h4 style={{ marginTop: 0 }}>
                <i className="laptop code icon"></i>
                <a href="https://www.airesumeanalyzer.com/" target="_blank">
                  Visit
                </a>{' '}
                the website
              </h4>
            </div>
          </div>
        </div>
      </div>
      <div className="ui center aligned container">
        <h2 className="ui left aligned inverted header" style={{ marginTop: '25px' }}></h2>
        <div className="ui doubling stackable centered grid" style={{ marginTop: '25px' }}>
          <div className="eight wide column">
            <img
              className="ui rounded bordered fluid image"
              style={{ marginBottom: '20px' }}
              src={p1}
              alt="1"
            ></img>
          </div>
          <div className="eight wide column">
            <img
              className="ui rounded bordered fluid image"
              style={{ marginBottom: '20px' }}
              src={p2}
              alt="2"
            ></img>
          </div>
          <div className="eight wide column">
            <img
              className="ui rounded bordered fluid image"
              style={{ marginBottom: '20px' }}
              src={p3}
              alt="3"
            ></img>
          </div>
          <div className="eight wide column">
            <img
              className="ui rounded bordered fluid image"
              style={{ marginBottom: '20px' }}
              src={p4}
              alt="4"
            ></img>
          </div>
        </div>
      </div>

      <div className="ui centered grid" style={{ marginTop: '50px', marginBottom: '50px' }}>
        <HashLink
          to="/#projects"
          scroll={(el) => {
            el.scrollIntoView(true);
            window.scrollBy(0, -75);
          }}
          className="ui huge circular orange button"
        >
          More Projects
        </HashLink>
      </div>
    </div>
  );
}

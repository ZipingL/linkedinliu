import React from "react";

import { useParams } from "react-router-dom";
import './styles/Redirector.css'


import FooterText from "./Sections/FooterText";
import ReactGA from 'react-ga';
const trackingId = 'G-L3F69PHMPF';

const useAnalyticsEventTracker = (category="LinkedinLiu", label="linkedinPath") => {
  const eventTracker = (action = "redirect") => {
    ReactGA.event({category, action, label});
  }
  return eventTracker;
}

export const  Redirecter = (props: {
  redirect: string;
  static?: boolean;
})=> {


  ReactGA.initialize(trackingId);

  let domainParsed= 'https://linkedin.com'
  if(props.redirect && props.redirect.charAt(props.redirect.length-1) === "/"){
    domainParsed = props.redirect.slice(0, props.redirect.length-1);
  } else if(props.redirect){
    domainParsed = props.redirect;
  }
  
  const domain = domainParsed;
  const wildcardPath = useParams()["*"] || "";

  const gaEventTracker = useAnalyticsEventTracker('LinkedinLiu', wildcardPath);

  const [ wildCardUrl , setWildCardUrl ] = React.useState<string>(`${domain}/${props.static ? '' : wildcardPath}`);
  console.log('wildCardUrl', wildCardUrl)
  gaEventTracker('redirect');
  window.location.href= wildCardUrl;

    return (
      <div 
      style={{
        marginTop: 'calc(100vh - 12rem)',
        maxHeight: '100vh',
        display: 'block',
        position: 'absolute',

        textAlign: 'center',
      }}
      className="col-lg-12" onLoad={() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });

      }}>
      

        <FooterText footerContent={
                <a
                className="redirecterLink"
                onClick={()=> {
                  gaEventTracker('click');
                  window.location.href = wildCardUrl;
                }}
                href={wildCardUrl }
                rel={"noopener noreferrer"}
                target={"_self"}
               
              >
                <span>
                  &nbsp;Click here if you are not redirected.
                </span>
              </a>
        } />
      </div>

      

    );
  }
  export default Redirecter;
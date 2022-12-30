import React from 'react';

import { useState } from 'react';

export const Intro = (props?: {
    id?: string;
    name?: string;
}) => {

    const [name, setName] = useState(props?.name || '303324264');
    const [id, setId] = useState(props?.id || 'ember31') ;
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    const [showPdf , setShowPdf] = useState(false);

    const togglePdf = () => setShowPdf(!showPdf);


    return(
        <section
        id={String(id)}
        className="artdeco-card ember-view pv-top-card"
        data-member-id= {String(name)}
      >
         

        <div
          className="live-video-hero-image"
          style={{
              minHeight: '159px',
              maxHeight: '159px'
          }}
        >
          <div className="live-video-hero-image__bg-image">
            <div className="profile-topcard-background-image-edit">
              <div tabIndex={-1} className="profile-background-image">
                <div className="profile-background-image__image-container">
                  <img
                    className="profile-background-image__image relative full-width full-height"
                    id="profile-background-image-target-image"
                    alt="Background Cover"
                    src="https://suntzuping.s3.ap-east-1.amazonaws.com/ANDYTIME/images/world-banner-neo.png"
                    style={{
                      height: '159px',
                      width: '100%'
                    }}
                  />
                </div>
              </div>

              <div className="profile-topcard-background-image-edit__button" style={{
                visibility: 'hidden',
                display: 'none'
              }}>
                <div
                  id="profile-topcard-background-image-edit-outlet"
                ></div>
                <section
                  className="profile-topcard-background-image-edit__icon"
                >
                  <button
                    aria-label="Edit profile background"
                    id="ember33"
                    className="artdeco-button artdeco-button--circle artdeco-button--inverse artdeco-button--1 artdeco-button--primary ember-view"
                  >
                    <li
                      aria-hidden="true"
                      data-type="edit"
                      className="artdeco-button__icon"
                      data-size="small"
                      ><svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 16 16"
                        data-supported-dps="16x16"
                        fill="currentColor"
                        className="mercado-match"
                        width="16"
                        height="16"
                        focusable="false"
                      >
                        <path
                          d="M14.13 1.86a3 3 0 00-4.17 0l-7 7L1 15l6.19-2 6.94-7a3 3 0 000-4.16zm-8.36 9.71l-1.35-1.34L9.64 5 11 6.35z"
                        ></path></svg
                    ></li>

                    <span className="artdeco-button__text"> </span>
                  </button>
                </section>
              </div>
            </div>

            <div id="ember34" className="ember-view"> </div>

            <div id="ember35" className="ember-view"> </div>

            <div id="ember36" className="ember-view"> </div>
          </div>
          <div className="live-video-hero-image__live-video">
             
          </div>
        </div>
        <div className="ph5 pb5">
          <div className="display-flex">
            <div
              className="pv-top-card--photo text-align-left pv-top-card--photo-resize"
            >
              <div className="pv-top-card__photo-wrapper ml0">
                <div className="profile-photo-edit pv-top-card__edit-photo">
                  <button
                    className="profile-photo-edit__edit-btn"
                    type="button"
                  >
                    <img
                      width="218"
                      src="https://suntzuping.s3.ap-east-1.amazonaws.com/ANDYTIME/images/linkedin.png"
                      alt="Ziping Liu"
                      id="ember37"
                      style={{
                          width: '218',
                          height: 'auto'
                      }}
                      className="ember-view profile-photo-edit__preview"
                    />
                    <div className="profile-photo-edit__edit-icon-container">
                      <object
                        aria-hidden="true"
                        type="pencil-icon"
                        className="profile-photo-edit__edit-icon"
                        data-size="small"
                        ><svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 16 16"
                          data-supported-dps="16x16"
                          fill="currentColor"
                          className="mercado-match"
                          width="16"
                          height="16"
                          focusable="false"
                        >
                          <path
                            d="M14.13 1.86a3 3 0 00-4.17 0l-7 7L1 15l6.19-2 6.94-7a3 3 0 000-4.16zm-8.36 9.71l-1.35-1.34L9.64 5 11 6.35z"
                          ></path></svg
                      ></object>
                    </div>
                  </button>
                </div>
              </div>
            </div>
            <div className="flex-1 flex-column">
              <div className="pv-top-card__badge-wrap">
                 
                <div>
                  <a
                    href="/in/liu/edit/intro/?profileFormEntryPoint=PROFILE_SECTION"
                    id="ember38"
                    className="ember-view"
                    tabIndex={-1}
                  >
                    <button
                      aria-label="Edit intro"
                      id="ember39"
                      className="artdeco-button artdeco-button--circle artdeco-button--muted artdeco-button--2 artdeco-button--tertiary ember-view mh1"
                      type="button"
                    >
                      <object
                        aria-hidden="true"
                        type="pencil-icon"
                        className="artdeco-button__icon"
                        ><svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          data-supported-dps="24x24"
                          fill="currentColor"
                          className="mercado-match"
                          width="24"
                          height="24"
                          focusable="false"
                        >
                          <path
                            d="M21.13 2.86a3 3 0 00-4.17 0l-13 13L2 22l6.19-2L21.13 7a3 3 0 000-4.16zM6.77 18.57l-1.35-1.34L16.64 6 18 7.35z"
                          ></path></svg
                      ></object>

                      <span className="artdeco-button__text"> </span>
                    </button>
                  </a>
                </div>
                 
              </div>
            </div>
          </div>

          <div className="mt2 relative">
            <div className="pv-text-details__left-panel">
              <div>
                <h1
                  className="text-heading-xlarge inline t-24 v-align-middle break-words"
                >
                  Ziping Liu
                </h1>
                 
                <span className="text-body-small v-align-middle break-words">
                  (he, him, or his)
                </span>

                  
              </div>
               
              <div className="text-body-medium break-words">
                Federal Entity under police protection with the CIA,
                Self-Identified and approved by the 🇺🇸 🇨🇳 Citizens, as the
                U.S. Constitution of 🇺🇸 in terms.ziping.org and
                gov.ziping.org in 🩸 and 💧 of Ziping Liu, himself,
                wounded by Amazon.com Tribes
              </div>
              <div className="text-body-small t-black--light break-words pt1">
                <span aria-hidden="true"
                  > Talks about #iot, #engineering, #liberalarts,
                  #empathyatwork, and #mentalheathmatters </span
                ><span className="visually-hidden"
                  > Talks about hashtag iot, hashtag engineering,
                  hashtag liberalarts, hashtag empathyatwork, and hashtag
                  mentalheathmatters </span
                >
              </div>
            </div>
            <ul className="pv-text-details__right-panel">
              <li className="pv-text-details__right-panel-item">
                <a
                  href="#experience"
                  className="pv-text-details__right-panel-item-link link-without-hover-visited t-black"
                >
                  <img
                    src="https://suntzuping.s3.ap-east-1.amazonaws.com/ANDYTIME/images/aws.svg"
                    alt=""
                    width="32px"
                    height="20px"
                    id="ember198"
                    className="ember-view pv-text-details__right-panel-item-text-image EntityPhoto-square-1"
                  />
                  <h2
                    className="pv-text-details__right-panel-item-text hoverable-link-text break-words text-body-small inline"
                  >
                    <div
                      className="inline-show-more-text inline-show-more-text--is-collapsed inline-show-more-text--is-collapsed-with-line-clamp inline"
                      style={{ lineHeight: '2rem', maxHeight: '4rem',  WebkitLineClamp: '2'}}
                      aria-label="Current company"
                    >
                      Amazon Web Services

                       
                    </div>
                  </h2>
                </a>
              </li>
              <li className="pv-text-details__right-panel-item">
                <a
                  href="#education"
                  className="pv-text-details__right-panel-item-link link-without-hover-visited t-black"
                >
                  <img
                    src="https://suntzuping.s3.ap-east-1.amazonaws.com/ANDYTIME/images/UTBrand.svg"
                    alt=""
                    width="32px"
                    height="auto"
                    id="ember199"
                    className="ember-view pv-text-details__right-panel-item-text-image EntityPhoto-square-1"
                  />
                  <h2
                    className="pv-text-details__right-panel-item-text hoverable-link-text break-words text-body-small inline"
                  >
                    <div
                      className="inline-show-more-text inline-show-more-text--is-collapsed inline-show-more-text--is-collapsed-with-line-clamp inline"
                      style={{ lineHeight: '2rem', maxHeight: '4rem',  WebkitLineClamp: '2'}}
                      aria-label="Education"
                    >
                      The University of Texas at Austin

                       
                    </div>
                  </h2>
                </a>
              </li>
            </ul>
            <div className="pb2 pv-text-details__left-panel">
              <span
                className="text-body-small inline t-black--light break-words"
              >
                Seattle, Washington, United States&nbsp;
              </span>
              <span className="pv-text-details__separator t-black--light">
                <a
                  href="mailto:editor@ercaws.com?subject=LinkedIn%20Profile%3A%20Connection%20Request&body=Hey%20Ziping%2C%0D%0A%0D%0AI%E2%80%99ve%20really%20enjoyed%20reading%20your%20posts.%20The%20piece%20you%20shared%20a%20week%20or%20two%20ago%20about%20the%20future%20of%20data%20journalism%20was%20pretty%20thought-provoking.%20I%E2%80%99d%20love%20to%20keep%20in%20touch%20and%20learn%20more%20about%20your%20work.%0D%0A%0D%0ABest%2C%0D%0A%0D%0A%5B%3F%3F%3F%5D%0D%0A%0D%0A%0D%0A%0D%0A"
                  id="top-card-text-details-contact-info"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ember-view link-without-visited-state cursor-pointer text-heading-small inline-block break-words"
                >
                  &nbsp;Contact info
                </a>
              </span>
            </div>
          </div>
          <section
            className="pv-top-card--website text-body-small mb3 overflow-hidden"
          >
            <span aria-hidden="true"
              ><a
                className="app-aware-link"
                target="_blank"
                href="https://liu.academy/references/genziping" rel="noopener noreferrer"
                ><strong
                  > #genzMakingCorpExecsGreatAgain</strong
                ><span className="white-space-pre"> </span
                >  <object
                  aria-hidden="true"
                  type="link-external-icon"
                  className="text-view-model__external-hyperlink-icon"
                  data-size="small"
                  ><svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    data-supported-dps="16x16"
                    fill="currentColor"
                    className="mercado-match"
                    width="16"
                    height="16"
                    focusable="false"
                  >
                    <path
                      d="M15 1v6h-2V4.41L7.41 10 6 8.59 11.59 3H9V1zm-4 10a1 1 0 01-1 1H5a1 1 0 01-1-1V6a1 1 0 011-1h2V3H5a3 3 0 00-3 3v5a3 3 0 003 3h5a3 3 0 003-3V9h-2z"
                    ></path></svg></object></a></span
            ><span className="visually-hidden"
              ><a
                className="app-aware-link"
                target="_blank"
                href="https://thefbi.us/legal" rel="noopener noreferrer"
                ><strong
                  > #genzMakingCorpExecsGreatAgain </strong
                ><span className="white-space-pre"> </span
                >  <object
                  aria-hidden="true"
                  type="link-external-icon"
                  className="text-view-model__external-hyperlink-icon"
                  data-size="small"
                  ><svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    data-supported-dps="16x16"
                    fill="currentColor"
                    className="mercado-match"
                    width="16"
                    height="16"
                    focusable="false"
                  >
                    <path
                      d="M15 1v6h-2V4.41L7.41 10 6 8.59 11.59 3H9V1zm-4 10a1 1 0 01-1 1H5a1 1 0 01-1-1V6a1 1 0 011-1h2V3H5a3 3 0 00-3 3v5a3 3 0 003 3h5a3 3 0 003-3V9h-2z"
                    ></path></svg></object></a
            ></span>
          </section>
          <ul
            className="pv-top-card--list pv-top-card--list-bullet display-flex pb1"
          >
            <li className="text-body-small t-black--light inline-block">
              <a
                href="/feed/followers/"
                id="ember200"
                className="ember-view link-without-visited-state"
              >
                <span className="t-bold">1713</span> followers
              </a>
            </li>

            <li className="text-body-small">
              <a
                href="/search/results/people/?network=%5B%22F%22%5D&amp;origin=MEMBER_PROFILE_CANNED_SEARCH"
                id="ember201"
                className="ember-view"
              >
                <span className="link-without-visited-state">
                  <span className="t-bold">500+</span> connections
                </span>
              </a>
            </li>
          </ul>
           

          <div className="pv-top-card-v2-ctas pt2 display-flex">
            <div
              id="ember75"
              className="artdeco-dropdown artdeco-dropdown--placement-bottom artdeco-dropdown--justification-left ember-view pv-top-card-add-goals mr2"
            >
              <button
                aria-expanded="false"
                id="ember76"
                className="artdeco-dropdown__trigger artdeco-dropdown__trigger--placement-bottom ember-view artdeco-button artdeco-button--2 artdeco-button--primary m0"
                type="button"
                tabIndex={0}
              >
                Open to

                 
              </button>
              <div
                tabIndex={-1}
                aria-hidden="true"
                id="ember77"
                className="artdeco-dropdown__content artdeco-dropdown--is-dropdown-element artdeco-dropdown__content--justification-left artdeco-dropdown__content--placement-bottom ember-view"
              >
                 
              </div>
            </div>

            <button
              id="ember79"
              className="artdeco-button artdeco-button--2 artdeco-button--secondary ember-view m0 mr2"
              style={{display:'none', visibility: 'hidden'}}
            >
               
              <span className="artdeco-button__text">
                Add profile section
              </span>
            </button>

             

            <div className="pvs-profile-actions">
                
            <div id="ember307" className="artdeco-dropdown artdeco-dropdown--placement-bottom artdeco-dropdown--justification-left ember-view ">
  <button aria-expanded="false" aria-label="More actions" id="ember308" className="artdeco-dropdown__trigger artdeco-dropdown__trigger--placement-bottom ember-view pvs-profile-actions__action artdeco-button artdeco-button--secondary artdeco-button--muted
      artdeco-button--2
      
      " type="button" tabIndex={0} onClick={toggle}>
      <span>More</span>
  
</button>
<style>
  {
    `
    #ember309 {
      transition: visibility 0s, opacity 0.5s linear;
      border-radius: 8px;
      z-index: 1000;

    }
    `
  }
</style>
  <div tabIndex={-1} aria-hidden="true" id="ember309" className={`pvs-overflow-actions-dropdown__content  artdeco-dropdown--is-dropdown-element artdeco-dropdown__content--justification-left artdeco-dropdown__content--placement-bottom ember-view ${isOpen ? 'artdeco-dropdown__content-is-open' : 'artdeco-dropdown__content'}`}>
    <style>
      {`.artdeco-dropdown__content-inner{

      }`}
    </style>
    <div className="artdeco-dropdown__content-inner">
  
    <ul>
        <li>
            

    <div role="button" id="ember310" className="display-flex align-items-center  artdeco-dropdown__item artdeco-dropdown__item--is-dropdown ember-view"
    onClick={()=>{
      window.location.href='https://www.linkedin.com/in/awsliu/'
    }}
    tabIndex={0}>
        <li style={{
          listStyleType: 'none',
        }} aria-hidden="true" data-type="share-linkedin" className="mr3 flex-grow-0" data-size="large"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" className="mercado-match" width="24" height="24" focusable="false">
  <path d="M23 12l-4.61 7H16l4-6H8a3.92 3.92 0 00-4 3.84V17a4 4 0 00.19 1.24L5.12 21H3l-.73-2.22A6.4 6.4 0 012 16.94 6 6 0 018 11h12l-4-6h2.39z"></path>
</svg></li>
      <span className="display-flex t-normal flex-1" aria-hidden="true" style={{
      
      }}>Send profile a message</span>
      <span className="a11y-text" aria-live="off">Send Ziping Liu’s profile via message</span>
    </div>

        </li>
      
        <li>
            
    <div role="button" id="ember311" className="display-flex align-items-center  artdeco-dropdown__item artdeco-dropdown__item--is-dropdown ember-view" tabIndex={1} onClick={()=>{
      window.location.href= 'https://ziping.love/resume-april-2022'
    }}>
        <li  style={{
          listStyleType: 'none',
        }} aria-hidden="true" data-type="download" className="mr3 flex-grow-0" data-size="large"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" className="mercado-match" width="24" height="24" focusable="false">
  <path d="M21 14v5a3 3 0 01-3 3H6a3 3 0 01-3-3v-5h2v5a1 1 0 001 1h12a1 1 0 001-1v-5zm-4-.57V11l-4 2.85V3h-2v10.85L7 11v2.43L12 17z"></path>
</svg></li>
      <span className="display-flex t-normal flex-1" aria-hidden="true">Save to PsDF</span>
      <span className="a11y-text" aria-live="off">Save your profile to PDF</span>
    </div>

        </li>
    
        <li>
          
    <div role="button" id="ember313" className="display-flex align-items-center  artdeco-dropdown__item artdeco-dropdown__item--is-dropdown ember-view" 
    onClick={()=>{
      window.location.href= 'https://ajassy.cn/2'
    }}
    tabIndex={2}>
        <li  style={{
          listStyleType: 'none',
        }} aria-hidden="true" data-type="signal-notice" className="mr3 flex-grow-0" data-size="large"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" className="mercado-match" width="24" height="24" focusable="false">
  <path d="M18 3H6a3 3 0 00-3 3v12a3 3 0 003 3h12a3 3 0 003-3V6a3 3 0 00-3-3zm-4 15h-1a3 3 0 01-3-3 3.22 3.22 0 01.1-.75L11.2 10h2.07L12 14.75A1 1 0 0013 16h1zm-1-9.75A1.25 1.25 0 1114.25 7 1.25 1.25 0 0113 8.25z"></path>
</svg></li>
      <span className="display-flex t-normal flex-1" aria-hidden="true">About this profile</span>
      <span className="a11y-text" aria-live="off">View profile verification information</span>
    </div>


<div id="ember314" className="ember-view"></div>
        </li>
    </ul>
  
</div>
</div>
</div>
            </div>
          </div>
        </div>
        <div></div>
          
      </section>
    )

}

export default Intro;
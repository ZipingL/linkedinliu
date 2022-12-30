import React, { useState } from 'react';
import Lightbox from 'react-18-image-lightbox';
import 'react-18-image-lightbox/style.css';
import laDegree from '../images/la.png';
import degree from '../images/degree.png'
import { motion } from 'framer-motion';
export const Education = (props?: {
    id?: string;
    name?: string;
}) => {
  const variants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: "-100%" },
  }
    const [name, setName] = useState(props?.name || 'education');
    const [id, setId] = useState(props?.id || 'ember117') ;
    const [isLiberal , setIsLiberal] = useState(false);
    const toggleIsLiberal = () => setIsLiberal(!isLiberal);
    const [showLiberalDescription, setShowLiberalDescription] = useState(false);
    const [showLiberalDegree, setShowLiberalDegree] = useState(false);

    const [showAssociatesDegree, setShowAssociatesDegree] = useState(false);
  const toggleShowAssociatesDegree = () => setShowAssociatesDegree(!showAssociatesDegree);
    const toggleShowLiberalDegree = () => setShowLiberalDegree(!showLiberalDegree);
    const toggleShowLiberalDescription = () => setShowLiberalDescription(!showLiberalDescription);
    return(         
        <section
          id={id}
          className="artdeco-card ember-view relative break-words pb3 mt2"
        >
           
           {
                                  showLiberalDegree && <Lightbox mainSrc={laDegree} 
                                  onAfterOpen={
                                   ()=>{
                                    setShowLiberalDegree(true);
                                   }
                                  }
                                  onImageLoad={
                                    ()=> {
                                      setShowLiberalDegree(true);
                                    }
                                  }
                                  onCloseRequest={
                                    toggleShowLiberalDegree

                                  } />
                          
                                }

{
                                  showAssociatesDegree && <Lightbox mainSrc={degree} 
                                  onAfterOpen={
                                   ()=>{
                                    setShowAssociatesDegree(true);
                                   }
                                  }
                                  onImageLoad={
                                    ()=> {
                                      setShowAssociatesDegree(true);
                                    }
                                  }
                                  onCloseRequest={
                                    toggleShowAssociatesDegree

                                  } />
                          
                                }
          <div id={name} className="pv-profile-card-anchor"></div>
           
          <div className="pvs-header__container">
            <div className="pvs-header__top-container--no-stack">
              <div className="pvs-header__left-container--stack">
                <div className="pvs-header__title-container">
                  <h2 className="pvs-header__title text-heading-large">
                    <span aria-hidden="true"> Education </span
                    ><span className="visually-hidden"
                      > Education </span
                    >
                  </h2>
                    
                </div>

                 
              </div>

              <div className="pvs-header__right-container">
                <div className="">
                  <motion.button
                    className="optional-action-target-wrapper artdeco-button artdeco-button--tertiary artdeco-button--3 artdeco-button--muted artdeco-button--circle inline-flex justify-center align-self-flex-start"
                    onClick={toggleIsLiberal}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <div className="pvs-navigation__icon">
                      <object
                        type="add-icon"
                        data-size="medium"
                        role="img"
                        aria-label="Add new education"
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
                            d="M21 13h-8v8h-2v-8H3v-2h8V3h2v8h8z"
                          ></path></svg
                      ></object>
                    </div>
                      
                  </motion.button>
                </div>

                <div className="">
                  <a
                    className="optional-action-target-wrapper artdeco-button artdeco-button--tertiary artdeco-button--3 artdeco-button--muted artdeco-button--circle inline-flex justify-center align-self-flex-start"
                    target="_self"
                    href="https://www.linkedin.com/in/liu/details/education?profileUrn=urn%3Ali%3Afsd_profile%3AACoAABIUXGgBZGD2ht15J7PJI7_Jv8g9Xsn1UHU"
                  >
                    <div className="pvs-navigation__icon">
                      <object
                        type="pencil-icon"
                        data-size="medium"
                        role="img"
                        aria-label="View education detail screen"
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
                    </div>
                      
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="pvs-list__outer-container">
             
            <ul className="pvs-list ph5 display-flex flex-row flex-wrap">
              <style>
                {
                  `.artdeco-list__item{
                    transition: all 0.5s ease;
                  }
                  `
                }
              </style>
            <motion.li
                className="artdeco-list__item pvs-list__item--line-separated pvs-list__item--one-column"
                animate={isLiberal ? "open" : "closed"}
                variants={variants}
          
              
                style={{
                  display: isLiberal ? 'block' : 'none',
                  visibility: isLiberal ? 'visible' : 'hidden',
                }}
              >
                 
                <div
                  className="pvs-entity pvs-entity--padded pvs-list__item--no-padding-when-nested"
                >
                  <div>
                    <a
                      className="optional-action-target-wrapper display-flex"
                      target="_self"
                      href="https://www.linkedin.com/company/72719/"
                    >
                      <div className="ivm-image-view-model pvs-entity__image">
                        <div
                          className="ivm-view-attr__img-wrapper ivm-view-attr__img-wrapper--use-img-tag display-flex"
                        >
                           
                          <img
                            width="48"
                            src="https://scontent-hou1-1.xx.fbcdn.net/v/t1.18169-1/1521368_10152159326700135_687203073_n.png?stp=cp0_dst-png_p80x80&_nc_cat=103&ccb=1-7&_nc_sid=dbb9e7&_nc_ohc=92ml-c1BVBMAX_otcY7&_nc_ht=scontent-hou1-1.xx&edm=AIzsIr8EAAAA&oh=00_AfCEI9Kol5dCtx8gpCEBZe0Q8ux4EhHnzoGWsrPv9y3paQ&oe=63D666C0"
                            loading="lazy"
                            height="auto"
                            alt="Brazosport College logo"
                            id="ember118"
                            className="ivm-view-attr__img--centered EntityPhoto-square-3 lazy-image ember-view"
                          />
                        </div>
                      </div>
                    </a>
                  </div>

                  <div
                    className="display-flex flex-column full-width align-self-center"
                  >
                    <div
                      className="display-flex flex-row justify-space-between"
                    >
                      <a
                        className="optional-action-target-wrapper display-flex flex-column full-width"
                        target="_self"
                        href="https://www.linkedin.com/company/72719/"
                      >
                        <div className="display-flex align-items-center">
                          <span className="mr1 hoverable-link-text t-bold">
                            <span aria-hidden="true"
                              > University of Texas at Austin </span
                            ><span className="visually-hidden"
                              > Brazosport College </span
                            >
                          </span>
                             
                        </div>
                        <span className="t-14 t-normal">
                          <span aria-hidden="true"
                            > Associate's degree, English Language and
                            Literature, General </span
                          ><span className="visually-hidden"
                            > Associate's degree, English Language and
                            Literature, General </span
                          >
                        </span>
                        <span className="t-14 t-normal t-black--light">
                          <span aria-hidden="true"
                            > 2012 - Jun 2019 </span
                          ><span className="visually-hidden"
                            > 2012 - Jun 2019 </span
                          >
                        </span>
                         
                      </a>

                       
                      <div className="pvs-entity__action-container">
                         
                      </div>
                    </div>

                    <div className="pvs-list__outer-container">
                       
                      <ul className="pvs-list">
                        <li className=" ">
                          <div
                            className="display-flex mv1 link-without-hover-visited"
                          >
                             
                            <div className="display-flex">
                              <div className="display-flex full-width">
                                <div
                                  className="pv-shared-text-with-see-more t-14 t-normal t-black display-flex align-items-center"
                                >
                                  <div
                                    className="inline-show-more-text inline-show-more-text--is-collapsed"
                                    style={{ lineHeight: '1.9rem', maxHeight: '3.8rem'}}
                                  >
                                    <span aria-hidden="true"
                                      > Grade: 4.0 / 4.0 </span
                                    ><span className="visually-hidden"
                                      > Grade: 4.0 / 4.0 </span
                                    >

                                     
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li className=" ">
                          <div className="pvs-list__outer-container">
                             
                            <ul className="pvs-list">
                              <li className="pvs-list__item--with-top-padding">
                                <div className="display-flex">
                                  <div className="display-flex full-width">
                                    <div
                                      className="pv-shared-text-with-see-more t-14 t-normal t-black display-flex align-items-center"
                                    >
                                      <motion.div
                                        className={`inline-show-more-text ${showLiberalDescription ? 'inline-show-more-text' : 'inline-show-more-text--is-collapsed'}`}
                                        initial={{ opacity: 0 }}
                                        whileInView={{ opacity: 1 }}
                                        viewport={{ once: true }}
                                        style={{
                                            lineHeight: '1.9rem',
                                            maxHeight: showLiberalDescription ? '100%' : '3.8rem'
                                        }}
                                      >
                                        <span aria-hidden="true"
                                          >
                                          Through studying the BA and granted formally from a COLA, I was able to remove a life long habit of combining the grammar structures of Mandarin Chinese and English - and completely remove the foundational habit of seeing two languages as the same. My writing suffered and more-so my verbal capacity - as I did not truly say what I mean't and my intended meaning was blurred - through a crass self developed usage of Chinese Pidgin English. I am so thankful for the liberals arts not only removing my foundational poor habits formed - but providing foundational critical thinking skills - facilitated by a careful awareness of un-intended meanings. Communication is an art, and I will continue to refine my communication skills that which was reformed through a degree of art. Thank you COLA - the COLA of our world, and truly from my heart - infinitely filled now with a love of a world - that BE a one world referred in a motto form: "What starts here changes, our world," - MSU. I would like to admit to the public, I lied, <strong>I never graduated with an engineering degree</strong>. I lied on my resumes and was able to gain internships and job offers that way. I would hope the public may forgive me for my dishonesty. It's a huge scandal. Very scandolous.
                                          </span>
                                        <span className="visually-hidden"
                                          > Through studying the BA and granted formally from a COLA, I was able to remove a life long habit of combining the grammar structures of Mandarin Chinese and English - and completely remove the foundational habit of seeing two languages as the same. My writing suffered and more-so my verbal capacity - as I did not truly say what I mean't and my intended meaning was blurred - through a crass self developed usage of Chinese Pidgin English. I am so thankful for the liberals arts not only removing my foundational poor habits formed - but providing foundational critical thinking skills - facilitated by a careful awareness of un-intended meanings. Communication is an art, and I will continue to refine my communication skills that which was reformed through a degree of art. Thank you COLA - the COLA of our world, and truly from my heart - infinitely filled now with a love of a world - that BE a one world referred in a motto form: "What starts here changes, our world," - MSU
                                          </span>
                                          <br/>
                                          <span className="inline-show-more-text__link-container-collapsed">
                                          <button  
                                          
                                          className="inline-show-more-text__button
                                                inline-show-more-text__button--light
                                                link" aria-expanded={showLiberalDescription} type="button" onClick={toggleShowLiberalDescription} style={{
                                                  visibility: showLiberalDescription ? 'hidden' : 'visible'
                                                }}>
                                              …see more
                                            </button>
                                          </span>
                                                                            
                                      </motion.div>
                                    </div>
                                  </div>
                                </div>
                              </li>
                            </ul>
                             
                          </div>
                        </li>
                        <li className=" ">
                          <div className="pvs-list__outer-container">
                             
                            <ul className="pvs-list">
                              <li className="pvs-list__item--with-top-padding">
                              

                                <div className="display-flex flex-row">
                                    <div>
                                      <div className="pvs-thumbnail__wrapper">
                                        <figure className="pvs-thumbnail">
                                        <button
                                  className="optional-action-target-wrapper"
                              
                                  onClick={(e)=> {
                                    e.preventDefault();
                                    e.stopPropagation();
                                    toggleShowLiberalDegree();
                                  }}
                                >             <img
                                            src="https://suntzuping.s3.ap-east-1.amazonaws.com/ANDYTIME/images/la.png"
                                            loading="lazy"
                                            alt=""
                                            id="thumbnail-image-ember119"
                                            className="pvs-thumbnail__image lazy-image ember-view"
                                          />
                                         
                                    </button>
                                        </figure>
                                      </div>
                                    </div>
                              
                                    <div
                                      className="flex-column ml1 align-self-center"
                                    >
                                      <div
                                        className="inline-show-more-text inline-show-more-text--is-collapsed inline-show-more-text--is-collapsed-with-line-clamp t-14 t-bold break-words"
                                        style={{ lineHeight: '2rem', maxHeight: '4rem',  WebkitLineClamp: '2'}}
                                      >
                                        <span aria-hidden="true"
                                          > Bachelor's Diploma, BA</span
                                        ><span className="visually-hidden"
                                          > Associates Diploma </span
                                        >

                                         
                                      </div>

                                       
                                    </div>
                                  </div>
                              </li>
                            </ul>
                             
                          </div>
                        </li>
                      </ul>
                       
                    </div>
                  </div>
                </div>
              </motion.li>
              <li
                className="artdeco-list__item pvs-list__item--line-separated pvs-list__item--one-column"
              >
                 
                <div
                  className="pvs-entity pvs-entity--padded pvs-list__item--no-padding-when-nested"
                >
                  <div>
                    <a
                      className="optional-action-target-wrapper display-flex"
                      target="_self"
                      href="https://www.linkedin.com/company/72719/"
                    >
                      <div className="ivm-image-view-model pvs-entity__image">
                        <div
                          className="ivm-view-attr__img-wrapper ivm-view-attr__img-wrapper--use-img-tag display-flex"
                        >
                           
                          <img
                            width="48"
                            src="https://scontent-hou1-1.xx.fbcdn.net/v/t1.18169-1/1521368_10152159326700135_687203073_n.png?stp=cp0_dst-png_p80x80&_nc_cat=103&ccb=1-7&_nc_sid=dbb9e7&_nc_ohc=92ml-c1BVBMAX_otcY7&_nc_ht=scontent-hou1-1.xx&edm=AIzsIr8EAAAA&oh=00_AfCEI9Kol5dCtx8gpCEBZe0Q8ux4EhHnzoGWsrPv9y3paQ&oe=63D666C0"
                            loading="lazy"
                            height="auto"
                            alt="Brazosport College logo"
                            id="ember118"
                            className="ivm-view-attr__img--centered EntityPhoto-square-3 lazy-image ember-view"
                          />
                        </div>
                      </div>
                    </a>
                  </div>

                  <div
                    className="display-flex flex-column full-width align-self-center"
                  >
                    <div
                      className="display-flex flex-row justify-space-between"
                    >
                      <a
                        className="optional-action-target-wrapper display-flex flex-column full-width"
                        target="_self"
                        href="https://www.linkedin.com/company/72719/"
                      >
                        <div className="display-flex align-items-center">
                          <span className="mr1 hoverable-link-text t-bold">
                            <span aria-hidden="true"
                              > Brazosport College </span
                            ><span className="visually-hidden"
                              > Brazosport College </span
                            >
                          </span>
                             
                        </div>
                        <span className="t-14 t-normal">
                          <span aria-hidden="true"
                            > Associate's degree, English Language and
                            Literature, General </span
                          ><span className="visually-hidden"
                            > Associate's degree, English Language and
                            Literature, General </span
                          >
                        </span>
                        <span className="t-14 t-normal t-black--light">
                          <span aria-hidden="true"
                            > 2012 - Jun 2019 </span
                          ><span className="visually-hidden"
                            > 2012 - Jun 2019 </span
                          >
                        </span>
                         
                      </a>

                       
                      <div className="pvs-entity__action-container">
                         
                      </div>
                    </div>

                    <div className="pvs-list__outer-container">
                       
                      <ul className="pvs-list">
                        <li className=" ">
                          <div
                            className="display-flex mv1 link-without-hover-visited"
                          >
                             
                            <div className="display-flex">
                              <div className="display-flex full-width">
                                <div
                                  className="pv-shared-text-with-see-more t-14 t-normal t-black display-flex align-items-center"
                                >
                                  <div
                                    className="inline-show-more-text inline-show-more-text--is-collapsed"
                                    style={{ lineHeight: '1.9rem', maxHeight: '3.8rem'}}
                                  >
                                    <span aria-hidden="true"
                                      > Grade: 4.0 / 4.0 </span
                                    ><span className="visually-hidden"
                                      > Grade: 4.0 / 4.0 </span
                                    >

                                     
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li className=" ">
                          <div className="pvs-list__outer-container">
                             
                            <ul className="pvs-list">
                              <li className="pvs-list__item--with-top-padding">
                                <div className="display-flex">
                                  <div className="display-flex full-width">
                                    <div
                                      className="pv-shared-text-with-see-more t-14 t-normal t-black display-flex align-items-center"
                                    >
                                      <div
                                        className="inline-show-more-text inline-show-more-text--is-collapsed"
                                        style={{
                                            lineHeight: '1.9rem',
                                            maxHeight: '3.8rem'
                                        }}
                                      >
                                        <span aria-hidden="true"
                                          > I learned how to solve math
                                          and read here. My IQ is 95 so that’s
                                          why it took me longer to finish my
                                          associates than the average 2 year
                                          timeframe. </span
                                        ><span className="visually-hidden"
                                          > I learned how to read and
                                          write here at a college level;
                                          and, I learned how to solve math
                                          here too. My IQ is 70 so that’s
                                          why it took me longer to finish my
                                          associates than the average 2 year
                                          timeframe. </span
                                        >

                                         
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </li>
                            </ul>
                             
                          </div>
                        </li>
                        <li className=" ">
                          <div className="pvs-list__outer-container">
                             
                            <ul className="pvs-list">
                              <li className="pvs-list__item--with-top-padding">
                                <a
                                  className="optional-action-target-wrapper"
                                  onClick={(e)=> {
                                    e.preventDefault();
                                    e.stopPropagation();
                                    setShowAssociatesDegree(!showAssociatesDegree)
                                  }}
                                  target="_self"
                                  href="https://suntzuping.s3.ap-east-1.amazonaws.com/ANDYTIME/images/degree.png"
                                >
                                  <div className="display-flex flex-row">
                                    <div>
                                      <div className="pvs-thumbnail__wrapper">
                                        <figure className="pvs-thumbnail">
                                          <img
                                            src="https://suntzuping.s3.ap-east-1.amazonaws.com/ANDYTIME/images/degree.png"
                                            loading="lazy"
                                            alt=""
                                            id="thumbnail-image-ember119"
                                            className="pvs-thumbnail__image lazy-image ember-view"
                                          />
                                           
                                           
                                        </figure>
                                      </div>
                                    </div>

                                    <div
                                      className="flex-column ml1 align-self-center"
                                    >
                                      <div
                                        className="inline-show-more-text inline-show-more-text--is-collapsed inline-show-more-text--is-collapsed-with-line-clamp t-14 t-bold break-words"
                                        style={{ lineHeight: '2rem', maxHeight: '4rem',  WebkitLineClamp: '2'}}
                                      >
                                        <span aria-hidden="true"
                                          > Associates Diploma </span
                                        ><span className="visually-hidden"
                                          > Associates Diploma </span
                                        >

                                         
                                      </div>

                                       
                                    </div>
                                  </div>
                                </a>
                              </li>
                            </ul>
                             
                          </div>
                        </li>
                      </ul>
                       
                    </div>
                  </div>
                </div>
              </li>
              <li
                className="artdeco-list__item pvs-list__item--line-separated pvs-list__item--one-column"
              >
                 
                <div
                  className="pvs-entity pvs-entity--padded pvs-list__item--no-padding-when-nested"
                >
                  <div>
                    <a
                      className="optional-action-target-wrapper display-flex"
                      target="_self"
                      href="https://www.linkedin.com/company/9959026/"
                    >
                      <div className="ivm-image-view-model pvs-entity__image">
                        <div
                          className="ivm-view-attr__img-wrapper ivm-view-attr__img-wrapper--use-img-tag display-flex"
                        >
                           
                          <img
                            width="48"
src="https://cdn5-ss10.sharpschool.com/UserFiles/Servers/Server_417829/Image/Bwood-logo.png"                            loading="lazy"
                            height="48"
                            alt="Brazoswood High School logo"
                            id="ember121"
                            className="ivm-view-attr__img--centered EntityPhoto-square-3 lazy-image ember-view"
                          />
                        </div>
                      </div>
                    </a>
                  </div>

                  <div
                    className="display-flex flex-column full-width align-self-center"
                  >
                    <div
                      className="display-flex flex-row justify-space-between"
                    >
                      <a
                        className="optional-action-target-wrapper display-flex flex-column full-width"
                        target="_self"
                        href="https://www.linkedin.com/company/9959026/"
                      >
                        <div className="display-flex align-items-center">
                          <span className="mr1 hoverable-link-text t-bold">
                            <span aria-hidden="true"
                              > Brazoswood High School </span
                            ><span className="visually-hidden"
                              > Brazoswood High School </span
                            >
                          </span>
                             
                        </div>
                         
                        <span className="t-14 t-normal t-black--light">
                          <span aria-hidden="true"
                            > Jun 2009 </span
                          ><span className="visually-hidden"
                            > Jun 2009 </span
                          >
                        </span>
                         
                      </a>

                       
                      <div className="pvs-entity__action-container">
                         
                      </div>
                    </div>

                    <div className="pvs-list__outer-container">
                       
                      <ul className="pvs-list">
                        <li className=" ">
                          <div
                            className="display-flex mv1 link-without-hover-visited"
                          >
                             
                            <div className="display-flex">
                              <div className="display-flex full-width">
                                <div
                                  className="pv-shared-text-with-see-more t-14 t-normal t-black display-flex align-items-center"
                                >
                                  <div
                                    className="inline-show-more-text inline-show-more-text--is-collapsed"
                                    style={{ lineHeight: '1.9rem', maxHeight: '3.8rem'}}
                                  >
                                    <span aria-hidden="true"
                                      > Activities and societies:
                                      Band, Jazz Band </span
                                    ><span className="visually-hidden"
                                      > Activities and societies:
                                      Band, Jazz Band </span
                                    >

                                     
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li className=" ">
                          <div className="pvs-list__outer-container">
                             
                            <ul className="pvs-list">
                              <li className="pvs-list__item--with-top-padding">
                                <div className="display-flex">
                                  <div className="display-flex full-width">
                                    <div
                                      className="pv-shared-text-with-see-more t-14 t-normal t-black display-flex align-items-center"
                                    >
                                      <div
                                        className="inline-show-more-text inline-show-more-text--is-collapsed"
                                        style={{
                                            lineHeight: '1.9rem',
                                            maxHeight: '3.8rem'
                                        }}
                                      >
                                        <span aria-hidden="true"
                                          > Whenever I get paid by Amazon, I plan on giving this school at least 3 million dollars USD as a donation. Like I said, if I'm ever a billionaire something is wrong with me. 
                                          I give now, not when I'm 80 years old...</span
                                        ><span className="visually-hidden"
                                          > Clute, Texas </span
                                        >

                                         
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </li>
                            </ul>
                             
                          </div>
                        </li>
                      </ul>
                       
                    </div>
                  </div>
                </div>
              </li>
            </ul>
             
          </div>

 
                                  
        </section>)

        }

        export default Education;
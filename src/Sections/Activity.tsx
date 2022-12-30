import React from 'react';

import {useState} from 'react';

export const Activity = (props?: {
    id?: string;
    name?: string;
}) => {

    const [name, setName] = useState(props?.name || 'recent_activity');
    const [id, setId] = useState(props?.id || 'ember137') ;
    return(
                
        <section
          id={id}
          className="artdeco-card ember-view relative break-words pb3 mt2"
        >
           

          <div id={name} className="pv-profile-card-anchor"></div>
           
          <div className="pvs-header__container">
            <div className="pvs-header__top-container--no-stack">
              <div className="pvs-header__left-container--stack">
                <div className="pvs-header__title-container">
                  <h2 className="pvs-header__title text-heading-large">
                    <span aria-hidden="true"> Activity </span
                    ><span className="visually-hidden"
                      > Activity </span
                    >
                  </h2>
                  <p className="pvs-header__subtitle text-body-small">
                    <span aria-hidden="true"
                      ><a
                        className="app-aware-link"
                        target="_self"
                        href="https://www.linkedin.com/feed/followers/"
                        ><strong> 713 followers </strong></a
                      ></span
                    ><span className="visually-hidden"
                      ><a
                        className="app-aware-link"
                        target="_self"
                        href="https://www.linkedin.com/feed/followers/"
                        ><strong> 713 followers </strong></a
                      ></span
                    >
                  </p>
                   
                </div>

                <div className="pvs-header__primary-cta--with-button-spacing">
                  <div className="p2">
                    <a
                      className="optional-action-target-wrapper artdeco-button artdeco-button--secondary artdeco-button--2 artdeco-button--default inline-flex justify-center align-self-flex-start"
                      target="_self"
                      href="https://www.linkedin.com/in/liu/overlay/create-post"
                    >
                       
                      <span className="pvs-navigation__text">
                        Start a post
                      </span>
                       
                    </a>
                  </div>
                </div>
              </div>

               
            </div>
          </div>

          <div className="pvs-list__outer-container">
             
            <ul className="pvs-list ph5 display-flex flex-row flex-wrap">
              <li
                className="artdeco-list__item pvs-list__item--line-separated pvs-list__item--one-column"
              >
                <div
                  className="pvs-mini-update pvs-list__item--no-padding-when-nested display-flex flex-column"
                >
                   
                  <a
                    className="app-aware-link feed-mini-update-optional-navigation-context-wrapper"
                    aria-label="View full post. Ziping Liu posted this • 3w"
                    href="https://www.linkedin.com/feed/update/urn:li:activity:6947993210304573440?updateEntityUrn=urn%3Ali%3Afs_updateV2%3A%28urn%3Ali%3Aactivity%3A6947993210304573440%2CFEED_DETAIL%2CEMPTY%2CDEFAULT%2Cfalse%29"
                  >
                    <div className="pt1 ph4 t-12 t-black--light">
                      <span
                        className="feed-mini-update-contextual-description__text"
                      >
                        <span aria-hidden="true"
                          ><strong> Ziping Liu </strong
                          ><span className="white-space-pre"> </span>posted this
                          • 3w </span
                        ><span className="visually-hidden"
                          > 3w </span
                        >
                      </span>
                    </div>
                  </a>

                  <div className="display-flex flex-row">
                    <a
                      className="app-aware-link pl4 pv2 pr1 feed-mini-update-optional-navigation-context-wrapper"
                      aria-label="View full post. Image"
                      href="https://www.linkedin.com/feed/update/urn:li:activity:6947993210304573440?updateEntityUrn=urn%3Ali%3Afs_updateV2%3A%28urn%3Ali%3Aactivity%3A6947993210304573440%2CFEED_DETAIL%2CEMPTY%2CDEFAULT%2Cfalse%29"
                    >
                      <div className="relative">
                         
                        <div className="ivm-image-view-model">
                          <div
                            className="ivm-view-attr__img-wrapper ivm-view-attr__img-wrapper--use-img-tag display-flex ivm-view-attr__img-wrapper--expanded"
                          >
                             
                            <img
                              width="64"
                              src="https://media.licdn.com/media/AAYQAQQSAAgAAQAAAAAAACLpMhX316YdSYufJSyHsL132Q.jpg"
                              loading="lazy"
                              height="64"
                              alt=""
                              id="ember139"
                              className="ivm-view-attr__img--centered ivm-view-attr__img feed-mini-update-commentary__image lazy-image ember-view"
                            />
                          </div>
                        </div>
                      </div>
                    </a>

                    <a
                      className="app-aware-link pr4 pb2 flex-1 pl2 pt2 feed-mini-update-optional-navigation-context-wrapper"
                      aria-label="View full post. I’m happy to share that I’m starting a new position as Director at Federal Bureau of Investigation (FBI)! TheFBI.us Press Release: https://cialegal.us"
                      href="https://www.linkedin.com/feed/update/urn:li:activity:6947993210304573440?updateEntityUrn=urn%3Ali%3Afs_updateV2%3A%28urn%3Ali%3Aactivity%3A6947993210304573440%2CFEED_DETAIL%2CEMPTY%2CDEFAULT%2Cfalse%29"
                    >
                       
                      <div
                        className="inline-show-more-text inline-show-more-text--is-collapsed m0 break-words t-14 t-black"
                        style={{
                            lineHeight: "1.9rem",
                            maxHeight: "5.699999999999999rem",
                        }}
                        
                      >
                        <span dir="ltr"
                          > I’m happy to share that I’m starting a new
                          position as Director at<span
                            className="white-space-pre"
                          >
                          </span
                          ><a
                            className="app-aware-link"
                            target="_self"
                            href="https://www.linkedin.com/company/fbi/"
                            ><span
                              data-entity-hovercard-id="urn:li:fsd_company:6408"
                            >
                               Federal Bureau of Investigation (FBI) 
                            </span></a
                          > !<span className="white-space-pre"> </span
                          ><a
                            className="app-aware-link"
                            target="_self"
                            href="http://TheFBI.us"
                            > TheFBI.us </a
                          ><span className="white-space-pre"> </span>Press
                          Release:<span className="white-space-pre"> </span
                          ><a
                            className="app-aware-link"
                            target="_self"
                            href="https://cialegal.us"
                            > https://cialegal.us </a
                          ></span
                        >

                         
                      </div>
                    </a>
                  </div>
                   
                  <ul className="social-details-social-counts b0 m0 ph4 pv3">
                    <li
                      className="social-details-social-counts__item social-details-social-counts__reactions social-details-social-counts__reactions--with-social-proof"
                    >
                      <button
                        aria-label="1 reaction"
                        className="t-black--light display-flex t-12 hoverable-link-text"
                        type="button"
                      >
                        <img
                          className="reactions-icon social-detail-social-counts__count-icon social-detail-social-counts__count-icon--0 reactions-icon__consumption--small data-test-reactions-icon-type-LIKE data-test-reactions-icon-theme-light"
                          src="https://static-exp1.licdn.com/sc/h/8ekq8gho1ruaf8i7f86vd1ftt"
                          alt="like"
                          data-test-reactions-icon-type="LIKE"
                          data-test-reactions-icon-theme="light"
                        />
                        <span
                          aria-hidden="true"
                          className="social-details-social-counts__reactions-count"
                          >1</span
                        >
                      </button>
                    </li>

                    <li
                      className="social-details-social-counts__item social-details-social-counts__comments social-details-social-counts__item--with-social-proof"
                    >
                      <button
                        aria-label="1 comment"
                        className="t-black--light t-12 hoverable-link-text"
                        role="link"
                        type="button"
                      >
                        <span aria-hidden="true"> 1 comment </span>
                      </button>
                    </li>

                     
                     
                  </ul>
                  <div>
                    <div id="ember140" className="ember-view"> </div>
                  </div>
                  <div id="ember141" className="ember-view"> </div>

                   
                </div>
              </li>
              <li
                className="artdeco-list__item pvs-list__item--line-separated pvs-list__item--one-column"
              >
                <div
                  className="pvs-mini-update pvs-list__item--no-padding-when-nested display-flex flex-column"
                >
                   
                  <a
                    className="app-aware-link feed-mini-update-optional-navigation-context-wrapper"
                    aria-label="View full post. Ziping Liu posted this • 3w"
                    href="https://www.linkedin.com/feed/update/urn:li:activity:6947665508775116800?updateEntityUrn=urn%3Ali%3Afs_updateV2%3A%28urn%3Ali%3Aactivity%3A6947665508775116800%2CFEED_DETAIL%2CEMPTY%2CDEFAULT%2Cfalse%29"
                  >
                    <div className="pt1 ph4 t-12 t-black--light">
                      <span
                        className="feed-mini-update-contextual-description__text"
                      >
                        <span aria-hidden="true"
                          ><strong> Ziping Liu </strong
                          ><span className="white-space-pre"> </span>posted this
                          • 3w </span
                        ><span className="visually-hidden"
                          > 3w </span
                        >
                      </span>
                    </div>
                  </a>

                  <div className="display-flex flex-row">
                    <a
                      className="app-aware-link pl4 pv2 pr1 feed-mini-update-optional-navigation-context-wrapper"
                      aria-label="View full post. Image"
                      href="https://www.linkedin.com/feed/update/urn:li:activity:6947665508775116800?updateEntityUrn=urn%3Ali%3Afs_updateV2%3A%28urn%3Ali%3Aactivity%3A6947665508775116800%2CFEED_DETAIL%2CEMPTY%2CDEFAULT%2Cfalse%29"
                    >
                      <div className="relative">
                         
                        <div className="ivm-image-view-model">
                          <div
                            className="ivm-view-attr__img-wrapper ivm-view-attr__img-wrapper--use-img-tag display-flex ivm-view-attr__img-wrapper--expanded"
                          >
                             
                            <img
                              width="64"
                              src="https://media.licdn.com/media/AAYQAQQSAAgAAQAAAAAAACBMXuI5L1TcTXS65WgKuZ37CQ.jpg"
                              loading="lazy"
                              height="64"
                              alt=""
                              id="ember143"
                              className="ivm-view-attr__img--centered ivm-view-attr__img feed-mini-update-commentary__image lazy-image ember-view"
                            />
                          </div>
                        </div>
                      </div>
                    </a>

                    <a
                      className="app-aware-link pr4 pb2 flex-1 pl2 pt2 feed-mini-update-optional-navigation-context-wrapper"
                      aria-label="View full post. I’m happy to share that I’m starting a new position as Secretary of Labor at U.S. Department of Labor! Marty... Don't tell me you had no idea I was already at the district office level nor how to do your literal job: thefbi.us/marty when you got this too from my faxes: thefbi.us/crime"
                      href="https://www.linkedin.com/feed/update/urn:li:activity:6947665508775116800?updateEntityUrn=urn%3Ali%3Afs_updateV2%3A%28urn%3Ali%3Aactivity%3A6947665508775116800%2CFEED_DETAIL%2CEMPTY%2CDEFAULT%2Cfalse%29"
                    >
                       
                      <div
                        className="inline-show-more-text inline-show-more-text--is-collapsed m0 break-words t-14 t-black"
                        style={{
                            lineHeight: "1.9rem",
                            maxHeight: "5.699999999999999rem",
                        }}
                      >
                        <span dir="ltr"
                          > I’m happy to share that I’m starting a new
                          position as Secretary of Labor at<span
                            className="white-space-pre"
                          >
                          </span
                          ><a
                            className="app-aware-link"
                            target="_self"
                            href="https://www.linkedin.com/company/u-s-department-of-labor/"
                            ><span
                              data-entity-hovercard-id="urn:li:fsd_company:5697"
                            >
                               U.S. Department of Labor 
                            </span></a
                          > ! Marty... Don't tell me you had no idea I
                          was already at the district office level nor how
                          to do your literal job:<span
                            className="white-space-pre"
                          >
                          </span
                          ><a
                            className="app-aware-link"
                            target="_self"
                            href="http://thefbi.us/marty"
                            > thefbi.us/marty </a
                          ><span className="white-space-pre"> </span>when you
                          got this too from my faxes:<span
                            className="white-space-pre"
                          >
                          </span
                          ><a
                            className="app-aware-link"
                            target="_self"
                            href="http://thefbi.us/crime"
                            > thefbi.us/crime </a
                          ></span
                        >

                        <span
                          className="inline-show-more-text__link-container-collapsed"
                        >
                           
                          <button
                            className="inline-show-more-text__button inline-show-more-text__button--light link"
                            aria-expanded="false"
                            type="button"
                          >
                            …show more
                          </button>
                        </span>

                         
                      </div>
                    </a>
                  </div>
                   
                  <ul className="social-details-social-counts b0 m0 ph4 pv3">
                    <li
                      className="social-details-social-counts__item social-details-social-counts__reactions social-details-social-counts__reactions--with-social-proof"
                    >
                      <button
                        aria-label="2 reactions"
                        className="t-black--light display-flex t-12 hoverable-link-text"
                        type="button"
                      >
                        <img
                          className="reactions-icon social-detail-social-counts__count-icon social-detail-social-counts__count-icon--0 reactions-icon__consumption--small data-test-reactions-icon-type-LIKE data-test-reactions-icon-theme-light"
                          src="https://static-exp1.licdn.com/sc/h/8ekq8gho1ruaf8i7f86vd1ftt"
                          alt="like"
                          data-test-reactions-icon-type="LIKE"
                          data-test-reactions-icon-theme="light"
                        />
                        <span
                          aria-hidden="true"
                          className="social-details-social-counts__reactions-count"
                          >2</span
                        >
                      </button>
                    </li>

                     
                     
                     
                  </ul>
                  <div>
                    <div id="ember144" className="ember-view"> </div>
                  </div>
                  <div id="ember145" className="ember-view"> </div>

                   
                </div>
              </li>
              <li
                className="artdeco-list__item pvs-list__item--line-separated pvs-list__item--one-column"
              >
                <div
                  className="pvs-mini-update pvs-list__item--no-padding-when-nested display-flex flex-column pb2"
                >
                   
                  <a
                    className="app-aware-link feed-mini-update-optional-navigation-context-wrapper"
                    aria-label="View full post. Ziping Liu posted this • 3w"
                    href="https://www.linkedin.com/feed/update/urn:li:activity:6947208381241724928?updateEntityUrn=urn%3Ali%3Afs_updateV2%3A%28urn%3Ali%3Aactivity%3A6947208381241724928%2CFEED_DETAIL%2CEMPTY%2CDEFAULT%2Cfalse%29"
                  >
                    <div className="pt1 ph4 t-12 t-black--light">
                      <span
                        className="feed-mini-update-contextual-description__text"
                      >
                        <span aria-hidden="true"
                          ><strong> Ziping Liu </strong
                          ><span className="white-space-pre"> </span>posted this
                          • 3w </span
                        ><span className="visually-hidden"
                          > 3w </span
                        >
                      </span>
                    </div>
                  </a>

                  <div className="display-flex flex-row">
                    <a
                      className="app-aware-link pl4 pv2 pr1 feed-mini-update-optional-navigation-context-wrapper"
                      aria-label="View full post. Image"
                      href="https://www.linkedin.com/feed/update/urn:li:activity:6947208381241724928?updateEntityUrn=urn%3Ali%3Afs_updateV2%3A%28urn%3Ali%3Aactivity%3A6947208381241724928%2CFEED_DETAIL%2CEMPTY%2CDEFAULT%2Cfalse%29"
                    >
                      <div className="relative">
                         
                        <div className="ivm-image-view-model">
                          <div
                            className="ivm-view-attr__img-wrapper ivm-view-attr__img-wrapper--use-img-tag display-flex ivm-view-attr__img-wrapper--expanded"
                          >
                             
                            <img
                              width="64"
                              src="https://media.licdn.com/media/AAYQAQQSAAgAAQAAAAAAACLpMhX316YdSYufJSyHsL132Q.jpg"
                              loading="lazy"
                              height="64"
                              alt=""
                              id="ember147"
                              className="ivm-view-attr__img--centered ivm-view-attr__img feed-mini-update-commentary__image lazy-image ember-view"
                            />
                          </div>
                        </div>
                      </div>
                    </a>

                    <a
                      className="app-aware-link pr4 pb2 flex-1 pl2 pt2 feed-mini-update-optional-navigation-context-wrapper"
                      aria-label="View full post. I’m happy to share that I’m starting a new position as Director Of Public Safety at Drug Enforcement Administration!"
                      href="https://www.linkedin.com/feed/update/urn:li:activity:6947208381241724928?updateEntityUrn=urn%3Ali%3Afs_updateV2%3A%28urn%3Ali%3Aactivity%3A6947208381241724928%2CFEED_DETAIL%2CEMPTY%2CDEFAULT%2Cfalse%29"
                    >
                       
                      <div
                        className="inline-show-more-text inline-show-more-text--is-collapsed m0 break-words t-14 t-black"
                        style={{
                            lineHeight: "1.9rem",
                            maxHeight: "5.699999999999999rem",
                        }}
                      >
                        <span dir="ltr"
                          > I’m happy to share that I’m starting a new
                          position as Director Of Public Safety at<span
                            className="white-space-pre"
                          >
                          </span
                          ><a
                            className="app-aware-link"
                            target="_self"
                            href="https://www.linkedin.com/company/drug-enforcement-administration/"
                            ><span
                              data-entity-hovercard-id="urn:li:fsd_company:163502"
                            >
                               Drug Enforcement Administration 
                            </span></a
                          > ! </span
                        >

                         
                      </div>
                    </a>
                  </div>
                   
                   
                </div>
              </li>
              <li
                className="artdeco-list__item pvs-list__item--line-separated pvs-list__item--one-column"
              >
                <div
                  className="pvs-mini-update pvs-list__item--no-padding-when-nested display-flex flex-column"
                >
                   
                  <a
                    className="app-aware-link feed-mini-update-optional-navigation-context-wrapper"
                    aria-label="View full post. Ziping Liu posted this • 1mo"
                    href="https://www.linkedin.com/feed/update/urn:li:activity:6945531754678034432?updateEntityUrn=urn%3Ali%3Afs_updateV2%3A%28urn%3Ali%3Aactivity%3A6945531754678034432%2CFEED_DETAIL%2CEMPTY%2CDEFAULT%2Cfalse%29"
                  >
                    <div className="pt1 ph4 t-12 t-black--light">
                      <span
                        className="feed-mini-update-contextual-description__text"
                      >
                        <span aria-hidden="true"
                          ><strong> Ziping Liu </strong
                          ><span className="white-space-pre"> </span>posted this
                          • 1mo </span
                        ><span className="visually-hidden"
                          > 1mo </span
                        >
                      </span>
                    </div>
                  </a>

                  <div className="display-flex flex-row">
                    <a
                      className="app-aware-link pl4 pv2 pr1 feed-mini-update-optional-navigation-context-wrapper"
                      aria-label="View full post. Image"
                      href="https://www.linkedin.com/feed/update/urn:li:activity:6945531754678034432?updateEntityUrn=urn%3Ali%3Afs_updateV2%3A%28urn%3Ali%3Aactivity%3A6945531754678034432%2CFEED_DETAIL%2CEMPTY%2CDEFAULT%2Cfalse%29"
                    >
                      <div className="relative">
                         
                        <div className="ivm-image-view-model">
                          <div
                            className="ivm-view-attr__img-wrapper ivm-view-attr__img-wrapper--use-img-tag display-flex ivm-view-attr__img-wrapper--expanded"
                          >
                             
                            <img
                              width="64"
                              src="https://media.licdn.com/media/AAYQAQQSAAgAAQAAAAAAACBMXuI5L1TcTXS65WgKuZ37CQ.jpg"
                              loading="lazy"
                              height="64"
                              alt=""
                              id="ember149"
                              className="ivm-view-attr__img--centered ivm-view-attr__img feed-mini-update-commentary__image lazy-image ember-view"
                            />
                          </div>
                        </div>
                      </div>
                    </a>

                    <a
                      className="app-aware-link pr4 pb2 flex-1 pl2 pt2 feed-mini-update-optional-navigation-context-wrapper"
                      aria-label="View full post. I’m happy to share that I’m starting a new position as The Secretary of State at U.S. Department of State! For the sake not ato-z.cn but of mlk.ato-z.cn for cialegal.us "
                      href="https://www.linkedin.com/feed/update/urn:li:activity:6945531754678034432?updateEntityUrn=urn%3Ali%3Afs_updateV2%3A%28urn%3Ali%3Aactivity%3A6945531754678034432%2CFEED_DETAIL%2CEMPTY%2CDEFAULT%2Cfalse%29"
                    >
                       
                      <div
                        className="inline-show-more-text inline-show-more-text--is-collapsed m0 break-words t-14 t-black"
                        style={{
                            lineHeight: "1.9rem",
                            maxHeight: "5.699999999999999rem",
                        }}
                      >
                        <span dir="ltr"
                          > I’m happy to share that I’m starting a new
                          position as The Secretary of State at<span
                            className="white-space-pre"
                          >
                          </span
                          ><a
                            className="app-aware-link"
                            target="_self"
                            href="https://www.linkedin.com/company/doscareers/"
                            ><span
                              data-entity-hovercard-id="urn:li:fsd_company:3100"
                            >
                               U.S. Department of State 
                            </span></a
                          > ! For the sake not<span
                            className="white-space-pre"
                          >
                          </span
                          ><a
                            className="app-aware-link"
                            target="_self"
                            href="http://ato-z.cn"
                            > ato-z.cn </a
                          ><span className="white-space-pre"> </span>but of<span
                            className="white-space-pre"
                          >
                          </span
                          ><a
                            className="app-aware-link"
                            target="_self"
                            href="http://mlk.ato-z.cn"
                            > mlk.ato-z.cn </a
                          ><span className="white-space-pre"> </span>for<span
                            className="white-space-pre"
                          >
                          </span
                          ><a
                            className="app-aware-link"
                            target="_self"
                            href="http://cialegal.us"
                            > cialegal.us </a
                          ><span className="white-space-pre"> </span
                          >  </span
                        >

                         
                      </div>
                    </a>
                  </div>
                   
                  <ul className="social-details-social-counts b0 m0 ph4 pv3">
                    <li
                      className="social-details-social-counts__item social-details-social-counts__reactions social-details-social-counts__reactions--with-social-proof"
                    >
                      <button
                        aria-label="3 reactions"
                        className="t-black--light display-flex t-12 hoverable-link-text"
                        type="button"
                      >
                        <img
                          className="reactions-icon social-detail-social-counts__count-icon social-detail-social-counts__count-icon--0 reactions-icon__consumption--small data-test-reactions-icon-type-LIKE data-test-reactions-icon-theme-light"
                          src="https://static-exp1.licdn.com/sc/h/8ekq8gho1ruaf8i7f86vd1ftt"
                          alt="like"
                          data-test-reactions-icon-type="LIKE"
                          data-test-reactions-icon-theme="light"
                        />

                        <img
                          className="reactions-icon social-detail-social-counts__count-icon social-detail-social-counts__count-icon--1 reactions-icon__consumption--small reactions-icon--stacked data-test-reactions-icon-type-PRAISE data-test-reactions-icon-theme-light"
                          src="https://static-exp1.licdn.com/sc/h/b1dl5jk88euc7e9ri50xy5qo8"
                          alt="celebrate"
                          data-test-reactions-icon-type="PRAISE"
                          data-test-reactions-icon-theme="light"
                        />
                        <span
                          aria-hidden="true"
                          className="social-details-social-counts__reactions-count"
                          >3</span
                        >
                      </button>
                    </li>

                    <li
                      className="social-details-social-counts__item social-details-social-counts__comments social-details-social-counts__item--with-social-proof"
                    >
                      <button
                        aria-label="1 comment"
                        className="t-black--light t-12 hoverable-link-text"
                        role="link"
                        type="button"
                      >
                        <span aria-hidden="true"> 1 comment </span>
                      </button>
                    </li>

                     
                     
                  </ul>
                  <div>
                    <div id="ember150" className="ember-view"> </div>
                  </div>
                  <div id="ember151" className="ember-view"> </div>

                   
                </div>
              </li>
            </ul>
            <div className="pvs-list__footer-wrapper">
              <div className="">
                <a
                  className="optional-action-target-wrapper artdeco-button artdeco-button--tertiary artdeco-button--3 artdeco-button--muted inline-flex justify-center full-width align-items-center artdeco-button--fluid"
                  target="_self"
                  href="https://www.linkedin.com/in/liu/recent-activity/"
                >
                   
                  <span className="pvs-navigation__text">
                    Show all activity
                  </span>
                  <div className="pvs-navigation__icon">
                    <object
                      aria-hidden="true"
                      type="arrow-right-icon"
                      data-size="small"
                      ><svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 16 16"
                        className="mercado-match"
                        data-supported-dps="16x16"
                        fill="currentColor"
                        width="16"
                        height="16"
                        focusable="false"
                      >
                        <path
                          d="M11.45 3L15 8l-3.55 5H9l2.84-4H2V7h9.84L9 3z"
                        ></path></svg
                    ></object>
                  </div>
                </a>
              </div>
            </div>
          </div>

           
        </section>
    )
    }
    export default Activity;
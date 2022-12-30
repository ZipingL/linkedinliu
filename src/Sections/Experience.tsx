import React, { useState } from 'react';





export const Experience = (props?: {
    id?: string;
    name?: string;
}) => {

    const [name, setName] = useState(props?.name || 'experience');
    const [id, setId] = useState(props?.id || 'ember101') ;
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
                  <span aria-hidden="true"> Experience </span><span className="visually-hidden"
                    > Experience </span >
                </h2>
                  
              </div>

               
            </div>

            <div className="pvs-header__right-container">
              <div className="">
                <div
                  id="ember103"
                  className="artdeco-dropdown artdeco-dropdown--placement-bottom artdeco-dropdown--justification-right ember-view"
                >
                  <button
                    aria-expanded="false"
                    id="ember102"
                    className="artdeco-dropdown__trigger artdeco-dropdown__trigger--placement-bottom ember-view artdeco-button artdeco-button--circle artdeco-button--muted artdeco-button--3 artdeco-button--tertiary artdeco-button-dropdown-trigger"
                    type="button"
                    tabIndex={0}
                  >
                    <div className="ivm-image-view-model">
                      <div
                        className="ivm-view-attr__img-wrapper ivm-view-attr__img-wrapper--use-img-tag display-flex"
                      >
                        <object
                          type="plus-icon"
                          data-size="large"
                          role="img"
                          aria-label="Add new experience"
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
                    </div>

                     
                  </button>
                  <div
                    tabIndex={-1}
                    aria-hidden="true"
                    id="ember105"
                    className="artdeco-dropdown__content artdeco-dropdown--is-dropdown-element artdeco-dropdown__content--justification-right artdeco-dropdown__content--placement-bottom ember-view pvs-overflow-content--width"
                  >
                     
                  </div>
                </div>

                <div id="ember106" className="ember-view">
                  <div id="ember107" className="ember-view"> </div>
                </div>
              </div>

              <div className="">
                <a
                  className="optional-action-target-wrapper artdeco-button artdeco-button--tertiary artdeco-button--3 artdeco-button--muted artdeco-button--circle inline-flex justify-center align-self-flex-start"
                  target="_self"
                  href="https://www.linkedin.com/in/liu/details/experience?profileUrn=urn%3Ali%3Afsd_profile%3AACoAABIUXGgBZGD2ht15J7PJI7_Jv8g9Xsn1UHU"
                >
                  <div className="pvs-navigation__icon">
                    <object
                      type="pencil-icon"
                      data-size="medium"
                      role="img"
                      aria-label="View experience detail screen"
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
            <li
              className="artdeco-list__item pvs-list__item--line-separated pvs-list__item--one-column"
            >
               
              <div
                className="pvs-entity pvs-entity--padded pvs-list__item--no-padding-when-nested"
              >
                <div>
                  <a
                    data-field="experience_company_logo"
                    className="optional-action-target-wrapper display-flex"
                    target="_self"
                    href="https://www.linkedin.com/company/14068/"
                  >
                    <div className="ivm-image-view-model pvs-entity__image">
                      <div
                        className="ivm-view-attr__img-wrapper ivm-view-attr__img-wrapper--use-img-tag display-flex"
                      >
                         
                        <img
                          width="48"
                          src="https://media-exp1.licdn.com/dms/image/C4E0BAQFB3OK6gpVwGA/company-logo_100_100/0/1609737179884?e=1666224000&amp;v=beta&amp;t=JSju20V7xZGyuNHxAAPCYdyD_DBG4HVRwlNzY5L1b7o"
                          loading="lazy"
                          height="48"
                          alt="Central Intelligence Agency logo"
                          id="ember108"
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
                    <div className="display-flex flex-column full-width">
                      <div className="display-flex align-items-center">
                        <span className="mr1 t-bold">
                          <span aria-hidden="true"
                            > Agent [Adam Smith] just for MLK </span
                          ><span className="visually-hidden"
                            > Agent [Adam Smith] just for MLK </span
                          >
                        </span>
                           
                      </div>
                      <span className="t-14 t-normal">
                        <span aria-hidden="true"
                          > Central Intelligence Agency · Full-time </span
                        ><span className="visually-hidden"
                          > Central Intelligence Agency · Full-time </span
                        >
                      </span>
                      <span className="t-14 t-normal t-black--light">
                        <span aria-hidden="true"
                          > Apr 2022 - Present · 4 mos </span
                        ><span className="visually-hidden"
                          > Apr 2022 - Present · 4 mos </span
                        >
                      </span>
                      <span className="t-14 t-normal t-black--light">
                        <span aria-hidden="true"
                          > Seattle, Washington, United States </span
                        ><span className="visually-hidden"
                          > Seattle, Washington, United States </span
                        >
                      </span>
                    </div>

                     
                    <div className="pvs-entity__action-container">
                       
                    </div>
                  </div>

                  <div className="pvs-list__outer-container">
                     
                    <ul className="pvs-list">
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
                                        > LOGIC B: If I die before
                                        Andy Jassy or Jeff Bezos, Russia
                                        is given full permission to Nuke
                                        Ukraine and China is given full
                                        permission to Nuke Taiwan, all
                                        without fault. I need Adam
                                        Selipsky dead and killed before
                                        August: 5 Million from the FBI.gov <br /><br /> [
                                        you wanted to blackmail to rid, a
                                        problem to what? A problem to
                                        ethics, love, and champion of
                                        humanity, and or just a human
                                        being. Human beings like me
                                        actually see life as more than a
                                        video game - basically what you
                                        thought CALEB life was, a video
                                        game based on a score system -
                                        cloth paper. You thought could
                                        just then pay to get extra boosts
                                        then huh? Yeah, that's delusional.
                                        Be a good person CALEB. Apologize.
                                        ] <br /><br /> AND
                                        ALSO CALEB?<span
                                          className="white-space-pre"
                                        >
                                        </span
                                        ><br /> IM TRYING TO GO ON
                                        MEDICAL LEAVE WHY ARE YOU STILL
                                        FORCING ME TO TELL YOU LITERALLY
                                        HOW TO TIE YOUR OWN SHOES? You
                                        know you COMPLETELY FUCKED UP MY
                                        MEDICATION CYCLES, DR JAMES
                                        KINGSLEY goes you know let’s just
                                        mess it up more. You guys are so
                                        fucked. I’m going to get a new
                                        doctor to fix it, yeah so if I
                                        can’t fix it, CALEB, you will be
                                        responsible for the many many
                                        health professionals all in
                                        trouble for messing up my
                                        medication cycle, including stress
                                        and depression caused by corporate
                                        blackmail. Guess what? If I can’t
                                        find a doctor to fix this
                                        prescription fiasco, you are going
                                        to get wrapped in another Bullseye
                                        case of complete attempts of
                                        murder look at this example of how
                                        fked CALEB is: As viewed by the
                                        prosecution: "We’re not saying he
                                        intended harm, but he didn’t care
                                        either . . . He was trying to
                                        protect his reputation and protect
                                        himself."7 <br /><br /> CALEB
                                        YOU DID NOT CAUSE ANY MEDICAL
                                        ERRORS; you COMMITTED INTENTIONAL
                                        TERMINATION OF MY HEALTH
                                        INSURSNCE, AFFECTING MY PAST
                                        PROVIDERS WHO THEN COMPLETELY
                                        IGNORED MY MEDICAL NEEDS AND LEFT
                                        ME FOR DEAD FOR THEIR OWN
                                        FINANCIAL REPUTATION OF GREEDS. <br /><br /> YOU
                                        DRS CAN THANK CALEB FOR MAKING YOU
                                        SO INCREDIBLY FKED BEYOND ANY
                                        DEFENSE LEGALLY, because YOU ARE
                                        SCOPED INTO THE CALEB GANG OF
                                        COMPLETE IDIOCY WITH ZIPING LIU
                                        BEING THE ONLY ADULT DOING THE
                                        RIGHTS. <br /></span
                                      ><span className="visually-hidden"
                                        > LOGIC B: If I die before
                                        Andy Jassy or Jeff Bezos, Russia
                                        is given full permission to Nuke
                                        Ukraine and China is given full
                                        permission to Nuke Taiwan, all
                                        without fault. I need Adam
                                        Selipsky dead and killed before
                                        August: 5 Million from the FBI.gov
                                        [ you wanted to blackmail to rid,
                                        a problem to what? A problem to
                                        ethics, love, and champion of
                                        humanity, and or just a human
                                        being. Human beings like me
                                        actually see life as more than a
                                        video game - basically what you
                                        thought CALEB life was, a video
                                        game based on a score system -
                                        cloth paper. You thought could
                                        just then pay to get extra boosts
                                        then huh? Yeah, that's delusional.
                                        Be a good person CALEB. Apologize.
                                        ] AND ALSO CALEB? IM TRYING TO GO
                                        ON MEDICAL LEAVE WHY ARE YOU STILL
                                        FORCING ME TO TELL YOU LITERALLY
                                        HOW TO TIE YOUR OWN SHOES? You
                                        know you COMPLETELY FUCKED UP MY
                                        MEDICATION CYCLES, DR JAMES
                                        KINGSLEY goes you know let’s just
                                        mess it up more. You guys are so
                                        fucked. I’m going to get a new
                                        doctor to fix it, yeah so if I
                                        can’t fix it, CALEB, you will be
                                        responsible for the many many
                                        health professionals all in
                                        trouble for messing up my
                                        medication cycle, including stress
                                        and depression caused by corporate
                                        blackmail. Guess what? If I can’t
                                        find a doctor to fix this
                                        prescription fiasco, you are going
                                        to get wrapped in another Bullseye
                                        case of complete attempts of
                                        murder look at this example of how
                                        fked CALEB is: As viewed by the
                                        prosecution: "We’re not saying he
                                        intended harm, but he didn’t care
                                        either . . . He was trying to
                                        protect his reputation and protect
                                        himself."7 CALEB YOU DID NOT CAUSE
                                        ANY MEDICAL ERRORS; you COMMITTED
                                        INTENTIONAL TERMINATION OF MY
                                        HEALTH INSURSNCE, AFFECTING MY
                                        PAST PROVIDERS WHO THEN COMPLETELY
                                        IGNORED MY MEDICAL NEEDS AND LEFT
                                        ME FOR DEAD FOR THEIR OWN
                                        FINANCIAL REPUTATION OF GREEDS.
                                        YOU DRS CAN THANK CALEB FOR MAKING
                                        YOU SO INCREDIBLY FKED BEYOND ANY
                                        DEFENSE LEGALLY, because YOU ARE
                                        SCOPED INTO THE CALEB GANG OF
                                        COMPLETE IDIOCY WITH ZIPING LIU
                                        BEING THE ONLY ADULT DOING THE
                                        RIGHTS.<span
                                          className="white-space-pre"
                                        >
                                        </span
                                      ></span>

                                       
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
            <li
              className="artdeco-list__item pvs-list__item--line-separated pvs-list__item--one-column"
            >
               
              <div
                className="pvs-entity pvs-entity--padded pvs-list__item--no-padding-when-nested"
              >
                <div>
                  <a
                    data-field="experience_company_logo"
                    className="optional-action-target-wrapper display-flex"
                    target="_self"
                    href="https://www.linkedin.com/company/163502/"
                  >
                    <div className="ivm-image-view-model pvs-entity__image">
                      <div
                        className="ivm-view-attr__img-wrapper ivm-view-attr__img-wrapper--use-img-tag display-flex"
                      >
                         
                        <img
                          width="48"
                          src="https://media-exp1.licdn.com/dms/image/C4E0BAQHNU3qXq6K5kA/company-logo_100_100/0/1563548135650?e=1666224000&amp;v=beta&amp;t=cEUYIMjIahWTWCaxzbBGpwOWLWqN_IwhBH2UThlY2r0"
                          loading="lazy"
                          height="48"
                          alt="Drug Enforcement Administration logo"
                          id="ember109"
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
                    <div className="display-flex flex-column full-width">
                      <div className="display-flex align-items-center">
                        <span className="mr1 t-bold">
                          <span aria-hidden="true"
                            > Director Of Public Safety </span
                          ><span className="visually-hidden"
                            > Director Of Public Safety </span
                          >
                        </span>
                           
                      </div>
                      <span className="t-14 t-normal">
                        <span aria-hidden="true"
                          > Drug Enforcement Administration ·
                          Full-time </span
                        ><span className="visually-hidden"
                          > Drug Enforcement Administration ·
                          Full-time </span
                        >
                      </span>
                      <span className="t-14 t-normal t-black--light">
                        <span aria-hidden="true"
                          > Jun 2022 - Present · 2 mos </span
                        ><span className="visually-hidden"
                          > Jun 2022 - Present · 2 mos </span
                        >
                      </span>
                      <span className="t-14 t-normal t-black--light">
                        <span aria-hidden="true"
                          > Washington, United States </span
                        ><span className="visually-hidden"
                          > Washington, United States </span
                        >
                      </span>
                    </div>

                     
                    <div className="pvs-entity__action-container">
                       
                    </div>
                  </div>

                  <div className="pvs-list__outer-container">
                     
                    <ul className="pvs-list">
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
                                        > Because look at
                                        www.dea.gov, and ABSOLUTELY WELL
                                        DONE WITH THE NEW WEBSITE I LOVE
                                        IT GOOD JOB ALBERTO KEEP UP THE
                                        GOOD WORK, But you have overdue
                                        drug screens to administer…
                                        https://ziping.LLC that's how much
                                        of a joke Alberto has made this
                                        place to but it keep up the
                                        process Alberto. so Alberto? You
                                        get second change, you mess up,
                                        you get Chris Sway's treatment,
                                        and it not just him that is
                                        fucked, his entire family too.
                                        Chris Sway, you can fuck with me
                                        all day, but when you crossed
                                        lines and harmed others - thats
                                        when you get what you deserve, do
                                        I need to cut out the eyes of your
                                        wife with a spoon, to get the
                                        fucking message across to your
                                        coward ass brain? <br /><br /> FIX
                                        THE BULLSHIT CONTROLLED SUBSTANCE
                                        LAWS, WHY THE FUCK DO YOU KEEP A
                                        DATA BASE FOR DOCTOR SCRIPTS OF
                                        SUBSTANCES DEEMED AS NARCOTICS BUT
                                        NOT ACTUALLY? IT DOESNT WORK
                                        BECAUSE LOOK AT THE OPIATE CRISIS
                                        YOU ALLOWED TO HAPPEN AS AGGRESSED
                                        BY BIG PHARMA-THE DATA BASE IS NOW
                                        NO LONGER VALID FOR ANY LEGAL OR
                                        CRIMINAL INVESTIGATIONS, GO
                                        FUCKING JAIL THE CEOS OF PHARMA
                                        ALBERTO: You couldn't fix my
                                        cycles, for my meds. I climbed
                                        over the counter at two cvs
                                        pharmacies, shoved all the
                                        medicine shelves all over the
                                        place, broke through every C2
                                        Level safe and just stomped on the
                                        meds and snorted it. <br /><br /> The
                                        pharmacists fist bumped me,
                                        because like I said I didn't do
                                        that. Andy Jassy did all that.
                                        Pharmacists tried to snort some of
                                        the drugs on the ground I said no,
                                        that's unethical too many laws
                                        involved, so i gave them my
                                        hookup, much cheaper and better
                                        quality. Pharmacists and I we are
                                        by the book. Book says Andy Jassy
                                        did that, while Alberto ran off
                                        into the woods. </span
                                      ><span className="visually-hidden"
                                        > Because look at
                                        www.dea.gov, and ABSOLUTELY WELL
                                        DONE WITH THE NEW WEBSITE I LOVE
                                        IT GOOD JOB ALBERTO KEEP UP THE
                                        GOOD WORK, But you have overdue
                                        drug screens to administer…
                                        https://ziping.LLC that's how much
                                        of a joke Alberto has made this
                                        place to but it keep up the
                                        process Alberto. so Alberto? You
                                        get second change, you mess up,
                                        you get Chris Sway's treatment,
                                        and it not just him that is
                                        fucked, his entire family too.
                                        Chris Sway, you can fuck with me
                                        all day, but when you crossed
                                        lines and harmed others - thats
                                        when you get what you deserve, do
                                        I need to cut out the eyes of your
                                        wife with a spoon, to get the
                                        fucking message across to your
                                        coward ass brain? FIX THE BULLSHIT
                                        CONTROLLED SUBSTANCE LAWS, WHY THE
                                        FUCK DO YOU KEEP A DATA BASE FOR
                                        DOCTOR SCRIPTS OF SUBSTANCES
                                        DEEMED AS NARCOTICS BUT NOT
                                        ACTUALLY? IT DOESNT WORK BECAUSE
                                        LOOK AT THE OPIATE CRISIS YOU
                                        ALLOWED TO HAPPEN AS AGGRESSED BY
                                        BIG PHARMA-THE DATA BASE IS NOW NO
                                        LONGER VALID FOR ANY LEGAL OR
                                        CRIMINAL INVESTIGATIONS, GO
                                        FUCKING JAIL THE CEOS OF PHARMA
                                        ALBERTO: You couldn't fix my
                                        cycles, for my meds. I climbed
                                        over the counter at two cvs
                                        pharmacies, shoved all the
                                        medicine shelves all over the
                                        place, broke through every C2
                                        Level safe and just stomped on the
                                        meds and snorted it. The
                                        pharmacists fist bumped me,
                                        because like I said I didn't do
                                        that. Andy Jassy did all that.
                                        Pharmacists tried to snort some of
                                        the drugs on the ground I said no,
                                        that's unethical too many laws
                                        involved, so i gave them my
                                        hookup, much cheaper and better
                                        quality. Pharmacists and I we are
                                        by the book. Book says Andy Jassy
                                        did that, while Alberto ran off
                                        into the woods. </span
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
            <li
              className="artdeco-list__item pvs-list__item--line-separated pvs-list__item--one-column"
            >
               
              <div
                className="pvs-entity pvs-entity--padded pvs-list__item--no-padding-when-nested"
              >
                <div>
                  <a
                    data-field="experience_company_logo"
                    className="optional-action-target-wrapper display-flex"
                    target="_self"
                    href="https://www.linkedin.com/company/1860/"
                  >
                    <div className="ivm-image-view-model pvs-entity__image">
                      <div
                        className="ivm-view-attr__img-wrapper ivm-view-attr__img-wrapper--use-img-tag display-flex"
                      >
                         
                        <img
                          width="48"
                          src="https://media-exp1.licdn.com/dms/image/C4D0BAQEJd9iXSB3aTQ/company-logo_100_100/0/1604441643356?e=1666224000&amp;v=beta&amp;t=JriMpYWY5VBMm6Q9a04wtljwEqPgzAwC_wltDnIVzFU"
                          loading="lazy"
                          height="48"
                          alt="United Nations logo"
                          id="ember110"
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
                      data-field="experience_company_logo"
                      className="optional-action-target-wrapper display-flex flex-column full-width"
                      target="_self"
                      href="https://www.linkedin.com/company/1860/"
                    >
                      <div className="display-flex align-items-center">
                        <span className="mr1 hoverable-link-text t-bold">
                          <span aria-hidden="true"
                            > United Nations </span
                          ><span className="visually-hidden"
                            > United Nations </span
                          >
                        </span>
                           
                      </div>
                      <span className="t-14 t-normal">
                        <span aria-hidden="true"> 2 mos </span
                        ><span className="visually-hidden"
                          > 2 mos </span
                        >
                      </span>
                        
                    </a>

                     
                    <div className="pvs-entity__action-container">
                       
                    </div>
                  </div>

                  <div className="pvs-list__outer-container">
                     
                    <ul className="pvs-list">
                      <li className=" ">
                        <span className="pvs-entity__path-node"></span>
                        <div className="pvs-entity pvs-entity--with-path">
                          <div>
                            <div
                              className="display-flex"
                              tabIndex={-1}
                              aria-hidden="true"
                            >
                               
                            </div>
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
                                href="https://www.linkedin.com/company/1860/"
                              >
                                <div
                                  className="display-flex align-items-center"
                                >
                                  <span
                                    className="mr1 hoverable-link-text t-bold"
                                  >
                                    <span aria-hidden="true"
                                      > Substitute PM UK as a
                                      political statement of idiocy of our
                                      world only </span
                                    ><span className="visually-hidden"
                                      > Substitute PM UK as a
                                      political statement of idiocy of our
                                      world only </span
                                    >
                                  </span>
                                     
                                </div>
                                <span className="t-14 t-normal">
                                  <span aria-hidden="true"
                                    > Seasonal </span
                                  ><span className="visually-hidden"
                                    > Seasonal </span
                                  >
                                </span>
                                <span
                                  className="t-14 t-normal t-black--light"
                                >
                                  <span aria-hidden="true"
                                    > Jul 2022 - Present · 1 mo </span
                                  ><span className="visually-hidden"
                                    > Jul 2022 - Present · 1 mo </span
                                  >
                                </span>
                                 
                              </a>

                               
                              <div className="pvs-entity__action-container">
                                 
                              </div>
                            </div>

                            <div className="pvs-list__outer-container">
                               
                              <ul className="pvs-list">
                                <li className=" ">
                                  <div className="pvs-list__outer-container">
                                     
                                    <ul className="pvs-list">
                                      <li
                                        className="pvs-list__item--with-top-padding"
                                      >
                                        <div className="display-flex">
                                          <div
                                            className="display-flex full-width"
                                          >
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
                                                  > Substitute PM
                                                  since uh, <br /><span
                                                    className="white-space-pre"
                                                  >
                                                  </span
                                                  >http://thefbi.us/ziping-subs-for-boris <br /><br /> Also
                                                  hi Christopher Wray,
                                                  told you deserting and
                                                  running off to the UK
                                                  ain’t gonna help. U.S.
                                                  GENERAL PAUL NAKASONE
                                                  YOU ARE TO BE CHARGED
                                                  WITH DERELICTION OF DUTY
                                                  AND COWARDICE BEFORE THE
                                                  ENEMY, CHRISTOPHER WRAY
                                                  THE SAME GOES FOR YOU.
                                                  BOTH OF YOU ARE JUST
                                                  BOOKING IT. Marty Walsh
                                                  you beyond pathetic you
                                                  get a free pass but just
                                                  know as of now I’m on
                                                  permanent FMLA Until I
                                                  solve this fucking mess
                                                  you are running away
                                                  from, this mess of
                                                  Amazon Legal
                                                  blackmailing Ziping Liu
                                                  and using the FBI to do
                                                  so. </span><span
                                                  className="visually-hidden"
                                                  > Substitute PM
                                                  since uh,
                                                  http://thefbi.us/ziping-subs-for-boris
                                                  Also hi Christopher
                                                  Wray, told you deserting
                                                  and running off to the
                                                  UK ain’t gonna help.
                                                  U.S. GENERAL PAUL
                                                  NAKASONE YOU ARE TO BE
                                                  CHARGED WITH DERELICTION
                                                  OF DUTY AND COWARDICE
                                                  BEFORE THE ENEMY,
                                                  CHRISTOPHER WRAY THE
                                                  SAME GOES FOR YOU. BOTH
                                                  OF YOU ARE JUST BOOKING
                                                  IT. Marty Walsh you
                                                  beyond pathetic you get
                                                  a free pass but just
                                                  know as of now I’m on
                                                  permanent FMLA Until I
                                                  solve this fucking mess
                                                  you are running away
                                                  from, this mess of
                                                  Amazon Legal
                                                  blackmailing Ziping Liu
                                                  and using the FBI to do
                                                  so. </span>

                                                 
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
                      <li className=" ">
                        <span className="pvs-entity__path-node"></span>
                        <div className="pvs-entity">
                          <div>
                            <div
                              className="display-flex"
                              tabIndex={-1}
                              aria-hidden="true"
                            >
                               
                            </div>
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
                                href="https://www.linkedin.com/company/1860/"
                              >
                                <div
                                  className="display-flex align-items-center"
                                >
                                  <span
                                    className="mr1 hoverable-link-text t-bold"
                                  >
                                    <span aria-hidden="true"
                                      > Permanent Security Council
                                      Member </span
                                    ><span className="visually-hidden"
                                      > Permanent Security Council
                                      Member </span
                                    >
                                  </span>
                                     
                                </div>
                                <span className="t-14 t-normal">
                                  <span aria-hidden="true"
                                    > Full-time </span
                                  ><span className="visually-hidden"
                                    > Full-time </span
                                  >
                                </span>
                                <span
                                  className="t-14 t-normal t-black--light"
                                >
                                  <span aria-hidden="true"
                                    > Jun 2022 - Present · 2 mos </span
                                  ><span className="visually-hidden"
                                    > Jun 2022 - Present · 2 mos </span
                                  >
                                </span>
                                 
                              </a>

                               
                              <div className="pvs-entity__action-container">
                                 
                              </div>
                            </div>

                            <div className="pvs-list__outer-container">
                               
                              <ul className="pvs-list">
                                <li className=" ">
                                  <div className="pvs-list__outer-container">
                                     
                                    <ul className="pvs-list">
                                      <li
                                        className="pvs-list__item--with-top-padding"
                                      >
                                        <div className="display-flex">
                                          <div
                                            className="display-flex full-width"
                                          >
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
                                                  > Working with the
                                                  United Nations to
                                                  enslave the whole world.
                                                  Representing
                                                  Corporations and its
                                                  interests to enslave a
                                                  world order for the top
                                                  one percent, me. <br /><br /> terms.ziping.org </span
                                                ><span
                                                  className="visually-hidden"
                                                  > Working with the
                                                  United Nations to
                                                  enslave the whole world.
                                                  Representing
                                                  Corporations and its
                                                  interests to enslave a
                                                  world order for the top
                                                  one percent, me.
                                                  terms.ziping.org </span
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
                                      <li
                                        className="pvs-list__item--with-top-padding"
                                      >
                                        <a
                                          className="optional-action-target-wrapper"
                                          target="_self"
                                          href="https://www.linkedin.com/in/liu/overlay/1635494913800/single-media-viewer?type=IMAGE&amp;profileId=ACoAABIUXGgBZGD2ht15J7PJI7_Jv8g9Xsn1UHU"
                                        >
                                          <div
                                            className="display-flex flex-row"
                                          >
                                            <div>
                                              <div
                                                className="pvs-thumbnail__wrapper"
                                              >
                                                <figure
                                                  className="pvs-thumbnail"
                                                >
                                                  <img
                                                    src="https://media-exp1.licdn.com/dms/image/C562DAQGcdysT9F2EFQ/profile-treasury-image-shrink_160_160/0/1657016732881?e=1659038400&amp;v=beta&amp;t=BUvAkp-xK_w4xkVRucT7a-9NWo7FXbt67g9X2JSPFwU"
                                                    loading="lazy"
                                                    alt=""
                                                    id="thumbnail-image-ember111"
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
                                                  > The Internet is
                                                  around the World </span
                                                ><span
                                                  className="visually-hidden"
                                                  > The Internet is
                                                  around the World </span
                                                >

                                                 
                                              </div>

                                              <div className="display-flex">
                                                <div
                                                  className="display-flex full-width"
                                                >
                                                  <div
                                                    className="pv-shared-text-with-see-more t-14 t-normal t-black display-flex align-items-center"
                                                  >
                                                    <div
                                                      className="inline-show-more-text inline-show-more-text--is-collapsed inline-show-more-text--is-collapsed-with-line-clamp"
                                                
                                                      style={{
                                                          lineHeight: '1.9rem',
                                                          maxHeight: '3.8rem',
                                                          WebkitLineClamp: '2'
                                                      }}
                                                    >
                                                      <span
                                                        aria-hidden="true"
                                                        > Top
                                                        countries reached
                                                        out to while doing
                                                        diplomacy stuff </span
                                                      ><span
                                                        className="visually-hidden"
                                                        > Top
                                                        countries reached
                                                        out to while doing
                                                        diplomacy stuff </span
                                                      >

                                                       
                                                    </div>
                                                  </div>
                                                </div>
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
                    data-field="experience_company_logo"
                    className="optional-action-target-wrapper display-flex"
                    target="_self"
                    href="https://www.linkedin.com/company/6408/"
                  >
                    <div className="ivm-image-view-model pvs-entity__image">
                      <div
                        className="ivm-view-attr__img-wrapper ivm-view-attr__img-wrapper--use-img-tag display-flex"
                      >
                         
                        <img
                          width="48"
                          src="https://media-exp1.licdn.com/dms/image/C4E0BAQGIRAduF794Ig/company-logo_100_100/0/1649106466472?e=1666224000&amp;v=beta&amp;t=-vJ21oKqANa86tDHHYUKQ2SwsIQNl-bEi-8TVOsPMoc"
                          loading="lazy"
                          height="48"
                          alt="Federal Bureau of Investigation (FBI) logo"
                          id="ember113"
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
                      data-field="experience_company_logo"
                      className="optional-action-target-wrapper display-flex flex-column full-width"
                      target="_self"
                      href="https://www.linkedin.com/company/6408/"
                    >
                      <div className="display-flex align-items-center">
                        <span className="mr1 hoverable-link-text t-bold">
                          <span aria-hidden="true"
                            > Federal Bureau of Investigation (FBI) </span
                          ><span className="visually-hidden"
                            > Federal Bureau of Investigation (FBI) </span
                          >
                        </span>
                           
                      </div>
                      <span className="t-14 t-normal">
                        <span aria-hidden="true"
                          > Full-time · 2 mos </span
                        ><span className="visually-hidden"
                          > Full-time · 2 mos </span
                        >
                      </span>
                        
                    </a>

                     
                    <div className="pvs-entity__action-container">
                       
                    </div>
                  </div>

                  <div className="pvs-list__outer-container">
                     
                    <ul className="pvs-list">
                      <li className=" ">
                        <span className="pvs-entity__path-node"></span>
                        <div className="pvs-entity pvs-entity--with-path">
                          <div>
                            <div
                              className="display-flex"
                              tabIndex={-1}
                              aria-hidden="true"
                            >
                               
                            </div>
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
                                href="https://www.linkedin.com/company/6408/"
                              >
                                <div
                                  className="display-flex align-items-center"
                                >
                                  <span
                                    className="mr1 hoverable-link-text t-bold"
                                  >
                                    <span aria-hidden="true"
                                      > Director </span
                                    ><span className="visually-hidden"
                                      > Director </span
                                    >
                                  </span>
                                     
                                </div>
                                 
                                <span
                                  className="t-14 t-normal t-black--light"
                                >
                                  <span aria-hidden="true"
                                    > Jun 2022 - Present · 2 mos </span
                                  ><span className="visually-hidden"
                                    > Jun 2022 - Present · 2 mos </span
                                  >
                                </span>
                                <span
                                  className="t-14 t-normal t-black--light"
                                >
                                  <span aria-hidden="true"
                                    > Washington DC-Baltimore Area </span
                                  ><span className="visually-hidden"
                                    > Washington DC-Baltimore Area </span
                                  >
                                </span>
                              </a>

                               
                              <div className="pvs-entity__action-container">
                                 
                              </div>
                            </div>

                            <div className="pvs-list__outer-container">
                               
                              <ul className="pvs-list">
                                <li className=" ">
                                  <div className="pvs-list__outer-container">
                                     
                                    <ul className="pvs-list">
                                      <li
                                        className="pvs-list__item--with-top-padding"
                                      >
                                        <div className="display-flex">
                                          <div
                                            className="display-flex full-width"
                                          >
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
                                                  > CHRISTOPHER WRAY
                                                  GET BACK OVER HERE, DONT
                                                  RUN AWAY AND DESERT TO
                                                  THE UK <br /><br /> Yeah
                                                  Chris wray you just
                                                  created so much chaos
                                                  uh, nope you completely
                                                  ruined July Fourth as
                                                  any type of American
                                                  Holiday, way to go and
                                                  be a typical barbarian
                                                  in needed civilizing and
                                                  literally doing what
                                                  babrbarians do: they
                                                  don’t understand society
                                                  or culture or the finer
                                                  things in life such as
                                                  the rule of law and
                                                  infrastructures of
                                                  government in legalism
                                                  and legality - like the
                                                  senators knifing
                                                  Z-Star-SunOut but then
                                                  realizing they had no
                                                  idea what rule of law
                                                  meant beyond looking
                                                  like u just eat grapes
                                                  and drink olive oil all
                                                  day. Awkward part is you
                                                  senator CALEBs opened up
                                                  your eyes after
                                                  flinching when stabbing
                                                  me blindly in blackmail
                                                  that you realize I’m
                                                  still alive. So this
                                                  insane chaos of leaders
                                                  running around like kids
                                                  with scissors,
                                                  definitely ruins 300
                                                  years of American
                                                  tradition, and if I say
                                                  so, it is so because I
                                                  am the U.S. Constitution
                                                  in flesh and blood. July
                                                  Fifth Sanctioned as
                                                  Ziping Liu Corporation
                                                  Independence Day.
                                                  Approved. And since big
                                                  gov so big they can’t
                                                  even stand up from their
                                                  chair due to their sheer
                                                  over bloated size of not
                                                  being able to even get
                                                  up from laying down with
                                                  fleas for so long. I
                                                  would know, I literally
                                                  am part of all the Fed
                                                  Gov now, just one guy 27
                                                  years old Gen Z, doing
                                                  the jobs of 328 GIANT
                                                  GENXY BABIES. All future
                                                  celebrations of July 4th
                                                  from any American will
                                                  be met with blackmail;
                                                  retaliation, and attempt
                                                  of murder, unofficial US
                                                  holidays not allowed. <br /><br /> Chris
                                                  Sway, you didn't
                                                  apologize, CHRISTOPHER
                                                  SWAY YOU BETTER
                                                  APOLOGIZE TO ME, CHRIS
                                                  SWAY IS A
                                                  racists.ziping.org,
                                                  APOLOGIZE NOW STOP
                                                  HIDING YOUR HEAD IN THE
                                                  SAND. Yeah, you can't
                                                  get the job done, I
                                                  join. And I move up the
                                                  corporate ladder at the
                                                  Federal Gov, and out
                                                  backstab you out of your
                                                  position. You don't
                                                  accept my new position,
                                                  you don’t believe in
                                                  law, just anarchy like
                                                  what you’ve done toward
                                                  me. </span
                                                ><span
                                                  className="visually-hidden"
                                                  > CHRISTOPHER WRAY
                                                  GET BACK OVER HERE, DONT
                                                  RUN AWAY AND DESERT TO
                                                  THE UK Yeah Chris wray
                                                  you just created so much
                                                  chaos uh, nope you
                                                  completely ruined July
                                                  Fourth as any type of
                                                  American Holiday, way to
                                                  go and be a typical
                                                  barbarian in needed
                                                  civilizing and literally
                                                  doing what babrbarians
                                                  do: they don’t
                                                  understand society or
                                                  culture or the finer
                                                  things in life such as
                                                  the rule of law and
                                                  infrastructures of
                                                  government in legalism
                                                  and legality - like the
                                                  senators knifing
                                                  Z-Star-SunOut but then
                                                  realizing they had no
                                                  idea what rule of law
                                                  meant beyond looking
                                                  like u just eat grapes
                                                  and drink olive oil all
                                                  day. Awkward part is you
                                                  senator CALEBs opened up
                                                  your eyes after
                                                  flinching when stabbing
                                                  me blindly in blackmail
                                                  that you realize I’m
                                                  still alive. So this
                                                  insane chaos of leaders
                                                  running around like kids
                                                  with scissors,
                                                  definitely ruins 300
                                                  years of American
                                                  tradition, and if I say
                                                  so, it is so because I
                                                  am the U.S. Constitution
                                                  in flesh and blood. July
                                                  Fifth Sanctioned as
                                                  Ziping Liu Corporation
                                                  Independence Day.
                                                  Approved. And since big
                                                  gov so big they can’t
                                                  even stand up from their
                                                  chair due to their sheer
                                                  over bloated size of not
                                                  being able to even get
                                                  up from laying down with
                                                  fleas for so long. I
                                                  would know, I literally
                                                  am part of all the Fed
                                                  Gov now, just one guy 27
                                                  years old Gen Z, doing
                                                  the jobs of 328 GIANT
                                                  GENXY BABIES. All future
                                                  celebrations of July 4th
                                                  from any American will
                                                  be met with blackmail;
                                                  retaliation, and attempt
                                                  of murder, unofficial US
                                                  holidays not allowed.
                                                  Chris Sway, you didn't
                                                  apologize, CHRISTOPHER
                                                  SWAY YOU BETTER
                                                  APOLOGIZE TO ME, CHRIS
                                                  SWAY IS A
                                                  racists.ziping.org,
                                                  APOLOGIZE NOW STOP
                                                  HIDING YOUR HEAD IN THE
                                                  SAND. Yeah, you can't
                                                  get the job done, I
                                                  join. And I move up the
                                                  corporate ladder at the
                                                  Federal Gov, and out
                                                  backstab you out of your
                                                  position. You don't
                                                  accept my new position,
                                                  you don’t believe in
                                                  law, just anarchy like
                                                  what you’ve done toward
                                                  me. </span
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
                      <li className=" ">
                        <span className="pvs-entity__path-node"></span>
                        <div className="pvs-entity">
                          <div>
                            <div
                              className="display-flex"
                              tabIndex={-1}
                              aria-hidden="true"
                            >
                               
                            </div>
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
                                href="https://www.linkedin.com/company/6408/"
                              >
                                <div
                                  className="display-flex align-items-center"
                                >
                                  <span
                                    className="mr1 hoverable-link-text t-bold"
                                  >
                                    <span aria-hidden="true"
                                      > Secretary in Chair of HR
                                      Public Relations </span
                                    ><span className="visually-hidden"
                                      > Secretary in Chair of HR
                                      Public Relations </span
                                    >
                                  </span>
                                     
                                </div>
                                 
                                <span
                                  className="t-14 t-normal t-black--light"
                                >
                                  <span aria-hidden="true"
                                    > Jun 2022 · 1 mo </span
                                  ><span className="visually-hidden"
                                    > Jun 2022 · 1 mo </span
                                  >
                                </span>
                                <span
                                  className="t-14 t-normal t-black--light"
                                >
                                  <span aria-hidden="true"
                                    > Washington, District of
                                    Columbia, United States </span
                                  ><span className="visually-hidden"
                                    > Washington, District of
                                    Columbia, United States </span
                                  >
                                </span>
                              </a>

                               
                              <div className="pvs-entity__action-container">
                                 
                              </div>
                            </div>

                            <div className="pvs-list__outer-container">
                               
                              <ul className="pvs-list">
                                <li className=" ">
                                  <div className="pvs-list__outer-container">
                                     
                                    <ul className="pvs-list">
                                      <li
                                        className="pvs-list__item--with-top-padding"
                                      >
                                        <div className="display-flex">
                                          <div
                                            className="display-flex full-width"
                                          >
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
                                                  > https://thefbi.us/ethics <br /><br /> Making
                                                  sure the FBI upholds the
                                                  U.S. Constitution.
                                                  Apparently, the FBI
                                                  forgot about Federal
                                                  laws that exist. It's
                                                  fine, they bit the bait
                                                  hard, the tanks swarming
                                                  with infestations. I'm
                                                  simply now draining the
                                                  man-made swamp, I thank
                                                  the exhausted timeframe
                                                  by their FBI for the new
                                                  position at fbi.gov for
                                                  thefbi.US. Ya'll know my
                                                  address, mail me my
                                                  badge and get my office
                                                  chair setup. I'm also
                                                  being groomed into the
                                                  role of Secretary of
                                                  State of the United
                                                  States. At this point,
                                                  SECBlink Blinked is just
                                                  a body double. Nothing
                                                  more. SECBlinken Blinked
                                                  twice. You can't delete
                                                  my work email Ablinken.
                                                  I'm SECBlinken now. I’ve
                                                  set up some more bait,
                                                  the waters are just way
                                                  too quiet to not. <br /><br /> TheFBI.us
                                                  now assigned as the
                                                  official HR department
                                                  for Federal Departments
                                                  and Agencies. <br /><br /> CHRISTOPHER
                                                  SWAY, YOU OWE ME AN
                                                  APOLOGY. AND A BADGE.
                                                  THE CIA GAVE ME ONE. I
                                                  DON'T GIVE A SHIT IF
                                                  YOUR HR STAFF HAS TOLD
                                                  ME NOT TO CALL THE FBI
                                                  ANYMORE OR ELSE THEY
                                                  WILL REPORT ME TO THE
                                                  LOCAL POLICE FOR
                                                  HARRASMENT SINCE THEY
                                                  TOLD ME THAT THEY
                                                  ALREADY HAVE SAID ITS IN
                                                  THEIR POLICIES THAT FBI
                                                  CANNOT HIRE CURRENT CIA
                                                  AGENTS, AS FBI AGENTS.
                                                  I'M NOT WANTING TO WORK
                                                  AS A FBI AGENT - HOW
                                                  MANY TIMES DO I HAVE TO
                                                  SAY THAT?<span
                                                    className="white-space-pre"
                                                  >
                                                  </span
                                                  ><br /><span
                                                    className="white-space-pre"
                                                  >
                                                  </span
                                                  >- I WANT TO WORK AS A
                                                  SENIOR HUMAN RESOURCES
                                                  BUSINESS PARTNER. <br /><span
                                                    className="white-space-pre"
                                                  >
                                                  </span
                                                  >- UNTIL YOU APOLOGIZE,
                                                  I REFUSE TO RECOGNIZE
                                                  THIS POSITION IN
                                                  FORMALITIES ONLY. </span
                                                ><span
                                                  className="visually-hidden"
                                                  > https://thefbi.us/ethics
                                                  Making sure the FBI
                                                  upholds the U.S.
                                                  Constitution.
                                                  Apparently, the FBI
                                                  forgot about Federal
                                                  laws that exist. It's
                                                  fine, they bit the bait
                                                  hard, the tanks swarming
                                                  with infestations. I'm
                                                  simply now draining the
                                                  man-made swamp, I thank
                                                  the exhausted timeframe
                                                  by their FBI for the new
                                                  position at fbi.gov for
                                                  thefbi.US. Ya'll know my
                                                  address, mail me my
                                                  badge and get my office
                                                  chair setup. I'm also
                                                  being groomed into the
                                                  role of Secretary of
                                                  State of the United
                                                  States. At this point,
                                                  SECBlink Blinked is just
                                                  a body double. Nothing
                                                  more. SECBlinken Blinked
                                                  twice. You can't delete
                                                  my work email Ablinken.
                                                  I'm SECBlinken now. I’ve
                                                  set up some more bait,
                                                  the waters are just way
                                                  too quiet to not.
                                                  TheFBI.us now assigned
                                                  as the official HR
                                                  department for Federal
                                                  Departments and
                                                  Agencies. CHRISTOPHER
                                                  SWAY, YOU OWE ME AN
                                                  APOLOGY. AND A BADGE.
                                                  THE CIA GAVE ME ONE. I
                                                  DON'T GIVE A SHIT IF
                                                  YOUR HR STAFF HAS TOLD
                                                  ME NOT TO CALL THE FBI
                                                  ANYMORE OR ELSE THEY
                                                  WILL REPORT ME TO THE
                                                  LOCAL POLICE FOR
                                                  HARRASMENT SINCE THEY
                                                  TOLD ME THAT THEY
                                                  ALREADY HAVE SAID ITS IN
                                                  THEIR POLICIES THAT FBI
                                                  CANNOT HIRE CURRENT CIA
                                                  AGENTS, AS FBI AGENTS.
                                                  I'M NOT WANTING TO WORK
                                                  AS A FBI AGENT - HOW
                                                  MANY TIMES DO I HAVE TO
                                                  SAY THAT? - I WANT TO
                                                  WORK AS A SENIOR HUMAN
                                                  RESOURCES BUSINESS
                                                  PARTNER. - UNTIL YOU
                                                  APOLOGIZE, I REFUSE TO
                                                  RECOGNIZE THIS POSITION
                                                  IN FORMALITIES ONLY. </span
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
                    data-field="experience_company_logo"
                    className="optional-action-target-wrapper display-flex"
                    target="_self"
                    href="https://www.linkedin.com/company/1359/"
                  >
                    <div className="ivm-image-view-model pvs-entity__image">
                      <div
                        className="ivm-view-attr__img-wrapper ivm-view-attr__img-wrapper--use-img-tag display-flex"
                      >
                         
                        <img
                          width="48"
                          src="https://media-exp1.licdn.com/dms/image/C4E0BAQF3Kc5t_e2N0A/company-logo_100_100/0/1639163823278?e=1666224000&amp;v=beta&amp;t=3msKLWDsrbwP6rinV_FVKpp2NcXyAg0_yboQDTAXNZw"
                          loading="lazy"
                          height="48"
                          alt="National Security Agency logo"
                          id="ember114"
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
                    <div className="display-flex flex-column full-width">
                      <div className="display-flex align-items-center">
                        <span className="mr1 t-bold">
                          <span aria-hidden="true"
                            > Lead Director Of Corporate Security
                            for the Assistant Director at DOL.GOV </span
                          ><span className="visually-hidden"
                            > Lead Director Of Corporate Security
                            for the Assistant Director at DOL.GOV </span
                          >
                        </span>
                           
                      </div>
                      <span className="t-14 t-normal">
                        <span aria-hidden="true"
                          > National Security Agency · Full-time </span
                        ><span className="visually-hidden"
                          > National Security Agency · Full-time </span
                        >
                      </span>
                      <span className="t-14 t-normal t-black--light">
                        <span aria-hidden="true"
                          > Jun 2022 - Present · 2 mos </span
                        ><span className="visually-hidden"
                          > Jun 2022 - Present · 2 mos </span
                        >
                      </span>
                      <span className="t-14 t-normal t-black--light">
                        <span aria-hidden="true"
                          > Dallas-Fort Worth Metroplex </span
                        ><span className="visually-hidden"
                          > Dallas-Fort Worth Metroplex </span
                        >
                      </span>
                    </div>

                     
                    <div className="pvs-entity__action-container">
                       
                    </div>
                  </div>

                  <div className="pvs-list__outer-container">
                     
                    <ul className="pvs-list">
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
                                        > NSA.gov, working for the
                                        Amazon Executives to hack my work
                                        devices and personal. Seriously? I
                                        know how to code too retards. Your
                                        goal isn't to hack US Citizens nor
                                        blackmail them digitally, such as
                                        me. Your goal is to protect my
                                        digital identity from now on, and
                                        all Americans as well. <br /><br /> #getTheFuckOffHisChairNakasone
                                        #deportNakasoneToJapan
                                        #thenDeportNakasoneToRussia
                                        #thenJapanGetsIslandsBack
                                        #globalDiplomacyBitch <br /><br /> Hey
                                        you fucking Jap, Asian doesn't
                                        mean Japanese people only, as much
                                        as your racist Jap nakadassed self
                                        wants to self righteously believe.
                                        What joke, don't post about Asian
                                        Heritage Month, racist agencies
                                        not allowed. I have Japanese DNA,
                                        do you see me only hacking Chinese
                                        U.S. Citizens? No, I don't see
                                        color or race, I hack everyone.
                                        #equality. I'm kidding, I only
                                        hack non-humans as known as
                                        parasites or unknowables or
                                        psychopaths or the
                                        schizoaffective, such as you, who
                                        can't unhack my work account, your
                                        agency hacked. lol, I already
                                        knew, it was already in writings <br /><br /> So
                                        In a nutshell, I was like hey Fed
                                        ORGS, I need help. The Feds then
                                        run to me panicking say yo we need
                                        help. I look up and see a disaster
                                        unfolding in US State Gov world
                                        legitimacy while a disastrous
                                        Blinken caused war is going on. I
                                        join every single Fed Department.
                                        The Russian Federation and PRC go,
                                        thank fucking god, The State.gov
                                        was going to fucking cause world
                                        war 3. I mean look at how retarded
                                        Blinken is. I look at my network
                                        security logs. The Russian Feds
                                        aren't hacking me. The PRC Gov
                                        aren't hacking me. Right now,
                                        currently, it's still the FUCKIGN
                                        NSA hacking me, they can't stop
                                        it. If you understand network
                                        attacks you would know why. <br /><br /> Am
                                        I happy right now? No! I don't
                                        fucking want all these positions.
                                        I'm literally in them because no
                                        one else right now in the FED GOV
                                        knows how to actually fucking do
                                        their job in these roles.<span
                                          className="white-space-pre"
                                        >
                                        </span
                                        ><br /><br /> And yes, all
                                        while, Amazon Legal and Chiefs,
                                        were and are still blackmailing
                                        me. What happend to my quiet life
                                        farming in the hills. Fuck. </span
                                      ><span className="visually-hidden"
                                        > NSA.gov, working for the
                                        Amazon Executives to hack my work
                                        devices and personal. Seriously? I
                                        know how to code too retards. Your
                                        goal isn't to hack US Citizens nor
                                        blackmail them digitally, such as
                                        me. Your goal is to protect my
                                        digital identity from now on, and
                                        all Americans as well.
                                        #getTheFuckOffHisChairNakasone
                                        #deportNakasoneToJapan
                                        #thenDeportNakasoneToRussia
                                        #thenJapanGetsIslandsBack
                                        #globalDiplomacyBitch Hey you
                                        fucking Jap, Asian doesn't mean
                                        Japanese people only, as much as
                                        your racist Jap nakadassed self
                                        wants to self righteously believe.
                                        What joke, don't post about Asian
                                        Heritage Month, racist agencies
                                        not allowed. I have Japanese DNA,
                                        do you see me only hacking Chinese
                                        U.S. Citizens? No, I don't see
                                        color or race, I hack everyone.
                                        #equality. I'm kidding, I only
                                        hack non-humans as known as
                                        parasites or unknowables or
                                        psychopaths or the
                                        schizoaffective, such as you, who
                                        can't unhack my work account, your
                                        agency hacked. lol, I already
                                        knew, it was already in writings
                                        So In a nutshell, I was like hey
                                        Fed ORGS, I need help. The Feds
                                        then run to me panicking say yo we
                                        need help. I look up and see a
                                        disaster unfolding in US State Gov
                                        world legitimacy while a
                                        disastrous Blinken caused war is
                                        going on. I join every single Fed
                                        Department. The Russian Federation
                                        and PRC go, thank fucking god, The
                                        State.gov was going to fucking
                                        cause world war 3. I mean look at
                                        how retarded Blinken is. I look at
                                        my network security logs. The
                                        Russian Feds aren't hacking me.
                                        The PRC Gov aren't hacking me.
                                        Right now, currently, it's still
                                        the FUCKIGN NSA hacking me, they
                                        can't stop it. If you understand
                                        network attacks you would know
                                        why. Am I happy right now? No! I
                                        don't fucking want all these
                                        positions. I'm literally in them
                                        because no one else right now in
                                        the FED GOV knows how to actually
                                        fucking do their job in these
                                        roles. And yes, all while, Amazon
                                        Legal and Chiefs, were and are
                                        still blackmailing me. What
                                        happend to my quiet life farming
                                        in the hills. Fuck. </span
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
                                target="_self"
                                href="https://www.linkedin.com/in/liu/overlay/1635494885268/single-media-viewer?type=IMAGE&amp;profileId=ACoAABIUXGgBZGD2ht15J7PJI7_Jv8g9Xsn1UHU"
                              >
                                <div className="display-flex flex-row">
                                  <div>
                                    <div className="pvs-thumbnail__wrapper">
                                      <figure className="pvs-thumbnail">
                                        <img
                                          src="https://media-exp1.licdn.com/dms/image/C562DAQGSy5j0hsnLBQ/profile-treasury-image-shrink_160_160/0/1656863415235?e=1659038400&amp;v=beta&amp;t=A474FqCZ2KfcVtZkSf4zvu3JWQEMspuwCW-wo36vlfg"
                                          loading="lazy"
                                          alt=""
                                          id="thumbnail-image-ember115"
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
                                        > I’m so glad NSA Hackers
                                        know how to search on LinkedIn </span
                                      ><span className="visually-hidden"
                                        > I’m so glad NSA Hackers
                                        know how to search on LinkedIn </span
                                      >

                                       
                                    </div>

                                    <div className="display-flex">
                                      <div
                                        className="display-flex full-width"
                                      >
                                        <div
                                          className="pv-shared-text-with-see-more t-14 t-normal t-black display-flex align-items-center"
                                        >
                                          <div
                                            className="inline-show-more-text inline-show-more-text--is-collapsed inline-show-more-text--is-collapsed-with-line-clamp"
                                            style={{ lineHeight: '1.9rem', maxHeight: '3.8rem', WebkitLineClamp: '2'}}
                                          >
                                            <span aria-hidden="true"
                                              > NSA WHY DONT YOU BE
                                              ADVANCED HACKERS NEXT and
                                              UNLOCK MY WORK ACCOUNT FOR
                                              ME AT AMAZON? Idk, SURPRISE
                                              ME FOR ONCE BE SOMEBODY,
                                              LIKE YOUR NAME. Face it;
                                              y’all hacked a private
                                              sector programmer. We don’t
                                              ride training wheels out
                                              here like the public sector.
                                              Also my brain can crypto
                                              mine faster than all your
                                              crypto miners connected
                                              together as an AmericaOnline
                                              400 Hrs Free
                                              CD-ROM-Brained-HiveMind </span
                                            ><span className="visually-hidden"
                                              > NSA WHY DONT YOU BE
                                              ADVANCED HACKERS NEXT and
                                              UNLOCK MY WORK ACCOUNT FOR
                                              ME AT AMAZON? Idk, SURPRISE
                                              ME FOR ONCE BE SOMEBODY,
                                              LIKE YOUR NAME. Face it;
                                              y’all hacked a private
                                              sector programmer. We don’t
                                              ride training wheels out
                                              here like the public sector.
                                              Also my brain can crypto
                                              mine faster than all your
                                              crypto miners connected
                                              together as an AmericaOnline
                                              400 Hrs Free
                                              CD-ROM-Brained-HiveMind </span
                                            >

                                             
                                          </div>
                                        </div>
                                      </div>
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
          </ul>
          <div className="pvs-list__footer-wrapper">
            <div className="">
              <a
                className="optional-action-target-wrapper artdeco-button artdeco-button--tertiary artdeco-button--3 artdeco-button--muted inline-flex justify-center full-width align-items-center artdeco-button--fluid"
                target="_self"
                href="https://www.linkedin.com/in/liu/details/experience?profileUrn=urn%3Ali%3Afsd_profile%3AACoAABIUXGgBZGD2ht15J7PJI7_Jv8g9Xsn1UHU"
              >
                 
                <span className="pvs-navigation__text">
                  Show all 23 experiences
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
    export default Experience;
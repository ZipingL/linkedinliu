import React, { useState } from 'react';




export const Analytics =(props?: {
    id?: string;
    name?: string;
}) => {

    const [name, setName] = useState(props?.name || 'insights');
    const [id, setId] = useState(props?.id || 'ember96') ;
    return(
        <section
        id={`${id}`}
        className="artdeco-card ember-view relative break-words pb3 mt2"
      >
         

        <div id={`${name}`} className="pv-profile-card-anchor"></div>
         
        <div className="pvs-header__container">
          <div className="pvs-header__top-container--no-stack">
            <div className="pvs-header__left-container--stack">
              <div className="pvs-header__title-container">
                <h2 className="pvs-header__title text-heading-large">
                  <span aria-hidden="true"> Analytics </span
                  ><span className="visually-hidden"
                    > Analytics </span
                  >
                </h2>
                <p className="pvs-header__subtitle text-body-small">
                  <span aria-hidden="true"
                    ><object
                      aria-hidden="true"
                      type="eyeball-icon"
                      className="v-align-bottom"
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
                          d="M8 3a8.59 8.59 0 00-8 5 8.54 8.54 0 008 5 8.55 8.55 0 008-5 8.55 8.55 0 00-8-5zm0 8a3 3 0 113-3 3 3 0 01-3 3zm2-3a2 2 0 11-2-2 2 2 0 012 2z"
                        ></path></svg></object
                    ><span className="white-space-pre"> </span>Private to you </span
                  ><span className="visually-hidden"
                    ><object
                      aria-hidden="true"
                      type="eyeball-icon"
                      className="v-align-bottom"
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
                          d="M8 3a8.59 8.59 0 00-8 5 8.54 8.54 0 008 5 8.55 8.55 0 008-5 8.55 8.55 0 00-8-5zm0 8a3 3 0 113-3 3 3 0 01-3 3zm2-3a2 2 0 11-2-2 2 2 0 012 2z"
                        ></path></svg></object
                    ><span className="white-space-pre"> </span>Private to you </span
                  >
                </p>
                 
              </div>

               
            </div>

             
          </div>
        </div>

        <div className="pvs-list__outer-container">
           
          <ul className="pvs-list ph5 display-flex flex-row flex-wrap">
            <li className="pvs-list__item--three-column">
               
              <div
                className="pvs-entity pvs-entity--padded pvs-list__item--no-padding-when-nested"
              >
                <div>
                  <a
                    data-field="insights_wvmp"
                    className="optional-action-target-wrapper display-flex"
                    target="_self"
                    tabIndex={-1}
                    aria-hidden="true"
                    href="https://www.linkedin.com/me/profile-views"
                  >
                    <div className="ivm-image-view-model pvs-entity__image">
                      <div
                        className="ivm-view-attr__img-wrapper ivm-view-attr__img-wrapper--use-img-tag display-flex"
                      >
                        <object
                          aria-hidden="true"
                          type="people"
                          className="ivm-view-attr__icon--icon"
                          data-size="large"
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
                              d="M12 16v6H3v-6a3 3 0 013-3h3a3 3 0 013 3zm5.5-3A3.5 3.5 0 1014 9.5a3.5 3.5 0 003.5 3.5zm1 2h-2a2.5 2.5 0 00-2.5 2.5V22h7v-4.5a2.5 2.5 0 00-2.5-2.5zM7.5 2A4.5 4.5 0 1012 6.5 4.49 4.49 0 007.5 2z"
                            ></path></svg
                        ></object>
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
                      data-field="insights_wvmp"
                      className="optional-action-target-wrapper display-flex flex-column full-width"
                      target="_self"
                      href="https://www.linkedin.com/me/profile-views"
                    >
                      <div className="display-flex align-items-center">
                        <span className="mr1 hoverable-link-text t-bold">
                          <span aria-hidden="true"
                            > 2027 profile views </span
                          ><span className="visually-hidden"
                            > 2027 profile views </span
                          >
                        </span>
                           
                      </div>
                      <span className="t-14 t-normal">
                        <span aria-hidden="true"
                          > Discover who's viewed your profile. </span
                        ><span className="visually-hidden"
                          > Discover who's viewed your profile. </span
                        >
                      </span>
                        
                    </a>

                     
                    <div className="pvs-entity__action-container">
                       
                    </div>
                  </div>

                   
                </div>
              </div>
            </li>
            <li className="pvs-list__item--three-column">
               
              <div
                className="pvs-entity pvs-entity--padded pvs-list__item--no-padding-when-nested"
              >
                <div>
                  <a
                    data-field="insights_content_impressions"
                    className="optional-action-target-wrapper display-flex"
                    target="_self"
                    tabIndex={-1}
                    aria-hidden="true"
                    href="https://www.linkedin.com/analytics/creator/content?resultType=IMPRESSIONS&amp;timeRange=past_7_days&amp;dimension=INDUSTRY"
                  >
                    <div className="ivm-image-view-model pvs-entity__image">
                      <div
                        className="ivm-view-attr__img-wrapper ivm-view-attr__img-wrapper--use-img-tag display-flex"
                      >
                        <object
                          aria-hidden="true"
                          type="analytics"
                          className="ivm-view-attr__icon--icon"
                          data-size="large"
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
                              d="M23 20v1H1v-1zM8 9H2v10h6zm7-6H9v16h6zm7 11h-6v5h6z"
                            ></path></svg
                        ></object>
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
                      data-field="insights_content_impressions"
                      className="optional-action-target-wrapper display-flex flex-column full-width"
                      target="_self"
                      href="https://www.linkedin.com/analytics/creator/content?resultType=IMPRESSIONS&amp;timeRange=past_7_days&amp;dimension=INDUSTRY"
                    >
                      <div className="display-flex align-items-center">
                        <span className="mr1 hoverable-link-text t-bold">
                          <span aria-hidden="true"
                            > 247 post impressions </span
                          ><span className="visually-hidden"
                            > 247 post impressions </span
                          >
                        </span>
                           
                      </div>
                      <span className="t-14 t-normal">
                        <span aria-hidden="true"
                          > Check out who's engaging with your
                          posts. </span
                        ><span className="visually-hidden"
                          > Check out who's engaging with your
                          posts. </span
                        >
                      </span>
                      <span className="t-14 t-normal t-black--light">
                        <span aria-hidden="true"
                          > Past 7 days </span
                        ><span className="visually-hidden"
                          > Past 7 days </span
                        >
                      </span>
                       
                    </a>

                     
                    <div className="pvs-entity__action-container">
                       
                    </div>
                  </div>

                   
                </div>
              </div>
            </li>
            <li className="pvs-list__item--three-column">
               
              <div
                className="pvs-entity pvs-entity--padded pvs-list__item--no-padding-when-nested"
              >
                <div>
                  <a
                    data-field="insights_search_appearances"
                    className="optional-action-target-wrapper display-flex"
                    target="_self"
                    tabIndex={-1}
                    aria-hidden="true"
                    href="https://www.linkedin.com/me/search-appearances/"
                  >
                    <div className="ivm-image-view-model pvs-entity__image">
                      <div
                        className="ivm-view-attr__img-wrapper ivm-view-attr__img-wrapper--use-img-tag display-flex"
                      >
                        <object
                          aria-hidden="true"
                          type="search-icon"
                          className="ivm-view-attr__icon--icon"
                          data-size="large"
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
                              d="M21.41 18.59l-5.27-5.28A6.83 6.83 0 0017 10a7 7 0 10-7 7 6.83 6.83 0 003.31-.86l5.28 5.27a2 2 0 002.82-2.82zM5 10a5 5 0 115 5 5 5 0 01-5-5z"
                            ></path></svg
                        ></object>
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
                      data-field="insights_search_appearances"
                      className="optional-action-target-wrapper display-flex flex-column full-width"
                      target="_self"
                      href="https://www.linkedin.com/me/search-appearances/"
                    >
                      <div className="display-flex align-items-center">
                        <span className="mr1 hoverable-link-text t-bold">
                          <span aria-hidden="true"
                            > 89706 search appearances </span
                          ><span className="visually-hidden"
                            > 89706 search appearances </span
                          >
                        </span>
                           
                      </div>
                      <span className="t-14 t-normal">
                        <span aria-hidden="true"
                          > See how often you appear in search
                          results. </span
                        ><span className="visually-hidden"
                          > See how often you appear in search
                          results. </span
                        >
                      </span>
                        
                    </a>

                     
                    <div className="pvs-entity__action-container">
                       
                    </div>
                  </div>

                   
                </div>
              </div>
            </li>
          </ul>
           
        </div>

         
      </section>

    )
}

export default Analytics;
import React, { useState } from 'react';


export const Resources =(props?: {
    id?: string;
    name?: string;
}) => {

    const [name, setName] = useState(props?.name || 'resources');
    const [id, setId] = useState(props?.id || 'ember97') ;
    return (
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
                  <span aria-hidden="true"> Resources </span
                  ><span className="visually-hidden"
                    > Resources </span
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

        <div id="quora-facts" className="pvs-list__outer-container"></div>
      </section>
    )
    }

    export default Resources;
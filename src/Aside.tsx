import React from "react";
import Languages from "./Sections/Langauges";

export const Aside = () => {
  return (
    <aside className="scaffold-layout__aside">
      <iframe
        title="Intentionally blank"
        aria-hidden="true"
        src="about:blank"
        className="pv-right-rail__empty-iframe"
      ></iframe>

      <div className="pv-profile-info-section artdeco-card p4 mb2">
        <div className="relative mt0 mb4 mh0">
          <div
            id="ember47"
            className="artdeco-dropdown artdeco-dropdown--placement-bottom artdeco-dropdown--justification-left ember-view"
          >
            <div className="display-flex">
              <div
                role="tablist"
                className="pr1 overflow-hidden display-flex flex-1"
              >
                <button
                  role="tab"
                  aria-selected="true"
                  id="ember48"
                  className="pv-button-group__item artdeco-button artdeco-button--2 artdeco-button--primary ember-view"
                >
                  <span className="artdeco-button__text"> English </span>
                </button>
                <button
                  role="tab"
                  aria-selected="false"
                  id="ember49"
                  className="pv-button-group__item artdeco-button artdeco-button--muted artdeco-button--2 artdeco-button--secondary ember-view"
                >
                  <span className="artdeco-button__text"> 简体中文 </span>
                </button>
              </div>
              <button
                aria-expanded="false"
                aria-label="Multiple language profiles control"
                id="ember50"
                className="pv-update-supported-locales-section__dropdown-icon-button artdeco-button artdeco-button--muted artdeco-button--tertiary artdeco-button--circle artdeco-button--1 artdeco-dropdown__trigger artdeco-dropdown__trigger--placement-bottom ember-view"
                type="button"
                tabIndex={0}
              >
                <li
                  aria-hidden="true"
                  data-type="language-icon"
                  data-size="small"
                  style={{
                    listStyleType: 'none',
                    listStylePosition: 'outside',
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    data-supported-dps="16x16"
                    fill="currentColor"
                    width="16"
                    height="16"
                    focusable="false"
                  >
                    <path d="M8 1a7 7 0 107 7 7 7 0 00-7-7zm5 6.06h-2a13.94 13.94 0 00-.8-3.66A5.13 5.13 0 0113 7.06zM8 13a12.82 12.82 0 01-1.14-4.1h2.28A12.88 12.88 0 018 13zM6.86 7A12.88 12.88 0 018 3a12.81 12.81 0 011.14 4.1H6.86zM5.8 3.4A13.94 13.94 0 005 7.06H3A5.13 5.13 0 015.8 3.4zM3 8.94h2a13.94 13.94 0 00.8 3.66A5.13 5.13 0 013 8.94zm7.2 3.66a13.93 13.93 0 00.8-3.66h2a5.13 5.13 0 01-2.8 3.66z"></path>
                  </svg>
                </li>
              </button>
            </div>
            <div
              tabIndex={-1}
              aria-hidden="true"
              id="ember51"
              className="pv-update-supported-locales-section__locales-dropdown-content artdeco-dropdown__content artdeco-dropdown--is-dropdown-element artdeco-dropdown__content--justification-left artdeco-dropdown__content--placement-bottom ember-view"
            ></div>
          </div>

          <div id="ember52" className="ember-view">
            <div id="ember53" className="ember-view">
              {" "}
            </div>
          </div>
        </div>

        <div className="relative display-flex justify-space-between">
          <a
            tabIndex={0}
            rel="noopener noreferrer"
            target="_blank"
            href="https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile"
            id="ember54"
            className="ember-view"
          >
            <span className="t-16 t-black--light t-bold">
              Edit public profile &amp; URL
            </span>
          </a>

          <span
            tabIndex={-1}
            id="ember55"
            className="artdeco-hoverable-trigger pv-profile-info-section-button__button-icon artdeco-hoverable-trigger--content-placed-bottom artdeco-hoverable-trigger--is-hoverable ember-view"
          >
            <span aria-describedby="artdeco-hoverable-artdeco-gen-42">
              <li
                  style={{
                    listStyleType: 'none',
                    listStylePosition: 'outside',
                  }}
                data-type="question-pebble-icon"
                data-size="small"
                role="img"
                aria-label="See and edit how you look to people who are not signed in, and find you through search engines (ex: Google, Bing)."
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  data-supported-dps="16x16"
                  fill="currentColor"
                  className="mercado-match"
                  width="16"
                  height="16"
                  focusable="false"
                >
                  <path d="M8 1a7 7 0 107 7 7 7 0 00-7-7zm0 11.25A1.25 1.25 0 119.25 11 1.25 1.25 0 018 12.25zM8.82 9H7v-.95l.93-.46C8.64 7.24 9 6.89 9 6.6S8.57 6 8 6a6.49 6.49 0 00-3 .91V4.84A6.35 6.35 0 018.1 4c2 0 2.9 1 2.9 2.4 0 .9-.5 1.83-2.18 2.6z"></path>
                </svg>
              </li>
            </span>
            <div id="artdeco-gen-42" className="ember-view">
              <div id="ember57" className="ember-view"></div>
            </div>
          </span>
        </div>
      </div>

      <section className="ad-banner-container artdeco-card overflow-hidden" style={{
        display:'none',
        visibility: 'hidden'
      }}>
        <iframe
          data-ad-banner=""
          className="ad-banner"
          width="300"
          height="250"
          src="about:blank"
          scrolling="no"
          title="advertisement"
        ></iframe>
      </section>

      <div className="pv-profile-pymk__container artdeco-card">
        <section className="pt4 pb3 ph4">
          <h2 className="text-heading-medium">People you may know</h2>

          <ul className="pv-profile-pymk__list">
            <li className="pv-pymk-section__member-container">
              <a
                href="https://ercaws.com/2022/11/17/demon-selipsky-misses-deadline/"
                id="ember203"
                className="ember-view display-flex align-items-center link-without-hover-visited justify-flex-start text-body-medium"
              >
                <img
                  width="56"
                  src="/index_files/1517663418301.jpeg"
                  loading="lazy"
                  height="56"
                  alt="Ben Southcott"
                  id="ember204"
                  className="lazy-image pv-pymk-section__member-image mr3 EntityPhoto-circle-3 ember-view"
                />

                <div className="pv-pymk-section__member-detail ph0">
                  <h3 className="actor-name-with-distance t-16 t-black t-bold pv-pymk-section__member-detail--has-hover">
                    <span className="name-and-icon">
                      <span className="name t-bold t-14 t-black">
                        Adam Selipsky
                      </span>
                      <span className="distance-and-badge">
                        <span className="distance-badge t-black--light t-14 separator t-black--light hidden">
                          <span
                            className="visually-hidden"
                            aria-label="{:distance}"
                          >
                            {/* {:distance} */}
                          </span>
                          <span
                            className="dist-value text-body-small"
                            aria-hidden="true"
                          >
                            {/* {:distance} */}
                          </span>{" "}
                        </span>
                      </span>
                    </span>
                  </h3>
                  <p className="pv-pymk-section__member-headline text-body-xsmall t-black--light"></p>
                  <div
                    className="inline-show-more-text inline-show-more-text--is-collapsed inline-show-more-text--is-collapsed-with-line-clamp"
                    style={{
                      lineHeight: "2rem",
                      maxHeight: "4rem",
                      WebkitLineClamp: "2",
                    }}
                  >
                    Officer of Liability at Amazon Services LLC
                  </div>
                </div>
              </a>

              <div className="pv-pymk-section__member-cta">
                <button
                  aria-label="Invite Ben Southcott to connect"
                  id="ember205"
                  className="artdeco-button artdeco-button--muted artdeco-button--2 artdeco-button--secondary ember-view"
                  onClick={()  => {
                    window.location.href='https://www.linkedin.com/in/adamselipsky'
                  }}
                >
                  <span className="artdeco-button__text"> Connect </span>
                </button>
              </div>
            </li>

            <li className="pv-pymk-section__member-container">
              <a
                href="https://ercaws.com/time"
                id="ember203"
                className="ember-view display-flex align-items-center link-without-hover-visited justify-flex-start text-body-medium"
              >
                <img
                  width="56"
                  src="/index_files/ajassy.jpeg"
                  loading="lazy"
                  height="56"
                  alt="Ben Southcott"
                  id="ember204"
                  className="lazy-image pv-pymk-section__member-image mr3 EntityPhoto-circle-3 ember-view"
                />

                <div className="pv-pymk-section__member-detail ph0">
                  <h3 className="actor-name-with-distance t-16 t-black t-bold pv-pymk-section__member-detail--has-hover">
                    <span className="name-and-icon">
                      <span className="name t-bold t-14 t-black">
                        Andy Jassy
                      </span>
                      <span className="distance-and-badge">
                        <span className="distance-badge t-black--light t-14 separator t-black--light hidden">
                          <span
                            className="visually-hidden"
                            aria-label="{:distance}"
                          >
                            {/* {:distance} */}
                          </span>
                          <span
                            className="dist-value text-body-small"
                            aria-hidden="true"
                          >
                            {/* {:distance} */}
                          </span>{" "}
                        </span>
                      </span>
                    </span>
                  </h3>
                  <p className="pv-pymk-section__member-headline text-body-xsmall t-black--light"></p>
                  <div
                    className="inline-show-more-text inline-show-more-text--is-collapsed inline-show-more-text--is-collapsed-with-line-clamp"
                    style={{
                      lineHeight: "2rem",
                      maxHeight: "4rem",
                      WebkitLineClamp: "2",
                    }}
                  >
                    Office of Liability&amp; Amazon Services LLC
                  </div>
                </div>
              </a>

              <div className="pv-pymk-section__member-cta">
                <button
                  aria-label="Invite Ben Southcott to connect"
                  id="ember205"
                  className="artdeco-button artdeco-button--muted artdeco-button--2 artdeco-button--secondary ember-view"
                  onClick={()=> {
                           window.location.href='https://www.linkedin.com/in/andy-jassy-8b1615'

                  }}
                >
                  <span className="artdeco-button__text"> Connect </span>
                </button>
              </div>
            </li>
          </ul>
        </section>
      </div>

      <div className="application-outlet" style={{
        display:'none',
        visibility: 'hidden'
      }}>
        <div className="global-nav__a11y-menu">
          <div className="global-nav__a11y-menu-container">
            <button
              id="ember11"
              className="mr4 artdeco-button artdeco-button--muted artdeco-button--2 artdeco-button--secondary ember-view"
            >
              <span className="artdeco-button__text"> Skip to search </span>
            </button>

            <button
              id="ember12"
              className="artdeco-button artdeco-button--muted artdeco-button--2 artdeco-button--secondary ember-view"
            >
              <span className="artdeco-button__text">Skip to main content</span>
            </button>

            <button
              id="ember13"
              className="global-nav__a11y-menu-close artdeco-button artdeco-button--circle artdeco-button--muted artdeco-button--2 artdeco-button--tertiary ember-view"
            >
              <li
                aria-hidden="true"
                data-type="cancel-icon"
                className="artdeco-button__icon"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  data-supported-dps="24x24"
                  fill="currentColor"
                  className="mercado-match"
                  width="24"
                  height="24"
                  focusable="false"
                >
                  <path d="M13.42 12L20 18.58 18.58 20 12 13.42 5.42 20 4 18.58 10.58 12 4 5.42 5.42 4 12 10.58 18.58 4 20 5.42z"></path>
                </svg>
              </li>

              <span className="artdeco-button__text"> Close jump menu </span>
            </button>
          </div>
        </div>
        <header
          id="global-nav"
          className="global-nav global-nav-v2 global-alert-offset-top global-nav--visible"
        >
          <div className="global-nav__content">
            <a href="https://www.linkedin.com/feed/?doFeedRefresh=true&amp;nis=true">
              <div className="ivm-image-view-model global-nav__branding-logo">
                <div className="ivm-view-attr__img-wrapper ivm-view-attr__img-wrapper--use-img-tag display-flex">
                  <li
                    data-type="app-linkedin-bug-color-icon"
                    data-size="large"
                    role="img"
                    style={{
                      listStyleType: 'none',
                      listStylePosition: 'outside',
                    }}
                    aria-label="LinkedIn"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      data-supported-dps="24x24"
                      fill="currentColor"
                      className="mercado-match"
                      width="24"
                      height="24"
                      focusable="false"
                    >
                      <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path>
                    </svg>
                  </li>
                </div>
              </div>
            </a>

            <div id="global-nav-search" className="global-nav__search">
              <div className="search-global-typeahead global-nav__search-typeahead">
                <div
                  id="global-nav-typeahead"
                  className="search-typeahead-v2 search-global-typeahead__typeahead"
                >
                  <input
                    className="search-global-typeahead__input always-show-placeholder"
                    placeholder="Search"
                    role="combobox"
                    aria-autocomplete="list"
                    aria-label="Search"
                    aria-activedescendant=""
                    aria-expanded="false"
                    type="text"
                  />

                  <div
                    aria-hidden="true"
                    className="search-global-typeahead__search-icon-container"
                  >
                    <li
                      aria-hidden="true"
                      data-type="search-icon"
                      className="search-global-typeahead__search-icon"
                      data-size="small"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 16 16"
                        data-supported-dps="16x16"
                        fill="currentColor"
                        className="mercado-match"
                        width="16"
                        height="16"
                        focusable="false"
                      >
                        <path d="M14.56 12.44L11.3 9.18a5.51 5.51 0 10-2.12 2.12l3.26 3.26a1.5 1.5 0 102.12-2.12zM3 6.5A3.5 3.5 0 116.5 10 3.5 3.5 0 013 6.5z"></path>
                      </svg>
                    </li>
                  </div>
                  <div className="search-box__overlay--hidden global-alert-offset-top"></div>
                </div>
                <button
                  className="search-global-typeahead__collapsed-search-button"
                  aria-label="Click to start a search"
                  type="button"
                >
                  <li
                    aria-hidden="true"
                    data-type="search-icon"
                    className="search-global-typeahead__collapsed-search-button-icon t-black--light"
                    data-size="medium"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      data-supported-dps="24x24"
                      fill="currentColor"
                      className="mercado-match"
                      width="24"
                      height="24"
                      focusable="false"
                    >
                      <path d="M21.41 18.59l-5.27-5.28A6.83 6.83 0 0017 10a7 7 0 10-7 7 6.83 6.83 0 003.31-.86l5.28 5.27a2 2 0 002.82-2.82zM5 10a5 5 0 115 5 5 5 0 01-5-5z"></path>
                    </svg>
                  </li>
                  <div className="search-global-typeahead__collapsed-search-button-text t-black--light t-12 t-normal">
                    Search
                  </div>
                </button>
                <div id="ember15" className="ember-view">
                  {" "}
                </div>
              </div>
            </div>

            <nav className="global-nav__nav" aria-label="Primary Navigation">
              <ul className="global-nav__primary-items">
                <li className="global-nav__primary-item">
                  <a
                    className="app-aware-link global-nav__primary-link"
                    target="_self"
                    href="https://www.linkedin.com/feed/?nis=true&amp;"
                  >
                    <div
                      id="ember16"
                      className="global-nav__primary-link-notif artdeco-notification-badge ember-view"
                    >
                      <span className="notification-badge notification-badge--show">
                        <span
                          aria-hidden="true"
                          className="notification-badge__no-count"
                        ></span>
                        <span
                          className="a11y-text"
                          data-test-notification-a11y=""
                        >
                          new feed updates notifications
                        </span>
                      </span>

                      <div className="ivm-image-view-model global-nav__icon-ivm">
                        <div className="ivm-view-attr__img-wrapper ivm-view-attr__img-wrapper--use-img-tag display-flex">
                          <li
                            aria-hidden="true"
                            data-type="nav-small-home-icon"
                            data-size="large"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              data-supported-dps="24x24"
                              fill="currentColor"
                              className="mercado-match"
                              width="24"
                              height="24"
                              focusable="false"
                            >
                              <path d="M23 9v2h-2v7a3 3 0 01-3 3h-4v-6h-4v6H6a3 3 0 01-3-3v-7H1V9l11-7z"></path>
                            </svg>
                          </li>
                        </div>
                      </div>
                    </div>

                    <span
                      className="t-12 break-words block t-black--light t-normal global-nav__primary-link-text"
                      title="Home"
                    >
                      Home
                    </span>
                  </a>
                </li>
                <li className="global-nav__primary-item">
                  <a
                    className="app-aware-link global-nav__primary-link"
                    target="_self"
                    href="https://www.linkedin.com/mynetwork/?"
                  >
                    <div className="ivm-image-view-model global-nav__icon-ivm">
                      <div className="ivm-view-attr__img-wrapper ivm-view-attr__img-wrapper--use-img-tag display-flex">
                        <li
                          aria-hidden="true"
                          data-type="nav-small-people-icon"
                          data-size="large"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            data-supported-dps="24x24"
                            fill="currentColor"
                            className="mercado-match"
                            width="24"
                            height="24"
                            focusable="false"
                          >
                            <path d="M12 16v6H3v-6a3 3 0 013-3h3a3 3 0 013 3zm5.5-3A3.5 3.5 0 1014 9.5a3.5 3.5 0 003.5 3.5zm1 2h-2a2.5 2.5 0 00-2.5 2.5V22h7v-4.5a2.5 2.5 0 00-2.5-2.5zM7.5 2A4.5 4.5 0 1012 6.5 4.49 4.49 0 007.5 2z"></path>
                          </svg>
                        </li>
                      </div>
                    </div>

                    <span
                      className="t-12 break-words block t-black--light t-normal global-nav__primary-link-text"
                      title="My Network"
                    >
                      My Network
                    </span>
                  </a>
                </li>
                <li className="global-nav__primary-item">
                  <a
                    className="app-aware-link global-nav__primary-link"
                    target="_self"
                    href="https://www.linkedin.com/jobs/?"
                  >
                    <div className="ivm-image-view-model global-nav__icon-ivm">
                      <div className="ivm-view-attr__img-wrapper ivm-view-attr__img-wrapper--use-img-tag display-flex">
                        <li
                          aria-hidden="true"
                          data-type="nav-small-jobs-icon"
                          data-size="large"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            data-supported-dps="24x24"
                            fill="currentColor"
                            className="mercado-match"
                            width="24"
                            height="24"
                            focusable="false"
                          >
                            <path d="M17 6V5a3 3 0 00-3-3h-4a3 3 0 00-3 3v1H2v4a3 3 0 003 3h14a3 3 0 003-3V6zM9 5a1 1 0 011-1h4a1 1 0 011 1v1H9zm10 9a4 4 0 003-1.38V17a3 3 0 01-3 3H5a3 3 0 01-3-3v-4.38A4 4 0 005 14z"></path>
                          </svg>
                        </li>
                      </div>
                    </div>

                    <span
                      className="t-12 break-words block t-black--light t-normal global-nav__primary-link-text"
                      title="Jobs"
                    >
                      Jobs
                    </span>
                  </a>
                </li>
                <li className="global-nav__primary-item">
                  <a
                    className="app-aware-link global-nav__primary-link"
                    target="_self"
                    href="https://www.linkedin.com/messaging/?"
                  >
                    <div
                      id="ember70"
                      className="global-nav__primary-link-notif artdeco-notification-badge ember-view"
                    >
                      <span className="notification-badge notification-badge--show">
                        <span
                          aria-hidden="true"
                          className="notification-badge__count"
                        >
                          1
                        </span>
                        <span
                          className="a11y-text"
                          data-test-notification-a11y=""
                        >
                          1 new message notification
                        </span>
                      </span>

                      <div className="ivm-image-view-model global-nav__icon-ivm">
                        <div className="ivm-view-attr__img-wrapper ivm-view-attr__img-wrapper--use-img-tag display-flex">
                          <li
                            aria-hidden="true"
                            data-type="nav-small-messaging-icon"
                            data-size="large"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              data-supported-dps="24x24"
                              fill="currentColor"
                              className="mercado-match"
                              width="24"
                              height="24"
                              focusable="false"
                            >
                              <path d="M16 4H8a7 7 0 000 14h4v4l8.16-5.39A6.78 6.78 0 0023 11a7 7 0 00-7-7zm-8 8.25A1.25 1.25 0 119.25 11 1.25 1.25 0 018 12.25zm4 0A1.25 1.25 0 1113.25 11 1.25 1.25 0 0112 12.25zm4 0A1.25 1.25 0 1117.25 11 1.25 1.25 0 0116 12.25z"></path>
                            </svg>
                          </li>
                        </div>
                      </div>
                    </div>

                    <span
                      className="t-12 break-words block t-black--light t-normal global-nav__primary-link-text"
                      title="Messaging"
                    >
                      Messaging
                    </span>
                  </a>
                </li>
                <li className="global-nav__primary-item">
                  <a
                    className="app-aware-link global-nav__primary-link"
                    target="_self"
                    href="https://www.linkedin.com/notifications/?"
                  >
                    <div
                      id="ember71"
                      className="global-nav__primary-link-notif artdeco-notification-badge ember-view"
                    >
                      <span className="notification-badge notification-badge--show">
                        <span
                          aria-hidden="true"
                          className="notification-badge__count"
                        >
                          2
                        </span>
                        <span
                          className="a11y-text"
                          data-test-notification-a11y=""
                        >
                          2 new notifications
                        </span>
                      </span>

                      <div className="ivm-image-view-model global-nav__icon-ivm">
                        <div className="ivm-view-attr__img-wrapper ivm-view-attr__img-wrapper--use-img-tag display-flex">
                          <li
                            aria-hidden="true"
                            data-type="nav-small-notifications-icon"
                            data-size="large"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              data-supported-dps="24x24"
                              fill="currentColor"
                              className="mercado-match"
                              width="24"
                              height="24"
                              focusable="false"
                            >
                              <path d="M22 19h-8.28a2 2 0 11-3.44 0H2v-1a4.52 4.52 0 011.17-2.83l1-1.17h15.7l1 1.17A4.42 4.42 0 0122 18zM18.21 7.44A6.27 6.27 0 0012 2a6.27 6.27 0 00-6.21 5.44L5 13h14z"></path>
                            </svg>
                          </li>
                        </div>
                      </div>
                    </div>

                    <span
                      className="t-12 break-words block t-black--light t-normal global-nav__primary-link-text"
                      title="Notifications"
                    >
                      Notifications
                    </span>
                  </a>
                </li>
                <li className="global-nav__primary-item">
                  <div
                    id="ember17"
                    className="global-nav__me artdeco-dropdown artdeco-dropdown--placement-bottom artdeco-dropdown--justification-left ember-view"
                  >
                    <button
                      aria-expanded="false"
                      id="ember18"
                      className="global-nav__primary-link artdeco-dropdown__trigger artdeco-dropdown__trigger--placement-bottom ember-view"
                      type="button"
                      tabIndex={0}
                    >
                      <img
                        width="24"
                        src="https://media-exp1.licdn.com/dms/image/C5603AQG-ZOBF8O3obA/profile-displayphoto-shrink_100_100/0/1657480088667?e=1663804800&amp;v=beta&amp;t=GTJikqDOZD80TOTdcs1lfUbO7CcD9_RjJTxXDqnztLk"
                        height="24"
                        alt="Ziping Liu"
                        id="ember19"
                        className="global-nav__me-photo ember-view"
                      />

                      <span className="global-nav__primary-link-text">
                        Me
                        <li
                          aria-hidden="true"
                          data-type="caret-filled-down-icon"
                          className="global-nav__icon global-nav__icon--small"
                          data-size="small"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 16 16"
                            data-supported-dps="16x16"
                            fill="currentColor"
                            className="mercado-match"
                            width="16"
                            height="16"
                            focusable="false"
                          >
                            <path d="M8 11L3 6h10z" fill-rule="evenodd"></path>
                          </svg>
                        </li>
                      </span>
                    </button>

                    <div
                      tabIndex={-1}
                      aria-hidden="true"
                      id="ember20"
                      className="global-nav__me-content artdeco-dropdown__content artdeco-dropdown--is-dropdown-element artdeco-dropdown__content--justification-right artdeco-dropdown__content--placement-bottom ember-view"
                    ></div>
                  </div>
                </li>
                <li className="global-nav__primary-item">
                  <button
                    aria-expanded="false"
                    className="global-nav__primary-link global-nav__primary-item--divider"
                    type="button"
                  >
                    <div className="ivm-image-view-model global-nav__icon-ivm">
                      <div className="ivm-view-attr__img-wrapper ivm-view-attr__img-wrapper--use-img-tag display-flex">
                        <li
                          aria-hidden="true"
                          data-type="nav-small-app-switcher-icon"
                          data-size="large"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            data-supported-dps="24x24"
                            fill="currentColor"
                            className="mercado-match"
                            width="24"
                            height="24"
                            focusable="false"
                          >
                            <path d="M3 3h4v4H3zm7 4h4V3h-4zm7-4v4h4V3zM3 14h4v-4H3zm7 0h4v-4h-4zm7 0h4v-4h-4zM3 21h4v-4H3zm7 0h4v-4h-4zm7 0h4v-4h-4z"></path>
                          </svg>
                        </li>
                      </div>
                    </div>

                    <span
                      className="global-nav__primary-link-text"
                      title="Work"
                    >
                      Work
                      <li
                        aria-hidden="true"
                        data-type="caret-filled-down-icon"
                        data-size="small"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 16 16"
                          data-supported-dps="16x16"
                          fill="currentColor"
                          className="mercado-match"
                          width="16"
                          height="16"
                          focusable="false"
                        >
                          <path d="M8 11L3 6h10z" fill-rule="evenodd"></path>
                        </svg>
                      </li>
                    </span>
                  </button>

                  <div id="ember21" className="ember-view">
                    {" "}
                  </div>
                </li>

                <li className="global-nav__primary-item">
                  <a
                    className="app-aware-link global-nav__primary-link"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.linkedin.com/learning/?trk=nav_neptune_learning&amp;"
                  >
                    <div className="ivm-image-view-model global-nav__icon-ivm">
                      <div className="ivm-view-attr__img-wrapper ivm-view-attr__img-wrapper--use-img-tag display-flex">
                        <li
                          aria-hidden="true"
                          data-type="nav-small-learning-icon"
                          data-active="true"
                          data-size="large"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            data-supported-dps="24x24"
                            fill="currentColor"
                            width="24"
                            height="24"
                            focusable="false"
                          >
                            <path d="M22 5v14H2V5h20m1-2H1a1 1 0 00-1 1v16a1 1 0 001 1h22a1 1 0 001-1V4a1 1 0 00-1-1z"></path>
                            <path
                              d="M2 5v14h10V5H2zm8 12H4v-2h6v2zm0-4H4v-2h6v2zm0-4H4V7h6v2z"
                              style={{
                                isolation: "isolate",
                              }}
                              opacity=".25"
                            ></path>
                            <path
                              style={{
                                isolation: "isolate",
                              }}
                              opacity=".6"
                              d="M14 7h6v2h-6zM14 11h6v2h-6zM14 15h6v2h-6z"
                            ></path>
                            <path d="M10 7.53v8.93a.28.28 0 00.44.23l6.43-4.44a.33.33 0 00.06-.46l-.06-.06-6.43-4.43a.28.28 0 00-.44.23z"></path>
                          </svg>
                        </li>
                      </div>
                    </div>

                    <span
                      className="t-12 break-words block t-black--light t-normal global-nav__primary-link-text"
                      title="Learning"
                    >
                      Learning
                    </span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </header>

        <div className="videoinappalert-inapp-alerts-manager hidden"></div>

        <div className="authentication-outlet">
          <div
            id="profile-content"
            className="extended tetris pv-profile-body-wrapper"
          >
            <div className="body">
              <div className="scaffold-layout__tracking-element"></div>

              <div className="scaffold-layout scaffold-layout--breakpoint-lg scaffold-layout--main-aside scaffold-layout--reflow pv-profile">
                <section className="scaffold-layout-toolbar scaffold-layout-toolbar--is-fixed">
                  <div className="scaffold-layout-toolbar__content scaffold-layout-container scaffold-layout-container--reflow">
                    <div className="pv-profile-sticky-header-v2__container pv1">
                      <div
                        id="ember26"
                        className="artdeco-entity-lockup artdeco-entity-lockup--size-1 ember-view pv-profile-sticky-header-v2__mini-profile-container"
                      >
                        <div className="presence-entity presence-entity--size-1 m1">
                          <img
                            src="https://media-exp1.licdn.com/dms/image/C5603AQG-ZOBF8O3obA/profile-displayphoto-shrink_100_100/0/1657480088667?e=1663804800&amp;v=beta&amp;t=GTJikqDOZD80TOTdcs1lfUbO7CcD9_RjJTxXDqnztLk"
                            loading="lazy"
                            alt="Ziping Liu"
                            id="ember27"
                            className="presence-entity__image EntityPhoto-circle-1 lazy-image ember-view"
                          />

                          <div className="presence-entity__indicator presence-entity__indicator--size-1 presence-indicator hidden presence-indicator--size-1">
                            <span className="visually-hidden">
                              Status is offline
                            </span>
                          </div>
                        </div>
                        <div
                          id="ember28"
                          className="artdeco-entity-lockup__content ember-view overflow-hidden ml1 align-self-flex-start"
                        >
                          <div
                            id="ember29"
                            className="artdeco-entity-lockup__title ember-view"
                          >
                            Ziping Liu
                            <span className="t-normal pl1">
                              (he, him, or his)
                            </span>
                          </div>

                          <div
                            id="ember30"
                            className="artdeco-entity-lockup__subtitle ember-view truncate"
                          >
                            Federal Entity at the CIA, Self-Identified and
                            approved by the 🇺🇸 🇨🇳 Citizens, as the U.S.
                            Constitution of 🇺🇸 in terms.ziping.org and
                            gov.ziping.org in 🩸 and 💧 of Ziping Liu, himself,
                            wounded by Amazon.com Tribes
                          </div>
                        </div>
                      </div>
                      <div className="pv-profile-sticky-header-v2__actions-container">
                        <div className="display-flex inline-flex">
                          <div className="pvs-profile-actions pvs-profile-actions--rtl mr2">
                            <div
                              id="ember192"
                              className="artdeco-dropdown artdeco-dropdown--placement-bottom artdeco-dropdown--justification-left ember-view"
                            >
                              <button
                                aria-expanded="false"
                                aria-label="More actions"
                                id="ember193"
                                className="artdeco-dropdown__trigger artdeco-dropdown__trigger--placement-bottom ember-view pvs-profile-actions__action artdeco-button artdeco-button--secondary artdeco-button--muted artdeco-button--2"
                                type="button"
                                tabIndex={0}
                              >
                                <span>More</span>
                              </button>
                              <div
                                tabIndex={-1}
                                aria-hidden="true"
                                id="ember194"
                                className="pvs-overflow-actions-dropdown__content artdeco-dropdown__content artdeco-dropdown--is-dropdown-element artdeco-dropdown__content--justification-left artdeco-dropdown__content--placement-bottom ember-view"
                              >
                                <div className="artdeco-dropdown__content-inner">
                                  <ul>
                                    <li>
                                      <div
                                        data-control-name="share_profile"
                                        role="button"
                                        id="ember195"
                                        className="display-flex align-items-center artdeco-dropdown__item artdeco-dropdown__item--is-dropdown ember-view"
                                        tabIndex={0}
                                      >
                                        <li
                                          aria-hidden="true"
                                          data-type="share-linkedin-icon"
                                          className="mr3 flex-grow-0"
                                          data-size="large"
                                        >
                                          <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            data-supported-dps="24x24"
                                            fill="currentColor"
                                            className="mercado-match"
                                            width="24"
                                            height="24"
                                            focusable="false"
                                          >
                                            <path d="M23 12l-4.61 7H16l4-6H8a3.92 3.92 0 00-4 3.84V17a4 4 0 00.19 1.24L5.12 21H3l-.73-2.22A6.4 6.4 0 012 16.94 6 6 0 018 11h12l-4-6h2.39z"></path>
                                          </svg>
                                        </li>
                                        <span
                                          className="display-flex t-normal flex-1"
                                          aria-hidden="true"
                                        >
                                          Share profile in a message
                                        </span>
                                        <span
                                          className="a11y-text"
                                          aria-live="off"
                                        >
                                          Share Ziping Liu’s profile via message
                                        </span>
                                      </div>
                                    </li>
                                    <li></li>
                                    <li>
                                      <div
                                        data-control-name="save_to_pdf"
                                        role="button"
                                        id="ember196"
                                        className="display-flex align-items-center artdeco-dropdown__item artdeco-dropdown__item--is-dropdown ember-view"
                                        tabIndex={0}
                                      >
                                        <li
                                          aria-hidden="true"
                                          data-type="download"
                                          className="mr3 flex-grow-0"
                                          data-size="large"
                                        >
                                          <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            data-supported-dps="24x24"
                                            fill="currentColor"
                                            className="mercado-match"
                                            width="24"
                                            height="24"
                                            focusable="false"
                                          >
                                            <path d="M21 14v5a3 3 0 01-3 3H6a3 3 0 01-3-3v-5h2v5a1 1 0 001 1h12a1 1 0 001-1v-5zm-4-.57V11l-4 2.85V3h-2v10.85L7 11v2.43L12 17z"></path>
                                          </svg>
                                        </li>
                                        <span
                                          className="display-flex t-normal flex-1"
                                          aria-hidden="true"
                                        >
                                          Save to PDF
                                        </span>
                                        <span
                                          className="a11y-text"
                                          aria-live="off"
                                        >
                                          Save your profile to PDF
                                        </span>
                                      </div>
                                    </li>
                                    <li>
                                      <div
                                        data-control-name="build_resume"
                                        role="button"
                                        id="ember197"
                                        className="display-flex align-items-center artdeco-dropdown__item artdeco-dropdown__item--is-dropdown ember-view"
                                        tabIndex={0}
                                      >
                                        <li
                                          aria-hidden="true"
                                          data-type="document-icon"
                                          className="mr3 flex-grow-0"
                                          data-size="large"
                                        >
                                          <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            data-supported-dps="24x24"
                                            fill="currentColor"
                                            className="mercado-match"
                                            width="24"
                                            height="24"
                                            focusable="false"
                                          >
                                            <path d="M15.5 2H4v20h16V6.5zM6 20V4h8v4h4v12z"></path>
                                          </svg>
                                        </li>
                                        <span
                                          className="display-flex t-normal flex-1"
                                          aria-hidden="true"
                                        >
                                          Build a resume
                                        </span>
                                        <span
                                          className="a11y-text"
                                          aria-live="off"
                                        >
                                          Build a resume
                                        </span>
                                      </div>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>

                          <button
                            id="ember78"
                            className="artdeco-button artdeco-button--2 artdeco-button--secondary ember-view m0 mr2"
                          >
                            <span className="artdeco-button__text">
                              Add profile section
                            </span>
                          </button>

                          <div
                            id="ember72"
                            className="artdeco-dropdown artdeco-dropdown--placement-bottom artdeco-dropdown--justification-left ember-view pv-top-card-add-goals"
                          >
                            <button
                              aria-expanded="false"
                              id="ember73"
                              className="artdeco-dropdown__trigger artdeco-dropdown__trigger--placement-bottom ember-view artdeco-button artdeco-button--2 artdeco-button--primary m0"
                              type="button"
                              tabIndex={0}
                            >
                              Open to
                            </button>
                            <div
                              tabIndex={-1}
                              aria-hidden="true"
                              id="ember74"
                              className="artdeco-dropdown__content artdeco-dropdown--is-dropdown-element artdeco-dropdown__content--justification-left artdeco-dropdown__content--placement-bottom ember-view"
                            ></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>

        <aside
          id="msg-overlay"
          className="msg-overlay-container msg-overlay-container-reflow"
        >
          <div
            tabIndex={-1}
            className="msg-overlay-list-bubble msg-overlay-list-bubble--is-minimized ml4"
          >
            <header className="msg-overlay-bubble-header">
              <div className="msg-overlay-bubble-header__badge-container msg-overlay-bubble-header--inverse msg-overlay-bubble-header--is-badged"></div>

              <div className="msg-overlay-bubble-header__details flex-row align-items-center ml1">
                <div className="presence-entity presence-entity--size-1">
                  <img
                    src="https://media-exp1.licdn.com/dms/image/C5603AQG-ZOBF8O3obA/profile-displayphoto-shrink_100_100/0/1657480088667?e=1663804800&amp;v=beta&amp;t=GTJikqDOZD80TOTdcs1lfUbO7CcD9_RjJTxXDqnztLk"
                    loading="lazy"
                    alt="Ziping Liu"
                    id="ember64"
                    className="presence-entity__image EntityPhoto-circle-1 lazy-image ember-view"
                  />

                  <div className="presence-entity__indicator presence-entity__indicator--size-1 presence-indicator hidden presence-indicator--size-1">
                    <span className="visually-hidden">Status is offline</span>
                  </div>
                </div>
                <button
                  className="msg-overlay-bubble-header__button truncate ml2"
                  type="button"
                >
                  <span className="truncate t-14 t-bold msg-overlay-bubble-header-dark--active">
                    <span aria-hidden="true"> Messaging </span>
                    <span className="visually-hidden">
                      You are on the messaging overlay. Press enter to open the
                      list of conversations.
                    </span>
                  </span>
                </button>

                <mark
                  className="msg-overlay-bubble-header__unread-count"
                  aria-hidden="true"
                >
                  <abbr title="You have 43 unseen message"> 43 </abbr>
                </mark>
              </div>
              <div className="msg-overlay-bubble-header__controls display-flex">
                <div
                  id="ember65"
                  className="artdeco-dropdown artdeco-dropdown--placement-top artdeco-dropdown--justification-right ember-view"
                >
                  <button
                    aria-expanded="false"
                    id="ember66"
                    className="artdeco-button artdeco-button--1 artdeco-button--circle artdeco-button--primary artdeco-dropdown__trigger artdeco-dropdown__trigger--placement-top ember-view"
                    type="button"
                    tabIndex={0}
                  >
                    <li
                      data-type="overflow-web-ios"
                      data-size="small"
                      color="true"
                      role="img"
                      aria-label="Open messenger dropdown menu"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 16 16"
                        data-supported-dps="16x16"
                        fill="currentColor"
                        className="mercado-match"
                        width="16"
                        height="16"
                        focusable="false"
                      >
                        <path d="M3 9.5A1.5 1.5 0 114.5 8 1.5 1.5 0 013 9.5zM11.5 8A1.5 1.5 0 1013 6.5 1.5 1.5 0 0011.5 8zm-5 0A1.5 1.5 0 108 6.5 1.5 1.5 0 006.5 8z"></path>
                      </svg>
                    </li>
                  </button>
                  <div className="msg-overlay-bubble-header__dropdown-container">
                    <div
                      tabIndex={-1}
                      aria-hidden="true"
                      id="ember67"
                      className="artdeco-dropdown__content artdeco-dropdown--is-dropdown-element artdeco-dropdown__content--has-arrow artdeco-dropdown__content--arrow-right artdeco-dropdown__content--justification-right artdeco-dropdown__content--placement-top ember-view"
                    ></div>
                  </div>
                </div>

                <button
                  id="ember68"
                  className="msg-overlay-bubble-header__control msg-overlay-bubble-header__control--new-convo-btn artdeco-button artdeco-button--circle artdeco-button--1 artdeco-button--primary ember-view"
                >
                  <li
                    aria-hidden="true"
                    data-type="compose-icon"
                    className="artdeco-button__icon"
                    data-data-size="small"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 16 16"
                      data-supported-dps="16x16"
                      fill="currentColor"
                      className="mercado-match"
                      width="16"
                      height="16"
                      focusable="false"
                    >
                      <path d="M15 2.53a1.51 1.51 0 01-.44 1L9.15 9 6 10l1-3.12 5.44-5.44A1.5 1.5 0 0115 2.53zM12 11a1 1 0 01-1 1H5a1 1 0 01-1-1V5a1 1 0 011-1h3V2H5a3 3 0 00-3 3v6a3 3 0 003 3h6a3 3 0 003-3V8h-2z"></path>
                    </svg>
                  </li>

                  <span className="artdeco-button__text">Compose message</span>
                </button>

                <button
                  id="ember69"
                  className="msg-overlay-bubble-header__control msg-overlay-bubble-header__control--new-convo-btn artdeco-button artdeco-button--circle artdeco-button--1 artdeco-button--primary ember-view"
                >
                  <li
                    aria-hidden="true"
                    data-type="chevron-up-icon"
                    className="artdeco-button__icon"
                    data-size="small"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 16 16"
                      data-supported-dps="16x16"
                      fill="currentColor"
                      className="mercado-match"
                      width="16"
                      height="16"
                      focusable="false"
                    >
                      <path d="M15 11L8 6.39 1 11V8.61L8 4l7 4.61z"></path>
                    </svg>
                  </li>

                  <span className="artdeco-button__text">
                    You are on the messaging overlay. Press enter to open the
                    list of conversations.
                  </span>
                </button>
              </div>
            </header>
          </div>

          <div id="msg-overlay__emoji-hoverable-outlet"></div>
        </aside>

        <img
          src="https://px.ads.linkedin.com/collect/?pid=6883&amp;fmt=gif&amp;_t=1658432064361"
          alt=""
          role="none"
          className="third-party-tracking-pixel hidden"
          data-test-third-party-tracking-pixel=""
        />
      </div>

      <div id="ember80" className="ember-view" style={{
        display:'none',
        visibility: 'hidden'
      }}>
        <section className="pv-course-recommendations artdeco-card">
          <div className="pt4 ph4">
            <div data-size="14dp" id="ember81" className="ember-view t-14">
              <li
                aria-hidden="true"
                data-type="linkedin-bug"
                data-size="14dp"
                color="brand"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 14 14"
                  data-supported-dps="14x14"
                  fill="currentColor"
                  className="mercado-match"
                  width="14"
                  height="14"
                  focusable="false"
                >
                  <g>
                    <path
                      className="background-mercado"
                      d="M14 1v12a1 1 0 01-1 1H1a1 1 0 01-1-1V1a1 1 0 011-1h12a1 1 0 011 1zM4 5H2v7h2zm.25-2A1.27 1.27 0 003 1.8 1.27 1.27 0 001.75 3 1.27 1.27 0 003 4.2 1.27 1.27 0 004.25 3zM12 8.29c0-2.2-.73-3.49-2.86-3.49A2.71 2.71 0 006.89 6V5H5v7h2V8.73A1.74 1.74 0 018.66 6.8C9.82 6.8 10 7.94 10 8.73V12h2z"
                    ></path>
                  </g>
                </svg>
              </li>
              <span className="logo-text"> LEARNING </span>
            </div>
            <h3 className="t-16 mt2">
              <span>Add new skills with these courses</span>
            </h3>

            <ul className="list-style-none">
              <li className="learning-recommendation-item display-flex">
                <a
                  tabIndex={0}
                  target="_blank"
                  href="https://www.linkedin.com/learning/excel-essential-training-office-365-microsoft-365?isLearningSubscriber=true&amp;trk=profileSelf_d_flagship3_profile_view_base_learningFeedsp215-frame_728369_learning"
                  id="ember82"
                  className="learning-recommendation-item__thumbnail-container ember-view"
                  aria-hidden="true"
                  rel="noopener noreferrer"
                >
                  <div className="ivm-image-view-model">
                    <div className="ivm-view-attr__img-wrapper ivm-view-attr__img-wrapper--use-img-tag display-flex">
                      <img
                        src="https://media-exp1.licdn.com/dms/image/C4E0DAQFMO5vAS8F9mQ/learning-public-crop_60_100/0/1594667104594?e=1659038400&amp;v=beta&amp;t=xejqmcqAXCxVEBlfhLRq4V8OEcnPwkVe061J_0ByeVc"
                        loading="lazy"
                        alt=""
                        id="ember83"
                        className="ivm-view-attr__img--centered learning-recommendation-item__image lazy-image ember-view"
                      />
                    </div>
                  </div>
                  <li
                    aria-hidden="true"
                    data-type="play-icon"
                    className="learning-recommendation-item__play-icon"
                    data-size="small"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 16 16"
                      data-supported-dps="16x16"
                      fill="currentColor"
                      className="mercado-match"
                      width="16"
                      height="16"
                      focusable="false"
                    >
                      <path d="M4 14V2l10 6z"></path>
                    </svg>
                  </li>
                </a>
                <div className="ml2 full-width">
                  <a
                    tabIndex={0}
                    target="_blank"
                    href="https://www.linkedin.com/learning/excel-essential-training-office-365-microsoft-365?isLearningSubscriber=true&amp;trk=profileSelf_d_flagship3_profile_view_base_learningFeedsp215-frame_728369_learning"
                    id="ember84"
                    className="ember-view"
                    rel="noopener noreferrer"
                  >
                    <div
                      id="ember85"
                      className="t-14 t-black t-bold lt-line-clamp lt-line-clamp--multi-line ember-view"
                      style={{
                        WebkitLineClamp: 2,
                      }}
                    >
                      Excel Essential Training (Office 365/Microsoft 365)
                    </div>
                  </a>
                  <div className="display-flex align-items-center justify-space-between mt4 t-12 t-black--light"></div>
                </div>
              </li>
              <li className="learning-recommendation-item display-flex">
                <a
                  tabIndex={0}
                  target="_blank"
                  href="https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning?isLearningSubscriber=true&amp;trk=profileSelf_d_flagship3_profile_view_base_learningFeedsp215-frame_2822405_learning"
                  id="ember86"
                  className="learning-recommendation-item__thumbnail-container ember-view"
                  aria-hidden="true"
                  rel="noopener noreferrer"
                >
                  <div className="ivm-image-view-model">
                    <div className="ivm-view-attr__img-wrapper ivm-view-attr__img-wrapper--use-img-tag display-flex">
                      <img
                        src="https://media-exp1.licdn.com/dms/image/C560DAQH2hXDrFUVpFw/learning-public-crop_60_100/0/1597075854755?e=1659038400&amp;v=beta&amp;t=T1-ZwBX9IEmXTUXkidLebReYhwsw76U0tC1HmPEg1Nk"
                        loading="lazy"
                        alt=""
                        id="ember87"
                        className="ivm-view-attr__img--centered learning-recommendation-item__image lazy-image ember-view"
                      />
                    </div>
                  </div>
                  <li
                    aria-hidden="true"
                    data-type="play-icon"
                    className="learning-recommendation-item__play-icon"
                    data-size="small"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 16 16"
                      data-supported-dps="16x16"
                      fill="currentColor"
                      className="mercado-match"
                      width="16"
                      height="16"
                      focusable="false"
                    >
                      <path d="M4 14V2l10 6z"></path>
                    </svg>
                  </li>
                </a>
                <div className="ml2 full-width">
                  <a
                    tabIndex={0}
                    target="_blank"
                    href="https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning?isLearningSubscriber=true&amp;trk=profileSelf_d_flagship3_profile_view_base_learningFeedsp215-frame_2822405_learning"
                    id="ember88"
                    className="ember-view"
                    rel="noopener noreferrer"
                  >
                    <div
                      id="ember89"
                      className="t-14 t-black t-bold lt-line-clamp lt-line-clamp--multi-line ember-view"
                      style={{
                        WebkitLineClamp: 2,
                      }}
                    >
                      Advanced NLP with Python for Machine Learning
                    </div>
                  </a>
                  <div className="display-flex align-items-center justify-space-between mt4 t-12 t-black--light"></div>
                </div>
              </li>
              <li className="learning-recommendation-item display-flex">
                <a
                  tabIndex={0}
                  target="_blank"
                  href="https://www.linkedin.com/learning/unit-testing-in-python?isLearningSubscriber=true&amp;trk=profileSelf_d_flagship3_profile_view_base_learningFeedsp215-frame_2817185_learning"
                  id="ember90"
                  className="learning-recommendation-item__thumbnail-container ember-view"
                  aria-hidden="true"
                  rel="noopener noreferrer"
                >
                  <div className="ivm-image-view-model">
                    <div className="ivm-view-attr__img-wrapper ivm-view-attr__img-wrapper--use-img-tag display-flex">
                      <img
                        src="https://media-exp1.licdn.com/dms/image/C4E0DAQHWDGkTmekVlg/learning-public-crop_60_100/0/1619134209417?e=1659038400&amp;v=beta&amp;t=jnE50q2CB3hoWNmogzURJSrVEr7MNMbriIvVMGdREvA"
                        loading="lazy"
                        alt=""
                        id="ember91"
                        className="ivm-view-attr__img--centered learning-recommendation-item__image lazy-image ember-view"
                      />
                    </div>
                  </div>
                  <li
                    aria-hidden="true"
                    data-type="play-icon"
                    className="learning-recommendation-item__play-icon"
                    data-size="small"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 16 16"
                      data-supported-dps="16x16"
                      fill="currentColor"
                      className="mercado-match"
                      width="16"
                      height="16"
                      focusable="false"
                    >
                      <path d="M4 14V2l10 6z"></path>
                    </svg>
                  </li>
                </a>
                <div className="ml2 full-width">
                  <a
                    tabIndex={0}
                    target="_blank"
                    href="https://www.linkedin.com/learning/unit-testing-in-python?isLearningSubscriber=true&amp;trk=profileSelf_d_flagship3_profile_view_base_learningFeedsp215-frame_2817185_learning"
                    id="ember92"
                    className="ember-view"
                    rel="noopener noreferrer"
                  >
                    <div
                      id="ember93"
                      className="t-14 t-black t-bold lt-line-clamp lt-line-clamp--multi-line ember-view"
                      style={{
                        WebkitLineClamp: 2,
                      }}
                    >
                      Unit Testing in Python
                    </div>
                  </a>
                  <div className="display-flex align-items-center justify-space-between mt4 t-12 t-black--light"></div>
                </div>
              </li>
            </ul>
          </div>

          <span className="pv-course-recommendations__cta">
            <span className="artdeco-button artdeco-button--tertiary t-14 artdeco-button--muted pv-course-recommendations__cta-link-wrapper">
              <a
                className="app-aware-link"
                target="_self"
                href="https://www.linkedin.com/learning/?trk=profileSelf_d_flagship3_profile_view_base_learningFeedsp215-frame_seeRecommendations_learning"
              >
                See my recommendations
              </a>
            </span>
          </span>
        </section>
      </div>
    </aside>
  );
};

export default Aside;

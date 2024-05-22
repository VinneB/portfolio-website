/*!

=========================================================
* BLK Design System React - v1.2.2
=========================================================

* Product Page: https://www.creative-tim.com/product/blk-design-system-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/blk-design-system-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import { useRef } from "react"

// core components
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import PageHeader from "components/PageHeader/PageHeader.js";
import Footer from "components/Footer/Footer.js";

// sections for this page/view
import Basics from "views/IndexSections/Basics.js";
import Navbars from "views/IndexSections/Navbars.js";
import Tabs from "views/IndexSections/Tabs.js";
import Pagination from "views/IndexSections/Pagination.js";
import Notifications from "views/IndexSections/Notifications.js";
import Typography from "views/IndexSections/Typography.js";
import JavaScript from "views/IndexSections/JavaScript.js";
import NucleoIcons from "views/IndexSections/NucleoIcons.js";
import Signup from "views/IndexSections/Signup.js";
import Examples from "views/IndexSections/Examples.js";
import Download from "views/IndexSections/Download.js";
import AboutMe from "../components/Pages/aboutme"
import Education from "components/Pages/Education";
import Experiences from "components/Pages/Experiences";

import { SidebarData } from "SidebarData";
import Skills from "components/Pages/Skills";
import Projects from "components/Pages/Projects";

export default function Index() {
  React.useEffect(() => {
    document.body.classList.toggle("index-page");
    // Scroll navigation 
    const sections = document.querySelectorAll(".section-scrollable");
    const navSections = document.querySelectorAll(".nav-scroll")
    //console.log(navSections);

    window.addEventListener("scroll", function () {
      let current = "";
      //console.log("scroll3");
      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        //console.log("scrollY: " + window.scrollY + " ; sectionTop: " + sectionTop + " ' sectionHeight: " + sectionHeight);
        if (window.scrollY >= sectionTop - sectionHeight / 3) {
          current = section.getAttribute("id");
          //console.log(current)
        }
      });

      navSections.forEach((sect) => {
        sect.classList.remove("active-nav-scroll");
        if (sect.classList.contains(current) && current !== "section-home") {
          sect.classList.add("active-nav-scroll");
        }
      });
    });
    // Specify how to clean up after this effect:
    return function cleanup() {
      document.body.classList.toggle("index-page");
    };
  }, []);






  return (
    <>
      <IndexNavbar />
      <div className="wrapper">
          <PageHeader />
        <div >
          <AboutMe  />
          <Education />
          <Skills />
          <Experiences />
          <Projects />
          <Navbars />
          <Tabs />
          <Pagination />
          <Notifications />
          <Typography />
          <JavaScript />
          <NucleoIcons />
          <Signup />
          <Examples />
          <Download />
        </div>
        <Footer />
      </div>
    </>
  );
}

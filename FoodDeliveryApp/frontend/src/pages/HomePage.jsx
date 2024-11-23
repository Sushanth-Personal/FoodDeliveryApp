// import { useNavigate } from "react-router-dom";
// import { useEffect } from "react";
import styles from "./styles/homepage.module.css";
import HeaderDesktop from "../components/HeaderDesktop/HeaderDesktop";
import NavBar from "../components/NavBar/NavBar";
import NavBarMobile from "../components/NavBarMobile/NavBarMobile";
import useScreenType from "../customHook/useScreenType";
import SearchPostCode from "../components/SearchPostcode/SearchPostcode";
import FooterComponent from "../components/FooterComponent/FooterComponent";
const HomePage = () => {
  // const navigate = useNavigate();

  const screenType = useScreenType();

  return (
    <section className={styles.homePage}>
      <header>
        {screenType === "desktop" && <HeaderDesktop />}
      </header>
      <nav>
        {screenType === "desktop" && <NavBar />}
        {screenType === "mobile" && <NavBarMobile />}
      </nav>
      <div>
        <SearchPostCode />
      </div>
      <div className={styles.searchContainer}></div>
      <div className={styles.exclusiveDealsContainer}></div>
      <div className={styles.categoryContainer}></div>
      <div className={styles.popularRestaurants}></div>
      <div className={styles.adContainer}></div>
      <div className={styles.signUpContainer}></div>
      <div className={styles.aboutUsContainer}></div>
      <div className={styles.statisticsContainer}></div>
      <footer><FooterComponent /></footer>
    </section>
  );
};

export default HomePage;

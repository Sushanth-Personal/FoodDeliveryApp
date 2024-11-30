import styles from "./checkout.module.css";
import HeaderDesktop from "../../components/HeaderDesktop/HeaderDesktop";
import NavBar from "../../components/NavBar/NavBar";
import FooterComponent from "../../components/FooterComponent/FooterComponent";
import PopularRestaurant from "../../components/PopularRestaurants/PopularRestaurants";
import OrderSummary from "./components/OrderSummary";
import { useParams } from "react-router-dom";
import ErrorPage from "../ErrorPage/ErrorPage"; // Import the ErrorPage component
import { useUserContext } from "../../Contexts/UserContext";
import AddressChange from "./components/AddressChange/AddressChange";

const CheckoutPage = () => {
  const { userId } = useParams();
  const { setUserId, isAddressChangeClicked } = useUserContext();

  // If userId is not present, redirect to ErrorPage
  if (!userId) {
    return <ErrorPage />;
  } else {
    setUserId(userId);
  }

  return (
    <section className={styles.checkoutPage}>
      <div className={styles.headerDesktopContainer}>
        <HeaderDesktop />
      </div>

      <div className={styles.navBarContainer}>
        <NavBar />
      </div>
      {!isAddressChangeClicked && (
        <>
          <div className={styles.orderSummaryContainer}>
            <OrderSummary />
          </div>
          <div className={styles.popularRestaurantsContainer}>
            <PopularRestaurant />
          </div>
        </>
      )}
      {isAddressChangeClicked && (
        <div className={styles.addressChangeContainer}>
          <AddressChange />
        </div>
      )}

      <footer>
        <FooterComponent />
      </footer>
    </section>
  );
};

export default CheckoutPage;

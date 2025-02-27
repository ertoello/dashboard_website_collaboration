import styles from "./style";
import {
  Billing,
  Business,
  CardDeal,
  Footer,
  Navbar,
  Testimonials,
  Hero,
} from "./components";

const App = () => (
  <div className="bg-[#3FA3CE] w-full overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>

    <div className={`bg-[#2B7A98] ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero />
      </div>
    </div>

    <div className={`bg-[#2B7A98] ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Business />
        <Billing />
        <CardDeal />
        <Testimonials />
        <Footer />
      </div>
    </div>
  </div>
);

export default App;

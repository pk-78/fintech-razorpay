
import Footer from "./components/Footer";
import PaymentFAQ from "./components/PaymentFAQ";
import LandingPage from "./components/LandingPage";
import HomeSecondComponent from "./components/HomeSecondComponent";
import HomeFifthComponent from "./components/HomeFifthComponent";
import HomeSeventhComponent from "./components/HomeSeventhComponent";
import HomeThirdComponent from "./components/HomeThirdComponent";
import HomeSixthComponent from "./components/HomeSixthComponent";
import OurValue from "./components/OurValueComponent";
import HomeNinthComponent from "./components/HomeNinthComponent";
import FixedFooter from "./components/FixedFooter";
import Navbar from "./components/Navbar";

function App() {
const faqsLeft = [
  { question: 'What does "liquid state" mean in property selling?', answer: 'In Share Sampatti, selling properties in liquid state means that the property is sold by its per square feet value. You buy only the area you need, not a predefined lot or unit size.'},
  { question: 'Can I buy fractional ownership in a property?', answer: 'Yes, you can buy fractional ownership of a property in liquid state, meaning you only pay for the exact square footage you need, which could be a fraction of the entire property.' },
  { question: 'Is financing available for purchasing the property?', answer: 'Yes, financing options are available through our partner banks. You can apply for a loan directly through the app when making a purchase.' },
  { question: 'Can I sell the property after purchasing It?', answer: 'Yes, you can sell your portion of the property by listing it. on Share Sampatti. The transaction will be handled as per the current market value per square foot.' },

];

const faqsRight = [
  { question: 'How is the price calculated?', answer: 'The price of the property is calculated based on the square footage you select. The cost per square foot is predefined and will be multiplied by the area you choose to purchase.'},
  { question: 'How do I know the price per square foot?', answer: 'The price per square foot is listed in the property details It may vary based on the location and amenities available in the area.' },
  { question: 'What are the additional costs involved?', answer: 'Additional costs may include maintenance fees, registration charges, and taxes, which are calculated based on the square footage you purchase.' },

];


  return (
    <div >
      <Navbar/>
      <LandingPage/>
      <HomeSecondComponent/>
      <HomeThirdComponent/>
      <OurValue/>
      <HomeFifthComponent/>
      <HomeSixthComponent/>
      <HomeSeventhComponent/>
      <PaymentFAQ faqsLeft={faqsLeft} faqsRight={faqsRight} />
      <HomeNinthComponent/>
      <Footer />
      <FixedFooter/>
    </div>
  )
}

export default App
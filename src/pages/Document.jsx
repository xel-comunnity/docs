import Footer from "../components/Footer";
import Navbar from "../components/client-side/Navbar";
import Documentation from "../components/client-side/docs/Documentation";
export default function About() {
  return (
    <div>
     <div class="main-grid ">
            <Navbar />
            <Documentation />
            <Footer />
        </div>
    </div>
  );
}


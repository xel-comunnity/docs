import Navbar from "../components/client-side/Navbar";
import Contents from "../components/client-side/Contents";
import Footer from "../components/Footer";
import HeadComponent from "../components/client-side/HeadComponent";
export default function Home(){
    // Seo optimizer
    const title = 'Xel Framework';
    const metaTags = [
        { name: 'description', content: 'Xel Framework Documentation - Comprehensive guide to using the Xel Framework for web development. Learn best practices, tips, and tricks.' },
        { name: 'keywords', content: 'Xel Framework, web development, documentation, guide, SEO, meta tags' },
        { name: 'robots', content: 'index, follow' },
      ];
    
    return (
        <>
            <HeadComponent title={title} metaTags={metaTags} />
            <div class="main-grid">
                <Navbar />
                <Contents />
                <Footer />
            </div>  
        </>
    );
}     
import UseMultipleIntersectionObservers from "../../animation/UseIntersectionObserver";

export default function AboutXel() {
  
  const createSectionClass = (isIntersecting, index) => {
    return `transition-opacity duration-1000 transform ${isIntersecting()[index] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`;
  };

  // contributor data
  const contributors = [
    { name: "Yogi Pratama", role: "Backend Core Development" },
    { name: "Muhammad Zaki", role: "Frontend Development" },
    { name: "Angga Cipta", role: "Tester" },
    { name: "Ranu", role: " Frontend Development" },
    { name: "Bagus Untoro", role: "Documentation" },
  ];

  //  Animation  Hook for overview
  const [isIntersectingBackground, addRefBackground] = UseMultipleIntersectionObservers(
    () => {}, // Callback if needed
    { threshold: 0.8 } // Adjust threshold as needed
  );


  //  Animation  Hook for overview
  const [isIntersectingContributors, addRefContributors] = UseMultipleIntersectionObservers(
    () => {}, // Callback if needed
    { threshold: 0.5 } // Adjust threshold as needed
  );

  // Animation Hook for Contributor 
  return (
    <div className="px-8 md:px-40 py-6 md:py-8 md:mb-10">
      <section ref={addRefBackground} className={`mt-12 bg-bg-200 p-4 sm:${createSectionClass(isIntersectingBackground, 0)}`}>
        <h4 className="text-3xl font-semibold text-primary-200 mb-4">Background</h4>
        <p className="text-text-200 text-lg">
        Xel is a modern, scalable framework designed for building high-performance web applications based on PHP. With its robust architecture and flexible components, Xel streamlines the development process and ensures reliable, maintainable code.
        Xel was created to address the need for a framework that supports asynchronous I/O operations, advanced routing capabilities, and efficient database pooling. It is built to help developers create scalable and maintainable applications with ease.
        </p>
      </section>

      <section ref={addRefContributors} className={`mt-12 ${createSectionClass(isIntersectingContributors, 0)}`}>
        <h4 className="text-3xl font-semibold text-primary-200 mb-4">Thank You to Our Contributors</h4>
        <p className="text-text-200 text-lg">
          We are immensely grateful to all our contributors for their hard work and dedication. Their contributions have been invaluable in making Xel what it is today.
        </p>
      </section>

      <div className="mt-12 flex flex-wrap gap-6 justify-center">
        {contributors.map((contributor, index) => {
          const [isIntersectingContributor, addRefContributor] = UseMultipleIntersectionObservers(
            () => {}, // Callback if needed
            { threshold: 0.8 } // Adjust threshold as needed
          );
          
          return (
            <div key={index} ref={addRefContributor} className={`text-center p-6 bg-bg-200 rounded-lg shadow-lg flex flex-col items-center ${createSectionClass(isIntersectingContributor, 0)} animate-fade-in w-full md:w-1/3 lg:w-1/4`}>
              <svg className="w-12 h-12 fill-current text-accent-100 mb-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              <h4 className="text-xl font-semibold text-accent-200 mb-2">{contributor.name}</h4>
              <p className="text-text-200 text-lg">{contributor.role}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

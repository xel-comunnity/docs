import UseMultipleIntersectionObservers from '../components/animation/UseIntersectionObserver';
function Projects() {
  const [isIntersecting, addRef] = UseMultipleIntersectionObservers(
    () => {}, // Callback if needed
    { threshold: 0.5 } // Adjust threshold as needed
  );

  // Smooth Animation on scroll
  const createSectionClass = (index) => {
    return `transition-opacity duration-1000 transform ${isIntersecting()[index] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`;
  };


  return (
    <div class="flex flex-col items-center justify-center">
      {/* Section 1 */}
      <section class="h-screen flex flex-col items-center justify-center bg-gray-100">
        <h1 class="text-4xl font-bold">Section 1</h1>
        <p class="mt-4 text-center max-w-prose">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.
        </p>
      </section>

      {/* Section 2 */}
      <section class="h-screen flex flex-col items-center justify-center bg-gray-200">
        <h1 class="text-4xl font-bold">Section 2</h1>
        <img src="https://via.placeholder.com/400" alt="Placeholder" class="mt-4 rounded-lg shadow-lg" />
      </section>

      {/* Section with animated targets */}
      <section class="h-screen flex flex-col items-center justify-center bg-gray-300">
        <h1 class="text-4xl font-bold mb-4">Scroll to see the animation</h1>
        <div
          ref={addRef}
          class={createSectionClass(0)}        >
          <div class="p-8 bg-blue-500 text-white rounded-lg shadow-lg">
            Animated Target Element 1
          </div>
        </div>
        <div
          ref={addRef}
          class={createSectionClass(1)}
        >
          <div class="p-8 bg-green-500 text-white rounded-lg shadow-lg">
            Animated Target Element 2
          </div>
        </div>
        <div
          ref={addRef}
          class={createSectionClass(2)}        >
          <div class="p-8 bg-red-500 text-white rounded-lg shadow-lg">
            Animated Target Element 3
          </div>
        </div>
      </section>

      {/* Section 4 */}
      <section  ref={addRef}    class={createSectionClass(3)} >
        <h1 class="text-4xl font-bold">Section 4</h1>
        <p class="mt-4 text-center max-w-prose">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.
        </p>
      </section>
    </div>
  );
}

export default Projects;

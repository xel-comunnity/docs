import UseMultipleIntersectionObservers from "../../animation/UseIntersectionObserver";

export default function Documentation() {
  // Downloadable documents data
  const documents = [
    { title: "Report", description: "Complete guide for using Xel framework", fileSize: "2.5 MB", link: "https://drive.google.com/file/d/1ijE5ZJwzqinXpshp2pMIG8dHisy9WQu-/view" },
    { title: "Detailed Test", description: "Detailed API reference", fileSize: "1.8 MB", link: "https://drive.google.com/file/d/1WiZv9LwulifsyRFvMC0cbOJzAgLVNIaX/view" },
  ];

  return (
    <div className="px-8 md:px-40 py-6 md:py-8 md:mb-10">
      {/* Video Section */}
      <section className="mt-12">
        <h4 className="text-3xl font-semibold text-primary-200 mb-4">Introduction to Xel</h4>
        <div className="relative w-full h-screen max-h-96 lg:max-h-screen bg-bg-200 rounded-lg overflow-hidden">
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            src="https://drive.google.com/file/d/1vsRRI0yaddtQUJFRPgxMeLiUlFJ737by/preview"
            title="Introduction to Xel Framework"
            allow="autoplay"
            allowFullScreen
          />
        </div>
      </section>

      {/* Downloadable Documents Section */}
      <section className="mt-12">
        <h4 className="text-3xl font-semibold text-primary-200 mb-4">Documentation</h4>
        <p className="text-text-200 text-lg mb-6">
          Access our comprehensive documentation to get the most out of Xel Framework.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {documents.map((doc, index) => (
            <div key={index} className="bg-bg-200 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-start justify-between">
                <div>
                  <h5 className="text-xl font-semibold text-accent-200 mb-2">{doc.title}</h5>
                  <p className="text-text-200 mb-4">{doc.description}</p>
                  <span className="text-sm text-text-200 opacity-75">{doc.fileSize}</span>
                </div>
                <a
                  href={doc.link}
                  className="inline-flex items-center justify-center w-12 h-12 bg-accent-100 rounded-full hover:bg-accent-200 transition-colors"
                  download
                >
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                    />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
import { A } from '@solidjs/router';
import Logo from '../../assets/logo-framework.png';
import UseMultipleIntersectionObservers from '../animation/UseIntersectionObserver';
import { For, createSignal } from 'solid-js';
import CardRedirect from '../CardRedirect';
export default function Contents(){
    // header Animations state
    const [isIntersecting, addRef] = UseMultipleIntersectionObservers(
        () => {}, // Callback if needed
        { threshold: 0.7 } // Adjust threshold as needed
    );

    // Smooth Animation on scroll
    const createSectionClass = (index) => {
        return `transition-opacity duration-1000 transform ${isIntersecting()[index] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`;
    };

    // Toggle Function Ecosystem Section
    const [showDescriptions, setShowDescriptions] = createSignal(null);

    const toggleDescription = (index) => {
       setShowDescriptions(showDescriptions() === index ? null : index);
    };

    // Library Content
    const LibraryContent = [
        {
            'id':1,
            'title': 'Xel-Async-Server',
            'shortDescription': 'Build custom webserver including dengan content inside without using static server',
            'link': 'https://github.com/xel-comunnity/Xel-Async-Server'
        },
        {
            'id':2,
            'title': 'Xel-DB',
            'shortDescription': 'Provide DB pool connection to maintenance connection with launch multi connections',
            'link': 'https://github.com/xel-comunnity/xel-db'
        },
        {
            'id':3,
            'title': 'PSR7-Bridge',
            'shortDescription': 'Bridge Protocol to convert Swoole Protocol to PHP Standart HTTP',
            'link': 'https://github.com/xel-comunnity/Xel-Psr7-Bridge'
        },
        {
            'id':4,
            'title': 'Xel-Logger',
            'shortDescription': 'Simple Logger Library based on Monolog',
            'link': 'https://github.com/xel-comunnity/Xel-Logger'
        },
        {
            'id':5,
            'title': 'Xel-Simple-Dock',
            'shortDescription': 'Simple Logger Library based on Monolog',
            'link': 'https://github.com/xel-comunnity/Xel-Simple-Dock'
        },

    ];

    const contents = [
        {
            id: 1,
            title: 'Xel-Skeleton',
            icon: (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" class="w-12 h-12 text-accent-100">
            <path strokeLinecap="round" strokeLinejoin="round" d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z" />
            </svg>),
            shortDescription: 'Xel-Skeleton is a full-stack PHP framework based on the Swoole extension, primarily designed for building RESTful APIs.',
            fullDescription: 'It utilizes Swoole for high-performance async programming, follows a modular architecture, supports middleware, dependency injection, database integration, WebSocket, caching, queuing, and provides testing/debugging tools. It\'s a powerful framework for developing scalable and maintainable RESTful APIs.',
        },
        {
            id: 2,
            title: 'Xel-Async-Server',
            icon: (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" class="w-12 h-12 text-accent-100">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 17.25v-.228a4.5 4.5 0 0 0-.12-1.03l-2.268-9.64a3.375 3.375 0 0 0-3.285-2.602H7.923a3.375 3.375 0 0 0-3.285 2.602l-2.268 9.64a4.5 4.5 0 0 0-.12 1.03v.228m19.5 0a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3m19.5 0a3 3 0 0 0-3-3H5.25a3 3 0 0 0-3 3m16.5 0h.008v.008h-.008v-.008Zm-3 0h.008v.008h-.008v-.008Z" />
            </svg>),
            shortDescription: 'Xel-Async-Server is a PHP module based on Swoole, allowing you to build customizable folder structures and providing features like routing, middleware, logging, database connection pooling, and more',
            fullDescription: 'Xel-Async-Server is a powerful and flexible PHP module built upon the Swoole extension, designed to simplify the process of building high-performance, event-driven server-side applications. It enables developers to create customizable folder structures tailored to their specific project requirements. With Xel-Async-Server, you can easily set up routing, apply middleware functions, implement logging mechanisms, establish database connection pools, and leverage various other features essential for robust server development. This module harnesses the asynchronous and high-throughput capabilities of Swoole, offering a streamlined and efficient approach to organizing and managing server-side code, promoting code reusability and maintainability while delivering exceptional performance',
        },
    ];

    return(
        <div class="px-16 py-6"> 
           <header ref={addRef} class={`md:bg-bg-200 mt-8 h-50 md:h-72 flex flex-col justify-center align-middle  sm:${createSectionClass(0)} sm:animate-fade-in`}>
                <h2 class="text-center text-primary-300 text-4xl md:text-6xl font-semibold transition-transform transform hover:scale-105 duration-300 ease-in-out">
                    Xel Framework
                </h2>
                <h3 class="text-center md:text-2xl mt-2 font-semibold text-text-100 transition-opacity duration-500 ease-in-out">
                    Learn about Xel's recent feature additions and enhancements.
                </h3>

                <div class="flex justify-center mt-4 gap-x-2">
                    <A href="https://bxel07.github.io/xel-docs/#/" class="btn text-text-100 border-accent-100 md:border-2 hover:bg-accent-100 hover:text-text-200 transition ease-out duration-500 transform hover:scale-105">
                        Get-Started
                    </A>
                    <A href="https://bxel07.github.io/xel-docs/#/README" class="btn text-text-100 border-accent-100 md:border-2 hover:bg-accent-100 hover:text-text-200 transition ease-out duration-500 transform hover:scale-105">
                        Docs
                    </A>
                </div>
            </header>
                        
            <h4 ref={addRef} class="font-bold mt-12 mb-4 pb-2 border-b-2 border-accent-100">Ecosystem</h4>
            <div class="mt-8 grid lg:grid-cols-2 gap-10 ">
                <For each={contents}>
                    {(card, index) => (
                    <div class="card bg-bg-200 hover:shadow-lg hover:shadow-accent-200 mb-4"  key={index()}>
                        <div class="flex justify-center items-center w-full h-24 sm:h-24 bg-bg-200">
                            {card.icon}
                        </div>
                        <div class="m-4">
                            <div class="font-bold text-xl mb-2">{card.title}</div>
                            <p class="text-text-200 text-base">
                                {showDescriptions() === index() ? card.fullDescription : card.shortDescription}
                            </p>
                            <button
                                class="text-accent-200 hover:text-accent-200 mt-2"
                                onClick={() => toggleDescription(index())}>
                                {showDescriptions() === index() ? "Read Less" : "Read More"}
                            </button>
                        </div>
                    </div>
                    )}
                </For>
            </div>

            {/* Next Content */}
            <h4 class="font-bold mt-12 mb-4 pb-2 border-b-2 border-accent-100">Developed Library</h4>

            <div class="grid gap-8 md:grid-cols-2">

             <div class="flex flex-col p-2  md:p-6 bg-bg-200 rounded-lg shadow-md animate-fade-in">
                <p class="text-text-100 mb-4 text-lg leading-relaxed">
                    Explore our collection of high-quality libraries for your next project. Our libraries are designed to provide robust and scalable solutions, making your development process more efficient and reliable.
                </p>

                <div class="flex items-center mb-4">
                    <svg class="w-6 h-6 text-accent-100 font-bold mr-2 transition-transform transform hover:scale-125" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                    <span class="text-text-100 transition-transform transform hover:translate-x-2">Thoroughly tested and maintained</span>
                </div>

                <div class="flex items-center mb-4">
                    <svg class="w-6 h-6 text-accent-100 font-bold mr-2 transition-transform transform hover:scale-125" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                    <span class="text-text-100 transition-transform transform hover:translate-x-2">Optimized for performance</span>
                </div>

                <div class="flex items-center mb-4">
                    <svg class="w-6 h-6 text-accent-100 font-bold mr-2 transition-transform transform hover:scale-125" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                    <span class="text-text-100 transition-transform transform hover:translate-x-2">Well-documented and easy to use</span>
                </div>

                <div class="flex items-center mb-4">
                    <svg class="w-6 h-6 text-accent-100 font-bold mr-2 transition-transform transform hover:scale-125" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                    <span class="text-text-100 transition-transform transform hover:translate-x-2">Support Coroutine</span>
                </div>

                <div class="flex items-center mb-4">
                    <svg class="w-6 h-6 text-accent-100 font-bold mr-2 transition-transform transform hover:scale-125" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                    <span class="text-text-100 transition-transform transform hover:translate-x-2">Support Asynchronous I/O</span>
                </div>

                <div class="flex items-center mb-4">
                    <svg class="w-6 h-6 text-accent-100 font-bold mr-2 transition-transform transform hover:scale-125" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                    <span class="text-text-100 transition-transform transform hover:translate-x-2">Support as Dedicated Server</span>
                </div>

                <div class="flex items-center mb-4">
                    <svg class="w-6 h-6 text-accent-100 font-bold mr-2 transition-transform transform hover:scale-125" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                    <span class="text-text-100 transition-transform transform hover:translate-x-2">Support Pool Connection</span>
                </div>

                <div class="flex items-center mb-4">
                    <svg class="w-6 h-6 text-accent-100 font-bold mr-2 transition-transform transform hover:scale-125" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                    <span class="text-text-100 transition-transform transform hover:translate-x-2">Support Dynamic Routing</span>
                </div>

                <div class="flex items-center mb-4">
                    <svg class="w-6 h-6 text-accent-100 font-bold mr-2 transition-transform transform hover:scale-125" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                    <span class="text-text-100 transition-transform transform hover:translate-x-2">Gemstone Sub-layer</span>
                </div>
            </div>

            {/* Grid card Content */}
            <div class='grid grid-cols-1  md:grid-flow-row-dense md:grid-cols-2 gap-4'>
            <For each={LibraryContent}>
                {(item) => (
                    <CardRedirect
                    icon="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
                    text={item.title}
                    description={item.shortDescription}
                    link={item.link}
                    />
                )}
                </For>
            </div>
        </div>

        
            
            <div class="flex flex-col md:flex-row justify-center items-center mt-12 p-8 bg-bg-200 animate-fade-in border-2 border-accent-100">
                <img src={Logo} alt="Community Image" class="w-auto h-32 md:w-auto md:h-50 md:mr-4 rounded-full shadow-lg transform hover:scale-110 transition duration-500 ease-in-out border-4 border-accent-100" />
                <div class="py-4 flex flex-col justify-center md:py-1 md:ml-4">
                    <p class="text-text-200 py-2 text-center md:text-left text-lg md:text-xl transition transform hover:translate-y-1">
                        Join our vibrant community of developers and stay updated with the latest trends and best practices.
                    </p>
                    <A href="https://github.com/xel-comunnity"class="text-center border-2 border-accent-100 hover:bg-accent-100 text-white font-bold py-2 px-4 rounded mt-2 transition duration-300 transform hover:scale-105 hover:shadow-md">
                        Join Now
                    </A>
                </div>
            </div>
        </div>
    );
}
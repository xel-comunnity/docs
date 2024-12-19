import { A } from "@solidjs/router";
import { createSignal } from "solid-js";


export default function Navbar(){
    const [isOpen, setIsOpen] = createSignal(false);

    const toggleNavbar = () => {
        setIsOpen(!isOpen());
    };
    return(
    <div class="bg-primary-100 overflow-hidden">
        <nav>
            <div class="flex flex-col p-4 md:flex-wrap md:justify-around md:flex-row md:p-2">
                <div class="flex justify-center items-center">
                    <h1>
                        <A href="/" class="hover:text-accent-100 font-bold uppercase py-4">Xel-Framework</A>
                    </h1>
        
                    <div class="cursor-pointer md:hidden" onClick={toggleNavbar}>
                        <svg class="w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
                        </svg>
                    </div>
                </div>
        
                <ul class={`flex flex-col md:flex-row transition-transform duration-300 ${isOpen() ? "translate-x-0" : "-translate-x-full h-0 overflow-hidden md:translate-x-0 md:h-auto md:overflow-auto"}`}>
                    <li class="text-text-200 font-bold py-2 inline">
                        <A href="/" class="p-4 flex items-center border-l-4 border-accent-100">
                            <span>Home</span>
                            <svg class="w-5 ml-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                            </svg>
                        </A>
                    </li>
                    <li class="py-2">
                        <A href="/about" class="p-4 flex items-center">
                            <span>About</span>
                            <svg class="w-5 ml-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
                            </svg>
                        </A>
                    </li>

                    <li class="py-2">
                        <A href="/docs" class="p-4 flex items-center">
                            <span>Demo Document</span>
                            <svg class="w-5 ml-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
                            </svg>
                        </A>
                    </li>
                </ul>
            </div>
        </nav>   
    </div>
    );
    
}
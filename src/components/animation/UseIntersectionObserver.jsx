// import { createSignal, onCleanup, createEffect } from 'solid-js';

// function UseMultipleIntersectionObservers(callback, options) {
//   const [refs, setRefs] = createSignal([]);
//   const [isIntersecting, setIsIntersecting] = createSignal([]);

//   createEffect(() => {
//     const elements = refs();
//     const initialStates = elements.map(() => false);
//     setIsIntersecting(initialStates);

//     const observer = new IntersectionObserver((entries) => {
//       entries.forEach(entry => {
//         const index = elements.indexOf(entry.target);
//         if (index > -1) {
//           setIsIntersecting((states) => {
//             const newStates = [...states];
//             newStates[index] = entry.isIntersecting;
//             return newStates;
//           });
//           if (entry.isIntersecting) {
//             callback(entry);
//           }
//         }
//       });
//     }, options);

//     elements.forEach(element => {
//       if (element) observer.observe(element);
//     });

//     onCleanup(() => {
//       elements.forEach(element => {
//         if (element) observer.unobserve(element);
//       });
//       observer.disconnect();
//     });
//   });

//   const addRef = (el) => {
//     setRefs((prev) => [...prev, el]);
//   };

//   return [isIntersecting, addRef];
// }

// export default UseMultipleIntersectionObservers;

import { createSignal, onCleanup, createEffect } from 'solid-js';

function UseMultipleIntersectionObservers(callback, options) {
  const [refs, setRefs] = createSignal([]);
  const [isIntersecting, setIsIntersecting] = createSignal([]);

  createEffect(() => {
    const elements = refs();
    const initialStates = elements.map(() => false);
    setIsIntersecting(initialStates);

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        const index = elements.indexOf(entry.target);
        if (index > -1) {
          setIsIntersecting((states) => {
            const newStates = [...states];
            newStates[index] = entry.isIntersecting;
            return newStates;
          });
          if (entry.isIntersecting) {
            callback(entry);
          }
        }
      });
    }, options);

    elements.forEach(element => {
      if (element) observer.observe(element);
    });

    onCleanup(() => {
      elements.forEach(element => {
        if (element) observer.unobserve(element);
      });
      observer.disconnect();
    });
  });

  const addRef = (el) => {
    setRefs((prev) => [...prev, el]);
  };

  return [isIntersecting, addRef];
}

export default UseMultipleIntersectionObservers;

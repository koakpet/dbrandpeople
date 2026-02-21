// "use client";

// import { useEffect, useState } from "react";

// const images = [
//   "/images/hero-1.jpg",
//   "/images/hero-2.jpg",
//   "/images/hero-3.jpg",
// ];

// export default function Carousel() {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndex((prev) => (prev + 1) % images.length);
//     }, 5000);

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="relative h-[80vh] w-full overflow-hidden">
//       {images.map((src, index) => (
//         <img
//           key={src}
//           src={src}
//           alt="DBrand bespoke fashion"
//           className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
//             index === currentIndex ? "opacity-100" : "opacity-0"
//           }`}
//         />
//       ))}
//     </div>
//   );
// }

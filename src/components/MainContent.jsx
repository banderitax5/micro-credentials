import { useState } from 'react';

function MainContent() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      image: 'https://www.urbanathletics.com.ph/cdn/shop/files/60503608_9FORTY_SS25_NEW-ERA-9FORTY_WHITE_3QL.png?v=1753258811',
      title: 'Slide 1',
      description: 'First slide'
    },
    {
      id: 2,
      image: 'https://www.urbanathletics.com.ph/cdn/shop/files/14499985_9FORTY_SS25_NEW-ERA-CAP-COMPANY_BLK_3QL.png?v=1753068281&width=640',
      title: 'Slide 2',
      description: 'Second slide'
    },
    {
      id: 3,
      image: 'https://www.urbanathletics.com.ph/cdn/shop/files/14499984_9FORTY_SS25_NEW-ERA-CAP-COMPANY_CHROME-WHITE_3QL.png?v=1753068030&width=640',
      title: 'Slide 3',
      description: 'Third slide'
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="flex-1 max-w-7xl mx-auto py-10">
      <div className="w-full bg-gray-900 rounded-lg overflow-hidden">
        
        <div className="relative w-full h-96 flex items-center justify-center">
          <img
            src={slides[currentSlide].image}
            alt={slides[currentSlide].title}
            className="w-full h-full object-cover"
          />

          
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-75 text-white p-2 rounded-full z-10"
          >
            ❮
          </button>

          
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-75 text-white p-2 rounded-full z-10"
          >
            ❯
          </button>

         
          <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-60 text-white p-4">
            <h3 className="text-xl font-bold">{slides[currentSlide].title}</h3>
            <p className="text-sm">{slides[currentSlide].description}</p>
          </div>
        </div>

        
        <div className="flex justify-center gap-2 bg-gray-800 p-4">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentSlide ? 'bg-white w-8' : 'bg-gray-500'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default MainContent
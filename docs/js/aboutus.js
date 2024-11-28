// JavaScript for About Us page interactivity

document.addEventListener("DOMContentLoaded", () => {
    // 1. Dynamic Testimonial Carousel
    const testimonials = [
      {
        text: "SinagKuha captured every moment perfectly at our wedding. Highly recommended!",
        author: "- A Happy Client",
      },
      {
        text: "Professional and creative! They made our event unforgettable.",
        author: "- Another Satisfied Client",
      },
      {
        text: "The video quality was amazing! Thank you, SinagKuha!",
        author: "- A Grateful Customer",
      },
    ];
  
    let currentTestimonialIndex = 0;
    const testimonialElement = document.querySelector(".carousel blockquote p");
    const authorElement = document.querySelector(".carousel blockquote footer");
  
    function updateTestimonial() {
      const testimonial = testimonials[currentTestimonialIndex];
      testimonialElement.textContent = testimonial.text;
      authorElement.textContent = testimonial.author;
  
      currentTestimonialIndex =
        (currentTestimonialIndex + 1) % testimonials.length; // Loop back to the first
    }
  
    // Change testimonial every 5 seconds
    setInterval(updateTestimonial, 5000);
  
    // Initialize with the first testimonial
    updateTestimonial();
  
        if (targetSection) {
          event.preventDefault(); // Prevent default anchor behavior
          targetSection.scrollIntoView({
            behavior: "smooth",
          });
        }
      });
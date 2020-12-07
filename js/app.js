const portfolioItems = document.querySelectorAll('.portfolio-item-wrapper');
          
            portfolioItems.forEach(portfolioItem => {
              portfolioItem.addEventListener('mouseover', () => {
                console.log(portfolioItem.childNodes[1].classList)
                portfolioItem.childNodes[1].classList.add('img-darken');
              });
          
              portfolioItem.addEventListener('mouseout', () => {
                console.log(portfolioItem.childNodes[1].classList)
                portfolioItem.childNodes[1].classList.remove('img-darken');
              });
            });



            const navSlide = () => 
            {
                const burger = document.querySelector('.burger');
                const nav = document.querySelector('.nav-links');
                const navLinks = document.querySelectorAll('.nav-links li');
            
                burger.addEventListener('click', () => {
                    nav.classList.toggle('nav-active');
            
                    navLinks.forEach((link, index) =>
                {
                    if (link.style.animation){
                        link.style.animation = ''
                    }
                    else{
                        link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.4}s`;
                    }
                });
            
                burger.classList.toggle('toggle');
                });
            
                
            }
            
            navSlide();


            document.querySelector(".home").addEventListener("click", () => {
              document.querySelector("html").style.scrollBehavior = "smooth";
              setTimeout(() => {
                document.querySelector("html").style.scrollBehavior = "unset";
              }, 1000);
            });
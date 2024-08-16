tailwind.config = {
    theme: {
        screens: {
            sm: '300px',
            md: '768px',
            llg: '1024px',
            lg: '1200px',
            xl: '1400px',
        },
        extend: {
        	
            backgroundImage: {
                 'hero-banner':"linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,0.6)),url('./assets/img/banner.webp')",
                  'hero-banner1':"linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,0.6)),url('./assets/img/banner2.webp')",
                   'hero-banner2':"linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,0.6)),url('./assets/img/banner3.webp')",
                   'about-banner':"url('./assets/img/people-doing-indoor-cycling.webp')",
                    'coach-banner1':"url('./assets/img/aaron-brogden-9y4MaTz2Js0-unsplash.webp')",
                    'coach-banner2':"url('./assets/img/dollar-gill-f9W9svqHpSU-unsplash.webp')",
                    'coach-banner3':"url('./assets/img/wells-chan-H-vAxuWxmi8-unsplash.webp')",
                    'blog-banner1':"url('./assets/img/woman-doing-hyperextension-exercise-gym.webp')",
                    'blog-banner2':"url('./assets/img/woman-gym-exercising-with-weight-plate.webp')",
                    'blog-banner3':"url('./assets/img/woman-with-visible-abs-doing-fitness.webp')",
                 
            },
        
        },
    },
}


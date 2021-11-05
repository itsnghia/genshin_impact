        // Modal Events
        const loginBtn = document.querySelector(".login-btn");
        const loginModal = document.querySelector(".login-modal");
        const loginCloseBtn = document.querySelector(".login-modal-close");

        const videoPlayBtn = document.querySelector(".video-play-btn");
        const videoModal = document.querySelector(".video-modal");
        const videoCloseBtn = document.querySelector(".close-video-modal");

        const openVideoModal = (e) => {
            videoModal.classList.add("open");
        }

        const closeVideoModal = (e) => {
            videoModal.classList.remove("open");
        }

        const openLoginModal = (e) => {
            loginModal.classList.add("open");
        }

        const closeLoginModal = (e) => {
            loginModal.classList.remove("open");
        }

        videoPlayBtn.addEventListener("click", openVideoModal);
        videoCloseBtn.addEventListener("click", closeVideoModal);

        loginBtn.addEventListener("click", openLoginModal);
        loginCloseBtn.addEventListener("click", closeLoginModal);
        
        

 
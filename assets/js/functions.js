// Countdown Timer
function updateCountdown() {
    const days = document.getElementById('days');
    const hours = document.getElementById('hours');
    const minutes = document.getElementById('minutes');
    const seconds = document.getElementById('seconds');
    
    // Set the date we're counting down to (3 days from now)
    const countDownDate = new Date();
    countDownDate.setDate(countDownDate.getDate() + 3);
    
    // Update the countdown every 1 second
    const x = setInterval(function() {
        // Get today's date and time
        const now = new Date().getTime();
        
        // Find the distance between now and the countdown date
        const distance = countDownDate - now;
        
        // Time calculations for days, hours, minutes and seconds
        const daysValue = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hoursValue = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutesValue = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const secondsValue = Math.floor((distance % (1000 * 60)) / 1000);
        
        // Display the results
        days.innerHTML = daysValue < 10 ? '0' + daysValue : daysValue;
        hours.innerHTML = hoursValue < 10 ? '0' + hoursValue : hoursValue;
        minutes.innerHTML = minutesValue < 10 ? '0' + minutesValue : minutesValue;
        seconds.innerHTML = secondsValue < 10 ? '0' + secondsValue : secondsValue;
        
        // If the countdown is finished, write some text
        if (distance < 0) {
            clearInterval(x);
            document.querySelector('.deal-timer').innerHTML = "EXPIRED";
        }
    }, 1000);
}

function addToCart(){
    // Add to cart functionality
    const addToCartButtons = document.querySelectorAll('.btn-primary');
    const cartCount = document.querySelector('.cart-count');
    
    addToCartButtons.forEach(button => {
        button.addEventListener('click', function() {
            let currentCount = parseInt(cartCount.textContent);
            cartCount.textContent = currentCount + 1;
            
            // Animation effect
            cartCount.classList.add('pulse');
            setTimeout(() => {
                cartCount.classList.remove('pulse');
            }, 300);
        });
    });
}

function initializeTab(){
    // Tab functionality
    const tabHeaders = document.querySelectorAll('.tab-header');
    const tabPanes = document.querySelectorAll('.tab-pane');
    
    tabHeaders.forEach(header => {
        header.addEventListener('click', function() {
            const tabId = this.getAttribute('data-tab');
            
            // Update active tab header
            tabHeaders.forEach(h => h.classList.remove('active'));
            this.classList.add('active');
            
            // Update active tab pane
            tabPanes.forEach(pane => {
                pane.classList.remove('active');
                if (pane.id === tabId) {
                    pane.classList.add('active');
                }
            });
        });
    });
}

function cartButton(){
    // Add to cart functionality for single product page
    const addToCartBtn = document.getElementById('addToCart');
    const cartCount = document.querySelector('.cart-count');
    
    addToCartBtn.addEventListener('click', function() {
        let currentCount = parseInt(cartCount.textContent);
        let quantity = parseInt(quantityInput.value);
        cartCount.textContent = currentCount + quantity;
        
        // Animation effect
        cartCount.classList.add('pulse');
        setTimeout(() => {
            cartCount.classList.remove('pulse');
        }, 300);
    });
}

function addToWishList(){
    // Wishlist functionality
    const wishlistBtn = document.getElementById('wishlistBtn');
    const wishlistIcon = wishlistBtn.querySelector('i');
    
    wishlistBtn.addEventListener('click', function() {
        wishlistBtn.classList.toggle('active');
        if (wishlistBtn.classList.contains('active')) {
            wishlistIcon.classList.remove('far');
            wishlistIcon.classList.add('fas');
        } else {
            wishlistIcon.classList.remove('fas');
            wishlistIcon.classList.add('far');
        }
    });
}

function imageSelector(){
    // Image gallery functionality
    const mainImage = document.getElementById('mainImage');
    const thumbnails = document.querySelectorAll('.thumbnail');
    
    thumbnails.forEach(thumbnail => {
        thumbnail.addEventListener('click', function() {
            // Update main image
            mainImage.src = this.getAttribute('data-image');
            
            // Update active thumbnail
            thumbnails.forEach(t => t.classList.remove('active'));
            this.classList.add('active');
        });
    });
}

function quantitySelector(){
    const quantityInput = document.getElementById('quantity');
    const decreaseBtn = document.getElementById('decreaseQty');
    const increaseBtn = document.getElementById('increaseQty');
    
    decreaseBtn.addEventListener('click', function() {
        let currentValue = parseInt(quantityInput.value);
        if (currentValue > 1) {
            quantityInput.value = currentValue - 1;
        }
    });
    
    increaseBtn.addEventListener('click', function() {
        let currentValue = parseInt(quantityInput.value);
        quantityInput.value = currentValue + 1;
    });
}
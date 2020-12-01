var app = new Vue({
    el: '#root',
    data: {
        // header logo
        headerLogo: 'img/avada-drivers-logo-2x-400x77.png',
        // header links
        headerLinks: ['home', 'about', 'prices', 'courses', 'locations', 'blog'],
        // header button
        badge: 'new',
        headerButton: 'book now',
        // toggle header on page scroll
        headerToggle: false,
        scrollToTop: false,
    },
    mounted: function(){
        this.scrollListener()
    },
    methods: {
        // toggle text call-to-action
        callToActionToggle: function(){
            if (this.headerButton == 'book now') {
                this.headerButton = 'learn more'
            } else {
                this.headerButton = 'book now'
            }
        },
        // collapse header on scroll-Y window
        scrollListener: function(){
            let self = this;
            let scroll = window.addEventListener('scroll', function(){
                // toggle scroll-top button
                if (window.scrollY > 480) {
                    self.scrollToTop = true;
                } else {
                    self.scrollToTop = false;
                }
                // toggle header
                if (window.scrollY >= 44) {
                    self.headerToggle = true;
                } else if (window.scrollY == 0) {
                    self.headerToggle = false;
                }

                // toggle header
                if (window.scrollY >= 44) {
                    self.headerToggle = true;
                } else if (window.scrollY == 0) {
                    self.headerToggle = false;
                }
            });
        },
        scrollToTopClicked: function(){
            window.scrollTo = 0;
        }
    }
});

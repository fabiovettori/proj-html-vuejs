var app = new Vue({
    el: '#root',
    data: {
        // header logo
        headerLogo: 'img/avada-drivers-logo-2x-400x77.png',
        // header links
        headerLinks: ['home', 'about', 'prices', 'courses', 'locations', 'blog'],
        // header and footer buttons (they change contant on mouse hover)
        headerButton: 'book now',
        footerButton: 'book now',
        // toggle header on page scroll
        headerToggle: false,
        scrollToTop: false,
        // testimonials carousel
        testimonials: ['sophia jones', 'harold green', 'grant harvey', 'kate lewis', 'kelly johnson'],
        // set index of active testimonial (referred to testimonials array)
        testimonialActive: 0,
        footerLinks: ['Pass Plus', 'Intensive Course', 'Automatic', 'Instructor Training'],
        // save setInterval function of testimonials' carousel
        badge: 'new',
        timer: ''
    },
    mounted: function(){
        this.scrollListener(),
        this.scrollTestimonials()
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
                } else if (window.scrollY < 44) {
                    self.headerToggle = false;
                }
            });
        },
        // menage scroll to top by clicking button on button right of the screen
        scrollToTopClicked: function(){
            let windowYposition = window.scrollY;
            console.log(windowYposition);

            window.scrollTo({top: 0, behavior: 'smooth'});
        },
        // menage estimonials' carousel
        scrollTestimonials: function(){
            let self = this;

            this.timer = setInterval(function(){
                self.testimonialActive ++

                if (self.testimonialActive > self.testimonials.length - 1) {
                    app.testimonialActive = 0
                }
            },5000);

            if (this.userInteractionCarousel == true) {
                timer.clearInterval();
                console.log('yes');
            }
        },
        // menage switch names in testimonials' corousel
        getTestimnonialName: function(){
            let index = this.testimonialActive;
            let fullName = this.testimonials[index];

            return fullName.substr(0, fullName.indexOf(' '));

        },
        // menage switch marker in testimonials' corousel
        getTestimonialMarker: function(i){
            this.testimonialActive = i - 1;
            clearInterval(this.timer);
            this.scrollTestimonials();
        }
    }
});

// charts generators in social proof section
var pass = document.getElementById('chart_pass').getContext('2d');
Chart.defaults.global.maintainAspectRatio = false;

var chart_pass = new Chart(pass, {
    type: 'doughnut',
    data: {
        datasets: [{
            data: [95, 5],
            backgroundColor: ['#7abc64','#f6f6f6']
        }]
    },
    options: {
        tooltips: {
            enabled: false
        },
        hover: false,
        cutoutPercentage: 87,
        responsive: true,
    }
});

var rate = document.getElementById('chart_rate').getContext('2d');

var chart_rate = new Chart(rate, {
    type: 'doughnut',
    data: {
        datasets: [{
            data: [100, 0],
            backgroundColor: ['#7abc64','#f6f6f6']
        }]
    },
    options: {
        tooltips: {
            enabled: false
        },
        hover: false,
        cutoutPercentage: 87,
        responsive: true,
    }
});

var accident = document.getElementById('chart_accident').getContext('2d');

var chart_accident = new Chart(accident, {
    type: 'doughnut',
    data: {
        datasets: [{
            data: [1, 99],
            backgroundColor: ['#7abc64','#f6f6f6']
        }]
    },
    options: {
        tooltips: {
            enabled: false
        },
        hover: false,
        cutoutPercentage: 87,
        responsive: true,
    }
});

// insert chart results to the html
let charts = [chart_pass, chart_rate, chart_accident]
charts.forEach((item, i) => {
    var node = document.createElement("SPAN");
    node.innerText = item.data.datasets[0].data[0] + '%';

    document.getElementsByClassName('chart-container')[i].append(node)
});

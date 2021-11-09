/*--search bar--*/
$(document).on('click', '.search', function(){
    $('.search-bar').addClass('search-bar-active')
});
$(document).on('click', '.search-cancel', function(){
    $('.search-bar').removeClass('search-bar-active')
});

/*==================== DARK LIGHT THEME ====================*/ 
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'fa-sun'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'fa-moon' : 'fa-sun'

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'fa-moon' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})

/*--full slider--*/
$(document).ready(function(){
    $('#adaptive').lightSlider({
        adaptiveHeight: true,
        auto: true,
        item: 1,
        slideMargin: 0,
        loop: true
    });
});

/*--fix navigation when scroll--*/
$(window).scroll(function(){
    if ($(document).scrollTop() > 50){
        $('.navigation').addClass('fix-nav');
    }
    else {
        $('.navigation').removeClass('fix-nav');
    }
});

/*--make menu responsive--*/
$(document).ready(function(){
    $('.toggle').click(function(){
        $('.toggle').toggleClass('active')
        $('.navigation').toggleClass('active')
    })
});

/*--tab content active--*/
$(".content .tab_content").hide();
$(".content .tab_content:first-child").show();

$(".wrapper-item .wrap-tab").click(function(){
  
    $(".wrapper-item .wrap-tab").removeClass("active");
    $(this).addClass("active");
  
    var current_tab = $(this).attr("data-list");
    $(".content .tab_content").hide();
    $("."+current_tab).show();
})


var ul = document.getElementById("tabs_ul");
var li_tabs = ul.getElementsByClassName("wrap-tab");
for (var i = 0; i < li_tabs.length; i++) {
    li_tabs[i].addEventListener("click", function() {
        var current = ul.getElementsByClassName("active");
        current[0].className = current[0].className.replace("active", "");
        this.className += "active";
    
        var current_tab_value = this.getAttribute("data-list");
        document.getElementById(current_tab_value).style.display = "block";
    });
}  

/*--slider tab content active--*/
$(".slider-content .slider_tab_content").hide();
$(".slider-content .slider_tab_content:first-child").show();

$(".slider-item .slide-tab").click(function(){
  
    $(".slider-item .slide-tab").removeClass("active");
    $(this).addClass("active");
  
    var current_tab = $(this).attr("data-list");
    $(".slider-content .slider_tab_content").hide();
    $("."+current_tab).show();
})


var ul = document.getElementById("slider_tabs_ul");
var li_tabs = ul.getElementsByClassName("slide-tab");
for (var i = 0; i < li_tabs.length; i++) {
    li_tabs[i].addEventListener("click", function() {
        var current = ul.getElementsByClassName("active");
        current[0].className = current[0].className.replace("active", "");
        this.className += "active";
    
        var current_tab_value = this.getAttribute("data-list");
        document.getElementById(current_tab_value).style.display = "flex"; 
    });
}  

$(document).ready(function() {
    $('#autoWidth').lightSlider({
        autoWidth:true,
        loop:true,
        onSliderLoad: function() {
            $('#autoWidth').removeClass('cs-hidden');
        } 
    });  
});

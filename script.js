function ChangeTheme() {
    var main_content_bg = document.querySelector('.main-content');
    main_content_bg.classList.toggle('dark-theme');
    var h3_dark = document.getElementsByClassName('h3-name');
    for (var i = 0; i < h3_dark.length; i++)
    {
        h3_dark[i].classList.toggle('h3-dark-theme');
    }
    var about_me_text = document.getElementById('text-about-me');
    about_me_text.classList.toggle('about-me-text-dark-theme');
    var edu_date = document.getElementById('edu-date');
    edu_date.classList.toggle('edu-date-dark-theme');
    var school_name = document.getElementById('school-name');
    var college_name = document.getElementById('college-name');
    school_name.classList.toggle('school-name-dark-theme');
    college_name.classList.toggle('college-name-dark-theme');
    var exp_text = document.getElementsByClassName('exp');
    for (var j = 0; j < exp_text.length; j++)
    {
        exp_text[j].classList.toggle('exp-dark-theme');
    }
    var skill = document.getElementsByClassName('skill');
    for (var j = 0; j < skill.length; j++)
    {
        skill[j].classList.toggle('skill-dark-theme');
    }
    var skills_list = document.getElementsByClassName('skill-name');
    for (var j = 0; j < skills_list.length; j++)
    {
        skills_list[j].classList.toggle('skill-name-dark-theme');
    }
    var hobbies_list = document.getElementsByClassName('hobby-name');
    for (var j = 0; j < hobbies_list.length; j++)
    {
        hobbies_list[j].classList.toggle('hobby-name-dark-theme');
    }
    var links_list = document.getElementsByClassName('link');
    for (var j = 0; j < links_list.length; j++)
    {
        links_list[j].classList.toggle('link-dark-theme');
    }
};
window.onscroll = function() {
    var skill_bar_list = document.getElementsByClassName('bar');
    if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
        for (var i = 0; i < skill_bar_list.length; i++)
    {
        skill_bar_list[i].classList.add('animated');
    }
    }
}

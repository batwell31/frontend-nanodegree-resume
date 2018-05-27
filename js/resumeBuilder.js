var DATA = '%data%';

// ===== MODEL ===== //

var bio = {
    name: 'Brandon Lothaire Atwell',
    role: 'Diet Clerk, Food Service',
    contacts: {
        mobile: '555-555-5555',
        email: 'batwell31@yahoo.com',
        github: 'https://github.com/batwell31',
        twitter: 'https://twitter.com/BranAtwell1987',
        location: 'United States of America'
    },
    welcomeMessage: 'I am pleased to welcome you to my resume',
    skills: ['JavaScript', 'HTML', 'CSS', 'Responsive Web Design', 'Object-Oriented Programming', 'bootstrap', 'Git', 'GitHub', 'Visual Studio', 'Chrome Developer Tools', 'jQuery', 'Node.js', 'Grunt.js', 'Gulp.js', 'SASS', 'Version Control', 'Problem Solving', 'Time Management'],
    biopic: 'https://pbs.twimg.com/profile_images/896093782432784384/TqGJsnUT_400x400.jpg'
};

var education = {
    schools: [{
        name: 'High School',
        location: 'United States of America',
        degree: 'High School Diploma',
        majors: [''],
        dates: '2001-2005',
        url: ''
    }],
    onlineCourses: [{
        title: 'Front-End Web Developer Nanodegree',
        school: 'Udacity',
        dates: 'March 2018 - Present',
        url: 'https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001'
    },
    {
        title: 'Intro to jQuery',
        school: 'Udacity',
        dates: 'May 2018',
        url: 'https://classroom.udacity.com/courses/ud245'
    },
    {
        title: 'Responsive Images',
        school: 'Udacity',
        dates: 'March 2018',
        url: 'https://classroom.udacity.com/courses/ud882'
    },
    {
        title: 'How to Use Git and GitHub',
        school: 'Udacity',
        dates: 'April 2018',
        url: 'https://classroom.udacity.com/courses/ud775'
    }]
};

var work = {
    jobs: [{
        employer: 'AVI FRESH, INC.',
        title: 'Diet Clerk',
        location: 'United States of America',
        dates: 'Aug 2005 - Present',
        description: 'Answer phone calls to handle patients dietary requests.  Work with computers to handle meal orders by doctors.  Experience handling upset patients and resolving the situation.  Work a trayline to prepare, and deliver patients meals.'
    },
    {
        employer: 'Commercial Appliance Contracts',
        title: 'Shop Assistant',
        location: 'United States of America',
        dates: 'June 2004 - August 2004',
        description: 'Assembled stainless steel equipment for commerical kitchens.  Performed various maintenance tasks.  Worked at customer location to assemble products'
    }]
};

var projects = {
    projects: [{
        title: 'Cat Clicker Premium Pro Project',
        dates: 'April 2018 - April 2018',
        description: 'This project was provided to me by Udacity. It is wrote with OOP (Object-Oriented Programing). I used the MVO(Model / View / Octopus) layout in the JavaScript to keep the code organized.The web application is fully responsive as well.',
        // images can go in there
        images: ['']
    },
    {
        title: 'Feed Reader Testing',
        dates: 'May 2018 – May 2018',
        description: 'This was the 4th project of my Front-End Web Developer Nanodegree program. It was given to me by Udacity.I had to fill in the tests, and make them work for the expected result. Udacity gave a lot of helpful TODO: Comments to help guide me with this.',
        // images can go in there
        images: ['']
    },
    {
        title: 'Classic Arcade Game Clone',
        dates: 'Apr 2018 – Apr 2018',
        description: 'This is the third project completed through Udacity.  It is a Classic Arcade Game Clone was provided to me as one of my projects in the Front-End Web Developer Nanodegree by Udacity.  Its a modern variation of Frogger the classic arcade game, developed with HTML 5, Canvas Element, and Object Oriented JavaScript.',
        // images can go in there
        images: ['']
    },
    {
        title: 'Memory Game',
        dates: 'Apr 2018 – Apr 2018',
        description: 'This was my second project I completed through Udacity.  A simple matching game where you search to find all 8 matches!',
        // images can go in there
        images: ['']
    },
    {
        title: 'Portfolio Project',
        dates: 'Mar 2018 – Apr 2018',
        description: 'This was my first project provided to me by Udacity.  It is a portfolio site to display the projects I have completed',
        // images can go in there
        images: ['']
    }]
};

var octopus = {

    display: function() {
        bioView.display();
        educationView.display();
        workView.display();
        projectsView.display();
        mapView.display();
    }
};

var bioView = {
    
    display: function () {
        var formattedName = HTMLheaderName.replace(DATA, bio.name);
        var formattedRole = HTMLheaderRole.replace(DATA, bio.role);

        var formattedMobile = HTMLmobile.replace(DATA, bio.contacts.mobile);
        var formattedEmail = HTMLemail.replace(DATA, bio.contacts.email);
        var formattedGithub = HTMLgithub.replace(DATA, bio.contacts.github);
        var formattedTwitter = HTMLtwitter.replace(DATA, bio.contacts.twitter);
        var formattedLocation = HTMLlocation.replace(DATA, bio.contacts.location);

        var formattedBioPic = HTMLbioPic.replace(DATA, bio.biopic);
        var formattedWelcomeMessage = HTMLwelcomeMsg.replace(DATA, bio.welcomeMessage);

        $('#header').prepend(formattedName + formattedRole);
        $('#topContacts, #footerContacts').append(formattedMobile + formattedEmail +
            formattedGithub + formattedTwitter + formattedLocation);
        $('#header').append(formattedBioPic);
        $('#header').append(formattedWelcomeMessage);

        if (bio.skills.length > 0) {
            $('#header').append(HTMLskillsStart);

            for (var i = 0, len = bio.skills.length; i < len; i++) {
                var formattedSkills = HTMLskills.replace(DATA, bio.skills[i]);

                $('#skills').append(formattedSkills);
            }
        }
    }
};

var educationView = {
    
    display: function() {

        if (education.schools.length > 0 || education.onlineCourses.length > 0) {
            for (var i = 0, iLen = education.schools.length; i < iLen; i++) {
                var formattedName = HTMLschoolName.replace(DATA, education.schools[i].name);
                var formattedDegree = HTMLschoolDegree.replace(DATA, education.schools[i].degree);
                var formattedSchoolDates = HTMLschoolDates.replace(DATA, education.schools[i].dates);
                var formattedLocation = HTMLschoolLocation.replace(DATA, education.schools[i].location);
                var formattedNameDegree = formattedName + formattedDegree;

                $('#education').append(HTMLschoolStart);
                $('.education-entry:last').append(formattedNameDegree);
                $('.education-entry:last').append(formattedSchoolDates);
                $('.education-entry:last').append(formattedLocation);

                for (var j = 0, jLen = education.schools[i].majors.length; j < jLen; j++) {
                    var formattedMajor = HTMLschoolMajor.replace(DATA, education.schools[i].majors[j]);

                    $('.education-entry:last').append(formattedMajor);
                }
            }

            $('#education').append(HTMLonlineClasses);

            for (var k = 0, len = education.onlineCourses.length; k < len; k++) {
                var formattedTitle = HTMLonlineTitle.replace(DATA, education.onlineCourses[k].title).replace('#', education.onlineCourses[k].url);
                var formattedSchool = HTMLonlineSchool.replace(DATA, education.onlineCourses[k].school);
                var formattedOnlineDates = HTMLonlineDates.replace(DATA, education.onlineCourses[k].dates);
                var formattedUrl = HTMLonlineURL.replace(DATA, education.onlineCourses[k].url);
                var formattedTitleSchool = formattedTitle + formattedSchool;

                $('#education').append(HTMLschoolStart);
                $('.education-entry:last').append(formattedTitleSchool);
                $('.education-entry:last').append(formattedOnlineDates);
                $('.education-entry:last').append(formattedUrl);
            }
        }
    }
};

var workView = {
    
    display: function() {

        if(work.jobs.length > 0) {
            for (var i = 0, len = work.jobs.length; i < len; i++) {
                var formattedEmployer = HTMLworkEmployer.replace(DATA, work.jobs[i].employer);
                var formattedTitle = HTMLworkTitle.replace(DATA, work.jobs[i].title);
                var formattedDates = HTMLworkDates.replace(DATA, work.jobs[i].dates);
                var formattedLocation = HTMLworkLocation.replace(DATA, work.jobs[i].location);
                var formattedDescription = HTMLworkDescription.replace(DATA, work.jobs[i].description);
                var formattedEmployerTitle = formattedEmployer + formattedTitle;

                $('#workExperience').append(HTMLworkStart);
                $('.work-entry:last').append(formattedEmployerTitle);
                $('.work-entry:last').append(formattedDates);
                $('.work-entry:last').append(formattedLocation);
                $('.work-entry:last').append(formattedDescription);
            }
        }
    }
};

var projectsView = {

    display: function () {
        if (projects.projects.length > 0) {
            for (var i = 0, iLen = projects.projects.length; i < iLen; i++) {
                var formattedTitle = HTMLprojectTitle.replace(DATA, projects.projects[i].title);
                var formattedDates = HTMLprojectDates.replace(DATA, projects.projects[i].dates);
                var formattedDescription = HTMLprojectDescription.replace(DATA, projects.projects[i].description);

                $('#projects').append(HTMLprojectStart);
                $('.project-entry:last').append(formattedTitle);
                $('.project-entry:last').append(formattedDates);
                $('.project-entry:last').append(formattedDescription);

                for (var j = 0, jLen = projects.projects[i].images.length; j < jLen; j++) {
                    var formattedImage = HTMLprojectImage.replace(DATA, projects.projects[i].images[j]);

                    $('.project-entry:last').append(formattedImage);
                }
            }
        }
    }
};

var mapView = {
    display: function() {
        $('#mapDiv').append(googleMap);
    }
};
// make it go!
octopus.display();
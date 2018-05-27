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
        location: 'USA'
    },
    welcomeMessage: 'I am pleased to welcome you to my resume',
    skills: [
        'JavaScript', 'HTML', 'CSS', 'Responsive Web Design', 'Object-Oriented Programming',
        'Web Development', 'Git', 'GitHub', 'Visual Studio', 'Chrome Developer Tools',
        'jQuery', 'Node.js', 'Grunt.js', 'Gulp.js', 'SASS', 'Version Control', 'Problem Solving',
        'Time Management'
    ],
    biopic: 'https://pbs.twimg.com/profile_images/896093782432784384/TqGJsnUT_400x400.jpg'
};

var education = {
    schools: [{
        name: 'Grove City Area High School',
        location: 'Grove City, PA',
        degree: 'High School Diploma',
        majors: ['n/a'],
        dates: '2001-2005',
        url: 'https://www.grovecity.k12.pa.us/domain/47'
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
        location: 'Grove City, PA',
        dates: 'Aug 2005 - Present',
        description: 'Answer phone calls to handle patients dietary requests.  Work with computers to handle meal orders by doctors.  Experience handling upset patients and resolving the situation.  Work a trayline to prepare, and deliver patients meals.'
    },
    {
        employer: 'Commercial Appliance Contracts',
        title: 'Shop Assistant',
        location: 'Grove City, PA',
        dates: 'June 2004 - August 2004',
        description: 'Assembled stainless steel equipment for commerical kitchens.  Performed various maintenance tasks.  Worked at customer location to assemble products'
    }]
};

var projects = {
    projects: [{
        title: 'Cat Clicker Premium Pro Project',
        dates: 'April 2018 - April 2018',
        description: 'This project was provided to me by Udacity. It is wrote with OOP (Object-Oriented Programing). I used the MVO(Model / View / Octopus) layout in the JavaScript to keep the code organized.The web application is fully responsive as well.',
        images: ['https://batwell31.github.io/Cat-Clicker-Premium-Pro/img/briar-rose.jpg', 'https://batwell31.github.io/Cat-Clicker-Premium-Pro/img/philip.jpg', 'https://batwell31.github.io/Cat-Clicker-Premium-Pro/img/harmony.jpg']
    },
    {
        title: 'Feed Reader Testing',
        dates: 'May 2018 – May 2018',
        description: 'This was the 4th project of my Front-End Web Developer Nanodegree program. It was given to me by Udacity.I had to fill in the tests, and make them work for the expected result. Udacity gave a lot of helpful TODO: Comments to help guide me with this.',
        images: ['https://s3.amazonaws.com/poly-screenshots.angel.co/enhanced_screenshots/457663-original.png', 'https://camo.githubusercontent.com/f3eea7c1e593ec73e1a1281fa6e3c99d0c778f74/687474703a2f2f692e696d6775722e636f6d2f7335456c30574c2e706e67']
    },
    {
        title: 'Classic Arcade Game Clone',
        dates: 'Apr 2018 – Apr 2018',
        description: 'This is the third project completed through Udacity.  It is a Classic Arcade Game Clone was provided to me as one of my projects in the Front-End Web Developer Nanodegree by Udacity.  Its a modern variation of Frogger the classic arcade game, developed with HTML 5, Canvas Element, and Object Oriented JavaScript.',
        images: ['https://raw.githubusercontent.com/batwell31/frontend-nanodegree-arcade-game/master/images/Key.png', 'https://raw.githubusercontent.com/batwell31/frontend-nanodegree-arcade-game/master/images/char-boy.png', 'https://raw.githubusercontent.com/batwell31/frontend-nanodegree-arcade-game/master/images/Star.png']
    },
    {
        title: 'Memory Game',
        dates: 'Apr 2018 – Apr 2018',
        description: 'This was my second project I completed through Udacity.  A simple matching game where you search to find all 8 matches!',
        images: ['https://raw.githubusercontent.com/batwell31/fend-project-memory-game/master/img/geometry2.png']
    },
    {
        title: 'Portfolio Project',
        dates: 'Mar 2018 – Apr 2018',
        description: 'This was my first project provided to me by Udacity.  It is a portfolio site to display the projects I have completed',
        images: ['https://raw.githubusercontent.com/batwell31/Project-Portfolio/master/img/dog-350_small.jpg', 'https://raw.githubusercontent.com/batwell31/Project-Portfolio/master/img/html-350_small.jpg', 'https://raw.githubusercontent.com/batwell31/Project-Portfolio/master/img/elephant-350_small.jpg']
    }]
};

var octopus = {
    
};

var bioView = {
    
    init: function() {
        // store pointers to our DOM elements for easy access later
        this.header = $("#header");
        this.topBottomContacts = $("#topContacts, #footerContacts");
        this.twitterDiv = $("#twitterDiv");
        this.skills = $("#skills");
    },
    
    display: function() {       
        
        // header info - name, title, image
        this.header.prepend(HTMLheaderRole.replace(DATA, bio.role));
        this.header.prepend(HTMLheaderName.replace(DATA, bio.name));
        this.header.append(HTMLbioPic.replace(DATA, bio.biopic));

        // replaced the above 'if' statement with 'for' loop for skills to iterate through all of them and append them:
        this.header.append(HTMLskillsStart);
        for (var i = 0; i < bio.skills.length; i++) {
            this.skills.append(HTMLskills.replace(DATA, bio.skills[i]));

        }

        this.topBottomContacts.append(HTMLmobile.replace(DATA, bio.contacts.mobile));
        this.topBottomContacts.append(HTMLemail.replace(DATA, bio.contacts.email));
        this.topBottomContacts.append(HTMLtwitter.replace(DATA, bio.contacts.twitter));
        this.topBottomContacts.append(HTMLgithub.replace(DATA, bio.contacts.github));
        this.topBottomContacts.append(HTMLlocation.replace(DATA, bio.contacts.location));

        this.header.append(HTMLwelcomeMsg.replace(DATA, bio.welcomeMessage));

        this.twitterDiv.append(twitterFeed);
    }
};

var educationView = {
    
    init: function() {
        // store pointers to our DOM elements for easy access later
        this.education = $("#education");
        this.educationEntryLast = $(".education-entry:last");
    },
    
    display: function() {

        for (var i = 0; i < education.schools.length; i++) {
            

            this.education.append(HTMLschoolStart);

            var formattedName = HTMLschoolName.replace(DATA, education.schools[i].name);
            var formattedDegree = HTMLschoolDegree.replace().replace(DATA, education.schools[i].degree);
            this.educationEntryLast.append(formattedName + formattedDegree);

            this.educationEntryLast.append(HTMLschoolDates.replace(DATA, education.schools[i].dates));
            this.educationEntryLast.append(HTMLschoolLocation.replace(DATA, education.schools[i].location));
            this.educationEntryLast.append(HTMLschoolMajor.replace(DATA, education.schools[i].majors));
            this.educationEntryLast.append(HTMLonlineURL.replace(DATA, education.schools[i].url));
        }

        education.append(HTMLonlineClasses);
        for (var k = 0; k < education.onlineCourses.length; k++) {
            this.education.append(HTMLschoolStart);

            var formattedTitle = HTMLonlineTitle.replace(DATA, education.onlineCourses[k].title);
            var formattedSchool = HTMLonlineSchool.replace(DATA, education.onlineCourses[k].school);

            this.educationEntryLast.append(formattedTitle + formattedSchool);

            this.educationEntryLast.append(HTMLonlineDates.replace(DATA, education.onlineCourses[k].dates));
            this.educationEntryLast.append(HTMLonlineURL.replace(DATA, education.onlineCourses[k].url));        
        }
    }
};

var workView = {
    
    // store pointers to our DOM elements for easy access later
    init: function() {
        this.workExperience = $("workExperience");
        this.workEntryLast = $(".work-entry:last");
    },

    display: function() {

        for (var i = 0; i < work.jobs.length; i++) {
            // created new div for work experience
            this.workExperience.append(HTMLworkStart);

            var formattedEmployer = HTMLworkEmployer.replace(DATA, work.jobs[i].employer);
            var formattedTitle = HTMLworkTitle.replace(DATA, work.jobs[i].title);

            this.workEntryLast.append(formattedEmployer + formattedTitle);

            this.workEntryLast.append(HTMLworkDates.replace(DATA, work.jobs[i].dates));
            this.workEntryLast.append(HTMLworkDescription.replace(DATA, work.jobs[i].description));
        }
    }    
};

var projectsView = {

};
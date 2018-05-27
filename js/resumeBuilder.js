var bio = {
    name: 'Brandon Lothaire Atwell',
    role: 'Diet Clerk, Food Service',
    contacts: {
        mobile: '555-555-5555',
        email: 'batwell31@yahoo.com',
        github: 'https://github.com/batwell31',
        twitter: 'https://twitter.com/BranAtwell1987',
        location: 'Pennsylvania, USA'
    },
    welcomeMessage: 'I am pleased to welcome you to my resume',
    skills: [
        'JavaScript', 'HTML', 'CSS', 'Responsive Web Design', 'Object-Oriented Programming',
        'Web Development', 'Git', 'GitHub', 'Visual Studio', 'Chrome Developer Tools',
        'jQuery', 'Node.js', 'Grunt.js', 'Gulp.js', 'SASS', 'Version Control', 'Problem Solving',
        'Time Management'
    ],
    biopic: 'https://pbs.twimg.com/profile_images/896093782432784384/TqGJsnUT_400x400.jpg',
    display: function () {
        // TODO: do something
    }
};

var education = {
    schools: array of objects with
         name: string
         location: string
         degree: string
         majors: array of strings
         dates: string(works with a hyphen between them)
    url: string(optional)
    onlineCourses: array of objects with
         title: string
         school: string
         dates: string(works with a hyphen between them)
    url: string
    display: function taking no parameters

};

var work = {
    projects: array of objects with
          title: string 
          dates: string(works with a hyphen between them)
    description: string
          images: array with string urls
    display: function taking no parameters
};

var projects = {

};
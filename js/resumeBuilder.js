var bio = {
    name: string
    role: string
    contacts: an object with
          mobile: string
          email: string 
          github: string
          twitter: string(optional)
          location: string
    welcomeMessage: string 
    skills: array of strings
    biopic: string url
    display: function taking no parameters
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
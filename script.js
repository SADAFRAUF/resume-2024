// Data for the resume
var resumeData = {
    name: "SADAF RAUF",
    contactInfo: "sadafrauf@outlook.com | +923282609095",
    summary: "Creative and versatile web developer with a strong foundation in full-stack development, video editing, and graphic design. Proficient in designing and building responsive websites using HTML, CSS, JavaScript, and popular frameworks. Experienced in creating and editing engaging video content and graphics to enhance digital presence. Passionate about delivering user-friendly experiences and continuously learning new technologies to stay ahead in the fast-evolving digital landscape.",
    skills: ["Front-end development (HTML, CSS, JavaScript)", "Back-end development (Node.js)",
        "Video editing (Adobe Premiere Pro, Final Cut Pro)", "Graphic design (Adobe Photoshop, Canva)",
        "Responsive web design and UI/UX principles"
    ],
    experience: [
        {
            role: "Freelancer",
            company: "Different Platform",
            duration: "May 2014 - Present",
            description: "A Passionate Graphic Designer,Logo Design,Video Editor,Web Developer"
        },
        {
            role: "Assistant Office",
            company: "Green Flag School",
            duration: "November 2024 - Present",
            description: "Provide administrative support,maintaining office files,managing schedules, data entry,reporting."
        },
        {
            role: "Teacher",
            company: "The Educators",
            duration: "November 2010 - March 2023",
            description: "Plan and deliver engaging lessons , implement strategies for improvement, create a positive learning environment,Prepare educational materials and organize extracurricular activities,Collaborate with colleagues "
        }
    ],
    education: [
        {
            degree: "B.Com in Commerce",
            university: "Virtual University of Pakistan",
            graduationYear: "2024"
        }
    ],
    projects: [
        {
            name: "Personal Website",
            description: "A personal portfolio website built with HTML, CSS, and JavaScript."
        }
    ],
};
// Function to populate resume
function populateResume() {
    // Header
    document.getElementById('name').innerText = resumeData.name;
    document.getElementById('contact-info').innerText = resumeData.contactInfo;
    // Summary
    document.getElementById('summary-text').innerText = resumeData.summary;
    // Skills
    var skillsList = document.getElementById('skills-list');
    resumeData.skills.forEach(function (skill) {
        var li = document.createElement('li');
        li.innerText = skill;
        skillsList.appendChild(li);
    });
    // Experience
    var experienceList = document.getElementById('experience-list');
    resumeData.experience.forEach(function (exp) {
        var li = document.createElement('li');
        li.innerHTML = "<strong>".concat(exp.role, "</strong> at ").concat(exp.company, " (").concat(exp.duration, ") - ").concat(exp.description);
        experienceList.appendChild(li);
    });
    // Education
    var educationList = document.getElementById('education-list');
    resumeData.education.forEach(function (edu) {
        var li = document.createElement('li');
        li.innerHTML = "<strong>".concat(edu.degree, "</strong> from ").concat(edu.university, " - Graduated in ").concat(edu.graduationYear);
        educationList.appendChild(li);
    });
    // Projects
    var projectsList = document.getElementById('projects-list');
    resumeData.projects.forEach(function (project) {
        var li = document.createElement('li');
        li.innerHTML = "<strong>".concat(project.name, "</strong>: ").concat(project.description);
        projectsList.appendChild(li);
    });
}
// Run the function to populate the resume
populateResume();
console.log(resumeData);

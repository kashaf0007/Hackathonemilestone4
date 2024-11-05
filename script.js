var generateBtn = document.getElementById('generate-btn');
var resumeForm = document.getElementById('resume-form');
var generatedContent = document.getElementById('generated-content');
generateBtn.addEventListener('click', function (e) {
    e.preventDefault();
    var resumeData = {
        name: document.getElementById('name').value,
        lastname: document.getElementById('last name').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone no').value,
        country: document.getElementById('country').value,
        city: document.getElementById('city').value,
        degree: document.getElementById('degree').value,
        institute: document.getElementById('institute').value,
        gradDate: new Date(document.getElementById('grad-date').value),
        educationDesc: document.getElementById('Education').value,
        jobTitle: document.getElementById('job-title').value,
        lastJob: document.getElementById('last-job').value,
        company: document.getElementById('company').value,
        workDates: document.getElementById('work-dates').value,
        jobDesc: document.getElementById('job-description').value,
        skills: document.getElementById('Skills').value,
    };
    var resume = "\n      <h1 contenteditable=\"true\">".concat(resumeData.name, " ").concat(resumeData.lastname, "</h1>\n      <p contenteditable=\"true\">").concat(resumeData.email, " | ").concat(resumeData.phone, "</p>\n      <p contenteditable=\"true\">").concat(resumeData.country, ", ").concat(resumeData.city, "</p>\n  \n      <h2 >Education</h2>\n      <p contenteditable=\"true\">").concat(resumeData.degree, ", ").concat(resumeData.institute, "</p>\n      <p contenteditable=\"true\">Graduation Date: ").concat(resumeData.gradDate.toLocaleDateString(), "</p>\n      <p contenteditable=\"true\">").concat(resumeData.educationDesc, "</p>\n  \n      <h2 >Work Experience</h2>\n      <p contenteditable=\"true\">").concat(resumeData.jobTitle, ", ").concat(resumeData.company, "</p>\n      <p contenteditable=\"true\">").concat(resumeData.workDates, "</p>\n      <p contenteditable=\"true\">").concat(resumeData.jobDesc, "</p>\n  \n      <h2>Skills</h2>\n      <p contenteditable=\"true\">").concat(resumeData.skills, "</p>\n    ");
    generatedContent.innerHTML = resume;
});

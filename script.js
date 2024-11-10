// Get form container elements
var resumeForm = document.getElementById('resume-form');
var profilePictureInput = document.getElementById('profile-picture');
// Event listener for form submission
resumeForm.addEventListener('submit', function (event) {
    event.preventDefault();
    // Get form data
    var name = document.getElementById('name').value;
    var contact = document.getElementById('contact').value;
    var location = document.getElementById('location').value;
    var email = document.getElementById('email').value;
    var github = document.getElementById('github').value;
    var linkedin = document.getElementById('linkedin').value;
    var education = document.getElementById('education').value.split(',').map(function (education) { return education.trim(); });
    var skills = document.getElementById('skills').value.split(',').map(function (skill) { return skill.trim(); });
    var workExperience = document.getElementById('work-experience').value;
    // Profile picture handling with FileReader
    var profilePictureFile = profilePictureInput.files ? profilePictureInput.files[0] : null;
    if (!profilePictureFile) {
        alert("Please select a profile picture.");
        return;
    }
    var reader = new FileReader();
    reader.onload = function (e) {
        var _a;
        var imageUrl = (_a = e.target) === null || _a === void 0 ? void 0 : _a.result;
        // Generate resume HTML
        var resumeHTML = "\n           <div class=\"resume-container\">\n <div id=\"inner-div\">\n    <section class=\"Personal-info\">\n        \n        <div class=\"Information-box\">\n            <h1 class=\"editable-text\"> ".concat(name, "</h1>\n            <br/>\n            <h2>Personal Information</h2>  \n            <p><i class=\"fa-solid fa-phone\"></i><span class=\"editable-text\"> +92").concat(contact, "</span></p>\n            <p><i class=\"fa-solid fa-location-dot\"> </i> \n            <a href=\"#\" class=\"editable-text\"> ").concat(location, "</a></p>\n            <p><i class=\"fa-regular fa-envelope\"></i> <a href=\"mailto:").concat(email, "\"> ").concat(email, "</a></p>\n            <p><i class=\"fa-brands fa-github\"></i> <a href=\"").concat(github, "\"> ").concat(github, "</a></p>\n            <p> <i class=\"fa-brands fa-linkedin\"></i> <a href=\" ").concat(linkedin, "\"> ").concat(linkedin, "</a></p>\n        </div>\n\n        <div id=\"Picture\">\n            <img src=\"").concat(imageUrl, "\" alt=\"Profile Picture\" class=\"profile-picture\">\n        </div>\n        \n    </section>   \n        \n        <section class=\"education\">\n            <h2>Education</h2>\n            <ul>\n            ").concat(education.map(function (education) { return "<li class=\"editable-text\">".concat(education, "</li>"); }).join(''), "\n                \n            </ul>\n        </section> \n        \n        <section class=\"skills\" id=\"skills-section\">\n            <h2>Skills</h2>\n            <ul>\n                ").concat(skills.map(function (skill) { return "<li class=\"editable-text\">".concat(skill, "</li>"); }).join(''), "\n            </ul>\n        </section>\n        \n        <section class=\"work-experience\">\n            <h2>Work Experience</h2>\n            <p class=\"editable-text\">").concat(workExperience, "</p>\n        </section>\n        <button id=\"toggle-education\">Toggle Education</button>\n        <button id=\"toggle-skills\">Toggle Skills</button>\n        <button id=\"toggle-experience\">Toggle Work Experience</button>\n    </div>\n</div>\n        ");
        // Append resume HTML to body
        var resumeContainer = document.createElement("div");
        resumeContainer.innerHTML = resumeHTML;
        document.body.prepend(resumeContainer);
        // Hide form container
        var formContainer = document.querySelector(".form-container");
        formContainer.innerHTML = "";
        formContainer.style.visibility = "hidden";
        // Toggle section visibility
        var skillsSection = document.getElementById('skills-section');
        var educationSection = document.querySelector('.education');
        var workExperienceSection = document.querySelector('.work-experience');
        var toggleSkillsButton = document.getElementById('toggle-skills');
        var toggleEducationButton = document.getElementById('toggle-education');
        var toggleExperienceButton = document.getElementById('toggle-experience');
        function toggleVisibility(element) {
            element.style.display = element.style.display === 'none' ? 'block' : 'none';
        }
        toggleSkillsButton.addEventListener('click', function () { return toggleVisibility(skillsSection); });
        toggleEducationButton.addEventListener('click', function () { return toggleVisibility(educationSection); });
        toggleExperienceButton.addEventListener('click', function () { return toggleVisibility(workExperienceSection); });
    };
    // Read file as Data URL to display in image tag
    reader.readAsDataURL(profilePictureFile);
});

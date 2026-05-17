document.addEventListener("DOMContentLoaded", function() {

    // 1. ARRAY & LOOP: Programmatically generating the list
    const mySkills = [
        "CSS NC II Certified",
        "System Assembly",
        "Hardware Disassembly",
        "Cable Cabling",
        "Web Manipulation"
    ];

    const list = document.getElementById('skills-list');
    mySkills.forEach(skill => {
        const li = document.createElement('li');
        li.textContent = skill;
        list.appendChild(li);
    });

    // 2. THEME MANIPULATION: Changes the whole body class
    const themeBtn = document.getElementById('theme-btn');
    themeBtn.addEventListener('click', () => {
        document.body.classList.toggle('dark-theme');
        
        // Conditional Logic to change button text
        if (document.body.classList.contains('dark-theme')) {
            themeBtn.textContent = "Switch to Light Mode";
        } else {
            themeBtn.textContent = "Switch to Dark Mode";
        }
    });

    // 3. ELEMENT MODIFICATION: Interactive Status
    const actionBtn = document.getElementById('action-btn');
    const statusText = document.getElementById('status');

    actionBtn.addEventListener('click', () => {
        // Manipulating the content and style via JS
        if (statusText.textContent === "Idle") {
            statusText.textContent = "Active & Running";
            statusText.classList.add('active-status');
            actionBtn.textContent = "Shut Down";
        } else {
            statusText.textContent = "Idle";
            statusText.classList.remove('active-status');
            actionBtn.textContent = "Initialize System";
        }
    });
});
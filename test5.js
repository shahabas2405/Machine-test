   // 1. Get references to the elements using getElementById()
    const addBtn = document.getElementById('addBtn');
    const activityInput = document.getElementById('activityName');
    const timeInput = document.getElementById('activityTime');
    const activityList = document.getElementById('activityList');

    // 2. Set up the onclick event
    addBtn.onclick = function() {
        // Get input values using .value
        const activity = activityInput.value;
        const time = timeInput.value;

        // Validation: Ensure fields aren't empty
        if (activity === "" || time === "") {
            alert("Please fill in both fields!");
            return;
        }

        // 3. Add activity as <li> inside <ul> using innerHTML
        // We append the new list item to the existing content
        activityList.innerHTML += `
            <li class="list-group-item d-flex justify-content-between align-items-center">
                ${activity}
                <span class="badge bg-primary rounded-pill">${time} mins</span>
            </li>
        `;

        // 4. Clear input fields
        activityInput.value = "";
        timeInput.value = "";
    };
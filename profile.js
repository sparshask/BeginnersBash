// Function to toggle form inputs' disabled state
function toggleEdit() {
    var form = document.getElementById('profileForm');
    var inputs = form.getElementsByTagName('input');
    var selects = form.getElementsByTagName('select');
    var submitButton = document.getElementById('submitButton');

    // Toggle disabled attribute for input and select elements
    for (var i = 0; i < inputs.length; i++) {
        inputs[i].disabled = !inputs[i].disabled;
    }
    for (var i = 0; i < selects.length; i++) {
        selects[i].disabled = !selects[i].disabled;
    }

    // Toggle submit button visibility
    submitButton.style.display = submitButton.style.display === 'none' ? 'block' : 'none';
}

document.addEventListener('DOMContentLoaded', function() {
    // Disable all input fields initially
    disableFormInputs();

    // Function to handle selecting profile picture
    function selectProfilePicture() {
        document.getElementById('file-input').click();
    }

    // Function to display selected image
    document.getElementById('file-input').addEventListener('change', function() {
        var file = this.files[0];
        if (file) {
            var reader = new FileReader();
            reader.onload = function(event) {
                var img = document.createElement('img');
                img.src = event.target.result;
                img.className = 'profile-pic-img';
                var profilePic = document.querySelector('.profile-pic');
                profilePic.innerHTML = ''; // Clear previous image, if any
                profilePic.appendChild(img);
            }
            reader.readAsDataURL(file);
        }
    });

    // Function to handle form submission
    document.getElementById('profileForm').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent default form submission

        // Retrieve form input values
        var name = document.getElementById('name').value.trim();
        var childName = document.getElementById('child_name').value.trim();
        var gender = document.querySelector('input[name="gender"]:checked');
        var dob = document.getElementById('dob').value.trim();
        var grade = document.getElementById('grade').value;
        var school = document.getElementById('school').value.trim();
        var email = document.getElementById('email').value.trim();
        var phone = document.getElementById('phone').value.trim();
        var place = document.getElementById('place').value.trim();

        // Check if any mandatory field is empty
        if (!dob || !name || !childName || !gender || !grade || !school || !email || !phone) {
            showMessage("Please fill in all mandatory fields.");
            return; // Exit function if any mandatory field is empty
        }

        // If all mandatory fields are filled, proceed with form submission
        // Here you can replace the alert with your actual form submission code
        showMessage("Form submitted successfully!\n\nName: " + name + "\nChild's Name: " + childName + "\nGender: " + gender.value + "\nDate of Birth: " + dob + "\nGrade: " + grade + "\nSchool: " + school + "\nEmail: " + email + "\nPhone: " + phone + "\nPlace: " + place);
    });

    // Function to show message
    function showMessage(message) {
        var messageOverlay = document.getElementById('messageOverlay');
        var messageText = document.getElementById('messageText');
        messageText.innerText = message;
        messageOverlay.style.display = 'flex'; // Show the overlay
    }

    // Function to disable all input fields
    function disableFormInputs() {
        var form = document.getElementById('profileForm');
        var inputs = form.getElementsByTagName('input');
        var selects = form.getElementsByTagName('select');
        
        // Disable all input and select elements
        for (var i = 0; i < inputs.length; i++) {
            inputs[i].disabled = true;
        }
        for (var i = 0; i < selects.length; i++) {
            selects[i].disabled = true;
        }
    }

    // Function to enable form inputs when Enter button is pressed
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
            enableFormInputs();
        }
    });

    // Function to enable all input fields
    function enableFormInputs() {
        var form = document.getElementById('profileForm');
        var inputs = form.getElementsByTagName('input');
        var selects = form.getElementsByTagName('select');
        
        // Enable all input and select elements
        for (var i = 0; i < inputs.length; i++) {
            inputs[i].disabled = false;
        }
        for (var i = 0; i < selects.length; i++) {
            selects[i].disabled = false;
        }
    }
});

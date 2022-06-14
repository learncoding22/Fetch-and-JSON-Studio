// TODO: add code here
window.addEventListener("load", function () {
    this.fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function (response) {
        console.log(response);
        response.json().then(function (json) {
            json.sort((a, b)=> b.hoursInSpace - a.hoursInSpace);
            container.innerHTML += `<h2>Number of Astronauts: ${json.length}`;
            for (const astronaut of json) {
                console.log(astronaut);
                container.innerHTML += `
                <div class="astronaut">
                    <div id="bio">
                        <h3>${astronaut.firstName} ${astronaut.lastName}</h3>
                        <ul>
                            <li>Hours in space: ${astronaut.hoursInSpace}</li>
                            <li active="${astronaut.active}">Active: ${astronaut.active}</li>
                            <li>Skills: ${astronaut.skills.join(', ')}</li>
                        </ul>
                    </div>
                <img class="avatar" src="${astronaut.picture}">
            </div>
            `;
            }
        });
    });
});

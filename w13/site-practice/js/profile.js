const requestURL = 'https://cris-rr.github.io/finalproject/data/employee.json';

fetch(requestURL)
    .then(function(response) {
        return response.json();
    })
    .then(function(jsonObject) {
        const employees = jsonObject['employee'];
        employees.forEach(employee => {
            let card = document.createElement('section');
            let name = document.createElement('h2');
            let image =document.createElement('img');
            let level = document.createElement('p');
            let experience = document.createElement('p');
            let email = document.createElement('p');
            let descrip = document.createElement('p');


            experience.setAttribute('class', 'experience');
            level.setAttribute('class', 'level');
            email.setAttribute('class', 'email');
            descrip.setAttribute('class', 'description')

            let fullname = `${employee.name} ${employee.lastname}`;

            name.textContent = fullname;
            image.setAttribute('src', employee.imgurl);
            image.setAttribute('alt', fullname);
            experience.textContent = `Years of experience: ${employee.experience}`; 
            level.textContent = `Certificate Level: ${employee.level}`;
            email.textContent = `Email: ${employee.email}`;
            descrip.textContent = `${employee.descrip}`;
            

            card.appendChild(image);
            card.appendChild(name);
            card.appendChild(experience);
            card.appendChild(level);
            card.appendChild(email);
            card.appendChild(descrip);
            
            document.querySelector('.employees').appendChild(card);
        });
    });
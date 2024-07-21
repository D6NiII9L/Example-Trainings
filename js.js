
let projects = [
    
    {

        title : 'Schoole',
        description : 'This project is a simulator of schoole\'s classes.',
        img: './schooleProject/img/bg.jpg',
        address : './schooleProject/index.html'

    },

    {

        title : 'P2',
        description : 'This is description for project 2',
        img: './img/bg.jpg',
        address : '#'

    },

    {

        title : 'P3',
        description : 'This is description for project 3',
        img: './img/bg.jpg',
        address : '#'

    }

]

for (let p in projects) {

    let project = projects[p]
    
    let projectSpace = document.getElementById('projectsSpace')

    projectCard = `<div class="projectsCardSpace">

                <img src="${project.img}" class="projectPhoto"/>
                <h2 class="projectTitle">${project.title}</h2>

                <p class="projectDescription">${project.description}</p>

                <a href="${project.address}" class="projectOpenLink">Open</a>

            </div>`

    projectSpace.insertAdjacentHTML('afterbegin' , projectCard)

}
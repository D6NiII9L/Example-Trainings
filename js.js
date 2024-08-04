
let projects = [
    
    {

        title : 'Schoole',
        description : 'This project is a simulator of schoole\'s classes.',
        img: './Schoole/img/bg.jpg',
        address : './Schoole/index.html'

    },

    {

        title : 'Mini Calculator',
        description : 'This is description for project 2',
        img: './Mini Calculator/img/bg.jpg',
        address : './Mini Calculator/index.html'

    },

    {

        title : 'Search Text',
        description : 'This is description for project 3',
        img: './Search Text/img/bg.jpg',
        address : './Search Text/index.html'

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
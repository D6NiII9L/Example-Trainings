
let projects = [
    
    {

        title : 'Schoole',
        description : 'This project is a simulator of schoole\'s classes.',
        img: './Schoole/img/bg.jpg',
        address : './Schoole/index.html'

    },

    {

        title : 'Mini Calculator',
        description : 'This project is a basic calculator',
        img: './Mini Calculator/img/bg.jpg',
        address : './Mini Calculator/index.html'

    },

    {

        title : 'Search Text',
        description : 'This project find the word you want in the text',
        img: './Search Text/img/bg.jpg',
        address : './Search Text/index.html'

    },

    {

        title : 'Functions',
        description : 'This project has practis function',
        img: './Functions/img/bg.jpg',
        address : './Functions/index.html'

    }

]

projects = projects.reverse()

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
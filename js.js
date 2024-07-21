
let projects = [
    
    {

        title : 'Schoole',
        description : 'This project is a simulator of schoole\'s classes.',
        img: './schooleProject/img/bg.jpg',
        address : './schooleProject/index.html'

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
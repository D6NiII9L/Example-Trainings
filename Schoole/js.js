let schoole = [

    {

        className : 'Class A',

        teacherName : 'Mrs. Johnson',

        students : [

            {

                fName : 'John',
                lName : 'Doe',
                age : 16,
                address : 'New York, 5th Avenue',
                score : 90

            },

            {

                fName : 'Emily',
                lName : 'Smith',
                age : 15,
                address : 'Los Angeles, Sunset Blvd',
                score : 85

            },

            {

                fName : 'Michael',
                lName : 'Brown',
                age : 16,
                address : 'Chicago, Michigan Avenue',
                score : 88

            }

        ]

    },

    {

        className : 'Class B',

        teacherName : 'Mr. Smith',

        students : [

            {

                fName : 'Sophia',
                lName : 'Davis',
                age : 15,
                address : 'Houston, Main Street',
                score : 92

            },

            {

                fName : 'James',
                lName : 'Johnson',
                age : 17,
                address : 'Phoenix, Central Avenue',
                score : 89

            },

            {

                fName : 'Olivia',
                lName : 'Wilson',
                age : 16,
                address : 'Philadelphia, Broad Street',
                score : 91

            }

        ]

    },

    {

        className : 'Class C',

        teacherName : 'Ms. Lee',

        students : [

            {

                fName : 'Ava',
                lName : 'Martinez',
                age : 15,
                address : 'San Antonio, Market Street',
                score : 87

            },

            {

                fName : 'Liam',
                lName : 'Garcia',
                age : 16,
                address : 'San Diego, Harbor Drive',
                score : 86

            },

            {

                fName : 'Ethan',
                lName : 'Lopez',
                age : 17,
                address : 'Dallas, Elm Street',
                score : 90

            }

        ]

    },

    {

        className : 'Class D',

        teacherName : 'Ms. Lee',

        students : [

            {

                fName : 'Ava',
                lName : 'Martinez',
                age : 15,
                address : 'San Antonio, Market Street',
                score : 87

            },

            {

                fName : 'Liam',
                lName : 'Garcia',
                age : 16,
                address : 'San Diego, Harbor Drive',
                score : 86

            },

            {

                fName : 'Ethan',
                lName : 'Lopez',
                age : 17,
                address : 'Dallas, Elm Street',
                score : 90

            }

        ]

    },

]

let mainSpace = document.getElementById("mainSpace")

for (let c in schoole) {

    let className = schoole[c].className

    let teacherName = schoole[c].teacherName

    let students = schoole[c].students

    let studentsSpace = ``

    for (let s in students) {

        student = students[s]

        studentsSpace += `<div class="studentSpace">

                    <div class="studentNameAndScore">

                        <h3 class="studentName">${student.fName} ${student.lName}</h3>

                        <span class="studentScore">${student.score}</span>

                    </div>

                    <div class="studentAgeAndAddress">

                        <h4 class="studentAge">Age: <span>${student.age}</span></h4>

                        <h5 class="studentAddress">Address: <span>${student.address}</span></h5>

                    </div>

                </div>`

    }

    let classCard = `<div class="classCardSpace">

            <h2 class="className">Class Name: <span>${className}</span></h2>

            <h2 class="teacherName">TeacherName: <span>${teacherName}</span></h2>

            ${studentsSpace}

        </div>`

    mainSpace.insertAdjacentHTML('afterbegin' , classCard)

}
const students = [
    {
        name: "Chris Miller",
        subject: "History",
        info: "Failed last exam",
        score: 59
    },
    {
        name: "Courtney Seward",
        subject: "History",
        info: "Has completed all homework",
        score: 91
    },
    {
        name: "Garrett Ward",
        subject: "History",
        info: "Wonderful at helping other students",
        score: 88
    },
    {
        name: "John Dulaney",
        subject: "History",
        info: "Has never missed a class or exam",
        score: 92
    },
    {
        name: "Greg Lawrence",
        subject: "History",
        info: "Sub-par performance all around",
        score: 64
    },
    {
        name: "Leah Duvic",
        subject: "History",
        info: "Wonderful student",
        score: 97
    },
    {
        name: "Jesse Page",
        subject: "History",
        info: "Smokes too much. Distracting.",
        score: 76
    },
    {
        name: "Kevin Haggerty",
        subject: "History",
        info: "Falls asleep in class",
        score: 79
    },
    {
        name: "Max Wolf",
        subject: "History",
        info: "Talks too much",
        score: 83
    },
    {
        name: "Lissa Goforth",
        subject: "History",
        info: "Asks pointless, unrelated questions",
        score: 78
    },
    {
        name: "Tyler Bowman",
        subject: "History",
        info: "When was the last time he attended class?",
        score: 48
    },
    {
        name: "Ray Medrano",
        subject: "History",
        info: "Needs to contribute to in-class discussions",
        score: 95
    }
]

// Alternative approach that doesn't really work with the present exercise:

// const createStudentComponent = (name, subject, info, score) => {
//     let studentComponent = ``
//     if (score < 60) {
//         studentComponent +=  `
//             <div class="student failing">
//         `
//     } else {
//         studentComponent +=  `
//             <div class="student passing">
//         `
//     }
//     studentComponent += `
//             <h1>${name}</h1>
//             <section>${subject}</section>
//             <aside>${info}</aside>
//         </div>
//     `
//     return studentComponent;
// }

const createStudentComponent = (name, subject, info, score) => {
    if (score < 60) {
        return `
            <div class="student">
                <h1 class="xx-large failing">${name}</h1>
                <section class="bordered dashed section--padded">${subject}</section>
                <aside>${info}</aside>
            </div> 
            `
    } else {
        return `
            <div class="student">
                <h1 class="xx-large passing">${name}</h1>
                <section class="bordered dashed section--padded">${subject}</section>
                <aside class="pushRight">${info}</aside>
            </div> 
    `
    }
}

const studentContainer = document.querySelector("#container")

for (let i = 0; i < students.length; i++) {
    const student = students[i]
    studentContainer.innerHTML += createStudentComponent(
        student.name,
        student.subject,
        student.info,
        student.score
    )
}
// var noOfMonth = new Date().getMonth() - 6;
// document.getElementById("count").innerHTML = noOfMonth;

function openProject(link) {
    console.log(link)
    window.open(link);
}

var projects = [
    {
        name: "BMI Calculator",
        description:
            "A very simple bmi calculator, using for calculating body mass index.",
        stack: "C#, windows form",
        link: "https://github.com/nonicalx/bmi-calculator",
        img: '/assets/images/CSharp.png'
    },
    {
        name: "React Selective",
        description:
            "A simple react app that allow multiple selection from dropdown, allows searching from any end-point & allow removal of perviously selected value.",
        stack: "React",
        link: "https://github.com/nonicalx/React-Selective",
        img: '/assets/images/reactLogo.png'
    },
    {
        name: "Simple Text Encryption",
        description: "A desktop application for encrypting text in text files.",
        stack: "C#, windows form",
        link: "https://github.com/nonicalx/SimpleTextEncrytor",
        img: '/assets/images/CSharp.png'
    },

    {
        name: "Destini App",
        description:
            "A mobile game that is about about the choices you make along you path based on a story.",
        stack: "Dart, flutter",
        link: "https://github.com/nonicalx/destini-flutter",
        img: '/assets/images/flutter.png'
    },
    {
        name: "Pace website",
        description: "An introductory website of the pace awesome platform",
        stack: 'React',
        linK: 'https://staging-pacewebsite.herokuapp.com',
        img: '/assets/images/reactLogo.png'
    },
    {
        name: "BMI mobile app",
        description: 'A simple app for calculating BMI with a great UI',
        stack: "Dart, Flutter",
        link: 'https://github.com/nonicalx/bmi-calculator-flutter',
        img: '/assets/images/flutter.png'
    },
    {
        name: "Simple Calculator",
        description: "A simple calculator built with js, html and css",
        stack: "HTML, Js, CSS",
        link: "https://github.com/nonicalx/SimpleCalculator",
        img: "/assets/images/js.png"
    }
];




function loadProjects() {
    var projectRow = document.getElementById('project-row');

    projects.forEach(project => {
        projectRow.insertAdjacentHTML('beforeend', 
        `<div class="col-md-3 mb-4 d-flex justify-content-center">
        <section class="project-card shadow-sm">
            <div>
                <img src=${project.img} class="project-img" />
            </div>
            <div class="py-2 px-2 project-txt">
                <div class="project-desc">
                    <h5>${project.name}</h5>
                    <p>${project.description}</p>
                </div>
    
                <div class="d-flex project-footer">
                    <p class="project-stack"><b>${project.stack}</b></p>
                    <div class="d-flex justify-content-end align-items-center project-view-btn">
                        <a class="btn btn-sm btn-outline-success" 
                            href=${project.link} target="_blank">view</a>
                    </div>
                </div>
            </div>
        </section>
    </div>`)
    });



}



function switchTheme (){
    let body = document.getElementById("body")
    let nav = document.getElementById("navigator")

    console.log(body.classList.contains("body"))

    if(body.classList.contains("dark_body")){
        body.classList.remove("dark_body")
        nav.classList.remove("dark_body")
    }else{
        body.classList.add("dark_body");
        nav.classList.add("dark_body");
    }
}

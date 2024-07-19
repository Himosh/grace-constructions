import Ahilan from "./../Assets/Staffs/Ahilan.png";
import Arunram from "./../Assets/Staffs/Arunram.png";
import Fawas from "./../Assets/Staffs/Fawas.png";
import Gobishankar from "./../Assets/Staffs/Gobishankar.png";
import Hashan from "./../Assets/Staffs/Hashan.png";
import Insam from "./../Assets/Staffs/Insam.png";
import Jayalakshan from "./../Assets/Staffs/Jayalakshan.png";
import Jeyanther from "./../Assets/Staffs/Jayanther.png";
import Keshanth from "./../Assets/Staffs/John_Keshanth.png";
import Kajanan from "./../Assets/Staffs/Kajanan.png";
import Kulatharshan from "./../Assets/Staffs/Kulatharshan.png";
import Lakshani from "./../Assets/Staffs/Lakshani.png";
import Luksha from "./../Assets/Staffs/Luksha.png";
import Nadaraja from "./../Assets/Staffs/Nadaraja.png";
import Nithuha from "./../Assets/Staffs/Nithuha.png";
import Partheepan from "./../Assets/Staffs/Partheepan.png";
import Rachusthan from "./../Assets/Staffs/Rachsuthan.png";
import Sahan from "./../Assets/Staffs/Sahan.png";
import Sinnarasa from "./../Assets/Staffs/Sinnarasa.png";
import Template from "./../Assets/Staffs/Template.png";
import Vasanthan from "./../Assets/Staffs/Vasanthan.png";
import Vijayathasan from "./../Assets/Staffs/Vijayathasan.png";
import Vinojan from "./../Assets/Staffs/Vinojan.png";

const Directors = [
    {
        "id": 1,
        "name": "Bertin Jude Niloj",
        "role": "Managing Director",
        "degree": "BSc (Hons) in Engineering (Civil Engineering)",
        "image": Template
    },
    {
        "id": 2,
        "name": "Eng. Thangathurai Brammananda",
        "role": "General Manager",
        "degree": "BSc (Hons) in Engineering (Civil Engineering)",
        "image": Template
    }
    
];

const Heads = [
    {
        "id": 1,
        "name": "Tharakka",
        "role": "Structural Engineer",
        "degree": "BSc Hons Civil Engineering, University of Jaffna",
        "image": Template
    },
    {
        "id": 2,
        "name": "Subendran Jayalakshan",
        "role": "Project Manager",
        "degree": "BSc (Hons) in Civil Engineering, MSc (Eng) in Geotechnical Engineering (reading)",
        "image": Jayalakshan
    },
    {
        "id": 3,
        "name": "Thiyageswaran Gobishankar",
        "role": "Project Manager",
        "degree": "BSc (Hons) in Quantity Surveying",
        "image": Gobishankar
    },
    {
        "id": 4,
        "name": "Puvanendran Jayanther",
        "role": "Project Manager",
        "degree": "NDCT, NCT (Civil)",
        "image": Jeyanther
    },
    {
        "id": 5,
        "name": "Sivajathurshana Vijayathasan",
        "role": "Project Manager",
        "degree": "BSc (Hons) in Engineering (Civil Engineering)",
        "image": Vijayathasan
    },
    {
        "id": 6,
        "name": "Rajaratnam Sathianathan",
        "role": "Executive Engineer",
        "degree": "",
        "image": Template
    }

];

const Architects = [
    {
        "id": 1,
        "name": "Keneth Keethaponkalan",
        "role": "Architect",
        "degree": "Chartered Architect",
        "image": Template
    },
    {
        "id": 2,
        "name": "Insam",
        "role": "Architect Designer",
        "degree": "",
        "image": Insam
    },
    {
        "id": 3,
        "name": "Ahilan Pahirathan",
        "role": "Engineering Draughtsman",
        "degree": "",
        "image": Ahilan
    }


];

const EngineeringTrainees = [
    {
        "id": 1,
        "name": "Jeyakumar John Kesanth",
        "role": "Engineering Trainee",
        "degree": "BSc (Hons) in Engineering (Civil Engineering)",
        "image": Keshanth
    },
    {
        "id": 2,
        "name": "Perinparasa Vinojan",
        "role": "Engineering Trainee",
        "degree": "BSc (Hons) in Engineering (Civil Engineering)",
        "image": Vinojan
    },
    {
        "id": 3,
        "name": "Veeraikulasingam Rachsuthan",
        "role": "Engineering Trainee",
        "degree": "BSc (Hons) in Engineering (Civil & Environmental Engineering)",
        "image": Rachusthan
    }
];

const TechnicalOfficers = [
    {
        "id": 1,
        "name": "Vasanthan",
        "role": "Technical Officer",
        "degree": "BSc Hons Civil Engineering, University of Jaffna",
        "image": Vasanthan
    },
    {
        "id": 2,
        "name": "Balachandran Shwethaan",
        "role": "Technical Officer",
        "degree": "NCT in Civil Engineering (NVQ5)",
        "image": Template
    },
    {
        "id": 3,
        "name": "Kamalanathan Kajanan",
        "role": "Technical Officer",
        "degree": "NCT Civil Engineering",
        "image": Kajanan
    },
    {
        "id": 4,
        "name": "Perinparasa Birunthagan",
        "role": "Technical Officer",
        "degree": "NCT (National Diploma Construction Technology)",
        "image": Template
    }
]

const Surveyers = [
    {
        "id": 1,
        "name": "Mrs. Logitha Pantheepan",
        "role": "Quantity Surveying",
        "degree": "BSc (Hons) in Quantity Surveying",
        "image": Partheepan
    },
    {
        "id": 2,
        "name": "Kulenthran Kulatharshan",
        "role": "Quantity Surveying",
        "degree": "BSc (Hons) in Quantity Surveying",
        "image": Kulatharshan
    }
];

const NDT = [
    {
        "id": 1,
        "name": "Mohamed Hashan",
        "role": "NDT",
        "degree": "NDT in Civil Engineering, BSc (Hons) in Civil Engineering (reading)",
        "image": Hashan
    },
    {
        "id": 2,
        "name": "Mahroof Fawas Mohamed",
        "role": "NDT",
        "degree": "NCDT, IQED Quantity Surveying",
        "image": Fawas
    },
    {
        "id": 3,
        "name": "Sahan Randika",
        "role": "NDT",
        "degree": "NDT Civil Engineering",
        "image": Sahan
    }
];

const HNDE = [
    {
        "id": 1,
        "name": "Nadaraja Kirushna",
        "role": "HNDE",
        "degree": "HND in Civil, National Diploma in HRM",
        "image": Nadaraja
    },
    {
        "id": 2,
        "name": "Jayaganesh Arunraam",
        "role": "HNDE",
        "degree": "HND in Building Services Technology, Diploma in Quantity Surveying",
        "image": Arunram
    },
    {
        "id": 3,
        "name": "Maheshika Lakshani",
        "role": "HNDE",
        "degree": "HNDE (Civil)",
        "image": Lakshani
    }
];

const Supervisors = [
    {
        "id": 1,
        "name": "Krishnapillai Shanthakumar",
        "role": "Work Supervisor",
        "degree": "",
        "image": Template
    },
    {
        "id": 2,
        "name": "Sinnarasa Sojithkanth",
        "role": "Work Supervisor",
        "degree": "NVQ CS5",
        "image": Sinnarasa
    },
    {
        "id": 3,
        "name": "Faizar Rayan",
        "role": "Work Supervisor",
        "degree": "NVQ CS5",
        "image": Template
    }
];

const Accountant = [
    {
        "id": 1,
        "name": "Pathmarajah",
        "role": "Accountant",
        "degree": "BSc Hons Civil Engineering, University of Jaffna",
        "image": Template
    },
    {
        "id": 2,
        "name": "Ninthusha Jeyakanth",
        "role": "Accountant Assistant",
        "degree": "",
        "image": Nithuha
    },
    {
        "id": 3,
        "name": "Luksha Sunmugarasa",
        "role": "Accounts Clerk",
        "degree": "",
        "image": Luksha
    }
];


export {Directors,Heads,Architects,EngineeringTrainees,TechnicalOfficers,Supervisors,NDT,HNDE,Surveyers,Accountant} ;

const ongoingProject = [
    {
        "id": 1,
        "title": "Project 1 new home therer",
        "work_place": {
            "client": "Client A here i ma geh here i am dude",
            "projectValue": "RS: 1000 million",
            "initiation": "Jan 1, 2022",
            "completion": "Dec 31, 2023",
            "supervisor": "John Doe"
        },
        "address": "123 Main Street",
        "images": ["1.png", "2.png", "3.png"]
    },
    {
        "id": 2,
        "title": "Project 2",
        "work_place": {
            "client": "Client B",
            "projectValue": "RS: 1200 million",
            "initiation": "Feb 1, 2022",
            "completion": "Jan 31, 2024",
            "supervisor": "Jane Smith"
        },
        "address": "456 Elm Avenue",
        "images": ["1.png", "2.png", "3.png"]
    },
    {
        "id": 3,
        "title": "Project 3",
        "work_place": {
            "client": "Client C",
            "projectValue": "RS: 800 million",
            "initiation": "Mar 1, 2022",
            "completion": "Feb 28, 2023",
            "supervisor": "David Johnson"
        },
        "address": "789 Oak Boulevard",
        "images": ["1.png", "2.png", "3.png"]
    },
    {
        "id": 4,
        "title": "Project 4",
        "work_place": {
            "client": "Client D",
            "projectValue": "RS: 1500 million",
            "initiation": "Apr 1, 2022",
            "completion": "Mar 31, 2024",
            "supervisor": "Emily Brown"
        },
        "address": "101 Pine Street",
        "images": ["1.png", "2.png", "3.png"]
    },
    {
        "id": 5,
        "title": "Project 5",
        "work_place": {
            "client": "Client E",
            "projectValue": "RS: 1100 million",
            "initiation": "May 1, 2022",
            "completion": "Apr 30, 2023",
            "supervisor": "Michael Wilson"
        },
        "address": "202 Maple Avenue",
        "images": ["1.png", "2.png", "3.png"]
    },
    {
        "id": 6,
        "title": "Project 6",
        "work_place": {
            "client": "Client F",
            "projectValue": "RS: 1300 million",
            "initiation": "Jun 1, 2022",
            "completion": "May 31, 2024",
            "supervisor": "Sarah Garcia"
        },
        "address": "303 Cedar Lane",
        "images": ["1.png", "2.png", "3.png"]
    },
    {
        "id": 7,
        "title": "Project 7",
        "work_place": {
            "client": "Client G",
            "projectValue": "RS: 900 million",
            "initiation": "Jul 1, 2022",
            "completion": "Jun 30, 2023",
            "supervisor": "Daniel Lee"
        },
        "address": "404 Walnut Street",
        "images": ["1.png", "2.png", "3.png"]
    },
    {
        "id": 8,
        "title": "Project 8",
        "work_place": {
            "client": "Client H",
            "projectValue": "RS: 1400 million",
            "initiation": "Aug 1, 2022",
            "completion": "Jul 31, 2024",
            "supervisor": "Olivia Martinez"
        },
        "address": "505 Elmwood Drive",
        "images": ["1.png", "2.png", "3.png"]
    },
    {
        "id": 9,
        "title": "Project 9",
        "work_place": {
            "client": "Client I",
            "projectValue": "RS: 1000 million",
            "initiation": "Sep 1, 2022",
            "completion": "Aug 31, 2023",
            "supervisor": "Alexander Brown"
        },
        "address": "606 Oak Avenue",
        "images": ["1.png", "2.png", "3.png"]
    },
    {
        "id": 10,
        "title": "Project 10",
        "work_place": {
            "client": "Client J",
            "projectValue": "RS: 1200 million",
            "initiation": "Oct 1, 2022",
            "completion": "Sep 30, 2024",
            "supervisor": "Isabella Nguyen"
        },
        "address": "707 Pine Lane",
        "images": ["1.png", "2.png", "3.png"]
    },
    {
        "id": 11,
        "title": "Project 11",
        "work_place": {
            "client": "Client K",
            "projectValue": "RS: 800 million",
            "initiation": "Nov 1, 2022",
            "completion": "Oct 31, 2023",
            "supervisor": "Matthew Robinson"
        },
        "address": "808 Cedar Street",
        "images": ["1.png", "2.png", "3.png"]
    },
    {
        "id": 12,
        "title": "Project 12",
        "work_place": {
            "client": "Client L",
            "projectValue": "RS: 1500 million",
            "initiation": "Dec 1, 2022",
            "completion": "Nov 30, 2024",
            "supervisor": "Sophia Thompson"
        },
        "address": "909 Maple Drive",
        "images": ["1.png", "2.png", "3.png"]
    },
    {
        "id": 13,
        "title": "Project 13",
        "work_place": {
            "client": "Client M",
            "projectValue": "RS: 1100 million",
            "initiation": "Jan 1, 2023",
            "completion": "Dec 31, 2023",
            "supervisor": "Ethan Martinez"
        },
        "address": "1010 Walnut Avenue",
        "images": ["1.png", "2.png", "3.png"]
    },
    {
        "id": 14,
        "title": "Project 14",
        "work_place": {
            "client": "Client N",
            "projectValue": "RS: 1300 million",
            "initiation": "Feb 1, 2023",
            "completion": "Jan 31, 2025",
            "supervisor": "Chloe Rodriguez"
        },
        "address": "1111 Elm Lane",
        "images": ["1.png", "2.png", "3.png"]
    },
    {
        "id": 15,
        "title": "Project 15",
        "work_place": {
            "client": "Client O",
            "projectValue": "RS: 900 million",
            "initiation": "Mar 1, 2023",
            "completion": "Feb 28, 2024",
            "supervisor": "Gabriel Garcia"
        },
        "address": "1212 Oak Street",
        "images": ["1.png", "2.png", "3.png"]
    },
    {
        "id": 16,
        "title": "Project 16",
        "work_place": {
            "client": "Client P",
            "projectValue": "RS: 1400 million",
            "initiation": "Apr 1, 2023",
            "completion": "Mar 31, 2025",
            "supervisor": "Ava Hernandez"
        },
        "address": "1313 Pine Avenue",
        "images": ["1.png", "2.png", "3.png"]
    },
    {
        "id": 17,
        "title": "Project 17",
        "work_place": {
            "client": "Client Q",
            "projectValue": "RS: 1000 million",
            "initiation": "May 1, 2023",
            "completion": "Apr 30, 2024",
            "supervisor": "Jackson Brown"
        },
        "address": "1414 Cedar Lane",
        "images": ["1.png", "2.png", "3.png"]
    },
    {
        "id": 18,
        "title": "Project 18",
        "work_place": {
            "client": "Client R",
            "projectValue": "RS: 1200 million",
            "initiation": "Jun 1, 2023",
            "completion": "May 31, 2025",
            "supervisor": "Emma Nguyen"
        },
        "address": "1515 Oak Street",
        "images": ["1.png", "2.png", "3.png"]
    }
]

export default ongoingProject;

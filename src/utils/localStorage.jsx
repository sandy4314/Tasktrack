
//localStorage.clear()
const employees = [
  {
    "id": 1,
    "name": "Sandy",
    "email": "sandy@gmail.com",
    "password": "4314",
    "tasks": [
      {
        "task_title": "Prepare Report",
        "task_description": "Prepare the monthly sales report.",
        "task_date": "2025-01-05",
        "category": "Sales",
        "active": true,
        "new_task": true,
        "completed": false,
        "failed": false
      },
      {
        "task_title": "Team Meeting",
        "task_description": "Attend the quarterly team meeting.",
        "task_date": "2025-01-07",
        "category": "Management",
        "active": false,
        "new_task": false,
        "completed": true,
        "failed": false
      }
    ],
    "task_count": {
      "active": 1,
      "failed": 0,
      "completed": 1,
      "new_task": 1
    }
  },
  {
    "id": 2,
    "name": "Srinu",
    "email": "srinu@gmail.com",
    "password": "4314",
    "tasks": [
      {
        "task_title": "Client Presentation",
        "task_description": "Present the project progress to the client.",
        "task_date": "2025-01-04",
        "category": "Client Relations",
        "active": true,
        "new_task": false,
        "completed": false,
        "failed": false
      },
      {
        "task_title": "Budget Analysis",
        "task_description": "Analyze the Q4 budget allocation.",
        "task_date": "2025-01-06",
        "category": "Finance",
        "active": false,
        "new_task": true,
        "completed": false,
        "failed": true
      }
    ],
    "task_count": {
      "active": 1,
      "failed": 1,
      "completed": 0,
      "new_task": 1
    }
  },
  {
    "id": 3,
    "name": "Michael Brown",
    "email": "employee3@example.com",
    "password": "4314",
    "tasks": [
      {
        "task_title": "Onboarding New Hire",
        "task_description": "Guide the new employee through the onboarding process.",
        "task_date": "2025-01-03",
        "category": "HR",
        "active": false,
        "new_task": false,
        "completed": true,
        "failed": false
      },
      {
        "task_title": "Policy Update",
        "task_description": "Update company policies for the new year.",
        "task_date": "2025-01-08",
        "category": "HR",
        "active": true,
        "new_task": true,
        "completed": false,
        "failed": false
      }
    ],
    "task_count": {
      "active": 1,
      "failed": 0,
      "completed": 1,
      "new_task": 1
    }
  },
  {
    "id": 4,
    "name": "Emily Davis",
    "email": "employee4@example.com",
    "password": "4314",
    "tasks": [
      {
        "task_title": "Website Maintenance",
        "task_description": "Perform routine maintenance on the company website.",
        "task_date": "2025-01-02",
        "category": "IT",
        "active": false,
        "new_task": false,
        "completed": true,
        "failed": false
      },
      {
        "task_title": "Cybersecurity Audit",
        "task_description": "Conduct a cybersecurity audit for Q1.",
        "task_date": "2025-01-10",
        "category": "IT",
        "active": true,
        "new_task": true,
        "completed": false,
        "failed": false
      }
    ],
    "task_count": {
      "active": 1,
      "failed": 0,
      "completed": 1,
      "new_task": 1
    }
  },
  {
    "id": 5,
    "name": "Sophia Martinez",
    "email": "employee5@example.com",
    "password": "4314",
    "tasks": [
      {
        "task_title": "Product Launch Plan",
        "task_description": "Draft the launch plan for the new product.",
        "task_date": "2025-01-09",
        "category": "Marketing",
        "active": true,
        "new_task": false,
        "completed": false,
        "failed": false
      },
      {
        "task_title": "Campaign Strategy",
        "task_description": "Develop a marketing strategy for the upcoming campaign.",
        "task_date": "2025-01-11",
        "category": "Marketing",
        "active": false,
        "new_task": true,
        "completed": false,
        "failed": false
      }
    ],
    "task_count": {
      "active": 1,
      "failed": 0,
      "completed": 0,
      "new_task": 1
    }
  }
]


const admin = [
  {
    "id": 1,
    "name": "Sandeep",
    "email": "admin@example.com",
    "password": "4314"
  }
];


  export const setLocalStorage = () => {
    localStorage.setItem("Employees", JSON.stringify(employees));
    localStorage.setItem("Admin", JSON.stringify(admin));
  };
  
  export const getLocalStorage = () => {
    const employees = JSON.parse(localStorage.getItem("Employees"));
    const admin = JSON.parse(localStorage.getItem("Admin"));
    return { employees, admin }
  };
export const projectsData = [
  {
    id: "project-1",
    title: "Brain Tumor Detection Using Deep Learning",
    shortDescription:
      "This project demonstrates the development of a brain tumor detection system utilizing deep learning techniques on MRI images.",

    details:
      "The system employs Convolutional Neural Networks (CNNs) to classify MRI scans into categories such as glioma, pituitary, meningioma, and healthy tissue. The application is built using Python and leverages libraries like TensorFlow, Keras, and OpenCV.",
    tech: [
      "Python 3.x",
      "TensorFlow, Keras",
      "OpenCV",
      "NumPy",
      "Pandas",
      "Scikit-learn",
    ],
    image: require("../assets/images/brain.jpg"),
    projectLink: "https://github.com/shakeraema/NNDL-Project.git",
  },
  {
    id: "project-2",
    title: "SUST Karate Club – Web Management System",
    shortDescription:
      "A full-stack web application to digitize the operations of the Karate Club at Shahjalal University of Science and Technology (SUST).",
    details:
      "The system allows students to register, pay fees, track belt progress, and stay updated on events, while instructors can manage students, send notifications, and maintain schedules.",
    tech: [
      "React + Vite + Tailwind CSS",
      "Node.js + Express.js",
      "MySQL",
      "Cloudinary",
    ],
    image: require("../assets/images/karate.jpg"),
    projectLink: "https://github.com/shakeraema/KarateClubWebsiteSUST.git",
  },
  {
    id: "project-3",
    title: "Tic-Tac-Toe Game",
    shortDescription:
      "A simple and interactive Tic-Tac-Toe game built using JavaScript, HTML, and CSS.",
    details:
      "This project was developed for fun and as a way to practice JavaScript during my 3rd year, 1st semester.The game allows two players to compete against each other in a classic Tic-Tac-Toe match, with a clean and responsive interface.",
    tech: ["JavaScript", "HTML", "CSS"],
    image: require("../assets/images/game.jpg"),
    projectLink: "https://github.com/shakeraema/Tic-Tac-Toe-JS.git",
  },
];


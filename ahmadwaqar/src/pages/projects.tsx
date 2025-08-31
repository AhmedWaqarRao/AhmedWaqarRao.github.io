// src/pages/Projects.tsx
import { FC } from "react";
import { Github } from "lucide-react";

interface Project {
  title: string;
  period?: string;
  institution?: string;
  description: string;
  github?: string;
}

const projects: Project[] = [
  {
    title: "Design and Development of Olive Grading Mechanism & Pitting Machine (Final Year Project)",
    period: "Aug 2021 - Jun 2022",
    institution: "National University of Sciences and Technology (NUST)",
    description:
      "Developed a semi-automated machine for grading and pitting olives using Geneva and Slider Crank Mechanisms. Designed 3D CAD models and hardware to reduce Pakistan's dependence on imported olive oil.",
    github:
      "https://github.com/AhmedWaqarRao/Design-and-Development-of-Olive-Pitting-and-Grading-Machine",
  },
  {
    title: "24V To 12V & 24V Step Down Transformer (Actuating System Project)",
    institution: "National University of Sciences and Technology (NUST)",
    description:
      "Designed and implemented a step-down transformer system for voltage conversion, working with electric machines and current-carrying coils.",
  },
  {
    title: "Analysis of 911 Data and Finance Data using Yahoo Finance API",
    institution: "Northwestern Polytechnical University",
    description:
      "Performed exploratory data analysis on 911 calls dataset and finance data. Visualized patterns and trends using Python libraries.",
    github: "https://github.com/AhmedWaqarRao/Data_Science_Project",
  },
  {
    title: "Analysis of E-commerce Customers Data",
    institution: "Northwestern Polytechnical University",
    description:
      "Predicted yearly customer spending using Linear Regression with features such as Avg. session length, membership length, and app usage.",
    github:
      "https://github.com/AhmedWaqarRao/Machine-Learning-Algorithms-1-Linear-Regression-Projects",
  },
  {
    title: "Analysis of Salaries Dataset using Pandas DataFrame",
    institution: "Northwestern Polytechnical University",
    description:
      "Conducted exploratory data analysis on salaries dataset using Pandas DataFrame to extract insights and patterns.",
  },
  {
    title: "Analyzing Advertising Dataset to Predict Ad Click using Logistic Regression",
    institution: "Northwestern Polytechnical University",
    description:
      "Built a logistic regression model to predict ad clicks based on user parameters like age, time spent on site, and internet usage.",
    github:
      "https://github.com/AhmedWaqarRao/ML-Algorithms_-2-Logistic_Regression-Project",
  },
  {
    title: "Anonymous Data Analysis using KNN",
    institution: "Northwestern Polytechnical University",
    description:
      "Applied K-Nearest Neighbors algorithm on classified data after scaling with Standard Scaler to predict target classes.",
    github: "https://github.com/AhmedWaqarRao/ML_Algorithms_3-KNN-Project",
  },
  {
    title: "Automatic License Plate Recognition",
    institution: "Northwestern Polytechnical University",
    description:
      "Detected and recognized characters of Pakistani license plates using YOLOv3 and transfer learning.",
    github:
      "https://github.com/AhmedWaqarRao/Automatic-License-Plate-Recognition-ALPR-Using-Transfer-Learning",
  },
  {
    title: "BlackJack Card Game in Python",
    institution: "Northwestern Polytechnical University",
    description:
      "Developed a complete BlackJack card game implementation in Python with full game logic.",
    github: "https://github.com/AhmedWaqarRao/Complete-BlackJack-Card-Game-in-Python",
  },
  {
    title: "CNN on Built-in Datasets",
    institution: "Northwestern Polytechnical University",
    description:
      "Implemented Convolutional Neural Networks on keras built-in datasets including MNIST, CIFAR10, and FASHION_MNIST.",
    github:
      "https://github.com/AhmedWaqarRao/Convolutional_Neural_Network_-CNN-_Project",
  },
  {
    title: "CNN on Custom Image Dataset",
    institution: "Northwestern Polytechnical University",
    description:
      "Classified cell images as parasitized or uninfected using CNN on a custom dataset from Kaggle.",
    github:
      "https://github.com/AhmedWaqarRao/Convolutional_Neural_Network_-CNN-_Project",
  },
  {
    title: "Calendar of a Year In C++",
    institution: "National University of Sciences and Technology (NUST)",
    description: "Developed a calendar application for any given year using C++.",
  },
  {
    title: "Cell Phone Call Detector",
    institution: "National University of Sciences and Technology (NUST)",
    description:
      "Designed a circuit with LEDs that illuminate to indicate incoming calls through electric circuit analysis.",
  },
  {
    title: "Data/Image Labelling & Annotation Projects",
    institution: "3Dim Engineering Solutions",
    description:
      "Created bounding boxes, added text tags, and annotated images using V7 Darwin Software with 2D/3D bounding boxes and semantic segmentation.",
    github: "https://github.com/AhmedWaqarRao/Data-Annotaion-Projects",
  },
  {
    title: "Dimensionality Reduction using PCA",
    institution: "Northwestern Polytechnical University",
    description:
      "Applied Principal Component Analysis to reduce dimensionality of breast cancer dataset to 2 principal components.",
    github: "https://github.com/AhmedWaqarRao/ML_Algorithms_7-PCA-Project",
  },
  {
    title: "Enigma Machine For Cypher (Electrical and Software Working)",
    institution: "National University of Sciences and Technology (NUST)",
    description:
      "Built an Enigma machine with electromechanical rotor mechanism that scrambles letters for encoding and decoding messages.",
    github: "https://github.com/AhmedWaqarRao/Enigma-Machine-Project",
  },
  {
    title: "Face Mask Detection",
    institution: "Northwestern Polytechnical University",
    description:
      "Trained YOLOv3 with a Kaggle dataset to detect face masks. Used LabelImg for dataset preparation and Darknet framework for training.",
    github: "https://github.com/AhmedWaqarRao/Face-Mask-Detection-Project",
  },
  {
    title: "Forecast Number of Clusters of Artificial Data",
    institution: "Northwestern Polytechnical University",
    description:
      "Applied K-means clustering to artificial data points with 4 centroids to identify clusters.",
    github:
      "https://github.com/AhmedWaqarRao/ML_Algorithms_6_K-Means-Clustering_Project",
  },
  {
    title: "Fruit Plucking Robot At National Engineering Robotics Competition",
    institution: "National University of Sciences and Technology (NUST)",
    description:
      "Developed two robots (one autonomous, one wirelessly controlled) for fruit plucking with Arduino programming and electronic circuitry.",
  },
  {
    title: "Fruit Classification Using CNN (Deep Learning)",
    institution: "Northwestern Polytechnical University",
    description:
      "Implemented CNN on Fruits 360 dataset to classify different fruit types. Used TensorFlow/Keras for training.",
    github: "https://github.com/AhmedWaqarRao/Fruits-Classsification-Project",
  },
  {
    title: "Object Counter using 555 IC Timer",
    institution: "National University of Sciences and Technology (NUST)",
    description:
      "Designed a circuit using 555 IC timer to count objects passing through, implemented on PCB and breadboard.",
  },
  {
    title: "Plotting and Visualizing Seaborn Built-in Datasets",
    institution: "Northwestern Polytechnical University",
    description:
      "Created various plots (distribution, categorical, matrix, regression) on Seaborn built-in datasets using Matplotlib and Seaborn.",
  },
  {
    title: "Practice Data Science Course Materials",
    institution: "Northwestern Polytechnical University",
    description: "Collection of practice materials and exercises for data science coursework.",
    github:
      "https://github.com/AhmedWaqarRao/Practice_Data_Science_Materials_2",
  },
  {
    title: "Predicting Breast Cancer using SVM",
    institution: "Northwestern Polytechnical University",
    description:
      "Used Support Vector Machine algorithm on breast cancer dataset to predict presence or absence of cancer.",
    github: "https://github.com/AhmedWaqarRao/ML_Algorithms_5-SVM-Project",
  },
  {
    title: "Predicting Flowers Class using SVM",
    institution: "Northwestern Polytechnical University",
    description:
      "Applied SVM algorithm on iris dataset to classify flower types based on sepal and petal measurements.",
    github: "https://github.com/AhmedWaqarRao/ML_Algorithms_5-SVM-Project",
  },
  {
    title: "Predicting Kyphosis in Body using Decision Tree Classifier",
    institution: "Northwestern Polytechnical University",
    description:
      "Used Decision Tree and Random Forest classifiers on kyphosis dataset to predict presence or absence of condition.",
    github:
      "https://github.com/AhmedWaqarRao/ML_Algorithms_4_Decision-Tree-and-Random-Forest-Project",
  },
  {
    title: "Predicting Loan Return using Various Features",
    institution: "Northwestern Polytechnical University",
    description:
      "Applied Decision Tree and Random Forest classifiers to predict loan repayment using various customer features.",
    github:
      "https://github.com/AhmedWaqarRao/ML_Algorithms_4_Decision-Tree-and-Random-Forest-Project",
  },
  {
    title: "Predicting the Price using Fake Data",
    institution: "Northwestern Polytechnical University",
    description:
      "Built a neural network with TensorFlow/Keras to predict prices based on features in a fake dataset.",
    github: "https://github.com/AhmedWaqarRao/Data_Science_TensorFlow_Projects",
  },
  {
    title: "Predicting the Type of College using K-Means Clustering",
    institution: "Northwestern Polytechnical University",
    description:
      "Applied K-means clustering on college data to predict whether a college is private or public.",
    github:
      "https://github.com/AhmedWaqarRao/ML_Algorithms_6_K-Means-Clustering_Project",
  },
  {
    title: "Simulate A Banking System Using OOP (Library Management System)",
    institution: "Northwestern Polytechnical University",
    description:
      "Developed a banking system simulation using Object-Oriented Programming principles in Python.",
    github:
      "https://github.com/AhmedWaqarRao/Simulate-A-Banking-System.OOP_Project",
  },
  {
    title: "Social Distancing Detector",
    institution: "Northwestern Polytechnical University",
    description:
      "Implemented social distancing detection using YOLO pre-trained model on COCO dataset focused on person class.",
    github: "https://github.com/AhmedWaqarRao/Social_Distancing_Detector-Project",
  },
  {
    title: "TensorFlow for Classification",
    institution: "Northwestern Polytechnical University",
    description:
      "Built and trained a neural network with TensorFlow/Keras to classify benign vs malignant cancer with early stopping.",
    github: "https://github.com/AhmedWaqarRao/Data_Science_TensorFlow_Projects",
  },
  {
    title: "TensorFlow for Regression",
    institution: "Northwestern Polytechnical University",
    description:
      "Developed a neural network regression model to predict house prices based on various features using TensorFlow/Keras.",
    github: "https://github.com/AhmedWaqarRao/Data_Science_TensorFlow_Projects",
  },
  {
    title: "Tic Tac Toe Game Using Python",
    institution: "Northwestern Polytechnical University",
    description: "Implemented a complete Tic Tac Toe game using Python.",
  },
  {
    title: "Titanic Dataset to Predict Surviving Passengers",
    institution: "Northwestern Polytechnical University",
    description:
      "Used Logistic Regression to predict passenger survival on Titanic dataset after comprehensive data cleaning.",
  },
];

const Projects: FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-4xl font-bold text-center mb-10">Projects</h1>

      <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-2xl p-6 flex flex-col justify-between"
          >
            <div>
              <h2 className="text-xl font-semibold text-gray-800">
                {project.title}
              </h2>
              {project.period && (
                <p className="text-sm text-gray-500">{project.period}</p>
              )}
              {project.institution && (
                <p className="text-sm text-indigo-600 font-medium">
                  {project.institution}
                </p>
              )}
              <p className="mt-3 text-gray-700">{project.description}</p>
            </div>

            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
              >
                <Github size={18} className="mr-2" /> View on GitHub
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
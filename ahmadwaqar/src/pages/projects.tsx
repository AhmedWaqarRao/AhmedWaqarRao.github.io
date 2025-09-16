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
    title: "Efficient Real-Time Dynamic Pruning Techniques for Optimizing Target Detection Models in UAVs",
    period: "Jul 2025",
    institution: "GitHub Project",
    description: "Proposed efficient pruning strategies for real-time UAV object detection, optimizing accuracy and latency trade-offs for embedded systems.",
    github: "https://github.com/AhmedWaqarRao/Efficient-Real-Time-Dynamic-Pruning-Techniques-for-Optimizing-Target-Detection-Models-in-UAVs",
  },
  {
    title: "Adaptive Precision Spraying Tasks on Edge Device Using Real-Time Crop Segmentation",
    period: "Jul 2025",
    institution: "GitHub Project",
    description: "Implemented precision agriculture spraying using real-time crop segmentation models optimized for edge devices.",
    github: "https://github.com/AhmedWaqarRao/Adaptive-Precision-Spraying-Tasks-on-Edge-Device-Using-Real-Time-Crop-Segmentation",
  },
  {
    title: "Real-Time License Plate Detection and Vehicle Speed Estimation Using Deep Learning",
    period: "Jul 2025",
    institution: "GitHub Project",
    description: "Developed a system for automatic license plate detection and real-time speed estimation using deep learning and computer vision.",
    github: "https://github.com/AhmedWaqarRao/Real-Time-License-Plate-Detection-and-Vehicle-Speed-Estimation-Using-Deep-Learning-",
  },
  {
    title: "Time-Aware Deep Reinforcement Learning Framework for Dynamic Multi-Agent Interception",
    period: "Jul 2025",
    institution: "GitHub Project",
    description: "Proposed a time-aware deep reinforcement learning framework for dynamic multi-agent interception tasks in complex environments.",
    github: "https://github.com/AhmedWaqarRao/Time-Aware-Deep-Reinforcement-Learning-Framework-for-Dynamic-Multi-Agent-Interception",
  },
  {
    title: "Passive Two-Phase Flow Regime Identification based on Wavelet Transform Scalogram and Deep Learning",
    period: "Jul 2025",
    institution: "GitHub Project",
    description: "Studied colormap selection effects on deep learning predictions using wavelet scalograms for passive two-phase flow regime classification.",
    github: "https://github.com/AhmedWaqarRao/Passive-Two-Phase-Flow-Regime-Identification-based-on-Wavelet-Transform-Scalogram-and-Deep-Learning.",
  },
  {
    title: "TensorRT Backend For ONNX",
    period: "Feb 2025",
    institution: "GitHub Project",
    description: "Implemented TensorRT backend optimizations for ONNX models to enable efficient deep learning inference.",
    github: "https://github.com/AhmedWaqarRao/onnx-tensorrt",
  },
  {
    title: "Machine Learning Algorithms Projects (Linear Regression, Logistic Regression, KNN, Decision Trees, Random Forest, SVM, PCA, K-Means)",
    period: "Feb 2025",
    institution: "GitHub Project",
    description: "Hands-on implementation of classical ML algorithms including regression, classification, clustering, and dimensionality reduction techniques.",
    github: "https://github.com/AhmedWaqarRao/Machine-Learning-Algorithms-1-Linear-Regression-Projects",
  },
  {
    title: "Complete BlackJack Card Game in Python",
    period: "Feb 2025",
    institution: "GitHub Project",
    description: "Developed a fully interactive Blackjack card game using Python, simulating dealer and player logic.",
    github: "https://github.com/AhmedWaqarRao/Complete-BlackJack-Card-Game-in-Python.",
  },
  {
    title: "Only Train Once (OTO): Automatic One-Shot DNN Training And Compression Framework",
    period: "Oct 2024",
    institution: "GitHub Project",
    description: "Introduced a one-shot deep neural network training and compression framework for resource-efficient AI models.",
    github: "https://github.com/AhmedWaqarRao/only_train_once",
  },
  {
    title: "Fruits Classification Using CNN",
    period: "Aug 2024",
    institution: "GitHub Project",
    description: "Built a convolutional neural network to classify multiple fruit categories with high accuracy.",
    github: "https://github.com/AhmedWaqarRao/Fruits-Classsification-Project",
  },
  {
    title: "Social Distancing Detector",
    period: "Aug 2024",
    institution: "GitHub Project",
    description: "Implemented a YOLO-based social distancing detection system using the COCO dataset for real-time monitoring.",
    github: "https://github.com/AhmedWaqarRao/Social_Distancing_Detector-Project",
  },
  {
    title: "Face Mask Detection YOLOv3",
    period: "Aug 2024",
    institution: "GitHub Project",
    description: "Trained and deployed a YOLOv3-based system for real-time face mask detection in crowds.",
    github: "https://github.com/AhmedWaqarRao/Face-Mask-Detection-Project",
  },
  {
    title: "Convolutional Neural Network (CNN) for Malaria Detection",
    period: "Aug 2024",
    institution: "GitHub Project",
    description: "Developed a CNN model to classify parasitized and uninfected malaria cell images.",
    github: "https://github.com/AhmedWaqarRao/Convolutional_Neural_Network_-CNN-_Project",
  },
  {
    title: "Simulate A Banking System (OOP Project)",
    period: "Aug 2024",
    institution: "GitHub Project",
    description: "Built an OOP-based banking system simulator with account management and transaction features.",
    github: "https://github.com/AhmedWaqarRao/Simulate-A-Banking-System.OOP_Project",
  },
  {
    title: "Automatic License Plate Recognition (ALPR) Using Transfer Learning",
    period: "Aug 2024",
    institution: "GitHub Project",
    description: "Developed an ALPR system leveraging transfer learning for real-time license plate detection.",
    github: "https://github.com/AhmedWaqarRao/Automatic-License-Plate-Recognition-ALPR-Using-Transfer-Learning",
  },
  {
    title: "Data Science Project: 911 Data & Finance Data Analysis",
    period: "Aug 2024",
    institution: "GitHub Project",
    description: "Performed exploratory data analysis on emergency 911 call datasets and finance data using Yahoo Finance API.",
    github: "https://github.com/AhmedWaqarRao/Data_Science_Project",
  },
  {
  title: "Design and Development of Olive Pitting and Grading Machine",
  period: "Aug 2024",
  description:
    "Developed a semi-automated machine for grading and pitting olives. Designed and implemented mechanisms to optimize olive oil production and reduce dependency on imports.",
  github:
    "https://github.com/AhmedWaqarRao/Design-and-Development-of-Olive-Pitting-and-Grading-Machine",
},
{
  title: "Training YOLOv6 on Custom Data",
  period: "Aug 2024",
  description:
    "Trained YOLOv6 object detection framework on a custom dataset. Focused on dataset preparation, model fine-tuning, and achieving higher detection accuracy for real-world use cases.",
  github:
    "https://github.com/AhmedWaqarRao/Training_YOLOv6_on-Custom_Data-",
},
{
  title: "Enigma Machine Project",
  period: "Aug 2024",
  description:
    "Implemented a simulator of the Enigma cipher machine using C++. The project emulates historical encryption and decryption methods for secure communication during WWII.",
  github:
    "https://github.com/AhmedWaqarRao/Enigma-Machine-Project",
},
{
  title: "YOLOv7: State-of-the-Art Real-Time Object Detector",
  period: "Jun 2024",
  description:
    "Implemented YOLOv7, a real-time object detection model that integrates trainable bag-of-freebies techniques. Enhanced detection accuracy and speed for diverse computer vision tasks.",
  github:
    "https://github.com/AhmedWaqarRao/yolov7",
},
{
  title: "YOLOv6: Single-Stage Object Detection Framework",
  period: "Jun 2024",
  description:
    "Worked with YOLOv6, a single-stage object detection framework tailored for industrial applications, optimizing real-time performance and accuracy.",
  github:
    "https://github.com/AhmedWaqarRao/YOLOv6",
},
{
  title: "LabelImg (Extended via Label Studio)",
  period: "Jun 2024",
  description:
    "Explored and integrated LabelImg, a popular image annotation tool, into the Label Studio ecosystem. Used for bounding box annotations in computer vision projects.",
  github:
    "https://github.com/AhmedWaqarRao/labelImg",
},
{
  title: "YOLOv10: Real-Time End-to-End Object Detection",
  period: "Jun 2024",
  description:
    "Implemented YOLOv10 for real-time end-to-end object detection. Achieved improvements in inference speed and detection accuracy over prior YOLO versions.",
  github:
    "https://github.com/AhmedWaqarRao/yolov10",
},
{
  title: "Tic Tac Toe Game (Python)",
  period: "May 2024",
  description:
    "Developed a command-line Tic Tac Toe game in Python. Implemented interactive player moves, win/lose detection, and replay functionality.",
  github:
    "https://github.com/AhmedWaqarRao/-Tic-Tac-Toe-game-using-Python-Language-",
},
{
  title: "Simple User Interaction Small Game",
  period: "May 2024",
  description:
    "Built a simple Python-based interactive game where users can replace list positions with custom values. Focused on user input validation, loops, and dynamic list updates.",
  github:
    "https://github.com/AhmedWaqarRao/Simple-User-Interaction-Small-Game-",
},
{
  title: "Data Annotation Projects",
  period: "Apr 2024",
  description:
    "Created a collection of data annotation projects covering bounding boxes, segmentation, and structured labeling. Contributed to machine learning dataset preparation and improved data quality for training models.",
  github:
    "https://github.com/AhmedWaqarRao/Data-Annotaion-Projects",
},
{
  title: "EuroSAT: Land Use and Land Cover Classification with Sentinel-2",
  period: "Mar 2023",
  description:
    "Worked with EuroSAT dataset based on Sentinel-2 satellite images, covering 13 spectral bands and 10 classes with 27,000 labeled samples. Achieved 98.57% accuracy using deep CNNs for land cover classification and map improvements.",
  github:
    "https://github.com/AhmedWaqarRao/EuroSAT",
},

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
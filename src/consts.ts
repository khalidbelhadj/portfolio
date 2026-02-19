// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

export const TITLE = "Khalid Belhadj";
export const DESCRIPTION = "Personal website of Khalid Belhadj";
export const DEFAULT_LOCATION = "Edinburgh, United Kingdom";
export const LOCATION_CHANNEL =
  "https://api.thingspeak.com/channels/2616056/feeds.json?results=1";

export type Project = {
  name: string;
  description: string;
  url: string;
  year: string;
  languages: string[];
};

export const projects: Project[] = [
  {
    name: "Pacing Auction",
    description:
      "A Python framework for simulating and analysing first-price pacing auctions with budget constraints",
    url: "https://www.github.com/khalidbelhadj/pacing-auction",
    year: "2025",
    languages: ["Python"],
  },
  {
    name: "Order Book Simulation",
    description: "C++ implementation of a limit order book simulator",
    url: "https://github.com/khalidbelhadj/order_book_simulation",
    year: "2024",
    languages: ["C++"],
  },
  {
    name: "Algorithms and Data Structures",
    description:
      "Python implementations of Algorithms and Data Structures from The University of Edinburgh",
    url: "https://www.github.com/khalidbelhadj/ads",
    year: "2024",
    languages: ["Python"],
  },
  {
    name: "Interpreter",
    description:
      "A simple interpreter for a custom programming language, written in Rust",
    url: "https://www.github.com/khalidbelhadj/interpreter",
    year: "2024",
    languages: ["Rust"],
  },
  {
    name: "Handwritten Digits Classifier",
    description:
      "Classifier for the MNIST dataset using Stochastic Gradient Descent from scratch",
    url: "https://github.com/khalidbelhadj/ml-cw",
    year: "2024",
    languages: ["Python"],
  },
  {
    name: "JSON Parser",
    description:
      "A JSON parser written in C, with a focus on performance and memory efficiency",
    url: "https://www.github.com/khalidbelhadj/json_parser",
    year: "2024",
    languages: ["C"],
  },
  {
    name: "Cerve",
    description: "A basic HTTP server written in C",
    url: "https://www.github.com/khalidbelhadj/cerve",
    year: "2023",
    languages: ["C"],
  },
  {
    name: "Game of Life",
    description: "C++ implementation of Conway's Game of Life using Raylib",
    url: "https://github.com/khalidbelhadj/game_of_life",
    year: "2024",
    languages: ["C++"],
  },
  {
    name: "Regression",
    description: "C implementation of MSE regression using gradient descent",
    url: "https://www.github.com/khalidbelhadj/regression",
    year: "2024",
    languages: ["C"],
  },
  {
    name: "BMS Capital",
    description: "Main website for BMS Capital, a student-led investment fund",
    url: "https://www.github.com/khalidbelhadj/bms-capital",
    year: "2024",
    languages: ["TypeScript", "React"],
  },
  {
    name: "K-Means Visualizer",
    description: "C program for visualizing the K-Means clustering algorithm",
    url: "https://www.github.com/khalidbelhadj/kmeans",
    year: "2025",
    languages: ["C"],
  },
  {
    name: "Triangulation by Ear Clipping",
    description:
      "Visualisation of the ear clipping algorithm for polygon triangulation, written in Odin",
    url: "https://github.com/khalidbelhadj/ear-clipping",
    year: "2025",
    languages: ["Odin"],
  },
];

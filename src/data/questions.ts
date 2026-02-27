export interface Question {
  id: string;
  text: string;
  options: string[];
  correctIndex: number;
  category: string;
}

export const questionBank: Question[] = [
  // Programming
  { id: "p1", text: "What does HTML stand for?", options: ["Hyper Text Markup Language", "High Tech Modern Language", "Hyper Transfer Markup Language", "Home Tool Markup Language"], correctIndex: 0, category: "Programming" },
  { id: "p2", text: "What is a variable in programming?", options: ["A fixed value", "A container for storing data", "A type of loop", "A function name"], correctIndex: 1, category: "Programming" },
  { id: "p3", text: "Which language is primarily used for styling web pages?", options: ["HTML", "JavaScript", "CSS", "Python"], correctIndex: 2, category: "Programming" },
  { id: "p4", text: "What does CSS stand for?", options: ["Computer Style Sheets", "Creative Style System", "Cascading Style Sheets", "Colorful Style Sheets"], correctIndex: 2, category: "Programming" },
  { id: "p5", text: "Which symbol is used for single-line comments in JavaScript?", options: ["/* */", "//", "#", "--"], correctIndex: 1, category: "Programming" },
  { id: "p6", text: "What is the output of 2 + '2' in JavaScript?", options: ["4", "22", "NaN", "Error"], correctIndex: 1, category: "Programming" },
  { id: "p7", text: "Which data structure uses LIFO?", options: ["Queue", "Array", "Stack", "Tree"], correctIndex: 2, category: "Programming" },
  { id: "p8", text: "What does API stand for?", options: ["Application Programming Interface", "Applied Program Integration", "Application Process Interface", "Automated Programming Interface"], correctIndex: 0, category: "Programming" },
  { id: "p9", text: "Which keyword declares a constant in JavaScript?", options: ["var", "let", "const", "static"], correctIndex: 2, category: "Programming" },
  { id: "p10", text: "What is the file extension for Python?", options: [".java", ".js", ".py", ".pt"], correctIndex: 2, category: "Programming" },

  // Engineering
  { id: "e1", text: "What is Ohm's Law?", options: ["V = IR", "P = IV", "F = ma", "E = mc²"], correctIndex: 0, category: "Engineering" },
  { id: "e2", text: "What unit is electrical resistance measured in?", options: ["Watts", "Ohms", "Volts", "Amperes"], correctIndex: 1, category: "Engineering" },
  { id: "e3", text: "What does CPU stand for?", options: ["Central Processing Unit", "Computer Personal Unit", "Central Program Utility", "Core Processing Unit"], correctIndex: 0, category: "Engineering" },
  { id: "e4", text: "Which material is the best conductor of electricity?", options: ["Wood", "Rubber", "Copper", "Glass"], correctIndex: 2, category: "Engineering" },
  { id: "e5", text: "What is the SI unit of force?", options: ["Joule", "Watt", "Newton", "Pascal"], correctIndex: 2, category: "Engineering" },
  { id: "e6", text: "What does RAM stand for?", options: ["Read Access Memory", "Random Access Memory", "Rapid Action Memory", "Run Application Memory"], correctIndex: 1, category: "Engineering" },
  { id: "e7", text: "How many bits are in a byte?", options: ["4", "8", "16", "32"], correctIndex: 1, category: "Engineering" },
  { id: "e8", text: "What is the speed of light approximately?", options: ["300,000 km/s", "150,000 km/s", "500,000 km/s", "1,000,000 km/s"], correctIndex: 0, category: "Engineering" },

  // AI
  { id: "a1", text: "What does AI stand for?", options: ["Automated Intelligence", "Artificial Intelligence", "Applied Integration", "Advanced Interface"], correctIndex: 1, category: "AI" },
  { id: "a2", text: "Which company created ChatGPT?", options: ["Google", "Meta", "OpenAI", "Microsoft"], correctIndex: 2, category: "AI" },
  { id: "a3", text: "What is a neural network inspired by?", options: ["The internet", "The human brain", "Computer circuits", "Quantum physics"], correctIndex: 1, category: "AI" },
  { id: "a4", text: "What is NLP in AI?", options: ["New Language Programming", "Natural Language Processing", "Neural Logic Processing", "Network Learning Protocol"], correctIndex: 1, category: "AI" },
  { id: "a5", text: "What is a chatbot?", options: ["A robot that chats", "An AI program that simulates conversation", "A chat application", "A messaging protocol"], correctIndex: 1, category: "AI" },
  { id: "a6", text: "Which test evaluates if AI can exhibit human-like intelligence?", options: ["SAT Test", "Turing Test", "IQ Test", "Benchmark Test"], correctIndex: 1, category: "AI" },

  // Machine Learning
  { id: "m1", text: "What is Machine Learning?", options: ["Programming machines manually", "Machines learning from data", "Building physical machines", "Machine maintenance"], correctIndex: 1, category: "Machine Learning" },
  { id: "m2", text: "What is training data?", options: ["Data used to test models", "Data used to teach models", "Data stored in databases", "Data from user input"], correctIndex: 1, category: "Machine Learning" },
  { id: "m3", text: "What is overfitting?", options: ["Model performs too well on new data", "Model memorizes training data too closely", "Model is too simple", "Model runs too fast"], correctIndex: 1, category: "Machine Learning" },
  { id: "m4", text: "Which is a type of supervised learning?", options: ["Clustering", "Classification", "Dimensionality reduction", "Association rules"], correctIndex: 1, category: "Machine Learning" },
  { id: "m5", text: "What is a dataset?", options: ["A single data point", "A collection of data", "A data type", "A database query"], correctIndex: 1, category: "Machine Learning" },
  { id: "m6", text: "What does GPU stand for in ML context?", options: ["General Processing Unit", "Graphics Processing Unit", "Global Program Unit", "Grand Performance Unit"], correctIndex: 1, category: "Machine Learning" },
];

export function getRandomQuestions(count: number): Question[] {
  const shuffled = [...questionBank].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, Math.min(count, shuffled.length));
}

export function generateQuizCode(): string {
  const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
  let code = 'QZ';
  for (let i = 0; i < 4; i++) {
    code += chars[Math.floor(Math.random() * chars.length)];
  }
  return code;
}

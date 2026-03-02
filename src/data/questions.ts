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
  { id: "p11", text: "What is a function in programming?", options: ["A reusable block of code", "A type of variable", "A loop construct", "A database table"], correctIndex: 0, category: "Programming" },
  { id: "p12", text: "Which operator checks both value and type in JavaScript?", options: ["==", "===", "!=", ">="], correctIndex: 1, category: "Programming" },
  { id: "p13", text: "What is JSON?", options: ["JavaScript Object Notation", "Java Simple Object Network", "JavaScript Online Notation", "Joint Standard Object Naming"], correctIndex: 0, category: "Programming" },
  { id: "p14", text: "Which HTML tag is used for the largest heading?", options: ["<h6>", "<heading>", "<h1>", "<head>"], correctIndex: 2, category: "Programming" },
  { id: "p15", text: "What does 'npm' stand for?", options: ["Node Package Manager", "New Project Module", "Network Programming Module", "Node Program Manager"], correctIndex: 0, category: "Programming" },

  // Web Development
  { id: "w1", text: "What is React?", options: ["A database", "A JavaScript library for building UIs", "A CSS framework", "A programming language"], correctIndex: 1, category: "Web Dev" },
  { id: "w2", text: "What is the virtual DOM?", options: ["A backup server", "A lightweight copy of the actual DOM", "A browser extension", "A JavaScript engine"], correctIndex: 1, category: "Web Dev" },
  { id: "w3", text: "What does HTTPS add to HTTP?", options: ["Speed", "Security via encryption", "More bandwidth", "Better compression"], correctIndex: 1, category: "Web Dev" },
  { id: "w4", text: "What is a REST API?", options: ["A sleep schedule for servers", "An architectural style for APIs using HTTP", "A testing framework", "A database type"], correctIndex: 1, category: "Web Dev" },
  { id: "w5", text: "What is responsive design?", options: ["Fast-loading pages", "Design that adapts to different screen sizes", "Server-side rendering", "Animated transitions"], correctIndex: 1, category: "Web Dev" },
  { id: "w6", text: "What is TypeScript?", options: ["A new programming language", "A typed superset of JavaScript", "A CSS preprocessor", "A database query language"], correctIndex: 1, category: "Web Dev" },
  { id: "w7", text: "What is a CDN?", options: ["Code Delivery Network", "Content Delivery Network", "Central Data Node", "Cached Domain Name"], correctIndex: 1, category: "Web Dev" },
  { id: "w8", text: "What is localStorage used for?", options: ["Storing data in browser permanently", "Server-side caching", "Database management", "Network requests"], correctIndex: 0, category: "Web Dev" },
  { id: "w9", text: "What is a SPA?", options: ["Server Page Application", "Single Page Application", "Static Page Architecture", "Simple Program API"], correctIndex: 1, category: "Web Dev" },
  { id: "w10", text: "What is WebSocket used for?", options: ["File uploads", "Real-time bidirectional communication", "Database queries", "CSS animations"], correctIndex: 1, category: "Web Dev" },

  // Engineering
  { id: "e1", text: "What is Ohm's Law?", options: ["V = IR", "P = IV", "F = ma", "E = mc²"], correctIndex: 0, category: "Engineering" },
  { id: "e2", text: "What unit is electrical resistance measured in?", options: ["Watts", "Ohms", "Volts", "Amperes"], correctIndex: 1, category: "Engineering" },
  { id: "e3", text: "What does CPU stand for?", options: ["Central Processing Unit", "Computer Personal Unit", "Central Program Utility", "Core Processing Unit"], correctIndex: 0, category: "Engineering" },
  { id: "e4", text: "Which material is the best conductor of electricity?", options: ["Wood", "Rubber", "Copper", "Glass"], correctIndex: 2, category: "Engineering" },
  { id: "e5", text: "What is the SI unit of force?", options: ["Joule", "Watt", "Newton", "Pascal"], correctIndex: 2, category: "Engineering" },
  { id: "e6", text: "What does RAM stand for?", options: ["Read Access Memory", "Random Access Memory", "Rapid Action Memory", "Run Application Memory"], correctIndex: 1, category: "Engineering" },
  { id: "e7", text: "How many bits are in a byte?", options: ["4", "8", "16", "32"], correctIndex: 1, category: "Engineering" },
  { id: "e8", text: "What is the speed of light approximately?", options: ["300,000 km/s", "150,000 km/s", "500,000 km/s", "1,000,000 km/s"], correctIndex: 0, category: "Engineering" },
  { id: "e9", text: "What is a transistor?", options: ["A type of resistor", "A semiconductor device for switching", "A power source", "A capacitor variant"], correctIndex: 1, category: "Engineering" },
  { id: "e10", text: "What does SSD stand for?", options: ["Super Speed Drive", "Solid State Drive", "System Storage Device", "Smart Software Disk"], correctIndex: 1, category: "Engineering" },

  // AI
  { id: "a1", text: "What does AI stand for?", options: ["Automated Intelligence", "Artificial Intelligence", "Applied Integration", "Advanced Interface"], correctIndex: 1, category: "AI" },
  { id: "a2", text: "Which company created ChatGPT?", options: ["Google", "Meta", "OpenAI", "Microsoft"], correctIndex: 2, category: "AI" },
  { id: "a3", text: "What is a neural network inspired by?", options: ["The internet", "The human brain", "Computer circuits", "Quantum physics"], correctIndex: 1, category: "AI" },
  { id: "a4", text: "What is NLP in AI?", options: ["New Language Programming", "Natural Language Processing", "Neural Logic Processing", "Network Learning Protocol"], correctIndex: 1, category: "AI" },
  { id: "a5", text: "What is a chatbot?", options: ["A robot that chats", "An AI program that simulates conversation", "A chat application", "A messaging protocol"], correctIndex: 1, category: "AI" },
  { id: "a6", text: "Which test evaluates if AI can exhibit human-like intelligence?", options: ["SAT Test", "Turing Test", "IQ Test", "Benchmark Test"], correctIndex: 1, category: "AI" },
  { id: "a7", text: "What is computer vision?", options: ["A display technology", "AI that interprets visual information", "A camera type", "A video codec"], correctIndex: 1, category: "AI" },
  { id: "a8", text: "What is a large language model (LLM)?", options: ["A big dictionary", "An AI model trained on text to generate language", "A translation tool", "A grammar checker"], correctIndex: 1, category: "AI" },
  { id: "a9", text: "What is reinforcement learning?", options: ["Learning from rewards and penalties", "Memorizing data", "Copying human behavior", "Statistical analysis"], correctIndex: 0, category: "AI" },
  { id: "a10", text: "What is a hallucination in AI?", options: ["A visual bug", "When AI generates false information confidently", "A rendering error", "A network timeout"], correctIndex: 1, category: "AI" },

  // Machine Learning
  { id: "m1", text: "What is Machine Learning?", options: ["Programming machines manually", "Machines learning from data", "Building physical machines", "Machine maintenance"], correctIndex: 1, category: "ML" },
  { id: "m2", text: "What is training data?", options: ["Data used to test models", "Data used to teach models", "Data stored in databases", "Data from user input"], correctIndex: 1, category: "ML" },
  { id: "m3", text: "What is overfitting?", options: ["Model performs too well on new data", "Model memorizes training data too closely", "Model is too simple", "Model runs too fast"], correctIndex: 1, category: "ML" },
  { id: "m4", text: "Which is a type of supervised learning?", options: ["Clustering", "Classification", "Dimensionality reduction", "Association rules"], correctIndex: 1, category: "ML" },
  { id: "m5", text: "What is a dataset?", options: ["A single data point", "A collection of data", "A data type", "A database query"], correctIndex: 1, category: "ML" },
  { id: "m6", text: "What does GPU stand for in ML context?", options: ["General Processing Unit", "Graphics Processing Unit", "Global Program Unit", "Grand Performance Unit"], correctIndex: 1, category: "ML" },
  { id: "m7", text: "What is a decision tree?", options: ["A flowchart-like model for decisions", "A type of database", "A networking protocol", "A file structure"], correctIndex: 0, category: "ML" },
  { id: "m8", text: "What is gradient descent?", options: ["A skiing technique", "An optimization algorithm to minimize error", "A sorting algorithm", "A compression method"], correctIndex: 1, category: "ML" },

  // Cybersecurity
  { id: "c1", text: "What is phishing?", options: ["A fishing game", "Tricking users to reveal sensitive info", "A network protocol", "A type of encryption"], correctIndex: 1, category: "Security" },
  { id: "c2", text: "What does VPN stand for?", options: ["Virtual Private Network", "Very Private Node", "Virtual Public Network", "Verified Protected Network"], correctIndex: 0, category: "Security" },
  { id: "c3", text: "What is two-factor authentication?", options: ["Using two passwords", "Verifying identity with two different methods", "Logging in twice", "Having two accounts"], correctIndex: 1, category: "Security" },
  { id: "c4", text: "What is a firewall?", options: ["A fire prevention system", "A network security system that monitors traffic", "A type of virus", "An encryption algorithm"], correctIndex: 1, category: "Security" },
  { id: "c5", text: "What is ransomware?", options: ["Free software", "Malware that encrypts files for ransom", "A backup tool", "An antivirus program"], correctIndex: 1, category: "Security" },
  { id: "c6", text: "What is SQL injection?", options: ["A database backup", "Inserting malicious SQL code into queries", "A data migration tool", "A programming language feature"], correctIndex: 1, category: "Security" },
  { id: "c7", text: "What does HTTPS ensure?", options: ["Faster loading", "Encrypted communication between browser and server", "Better SEO", "More bandwidth"], correctIndex: 1, category: "Security" },
  { id: "c8", text: "What is a DDoS attack?", options: ["A debugging tool", "Overwhelming a server with traffic to crash it", "A data format", "A deployment method"], correctIndex: 1, category: "Security" },

  // Data Science
  { id: "d1", text: "What is a DataFrame in pandas?", options: ["A picture frame", "A 2D labeled data structure", "A database connection", "A file format"], correctIndex: 1, category: "Data Science" },
  { id: "d2", text: "What is the mean of a dataset?", options: ["The middle value", "The average of all values", "The most frequent value", "The range of values"], correctIndex: 1, category: "Data Science" },
  { id: "d3", text: "What is data normalization?", options: ["Deleting duplicate data", "Scaling data to a standard range", "Sorting data alphabetically", "Encrypting data"], correctIndex: 1, category: "Data Science" },
  { id: "d4", text: "What is a histogram?", options: ["A bar chart showing frequency distribution", "A line graph", "A pie chart", "A scatter plot"], correctIndex: 0, category: "Data Science" },
  { id: "d5", text: "What is correlation?", options: ["Data deletion", "Statistical measure of relationship between variables", "A sorting algorithm", "A database join"], correctIndex: 1, category: "Data Science" },
  { id: "d6", text: "What does ETL stand for?", options: ["Extract, Transform, Load", "Edit, Test, Launch", "Encrypt, Transfer, Log", "Evaluate, Track, Learn"], correctIndex: 0, category: "Data Science" },

  // Mathematics
  { id: "mt1", text: "What is the value of π (pi) to 2 decimal places?", options: ["3.14", "2.71", "1.62", "3.41"], correctIndex: 0, category: "Math" },
  { id: "mt2", text: "What is the derivative of x²?", options: ["x", "2x", "x²", "2x²"], correctIndex: 1, category: "Math" },
  { id: "mt3", text: "What is a prime number?", options: ["Divisible by 1 and itself only", "An even number", "A negative number", "A decimal number"], correctIndex: 0, category: "Math" },
  { id: "mt4", text: "What is the binary representation of 10?", options: ["1010", "1100", "1001", "0110"], correctIndex: 0, category: "Math" },
  { id: "mt5", text: "What is the Fibonacci sequence start?", options: ["0, 1, 1, 2, 3", "1, 2, 3, 4, 5", "1, 1, 2, 4, 8", "0, 2, 4, 6, 8"], correctIndex: 0, category: "Math" },
  { id: "mt6", text: "What is log₂(8)?", options: ["2", "3", "4", "8"], correctIndex: 1, category: "Math" },
  { id: "mt7", text: "What is the square root of 144?", options: ["10", "11", "12", "14"], correctIndex: 2, category: "Math" },
  { id: "mt8", text: "What is 0! (zero factorial)?", options: ["0", "1", "Undefined", "Infinity"], correctIndex: 1, category: "Math" },

  // Science
  { id: "s1", text: "What is the chemical symbol for water?", options: ["O2", "H2O", "CO2", "NaCl"], correctIndex: 1, category: "Science" },
  { id: "s2", text: "What planet is known as the Red Planet?", options: ["Venus", "Jupiter", "Mars", "Saturn"], correctIndex: 2, category: "Science" },
  { id: "s3", text: "What is the powerhouse of the cell?", options: ["Nucleus", "Ribosome", "Mitochondria", "Cell wall"], correctIndex: 2, category: "Science" },
  { id: "s4", text: "What is the atomic number of Carbon?", options: ["4", "6", "8", "12"], correctIndex: 1, category: "Science" },
  { id: "s5", text: "What gas do plants absorb from the atmosphere?", options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"], correctIndex: 2, category: "Science" },
  { id: "s6", text: "What is the largest organ in the human body?", options: ["Heart", "Liver", "Brain", "Skin"], correctIndex: 3, category: "Science" },
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

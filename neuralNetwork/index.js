// import { data } from "autoprefixer";

// const brain = require("brain.js");

// //creating an LSTM network
// const net = new brain.recurrent.LSTM();

// //training the LSTM
// net.train(
//   [
//     { input: "hi", output: '1'},
//     { input: "hello", output: '1'},
//     { input: "hi there", output: '1'},
//     { input: "howdy", output: '1'},
//     { input: "hi everyone", output: '1'},
//     { input: "hello everyone", output: '1'},
//     { input: "howdy everyone", output: '1'},
//     { input: "hi mammoth", output: '1'},
//     { input: "hello mammoth", output: '1'},

//     { input: "bye", output: '2' },
//     { input: "cya", output: '2' },
//     { input: "good bye", output: '2' },
//     { input: "goodbye", output: '2' },
//     { input: "gnight", output: '2' },
//     { input: "good night", output: '2' },
//     { input: "see you", output: '2' },
//     { input: "see you later", output: '2' },
//     { input: "see you tomorrow", output: '2' },
//     { input: "see you guys", output: '2' },
//     { input: "see you everyone", output: '2' },
//     { input: "good bye everyone", output: '2' },
//     { input: "bye everyone", output: '2' },
//     { input: "i have to go", output: '2' },
//     { input: "i got to go", output: '2' },
//     { input: "take it easy", output: '2' },
//     { input: "have a nice day", output: '2' },
//     { input: "have a good day", output: '2' },
//     { input: "k i gtg cya", output: '2' },

//     { input: "lol", output: '3' },
//     { input: "lmao", output: '3' },
//     { input: "heh", output: '3' },
//     { input: "funny", output: '3' },
//     { input: "funny guy", output: '3' },
//     { input: "so funny", output: '3' },
//     { input: "thats funny", output: '3' },
//     { input: "lols", output: '3' },
//     { input: "ha", output: '3' },
//     { input: "ha ha", output: '3' },
//     { input: "youre funny", output: '3' },
//     { input: "your funny", output: '3' },
//     { input: "ur funny", output: '3' },
//     { input: "too funny", output: '3' },
//     { input: "very funny", output: '3' },
//     { input: "rofl", output: '3' },
//     { input: "lmfao", output: '3' },

//     { input: "weather", output: '4' },
//     { input: "whats the weather", output: '4' },
//     { input: "whats the weather like", output: '4' },
//     { input: "hows the weather", output: '4' },
//     { input: "is it raining", output: '4' },
//     { input: "is it windy", output: '4' },
//     { input: "is it sunny", output: '4' },
//     { input: "is it snowing", output: '4' },
//     { input: "is it cold", output: '4' },
//     { input: "is it hot", output: '4' },
//     { input: "how is it outside", output: '4' },
//     { input: "what is the temperature", output: '4' },

//     { input: "yes", output: '5' },
//     { input: "absolutly", output: '5' },
//     { input: "i guess", output: '5' },
//     { input: "i agree", output: '5' },
//     { input: "i think so", output: '5' },
//     { input: "you bet", output: '5' },
//     { input: "yas", output: '5' },
//     { input: "ya", output: '5' },
//     { input: "you bet", output: '5' },
//     { input: "ok", output: '5' },
//     { input: "sure", output: '5' },
//     { input: "totally", output: '5' },
//     { input: "okay", output: '5' },
//     { input: "alrighty", output: '5' },
//     { input: "sure thing", output: '5' },
//     { input: "yeah", output: '5' },
//     { input: "yea", output: '5' },
//     { input: "mhmm", output: '5' },

//     { input: "no", output: '6' },
//     { input: "no thanks", output: '6' },
//     { input: "nty", output: '6' },
//     { input: "nope", output: '6' },
//     { input: "no way", output: '6' },
//     { input: "never", output: '6' },
//     { input: "i cannot", output: '6' },
//     { input: "i cant", output: '6' },
//     { input: "i dont think so", output: '6' },
//     { input: "i dont", output: '6' },
//     { input: "i dont want too", output: '6' },
//     { input: "i dont", output: '6' },

//     { input: "how are you", output: 'botGreet' },
//     { input: "hows it going", output: 'botGreet' },
//     { input: "how are you doing", output: 'botGreet' },
//     { input: "sup", output: 'botGreet' },
//     { input: "yo", output: 'botGreet' },
//     { input: "wasup", output: 'botGreet' },
//     { input: "whats up", output: 'botGreet' },
//     { input: "whats good", output: 'botGreet' },
//     { input: "whats new", output: 'botGreet' },
//     { input: "whats going on", output: 'botGreet' },
//     { input: "hows everything", output: 'botGreet' },
//     { input: "hows life", output: 'botGreet' },
//     { input: "how are things", output: 'botGreet' },
//     { input: "hows your day", output: 'botGreet' },
//     { input: "hows your day going", output: 'botGreet' },
//     { input: "hows your day", output: 'botGreet' },
//     { input: "good day", output: 'botGreet' },
//     { input: "good morning", output: 'botGreet' },
//     { input: "good afternoon", output: 'botGreet' },
//     { input: "good evening", output: 'botGreet' },
//     { input: "welcome", output: 'botGreet' },
//     { input: "good to see you", output: 'botGreet' },

//     { input: "how do i", output: '8' },
//     { input: "how do i get roles", output: '8' },
//     { input: "how do i join", output: '8' },
//     { input: "how do i advance", output: '8' },
//     { input: "how do i submit my stats", output: '8' },
//     { input: "how do i submit stats", output: '8' },
//     { input: "how do i become a member", output: '8' },
//     { input: "how do i get sub", output: '8' },
//     { input: "how do i get main", output: '8' },
//     { input: "i need help", output: '8' },
//     { input: "help me", output: '8' },
//     { input: "help", output: '8' },
//   ],
//   //the default iterations are '2'0,000 this will take a while
//   { iterations: 100 }
// );

// function neuralNetwork(data) {
//   if(data) {
//     return net.run(data);
//   }
// }
// export default neuralNetwork;


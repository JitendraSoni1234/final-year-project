const { NlpManager } = require('node-nlp');
const fs = require('fs');

async function neuralNetwork(question) {
  try {
    const manager = new NlpManager({ languages: ['en'] });
    const dataset = fs.readFileSync('neuralNetwork/qna.tsv', 'utf8');
    
    // Parse TSV file into an array of lines
    const lines = dataset.trim().split('\n');
    
    // Process each line and add it as a document
    lines.forEach((line) => {
      const [utterance, intent] = line.split('\t');
      manager.addDocument('en', utterance, intent);
    });
    
    // Train the manager with the added documents
    await manager.train();
    
    // Process the user's question
    const response = await manager.process('en', question);
    return response;
  } catch (error) {
    throw error;
  }
}

export default async function handler(req, res) {
  try {
    const response = await neuralNetwork(req.body.data);
    res.status(200).send(response);
  } catch (error) {
    res.status(500).send('An error occurred.');
  }
}

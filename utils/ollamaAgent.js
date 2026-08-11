const axios = require('axios');

async function runAgent(agentRole, userMessage) {
  const response = await axios.post('http://localhost:11434/api/chat', {
    model: "qwen:4b",
    messages: [
      { role: "system", content: agentRole },
      { role: "user", content: userMessage }
    ]
  }, { responseType: 'stream' });

  response.data.on('data', chunk => {
    const lines = chunk.toString().trim().split('\n');
    for (const line of lines) {
      try {
        const obj = JSON.parse(line);
        if (obj.message?.content) {
          process.stdout.write(obj.message.content);
        }
      } catch {}
    }
  });
}

// Example usage
runAgent("You are a Playwright coding assistant.", "Write a Playwright test for login functionality.");

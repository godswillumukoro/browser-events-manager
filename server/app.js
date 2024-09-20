require('dotenv').config();
const express = require('express');

const app = express();
const PORT = process.env.PORT || 4999;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const replicatedData = {};

app.post('/backup/replicate', (req, res) => {
  try {
    const data = req.body;

    // Validate incoming data
    if (!data || typeof data !== 'object' || Object.keys(data).length === 0) {
      return res.status(400).json({ error: 'Invalid data format' });
    }

    // Store data in the in-memory database
    Object.assign(replicatedData, data);

    console.log('Data replicated successfully:', data);
    res.status(200).json({ message: 'Data replicated successfully' });
  } catch (error) {
    console.error('Error replicating data:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.get('/backup/data', (req, res) => {
  res.status(200).json(replicatedData);
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
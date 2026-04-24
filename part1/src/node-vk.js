import axios from 'axios';

try {
  const response = await axios.get('https://vk.com');
  console.log('Status:', response.status);
  console.log('Headers:', response.headers);
  console.log('Data preview:', response.data.slice(0, 300));
} catch (error) {
  console.error('Error message:', error.message);

  if (error.response) {
    console.log('Status:', error.response.status);
    console.log('Headers:', error.response.headers);
  }
}
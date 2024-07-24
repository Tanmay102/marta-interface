export default async function handler(req, res) {
    try {
      const response = await fetch('https://developerservices.itsmarta.com:18096/itsmarta/railrealtimearrivals/traindata?apiKey=717f824f-af8f-4a2f-9e2b-296650e92636');
      
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
  
      const data = await response.json();
      res.status(200).json(data);
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch data' });
    }
  }
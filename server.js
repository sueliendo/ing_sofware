const express = require('express');
const path =require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// servir archivos estáticos desde el directorio 'público' 'public' 
app.use(express.static(path.join(__dirname, 'public')));



// Una ruta general para enviar a los usuarios al index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

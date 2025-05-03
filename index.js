const express = require('express');
const path = require('path');
const app = express();
const userRoutes = require('./routes/user.routes');

app.use(express.json());
app.use('/api/users', userRoutes);

// Servir archivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});

import express from 'express';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware básico
app.use(cors());
app.use(express.json());

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({
    status: 'OK',
    timestamp: new Date().toISOString(),
    service: 'MercadoLibre Challenge Backend'
  });
});

// Endpoint básico de productos
app.get('/api/v1/products/:id', (req, res) => {
  const { id } = req.params;
  
  // Mock response para que funcione inmediatamente
  res.json({
    data: {
      id,
      title: 'Nothing Phone (3a) Pro 12gb Ram 256gb Rom Teléfono 5g Smartphone Snapdragon 7s Gen 3 Octa Cpu 6.77\'\' Amoled Pantalla 120hz 3000 Nits Nfc Bluetooth 5.4 Color Negro',
      description: 'Capacidad y eficiencia Con su potente procesador y memoria RAM de 12 GB tu equipo alcanzará un alto rendimiento con gran velocidad de transmisión de contenidos y ejecutará múltiples aplicaciones a la vez sin demoras. Capacidad de almacenamiento ilimitada Olvídate de borrar. Con su memoria interna de 256 GB podrás descargar todos los archivos y aplicaciones que necesites, guardar fotos y almacenar tus películas, series y videos favoritos para reproducirlos cuando quieras.',
      price: {
        amount: 9599.53,
        currency: 'MXN'
      },
      images: [
        'https://http2.mlstatic.com/D_NQ_NP_2X_676234-MLA85338913814_062025-F.webp'
      ],
      seller: {
        id: '1',
        name: 'NOTHING TECH',
        reputation: 4.8
      }
    },
    meta: {
      timestamp: new Date().toISOString(),
      version: '1.0'
    }
  });
});

// 404 handler
app.use('*', (req, res) => {
  res.status(404).json({
    error: {
      code: 'ROUTE_NOT_FOUND',
      message: 'The requested route was not found'
    }
  });
});

app.listen(PORT, () => {
  console.log(`🚀 Backend server running on port ${PORT}`);
  console.log(`📍 Health check: http://localhost:${PORT}/health`);
  console.log(`📦 API: http://localhost:${PORT}/api/v1/products/MLA123456789`);
});
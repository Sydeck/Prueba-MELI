import { ExpressApp } from './infrastructure/config/ExpressApp';

const PORT = process.env.PORT || '3001';
const expressApp = new ExpressApp();
const app = expressApp.getApp();
app.listen(PORT, () => {
  console.log(`🚀 Backend server running on port ${PORT}`);
  console.log(`📍 Health check: http://localhost:${PORT}/health`);
  console.log(`📦 API: http://localhost:${PORT}/api/v1/products/MLA987654321`);
});

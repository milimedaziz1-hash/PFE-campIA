//point d’entrée du backend.js(le chef d’orchestre)

console.log("🚀 server.js est bien exécuté");

require("dotenv").config();
const app = require("./app");
const connectDB = require("./config/db");

console.log("DEBUG typeof connectDB =", typeof connectDB);

const PORT = process.env.PORT || 5000;

async function start() {
  try {
    console.log("⏳ Connexion à MongoDB...");
    await connectDB();
    console.log("✅ MongoDB connecté avec succès");

    app.listen(PORT, () => {
      console.log(`✅ Backend démarré sur http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error("❌ Erreur lors du démarrage du backend");
    console.error(error);
    process.exit(1);
  }
}

start();

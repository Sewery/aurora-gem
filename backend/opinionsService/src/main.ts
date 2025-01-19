import cors from "cors";
import "dotenv/config";
import express from "express";
import sequelizeConnection from "./db/config";
import routes from "./api/routes";
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = process.env.OPINIONS_SERVICE_PORT || 3003;

app.use("/", routes);

(async () => {
  try {
    await sequelizeConnection.sync();
    console.log("Database synced successfully, for opinions service.");

    app.listen(PORT, () => {
      console.log(`Opinions service running at http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error("Failed to sync database:", error);
    process.exit(1);
  }
})();

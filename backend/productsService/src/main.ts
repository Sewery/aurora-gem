import cors from "cors";
import "dotenv/config";
import express from "express";
import sequelizeConnection from "./db/config";
import routes from "./api/routes";
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = process.env.PRODUCTS_SERVICE_PORT || 3001;

app.use("/", routes);

(async () => {
  try {
    await sequelizeConnection.sync();
    console.log("Database synced successfully, for products service.");

    app.listen(PORT, () => {
      console.log(`Products service running at http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error("Failed to sync database:", error);
    process.exit(1);
  }
})();

import cors from "cors";
import "dotenv/config";
import express from "express";
import sequelizeConnection from "./db/config";
import routes from "./api/routes";
// import AuthorizedMiddleware from "./authMiddleware"
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = process.env.ORDERS_SERVICE_PORT || 3002;
// app.use(AuthorizedMiddleware)
app.use("/", routes);

(async () => {
  try {
    await sequelizeConnection.sync();
    console.log("Database synced successfully, for orders service.");

    app.listen(PORT, () => {
      console.log(`Orders service running at http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error("Failed to sync database:", error);
    process.exit(1);
  }
})();

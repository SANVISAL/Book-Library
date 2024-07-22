import express from "express";
import { RegisterRoutes } from "./routes/v1/routes";
import rateLimit from "express-rate-limit";
import morgan from "morgan";
import helmet from "helmet";
import cors from "cors";
import errorHandler from "./middleware/error-handler";
import swaggerUi from "swagger-ui-express";
import * as swaggerDocument from "../public/UserSign/swagger.json";
import redoc from "redoc-express";
import fs from "fs";
import path from "path";
const app = express();

// Middleware setup
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));
app.use(helmet());
app.use(cors());

// Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100,
});
app.use(limiter);
RegisterRoutes(app);

// Swagger documentation setup

const swaggerPath = path.join(__dirname, "../public/UserSign/swagger.json");
app.get("/swagger.json", (req, res) => {
  if (fs.existsSync(swaggerPath)) {
    res.sendFile(swaggerPath);
  } else {
    res.status(404).send("Swagger JSON not found");
  }
});
// Serve Redoc documentation
app.get(
  "/wiki-docs",
  redoc({
    title: "API Docs",
    specUrl: "/swagger.json",
    redocOptions: {
      theme: {
        colors: {
          primary: {
            main: "#6EC5AB",
          },
        },
        typography: {
          fontFamily: `"museo-sans", 'Helvetica Neue', Helvetica, Arial, sans-serif`,
          fontSize: "15px",
          lineHeight: "1.5",
          code: {
            code: "#87E8C7",
            backgroundColor: "#4D4D4E",
          },
        },
        menu: {
          backgroundColor: "#ffffff",
        },
      },
    },
  })
);

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Error handling middleware
app.use(errorHandler);

app.use(
  (
    err: any,
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) => {
    console.error(err.stack);
    res.status(500).send("Something went wrong!");
  }
);

// 404 handling
app.use((req: express.Request, res: express.Response) => {
  res.status(404).send("Not Found");
});

export default app;

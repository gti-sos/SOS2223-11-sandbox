// Importaciones

import path from 'path';

import express from "express";

import cors from "cors";

var app = express();

var port = process.env.PORT || 12345;

app.use(express.json());

app.use(cors());

// Rutas para carpetas diferentes

// --- Versión 1 ---

import {backend_igrv1} from "./backend/api/v1/index_igr.js";

import {backend_cacv1} from "./backend/api/v1/index_cac.js";

import {backend_vrjv1} from "./backend/api/v1/index_vrj.js";

// --- Versión 2 ---

import {backend_igr} from "./backend/api/v2/index_igr.js";

import {backend_cac} from "./backend/api/v2/index_cac.js";

import {backend_vrj} from "./backend/api/v2/index_vrj.js";

import { handler } from "./frontend/build/handler.js";

//--- firebase ---
import {backend_firebase} from "./backend/api/firebase/realtime-database-m.js";

// --- Versión 1 ---

backend_igrv1(app);

backend_cacv1(app);

backend_vrjv1(app);

// --- Versión 2 ---

backend_igr(app);

backend_cac(app);

backend_vrj(app);

// --- Versión 2 ---
backend_firebase(app);

app.use(handler);

app.use('/react', express.static(path.join(process.cwd(), 'frontend/react/react-frontend/build')));

app.listen(port, () => {

    console.log(`Server ready in port ${port}`);

});

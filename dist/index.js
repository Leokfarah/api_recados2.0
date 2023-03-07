"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const routes_1 = __importDefault(require("./routes"));
const pg_helper_1 = require("./database/pg-helper");
const api = (0, express_1.default)();
const port = process.env.PORT || 8080;
api.use(express_1.default.json(), (0, cors_1.default)());
(0, routes_1.default)(api);
pg_helper_1.pgHelper.connect().then(() => {
    api.listen(port, () => console.log(`Odete de patinete na porta: ${port}`));
}).catch((error) => console.error(error));
//# sourceMappingURL=index.js.map
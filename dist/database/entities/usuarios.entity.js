"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsuariosEntity = void 0;
const typeorm_1 = require("typeorm");
const recados_entity_1 = require("./recados.entity");
const uuid_1 = require("uuid");
let UsuariosEntity = class UsuariosEntity extends typeorm_1.BaseEntity {
    idUsuario;
    email;
    senha;
    dataCriacao;
    dataAlteracao;
    recados;
    beforeInsert() {
        this.idUsuario = (0, uuid_1.v4)();
    }
};
__decorate([
    (0, typeorm_1.PrimaryColumn)(),
    __metadata("design:type", String)
], UsuariosEntity.prototype, "idUsuario", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], UsuariosEntity.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], UsuariosEntity.prototype, "senha", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], UsuariosEntity.prototype, "dataCriacao", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], UsuariosEntity.prototype, "dataAlteracao", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => recados_entity_1.RecadosEntity, (recados) => recados.usuarios),
    __metadata("design:type", Array)
], UsuariosEntity.prototype, "recados", void 0);
__decorate([
    (0, typeorm_1.BeforeInsert)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], UsuariosEntity.prototype, "beforeInsert", null);
UsuariosEntity = __decorate([
    (0, typeorm_1.Entity)({ name: "usuarios" })
], UsuariosEntity);
exports.UsuariosEntity = UsuariosEntity;
//# sourceMappingURL=usuarios.entity.js.map
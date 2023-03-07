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
exports.RecadosEntity = void 0;
const typeorm_1 = require("typeorm");
const usuarios_entity_1 = require("./usuarios.entity");
const uuid_1 = require("uuid");
let RecadosEntity = class RecadosEntity extends typeorm_1.BaseEntity {
    idRecado;
    idUsuario;
    titulo;
    descricao;
    data;
    arquivado;
    deletado;
    dataCriacao;
    dataAlteracao;
    usuarios;
    beforeInsert() {
        this.arquivado = false;
        this.deletado = false;
        this.idRecado = (0, uuid_1.v4)();
    }
};
__decorate([
    (0, typeorm_1.PrimaryColumn)(),
    __metadata("design:type", String)
], RecadosEntity.prototype, "idRecado", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], RecadosEntity.prototype, "idUsuario", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], RecadosEntity.prototype, "titulo", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], RecadosEntity.prototype, "descricao", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], RecadosEntity.prototype, "data", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Boolean)
], RecadosEntity.prototype, "arquivado", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Boolean)
], RecadosEntity.prototype, "deletado", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], RecadosEntity.prototype, "dataCriacao", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], RecadosEntity.prototype, "dataAlteracao", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => usuarios_entity_1.UsuariosEntity, (usuarios) => usuarios.recados),
    (0, typeorm_1.JoinColumn)({ name: 'idUsuario' }),
    __metadata("design:type", usuarios_entity_1.UsuariosEntity)
], RecadosEntity.prototype, "usuarios", void 0);
__decorate([
    (0, typeorm_1.BeforeInsert)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], RecadosEntity.prototype, "beforeInsert", null);
RecadosEntity = __decorate([
    (0, typeorm_1.Entity)({ name: "recados" })
], RecadosEntity);
exports.RecadosEntity = RecadosEntity;
//# sourceMappingURL=recados.entity.js.map
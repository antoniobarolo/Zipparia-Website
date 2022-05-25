"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
const app = require("teem");
const Pedido = require("../../models/Pedido");
class PedidoApiRoute {
    async listar(req, res) {
        let lista = await Pedido.listar();
        res.json(lista);
    }
    async obter(req, res) {
        let erro = null;
        let id = parseInt(req.params["id"]);
        let pedido = null;
        if (!id) {
            erro = "ID inválido";
        }
        else {
            pedido = await Pedido.obter(id);
            if (!pedido) {
                erro = "Pedido não encontrado!";
            }
        }
        if (erro) {
            res.status(400).json(erro);
        }
        else {
            res.json(pedido);
        }
    }
    async obterPizzasDoPedido(req, res) {
        let erro = null;
        let id = parseInt(req.params["id"]);
        let pizzas;
        if (!id) {
            erro = "ID inválido";
        }
        else {
            pizzas = await Pedido.obterPizzasDoPedido(id);
            if (!pizzas) {
                erro = "Pedido não encontrado!";
            }
        }
        if (erro) {
            res.status(400).json(erro);
        }
        else {
            res.json(pizzas);
        }
    }
    async criar(req, res) {
        let erro = null;
        let pedido = req.body;
        erro = await Pedido.criar(pedido);
        if (erro) {
            res.status(400).json(erro);
        }
        else {
            res.json(true);
        }
    }
    async excluir(req, res) {
        let erro = null;
        let id = parseInt(req.params["id"]);
        if (isNaN(id)) {
            erro = "Id inválido";
        }
        else {
            erro = await Pedido.excluir(id);
        }
        if (erro) {
            res.status(400).json(erro);
        }
        else {
            res.json(true);
        }
    }
}
__decorate([
    app.route.methodName("/obter/:id")
], PedidoApiRoute.prototype, "obter", null);
__decorate([
    app.route.methodName("/obterPizzasDoPedido/:id")
], PedidoApiRoute.prototype, "obterPizzasDoPedido", null);
__decorate([
    app.http.post()
], PedidoApiRoute.prototype, "criar", null);
__decorate([
    app.route.methodName("/excluir/:id")
], PedidoApiRoute.prototype, "excluir", null);
module.exports = PedidoApiRoute;
//# sourceMappingURL=pedido.js.map
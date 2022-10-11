"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = function (knex) {
    return __awaiter(this, void 0, void 0, function* () {
        // Deletes ALL existing entries
        yield knex("tasks").del();
        yield knex("tasks").insert([
            {
                id: 1,
                name: "jjjj",
                description: "jjjjj",
                created_at: new Date(),
                updated_at: new Date(),
            },
            {
                id: 2,
                name: "jjjj",
                description: "jjjjj",
                created_at: new Date(),
                updated_at: new Date(),
            },
            {
                id: 3,
                name: "jjjj",
                description: "jjjjj",
                created_at: new Date(),
                updated_at: new Date(),
            },
        ]);
    });
};

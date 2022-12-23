import {useState} from "#app"

export const isMenuOpen = () => useState("isMenuOpen", () => false)
import React, { Component } from "react";
import ReactDOM from "react-dom";
import MainScreen from "./js/components/container/MainScreen.jsx";

const wrapper = document.getElementById("root");
wrapper ? ReactDOM.render(<MainScreen />, wrapper) : false;

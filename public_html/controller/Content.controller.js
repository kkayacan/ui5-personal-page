sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"../model/formatter"
], function (Controller, formatter) {
	"use strict";

	return Controller.extend("com.keremkayacan.base.controller.Content", {

		formatter: formatter,

		onInit: function () {

		}

	});
});
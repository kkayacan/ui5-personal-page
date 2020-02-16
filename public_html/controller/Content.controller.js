sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"../model/formatter"
], function (Controller, formatter) {
	"use strict";

	return Controller.extend("com.keremkayacan.base.controller.Content", {

		formatter: formatter,

		onInit: function () {

		},

		onImagePress: function (oEvent) {
			window.open(oEvent.getSource().getTooltip_Text(), "_blank");
		},

		onTilePress: function (oEvent) {
			window.open(oEvent.getSource().getImageDescription(), "_blank");
		}

	});
});
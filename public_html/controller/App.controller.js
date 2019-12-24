sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("com.keremkayacan.base.controller.App", {

		onInit: function () {

		},

		onAfterRendering: function () {
			sap.ui.core.BusyIndicator.hide();
		}

	});

});
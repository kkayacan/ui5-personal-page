sap.ui.define([
	"sap/ui/core/mvc/Controller",
	'sap/ui/core/Fragment'
], function (Controller, Fragment) {
	"use strict";

	return Controller.extend("com.keremkayacan.base.controller.App", {

		onInit: function () {

		},

		onAfterRendering: function () {
			sap.ui.core.BusyIndicator.hide();
		},

		onExit: function () {
			if (this._oPopover) {
				this._oPopover.destroy();
			}
		},

		onInfoPress: function (oEvent) {
			var oButton = oEvent.getSource();

			if (!this._oPopover) {
				Fragment.load({
					name: "com.keremkayacan.base.view.infoPopover",
					controller: this
				}).then(function (oPopover) {
					this._oPopover = oPopover;
					this.getView().addDependent(this._oPopover);
					this._oPopover.bindElement("/ProductCollection/0");
					this._oPopover.openBy(oButton);
				}.bind(this));
			} else {
				this._oPopover.openBy(oButton);
			}
		},

		handleCloseButton: function (oEvent) {
			this._oPopover.close();
		}

	});

});
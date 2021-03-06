define(['exports', './dialog-controller'], function (exports, dialogController) { 'use strict';

  var UxDialogFooter = (function () {
      function UxDialogFooter(controller) {
          this.controller = controller;
          this.buttons = [];
          this.useDefaultButtons = false;
      }
      UxDialogFooter.isCancelButton = function (value) {
          return value === 'Cancel';
      };
      UxDialogFooter.prototype.close = function (buttonValue) {
          if (UxDialogFooter.isCancelButton(buttonValue)) {
              this.controller.cancel(buttonValue);
          }
          else {
              this.controller.ok(buttonValue);
          }
      };
      UxDialogFooter.prototype.useDefaultButtonsChanged = function (newValue) {
          if (newValue) {
              this.buttons = ['Cancel', 'Ok'];
          }
      };
      UxDialogFooter.inject = [dialogController.DialogController];
      UxDialogFooter.$view = "<template>\n  <slot></slot>\n  <template if.bind=\"buttons.length > 0\">\n    <button type=\"button\"\n      class=\"btn btn-default\"\n      repeat.for=\"button of buttons\"\n      click.trigger=\"close(button)\">\n      ${button}\n    </button>\n  </template>\n</template>";
      UxDialogFooter.$resource = {
          name: 'ux-dialog-footer',
          bindables: ['buttons', 'useDefaultButtons']
      };
      return UxDialogFooter;
  }());

  exports.UxDialogFooter = UxDialogFooter;

});
//# sourceMappingURL=ux-dialog-footer.js.map

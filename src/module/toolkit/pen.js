/**
 * @author: Andy.Lv
 * @description: 钢笔工具
 *
 */
;
(function (Ps) {
  'use strict';

  window[Ps].module("ToolKit.pen", function (P) {
    return {
      process: function () {
        var canvas = this.canvas,
          hue = 1,
          flag = 0,
          context = canvas.getContext('2d');

        canvas.addEventListener('mousemove', onMouseMove, false);
        canvas.addEventListener('mousedown', onMouseDown, false);
        canvas.addEventListener('mouseup', onMouseUp, false);
        canvas.addEventListener('mouseleave', onMouseUp, false);

        function onMouseMove(e) {
          if (flag === 1) {
            context.lineTo(e.layerX, e.layerY);
            context.lineWidth = 5;
            context.strokeStyle = 'hsl(' + hue + ',50%,50%)';
            context.shadowColor = 'white';
            context.shadowBlur = 10;
            context.stroke();
          }
        }

        function onMouseDown() {
          flag = 1;
        }

        function onMouseUp() {
          flag = 0;
        }
      }
    };
  });

})("psLib");

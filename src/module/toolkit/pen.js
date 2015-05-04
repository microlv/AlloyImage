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
      process: function (img) {

        var iw = img.width, ih = img.height,
          canvas = document.createElement('canvas'),
          context = canvas.getContext("2d"),
          hue = 1, flag = 0;

        canvas.width = iw;
        canvas.height = ih;
        context.drawImage(img, 0, 0, iw, ih);

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
          else {
            context.moveTo(e.layerX, e.layerY);
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

__d(function(_g,_r,_i,_a,_m,_e2,_d){Object.defineProperty(_e2,"__esModule",{value:!0}),_e2.calculators=_e2.TrackerType=_e2.SupportedModels=void 0,_e2.createDetector=function(t,e){return s(this,void 0,void 0,function(){var n,i;return u(this,function(r){switch(t){case Ft.PoseNet:return[2,Ee(e)];case Ft.BlazePose:if(i=void 0,null!=(n=e)){if("tfjs"===n.runtime)return[2,Pt(e)];if("mediapipe"===n.runtime)return[2,T(e)];i=n.runtime}throw new Error("Expect modelConfig.runtime to be either 'tfjs' "+"or 'mediapipe', but got ".concat(i));case Ft.MoveNet:return[2,jt(e)];default:throw new Error("".concat(t," is not a supported model name."))}})})},_e2.util=_e2.movenet=void 0;var t=_r(_d[0]),e=_r(_d[1]),n=_r(_d[2]),i=_r(_d[3]),r=function(t,e){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])})(t,e)};function o(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function n(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}var a=function(){return(a=Object.assign||function(t){for(var e,n=1,i=arguments.length;n<i;n++)for(var r in e=arguments[n])Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t}).apply(this,arguments)};function s(t,e,n,i){return new(n||(n=Promise))(function(r,o){function a(t){try{u(i.next(t))}catch(t){o(t)}}function s(t){try{u(i.throw(t))}catch(t){o(t)}}function u(t){var e;t.done?r(t.value):(e=t.value,e instanceof n?e:new n(function(t){t(e)})).then(a,s)}u((i=i.apply(t,e||[])).next())})}function u(t,e){var n,i,r,o,a={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return o={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function s(o){return function(s){return(function(o){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,i&&(r=2&o[0]?i.return:o[0]?i.throw||((r=i.return)&&r.call(i),0):i.next)&&!(r=r.call(i,o[1])).done)return r;switch(i=0,r&&(o=[2&o[0],r.value]),o[0]){case 0:case 1:r=o;break;case 4:return a.label++,{value:o[1],done:!1};case 5:a.label++,i=o[1],o=[0];continue;case 7:o=a.ops.pop(),a.trys.pop();continue;default:if(!((r=(r=a.trys).length>0&&r[r.length-1])||6!==o[0]&&2!==o[0])){a=0;continue}if(3===o[0]&&(!r||o[1]>r[0]&&o[1]<r[3])){a.label=o[1];break}if(6===o[0]&&a.label<r[1]){a.label=r[1],r=o;break}if(r&&a.label<r[2]){a.label=r[2],a.ops.push(o);break}r[2]&&a.ops.pop(),a.trys.pop();continue}o=e.call(t,a)}catch(t){o=[6,t],i=0}finally{n=r=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}})([o,s])}}}function l(t,e,n){if(n||2===arguments.length)for(var i,r=0,o=e.length;r<o;r++)!i&&r in e||(i||(i=Array.prototype.slice.call(e,0,r)),i[r]=e[r]);return t.concat(i||Array.prototype.slice.call(e))}var h=["nose","left_eye","right_eye","left_ear","right_ear","left_shoulder","right_shoulder","left_elbow","right_elbow","left_wrist","right_wrist","left_hip","right_hip","left_knee","right_knee","left_ankle","right_ankle"],c=["nose","left_eye_inner","left_eye","left_eye_outer","right_eye_inner","right_eye","right_eye_outer","left_ear","right_ear","mouth_left","mouth_right","left_shoulder","right_shoulder","left_elbow","right_elbow","left_wrist","right_wrist","left_pinky","right_pinky","left_index","right_index","left_thumb","right_thumb","left_hip","right_hip","left_knee","right_knee","left_ankle","right_ankle","left_heel","right_heel","left_foot_index","right_foot_index"],p={left:[1,2,3,7,9,11,13,15,17,19,21,23,25,27,29,31],right:[4,5,6,8,10,12,14,16,18,20,22,24,26,28,30,32],middle:[0]},d={left:[1,3,5,7,9,11,13,15],right:[2,4,6,8,10,12,14,16],middle:[0]},f=[[0,1],[0,2],[1,3],[2,4],[5,6],[5,7],[5,11],[6,8],[6,12],[7,9],[8,10],[11,12],[11,13],[12,14],[13,15],[14,16]],m=[[0,1],[0,4],[1,2],[2,3],[3,7],[4,5],[5,6],[6,8],[9,10],[11,12],[11,13],[11,23],[12,14],[14,16],[12,24],[13,15],[15,17],[16,18],[16,20],[15,17],[15,19],[15,21],[16,22],[17,19],[18,20],[23,25],[23,24],[24,26],[25,27],[26,28],[27,29],[28,30],[27,31],[28,32],[29,31],[30,32]];function g(t){return t instanceof SVGAnimatedLength?t.baseVal.value:t}function y(t){return s(this,void 0,void 0,function(){var n,i;return u(this,function(r){switch(r.label){case 0:return n=document.createElement("canvas"),t instanceof e.Tensor?[4,e.browser.toPixels(t,n)]:[3,2];case 1:return r.sent(),[3,3];case 2:n.width=g(t.width),n.height=g(t.height),i=n.getContext("2d"),t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0),r.label=3;case 3:return[2,n]}})})}function v(t){return s(this,void 0,void 0,function(){var n,i,r,o,a,s;return u(this,function(u){switch(u.label){case 0:return t instanceof e.Tensor?(n=t.shape.slice(0,2),i=n[0],r=n[1],o=ImageData.bind,[4,e.browser.toPixels(t)]):[3,2];case 1:return[2,new(o.apply(ImageData,[void 0,u.sent(),r,i]))];case 2:return a=document.createElement("canvas"),s=a.getContext("2d"),a.width=g(t.width),a.height=g(t.height),s.drawImage(t,0,0),[2,s.getImageData(0,0,a.width,a.height)]}})})}function x(t){return s(this,void 0,void 0,function(){var n,i;return u(this,function(r){switch(r.label){case 0:return t instanceof SVGImageElement||t instanceof OffscreenCanvas?[4,y(t)]:[3,2];case 1:return i=r.sent(),[3,3];case 2:i=t,r.label=3;case 3:return n=i,[2,e.browser.fromPixels(n,4)]}})})}function w(t){if(t<0||t>=256)throw new Error("Mask value must be in range [0, 255] but got ".concat(t));if(!Number.isInteger(t))throw new Error("Mask value must be an integer but got ".concat(t))}var k={runtime:"mediapipe",enableSmoothing:!0,enableSegmentation:!1,smoothSegmentation:!0,modelType:"full"},b=(function(){function t(t){this.mask=t}return t.prototype.toCanvasImageSource=function(){return s(this,void 0,void 0,function(){return u(this,function(t){return[2,this.mask]})})},t.prototype.toImageData=function(){return s(this,void 0,void 0,function(){return u(this,function(t){return[2,v(this.mask)]})})},t.prototype.toTensor=function(){return s(this,void 0,void 0,function(){return u(this,function(t){return[2,x(this.mask)]})})},t.prototype.getUnderlyingType=function(){return"canvasimagesource"},t})();function M(t){return w(t),"person"}var S=(function(){function n(e){var n,i=this;switch(this.width=0,this.height=0,this.selfieMode=!1,this.poseSolution=new t.Pose({locateFile:function(t,n){if(e.solutionPath){var i=e.solutionPath.replace(/\/+$/,"");return"".concat(i,"/").concat(t)}return"".concat(n,"/").concat(t)}}),e.modelType){case"lite":n=0;break;case"heavy":n=2;break;default:n=1}this.poseSolution.setOptions({modelComplexity:n,smoothLandmarks:e.enableSmoothing,enableSegmentation:e.enableSegmentation,smoothSegmentation:e.smoothSegmentation,selfieMode:this.selfieMode}),this.poseSolution.onResults(function(t){if(i.height=t.image.height,i.width=t.image.width,null==t.poseLandmarks)i.poses=[];else{var e=i.translateOutput(t.poseLandmarks,t.poseWorldLandmarks);t.segmentationMask&&(e.segmentation={maskValueToLabel:M,mask:new b(t.segmentationMask)}),i.poses=[e]}})}return n.prototype.translateOutput=function(t,e){var n=this,i={keypoints:t.map(function(t,e){return{x:t.x*n.width,y:t.y*n.height,z:t.z,score:t.visibility,name:c[e]}})};return null!=e&&(i.keypoints3D=e.map(function(t,e){return{x:t.x,y:t.y,z:t.z,score:t.visibility,name:c[e]}})),i},n.prototype.estimatePoses=function(t,n,i){return s(this,void 0,void 0,function(){var r,o;return u(this,function(a){switch(a.label){case 0:return n&&n.flipHorizontal&&n.flipHorizontal!==this.selfieMode&&(this.selfieMode=n.flipHorizontal,this.poseSolution.setOptions({selfieMode:this.selfieMode})),t instanceof e.Tensor?(o=ImageData.bind,[4,e.browser.toPixels(t)]):[3,2];case 1:return r=new(o.apply(ImageData,[void 0,a.sent(),t.shape[1],t.shape[0]])),[3,3];case 2:r=t,a.label=3;case 3:return t=r,[4,this.poseSolution.send({image:t},i)];case 4:return a.sent(),[2,this.poses]}})})},n.prototype.dispose=function(){this.poseSolution.close()},n.prototype.reset=function(){this.poseSolution.reset()},n.prototype.initialize=function(){return this.poseSolution.initialize()},n})();function T(t){return s(this,void 0,void 0,function(){var e,n;return u(this,function(i){switch(i.label){case 0:return e=(function(t){if(null==t)return a({},k);var e=a({},t);return e.runtime="mediapipe",null==e.enableSegmentation&&(e.enableSegmentation=k.enableSegmentation),null==e.enableSmoothing&&(e.enableSmoothing=k.enableSmoothing),null==e.smoothSegmentation&&(e.smoothSegmentation=k.smoothSegmentation),null==e.modelType&&(e.modelType=k.modelType),e})(t),[4,(n=new S(e)).initialize()];case 1:return i.sent(),[2,n]}})})}function P(t){return t instanceof e.Tensor?{height:t.shape[0],width:t.shape[1]}:{height:t.height,width:t.width}}function _(t){return t-2*Math.PI*Math.floor((t+Math.PI)/(2*Math.PI))}function F(t){return t instanceof e.Tensor?t:e.browser.fromPixels(t)}function z(t,e,n){return O(n,"inputResolution"),[1/n.width*t[0][0]*e.width,1/n.height*t[0][1]*e.width,t[0][3]*e.width,1/n.width*t[1][0]*e.height,1/n.height*t[1][1]*e.height,t[1][3]*e.height,0,0]}function O(t,n){e.util.assert(0!==t.width,function(){return"".concat(n," width cannot be 0.")}),e.util.assert(0!==t.height,function(){return"".concat(n," height cannot be 0.")})}function I(t,e,n){var i=n.rotationVectorStartKeypointIndex,r=n.rotationVectorEndKeypointIndex,o=t.locationData,a=o.relativeKeypoints[i].x*e.width,s=o.relativeKeypoints[i].y*e.height,u=o.relativeKeypoints[r].x*e.width,l=o.relativeKeypoints[r].y*e.height,h=2*Math.sqrt((u-a)*(u-a)+(l-s)*(l-s)),c=(function(t,e,n){var i,r=t.locationData,o=n.rotationVectorStartKeypointIndex,a=n.rotationVectorEndKeypointIndex;i=n.rotationVectorTargetAngle?n.rotationVectorTargetAngle:Math.PI*n.rotationVectorTargetAngleDegree/180;var s=r.relativeKeypoints[o].x*e.width,u=r.relativeKeypoints[o].y*e.height,l=r.relativeKeypoints[a].x*e.width,h=r.relativeKeypoints[a].y*e.height;return _(i-Math.atan2(-(h-u),l-s))})(t,e,n);return{xCenter:a/e.width,yCenter:s/e.height,width:h/e.width,height:h/e.height,rotation:c}}function A(t){if(16!==t.length)throw new Error("Array length must be 16 but got ".concat(t.length));return[[t[0],t[1],t[2],t[3]],[t[4],t[5],t[6],t[7]],[t[8],t[9],t[10],t[11]],[t[12],t[13],t[14],t[15]]]}function C(t,e,n,i,r,o,a){return t[e][r]*(t[n][o]*t[i][a]-t[n][a]*t[i][o])}function E(t,e,n){var i=(e+1)%4,r=(e+2)%4,o=(e+3)%4,a=(n+1)%4,s=(n+2)%4,u=(n+3)%4;return C(t,i,r,o,a,s,u)+C(t,r,o,i,a,s,u)+C(t,o,i,r,a,s,u)}function R(t,e,n){void 0===n&&(n={ignoreRotation:!1});for(var i=[],r=0,o=t;r<o.length;r++){var s=o[r],u=s.x-.5,l=s.y-.5,h=n.ignoreRotation?0:e.rotation,c=Math.cos(h)*u-Math.sin(h)*l,p=Math.sin(h)*u+Math.cos(h)*l;c=c*e.width+e.xCenter,p=p*e.height+e.yCenter;var d=s.z*e.width,f=a({},s);f.x=c,f.y=p,f.z=d,i.push(f)}return i}function L(t,n){var i=(function(t,e,n,i){var r=(i-n)/255;return{scale:r,offset:n-0*r}})(0,0,n[0],n[1]);return(0,e.tidy)(function(){return(0,e.add)((0,e.mul)(t,i.scale),i.offset)})}function B(t,n,i){var r,o,a,s,u,l,h,c,p,d,f,m,g=n.outputTensorSize,y=n.keepAspectRatio,v=n.borderMode,x=n.outputTensorFloatRange,w=P(t),k=(function(t,e){return e?{xCenter:e.xCenter*t.width,yCenter:e.yCenter*t.height,width:e.width*t.width,height:e.height*t.height,rotation:e.rotation}:{xCenter:.5*t.width,yCenter:.5*t.height,width:t.width,height:t.height,rotation:0}})(w,i),b=(function(t,e,n){if(void 0===n&&(n=!1),!n)return{top:0,left:0,right:0,bottom:0};var i=e.height,r=e.width;O(e,"targetSize"),O(t,"roi");var o,a,s=i/r,u=t.height/t.width,l=0,h=0;return s>u?(o=t.width,a=t.width*s,h=(1-u/s)/2):(o=t.height/s,a=t.height,l=(1-s/u)/2),t.width=o,t.height=a,{top:h,left:l,right:l,bottom:h}})(k,g,y),M=(r=k,o=w.width,a=w.height,s=r.width,u=r.height,l=Math.cos(r.rotation),h=Math.sin(r.rotation),c=r.xCenter,p=r.yCenter,d=1/o,f=1/a,(m=new Array(16))[0]=s*l*1*d,m[1]=-u*h*d,m[2]=0,m[3]=(-.5*s*l*1+.5*u*h+c)*d,m[4]=s*h*1*f,m[5]=u*l*f,m[6]=0,m[7]=(-.5*u*l-.5*s*h*1+p)*f,m[8]=0,m[9]=0,m[10]=s*d,m[11]=0,m[12]=0,m[13]=0,m[14]=0,m[15]=1,A(m));return{imageTensor:(0,e.tidy)(function(){var n=F(t),i=(0,e.tensor2d)(z(M,w,g),[1,8]),r="zero"===v?"constant":"nearest",o=e.image.transform((0,e.expandDims)((0,e.cast)(n,"float32")),i,"bilinear",r,0,[g.height,g.width]);return null!=x?L(o,x):o}),padding:b,transformationMatrix:M}}function V(t,e,n,i){return 1===i?.5*(t+e):t+(e-t)*n/(i-1)}function D(t){return(0,e.tidy)(function(){var n=(function(t){return(0,e.tidy)(function(){return[(0,e.slice)(t,[0,0,0],[1,-1,1]),(0,e.slice)(t,[0,0,1],[1,-1,-1])]})})(t),i=n[0],r=n[1];return{boxes:(0,e.squeeze)(r),logits:(0,e.squeeze)(i)}})}function N(t){return null!=t&&null!=t.currentTime}function q(t){for(var e={locationData:{relativeKeypoints:[]}},n=Number.MAX_SAFE_INTEGER,i=Number.MIN_SAFE_INTEGER,r=Number.MAX_SAFE_INTEGER,o=Number.MIN_SAFE_INTEGER,a=0;a<t.length;++a){var s=t[a];n=Math.min(n,s.x),i=Math.max(i,s.x),r=Math.min(r,s.y),o=Math.max(o,s.y),e.locationData.relativeKeypoints.push({x:s.x,y:s.y})}return e.locationData.relativeBoundingBox={xMin:n,yMin:r,xMax:i,yMax:o,width:i-n,height:o-r},e}function K(t,n,i,r){return s(this,void 0,void 0,function(){var r,o,a,s,l;return u(this,function(u){switch(u.label){case 0:return t.sort(function(t,e){return Math.max.apply(Math,e.score)-Math.max.apply(Math,t.score)}),r=(0,e.tensor2d)(t.map(function(t){return[t.locationData.relativeBoundingBox.yMin,t.locationData.relativeBoundingBox.xMin,t.locationData.relativeBoundingBox.yMax,t.locationData.relativeBoundingBox.xMax]})),o=(0,e.tensor1d)(t.map(function(t){return t.score[0]})),[4,e.image.nonMaxSuppressionAsync(r,o,n,i)];case 1:return[4,(a=u.sent()).array()];case 2:return s=u.sent(),l=t.filter(function(t,e){return s.indexOf(e)>-1}),(0,e.dispose)([r,o,a]),[2,l]}})})}function U(t,e){return t.map(function(t){var n=a(a({},t),{x:t.x*e.width,y:t.y*e.height});return null!=t.z&&(n.z=t.z*e.width),n})}function H(t,n,i){return s(this,void 0,void 0,function(){var r,o,s,l,h,c,p,d,f,m,g,y,v,x,w,k,b,M,S,T,P,_,F,z;return u(this,function(u){switch(u.label){case 0:if(r=(0,e.squeeze)(n,[0]),o=r.shape,s=o[0],l=o[1],h=o[2],t.length!==h)throw new Error("Expected heatmap to have same number of channels as the number of landmarks. But got landmarks length: "+"".concat(t.length,", heatmap length: ").concat(h));return c=[],[4,r.buffer()];case 1:for(p=u.sent(),d=0;d<t.length;d++)if(f=t[d],m=a({},f),c.push(m),g=Math.trunc(m.x*l),y=Math.trunc(m.y*s),!(g<0||g>=l||y<0||g>=s)){for(v=Math.trunc((i.kernelSize-1)/2),x=Math.max(0,g-v),w=Math.min(l,g+v+1),k=Math.max(0,y-v),b=Math.min(s,y+v+1),M=0,S=0,T=0,P=0,_=k;_<b;++_)for(F=x;F<w;++F)z=p.get(_,F,d),M+=z,P=Math.max(P,z),S+=F*z,T+=_*z;P>=i.minConfidenceToRefine&&M>0&&(m.x=S/l/M,m.y=T/s/M)}return r.dispose(),[2,c]}})})}function j(t,e){var n=e.left,i=e.top,r=e.left+e.right,o=e.top+e.bottom;return t.map(function(t){return a(a({},t),{x:(t.x-n)/(1-r),y:(t.y-i)/(1-o),z:t.z/(1-r)})})}function G(t,n,i){return"webgl"===(0,e.getBackend)()?(function(t,n,i){var r=i.combineWithPreviousRatio.toFixed(2),o={variableNames:["prevMask","newMask"],outputShape:t.shape,userCode:"\n  void main() {\n      ivec2 coords = getOutputCoords();\n      int height = coords[0];\n      int width = coords[1];\n\n      float prevMaskValue = getPrevMask(height, width);\n      float newMaskValue = getNewMask(height, width);\n\n      /*\n      * Assume p := newMaskValue\n      * H(p) := 1 + (p * log(p) + (1-p) * log(1-p)) / log(2)\n      * uncertainty alpha(p) =\n      *   Clamp(1 - (1 - H(p)) * (1 - H(p)), 0, 1) [squaring the\n      * uncertainty]\n      *\n      * The following polynomial approximates uncertainty alpha as a\n      * function of (p + 0.5):\n      */\n      const float c1 = 5.68842;\n      const float c2 = -0.748699;\n      const float c3 = -57.8051;\n      const float c4 = 291.309;\n      const float c5 = -624.717;\n      float t = newMaskValue - 0.5;\n      float x = t * t;\n\n      float uncertainty =\n        1.0 - min(1.0, x * (c1 + x * (c2 + x * (c3 + x * (c4 + x * c5)))));\n\n      float outputValue = newMaskValue + (prevMaskValue - newMaskValue) *\n                             (uncertainty * ".concat(r,");\n\n      setOutput(outputValue);\n    }\n")},a=(0,e.backend)();return(0,e.tidy)(function(){var i=a.compileAndRun(o,[t,n]);return(0,e.engine)().makeTensorFromDataId(i.dataId,i.shape,i.dtype)})})(t,n,i):(0,e.tidy)(function(){var r=(0,e.sub)(n,.5),o=(0,e.square)(r),a=(0,e.sub)(1,(0,e.minimum)(1,(0,e.mul)(o,(0,e.add)(5.68842,(0,e.mul)(o,(0,e.add)(-.748699,(0,e.mul)(o,(0,e.add)(-57.8051,(0,e.mul)(o,(0,e.add)(291.309,(0,e.mul)(o,-624.717)))))))))));return(0,e.add)(n,(0,e.mul)((0,e.sub)(t,n),(0,e.mul)(a,i.combineWithPreviousRatio)))})}function X(t,n,i){return s(this,void 0,void 0,function(){var r,o,a,s,l;return u(this,function(u){switch(u.label){case 0:return r=t[0],o=t[1],a=(function(t,n,i){return(0,e.tidy)(function(){var r,o,a,s;i.reverseOutputOrder?(o=(0,e.squeeze)((0,e.slice)(t,[0,i.boxCoordOffset+0],[-1,1])),r=(0,e.squeeze)((0,e.slice)(t,[0,i.boxCoordOffset+1],[-1,1])),s=(0,e.squeeze)((0,e.slice)(t,[0,i.boxCoordOffset+2],[-1,1])),a=(0,e.squeeze)((0,e.slice)(t,[0,i.boxCoordOffset+3],[-1,1]))):(r=(0,e.squeeze)((0,e.slice)(t,[0,i.boxCoordOffset+0],[-1,1])),o=(0,e.squeeze)((0,e.slice)(t,[0,i.boxCoordOffset+1],[-1,1])),a=(0,e.squeeze)((0,e.slice)(t,[0,i.boxCoordOffset+2],[-1,1])),s=(0,e.squeeze)((0,e.slice)(t,[0,i.boxCoordOffset+3],[-1,1]))),o=(0,e.add)((0,e.mul)((0,e.div)(o,i.xScale),n.w),n.x),r=(0,e.add)((0,e.mul)((0,e.div)(r,i.yScale),n.h),n.y),i.applyExponentialOnBoxSize?(a=(0,e.mul)((0,e.exp)((0,e.div)(a,i.hScale)),n.h),s=(0,e.mul)((0,e.exp)((0,e.div)(s,i.wScale)),n.w)):(a=(0,e.mul)((0,e.div)(a,i.hScale),n.h),s=(0,e.mul)((0,e.div)(s,i.wScale),n.h));var u=(0,e.sub)(r,(0,e.div)(a,2)),l=(0,e.sub)(o,(0,e.div)(s,2)),h=(0,e.add)(r,(0,e.div)(a,2)),c=(0,e.add)(o,(0,e.div)(s,2)),p=(0,e.concat)([(0,e.reshape)(u,[i.numBoxes,1]),(0,e.reshape)(l,[i.numBoxes,1]),(0,e.reshape)(h,[i.numBoxes,1]),(0,e.reshape)(c,[i.numBoxes,1])],1);if(i.numKeypoints)for(var d=0;d<i.numKeypoints;++d){var f=i.keypointCoordOffset+d*i.numValuesPerKeypoint,m=void 0,g=void 0;i.reverseOutputOrder?(m=(0,e.squeeze)((0,e.slice)(t,[0,f],[-1,1])),g=(0,e.squeeze)((0,e.slice)(t,[0,f+1],[-1,1]))):(g=(0,e.squeeze)((0,e.slice)(t,[0,f],[-1,1])),m=(0,e.squeeze)((0,e.slice)(t,[0,f+1],[-1,1])));var y=(0,e.add)((0,e.mul)((0,e.div)(m,i.xScale),n.w),n.x),v=(0,e.add)((0,e.mul)((0,e.div)(g,i.yScale),n.h),n.y);p=(0,e.concat)([p,(0,e.reshape)(y,[i.numBoxes,1]),(0,e.reshape)(v,[i.numBoxes,1])],1)}return p})})(o,n,i),s=(0,e.tidy)(function(){var t=r;return i.sigmoidScore?(null!=i.scoreClippingThresh&&(t=(0,e.clipByValue)(r,-i.scoreClippingThresh,i.scoreClippingThresh)),t=(0,e.sigmoid)(t)):t}),[4,Y(a,s,i)];case 1:return l=u.sent(),(0,e.dispose)([a,s]),[2,l]}})})}function Y(t,e,n){return s(this,void 0,void 0,function(){var i,r,o,a,s,l,h,c,p,d,f,m;return u(this,function(u){switch(u.label){case 0:return i=[],[4,t.data()];case 1:return r=u.sent(),[4,e.data()];case 2:for(o=u.sent(),a=0;a<n.numBoxes;++a)if(!(null!=n.minScoreThresh&&o[a]<n.minScoreThresh||(s=a*n.numCoords,l=W(r[s+0],r[s+1],r[s+2],r[s+3],o[a],n.flipVertically,a),(h=l.locationData.relativeBoundingBox).width<0||h.height<0))){if(n.numKeypoints>0)for((c=l.locationData).relativeKeypoints=[],p=n.numKeypoints*n.numValuesPerKeypoint,d=0;d<p;d+=n.numValuesPerKeypoint)f=s+n.keypointCoordOffset+d,m={x:r[f+0],y:n.flipVertically?1-r[f+1]:r[f+1]},c.relativeKeypoints.push(m);i.push(l)}return[2,i]}})})}function W(t,e,n,i,r,o,a){return{score:[r],ind:a,locationData:{relativeBoundingBox:{xMin:e,yMin:o?1-n:t,xMax:i,yMax:o?1-t:n,width:i-e,height:n-t}}}}function Q(t,e){return"none"===t?e:(function(t){return 1/(1+Math.exp(-t))})(e)}function Z(t,e,n,i){return s(this,void 0,void 0,function(){var r,o,a,s,l,h,c,p;return u(this,function(u){switch(u.label){case 0:return n=n||e.flipHorizontally||!1,i=i||e.flipVertically||!1,r=t.size,o=r/e.numLandmarks,[4,t.data()];case 1:for(a=u.sent(),s=[],l=0;l<e.numLandmarks;++l)h=l*o,(p={x:0,y:0}).x=n?e.inputImageWidth-a[h]:a[h],o>1&&(p.y=i?e.inputImageHeight-a[h+1]:a[h+1]),o>2&&(p.z=a[h+2]),o>3&&(p.score=Q(e.visibilityActivation,a[h+3])),s.push(p);for(c=0;c<s.length;++c)(p=s[c]).x=p.x/e.inputImageWidth,p.y=p.y/e.inputImageHeight,p.z=p.z/e.inputImageWidth/(e.normalizeZ||1);return[2,s]}})})}function $(t,e,n){var i=t.width,r=t.height,o=t.rotation;if(null==n.rotation&&null==n.rotationDegree||(o=(function(t,e){return null!=e.rotation?t+=e.rotation:null!=e.rotationDegree&&(t+=Math.PI*e.rotationDegree/180),_(t)})(o,n)),0===o)t.xCenter=t.xCenter+i*n.shiftX,t.yCenter=t.yCenter+r*n.shiftY;else{var a=(e.width*i*n.shiftX*Math.cos(o)-e.height*r*n.shiftY*Math.sin(o))/e.width,s=(e.width*i*n.shiftX*Math.sin(o)+e.height*r*n.shiftY*Math.cos(o))/e.height;t.xCenter=t.xCenter+a,t.yCenter=t.yCenter+s}if(n.squareLong){var u=Math.max(i*e.width,r*e.height);i=u/e.width,r=u/e.height}else if(n.squareShort){var l=Math.min(i*e.width,r*e.height);i=l/e.width,r=l/e.height}return t.width=i*n.scaleX,t.height=r*n.scaleY,t}function J(t,e){return t.map(function(t){var n=a(a({},t),{x:t.x/e.width,y:t.y/e.height});return null!=t.z&&(t.z=t.z/e.width),n})}var tt=(function(){function t(t){this.alpha=t,this.initialized=!1}return t.prototype.apply=function(t,e){var n;return this.initialized?n=null==e?this.storedValue+this.alpha*(t-this.storedValue):this.storedValue+this.alpha*e*Math.asinh((t-this.storedValue)/e):(n=t,this.initialized=!0),this.rawValue=t,this.storedValue=n,n},t.prototype.applyWithAlpha=function(t,e,n){return this.alpha=e,this.apply(t,n)},t.prototype.hasLastRawValue=function(){return this.initialized},t.prototype.lastRawValue=function(){return this.rawValue},t.prototype.reset=function(){this.initialized=!1},t})(),et=(function(){function t(t){this.frequency=t.frequency,this.minCutOff=t.minCutOff,this.beta=t.beta,this.thresholdCutOff=t.thresholdCutOff,this.thresholdBeta=t.thresholdBeta,this.derivateCutOff=t.derivateCutOff,this.x=new tt(this.getAlpha(this.minCutOff)),this.dx=new tt(this.getAlpha(this.derivateCutOff)),this.lastTimestamp=0}return t.prototype.apply=function(t,e,n){if(null==t)return t;var i=Math.trunc(e);if(this.lastTimestamp>=i)return t;0!==this.lastTimestamp&&0!==i&&(this.frequency=1/(1e-6*(i-this.lastTimestamp))),this.lastTimestamp=i;var r=this.x.hasLastRawValue()?(t-this.x.lastRawValue())*n*this.frequency:0,o=this.dx.applyWithAlpha(r,this.getAlpha(this.derivateCutOff)),a=this.minCutOff+this.beta*Math.abs(o),s=null!=this.thresholdCutOff?this.thresholdCutOff+this.thresholdBeta*Math.abs(o):null;return this.x.applyWithAlpha(t,this.getAlpha(a),s)},t.prototype.getAlpha=function(t){return 1/(1+this.frequency/(2*Math.PI*t))},t})(),nt=(function(){function t(t){this.config=t}return t.prototype.apply=function(t,e,n){var i=this;if(null==t)return this.reset(),null;this.initializeFiltersIfEmpty(t);var r=1;if(!this.config.disableValueScaling){if(n<this.config.minAllowedObjectScale)return l([],t,!0);r=1/n}return t.map(function(t,n){var o=a(a({},t),{x:i.xFilters[n].apply(t.x,e,r),y:i.yFilters[n].apply(t.y,e,r)});return null!=t.z&&(o.z=i.zFilters[n].apply(t.z,e,r)),o})},t.prototype.reset=function(){this.xFilters=null,this.yFilters=null,this.zFilters=null},t.prototype.initializeFiltersIfEmpty=function(t){var e=this;null!=this.xFilters&&this.xFilters.length===t.length||(this.xFilters=t.map(function(t){return new et(e.config)}),this.yFilters=t.map(function(t){return new et(e.config)}),this.zFilters=t.map(function(t){return new et(e.config)}))},t})(),it=(function(){function t(t){this.config=t,this.window=[],this.lowPassFilter=new tt(1),this.lastValue=0,this.lastValueScale=1,this.lastTimestamp=-1}return t.prototype.apply=function(t,e,n){if(null==t)return t;var i,r=Math.trunc(e);if(this.lastTimestamp>=r)return t;if(-1===this.lastTimestamp)i=1;else{for(var o=t*n-this.lastValue*this.lastValueScale,a=r-this.lastTimestamp,s=o,u=a,l=33333.333333333336*(1+this.window.length),h=0,c=this.window;h<c.length;h++){var p=c[h];if(u+p.duration>l)break;s+=p.distance,u+=p.duration}var d=s/(1e-6*u);i=1-1/(1+this.config.velocityScale*Math.abs(d)),this.window.unshift({distance:o,duration:a}),this.window.length>this.config.windowSize&&this.window.pop()}return this.lastValue=t,this.lastValueScale=n,this.lastTimestamp=r,this.lowPassFilter.applyWithAlpha(t,i)},t})(),rt=(function(){function t(t){this.config=t}return t.prototype.apply=function(t,e,n){var i=this;if(null==t)return this.reset(),null;var r=1;if(!this.config.disableValueScaling){if(n<this.config.minAllowedObjectScale)return l([],t,!0);r=1/n}return this.initializeFiltersIfEmpty(t),t.map(function(t,n){var o=a(a({},t),{x:i.xFilters[n].apply(t.x,e,r),y:i.yFilters[n].apply(t.y,e,r)});return null!=t.z&&(o.z=i.zFilters[n].apply(t.z,e,r)),o})},t.prototype.reset=function(){this.xFilters=null,this.yFilters=null,this.zFilters=null},t.prototype.initializeFiltersIfEmpty=function(t){var e=this;null!=this.xFilters&&this.xFilters.length===t.length||(this.xFilters=t.map(function(t){return new it(e.config)}),this.yFilters=t.map(function(t){return new it(e.config)}),this.zFilters=t.map(function(t){return new it(e.config)}))},t})(),ot=(function(){function t(t){if(null!=t.velocityFilter)this.keypointsFilter=new rt(t.velocityFilter);else{if(null==t.oneEuroFilter)throw new Error("Either configure velocityFilter or oneEuroFilter, but got "+"".concat(t,"."));this.keypointsFilter=new nt(t.oneEuroFilter)}}return t.prototype.apply=function(t,e,n,i,r){if(void 0===i&&(i=!1),null==t)return this.keypointsFilter.reset(),null;var o=null!=r?(function(t,e){return(t.width*e.width+t.height*e.height)/2})(r,n):1,a=i?U(t,n):t,s=this.keypointsFilter.apply(a,e,o);return i?J(s,n):s},t})(),at=(function(){function t(t){this.alpha=t.alpha}return t.prototype.apply=function(t){var e=this;if(null==t)return this.visibilityFilters=null,null;null!=this.visibilityFilters&&this.visibilityFilters.length===t.length||(this.visibilityFilters=t.map(function(t){return new tt(e.alpha)}));for(var n=[],i=0;i<t.length;++i){var r=t[i],o=a({},r);o.score=this.visibilityFilters[i].apply(r.score),n.push(o)}return n},t})(),st={reduceBoxesInLowestlayer:!1,interpolatedScaleAspectRatio:1,featureMapHeight:[],featureMapWidth:[],numLayers:5,minScale:.1484375,maxScale:.75,inputSizeHeight:224,inputSizeWidth:224,anchorOffsetX:.5,anchorOffsetY:.5,strides:[8,16,32,32,32],aspectRatios:[1],fixedAnchorSize:!0},ut={runtime:"tfjs",modelType:"full",enableSmoothing:!0,enableSegmentation:!1,smoothSegmentation:!0,detectorModelUrl:"https://tfhub.dev/mediapipe/tfjs-model/blazepose_3d/detector/1",landmarkModelUrl:"https://tfhub.dev/mediapipe/tfjs-model/blazepose_3d/landmark/full/2"},lt={maxPoses:1,flipHorizontal:!1},ht={applyExponentialOnBoxSize:!1,flipVertically:!1,ignoreClasses:[],numClasses:1,numBoxes:2254,numCoords:12,boxCoordOffset:0,keypointCoordOffset:4,numKeypoints:4,numValuesPerKeypoint:2,sigmoidScore:!0,scoreClippingThresh:100,reverseOutputOrder:!0,xScale:224,yScale:224,hScale:224,wScale:224,minScoreThresh:.5},ct={shiftX:0,shiftY:0,scaleX:1.25,scaleY:1.25,squareLong:!0},pt={outputTensorSize:{width:224,height:224},keepAspectRatio:!0,outputTensorFloatRange:[-1,1],borderMode:"zero"},dt={outputTensorSize:{width:256,height:256},keepAspectRatio:!0,outputTensorFloatRange:[0,1],borderMode:"zero"},ft={numLandmarks:39,inputImageWidth:256,inputImageHeight:256,visibilityActivation:"sigmoid",flipHorizontally:!1,flipVertically:!1},mt={numLandmarks:39,inputImageWidth:1,inputImageHeight:1,visibilityActivation:"sigmoid",flipHorizontally:!1,flipVertically:!1},gt={kernelSize:7,minConfidenceToRefine:.5},yt={alpha:.1},vt={oneEuroFilter:{frequency:30,minCutOff:.05,beta:80,derivateCutOff:1,minAllowedObjectScale:1e-6}},xt={oneEuroFilter:{frequency:30,minCutOff:.01,beta:10,derivateCutOff:1,minAllowedObjectScale:1e-6}},wt={oneEuroFilter:{frequency:30,minCutOff:.1,beta:40,derivateCutOff:1,minAllowedObjectScale:1e-6,disableValueScaling:!0}},kt={activation:"none"},bt={combineWithPreviousRatio:.7},Mt=(function(){function t(t){this.mask=t}return t.prototype.toCanvasImageSource=function(){return s(this,void 0,void 0,function(){return u(this,function(t){return[2,y(this.mask)]})})},t.prototype.toImageData=function(){return s(this,void 0,void 0,function(){return u(this,function(t){return[2,v(this.mask)]})})},t.prototype.toTensor=function(){return s(this,void 0,void 0,function(){return u(this,function(t){return[2,this.mask]})})},t.prototype.getUnderlyingType=function(){return"tensor"},t})();function St(t){return w(t),"person"}var Tt=(function(){function t(t,n,i,r,o,a){this.detectorModel=t,this.landmarkModel=n,this.enableSmoothing=i,this.enableSegmentation=r,this.smoothSegmentation=o,this.modelType=a,this.regionOfInterest=null,this.prevFilteredSegmentationMask=null,this.anchors=(function(t){null==t.reduceBoxesInLowestLayer&&(t.reduceBoxesInLowestLayer=!1),null==t.interpolatedScaleAspectRatio&&(t.interpolatedScaleAspectRatio=1),null==t.fixedAnchorSize&&(t.fixedAnchorSize=!1);for(var e=[],n=0;n<t.numLayers;){for(var i=[],r=[],o=[],a=[],s=n;s<t.strides.length&&t.strides[s]===t.strides[n];){var u=V(t.minScale,t.maxScale,s,t.strides.length);if(0===s&&t.reduceBoxesInLowestLayer)o.push(1),o.push(2),o.push(.5),a.push(.1),a.push(u),a.push(u);else{for(var l=0;l<t.aspectRatios.length;++l)o.push(t.aspectRatios[l]),a.push(u);if(t.interpolatedScaleAspectRatio>0){var h=s===t.strides.length-1?1:V(t.minScale,t.maxScale,s+1,t.strides.length);a.push(Math.sqrt(u*h)),o.push(t.interpolatedScaleAspectRatio)}}s++}for(var c=0;c<o.length;++c){var p=Math.sqrt(o[c]);i.push(a[c]/p),r.push(a[c]*p)}var d=0,f=0;if(t.featureMapHeight.length>0)d=t.featureMapHeight[n],f=t.featureMapWidth[n];else{var m=t.strides[n];d=Math.ceil(t.inputSizeHeight/m),f=Math.ceil(t.inputSizeWidth/m)}for(var g=0;g<d;++g)for(var y=0;y<f;++y)for(var v=0;v<i.length;++v){var x={xCenter:(y+t.anchorOffsetX)/f,yCenter:(g+t.anchorOffsetY)/d,width:0,height:0};t.fixedAnchorSize?(x.width=1,x.height=1):(x.width=r[v],x.height=i[v]),e.push(x)}n=s}return e})(st);var s=(0,e.tensor1d)(this.anchors.map(function(t){return t.width})),u=(0,e.tensor1d)(this.anchors.map(function(t){return t.height})),l=(0,e.tensor1d)(this.anchors.map(function(t){return t.xCenter})),h=(0,e.tensor1d)(this.anchors.map(function(t){return t.yCenter}));this.anchorTensor={x:l,y:h,w:s,h:u},this.prevFilteredSegmentationMask=this.enableSegmentation?(0,e.tensor2d)([],[0,0]):null}return t.prototype.estimatePoses=function(t,n,i){return s(this,void 0,void 0,function(){var r,o,s,l,h,p,d,f,m,g,y,v,x,w,k,b,M,S,T,_,z,O,I;return u(this,function(u){switch(u.label){case 0:return r=(function(t){var e;if(null==(e=null==t?lt:a({},t)).maxPoses&&(e.maxPoses=1),e.maxPoses<=0)throw new Error("Invalid maxPoses ".concat(e.maxPoses,". Should be > 0."));if(e.maxPoses>1)throw new Error("Multi-pose detection is not implemented yet. Please set maxPoses to 1.");return e})(n),null==t?(this.reset(),[2,[]]):(this.maxPoses=r.maxPoses,this.timestamp=null!=i?1e3*i:N(t)?1e6*t.currentTime:null,o=P(t),s=(0,e.tidy)(function(){return(0,e.cast)(F(t),"float32")}),null!=(l=this.regionOfInterest)?[3,2]:[4,this.detectPose(s)]);case 1:if(0===(h=u.sent()).length)return this.reset(),s.dispose(),[2,[]];p=h[0],l=this.poseDetectionToRoi(p,o),u.label=2;case 2:return[4,this.poseLandmarksByRoi(l,s)];case 3:return d=u.sent(),s.dispose(),null==d?(this.reset(),[2,[]]):(f=d.landmarks,m=d.auxiliaryLandmarks,g=d.poseScore,y=d.worldLandmarks,v=d.segmentationMask,x=this.poseLandmarkFiltering(f,m,y,o),w=x.actualLandmarksFiltered,k=x.auxiliaryLandmarksFiltered,b=x.actualWorldLandmarksFiltered,M=this.poseLandmarksToRoi(k,o),this.regionOfInterest=M,S=this.smoothSegmentation&&null!=v?this.poseSegmentationFiltering(v):v,null!=(T=null!=w?U(w,o):null)&&T.forEach(function(t,e){t.name=c[e]}),null!=(_=b)&&_.forEach(function(t,e){t.name=c[e]}),z={score:g,keypoints:T,keypoints3D:_},null!==S&&(O=(0,e.tidy)(function(){var t=(0,e.expandDims)(S,2),n=(0,e.pad)(t,[[0,0],[0,0],[0,1]]);return(0,e.mirrorPad)(n,[[0,0],[0,0],[0,2]],"symmetric")}),this.smoothSegmentation||(0,e.dispose)(S),I={maskValueToLabel:St,mask:new Mt(O)},z.segmentation=I),[2,[z]])}})})},t.prototype.poseSegmentationFiltering=function(t){var n=this.prevFilteredSegmentationMask;return 0===n.size?this.prevFilteredSegmentationMask=t:(this.prevFilteredSegmentationMask=G(n,t,bt),(0,e.dispose)(t)),(0,e.dispose)(n),this.prevFilteredSegmentationMask},t.prototype.dispose=function(){this.detectorModel.dispose(),this.landmarkModel.dispose(),(0,e.dispose)([this.anchorTensor.x,this.anchorTensor.y,this.anchorTensor.w,this.anchorTensor.h,this.prevFilteredSegmentationMask])},t.prototype.reset=function(){this.regionOfInterest=null,this.enableSegmentation&&((0,e.dispose)(this.prevFilteredSegmentationMask),this.prevFilteredSegmentationMask=(0,e.tensor2d)([],[0,0])),this.visibilitySmoothingFilterActual=null,this.visibilitySmoothingFilterAuxiliary=null,this.landmarksSmoothingFilterActual=null,this.landmarksSmoothingFilterAuxiliary=null},t.prototype.detectPose=function(t){return s(this,void 0,void 0,function(){var n,i,r,o,a,s,l,h,c,p;return u(this,function(u){switch(u.label){case 0:return n=B(t,pt),i=n.imageTensor,r=n.padding,o=this.detectorModel.predict(i),a=D(o),s=a.boxes,[4,X([l=a.logits,s],this.anchorTensor,ht)];case 1:return 0===(h=u.sent()).length?((0,e.dispose)([i,o,l,s]),[2,h]):[4,K(h,this.maxPoses,.3)];case 2:return c=u.sent(),p=(function(t,e){void 0===t&&(t=[]);for(var n=e.left,i=e.top,r=e.left+e.right,o=e.top+e.bottom,a=0;a<t.length;a++){var s=t[a],u=s.locationData.relativeBoundingBox,l=(u.xMin-n)/(1-r),h=(u.yMin-i)/(1-o),c=u.width/(1-r),p=u.height/(1-o);u.xMin=l,u.yMin=h,u.width=c,u.height=p,u.xMax=l+c,u.yMax=h+p;var d=s.locationData.relativeKeypoints;d&&d.forEach(function(t){var e=(t.x-n)/(1-r),a=(t.y-i)/(1-o);t.x=e,t.y=a})}return t})(c,r),(0,e.dispose)([i,o,l,s]),[2,p]}})})},t.prototype.poseDetectionToRoi=function(t,e){return $(I(t,e,{rotationVectorEndKeypointIndex:1,rotationVectorStartKeypointIndex:0,rotationVectorTargetAngleDegree:90}),e,ct)},t.prototype.poseLandmarksByRoi=function(t,n){return s(this,void 0,void 0,function(){var i,r,o,s,l,h,c,p,d,f,m,g,y,v;return u(this,function(u){switch(u.label){case 0:if(i=P(n),r=B(n,dt,t),o=r.imageTensor,s=r.padding,l=r.transformationMatrix,"lite"!==this.modelType&&"full"!==this.modelType&&"heavy"!==this.modelType)throw new Error("Model type must be one of lite, full or heavy,"+"but got ".concat(this.modelType));return h=["ld_3d","output_poseflag","activation_heatmap","world_3d"],this.enableSegmentation&&h.push("activation_segmentation"),c=this.landmarkModel.execute(o,h),[4,this.tensorsToPoseLandmarksAndSegmentation(c)];case 1:return null==(p=u.sent())?((0,e.dispose)(c),(0,e.dispose)(o),[2,null]):(d=p.landmarks,f=p.auxiliaryLandmarks,m=p.poseScore,g=p.worldLandmarks,y=p.segmentationMask,[4,this.poseLandmarksAndSegmentationInverseProjection(i,t,s,l,d,f,g,y)]);case 2:return v=u.sent(),(0,e.dispose)(c),(0,e.dispose)(o),[2,a({poseScore:m},v)]}})})},t.prototype.poseLandmarksAndSegmentationInverseProjection=function(t,n,i,r,o,l,h,c){return s(this,void 0,void 0,function(){var s,p,d,f,m,g;return u(this,function(u){return s=j(o,i),p=j(l,i),d=R(s,n),f=R(p,n),m=(function(t,e){for(var n=[],i=0,r=t;i<r.length;i++){var o=r[i],s=o.x,u=o.y,l=e.rotation,h=Math.cos(l)*s-Math.sin(l)*u,c=Math.sin(l)*s+Math.cos(l)*u,p=a({},o);p.x=h,p.y=c,n.push(p)}return n})(h,n),g=null,this.enableSegmentation&&(g=(0,e.tidy)(function(){var n=c.shape,i=n[0],o=n[1],a=(function(t){var e=A(new Array(16).fill(0));e[0][0]=E(t,0,0),e[1][0]=-E(t,0,1),e[2][0]=E(t,0,2),e[3][0]=-E(t,0,3),e[0][2]=E(t,2,0),e[1][2]=-E(t,2,1),e[2][2]=E(t,2,2),e[3][2]=-E(t,2,3),e[0][1]=-E(t,1,0),e[1][1]=E(t,1,1),e[2][1]=-E(t,1,2),e[3][1]=E(t,1,3),e[0][3]=-E(t,3,0),e[1][3]=E(t,3,1),e[2][3]=-E(t,3,2),e[3][3]=E(t,3,3);for(var n=t[0][0]*e[0][0]+t[1][0]*e[0][1]+t[2][0]*e[0][2]+t[3][0]*e[0][3],i=0;i<e.length;i++)for(var r=0;r<e.length;r++)e[i][r]/=n;return e})(r),s=(0,e.tensor2d)(z(a,{width:o,height:i},t),[1,8]),u=[1,i,o,1];return(0,e.squeeze)(e.image.transform((0,e.reshape)(c,u),s,"bilinear","constant",0,[t.height,t.width]),[0,3])}),(0,e.dispose)(c)),[2,{landmarks:d,auxiliaryLandmarks:f,worldLandmarks:m,segmentationMask:g}]})})},t.prototype.tensorsToPoseLandmarksAndSegmentation=function(t){return s(this,void 0,void 0,function(){var n,i,r,o,s,l,h,c,p,d,f,m,g;return u(this,function(u){switch(u.label){case 0:return n=t[0],i=t[1],r=t[2],o=t[3],s=this.enableSegmentation?t[4]:null,[4,i.data()];case 1:return(l=u.sent()[0])<.5?[2,null]:[4,Z(n,ft)];case 2:return[4,H(u.sent(),r,gt)];case 3:return h=u.sent(),c=h.slice(0,33),p=h.slice(33,35),[4,Z(o,mt)];case 4:return d=u.sent(),f=d.slice(0,33),m=(function(t,e,n){void 0===n&&(n=!0);for(var i=[],r=0;r<t.length;r++){var o=a({},e[r]);n&&(o.score=t[r].score),i.push(o)}return i})(c,f,!0),g=this.enableSegmentation?(function(t,n){return(0,e.tidy)(function(){var i=(0,e.squeeze)(t,[0]),r=i.shape[2];if(1===r){var o=i;switch(n.activation){case"none":break;case"sigmoid":o=(0,e.sigmoid)(o);break;case"softmax":throw new Error("Softmax activation requires two channels.");default:throw new Error("Activation not supported (".concat(n.activation,")"))}var a=o;return(0,e.squeeze)(a,[2])}throw new Error("Unsupported number of tensor channels ".concat(r))})})(s,kt):null,[2,{landmarks:c,auxiliaryLandmarks:p,poseScore:l,worldLandmarks:m,segmentationMask:g}]}})})},t.prototype.poseLandmarksToRoi=function(t,e){return $(I(q(t),e,{rotationVectorStartKeypointIndex:0,rotationVectorEndKeypointIndex:1,rotationVectorTargetAngleDegree:90}),e,ct)},t.prototype.poseLandmarkFiltering=function(t,e,n,i){var r,o,a;if(null!=this.timestamp&&this.enableSmoothing){var s=I(q(e),i,{rotationVectorEndKeypointIndex:0,rotationVectorStartKeypointIndex:1,rotationVectorTargetAngleDegree:90});null==this.visibilitySmoothingFilterActual&&(this.visibilitySmoothingFilterActual=new at(yt)),r=this.visibilitySmoothingFilterActual.apply(t),null==this.visibilitySmoothingFilterAuxiliary&&(this.visibilitySmoothingFilterAuxiliary=new at(yt)),o=this.visibilitySmoothingFilterAuxiliary.apply(e),a=this.visibilitySmoothingFilterActual.apply(n),null==this.landmarksSmoothingFilterActual&&(this.landmarksSmoothingFilterActual=new ot(vt)),r=this.landmarksSmoothingFilterActual.apply(r,this.timestamp,i,!0,s),null==this.landmarksSmoothingFilterAuxiliary&&(this.landmarksSmoothingFilterAuxiliary=new ot(xt)),o=this.landmarksSmoothingFilterAuxiliary.apply(o,this.timestamp,i,!0,s),null==this.worldLandmarksSmoothingFilterActual&&(this.worldLandmarksSmoothingFilterActual=new ot(wt)),a=this.worldLandmarksSmoothingFilterActual.apply(n,this.timestamp)}else r=t,o=e,a=n;return{actualLandmarksFiltered:r,auxiliaryLandmarksFiltered:o,actualWorldLandmarksFiltered:a}},t})();function Pt(t){return s(this,void 0,void 0,function(){var e,i,r,o,s,l;return u(this,function(u){switch(u.label){case 0:return e=(function(t){var e=a({},null==t?ut:t);if(null==e.enableSmoothing&&(e.enableSmoothing=ut.enableSmoothing),null==e.enableSegmentation&&(e.enableSegmentation=ut.enableSegmentation),null==e.smoothSegmentation&&(e.smoothSegmentation=ut.smoothSegmentation),null==e.modelType&&(e.modelType=ut.modelType),null==e.detectorModelUrl&&(e.detectorModelUrl=ut.detectorModelUrl),null==e.landmarkModelUrl)switch(e.modelType){case"lite":e.landmarkModelUrl="https://tfhub.dev/mediapipe/tfjs-model/blazepose_3d/landmark/lite/2";break;case"heavy":e.landmarkModelUrl="https://tfhub.dev/mediapipe/tfjs-model/blazepose_3d/landmark/heavy/2";break;default:e.landmarkModelUrl="https://tfhub.dev/mediapipe/tfjs-model/blazepose_3d/landmark/full/2"}return e})(t),i="string"==typeof e.detectorModelUrl&&e.detectorModelUrl.indexOf("https://tfhub.dev")>-1,r="string"==typeof e.landmarkModelUrl&&e.landmarkModelUrl.indexOf("https://tfhub.dev")>-1,[4,Promise.all([(0,n.loadGraphModel)(e.detectorModelUrl,{fromTFHub:i}),(0,n.loadGraphModel)(e.landmarkModelUrl,{fromTFHub:r})])];case 1:return o=u.sent(),s=o[0],l=o[1],[2,new Tt(s,l,e.enableSmoothing,e.enableSegmentation,e.smoothSegmentation,e.modelType)]}})})}var _t,Ft,zt,Ot=(function(){function t(t){!(function(t){if(t.maxTracks<1)throw new Error("Must specify 'maxTracks' to be at least 1, but "+"encountered ".concat(t.maxTracks));if(t.maxAge<=0)throw new Error("Must specify 'maxAge' to be positive, but "+"encountered ".concat(t.maxAge));if(void 0!==t.keypointTrackerParams){if(t.keypointTrackerParams.keypointConfidenceThreshold<0||t.keypointTrackerParams.keypointConfidenceThreshold>1)throw new Error("Must specify 'keypointConfidenceThreshold' to be in the range [0, 1], but encountered "+"".concat(t.keypointTrackerParams.keypointConfidenceThreshold));if(t.keypointTrackerParams.minNumberOfKeypoints<1)throw new Error("Must specify 'minNumberOfKeypoints' to be at least 1, but "+"encountered ".concat(t.keypointTrackerParams.minNumberOfKeypoints));for(var e=0,n=t.keypointTrackerParams.keypointFalloff;e<n.length;e++){var i=n[e];if(i<=0)throw new Error("Must specify each keypoint falloff parameterto be positive "+"but encountered ".concat(i))}}})(t),this.tracks=[],this.maxTracks=t.maxTracks,this.maxAge=1e3*t.maxAge,this.minSimilarity=t.minSimilarity,this.nextID=1}return t.prototype.apply=function(t,e){this.filterOldTracks(e);var n=this.computeSimilarity(t);return this.assignTracks(t,n,e),this.updateTracks(e),t},t.prototype.getTracks=function(){return this.tracks.slice()},t.prototype.getTrackIDs=function(){return new Set(this.tracks.map(function(t){return t.id}))},t.prototype.filterOldTracks=function(t){var e=this;this.tracks=this.tracks.filter(function(n){return t-n.lastTimestamp<=e.maxAge})},t.prototype.assignTracks=function(t,e,n){for(var i=Array.from(Array(e[0].length).keys()),r=[],o=0,a=Array.from(Array(t.length).keys());o<a.length;o++){var s=a[o];if(0!==i.length){for(var u=-1,l=-1,h=0,c=i;h<c.length;h++){var p=c[h],d=e[s][p];d>=this.minSimilarity&&d>l&&(u=p,l=d)}if(u>=0){var f=this.tracks[u];f=Object.assign(f,this.createTrack(t[s],n,f.id)),t[s].id=f.id;var m=i.indexOf(u);i.splice(m,1)}else r.push(s)}else r.push(s)}for(var g=0,y=r;g<y.length;g++){s=y[g];var v=this.createTrack(t[s],n);this.tracks.push(v),t[s].id=v.id}},t.prototype.updateTracks=function(t){this.tracks.sort(function(t,e){return e.lastTimestamp-t.lastTimestamp}),this.tracks=this.tracks.slice(0,this.maxTracks)},t.prototype.createTrack=function(t,e,n){var i={id:n||this.nextTrackID(),lastTimestamp:e,keypoints:l([],t.keypoints,!0).map(function(t){return a({},t)})};return void 0!==t.box&&(i.box=a({},t.box)),i},t.prototype.nextTrackID=function(){var t=this.nextID;return this.nextID+=1,t},t.prototype.remove=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];this.tracks=this.tracks.filter(function(e){return!t.includes(e.id)})},t.prototype.reset=function(){this.tracks=[]},t})(),It=(function(t){function e(e){return t.call(this,e)||this}return o(e,t),e.prototype.computeSimilarity=function(t){var e=this;return 0===t.length||0===this.tracks.length?[[]]:t.map(function(t){return e.tracks.map(function(n){return e.iou(t,n)})})},e.prototype.iou=function(t,e){var n=Math.max(t.box.xMin,e.box.xMin),i=Math.max(t.box.yMin,e.box.yMin),r=Math.min(t.box.xMax,e.box.xMax),o=Math.min(t.box.yMax,e.box.yMax);if(n>=r||i>=o)return 0;var a=(r-n)*(o-i);return a/(t.box.width*t.box.height+e.box.width*e.box.height-a)},e})(Ot),At=(function(t){function e(e){var n=t.call(this,e)||this;return n.keypointThreshold=e.keypointTrackerParams.keypointConfidenceThreshold,n.keypointFalloff=e.keypointTrackerParams.keypointFalloff,n.minNumKeyoints=e.keypointTrackerParams.minNumberOfKeypoints,n}return o(e,t),e.prototype.computeSimilarity=function(t){if(0===t.length||0===this.tracks.length)return[[]];for(var e=[],n=0,i=t;n<i.length;n++){for(var r=i[n],o=[],a=0,s=this.tracks;a<s.length;a++){var u=s[a];o.push(this.oks(r,u))}e.push(o)}return e},e.prototype.oks=function(t,e){for(var n=this.area(e.keypoints)+1e-6,i=0,r=0,o=0;o<t.keypoints.length;++o){var a=t.keypoints[o],s=e.keypoints[o];if(!(a.score<this.keypointThreshold||s.score<this.keypointThreshold)){r+=1;var u=Math.pow(a.x-s.x,2)+Math.pow(a.y-s.y,2),l=2*this.keypointFalloff[o];i+=Math.exp(-1*u/(2*n*Math.pow(l,2)))}}return r<this.minNumKeyoints?0:i/r},e.prototype.area=function(t){var e=this,n=t.filter(function(t){return t.score>e.keypointThreshold}),i=Math.min.apply(Math,l([1],n.map(function(t){return t.x}),!1)),r=Math.max.apply(Math,l([0],n.map(function(t){return t.x}),!1)),o=Math.min.apply(Math,l([1],n.map(function(t){return t.y}),!1));return(r-i)*(Math.max.apply(Math,l([0],n.map(function(t){return t.y}),!1))-o)},e})(Ot);function Ct(t){switch(t){case Ft.BlazePose:return c.reduce(function(t,e,n){return t[e]=n,t},{});case Ft.PoseNet:case Ft.MoveNet:return h.reduce(function(t,e,n){return t[e]=n,t},{});default:throw new Error("Model ".concat(t," is not supported."))}}(zt=_t||(_e2.TrackerType=_t={})).Keypoint="keypoint",zt.BoundingBox="boundingBox",(function(t){t.MoveNet="MoveNet",t.BlazePose="BlazePose",t.PoseNet="PoseNet"})(Ft||(_e2.SupportedModels=Ft={}));_e2.util=Object.freeze({__proto__:null,getKeypointIndexBySide:function(t){switch(t){case Ft.BlazePose:return p;case Ft.PoseNet:case Ft.MoveNet:return d;default:throw new Error("Model ".concat(t," is not supported."))}},getAdjacentPairs:function(t){switch(t){case Ft.BlazePose:return m;case Ft.PoseNet:case Ft.MoveNet:return f;default:throw new Error("Model ".concat(t," is not supported."))}},getKeypointIndexByName:Ct});var Et=["SinglePose.Lightning","SinglePose.Thunder","MultiPose.Lightning"],Rt={modelType:"SinglePose.Lightning",enableSmoothing:!0},Lt={},Bt={frequency:30,minCutOff:2.5,beta:300,derivateCutOff:2.5,thresholdCutOff:.5,thresholdBeta:5,disableValueScaling:!0},Vt={maxTracks:18,maxAge:1e3,minSimilarity:.2,keypointTrackerParams:{keypointConfidenceThreshold:.3,keypointFalloff:[.026,.025,.025,.035,.035,.079,.079,.072,.072,.062,.062,.107,.107,.087,.087,.089,.089],minNumberOfKeypoints:4}},Dt={maxTracks:18,maxAge:1e3,minSimilarity:.15,trackerParams:{}};function Nt(t,e,n,i){for(var r={},o=0,a=h;o<a.length;o++){var s=a[o];r[s]=[e[n[s]].y*i.height,e[n[s]].x*i.width]}if((function(t,e){return(t[e.left_hip].score>.2||t[e.right_hip].score>.2)&&(t[e.left_shoulder].score>.2||t[e.right_shoulder].score>.2)})(e,n)){var u=(r.left_hip[0]+r.right_hip[0])/2,l=(r.left_hip[1]+r.right_hip[1])/2,c=(function(t,e,n,i,r){for(var o=["left_shoulder","right_shoulder","left_hip","right_hip"],a=0,s=0,u=0;u<o.length;u++)(d=Math.abs(i-n[o[u]][0]))>a&&(a=d),(f=Math.abs(r-n[o[u]][1]))>s&&(s=f);for(var l=0,h=0,c=0,p=Object.keys(n);c<p.length;c++){var d,f,m=p[c];t[e[m]].score<.2||((d=Math.abs(i-n[m][0]))>l&&(l=d),(f=Math.abs(r-n[m][1]))>h&&(h=f))}return[a,s,l,h]})(e,n,r,u,l),p=c[0],d=c[1],f=c[2],m=c[3],g=Math.max(1.9*d,1.9*p,1.2*f,1.2*m),y=[u-(g=Math.min(g,Math.max(l,i.width-l,u,i.height-u))),l-g];if(g>Math.max(i.width,i.height)/2)return qt(null==t,i);var v=2*g;return{yMin:y[0]/i.height,xMin:y[1]/i.width,yMax:(y[0]+v)/i.height,xMax:(y[1]+v)/i.width,height:(y[0]+v)/i.height-y[0]/i.height,width:(y[1]+v)/i.width-y[1]/i.width}}return qt(null==t,i)}function qt(t,e){var n,i,r,o;return t?e.width>e.height?(n=1,i=e.height/e.width,r=0,o=(e.width/2-e.height/2)/e.width):(n=e.width/e.height,i=1,r=(e.height/2-e.width/2)/e.height,o=0):e.width>e.height?(n=e.width/e.height,i=1,r=(e.height/2-e.width/2)/e.height,o=0):(n=1,i=e.height/e.width,r=0,o=(e.width/2-e.height/2)/e.width),{yMin:r,xMin:o,yMax:r+n,xMax:o+i,height:n,width:i}}function Kt(t){var e,n=null==t?Rt:a({},t);if(null==n.modelType)n.modelType="SinglePose.Lightning";else if(Et.indexOf(n.modelType)<0)throw new Error("Invalid architecture ".concat(n.modelType,". ")+"Should be one of ".concat(Et));if(null==n.enableSmoothing&&(n.enableSmoothing=!0),null!=n.minPoseScore&&(n.minPoseScore<0||n.minPoseScore>1))throw new Error("minPoseScore should be between 0.0 and 1.0");if(null!=n.multiPoseMaxDimension&&(n.multiPoseMaxDimension%32!=0||n.multiPoseMaxDimension<32))throw new Error("multiPoseMaxDimension must be a multiple of 32 and higher than 0");if("MultiPose.Lightning"===n.modelType&&null==n.enableTracking&&(n.enableTracking=!0),"MultiPose.Lightning"===n.modelType&&!0===n.enableTracking)if(null==n.trackerType&&(n.trackerType=_t.BoundingBox),n.trackerType===_t.Keypoint)null!=n.trackerConfig?n.trackerConfig=(function(t){var e=Ut(Vt,t);return e.keypointTrackerParams=a({},Vt.keypointTrackerParams),null!=t.keypointTrackerParams&&(null!=t.keypointTrackerParams.keypointConfidenceThreshold&&(e.keypointTrackerParams.keypointConfidenceThreshold=t.keypointTrackerParams.keypointConfidenceThreshold),null!=t.keypointTrackerParams.keypointFalloff&&(e.keypointTrackerParams.keypointFalloff=t.keypointTrackerParams.keypointFalloff),null!=t.keypointTrackerParams.minNumberOfKeypoints&&(e.keypointTrackerParams.minNumberOfKeypoints=t.keypointTrackerParams.minNumberOfKeypoints)),e})(n.trackerConfig):n.trackerConfig=Vt;else{if(n.trackerType!==_t.BoundingBox)throw new Error("Tracker type not supported by MoveNet");null!=n.trackerConfig?n.trackerConfig=(e=n.trackerConfig,Ut(Dt,e)):n.trackerConfig=Dt}return n}function Ut(t,e){var n={maxTracks:t.maxTracks,maxAge:t.maxAge,minSimilarity:t.minSimilarity};return null!=e.maxTracks&&(n.maxTracks=e.maxTracks),null!=e.maxAge&&(n.maxAge=e.maxAge),null!=e.minSimilarity&&(n.minSimilarity=e.minSimilarity),n}var Ht=(function(){function t(t,e){this.moveNetModel=t,this.modelInputResolution={height:0,width:0},this.keypointIndexByName=Ct(Ft.MoveNet),"SinglePose.Lightning"===e.modelType?(this.modelInputResolution.width=192,this.modelInputResolution.height=192):"SinglePose.Thunder"===e.modelType&&(this.modelInputResolution.width=256,this.modelInputResolution.height=256),this.multiPoseModel="MultiPose.Lightning"===e.modelType,this.multiPoseModel||(this.keypointFilter=new nt(Bt),this.cropRegionFilterYMin=new tt(.9),this.cropRegionFilterXMin=new tt(.9),this.cropRegionFilterYMax=new tt(.9),this.cropRegionFilterXMax=new tt(.9)),this.enableSmoothing=e.enableSmoothing,e.minPoseScore?this.minPoseScore=e.minPoseScore:this.minPoseScore=.25,e.multiPoseMaxDimension?this.multiPoseMaxDimension=e.multiPoseMaxDimension:this.multiPoseMaxDimension=256,this.enableTracking=e.enableTracking,this.multiPoseModel&&this.enableTracking&&(e.trackerType===_t.Keypoint?this.tracker=new At(e.trackerConfig):e.trackerType===_t.BoundingBox&&(this.tracker=new It(e.trackerConfig)),this.enableSmoothing&&(this.keypointFilterMap=new Map))}return t.prototype.runSinglePersonPoseModel=function(t){return s(this,void 0,void 0,function(){var n,i,r,o,a;return u(this,function(s){switch(s.label){case 0:if(4!==(n=this.moveNetModel.execute(t)).shape.length||1!==n.shape[0]||1!==n.shape[1]||17!==n.shape[2]||3!==n.shape[3])throw n.dispose(),new Error("Unexpected output shape from model: [".concat(n.shape,"]"));return"webgpu"===(0,e.getBackend)()?[3,1]:(i=n.dataSync(),[3,3]);case 1:return[4,n.data()];case 2:i=s.sent(),s.label=3;case 3:for(n.dispose(),r={keypoints:[],score:0},o=0,a=0;a<17;++a)r.keypoints[a]={y:i[3*a],x:i[3*a+1],score:i[3*a+2]},r.keypoints[a].score>.2&&(++o,r.score+=r.keypoints[a].score);return o>0&&(r.score/=o),[2,r]}})})},t.prototype.runMultiPersonPoseModel=function(t){return s(this,void 0,void 0,function(){var n,i,r,o,a,s,l,h;return u(this,function(u){switch(u.label){case 0:if(3!==(n=this.moveNetModel.execute(t)).shape.length||1!==n.shape[0]||56!==n.shape[2])throw n.dispose(),new Error("Unexpected output shape from model: [".concat(n.shape,"]"));return"webgpu"===(0,e.getBackend)()?[3,1]:(i=n.dataSync(),[3,3]);case 1:return[4,n.data()];case 2:i=u.sent(),u.label=3;case 3:for(n.dispose(),r=[],o=i.length/56,a=0;a<o;++a)for(r[a]={keypoints:[]},s=56*a+51,r[a].box={yMin:i[s],xMin:i[s+1],yMax:i[s+2],xMax:i[s+3],width:i[s+3]-i[s+1],height:i[s+2]-i[s]},l=56*a+55,r[a].score=i[l],r[a].keypoints=[],h=0;h<17;++h)r[a].keypoints[h]={y:i[56*a+3*h],x:i[56*a+3*h+1],score:i[56*a+3*h+2]};return[2,r]}})})},t.prototype.estimatePoses=function(t,n,i){return void 0===n&&(n=Lt),s(this,void 0,void 0,function(){var r,o,s,l,c,p;return u(this,function(u){switch(u.label){case 0:return n=(function(t){return null==t?Lt:a({},t)})(n),null==t?(this.reset(),[2,[]]):(null==i?N(t)&&(i=1e6*t.currentTime):i*=1e3,r=F(t),o=P(r),s=(0,e.expandDims)(r,0),t instanceof e.Tensor||r.dispose(),l=[],this.multiPoseModel?[3,2]:[4,this.estimateSinglePose(s,o,i)]);case 1:return l=u.sent(),[3,4];case 2:return[4,this.estimateMultiplePoses(s,o,i)];case 3:l=u.sent(),u.label=4;case 4:for(c=0;c<l.length;++c)for(p=0;p<l[c].keypoints.length;++p)l[c].keypoints[p].name=h[p],l[c].keypoints[p].y*=o.height,l[c].keypoints[p].x*=o.width;return[2,l]}})})},t.prototype.estimateSinglePose=function(t,n,i){return s(this,void 0,void 0,function(){var r,o,a,s,l=this;return u(this,function(u){switch(u.label){case 0:return this.cropRegion||(this.cropRegion=qt(null==this.cropRegion,n)),r=(0,e.tidy)(function(){var n=(0,e.tensor2d)([[l.cropRegion.yMin,l.cropRegion.xMin,l.cropRegion.yMax,l.cropRegion.xMax]]),i=(0,e.zeros)([1],"int32"),r=[l.modelInputResolution.height,l.modelInputResolution.width];return(0,e.cast)(e.image.cropAndResize(t,n,i,r,"bilinear",0),"int32")}),t.dispose(),[4,this.runSinglePersonPoseModel(r)];case 1:if(o=u.sent(),r.dispose(),o.score<this.minPoseScore)return this.reset(),[2,[]];for(a=0;a<o.keypoints.length;++a)o.keypoints[a].y=this.cropRegion.yMin+o.keypoints[a].y*this.cropRegion.height,o.keypoints[a].x=this.cropRegion.xMin+o.keypoints[a].x*this.cropRegion.width;return null!=i&&this.enableSmoothing&&(o.keypoints=this.keypointFilter.apply(o.keypoints,i,1)),s=Nt(this.cropRegion,o.keypoints,this.keypointIndexByName,n),this.cropRegion=this.filterCropRegion(s),[2,[o]]}})})},t.prototype.estimateMultiplePoses=function(t,n,i){return s(this,void 0,void 0,function(){var r,o,a,s,l,h,c,p,d,f,m,g=this;return u(this,function(u){switch(u.label){case 0:return n.width>n.height?(o=this.multiPoseMaxDimension,a=Math.round(this.multiPoseMaxDimension*n.height/n.width),r=e.image.resizeBilinear(t,[a,o]),l=o,h=32*Math.ceil(a/32),s=(0,e.pad)(r,[[0,0],[0,h-a],[0,0],[0,0]])):(o=Math.round(this.multiPoseMaxDimension*n.width/n.height),a=this.multiPoseMaxDimension,r=e.image.resizeBilinear(t,[a,o]),l=32*Math.ceil(o/32),h=a,s=(0,e.pad)(r,[[0,0],[0,0],[0,l-o],[0,0]])),r.dispose(),t.dispose(),c=(0,e.cast)(s,"int32"),s.dispose(),[4,this.runMultiPersonPoseModel(c)];case 1:for(p=u.sent(),c.dispose(),p=p.filter(function(t){return t.score>=g.minPoseScore}),f=0;f<p.length;++f)for(d=0;d<p[f].keypoints.length;++d)p[f].keypoints[d].y*=h/a,p[f].keypoints[d].x*=l/o;if(this.enableTracking&&(this.tracker.apply(p,i),this.enableSmoothing)){for(f=0;f<p.length;++f)this.keypointFilterMap.has(p[f].id)||this.keypointFilterMap.set(p[f].id,new nt(Bt)),p[f].keypoints=this.keypointFilterMap.get(p[f].id).apply(p[f].keypoints,i,1);m=this.tracker.getTrackIDs(),this.keypointFilterMap.forEach(function(t,e){m.has(e)||g.keypointFilterMap.delete(e)})}return[2,p]}})})},t.prototype.filterCropRegion=function(t){if(t){var e=this.cropRegionFilterYMin.apply(t.yMin),n=this.cropRegionFilterXMin.apply(t.xMin),i=this.cropRegionFilterYMax.apply(t.yMax),r=this.cropRegionFilterXMax.apply(t.xMax);return{yMin:e,xMin:n,yMax:i,xMax:r,height:i-e,width:r-n}}return this.cropRegionFilterYMin.reset(),this.cropRegionFilterXMin.reset(),this.cropRegionFilterYMax.reset(),this.cropRegionFilterXMax.reset(),null},t.prototype.dispose=function(){this.moveNetModel.dispose()},t.prototype.reset=function(){this.cropRegion=null,this.resetFilters()},t.prototype.resetFilters=function(){this.keypointFilter.reset(),this.cropRegionFilterYMin.reset(),this.cropRegionFilterXMin.reset(),this.cropRegionFilterYMax.reset(),this.cropRegionFilterXMax.reset()},t})();function jt(t){return void 0===t&&(t=Rt),s(this,void 0,void 0,function(){var i,r,o,a;return u(this,function(s){switch(s.label){case 0:return i=Kt(t),o=!0,i.modelUrl?(o="string"==typeof i.modelUrl&&i.modelUrl.indexOf("https://tfhub.dev")>-1,[4,(0,n.loadGraphModel)(i.modelUrl,{fromTFHub:o})]):[3,2];case 1:return r=s.sent(),[3,4];case 2:return a=void 0,"SinglePose.Lightning"===i.modelType?a="https://tfhub.dev/google/tfjs-model/movenet/singlepose/lightning/4":"SinglePose.Thunder"===i.modelType?a="https://tfhub.dev/google/tfjs-model/movenet/singlepose/thunder/4":"MultiPose.Lightning"===i.modelType&&(a="https://tfhub.dev/google/tfjs-model/movenet/multipose/lightning/1"),[4,(0,n.loadGraphModel)(a,{fromTFHub:o})];case 3:r=s.sent(),s.label=4;case 4:return"webgl"===(0,e.getBackend)()&&(0,e.env)().set("TOPK_LAST_DIM_CPU_HANDOFF_SIZE_THRESHOLD",0),[2,new Ht(r,i)]}})})}var Gt={architecture:"MobileNetV1",outputStride:16,multiplier:.75,inputResolution:{height:257,width:257}},Xt=["MobileNetV1","ResNet50"],Yt={MobileNetV1:[8,16],ResNet50:[16]},Wt=[8,16,32],Qt={MobileNetV1:[.5,.75,1],ResNet50:[1]},Zt=[1,2,4],$t={maxPoses:1,flipHorizontal:!1},Jt={maxPoses:5,flipHorizontal:!1,scoreThreshold:.5,nmsRadius:20},te=[-123.15,-115.9,-103.06];function ee(t){return Math.floor(t/2)}var ne=(function(){function t(t,e){this.priorityQueue=new Array(t),this.numberOfElements=-1,this.getElementValue=e}return t.prototype.enqueue=function(t){this.priorityQueue[++this.numberOfElements]=t,this.swim(this.numberOfElements)},t.prototype.dequeue=function(){var t=this.priorityQueue[0];return this.exchange(0,this.numberOfElements--),this.sink(0),this.priorityQueue[this.numberOfElements+1]=null,t},t.prototype.empty=function(){return-1===this.numberOfElements},t.prototype.size=function(){return this.numberOfElements+1},t.prototype.all=function(){return this.priorityQueue.slice(0,this.numberOfElements+1)},t.prototype.max=function(){return this.priorityQueue[0]},t.prototype.swim=function(t){for(;t>0&&this.less(ee(t),t);)this.exchange(t,ee(t)),t=ee(t)},t.prototype.sink=function(t){for(;2*t<=this.numberOfElements;){var e=2*t;if(e<this.numberOfElements&&this.less(e,e+1)&&e++,!this.less(t,e))break;this.exchange(t,e),t=e}},t.prototype.getValueAt=function(t){return this.getElementValue(this.priorityQueue[t])},t.prototype.less=function(t,e){return this.getValueAt(t)<this.getValueAt(e)},t.prototype.exchange=function(t,e){var n=this.priorityQueue[t];this.priorityQueue[t]=this.priorityQueue[e],this.priorityQueue[e]=n},t})();function ie(t,e,n,i,r,o){for(var a=o.shape,s=a[0],u=a[1],l=!0,h=Math.max(n-r,0),c=Math.min(n+r+1,s),p=h;p<c;++p){for(var d=Math.max(i-r,0),f=Math.min(i+r+1,u),m=d;m<f;++m)if(o.get(p,m,t)>e){l=!1;break}if(!l)break}return l}function re(t){return s(this,void 0,void 0,function(){return u(this,function(e){return[2,Promise.all(t.map(function(t){return t.buffer()}))]})})}function oe(t,e,n,i){return{y:i.get(t,e,n),x:i.get(t,e,n+17)}}function ae(t,e,n){var i=oe(t.heatmapY,t.heatmapX,t.id,n),r=i.y,o=i.x;return{x:t.heatmapX*e+o,y:t.heatmapY*e+r}}function se(t,e,n,i){var r=n.x,o=n.y;return t.some(function(t){var n,a,s,u,l=t.keypoints;return n=o,a=r,(s=l[i].y-n)*s+(u=l[i].x-a)*u<=e})}var ue=h.reduce(function(t,e,n){return t[e]=n,t},{}),le=[["nose","left_eye"],["left_eye","left_ear"],["nose","right_eye"],["right_eye","right_ear"],["nose","left_shoulder"],["left_shoulder","left_elbow"],["left_elbow","left_wrist"],["left_shoulder","left_hip"],["left_hip","left_knee"],["left_knee","left_ankle"],["nose","right_shoulder"],["right_shoulder","right_elbow"],["right_elbow","right_wrist"],["right_shoulder","right_hip"],["right_hip","right_knee"],["right_knee","right_ankle"]].map(function(t){var e=t[0],n=t[1];return[ue[e],ue[n]]}),he=le.map(function(t){return t[1]}),ce=le.map(function(t){return t[0]});function pe(t,e,n){return t<e?e:t>n?n:t}function de(t,e,n,i){return{y:pe(Math.round(t.y/e),0,n-1),x:pe(Math.round(t.x/e),0,i-1)}}function fe(t,e){return{x:t.x+e.x,y:t.y+e.y}}function me(t,e,n,i,r,o,a,s){void 0===s&&(s=2);for(var u=i.shape,l=u[0],c=u[1],p={y:e.y,x:e.x},d=fe(p,(function(t,e,n){var i=n.shape[2]/2;return{y:n.get(e.y,e.x,t),x:n.get(e.y,e.x,i+t)}})(t,de(p,o,l,c),a)),f=0;f<s;f++){var m=de(d,o,l,c),g=oe(m.y,m.x,n,r);d=fe({x:m.x*o,y:m.y*o},{x:g.x,y:g.y})}var y=de(d,o,l,c),v=i.get(y.y,y.x,n);return{y:d.y,x:d.x,name:h[n],score:v}}function ge(t,e,n,i,r,o){var a=e.shape[2],s=he.length,u=new Array(a),l=t.part,c=t.score,p=ae(l,i,n);u[l.id]={score:c,name:h[l.id],y:p.y,x:p.x};for(var d=s-1;d>=0;--d){var f=he[d],m=ce[d];u[f]&&!u[m]&&(u[m]=me(d,u[f],m,e,n,i,o))}for(d=0;d<s;++d)f=ce[d],m=he[d],u[f]&&!u[m]&&(u[m]=me(d,u[f],m,e,n,i,r));return u}function ye(t,e,n){return n.reduce(function(n,i,r){var o=i.y,a=i.x,s=i.score;return se(t,e,{y:o,x:a},r)||(n+=s),n},0)/n.length}function ve(t,e,n,i,r,o,a,l){return void 0===a&&(a=.5),void 0===l&&(l=20),s(this,void 0,void 0,function(){var s,h,c,p,d,f,m,g,y,v,x,w;return u(this,function(u){switch(u.label){case 0:return[4,re([t,e,n,i])];case 1:for(s=u.sent(),h=s[0],c=s[1],p=s[2],d=s[3],f=[],m=(function(t,e,n){for(var i=n.shape,r=i[0],o=i[1],a=i[2],s=new ne(r*o*a,function(t){return t.score}),u=0;u<r;++u)for(var l=0;l<o;++l)for(var h=0;h<a;++h){var c=n.get(u,l,h);c<t||ie(h,c,u,l,1,n)&&s.enqueue({score:c,part:{heatmapY:u,heatmapX:l,id:h}})}return s})(a,0,h),g=l*l;f.length<o&&!m.empty();)y=m.dequeue(),v=ae(y.part,r,c),se(f,g,v,y.part.id)||(x=ge(y,h,c,r,p,d),w=ye(f,g,x),f.push({keypoints:x,score:w}));return[2,f]}})})}function xe(){for(var t,e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];switch(e.length){case 0:t="fn main() ";break;case 1:t="fn main(".concat(e[0]," : i32)");break;default:throw Error("Unreachable")}return t}var we=(function(){function t(t){this.variableNames=["A","B"],this.size=!0,this.workgroupSize=[32,1,1],this.outputShape=[t[0],1],this.dispatchLayout=i.webgpu_util.flatDispatchLayout(this.outputShape),this.dispatch=i.webgpu_util.computeDispatch(this.dispatchLayout,this.outputShape,this.workgroupSize),this.shaderKey="getpointsConfidenceOp"}return t.prototype.getUserCode=function(){return"\n        ".concat(xe("index")," {\n          if (index < uniforms.size) {\n            let y = B[index * 2];\n            let x = B[index * 2 + 1];\n            let outIndex = y * uniforms.aShape.x * uniforms.aShape.z + x * uniforms.aShape.z + index;\n            result[index] = A[outIndex];\n          }\n        }\n        ")},t})();function ke(t,n){if((0,e.backend)()instanceof i.WebGPUBackend)return(function(t,n){var i=(0,e.backend)(),r=new we(n.shape),o=i.runWebGPUProgram(r,[t,n],"float32");return(0,e.engine)().makeTensorFromTensorInfo(o)})(t,n);throw new Error("getPointsConfidenceWebGPU is not supported in this backend!")}var be=(function(){function t(t){if(this.variableNames=["A","B"],this.size=!0,this.supportedLastDimension=2,2!==t.length||t[1]!==this.supportedLastDimension)throw new Error("GetOffsetVectorsProgram only supports shape of [x, ".concat(this.supportedLastDimension,"], but current shape is ").concat(t));this.workgroupSize=[32,1,1],this.outputShape=t;var e=[t[0],1];this.dispatchLayout=i.webgpu_util.flatDispatchLayout(e),this.dispatch=i.webgpu_util.computeDispatch(this.dispatchLayout,e,this.workgroupSize),this.shaderKey="GetOffsetVectors"}return t.prototype.getUserCode=function(){return"\n    fn getOffsetPoint(y: i32, x: i32, index: i32) -> vec2<i32> {\n      let outIndexY = y * uniforms.bShape.x * uniforms.bShape.y + x * uniforms.bShape.y + index;\n      let outIndexX = outIndexY + uniforms.bShape.z;\n      let outY = i32(B[outIndexY]);\n      let outX = i32(B[outIndexX]);\n      return vec2<i32>(outY, outX);\n    }\n\n    ".concat(xe("index")," {\n      if (index < uniforms.size) {\n        let indexY = index * ").concat(this.supportedLastDimension,";\n        let indexX = indexY + 1;\n        let heatmapY = A[indexY];\n        let heatmapX = A[indexX];\n        let out = getOffsetPoint(i32(heatmapY), i32(heatmapX), index);\n        result[indexY] = f32(out[0]);\n        result[indexX] = f32(out[1]);\n      }\n    }\n    ")},t})();function Me(t,n){if((0,e.backend)()instanceof i.WebGPUBackend)return(function(t,n){var i=(0,e.backend)(),r=new be(t.shape),o=i.runWebGPUProgram(r,[t,n],"float32");return(0,e.engine)().makeTensorFromTensorInfo(o)})(t,n);throw new Error("getOffsetVectorsGPU is not supported in this backend!")}function Se(t){var n=t.shape,i=n[0],r=n[1],o=n[2];return(0,e.tidy)(function(){var n,a,s=(0,e.reshape)(t,[i*r,o]),u=(0,e.argMax)(s,0),l=(0,e.expandDims)((0,e.div)(u,(0,e.scalar)(r,"int32")),1),h=(0,e.expandDims)((n=u,a=r,(0,e.tidy)(function(){var t=(0,e.div)(n,(0,e.scalar)(a,"int32"));return(0,e.sub)(n,(0,e.mul)(t,(0,e.scalar)(a,"int32")))})),1);return(0,e.concat)([l,h],1)})}function Te(t,n,i){return(0,e.tidy)(function(){var r=(function(t,n){for(var i=[],r=0;r<h.length;r++){var o=Pe(t.get(r,0).valueOf(),t.get(r,1).valueOf(),r,n),a=o.x,s=o.y;i.push(s),i.push(a)}return(0,e.tensor2d)(i,[h.length,2])})(t,i);return(0,e.add)((0,e.cast)((0,e.mul)(t.toTensor(),(0,e.scalar)(n,"int32")),"float32"),r)})}function Pe(t,e,n,i){return{y:i.get(t,e,n),x:i.get(t,e,n+h.length)}}function _e(t,e,n){return s(this,void 0,void 0,function(){var i,r,o,a,s,l,c,p,d,f;return u(this,function(u){switch(u.label){case 0:return i=0,r=Se(t),[4,Promise.all([t.buffer(),e.buffer(),r.buffer()])];case 1:return o=u.sent(),a=o[0],s=o[1],l=o[2],[4,(c=Te(l,n,s)).buffer()];case 2:return p=u.sent(),d=Array.from((function(t,e){for(var n=e.shape[0],i=new Float32Array(n),r=0;r<n;r++){var o=e.get(r,0),a=e.get(r,1);i[r]=t.get(o,a,r)}return i})(a,l)),f=d.map(function(t,e){return i+=t,{y:p.get(e,0),x:p.get(e,1),score:t,name:h[e]}}),r.dispose(),c.dispose(),[2,{keypoints:f,score:i/f.length}]}})})}function Fe(t,n,i){return s(this,void 0,void 0,function(){var r,o,a;return u(this,function(s){return r=Se(t),o=(function(t,n,i){return(0,e.tidy)(function(){var r=Me(t,i);return(0,e.add)((0,e.cast)((0,e.mul)(t,(0,e.scalar)(n,"int32")),"float32"),r)})})(r,i,n),a=ke(t,r),[2,[o,a]]})})}function ze(t,e){return(t-1)%e==0}var Oe="https://storage.googleapis.com/tfjs-models/savedmodel/posenet/mobilenet/",Ie="https://storage.googleapis.com/tfjs-models/savedmodel/posenet/resnet50/";function Ae(t,e){return(function(t,e){return(t-1)%e==0})(t,e)?t:Math.floor(t/e)*e+1}var Ce=(function(){function t(t,n){this.posenetModel=t;var i=this.posenetModel.inputs[0].shape;e.util.assert(-1===i[1]&&-1===i[2],function(){return"Input shape [".concat(i[1],", ").concat(i[2],"] ")+"must both be equal to or -1"});var r,o,a=(r=n.inputResolution,o=n.outputStride,{height:Ae(r.height,o),width:Ae(r.width,o)});!(function(t){e.util.assert(Wt.indexOf(t)>=0,function(){return"outputStride of ".concat(t," is invalid. ")+"It must be either 8 or 16."})})(n.outputStride),(function(t,n){e.util.assert(ze(t.height,n),function(){return"height of ".concat(t.height," is invalid for output stride ")+"".concat(n,".")}),e.util.assert(ze(t.width,n),function(){return"width of ".concat(t.width," is invalid for output stride ")+"".concat(n,".")})})(a,n.outputStride),this.inputResolution=a,this.outputStride=n.outputStride,this.architecture=n.architecture}return t.prototype.estimatePoses=function(t,e){return void 0===e&&(e=$t),s(this,void 0,void 0,function(){return u(this,function(n){return[2,this.estimatePosesGPU(t,e,!1)]})})},t.prototype.estimatePosesGPU=function(t,n,i){return void 0===n&&(n=$t),void 0===i&&(i=!1),s(this,void 0,void 0,function(){var r,o,s,l,h,c,p,d,f,m,g,y,v,x,w,k,b,M;return u(this,function(u){switch(u.label){case 0:return r=(function(t){var e=t;if(null==e.maxPoses&&(e.maxPoses=1),e.maxPoses<=0)throw new Error("Invalid maxPoses ".concat(e.maxPoses,". Should be > 0."));if(e.maxPoses>1){if((e=a(a({},Jt),e)).scoreThreshold<0||e.scoreThreshold>1)throw new Error("Invalid scoreThreshold ".concat(e.scoreThreshold,". ")+"Should be in range [0.0, 1.0]");if(e.nmsRadius<=0)throw new Error("Invalid nmsRadius ".concat(e.nmsRadius,"."))}return e})(n),null==t?[2,i?[[],[]]:[]]:(this.maxPoses=r.maxPoses,o=B(t,{outputTensorSize:this.inputResolution,keepAspectRatio:!0,borderMode:"replicate"}),s=o.imageTensor,l=o.padding,h="ResNet50"===this.architecture?(0,e.add)(s,te):L(s,[-1,1]),c=this.posenetModel.predict(h),"ResNet50"===this.architecture?(p=(0,e.squeeze)(c[2],[0]),d=(0,e.squeeze)(c[3],[0]),f=(0,e.squeeze)(c[0],[0]),m=(0,e.squeeze)(c[1],[0])):(p=(0,e.squeeze)(c[0],[0]),d=(0,e.squeeze)(c[1],[0]),f=(0,e.squeeze)(c[2],[0]),m=(0,e.squeeze)(c[3],[0])),g=(0,e.sigmoid)(d),1!==this.maxPoses?[3,5]:i?[4,Fe(g,p,this.outputStride)]:[3,2]);case 1:return v=u.sent(),w=v[0],x=v[1],y=[w,x],[3,4];case 2:return[4,_e(g,p,this.outputStride)];case 3:w=u.sent(),y=[w],u.label=4;case 4:return[3,7];case 5:if(i)throw new Error("GPU renderer only supports single pose!");return[4,ve(g,p,f,m,this.outputStride,this.maxPoses,r.scoreThreshold,r.nmsRadius)];case 6:y=u.sent(),u.label=7;case 7:if(i){if(!0===r.flipHorizontal)throw new Error("flipHorizontal is not supported!");k=this.getCanvasInfo(P(t),this.inputResolution,l)}else M=P(t),b=(function(t,e,n,i){var r=e.height,o=e.width,a=r/(n.height*(1-i.top-i.bottom)),s=o/(n.width*(1-i.left-i.right)),u=-i.top*n.height,l=-i.left*n.width;if(1===s&&1===a&&0===u&&0===l)return t;for(var h=0,c=t;h<c.length;h++)for(var p=0,d=c[h].keypoints;p<d.length;p++){var f=d[p];f.x=(f.x+l)*s,f.y=(f.y+u)*a}return t})(y,M,this.inputResolution,l),r.flipHorizontal&&(b=(function(t,e){for(var n=0,i=t;n<i.length;n++)for(var r=0,o=i[n].keypoints;r<o.length;r++){var a=o[r];a.x=e.width-1-a.x}return t})(b,M));return s.dispose(),h.dispose(),(0,e.dispose)(c),p.dispose(),d.dispose(),f.dispose(),m.dispose(),g.dispose(),[2,i?[y,k]:b]}})})},t.prototype.getCanvasInfo=function(t,e,n){var i=t.height,r=t.width,o=i/(e.height*(1-n.top-n.bottom)),a=r/(e.width*(1-n.left-n.right)),s=-n.top*e.height;return[-n.left*e.width,s,a,o,t.width,t.height]},t.prototype.dispose=function(){this.posenetModel.dispose()},t.prototype.reset=function(){},t})();function Ee(t){return void 0===t&&(t=Gt),s(this,void 0,void 0,function(){var e,i,r,o,a;return u(this,function(s){switch(s.label){case 0:return"ResNet50"!==(e=(function(t){var e=t||Gt;if(null==e.architecture&&(e.architecture="MobileNetV1"),Xt.indexOf(e.architecture)<0)throw new Error("Invalid architecture ".concat(e.architecture,". ")+"Should be one of ".concat(Xt));if(null==e.inputResolution&&(e.inputResolution={height:257,width:257}),null==e.outputStride&&(e.outputStride=16),Yt[e.architecture].indexOf(e.outputStride)<0)throw new Error("Invalid outputStride ".concat(e.outputStride,". ")+"Should be one of ".concat(Yt[e.architecture]," ")+"for architecture ".concat(e.architecture,"."));if(null==e.multiplier&&(e.multiplier=1),Qt[e.architecture].indexOf(e.multiplier)<0)throw new Error("Invalid multiplier ".concat(e.multiplier,". ")+"Should be one of ".concat(Qt[e.architecture]," ")+"for architecture ".concat(e.architecture,"."));if(null==e.quantBytes&&(e.quantBytes=4),Zt.indexOf(e.quantBytes)<0)throw new Error("Invalid quantBytes ".concat(e.quantBytes,". ")+"Should be one of ".concat(Zt," ")+"for architecture ".concat(e.architecture,"."));if("MobileNetV1"===e.architecture&&32===e.outputStride&&1!==e.multiplier)throw new Error("When using an output stride of 32, you must select 1 as the multiplier.");return e})(t)).architecture?[3,2]:(u=e.outputStride,l=e.quantBytes,h="model-stride".concat(u,".json"),i=4===l?"https://storage.googleapis.com/tfjs-models/savedmodel/posenet/resnet50/float/"+h:Ie+"quant".concat(l,"/")+h,[4,(0,n.loadGraphModel)(e.modelUrl||i)]);case 1:return r=s.sent(),[2,new Ce(r,e)];case 2:return o=(function(t,e,n){var i={1:"100",.75:"075",.5:"050"},r="model-stride".concat(t,".json");return 4===n?Oe+"float/".concat(i[e],"/")+r:Oe+"quant".concat(n,"/").concat(i[e],"/")+r})(e.outputStride,e.multiplier,e.quantBytes),[4,(0,n.loadGraphModel)(e.modelUrl||o)];case 3:return a=s.sent(),[2,new Ce(a,e)]}var u,l,h})})}_e2.calculators={keypointsToNormalizedKeypoints:J},_e2.movenet={modelType:{SINGLEPOSE_LIGHTNING:"SinglePose.Lightning",SINGLEPOSE_THUNDER:"SinglePose.Thunder",MULTIPOSE_LIGHTNING:"MultiPose.Lightning"}}},1921,[2409,1158,1862,2410]);
__d(function(_g,_r,i,_a,_m,_e,_d){(function(){'use strict';var t;function e(t){var e=0;return function(){return e<t.length?{done:!1,value:t[e++]}:{done:!0}}}var r="function"==typeof Object.defineProperties?Object.defineProperty:function(t,e,r){return t==Array.prototype||t==Object.prototype||(t[e]=r.value),t};var n=(function(t){t=["object"==typeof globalThis&&globalThis,t,window,"object"==typeof self&&self,"object"==typeof _g&&_g];for(var e=0;e<t.length;++e){var r=t[e];if(r&&r.Math==Math)return r}throw Error("Cannot find global object")})(this);function o(t,e){if(e)t:{var o=n;t=t.split(".");for(var a=0;a<t.length-1;a++){var u=t[a];if(!(u in o))break t;o=o[u]}(e=e(a=o[t=t[t.length-1]]))!=a&&null!=e&&r(o,t,{configurable:!0,writable:!0,value:e})}}function a(t){return(t={next:t})[Symbol.iterator]=function(){return this},t}function u(t){var r="undefined"!=typeof Symbol&&Symbol.iterator&&t[Symbol.iterator];return r?r.call(t):{next:e(t)}}function s(t){if(!(t instanceof Array)){t=u(t);for(var e,r=[];!(e=t.next()).done;)r.push(e.value);t=r}return t}o("Symbol",function(t){function e(t,e){this.h=t,r(this,"description",{configurable:!0,writable:!0,value:e})}if(t)return t;e.prototype.toString=function(){return this.h};var n="jscomp_symbol_"+(1e9*Math.random()>>>0)+"_",o=0;return function t(r){if(this instanceof t)throw new TypeError("Symbol is not a constructor");return new e(n+(r||"")+"_"+o++,r)}}),o("Symbol.iterator",function(t){if(t)return t;t=Symbol("Symbol.iterator");for(var o="Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "),u=0;u<o.length;u++){var s=n[o[u]];"function"==typeof s&&"function"!=typeof s.prototype[t]&&r(s.prototype,t,{configurable:!0,writable:!0,value:function(){return a(e(this))}})}return t});var l="function"==typeof Object.assign?Object.assign:function(t,e){for(var r=1;r<arguments.length;r++){var n=arguments[r];if(n)for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t};o("Object.assign",function(t){return t||l});var f,c="function"==typeof Object.create?Object.create:function(t){function e(){}return e.prototype=t,new e};if("function"==typeof Object.setPrototypeOf)f=Object.setPrototypeOf;else{var h;t:{var p={};try{p.__proto__={a:!0},h=p.a;break t}catch(t){}h=!1}f=h?function(t,e){if(t.__proto__=e,t.__proto__!==e)throw new TypeError(t+" is not extensible");return t}:null}var v=f;function d(t,e){if(t.prototype=c(e.prototype),t.prototype.constructor=t,v)v(t,e);else for(var r in e)if("prototype"!=r)if(Object.defineProperties){var n=Object.getOwnPropertyDescriptor(e,r);n&&Object.defineProperty(t,r,n)}else t[r]=e[r];t.za=e.prototype}function y(){this.m=!1,this.j=null,this.i=void 0,this.h=1,this.v=this.s=0,this.l=null}function m(t){if(t.m)throw new TypeError("Generator is already running");t.m=!0}function g(t,e){t.l={ma:e,na:!0},t.h=t.s||t.v}function b(t,e,r){return t.h=r,{value:e}}function E(t){this.h=new y,this.i=t}function w(t,e){m(t.h);var r=t.h.j;return r?_(t,"return"in r?r.return:function(t){return{value:t,done:!0}},e,t.h.return):(t.h.return(e),A(t))}function _(t,e,r,n){try{var o=e.call(t.h.j,r);if(!(o instanceof Object))throw new TypeError("Iterator result "+o+" is not an object");if(!o.done)return t.h.m=!1,o;var a=o.value}catch(e){return t.h.j=null,g(t.h,e),A(t)}return t.h.j=null,n.call(t.h,a),A(t)}function A(t){for(;t.h.h;)try{var e=t.i(t.h);if(e)return t.h.m=!1,{value:e.value,done:!1}}catch(e){t.h.i=void 0,g(t.h,e)}if(t.h.m=!1,t.h.l){if(e=t.h.l,t.h.l=null,e.na)throw e.ma;return{value:e.return,done:!0}}return{value:void 0,done:!0}}function T(t){this.next=function(e){return m(t.h),t.h.j?e=_(t,t.h.j.next,e,t.h.u):(t.h.u(e),e=A(t)),e},this.throw=function(e){return m(t.h),t.h.j?e=_(t,t.h.j.throw,e,t.h.u):(g(t.h,e),e=A(t)),e},this.return=function(e){return w(t,e)},this[Symbol.iterator]=function(){return this}}function j(t){function e(e){return t.next(e)}function r(e){return t.throw(e)}return new Promise(function(n,o){!(function t(a){a.done?n(a.value):Promise.resolve(a.value).then(e,r).then(t,o)})(t.next())})}function F(t){return j(new T(new E(t)))}function R(t,e){t instanceof String&&(t+="");var r=0,n=!1,o={next:function(){if(!n&&r<t.length){var o=r++;return{value:e(o,t[o]),done:!1}}return n=!0,{done:!0,value:void 0}}};return o[Symbol.iterator]=function(){return o},o}function O(t){return t||Array.prototype.fill}y.prototype.u=function(t){this.i=t},y.prototype.return=function(t){this.l={return:t},this.h=this.v},o("Promise",function(t){function e(t){this.i=0,this.j=void 0,this.h=[],this.u=!1;var e=this.l();try{t(e.resolve,e.reject)}catch(t){e.reject(t)}}function r(){this.h=null}function o(t){return t instanceof e?t:new e(function(e){e(t)})}if(t)return t;r.prototype.i=function(t){if(null==this.h){this.h=[];var e=this;this.j(function(){e.m()})}this.h.push(t)};var a=n.setTimeout;r.prototype.j=function(t){a(t,0)},r.prototype.m=function(){for(;this.h&&this.h.length;){var t=this.h;this.h=[];for(var e=0;e<t.length;++e){var r=t[e];t[e]=null;try{r()}catch(t){this.l(t)}}}this.h=null},r.prototype.l=function(t){this.j(function(){throw t})},e.prototype.l=function(){function t(t){return function(n){r||(r=!0,t.call(e,n))}}var e=this,r=!1;return{resolve:t(this.I),reject:t(this.m)}},e.prototype.I=function(t){if(t===this)this.m(new TypeError("A Promise cannot resolve to itself"));else if(t instanceof e)this.L(t);else{t:switch(typeof t){case"object":var r=null!=t;break t;case"function":r=!0;break t;default:r=!1}r?this.F(t):this.s(t)}},e.prototype.F=function(t){var e=void 0;try{e=t.then}catch(t){return void this.m(t)}"function"==typeof e?this.M(e,t):this.s(t)},e.prototype.m=function(t){this.v(2,t)},e.prototype.s=function(t){this.v(1,t)},e.prototype.v=function(t,e){if(0!=this.i)throw Error("Cannot settle("+t+", "+e+"): Promise already settled in state"+this.i);this.i=t,this.j=e,2===this.i&&this.K(),this.H()},e.prototype.K=function(){var t=this;a(function(){if(t.D()){var e=n.console;void 0!==e&&e.error(t.j)}},1)},e.prototype.D=function(){if(this.u)return!1;var t=n.CustomEvent,e=n.Event,r=n.dispatchEvent;return void 0===r||("function"==typeof t?t=new t("unhandledrejection",{cancelable:!0}):"function"==typeof e?t=new e("unhandledrejection",{cancelable:!0}):(t=n.document.createEvent("CustomEvent")).initCustomEvent("unhandledrejection",!1,!0,t),t.promise=this,t.reason=this.j,r(t))},e.prototype.H=function(){if(null!=this.h){for(var t=0;t<this.h.length;++t)s.i(this.h[t]);this.h=null}};var s=new r;return e.prototype.L=function(t){var e=this.l();t.T(e.resolve,e.reject)},e.prototype.M=function(t,e){var r=this.l();try{t.call(e,r.resolve,r.reject)}catch(t){r.reject(t)}},e.prototype.then=function(t,r){function n(t,e){return"function"==typeof t?function(e){try{o(t(e))}catch(t){a(t)}}:e}var o,a,u=new e(function(t,e){o=t,a=e});return this.T(n(t,o),n(r,a)),u},e.prototype.catch=function(t){return this.then(void 0,t)},e.prototype.T=function(t,e){function r(){switch(n.i){case 1:t(n.j);break;case 2:e(n.j);break;default:throw Error("Unexpected state: "+n.i)}}var n=this;null==this.h?s.i(r):this.h.push(r),this.u=!0},e.resolve=o,e.reject=function(t){return new e(function(e,r){r(t)})},e.race=function(t){return new e(function(e,r){for(var n=u(t),a=n.next();!a.done;a=n.next())o(a.value).T(e,r)})},e.all=function(t){var r=u(t),n=r.next();return n.done?o([]):new e(function(t,e){function a(e){return function(r){u[e]=r,0==--s&&t(u)}}var u=[],s=0;do{u.push(void 0),s++,o(n.value).T(a(u.length-1),e),n=r.next()}while(!n.done)})},e}),o("Array.prototype.keys",function(t){return t||function(){return R(this,function(t){return t})}}),o("Array.prototype.fill",function(t){return t||function(t,e,r){var n=this.length||0;for(0>e&&(e=Math.max(0,n+e)),(null==r||r>n)&&(r=n),0>(r=Number(r))&&(r=Math.max(0,n+r)),e=Number(e||0);e<r;e++)this[e]=t;return this}}),o("Int8Array.prototype.fill",O),o("Uint8Array.prototype.fill",O),o("Uint8ClampedArray.prototype.fill",O),o("Int16Array.prototype.fill",O),o("Uint16Array.prototype.fill",O),o("Int32Array.prototype.fill",O),o("Uint32Array.prototype.fill",O),o("Float32Array.prototype.fill",O),o("Float64Array.prototype.fill",O),o("Object.is",function(t){return t||function(t,e){return t===e?0!==t||1/t==1/e:t!=t&&e!=e}}),o("Array.prototype.includes",function(t){return t||function(t,e){var r=this;r instanceof String&&(r=String(r));var n=r.length;for(0>(e=e||0)&&(e=Math.max(e+n,0));e<n;e++){var o=r[e];if(o===t||Object.is(o,t))return!0}return!1}}),o("String.prototype.includes",function(t){return t||function(t,e){if(null==this)throw new TypeError("The 'this' value for String.prototype.includes must not be null or undefined");if(t instanceof RegExp)throw new TypeError("First argument to String.prototype.includes must not be a regular expression");return-1!==this.indexOf(t,e||0)}});var x=this||self;function I(t,e){t=t.split(".");var r,n=x;t[0]in n||void 0===n.execScript||n.execScript("var "+t[0]);for(;t.length&&(r=t.shift());)t.length||void 0===e?n=n[r]&&n[r]!==Object.prototype[r]?n[r]:n[r]={}:n[r]=e}function L(t){var e;return(e=x.navigator)&&(e=e.userAgent)||(e=""),-1!=e.indexOf(t)}var S=Array.prototype.map?function(t,e){return Array.prototype.map.call(t,e,void 0)}:function(t,e){for(var r=t.length,n=Array(r),o="string"==typeof t?t.split(""):t,a=0;a<r;a++)a in o&&(n[a]=e.call(void 0,o[a],a,t));return n},N={},k=null;function C(t){var e=t.length,r=3*e/4;r%3?r=Math.floor(r):-1!="=.".indexOf(t[e-1])&&(r=-1!="=.".indexOf(t[e-2])?r-2:r-1);var n=new Uint8Array(r),o=0;return P(t,function(t){n[o++]=t}),o!==r?n.subarray(0,o):n}function P(t,e){function r(e){for(;n<t.length;){var r=t.charAt(n++),o=k[r];if(null!=o)return o;if(!/^[\s\xa0]*$/.test(r))throw Error("Unknown base64 encoding at char: "+r)}return e}U();for(var n=0;;){var o=r(-1),a=r(0),u=r(64),s=r(64);if(64===s&&-1===o)break;e(o<<2|a>>4),64!=u&&(e(a<<4&240|u>>2),64!=s&&e(u<<6&192|s))}}function U(){if(!k){k={};for(var t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),e=["+/=","+/","-_=","-_.","-_"],r=0;5>r;r++){var n=t.concat(e[r].split(""));N[r]=n;for(var o=0;o<n.length;o++){var a=n[o];void 0===k[a]&&(k[a]=o)}}}}var B="undefined"!=typeof Uint8Array,H=!(L("Trident")||L("MSIE"))&&"function"==typeof x.btoa;function M(t){if(!H){var e;void 0===e&&(e=0),U(),e=N[e];for(var r=Array(Math.floor(t.length/3)),n=e[64]||"",o=0,a=0;o<t.length-2;o+=3){var u=t[o],s=t[o+1],l=t[o+2],f=e[u>>2];u=e[(3&u)<<4|s>>4],s=e[(15&s)<<2|l>>6],l=e[63&l],r[a++]=f+u+s+l}switch(f=0,l=n,t.length-o){case 2:l=e[(15&(f=t[o+1]))<<2]||n;case 1:t=t[o],r[a]=e[t>>2]+e[(3&t)<<4|f>>4]+l+n}return r.join("")}for(e="";10240<t.length;)e+=String.fromCharCode.apply(null,t.subarray(0,10240)),t=t.subarray(10240);return e+=String.fromCharCode.apply(null,t),btoa(e)}var G,D=RegExp("[-_.]","g");function Y(t){switch(t){case"-":return"+";case"_":return"/";case".":return"=";default:return""}}function W(t){if(!H)return C(t);D.test(t)&&(t=t.replace(D,Y)),t=atob(t);for(var e=new Uint8Array(t.length),r=0;r<t.length;r++)e[r]=t.charCodeAt(r);return e}function X(){return G||(G=new Uint8Array(0))}var K={},z="function"==typeof Uint8Array.prototype.slice,V=0,J=0;function Z(t){var e=0>t,r=(t=Math.abs(t))>>>0;t=Math.floor((t-r)/4294967296),e&&(e=(r=u(Q(r,t))).next().value,t=r.next().value,r=e),V=r>>>0,J=t>>>0}var q,$="function"==typeof BigInt;function Q(t,e){return e=~e,t?t=1+~t:e+=1,[t,e]}function tt(t,e){this.i=t>>>0,this.h=e>>>0}function et(t){if(!t)return q||(q=new tt(0,0));if(!/^-?\d+$/.test(t))return null;if(16>t.length)Z(Number(t));else if($)t=BigInt(t),V=Number(t&BigInt(4294967295))>>>0,J=Number(t>>BigInt(32)&BigInt(4294967295));else{var e=+("-"===t[0]);J=V=0;for(var r=t.length,n=e,o=(r-e)%6+e;o<=r;n=o,o+=6)n=Number(t.slice(n,o)),J*=1e6,4294967296<=(V=1e6*V+n)&&(J+=V/4294967296|0,V%=4294967296);e&&(t=(e=u(Q(V,J))).next().value,e=e.next().value,V=t,J=e)}return new tt(V,J)}function rt(t,e){return Error("Invalid wire type: "+t+" (at position "+e+")")}function nt(){return Error("Failed to read varint, encoding is invalid.")}function it(t,e){return Error("Tried to read past the end of the data "+e+" > "+t)}function ot(){throw Error("Invalid UTF8")}function at(t,e){return e=String.fromCharCode.apply(null,e),null==t?e:t+e}var ut,st,lt,ft=void 0,ct="undefined"!=typeof TextDecoder,ht="undefined"!=typeof TextEncoder;function pt(t){if(t!==K)throw Error("illegal external caller")}function vt(t,e){if(pt(e),this.V=t,null!=t&&0===t.length)throw Error("ByteString should be constructed with non-empty values")}function dt(){return lt||(lt=new vt(null,K))}function yt(t){pt(K);var e=t.V;return null==(e=null==e||B&&null!=e&&e instanceof Uint8Array?e:"string"==typeof e?W(e):null)?e:t.V=e}function mt(t){if("string"==typeof t)return{buffer:W(t),C:!1};if(Array.isArray(t))return{buffer:new Uint8Array(t),C:!1};if(t.constructor===Uint8Array)return{buffer:t,C:!1};if(t.constructor===ArrayBuffer)return{buffer:new Uint8Array(t),C:!1};if(t.constructor===vt)return{buffer:yt(t)||X(),C:!0};if(t instanceof Uint8Array)return{buffer:new Uint8Array(t.buffer,t.byteOffset,t.byteLength),C:!1};throw Error("Type not convertible to a Uint8Array, expected a Uint8Array, an ArrayBuffer, a base64 encoded string, a ByteString or an Array of numbers")}function gt(t,e){this.i=null,this.m=!1,this.h=this.j=this.l=0,bt(this,t,e)}function bt(t,e,r){r=void 0===r?{}:r,t.S=void 0!==r.S&&r.S,e&&(e=mt(e),t.i=e.buffer,t.m=e.C,t.l=0,t.j=t.i.length,t.h=t.l)}function Et(t,e){if(t.h=e,e>t.j)throw it(t.j,e)}function wt(t){var e=t.i,r=t.h,n=e[r++],o=127&n;if(128&n&&(o|=(127&(n=e[r++]))<<7,128&n&&(o|=(127&(n=e[r++]))<<14,128&n&&(o|=(127&(n=e[r++]))<<21,128&n&&(o|=(n=e[r++])<<28,128&n&&128&e[r++]&&128&e[r++]&&128&e[r++]&&128&e[r++]&&128&e[r++])))))throw nt();return Et(t,r),o}function _t(t,e){if(0>e)throw Error("Tried to read a negative byte length: "+e);var r=t.h,n=r+e;if(n>t.j)throw it(e,t.j-r);return t.h=n,r}gt.prototype.reset=function(){this.h=this.l};var At=[];function Tt(){this.h=[]}function jt(t,e,r){for(;0<r||127<e;)t.h.push(127&e|128),e=(e>>>7|r<<25)>>>0,r>>>=7;t.h.push(e)}function Ft(t,e){for(;127<e;)t.h.push(127&e|128),e>>>=7;t.h.push(e)}function Rt(t,e){if(At.length){var r=At.pop();bt(r,t,e),t=r}else t=new gt(t,e);this.h=t,this.j=this.h.h,this.i=this.l=-1,this.setOptions(e)}function Ot(t){var e=t.h;if(e.h==e.j)return!1;t.j=t.h.h;var r=wt(t.h)>>>0;if(e=r>>>3,!(0<=(r&=7)&&5>=r))throw rt(r,t.j);if(1>e)throw Error("Invalid field number: "+e+" (at position "+t.j+")");return t.l=e,t.i=r,!0}function xt(t){switch(t.i){case 0:if(0!=t.i)xt(t);else t:{for(var e=(t=t.h).h,r=e+10,n=t.i;e<r;)if(!(128&n[e++])){Et(t,e);break t}throw nt()}break;case 1:Et(t=t.h,t.h+8);break;case 2:2!=t.i?xt(t):(e=wt(t.h)>>>0,Et(t=t.h,t.h+e));break;case 5:Et(t=t.h,t.h+4);break;case 3:for(e=t.l;;){if(!Ot(t))throw Error("Unmatched start-group tag: stream EOF");if(4==t.i){if(t.l!=e)throw Error("Unmatched end-group tag");break}xt(t)}break;default:throw rt(t.i,t.j)}}Tt.prototype.length=function(){return this.h.length},Tt.prototype.end=function(){var t=this.h;return this.h=[],t},Rt.prototype.setOptions=function(t){t=void 0===t?{}:t,this.ca=void 0!==t.ca&&t.ca},Rt.prototype.reset=function(){this.h.reset(),this.j=this.h.h,this.i=this.l=-1};var It=[];function Lt(){this.j=[],this.i=0,this.h=new Tt}function St(t,e){0!==e.length&&(t.j.push(e),t.i+=e.length)}function Nt(t,e){if(e=e.R){St(t,t.h.end());for(var r=0;r<e.length;r++)St(t,yt(e[r])||X())}}var kt="function"==typeof Symbol&&"symbol"==typeof Symbol()?Symbol():void 0;function Ct(t,e){return kt?t[kt]|=e:void 0!==t.A?t.A|=e:(Object.defineProperties(t,{A:{value:e,configurable:!0,writable:!0,enumerable:!1}}),e)}function Pt(t,e){kt?t[kt]&&(t[kt]&=~e):void 0!==t.A&&(t.A&=~e)}function Ut(t){var e;return null==(e=kt?t[kt]:t.A)?0:e}function Bt(t,e){kt?t[kt]=e:void 0!==t.A?t.A=e:Object.defineProperties(t,{A:{value:e,configurable:!0,writable:!0,enumerable:!1}})}function Ht(t){return Ct(t,1),t}function Mt(t,e){Bt(e,-51&t)}function Gt(t,e){Bt(e,-41&t|18)}var Dt={};function Yt(t){return null!==t&&"object"==typeof t&&!Array.isArray(t)&&t.constructor===Object}var Wt,Xt,Kt=[];function zt(t){if(2&Ut(t.o))throw Error("Cannot mutate an immutable Message")}function Vt(t){var e=t.length;(e=e?t[e-1]:void 0)&&Yt(e)?e.g=1:(e={},t.push((e.g=1,e)))}function Jt(t){var e=t.i+t.G;return t.B||(t.B=t.o[e]={})}function Zt(t,e){return-1===e?null:e>=t.i?t.B?t.B[e]:void 0:t.o[e+t.G]}function qt(t,e,r,n){zt(t),$t(t,e,r,n)}function $t(t,e,r,n){t.j&&(t.j=void 0),e>=t.i||n?Jt(t)[e]=r:(t.o[e+t.G]=r,(t=t.B)&&e in t&&delete t[e])}function Qt(t,e,r,n){var o=Zt(t,e);Array.isArray(o)||(o=Wt);var a=Ut(o);if(1&a||Ht(o),n)2&a||Ct(o,2),1&r||Object.freeze(o);else{n=!(2&r);var u=2&a;1&r||!u?n&&16&a&&!u&&Pt(o,16):$t(t,e,o=Ht(Array.prototype.slice.call(o)))}return o}function te(t,e){var r=Zt(t,e),n=null==r?r:"number"==typeof r||"NaN"===r||"Infinity"===r||"-Infinity"===r?Number(r):void 0;return null!=n&&n!==r&&$t(t,e,n),n}function ee(t,e,r,n,o){t.h||(t.h={});var a=t.h[r],u=Qt(t,r,3,o);if(!a){var s=u;a=[];var l=!!(16&Ut(t.o));u=!!(2&Ut(s));var f=s;!o&&u&&(s=Array.prototype.slice.call(s));for(var c=u,h=0;h<s.length;h++){var p=s[h],v=e,d=!1;if(d=void 0!==d&&d,void 0!==(p=Array.isArray(p)?new v(p):d?new v:void 0)){var y=d=Ut(v=p.o);u&&(y|=2),l&&(y|=16),y!=d&&Bt(v,y),v=y,c=c||!!(2&v),a.push(p)}}return t.h[r]=a,e=33|(l=Ut(s)),l!=(e=c?-9&e:8|e)&&(c=s,Object.isFrozen(c)&&(c=Array.prototype.slice.call(c)),Bt(c,e),s=c),f!==s&&$t(t,r,s),(o||n&&u)&&Ct(a,2),n&&Object.freeze(a),a}return o||(o=Object.isFrozen(a),n&&!o?Object.freeze(a):!n&&o&&(a=Array.prototype.slice.call(a),t.h[r]=a)),a}function re(t,e,r){var n=!!(2&Ut(t.o));if(e=ee(t,e,r,n,n),t=Qt(t,r,3,n),!(n||8&Ut(t))){for(n=0;n<e.length;n++){if(2&Ut((r=e[n]).o)){var o=de(r,!1);o.j=r}else o=r;r!==o&&(e[n]=o,t[n]=o.o)}Ct(t,8)}return e}function ne(t,e,r){if(null!=r&&"number"!=typeof r)throw Error("Value of float/double field must be a number|null|undefined, found "+typeof r+": "+r);qt(t,e,r)}function ie(t,e,r,n,o){zt(t);var a=ee(t,r,e,!1,!1);return r=null!=n?n:new r,t=Qt(t,e,2,!1),null!=o?(a.splice(o,0,r),t.splice(o,0,r.o)):(a.push(r),t.push(r.o)),r.C()&&Pt(t,8),r}function oe(t,e){return null==t?e:t}function ae(t,e,r){return r=void 0===r?0:r,oe(te(t,e),r)}function ue(t){switch(typeof t){case"number":return isFinite(t)?t:String(t);case"object":if(t)if(Array.isArray(t)){if(128&Ut(t))return Vt(t=Array.prototype.slice.call(t)),t}else{if(B&&null!=t&&t instanceof Uint8Array)return M(t);if(t instanceof vt){var e=t.V;return null==e?"":"string"==typeof e?e:t.V=M(e)}}}return t}function se(t,e,r,n){if(null!=t){if(Array.isArray(t))t=le(t,e,r,void 0!==n);else if(Yt(t)){var o,a={};for(o in t)a[o]=se(t[o],e,r,n);t=a}else t=e(t,n);return t}}function le(t,e,r,n){var o=Ut(t);n=n?!!(16&o):void 0,t=Array.prototype.slice.call(t);for(var a=0;a<t.length;a++)t[a]=se(t[a],e,r,n);return r(o,t),t}function fe(t){return t.ja===Dt?t.toJSON():ue(t)}function ce(t,e){128&t&&Vt(e)}function he(t,e,r){if(r=void 0===r?Gt:r,null!=t){if(B&&t instanceof Uint8Array)return t.length?new vt(new Uint8Array(t),K):dt();if(Array.isArray(t)){var n=Ut(t);return 2&n?t:!e||32&n||!(16&n||0===n)?(4&(e=Ut(t=le(t,he,4&n?Gt:r,!0)))&&2&e&&Object.freeze(t),t):(Bt(t,2|n),t)}return t.ja===Dt?ve(t):t}}function pe(t,e,r,n,o,a,u){if(t=t.h&&t.h[r]){if(2&(n=Ut(t))?n=t:(Gt(n,a=S(t,ve)),Object.freeze(a),n=a),zt(e),u=null==n?Wt:Ht([]),null!=n){for(a=!!n.length,t=0;t<n.length;t++){var s=n[t];a=a&&!(2&Ut(s.o)),u[t]=s.o}a=1|(a?8:0),((t=Ut(u))&a)!==a&&(Object.isFrozen(u)&&(u=Array.prototype.slice.call(u)),Bt(u,t|a)),e.h||(e.h={}),e.h[r]=n}else e.h&&(e.h[r]=void 0);$t(e,r,u,o)}else qt(e,r,he(n,a,u),o)}function ve(t){return 2&Ut(t.o)||Ct((t=de(t,!0)).o,2),t}function de(t,e){var r=t.o,n=[];Ct(n,16);var o=t.constructor.h;if(o&&n.push(o),o=t.B){n.length=r.length,n.fill(void 0,n.length,r.length);var a={};n[n.length-1]=a}128&Ut(r)&&Vt(n),e=e||t.C()?Gt:Mt,a=t.constructor,Xt=n,n=new a(n),Xt=void 0,t.R&&(n.R=t.R.slice()),a=!!(16&Ut(r));for(var u=o?r.length-1:r.length,s=0;s<u;s++)pe(t,n,s-t.G,r[s],!1,a,e);if(o)for(var l in o)pe(t,n,+l,o[l],!0,a,e);return n}function ye(t,e,r){null==t&&(t=Xt),Xt=void 0;var n,o=this.constructor.i||0,a=0<o,u=this.constructor.h,s=!1;if(null==t){var l=48,f=!0;a&&(o=0,l|=128),Bt(t=u?[u]:[],l)}else{if(!Array.isArray(t))throw Error();if(u&&u!==t[0])throw Error();var c=l=Ct(t,0);if((f=!!(16&c))&&((s=!!(32&c))||(c|=32)),a){if(128&c)o=0;else if(0<t.length){var h=t[t.length-1];if(Yt(h)&&"g"in h){o=0,c|=128,delete h.g;var p,v=!0;for(p in h){v=!1;break}v&&t.pop()}}}else if(128&c)throw Error();l!==c&&Bt(t,c)}if(this.G=(u?0:-1)-o,this.h=void 0,this.o=t,o=(u=this.o.length)-1,u&&Yt(u=this.o[o])?(this.B=u,this.i=o-this.G):void 0!==e&&-1<e?(this.i=Math.max(e,o+1-this.G),this.B=void 0):this.i=Number.MAX_VALUE,!a&&this.B&&"g"in this.B)throw Error('Unexpected "g" flag in sparse object of message that is not a group type.');if(r)for(e=f&&!s&&!0,a=this.i,f=0;f<r.length;f++)(s=r[f])<a?(o=t[s+=this.G])?me(o,e):t[s]=Wt:(n||(n=Jt(this)),(o=n[s])?me(o,e):n[s]=Wt)}function me(t,e){if(Array.isArray(t)){var r=Ut(t),n=1;!e||2&r||(n|=16),(r&n)!==n&&Bt(t,r|n)}}function ge(t,e,r){if(r){var n,o={};for(n in r){var a=r[n],u=a.ra;u||(o.J=a.xa||a.oa.W,a.ia?(o.aa=Oe(a.ia),u=(function(t){return function(e,r,n){return t.J(e,r,n,t.aa)}})(o)):a.ka?(o.Z=xe(a.da.P,a.ka),u=(function(t){return function(e,r,n){return t.J(e,r,n,t.Z)}})(o)):u=o.J,a.ra=u),u(e,t,a.da),o={J:o.J,aa:o.aa,Z:o.Z}}}Nt(e,t)}Bt(Kt,23),Wt=Object.freeze(Kt),ye.prototype.toJSON=function(){return le(this.o,fe,ce)},ye.prototype.C=function(){return!!(2&Ut(this.o))},ye.prototype.ja=Dt,ye.prototype.toString=function(){return this.o.toString()};var be=Symbol();function Ee(t,e,r){return t[be]||(t[be]=function(t,n){return e(t,n,r)})}function we(t){var e=t[be];if(!e){var r=Ge(t);e=function(t,e){return De(t,e,r)},t[be]=e}return e}function Ae(t){var e=t.ia;return e?we(e):(e=t.wa)?Ee(t.da.P,e,t.ka):void 0}function Te(t){var e=Ae(t),r=t.da,n=t.oa.U;return e?function(t,o){return n(t,o,r,e)}:function(t,e){return n(t,e,r)}}function je(t,e){var r=t[e];return"function"==typeof r&&0===r.length&&(r=r(),t[e]=r),Array.isArray(r)&&(Pe in r||Ie in r||0<r.length&&"function"==typeof r[0])?r:void 0}function Fe(t,e,r,n,o,a){e.P=t[0];var u=1;if(t.length>u&&"number"!=typeof t[u]){var s=t[u++];r(e,s)}for(;u<t.length;){r=t[u++];for(var l=u+1;l<t.length&&"number"!=typeof t[l];)l++;switch(s=t[u++],l-=u){case 0:n(e,r,s);break;case 1:(l=je(t,u))?(u++,o(e,r,s,l)):n(e,r,s,t[u++]);break;case 2:o(e,r,s,l=je(t,l=u++),t[u++]);break;case 3:a(e,r,s,t[u++],t[u++],t[u++]);break;case 4:a(e,r,s,t[u++],t[u++],t[u++],t[u++]);break;default:throw Error("unexpected number of binary field arguments: "+l)}}return e}var Re=Symbol();function Oe(t){var e=t[Re];if(!e){var r=Ce(t);e=function(t,e){return Ye(t,e,r)},t[Re]=e}return e}function xe(t,e){var r=t[Re];return r||(r=function(t,r){return ge(t,r,e)},t[Re]=r),r}var Ie=Symbol();function Le(t,e){t.push(e)}function Se(t,e,r){t.push(e,r.W)}function Ne(t,e,r,n){var o=Oe(n),a=Ce(n).P,u=r.W;t.push(e,function(t,e,r){return u(t,e,r,a,o)})}function ke(t,e,r,n,o,a){var u=xe(n,a),s=r.W;t.push(e,function(t,e,r){return s(t,e,r,n,u)})}function Ce(t){var e=t[Ie];return e||(e=Fe(t,t[Ie]=[],Le,Se,Ne,ke),Pe in t&&Ie in t&&(t.length=0),e)}var Pe=Symbol();function Ue(t,e){t[0]=e}function Be(t,e,r,n){var o=r.U;t[e]=n?function(t,e,r){return o(t,e,r,n)}:o}function He(t,e,r,n,o){var a=r.U,u=we(n),s=Ge(n).P;t[e]=function(t,e,r){return a(t,e,r,s,u,o)}}function Me(t,e,r,n,o,a,u){var s=r.U,l=Ee(n,o,a);t[e]=function(t,e,r){return s(t,e,r,n,l,u)}}function Ge(t){var e=t[Pe];return e||(e=Fe(t,t[Pe]={},Ue,Be,He,Me),Pe in t&&Ie in t&&(t.length=0),e)}function De(t,e,r){for(;Ot(e)&&4!=e.i;){var n=e.l,o=r[n];if(!o){var a=r[0];a&&(a=a[n])&&(o=r[n]=Te(a))}if(!o||!o(e,t,n)){n=t,a=(o=e).j,xt(o);var u=o;if(!u.ca){if(o=u.h.h-a,u.h.h=a,u=u.h,0==o)o=dt();else{if(a=_t(u,o),u.S&&u.m)o=u.i.subarray(a,a+o);else{u=u.i;var s=a;o=s===(o=a+o)?X():z?u.slice(s,o):new Uint8Array(u.subarray(s,o))}o=0==o.length?dt():new vt(o,K)}(a=n.R)?a.push(o):n.R=[o]}}}return t}function Ye(t,e,r){for(var n=r.length,o=1==n%2,a=o?1:0;a<n;a+=2)(0,r[a+1])(e,t,r[a]);ge(t,e,o?r[0]:void 0)}function We(t,e){return{U:t,W:e}}var Xe=We(function(t,e,r){if(5!==t.i)return!1;var n=(t=t.h).i,o=t.h,a=n[o],u=n[o+1],s=n[o+2];return n=n[o+3],Et(t,t.h+4),t=2*((u=(a|u<<8|s<<16|n<<24)>>>0)>>31)+1,a=u>>>23&255,u&=8388607,qt(e,r,255==a?u?NaN:1/0*t:0==a?t*Math.pow(2,-149)*u:t*Math.pow(2,a-150)*(u+Math.pow(2,23))),!0},function(t,e,r){if(null!=(e=te(e,r))){Ft(t.h,8*r+5),t=t.h;var n=+e;0===n?0<1/n?V=J=0:(J=0,V=2147483648):isNaN(n)?(J=0,V=2147483647):34028234663852886e22<(n=(r=0>n?-2147483648:0)?-n:n)?(J=0,V=(2139095040|r)>>>0):11754943508222875e-54>n?(n=Math.round(n/Math.pow(2,-149)),J=0,V=(r|n)>>>0):(e=Math.floor(Math.log(n)/Math.LN2),n*=Math.pow(2,-e),16777216<=(n=Math.round(8388608*n))&&++e,J=0,V=(r|e+127<<23|8388607&n)>>>0),r=V,t.h.push(r>>>0&255),t.h.push(r>>>8&255),t.h.push(r>>>16&255),t.h.push(r>>>24&255)}}),Ke=We(function(t,e,r){if(0!==t.i)return!1;var n=t.h,o=0,a=t=0,u=n.i,s=n.h;do{var l=u[s++];o|=(127&l)<<a,a+=7}while(32>a&&128&l);for(32<a&&(t|=(127&l)>>4),a=3;32>a&&128&l;a+=7)t|=(127&(l=u[s++]))<<a;if(Et(n,s),!(128>l))throw nt();return n=o>>>0,(t=2147483648&(l=t>>>0))&&(l=~l>>>0,0==(n=1+~n>>>0)&&(l=l+1>>>0)),n=4294967296*l+(n>>>0),qt(e,r,t?-n:n),!0},function(t,e,r){null!=(e=Zt(e,r))&&("string"==typeof e&&et(e),null!=e&&(Ft(t.h,8*r),"number"==typeof e?(t=t.h,Z(e),jt(t,V,J)):(r=et(e),jt(t.h,r.i,r.h))))}),ze=We(function(t,e,r){return 0===t.i&&(qt(e,r,wt(t.h)),!0)},function(t,e,r){if(null!=(e=Zt(e,r))&&null!=e)if(Ft(t.h,8*r),t=t.h,0<=(r=e))Ft(t,r);else{for(e=0;9>e;e++)t.h.push(127&r|128),r>>=7;t.h.push(1)}}),Ve=We(function(t,e,r){if(2!==t.i)return!1;var n=wt(t.h)>>>0,o=_t(t=t.h,n);if(t=t.i,ct){var a,u=t;(a=ut)||(a=ut=new TextDecoder("utf-8",{fatal:!0})),t=o+n,u=0===o&&t===u.length?u:u.subarray(o,t);try{var s=a.decode(u)}catch(t){if(void 0===ft){try{a.decode(new Uint8Array([128]))}catch(t){}try{a.decode(new Uint8Array([97])),ft=!0}catch(t){ft=!1}}throw!ft&&(ut=void 0),t}}else{n=(s=o)+n,o=[];for(var l,f,c=null;s<n;)128>(l=t[s++])?o.push(l):224>l?s>=n?ot():(f=t[s++],194>l||128!=(192&f)?(s--,ot()):o.push((31&l)<<6|63&f)):240>l?s>=n-1?ot():128!=(192&(f=t[s++]))||224===l&&160>f||237===l&&160<=f||128!=(192&(u=t[s++]))?(s--,ot()):o.push((15&l)<<12|(63&f)<<6|63&u):244>=l?s>=n-2?ot():128!=(192&(f=t[s++]))||f-144+(l<<28)>>30||128!=(192&(u=t[s++]))||128!=(192&(a=t[s++]))?(s--,ot()):(l=(7&l)<<18|(63&f)<<12|(63&u)<<6|63&a,l-=65536,o.push(55296+(l>>10&1023),56320+(1023&l))):ot(),8192<=o.length&&(c=at(c,o),o.length=0);s=at(c,o)}return qt(e,r,s),!0},function(t,e,r){if(null!=(e=Zt(e,r))){var n=!1;if(n=void 0!==n&&n,ht){if(n&&/(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])/.test(e))throw Error("Found an unpaired surrogate");e=(st||(st=new TextEncoder)).encode(e)}else{for(var o=0,a=new Uint8Array(3*e.length),u=0;u<e.length;u++){var s=e.charCodeAt(u);if(128>s)a[o++]=s;else{if(2048>s)a[o++]=s>>6|192;else{if(55296<=s&&57343>=s){if(56319>=s&&u<e.length){var l=e.charCodeAt(++u);if(56320<=l&&57343>=l){s=1024*(s-55296)+l-56320+65536,a[o++]=s>>18|240,a[o++]=s>>12&63|128,a[o++]=s>>6&63|128,a[o++]=63&s|128;continue}u--}if(n)throw Error("Found an unpaired surrogate");s=65533}a[o++]=s>>12|224,a[o++]=s>>6&63|128}a[o++]=63&s|128}}e=o===a.length?a:a.subarray(0,o)}Ft(t.h,8*r+2),Ft(t.h,e.length),St(t,t.h.end()),St(t,e)}}),Je=We(function(t,e,r,n,o){if(2!==t.i)return!1;e=ie(e,r,n),r=t.h.j,n=wt(t.h)>>>0;var a=t.h.h+n,u=a-r;if(0>=u&&(t.h.j=a,o(e,t,void 0,void 0,void 0),u=a-t.h.h),u)throw Error("Message parsing ended unexpectedly. Expected to read "+n+" bytes, instead read "+(n-u)+" bytes, either the data ended unexpectedly or the message misreported its own length");return t.h.h=a,t.h.j=r,!0},function(t,e,r,n,o){if(null!=(e=re(e,n,r)))for(n=0;n<e.length;n++){var a=t;Ft(a.h,8*r+2);var u=a.h.end();St(a,u),u.push(a.i),a=u,o(e[n],t),u=t;var s=a.pop();for(s=u.i+u.h.length()-s;127<s;)a.push(127&s|128),s>>>=7,u.i++;a.push(s),u.i++}});function Ze(t){return function(e,r){t:{if(It.length){var n=It.pop();n.setOptions(r),bt(n.h,e,r),e=n}else e=new Rt(e,r);try{var o=Ge(t),a=De(new o.P,e,o);break t}finally{(o=e.h).i=null,o.m=!1,o.l=0,o.j=0,o.h=0,o.S=!1,e.l=-1,e.i=-1,100>It.length&&It.push(e)}a=void 0}return a}}function qe(t){return function(){var e=new Lt;Ye(this,e,Ce(t)),St(e,e.h.end());for(var r=new Uint8Array(e.i),n=e.j,o=n.length,a=0,u=0;u<o;u++){var s=n[u];r.set(s,a),a+=s.length}return e.j=[r],r}}function $e(t){ye.call(this,t)}d($e,ye);var Qe=[$e,1,ze,2,Xe,3,Ve,4,Ve];function tr(t){ye.call(this,t,-1,er)}$e.prototype.l=qe(Qe),d(tr,ye),tr.prototype.addClassification=function(t,e){return ie(this,1,$e,t,e),this};var er=[1],rr=Ze([tr,1,Je,Qe]);function nr(t){ye.call(this,t)}d(nr,ye);var ir=[nr,1,Xe,2,Xe,3,Xe,4,Xe,5,Xe];function or(t){ye.call(this,t,-1,ar)}nr.prototype.l=qe(ir),d(or,ye);var ar=[1],ur=Ze([or,1,Je,ir]);function sr(t){ye.call(this,t)}d(sr,ye);var lr=[sr,1,Xe,2,Xe,3,Xe,4,Xe,5,Xe,6,Ke],fr=Ze(lr);function cr(t,e,r){if(r=t.createShader(0===r?t.VERTEX_SHADER:t.FRAGMENT_SHADER),t.shaderSource(r,e),t.compileShader(r),!t.getShaderParameter(r,t.COMPILE_STATUS))throw Error("Could not compile WebGL shader.\n\n"+t.getShaderInfoLog(r));return r}function hr(t){return re(t,$e,1).map(function(t){var e=Zt(t,1);return{index:null==e?0:e,qa:ae(t,2),label:null!=Zt(t,3)?oe(Zt(t,3),""):void 0,displayName:null!=Zt(t,4)?oe(Zt(t,4),""):void 0}})}function pr(t){return{x:ae(t,1),y:ae(t,2),z:ae(t,3),visibility:null!=te(t,4)?ae(t,4):void 0}}function vr(t){return re(ur(t),nr,1).map(pr)}function dr(t,e){this.i=t,this.h=e,this.m=0}function yr(t,e,r){return mr(t,e),"function"==typeof t.h.canvas.transferToImageBitmap?Promise.resolve(t.h.canvas.transferToImageBitmap()):r?Promise.resolve(t.h.canvas):"function"==typeof createImageBitmap?createImageBitmap(t.h.canvas):(void 0===t.j&&(t.j=document.createElement("canvas")),new Promise(function(e){t.j.height=t.h.canvas.height,t.j.width=t.h.canvas.width,t.j.getContext("2d",{}).drawImage(t.h.canvas,0,0,t.h.canvas.width,t.h.canvas.height),e(t.j)}))}function mr(t,e){var r=t.h;if(void 0===t.s){var n=cr(r,"\n  attribute vec2 aVertex;\n  attribute vec2 aTex;\n  varying vec2 vTex;\n  void main(void) {\n    gl_Position = vec4(aVertex, 0.0, 1.0);\n    vTex = aTex;\n  }",0),o=cr(r,"\n  precision mediump float;\n  varying vec2 vTex;\n  uniform sampler2D sampler0;\n  void main(){\n    gl_FragColor = texture2D(sampler0, vTex);\n  }",1),a=r.createProgram();if(r.attachShader(a,n),r.attachShader(a,o),r.linkProgram(a),!r.getProgramParameter(a,r.LINK_STATUS))throw Error("Could not compile WebGL program.\n\n"+r.getProgramInfoLog(a));n=t.s=a,r.useProgram(n),o=r.getUniformLocation(n,"sampler0"),t.l={O:r.getAttribLocation(n,"aVertex"),N:r.getAttribLocation(n,"aTex"),ya:o},t.v=r.createBuffer(),r.bindBuffer(r.ARRAY_BUFFER,t.v),r.enableVertexAttribArray(t.l.O),r.vertexAttribPointer(t.l.O,2,r.FLOAT,!1,0,0),r.bufferData(r.ARRAY_BUFFER,new Float32Array([-1,-1,-1,1,1,1,1,-1]),r.STATIC_DRAW),r.bindBuffer(r.ARRAY_BUFFER,null),t.u=r.createBuffer(),r.bindBuffer(r.ARRAY_BUFFER,t.u),r.enableVertexAttribArray(t.l.N),r.vertexAttribPointer(t.l.N,2,r.FLOAT,!1,0,0),r.bufferData(r.ARRAY_BUFFER,new Float32Array([0,1,0,0,1,0,1,1]),r.STATIC_DRAW),r.bindBuffer(r.ARRAY_BUFFER,null),r.uniform1i(o,0)}n=t.l,r.useProgram(t.s),r.canvas.width=e.width,r.canvas.height=e.height,r.viewport(0,0,e.width,e.height),r.activeTexture(r.TEXTURE0),t.i.bindTexture2d(e.glName),r.enableVertexAttribArray(n.O),r.bindBuffer(r.ARRAY_BUFFER,t.v),r.vertexAttribPointer(n.O,2,r.FLOAT,!1,0,0),r.enableVertexAttribArray(n.N),r.bindBuffer(r.ARRAY_BUFFER,t.u),r.vertexAttribPointer(n.N,2,r.FLOAT,!1,0,0),r.bindFramebuffer(r.DRAW_FRAMEBUFFER?r.DRAW_FRAMEBUFFER:r.FRAMEBUFFER,null),r.clearColor(0,0,0,0),r.clear(r.COLOR_BUFFER_BIT),r.colorMask(!0,!0,!0,!0),r.drawArrays(r.TRIANGLE_FAN,0,4),r.disableVertexAttribArray(n.O),r.disableVertexAttribArray(n.N),r.bindBuffer(r.ARRAY_BUFFER,null),t.i.bindTexture2d(0)}function gr(t){this.h=t}sr.prototype.l=qe(lr);var br=new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,10,9,1,7,0,65,0,253,15,26,11]);function Er(t,e){return e+t}function wr(t,e){window[t]=e}function Ar(t){var e=document.createElement("script");return e.setAttribute("src",t),e.setAttribute("crossorigin","anonymous"),new Promise(function(t){e.addEventListener("load",function(){t()},!1),e.addEventListener("error",function(){t()},!1),document.body.appendChild(e)})}function Tr(t){this.h=t,this.listeners={},this.l={},this.L={},this.s={},this.v={},this.M=this.u=this.ga=!0,this.I=Promise.resolve(),this.fa="",this.D={},this.locateFile=t&&t.locateFile||Er;var e=window.location.pathname.toString().substring(0,window.location.pathname.toString().lastIndexOf("/"))+"/";if(this.ha=e,t.options)for(var r=(e=u(Object.keys(t.options))).next();!r.done;r=e.next()){r=r.value;var n=t.options[r].default;void 0!==n&&(this.l[r]="function"==typeof n?n():n)}}function jr(t){var e,r,n,o,a,u,s,l,f,c;return F(function(h){switch(h.h){case 1:return t.ga?(e=void 0===t.h.files?[]:"function"==typeof t.h.files?t.h.files(t.l):t.h.files,b(h,F(function(t){switch(t.h){case 1:return t.s=2,b(t,WebAssembly.instantiate(br),4);case 4:t.h=3,t.s=0;break;case 2:return t.s=0,t.l=null,t.return(!1);case 3:return t.return(!0)}}),2)):h.return();case 2:return r=h.i,wr("createMediapipeSolutionsWasm",{locateFile:t.locateFile}),wr("createMediapipeSolutionsPackedAssets",{locateFile:t.locateFile}),a=e.filter(function(t){return void 0!==t.data}),u=e.filter(function(t){return void 0===t.data}),s=Promise.all(a.map(function(e){var r=Or(t,e.url);if(void 0!==e.path){var n=e.path;r=r.then(function(e){return t.overrideFile(n,e),Promise.resolve(e)})}return r})),l=Promise.all(u.map(function(e){return void 0===e.simd||e.simd&&r||!e.simd&&!r?Ar(t.locateFile(e.url,t.ha)):Promise.resolve()})).then(function(){var e,r,n;return F(function(o){if(1==o.h)return e=window.createMediapipeSolutionsWasm,r=window.createMediapipeSolutionsPackedAssets,n=t,b(o,e(r),2);n.i=o.i,o.h=0})}),f=F(function(e){return t.h.graph&&t.h.graph.url?e=b(e,Or(t,t.h.graph.url),0):(e.h=0,e=void 0),e}),b(h,Promise.all([l,s,f]),7);case 6:n.i=h.i,t.m=new OffscreenCanvas(1,1),t.i.canvas=t.m,o=t.i.GL.createContext(t.m,{antialias:!1,alpha:!1,va:"undefined"!=typeof WebGL2RenderingContext?2:1}),t.i.GL.makeContextCurrent(o),h.h=4;break;case 7:if(t.m=document.createElement("canvas"),!(c=t.m.getContext("webgl2",{}))&&!(c=t.m.getContext("webgl",{})))return alert("Failed to create WebGL canvas context when passing video frame."),h.return();t.K=c,t.i.canvas=t.m,t.i.createContext(t.m,!0,!0,{});case 4:t.j=new t.i.SolutionWasm,t.ga=!1,h.h=0}})}function Fr(t){var e,r,n,o,a,s,l,f;return F(function(c){if(1==c.h)return t.h.graph&&t.h.graph.url&&t.fa===t.h.graph.url?c.return():(t.u=!0,t.h.graph&&t.h.graph.url?(t.fa=t.h.graph.url,b(c,Or(t,t.h.graph.url),3)):void(c.h=2));for(2!=c.h&&(e=c.i,t.j.loadGraph(e)),r=u(Object.keys(t.D)),n=r.next();!n.done;n=r.next())o=n.value,t.j.overrideFile(o,t.D[o]);if(t.D={},t.h.listeners)for(a=u(t.h.listeners),s=a.next();!s.done;s=a.next())l=s.value,Lr(t,l);f=t.l,t.l={},t.setOptions(f),c.h=0})}function Rr(t){var e,r,n,o,a,s;return F(function(l){switch(l.h){case 1:if(!t.u)return l.return();if(!t.F){l.h=2;break}e=u(t.F),r=e.next();case 3:if(r.done){l.h=5;break}return b(l,(0,r.value)(),4);case 4:r=e.next(),l.h=3;break;case 5:t.F=void 0;case 2:if(t.H){for(n=new t.i.GraphOptionChangeRequestList,o=u(t.H),a=o.next();!a.done;a=o.next())s=a.value,n.push_back(s);t.j.changeOptions(n),n.delete(),t.H=void 0}t.u=!1,l.h=0}})}function Or(t,e){var r,n;return F(function(o){return e in t.L?o.return(t.L[e]):(r=t.locateFile(e,""),n=fetch(r).then(function(t){return t.arrayBuffer()}),t.L[e]=n,o.return(n))})}function xr(t,e,r){var n,o,a,s,l,f,c,h,p,v,d,y,m,g;return F(function(E){switch(E.h){case 1:if(!r)return E.return(e);for(n={},o=0,a=u(Object.keys(r)),s=a.next();!s.done;s=a.next())l=s.value,"string"!=typeof(f=r[l])&&"texture"===f.type&&void 0!==e[f.stream]&&++o;1<o&&(t.M=!1),c=u(Object.keys(r)),s=c.next();case 2:if(s.done){E.h=4;break}if(h=s.value,"string"==typeof(p=r[h]))return m=n,g=h,b(E,Ir(t,h,e[p]),14);if(v=e[p.stream],"detection_list"===p.type){if(v){for(var w=v.getRectList(),_=v.getLandmarksList(),A=v.getClassificationsList(),T=[],j=0;j<w.size();++j){var F=fr(w.get(j)),R=void 0;R=void 0===R?0:R,F={la:{sa:ae(F,1),ta:ae(F,2),height:ae(F,3),width:ae(F,4),rotation:ae(F,5,0),pa:oe(Zt(F,6),R)},ea:vr(_.get(j)),ba:hr(rr(A.get(j)))},T.push(F)}w=T}else w=[];n[h]=w,E.h=7;break}if("proto_list"===p.type){if(v){for(w=Array(v.size()),_=0;_<v.size();_++)w[_]=v.get(_);v.delete()}else w=[];n[h]=w,E.h=7;break}if(void 0===v){E.h=3;break}if("float_list"===p.type){n[h]=v,E.h=7;break}if("proto"===p.type){n[h]=v,E.h=7;break}if("texture"!==p.type)throw Error("Unknown output config type: '"+p.type+"'");return(d=t.v[h])||(d=new dr(t.i,t.K),t.v[h]=d),b(E,yr(d,v,t.M),13);case 13:y=E.i,n[h]=y;case 7:p.transform&&n[h]&&(n[h]=p.transform(n[h])),E.h=3;break;case 14:m[g]=E.i;case 3:s=c.next(),E.h=2;break;case 4:return E.return(n)}})}function Ir(t,e,r){var n;return F(function(o){return"number"==typeof r||r instanceof Uint8Array||r instanceof t.i.Uint8BlobList?o.return(r):r instanceof t.i.Texture2dDataOut?((n=t.v[e])||(n=new dr(t.i,t.K),t.v[e]=n),o.return(yr(n,r,t.M))):o.return(void 0)})}function Lr(t,e){for(var r=e.name||"$",n=[].concat(s(e.wants)),o=new t.i.StringList,a=u(e.wants),l=a.next();!l.done;l=a.next())o.push_back(l.value);a=t.i.PacketListener.implement({onResults:function(o){for(var a={},u=0;u<e.wants.length;++u)a[n[u]]=o.get(u);var s=t.listeners[r];s&&(t.I=xr(t,a,e.outs).then(function(r){r=s(r);for(var o=0;o<e.wants.length;++o){var u=a[n[o]];"object"==typeof u&&u.hasOwnProperty&&u.hasOwnProperty("delete")&&u.delete()}r&&(t.I=r)}))}}),t.j.attachMultiListener(o,a),o.delete()}function Sr(t){switch(void 0===t&&(t=0),t){case 1:return"pose_landmark_full.tflite";case 2:return"pose_landmark_heavy.tflite";default:return"pose_landmark_lite.tflite"}}function Nr(t){var e=this;t=t||{},this.h=new Tr({locateFile:t.locateFile,files:function(t){return[{url:"pose_solution_packed_assets_loader.js"},{simd:!1,url:"pose_solution_wasm_bin.js"},{simd:!0,url:"pose_solution_simd_wasm_bin.js"},{data:!0,url:Sr(t.modelComplexity)}]},graph:{url:"pose_web.binarypb"},listeners:[{wants:["pose_landmarks","world_landmarks","segmentation_mask","image_transformed"],outs:{image:{type:"texture",stream:"image_transformed"},poseLandmarks:{type:"proto",stream:"pose_landmarks",transform:vr},poseWorldLandmarks:{type:"proto",stream:"world_landmarks",transform:vr},segmentationMask:{type:"texture",stream:"segmentation_mask"}}}],inputs:{image:{type:"video",stream:"input_frames_gpu"}},options:{useCpuInference:{type:0,graphOptionXref:{calculatorType:"InferenceCalculator",fieldName:"use_cpu_inference"},default:void 0!==window.navigator&&("iPad Simulator;iPhone Simulator;iPod Simulator;iPad;iPhone;iPod".split(";").includes(navigator.platform)||navigator.userAgent.includes("Mac")&&"ontouchend"in document)},selfieMode:{type:0,graphOptionXref:{calculatorType:"GlScalerCalculator",calculatorIndex:1,fieldName:"flip_horizontal"}},modelComplexity:{type:1,graphOptionXref:{calculatorType:"ConstantSidePacketCalculator",calculatorName:"ConstantSidePacketCalculatorModelComplexity",fieldName:"int_value"},onChange:function(t){var r,n,o;return F(function(a){return 1==a.h?(r=Sr(t),n="third_party/mediapipe/modules/pose_landmark/"+r,b(a,Or(e.h,r),2)):(o=a.i,e.h.overrideFile(n,o),a.return(!0))})}},smoothLandmarks:{type:0,graphOptionXref:{calculatorType:"ConstantSidePacketCalculator",calculatorName:"ConstantSidePacketCalculatorSmoothLandmarks",fieldName:"bool_value"}},enableSegmentation:{type:0,graphOptionXref:{calculatorType:"ConstantSidePacketCalculator",calculatorName:"ConstantSidePacketCalculatorEnableSegmentation",fieldName:"bool_value"}},smoothSegmentation:{type:0,graphOptionXref:{calculatorType:"ConstantSidePacketCalculator",calculatorName:"ConstantSidePacketCalculatorSmoothSegmentation",fieldName:"bool_value"}},minDetectionConfidence:{type:1,graphOptionXref:{calculatorType:"TensorsToDetectionsCalculator",calculatorName:"poselandmarkgpu__posedetectiongpu__TensorsToDetectionsCalculator",fieldName:"min_score_thresh"}},minTrackingConfidence:{type:1,graphOptionXref:{calculatorType:"ThresholdingCalculator",calculatorName:"poselandmarkgpu__poselandmarkbyroigpu__tensorstoposelandmarksandsegmentation__ThresholdingCalculator",fieldName:"threshold"}}}})}(t=Tr.prototype).close=function(){return this.j&&this.j.delete(),Promise.resolve()},t.reset=function(){var t=this;return F(function(e){t.j&&(t.j.reset(),t.s={},t.v={}),e.h=0})},t.setOptions=function(t,e){var r=this;if(e=e||this.h.options){for(var n=[],o=[],a={},s=u(Object.keys(t)),l=s.next();!l.done;a={X:a.X,Y:a.Y},l=s.next())if(!((l=l.value)in this.l)||this.l[l]!==t[l]){this.l[l]=t[l];var f=e[l];void 0!==f&&(f.onChange&&(a.X=f.onChange,a.Y=t[l],n.push((function(t){return function(){return F(function(e){if(1==e.h)return b(e,t.X(t.Y),2);!0===e.i&&(r.u=!0),e.h=0})}})(a))),f.graphOptionXref&&(l=Object.assign({},{calculatorName:"",calculatorIndex:0},f.graphOptionXref,{valueNumber:1===f.type?t[l]:0,valueBoolean:0===f.type&&t[l],valueString:2===f.type?t[l]:""}),o.push(l)))}0===n.length&&0===o.length||(this.u=!0,this.H=(void 0===this.H?[]:this.H).concat(o),this.F=(void 0===this.F?[]:this.F).concat(n))}},t.initialize=function(){var t=this;return F(function(e){return 1==e.h?b(e,jr(t),2):3!=e.h?b(e,Fr(t),3):b(e,Rr(t),0)})},t.overrideFile=function(t,e){this.j?this.j.overrideFile(t,e):this.D[t]=e},t.clearOverriddenFiles=function(){this.D={},this.j&&this.j.clearOverriddenFiles()},t.send=function(t,e){var r,n,o,a,s,l,f,c,h,p=this;return F(function(v){switch(v.h){case 1:return p.h.inputs?(r=1e3*(null==e?performance.now():e),b(v,p.I,2)):v.return();case 2:return b(v,p.initialize(),3);case 3:for(n=new p.i.PacketDataList,o=u(Object.keys(t)),a=o.next();!a.done;a=o.next())if(s=a.value,l=p.h.inputs[s]){t:{var d=t[s];switch(l.type){case"video":var y=p.s[l.stream];if(y||(y=new dr(p.i,p.K),p.s[l.stream]=y),0===y.m&&(y.m=y.i.createTexture()),"undefined"!=typeof HTMLVideoElement&&d instanceof HTMLVideoElement)var m=d.videoWidth,g=d.videoHeight;else"undefined"!=typeof HTMLImageElement&&d instanceof HTMLImageElement?(m=d.naturalWidth,g=d.naturalHeight):(m=d.width,g=d.height);g={glName:y.m,width:m,height:g},(m=y.h).canvas.width=g.width,m.canvas.height=g.height,m.activeTexture(m.TEXTURE0),y.i.bindTexture2d(y.m),m.texImage2D(m.TEXTURE_2D,0,m.RGBA,m.RGBA,m.UNSIGNED_BYTE,d),y.i.bindTexture2d(0),y=g;break t;case"detections":for((y=p.s[l.stream])||(y=new gr(p.i),p.s[l.stream]=y),y.data||(y.data=new y.h.DetectionListData),y.data.reset(d.length),g=0;g<d.length;++g){m=d[g];var E=y.data,w=E.setBoundingBox,_=g,A=m.la,T=new sr;if(ne(T,1,A.sa),ne(T,2,A.ta),ne(T,3,A.height),ne(T,4,A.width),ne(T,5,A.rotation),qt(T,6,A.pa),A=T.l(),w.call(E,_,A),m.ea)for(E=0;E<m.ea.length;++E){T=m.ea[E],_=(w=y.data).addNormalizedLandmark,A=g,T=Object.assign({},T,{visibility:T.visibility?T.visibility:0});var j=new nr;ne(j,1,T.x),ne(j,2,T.y),ne(j,3,T.z),T.visibility&&ne(j,4,T.visibility),T=j.l(),_.call(w,A,T)}if(m.ba)for(E=0;E<m.ba.length;++E)_=(w=y.data).addClassification,A=g,T=m.ba[E],ne(j=new $e,2,T.qa),T.index&&qt(j,1,T.index),T.label&&qt(j,3,T.label),T.displayName&&qt(j,4,T.displayName),T=j.l(),_.call(w,A,T)}y=y.data;break t;default:y={}}}switch(f=y,c=l.stream,l.type){case"video":n.pushTexture2d(Object.assign({},f,{stream:c,timestamp:r}));break;case"detections":(h=f).stream=c,h.timestamp=r,n.pushDetectionList(h);break;default:throw Error("Unknown input config type: '"+l.type+"'")}}return p.j.send(n),b(v,p.I,4);case 4:n.delete(),v.h=0}})},t.onResults=function(t,e){this.listeners[e||"$"]=t},I("Solution",Tr),I("OptionType",{BOOL:0,NUMBER:1,ua:2,0:"BOOL",1:"NUMBER",2:"STRING"}),(t=Nr.prototype).reset=function(){this.h.reset()},t.close=function(){return this.h.close(),Promise.resolve()},t.onResults=function(t){this.h.onResults(t)},t.initialize=function(){var t=this;return F(function(e){return b(e,t.h.initialize(),0)})},t.send=function(t,e){var r=this;return F(function(n){return b(n,r.h.send(t,e),0)})},t.setOptions=function(t){this.h.setOptions(t)},I("Pose",Nr),I("POSE_CONNECTIONS",[[0,1],[1,2],[2,3],[3,7],[0,4],[4,5],[5,6],[6,8],[9,10],[11,12],[11,13],[13,15],[15,17],[15,19],[15,21],[17,19],[12,14],[14,16],[16,18],[16,20],[16,22],[18,20],[11,23],[12,24],[23,24],[23,25],[24,26],[25,27],[26,28],[27,29],[28,30],[29,31],[30,32],[27,31],[28,32]]),I("POSE_LANDMARKS",{NOSE:0,LEFT_EYE_INNER:1,LEFT_EYE:2,LEFT_EYE_OUTER:3,RIGHT_EYE_INNER:4,RIGHT_EYE:5,RIGHT_EYE_OUTER:6,LEFT_EAR:7,RIGHT_EAR:8,LEFT_RIGHT:9,RIGHT_LEFT:10,LEFT_SHOULDER:11,RIGHT_SHOULDER:12,LEFT_ELBOW:13,RIGHT_ELBOW:14,LEFT_WRIST:15,RIGHT_WRIST:16,LEFT_PINKY:17,RIGHT_PINKY:18,LEFT_INDEX:19,RIGHT_INDEX:20,LEFT_THUMB:21,RIGHT_THUMB:22,LEFT_HIP:23,RIGHT_HIP:24,LEFT_KNEE:25,RIGHT_KNEE:26,LEFT_ANKLE:27,RIGHT_ANKLE:28,LEFT_HEEL:29,RIGHT_HEEL:30,LEFT_FOOT_INDEX:31,RIGHT_FOOT_INDEX:32}),I("POSE_LANDMARKS_LEFT",{LEFT_EYE_INNER:1,LEFT_EYE:2,LEFT_EYE_OUTER:3,LEFT_EAR:7,LEFT_RIGHT:9,LEFT_SHOULDER:11,LEFT_ELBOW:13,LEFT_WRIST:15,LEFT_PINKY:17,LEFT_INDEX:19,LEFT_THUMB:21,LEFT_HIP:23,LEFT_KNEE:25,LEFT_ANKLE:27,LEFT_HEEL:29,LEFT_FOOT_INDEX:31}),I("POSE_LANDMARKS_RIGHT",{RIGHT_EYE_INNER:4,RIGHT_EYE:5,RIGHT_EYE_OUTER:6,RIGHT_EAR:8,RIGHT_LEFT:10,RIGHT_SHOULDER:12,RIGHT_ELBOW:14,RIGHT_WRIST:16,RIGHT_PINKY:18,RIGHT_INDEX:20,RIGHT_THUMB:22,RIGHT_HIP:24,RIGHT_KNEE:26,RIGHT_ANKLE:28,RIGHT_HEEL:30,RIGHT_FOOT_INDEX:32}),I("POSE_LANDMARKS_NEUTRAL",{NOSE:0}),I("VERSION","0.5.1675469404")}).call(this)},2409,[]);
__d(function(g,r,i,a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0});var n=r(d[0]);Object.keys(n).forEach(function(t){"default"!==t&&"__esModule"!==t&&(t in e&&e[t]===n[t]||Object.defineProperty(e,t,{enumerable:!0,get:function(){return n[t]}}))}),r(d[1])},2410,[2411,2421]);
__d(function(g,r,i,a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),r(d[0]);var o=r(d[1]),t=r(d[2]),u=r(d[3]),n=r(d[4]);Object.keys(n).forEach(function(o){"default"!==o&&"__esModule"!==o&&(o in e&&e[o]===n[o]||Object.defineProperty(e,o,{enumerable:!0,get:function(){return n[o]}}))}),
/**
   * @license
   * Copyright 2022 Google Inc. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   */
(0,u.isWebGPUSupported)()&&(0,o.registerBackend)('webgpu',async()=>{const u={powerPreference:(0,o.env)().get('WEBGPU_USE_LOW_POWER_GPU')?'low-power':'high-performance'},n=await navigator.gpu.requestAdapter(u),p={},s=[];n.features.has('timestamp-query')&&s.push('timestamp-query'),n.features.has('bgra8unorm-storage')&&s.push(['bgra8unorm-storage']),p.requiredFeatures=s;const f=n.limits;p.requiredLimits={maxComputeWorkgroupStorageSize:f.maxComputeWorkgroupStorageSize,maxComputeWorkgroupsPerDimension:f.maxComputeWorkgroupsPerDimension,maxStorageBufferBindingSize:f.maxStorageBufferBindingSize,maxBufferSize:f.maxBufferSize,maxComputeWorkgroupSizeX:f.maxComputeWorkgroupSizeX,maxComputeInvocationsPerWorkgroup:f.maxComputeInvocationsPerWorkgroup};const c=await n.requestDevice(p),S='info'in n?n.info:'requestAdapterInfo'in n?await n.requestAdapterInfo():void 0;return new t.WebGPUBackend(c,S)},3)},2411,[2412,1158,2413,2419,2420]);
__d(function(g,r,i,a,m,e,d){
/**
   * @license
   * Copyright 2019 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   */
const _=(0,r(d[0]).env)();_.registerFlag('WEBGPU_DEFERRED_SUBMIT_BATCH_SIZE',()=>15),_.registerFlag('WEBGPU_CPU_FORWARD',()=>!0),_.registerFlag('WEBGPU_MATMUL_PROGRAM_TYPE',()=>-1),_.registerFlag('WEBGPU_USE_NAIVE_CONV2D_TRANSPOSE',()=>!0),_.registerFlag('WEBGPU_USE_LOW_POWER_GPU',()=>!1),_.registerFlag('WEBGPU_CPU_HANDOFF_SIZE_THRESHOLD',()=>1e3),_.registerFlag('WEBGPU_USE_PROFILE_TOOL',()=>!1),_.registerFlag('WEBGPU_IMPORT_EXTERNAL_TEXTURE',()=>!0),_.registerFlag('WEBGPU_USE_NAIVE_CONV2D_DEBUG',()=>!1),_.registerFlag('WEBGPU_THRESHOLD_TO_INCREASE_WORKGROUPS_FOR_MATMUL',()=>-1),_.registerFlag('WEBGPU_CONV_SEPARATE_IM2COL_SHADER',()=>!1),_.registerFlag('WEBGPU_PRINT_SHADER',()=>''),_.registerFlag('WEBGPU_ENGINE_COMPILE_ONLY',()=>!1)},2412,[1158]);
__d(function(g,_r,_i,a,m,_e,_d){Object.defineProperty(_e,"__esModule",{value:!0}),_e.WebGPUBackend=void 0,_r(_d[0]);var e=_r(_d[1]),t=_r(_d[2]),s=_r(_d[3]),r=_r(_d[4]),n=o(_r(_d[5])),i=o(_r(_d[6]));function o(e,t){if("function"==typeof WeakMap)var s=new WeakMap,r=new WeakMap;return(o=function(e,t){if(!t&&e&&e.__esModule)return e;var n,i,o={__proto__:null,default:e};if(null===e||"object"!=typeof e&&"function"!=typeof e)return o;if(n=t?r:s){if(n.has(e))return n.get(e);n.set(e,o)}for(const t in e)"default"!==t&&{}.hasOwnProperty.call(e,t)&&((i=(n=Object.defineProperty)&&Object.getOwnPropertyDescriptor(e,t))&&(i.get||i.set)?n(o,t,i):o[t]=e[t]);return o})(e,t)}
/**
   * @license
   * Copyright 2019 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   */const u=(0,e.env)().getNumber('WEBGPU_CPU_HANDOFF_SIZE_THRESHOLD'),d=(t,s)=>{const r=t.limits.maxComputeWorkgroupsPerDimension,n=s.dispatchLayout,i=s.dispatch;if(i.every(e=>e<=r))return i;e.util.assert(i[0]>r&&void 0===n.y&&void 0===n.z,()=>'Dispatch size exceeds WebGPU limits in Y or Z dimension.');let o=Math.ceil(Math.sqrt(i[0]));return o>r?(o=Math.ceil(Math.cbrt(i[0])),e.util.assert(o<=r,()=>'Total dispatch size exceeds WebGPU maximum.'),[o,o,o]):[o,o,1]};class h extends e.KernelBackend{nextDataId(){return h.nextDataId++}constructor(n,o){if(super(),this.commandQueueOwnedIds=new WeakSet,this.dispatchCountInPass=0,this.disposed=!1,this.downloadWaitMs=0,this.tensorDataPendingDisposal=[],this.queryResolveBuffer=null,this.querySet=null,this.querySetCount=2,this.stagingPendingDisposal=[],this.uniformPendingDisposal=[],this.uploadWaitMs=0,this.hasReadSyncWarned=!1,this.hasTimestampQueryWarned=!1,!i.isWebGPUSupported())throw new Error('WebGPU is not supported on this device');this.pipelineCache={},this.device=n,this.queue=n.queue,this.commandEncoder=null,this.computePassEncoder=null,this.adapterInfo=new t.AdapterInfo(o),this.supportTimestampQuery=this.device.features.has('timestamp-query'),this.thresholdToIncreaseWorkgroups=this.adapterInfo.intelGPUGeneration>=12?16:8,this.bufferManager=new s.BufferManager(this.device),this.textureManager=new r.TextureManager(this.device),this.tensorMap=new e.DataStorage(this,(0,e.engine)()),(0,e.env)().getBool('WEBGPU_USE_PROFILE_TOOL')&&(this.dummyCanvas=document.createElement('canvas'),this.dummyCanvas.width=1,this.dummyCanvas.height=1,this.dummyContext=this.dummyCanvas.getContext('webgpu'),this.dummyContext.configure({device:n,format:'bgra8unorm'}),document.body.appendChild(this.dummyCanvas))}floatPrecision(){return 32}disposeData(e,t=!1){if(!this.tensorMap.has(e))return!0;const s=this.tensorMap.get(e);return t?s.refCount=0:s.refCount--,!(s.refCount>0)&&(null!=s.complexTensorInfos&&(this.disposeData(s.complexTensorInfos.real.dataId),this.disposeData(s.complexTensorInfos.imag.dataId)),this.commandQueueOwnedIds.has(e)?(this.tensorDataPendingDisposal.push(e),!0):(this.releaseResource(e),this.tensorMap.delete(e),!0))}memory(){return{numBytesInGPU:this.bufferManager.numBytesUsed,numBytesAllocatedInGPU:this.bufferManager.numBytesAllocated,unreliable:!1}}releaseResource(e){const t=this.tensorMap.get(e);t&&t.resource&&(t.external||(t.resource instanceof GPUBuffer?this.bufferManager.releaseBuffer(t.resource):t.resource instanceof GPUTexture&&this.textureManager.releaseTexture(t.resource)),t.resource=null)}refCount(e){if(this.tensorMap.has(e)){return this.tensorMap.get(e).refCount}return 0}incRef(e){this.tensorMap.get(e).refCount++}decRef(e){if(this.tensorMap.has(e)){this.tensorMap.get(e).refCount--}}write(e,t,s){if('complex64'===s&&null!=e)throw new Error("Cannot write to a complex64 dtype. Please use tf.complex(real, imag).");const r={id:this.nextDataId()};return this.tensorMap.set(r,{dtype:s,shape:t,values:e,refCount:1}),r}move(e,t,s,r,n){if('complex64'===r)throw new Error("Cannot write to a complex64 dtype. Please use tf.complex(real, imag).");this.tensorMap.set(e,{dtype:r,shape:s,values:t,refCount:n})}submitQueue(){this.queue.submit([this.commandEncoder.finish()]),this.commandEncoder=null,this.dispatchCountInPass=0,this.commandQueueOwnedIds=new WeakSet,this.tensorDataPendingDisposal.forEach(e=>{this.releaseResource(e),this.tensorMap.delete(e)}),this.uniformPendingDisposal.forEach(e=>this.bufferManager.releaseBuffer(e)),this.stagingPendingDisposal.forEach(e=>this.bufferManager.releaseBuffer(e,!1)),this.tensorDataPendingDisposal=[],this.uniformPendingDisposal=[],this.stagingPendingDisposal=[]}ensureCommandEncoderReady(){this.commandEncoder||(this.commandEncoder=this.device.createCommandEncoder())}endComputePassEncoder(){this.computePassEncoder&&(this.computePassEncoder.end(),this.computePassEncoder=null)}async checkCompileCompletionAsync(){let e;try{e=await Promise.all(Object.values(this.pipelineCache))}catch(e){throw new Error(e.message)}Object.keys(this.pipelineCache).map((t,s)=>{this.pipelineCache[t]=e[s]})}async getBufferData(t){if((0,e.env)().getBool('WEBGPU_ENGINE_COMPILE_ONLY'))return console.warn('The data may be invalid since WEBGPU_ENGINE_COMPILE_ONLY is true, this can only be called when WEBGPU_ENGINE_COMPILE_ONLY is false'),null;const s=t.size,r=this.bufferManager.acquireBuffer(s,GPUBufferUsage.COPY_DST|GPUBufferUsage.MAP_READ);this.ensureCommandEncoderReady(),this.endComputePassEncoder(),this.commandEncoder.copyBufferToBuffer(t,0,r,0,s),this.submitQueue(),await r.mapAsync(GPUMapMode.READ);const n=r.getMappedRange().slice(0);return r.unmap(),null!=r&&this.bufferManager.releaseBuffer(r),(0,e.env)().getBool('WEBGPU_USE_PROFILE_TOOL')&&(e.util.assert(void 0!==this.dummyContext,()=>"Fail to get context for profiling tool"),this.dummyContext.getCurrentTexture()),n}convertAndCacheOnCPU(e,t){const s=this.tensorMap.get(e);return s.values=t,s.values}readSync(t){const s=this.tensorMap.get(t),{values:r,complexTensorInfos:n}=s;if(null!=r||'string'===s.dtype)return r;if('complex64'===s.dtype){const s=this.readSync(n.real.dataId),r=this.readSync(n.imag.dataId),i=e.util.convertBackendValuesAndArrayBuffer(e.backend_util.mergeRealAndImagArrays(s,r).buffer,'float32');return this.convertAndCacheOnCPU(t,i),i}this.hasReadSyncWarned||(this.hasReadSyncWarned=!0,console.warn("The performance of synchronously reading data from GPU to CPU is poor on the webgpu backend, please use asynchronous APIs instead."));const i=['opaque','premultiplied'],o=s.resource,u=o.size;e.util.assert(u%4==0,()=>"Because there is 4 bytes for one pixel, buffer size must be multiple of 4.");const d=u/4,h=new ArrayBuffer(u),c=256,p=i.map(e=>new OffscreenCanvas(c,256)),l=new OffscreenCanvas(c,256);this.endComputePassEncoder(),p.map((e,t)=>{const s=e.getContext('webgpu');return s.configure({device:this.device,format:'bgra8unorm',usage:GPUTextureUsage.COPY_DST,alphaMode:i[t]}),s.getCurrentTexture()}).map((e,t)=>{const s=(s,r,n)=>{this.ensureCommandEncoderReady(),this.commandEncoder.copyBufferToTexture({buffer:o,bytesPerRow:1024,offset:n},{texture:e},{width:s,height:r}),this.submitQueue();const u=l.getContext('2d',{willReadFrequently:!0});u.clearRect(0,0,s,r),u.drawImage(p[t],0,0);const d=u.getImageData(0,0,s,r).data,c=i[t],f=new Uint8ClampedArray(h,n,s*r*4);for(let e=0;e<f.length;e+=4)if('premultiplied'===c)f[e+3]=d[e+3];else{const t=d[e];f[e]=d[e+2],f[e+1]=d[e+1],f[e+2]=t}},r=Math.floor(d/65536);let n=c,u=256,f=0;for(let e=0;e<r;e++)s(n,u,f),f+=262144;const y=d%65536;u=Math.floor(y/c),u>0&&(s(n,u,f),f+=1024*u),n=y%c,n>0&&s(n,1,f)});const f=e.util.convertBackendValuesAndArrayBuffer(h,s.dtype);return this.convertAndCacheOnCPU(t,f),f}async read(t){if(!this.tensorMap.has(t))throw new Error(`Tensor ${t} was not registered!`);const s=this.tensorMap.get(t),{values:r}=s;if(null!=r)return r;let n;if('complex64'===s.dtype){const t=await Promise.all([this.read(s.complexTensorInfos.real.dataId),this.read(s.complexTensorInfos.imag.dataId)]),r=t[0],i=t[1];n=e.backend_util.mergeRealAndImagArrays(r,i)}else{const t=await this.getBufferData(s.resource);n=e.util.convertBackendValuesAndArrayBuffer(t,s.dtype)}return this.convertAndCacheOnCPU(t,n),n}copyBuffer(e){const t=e.size,s=e.usage,r=this.bufferManager.acquireBuffer(t,s);return this.ensureCommandEncoderReady(),this.endComputePassEncoder(),this.commandEncoder.copyBufferToBuffer(e,0,r,0,t),this.submitQueue(),r}createTensorFromGPUData(t,s,r){let n=t.buffer;if('complex64'===r)throw new Error("Cannot write to a complex64 dtype. ");const o={id:this.nextDataId()};this.tensorMap.set(o,{dtype:r,shape:s,values:null,refCount:1,external:t.zeroCopy});const u=this.tensorMap.get(o),d=i.GPUBytesPerElement(u.dtype)*e.util.sizeFromShape(u.shape);if(t.buffer.size<d)throw new Error(`GPUBuffer size(${t.buffer.size}) is smaller than tensor size(${d})!`);if((t.buffer.usage&(GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_SRC))!==(GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_SRC))throw new Error('GPUBuffer.usage should include GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_SRC!');return!0!==t.zeroCopy&&(n=this.copyBuffer(n)),u.resource=n,(0,e.engine)().makeTensorFromDataId(o,s,r,this)}readToGPU(t){const s=this.tensorMap.get(t),{values:r,dtype:n,shape:i,resource:o}=s;if('complex64'===n)throw new Error('Does not support reading buffer for complex64 dtype.');if(null==o)throw null!=r?new Error('Data is not on GPU but on CPU.'):new Error('There is no data on GPU or CPU.');const u=o,d=u.size,h=u.usage,c=this.bufferManager.acquireBuffer(d,h);this.ensureCommandEncoderReady(),this.endComputePassEncoder(),this.commandEncoder.copyBufferToBuffer(o,0,c,0,d),this.submitQueue();const p=this.makeTensorInfo(i,n),l=(0,e.engine)().makeTensorFromTensorInfo(p);return this.tensorMap.get(p.dataId).resource=c,{tensorRef:l,buffer:c}}bufferSync(t){const s=this.readSync(t.dataId);if('string'===t.dtype)try{const r=s.map(t=>e.util.decodeString(t));return(0,e.buffer)(t.shape,t.dtype,r)}catch(e){throw new Error('Failed to decode encoded string bytes into utf-8')}return(0,e.buffer)(t.shape,t.dtype,s)}async time(t){this.supportTimestampQuery||this.hasTimestampQueryWarned||(console.warn("This device doesn't support timestamp-query extension. Start Chrome browser with flag --enable-dawn-features=allow_unsafe_apis to try it again. Otherwise, zero will be shown for the kernel time when profiling mode is enabled."),this.hasTimestampQueryWarned=!0);const s=this.activeTimers,r=[];let n=!1;null==this.programTimersStack?(this.programTimersStack=r,n=!0):this.activeTimers.push(r),this.activeTimers=r,t();const i=e.util.flatten(this.activeTimers.map(e=>e.query)).filter(e=>null!=e),o=e.util.flatten(this.activeTimers.map(e=>e.name)).filter(e=>null!=e);this.activeTimers=s,n&&(this.programTimersStack=null);const u={uploadWaitMs:this.uploadWaitMs,downloadWaitMs:this.downloadWaitMs,kernelMs:null,wallMs:null},d=await Promise.all(i);return u.kernelMs=e.util.sum(d),u.getExtraProfileInfo=()=>d.map((e,t)=>({name:o[t],ms:e})).map(e=>`${e.name}: ${e.ms}`).join(', '),this.uploadWaitMs=0,this.downloadWaitMs=0,u}makeTensorInfo(t,s,r){'string'===s&&null!=r&&r.length>0&&e.util.isString(r[0])&&(r=r.map(t=>e.util.encodeString(t)));return{dataId:this.write(r,t,s),shape:t,dtype:s}}tensorToBinding(e){if(!e)return null;const t=this.tensorMap.get(e.dataId).resource;return t instanceof GPUBuffer?{buffer:t}:t instanceof GPUTexture?t.createView():t}uploadToGPU(t){const s=this.tensorMap.get(t);if(null!=s.resource)return;const r=i.GPUBytesPerElement(s.dtype)*e.util.sizeFromShape(s.shape);let n;const o=GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_SRC|GPUBufferUsage.COPY_DST;if(s.values){if(n=this.bufferManager.acquireBuffer(r,o,!0),'unmapped'===n.mapState){const e=this.bufferManager.acquireBuffer(r,GPUBufferUsage.MAP_WRITE|GPUBufferUsage.COPY_SRC,!0,!1),t=e.getMappedRange();'int32'===s.dtype||'bool'===s.dtype?new Int32Array(t).set(s.values):new Float32Array(t).set(s.values),e.unmap(),this.ensureCommandEncoderReady(),this.endComputePassEncoder(),this.commandEncoder.copyBufferToBuffer(e,0,n,0,r),this.stagingPendingDisposal.push(e)}else{const e=n.getMappedRange();'int32'===s.dtype||'bool'===s.dtype?new Int32Array(e).set(s.values):new Float32Array(e).set(s.values),n.unmap()}s.values=null}else n=this.bufferManager.acquireBuffer(r,o);s.resource=n}makeUniforms(t){let s=0,r=0;const n=[];let i=1;t.forEach(t=>{let o;switch(0===t.data.length&&(t.data=[1]),t.data.length){case 1:o=4;break;case 2:o=8;break;case 3:case 4:case 5:case 6:o=16;break;default:e.util.assert(!1,()=>`Unsupported ${t.data.length}D shape`)}5!==r&&6!==r||(o=16),o>i&&(i=o),s=Math.ceil(s/o)*o,r=t.data.length,n.push(s),s+=4*t.data.length}),s=Math.ceil(s/i)*i;const o=new ArrayBuffer(s);t.forEach((e,t)=>{const s=n[t];'int32'===e.type?new Int32Array(o,s,e.data.length).set(e.data):'uint32'===e.type?new Uint32Array(o,s,e.data.length).set(e.data):new Float32Array(o,s,e.data.length).set(e.data)});const u=this.bufferManager.acquireBuffer(s,GPUBufferUsage.COPY_DST|GPUBufferUsage.UNIFORM);return this.queue.writeBuffer(u,0,o,0,s),this.uniformPendingDisposal.push(u),{offset:0,size:s,buffer:u}}runWebGPUProgram(t,s,r,i,o){if(o||(o=this.makeTensorInfo(t.outputShape,r)),0===e.util.sizeFromShape(o.shape))return this.tensorMap.get(o.dataId).values=e.util.getTypedArrayFromDType(o.dtype,0),o;this.uploadToGPU(o.dataId),t.dispatch=d(this.device,t);const u=s.map((e,s)=>{if('complex64'===e.dtype)throw new Error("GPGPUProgram does not support complex64 input. For complex64 dtypes, please separate the program into real and imaginary parts.");return this.uploadToGPU(e.dataId),{dtype:this.tensorMap.get(e.dataId).dtype,shape:e.shape,name:t.variableNames[s]}});t.shaderKey=n.makeShaderKey(t,u,o);const h=(0,e.env)().getBool('WEBGPU_ENGINE_COMPILE_ONLY');return t.shaderKey in this.pipelineCache||(this.pipelineCache[t.shaderKey]=n.compileProgram(this.device,t,u,o,h)),t.pipeline=this.pipelineCache[t.shaderKey],h||this.recordAndSubmit(t,o,s,i),o}recordAndSubmit(t,s,r,i){if(t.pipeline instanceof Promise)throw new Error('Please call checkCompileCompletionAsync to ensure parallel compilation is done!');let o=[],u=[];const d='int32';if(null==t.pixelsOpType){o.push({type:'float32',data:[NaN]},{type:'float32',data:[1/0]}),u=r.concat(s).map(e=>e.shape);const t='int32';u.map(s=>{o.push({type:t,data:s});const r=e.util.computeStrides(s);o.push({type:t,data:r})})}else{const t=e.util.computeStrides(s.shape);o.push({type:d,data:t})}if(t.size){const s=e.util.sizeFromShape(t.outputShape);o.push({type:d,data:[t.outputComponent?s/t.outputComponent:s]})}i&&(o=[...o,...i]);const h=[this.tensorToBinding(s),...r.map(e=>this.tensorToBinding(e)),this.makeUniforms(o)];r.forEach(e=>{this.commandQueueOwnedIds.add(e.dataId)}),this.commandQueueOwnedIds.add(s.dataId);const c=this.device.createBindGroup({layout:t.pipeline.getBindGroupLayout(0),entries:h.map((e,t)=>({binding:t,resource:e}))}),p=null!=this.activeTimers;this.ensureCommandEncoderReady();const l={};p&&this.supportTimestampQuery?(this.endComputePassEncoder(),null==this.querySet&&(this.querySet=this.device.createQuerySet({type:'timestamp',count:this.querySetCount})),l.timestampWrites={querySet:this.querySet,beginningOfPassWriteIndex:0,endOfPassWriteIndex:1},this.computePassEncoder=this.commandEncoder.beginComputePass(l)):this.computePassEncoder||(this.computePassEncoder=this.commandEncoder.beginComputePass(l)),this.computePassEncoder.setPipeline(t.pipeline),this.computePassEncoder.setBindGroup(0,c),this.computePassEncoder.dispatchWorkgroups(t.dispatch[0],t.dispatch[1],t.dispatch[2]),this.dispatchCountInPass++,(p||(0,e.env)().get('WEBGPU_DEFERRED_SUBMIT_BATCH_SIZE')<=this.dispatchCountInPass||t.pixelsOpType===n.PixelsOpType.DRAW)&&(this.endComputePassEncoder(),p?this.activeTimers.push({name:t.constructor.name,query:this.getQueryTime()}):this.submitQueue())}async getQueryTime(){if(!this.supportTimestampQuery)return 0;null==this.queryResolveBuffer&&(this.queryResolveBuffer=this.bufferManager.acquireBuffer(8*this.querySetCount,GPUBufferUsage.COPY_SRC|GPUBufferUsage.COPY_DST|GPUBufferUsage.QUERY_RESOLVE)),this.commandEncoder.resolveQuerySet(this.querySet,0,this.querySetCount,this.queryResolveBuffer,0);const e=this.bufferManager.acquireBuffer(8*this.querySetCount,GPUBufferUsage.MAP_READ|GPUBufferUsage.COPY_DST);this.commandEncoder.copyBufferToBuffer(this.queryResolveBuffer,0,e,0,8*this.querySetCount),this.submitQueue(),await e.mapAsync(GPUMapMode.READ);const t=new BigUint64Array(e.getMappedRange()),s=Number(t[1]-t[0])/1e6;return e.unmap(),this.bufferManager.releaseBuffer(e),s}shouldExecuteOnCPU(t,s=u){return(0,e.env)().getBool('WEBGPU_CPU_FORWARD')&&t.every(t=>null==this.tensorMap.get(t.dataId).resource&&e.util.sizeFromShape(t.shape)<s)}numDataIds(){return this.tensorMap.numDataIds()-this.tensorDataPendingDisposal.length}dispose(){this.disposed||(null!=this.querySet&&this.querySet.destroy(),this.bufferManager.dispose(),this.textureManager.dispose(),this.disposed=!0)}}_e.WebGPUBackend=h,h.nextDataId=0},2413,[2412,1158,2414,2415,2416,2417,2419]);
__d(function(g,r,i,a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.AdapterInfo=void 0;e.AdapterInfo=
/**
   * @license
   * Copyright 2022 Google LLC.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   */
class{constructor(t){t&&(this.vendor=t.vendor,this.architecture=t.architecture,this.intelGPUGeneration=this.getIntelGPUGeneration())}getIntelGPUGeneration(){if(this.isIntel()){if(this.architecture.startsWith('gen'))return Number(this.architecture.match(/\d+/));if(this.architecture.startsWith('xe'))return 12}return 0}isIntel(){return'intel'===this.vendor}}},2414,[]);
__d(function(g,r,i,a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.BufferManager=void 0;function s(s,f){return`${s}_${f}`}e.BufferManager=
/**
   * @license
   * Copyright 2019 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   */
class{constructor(s){this.device=s,this.numUsedBuffers=0,this.numFreeBuffers=0,this.freeBuffers=new Map,this.usedBuffers=new Map,this.numBytesUsed=0,this.numBytesAllocated=0}acquireBuffer(f,t,u=!1,h=!0){let n;const B=s(f,t);return h?(this.freeBuffers.has(B)||this.freeBuffers.set(B,[]),this.freeBuffers.get(B).length>0?(n=this.freeBuffers.get(B).pop(),this.numFreeBuffers--):(n=this.device.createBuffer({size:f,usage:t,mappedAtCreation:u}),this.numBytesAllocated+=f)):(n=this.device.createBuffer({size:f,usage:t,mappedAtCreation:u}),this.numBytesAllocated+=f),this.usedBuffers.has(B)||this.usedBuffers.set(B,[]),this.usedBuffers.get(B).push(n),this.numUsedBuffers++,this.numBytesUsed+=f,n}releaseBuffer(f,t=!0){if(0===this.freeBuffers.size)return;const u=f.size,h=s(u,f.usage),n=this.usedBuffers.get(h),B=n.indexOf(f);if(B<0)throw new Error('Cannot find the buffer in buffer manager');n[B]=n[n.length-1],n.pop(),this.numUsedBuffers--,this.numBytesUsed-=u,t?(this.freeBuffers.get(h).push(f),this.numFreeBuffers++):(f.destroy(),this.numBytesAllocated-=u)}getNumUsedBuffers(){return this.numUsedBuffers}getNumFreeBuffers(){return this.numFreeBuffers}dispose(){this.freeBuffers.forEach((s,f)=>{s.forEach(s=>{s.destroy()})}),this.usedBuffers.forEach((s,f)=>{s.forEach(s=>{s.destroy()})}),this.freeBuffers=new Map,this.usedBuffers=new Map,this.numUsedBuffers=0,this.numFreeBuffers=0,this.numBytesUsed=0,this.numBytesAllocated=0}}},2415,[]);
__d(function(g,r,i,a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.TextureManager=void 0;function t(t,s,u,h){return`${t}_${s}_${u}_${h}`}function s(t){if('rgba8unorm'===t)return 16;throw new Error(`${t} is not supported!`)}e.TextureManager=
/**
   * @license
   * Copyright 2022 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   */
class{constructor(t){this.device=t,this.numUsedTextures=0,this.numFreeTextures=0,this.freeTextures=new Map,this.usedTextures=new Map,this.numBytesUsed=0,this.numBytesAllocated=0}acquireTexture(u,h,n,x){const T=u*h*s(n),o=t(u,h,n,x);if(this.freeTextures.has(o)||this.freeTextures.set(o,[]),this.usedTextures.has(o)||this.usedTextures.set(o,[]),this.numBytesUsed+=T,this.numUsedTextures++,this.freeTextures.get(o).length>0){this.numFreeTextures--;const t=this.freeTextures.get(o).shift();return this.usedTextures.get(o).push(t),t}this.numBytesAllocated+=T;const f=this.device.createTexture({size:[u,h],format:n,usage:x});return this.usedTextures.get(o).push(f),f}releaseTexture(u){if(0===this.freeTextures.size)return;const h=u.width,n=u.height,x=u.format,T=t(h,n,x,u.usage);this.freeTextures.has(T)||this.freeTextures.set(T,[]),this.freeTextures.get(T).push(u),this.numFreeTextures++,this.numUsedTextures--;const o=this.usedTextures.get(T),f=o.indexOf(u);if(f<0)throw new Error("Cannot release a texture that was never provided by this texture manager");o.splice(f,1);const c=h*n*s(x);this.numBytesUsed-=c}getNumUsedTextures(){return this.numUsedTextures}getNumFreeTextures(){return this.numFreeTextures}dispose(){this.freeTextures.forEach((t,s)=>{t.forEach(t=>{t.destroy()})}),this.usedTextures.forEach((t,s)=>{t.forEach(t=>{t.destroy()})}),this.freeTextures=new Map,this.usedTextures=new Map,this.numUsedTextures=0,this.numFreeTextures=0,this.numBytesUsed=0,this.numBytesAllocated=0}}},2416,[]);
__d(function(g,r,_i,a,m,e,_d){Object.defineProperty(e,"__esModule",{value:!0}),e.compileProgram=e.PixelsOpType=void 0,e.dataTypeToGPUType=b,e.getCoordsDataType=i,e.getCoordsFromIndexSnippet=f,e.getCoordsXYZ=u,e.getMainHeaderString=function(...n){let o;switch(n.length){case 0:o="\n        fn main()\n      ";break;case 1:o=`\n        fn main(${n[0]} : i32)\n      `;break;default:throw Error('Unreachable')}return o},e.getStartHeaderString=d,e.getWorkgroupSizeString=p,e.makeShaderKey=function(n,t,s){let i=n.shaderKey;if(null!=n.pixelsOpType)return i;const u=[],d=[];t.forEach(n=>{u.push(n.shape),d.push(n.dtype)}),u.push(s.shape),d.push(s.dtype);const p=t.map(n=>o.backend_util.getBroadcastDims(n.shape,s.shape)),c=t.map(n=>o.util.arraysEqual(n.shape,s.shape)).join('_'),l=p.map(n=>n.join('_')).join(';'),h=y(n)?'flatDispatch':'';return i+='_'+(n.workgroupSize?n.workgroupSize.join(','):'')+u.map(n=>n.length).join(',')+d.join(',')+n.variableNames.join(',')+l+c+h,i},e.typeSnippet=void 0;var n,o=r(_d[0]),t=r(_d[1]);!(function(n){n[n.FROM_PIXELS=0]="FROM_PIXELS",n[n.DRAW=1]="DRAW"})(n||(e.PixelsOpType=n={}));e.compileProgram=(n,t,s,i,u)=>{const d=c(s,{dtype:i.dtype,shape:i.shape},t),p=n.createShaderModule({code:d,label:t.constructor.name});let l=(0,o.env)().get('WEBGPU_PRINT_SHADER');if(''!==l){l=l.toLowerCase();const n=l.split(',');('all'===l||n.some(n=>t.shaderKey.toLowerCase().includes(n)))&&(console.group(t.shaderKey),console.debug(d),console.groupEnd())}return u?n.createComputePipelineAsync({compute:{module:p,entryPoint:'_start'},label:t.constructor.name,layout:'auto'}):n.createComputePipeline({compute:{module:p,entryPoint:'_start'},label:t.constructor.name,layout:'auto'})};const s=(n,o="f32")=>{switch(n){case 1:return`${o}`;case 2:return`vec2<${o}>`;case 3:return`vec3<${o}>`;case 4:return`vec4<${o}>`;default:throw new Error(`${n}-component ${o} is not supported.`)}};function i(n){if(n<=1)return'i32';if(2===n)return"vec2<i32>";if(3===n)return"vec3<i32>";if(4===n)return"vec4<i32>";if(5===n)return"vec5";if(6===n)return"vec6";throw Error(`GPU for rank ${n} is not yet supported`)}function u(n){if(0===n)return'x';if(1===n)return'y';if(2===n)return'z';if(3===n)return'w';if(4===n)return'u';if(5===n)return'v';throw Error(`Index ${n} is not yet supported`)}function d(n,o){let t;return t=`\n     ${p(o)}\n      fn _start(@builtin(local_invocation_id) LocalId : vec3<u32>,\n                @builtin(global_invocation_id) GlobalId : vec3<u32>,\n                @builtin(local_invocation_index) LocalIndex: u32,\n                @builtin(workgroup_id) WorkgroupId : vec3<u32>,\n                @builtin(num_workgroups) NumWorkgroups : vec3<u32>) {\n        localId = LocalId;\n        localIndex = LocalIndex;\n        globalId = GlobalId;\n        numWorkgroups = NumWorkgroups;\n        workgroupId = WorkgroupId;\n        ${n?"main(getGlobalIndex());":"main();"};\n      }\n    `,t}function p(n){return`\n  @compute @workgroup_size(${n.workgroupSize[0]}, ${n.workgroupSize[1]}, ${n.workgroupSize[2]})\n`}function c(o,t,s){const u=[],p=s.workgroupSize[0]*s.workgroupSize[1]*s.workgroupSize[2];if(s.outputComponent=s.outputComponent?s.outputComponent:1,u.push(`\n\n      var<private> localId: vec3<u32>;\n      var<private> localIndex: u32;\n      var<private> globalId: vec3<u32>;\n      var<private> numWorkgroups: vec3<u32>;\n      var<private> workgroupId: vec3<u32>;\n\n      // Only used when the y/z dimension of workgroup size is 1.\n      fn getGlobalIndex() -> i32 {\n        ${y(s)?"  return i32(globalId.x);":`  return i32((workgroupId.z * numWorkgroups.x * numWorkgroups.y +\n                workgroupId.y * numWorkgroups.x + workgroupId.x) * ${p}u +\n                localIndex);\n        `}\n      }\n    `),null!=s.pixelsOpType){const i=s.pixelsOpType===n.FROM_PIXELS?`@group(0) @binding(0) var<storage, read_write> result: array<${b(t.dtype,s.outputComponent)}>;`:`@group(0) @binding(1) var<storage, read> inBuf : array<${b(o[0].dtype,s.outputComponent)}>;`,p=3===t.shape.length?'vec2<i32>':'i32';u.push(`\n        struct Uniform {\n          outShapeStrides : ${p},\n          size            : i32,\n          numChannels     : i32,\n          alpha           : f32,\n        };\n\n        ${i}\n        @group(0) @binding(2) var<uniform> uniforms: Uniform;\n      `);const c=k(s);return[l,u.join('\n'),f(t.shape),s.getUserCode(),d(c,s)].join('\n')}let c,$,v='struct Uniforms { NAN : f32, INFINITY : f32, ';s.variableNames.forEach((n,t)=>{const s=i(o[t].shape.length);v+=`${n.charAt(0).toLowerCase()+n.slice(1)}Shape : ${s}, `,c=o[t].shape.length-1,$=i(c),v+=`${n.charAt(0).toLowerCase()+n.slice(1)}ShapeStrides: ${$}, `});const z=i(t.shape.length);v+=`outShape : ${z}, `,c=t.shape.length-1,$=i(c),v+=`\n         outShapeStrides: ${$}, `,s.size&&(v+='size : i32, '),s.uniforms&&(v+=s.uniforms),v+='};',v=C(v),u.push(v),s.atomic?u.push("\n      @group(0) @binding(0) var<storage, read_write> result: array<atomic<i32>>;\n    "):u.push(`\n      @group(0) @binding(0) var<storage, read_write> result: array<${b(t.dtype,s.outputComponent)}>;\n    `),s.variableNames.forEach((n,t)=>{u.push(`\n      @group(0) @binding(${1+t}) var<storage, read> ${n}: array<${s.variableComponents?b(o[t].dtype,s.variableComponents[t]):b(o[t].dtype,s.outputComponent)}>;\n        `)}),''!==v&&u.push(`\n      @group(0) @binding(${1+s.variableNames.length}) var<uniform> uniforms: Uniforms;\n      `);const _=I(t.shape,s.dispatchLayout),O=[l,u.join('\n')+h,f(t.shape),_,S(t.shape.length)];s.atomic||O.push(w(t.shape,t.dtype,s.outputComponent)),s.variableNames.forEach((n,t)=>{O.push(`${f(o[t].shape,n)}`)});const F=o.map((n,o)=>x(n,t.shape,s.variableComponents?s.variableComponents[o]:s.outputComponent,s.dispatchLayout.x.length===t.shape.length)).join('\n');O.push(F),O.push(s.getUserCode());const j=k(s);O.push(d(j,s));return O.join('\n')}e.typeSnippet=s;const l="\n  struct vec5 {x: i32, y: i32, z: i32, w: i32, u: i32};\n  struct vec6 {x: i32, y: i32, z: i32, w: i32, u: i32, v: i32};\n\n  // Checks whether coordinates lie within the bounds of the shape.\n  fn coordsInBounds2D(coord : vec2<i32>, shape : vec2<i32>) -> bool {\n    return all(coord >= vec2<i32>(0)) && all(coord < shape);\n  }\n  fn coordsInBounds3D(coord : vec3<i32>, shape : vec3<i32>) -> bool {\n    return all(coord >= vec3<i32>(0)) && all(coord < shape);\n  }\n  fn coordsInBounds4D(coord : vec4<i32>, shape : vec4<i32>) -> bool {\n    return all(coord >= vec4<i32>(0)) && all(coord < shape);\n  }\n\n  fn getIndexFromCoords1D(coord : i32, shape : i32) -> i32 {\n    return coord;\n  }\n  fn getIndexFromCoords2D(coords : vec2<i32>, shape : vec2<i32>) -> i32 {\n    return dot(coords, vec2<i32>(shape.y, 1));\n  }\n  fn getIndexFromCoords3D(coords : vec3<i32>, shape : vec3<i32>) -> i32 {\n    return dot(coords, vec3<i32>(shape.y * shape.z, shape.z, 1));\n  }\n  fn getIndexFromCoords4D(coords : vec4<i32>, shape : vec4<i32>) -> i32 {\n    return dot(coords, vec4<i32>(\n        shape.y * shape.z * shape.w, shape.z * shape.w, shape.w, 1));\n  }\n  fn getIndexFromCoords5D(coords : vec5, shape : vec5) -> i32 {\n    let shapeStrides: vec5 = vec5(shape.y * shape.z * shape.w * shape.u, shape.z * shape.w * shape.u, shape.w * shape.u, shape.u, 1);\n    return coords.x*shapeStrides.x + coords.y*shapeStrides.y + coords.z*shapeStrides.z + coords.w*shapeStrides.w + coords.u*shapeStrides.u;\n  }\n  fn getIndexFromCoords6D(coords : vec6, shape : vec6) -> i32 {\n    let shapeStrides: vec6 = vec6(shape.y * shape.z * shape.w * shape.u * shape.v, shape.z * shape.w * shape.u * shape.v, shape.w * shape.u * shape.v, shape.u * shape.v, shape.v, 1);\n    return coords.x*shapeStrides.x + coords.y*shapeStrides.y + coords.z*shapeStrides.z + coords.w*shapeStrides.w + coords.u*shapeStrides.u + coords.v*shapeStrides.v;\n  }\n\n  // NaN defination in IEEE 754-1985 is :\n  //   - sign = either 0 or 1.\n  //   - biased exponent = all 1 bits.\n  //   - fraction = anything except all 0 bits (since all 0 bits represents infinity).\n  // https://en.wikipedia.org/wiki/IEEE_754-1985#Representation_of_non-numbers\n  fn isnan(val: f32) -> bool {\n    let floatToUint: u32 = bitcast<u32>(val);\n    return (floatToUint & 0x7fffffffu) > 0x7f800000u;\n  }\n  fn isnanVec4(val : vec4<f32>) -> vec4<bool> {\n    let floatToUint: vec4<u32> = bitcast<vec4<u32>>(val);\n    return (floatToUint & vec4<u32>(0x7fffffffu)) > vec4<u32>(0x7f800000u);\n  }\n",h="\n  fn isinf(val: f32) -> bool {\n    return abs(val) == uniforms.INFINITY;\n  }\n";function f(n,t=""){const s=n.length,d=''!==t?`get${t.charAt(0).toUpperCase()+t.slice(1)}CoordsFromIndex`:'getCoordsFromIndex',p=''!==t?`${t.charAt(0).toLowerCase()+t.slice(1)}ShapeStrides`:"outShapeStrides";if(s<=1)return`fn ${d}(index : i32) -> i32 { return index; }`;const c=o.util.computeStrides(n),l=i(s),h=[];for(let n=0;n<s;n++)h.push(`d${n}`);if(1===c.length)return`    fn ${d}(index : i32) -> vec2<i32> {\n      let d0 = index / uniforms.${p}; let d1 = index - d0 * uniforms.${p};\n      return vec2<i32>(d0, d1);\n    }`;let f;return f='var index2 = index;'+c.map((n,o)=>`${`let ${h[o]} = index2 / uniforms.${p}.${u(o)}`}; ${o===c.length-1?`let ${h[o+1]} = index2 - ${h[o]} * uniforms.${p}.${u(o)}`:`index2 = index2 - ${h[o]} * uniforms.${p}.${u(o)}`};`).join(''),`\n    fn ${d}(index : i32) -> ${l} {\n      ${f}\n      return ${l}(${h.join(',')});\n    }\n  `}function $(n,o){const t=n.name,u=n.shape.length,d=i(u),p='get'+t.charAt(0).toUpperCase()+t.slice(1),c=['d0','d1','d2','d3','d4','d5'].slice(0,u),l=c.map(n=>`${n} : i32`).join(', ');if(u<1)return`\n      fn ${p}() -> ${s(o)} {\n        return ${s(o)}(${t}[0]);\n      }\n    `;const h=`uniforms.${t.charAt(0).toLowerCase()+t.slice(1)}Shape`;let f=`${u}D`;return 0===u&&(f='1D'),`\n    fn ${p}(${l}) -> ${s(o)} {\n      return ${s(o)}(${t}[getIndexFromCoords${f}(${d}(${c.join(',')}),\n        ${h})${1===o?'':` / ${o}`}]);\n    }\n   `}function v(n,t,d,p){const c=n.name,l=c.charAt(0).toUpperCase()+c.slice(1),h='get'+l+'ByOutput',f=n.shape.length,$=t.length,v=i($);if(o.util.arraysEqual(n.shape,t)&&p)return`\n    fn ${h}Index(globalIndex : i32) -> ${s(d)} {\n      return ${s(d)}(${c}[globalIndex]);\n    }\n\n    fn ${h}Coords(coords : ${v}) -> ${s(d)} {\n      return ${s(d)}(${c}[${$>1?'getOutputIndexFromCoords(coords)':'coords'}${1===d?'':` / ${d}`}]);\n    }\n    `;const x=o.backend_util.getBroadcastDims(n.shape,t),I=$-f;let S='';if(0===f)return`\n    fn ${h}Index(globalIndex : i32) -> ${s(d)}{\n      return get${l}();\n    }\n\n    fn ${h}Coords(coords : ${v}) -> ${s(d)}{\n      return get${l}();\n    }\n  `;S=$<2&&x.length>=1?'coords = 0;':x.map(n=>`coords.${u(n+I)} = 0;`).join('\n');let y='';if($<2&&f>0)y='coords';else if($>1){y=`${i(f)}(${n.shape.map((n,o)=>`coords.${u(o+I)}`).join(', ')})`}else y='coords';const b=`uniforms.${c.charAt(0).toLowerCase()+c.slice(1)}Shape`,w=`${f}D`;return`\n  fn ${h}Index(globalIndex : i32) -> ${s(d)} {\n    var coords = getCoordsFromIndex(globalIndex);\n    ${S}\n    return ${s(d)}(${c}[getIndexFromCoords${w}(${y}, ${b})${1===d?'':` / ${d}`}]);\n  }\n\n  fn ${h}Coords(coordsIn : ${v}) -> ${s(d)} {\n    var coords = coordsIn;\n    ${S}\n    return ${s(d)}(${c}[getIndexFromCoords${w}(${y}, ${b})${1===d?'':` / ${d}`}]);\n  }\n`}function x(n,o,t,s){let i=$(n,t);return n.shape.length<=o.length&&(i+=v(n,o,t,s)),i}function I(n,o){const{x:s,y:u=[],z:d=[]}=o,p=n.length,c=s.length+u.length+d.length;if(c!==p)return'';if(s.length===p){return`fn getOutputCoords() -> ${i(p)}{\n    let globalIndex = getGlobalIndex();\n    return getCoordsFromIndex(globalIndex);\n  }\n  `}let l='';const h=[s,u,d];for(let n=0;n<h.length;n++){const o=h[n];if(0!==o.length)if(1===o.length)l+=`let d${o[0]} = i32(globalId[${n}]);`;else{const s=(0,t.symbolicallyComputeStrides)(o,'uniforms.outShape');l+=`var index${n} = i32(globalId[${n}]);`;for(let t=0;t<s.length;t++)l+=`let d${o[t]} = index${n} / ${s[t]};`,t===s.length-1?l+=`let d${o[t+1]} = index${n} - d${o[t]} * ${s[t]};`:l+=`index${n} = index${n} - d${o[t]} * ${s[t]};`}}const f=[];for(let n=0;n<c;n++)f.push(`d${n}`);const $=i(c);let v=`fn getOutputCoords() -> ${$} {\n  ${l}\n`;return 0===f.length?v+=`return ${$}(0); }`:v+=`return ${$}(${f.join(',')}); }`,v}function S(n){let t='';switch(n){case 0:case 1:t+="\n        fn getOutputIndexFromCoords(coords : i32) -> i32 {\n          return coords;\n        }\n        ";break;case 2:t+="\n        fn getOutputIndexFromCoords(coords : vec2<i32>) -> i32 {\n          return dot(coords, vec2<i32>(uniforms.outShapeStrides, 1));\n        }\n        ";break;case 3:t+="\n        fn getOutputIndexFromCoords(coords : vec3<i32>) -> i32 {\n          return dot(coords, vec3<i32>(uniforms.outShapeStrides.x, uniforms.outShapeStrides.y, 1));\n        }\n        ";break;case 4:t+="\n        fn getOutputIndexFromCoords(coords : vec4<i32>) -> i32 {\n          return dot(coords, vec4<i32>(\n            uniforms.outShapeStrides.x, uniforms.outShapeStrides.y, uniforms.outShapeStrides.z, 1));\n        }\n        ";break;case 5:t+="\n        fn getOutputIndexFromCoords(coords : vec5) -> i32 {\n          return coords.x * uniforms.outShapeStrides.x +\n              coords.y * uniforms.outShapeStrides.y +\n              coords.z * uniforms.outShapeStrides.z +\n              coords.w * uniforms.outShapeStrides.w +\n              coords.u;\n        }\n        ";break;case 6:t+="\n        fn getOutputIndexFromCoords(coords : vec6) -> i32 {\n          return coords.x * uniforms.outShapeStrides.x +\n              coords.y * uniforms.outShapeStrides.y +\n              coords.z * uniforms.outShapeStrides.z +\n              coords.w * uniforms.outShapeStrides.w +\n              coords.u * uniforms.outShapeStrides.u +\n              coords.v;\n        }\n        ";break;default:o.util.assert(!1,()=>`Unsupported ${n}D shape`)}return t}function y(n){return 1===n.dispatch[1]&&1===n.dispatch[2]}function b(n,o=1){if('float32'===n)return s(o,'f32');if('int32'===n||'bool'===n)return s(o,'i32');throw new Error(`type ${n} is not supported.`)}function w(n,o,t){const u=n.length,d=b(o,t);let p=`fn setOutputAtIndex(flatIndex : i32, value : ${s(t)}) {\n      result[flatIndex] = ${d}(value);\n    }\n\n    fn setOutputAtIndexI32(flatIndex : i32, value : ${s(t,'i32')}) {\n      result[flatIndex] = ${d}(value);\n    }\n    `;if(u>=2){const n=['d0','d1','d2','d3','d4','d5'].slice(0,u),o=i(u);p+=`\n      fn setOutputAtCoords(${n.map(n=>`${n} : i32`).join(', ')}, value : ${s(t)}) {\n        let flatIndex = getOutputIndexFromCoords(${o}(${n.join(', ')}));\n        setOutputAtIndex(flatIndex${1===t?'':` / ${t}`}, value);\n      }\n      fn setOutputAtCoordsI32(${n.map(n=>`${n} : i32`).join(', ')}, value : ${s(t,'i32')}) {\n        let flatIndex = getOutputIndexFromCoords(${o}(${n.join(', ')}));\n        setOutputAtIndexI32(flatIndex${1===t?'':` / ${t}`}, value);\n      }\n    `}return p}function C(n){return n=(n=n.replace(/(\w+)\s*:\s*vec(5|6)/g,n=>'@align(16) '+n)).replace(/vec(5|6)\s*,\s*(\w+)/g,(n,o,t)=>`vec${o}, @align(16) ${t}`)}function k(n){return(!n.dispatchLayout.hasOwnProperty('y')||0===n.dispatchLayout.y.length)&&(!n.dispatchLayout.hasOwnProperty('z')||0===n.dispatchLayout.z.length)}},2417,[1158,2418]);
__d(function(g,r,_i,a,m,e,_d){Object.defineProperty(e,"__esModule",{value:!0}),e.atomicAddSnippet=void 0,e.symbolicallyComputeStrides=
/**
   * @license
   * Copyright 2019 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   */
function(n,t){if(Math.max(...n)>5)throw new Error('Cannot symbolically compute strides for rank > 6 tensor.');const l=n.length,o=n.map(n=>`${t}.${"xyzwuv"[n]}`),i=new Array(l-1);i[l-2]=o[l-1];for(let n=l-3;n>=0;--n)i[n]=`(${i[n+1]} * ${o[n+1]})`;return i};e.atomicAddSnippet=(n,t,l)=>'int32'===l?`atomicAdd(${n}, bitcast<i32>(${t}));`:`\n          {\n            var oldValue = 0;\n            loop {\n              let newValueF32 = bitcast<f32>(oldValue) + (${t});\n              let newValue = bitcast<i32>(newValueF32);\n              let res = atomicCompareExchangeWeak(${n}, oldValue, newValue);\n              if res.exchanged {\n                break;\n              }\n              oldValue = res.old_value;\n            }\n          }`},2418,[]);
__d(function(g,r,_i,a,m,e,_d){Object.defineProperty(e,"__esModule",{value:!0}),e.GPUBytesPerElement=function(t){if('float32'===t||'int32'===t||'bool'===t||'string'===t)return 4;if('complex64'===t)return 8;throw new Error(`Unknown dtype ${t}`)},e.MatMulProgramType=void 0,e.assertNotComplex=function(n,o){Array.isArray(n)||(n=[n]);n.forEach(n=>{null!=n&&t.util.assert('complex64'!==n.dtype,()=>`${o} does not support complex64 tensors in the WebGPU backend.`)})},e.computeDispatch=function(t,o,u=[1,1,1],l=[1,1,1]){const[i,p,c]=[Math.ceil(n(t.x.map(t=>o[t]))/(u[0]*l[0])),t.y?Math.ceil(n(t.y.map(t=>o[t]))/(u[1]*l[1])):1,t.z?Math.ceil(n(t.z.map(t=>o[t]))/(u[2]*l[2])):1];return[i,p,c]},e.computeWorkPerThreadForConv2d=function(t,o,u=!1){if(u)return[4,4,1];const l=n(t.x.map(t=>o[t])),i=n(t.y.map(t=>o[t]));if(l<=4)return[1,2,1];if(i<=4)return[2,1,1];return[2,2,1]},e.computeWorkgroupInfoForMatMul=function(t,n,o,u=!1){const l=[8,8,1],i=[4,4,1];u||(t<=8&&(i[1]=1),n<=16&&o<=16&&(l[0]=4));return{workgroupSize:l,elementsPerThread:i}},e.computeWorkgroupSizeForConv2d=function(t,o,u=!1){if(u)return[8,8,1];const l=n(t.x.map(t=>o[t])),i=n(t.y.map(t=>o[t]));if(l<=4)return[4,16,1];if(i<=4)return[16,4,1];return[16,16,1]},e.flatDispatchLayout=function(t){return{x:t.map((t,n)=>n)}},e.isWebGPUSupported=function(){return!('undefined'==typeof globalThis||!globalThis.navigator||!globalThis.navigator.gpu)},e.tilesFitEvenlyIntoShape=function(t,n){if(t.length!==n.length)throw new Error(`Cannot compute whether rank ${t.length} tiles fit evenly into rank ${n.length} shape - ranks must match.`);return n.every((n,o)=>n%t[o]===0)};var t=r(_d[0]);
/**
   * @license
   * Copyright 2019 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   */const n=t=>{let n=1;for(let o=0;o<t.length;o++)n*=t[o];return n};var o;!(function(t){t[t.MatMulReduceProgram=0]="MatMulReduceProgram",t[t.MatMulSplitKProgram=1]="MatMulSplitKProgram",t[t.MatMulSmallOutputSizeProgram=2]="MatMulSmallOutputSizeProgram",t[t.MatMulPackedProgram=3]="MatMulPackedProgram",t[t.MatMulMax=4]="MatMulMax"})(o||(e.MatMulProgramType=o={}))},2419,[1158]);
__d(function(g,_r,_i,a,m,_e,d){Object.defineProperty(_e,"__esModule",{value:!0}),Object.defineProperty(_e,"WebGPUBackend",{enumerable:!0,get:function(){return t.WebGPUBackend}}),_e.webgpu_util=void 0;var e=(function(e,t){if("function"==typeof WeakMap)var n=new WeakMap,r=new WeakMap;return(function(e,t){if(!t&&e&&e.__esModule)return e;var u,o,f={__proto__:null,default:e};if(null===e||"object"!=typeof e&&"function"!=typeof e)return f;if(u=t?r:n){if(u.has(e))return u.get(e);u.set(e,f)}for(const t in e)"default"!==t&&{}.hasOwnProperty.call(e,t)&&((o=(u=Object.defineProperty)&&Object.getOwnPropertyDescriptor(e,t))&&(o.get||o.set)?u(f,t,o):f[t]=e[t]);return f})(e,t)})(_r(d[0]));_e.webgpu_util=e;var t=_r(d[1])},2420,[2419,2413]);
__d(function(g,r,i,a,m,e,d){var o=r(d[0]),n=r(d[1]),f=r(d[2]),C=r(d[3]),s=r(d[4]),t=r(d[5]),l=r(d[6]),p=r(d[7]),c=r(d[8]),u=r(d[9]),h=r(d[10]),D=r(d[11]),v=r(d[12]),x=r(d[13]),N=r(d[14]),B=r(d[15]),k=r(d[16]),S=r(d[17]),P=r(d[18]),b=r(d[19]),G=r(d[20]),M=r(d[21]),q=r(d[22]),V=r(d[23]),w=r(d[24]),z=r(d[25]),y=r(d[26]),A=r(d[27]),F=r(d[28]),I=r(d[29]),T=r(d[30]),E=r(d[31]),L=r(d[32]),R=r(d[33]),_=r(d[34]),K=r(d[35]),O=r(d[36]),W=r(d[37]),H=r(d[38]),U=r(d[39]),j=r(d[40]),J=r(d[41]),Q=r(d[42]),X=r(d[43]),Y=r(d[44]),Z=r(d[45]),$=r(d[46]),oo=r(d[47]),io=r(d[48]),no=r(d[49]),go=r(d[50]),fo=r(d[51]),Co=r(d[52]),eo=r(d[53]),ao=r(d[54]),ro=r(d[55]),so=r(d[56]),to=r(d[57]),lo=r(d[58]),po=r(d[59]),co=r(d[60]),uo=r(d[61]),mo=r(d[62]),ho=r(d[63]),Do=r(d[64]),vo=r(d[65]),xo=r(d[66]),No=r(d[67]),Bo=r(d[68]),ko=r(d[69]),So=r(d[70]),Po=r(d[71]),bo=r(d[72]),Go=r(d[73]),Mo=r(d[74]),qo=r(d[75]),Vo=r(d[76]),wo=r(d[77]),zo=r(d[78]),yo=r(d[79]),Ao=r(d[80]),Fo=r(d[81]),Io=r(d[82]),To=r(d[83]),Eo=r(d[84]),Lo=r(d[85]),Ro=r(d[86]),_o=r(d[87]),Ko=r(d[88]),Oo=r(d[89]),Wo=r(d[90]),Ho=r(d[91]),Uo=r(d[92]),jo=r(d[93]),Jo=r(d[94]),Qo=r(d[95]),Xo=r(d[96]),Yo=r(d[97]),Zo=r(d[98]),$o=r(d[99]),oi=r(d[100]),ii=r(d[101]),ni=r(d[102]),gi=r(d[103]),fi=r(d[104]),Ci=r(d[105]),ei=r(d[106]),ai=r(d[107]),ri=r(d[108]),si=r(d[109]),ti=r(d[110]),li=r(d[111]),pi=r(d[112]),ci=r(d[113]),di=r(d[114]),ui=r(d[115]),mi=r(d[116]),hi=r(d[117]),Di=r(d[118]),vi=r(d[119]),xi=r(d[120]),Ni=r(d[121]),Bi=r(d[122]),ki=r(d[123]),Si=r(d[124]),Pi=r(d[125]),bi=r(d[126]),Gi=r(d[127]),Mi=r(d[128]),qi=r(d[129]),Vi=r(d[130]),wi=r(d[131]),zi=r(d[132]),yi=r(d[133]),Ai=r(d[134]),Fi=r(d[135]),Ii=r(d[136]),Ti=r(d[137]),Ei=r(d[138]),Li=r(d[139]),Ri=r(d[140]),_i=r(d[141]),Ki=r(d[142]),Oi=r(d[143]),Wi=r(d[144]),Hi=r(d[145]),Ui=r(d[146]),ji=r(d[147]),Ji=r(d[148]),Qi=r(d[149]),Xi=r(d[150]),Yi=r(d[151]),Zi=r(d[152]),$i=r(d[153]),on=r(d[154]),nn=r(d[155]),gn=r(d[156]),fn=r(d[157]),Cn=r(d[158]),en=r(d[159]),an=r(d[160]),rn=r(d[161]),sn=r(d[162]);
/**
   * @license
   * Copyright 2020 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   */
const tn=[n._fusedMatMulConfig,f.absConfig,C.acosConfig,s.acoshConfig,t.addConfig,l.addNConfig,p.allConfig,c.anyConfig,u.argMaxConfig,h.argMinConfig,D.asinConfig,v.asinhConfig,x.atanConfig,N.atan2Config,B.atanhConfig,k.avgPoolConfig,S.avgPool3DConfig,P.avgPool3DGradConfig,b.avgPoolGradConfig,G.batchMatMulConfig,M.batchToSpaceNDConfig,q.bincountConfig,V.broadcastArgsConfig,w.castConfig,z.ceilConfig,y.clipByValueConfig,A.complexConfig,F.complexAbsConfig,I.concatConfig,T.conv2DConfig,E.conv2DBackpropFilterConfig,L.conv2DBackpropInputConfig,R.conv3DConfig,_.conv3DBackpropFilterV2Config,K.conv3DBackpropInputV2Config,O.cosConfig,W.coshConfig,H.cropAndResizeConfig,U.cumprodConfig,j.cumsumConfig,J.denseBincountConfig,Q.depthToSpaceConfig,Y.depthwiseConv2dNativeBackpropFilterConfig,Z.depthwiseConv2dNativeBackpropInputConfig,X.depthwiseConv2dNativeConfig,$.diagConfig,oo.dilation2DConfig,io.dilation2DBackpropFilterConfig,no.dilation2DBackpropInputConfig,go.drawConfig,fo.einsumConfig,Co.eluConfig,eo.eluGradConfig,ao.equalConfig,ro.erfConfig,so.expConfig,to.expandDimsConfig,lo.expm1Config,po.fftConfig,co.fillConfig,uo.flipLeftRightConfig,Do.fromPixelsConfig,mo.floorConfig,ho.floorDivConfig,vo.fusedBatchNormConfig,xo.fusedConv2DConfig,No.fusedDepthwiseConv2DConfig,Bo.gatherNdConfig,ko.gatherV2Config,So.greaterConfig,Po.greaterEqualConfig,bo.identityConfig,Go.ifftConfig,Mo.imagConfig,qo.isFiniteConfig,Vo.isInfConfig,wo.isNaNConfig,zo.leakyReluConfig,yo.lessConfig,Ao.lessEqualConfig,Fo.linSpaceConfig,To.log1pConfig,Io.logConfig,Eo.logicalAndConfig,Lo.logicalNotConfig,Ro.logicalOrConfig,_o.lrnConfig,Ko.lrnGradConfig,Oo.maxConfig,Wo.maximumConfig,Ho.maxPoolConfig,Jo.maxPoolGradConfig,Uo.maxPool3DConfig,jo.maxPool3DGradConfig,Qo.maxPoolWithArgmaxConfig,Xo.meanConfig,Yo.minConfig,Zo.minimumConfig,$o.mirrorPadConfig,oi.modConfig,ii.multinomialConfig,ni.multiplyConfig,gi.negConfig,fi.nonMaxSuppressionV3Config,Ci.nonMaxSuppressionV5Config,ei.notEqualConfig,ai.oneHotConfig,ri.onesLikeConfig,si.packConfig,ti.padV2Config,li.powConfig,pi.preluConfig,ci.prodConfig,di.rangeConfig,ui.realConfig,mi.realDivConfig,hi.reciprocalConfig,Di.reluConfig,vi.relu6Config,xi.reshapeConfig,Ni.resizeBilinearConfig,Bi.resizeBilinearGradConfig,ki.resizeNearestNeighborConfig,Si.resizeNearestNeighborGradConfig,Pi.reverseConfig,bi.rotateWithOffsetConfig,Gi.roundConfig,Mi.rsqrtConfig,qi.scatterNdConfig,Vi.searchSortedConfig,wi.selectConfig,zi.seluConfig,yi.sigmoidConfig,Ai.signConfig,Fi.sinConfig,Ii.sinhConfig,Ti.sliceConfig,Ji.stepConfig,Qi.stridedSliceConfig,Xi.stringNGramsConfig,Ei.softmaxConfig,Li.softplusConfig,Ri.spaceToBatchNDConfig,_i.sparseSegmentMeanConfig,Ki.sparseSegmentSumConfig,Oi.sparseToDenseConfig,Wi.splitVConfig,Hi.sqrtConfig,Ui.squareConfig,ji.squaredDifferenceConfig,Yi.subConfig,Zi.sumConfig,$i.tanConfig,on.tanhConfig,nn.tensorScatterUpdateConfig,gn.tileConfig,fn.topKConfig,Cn.transformConfig,en.transposeConfig,an.unpackConfig,rn.unsortedSegmentSumConfig,sn.zerosLikeConfig];for(const n of tn)(0,o.registerKernel)(n)},2421,[1158,2422,2434,2442,2443,2444,2445,2447,2453,2454,2456,2457,2458,2459,2460,2461,2462,2468,2469,2471,2472,2473,2476,2478,2480,2484,2485,2438,2488,2490,2494,2499,2501,2503,2505,2506,2507,2508,2509,2511,2514,2515,2516,2518,2522,2524,2525,2527,2529,2531,2532,2534,2537,2538,2539,2540,2541,2542,2543,2544,2431,2547,2549,2550,2551,2553,2555,2556,2557,2559,2561,2562,2439,2563,2493,2564,2565,2566,2567,2568,2569,2570,2572,2573,2574,2575,2576,2577,2579,2466,2581,2582,2583,2584,2586,2587,2467,2588,2589,2590,2592,2593,2535,2597,2598,2599,2481,2600,2602,2604,2605,2607,2608,2609,2610,2482,2611,2612,2613,2614,2433,2615,2617,2619,2621,2623,2625,2627,2628,2629,2631,2633,2635,2636,2637,2638,2639,2474,2595,2640,2641,2643,2646,2647,2650,2651,2652,2653,2654,2655,2657,2658,2536,2659,2660,2661,2648,2662,2664,2449,2666,2667,2603]);
__d(function(g,r,i,_a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e._fusedMatMul=n,e._fusedMatMulConfig=void 0;var a=r(d[0]),t=r(d[1]);
/**
   * @license
   * Copyright 2021 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   */
function n(a){const{inputs:n,backend:u,attrs:s}=a,{a:l,b:o,bias:c,preluActivationWeights:p}=n,{transposeA:M,transposeB:b,activation:f,leakyreluAlpha:_}=s;return(0,t.batchMatMulImpl)({a:l,b:o,transposeA:M,transposeB:b,backend:u,bias:c,preluActivationWeights:p,leakyreluAlpha:_,activation:f})}e._fusedMatMulConfig={kernelName:a._FusedMatMul,backendName:'webgpu',kernelFunc:n}},2422,[1158,2423]);
__d(function(g,r,_i,_a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.batchMatMulImpl=
/**
   * @license
   * Copyright 2021 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   */
function({a:h,b:M,transposeA:i,transposeB:c,backend:P,bias:y=null,preluActivationWeights:b=null,leakyreluAlpha:f=0,activation:k=null}){const T=h.shape.length,S=M.shape.length,_=i?h.shape[T-2]:h.shape[T-1],A=c?M.shape[S-1]:M.shape[S-2],O=i?h.shape[T-1]:h.shape[T-2],R=c?M.shape[S-2]:M.shape[S-1],w=h.shape.slice(0,-2),U=M.shape.slice(0,-2),v=a.util.sizeFromShape(w),E=a.util.sizeFromShape(U),G=a.broadcast_util.assertAndGetBroadcastShape(h.shape.slice(0,-2),M.shape.slice(0,-2)).concat([O,R]);a.util.assert(_===A,()=>`Error in matMul: inner shapes (${_}) and (${A}) of Tensors with shapes ${h.shape} and ${M.shape} and transposeA=${i} and transposeB=${c} must match.`);const W=i?[v,_,O]:[v,O,_],I=c?[E,R,A]:[E,A,R],$=(0,n.reshape)({inputs:{x:h},backend:P,attrs:{shape:W}}),B=(0,n.reshape)({inputs:{x:M},backend:P,attrs:{shape:I}}),x=[$,B],z=Math.max(v,E),K=[$,B],D=[{type:'int32',data:[O]},{type:'int32',data:[R]},{type:'int32',data:[_]}];let F,L;const H=[z,O,R];let N=(0,a.env)().get('WEBGPU_MATMUL_PROGRAM_TYPE');if(N<0){const t=(0,a.env)().getNumber('WEBGPU_THRESHOLD_TO_INCREASE_WORKGROUPS_FOR_MATMUL'),s=t>0?t:P.thresholdToIncreaseWorkgroups,p=z*Math.ceil(O/32)*Math.ceil(R/32);N=p<=s||O<=8&&p<=2*s?z*O*R<=128?o.MatMulProgramType.MatMulReduceProgram:1===z&&A>=2e3?o.MatMulProgramType.MatMulSplitKProgram:o.MatMulProgramType.MatMulSmallOutputSizeProgram:o.MatMulProgramType.MatMulPackedProgram}switch(N){case o.MatMulProgramType.MatMulReduceProgram:F=new s.MatMulReduceProgram(H,i,c,y,k,b);break;case o.MatMulProgramType.MatMulSplitKProgram:if(L=(0,u.fill)({backend:P,attrs:{shape:H,value:0,dtype:h.dtype}}),F=new l.MatMulSplitKProgram(H,A,i,c),y||k){L=P.runWebGPUProgram(F,K,h.dtype,D,L);const a=new l.BiasActivationProgram(L.shape,y,k,b);let t=null;const s=[L];y&&s.push(y),b&&s.push(b),'leakyrelu'===k&&(t=[{type:'float32',data:[f]}],a.uniforms+=' alpha : f32,');const p=P.runWebGPUProgram(a,s,L.dtype,t);x.push(L);const o=(0,n.reshape)({inputs:{x:p},backend:P,attrs:{shape:G}});x.push(p);for(const a of x)P.disposeData(a.dataId);return o}break;case o.MatMulProgramType.MatMulSmallOutputSizeProgram:F=new p.MatMulSmallOutputSizeProgram(W,I,H,i,c,y,k,b);break;case o.MatMulProgramType.MatMulPackedProgram:const a=P.adapterInfo.isIntel();F=new t.MatMulPackedProgram(W,H,i,c,y,k,b,a);break;default:throw new Error(`Unsupported MatMulProgramType ${N}.`)}y&&K.push(y);b&&K.push(b);'leakyrelu'===k&&(D.push({type:'float32',data:[f]}),F.uniforms+=' alpha : f32,');L=P.runWebGPUProgram(F,K,h.dtype,D,L);const j=(0,n.reshape)({inputs:{x:L},backend:P,attrs:{shape:G}});x.push(L);for(const a of x)P.disposeData(a.dataId);return j};var a=r(d[0]),t=r(d[1]),s=r(d[2]),p=r(d[3]),l=r(d[4]),o=r(d[5]),u=r(d[6]),n=r(d[7])},2423,[1158,2424,2428,2429,2430,2419,2431,2433]);
__d(function(g,r,_i,a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.MatMulPackedProgram=void 0,e.makeMatMulPackedSource=b,e.makeMatMulPackedVec4Source=h,e.makeVectorMatrixProductSource=C,e.matMulReadFnSource=l,e.matMulReadWriteFnSource=s;var n=r(d[0]),o=r(d[1]),t=r(d[2]),i=r(d[3]);
/**
   * @license
   * Copyright 2019 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   */
function l(o,i,l=!1,s=!1,c=!1,u=1){n.util.assert(o&&1===u||!o,()=>`transposeA ${o} is not compatible with component size ${u}`);const h=`\n      ${o?"value = getA(batch, col, row);":"value = getA(batch, row, col);"}\n\n    `,w=i?"value = getB(batch, col, row);":"value = getB(batch, row, col);";return`\n  fn mm_readA(batch: i32, row: i32, col: i32) -> ${(0,t.typeSnippet)(u)} {\n    var value = ${(0,t.typeSnippet)(u)}(0.0);\n    ${l&&c?h:`\n    ${o?"if(row < uniforms.dimAOuter && col < uniforms.dimInner)":"if(row < uniforms.aShape[1] && col < uniforms.aShape[2])"}\n    {\n      ${h}\n    }\n    `}\n    return value;\n  }\n\n  fn mm_readB(batch: i32, row: i32, col: i32) -> ${(0,t.typeSnippet)(u)} {\n    var value = ${(0,t.typeSnippet)(u)}(0.0);\n    ${w}\n    return value;\n  }\n  `}function s(n,i,s,c,u=!1,h=!1,w=!1,$=1){return`\n  ${l(s,c,u,h,w,$)}\n  fn mm_write(batch: i32, row: i32, col: i32, valueIn: ${(0,t.typeSnippet)($)}) {\n    ${u&&h?'':'if (row < uniforms.dimAOuter && col < uniforms.dimBOuter)'}\n    {\n      var value = valueIn;\n      let coords = vec3<i32>(batch, row, col);\n      ${(0,o.biasActivationSnippet)(n,i)}\n      setOutputAtCoords(coords[0], coords[1], coords[2], value);\n    }\n  }\n  `}const c=(n,o)=>n?`\n        mm_Asub[inputRow][inputCol] = mm_readA(batchA,\n          kStart + inputRow,\n          globalRowStart + inputCol * ${o});\n        `:`\n        mm_Asub[inputRow][inputCol] = mm_readA(batchA,\n          globalRow + innerRow,\n          kStart + inputCol * ${o});\n        `,u=(n,o,t,i)=>{if(n)return`\n      for (var k = 0; k < ${i}; k++) {\n        let BCached0 = mm_Bsub[k][tileCol];\n        let ACached0 = mm_Asub[k][localRow];\n        for (var i = 0; i < ${t}; i++) {\n          acc[i] = fma(BCached0, vec4<f32>(ACached0[i]), acc[i]);\n        }\n      }`;{let n='',l='';for(let t=0;t<o;t++)n+=`let BCached${t} = mm_Bsub[k * ${o} + ${t}][tileCol];`,l+=`acc[i] = fma(BCached${t}, vec4<f32>(ACached[${t}]), acc[i]);`;return`\n      for (var k = 0; k < ${i/o}; k++) {\n        ${n}\n        for (var i = 0; i < ${t}; i++) {\n          let ACached = mm_Asub[tileRow + i][k];\n          ${l}\n        }\n      }`}};function h(o,i,l=!1,s=32,h=!1,w=32,$=!1){const b=i[1]*o[1],p=i[0]*o[0],C=l?b:s,R=l?s:b,f=C/i[0],A=s/i[1],v=o[1],k=o[0];return n.util.assert((l&&4===f&&4===o[1]||!l&&(3===f||4===f))&&C%i[0]===0&&s%i[1]===0&&4===o[0],()=>`If transposeA ${l} is true, innerElementSize ${f} and workPerThread[1] ${o[1]} must be 4.\n          Otherwise, innerElementSize ${f} must be 3 or 4.\n      tileAWidth ${C} must be divisible by workgroupSize[0]${i[0]}. tileInner ${s} must be divisible by workgroupSize[1] ${i[1]}. colPerThread ${o[0]} must be 4.`),`\n  var<workgroup> mm_Asub : array<array<vec${f}<f32>, ${C/f}>, ${R}>;\n  var<workgroup> mm_Bsub : array<array<vec4<f32>, ${p/o[0]}>, ${s}>;\n\n  ${(0,t.getMainHeaderString)()} {\n    let localRow = i32(localId.y);\n    let tileRow = localRow * ${v};\n    let tileCol = i32(localId.x);\n\n    let globalRow = i32(globalId.y) * ${v};\n    let globalCol = i32(globalId.x) * ${k};\n    let batch = ${h?'0':'i32(globalId.z)'};\n    let batchA = ${h||!$?'batch':'batch % uniforms.aShape[0]'};\n    let batchB = ${h||!$?'batch':'batch % uniforms.bShape[0]'};\n    let globalRowStart = i32(workgroupId.y) * ${b};\n\n    let numTiles = ${h?`${Math.ceil(w/s)}`:`(uniforms.dimInner - 1) / ${s} + 1`};\n    var kStart = ${h?`i32(globalId.z) * ${w}`:'0'};\n\n    var acc: array<vec4<f32>, ${v}>;\n\n    // Loop over shared dimension.\n    let tileRowB = localRow * ${A};\n    for (var t = 0; t < numTiles; t++) {\n        // Load one tile of A into local memory.\n        for (var innerRow = 0; innerRow < ${v}; innerRow++) {\n            let inputRow = tileRow + innerRow;\n            let inputCol = tileCol;\n            ${c(l,f)}\n        }\n\n        // Load one tile of B into local memory.\n        for (var innerRow = 0; innerRow < ${A}; innerRow++) {\n            let inputRow = tileRowB + innerRow;\n            let inputCol = tileCol;\n            mm_Bsub[inputRow][inputCol] = mm_readB(batchB, kStart + inputRow, globalCol);\n        }\n        kStart = kStart + ${s};\n        workgroupBarrier();\n\n        // Compute acc values for a single thread.\n        ${u(l,f,v,s)}\n        workgroupBarrier();\n    }\n\n    for (var innerRow = 0; innerRow < ${v}; innerRow++) {\n        mm_write(batch, globalRow + innerRow, globalCol, acc[innerRow]);\n    }\n  }`}const w=n=>n?"\n        mm_Asub[inputRow][inputCol] = mm_readA(batchA,\n          kStart + inputRow,\n          globalRowStart + inputCol);\n        ":"\n        mm_Asub[inputRow][inputCol] = mm_readA(batchA,\n          globalRowStart + inputRow,\n          kStart + inputCol);\n        ",$=n=>n?'let ACached = mm_Asub[k][tileRow + innerRow];':'let ACached = mm_Asub[tileRow + innerRow][k];';function b(o,i,l=!1,s=32,c=!1,u=32,h=!1,b=!1){const p=o[1]*i[1],C=o[0]*i[0],R=l?p:s,f=l?s:p;n.util.assert(f%i[1]===0&&R%i[0]===0&&s%i[1]===0,()=>`tileAHight ${f} must be divisible by workgroupSize[1]${i[1]}, tileAWidth ${R} must be divisible by workgroupSize[0]${i[0]}, tileInner ${s} must be divisible by workgroupSize[1]${i[1]}`);const A=f/i[1],v=R/i[0],k=s/i[1],B=o[1],S=o[0],_=h?`\n      let localRow = i32(localId.y);\n      let localCol = i32(localId.x);\n      let globalRowStart = i32(workgroupId.y) * ${p};\n      let globalColStart = i32(workgroupId.x) * ${C};\n\n      // Loop over shared dimension.\n      for (var t = 0; t < numTiles; t++) {\n        // Load one tile of A into local memory.\n        for (var inputRow = localRow; inputRow < ${f}; inputRow = inputRow + ${i[1]}) {\n          for (var inputCol = localCol; inputCol < ${R}; inputCol = inputCol + ${i[0]}) {\n            ${w(l)}\n          }\n        }\n        // Load one tile of B into local memory.\n        for (var inputRow = localRow; inputRow < ${s}; inputRow = inputRow + ${i[1]}) {\n              for (var inputCol = localCol; inputCol < ${C}; inputCol = inputCol + ${i[0]}) {\n            mm_Bsub[inputRow][inputCol] = mm_readB(batchB,\n              kStart + inputRow,\n              globalColStart + inputCol);\n          }\n        }\n        kStart = kStart + ${s};\n        workgroupBarrier();\n\n        // Compute acc values for a single thread.\n        var BCached : array<f32, ${S}>;\n        for (var k = 0; k < ${s}; k++) {\n          for (var inner = 0; inner < ${S}; inner++) {\n            BCached[inner] = mm_Bsub[k][localCol + inner * ${i[0]}];\n          }\n          for (var innerRow = 0; innerRow < ${B}; innerRow++) {\n            let ACached = ${l?`mm_Asub[k][localRow + innerRow * ${i[1]}];`:`mm_Asub[localRow + innerRow * ${i[1]}][k];`}\n            for (var innerCol = 0; innerCol < ${S}; innerCol++) {\n              acc[innerRow][innerCol] =\n                  fma(ACached, BCached[innerCol], acc[innerRow][innerCol]);\n            }\n          }\n        }\n        workgroupBarrier();\n      }\n      for (var innerRow = 0; innerRow < ${B}; innerRow++) {\n        let gRow = globalRowStart + localRow + innerRow * ${i[1]};\n        for (var innerCol = 0; innerCol < ${S}; innerCol++) {\n          let gCol = globalColStart + localCol + innerCol * ${i[0]};\n          mm_write(batch, gRow, gCol, acc[innerRow][innerCol]);\n        }\n      }\n      `:`\n  let tileRow = i32(localId.y) * ${B};\n  let tileCol = i32(localId.x) * ${S};\n\n  let globalRow = i32(globalId.y) * ${B};\n  let globalCol = i32(globalId.x) * ${S};\n  let globalRowStart = i32(workgroupId.y) * ${p};\n\n  let tileRowA = i32(localId.y) * ${A};\n  let tileColA = i32(localId.x) * ${v};\n  let tileRowB = i32(localId.y) * ${k};\n  // Loop over shared dimension.\n  for (var t = 0; t < numTiles; t++) {\n    // Load one tile of A into local memory.\n    for (var innerRow = 0; innerRow < ${A}; innerRow++) {\n      for (var innerCol = 0; innerCol < ${v}; innerCol++) {\n        let inputRow = tileRowA + innerRow;\n        let inputCol = tileColA + innerCol;\n        ${w(l)}\n      }\n    }\n\n    // Load one tile of B into local memory.\n    for (var innerRow = 0; innerRow < ${k}; innerRow++) {\n      for (var innerCol = 0; innerCol < ${S}; innerCol++) {\n        let inputRow = tileRowB + innerRow;\n        let inputCol = tileCol + innerCol;\n        mm_Bsub[inputRow][inputCol] = mm_readB(batchB,\n          kStart + inputRow,\n          globalCol + innerCol);\n      }\n    }\n    kStart = kStart + ${s};\n    workgroupBarrier();\n\n    // Compute acc values for a single thread.\n    var BCached : array<f32, ${S}>;\n    for (var k = 0; k < ${s}; k++) {\n      for (var inner = 0; inner < ${S}; inner++) {\n        BCached[inner] = mm_Bsub[k][tileCol + inner];\n      }\n\n      for (var innerRow = 0; innerRow < ${B}; innerRow++) {\n        ${$(l)}\n        for (var innerCol = 0; innerCol < ${S}; innerCol++) {\n          acc[innerRow][innerCol] =\n              fma(ACached, BCached[innerCol], acc[innerRow][innerCol]);\n        }\n      }\n    }\n\n    workgroupBarrier();\n  }\n\n  for (var innerRow = 0; innerRow < ${B}; innerRow++) {\n    for (var innerCol = 0; innerCol < ${S}; innerCol++) {\n      mm_write(batch, globalRow + innerRow, globalCol + innerCol,\n          acc[innerRow][innerCol]);\n    }\n  }\n  `;return`\n    var<workgroup> mm_Asub : array<array<f32, ${R}>, ${f}>;\n    var<workgroup> mm_Bsub : array<array<f32, ${C}>, ${s}>;\n\n    ${(0,t.getMainHeaderString)()} {\n      let batch = ${c?'0':'i32(globalId.z)'};\n      let batchA = ${c||!b?'batch':'batch % uniforms.aShape[0]'};\n      let batchB = ${c||!b?'batch':'batch % uniforms.bShape[0]'};\n      let numTiles = ${c?`${Math.ceil(u/s)}`:`(uniforms.dimInner - 1) / ${s} + 1`};\n      var kStart = ${c?`i32(globalId.z) * ${u}`:'0'};\n\n      var acc : array<array<f32, ${S}>, ${B}>;\n\n      // Without this initialization strange values show up in acc.\n      for (var innerRow = 0; innerRow < ${B}; innerRow++) {\n        for (var innerCol = 0; innerCol < ${S}; innerCol++) {\n          acc[innerRow][innerCol] = 0.0;\n        }\n      }\n      ${_}\n    }\n  `}const p=n=>n?"\n      mm_readA(batchA, colA, globalRow),\n      mm_readA(batchA, colA + 1, globalRow),\n      mm_readA(batchA, colA + 2, globalRow),\n      mm_readA(batchA, colA + 3, globalRow)\n  ":"\n      mm_readA(batchA, globalRow, colA),\n      mm_readA(batchA, globalRow, colA + 1),\n      mm_readA(batchA, globalRow, colA + 2),\n      mm_readA(batchA, globalRow, colA + 3)\n  ";function C(o,i=!1){n.util.assert(1===o[1]&&1===o[2],()=>`A linear work group size is required. But got ${o}.`);const l=4*o[0];return`\n    var<workgroup> mm_Asub : array<vec4<f32>, ${o[0]}>;\n\n    ${(0,t.getMainHeaderString)()} {\n      let tileCol = i32(localId.x);\n      let globalCol = i32(globalId.x);\n      let globalRow = i32(globalId.y);\n\n      let numTiles = (uniforms.dimInner - 1) / ${l} + 1;\n      let batch = i32(globalId.z);\n      let batchA = batch % uniforms.aShape[0];\n      let batchB = batch % uniforms.bShape[0];\n      // Without this initialization strange values show up in acc.\n      var acc = 0.0;\n\n      // Loop over shared dimension.\n      for (var t = 0; t < numTiles; t++) {\n        // Load one tile of A into local memory.\n        let colA = t * ${l} + tileCol * 4;\n        mm_Asub[tileCol] = vec4<f32>(${p(i)});\n        workgroupBarrier();\n\n        // Compute acc values for a single thread.\n        for (var k = 0; k < ${l/4}; k++) {\n          let rowB = t * ${l} + k * 4;\n          let BCached = vec4<f32>(mm_readB(batchB, rowB, globalCol),\n                              mm_readB(batchB, rowB + 1, globalCol),\n                              mm_readB(batchB, rowB + 2, globalCol),\n                              mm_readB(batchB, rowB + 3, globalCol));\n\n          let ACached = mm_Asub[k];\n          acc = acc + dot(ACached, BCached);\n        }\n\n        workgroupBarrier();\n      }\n\n      mm_write(batch, globalRow, globalCol, acc);\n    }\n  `}e.MatMulPackedProgram=class{constructor(n,o,t=!1,l=!1,s=null,c=null,u=null,h=!1){this.variableNames=['A','B'],this.uniforms="dimAOuter : i32, dimBOuter : i32, dimInner : i32,",this.outputShape=o,this.dispatchLayout={x:[2],y:[1],z:[0]};const w=t?n[1]:n[2];if(this.isVec4=(w%4==0&&!t||o[1]%4==0&&t)&&o[2]%4==0&&!l,this.outputComponent=this.isVec4?4:1,this.isVectorA=1===o[1]&&!t,!this.isVec4&&this.isVectorA)this.elementsPerThread=[1,1,1],this.workgroupSize=[32,1,1];else{const n=(0,i.computeWorkgroupInfoForMatMul)(o[1],w,o[2],t);this.workgroupSize=n.workgroupSize,this.elementsPerThread=n.elementsPerThread}this.dispatch=(0,i.computeDispatch)(this.dispatchLayout,this.outputShape,this.workgroupSize,this.elementsPerThread);const $=null!=s,b=null!=u;$&&this.variableNames.push('bias'),b&&this.variableNames.push('preluActivationWeights'),this.sequentialAccessByThreads=h,this.transposeA=t,this.transposeB=l,this.addBias=$,this.activation=c,this.hasPreluActivationWeights=b,[this.fitAOuter,this.fitBOuter,this.fitInner]=this.getShapeFit(o[1],o[2],w),this.shaderKey=`matMulPacked_${this.elementsPerThread}_${t}_${l}_${this.activation}_${this.fitAOuter}_${this.fitBOuter}_${this.fitInner}_${this.isVec4}_${this.isVectorA}_${this.sequentialAccessByThreads}`}getShapeFit(n,o,t){const i=this.workgroupSize[1]*this.elementsPerThread[1],l=this.workgroupSize[0]*this.elementsPerThread[0];!this.isVec4&&this.isVectorA?this.tileInner=4*this.workgroupSize[0]:this.tileInner=l;return[n%i===0,o%l===0,t%this.tileInner===0]}getUserCode(){return`\n      ${(0,o.activationFnSnippet)(this.activation,this.hasPreluActivationWeights,this.isVec4)}\n      ${s(this.addBias,this.activation,!1,this.transposeB,this.fitAOuter,this.fitBOuter,this.fitInner,this.isVec4?4:1)}\n      ${this.isVec4?h(this.elementsPerThread,this.workgroupSize,this.transposeA,this.tileInner,!1,null,!0):this.isVectorA?C(this.workgroupSize,this.transposeA):b(this.elementsPerThread,this.workgroupSize,this.transposeA,this.tileInner,!1,null,this.sequentialAccessByThreads,!0)}\n    `}}},2424,[1158,2425,2417,2419]);
__d(function(g,r,i,a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.activationFnSnippet=
/**
   * @license
   * Copyright 2021 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   */
function(o,l=!1,y=!1,u=3){if(null===o)return'';let c='';if('linear'===o)c=(0,t.getUnaryOpString)(t.UnaryOpType.LINEAR);else if('relu'===o)c=(0,t.getUnaryOpString)(t.UnaryOpType.RELU,y);else if('elu'===o)c=(0,t.getUnaryOpString)(t.UnaryOpType.ELU,y);else if('relu6'===o)c=(0,t.getUnaryOpString)(t.UnaryOpType.RELU6,y);else if('prelu'===o)c=(0,n.getBinaryOpString)(n.BinaryOpType.PRELU,y);else if('sigmoid'===o)c=(0,t.getUnaryOpString)(t.UnaryOpType.SIGMOID,y);else{if('leakyrelu'!==o)throw new Error(`Activation ${o} has not been implemented for the WebGPU backend.`);c=(0,t.getUnaryOpString)(t.UnaryOpType.LEAKYRELU,y)}const s=y?4:1,O=(0,p.typeSnippet)(s);let U='';U=l?`\n      fn activation(a : ${O}, coords : vec${u}<i32>) -> ${O} {\n        let b = getPreluActivationWeightsByOutputCoords(coords);\n        ${c}\n      }`:`\n      fn activation(a : ${O}, coords : vec${u}<i32>) -> ${O} {\n        ${c}\n      }`;return U},e.biasActivationSnippet=function(n,t){return`\n      ${n?'value = value + getBiasByOutputCoords(coords);':''}\n      ${t?'value = activation(value, coords);':''}\n      `};var n=r(d[0]),t=r(d[1]),p=r(d[2])},2425,[2426,2427,2417]);
__d(function(g,r,i,a,m,e,d){
/**
   * @license
   * Copyright 2021 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   */
var n;Object.defineProperty(e,"__esModule",{value:!0}),e.BinaryOpType=void 0,e.getBinaryOpString=function(F,X){let h;do{switch(F){case n.ATAN2:h=s;break;case n.MAX:h=v;break;case n.MIN:h=O;break;case n.MOD:h=X?M:I;break;case n.NOT_EQUAL:h=X?P:D;break;case n.POW:h=X?k:S;break;default:continue}let t,l,b;return X?(t='isnanVec4',l='vec4<f32>',b='vec4<bool>'):(t='isnan',l='f32',b='bool'),`\n      let aIsNaN = ${t}(a);\n      let aPostLegalization = select(a, ${l}(42), aIsNaN);\n      let bIsNaN = ${t}(b);\n      let bPostLegalization = select(b, ${l}(42), bIsNaN);\n      let isNaN = false;\n      let valueForNaN = uniforms.NAN;\n      {\n        let a = aPostLegalization;\n        let b = bPostLegalization;\n        ${h}\n        return select(\n            resultTemp, ${l}(valueForNaN),\n            ${b}(isNaN) | aIsNaN | bIsNaN);\n      }\n    `}while(0);switch(F){case n.ADD:h=t;break;case n.COMPLEX_MULTIPLY_IMAG:h=b;break;case n.COMPLEX_MULTIPLY_REAL:h=l;break;case n.DIV:h=o;break;case n.ELU_DER:h=u;break;case n.EQUAL:h=c;break;case n.FLOOR_DIV:h=L;break;case n.GREATER:h=E;break;case n.GREATER_EQUAL:h=T;break;case n.LESS:h=p;break;case n.LESS_EQUAL:h=A;break;case n.LOGICAL_AND:return X?f:N;case n.LOGICAL_OR:return X?R:_;case n.MUL:h=U;break;case n.PRELU:return X?G:C;case n.SQUARED_DIFFERENCE:h=Q;break;case n.SUB:h=z}return`\n    ${h}\n    return resultTemp;\n  `},(function(n){n[n.ADD=0]="ADD",n[n.ATAN2=1]="ATAN2",n[n.COMPLEX_MULTIPLY_IMAG=2]="COMPLEX_MULTIPLY_IMAG",n[n.COMPLEX_MULTIPLY_REAL=3]="COMPLEX_MULTIPLY_REAL",n[n.DIV=4]="DIV",n[n.ELU_DER=5]="ELU_DER",n[n.EQUAL=6]="EQUAL",n[n.FLOOR_DIV=7]="FLOOR_DIV",n[n.GREATER=8]="GREATER",n[n.GREATER_EQUAL=9]="GREATER_EQUAL",n[n.LESS=10]="LESS",n[n.LESS_EQUAL=11]="LESS_EQUAL",n[n.LOGICAL_AND=12]="LOGICAL_AND",n[n.LOGICAL_OR=13]="LOGICAL_OR",n[n.MAX=14]="MAX",n[n.MIN=15]="MIN",n[n.MOD=16]="MOD",n[n.MUL=17]="MUL",n[n.NOT_EQUAL=18]="NOT_EQUAL",n[n.POW=19]="POW",n[n.PRELU=20]="PRELU",n[n.SQUARED_DIFFERENCE=21]="SQUARED_DIFFERENCE",n[n.SUB=22]="SUB"})(n||(e.BinaryOpType=n={}));const t='let resultTemp = a + b;',s='let resultTemp = atan2(a, b);',l='let resultTemp = areal * breal - aimag * bimag;',b='let resultTemp = areal * bimag + aimag * breal;',o='let resultTemp = a / b;',u='let resultTemp = select(a * (b + 1.0), a, b >= b - b);',c="\n  let zero = sign(a) * 0 + 0;\n  let one = sign(b) * 0 + 1;\n  let resultTemp = select(zero, one, a == b);\n",L="\n  let remainder =\n      select(a % b, round(a % b), (round(a) == a) & (round(b) == b));\n  let quotient = (a - remainder) / b;\n  let resultTemp =\n      round(select(quotient, quotient - 1, sign(remainder) == -sign(b)));\n",E="\n  let zero = sign(a) * 0 + 0;\n  let one = sign(b) * 0 + 1;\n  let resultTemp = select(zero, one, a > b);\n",T="\n  let zero = sign(a) * 0 + 0;\n  let one = sign(b) * 0 + 1;\n  let resultTemp = select(zero, one, a >= b);\n",p="\n  let zero = sign(a) * 0 + 0;\n  let one = sign(b) * 0 + 1;\n  let resultTemp = select(zero, one, a < b);\n",A="\n  let zero = sign(a) * 0 + 0;\n  let one = sign(b) * 0 + 1;\n  let resultTemp = select(zero, one, a <= b);\n",N='return f32(a >= 1.0 && b >= 1.0);',f="return (vec4<f32>(a >= vec4<f32>(1.0)) *\n  vec4<f32>(b >= vec4<f32>(1.0)));",_='return f32(a >= 1.0 || b >= 1.0);',R="return min(vec4<f32>(a >= vec4<f32>(1.0)) +\n  vec4<f32>(b >= vec4<f32>(1.0)), vec4<f32>(1.0));",v='let resultTemp = max(a, b);',O='let resultTemp = min(a, b);',I="\n  let isNaN = b == 0.;\n  var resultTemp = a % b;\n  resultTemp = select((resultTemp + b) % b, resultTemp,\n      (a < 0. && b < 0.) || (a >= 0. && b > 0.));\n",M="\n  let isNaN = !vec4<bool>(b);\n  var resultTemp = vec4<f32>(a % b);\n  if (!((a[0] < 0. && b[0] < 0.) || (a[0] >= 0. && b[0] > 0.))) {\n    resultTemp[0] = (resultTemp[0] + b[0]) % b[0];\n  }\n  if (!((a[1] < 0. && b[1] < 0.) || (a[1] >= 0. && b[1] > 0.))) {\n    resultTemp[1] = (resultTemp[1] + b[1]) % b[1];\n  }\n  if (!((a[2] < 0. && b[2] < 0.) || (a[2] >= 0. && b[2] > 0.))) {\n    resultTemp[2] = (resultTemp[2] + b[2]) % b[2];\n  }\n  if (!((a[3] < 0. && b[3] < 0.) || (a[3] >= 0. && b[3] > 0.))) {\n    resultTemp[3] = (resultTemp[3] + b[3]) % b[3];\n  }\n",U='let resultTemp = a * b;',D="\n  var resultTemp = f32(a != b);\n  let valueForNaN = 1.0;\n",P="\n  var resultTemp = vec4<f32>(a != b);\n  let valueForNaN = 1.0;\n",S="\n  let isNaN = a < 0.0 && floor(b) < b;\n  if (b == 0.0) {\n    return 1.0;\n  }\n  var resultTemp = select(sign(a) * pow(abs(a), b), pow(abs(a), b),\n      round(abs(b) % 2.0) != 1.0);\n",k="\n  let isModRound1Bool = vec4<i32>(round(abs(b) % vec4<f32>(2.0))) == vec4<i32>(1);\n  let isModRound1 = vec4<f32>(isModRound1Bool);\n  let multiplier = sign(a) * isModRound1 + (vec4<f32>(1.0) - isModRound1);\n  var resultTemp = multiplier * pow(abs(a), b);\n\n  // Ensure that a^0 = 1, including 0^0 = 1 as this correspond to TF and JS\n  let isExpZero = b == vec4<f32>(0.0);\n  if (isExpZero.r) {\n    resultTemp.r = 1.0;\n  }\n  if (isExpZero.g) {\n    resultTemp.g = 1.0;\n  }\n  if (isExpZero.b) {\n    resultTemp.b = 1.0;\n  }\n  if (isExpZero.a) {\n    resultTemp.a = 1.0;\n  }\n  let isNaN = (a < vec4<f32>(0.0)) & (floor(b) < b);\n",C="if (a < 0.0) { return b * a; }  return a;",G="\n  let aLessThanZero = vec4<f32>(a < vec4<f32>(0.0));\n  return (aLessThanZero * (b * a)) + ((vec4<f32>(1.0) - aLessThanZero) * a);\n",Q='let resultTemp = (a - b) * (a - b);',z='let resultTemp = a - b;'},2426,[]);
__d(function(g,r,i,a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.UnaryOpType=void 0,e.getUnaryOpString=function(t,nn){switch(t){case n.ABS:return u;case n.ACOS:return s;case n.ACOSH:return c;case n.ASIN:return l;case n.ASINH:return A;case n.ATAN:return S;case n.ATANH:return N;case n.COS:return E;case n.COSH:return I;case n.CEIL:return o;case n.ELU:return nn?O:L;case n.ERF:return R;case n.EXP:return T;case n.EXPM1:return f;case n.FLOOR:return _;case n.IS_FINITE:return p;case n.IS_INF:return F;case n.IS_NAN:return U;case n.LINEAR:return C;case n.LOG:return b;case n.LOG1P:return x;case n.LOGICAL_NOT:return h;case n.NEG:return P;case n.LEAKYRELU:return nn?G:H;case n.RECIPROCAL:return v;case n.RELU:return nn?Q:y;case n.RELU6:return nn?M:k;case n.ROUND:return $;case n.RSQRT:return w;case n.SELU:return D;case n.SIGMOID:return X;case n.SIGN:return Y;case n.SIN:return B;case n.SINH:return K;case n.SOFTPLUS:return Z;case n.SQRT:return q;case n.SQUARE:return j;case n.STEP:return z;case n.TAN:return J;case n.TANH:return V;case n.TO_INT:return W;default:throw new Error(`BinaryType ${t} is not implemented!`)}};var n,t=r(d[0]);
/**
   * @license
   * Copyright 2021 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   */!(function(n){n[n.ABS=0]="ABS",n[n.ACOS=1]="ACOS",n[n.ACOSH=2]="ACOSH",n[n.ASIN=3]="ASIN",n[n.ASINH=4]="ASINH",n[n.ATAN=5]="ATAN",n[n.ATANH=6]="ATANH",n[n.CEIL=7]="CEIL",n[n.COS=8]="COS",n[n.COSH=9]="COSH",n[n.ELU=10]="ELU",n[n.ERF=11]="ERF",n[n.EXP=12]="EXP",n[n.EXPM1=13]="EXPM1",n[n.FLOOR=14]="FLOOR",n[n.IS_FINITE=15]="IS_FINITE",n[n.IS_INF=16]="IS_INF",n[n.IS_NAN=17]="IS_NAN",n[n.LINEAR=18]="LINEAR",n[n.LOG=19]="LOG",n[n.LOG1P=20]="LOG1P",n[n.LOGICAL_NOT=21]="LOGICAL_NOT",n[n.NEG=22]="NEG",n[n.RELU=23]="RELU",n[n.RELU6=24]="RELU6",n[n.LEAKYRELU=25]="LEAKYRELU",n[n.RECIPROCAL=26]="RECIPROCAL",n[n.ROUND=27]="ROUND",n[n.RSQRT=28]="RSQRT",n[n.SELU=29]="SELU",n[n.SIGMOID=30]="SIGMOID",n[n.SIGN=31]="SIGN",n[n.SIN=32]="SIN",n[n.SINH=33]="SINH",n[n.SOFTPLUS=34]="SOFTPLUS",n[n.SQRT=35]="SQRT",n[n.SQUARE=36]="SQUARE",n[n.STEP=37]="STEP",n[n.TAN=38]="TAN",n[n.TANH=39]="TANH",n[n.TO_INT=40]="TO_INT"})(n||(e.UnaryOpType=n={}));const u="return abs(a);",s="\n  if (abs(a) > 1.) {\n    return uniforms.NAN;\n  }\n  return acos(a);\n",c="\n  if (a < 1.) {\n    return uniforms.NAN;\n  }\n  return acosh(a);\n",l="\n  if (abs(a) > 1.) {\n    return uniforms.NAN;\n  }\n  return asin(a);\n",A="return asinh(a);",S="\n  if (isnan(a)) {\n    return uniforms.NAN;\n  }\n  return atan(a);\n",N="\n  if (abs(a) > 1.) {\n    return uniforms.NAN;\n  }\n  if (a == 1.) {\n    return uniforms.INFINITY;\n  }\n  if (a == -1.) {\n    return -uniforms.INFINITY;\n  }\n  return atanh(a);\n",o="return ceil(a);",E="return cos(a);",I="\n  let e2x = exp(-a);\n  return (e2x + 1.0 / e2x) / 2.0;\n",f="return exp(a) - 1.0;",L="if (a >= 0.0) { return a; }  return (exp(a) - 1.0);",O="\n  var resFloat = exp(a) - vec4<f32>(1.0);\n  if (a.r >= 0.0) {\n    resFloat.r = a.r;\n  }\n  if (a.g >= 0.0) {\n    resFloat.g = a.g;\n  }\n  if (a.b >= 0.0) {\n    resFloat.b = a.b;\n  }\n  if (a.a >= 0.0) {\n    resFloat.a = a.a;\n  }\n  return resFloat;\n",R=`\n  // Error function is calculated approximately with elementary function.\n  // See "Handbook of Mathematical Functions with Formulas,\n  // Graphs, and Mathematical Tables", Abramowitz and Stegun.\n  let p = ${t.backend_util.ERF_P};\n  let a1 = ${t.backend_util.ERF_A1};\n  let a2 = ${t.backend_util.ERF_A2};\n  let a3 = ${t.backend_util.ERF_A3};\n  let a4 = ${t.backend_util.ERF_A4};\n  let a5 = ${t.backend_util.ERF_A5};\n\n  let sign = sign(a);\n  let absA = abs(a);\n  let t = 1.0 / (1.0 + p * absA);\n  return sign * (1.0 - (((((a5 * t + a4) * t) + a3) * t + a2) * t + a1) * t * exp(-absA * absA));\n`,T="return exp(a);",_="return floor(a);",p="return f32(!isnan(a) && !isinf(a));",F="return f32(isinf(a));",U="return f32(isnan(a));",C="return a;",b="if (a < 0.0) { return uniforms.NAN; }\n  return log(a);",x="\n  if (isnan(a)) { return a; }\n  return log(1.0 + a);\n",h="return f32(!(a >= 1.0));",P="return -a;",H="if (a < 0.0) { return uniforms.alpha * a; } return a;",G="\n  let aLessThanZero = vec4<f32>(a < vec4<f32>(0.0));\n  return (aLessThanZero * (uniforms.alpha * a)) + ((vec4<f32>(1.0) - aLessThanZero) * a);\n",v="return 1.0 / a;",y="return select(a, 0.0, a < 0.0);",k='return clamp(a, 0.0, 6.0);',M='return clamp(a, vec4<f32>(0.0, 0.0, 0.0, 0.0), vec4<f32>(6.0, 6.0, 6.0, 6.0));',Q="\n  return select(a, vec4<f32>(0.0), a < vec4<f32>(0.0));\n",$="return round(a);",w="return inverseSqrt(a);",D=`\n  if (a >= 0.0) {\n    return ${t.backend_util.SELU_SCALE} * a;\n  } else {\n    return ${t.backend_util.SELU_SCALEALPHA} * (exp(a) - 1.0);\n  }\n`,X="return 1.0 / (1.0 + exp(-1.0 * a));",Y="return sign(a);",B="return sin(a);",K="\n  let e2x = exp(a);\n  return (e2x - 1.0 / e2x) / 2.0;\n",Z="\n  let epsilon = 1.1920928955078125e-7;\n  let threshold = log(epsilon) + 2.0;\n\n  let too_large = a > -threshold;\n  let too_small = a < threshold;\n  let exp_a = exp(a);\n\n  if (too_large) {\n    return a;\n  } else if (too_small) {\n    return exp_a;\n  } else {\n    return log(exp_a + 1.0);\n  }\n",q="return sqrt(a);",j="return a * a;",z="\n  if (isnan(a)) {\n    return a;\n  }\n\n  return select(uniforms.stepAlpha, 1.0, a > 0.0);\n",J="return tan(a);",V="\n  let e2x = exp(-2.0 * abs(a));\n  return sign(a) * (1.0 - e2x) / (1.0 + e2x);\n",W="return f32(i32((a)));"},2427,[1158]);
__d(function(g,r,i,a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.MatMulReduceProgram=void 0,e.makeMatMulReduceSource=o;var t=r(d[0]),s=r(d[1]),n=r(d[2]),u=r(d[3]);
/**
   * @license
   * Copyright 2021 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   */
function o(t){return`\n    var<workgroup> sumValues : array<f32, ${t}>;\n    ${(0,n.getMainHeaderString)()} {\n      let coords = getOutputCoords();\n      let batch = coords[0];\n      let batchA = batch % uniforms.aShape[0];\n      let batchB = batch % uniforms.bShape[0];\n      let row = coords[1];\n      let col = coords[2];\n      var sum = 0.0;\n      let Length = uniforms.dimInner;\n      for (var k = i32(localId.x); k < Length; k = k + ${t}) {\n        let dataA = mm_readA(batchA, row, k);\n        let dataB = mm_readB(batchB, k, col);\n        sum = sum + dataA * dataB;\n      }\n      sumValues[localId.x] = sum;\n      workgroupBarrier();\n\n      for(var currentSize = ${t/2}u; currentSize > 1u;\n          currentSize = currentSize / 2u) {\n        if (localId.x < currentSize)\n        {\n          sumValues[localId.x] = sumValues[localId.x] + sumValues[localId.x + currentSize];\n        }\n        workgroupBarrier();\n      }\n\n      if (localId.x == 0u) {\n        sum = sumValues[0] + sumValues[1];\n        mm_write(batch, row, col, sum);\n      }\n    }\n  `}e.MatMulReduceProgram=class{constructor(t,s=!1,n=!1,o=null,l=null,c=null){this.variableNames=['A','B'],this.uniforms="dimAOuter : i32, dimBOuter : i32, dimInner : i32,",this.workgroupSize=[256,1,1],this.outputShape=t,this.dispatchLayout={x:[],y:[1,2],z:[0]},this.dispatch=(0,u.computeDispatch)(this.dispatchLayout,this.outputShape,this.workgroupSize);const h=null!=o,p=null!=c;h&&this.variableNames.push('bias'),p&&this.variableNames.push('preluActivationWeights'),this.transposeA=s,this.transposeB=n,this.addBias=h,this.activation=l,this.hasPreluActivationWeights=p,this.shaderKey=`matMulReduce_${this.activation}_${s}_${n}`}getUserCode(){return`\n      ${(0,t.activationFnSnippet)(this.activation,this.hasPreluActivationWeights)}\n      ${(0,s.matMulReadWriteFnSource)(this.addBias,this.activation,this.transposeA,this.transposeB)}\n      ${o(this.workgroupSize[0])}\n    `}}},2428,[2425,2424,2417,2419]);
__d(function(g,r,i,a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.MatMulSmallOutputSizeProgram=void 0,e.makeMatMulSmallOutputSizeSource=n;var l=r(d[0]),t=r(d[1]),o=r(d[2]);
/**
   * @license
   * Copyright 2021 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   */
function n(l){const t=l[1],n=l[0],s=t>n?t:n;return`\n  var<workgroup> mm_Asub : array<array<f32, ${s}>, ${t}>;\n  var<workgroup> mm_Bsub : array<array<f32, ${n}>, ${s}>;\n\n  // If the output size is small for matrix multiplication, avoid to use vec4\n  // and handle some elements per thread to optimally utilize the ALU.\n  // Read data from global memory to registers firstly, then store them into\n  // shared memory, so it is instruction-Level parallelism for arithmetic\n  // operations and others handle IO operations between barrier api, makes ALU\n  // and load/store units work simultaneously, could improves the performance.\n  ${(0,o.getMainHeaderString)()} {\n    let tileRow = i32(localId.y);\n    let tileCol = i32(localId.x);\n    let globalRow = i32(globalId.y);\n    let globalCol = i32(globalId.x);\n    let batch = i32(globalId.z);\n    let batchA = batch % uniforms.aShape[0];\n    let batchB = batch % uniforms.bShape[0];\n\n    // uniforms.dimInner should be greater than 0.\n    let numTiles = (uniforms.dimInner - 1) / ${s} + 1;\n    var acc = 0.0;\n\n    var globalColA = tileCol;\n    var globalRowB = 0;\n    var regA = mm_readA(batchA, globalRow, globalColA);\n    var regB0 = mm_readB(batchB, globalRowB + 2 * tileRow, globalCol);\n    var regB1 = mm_readB(batchB, globalRowB + 2 * tileRow + 1, globalCol);\n    globalColA = globalColA + ${s};\n    globalRowB = globalRowB + ${s};\n\n    for (var t = 0; t < numTiles; t = t + 1) {\n      mm_Asub[tileRow][tileCol] = regA;\n      mm_Bsub[2 * tileRow][tileCol] = regB0;\n      mm_Bsub[2 * tileRow + 1][tileCol] = regB1;\n\n      workgroupBarrier();\n\n      regA = mm_readA(batchA, globalRow, globalColA);\n      regB0 = mm_readB(batchB, globalRowB + 2 * tileRow, globalCol);\n      regB1 = mm_readB(batchB, globalRowB + 2 * tileRow + 1, globalCol);\n      globalColA = globalColA + ${s};\n      globalRowB = globalRowB + ${s};\n\n      for (var k = 0; k < ${s}; k = k + 1) {\n        acc = acc + mm_Asub[tileRow][k] * mm_Bsub[k][tileCol];\n      }\n      workgroupBarrier();\n    }\n\n    mm_write(batch, globalRow, globalCol, acc);\n  }\n  `}e.MatMulSmallOutputSizeProgram=class{constructor(l,t,o,n=!1,s=!1,u=null,h=null,b=null){this.variableNames=['A','B'],this.uniforms="dimAOuter : i32, dimBOuter : i32, dimInner : i32,",this.workgroupSize=[16,8,1],this.outputShape=o,this.dispatchLayout={x:[2],y:[1],z:[0]},this.dispatch=[Math.ceil(o[2]/this.workgroupSize[0]),Math.ceil(o[1]/this.workgroupSize[1]),o[0]];const c=null!=u;c&&this.variableNames.push('bias');const p=null!=b;p&&this.variableNames.push('preluActivationWeights'),this.transposeA=n,this.transposeB=s,this.addBias=c,this.activation=h,this.hasPreluActivationWeights=p,this.shaderKey=`matMulSmallOutputSize_${this.activation}_${n}_${s}`}getUserCode(){return`\n      ${(0,l.activationFnSnippet)(this.activation,this.hasPreluActivationWeights)}\n      ${(0,t.matMulReadWriteFnSource)(this.addBias,this.activation,this.transposeA,this.transposeB)}\n      ${n(this.workgroupSize)}\n    `}}},2429,[2425,2424,2417]);
__d(function(g,r,i,a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.MatMulSplitKProgram=e.BiasActivationProgram=void 0;var t=r(d[0]),s=r(d[1]),o=r(d[2]),h=r(d[3]),n=r(d[4]),u=r(d[5]);e.MatMulSplitKProgram=
/**
   * @license
   * Copyright 2022 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   */
class{constructor(s,o,h=!1,n=!1){this.variableNames=['A','B'],this.uniforms="dimAOuter : i32, dimBOuter : i32, dimInner : i32,",this.workgroupSize=[8,8,1],this.atomic=!0,this.splitedDimInner=128,t.util.assert(1===s[0],()=>'MatMulSplitKProgram only supports batch = 1.'),this.outputShape=s,this.dispatchLayout={x:[2],y:[1],z:[0,3]};const p=(h&&this.outputShape[1]%4==0||!h&&o%4==0)&&this.outputShape[2]%4==0;this.elementsPerThread=[4,4,this.splitedDimInner],this.outputComponent=p?4:1,p||(this.outputShape[1]<16&&(this.elementsPerThread[1]=1),this.outputShape[2]<16&&(this.elementsPerThread[0]=1)),this.dispatch=(0,u.computeDispatch)(this.dispatchLayout,[this.outputShape[0],this.outputShape[1],this.outputShape[2],o],this.workgroupSize,this.elementsPerThread),this.transposeA=h,this.transposeB=n,this.shaderKey=`matMulSplitK_${h}_${n}_${this.elementsPerThread}_${this.outputComponent}`}getUserCode(){const t=this.outputComponent;return`\n      ${(0,o.matMulReadFnSource)(!1,this.transposeB,!1,!1,!1,t)}\n      fn mm_write(batch: i32, row : i32, col : i32, value : ${(0,n.typeSnippet)(t)}) {\n        if (row < uniforms.dimAOuter && col < uniforms.dimBOuter) {\n          let coords = vec3<i32>(batch, row, col);\n          let flatIndex = getOutputIndexFromCoords(coords);\n          // The problem is that we should initialize output to zero before using.\n          // Otherwise, the original value will be added to the result.\n          for (var i = 0; i < ${t}; i = i + 1) {\n            ${(0,h.atomicAddSnippet)('&result[flatIndex + i]',""+(t>1?'value[i]':'value'),'float32')}\n          }\n        }\n      }\n      ${4===t?(0,o.makeMatMulPackedVec4Source)(this.elementsPerThread,this.workgroupSize,this.transposeA,32,!0,this.splitedDimInner):(0,o.makeMatMulPackedSource)(this.elementsPerThread,this.workgroupSize,this.transposeA,32,!0,this.splitedDimInner)}\n    `}};e.BiasActivationProgram=class{constructor(t,s=null,o=null,h=null){this.uniforms='',this.variableNames=['x'],this.workgroupSize=[64,1,1],this.size=!0,this.outputShape=t,this.dispatchLayout=(0,u.flatDispatchLayout)(this.outputShape),this.dispatch=(0,u.computeDispatch)(this.dispatchLayout,this.outputShape,this.workgroupSize),this.addBias=null!=s,this.hasPreluActivationWeights=null!=h,this.activation=o,this.addBias&&this.variableNames.push('bias'),this.hasPreluActivationWeights&&this.variableNames.push('preluActivationWeights'),this.shaderKey=`biasActivation_${o}`}getUserCode(){return`\n    ${(0,s.activationFnSnippet)(this.activation,this.hasPreluActivationWeights)}\n    ${(0,n.getMainHeaderString)('index')} {\n      if (index < uniforms.size) {\n        let coords = getCoordsFromIndex(index);\n        var value = getXByOutputIndex(index);\n        ${(0,s.biasActivationSnippet)(this.addBias,this.activation)}\n        setOutputAtIndex(index, value);\n      }\n    }\n    `}}},2430,[1158,2425,2424,2418,2417,2419]);
__d(function(g,r,i,a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.fill=t,e.fillConfig=void 0;var n=r(d[0]),l=r(d[1]);
/**
   * @license
   * Copyright 2021 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   */
function t(t){const{backend:o,attrs:f}=t,{shape:u,value:c}=f;let{dtype:s}=f;if(s=s||n.util.inferDtype(c),'string'===s){const l=n.util.getArrayFromDType(s,n.util.sizeFromShape(u));return l.fill(c),o.makeTensorInfo(u,s,l)}{const n=new l.FillProgram(u),t=[{type:'float32',data:[c]}];return o.runWebGPUProgram(n,[],s,t)}}e.fillConfig={kernelName:n.Fill,backendName:'webgpu',kernelFunc:t}},2431,[1158,2432]);
__d(function(g,r,i,a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.FillProgram=void 0;var t=r(d[0]),s=r(d[1]);e.FillProgram=
/**
   * @license
   * Copyright 2019 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   */
class{constructor(t){this.variableNames=[],this.outputShape=[],this.uniforms='value : f32,',this.workgroupSize=[64,1,1],this.size=!0,this.outputShape=t,this.dispatchLayout=(0,s.flatDispatchLayout)(this.outputShape),this.dispatch=(0,s.computeDispatch)(this.dispatchLayout,this.outputShape,this.workgroupSize),this.shaderKey='fill'}getUserCode(){return`\n    ${(0,t.getMainHeaderString)('index')} {\n      if (index < uniforms.size) {\n        setOutputAtIndex(index, uniforms.value);\n      }\n    }\n  `}}},2432,[2417,2419]);
__d(function(g,r,i,a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.reshape=t,e.reshapeConfig=void 0;var s=r(d[0]);
/**
   * @license
   * Copyright 2021 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   */function t(t){const{inputs:n,attrs:h}=t,{x:p}=n,{shape:l}=h,o=s.util.sizeFromShape(p.shape),u=s.util.inferFromImplicitShape(l,o),c=s.util.sizeFromShape(u);return s.util.assert(o===c,()=>`The new shape (${u}) has ${c} elements and the old shape (${p.shape}) has ${o} elements. The new shape and old shape must have the same number of elements.`),t.backend.incRef(p.dataId),{dataId:p.dataId,shape:u,dtype:p.dtype}}e.reshapeConfig={kernelName:s.Reshape,backendName:'webgpu',kernelFunc:t}},2433,[1158]);
__d(function(g,r,i,a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.absConfig=e.abs=void 0;var n=r(d[0]),p=r(d[1]),b=r(d[2]),l=r(d[3]);
/**
   * @license
   * Copyright 2021 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   */
const s=e.abs=(0,p.unaryKernelFunc)({opType:l.UnaryOpType.ABS,cpuKernelImpl:b.simpleAbsImplCPU});e.absConfig={kernelName:n.Abs,backendName:'webgpu',kernelFunc:s}},2434,[1158,2435,2441,2427]);
__d(function(g,r,i,_a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.binaryKernelFunc=function({opType:s,cpuKernelImpl:l,supportsComplex:y=!1,dtype:c}){return({inputs:u,backend:I})=>{const{a:f,b:h}=u,T=I;if(y&&'complex64'===f.dtype){const l=T.tensorMap.get(f.dataId),y=T.tensorMap.get(h.dataId);let c,u;if(s!==p.BinaryOpType.MUL)[c,u]=[[l.complexTensorInfos.real,y.complexTensorInfos.real],[l.complexTensorInfos.imag,y.complexTensorInfos.imag]].map(n=>{const[p,o]=n,l={dataId:p.dataId,dtype:p.dtype,shape:f.shape},y={dataId:o.dataId,dtype:o.dtype,shape:h.shape},c=new t.BinaryOpProgram(s,f.shape,h.shape);return T.runWebGPUProgram(c,[l,y],(0,a.upcastType)(p.dtype,o.dtype))});else{const a=new n.BinaryOpComplexProgram(p.BinaryOpType.COMPLEX_MULTIPLY_REAL,f.shape,h.shape),t=new n.BinaryOpComplexProgram(p.BinaryOpType.COMPLEX_MULTIPLY_IMAG,f.shape,h.shape),o=[{dataId:l.complexTensorInfos.real.dataId,dtype:l.complexTensorInfos.real.dtype,shape:f.shape},{dataId:l.complexTensorInfos.imag.dataId,dtype:l.complexTensorInfos.imag.dtype,shape:f.shape},{dataId:y.complexTensorInfos.real.dataId,dtype:y.complexTensorInfos.real.dtype,shape:h.shape},{dataId:y.complexTensorInfos.imag.dataId,dtype:y.complexTensorInfos.imag.dtype,shape:h.shape}];c=T.runWebGPUProgram(a,o,'float32'),u=T.runWebGPUProgram(t,o,'float32')}const I=(0,o.complex)({inputs:{real:c,imag:u},backend:T});return T.disposeData(c.dataId),T.disposeData(u.dataId),I}const P=c||(0,a.upcastType)(f.dtype,h.dtype);if(('string'===f.dtype||'string'===h.dtype||T.shouldExecuteOnCPU([f,h]))&&null!=l){const n=T.tensorMap.get(f.dataId).values,p=T.tensorMap.get(h.dataId).values,t='string'===f.dtype?a.backend_util.fromUint8ToStringArray(n):n,o='string'===f.dtype?a.backend_util.fromUint8ToStringArray(p):p,[s,y]=l(f.shape,h.shape,t,o,P);return T.makeTensorInfo(y,P,s)}const x=new t.BinaryOpProgram(s,f.shape,h.shape);return T.runWebGPUProgram(x,[f,h],P)}},e.unaryKernelFunc=
/**
   * @license
   * Copyright 2021 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   */
function({opType:a,cpuKernelImpl:n,dtype:p}){return({inputs:t,backend:o})=>{const{x:l}=t,y=o,c=p||l.dtype;if(y.shouldExecuteOnCPU([l])&&null!=n){const a=y.tensorMap.get(l.dataId),p=n(a.values,c);return y.makeTensorInfo(l.shape,c,p)}const u=new s.UnaryOpProgram(l.shape,a);return y.runWebGPUProgram(u,[l],c)}};var a=r(d[0]),n=r(d[1]),p=r(d[2]),t=r(d[3]),o=r(d[4]),s=r(d[5])},2435,[1158,2436,2426,2437,2438,2440]);
__d(function(g,r,i,a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.BinaryOpComplexProgram=void 0;var t=r(d[0]),n=r(d[1]),p=r(d[2]),s=r(d[3]);e.BinaryOpComplexProgram=
/**
   * @license
   * Copyright 2021 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   */
class{constructor(n,p,o){this.variableNames=['AReal','AImag','BReal','BImag'],this.workgroupSize=[128,1,1],this.size=!0,this.outputShape=t.backend_util.assertAndGetBroadcastShape(p,o),this.dispatchLayout=(0,s.flatDispatchLayout)(this.outputShape),this.dispatch=(0,s.computeDispatch)(this.dispatchLayout,this.outputShape,this.workgroupSize),this.shaderKey=`binaryOpComplex_${n}`,this.op=n}getUserCode(){return`\n      fn binaryOpComplex(\n          areal : f32, aimag : f32, breal : f32, bimag : f32) -> f32 {\n        ${(0,n.getBinaryOpString)(this.op,!1)}\n      }\n\n      ${(0,p.getMainHeaderString)('index')} {\n        if(index < uniforms.size) {\n          let areal = getARealByOutputIndex(index);\n          let aimag = getAImagByOutputIndex(index);\n          let breal = getBRealByOutputIndex(index);\n          let bimag = getBImagByOutputIndex(index);\n          setOutputAtIndex(index, binaryOpComplex(areal, aimag, breal, bimag));\n        }\n      }\n    `}}},2436,[1158,2426,2417,2419]);
__d(function(g,r,i,a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.BinaryOpProgram=void 0;var t=r(d[0]),n=r(d[1]),s=r(d[2]),o=r(d[3]);e.BinaryOpProgram=
/**
   * @license
   * Copyright 2019 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   */
class{constructor(n,s,h){if(this.size=!0,this.variableNames=['A','B'],this.outputShape=t.backend_util.assertAndGetBroadcastShape(s,h),this.dispatchLayout=(0,o.flatDispatchLayout)(this.outputShape),this.op=n,this.useSharedMemoryWithA=s.length<=1&&h.length>1&&s[0]<128,this.useSharedMemoryWithB=h.length<=1&&s.length>1&&h[0]<128,this.useSharedMemoryWithA||this.useSharedMemoryWithB)this.outputComponent=1,this.variableComponents=[1,1],this.lastDimensionSize=this.useSharedMemoryWithB?h[0]:s[0],this.shaderKey=`binary_${n}_${this.lastDimensionSize}`,this.type='shared',this.workgroupSize=[256,1,1];else{const o=s.length>0&&s[s.length-1]%4==0,u=h.length>0&&h[h.length-1]%4==0;o&&u?(this.outputComponent=4,this.variableComponents=[4,4]):o&&(t.util.isScalarShape(h)||1===h[h.length-1])||u&&(t.util.isScalarShape(s)||1===s[s.length-1])?(this.outputComponent=4,this.variableComponents=o?[4,1]:[1,4]):(this.outputComponent=1,this.variableComponents=[1,1]),this.type='nonshared',this.shaderKey=`binary_${n}_${this.variableComponents}`,this.workgroupSize=[128,1,1]}this.dispatch=(0,o.computeDispatch)(this.dispatchLayout,this.outputShape,this.workgroupSize,[this.outputComponent,1,1])}getUserCode(){let t;const o=4===this.outputComponent?'vec4<f32>':'f32',h=`\n    fn binaryOperation(a : ${o}, b : ${o}) -> ${o} {\n      ${(0,n.getBinaryOpString)(this.op,4===this.outputComponent)}\n    };\n    `;if('shared'===this.type){const n=this.lastDimensionSize>1?`coords[${this.outputShape.length-1}]`:'0',o=this.useSharedMemoryWithB?`let a = getAByOutputIndex(index);\n          let b = sharedBuf[${n}];`:`let a = sharedBuf[${n}];\n          let b = getBByOutputIndex(index);`;t=`\n        ${h}\n        var<workgroup> sharedBuf : array<f32, ${this.lastDimensionSize}>;\n        ${(0,s.getMainHeaderString)('index')} {\n          // Fill in the shared memory buffer.\n          let localIndex = i32(localId.x);\n          if(localIndex < ${this.lastDimensionSize}) {\n            sharedBuf[localIndex] = f32(${this.useSharedMemoryWithB?'B':'A'}[localIndex]);\n          }\n          workgroupBarrier();\n\n          if(index < uniforms.size) {\n            let coords = getCoordsFromIndex(index);\n            ${o}\n            setOutputAtIndex(index, binaryOperation(a, b));\n          }\n        }\n        `}else t=`\n       ${h}\n       ${(0,s.getMainHeaderString)('index')} {\n         if (index < uniforms.size) {\n           let coords = getCoordsFromIndex(index * ${this.outputComponent});\n           let a = ${o}(getAByOutputCoords(coords));\n           let b = ${o}(getBByOutputCoords(coords));\n           setOutputAtIndex(index, binaryOperation(a, b));\n         }\n       }\n       `;return t}}},2437,[1158,2426,2417,2419]);
__d(function(g,r,i,a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.complex=t,e.complexConfig=void 0;var n=r(d[0]),o=r(d[1]);
/**
   * @license
   * Copyright 2021 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   */
function t(n){const{inputs:t,backend:c}=n,{real:p,imag:l}=t,s=c.makeTensorInfo(p.shape,'complex64'),u=c.tensorMap.get(s.dataId),x=(0,o.identity)({inputs:{x:p},backend:c}),f=(0,o.identity)({inputs:{x:l},backend:c});return u.complexTensorInfos={real:x,imag:f},s}e.complexConfig={kernelName:n.Complex,backendName:'webgpu',kernelFunc:t}},2438,[1158,2439]);
__d(function(g,r,i,a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.identity=t,e.identityConfig=void 0;var n=r(d[0]);
/**
   * @license
   * Copyright 2021 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   */function t(n){const{inputs:t}=n,{x:c}=t;return n.backend.incRef(c.dataId),{dataId:c.dataId,shape:c.shape,dtype:c.dtype}}e.identityConfig={kernelName:n.Identity,backendName:'webgpu',kernelFunc:t}},2439,[1158]);
__d(function(g,r,i,a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.UnaryOpProgram=void 0;var t=r(d[0]),n=r(d[1]),s=r(d[2]);e.UnaryOpProgram=
/**
   * @license
   * Copyright 2019 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   */
class{constructor(t,n,o=""){this.variableNames=['A'],this.size=!0;this.workgroupSize=[128,1,1],this.outputShape=t,this.dispatchLayout=(0,s.flatDispatchLayout)(this.outputShape),this.dispatch=(0,s.computeDispatch)(this.dispatchLayout,this.outputShape,this.workgroupSize),this.op=n,''!==o&&(this.uniforms=o),this.shaderKey=`unary_${n}`}getUserCode(){return`\n      fn unaryOperation(a : f32) -> f32 {\n        ${(0,t.getUnaryOpString)(this.op,!1)}\n      }\n      ${(0,n.getMainHeaderString)('index')} {\n        if (index < uniforms.size) {\n          let a = getAByOutputIndex(index);\n          setOutputAtIndex(index, unaryOperation(a));\n        }\n      }\n      `}}},2440,[2427,2417,2419]);
__d(function(g,_r,_i,a,m,_e,d){Object.defineProperty(_e,"__esModule",{value:!0}),_e.uniqueImplCPU=_e.transposeImplCPU=_e.topKImplCPU=_e.tileImplCPU=_e.subImplCPU=_e.stringNGramsImplCPU=_e.stridedSliceImplCPU=_e.sliceImplCPU=_e.simpleAbsImplCPU=_e.scatterImplCPU=_e.rsqrtImplCPU=_e.rangeImplCPU=_e.prodImplCPU=_e.notEqualImplCPU=_e.negImplCPU=_e.multiplyImplCPU=_e.minimumImplCPU=_e.maximumImplCPU=_e.maxImplCPU=_e.logImplCPU=_e.lessImplCPU=_e.lessEqualImplCPU=_e.greaterImplCPU=_e.greaterEqualImplCPU=_e.gatherV2ImplCPU=_e.gatherNdImplCPU=_e.floorImplCPU=_e.floorDivImplCPU=_e.expm1ImplCPU=_e.expImplCPU=_e.equalImplCPU=_e.concatImplCPU=_e.ceilImplCPU=_e.castImplCPU=_e.addImplCPU=void 0;var l=(function(l,p){if("function"==typeof WeakMap)var I=new WeakMap,e=new WeakMap;return(function(l,p){if(!p&&l&&l.__esModule)return l;var t,r,P={__proto__:null,default:l};if(null===l||"object"!=typeof l&&"function"!=typeof l)return P;if(t=p?e:I){if(t.has(l))return t.get(l);t.set(l,P)}for(const p in l)"default"!==p&&{}.hasOwnProperty.call(l,p)&&((r=(t=Object.defineProperty)&&Object.getOwnPropertyDescriptor(l,p))&&(r.get||r.set)?t(P,p,r):P[p]=l[p]);return P})(l,p)}
/**
   * @license
   * Copyright 2021 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   */)(_r(d[0]));const{addImpl:p,castImpl:I,ceilImpl:e,concatImpl:t,equalImpl:r,expImpl:P,expm1Impl:C,floorImpl:U,floorDivImpl:s,gatherNdImpl:i,gatherV2Impl:o,greaterEqualImpl:n,greaterImpl:u,lessEqualImpl:c,lessImpl:f,logImpl:q,maxImpl:x,maximumImpl:b,minimumImpl:y,multiplyImpl:_,negImpl:E,notEqualImpl:h,prodImpl:v,rangeImpl:N,rsqrtImpl:M,scatterImpl:O,simpleAbsImpl:j,sliceImpl:w,stridedSliceImpl:D,stringNGramsImpl:k,subImpl:A,tileImpl:G,topKImpl:K,transposeImpl:S,uniqueImpl:V}=l;_e.uniqueImplCPU=V,_e.transposeImplCPU=S,_e.topKImplCPU=K,_e.tileImplCPU=G,_e.subImplCPU=A,_e.stringNGramsImplCPU=k,_e.stridedSliceImplCPU=D,_e.sliceImplCPU=w,_e.simpleAbsImplCPU=j,_e.scatterImplCPU=O,_e.rsqrtImplCPU=M,_e.rangeImplCPU=N,_e.prodImplCPU=v,_e.notEqualImplCPU=h,_e.negImplCPU=E,_e.multiplyImplCPU=_,_e.minimumImplCPU=y,_e.maximumImplCPU=b,_e.maxImplCPU=x,_e.logImplCPU=q,_e.lessImplCPU=f,_e.lessEqualImplCPU=c,_e.greaterImplCPU=u,_e.greaterEqualImplCPU=n,_e.gatherV2ImplCPU=o,_e.gatherNdImplCPU=i,_e.floorDivImplCPU=s,_e.floorImplCPU=U,_e.expm1ImplCPU=C,_e.expImplCPU=P,_e.equalImplCPU=r,_e.concatImplCPU=t,_e.ceilImplCPU=e,_e.castImplCPU=I,_e.addImplCPU=p},2441,[1516]);
__d(function(g,r,i,a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.acosConfig=e.acos=void 0;var n=r(d[0]),o=r(d[1]),c=r(d[2]);
/**
   * @license
   * Copyright 2022 Google LLC.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   */
const s=e.acos=(0,o.unaryKernelFunc)({opType:c.UnaryOpType.ACOS});e.acosConfig={kernelName:n.Acos,backendName:'webgpu',kernelFunc:s}},2442,[1158,2435,2427]);
__d(function(g,r,i,a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.acoshConfig=e.acosh=void 0;var n=r(d[0]),o=r(d[1]),c=r(d[2]);
/**
   * @license
   * Copyright 2022 Google LLC.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   */
const s=e.acosh=(0,o.unaryKernelFunc)({opType:c.UnaryOpType.ACOSH});e.acoshConfig={kernelName:n.Acosh,backendName:'webgpu',kernelFunc:s}},2443,[1158,2435,2427]);
__d(function(g,r,i,a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.addKernelFunc=e.addConfig=void 0;var n=r(d[0]),p=r(d[1]),l=r(d[2]),o=r(d[3]);
/**
   * @license
   * Copyright 2021 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   */
const u=e.addKernelFunc=(0,l.binaryKernelFunc)({opType:p.BinaryOpType.ADD,cpuKernelImpl:o.addImplCPU,supportsComplex:!0});e.addConfig={kernelName:n.Add,backendName:'webgpu',kernelFunc:u}},2444,[1158,2426,2435,2441]);
__d(function(g,r,i,a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.addN=c,e.addNConfig=void 0;var n=r(d[0]),t=r(d[1]),u=r(d[2]);
/**
   * @license
   * Copyright 2021 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   */
function c(c){const{inputs:o,backend:p}=c,s=o;if(1===s.length)return(0,u.identity)({inputs:{x:s[0]},backend:p});const N=s.map(n=>n.dtype).reduce((t,u)=>(0,n.upcastType)(t,u)),b=s.map(n=>n.shape),f=new t.AddNPackedProgram(b);return p.runWebGPUProgram(f,s,N)}e.addNConfig={kernelName:n.AddN,backendName:'webgpu',kernelFunc:c}},2445,[1158,2446,2439]);
__d(function(g,r,_i,a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.AddNPackedProgram=void 0;var t=r(d[0]),i=r(d[1]);e.AddNPackedProgram=
/**
   * @license
   * Copyright 2021 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   */
class{constructor(t){this.workPerThread=1,this.workgroupSize=[64,1,1],this.size=!0,this.outputShape=t[0],this.variableNames=t.map((t,i)=>`T${i}`),this.dispatchLayout=(0,i.flatDispatchLayout)(this.outputShape),this.dispatch=(0,i.computeDispatch)(this.dispatchLayout,this.outputShape,this.workgroupSize,[this.workPerThread,1,1]),this.shaderKey='addN'}getUserCode(){const i=[];this.variableNames.forEach(t=>{i.push(`let v${t} = get${t}ByOutputCoords(coords);`)});const s=this.variableNames.map(t=>`v${t}`).join(' + ');return`\n      ${(0,t.getMainHeaderString)('index')} {\n        for (var i = 0; i < ${this.workPerThread}; i = i + 1) {\n          let flatIndex = index * ${this.workPerThread} + i;\n          if (flatIndex < uniforms.size) {\n            let coords = getCoordsFromIndex(flatIndex);\n            ${i.join('\n        ')}\n            setOutputAtIndex(flatIndex, ${s});\n          }\n        }\n      }\n    `}}},2446,[2417,2419]);
__d(function(g,r,i,a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.all=t,e.allConfig=void 0;var n=r(d[0]),l=r(d[1]);
/**
   * @license
   * Copyright 2022 Google LLC.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   */
function t(n){const{inputs:t,backend:u,attrs:c}=n,{x:o}=t,{keepDims:s,axis:f}=c;return(0,l.reduce)(o,f,s,'all',u)}e.allConfig={kernelName:n.All,backendName:'webgpu',kernelFunc:t}},2447,[1158,2448]);
__d(function(g,r,i,a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.reduce=function(l,c,h,b,k){const x=l.shape.length,S=[],y=t.util.parseAxisParam(c,l.shape);let P=y;const f=t.backend_util.getAxesPermutation(P,x);let _=l;null!=f&&(_=(0,o.transpose)({inputs:{x:l},attrs:{perm:f},backend:k}),P=t.backend_util.getInnerMostAxes(P.length,x),S.push(_));t.backend_util.assertAxesAreInnerMostDims(b,P,x);const[z,I]=t.backend_util.computeOutAndReduceShapes(_.shape,P);let w,A=z;h&&(A=t.backend_util.expandShapeToKeepDim(z,y));if('max'!==b&&'prod'!==b||!k.shouldExecuteOnCPU([_])){const o=t.util.sizeFromShape(I),p={windowSize:o,inSize:o,batchSize:t.util.sizeFromShape(_.shape)/o,outSize:1},c=u[b]||(0,t.sumOutType)(l.dtype),h=[{type:'int32',data:[o]}],x=new n.ReduceProgram(p,b,k.device.limits.maxComputeWorkgroupSizeX),y=k.runWebGPUProgram(x,[_],c,h);S.push(y),w=(0,s.reshape)({inputs:{x:y},attrs:{shape:A},backend:k})}else{const s=k.tensorMap.get(_.dataId).values;switch(b){case'max':const o=(0,p.maxImplCPU)(s,t.util.sizeFromShape(I),A,l.dtype);w=k.makeTensorInfo(A,l.dtype,o);break;case'prod':const{outVals:n,outShape:u,outDtype:c}=(0,p.prodImplCPU)(_.shape,_.dtype,s,P);w=k.makeTensorInfo(u,c,n);break;default:throw new Error(`${b} CPU implementation is not yet supported.`)}}return S.forEach(t=>k.disposeData(t.dataId)),w};var t=r(d[0]),s=r(d[1]),o=r(d[2]),n=r(d[3]),p=r(d[4]);
/**
   * @license
   * Copyright 2021 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   */
const u={mean:'float32',all:'bool',any:'bool'}},2448,[1158,2433,2449,2452,2441]);
__d(function(g,r,_i,a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.transpose=p,e.transposeConfig=void 0;var n=r(d[0]),s=r(d[1]),t=r(d[2]),o=r(d[3]);
/**
   * @license
   * Copyright 2021 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   */
function p(p){const{inputs:u,backend:l,attrs:c}=p,{x:h}=u,{perm:i}=c,f=l,P=h.shape.length,y=new Array(P);for(let n=0;n<y.length;n++)y[n]=h.shape[i[n]];if(l.shouldExecuteOnCPU([h])){const n=f.tensorMap.get(h.dataId).values,t=(0,s.transposeImplCPU)(n,h.shape,h.dtype,i,y);return l.makeTensorInfo(y,h.dtype,t)}if(2===h.shape.length&&n.util.arraysEqual(i,[1,0])){const n=new t.TransposeSharedProgram(h.shape,i);return f.runWebGPUProgram(n,[h],h.dtype)}const b=new o.TransposeProgram(h.shape,i);return f.runWebGPUProgram(b,[h],h.dtype)}e.transposeConfig={kernelName:n.Transpose,backendName:'webgpu',kernelFunc:p}},2449,[1158,2441,2450,2451]);
__d(function(g,r,_i,a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.TransposeSharedProgram=void 0;var t=r(d[0]),i=r(d[1]),o=r(d[2]);e.TransposeSharedProgram=
/**
   * @license
   * Copyright 2019 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   */
class{constructor(t,i){this.variableNames=['A'],this.workgroupSize=[16,16,1];const s=new Array(t.length);for(let o=0;o<s.length;o++)s[o]=t[i[o]];this.outputShape=s,this.dispatchLayout={x:[0],y:[1]},this.dispatch=(0,o.computeDispatch)(this.dispatchLayout,this.outputShape,this.workgroupSize,[1,1,1]),this.shaderKey='transposeShared'}getUserCode(){t.util.assert(this.workgroupSize[0]===this.workgroupSize[1],()=>`Must be a square tile, current tile shape is ${this.workgroupSize[0]} x ${this.workgroupSize[1]}`);const o=this.workgroupSize[0];return`\n      var<workgroup> tile : array<array<f32, ${this.workgroupSize[0]+1}>, ${this.workgroupSize[0]}>;\n      ${(0,i.getMainHeaderString)()} {\n        var x = i32(workgroupId.x) * ${o} + i32(localId.x);\n        var y = i32(workgroupId.y) * ${o} + i32(localId.y);\n        let width = uniforms.outShape[0];\n        let height = uniforms.outShape[1];\n        if (x < width && y < height) {\n          tile[localId.y][localId.x] = f32(A[y * width + x]);\n        }\n        workgroupBarrier();\n\n        x = i32(workgroupId.y) * ${o} + i32(localId.x);\n        y = i32(workgroupId.x) * ${o} + i32(localId.y);\n        if (x < height && y < width) {\n          setOutputAtIndex((y * height + x), tile[localId.x]\n            [localId.y]);\n        }\n      }\n    `}}},2450,[1158,2417,2419]);
__d(function(g,r,_i,a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.TransposeProgram=void 0,e.getSwitchedCoords=s;var t=r(d[0]),o=r(d[1]);function s(o){const s=o.length;if(s>6)throw Error(`Transpose for rank ${s} is not yet supported`);const n=new Array(s);for(let s=0;s<o.length;s++)n[o[s]]=`coords.${(0,t.getCoordsXYZ)(s)}`;return n.join()}e.TransposeProgram=
/**
   * @license
   * Copyright 2019 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   */
class{constructor(t,s){this.variableNames=['A'],this.workPerThread=1,this.workgroupSize=[64,1,1],this.size=!0;const n=new Array(t.length);for(let o=0;o<n.length;o++)n[o]=t[s[o]];this.outputShape=n,this.dispatchLayout=(0,o.flatDispatchLayout)(this.outputShape),this.dispatch=(0,o.computeDispatch)(this.dispatchLayout,this.outputShape,this.workgroupSize,[this.workPerThread,1,1]),this.newDim=s,this.shaderKey=`transpose_${s}`}getUserCode(){const o=(0,t.getCoordsDataType)(this.outputShape.length),n=s(this.newDim);return`\n      ${(0,t.getMainHeaderString)('index')} {\n        for(var i = 0; i < ${this.workPerThread}; i = i + 1) {\n          let flatIndex = index * ${this.workPerThread} + i;\n          if(flatIndex < uniforms.size) {\n            let coords = getCoordsFromIndex(flatIndex);\n            setOutputAtIndex(flatIndex, A[getIndexFromCoords${this.outputShape.length}D(\n              ${o}(${n}), uniforms.aShape)]);\n          }\n        }\n      }\n    `}}},2451,[2417,2419]);
__d(function(g,r,i,a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.ReduceProgram=void 0;var t=r(d[0]),u=r(d[1]),n=r(d[2]);e.ReduceProgram=
/**
   * @license
   * Copyright 2019 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   */
class{constructor(u,s,o){this.variableNames=['x'],this.uniforms='reduceSize : i32,',this.size=!0,this.inputShape=[u.batchSize,u.inSize];const[c]=t.backend_util.computeOutAndReduceShapes(this.inputShape,[1]);this.outputShape=0===c.length?[1]:c,u.inSize>=32768&&o>=512?this.workgroupSize=[512,1,1]:u.inSize>=4096?this.workgroupSize=[256,1,1]:this.workgroupSize=[64,1,1],this.dispatchLayout=(0,n.flatDispatchLayout)(this.outputShape),this.dispatch=(0,n.computeDispatch)(this.dispatchLayout,this.outputShape,[1,1,1]),this.reduceType=s,this.shaderKey=`reduce_${s}`}getUserCode(){let t="",n='0.0';const s=this.workgroupSize[0];'min'===this.reduceType||'max'===this.reduceType?(t=`\n         if (isnan(candidate)) {\n          bestValue = uniforms.NAN;\n         } else if (!isnan(bestValue) && candidate ${'min'===this.reduceType?'<':'>'} bestValue)\n           {  bestValue = candidate; }`,n='f32(x[offset])'):'sum'===this.reduceType||'mean'===this.reduceType?t=' bestValue = bestValue + candidate; ':'prod'===this.reduceType?(t=' bestValue = bestValue * candidate; ',n='1.0'):'all'===this.reduceType?(t=' bestValue = f32(bestValue >= 1.0 && candidate >= 1.0); ',n='1.0'):'any'===this.reduceType&&(t=' bestValue = f32(bestValue >= 1.0 || candidate >= 1.0); ',n='0.0');const o='mean'===this.reduceType?"setOutputAtIndex(outputIndex, bestValue / f32(uniforms.reduceSize));":"setOutputAtIndex(outputIndex, bestValue);";return`\n       fn DIV_CEIL(a : u32, b : u32) -> u32 {\n        return ((a - 1u) / b + 1u);\n       }\n\n       ${`\n         var<workgroup> xBestValues : array<f32, ${s}>;\n       `}\n       fn getOffset(outputIndex : i32) -> i32 {\n         let outputCoords = getCoordsFromIndex(outputIndex);\n         let offset = ${1===this.outputShape.length?'outputCoords':'outputCoords[0]'} * uniforms.reduceSize;\n          return offset;\n       }\n       ${(0,u.getMainHeaderString)('index')} {\n         let outputIndex = index / ${s};\n         let offset = getOffset(outputIndex);\n         var bestValue = ${n};\n         let Length = uniforms.reduceSize;\n         let WorkPerThread = DIV_CEIL(u32(Length), ${s}u);\n         for (var k = i32(localId.x); k < Length && outputIndex < uniforms.size;\n             k = k + ${s}) {\n           let candidate = f32(x[offset + k]);\n           ${t}\n         }\n         xBestValues[localId.x] = bestValue;\n         workgroupBarrier();\n\n         var reduceSize = min(u32(Length), ${s}u);\n         for (var currentSize = reduceSize / 2u; reduceSize > 1u;\n             currentSize = reduceSize / 2u) {\n           let interval = DIV_CEIL(reduceSize, 2u);\n           if (localId.x < currentSize) {\n            let candidate = xBestValues[localId.x + interval];\n            ${t}\n            xBestValues[localId.x] = bestValue;\n           }\n           reduceSize = interval;\n           workgroupBarrier();\n         }\n\n         if (localId.x == 0u && outputIndex < uniforms.size) {\n          ${o}\n        }\n       }\n     `}}},2452,[1158,2417,2419]);
__d(function(g,r,i,a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.any=u,e.anyConfig=void 0;var n=r(d[0]),t=r(d[1]);
/**
   * @license
   * Copyright 2022 Google LLC.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   */
function u(n){const{inputs:u,backend:c,attrs:o}=n,{x:s}=u,{keepDims:y,axis:f}=o;return(0,t.reduce)(s,f,y,'any',c)}e.anyConfig={kernelName:n.Any,backendName:'webgpu',kernelFunc:u}},2453,[1158,2448]);
__d(function(g,r,i,a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.argMax=o,e.argMaxConfig=void 0;var t=r(d[0]),n=r(d[1]),s=r(d[2]);
/**
   * @license
   * Copyright 2021 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   */
function o(o){const{inputs:u,backend:l,attrs:c}=o,{x:p}=u,{axis:x}=c;let h=t.util.parseAxisParam(x,p.shape);const b=t.backend_util.getAxesPermutation(h,p.shape.length);let M=p;const k=[];null!=b&&(M=(0,s.transpose)({inputs:{x:p},backend:l,attrs:{perm:b}}),k.push(M),h=t.backend_util.getInnerMostAxes(h.length,M.shape.length)),t.backend_util.assertAxesAreInnerMostDims('argMax',[h[0]],M.shape.length);const A=new n.ArgMinMaxProgram(M.shape,h[0],'max'),_=[{type:'float32',data:[Number.NEGATIVE_INFINITY]}],f=l.runWebGPUProgram(A,[M],'int32',_);return k.forEach(t=>l.disposeData(t.dataId)),f}e.argMaxConfig={kernelName:t.ArgMax,backendName:'webgpu',kernelFunc:o}},2454,[1158,2455,2449]);
__d(function(g,r,_i,a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.ArgMinMaxProgram=void 0;var t=r(d[0]),n=r(d[1]),i=r(d[2]);e.ArgMinMaxProgram=
/**
   * @license
   * Copyright 2019 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   */
class{constructor(n,u,s){this.workgroupSize=[64,1,1],this.variableNames=['x'],this.uniforms='infinityValue : f32,',this.size=!0;const o=[u];this.op='min'===s?'<':'>';const[l,h]=t.backend_util.computeOutAndReduceShapes(n,o);this.outputShape=0===l.length?[1]:l,this.dispatchLayout=(0,i.flatDispatchLayout)(this.outputShape),t.util.sizeFromShape(h)<32?(this.type='plain',this.dispatch=(0,i.computeDispatch)(this.dispatchLayout,this.outputShape,this.workgroupSize)):(this.type='shared',this.dispatch=(0,i.computeDispatch)(this.dispatchLayout,this.outputShape,[1,1,1])),this.inputShape=n,this.shaderKey=`argMinMax_${this.op}_${this.type}`}getUserCode(){const t=this.workgroupSize[0],i=()=>1===this.inputShape.length?'uniforms.xShape':`uniforms.xShape.${(0,n.getCoordsXYZ)(this.inputShape.length-1)}`,u=()=>{let t='';if(1===this.outputShape.length)1!==this.inputShape.length&&(t+='outputCoords,');else for(let i=0;i<this.outputShape.length;i++)t+=`outputCoords.${(0,n.getCoordsXYZ)(i)},`;return t};if('shared'===this.type){return`\n      fn DIV_CEIL(a : u32, b : u32) -> u32 {\n        return ((a - 1u) / b + 1u);\n      }\n\n      ${`\n      var<workgroup> xBestIndices : array<i32, ${t}>;\n      var<workgroup> xBestValues : array<f32, ${t}>;\n    `}\n\n      ${(0,n.getMainHeaderString)('index')} {\n        let outputIndex = index / ${t};\n        let reduceLength = ${i()};\n\n        var bestIndex = i32(localId.x);\n        var bestValue = uniforms.infinityValue;\n        let outputCoords = getCoordsFromIndex(outputIndex);\n        for (var k = i32(localId.x); k < reduceLength && outputIndex < uniforms.size;\n            k = k + ${t}) {\n          let candidate = getX(${u()} k);\n          if (!isnan(candidate) && candidate ${this.op} bestValue) {\n            bestValue = candidate;\n            bestIndex = k;\n          }\n        }\n        xBestValues[localId.x] = bestValue;\n        xBestIndices[localId.x] = bestIndex;\n        workgroupBarrier();\n\n        var reduceSize = min(u32(reduceLength), ${t}u);\n        for (var currentSize = reduceSize / 2u; reduceSize > 1u;\n            currentSize = reduceSize / 2u) {\n          let interval = DIV_CEIL(reduceSize, 2u);\n          if (localId.x < currentSize) {\n            let candidate = xBestValues[localId.x + interval];\n            if (candidate ${this.op} bestValue) {\n              bestValue = candidate;\n              xBestValues[localId.x] = bestValue;\n              xBestIndices[localId.x] = xBestIndices[localId.x + interval];\n            }\n          }\n          reduceSize = interval;\n          workgroupBarrier();\n        }\n\n        if (localId.x == 0u && outputIndex < uniforms.size) {\n          setOutputAtIndexI32(outputIndex, xBestIndices[localId.x]);\n        }\n      }\n    `}return`\n      ${(0,n.getMainHeaderString)('index')} {\n        if (index < uniforms.size) {\n          let outputCoords = getCoordsFromIndex(index);\n          var bestIndex = 0;\n          var bestValue = getX(${u()} 0);\n          let reduceLength = ${i()};\n          for (var i = 1; i < reduceLength; i++) {\n            let candidate = getX(${u()} i);\n            if (candidate ${this.op} bestValue) {\n              bestValue = candidate;\n              bestIndex = i;\n            }\n          }\n          setOutputAtIndexI32(index, bestIndex);\n        }\n      }\n      `}}},2455,[1158,2417,2419]);
__d(function(g,r,i,a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.argMin=o,e.argMinConfig=void 0;var n=r(d[0]),t=r(d[1]),s=r(d[2]);
/**
   * @license
   * Copyright 2021 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   */
function o(o){const{inputs:u,backend:l,attrs:c}=o,{x:p}=u,{axis:h}=c;let b=n.util.parseAxisParam(h,p.shape);const M=n.backend_util.getAxesPermutation(b,p.shape.length);let k=p;const x=[];null!=M&&(k=(0,s.transpose)({inputs:{x:p},backend:l,attrs:{perm:M}}),x.push(k),b=n.backend_util.getInnerMostAxes(b.length,k.shape.length)),n.backend_util.assertAxesAreInnerMostDims('argMin',[b[0]],k.shape.length);const I=new t.ArgMinMaxProgram(k.shape,b[0],'min'),_=[{type:'float32',data:[Number.POSITIVE_INFINITY]}],f=l.runWebGPUProgram(I,[k],'int32',_);return x.forEach(n=>l.disposeData(n.dataId)),f}e.argMinConfig={kernelName:n.ArgMin,backendName:'webgpu',kernelFunc:o}},2456,[1158,2455,2449]);
__d(function(g,r,i,a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.asinConfig=e.asin=void 0;var n=r(d[0]),o=r(d[1]),s=r(d[2]);
/**
   * @license
   * Copyright 2022 Google LLC.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   */
const u=e.asin=(0,o.unaryKernelFunc)({opType:s.UnaryOpType.ASIN});e.asinConfig={kernelName:n.Asin,backendName:'webgpu',kernelFunc:u}},2457,[1158,2435,2427]);
__d(function(g,r,i,a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.asinhConfig=e.asinh=void 0;var n=r(d[0]),o=r(d[1]),s=r(d[2]);
/**
   * @license
   * Copyright 2022 Google LLC.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   */
const u=e.asinh=(0,o.unaryKernelFunc)({opType:s.UnaryOpType.ASINH});e.asinhConfig={kernelName:n.Asinh,backendName:'webgpu',kernelFunc:u}},2458,[1158,2435,2427]);
__d(function(g,r,i,a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.atanConfig=e.atan=void 0;var n=r(d[0]),t=r(d[1]),o=r(d[2]);
/**
   * @license
   * Copyright 2022 Google LLC.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   */
const u=e.atan=(0,t.unaryKernelFunc)({opType:o.UnaryOpType.ATAN});e.atanConfig={kernelName:n.Atan,backendName:'webgpu',kernelFunc:u}},2459,[1158,2435,2427]);
__d(function(g,r,i,a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.atan2Config=e.atan2=void 0;var n=r(d[0]),t=r(d[1]),o=r(d[2]);
/**
   * @license
   * Copyright 2022 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   */
const c=e.atan2=(0,o.binaryKernelFunc)({opType:t.BinaryOpType.ATAN2});e.atan2Config={kernelName:n.Atan2,backendName:'webgpu',kernelFunc:c}},2460,[1158,2426,2435]);
__d(function(g,r,i,a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.atanhConfig=e.atanh=void 0;var n=r(d[0]),t=r(d[1]),o=r(d[2]);
/**
   * @license
   * Copyright 2022 Google LLC.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   */
const u=e.atanh=(0,t.unaryKernelFunc)({opType:o.UnaryOpType.ATANH});e.atanhConfig={kernelName:n.Atanh,backendName:'webgpu',kernelFunc:u}},2461,[1158,2435,2427]);
__d(function(g,r,i,a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.avgPool=l,e.avgPoolConfig=void 0;var o=r(d[0]),n=r(d[1]);
/**
   * @license
   * Copyright 2021 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   */
function l(l){const{inputs:t,backend:u,attrs:c}=l,{x:p}=t,{filterSize:v,strides:f,pad:s,dimRoundingMode:P}=c,b=o.backend_util.computePool2DInfo(p.shape,v,f,1,s,P);return(0,n.poolImpl)(p,b,'avg',u)}e.avgPoolConfig={kernelName:o.AvgPool,backendName:'webgpu',kernelFunc:l}},2462,[1158,2463]);
__d(function(g,r,i,a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.poolImpl=
/**
   * @license
   * Copyright 2022 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   */
function(u,f,c,y){if(1===f.filterWidth&&1===f.filterHeight&&t.util.arraysEqual(f.inShape,f.outShape))return(0,s.identity)({inputs:{x:u},backend:y});if(f.filterWidth===f.inWidth&&f.filterHeight===f.inHeight&&1===f.batchSize&&'VALID'===f.padInfo.type){const n=u.shape.length,p=(0,l.reshape)({inputs:{x:u},backend:y,attrs:{shape:[u.shape[n-3]*u.shape[n-2],u.shape[n-1]]}});let s;'avg'===c?s=(0,h.mean)({inputs:{x:p},backend:y,attrs:{axis:0,keepDims:!1}}):(t.util.assert('max'===c,()=>`Invalid pool type ${c}`),s=(0,o.max)({inputs:{x:p},backend:y,attrs:{reductionIndices:0,keepDims:!1}}));const x=(0,l.reshape)({inputs:{x:s},backend:y,attrs:{shape:f.outShape}});return y.disposeData(p.dataId),y.disposeData(s.dataId),x}let x;const I=[{type:'int32',data:[f.strideHeight,f.strideWidth]}];1===f.filterHeight&&1===f.filterWidth?x=new n.PoolWithFilterSizeEqualsOneProgram(f):('avg'===c?x=new p.Pool2DProgram(f,'avg'):(t.util.assert('max'===c,()=>`Invalid pool type ${c}`),x=new p.Pool2DProgram(f,'max')),I.push({type:'int32',data:[f.padInfo.top,f.padInfo.left]},{type:'int32',data:[f.dilationHeight,f.dilationWidth]},{type:'int32',data:[f.inHeight,f.inWidth]},{type:'int32',data:[f.effectiveFilterHeight,f.effectiveFilterWidth]}));return y.runWebGPUProgram(x,[u],u.dtype,I)};var t=r(d[0]),n=r(d[1]),p=r(d[2]),s=r(d[3]),o=r(d[4]),h=r(d[5]),l=r(d[6])},2463,[1158,2464,2465,2439,2466,2467,2433]);
__d(function(g,r,i,a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.PoolWithFilterSizeEqualsOneProgram=void 0;var t=r(d[0]),o=r(d[1]);e.PoolWithFilterSizeEqualsOneProgram=
/**
   * @license
   * Copyright 2021 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   */
class{constructor(t){this.variableNames=['x'],this.uniforms="strides : vec2<i32>,",this.workgroupSize=[256,1,1],this.size=!0,this.outputShape=t.outShape,this.dispatchLayout=(0,o.flatDispatchLayout)(this.outputShape),this.dispatch=(0,o.computeDispatch)(this.dispatchLayout,this.outputShape,this.workgroupSize),this.shaderKey='poolWithFilterSizeEqualsOne'}getUserCode(){return`\n      ${(0,t.getMainHeaderString)('index')} {\n        if (index < uniforms.size) {\n          let coords = getCoordsFromIndex(index);\n          let batch = coords[0];\n          let d = coords[3];\n\n          let xRCCorner = coords.yz * uniforms.strides;\n          let xRCorner = xRCCorner.x;\n          let xCCorner = xRCCorner.y;\n\n          let value = getX(batch, xRCorner, xCCorner, d);\n          setOutputAtIndex(index, value);\n        }\n      }\n    `}}},2464,[2417,2419]);
__d(function(g,r,i,a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.Pool3DProgram=e.Pool2DProgram=void 0;var o=r(d[0]),n=r(d[1]);e.Pool2DProgram=
/**
   * @license
   * Copyright 2019 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   */
class{constructor(o,t,s=!1,u=!1,l=!1){if(this.variableNames=['x'],this.uniforms="strides : vec2<i32>, pads : vec2<i32>, dilations : vec2<i32>, convDims : vec2<i32>, filterDims : vec2<i32>,",this.workgroupSize=[128,1,1],this.size=!0,'avg'===t&&s)throw new Error('Cannot compute positions for average pool.');this.outputShape=o.outShape,this.dispatchLayout=(0,n.flatDispatchLayout)(this.outputShape),this.dispatch=(0,n.computeDispatch)(this.dispatchLayout,this.outputShape,this.workgroupSize),this.poolType=t,this.computePositions=s,this.flattenPositions=u,this.includeBatchIndex=l,this.shaderKey=`pool2D_${t}_${s}_${u}_${l}`}getUserCode(){let n;if('avg'===this.poolType)n="resultValue = resultValue + value; count = count + 1.0;";else if(this.computePositions){n=`let currMaxValue = mix(value, maxValue, maxValueFound);\n      if (value >= currMaxValue) {\n        maxValue = value;\n        maxValueFound = 1.0;\n        maxPosition = ${this.flattenPositions?this.includeBatchIndex?"((batch * uniforms.xShape[1] + xR) * uniforms.xShape[2] + xC) * uniforms.xShape[3] + d":"(xR * uniforms.xShape[2] + xC) * uniforms.xShape[3] + d":"wR * uniforms.filterDims.y + wC"};\n      }`}else n="resultValue = max(value, resultValue);";let t="resultValue";'avg'===this.poolType&&(t="resultValue / max(count, 1.0)");return`\n      ${(0,o.getMainHeaderString)('index')} {\n      if (index < uniforms.size) {\n        let coords = getCoordsFromIndex(index);\n          let batch = coords[0];\n          let d = coords[3];\n          let xRCCorner = vec2<i32>(coords.yz) * uniforms.strides - uniforms.pads;\n          let xRCorner = xRCCorner.x;\n          let xCCorner = xRCCorner.y;\n\n          ${this.computePositions?"var maxValue = 0.0;\n            var maxValueFound = 0.0;\n            var maxPosition = 0;":`var resultValue = ${'avg'===this.poolType?'0.0':'-1.0 / pow(10.0, -20.0)'};`}\n\n          var count = 0.0;\n          for (var wR = 0; wR < uniforms.filterDims.x; wR = wR + uniforms.dilations.x) {\n            let xR = xRCorner + wR;\n\n            if (xR < 0 || xR >= uniforms.convDims.x) {\n              continue;\n            }\n\n            for (var wC = 0; wC < uniforms.filterDims.y; wC = wC + uniforms.dilations.y) {\n              let xC = xCCorner + wC;\n              if (xC < 0 || xC >= uniforms.convDims.y) {\n                continue;\n              }\n\n              let value = getX(batch, xR, xC, d);\n              ${n}\n            }\n          }\n\n          ${this.computePositions?"setOutputAtIndexI32(index, maxPosition);":`setOutputAtIndex(index, ${t});`}\n        }\n      }\n    `}};e.Pool3DProgram=class{constructor(o,t,s=!1,u=!1,l=!1){if(this.variableNames=['x'],this.uniforms="strides : vec3<i32>, pads : vec3<i32>, convDims : vec3<i32>, filterDims : vec3<i32>,",this.workgroupSize=[128,1,1],this.size=!0,'avg'===t&&s)throw new Error('Cannot compute positions for average pool.');this.outputShape=o.outShape,this.dispatchLayout=(0,n.flatDispatchLayout)(this.outputShape),this.dispatch=(0,n.computeDispatch)(this.dispatchLayout,this.outputShape,this.workgroupSize),this.poolType=t,this.computePositions=s,this.flattenPositions=u,this.includeBatchIndex=l,this.shaderKey=`pool3D_${t}_${s}_${u}_${l}`}getUserCode(){let n;if('avg'===this.poolType)n="resultValue += value; count += 1.0;";else if(this.computePositions){n=`let currMaxValue = mix(value, maxValue, maxValueFound);\n      if (value >= currMaxValue) {\n        maxValue = value;\n        maxValueFound = 1.0;\n        maxPosition = ${this.flattenPositions?this.includeBatchIndex?"(((batch * uniforms.xShape.y + xD) * uniforms.xShape.z + xR) * uniforms.xShape.w + xC) * uniforms.xShape.u + ch":"((xD * uniforms.xShape.z + xR) * uniforms.xShape.w + xC) * uniforms.xShape.u + ch":"wD * uniforms.filterDims.y * uniforms.filterDims.y + wR * uniforms.filterDims.z + wC"};\n      }`}else n="resultValue = max(value, resultValue);";let t="resultValue";'avg'===this.poolType&&(t="resultValue / max(count, 1.0)");return`\n      ${(0,o.getMainHeaderString)('index')} {\n        if (index < uniforms.size) {\n          let coords = getCoordsFromIndex(index);\n          let batch = coords.x;\n          let ch = coords.u;\n\n          let xCorner = vec3<i32>(coords.y, coords.z, coords.w) * uniforms.strides - uniforms.pads;\n          let xDCorner = xCorner.x;\n          let xRCorner = xCorner.y;\n          let xCCorner = xCorner.z;\n\n          ${this.computePositions?"var maxValue = 0.0;\n            var maxValueFound = 0.0;\n            var maxPosition = 0;":`var resultValue = ${'avg'===this.poolType?'0.0':'-1.0 / pow(10.0, -20.0)'};`}\n\n          var count = 0.0;\n          for (var wD = 0; wD < uniforms.filterDims.x; wD++) {\n            let xD = xDCorner + wD;\n            if (xD < 0 || xD >= uniforms.convDims.x) {\n              continue;\n            }\n\n            for (var wR = 0; wR < uniforms.filterDims.y; wR++) {\n              let xR = xRCorner + wR;\n              if (xR < 0 || xR >= uniforms.convDims.y) {\n                continue;\n              }\n\n              for (var wC = 0; wC < uniforms.filterDims.z; wC++) {\n                let xC = xCCorner + wC;\n                if (xC < 0 || xC >= uniforms.convDims.z) {\n                  continue;\n                }\n\n                let value = getX(batch, xD, xR, xC, ch);\n                ${n}\n              }\n            }\n          }\n\n          ${this.computePositions?"setOutputAtIndexI32(index, maxPosition);":`setOutputAtIndex(index, ${t});`}\n        }\n      }\n    `}}},2465,[2417,2419]);
__d(function(g,r,i,a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.max=t,e.maxConfig=void 0;var n=r(d[0]),c=r(d[1]);
/**
   * @license
   * Copyright 2021 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   */
function t(n){const{inputs:t,backend:u,attrs:o}=n,{x:s}=t,{reductionIndices:x,keepDims:f}=o;return(0,c.reduce)(s,x,f,'max',u)}e.maxConfig={kernelName:n.Max,backendName:'webgpu',kernelFunc:t}},2466,[1158,2448]);
__d(function(g,r,i,a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.mean=u,e.meanConfig=void 0;var n=r(d[0]),t=r(d[1]);
/**
   * @license
   * Copyright 2021 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   */
function u(n){const{inputs:u,backend:c,attrs:o}=n,{x:s}=u,{keepDims:f,axis:k}=o;return(0,t.reduce)(s,k,f,'mean',c)}e.meanConfig={kernelName:n.Mean,backendName:'webgpu',kernelFunc:u}},2467,[1158,2448]);
__d(function(g,r,i,a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.avgPool3D=o,e.avgPool3DConfig=void 0;var t=r(d[0]),n=r(d[1]);
/**
   * @license
   * Copyright 2023 Google LLC.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   */
function o(o){const{inputs:f,backend:p,attrs:l}=o,{x:c}=f,{filterSize:u,strides:v,pad:h,dataFormat:s,dimRoundingMode:P}=l,D=t.backend_util.computePool3DInfo(c.shape,u,v,[1,1,1],h,P,s),b=new n.Pool3DProgram(D,'avg'),y=[{type:'int32',data:[D.strideDepth,D.strideHeight,D.strideWidth]},{type:'int32',data:[D.padInfo.front,D.padInfo.top,D.padInfo.left]},{type:'int32',data:[D.inDepth,D.inHeight,D.inWidth]},{type:'int32',data:[D.effectiveFilterDepth,D.effectiveFilterHeight,D.effectiveFilterWidth]}];return p.runWebGPUProgram(b,[c],c.dtype,y)}e.avgPool3DConfig={kernelName:t.AvgPool3D,backendName:'webgpu',kernelFunc:o}},2468,[1158,2465]);
__d(function(g,r,i,a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.avgPool3DGrad=n,e.avgPool3DGradConfig=void 0;var t=r(d[0]),o=r(d[1]);
/**
   * @license
   * Copyright 2023 Google LLC.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   */
function n(n){const{inputs:f,backend:p,attrs:l}=n,{dy:c,input:h}=f,u=h,{filterSize:v,strides:D,pad:s,dimRoundingMode:y}=l,P=t.backend_util.computePool3DInfo(u.shape,v,D,1,s,y),F=new o.AvgPool3DBackpropProgram(P),b=1/(P.filterDepth*P.filterHeight*P.filterWidth),k=[{type:'int32',data:[P.strideDepth,P.strideHeight,P.strideWidth]},{type:'int32',data:[P.effectiveFilterDepth-1-P.padInfo.front,P.effectiveFilterHeight-1-P.padInfo.top,P.effectiveFilterWidth-1-P.padInfo.left]},{type:'int32',data:[P.effectiveFilterDepth,P.effectiveFilterHeight,P.effectiveFilterWidth]},{type:'int32',data:[P.outDepth]},{type:'int32',data:[P.outHeight]},{type:'int32',data:[P.outWidth]},{type:'float32',data:[b]}];return p.runWebGPUProgram(F,[c],u.dtype,k)}e.avgPool3DGradConfig={kernelName:t.AvgPool3DGrad,backendName:'webgpu',kernelFunc:n}},2469,[1158,2470]);
__d(function(g,r,i,a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.AvgPool3DBackpropProgram=e.AvgPool2DBackpropProgram=void 0;var t=r(d[0]),n=r(d[1]);e.AvgPool2DBackpropProgram=
/**
   * @license
   * Copyright 2022 Google LLC.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   */
class{constructor(t){this.variableNames=['dy'],this.uniforms="strides : vec2<i32>, pads : vec2<i32>, dilations : vec2<i32>, filterDims : vec2<i32>,\n       outHeight : i32, outWidth : i32, avgMultiplier : f32,",this.workgroupSize=[64,1,1],this.size=!0,this.outputShape=t.inShape,this.dispatchLayout=(0,n.flatDispatchLayout)(this.outputShape),this.dispatch=(0,n.computeDispatch)(this.dispatchLayout,this.outputShape,this.workgroupSize),this.shaderKey="avgPool2DBackprop"}getUserCode(){return`\n      ${(0,t.getMainHeaderString)('index')} {\n      if (index < uniforms.size) {\n        let coords = getCoordsFromIndex(index);\n        let batch = coords[0];\n        let d = coords[3];\n\n        let dyRCCorner = vec2<i32>(coords.yz) - uniforms.pads;\n        let dyRCorner = dyRCCorner.x;\n        let dyCCorner = dyRCCorner.y;\n\n        // Convolve dy(?, ?, d) with pos mask(:, :, d) to get dx(xR, xC, d).\n        // ? = to be determined. : = across all values in that axis.\n        var dotProd = 0.0;\n        for (var wR = 0; wR < uniforms.filterDims[0]; wR = wR + uniforms.dilations[0]) {\n          let dyR = f32(dyRCorner + wR) / f32(uniforms.strides[0]);\n\n          if (dyR < 0.0 || dyR >= f32(uniforms.outHeight) || fract(dyR) > 0.0) {\n            continue;\n          }\n          let idyR = i32(dyR);\n\n          for (var wC = 0; wC < uniforms.filterDims[1]; wC = wC + uniforms.dilations[1]) {\n            let dyC = f32(dyCCorner + wC) / f32(uniforms.strides[1]);\n\n            if (dyC < 0.0 || dyC >= f32(uniforms.outWidth) || fract(dyC) > 0.0) {\n              continue;\n            }\n            let idyC = i32(dyC);\n\n            let dyValue = getDy(batch, idyR, idyC, d);\n\n            dotProd = dotProd + dyValue * uniforms.avgMultiplier;\n          }\n        }\n        setOutputAtIndex(index, dotProd);\n      }\n    }\n    `}};e.AvgPool3DBackpropProgram=class{constructor(t){this.variableNames=['dy'],this.uniforms="strides : vec3<i32>, pads : vec3<i32>, filterDims : vec3<i32>,\n       outDepth : i32, outHeight : i32, outWidth : i32, avgMultiplier : f32,",this.workgroupSize=[64,1,1],this.size=!0,this.outputShape=t.inShape,this.dispatchLayout=(0,n.flatDispatchLayout)(this.outputShape),this.dispatch=(0,n.computeDispatch)(this.dispatchLayout,this.outputShape,this.workgroupSize),this.shaderKey="avgPool3DBackprop"}getUserCode(){return`\n      ${(0,t.getMainHeaderString)('index')} {\n      if (index < uniforms.size) {\n        let coords = getCoordsFromIndex(index);\n        let batch = coords.x;\n        let ch = coords.u;\n\n        let dyCorner = vec3<i32>(coords.y, coords.z, coords.w) - uniforms.pads;\n        let dyDCorner = dyCorner.x;\n        let dyRCorner = dyCorner.y;\n        let dyCCorner = dyCorner.z;\n\n        // Convolve dy(?, ?, ?, d) with pos mask(:, :, :, ch) to get\n        // dx(xD, xR, xC, ch).\n        // ? = to be determined. : = across all values in that axis.\n        var dotProd = 0.0;\n        for (var wD = 0; wD < uniforms.filterDims[0]; wD++) {\n          let dyD = f32(dyDCorner + wD) / f32(uniforms.strides[0]);\n\n          if (dyD < 0.0 || dyD >= f32(uniforms.outDepth) || fract(dyD) > 0.0) {\n            continue;\n          }\n          let idyD = i32(dyD);\n\n          for (var wR = 0; wR < uniforms.filterDims[1]; wR++) {\n            let dyR = f32(dyRCorner + wR) / f32(uniforms.strides[1]);\n\n            if (dyR < 0.0 || dyR >= f32(uniforms.outHeight) || fract(dyR) > 0.0) {\n              continue;\n            }\n            let idyR = i32(dyR);\n\n            for (var wC = 0; wC < uniforms.filterDims[2]; wC++) {\n              let dyC = f32(dyCCorner + wC) / f32(uniforms.strides[2]);\n\n              if (dyC < 0.0 || dyC >= f32(uniforms.outWidth) || fract(dyC) > 0.0) {\n                continue;\n              }\n              let idyC = i32(dyC);\n\n              let dyValue = getDy(batch, idyD, idyR, idyC, ch);\n              dotProd += dyValue * uniforms.avgMultiplier;\n            }\n          }\n        }\n        setOutputAtIndex(index, dotProd);\n      }\n    }\n    `}}},2470,[2417,2419]);
__d(function(g,r,i,a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.avgPoolGrad=l,e.avgPoolGradConfig=void 0;var t=r(d[0]),o=r(d[1]),n=r(d[2]);
/**
   * @license
   * Copyright 2022 Google LLC.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   */
function l(l){const{inputs:f,backend:p,attrs:c}=l,{dy:u,input:h}=f,v=h;(0,n.assertNotComplex)([u,h],'avgPoolGrad');const{filterSize:s,strides:P,pad:y}=c,W=t.backend_util.computePool2DInfo(v.shape,s,P,1,y),b=new o.AvgPool2DBackpropProgram(W),k=1/(W.filterHeight*W.filterWidth),G=[{type:'int32',data:[W.strideHeight,W.strideWidth]},{type:'int32',data:[W.effectiveFilterHeight-1-W.padInfo.top,W.effectiveFilterWidth-1-W.padInfo.left]},{type:'int32',data:[W.dilationHeight,W.dilationWidth]},{type:'int32',data:[W.effectiveFilterHeight,W.effectiveFilterWidth]},{type:'int32',data:[W.outHeight]},{type:'int32',data:[W.outWidth]},{type:'float32',data:[k]}];return p.runWebGPUProgram(b,[u],v.dtype,G)}e.avgPoolGradConfig={kernelName:t.AvgPoolGrad,backendName:'webgpu',kernelFunc:l}},2471,[1158,2470,2419]);
__d(function(g,r,i,_a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.batchMatMul=n,e.batchMatMulConfig=void 0;var a=r(d[0]),t=r(d[1]);
/**
   * @license
   * Copyright 2021 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   */
function n(a){const{inputs:n,backend:c,attrs:u}=a,{a:o,b:s}=n,{transposeA:b,transposeB:M}=u;return(0,t.batchMatMulImpl)({a:o,b:s,transposeA:b,transposeB:M,backend:c})}e.batchMatMulConfig={kernelName:a.BatchMatMul,backendName:'webgpu',kernelFunc:n}},2472,[1158,2423]);
__d(function(g,r,i,_a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.batchToSpaceNDConfig=e.batchToSpaceND=void 0;var t=r(d[0]),a=r(d[1]),n=r(d[2]),c=r(d[3]);
/**
   * @license
   * Copyright 2021 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   */
const s=s=>{const{inputs:p,backend:h,attrs:o}=s,{x:u}=p,{blockShape:b,crops:l}=o;t.util.assert(u.shape.length<=4,()=>"batchToSpaceND for rank > 4 with a WebGPU backend not implemented yet");const k=b.reduce((t,a)=>t*a),S=t.backend_util.getReshaped(u.shape,b,k),_=t.backend_util.getPermuted(S.length,b.length),N=t.backend_util.getReshapedPermuted(u.shape,b,k),D=t.backend_util.getSliceBeginCoords(l,b.length),f=t.backend_util.getSliceSize(N,l,b.length),T=[],x=(0,a.reshape)({inputs:{x:u},backend:h,attrs:{shape:S}}),P=(0,c.transpose)({inputs:{x:x},backend:h,attrs:{perm:_}}),v=(0,a.reshape)({inputs:{x:P},backend:h,attrs:{shape:N}}),C=(0,n.slice)({inputs:{x:v},backend:h,attrs:{begin:D,size:f}});return T.push(x),T.push(P),T.push(v),T.forEach(t=>h.disposeData(t.dataId)),C};e.batchToSpaceND=s;e.batchToSpaceNDConfig={kernelName:t.BatchToSpaceND,backendName:'webgpu',kernelFunc:s}},2473,[1158,2433,2474,2449]);
__d(function(g,r,i,a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.slice=l,e.sliceConfig=void 0;var n=r(d[0]),t=r(d[1]),s=r(d[2]);
/**
   * @license
   * Copyright 2021 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   */
function l(l){const{inputs:c,backend:o,attrs:u}=l,{x:p}=c,{begin:f,size:P}=u,[y,b]=n.slice_util.parseSliceParams(p,f,P);if(n.slice_util.assertParamsValid(p,y,b),o.shouldExecuteOnCPU([p])||'string'===p.dtype){const n=o.tensorMap.get(p.dataId),s=(0,t.sliceImplCPU)(n.values,y,b,p.shape,p.dtype);return o.makeTensorInfo(b,p.dtype,s)}if(0===n.util.sizeFromShape(b))return o.makeTensorInfo(b,p.dtype,[]);const k=new s.SliceProgram(y,b),_=[{type:'int32',data:y}];return o.runWebGPUProgram(k,[p],p.dtype,_)}e.sliceConfig={kernelName:n.Slice,backendName:'webgpu',kernelFunc:l}},2474,[1158,2441,2475]);
__d(function(g,r,_i,a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.SliceProgram=void 0;var t=r(d[0]),o=r(d[1]);e.SliceProgram=
/**
   * @license
   * Copyright 2019 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   */
class{constructor(s,i){this.variableNames=['source'],this.workPerThread=1,this.workgroupSize=[64,1,1],this.size=!0,this.outputShape=i,this.rank=i.length,this.dispatchLayout=(0,o.flatDispatchLayout)(this.outputShape),this.dispatch=(0,o.computeDispatch)(this.dispatchLayout,this.outputShape,this.workgroupSize,[this.workPerThread,1,1]),this.start=s,this.uniforms=`start : ${(0,t.getCoordsDataType)(s.length)}, `,this.shaderKey='slice'}getUserCode(){const o=(0,t.getCoordsDataType)(this.rank),n=i(this.rank);let u;u=1===this.start.length?this.outputShape.map((t,o)=>"sourceLoc = uniforms.start + coords;"):this.outputShape.map((o,i)=>`sourceLoc.${s[i]} = uniforms.start.${(0,t.getCoordsXYZ)(i)} + coords.${s[i]};`);return`\n      ${(0,t.getMainHeaderString)('index')} {\n        if (index < uniforms.size) {\n          var sourceLoc : ${o};\n          let coords = getCoordsFromIndex(index);\n          ${u.join('\n')}\n          setOutputAtIndex(index, getSource(${n}));\n        }\n      }\n    `}};const s=['x','y','z','w','u','v'];function i(t){if(1===t)return'sourceLoc';if(t<=6)return s.slice(0,t).map(t=>`sourceLoc.${t}`).join(',');throw Error(`Slicing for rank ${t} is not yet supported`)}},2475,[2417,2419]);
__d(function(g,r,i,a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.bincount=u,e.bincountConfig=void 0;var n=r(d[0]),t=r(d[1]),o=r(d[2]);
/**
   * @license
   * Copyright 2022 Google LLC.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   */
function u(u){const{inputs:c,backend:s,attrs:p}=u,{x:b,weights:l}=c,{size:f}=p,h=n.util.sizeFromShape(b.shape),k=n.util.sizeFromShape(l.shape)>0,v=[f],y=l.dtype,P=(0,o.fill)({backend:s,attrs:{shape:v,value:0,dtype:y}}),_=new t.BincountProgram([h],k),w=[{type:'int32',data:[f]}],z=k?[b,l]:[b];return s.runWebGPUProgram(_,z,y,w,P)}e.bincountConfig={kernelName:n.Bincount,backendName:'webgpu',kernelFunc:u}},2476,[1158,2477,2431]);
__d(function(g,r,i,a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.BincountProgram=void 0;var t=r(d[0]),n=r(d[1]),s=r(d[2]);
/**
   * @license
   * Copyright 2022 Google LLC.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   */
const o=`\n  fn bincount_write(index: i32, value: f32) {\n    ${(0,t.atomicAddSnippet)('&result[index]','value','float32')}\n  }\n`;e.BincountProgram=class{constructor(t,n,o=!1){this.outputShape=[],this.variableNames=['x'],this.uniforms='binCountSize : i32,',this.workgroupSize=[64,1,1],this.atomic=!0,this.hasWeights=!0,this.binaryOutput=!1,this.outputShape=t,this.rank=t.length,this.dispatchLayout=(0,s.flatDispatchLayout)(this.outputShape),this.dispatch=(0,s.computeDispatch)(this.dispatchLayout,this.outputShape,this.workgroupSize),this.binaryOutput=o,o&&(this.atomic=!1),this.hasWeights=n,this.hasWeights&&this.variableNames.push('w'),this.shaderKey=`bincount_${this.hasWeights}_${this.binaryOutput}_${this.rank}`}getUserCode(){return`\n    ${this.binaryOutput?"\n  fn bincount_write(index: i32, value: f32) {\n    atomicStore(&result[index], bitcast<i32>(value));\n  }\n":o}\n  ${(0,n.getMainHeaderString)('index')} {\n    ${1===this.rank?`if (index < uniforms.xShape) {\n      let indexVal = i32(getX(index));\n      if (indexVal < uniforms.binCountSize) {\n        let value = ${this.binaryOutput?1:this.hasWeights?'getW(index)':'1.'};\n        bincount_write(indexVal, value);\n      }\n    }`:`let coord = getCoordsFromIndex(index);\n    if (coordsInBounds2D(coord, uniforms.xShape)) {\n      let indexVal = i32(getX(coord[0], coord[1]));\n      if (indexVal < uniforms.binCountSize) {\n        let value = ${this.binaryOutput?1:this.hasWeights?'getW(coord[0], coord[1])':'1.'};\n        bincount_write(coord.x * uniforms.binCountSize + indexVal, value);\n      }\n    }`}\n  }\n  `}}},2477,[2418,2417,2419]);
__d(function(g,r,i,a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.broadcastArgs=s,e.broadcastArgsConfig=void 0;var t=r(d[0]),n=r(d[1]);
/**
   * @license
   * Copyright 2023 Google LLC.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   */
function s(s){const{inputs:o,backend:c}=s,{s0:u,s1:p}=o;if(c.shouldExecuteOnCPU([u,p])){const n=c.tensorMap.get(u.dataId),s=c.tensorMap.get(p.dataId),o=n.values,l=s.values,f=t.backend_util.assertAndGetBroadcastShape(Array.from(o),Array.from(l));return c.makeTensorInfo([f.length],'int32',Int32Array.from(f))}const l=t.util.sizeFromShape(u.shape),f=t.util.sizeFromShape(p.shape),b=Math.max(l,f),A=new n.BroadcastArgsProgram(b),h=[{type:'int32',data:[l]},{type:'int32',data:[f]}];return c.runWebGPUProgram(A,[u,p],'int32',h)}e.broadcastArgsConfig={kernelName:t.BroadcastArgs,backendName:'webgpu',kernelFunc:s}},2478,[1158,2479]);
__d(function(g,r,i,a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.BroadcastArgsProgram=void 0;var s=r(d[0]),t=r(d[1]);e.BroadcastArgsProgram=
/**
   * @license
   * Copyright 2023 Google LLC.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   */
class{constructor(s){this.outputShape=[],this.variableNames=['s0','s1'],this.uniforms='s0Size : i32, s1Size : i32, ',this.workgroupSize=[64,1,1],this.size=!0,this.outputShape=[s],this.dispatchLayout=(0,t.flatDispatchLayout)(this.outputShape),this.dispatch=(0,t.computeDispatch)(this.dispatchLayout,this.outputShape,this.workgroupSize),this.shaderKey='broadcastArgs'}getUserCode(){return`\n  ${(0,s.getMainHeaderString)('index')} {\n    if (index < uniforms.size) {\n      var s0 = 1.0;\n      var s1 = 1.0;\n      let indexS0 = index - uniforms.size + uniforms.s0Size;\n      let indexS1 = index - uniforms.size + uniforms.s1Size;\n      if (indexS0 >= 0) {\n        s0 = getS0(indexS0);\n      }\n      if (indexS1 >= 0) {\n        s1 = getS1(indexS1);\n      }\n\n      if (s0 == 1.0) {\n        setOutputAtIndex(index, s1);\n      } else if (s1 == 1.0) {\n        setOutputAtIndex(index, s0);\n      } else if (s0 != s1) {\n        setOutputAtIndex(index, uniforms.NAN);\n      } else {\n        setOutputAtIndex(index, s0);\n      }\n    }\n  }\n  `}}},2479,[2417,2419]);
__d(function(g,_r,_i,a,m,_e,d){Object.defineProperty(_e,"__esModule",{value:!0}),_e.cast=u,_e.castConfig=void 0;var t=(function(t,e){if("function"==typeof WeakMap)var n=new WeakMap,o=new WeakMap;return(function(t,e){if(!e&&t&&t.__esModule)return t;var r,s,i={__proto__:null,default:t};if(null===t||"object"!=typeof t&&"function"!=typeof t)return i;if(r=e?o:n){if(r.has(t))return r.get(t);r.set(t,i)}for(const e in t)"default"!==e&&{}.hasOwnProperty.call(t,e)&&((s=(r=Object.defineProperty)&&Object.getOwnPropertyDescriptor(t,e))&&(s.get||s.set)?r(i,e,s):i[e]=t[e]);return i})(t,e)}
/**
   * @license
   * Copyright 2021 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   */)(_r(d[0])),e=t,n=_r(d[1]),o=_r(d[2]),r=_r(d[3]),s=_r(d[4]),i=_r(d[5]),p=_r(d[6]);function u(c){const{inputs:f,backend:l,attrs:y}=c,{x:b}=f,{dtype:k}=y;if('complex64'===k){if('complex64'===b.dtype)return(0,r.identity)({inputs:{x:b},backend:l});const t=e.zeros(b.shape),n=u({inputs:{x:b},backend:l,attrs:{dtype:'float32'}}),s=(0,o.complex)({inputs:{real:n,imag:t},backend:l});return t.dispose(),l.disposeData(n.dataId),s}if('complex64'===b.dtype){const t=(0,i.real)({inputs:{input:b},backend:l}),e=u({inputs:{x:t},backend:l,attrs:{dtype:k}});return l.disposeData(t.dataId),e}if(!t.util.hasEncodingLoss(b.dtype,k)){const t=(0,r.identity)({inputs:{x:b},backend:l});return{dataId:t.dataId,shape:t.shape,dtype:k}}if(l.shouldExecuteOnCPU([b])){const t=l.tensorMap.get(b.dataId).values,[e,o,r]=(0,n.castImplCPU)(t,b.shape,b.dtype,k);return l.makeTensorInfo(e,o,r)}if('int32'===k)return(0,p.int)(b,l);if('bool'===k){const e=l.makeTensorInfo([],'bool',t.util.getTypedArrayFromDType('bool',1)),n={a:b,b:e},o=(0,s.notEqual)({inputs:n,backend:l});return l.disposeData(e.dataId),o}throw new Error(`Error in Cast: failed to cast ${b.dtype} to ${k}`)}_e.castConfig={kernelName:t.Cast,backendName:'webgpu',kernelFunc:u}},2480,[1158,2441,2438,2439,2481,2482,2483]);
__d(function(g,r,i,a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.notEqualConfig=e.notEqual=void 0;var n=r(d[0]),o=r(d[1]),l=r(d[2]),u=r(d[3]);
/**
   * @license
   * Copyright 2021 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   */
const t=e.notEqual=(0,l.binaryKernelFunc)({opType:o.BinaryOpType.NOT_EQUAL,dtype:'bool',cpuKernelImpl:u.notEqualImplCPU});e.notEqualConfig={kernelName:n.NotEqual,backendName:'webgpu',kernelFunc:t}},2481,[1158,2426,2435,2441]);
__d(function(g,r,i,a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.real=o,e.realConfig=void 0;var n=r(d[0]),t=r(d[1]);
/**
   * @license
   * Copyright 2021 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   */
function o(n){const{inputs:o,backend:l}=n,{input:u}=o,c=l.tensorMap.get(u.dataId);return(0,t.identity)({inputs:{x:c.complexTensorInfos.real},backend:l})}e.realConfig={kernelName:n.Real,backendName:'webgpu',kernelFunc:o}},2482,[1158,2439]);
__d(function(g,r,i,a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.int=
/**
   * @license
   * Copyright 2021 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   */
function(p,o){const u=new t.UnaryOpProgram(p.shape,n.UnaryOpType.TO_INT),y=o.runWebGPUProgram(u,[p],'int32');return{dataId:y.dataId,shape:y.shape,dtype:y.dtype}};var n=r(d[0]),t=r(d[1])},2483,[2427,2440]);
__d(function(g,r,i,a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.ceilConfig=e.ceil=void 0;var n=r(d[0]),l=r(d[1]),c=r(d[2]),p=r(d[3]);
/**
   * @license
   * Copyright 2021 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   */
const o=e.ceil=(0,l.unaryKernelFunc)({opType:p.UnaryOpType.CEIL,cpuKernelImpl:c.ceilImplCPU});e.ceilConfig={kernelName:n.Ceil,backendName:'webgpu',kernelFunc:o}},2484,[1158,2435,2441,2427]);
__d(function(g,r,i,a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.clipByValue=p,e.clipByValueConfig=void 0;var l=r(d[0]),n=r(d[1]),t=r(d[2]);
/**
   * @license
   * Copyright 2021 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   */
function p(p){const{inputs:u,backend:o,attrs:c}=p,{x:s}=u,{clipValueMin:y,clipValueMax:f}=c;let V;const b=[{type:'float32',data:[y]},{type:'float32',data:[f]}];return V=l.util.sizeFromShape(s.shape)%4==0?new n.ClipVec4Program(s.shape):new t.ClipProgram(s.shape),o.runWebGPUProgram(V,[s],s.dtype,b)}e.clipByValueConfig={kernelName:l.ClipByValue,backendName:'webgpu',kernelFunc:p}},2485,[1158,2486,2487]);
__d(function(g,r,i,a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.ClipVec4Program=void 0;var t=r(d[0]),s=r(d[1]);e.ClipVec4Program=
/**
   * @license
   * Copyright 2020 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   */
class{constructor(t){this.variableNames=['A'],this.uniforms='minVal : f32, maxVal : f32,',this.workPerThread=4,this.workgroupSize=[64,1,1],this.outputComponent=4,this.size=!0,this.outputShape=t,this.dispatchLayout=(0,s.flatDispatchLayout)(this.outputShape),this.dispatch=(0,s.computeDispatch)(this.dispatchLayout,this.outputShape,this.workgroupSize,[this.workPerThread,1,1]),this.shaderKey='clipVec4'}getUserCode(){return`\n      ${(0,t.getMainHeaderString)('index')} {\n        if(index < uniforms.size) {\n          let value = getAByOutputIndex(index);\n          var clampedValue = clamp(\n              value, vec4<f32>(uniforms.minVal), vec4<f32>(uniforms.maxVal));\n          clampedValue = select(clampedValue, value, isnanVec4(value));\n          setOutputAtIndex(index, clampedValue);\n        }\n      }\n    `}}},2486,[2417,2419]);
__d(function(g,r,i,a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.ClipProgram=void 0;var t=r(d[0]),n=r(d[1]);e.ClipProgram=
/**
   * @license
   * Copyright 2019 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   */
class{constructor(t){this.variableNames=['A'],this.uniforms='minVal : f32, maxVal : f32,',this.workgroupSize=[64,1,1],this.size=!0,this.outputShape=t,this.dispatchLayout=(0,n.flatDispatchLayout)(this.outputShape),this.dispatch=(0,n.computeDispatch)(this.dispatchLayout,this.outputShape,this.workgroupSize),this.shaderKey='clip'}getUserCode(){return`\n      ${(0,t.getMainHeaderString)('index')} {\n        if(index < uniforms.size) {\n          let value = getAByOutputIndex(index);\n          if (isnan(value)) {\n            setOutputAtIndex(index, value);\n            return;\n          }\n          setOutputAtIndex(index, clamp(value, uniforms.minVal, uniforms.maxVal));\n        }\n      }\n    `}}},2487,[2417,2419]);
__d(function(g,r,i,a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.complexAbs=t,e.complexAbsConfig=void 0;var n=r(d[0]),o=r(d[1]);
/**
   * @license
   * Copyright 2023 Google LLC.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   */
function p(n,o){return{dataId:o.dataId,dtype:o.dtype,shape:n.shape}}function t(n){const{inputs:t,backend:s}=n,{x:c}=t,l=s.tensorMap.get(c.dataId),u=new o.ComplexAbsProgram(c.shape),b=[p(c,l.complexTensorInfos.real),p(c,l.complexTensorInfos.imag)];return s.runWebGPUProgram(u,b,b[0].dtype)}e.complexAbsConfig={kernelName:n.ComplexAbs,backendName:'webgpu',kernelFunc:t}},2488,[1158,2489]);
__d(function(g,r,i,a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.ComplexAbsProgram=void 0;var t=r(d[0]),s=r(d[1]);e.ComplexAbsProgram=
/**
   * @license
   * Copyright 2023 Google LLC.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   */
class{constructor(t){this.outputShape=[],this.variableNames=['real','imag'],this.workgroupSize=[64,1,1],this.size=!0,this.outputShape=t,this.dispatchLayout=(0,s.flatDispatchLayout)(this.outputShape),this.dispatch=(0,s.computeDispatch)(this.dispatchLayout,this.outputShape,this.workgroupSize),this.shaderKey='complexAbs'}getUserCode(){return`\n    ${(0,t.getMainHeaderString)('index')} {\n      if (index < uniforms.size) {\n        let re = abs(getRealByOutputIndex(index));\n        let im = abs(getImagByOutputIndex(index));\n        let mx = max(re, im);\n\n        // The length function in wgsl may be not underflow-safe on some GPUs.\n        // So the safe solution is to ensure underflow-safety in all cases.\n        setOutputAtIndex(index, select(mx * length(vec2<f32>(1, min(re, im)/mx)), 0.0, mx == 0.0));\n      }\n    }\n  `}}},2489,[2417,2419]);
__d(function(g,r,i,a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.concat=s,e.concatConfig=void 0;var n=r(d[0]),t=r(d[1]),c=r(d[2]);
/**
   * @license
   * Copyright 2021 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   */
function s(s){const{inputs:o,backend:p,attrs:u}=s,{axis:l}=u,f=n.util.parseAxisParam(l,o[0].shape)[0],h=o.map(n=>n.shape);n.backend_util.assertParamsConsistent(h,f);const k=n.backend_util.computeOutShape(o.map(n=>n.shape),f);if(0===n.util.sizeFromShape(k))return p.makeTensorInfo(k,o[0].dtype,[]);const b=o.filter(t=>n.util.sizeFromShape(t.shape)>0);return 1===b.length?(0,c.identity)({inputs:{x:b[0]},backend:p}):(0,t.concatImpl)(b,f,p)}e.concatConfig={kernelName:n.Concat,backendName:'webgpu',kernelFunc:s}},2490,[1158,2491,2439]);
__d(function(g,_r,_i,a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.concatImpl=
/**
   * @license
   * Copyright 2021 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   */
function u(h,l,f){const I=h[0].dtype;if('complex64'===I){const t=h.map(t=>(0,r.real)({inputs:{input:t},backend:f})),s=h.map(t=>(0,o.imag)({inputs:{input:t},backend:f})),p=u(t,l,f),c=u(s,l,f),i=(0,n.complex)({inputs:{real:p,imag:c},backend:f});return t.forEach(t=>f.disposeData(t.dataId)),s.forEach(t=>f.disposeData(t.dataId)),f.disposeData(p.dataId),f.disposeData(c.dataId),i}let S=f.shouldExecuteOnCPU(h);'string'===I&&(S=!0);if(S){const s=h.map(s=>{const p=[-1,t.util.sizeFromShape(s.shape.slice(l))];return(0,c.reshape)({inputs:{x:s},backend:f,attrs:{shape:p}})}),n=s.map(t=>({vals:f.readSync(t.dataId),shape:t.shape})),o=t.backend_util.computeOutShape(s.map(t=>t.shape),1),r=1===s[0].shape[0],i=(0,p.concatImplCPU)(n,o,I,r),u=t.backend_util.computeOutShape(h.map(t=>t.shape),l),S=f.makeTensorInfo(u,I,i);return s.forEach(t=>f.disposeData(t.dataId)),S}const b=f.device.limits.maxStorageBuffersPerShaderStage-1;if(h.length>b){const t=[];for(let s=0;s<h.length;s+=b){const p=h.slice(s,s+b);t.push(u(p,l,f))}const s=u(t,l,f);for(const s of t)f.disposeData(s.dataId);return s}const{tensors2D:k,outShape:D}=i(h,l,f),x=k.map(t=>t.shape),y=new s.ConcatProgram(x),P=[],_=new Array(x.length-1);if(_.length>0){_[0]=x[0][1],P.push({type:'int32',data:[_[0]]});for(let t=1;t<_.length;t++)_[t]=_[t-1]+x[t][1],P.push({type:'int32',data:[_[t]]})}const E=f.runWebGPUProgram(y,k,k[0].dtype,P);k.forEach(t=>f.disposeData(t.dataId));const O=(0,c.reshape)({inputs:{x:E},backend:f,attrs:{shape:D}});return f.disposeData(E.dataId),O};var t=_r(d[0]),s=_r(d[1]),p=_r(d[2]),n=_r(d[3]),o=_r(d[4]),r=_r(d[5]),c=_r(d[6]);function i(s,p,n){const o=t.backend_util.computeOutShape(s.map(t=>t.shape),p);return{tensors2D:s.map(s=>(0,c.reshape)({inputs:{x:s},backend:n,attrs:{shape:[t.util.sizeFromShape(s.shape.slice(0,p)),t.util.sizeFromShape(s.shape.slice(p))]}})),outShape:o}}},2491,[1158,2492,2441,2438,2493,2482,2433]);
__d(function(g,r,_i,a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.ConcatProgram=void 0;var t=r(d[0]),o=r(d[1]),s=r(d[2]);e.ConcatProgram=
/**
   * @license
   * Copyright 2019 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   */
class{constructor(o){this.uniforms='',this.workPerThread=1,this.workgroupSize=[64,1,1],this.size=!0,this.outputShape=t.backend_util.computeOutShape(o,1),this.variableNames=o.map((t,o)=>`T${o}`),this.dispatchLayout=(0,s.flatDispatchLayout)(this.outputShape),this.dispatch=(0,s.computeDispatch)(this.dispatchLayout,this.outputShape,this.workgroupSize,[this.workPerThread,1,1]),this.offsetLength=o.length-1;for(let t=0;t<this.offsetLength;t++)this.uniforms+=`offset${t} : i32,`;this.shaderKey='concat'}getUserCode(){const t=[];if(this.offsetLength>0){t.push("if (yC < uniforms.offset0){ setOutputAtCoords(coords.x, coords.y, getT0(yR, yC)); }");for(let o=1;o<this.offsetLength;o++)t.push(`else if (yC < uniforms.offset${[o]}){ setOutputAtCoords(coords.x, coords.y, getT${o}(yR, yC - uniforms.offset${o-1})); }`);const o=this.offsetLength,s=this.offsetLength-1;t.push(`else { setOutputAtCoords(coords.x, coords.y, getT${o}(yR, yC - uniforms.offset${s})); }`)}else t.push("setOutputAtCoords(coords.x, coords.y, getT0(yR, yC));");return`\n      ${(0,o.getMainHeaderString)('index')} {\n        for(var i = 0; i < ${this.workPerThread}; i = i + 1) {\n          let flatIndex = index * ${this.workPerThread} + i;\n          if(flatIndex < uniforms.size) {\n            let coords = getCoordsFromIndex(flatIndex);\n            let yR = coords.x;\n            let yC = coords.y;\n\n            ${t.join('\n        ')}\n          }\n        }\n      }\n    `}}},2492,[1158,2417,2419]);
__d(function(g,r,i,a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.imag=o,e.imagConfig=void 0;var n=r(d[0]),t=r(d[1]);
/**
   * @license
   * Copyright 2021 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   */
function o(n){const{inputs:o,backend:u}=n,{input:c}=o,p=u.tensorMap.get(c.dataId);return(0,t.identity)({inputs:{x:p.complexTensorInfos.imag},backend:u})}e.imagConfig={kernelName:n.Imag,backendName:'webgpu',kernelFunc:o}},2493,[1158,2439]);
__d(function(g,r,i,a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.conv2DConfig=void 0,e.conv2d=t;var n=r(d[0]),o=r(d[1]);
/**
   * @license
   * Copyright 2021 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   */
function t(t){const{inputs:c,attrs:u,backend:v}=t,{x:l,filter:f}=c,{strides:s,pad:p,dataFormat:b,dilations:k,dimRoundingMode:D}=u,_=n.backend_util.convertConv2DDataFormat(b),C=n.backend_util.computeConv2DInfo(l.shape,f.shape,s,k,p,D,!1,_);return(0,o.conv2DImpl)({x:l,filter:f,convInfo:C,backend:v})}e.conv2DConfig={kernelName:n.Conv2D,backendName:'webgpu',kernelFunc:t}},2494,[1158,2495]);
__d(function(g,r,_i,a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.conv2DImpl=function({x:s,filter:h,convInfo:p,backend:c,bias:f=null,preluActivationWeights:b=null,leakyreluAlpha:W=0,activation:k=null}){const y=null!=f,v=null!=b,I='channelsLast'===p.dataFormat,A=I&&p.filterHeight===p.inHeight&&p.filterWidth===p.inWidth&&'VALID'===p.padInfo.type,H=(0,t.env)().getBool('WEBGPU_USE_NAIVE_CONV2D_DEBUG');if(!H&&(A||1===p.filterHeight&&1===p.filterWidth&&1===p.dilationHeight&&1===p.dilationWidth&&1===p.strideHeight&&1===p.strideWidth&&('SAME'===p.padInfo.type||'VALID'===p.padInfo.type)))return o({x:s,filter:h,convInfo:p,backend:c,bias:f,activation:k,preluActivationWeights:b,leakyreluAlpha:W});const x=(0,t.env)().getNumber('WEBGPU_THRESHOLD_TO_INCREASE_WORKGROUPS_FOR_MATMUL'),C=x>-1?x:c.thresholdToIncreaseWorkgroups,_=p.batchSize*Math.ceil(p.outHeight*p.outWidth/32)*Math.ceil(p.outChannels/32);if((0,t.env)().getBool('WEBGPU_CONV_SEPARATE_IM2COL_SHADER')||_<=C)return u({x:s,filter:h,convInfo:p,backend:c,bias:f,preluActivationWeights:b,leakyreluAlpha:W,activation:k});let S;const D=[p.padInfo.top,p.padInfo.left],E=[{type:'int32',data:[p.filterHeight,p.filterWidth]},{type:'int32',data:[...D]},{type:'int32',data:[p.strideHeight,p.strideWidth]},{type:'int32',data:[p.dilationHeight,p.dilationWidth]}];if(H)S=new i.Conv2DNaiveProgram(p,y,k,v);else{const t=I?p.outHeight*p.outWidth:p.outChannels,i=I?p.outChannels:p.outHeight*p.outWidth,s=p.filterHeight*p.filterWidth*p.inChannels;E.push({type:'int32',data:[t]},{type:'int32',data:[i]},{type:'int32',data:[s]});const h=c.adapterInfo.isIntel();S=new n.Conv2DMMProgram(p,t,i,s,y,k,v,h)}const M=[],P=[s,h];y&&(I||1!==f.shape.length||(f=(0,l.reshape)({inputs:{x:f},backend:c,attrs:{shape:[f.shape[0],1,1]}}),M.push(f)),P.push(f));v&&(I||1!==b.shape.length||(b=(0,l.reshape)({inputs:{x:b},backend:c,attrs:{shape:[b.shape[0],1,1]}}),M.push(b)),P.push(b));'leakyrelu'===k&&(E.push({type:'float32',data:[W]}),S.uniforms+=' alpha : f32,');const L=c.runWebGPUProgram(S,P,s.dtype,E);for(const t of M)c.disposeData(t.dataId);return L};var t=r(d[0]),n=r(d[1]),i=r(d[2]),s=r(d[3]),h=r(d[4]),l=r(d[5]);
/**
   * @license
   * Copyright 2021 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   */
function p(t,n){const i=t.length;return i>=3?n?[...t.slice(0,-3),t[i-3]*t[i-2],t[i-1]]:[...t.slice(0,-3),t[i-3],t[i-2]*t[i-1]]:!n&&1===i&&t[0]>1?[t[0],1]:null}function o({x:t,filter:n,convInfo:i,backend:s,bias:o=null,preluActivationWeights:u=null,leakyreluAlpha:c=0,activation:f=null}){const b='channelsLast'===i.dataFormat,W=!b,k=[];let y,v;if(b&&i.filterHeight===i.inHeight&&i.filterWidth===i.inWidth&&'VALID'===i.padInfo.type){const h=i.inHeight*i.inWidth*i.inChannels;y=(0,l.reshape)({inputs:{x:t},backend:s,attrs:{shape:[1,i.batchSize,h]}}),v=(0,l.reshape)({inputs:{x:n},backend:s,attrs:{shape:[1,h,i.outChannels]}})}else y=(0,l.reshape)({inputs:{x:t},backend:s,attrs:{shape:b?[i.batchSize,i.inHeight*i.inWidth,i.inChannels]:[i.batchSize,i.inChannels,i.inHeight*i.inWidth]}}),v=(0,l.reshape)({inputs:{x:n},backend:s,attrs:{shape:[1,i.inChannels,i.outChannels]}});if(k.push(y),k.push(v),null!=u){const t=p(u.shape,b);null!=t&&(u=(0,l.reshape)({inputs:{x:u},backend:s,attrs:{shape:t}}),k.push(u))}if(null!=o){const t=p(o.shape,b);null!=t&&(o=(0,l.reshape)({inputs:{x:o},backend:s,attrs:{shape:t}}),k.push(o))}const I=(0,h.batchMatMulImpl)({a:b?y:v,b:b?v:y,transposeA:W,transposeB:!1,backend:s,bias:o,activation:f,preluActivationWeights:u,leakyreluAlpha:c}),A=(0,l.reshape)({inputs:{x:I},backend:s,attrs:{shape:i.outShape}});k.push(I);for(const t of k)s.disposeData(t.dataId);return A}function u({x:t,filter:n,convInfo:i,backend:o,bias:u=null,preluActivationWeights:c=null,leakyreluAlpha:f=0,activation:b=null}){const{filterWidth:W,filterHeight:k,inChannels:y,strideWidth:v,strideHeight:I,padInfo:A,outWidth:H,outHeight:x,dilationWidth:C,dilationHeight:_,dataFormat:S}=i,D='channelsLast'===S,E=W*k*y,M=x*H,P=D?[i.batchSize,M,E]:[i.batchSize,E,M],L=new s.Im2ColProgram(P,D),O=[{type:'int32',data:[A.top,A.left]},{type:'int32',data:[I,v]},{type:'int32',data:[_,C]},{type:'int32',data:[H]},{type:'int32',data:[y*W]},{type:'int32',data:[y]}],U=o.runWebGPUProgram(L,[t],t.dtype,O),B=[];B.push(U);const G=(0,l.reshape)({inputs:{x:n},backend:o,attrs:{shape:[1,E,-1]}});if(B.push(G),null!=c){const t=p(c.shape,D);null!=t&&(c=(0,l.reshape)({inputs:{x:c},backend:o,attrs:{shape:t}}),B.push(c))}if(null!=u){const t=p(u.shape,D);null!=t&&(u=(0,l.reshape)({inputs:{x:u},backend:o,attrs:{shape:t}}),B.push(u))}const R=!D,z=(0,h.batchMatMulImpl)({a:D?U:G,b:D?G:U,transposeA:R,transposeB:!1,backend:o,bias:u,activation:b,preluActivationWeights:c,leakyreluAlpha:f}),N=(0,l.reshape)({inputs:{x:z},backend:o,attrs:{shape:i.outShape}});B.push(z);for(const t of B)o.disposeData(t.dataId);return N}},2495,[1158,2496,2497,2498,2423,2433]);
__d(function(g,r,i,a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.Conv2DMMProgram=void 0;var t=r(d[0]),n=r(d[1]),s=r(d[2]),o=r(d[3]);
/**
   * @license
   * Copyright 2019 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   */
function h(n,o,h,u,l=!1,c=null,p=!1,f=4,S=4,v=4){const w=n?"\n      let coord = vec4<i32>(batch, xRow, xCol, xCh);\n      ":"\n      let coord = vec4<i32>(batch, xCh, xRow, xCol);\n      ",C=n?"\n      let coords = vec4<i32>(\n        batch,\n        row / outWidth,\n        row % outWidth,\n        col);\n      ":"\n      let coords = vec4<i32>(\n        batch,\n        row,\n        col / outWidth,\n        col % outWidth);\n      ",x=n?'uniforms.xShape[1]':'uniforms.xShape[2]',$=n?'uniforms.xShape[2]':'uniforms.xShape[3]',W=n?'row':'col',b=n?'col':'row',y=`\n      let inChannels = uniforms.wShape[2];\n      let outWidth = ${n?'uniforms.outShape[2]':'uniforms.outShape[3]'};\n      let outRow = ${W} / outWidth;\n      let outCol = ${W} % outWidth;\n\n      let WRow = ${b} / (uniforms.filterDims[1] * inChannels);\n      let WCol = ${b} / inChannels % uniforms.filterDims[1];\n      let xRow = outRow * uniforms.strides[0] + uniforms.dilations[0] * WRow - uniforms.pads[0];\n      let xCol = outCol * uniforms.strides[1] + uniforms.dilations[1] * WCol - uniforms.pads[1];\n      let xCh = ${b} % inChannels;\n      var resData = ${(0,s.typeSnippet)(f)}(0.0);\n      // The bounds checking is always needed since we use it to pad zero for\n      // the 'same' padding type.\n      if (xRow >= 0 && xRow < ${x} && xCol >= 0 && xCol < ${$}) {\n        ${w}\n        let xIndex = getIndexFromCoords4D(coord, uniforms.xShape);\n        ${(t=>{switch(t){case 1:return'resData = f32(x[xIndex]);';case 3:return'resData = vec3<f32>(x[xIndex], x[xIndex + 1], x[xIndex + 2]);';case 4:return'resData = vec4<f32>(x[xIndex / 4]);';default:throw new Error(`innerElementSize ${t} is not supported.`)}})(f)}\n      }\n      return resData;`,z=n?o&&u?`\n      ${y}`:`\n      if (row < uniforms.dimAOuter && col < uniforms.dimInner) {\n        ${y}\n      }\n      return ${(0,s.typeSnippet)(f)}(0.0);`:u&&h?`\n      ${y}`:`\n      if (row < uniforms.dimInner && col < uniforms.dimBOuter) {\n        ${y}\n      }\n      return ${(0,s.typeSnippet)(f)}(0.0);`,I=`${(t=>{switch(t){case 1:return'return f32(W[row * uniforms.wShape[3] + col]);';case 4:return'return vec4<f32>(W[(row * uniforms.wShape[3] + col) / 4]);';default:throw new Error(`innerElementSize ${t} is not supported.`)}})(S)}`,A=(0,s.typeSnippet)(v),O=n?(0,s.typeSnippet)(f):(0,s.typeSnippet)(S),P=n?(0,s.typeSnippet)(S):(0,s.typeSnippet)(f);return`\n      ${(0,t.activationFnSnippet)(c,p,4===v,4)}\n      fn mm_readA(batch: i32, row : i32, col : i32) -> ${O} {\n        ${n?z:I}\n      }\n\n      fn mm_readB(batch: i32, row : i32, col : i32) -> ${P} {\n        ${n?I:z}\n      }\n\n      fn mm_write(batch: i32, row : i32, col : i32, valueIn : ${A}) {\n        if (row < uniforms.dimAOuter && col < uniforms.dimBOuter)\n        {\n        var value = valueIn;\n        let outWidth = ${n?'uniforms.outShape[2]':'uniforms.outShape[3]'};\n        ${C}\n        ${(0,t.biasActivationSnippet)(l,c)}\n        setOutputAtCoords(coords[0], coords[1], coords[2], coords[3], value);\n        }\n      }`}e.Conv2DMMProgram=class{constructor(t,n,s,h,u=!1,l=null,c=!1,p=!1){this.variableNames=['x','W'],this.uniforms="filterDims : vec2<i32>, pads : vec2<i32>, strides : vec2<i32>, dilations : vec2<i32>, dimAOuter : i32, dimBOuter : i32, dimInner : i32,",this.outputShape=t.outShape,this.isChannelsLast='channelsLast'===t.dataFormat,this.isVec4=((t.inChannels%4==0||t.inChannels%3==0)&&this.isChannelsLast||t.outWidth%4==0&&!this.isChannelsLast)&&t.outChannels%4==0,this.dispatchLayout=this.isChannelsLast?{x:[3],y:[1,2],z:[0]}:{x:[2,3],y:[1],z:[0]},this.workgroupSize=(0,o.computeWorkgroupSizeForConv2d)(this.dispatchLayout,this.outputShape,this.isVec4),this.elementsPerThread=(0,o.computeWorkPerThreadForConv2d)(this.dispatchLayout,this.outputShape,this.isVec4),this.dispatch=(0,o.computeDispatch)(this.dispatchLayout,this.outputShape,this.workgroupSize,this.elementsPerThread),this.isVec4?(this.outputComponent=4,this.isChannelsLast&&t.inChannels%4!=0?(this.innerElementSize=3,this.variableComponents=[1,4]):(this.innerElementSize=4,this.variableComponents=[4,4]),u&&(this.variableNames.push('bias'),this.variableComponents.push(4)),c&&(this.variableNames.push('preluActivationWeights'),this.variableComponents.push(4))):(this.innerElementSize=this.elementsPerThread[0],u&&this.variableNames.push('bias'),c&&this.variableNames.push('preluActivationWeights')),this.sequentialAccessByThreads=p,this.addBias=u,this.activation=l,this.hasPreluActivationWeights=c,this.tileAOuter=this.workgroupSize[1]*this.elementsPerThread[1],this.tileBOuter=this.workgroupSize[0]*this.elementsPerThread[0],this.tileInner=Math.max(this.workgroupSize[0]*this.innerElementSize,this.workgroupSize[1]),this.fitAOuter=n%this.tileAOuter===0,this.fitBOuter=s%this.tileBOuter===0,this.fitInner=h%this.tileInner===0,this.shaderKey=`conv2DMM_${this.elementsPerThread}_${this.activation}}_${this.fitAOuter}_${this.fitBOuter}_${this.fitInner}_${this.isVec4}_${this.innerElementSize}_${this.isChannelsLast}_${this.sequentialAccessByThreads}`}getUserCode(){const t=this.isVec4?(0,n.makeMatMulPackedVec4Source)(this.elementsPerThread,this.workgroupSize,!this.isChannelsLast,this.tileInner):(0,n.makeMatMulPackedSource)(this.elementsPerThread,this.workgroupSize,!this.isChannelsLast,this.tileInner,!1,null,this.sequentialAccessByThreads),s=this.isVec4?[this.innerElementSize,4,4]:[1,1,1];return`\n    ${h(this.isChannelsLast,this.fitAOuter,this.fitBOuter,this.fitInner,this.addBias,this.activation,this.hasPreluActivationWeights,s[0],s[1],s[2])}\n    ${t}\n  `}}},2496,[2425,2424,2417,2419]);
__d(function(g,r,i,a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.Conv2DNaiveProgram=void 0;var n=r(d[0]),o=r(d[1]),t=r(d[2]);e.Conv2DNaiveProgram=
/**
   * @license
   * Copyright 2022 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   */
class{constructor(n,o=!1,s=null,h=!1){this.variableNames=['x','W'],this.uniforms='filterDims: vec2<i32>, pads: vec2<i32>, strides: vec2<i32>, dilations: vec2<i32>,',this.workgroupSize=[4,4,8],this.outputShape=n.outShape,this.isChannelsLast='channelsLast'===n.dataFormat,this.dispatchLayout=this.isChannelsLast?{x:[2],y:[1],z:[0,3]}:{x:[3],y:[2],z:[0,1]},this.dispatch=(0,t.computeDispatch)(this.dispatchLayout,this.outputShape,this.workgroupSize),this.addBias=o,this.activation=s,this.hasPreluActivationWeights=h,o&&this.variableNames.push('bias'),h&&this.variableNames.push('preluActivationWeights'),this.shaderKey=`conv2dnaive_${this.activation}_${this.isChannelsLast}`}getUserCode(){return`\n       ${(0,n.activationFnSnippet)(this.activation,this.hasPreluActivationWeights,!1,4)}\n       fn readInp(batch : i32, row : i32, col : i32, chan : i32) -> f32{\n         let coords = vec4<i32>(batch, row, col, chan);\n         if (coordsInBounds4D(coords, uniforms.xShape)) {\n           return  getX(batch, row, col, chan);\n         } else {\n          return 0.0;\n         }\n       }\n       fn readFilt(row : i32, col : i32, xChannel : i32, outChannel : i32) -> f32{\n         let coords = vec4<i32>(row, col, xChannel, outChannel);\n         if(coordsInBounds4D(coords, uniforms.wShape)) {\n           return getW(row, col, xChannel, outChannel);\n          } else {\n            return 0.0;\n          }\n       }\n       fn writeResult(batch : i32, row : i32, col : i32, chan : i32, valueIn : f32) {\n         let coords = ${this.isChannelsLast?"vec4<i32>(batch, row, col, chan);":"vec4<i32>(batch, chan, row, col);"}\n         if (coordsInBounds4D(coords, uniforms.outShape)) {\n           var value = valueIn;\n           ${(0,n.biasActivationSnippet)(this.addBias,this.activation)}\n           setOutputAtCoords(coords.x, coords.y, coords.z, coords.w, value);\n         }\n       }\n       ${(0,o.getMainHeaderString)('index')} {\n         let coords = getOutputCoords();\n         let batch = coords[0];\n         let outChannel = ${this.isChannelsLast?"coords[3];":"coords[1];"}\n         let outRow = ${this.isChannelsLast?"coords[1];":"coords[2];"}\n         let outCol = ${this.isChannelsLast?"coords[2];":"coords[3];"}\n         var acc : f32 = 0.0;\n         for (var row = 0; row < uniforms.filterDims[0]; row = row + 1) {\n           for (var col = 0; col < uniforms.filterDims[1]; col = col + 1) {\n             let xRow = outRow * uniforms.strides[0] + uniforms.dilations[0] * row - uniforms.pads[0];\n             let xCol = outCol * uniforms.strides[1] + uniforms.dilations[1] * col - uniforms.pads[1];\n             for (var xChannel = 0; xChannel < ${this.isChannelsLast?"uniforms.xShape[3];":"uniforms.xShape[1];"} xChannel = xChannel + 1) {\n               ${this.isChannelsLast?"let v = readInp(batch, xRow, xCol, xChannel);":"let v = readInp(batch, xChannel, xRow, xCol);"}\n               let f = readFilt(row, col, xChannel, outChannel);\n               acc = acc + v * f;\n             }\n           }\n         }\n         writeResult(batch, outRow, outCol, outChannel, acc);\n       }\n     `}}},2497,[2425,2417,2419]);
__d(function(g,r,i,a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.Im2ColProgram=void 0;var s=r(d[0]),t=r(d[1]);e.Im2ColProgram=
/**
   * @license
   * Copyright 2022 Google LLC.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   */
class{constructor(s,o){this.variableNames=['x'],this.uniforms="pads : vec2<i32>, strides : vec2<i32>, dilations : vec2<i32>, outWidth : i32, itemsPerBlockRow : i32,\n       inChannels : i32,",this.workgroupSize=[64,1,1],this.size=!0,this.outputShape=s,this.dispatchLayout=(0,t.flatDispatchLayout)(this.outputShape),this.dispatch=(0,t.computeDispatch)(this.dispatchLayout,this.outputShape,this.workgroupSize),this.isChannelsLast=o,this.shaderKey=`im2col_${this.isChannelsLast}`}getUserCode(){const t=this.isChannelsLast?1:2,o=this.isChannelsLast?2:3,n=this.isChannelsLast?'coords[1]':'coords[2]',h=this.isChannelsLast?'coords[2]':'coords[1]',l=this.isChannelsLast?'getX(batch, xRow, xCol, ch)':'getX(batch, ch, xRow, xCol)';return`\n    ${(0,s.getMainHeaderString)('index')} {\n      let coords = getCoordsFromIndex(index);\n      if(index < uniforms.size) {\n        let batch = coords[0];\n        let row = ${n};\n        let col = ${h};\n        let offsetY = (row / uniforms.outWidth) * uniforms.strides[0] - uniforms.pads[0];\n        let xRow = offsetY + uniforms.dilations[0] * (col / uniforms.itemsPerBlockRow);\n        var value = 0.0;\n        if(xRow < uniforms.xShape[${t}] && xRow >= 0) {\n          let offsetX = (row % uniforms.outWidth) * uniforms.strides[1] -\n              uniforms.pads[1];\n          let xCol = offsetX + uniforms.dilations[1] * ((col %\n              uniforms.itemsPerBlockRow) / uniforms.inChannels);\n          let ch = col % uniforms.inChannels;\n          if(xCol < uniforms.xShape[${o}] && xCol >= 0) {\n            value = ${l};\n          }\n        }\n        setOutputAtIndex(index, value);\n      }\n    }\n   `}}},2498,[2417,2419]);
__d(function(g,r,i,a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.conv2DBackpropFilter=o,e.conv2DBackpropFilterConfig=void 0;var t=r(d[0]),n=r(d[1]);
/**
   * @license
   * Copyright 2022 Google LLC.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   */
function o(o){const{inputs:p,backend:c,attrs:u}=o,{x:l,dy:v}=p,{strides:f,pad:k,dataFormat:y,dimRoundingMode:h,filterShape:s}=u,D=t.backend_util.convertConv2DDataFormat(y),b=t.backend_util.computeConv2DInfo(l.shape,s,f,1,k,h,!1,D),F=new n.Conv2DDerFilterProgram(b),C=[{type:'int32',data:[b.padInfo.top,b.padInfo.left]},{type:'int32',data:[b.strideHeight,b.strideWidth]},{type:'int32',data:[b.batchSize]},{type:'int32',data:[b.outHeight]},{type:'int32',data:[b.outWidth]},{type:'int32',data:[b.inHeight]},{type:'int32',data:[b.inWidth]}];return c.runWebGPUProgram(F,[l,v],l.dtype,C)}e.conv2DBackpropFilterConfig={kernelName:t.Conv2DBackpropFilter,backendName:'webgpu',kernelFunc:o}},2499,[1158,2500]);
__d(function(g,r,i,a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.Conv3DDerInputProgram=e.Conv3DDerFilterProgram=e.Conv2DDerInputProgram=e.Conv2DDerFilterProgram=void 0;var t=r(d[0]),n=r(d[1]);e.Conv2DDerInputProgram=
/**
   * @license
   * Copyright 2021 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   */
class{constructor(t){this.variableNames=['dy','W'],this.uniforms='filterDims : vec2<i32>, pads : vec2<i32>, strides : vec2<i32>, outBackprop : vec4<i32>,',this.workgroupSize=[64,1,1],this.size=!1,this.isVec4=!1,this.workPerThread=1,this.outputShape=t.inShape,this.isChannelsLast='channelsLast'===t.dataFormat,this.isVec4=this.isChannelsLast&&t.outChannels%4==0&&t.inChannels%4==0,this.isVec4?(this.workPerThread=2,this.outputComponent=4,this.workgroupSize=[4,4,4],this.dispatchLayout={x:[3],y:[2],z:[0,1]},this.dispatch=(0,n.computeDispatch)(this.dispatchLayout,this.outputShape,this.workgroupSize,[4,this.workPerThread,1])):(this.size=!0,this.workPerThread=1,this.workgroupSize=[64,1,1],this.dispatchLayout=(0,n.flatDispatchLayout)(this.outputShape),this.dispatch=(0,n.computeDispatch)(this.dispatchLayout,this.outputShape,this.workgroupSize)),this.shaderKey=`conv2DDerInput_${this.isChannelsLast}_${this.isVec4}_${this.workPerThread}`}getUserCode(){const n=this.isChannelsLast?1:2,o=this.isChannelsLast?2:3,s=this.isChannelsLast?3:1,u=`\n    ${(0,t.getMainHeaderString)()} {\n      let batch = i32(globalId.z) / uniforms.outShape[1];\n      let r = i32(globalId.z) % uniforms.outShape[1];\n      let c = i32(globalId.y) * ${this.workPerThread};\n      let d1 = i32(globalId.x) * 4;\n\n      let dyCorner = vec2<i32>(r, c) - uniforms.pads;\n\n      // Convolve dy(?, ?, d2) with w(:, :, d1, d2) to compute dx(xR, xC, d1).\n      // ? = to be determined. : = across all values in that axis.\n      var dotProd: array<vec4<f32>, ${this.workPerThread}>;\n      for (var i = 0; i < ${this.workPerThread}; i++) {\n        dotProd[i] = vec4<f32>(0.0);\n      }\n      for (var wR = 0; wR < uniforms.filterDims.x; wR = wR + 1) {\n        let dyR = f32(dyCorner.x + wR) / f32(uniforms.strides.x);\n        let wRPerm = uniforms.filterDims.x - 1 - wR;\n        if (dyR < 0.0 || dyR >= f32(uniforms.outBackprop[1]) ||\n            fract(dyR) > 0.0) {\n          continue;\n        }\n        let idyR = i32(dyR);\n\n        for (var wC = 0; wC < uniforms.filterDims.y; wC = wC + 1) {\n          let dyC = f32(dyCorner.y + wC) / f32(uniforms.strides.y);\n          let dyC2 = f32(dyCorner.y + 1 + wC) / f32(uniforms.strides.y);\n          let wCPerm = uniforms.filterDims.y - 1 - wC;\n          var bDyCVal = true;\n          var bDyCVal2 = true;\n          if (dyC < 0.0 || dyC >= f32(uniforms.outBackprop[2]) ||\n              fract(dyC) > 0.0) {\n            bDyCVal = false;\n          }\n          if (dyC2 < 0.0 || dyC2 >= f32(uniforms.outBackprop[2]) ||\n              fract(dyC2) > 0.0) {\n            bDyCVal2 = false;\n          }\n\n          let idyC = i32(dyC);\n          let idyC2 = i32(dyC2);\n          if (bDyCVal && bDyCVal2) {\n            let d2Length = uniforms.outBackprop[3];\n            for (var d2 = 0; d2 < d2Length; d2 = d2 + 4) {\n              let wValue0 = getW(wRPerm, wCPerm, d1, d2);\n              let wValue1 = getW(wRPerm, wCPerm, d1 + 1, d2);\n              let wValue2 = getW(wRPerm, wCPerm, d1 + 2, d2);\n              let wValue3 = getW(wRPerm, wCPerm, d1 + 3, d2);\n              var xValue =  getDy(batch, idyR, idyC, d2);\n              let tmpval = vec4<f32>(dot(xValue, wValue0),\n                                     dot(xValue, wValue1),\n                                     dot(xValue, wValue2),\n                                     dot(xValue, wValue3));\n              dotProd[0] = dotProd[0] + tmpval;\n              xValue = getDy(batch, idyR, idyC2, d2);\n              dotProd[1] = dotProd[1] + vec4<f32>(dot(xValue, wValue0),\n                                                  dot(xValue, wValue1),\n                                                  dot(xValue, wValue2),\n                                                  dot(xValue, wValue3));\n            }\n          } else if (bDyCVal) {\n            let d2Length = uniforms.outBackprop[3];\n            for (var d2 = 0; d2 < d2Length; d2 = d2 + 4) {\n              let wValue0 = getW(wRPerm, wCPerm, d1, d2);\n              let wValue1 = getW(wRPerm, wCPerm, d1 + 1, d2);\n              let wValue2 = getW(wRPerm, wCPerm, d1 + 2, d2);\n              let wValue3 = getW(wRPerm, wCPerm, d1 + 3, d2);\n              var xValue =  getDy(batch, idyR, idyC, d2);\n              let tmpval = vec4<f32>(dot(xValue, wValue0),\n                                     dot(xValue, wValue1),\n                                     dot(xValue, wValue2),\n                                     dot(xValue, wValue3));\n              dotProd[0] = dotProd[0] + tmpval;\n            }\n          } else if (bDyCVal2) {\n            let d2Length = uniforms.outBackprop[3];\n            for (var d2 = 0; d2 < d2Length; d2 = d2 + 4) {\n              let wValue0 = getW(wRPerm, wCPerm, d1, d2);\n              let wValue1 = getW(wRPerm, wCPerm, d1 + 1, d2);\n              let wValue2 = getW(wRPerm, wCPerm, d1 + 2, d2);\n              let wValue3 = getW(wRPerm, wCPerm, d1 + 3, d2);\n              var xValue =  getDy(batch, idyR, idyC2, d2);\n              let tmpval = vec4<f32>(dot(xValue, wValue0),\n                                     dot(xValue, wValue1),\n                                     dot(xValue, wValue2),\n                                     dot(xValue, wValue3));\n              dotProd[1] = dotProd[1] + tmpval;\n            }\n          }\n        }\n      }\n\n      for (var i = 0; i < ${this.workPerThread}; i = i + 1) {\n        let coords = vec4<i32>(batch, r, c + i, d1);\n        if (coordsInBounds4D(coords, uniforms.outShape)) {\n          setOutputAtCoords(coords[0], coords[1], coords[2], coords[3], dotProd[i]);\n        }\n      }\n    }\n    `;return this.isVec4?`\n    ${u}\n    `:`\n    ${(0,t.getMainHeaderString)('index')} {\n      if(index < uniforms.size) {\n        let coords = getCoordsFromIndex(index);\n        let batch = coords[0];\n        let d1 = coords[${s}];\n\n        let dyCorner = vec2<i32>(coords[${n}], coords[${o}]) - uniforms.pads;\n        let dyRCorner = dyCorner.x;\n        let dyCCorner = dyCorner.y;\n\n        // Convolve dy(?, ?, d2) with w(:, :, d1, d2) to compute dx(xR, xC, d1).\n        // ? = to be determined. : = across all values in that axis.\n        var dotProd = 0.0;\n        for (var wR = 0; wR < uniforms.filterDims.x; wR = wR + 1) {\n          let dyR = (f32(dyRCorner) + f32(wR)) / f32(uniforms.strides.x);\n          let wRPerm = uniforms.filterDims.x - 1 - wR;\n          if (dyR < 0.0 || dyR >= f32(uniforms.outBackprop[1]) || fract(dyR) > 0.0 ||\n              wRPerm < 0) {\n            continue;\n          }\n          let idyR = i32(dyR);\n\n          for (var wC = 0; wC < uniforms.filterDims.y; wC = wC + 1) {\n            let dyC = (f32(dyCCorner) + f32(wC)) / f32(uniforms.strides.y);\n            let wCPerm = uniforms.filterDims.y - 1 - wC;\n            if (dyC < 0.0 || dyC >= f32(uniforms.outBackprop[2]) ||\n                fract(dyC) > 0.0 || wCPerm < 0) {\n              continue;\n            }\n            let idyC = i32(dyC);\n\n            for (var d2 = 0; d2 < uniforms.outBackprop[3]; d2 = d2 + 1) {\n              let xValue = ${this.isChannelsLast?'getDy(batch, idyR, idyC, d2)':'getDy(batch, d2, idyR, idyC)'};\n              let wValue = getW(wRPerm, wCPerm, d1, d2);\n              dotProd = dotProd + xValue * wValue;\n            }\n          }\n        }\n        setOutputAtIndex(index, dotProd);\n      }\n    }\n  `}};e.Conv2DDerFilterProgram=class{constructor(t){this.variableNames=['x','dy'],this.uniforms='pads : vec2<i32>, strides : vec2<i32>, batchSize : i32, outHeight : i32, outWidth : i32, inHeight : i32, inWidth : i32,',this.workgroupSize=[64,1,1],this.size=!0,this.outputShape=t.filterShape,this.dispatchLayout=(0,n.flatDispatchLayout)(this.outputShape),this.dispatch=(0,n.computeDispatch)(this.dispatchLayout,this.outputShape,this.workgroupSize),this.isChannelsLast='channelsLast'===t.dataFormat,this.shaderKey=`conv2DDerFilter_${this.isChannelsLast}`}getUserCode(){return`\n    ${(0,t.getMainHeaderString)('index')} {\n      if(index < uniforms.size) {\n        let coords = getCoordsFromIndex(index);\n        let wR = coords[0];\n        let wC = coords[1];\n        let d1 = coords[2];\n        let d2 = coords[3];\n\n        // Convolve x(?, ?, d1) with dy(:, :, d2) to get dw(wR, wC, d1, d2).\n        // ? = to be determined. : = across all values in that axis.\n        var dotProd = 0.0;\n        for (var b = 0; b < uniforms.batchSize; b = b + 1) {\n          for (var yR = 0; yR < uniforms.outHeight; yR = yR + 1) {\n            let xR = wR + yR * uniforms.strides[0] - uniforms.pads[0];\n            if (xR < 0 || xR >= uniforms.inHeight) {\n              continue;\n            }\n\n            for (var yC = 0; yC < uniforms.outWidth; yC = yC + 1) {\n              let xC = wC + yC * uniforms.strides[1] - uniforms.pads[1];\n\n              if (xC < 0 || xC >= uniforms.inWidth) {\n                continue;\n              }\n\n              if (${this.isChannelsLast}) {\n                let dyValue = getDy(b, yR, yC, d2);\n                let xValue = getX(b, xR, xC, d1);\n                dotProd = dotProd + xValue * dyValue;\n              } else {\n                let dyValue = getDy(b, d2, yR, yC);\n                let xValue = getX(b, d1, xR, xC);\n                dotProd = dotProd + xValue * dyValue;\n              }\n            }\n          }\n        }\n        setOutputAtIndex(index, dotProd);\n      }\n    }\n  `}};e.Conv3DDerFilterProgram=class{constructor(t){this.variableNames=['x','dy'],this.uniforms="pads : vec3<i32>, strides : vec3<i32>, batchSize : i32, outDepth : i32,\n       outHeight : i32, outWidth : i32, inDepth : i32, inHeight : i32, inWidth : i32,",this.workgroupSize=[64,1,1],this.size=!0,this.outputShape=t.filterShape,this.dispatchLayout=(0,n.flatDispatchLayout)(this.outputShape),this.dispatch=(0,n.computeDispatch)(this.dispatchLayout,this.outputShape,this.workgroupSize),this.shaderKey="conv3DDerFilter"}getUserCode(){return`\n    ${(0,t.getMainHeaderString)('index')} {\n      if(index < uniforms.size) {\n        let coords = getCoordsFromIndex(index);\n        let wF = coords.x;\n        let wR = coords.y;\n        let wC = coords.z;\n        let d1 = coords.w;\n        let d2 = coords.u;\n\n        var dotProd = 0.0;\n        for (var b = 0; b < uniforms.batchSize; b++) {\n          for (var yF = 0; yF < uniforms.outDepth; yF++) {\n            let xF = wF + yF * uniforms.strides[0] - uniforms.pads[0];\n            if (xF < 0 || xF >= uniforms.inDepth) {\n              continue;\n            }\n\n            for (var yR = 0; yR < uniforms.outHeight; yR++) {\n              let xR = wR + yR * uniforms.strides[1] - uniforms.pads[1];\n              if (xR < 0 || xR >= uniforms.inHeight) {\n                continue;\n              }\n\n              for (var yC = 0; yC < uniforms.outWidth; yC++) {\n                let xC = wC + yC * uniforms.strides[2] - uniforms.pads[2];\n                if (xC < 0 || xC >= uniforms.inWidth) {\n                  continue;\n                }\n\n                let dyValue = getDy(b, yF, yR, yC, d2);\n                let xValue = getX(b, xF, xR, xC, d1);\n                dotProd += xValue * dyValue;\n              }\n            }\n          }\n        }\n        setOutputAtIndex(index, dotProd);\n      }\n    }\n  `}};e.Conv3DDerInputProgram=class{constructor(t){this.variableNames=['dy','W'],this.uniforms="filterDims : vec3<i32>, pads : vec3<i32>, strides : vec3<i32>,\n      outDepth : i32, outHeight : i32, outWidth : i32, outChannels : i32,",this.workgroupSize=[64,1,1],this.size=!0,this.outputShape=t.inShape,this.dispatchLayout=(0,n.flatDispatchLayout)(this.outputShape),this.dispatch=(0,n.computeDispatch)(this.dispatchLayout,this.outputShape,this.workgroupSize),this.shaderKey="conv3DDerInput"}getUserCode(){return`\n    ${(0,t.getMainHeaderString)('index')} {\n      if(index < uniforms.size) {\n        let coords = getCoordsFromIndex(index);\n        let batch = coords.x;\n        let d1 = coords.u;\n\n        let dyCorner = vec3<i32>(coords.y, coords.z, coords.w) - uniforms.pads;\n        let dyFCorner = dyCorner.x;\n        let dyRCorner = dyCorner.y;\n        let dyCCorner = dyCorner.z;\n\n        var dotProd = 0.0;\n        for (var wF = 0; wF < uniforms.filterDims[0]; wF++) {\n          let dyF = f32(dyFCorner + wF) / f32(uniforms.strides[0]);\n          if (dyF < 0.0 || dyF >= f32(uniforms.outDepth) || fract(dyF) > 0.0) {\n            continue;\n          }\n          let idyF = i32(dyF);\n\n          let wFPerm = uniforms.filterDims[0] - 1 - wF;\n\n          for (var wR = 0; wR < uniforms.filterDims[1]; wR++) {\n            let dyR = f32(dyRCorner + wR) / f32(uniforms.strides[1]);\n\n            if (dyR < 0.0 || dyR >= f32(uniforms.outHeight) || fract(dyR) > 0.0) {\n              continue;\n            }\n            let idyR = i32(dyR);\n\n            let wRPerm = uniforms.filterDims[1] - 1 - wR;\n\n            for (var wC = 0; wC < uniforms.filterDims[2]; wC++) {\n              let dyC = f32(dyCCorner + wC) / f32(uniforms.strides[2]);\n\n              if (dyC < 0.0 || dyC >= f32(uniforms.outWidth) || fract(dyC) > 0.0) {\n                continue;\n              }\n              let idyC = i32(dyC);\n\n              let wCPerm = uniforms.filterDims[2] - 1 - wC;\n\n              for (var d2 = 0; d2 < uniforms.outChannels; d2++) {\n                let xValue = getDy(batch, idyF, idyR, idyC, d2);\n                let wValue = getW(wFPerm, wRPerm, wCPerm, d1, d2);\n                dotProd += xValue * wValue;\n              }\n            }\n          }\n        }\n        setOutputAtIndex(index, dotProd);\n      }\n    }\n  `}}},2500,[2417,2419]);
__d(function(g,r,i,a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.conv2DBackpropInput=p,e.conv2DBackpropInputConfig=void 0;var t=r(d[0]),n=r(d[1]),o=r(d[2]);
/**
   * @license
   * Copyright 2021 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   */
function p(p){const{inputs:u,backend:l,attrs:c}=p,{dy:h,filter:f}=u,{inputShape:s,strides:v,pad:D,dataFormat:C,dimRoundingMode:k}=c,I=t.backend_util.convertConv2DDataFormat(C),_=t.backend_util.computeConv2DInfo(s,f.shape,v,1,D,k,!1,I),y=[{type:'int32',data:[_.filterHeight,_.filterWidth]},{type:'int32',data:[_.filterHeight-1-_.padInfo.top,_.filterWidth-1-_.padInfo.left]},{type:'int32',data:[_.strideHeight,_.strideWidth]},{type:'int32',data:[_.batchSize,_.outHeight,_.outWidth,_.outChannels]}];let b;if((0,t.env)().getBool('WEBGPU_USE_NAIVE_CONV2D_TRANSPOSE')||'channelsLast'!==_.dataFormat)b=new o.Conv2DDerInputProgram(_);else{b=new n.Conv2DDerInputMMProgram(_);const t=_.inHeight*_.inWidth,o=_.inChannels,p=_.filterHeight*_.filterWidth*_.outChannels;y.push({type:'uint32',data:[t]},{type:'uint32',data:[o]},{type:'uint32',data:[p]})}return l.runWebGPUProgram(b,[h,f],'float32',y)}e.conv2DBackpropInputConfig={kernelName:t.Conv2DBackpropInput,backendName:'webgpu',kernelFunc:p}},2501,[1158,2502,2500]);
__d(function(g,r,i,a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.Conv2DDerInputMMProgram=void 0;var o=r(d[0]),n=r(d[1]),t=r(d[2]),s=r(d[3]);
/**
   * @license
   * Copyright 2021 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   */
function u(o=4){const n=`if (row < uniforms.dimAOuter && col < uniforms.dimInner) {\n        ${`\n      let outRow = row / uniforms.outShape[2];\n      let outCol = row % uniforms.outShape[2];\n\n      let WRow = col / (uniforms.filterDims[1] * uniforms.outBackprop[3]);\n      let WCol = col / uniforms.outBackprop[3] % uniforms.filterDims[1];\n      let xR = f32(outRow - uniforms.pads[0] + WRow) / f32(uniforms.strides[0]);\n      let xC = f32(outCol - uniforms.pads[1] + WCol) / f32(uniforms.strides[1]);\n      if (xR < 0.0 || xR >= f32(uniforms.outBackprop[1]) || fract(xR) > 0.0) {\n        return ${(0,t.typeSnippet)(o)}(0.0);\n      }\n      if (xC < 0.0 || xC >= f32(uniforms.outBackprop[2]) || fract(xC) > 0.0) {\n        return ${(0,t.typeSnippet)(o)}(0.0);\n      }\n      let coord = vec4<i32>(\n          batch,\n          i32(xR),\n          i32(xC),\n          col % uniforms.outBackprop[3]);\n      return x[getIndexFromCoords4D(coord, uniforms.xShape)/${o}];`}\n      }\n      return ${(0,t.typeSnippet)(o)}(0.0);`;return`\n  fn mm_readA(batch: i32, row : i32, col : i32) -> ${(0,t.typeSnippet)(o)} {\n    ${n}\n  }\n\n  fn mm_readB(batch: i32, row : i32, col : i32) -> ${(0,t.typeSnippet)(o)} {\n    let coordX = uniforms.filterDims.x - 1 -\n        row / (uniforms.filterDims[1] * uniforms.outBackprop[3]);\n    let coordY = uniforms.filterDims.y - 1 -\n        (row / uniforms.outBackprop[3]) % uniforms.filterDims[1];\n    if (row < uniforms.dimInner && col < uniforms.dimBOuter &&\n        coordX >= 0 && coordY >= 0) {\n      let rowInner = row % uniforms.outBackprop[3];\n      let coord = vec4<i32>(coordX, coordY, col, rowInner);\n      ${(o=>{switch(o){case 1:return'return W[getIndexFromCoords4D(coord, uniforms.wShape)];';case 4:return"\n            let coord1 = vec4<i32>(coordX, coordY, col + 1, rowInner);\n            let coord2 = vec4<i32>(coordX, coordY, col + 2, rowInner);\n            let coord3 = vec4<i32>(coordX, coordY, col + 3, rowInner);\n            let v0 = W[getIndexFromCoords4D(coord, uniforms.wShape)];\n            let v1 = W[getIndexFromCoords4D(coord1, uniforms.wShape)];\n            let v2 = W[getIndexFromCoords4D(coord2, uniforms.wShape)];\n            let v3 = W[getIndexFromCoords4D(coord3, uniforms.wShape)];\n            return vec4<f32>(v0, v1, v2, v3);\n            ";default:throw new Error(`innerElementSize ${o} is not supported.`)}})(o)}\n    }\n    return ${(0,t.typeSnippet)(o)}(0.0);\n  }\n\n  fn mm_write(batch: i32, row : i32, col : i32, valueInput : ${(0,t.typeSnippet)(o)}) {\n    if (row < uniforms.dimAOuter && col < uniforms.dimBOuter) {\n      var value = valueInput;\n      let outCoord = vec4<i32>(\n          batch,\n          row / uniforms.outShape[2],\n          row % uniforms.outShape[2],\n          col);\n      result[getIndexFromCoords4D(outCoord, uniforms.outShape)/${o}] = value;\n    }\n  }`}e.Conv2DDerInputMMProgram=class{constructor(n){this.variableNames=['x','W'],this.uniforms='filterDims : vec2<i32>, pads : vec2<i32>, strides : vec2<i32>, outBackprop : vec4<i32>, dimAOuter : i32, dimBOuter : i32, dimInner : i32,',this.outputShape=n.inShape,o.util.assert('channelsLast'===n.dataFormat,()=>'TODO: NCHW is unimplemented'),this.isVec4=n.inChannels%4==0&&n.outChannels%4==0,this.dispatchLayout={x:[3],y:[1,2],z:[0]},this.workgroupSize=(0,s.computeWorkgroupSizeForConv2d)(this.dispatchLayout,this.outputShape,this.isVec4),this.elementsPerThread=(0,s.computeWorkPerThreadForConv2d)(this.dispatchLayout,this.outputShape,this.isVec4),this.dispatch=(0,s.computeDispatch)(this.dispatchLayout,this.outputShape,this.workgroupSize,this.elementsPerThread),this.isVec4&&(this.outputComponent=4,this.variableComponents=[4,1]),this.shaderKey=`conv2DDerInputMM_${this.isVec4}_${this.elementsPerThread}`}getUserCode(){const o=this.isVec4?(0,n.makeMatMulPackedVec4Source)(this.elementsPerThread,this.workgroupSize):(0,n.makeMatMulPackedSource)(this.elementsPerThread,this.workgroupSize);return`\n    ${u(this.isVec4?4:1)}\n    ${o}\n    `}}},2502,[1158,2424,2417,2419]);
__d(function(g,r,i,a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.conv3D=o,e.conv3DConfig=void 0;var t=r(d[0]),n=r(d[1]);
/**
   * @license
   * Copyright 2023 Google LLC.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   */
function o(o){const{inputs:p,backend:f,attrs:l}=o,{x:c,filter:s}=p,{strides:u,pad:h,dilations:v}=l,D=t.backend_util.computeConv3DInfo(c.shape,s.shape,u,v,h),y=[D.padInfo.front,D.padInfo.top,D.padInfo.left],b=[{type:'int32',data:[D.filterDepth,D.filterHeight,D.filterWidth]},{type:'int32',data:[...y]},{type:'int32',data:[D.strideDepth,D.strideHeight,D.strideWidth]},{type:'int32',data:[D.dilationDepth,D.dilationHeight,D.dilationWidth]}],k=new n.Conv3DNaiveProgram(D),C=(0,t.upcastType)(c.dtype,s.dtype);return f.runWebGPUProgram(k,[c,s],C,b)}e.conv3DConfig={kernelName:t.Conv3D,backendName:'webgpu',kernelFunc:o}},2503,[1158,2504]);
__d(function(g,r,i,a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.Conv3DNaiveProgram=void 0;var t=r(d[0]),n=r(d[1]);e.Conv3DNaiveProgram=
/**
   * @license
   * Copyright 2023 Google LLC.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   */
class{constructor(t){this.variableNames=['x','W'],this.uniforms='filterDims: vec3<i32>, pads: vec3<i32>, strides: vec3<i32>, dilations: vec3<i32>,',this.workgroupSize=[64,1,1],this.size=!0,this.outputShape=t.outShape,this.dispatchLayout=(0,n.flatDispatchLayout)(this.outputShape),this.dispatch=(0,n.computeDispatch)(this.dispatchLayout,this.outputShape,this.workgroupSize),this.shaderKey="conv3dnaive"}getUserCode(){return`\n    ${(0,t.getMainHeaderString)('index')} {\n      if (index < uniforms.size) {\n        let coords = getOutputCoords();\n        let batch = coords.x;\n        let d2 = coords.u;\n\n        let xFRCCorner = vec3<i32>(coords.y, coords.z, coords.w) * uniforms.strides - uniforms.pads;\n        let xFCorner = xFRCCorner.x;\n        let xRCorner = xFRCCorner.y;\n        let xCCorner = xFRCCorner.z;\n\n        let inputDepthNearestVec4 = (uniforms.xShape.u / 4) * 4;\n        let inputDepthVec4Remainder = uniforms.xShape.u % 4;\n\n        var dotProd = 0.0;\n        for (var wF = 0; wF < uniforms.filterDims[0]; wF++) {\n          let xF = xFCorner + wF * uniforms.dilations[0];\n          if (xF < 0 || xF >= uniforms.xShape.y) {\n            continue;\n          }\n\n          for (var wR = 0; wR < uniforms.filterDims[1]; wR++) {\n            let xR = xRCorner + wR * uniforms.dilations[1];\n            if (xR < 0 || xR >= uniforms.xShape.z) {\n              continue;\n            }\n\n            for (var wC = 0; wC < uniforms.filterDims[2]; wC++) {\n              let xC = xCCorner + wC * uniforms.dilations[2];\n              if (xC < 0 || xC >= uniforms.xShape.w) {\n                continue;\n              }\n\n              for (var d1 = 0; d1 < inputDepthNearestVec4; d1 += 4) {\n                let xValues = vec4<f32>(\n                  getX(batch, xF, xR, xC, d1),\n                  getX(batch, xF, xR, xC, d1 + 1),\n                  getX(batch, xF, xR, xC, d1 + 2),\n                  getX(batch, xF, xR, xC, d1 + 3)\n                );\n                let wValues = vec4<f32>(\n                  getW(wF, wR, wC, d1, d2),\n                  getW(wF, wR, wC, d1 + 1, d2),\n                  getW(wF, wR, wC, d1 + 2, d2),\n                  getW(wF, wR, wC, d1 + 3, d2)\n                );\n\n                dotProd += dot(xValues, wValues);\n              }\n\n              if (inputDepthVec4Remainder == 1) {\n                dotProd += getX(batch, xF, xR, xC, inputDepthNearestVec4) *\n                  getW(wF, wR, wC, inputDepthNearestVec4, d2);\n              } else if (inputDepthVec4Remainder == 2) {\n                let xValues = vec2<f32>(\n                  getX(batch, xF, xR, xC, inputDepthNearestVec4),\n                  getX(batch, xF, xR, xC, inputDepthNearestVec4 + 1)\n                );\n                let wValues = vec2<f32>(\n                  getW(wF, wR, wC, inputDepthNearestVec4, d2),\n                  getW(wF, wR, wC, inputDepthNearestVec4 + 1, d2)\n                );\n                dotProd += dot(xValues, wValues);\n              } else if (inputDepthVec4Remainder == 3) {\n                let xValues = vec3<f32>(\n                  getX(batch, xF, xR, xC, inputDepthNearestVec4),\n                  getX(batch, xF, xR, xC, inputDepthNearestVec4 + 1),\n                  getX(batch, xF, xR, xC, inputDepthNearestVec4 + 2)\n                );\n                let wValues = vec3<f32>(\n                  getW(wF, wR, wC, inputDepthNearestVec4, d2),\n                  getW(wF, wR, wC, inputDepthNearestVec4 + 1, d2),\n                  getW(wF, wR, wC, inputDepthNearestVec4 + 2, d2)\n                );\n                dotProd += dot(xValues, wValues);\n              }\n            }\n          }\n        }\n        setOutputAtIndex(index, dotProd);\n      }\n    }`}}},2504,[2417,2419]);
__d(function(g,r,i,a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.conv3DBackpropFilterV2=p,e.conv3DBackpropFilterV2Config=void 0;var t=r(d[0]),n=r(d[1]);
/**
   * @license
   * Copyright 2023 Google LLC.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   */
function p(p){const{inputs:o,backend:c,attrs:u}=p,{x:f,dy:h}=o,{strides:l,pad:y,filterShape:s}=u,D=t.backend_util.computeConv3DInfo(f.shape,s,l,1,y),k=new n.Conv3DDerFilterProgram(D),v=[{type:'int32',data:[D.padInfo.front,D.padInfo.top,D.padInfo.left]},{type:'int32',data:[D.strideDepth,D.strideHeight,D.strideWidth]},{type:'int32',data:[D.batchSize]},{type:'int32',data:[D.outDepth]},{type:'int32',data:[D.outHeight]},{type:'int32',data:[D.outWidth]},{type:'int32',data:[D.inDepth]},{type:'int32',data:[D.inHeight]},{type:'int32',data:[D.inWidth]}];return c.runWebGPUProgram(k,[f,h],h.dtype,v)}e.conv3DBackpropFilterV2Config={kernelName:t.Conv3DBackpropFilterV2,backendName:'webgpu',kernelFunc:p}},2505,[1158,2500]);
__d(function(g,r,i,a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.conv3DBackpropInputV2=p,e.conv3DBackpropInputV2Config=void 0;var t=r(d[0]),n=r(d[1]);
/**
   * @license
   * Copyright 2023 Google LLC.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   */
function p(p){const{inputs:o,backend:u,attrs:f}=p,{dy:c,filter:h}=o,{strides:l,pad:s,inputShape:D}=f,y=t.backend_util.computeConv3DInfo(D,h.shape,l,1,s),k=new n.Conv3DDerInputProgram(y),v=[{type:'int32',data:[y.filterDepth,y.filterHeight,y.filterWidth]},{type:'int32',data:[y.filterDepth-1-y.padInfo.front,y.filterHeight-1-y.padInfo.top,y.filterWidth-1-y.padInfo.left]},{type:'int32',data:[y.strideDepth,y.strideHeight,y.strideWidth]},{type:'int32',data:[y.outDepth]},{type:'int32',data:[y.outHeight]},{type:'int32',data:[y.outWidth]},{type:'int32',data:[y.outChannels]}];return u.runWebGPUProgram(k,[c,h],c.dtype,v)}e.conv3DBackpropInputV2Config={kernelName:t.Conv3DBackpropInputV2,backendName:'webgpu',kernelFunc:p}},2506,[1158,2500]);
__d(function(g,r,i,a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.cosConfig=e.cos=void 0;var n=r(d[0]),o=r(d[1]),c=r(d[2]);
/**
   * @license
   * Copyright 2021 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   */
const s=e.cos=(0,o.unaryKernelFunc)({opType:c.UnaryOpType.COS});e.cosConfig={kernelName:n.Cos,backendName:'webgpu',kernelFunc:s}},2507,[1158,2435,2427]);
__d(function(g,r,i,a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.coshConfig=e.cosh=void 0;var n=r(d[0]),o=r(d[1]),c=r(d[2]);
/**
   * @license
   * Copyright 2021 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   */
const s=e.cosh=(0,o.unaryKernelFunc)({opType:c.UnaryOpType.COSH});e.coshConfig={kernelName:n.Cosh,backendName:'webgpu',kernelFunc:s}},2508,[1158,2435,2427]);
__d(function(g,r,i,a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.cropAndResizeConfig=e.cropAndResize=void 0;var n=r(d[0]),o=r(d[1]);
/**
   * @license
   * Copyright 2021 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   */
const t=n=>{const{inputs:t,backend:p,attrs:s}=n,{image:c,boxes:u,boxInd:l}=t,{cropSize:b,method:z,extrapolationValue:f}=s,A=new o.CropAndResizeProgram(c.shape[3],u.shape,b,z),R=[{type:'float32',data:[f]}];return p.runWebGPUProgram(A,[c,u,l],'float32',R)};e.cropAndResize=t;e.cropAndResizeConfig={kernelName:n.CropAndResize,backendName:'webgpu',kernelFunc:t}},2509,[1158,2510]);
__d(function(g,r,i,a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.CropAndResizeProgram=void 0;var t=r(d[0]),o=r(d[1]);e.CropAndResizeProgram=
/**
   * @license
   * Copyright 2019 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   */
class{constructor(t,n,s,h){this.variableNames=['Image','Boxes','BoxInd'],this.uniforms='extrapolationValue : f32,',this.workgroupSize=[64,1,1],this.size=!0;const[u]=n;this.outputShape=[u,s[0],s[1],t],this.dispatchLayout=(0,o.flatDispatchLayout)(this.outputShape),this.dispatch=(0,o.computeDispatch)(this.dispatchLayout,this.outputShape,this.workgroupSize),this.methodId='bilinear'===h?1:0,this.cropHeightBiggerThan1=this.outputShape[1]>1,this.cropWidthBiggerThan1=this.outputShape[2]>1,this.shaderKey=`cropAndResize_${this.methodId}_${this.cropHeightBiggerThan1}_${this.cropWidthBiggerThan1}`}getUserCode(){const[o,n]=["f32(uniforms.imageShape[1] - 1)","f32(uniforms.imageShape[2] - 1)"],[s,h,u]=this.cropHeightBiggerThan1?[`(${o} / f32(uniforms.outShape[1] - 1))`,'(y2-y1) * height_ratio',`y1*${o} + f32(y)*(height_scale)`]:['0.0','0.0',`0.5 * (y1+y2) * ${o}`],[c,l,p]=this.cropWidthBiggerThan1?[`(${n} / f32(uniforms.outShape[2] - 1))`,'(x2-x1) * width_ratio',`x1*${n} + f32(x)*(width_scale)`]:['0.0','0.0',`0.5 * (x1+x2) * ${n}`];return`\n    ${(0,t.getMainHeaderString)('index')} {\n      if (index < uniforms.size) {\n        let coords = getCoordsFromIndex(index);\n        let height_ratio = f32(${s});\n        let width_ratio = f32(${c});\n        let b = coords[0];\n        let y = coords[1];\n        let x = coords[2];\n        let d = coords[3];\n        // get box vals\n        let y1 = getBoxes(b, 0);\n        let x1 = getBoxes(b, 1);\n        let y2 = getBoxes(b, 2);\n        let x2 = getBoxes(b, 3);\n        // get image in batch index\n        let bInd = i32(round(getBoxInd(b)));\n        if(bInd < 0 || bInd >= uniforms.outShape[0]) {\n          return;\n        }\n        let height_scale = ${h};\n        let width_scale = ${l};\n        let in_y = ${u};\n        if( in_y < 0.0 || in_y > ${o} ) {\n          setOutputAtIndex(index, uniforms.extrapolationValue);\n          return;\n        }\n        let in_x = ${p};\n        if( in_x < 0.0 || in_x > ${n} ) {\n          setOutputAtIndex(index, uniforms.extrapolationValue);\n          return;\n        }\n        let sourceFracIndexCR = vec2<f32>(in_x,in_y);\n        if(${this.methodId} == 1) {\n          // Compute the four integer indices.\n          let sourceFloorCR = vec2<i32>(sourceFracIndexCR);\n          let sourceCeilCR = vec2<i32>(ceil(sourceFracIndexCR));\n          let topLeft = getImage(bInd, sourceFloorCR.y, sourceFloorCR.x, d);\n          let bottomLeft = getImage(bInd, sourceCeilCR.y, sourceFloorCR.x, d);\n          let topRight = getImage(bInd, sourceFloorCR.y, sourceCeilCR.x, d);\n          let bottomRight = getImage(bInd, sourceCeilCR.y, sourceCeilCR.x, d);\n          let fracCR = sourceFracIndexCR - vec2<f32>(sourceFloorCR);\n          let top = topLeft + (topRight - topLeft) * fracCR.x;\n          let bottom = bottomLeft + (bottomRight - bottomLeft) * fracCR.x;\n          let newValue = top + (bottom - top) * fracCR.y;\n          setOutputAtIndex(index, newValue);\n        } else {\n          // Compute the coordinators of nearest neighbor point.\n          let sourceNearestCR = vec2<i32>(floor(\n            sourceFracIndexCR + vec2<f32>(0.5,0.5)));\n          let newValue = getImage(\n            bInd, sourceNearestCR.y, sourceNearestCR.x, d);\n          setOutputAtIndex(index, newValue);\n        }\n      }\n    }\n    `}}},2510,[2417,2419]);
__d(function(g,r,i,a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.cumprod=c,e.cumprodConfig=void 0;var n=r(d[0]),u=r(d[1]),o=r(d[2]);
/**
   * @license
   * Copyright 2022 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   */
function c(n){const{inputs:c,backend:p,attrs:t}=n,{x:s}=c,{axis:l,exclusive:f,reverse:v}=t;return(0,o.cumImpl)(u.CumOpType.Prod,s,p,l,f,v)}e.cumprodConfig={kernelName:n.Cumprod,backendName:'webgpu',kernelFunc:c}},2511,[1158,2512,2513]);
__d(function(g,r,i,a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.CumProgram=e.CumOpType=void 0;var t,s=r(d[0]),o=r(d[1]);!(function(t){t.Prod="*",t.Sum="+"})(t||(e.CumOpType=t={}));function n(t,s,o){if(1===t)return`${s}`;if(2===t)return`${s}.x, ${s}.y`;if(3===t)return`${s}.x, ${s}.y, ${s}.z`;if(4===t)return`${s}.x, ${s}.y, ${s}.z, ${s}.w`;throw Error(`Cumulative ${o} for rank ${t} is not yet supported`)}function u(t,s,o){if(1===t)return`${s}`;if(2===t)return`${s}.y`;if(3===t)return`${s}.z`;if(4===t)return`${s}.w`;throw Error(`Cumulative ${o} for rank ${t} is not yet supported`)}e.CumProgram=class{constructor(t,s,n,u){this.variableNames=['x'],this.uniforms='index : f32,',this.size=!0,this.workgroupSize=[128,1,1],this.outputShape=s,this.dispatchLayout=(0,o.flatDispatchLayout)(this.outputShape),this.dispatch=(0,o.computeDispatch)(this.dispatchLayout,this.outputShape,this.workgroupSize),this.exclusive=n,this.reverse=u,this.op=t,this.shaderKey=`cum_${this.op}_${this.exclusive}_${this.reverse}`}getUserCode(){const o=this.outputShape.length,h=this.op===t.Prod?'1.0':'0.0',p=this.exclusive?h:`getX(${n(o,'coords',this.op)})`,$=this.outputShape[this.outputShape.length-1];let c='',f='';return this.exclusive?(c=this.reverse?"end != "+($-1):'end != 0',f=this.reverse?'end + 1':'end - 1'):(c=this.reverse?`end + pow2 < ${$}`:'end >= pow2',f=this.reverse?'end + pow2':'end - pow2'),`\n      ${(0,s.getMainHeaderString)('index')} {\n       if (index < uniforms.size) {\n         var coords = getCoordsFromIndex(index);\n\n         let end = ${u(o,'coords',this.op)};\n         var val = ${p};\n         let pow2 = i32(pow(2.0, uniforms.index));\n         if (${c}) {\n           let idx = ${f};\n           ${u(o,'coords',this.op)} = idx;\n           val ${this.op}= getX(${n(o,'coords',this.op)});\n         }\n         setOutputAtIndex(index, val);\n       }\n      }\n    `}}},2512,[2417,2419]);
__d(function(g,r,_i,a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.cumImpl=
/**
   * @license
   * Copyright 2022 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   */
function(i,p,u,c,l,b){const h=p.shape.length,P=t.backend_util.getAxesPermutation([c],h);let f=p;null!=P&&(f=(0,o.transpose)({inputs:{x:p},backend:u,attrs:{perm:P}}));const x=t.backend_util.getInnerMostAxes(1,h)[0];if(x!==h-1)throw new Error(`WebGPU cumprod shader expects an inner-most axis=${p.shape.length-1} but got axis=${c}`);const _=f.shape[x];let k=(0,s.identity)({inputs:{x:f},backend:u});for(let t=0;t<=Math.ceil(Math.log2(_))-1;t++){const s=new n.CumProgram(i,f.shape,!1,b),o=k,p=[{type:'float32',data:[t]}];k=u.runWebGPUProgram(s,[k],k.dtype,p),u.disposeData(o.dataId)}if(l){const t=new n.CumProgram(i,f.shape,l,b),s=k,o=[{type:'float32',data:[0]}];k=u.runWebGPUProgram(t,[k],k.dtype,o),u.disposeData(s.dataId)}if(null!=P){const n=t.backend_util.getUndoAxesPermutation(P),s=(0,o.transpose)({inputs:{x:k},backend:u,attrs:{perm:n}});return u.disposeData(k.dataId),u.disposeData(f.dataId),s}return k};var t=r(d[0]),n=r(d[1]),s=r(d[2]),o=r(d[3])},2513,[1158,2512,2439,2449]);
__d(function(g,r,i,a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.cumsum=s,e.cumsumConfig=void 0;var u=r(d[0]),n=r(d[1]),c=r(d[2]);
/**
   * @license
   * Copyright 2022 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   */
function s(u){const{inputs:s,backend:t,attrs:o}=u,{x:l}=s,{axis:p,exclusive:f,reverse:v}=o;return(0,c.cumImpl)(n.CumOpType.Sum,l,t,p,f,v)}e.cumsumConfig={kernelName:u.Cumsum,backendName:'webgpu',kernelFunc:s}},2514,[1158,2512,2513]);
__d(function(g,r,i,a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.denseBincount=u,e.denseBincountConfig=void 0;var n=r(d[0]),t=r(d[1]),s=r(d[2]);
/**
   * @license
   * Copyright 2022 Google LLC.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   */
function u(u){const{inputs:o,backend:p,attrs:c}=u,{x:h,weights:l}=o,{size:b,binaryOutput:f}=c,k=1===h.shape.length,y=n.util.sizeFromShape(l.shape)>0,B=l.dtype,v=k?[h.shape[0]]:[h.shape[0],h.shape[1]],P=k?[b]:[h.shape[0],b],_=(0,s.fill)({backend:p,attrs:{shape:P,value:0,dtype:B}}),w=new t.BincountProgram(v,y,f),z=[{type:'int32',data:[b]}],C=y?[h,l]:[h];return p.runWebGPUProgram(w,C,B,z,_)}e.denseBincountConfig={kernelName:n.DenseBincount,backendName:'webgpu',kernelFunc:u}},2515,[1158,2477,2431]);
__d(function(g,r,i,a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.depthToSpace=n,e.depthToSpaceConfig=void 0;var p=r(d[0]),t=r(d[1]);
/**
   * @license
   * Copyright 2021 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   */
function n(p){const{inputs:n,backend:o,attrs:c}=p,{x:h}=n,{blockSize:s,dataFormat:u}=c,b=h.shape[0],C=('NHWC'===u?h.shape[1]:h.shape[2])*s,N=('NHWC'===u?h.shape[2]:h.shape[3])*s,S=('NHWC'===u?h.shape[3]:h.shape[1])/(s*s),f='NHWC'===u?[b,C,N,S]:[b,S,C,N],k=[{type:'int32',data:[s]}],l=new t.DepthToSpaceProgram(f,u);return o.runWebGPUProgram(l,[h],h.dtype,k)}e.depthToSpaceConfig={kernelName:p.DepthToSpace,backendName:'webgpu',kernelFunc:n}},2516,[1158,2517]);
__d(function(g,r,i,a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.DepthToSpaceProgram=void 0;var t=r(d[0]),o=r(d[1]);e.DepthToSpaceProgram=
/**
   * @license
   * Copyright 2021 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   */
class{constructor(t,n){this.variableNames=['x'],this.workgroupSize=[64,1,1],this.size=!0,this.uniforms='blockSize : i32,',this.outputShape=t,this.dispatchLayout=(0,o.flatDispatchLayout)(this.outputShape),this.dispatch=(0,o.computeDispatch)(this.dispatchLayout,this.outputShape,this.workgroupSize),this.shaderKey=`depthToSpace_${n}`,this.dataFormat=n}getUserCode(){return`\n      ${(0,t.getMainHeaderString)('index')} {\n        if (index < uniforms.size) {\n          let coords = getCoordsFromIndex(index);\n          let b = coords[0];\n          let h = ${this.getHeightCoordString()};\n          let w = ${this.getWidthCoordString()};\n          let d = ${this.getDepthCoordString()};\n\n          let in_h = h / uniforms.blockSize;\n          let offset_h = h % uniforms.blockSize;\n          let in_w = w / uniforms.blockSize;\n          let offset_w = w % uniforms.blockSize;\n          let offset_d = (offset_h * uniforms.blockSize + offset_w) *\n            ${this.getOutputDepthSize()};\n          let in_d = d + offset_d;\n\n          let rlt = ${this.getInputSamplingString()};\n          setOutputAtIndex(index, rlt);\n        }\n      }`}getHeightCoordString(){return'NHWC'===this.dataFormat?"coords[1]":"coords[2]"}getWidthCoordString(){return'NHWC'===this.dataFormat?"coords[2]":"coords[3]"}getDepthCoordString(){return'NHWC'===this.dataFormat?"coords[3]":"coords[1]"}getOutputDepthSize(){return'NHWC'===this.dataFormat?"uniforms.outShape[3]":"uniforms.outShape[1]"}getInputSamplingString(){return'NHWC'===this.dataFormat?"getX(b, in_h, in_w, in_d)":"getX(b, in_d, in_h, in_w)"}}},2517,[2417,2419]);
__d(function(g,r,i,a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.depthwiseConv2dNative=s,e.depthwiseConv2dNativeConfig=void 0;var t=r(d[0]),n=r(d[1]),o=r(d[2]),h=r(d[3]);
/**
   * @license
   * Copyright 2021 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   */
function s(s){const{inputs:l,backend:p,attrs:u}=s,{x:v,filter:C}=l,{strides:c,pad:f,dataFormat:W,dilations:w,dimRoundingMode:H}=u,D=t.backend_util.convertConv2DDataFormat(W);let y=w;null==y&&(y=[1,1]);const b=t.backend_util.computeConv2DInfo(v.shape,C.shape,c,y,f,H,!0,D),N=[{type:'int32',data:[b.padInfo.top,b.padInfo.left]},{type:'int32',data:[b.inHeight,b.inWidth]}],k='channelsLast'===b.dataFormat;let P;return!k&&b.inHeight>16&&b.inWidth>16&&1===b.strideHeight&&1===b.strideWidth&&1===b.dilationWidth&&1===b.dilationHeight&&b.inChannels===b.outChannels?P=new n.DepthwiseConv2DNCHWSharedProgram(b.outShape,b.filterHeight,b.filterWidth):k&&b.outHeight>4&&b.outWidth>4&&b.strideWidth<=2&&b.inChannels===b.outChannels&&1===b.dilationHeight&&1===b.dilationWidth&&b.inChannels%4==0?(P=new o.DepthwiseConv2DVec4Program(b),N.push({type:'int32',data:[P.virtualWidth]})):(P=new h.DepthwiseConv2DProgram(b),N.push({type:'int32',data:[b.filterHeight]},{type:'int32',data:[b.filterWidth]},{type:'int32',data:[b.strideHeight,b.strideWidth]},{type:'int32',data:[b.dilationHeight,b.dilationWidth]})),p.runWebGPUProgram(P,[v,C],v.dtype,N)}e.depthwiseConv2dNativeConfig={kernelName:t.DepthwiseConv2dNative,backendName:'webgpu',kernelFunc:s}},2518,[1158,2519,2520,2521]);
__d(function(g,r,i,a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.DepthwiseConv2DNCHWSharedProgram=void 0;var t=r(d[0]),o=r(d[1]),n=r(d[2]);e.DepthwiseConv2DNCHWSharedProgram=
/**
   * @license
   * Copyright 2022 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   */
class{constructor(t,o,l,s=!1,h=null,u=!1){this.variableNames=['x','W'],this.uniforms="pads : vec2<i32>, inDims : vec2<i32>,",this.workgroupSize=[16,16,1],this.outputShape=t,this.dispatchLayout={x:[3],y:[2],z:[0,1]},this.dispatch=(0,n.computeDispatch)(this.dispatchLayout,this.outputShape,this.workgroupSize),s&&this.variableNames.push('bias'),u&&this.variableNames.push('preluActivationWeights'),this.addBias=s,this.activation=h,this.hasPreluActivation=u,this.filterHeight=o,this.filterWidth=l,this.shaderKey=`depthwiseNCHW_${this.activation}_${this.filterHeight}_${this.filterWidth}`}getUserCode(){const n=this.filterWidth*this.filterHeight,l=this.workgroupSize[0]*this.workgroupSize[1]*this.workgroupSize[2],s=this.workgroupSize[1]+this.filterHeight-1,h=this.workgroupSize[0]+this.filterWidth-1;return`\n      ${(0,t.activationFnSnippet)(this.activation,this.hasPreluActivation,!1,4)}\n\n      var<workgroup> mm_Asub : array<array<f32, ${h}>, ${s}>;\n      var<workgroup> mm_Bsub : array<array<f32, ${this.filterWidth}>, ${this.filterHeight}>;\n      fn readX(batch : i32, channel : i32, row : i32, col : i32) -> f32 {\n        var value = 0.0;\n        if (row >=0 && row < uniforms.inDims[0] && col >=0 && col < uniforms.inDims[1])\n        {\n          value = getX(batch, channel, row, col);\n        }\n        return value;\n      }\n\n      ${(0,o.getMainHeaderString)()} {\n        let coords = getOutputCoords();\n        let batch = coords[0];\n        let xRCCorner = vec2<i32>(coords.zw) - uniforms.pads;\n        let channelMul = uniforms.wShape[3];\n        let d1 = coords[1] / channelMul;\n        let q = coords[1] % channelMul;\n\n        let inputRowStart = xRCCorner.x;\n        let inputColStart = xRCCorner.y;\n\n        let localRow = i32(localId.y);\n        let localCol = i32(localId.x);\n\n        // Load one tile of X into local memory.\n        for (var inputRow = localRow; inputRow < ${s}; inputRow = inputRow + ${this.workgroupSize[1]}) {\n          for (var inputCol = localCol; inputCol < ${h}; inputCol = inputCol + ${this.workgroupSize[0]}) {\n            let rowOffset = inputRow - localRow;\n            let colOffset = inputCol - localCol;\n            mm_Asub[inputRow][inputCol] = readX(batch, d1, inputRowStart + rowOffset, inputColStart + colOffset);\n          }\n        }\n\n        // Load one tile of W into local memory.\n        var wIndex = i32(localIndex);\n        ${n<l?`if (wIndex < ${n})`:`for(; wIndex < ${n}; wIndex = wIndex + ${l})`}\n\n        {\n          let wRow = wIndex / ${this.filterWidth};\n          let wCol = wIndex % ${this.filterWidth};\n          mm_Bsub[wRow][wCol] = getW(wRow, wCol, d1, q);\n        }\n\n        workgroupBarrier();\n\n        var value = 0.0;\n        for (var wR = 0; wR < ${this.filterHeight}; wR = wR + 1) {\n          for (var wC = 0; wC < ${this.filterWidth}; wC = wC + 1) {\n            let xVal = mm_Asub[localRow + wR][localCol + wC];\n            let wVal = mm_Bsub[wR][wC];\n            value = fma(xVal, wVal, value);\n          }\n        }\n        ${(0,t.biasActivationSnippet)(this.addBias,this.activation)}\n        if (coordsInBounds4D(coords, uniforms.outShape)) {\n          setOutputAtCoords(coords[0], coords[1], coords[2], coords[3], value);\n        }\n      }\n    `}}},2519,[2425,2417,2419]);
__d(function(g,r,i,a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.DepthwiseConv2DVec4Program=void 0;var t=r(d[0]),n=r(d[1]),o=r(d[2]),s=r(d[3]);e.DepthwiseConv2DVec4Program=
/**
   * @license
   * Copyright 2021 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   */
class{constructor(n,o=!1,h=null,c=!1){this.variableNames=['x','W'],this.uniforms='pads : vec2<i32>, inDims : vec2<i32>, virtualWidth : i32,',this.workgroupSize=[64,1,1],this.workPerThread=4,this.outputComponent=4,this.outputShape=n.outShape,this.virtualWidth=Math.ceil(this.outputShape[2]/this.workPerThread)*this.workPerThread;const u=[this.outputShape[0],this.outputShape[1],this.virtualWidth,this.outputShape[3]];this.dispatchLayout=(0,s.flatDispatchLayout)(u),this.dispatch=(0,s.computeDispatch)(this.dispatchLayout,u,this.workgroupSize,[this.outputComponent*this.workPerThread,1,1]),t.util.assert('channelsLast'===n.dataFormat,()=>'TODO: NCHW is unimplemented'),o&&this.variableNames.push('bias'),c&&this.variableNames.push('preluActivationWeights'),this.convInfo=n,this.addBias=o,this.activation=h,this.hasPreluActivation=c,this.shaderKey=`depthwiseVec4_${h}_${this.convInfo.filterHeight}_${this.convInfo.filterWidth}_${this.convInfo.strideHeight}_${this.convInfo.strideWidth}_${this.workPerThread}`}getUserCode(){const t=(this.workPerThread-1)*this.convInfo.strideWidth+this.convInfo.filterWidth,s=this.convInfo.strideHeight,h=this.convInfo.strideWidth;return`\n      ${(0,n.activationFnSnippet)(this.activation,this.hasPreluActivation,!0,4)}\n      fn readX(batch : i32, row : i32, col : i32, channel : i32) -> vec4<f32> {\n        var value = vec4<f32>(0.0);\n        if (col >=0 && col < uniforms.inDims[1]) {\n          value = getX(batch, row, col, channel);\n        }\n        return value;\n      }\n\n      ${(0,o.getMainHeaderString)('index')} {\n        let width0 = uniforms.outShape[3] / ${this.outputComponent};\n        let d1 = (index % width0) * ${this.outputComponent};\n        var index1 = index / width0;\n        let width1 = uniforms.virtualWidth / ${this.workPerThread};\n        let c = (index1 % width1) * ${this.workPerThread};\n        index1 = index1 / width1;\n        let r = index1 % uniforms.outShape[1];\n        let batch = index1 / uniforms.outShape[1];\n\n        let xRCCorner = vec2<i32>(r, c) * vec2<i32>(${s}, ${h}) - uniforms.pads;\n\n        let xRCorner = xRCCorner.x;\n        let xCCorner = xRCCorner.y;\n        var xVals : array<vec4<f32>, ${t}>;\n        var dotProd : array<vec4<f32>, ${this.workPerThread}>;\n        for (var i = 0; i < ${this.workPerThread}; i++) {\n          dotProd[i] = vec4<f32>(0.0);\n        }\n\n        // Use constant instead of uniform can give better performance.\n        for (var wR = 0; wR < ${this.convInfo.filterHeight}; wR = wR + 1) {\n          let xR = xRCorner + wR;\n          if (xR >=0 && xR < uniforms.inDims[0]) {\n            for (var i = 0; i < ${t}; i++) {\n              xVals[i] = readX(batch, xR, xCCorner + i, d1);\n            }\n            for (var wC = 0; wC < ${this.convInfo.filterWidth}; wC = wC + 1) {\n              let wValue = getW(wR, wC, d1, 0);\n              for (var i = 0; i < ${this.workPerThread}; i++) {\n                dotProd[i] = fma(xVals[i * ${h} + wC], wValue, dotProd[i]);\n              }\n            }\n          }\n        }\n\n        for (var i = 0; i < ${this.workPerThread}; i = i + 1) {\n          let coords = vec4<i32>(batch, r, c + i, d1);\n          if (coordsInBounds4D(coords, uniforms.outShape)) {\n            var value = dotProd[i];\n            ${(0,n.biasActivationSnippet)(this.addBias,this.activation)}\n            setOutputAtCoords(coords[0], coords[1], coords[2], coords[3], value);\n          }\n        }\n      }\n    `}}},2520,[1158,2425,2417,2419]);
__d(function(g,r,i,a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.DepthwiseConv2DProgram=void 0;var t=r(d[0]),n=r(d[1]),s=r(d[2]);e.DepthwiseConv2DProgram=
/**
   * @license
   * Copyright 2019 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   */
class{constructor(t,n=!1,o=null,l=!1){this.variableNames=['x','W'],this.uniforms="pads : vec2<i32>, inDims : vec2<i32>, filterHeight : i32,\n      filterWidth : i32, strides : vec2<i32>, dilations : vec2<i32>,",this.workgroupSize=[256,1,1],this.size=!0,this.outputShape=t.outShape,this.dispatchLayout=(0,s.flatDispatchLayout)(this.outputShape),this.dispatch=(0,s.computeDispatch)(this.dispatchLayout,this.outputShape,this.workgroupSize),this.isChannelsLast='channelsLast'===t.dataFormat,n&&this.variableNames.push('bias'),l&&this.variableNames.push('preluActivationWeights'),this.convInfo=t,this.addBias=n,this.activation=o,this.hasPreluActivation=l,this.shaderKey=`depthwise_${this.activation}_${this.isChannelsLast}`}getUserCode(){const s=this.isChannelsLast?'getX(batch, xR, xC, d1);':'getX(batch, d1, xR, xC);';return`\n      ${(0,t.activationFnSnippet)(this.activation,this.hasPreluActivation,!1,4)}\n\n      ${(0,n.getMainHeaderString)('index')} {\n        if (index < uniforms.size) {\n          let coords = getOutputCoords();\n          let batch = coords[0];\n          let xRCCorner = vec2<i32>(coords.${this.isChannelsLast?'yz':'zw'}) * uniforms.strides - uniforms.pads;\n          let d2 = coords[${this.isChannelsLast?3:1}];\n          let channelMul = uniforms.wShape[3];\n          let d1 = d2 / channelMul;\n          let q = d2 % channelMul;\n\n          let inputRowStart = xRCCorner.x;\n          let inputColStart = xRCCorner.y;\n          let inputRowEnd = inputRowStart + uniforms.filterHeight *\n              uniforms.dilations[0];\n          let inputColEnd = inputColStart + uniforms.filterWidth *\n              uniforms.dilations[1];\n\n          // Convolve x(?, ?, d1)|x(d1, ?, ?) with w(:, :, d1, q) to get\n          // y(yR, yC, d2)|y(d2, yR, yC). ? = to be determined. : = across all\n          // values in that axis. x(?, ?, d1) and y(yR, yC, d2) is for NHWC.\n          // x(d1, ?, ?) and y(d2, yR, yC) is for NCHW.\n          var value = 0.0;\n\n          // Extract if checking out of for loop for performance.\n          if (inputRowStart >= 0 && inputColStart >= 0 &&\n            inputRowEnd < uniforms.inDims[0] &&\n                inputColEnd < uniforms.inDims[1]) {\n              for (var wR = 0; wR < uniforms.filterHeight; wR = wR + 1) {\n                let xR = inputRowStart + wR * uniforms.dilations[0];\n\n                for (var wC = 0; wC < uniforms.filterWidth; wC = wC + 1) {\n                  let xC = inputColStart + wC * uniforms.dilations[1];\n\n                  let xVal = ${s};\n                  let wVal = getW(wR, wC, d1, q);\n                  value = value + xVal * wVal;\n                }\n              }\n            } else {\n              for (var wR = 0; wR < uniforms.filterHeight; wR = wR + 1) {\n                let xR = inputRowStart + wR * uniforms.dilations[0];\n\n                if (xR < 0 || xR >= uniforms.inDims[0]) {\n                  continue;\n                }\n\n                for (var wC = 0; wC < uniforms.filterWidth; wC = wC + 1) {\n                  let xC = inputColStart + wC * uniforms.dilations[1];\n\n                  if (xC < 0 || xC >= uniforms.inDims[1]) {\n                    continue;\n                  }\n\n                  let xVal = ${s};\n                  let wVal = getW(wR, wC, d1, q);\n                  value = value + xVal * wVal;\n                }\n              }\n            }\n            ${(0,t.biasActivationSnippet)(this.addBias,this.activation)}\n          setOutputAtCoords(coords[0], coords[1], coords[2], coords[3], value);\n        }\n      }\n    `}}},2521,[2425,2417,2419]);
__d(function(g,r,i,a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.depthwiseConv2dNativeBackpropFilter=o,e.depthwiseConv2dNativeBackpropFilterConfig=void 0;var t=r(d[0]),n=r(d[1]);
/**
   * @license
   * Copyright 2023 Google LLC.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   */
function o(o){const{inputs:p,backend:h,attrs:l}=o,{x:s,dy:u}=p,{strides:c,dilations:f,pad:v,dimRoundingMode:y,filterShape:C}=l,k=t.backend_util.computeConv2DInfo(s.shape,C,c,f,v,y,!0),b=new n.DepthwiseConv2DDerFilterProgram(k),w=[{type:'int32',data:[k.strideHeight,k.strideWidth]},{type:'int32',data:[k.padInfo.top,k.padInfo.left]},{type:'int32',data:[k.filterHeight,k.filterWidth]},{type:'int32',data:[k.outHeight]},{type:'int32',data:[k.outWidth]},{type:'int32',data:[k.inHeight]},{type:'int32',data:[k.inWidth]},{type:'int32',data:[k.batchSize]},{type:'int32',data:[k.outChannels/k.inChannels]}];return h.runWebGPUProgram(b,[s,u],'float32',w)}e.depthwiseConv2dNativeBackpropFilterConfig={kernelName:t.DepthwiseConv2dNativeBackpropFilter,backendName:'webgpu',kernelFunc:o}},2522,[1158,2523]);
__d(function(g,r,i,a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.DepthwiseConv2DDerInputProgram=e.DepthwiseConv2DDerFilterProgram=void 0;var t=r(d[0]),n=r(d[1]);e.DepthwiseConv2DDerFilterProgram=
/**
   * @license
   * Copyright 2023 Google LLC.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   */
class{constructor(t){this.variableNames=['x','dy'],this.uniforms="strides : vec2<i32>, pads : vec2<i32>, filterDims : vec2<i32>, outHeight : i32,\n      outWidth : i32, inHeight : i32, inWidth : i32, batchSize : i32, channelMul : i32,",this.workgroupSize=[64,1,1],this.size=!0,this.outputShape=t.filterShape,this.dispatchLayout=(0,n.flatDispatchLayout)(this.outputShape),this.dispatch=(0,n.computeDispatch)(this.dispatchLayout,this.outputShape,this.workgroupSize),this.shaderKey="depthwise_conv2d_backprop_filter"}getUserCode(){return`\n      ${(0,t.getMainHeaderString)('index')} {\n      if (index < uniforms.size) {\n        let coords = getCoordsFromIndex(index);\n        let wR = coords[0];\n        let wC = coords[1];\n        let d1 = coords[2];\n        let dm = coords[3];\n        let d2 = d1 * uniforms.channelMul + dm;\n\n        var dotProd = 0.0;\n        for (var b = 0; b < uniforms.batchSize; b++) {\n          for (var yR = 0; yR < uniforms.outHeight; yR++) {\n            let xR = wR + yR * uniforms.strides[0] - uniforms.pads[0];\n\n            if (xR < 0 || xR >= uniforms.inHeight) {\n              continue;\n            }\n\n            for (var yC = 0; yC < uniforms.outWidth; yC++) {\n              let xC = wC + yC * uniforms.strides[1] - uniforms.pads[1];\n\n              if (xC < 0 || xC >= uniforms.inWidth) {\n                continue;\n              }\n\n              let dyValue = getDy(b, yR, yC, d2);\n              let xValue = getX(b, xR, xC, d1);\n              dotProd += xValue * dyValue;\n            }\n          }\n        }\n        setOutputAtIndex(index, dotProd);\n      }\n    }\n    `}};e.DepthwiseConv2DDerInputProgram=class{constructor(t){this.variableNames=['dy','W'],this.uniforms="strides : vec2<i32>, pads : vec2<i32>, filterDims : vec2<i32>,\n       outHeight : i32, outWidth : i32, channelMul : i32,",this.workgroupSize=[64,1,1],this.size=!0,this.outputShape=t.inShape,this.dispatchLayout=(0,n.flatDispatchLayout)(this.outputShape),this.dispatch=(0,n.computeDispatch)(this.dispatchLayout,this.outputShape,this.workgroupSize),this.shaderKey="depthwise_conv2d_backprop_input"}getUserCode(){return`\n      ${(0,t.getMainHeaderString)('index')} {\n      if (index < uniforms.size) {\n        let coords = getCoordsFromIndex(index);\n        let batch = coords[0];\n        let d1 = coords[3];\n        let dyCorner = coords.yz - uniforms.pads;\n        let dyRCorner = dyCorner.x;\n        let dyCCorner = dyCorner.y;\n\n        var dotProd = 0.0;\n        for (var wR = 0; wR < uniforms.filterDims[0]; wR++) {\n          let dyR = f32(dyRCorner + wR) / f32(uniforms.strides[0]);\n\n          if (dyR < 0.0 || dyR >= f32(uniforms.outHeight) || fract(dyR) > 0.0) {\n            continue;\n          }\n\n          let idyR = i32(dyR);\n          let wRPerm = uniforms.filterDims[0] - 1 - wR;\n\n          for (var wC = 0; wC < uniforms.filterDims[1]; wC++) {\n            let dyC = f32(dyCCorner + wC) / f32(uniforms.strides[1]);\n\n            if (dyC < 0.0 || dyC >= f32(uniforms.outWidth) || fract(dyC) > 0.0) {\n              continue;\n            }\n\n            let idyC = i32(dyC);\n            let wCPerm = uniforms.filterDims[1] - 1 - wC;\n\n            for (var dm = 0; dm < uniforms.channelMul; dm++) {\n              let d2 = d1 * uniforms.channelMul + dm;\n              let xValue = getDy(batch, idyR, idyC, d2);\n              let wValue = getW(wRPerm, wCPerm, d1, dm);\n              dotProd += xValue * wValue;\n            }\n          }\n        }\n        setOutputAtIndex(index, dotProd);\n      }\n    }\n    `}}},2523,[2417,2419]);
__d(function(g,r,i,a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.depthwiseConv2dNativeBackpropInput=p,e.depthwiseConv2dNativeBackpropInputConfig=void 0;var t=r(d[0]),n=r(d[1]);
/**
   * @license
   * Copyright 2023 Google LLC.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   */
function p(p){const{inputs:o,backend:u,attrs:h}=p,{dy:s,filter:f}=o,{strides:l,dilations:c,pad:v,dimRoundingMode:C,inputShape:k}=h,y=t.backend_util.computeConv2DInfo(k,f.shape,l,c,v,C,!0),I=new n.DepthwiseConv2DDerInputProgram(y),w=[{type:'int32',data:[y.strideHeight,y.strideWidth]},{type:'int32',data:[y.filterHeight-1-y.padInfo.top,y.filterWidth-1-y.padInfo.left]},{type:'int32',data:[y.filterHeight,y.filterWidth]},{type:'int32',data:[y.outHeight]},{type:'int32',data:[y.outWidth]},{type:'int32',data:[y.outChannels/y.inChannels]}];return u.runWebGPUProgram(I,[s,f],s.dtype,w)}e.depthwiseConv2dNativeBackpropInputConfig={kernelName:t.DepthwiseConv2dNativeBackpropInput,backendName:'webgpu',kernelFunc:p}},2524,[1158,2523]);
__d(function(g,r,i,a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.diag=p,e.diagConfig=void 0;var n=r(d[0]),s=r(d[1]),t=r(d[2]);
/**
   * @license
   * Copyright 2022 Google LLC.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   */
function p(p){const{inputs:o,backend:u}=p,{x:c}=o,h=[...c.shape,...c.shape],b=n.util.sizeFromShape(c.shape),k=(0,t.reshape)({inputs:{x:c},backend:u,attrs:{shape:[b]}}),f=new s.DiagProgram(b),l=u.runWebGPUProgram(f,[k],k.dtype),D=(0,t.reshape)({inputs:{x:l},backend:u,attrs:{shape:h}});return u.disposeData(k.dataId),u.disposeData(l.dataId),D}e.diagConfig={kernelName:n.Diag,backendName:'webgpu',kernelFunc:p}},2525,[1158,2526,2433]);
__d(function(g,r,i,a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.DiagProgram=void 0;var t=r(d[0]),s=r(d[1]);e.DiagProgram=
/**
   * @license
   * Copyright 2022 Google LLC.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   */
class{constructor(t){this.variableNames=['x'],this.workgroupSize=[64,1,1],this.size=!0,this.outputShape=[t,t],this.dispatchLayout=(0,s.flatDispatchLayout)(this.outputShape),this.dispatch=(0,s.computeDispatch)(this.dispatchLayout,this.outputShape,this.workgroupSize),this.shaderKey='diag'}getUserCode(){return`\n      ${(0,t.getMainHeaderString)('index')} {\n        if (index < uniforms.size) {\n          let coords = getOutputCoords();\n          let value = select(0.0, getX(coords[0]), coords[0] == coords[1]);\n          setOutputAtIndex(index, value);\n        }\n      }\n    `}}},2526,[2417,2419]);
__d(function(g,r,i,a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.dilation2D=o,e.dilation2DConfig=void 0;var t=r(d[0]),n=r(d[1]);
/**
   * @license
   * Copyright 2022 Google LLC.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   */
function o(o){const{inputs:l,backend:p,attrs:f}=o,{x:s,filter:u}=l,{strides:c,pad:D,dilations:h}=f,b=t.backend_util.computeDilation2DInfo(s.shape,u.shape,c,D,'NHWC',h),y=[b.padInfo.top,b.padInfo.left],k=[{type:'int32',data:[b.filterHeight,b.filterWidth]},{type:'int32',data:[...y]},{type:'int32',data:[b.strideHeight,b.strideWidth]},{type:'int32',data:[b.dilationHeight,b.dilationWidth]}],W=new n.Dilation2DProgram(b);return p.runWebGPUProgram(W,[s,u],s.dtype,k)}e.dilation2DConfig={kernelName:t.Dilation2D,backendName:'webgpu',kernelFunc:o}},2527,[1158,2528]);
__d(function(g,r,i,a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.Dilation2DProgram=void 0;var t=r(d[0]),n=r(d[1]);e.Dilation2DProgram=
/**
   * @license
   * Copyright 2022 Google LLC.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   */
class{constructor(t){this.variableNames=['x','w'],this.uniforms='filterDims: vec2<i32>, pads: vec2<i32>, strides: vec2<i32>, dilations: vec2<i32>',this.workgroupSize=[64,1,1],this.size=!0,this.outputShape=t.outShape,this.dispatchLayout=(0,n.flatDispatchLayout)(this.outputShape),this.dispatch=(0,n.computeDispatch)(this.dispatchLayout,this.outputShape,this.workgroupSize),this.shaderKey='dilation2d'}getUserCode(){return`\n       ${(0,t.getMainHeaderString)('index')} {\n         if (index < uniforms.size) {\n           let neg_infinity = -3.4e38;\n           let coords = getOutputCoords();\n           let batch = coords.x;\n           let d1 = coords.w;\n           let outTopLeftCorner = coords.yz * uniforms.strides - uniforms.pads;\n           let hBeg = outTopLeftCorner.x;\n           let wBeg = outTopLeftCorner.y;\n\n           var curVal = neg_infinity;\n           for (var h = 0; h < uniforms.filterDims[0]; h = h + 1) {\n             let hIn = hBeg + h * uniforms.dilations[0];\n\n             if (hIn >= 0 && hIn < uniforms.xShape[1]) {\n               for (var w = 0; w < uniforms.filterDims[1]; w = w + 1) {\n                 let wIn = wBeg + w * uniforms.dilations[1];\n\n                 if (wIn >= 0 && wIn < uniforms.xShape[2]) {\n                   let val = getX(batch, hIn, wIn, d1) + getW(h, w, d1);\n                   if (val > curVal) {\n                     curVal = val;\n                   }\n                 }\n               }\n             }\n           }\n\n           setOutputAtIndex(index, curVal);\n         }\n       }\n     `}}},2528,[2417,2419]);
__d(function(g,r,i,a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.dilation2DBackpropFilter=o,e.dilation2DBackpropFilterConfig=void 0;var t=r(d[0]),n=r(d[1]),p=r(d[2]);
/**
   * @license
   * Copyright 2023 Google LLC.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   */
function o(o){const{inputs:l,backend:s,attrs:c}=o,{x:u,filter:f,dy:h}=l,{strides:k,pad:y,dilations:D}=c,b=t.backend_util.computeDilation2DInfo(u.shape,f.shape,k,y,'NHWC',D),F=f.dtype,B=new n.Dilation2DBackpropFilterProgram(b,f.shape,F),W=[{type:'int32',data:[b.filterHeight,b.filterWidth]},{type:'int32',data:[b.padInfo.top,b.padInfo.left]},{type:'int32',data:[b.strideHeight,b.strideWidth]},{type:'int32',data:[b.dilationHeight,b.dilationWidth]},{type:'int32',data:[t.util.sizeFromShape(b.outShape)]}],_=(0,p.fill)({backend:s,attrs:{shape:f.shape,value:0,dtype:F}});return s.runWebGPUProgram(B,[u,f,h],F,W,_)}e.dilation2DBackpropFilterConfig={kernelName:t.Dilation2DBackpropFilter,backendName:'webgpu',kernelFunc:o}},2529,[1158,2530,2431]);
__d(function(g,r,i,a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.Dilation2DBackpropInputProgram=e.Dilation2DBackpropFilterProgram=void 0;var n=r(d[0]),t=r(d[1]),o=r(d[2]);e.Dilation2DBackpropInputProgram=
/**
   * @license
   * Copyright 2023 Google LLC.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   */
class{constructor(n,t){if(this.variableNames=['x','w','dy'],this.uniforms='filterDims: vec2<i32>, pads: vec2<i32>, strides: vec2<i32>, dilations: vec2<i32>, dySize: i32,',this.workgroupSize=[64,1,1],this.atomic=!0,this.outputShape=n.inShape,this.dispatchLayout=(0,o.flatDispatchLayout)(n.outShape),this.dispatch=(0,o.computeDispatch)(this.dispatchLayout,n.outShape,this.workgroupSize),'float32'!==t&&'int32'!==t)throw new Error(`Dilation2DBackpropInput only supports float32 and int32\n          types, does not support ${t} type.`);this.type=t,this.shaderKey='dilation2DBackpropInput'}getUserCode(){return`\n       ${(0,t.getMainHeaderString)('index')} {\n         if (index < uniforms.dySize) {\n           let coords = getDyCoordsFromIndex(index);\n           let b = coords[0];\n           let r = coords[1];\n           let c = coords[2];\n           let d = coords[3];\n\n           let dyCorner = vec2<i32>(r, c) * uniforms.strides - uniforms.pads;\n           var curVal = -3.4e38;  // neg_infinity\n           var xRMax = 0;\n           var xCMax = 0;\n\n           // In the case of multiple argmax branches, we only back-propagate\n           // along the last branch, i.e., the one with largest value of\n           // 'wR * uniforms.filterDims[1] + wC', similarly to the max-pooling\n           // backward routines.\n           for (var wR = 0; wR < uniforms.filterDims[0]; wR++) {\n             let xR = dyCorner.x + wR * uniforms.dilations[0];\n\n             if (xR >= 0 && xR < uniforms.xShape[1]) {\n               for (var wC = 0; wC < uniforms.filterDims[1]; wC++) {\n                 let xC = dyCorner.y + wC * uniforms.dilations[1];\n\n                 if (xC >= 0 && xC < uniforms.xShape[2]) {\n                   let val = getX(b, xR, xC, d) + getW(wR, wC, d);\n                   if (val > curVal) {\n                     curVal = val;\n                     xRMax = xR;\n                     xCMax = xC;\n                   }\n                 }\n               }\n             }\n           }\n\n           let flatIndexIn = d + uniforms.xShape[3] *\n               (xCMax + uniforms.xShape[2] * (xRMax + uniforms.xShape[1] * b));\n           let value = getDy(b, r, c, d);\n           ${(0,n.atomicAddSnippet)('&result[flatIndexIn]','value',this.type)}\n         }\n       }\n     `}};e.Dilation2DBackpropFilterProgram=class{constructor(n,t,s){if(this.variableNames=['x','w','dy'],this.uniforms='filterDims: vec2<i32>, pads: vec2<i32>, strides: vec2<i32>, dilations: vec2<i32>, dySize: i32,',this.workgroupSize=[64,1,1],this.atomic=!0,this.outputShape=n.filterShape,this.dispatchLayout=(0,o.flatDispatchLayout)(n.outShape),this.dispatch=(0,o.computeDispatch)(this.dispatchLayout,n.outShape,this.workgroupSize),'float32'!==s&&'int32'!==s)throw new Error(`Dilation2DBackpropFilter only supports float32 and int32\n          types, does not support ${s} type.`);this.type=s,this.shaderKey='dilation2DBackpropFilter'}getUserCode(){return`\n       ${(0,t.getMainHeaderString)('index')} {\n         if (index < uniforms.dySize) {\n           let coords = getDyCoordsFromIndex(index);\n           let b = coords[0];\n           let r = coords[1];\n           let c = coords[2];\n           let d = coords[3];\n\n           let dyCorner = vec2<i32>(r, c) * uniforms.strides - uniforms.pads;\n           var curVal = -3.4e38;  // neg_infinity\n           var wRMax = 0;\n           var wCMax = 0;\n\n           // In the case of multiple argmax branches, we only back-propagate\n           // along the last branch, i.e., the one with largest value of\n           // 'wR * uniforms.filterDims[1] + wC', similarly to the max-pooling\n           // backward routines.\n           for (var wR = 0; wR < uniforms.filterDims[0]; wR++) {\n             let xR = dyCorner.x + wR * uniforms.dilations[0];\n\n             if (xR >= 0 && xR < uniforms.xShape[1]) {\n               for (var wC = 0; wC < uniforms.filterDims[1]; wC++) {\n                 let xC = dyCorner.y + wC * uniforms.dilations[1];\n\n                 if (xC >= 0 && xC < uniforms.xShape[2]) {\n                   let val = getX(b, xR, xC, d) + getW(wR, wC, d);\n                   if (val > curVal) {\n                     curVal = val;\n                     wRMax = wR;\n                     wCMax = wC;\n                   }\n                 }\n               }\n             }\n           }\n\n           let flatIndexIn = d + uniforms.wShape[2] * (wCMax + wRMax * uniforms.wShape[1]);\n           let value = getDy(b, r, c, d);\n           ${(0,n.atomicAddSnippet)('&result[flatIndexIn]','value',this.type)}\n         }\n       }\n     `}}},2530,[2418,2417,2419]);
__d(function(g,r,i,a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.dilation2DBackpropInput=o,e.dilation2DBackpropInputConfig=void 0;var t=r(d[0]),n=r(d[1]),p=r(d[2]);
/**
   * @license
   * Copyright 2023 Google LLC.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   */
function o(o){const{inputs:l,backend:u,attrs:c}=o,{x:s,filter:f,dy:h}=l,{strides:k,pad:y,dilations:D}=c,I=t.backend_util.computeDilation2DInfo(s.shape,f.shape,k,y,'NHWC',D),b=s.dtype,B=new n.Dilation2DBackpropInputProgram(I,b),W=[{type:'int32',data:[I.filterHeight,I.filterWidth]},{type:'int32',data:[I.padInfo.top,I.padInfo.left]},{type:'int32',data:[I.strideHeight,I.strideWidth]},{type:'int32',data:[I.dilationHeight,I.dilationWidth]},{type:'int32',data:[t.util.sizeFromShape(I.outShape)]}],_=(0,p.fill)({backend:u,attrs:{shape:I.inShape,value:0,dtype:b}});return u.runWebGPUProgram(B,[s,f,h],b,W,_)}e.dilation2DBackpropInputConfig={kernelName:t.Dilation2DBackpropInput,backendName:'webgpu',kernelFunc:o}},2531,[1158,2530,2431]);
__d(function(g,r,i,a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.draw=o,e.drawConfig=void 0;var t=r(d[0]),n=r(d[1]);
/**
   * @license
   * Copyright 2023 Google LLC.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use backend file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   */
function o(t){const{inputs:o,backend:s,attrs:u}=t,{image:c}=o,{canvas:p,options:l}=u,[f,w]=c.shape.slice(0,2),{imageOptions:h}=l||{},b=(null==h?void 0:h.alpha)||1,v=s.device.features.has('bgra8unorm-storage')?'bgra8unorm':'rgba8unorm',x=[f,w],C=new n.DrawProgram(x,c.dtype,v);p.width=w,p.height=f;const k='webgpu';let I,P=p.getContext(k);P||(I=new OffscreenCanvas(w,f),P=I.getContext(k));const y=3===c.shape.length?c.shape[2]:1;P.configure({device:s.device,format:v,usage:GPUTextureUsage.STORAGE_BINDING,alphaMode:'premultiplied'});const _='int32',D=s.makeTensorInfo(x,_),G=s.tensorMap.get(D.dataId);G.resource=P.getCurrentTexture(),G.external=!0;const N=[{type:'uint32',data:[y]},{type:'float32',data:[b]}];if(s.runWebGPUProgram(C,[c],_,N,D),I){const t=p.getContext('2d');if(!t)throw new Error("Please make sure this canvas has only been used for 2d or webgpu context!");t.drawImage(I,0,0)}return s.disposeData(D.dataId),c}e.drawConfig={kernelName:t.Draw,backendName:'webgpu',kernelFunc:o}},2532,[1158,2533]);
__d(function(g,r,i,a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.DrawProgram=void 0;var t=r(d[0]),n=r(d[1]);e.DrawProgram=
/**
   * @license
   * Copyright 2023 Google LLC.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   */
class{constructor(s,o,u){this.variableNames=['Image'],this.uniforms='alpha: f32,',this.workgroupSize=[64,1,1],this.pixelsOpType=t.PixelsOpType.DRAW,this.size=!0,this.outputShape=s,this.dispatchLayout=(0,n.flatDispatchLayout)(this.outputShape),this.dispatch=(0,n.computeDispatch)(this.dispatchLayout,this.outputShape,this.workgroupSize),this.type=o,this.textureFormat=u,this.shaderKey=`draw_${o}_${u}`}getUserCode(){let n;const s='float32'===this.type?'value':'value / 255.0';n=`\n      if (uniforms.numChannels == 1) {\n        rgba[0] = ${s};\n        rgba[1] = ${s};\n        rgba[2] = ${s};\n      } else {\n        rgba[d] = ${s};\n      }`;return`\n       @group(0) @binding(0) var outImage : texture_storage_2d<${this.textureFormat}, write>;\n       ${(0,t.getMainHeaderString)('index')} {\n         if (index < uniforms.size) {\n           var rgba = vec4<f32>(0.0, 0.0, 0.0, uniforms.alpha);\n           for (var d = 0; d < uniforms.numChannels; d = d + 1) {\n             let value = f32(inBuf[index * uniforms.numChannels + d]);\n             ${n}\n           }\n           rgba.x = rgba.x * rgba.w;\n           rgba.y = rgba.y * rgba.w;\n           rgba.z = rgba.z * rgba.w;\n           let coords = getCoordsFromIndex(index);\n           textureStore(outImage, vec2<i32>(coords.yx), rgba);\n         }\n       }\n      `}}},2533,[2417,2419]);
__d(function(g,r,_i,a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.einsum=l,e.einsumConfig=void 0;var n=r(d[0]),t=r(d[1]),s=r(d[2]),i=r(d[3]),u=r(d[4]);
/**
   * @license
   * Copyright 2021 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   */
function l(l){const{inputs:c,backend:o,attrs:p}=l,{equation:h}=p,k=c,{allDims:b,summedDims:f,idDims:_}=n.backend_util.decodeEinsumEquation(h,k.length);n.backend_util.checkEinsumDimSizes(b.length,_,k);const{path:D,steps:E}=n.backend_util.getEinsumComputePath(f,_),x=E.length;let y=null,P=b.length;const q=[];for(let l=0;l<x;++l){for(const i of E[l]){const{permutationIndices:l,expandDims:c}=n.backend_util.getEinsumPermutation(P,_[i]);let p;n.backend_util.isIdentityPermutation(l)?p=k[i]:(p=(0,u.transpose)({inputs:{x:k[i]},backend:o,attrs:{perm:l}}),q.push(p));const h=p.shape.slice();for(let n=0;n<c.length;++n)h.splice(c[n],0,1);n.util.arraysEqual(p.shape,h)||(p=(0,s.reshape)({inputs:{x:p},backend:o,attrs:{shape:h}}),q.push(p)),null===y?y=p:(y=(0,t.multiplyKernelFunc)({inputs:{a:p,b:y},backend:o}),q.push(y))}l<x-1&&(D[l]>=0&&(y=(0,i.sum)({inputs:{x:y},backend:o,attrs:{axis:D[l]-(b.length-P),keepDims:!1}}),q.push(y)),P--)}for(const n of q)n!==y&&o.disposeData(n.dataId);return y}e.einsumConfig={kernelName:n.Einsum,backendName:'webgpu',kernelFunc:l}},2534,[1158,2535,2433,2536,2449]);
__d(function(g,r,i,a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.multiplyKernelFunc=e.multiplyConfig=void 0;var l=r(d[0]),n=r(d[1]),p=r(d[2]),u=r(d[3]);
/**
   * @license
   * Copyright 2021 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   */
const t=e.multiplyKernelFunc=(0,p.binaryKernelFunc)({opType:n.BinaryOpType.MUL,cpuKernelImpl:u.multiplyImplCPU,supportsComplex:!0});e.multiplyConfig={kernelName:l.Multiply,backendName:'webgpu',kernelFunc:t}},2535,[1158,2426,2435,2441]);
__d(function(g,r,i,a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.sum=s,e.sumConfig=void 0;var n=r(d[0]),u=r(d[1]);
/**
   * @license
   * Copyright 2021 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   */
function s(n){const{inputs:s,backend:t,attrs:c}=n,{x:o}=s,{axis:f,keepDims:k}=c;return(0,u.reduce)(o,f,k,'sum',t)}e.sumConfig={kernelName:n.Sum,backendName:'webgpu',kernelFunc:s}},2536,[1158,2448]);
__d(function(g,r,i,a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.eluConfig=e.elu=void 0;var n=r(d[0]),u=r(d[1]),l=r(d[2]);
/**
   * @license
   * Copyright 2021 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   */
const o=e.elu=(0,u.unaryKernelFunc)({opType:l.UnaryOpType.ELU});e.eluConfig={kernelName:n.Elu,backendName:'webgpu',kernelFunc:o}},2537,[1158,2435,2427]);
__d(function(g,r,i,a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.eluGradConfig=e.eluGrad=void 0;var n=r(d[0]),u=r(d[1]),o=r(d[2]);
/**
   * @license
   * Copyright 2023 Google LLC.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   */
const l=n=>{const{inputs:l,backend:p}=n,{dy:t,y:c}=l,y=new o.BinaryOpProgram(u.BinaryOpType.ELU_DER,t.shape,c.shape);return p.runWebGPUProgram(y,[t,c],t.dtype)};e.eluGrad=l;e.eluGradConfig={kernelName:n.EluGrad,backendName:'webgpu',kernelFunc:l}},2538,[1158,2426,2437]);
__d(function(g,r,i,a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.equalConfig=e.equal=void 0;var l=r(d[0]),n=r(d[1]),u=r(d[2]),o=r(d[3]);
/**
   * @license
   * Copyright 2021 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   */
const p=e.equal=(0,u.binaryKernelFunc)({opType:n.BinaryOpType.EQUAL,dtype:'bool',cpuKernelImpl:o.equalImplCPU});e.equalConfig={kernelName:l.Equal,backendName:'webgpu',kernelFunc:p}},2539,[1158,2426,2435,2441]);
__d(function(g,r,i,a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.erfConfig=e.erf=void 0;var n=r(d[0]),f=r(d[1]),o=r(d[2]);
/**
   * @license
   * Copyright 2022 Google LLC.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   */
const u=e.erf=(0,f.unaryKernelFunc)({opType:o.UnaryOpType.ERF});e.erfConfig={kernelName:n.Erf,backendName:'webgpu',kernelFunc:u}},2540,[1158,2435,2427]);
__d(function(g,r,i,a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.expConfig=e.exp=void 0;var p=r(d[0]),n=r(d[1]),l=r(d[2]),o=r(d[3]);
/**
   * @license
   * Copyright 2021 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   */
const u=e.exp=(0,n.unaryKernelFunc)({opType:o.UnaryOpType.EXP,cpuKernelImpl:l.expImplCPU,dtype:'float32'});e.expConfig={kernelName:p.Exp,backendName:'webgpu',kernelFunc:u}},2541,[1158,2435,2441,2427]);
__d(function(g,r,i,a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.expandDims=t,e.expandDimsConfig=void 0;var n=r(d[0]),s=r(d[1]);
/**
   * @license
   * Copyright 2021 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the License);
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an AS IS BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   */
function t(t){const{inputs:p,attrs:u,backend:c}=t,{dim:l}=u,{input:o}=p,b=o.shape.length,h=o.shape.slice();let x=l;return l<0&&(n.util.assert(-(b+1)<=l,()=>`Axis must be in the interval [${-(b+1)}, ${b}]`),x=b+l+1),h.splice(x,0,1),(0,s.reshape)({inputs:{x:o},backend:c,attrs:{shape:h}})}e.expandDimsConfig={kernelName:n.ExpandDims,backendName:'webgpu',kernelFunc:t}},2542,[1158,2433]);
__d(function(g,r,i,a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.expm1Config=e.expm1=void 0;var n=r(d[0]),p=r(d[1]),l=r(d[2]),o=r(d[3]);
/**
   * @license
   * Copyright 2021 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   */
const u=e.expm1=(0,p.unaryKernelFunc)({opType:o.UnaryOpType.EXPM1,cpuKernelImpl:l.expm1ImplCPU});e.expm1Config={kernelName:n.Expm1,backendName:'webgpu',kernelFunc:u}},2543,[1158,2435,2441,2427]);
__d(function(g,r,i,a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.fft=t,e.fftConfig=void 0;var n=r(d[0]),f=r(d[1]);
/**
   * @license
   * Copyright 2022 Google LLC.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   */
function t(n){const{inputs:t,backend:u}=n,{input:o}=t;return(0,f.fftImpl)(o,!1,u)}e.fftConfig={kernelName:n.FFT,backendName:'webgpu',kernelFunc:t}},2544,[1158,2545]);
__d(function(g,r,i,a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.fftImpl=
/**
   * @license
   * Copyright 2022 Google LLC.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   */
function(n,h,l){const c=l.tensorMap.get(n.dataId),u=t.util.sizeFromShape(n.shape),f=n.shape[n.shape.length-1],I=u/f,P=[],x=(0,p.reshape)({inputs:{x:n},backend:l,attrs:{shape:[I,f]}});P.push(x);const y=x.shape,b=new s.FFTProgram('real',y),T=new s.FFTProgram('imag',y),F=[{dataId:c.complexTensorInfos.real.dataId,dtype:c.complexTensorInfos.real.dtype,shape:y},{dataId:c.complexTensorInfos.imag.dataId,dtype:c.complexTensorInfos.imag.dtype,shape:y}],M=h?2*Math.PI:-2*Math.PI,_=h?y[1]:1,k=[{type:'float32',data:[M]},{type:'float32',data:[_]}],v=l.runWebGPUProgram(b,F,'float32',k);P.push(v);const w=l.runWebGPUProgram(T,F,'float32',k);P.push(w);const G=(0,o.complex)({inputs:{real:v,imag:w},backend:l});P.push(G);const U=(0,p.reshape)({inputs:{x:G},backend:l,attrs:{shape:n.shape}});return P.forEach(t=>l.disposeData(t.dataId)),U};var t=r(d[0]),s=r(d[1]),o=r(d[2]),p=r(d[3])},2545,[1158,2546,2438,2433]);
__d(function(g,r,i,a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.FFTProgram=void 0;var t=r(d[0]),n=r(d[1]);e.FFTProgram=
/**
   * @license
   * Copyright 2022 Google LLC.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   */
class{constructor(t,o){this.variableNames=['real','imag'],this.outputShape=[],this.uniforms='exponentMultiplier : f32, denominator: f32,',this.workgroupSize=[64,1,1],this.size=!0,this.outputShape=o,this.dispatchLayout=(0,n.flatDispatchLayout)(this.outputShape),this.dispatch=(0,n.computeDispatch)(this.dispatchLayout,this.outputShape,this.workgroupSize),this.component=t,this.shaderKey=`fft_${t}`}getUserCode(){return`\n    fn unaryOpComplex(real: f32, expR: f32, imag: f32, expI: f32) -> f32 {\n      ${'real'===this.component?'return real * expR - imag * expI;':'return real * expI + imag * expR;'}\n    }\n\n    fn mulMatDFT(batch: i32, index: i32) -> f32 {\n      let indexRatio = f32(index) / f32(uniforms.realShape[1]);\n      let exponentMultiplierTimesIndexRatio =\n          uniforms.exponentMultiplier * indexRatio;\n\n      var result = 0.0;\n\n      for (var i = 0; i < uniforms.realShape[1]; i = i + 1) {\n        // x = (-2|2 * PI / N) * index * i;\n        let x = exponentMultiplierTimesIndexRatio * f32(i);\n        let expR = cos(x);\n        let expI = sin(x);\n        let real = getReal(batch, i);\n        let imag = getImag(batch, i);\n\n        result = result +\n            unaryOpComplex(real, expR, imag, expI) / uniforms.denominator;\n      }\n\n      return result;\n    }\n\n    ${(0,t.getMainHeaderString)('index')} {\n      if (index < uniforms.size) {\n        let coords = getOutputCoords();\n        setOutputAtIndex(index, mulMatDFT(coords[0], coords[1]));\n      }\n    }\n  `}}},2546,[2417,2419]);
__d(function(g,r,i,a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.flipLeftRightConfig=void 0;var n=r(d[0]),t=r(d[1]);
/**
   * @license
   * Copyright 2021 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   */
e.flipLeftRightConfig={kernelName:n.FlipLeftRight,backendName:'webgpu',kernelFunc:({inputs:n,backend:f})=>{const{image:o}=n,p=f,l=new t.FlipLeftRightProgram(o.shape);return p.runWebGPUProgram(l,[o],o.dtype)}}},2547,[1158,2548]);
__d(function(g,r,i,a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.FlipLeftRightProgram=void 0;var t=r(d[0]),o=r(d[1]);e.FlipLeftRightProgram=
/**
   * @license
   * Copyright 2021 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   */
class{constructor(t){this.outputShape=[],this.variableNames=['x'],this.workgroupSize=[64,1,1],this.size=!0,this.outputShape=t,this.dispatchLayout=(0,o.flatDispatchLayout)(this.outputShape),this.dispatch=(0,o.computeDispatch)(this.dispatchLayout,this.outputShape,this.workgroupSize),this.shaderKey='flipLeftRight'}getUserCode(){return`\n      ${(0,t.getMainHeaderString)('index')} {\n        if (index < uniforms.size) {\n          let coords = getCoordsFromIndex(index);\n          let coordX = uniforms.xShape[2] - coords[2] - 1;\n          let outputValue = getX(coords[0], coords[1], coordX, coords[3]);\n          setOutputAtIndex(index, outputValue);\n        }\n      }\n    `}}},2548,[2417,2419]);
__d(function(g,r,i,a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.floorConfig=e.floor=void 0;var o=r(d[0]),n=r(d[1]),l=r(d[2]),f=r(d[3]);
/**
   * @license
   * Copyright 2021 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   */
const p=e.floor=(0,n.unaryKernelFunc)({opType:f.UnaryOpType.FLOOR,cpuKernelImpl:l.floorImplCPU});e.floorConfig={kernelName:o.Floor,backendName:'webgpu',kernelFunc:p}},2549,[1158,2435,2441,2427]);
__d(function(g,r,i,a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.floorDivConfig=e.floorDiv=void 0;var o=r(d[0]),n=r(d[1]),l=r(d[2]),p=r(d[3]);
/**
   * @license
   * Copyright 2021 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   */
const f=e.floorDiv=(0,l.binaryKernelFunc)({opType:n.BinaryOpType.FLOOR_DIV,cpuKernelImpl:p.floorDivImplCPU,dtype:'int32'});e.floorDivConfig={kernelName:o.FloorDiv,backendName:'webgpu',kernelFunc:f}},2550,[1158,2426,2435,2441]);
__d(function(g,r,_i,a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.fromPixels=s,e.fromPixelsConfig=void 0;var t=r(d[0]),n=r(d[1]);
/**
   * @license
   * Copyright 2020 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use backend file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   */
e.fromPixelsConfig={kernelName:t.FromPixels,backendName:'webgpu',kernelFunc:s};let o,i=(0,t.env)().getBool('CANVAS2D_WILL_READ_FREQUENTLY_FOR_GPU');function s(s){const{inputs:l,backend:u,attrs:c}=s;let{pixels:f}=l;const{numChannels:T}=c;if(null==f)throw new Error('pixels passed to tf.browser.fromPixels() can not be null');const E='undefined'!=typeof HTMLVideoElement&&f instanceof HTMLVideoElement,p='undefined'!=typeof HTMLImageElement&&f instanceof HTMLImageElement,_='undefined'!=typeof HTMLCanvasElement&&f instanceof HTMLCanvasElement||'undefined'!=typeof OffscreenCanvas&&f instanceof OffscreenCanvas,x='undefined'!=typeof ImageBitmap&&f instanceof ImageBitmap,[P,v]=E?[f.videoWidth,f.videoHeight]:[f.width,f.height],I=[v,P,T],U=(0,t.env)().getBool('WEBGPU_IMPORT_EXTERNAL_TEXTURE')&&E,h=E||p;if(x||_||h){let s;if(U)s=u.device.importExternalTexture({source:f});else{if(h){const n=(0,t.env)().getBool('CANVAS2D_WILL_READ_FREQUENTLY_FOR_GPU');null!=o&&n===i||(i=n,o=document.createElement('canvas').getContext('2d',{willReadFrequently:i})),o.canvas.width=P,o.canvas.height=v,o.drawImage(f,0,0,P,v),f=o.canvas}const n=GPUTextureUsage.COPY_DST|GPUTextureUsage.RENDER_ATTACHMENT|GPUTextureUsage.TEXTURE_BINDING,l='rgba8unorm',c=u.textureManager.acquireTexture(I[1],I[0],l,n);u.queue.copyExternalImageToTexture({source:f},{texture:c},[I[1],I[0]]),s=c}const l=t.util.sizeFromShape(I),c=t.util.computeStrides(I),E=new n.FromPixelsProgram(I,T,U),p=[{type:'uint32',data:[l]},{type:'uint32',data:[T]},{type:'uint32',data:[...c]}],_=u.makeTensorInfo([v,P],'int32');u.tensorMap.get(_.dataId).resource=s;const x=u.runWebGPUProgram(E,[_],'int32',p);return u.disposeData(_.dataId),x}const y=f.data;let L=y;if(null!=T&&4!==T){L=new Uint8Array(f.width*f.height*T);const t=y.length;let n=0;for(let o=0;o<t;o++)o%4<T&&(L[n++]=y[o])}const R=u.makeTensorInfo(I,'int32',new Int32Array(L));return u.uploadToGPU(R.dataId),R}},2551,[1158,2552]);
__d(function(g,r,i,a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.FromPixelsProgram=void 0;var t=r(d[0]),o=r(d[1]);e.FromPixelsProgram=
/**
   * @license
   * Copyright 2022 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   */
class{constructor(s,n,u=!1){this.pixelsOpType=t.PixelsOpType.FROM_PIXELS,this.outputShape=[0],this.variableNames=[],this.workgroupSize=[256,1,1],this.outputShape=s,this.dispatchLayout=(0,o.flatDispatchLayout)(this.outputShape),this.dispatch=(0,o.computeDispatch)(this.dispatchLayout,this.outputShape,this.workgroupSize,[n,1,1]),this.importVideo=u,this.shaderKey=`fromPixels_${this.importVideo}`}getUserCode(){const o=this.importVideo?'textureLoad(src, vec2<i32>(coords.yx));':'textureLoad(src, vec2<i32>(coords.yx), 0)';return`\n      @binding(1) @group(0) var src: ${this.importVideo?'texture_external':'texture_2d<f32>'};\n      ${(0,t.getMainHeaderString)('index')} {\n        let flatIndex = index * uniforms.numChannels;\n        if (flatIndex < uniforms.size) {\n          let coords = getCoordsFromIndex(flatIndex);\n          let values = ${o};\n          for (var i = 0; i < uniforms.numChannels; i = i + 1) {\n            result[flatIndex + i] = i32(floor(255.0 * values[i]));\n          }\n        }\n      }\n  `}}},2552,[2417,2419]);
__d(function(g,r,i,a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.fusedBatchNormConfig=void 0;var n=r(d[0]),t=r(d[1]);
/**
   * @license
   * Copyright 2020 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   */
e.fusedBatchNormConfig={kernelName:n.FusedBatchNorm,backendName:'webgpu',kernelFunc:({inputs:n,attrs:s,backend:l})=>{const{x:o,scale:u,offset:c,mean:p,variance:h}=n,{varianceEpsilon:f}=s,N=l,b=[o,p,h];let v=null;null!=c&&(v=c.shape,b.push(c));let k=null;null!=u&&(k=u.shape,b.push(u));const B=new t.BatchNormProgram(o.shape,p.shape,h.shape,v,k),P=[{type:'float32',data:[f]}];return N.runWebGPUProgram(B,b,o.dtype,P)}}},2553,[1158,2554]);
__d(function(g,r,i,a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.BatchNormProgram=void 0;var t=r(d[0]),s=r(d[1]),n=r(d[2]);e.BatchNormProgram=
/**
   * @license
   * Copyright 2019 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   */
class{constructor(s,u,l,h,o){this.uniforms='varianceEpsilon : f32,',this.workgroupSize=[128,1,1],this.size=!0,this.variableNames=['x','mean','variance'],t.backend_util.assertAndGetBroadcastShape(s,u),t.backend_util.assertAndGetBroadcastShape(s,l),this.outputShape=s,this.dispatchLayout=(0,n.flatDispatchLayout)(this.outputShape),this.dispatch=(0,n.computeDispatch)(this.dispatchLayout,this.outputShape,this.workgroupSize),null!=h&&(t.backend_util.assertAndGetBroadcastShape(s,h),this.variableNames.push('offset')),null!=o&&(t.backend_util.assertAndGetBroadcastShape(s,o),this.variableNames.push('scale')),this.offsetShape=h,this.scaleShape=o,this.shaderKey='batchNorm'}getUserCode(){let t='0.0';null!=this.offsetShape&&(t='getOffsetByOutputIndex(index)');let n='1.0';null!=this.scaleShape&&(n='getScaleByOutputIndex(index)');return`\n      ${(0,s.getMainHeaderString)('index')} {\n        if (index < uniforms.size)\n        {\n          let xValue = getXByOutputIndex(index);\n          let meanValue = getMeanByOutputIndex(index);\n          let varianValue = getVarianceByOutputIndex(index);\n          let offsetValue = ${t};\n          let scaleValue = ${n};\n          let inv = scaleValue * inverseSqrt(varianValue + f32(uniforms.varianceEpsilon));\n          setOutputAtIndex(index,dot(vec3<f32>(xValue, -meanValue, offsetValue), vec3<f32>(inv, inv, 1.0)));\n        }\n      }\n  `}}},2554,[1158,2417,2419]);
__d(function(g,r,i,a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.fusedConv2DConfig=void 0,e.fusedConv2d=o;var n=r(d[0]),t=r(d[1]);
/**
   * @license
   * Copyright 2021 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   */
function o(o){const{inputs:u,backend:c,attrs:l}=o,{x:s,filter:v,bias:f,preluActivationWeights:p}=u,{strides:b,pad:k,dataFormat:C,dilations:D,dimRoundingMode:h,activation:_,leakyreluAlpha:A}=l,F=n.backend_util.convertConv2DDataFormat(C),y=n.backend_util.computeConv2DInfo(s.shape,v.shape,b,D,k,h,!1,F);return(0,t.conv2DImpl)({x:s,filter:v,convInfo:y,backend:c,bias:f,preluActivationWeights:p,leakyreluAlpha:A,activation:_})}e.fusedConv2DConfig={kernelName:n.FusedConv2D,backendName:'webgpu',kernelFunc:o}},2555,[1158,2495]);
__d(function(g,r,i,a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.fusedDepthwiseConv2D=s,e.fusedDepthwiseConv2DConfig=void 0;var t=r(d[0]),n=r(d[1]),o=r(d[2]);
/**
   * @license
   * Copyright 2020 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   */
function s(s){const{inputs:l,backend:h,attrs:u}=s,{x:p,filter:f,bias:c,preluActivationWeights:v}=l,{strides:D,pad:C,dilations:y,dimRoundingMode:w,activation:W,leakyreluAlpha:b}=u;let k=y;null==k&&(k=[1,1]),t.util.assert(t.backend_util.eitherStridesOrDilationsAreOne(D,k),()=>`Error in depthwiseConv2d: Either strides or dilations must be 1. Got strides ${D} and dilations '${k}'`);const H=t.backend_util.computeConv2DInfo(p.shape,f.shape,D,k,C,w,!0),_=[p,f],P=null!=c,A=null!=v;P&&_.push(c),A&&_.push(v);const I=[{type:'int32',data:[H.padInfo.top,H.padInfo.left]},{type:'int32',data:[H.inHeight,H.inWidth]}];let O;H.outHeight>4&&H.outWidth>4&&H.strideWidth<=2&&H.inChannels===H.outChannels&&1===H.dilationHeight&&1===H.dilationWidth&&H.inChannels%4==0?(O=new n.DepthwiseConv2DVec4Program(H,P,W,A),I.push({type:'int32',data:[O.virtualWidth]})):(O=new o.DepthwiseConv2DProgram(H,P,W,A),I.push({type:'int32',data:[H.filterHeight]},{type:'int32',data:[H.filterWidth]},{type:'int32',data:[H.strideHeight,H.strideWidth]},{type:'int32',data:[H.dilationHeight,H.dilationWidth]})),'leakyrelu'===W&&(I.push({type:'float32',data:[b]}),O.uniforms+=' alpha : f32,');return h.runWebGPUProgram(O,_,'float32',I)}e.fusedDepthwiseConv2DConfig={kernelName:t.FusedDepthwiseConv2D,backendName:'webgpu',kernelFunc:s}},2556,[1158,2520,2521]);
__d(function(g,r,i,a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.gatherNd=h,e.gatherNdConfig=void 0;var t=r(d[0]),n=r(d[1]),s=r(d[2]),p=r(d[3]);
/**
   * @license
   * Copyright 2021 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   */
function h(h){const{inputs:o,backend:u}=h,{params:c,indices:l}=o,b=l.shape,f=b[b.length-1],k=t.util.sizeFromShape(c.shape),[y,N,I,P]=t.backend_util.prepareAndValidate(c,l),_=(0,p.reshape)({inputs:{x:l},backend:u,attrs:{shape:[N,f]}}),v=(0,p.reshape)({inputs:{x:c},backend:u,attrs:{shape:[t.util.sizeFromShape(c.shape)/I,I]}});if(u.shouldExecuteOnCPU([c,l])||'string'===c.dtype){const t=u.readSync(l.dataId),n=u.bufferSync(c),p=(0,s.gatherNdImplCPU)(t,n,c.dtype,N,f,I,P,c.shape,k);return u.makeTensorInfo(y,c.dtype,p.values)}const x=new n.GatherNDProgram(f,[N,I]),C=[{type:'int32',data:[f]},{type:'int32',data:P}],D=u.runWebGPUProgram(x,[v,_],v.dtype,C),S=(0,p.reshape)({inputs:{x:D},backend:u,attrs:{shape:y}});return u.disposeData(_.dataId),u.disposeData(v.dataId),u.disposeData(D.dataId),S}e.gatherNdConfig={kernelName:t.GatherNd,backendName:'webgpu',kernelFunc:h}},2557,[1158,2558,2441,2433]);
__d(function(g,r,i,a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.GatherNDProgram=void 0;var t=r(d[0]),s=r(d[1]);e.GatherNDProgram=
/**
   * @license
   * Copyright 2021 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   */
class{constructor(n,o){this.variableNames=['A','indices'],this.workgroupSize=[64,1,1],this.size=!0,this.outputShape=o,this.dispatchLayout=(0,s.flatDispatchLayout)(this.outputShape),this.dispatch=(0,s.computeDispatch)(this.dispatchLayout,this.outputShape,this.workgroupSize),this.shaderKey=`gathernd_${n}`,this.sliceDim=n,this.uniforms=`sliceDim : i32, strides : ${(0,t.getCoordsDataType)(n)},`}getUserCode(){let s;s=this.sliceDim>1?'uniforms.strides[j]':'uniforms.strides';return`\n      ${(0,t.getMainHeaderString)('index')} {\n        if (index < uniforms.size) {\n          let coords = getCoordsFromIndex(index);\n          var flattenIndex = 0;\n          for (var j = 0; j < uniforms.sliceDim; j = j + 1) {\n            let indexTemp = i32(round(getIndices(coords[0], j)));\n            let strideNum = ${s};\n            flattenIndex = flattenIndex + indexTemp * strideNum;\n          }\n\n          setOutputAtIndex(index, getA(flattenIndex, coords[1]));\n        }\n      }\n      `}}},2558,[2417,2419]);
__d(function(g,r,i,a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.gatherV2=h,e.gatherV2Config=void 0;var t=r(d[0]),s=r(d[1]),n=r(d[2]),p=r(d[3]);
/**
   * @license
   * Copyright 2021 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   */
function h(h){const{inputs:u,backend:o,attrs:c}=h,{x:b,indices:l}=u,{axis:f,batchDims:S}=c,z=t.util.parseAxisParam(f,b.shape)[0],k=t.backend_util.segment_util.collectGatherOpShapeInfo(b,l,z,S),x=t.util.sizeFromShape(l.shape),I=[],P=(0,p.reshape)({inputs:{x:b},backend:o,attrs:{shape:[k.batchSize,k.outerSize,k.dimSize,k.sliceSize]}}),v=(0,p.reshape)({inputs:{x:l},backend:o,attrs:{shape:[k.batchSize,x/k.batchSize]}});I.push(P),I.push(v);const _=[k.batchSize,k.outerSize,x/k.batchSize,k.sliceSize];if(o.shouldExecuteOnCPU([b,l])){const s=o.tensorMap.get(v.dataId).values,p=(0,t.buffer)(v.shape,v.dtype,s),h=o.tensorMap.get(P.dataId).values,u=(0,t.buffer)(P.shape,P.dtype,h),c=(0,n.gatherV2ImplCPU)(u,p,_);return I.forEach(t=>o.disposeData(t.dataId)),o.makeTensorInfo(k.outputShape,c.dtype,c.values)}const y=new s.GatherProgram(P.shape,_),V=o.runWebGPUProgram(y,[P,v],P.dtype);I.push(V);const C=(0,p.reshape)({inputs:{x:V},backend:o,attrs:{shape:k.outputShape}});return I.forEach(t=>o.disposeData(t.dataId)),C}e.gatherV2Config={kernelName:t.GatherV2,backendName:'webgpu',kernelFunc:h}},2559,[1158,2560,2441,2433]);
__d(function(g,r,_i,a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.GatherProgram=void 0;var t=r(d[0]),i=r(d[1]);function s(t){const i=['resRC.x','resRC.y','resRC.z','resRC.w'],s=[];for(let n=0;n<t.length;n++)2===n?s.push('indexZ'):s.push(`${i[n]}`);return s.join()}e.GatherProgram=
/**
   * @license
   * Copyright 2021 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   */
class{constructor(t,s){this.variableNames=['A','indices'],this.workgroupSize=[64,1,1],this.size=!0,this.outputShape=t.slice(),this.aShape=t,this.outputShape=s,this.dispatchLayout=(0,i.flatDispatchLayout)(this.outputShape),this.dispatch=(0,i.computeDispatch)(this.dispatchLayout,this.outputShape,this.workgroupSize),this.shaderKey="gather"}getUserCode(){const i=s(this.aShape);return`\n      ${(0,t.getMainHeaderString)('index')} {\n        if (index < uniforms.size) {\n          let resRC = getCoordsFromIndex(index);\n          let indexZ = i32(getIndices(resRC.x, resRC.z));\n          let inBounds = select(0.0, 1.0, indexZ >= 0 && indexZ < uniforms.aShape[2]);\n          setOutputAtIndex(index, inBounds * getA(${i}));\n        }\n      }\n    `}}},2560,[2417,2419]);
__d(function(g,r,i,a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.greaterConfig=e.greater=void 0;var n=r(d[0]),t=r(d[1]),o=r(d[2]),p=r(d[3]);
/**
   * @license
   * Copyright 2021 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   */
const l=e.greater=(0,o.binaryKernelFunc)({opType:t.BinaryOpType.GREATER,cpuKernelImpl:p.greaterImplCPU,dtype:'bool'});e.greaterConfig={kernelName:n.Greater,backendName:'webgpu',kernelFunc:l}},2561,[1158,2426,2435,2441]);
__d(function(g,r,i,a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.greaterEqualConfig=e.greaterEqual=void 0;var l=r(d[0]),n=r(d[1]),u=r(d[2]),t=r(d[3]);
/**
   * @license
   * Copyright 2021 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   */
const o=e.greaterEqual=(0,u.binaryKernelFunc)({opType:n.BinaryOpType.GREATER_EQUAL,dtype:'bool',cpuKernelImpl:t.greaterEqualImplCPU});e.greaterEqualConfig={kernelName:l.GreaterEqual,backendName:'webgpu',kernelFunc:o}},2562,[1158,2426,2435,2441]);
__d(function(g,r,i,a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.ifft=t,e.ifftConfig=void 0;var n=r(d[0]),f=r(d[1]);
/**
   * @license
   * Copyright 2022 Google LLC.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   */
function t(n){const{inputs:t,backend:u}=n,{input:o}=t;return(0,f.fftImpl)(o,!0,u)}e.ifftConfig={kernelName:n.IFFT,backendName:'webgpu',kernelFunc:t}},2563,[1158,2545]);
__d(function(g,r,i,a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.isFiniteConfig=e.isFinite=void 0;var n=r(d[0]),o=r(d[1]),t=r(d[2]);
/**
   * @license
   * Copyright 2022 Google LLC.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   */
const F=e.isFinite=(0,o.unaryKernelFunc)({opType:t.UnaryOpType.IS_FINITE,dtype:'bool'});e.isFiniteConfig={kernelName:n.IsFinite,backendName:'webgpu',kernelFunc:F}},2564,[1158,2435,2427]);
__d(function(g,r,i,a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.isInfConfig=e.isInf=void 0;var n=r(d[0]),o=r(d[1]),f=r(d[2]);
/**
   * @license
   * Copyright 2022 Google LLC.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   */
const I=e.isInf=(0,o.unaryKernelFunc)({opType:f.UnaryOpType.IS_INF,dtype:'bool'});e.isInfConfig={kernelName:n.IsInf,backendName:'webgpu',kernelFunc:I}},2565,[1158,2435,2427]);
__d(function(g,r,i,a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.isNaNConfig=e.isNaN=void 0;var n=r(d[0]),N=r(d[1]),o=r(d[2]);
/**
   * @license
   * Copyright 2022 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   */
const p=e.isNaN=(0,N.unaryKernelFunc)({opType:o.UnaryOpType.IS_NAN,dtype:'bool'});e.isNaNConfig={kernelName:n.IsNan,backendName:'webgpu',kernelFunc:p}},2566,[1158,2435,2427]);
__d(function(g,r,i,a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.leakyRelu=u,e.leakyReluConfig=void 0;var n=r(d[0]),l=r(d[1]),t=r(d[2]);
/**
   * @license
   * Copyright 2021 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   */
function u(n){const{inputs:u,backend:o,attrs:p}=n,{x:y}=u,{alpha:f}=p,k=[{type:'float32',data:[f]}],c=new t.UnaryOpProgram(y.shape,l.UnaryOpType.LEAKYRELU,'alpha : f32,');return o.runWebGPUProgram(c,[y],'float32',k)}e.leakyReluConfig={kernelName:n.LeakyRelu,backendName:'webgpu',kernelFunc:u}},2567,[1158,2427,2440]);
__d(function(g,r,i,a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.lessConfig=e.less=void 0;var n=r(d[0]),l=r(d[1]),s=r(d[2]),o=r(d[3]);
/**
   * @license
   * Copyright 2021 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   */
const p=e.less=(0,s.binaryKernelFunc)({opType:l.BinaryOpType.LESS,dtype:'bool',cpuKernelImpl:o.lessImplCPU});e.lessConfig={kernelName:n.Less,backendName:'webgpu',kernelFunc:p}},2568,[1158,2426,2435,2441]);
__d(function(g,r,i,a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.lessEqualConfig=e.lessEqual=void 0;var l=r(d[0]),n=r(d[1]),s=r(d[2]),u=r(d[3]);
/**
   * @license
   * Copyright 2021 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   */
const o=e.lessEqual=(0,s.binaryKernelFunc)({opType:n.BinaryOpType.LESS_EQUAL,dtype:'bool',cpuKernelImpl:u.lessEqualImplCPU});e.lessEqualConfig={kernelName:l.LessEqual,backendName:'webgpu',kernelFunc:o}},2569,[1158,2426,2435,2441]);
__d(function(g,r,i,a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.linSpace=o,e.linSpaceConfig=void 0;var n=r(d[0]),t=r(d[1]);
/**
   * @license
   * Copyright 2022 Google LLC.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   */
function o(n){const{backend:o,attrs:c}=n,{start:l,stop:p,num:u}=c,f=(p-l)/(u-1),b=new t.LinSpaceProgram(u),s=[{type:'float32',data:[l]},{type:'float32',data:[f]}];return o.runWebGPUProgram(b,[],'float32',s)}e.linSpaceConfig={kernelName:n.LinSpace,backendName:'webgpu',kernelFunc:o}},2570,[1158,2571]);
__d(function(g,r,i,a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.LinSpaceProgram=void 0;var t=r(d[0]),s=r(d[1]);e.LinSpaceProgram=
/**
   * @license
   * Copyright 2022 Google LLC.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   */
class{constructor(t){this.variableNames=[],this.outputShape=[],this.uniforms='start : f32, step : f32,',this.workgroupSize=[64,1,1],this.size=!0,this.outputShape=[t],this.dispatchLayout=(0,s.flatDispatchLayout)(this.outputShape),this.dispatch=(0,s.computeDispatch)(this.dispatchLayout,this.outputShape,this.workgroupSize),this.shaderKey='linSpace'}getUserCode(){return`\n      ${(0,t.getMainHeaderString)('index')} {\n        if (index < uniforms.size) {\n          setOutputAtIndex(index, uniforms.start + f32(index) * uniforms.step);\n        }\n      }\n    `}}},2571,[2417,2419]);
__d(function(g,r,i,a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.logConfig=e.log=void 0;var n=r(d[0]),o=r(d[1]),l=r(d[2]),p=r(d[3]);
/**
   * @license
   * Copyright 2021 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   */
const u=e.log=(0,o.unaryKernelFunc)({opType:p.UnaryOpType.LOG,cpuKernelImpl:l.logImplCPU});e.logConfig={kernelName:n.Log,backendName:'webgpu',kernelFunc:u}},2572,[1158,2435,2441,2427]);
__d(function(g,r,i,a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.log1pConfig=e.log1p=void 0;var n=r(d[0]),o=r(d[1]),p=r(d[2]);
/**
   * @license
   * Copyright 2022 Google LLC.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   */
const l=e.log1p=(0,o.unaryKernelFunc)({opType:p.UnaryOpType.LOG1P});e.log1pConfig={kernelName:n.Log1p,backendName:'webgpu',kernelFunc:l}},2573,[1158,2435,2427]);
__d(function(g,r,i,a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.logicalAndConfig=e.logicalAnd=void 0;var n=r(d[0]),l=r(d[1]),o=r(d[2]);
/**
   * @license
   * Copyright 2021 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   */
const c=e.logicalAnd=(0,o.binaryKernelFunc)({opType:l.BinaryOpType.LOGICAL_AND,dtype:'bool'});e.logicalAndConfig={kernelName:n.LogicalAnd,backendName:'webgpu',kernelFunc:c}},2574,[1158,2426,2435]);
__d(function(g,r,i,a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.logicalNotConfig=e.logicalNot=void 0;var o=r(d[0]),l=r(d[1]),n=r(d[2]);
/**
   * @license
   * Copyright 2021 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   */
const c=e.logicalNot=(0,l.unaryKernelFunc)({opType:n.UnaryOpType.LOGICAL_NOT});e.logicalNotConfig={kernelName:o.LogicalNot,backendName:'webgpu',kernelFunc:c}},2575,[1158,2435,2427]);
__d(function(g,r,i,a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.logicalOrConfig=e.logicalOr=void 0;var l=r(d[0]),n=r(d[1]),o=r(d[2]);
/**
   * @license
   * Copyright 2022 Google LLC.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   */
const c=e.logicalOr=(0,o.binaryKernelFunc)({opType:n.BinaryOpType.LOGICAL_OR});e.logicalOrConfig={kernelName:l.LogicalOr,backendName:'webgpu',kernelFunc:c}},2576,[1158,2426,2435]);
__d(function(g,r,i,a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.lrn=o,e.lrnConfig=void 0;var t=r(d[0]),n=r(d[1]);
/**
   * @license
   * Copyright 2022 Google LLC.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   */
function o(t){const{inputs:o,backend:l,attrs:p}=t,{x:u}=o,{depthRadius:s,bias:c,alpha:f,beta:b}=p;let y;y=s>16?new n.LRNProgram(u.shape):new n.LRNSharedProgram(u.shape,s);const h=[{type:'int32',data:[s]},{type:'float32',data:[c]},{type:'float32',data:[f]},{type:'float32',data:[b]}];return l.runWebGPUProgram(y,[u],u.dtype,h)}e.lrnConfig={kernelName:t.LRN,backendName:'webgpu',kernelFunc:o}},2577,[1158,2578]);
__d(function(g,r,i,a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.LRNSharedProgram=e.LRNProgram=void 0;var t=r(d[0]),s=r(d[1]),o=r(d[2]);
/**
   * @license
   * Copyright 2022 Google LLC.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   */
const n="\n  var powValue = 0.0;\n  let basis = uniforms.bias + uniforms.alpha * sum;\n  if (uniforms.beta == 0.5) {\n    powValue = inverseSqrt(basis);\n  } else if (uniforms.beta == 1.0) {\n    powValue = 1.0 / basis;\n  } else {\n    powValue = exp(log(basis) * (-uniforms.beta));\n  }\n";e.LRNProgram=class{constructor(t){this.outputShape=[],this.variableNames=['x'],this.uniforms='radius : i32, bias : f32, alpha : f32, beta : f32,',this.workgroupSize=[64,1,1],this.size=!0,this.outputShape=t,this.dispatchLayout=(0,o.flatDispatchLayout)(this.outputShape),this.dispatch=(0,o.computeDispatch)(this.dispatchLayout,this.outputShape,this.workgroupSize),this.shaderKey='lrn'}getUserCode(){return`\n    ${(0,s.getMainHeaderString)('index')} {\n      if (index < uniforms.size) {\n        let coords = getOutputCoords();\n        let b = coords[0];\n        let r = coords[1];\n        let c = coords[2];\n        let d = coords[3];\n\n        let x = getX(b, r, c, d);\n        var sum = 0.0;\n        for (var i = -uniforms.radius; i <= uniforms.radius; i = i + 1) {\n          let idx = d + i;\n          if (idx >= 0 && idx < uniforms.xShape[3]) {\n            let z = getX(b, r, c, idx);\n            sum = sum + z * z;\n          }\n        }\n        ${n}\n\n        setOutputAtIndex(index, x * powValue);\n      }\n    }\n  `}};e.LRNSharedProgram=class{constructor(s,n){this.outputShape=[],this.variableNames=['x'],this.uniforms='radius : i32, bias : f32, alpha : f32, beta : f32,',this.workgroupSize=[256,1,1],this.maxAllowRadius=16,t.util.assert(n<=this.maxAllowRadius,()=>`Radius must be less than or equal to ${this.maxAllowRadius}, current radius is ${n}`),this.outputShape=s,this.elementsPerWorkgroup=this.workgroupSize[0]-2*this.maxAllowRadius,this.dispatchLayout={x:[3],y:[2],z:[0,1]},this.dispatch=(0,o.computeDispatch)(this.dispatchLayout,this.outputShape,[this.elementsPerWorkgroup,this.workgroupSize[1],this.workgroupSize[2]]),this.shaderKey='lrn_shared'}getUserCode(){return`\n    var <workgroup>lrnSub: array<f32, ${this.workgroupSize[0]}>;\n    const elementsPerWorkgroup = ${this.elementsPerWorkgroup};\n    const maxAllowRadius = ${this.maxAllowRadius};\n\n    ${(0,s.getMainHeaderString)()} {\n      let localDepth = i32(localId.x);\n      let workgroupDepth = i32(workgroupId.x) * elementsPerWorkgroup;\n      let xDepth = workgroupDepth + localDepth - maxAllowRadius;\n      let b = i32(globalId.z) / uniforms.xShape[1];\n      let r = i32(globalId.z) - b * uniforms.xShape[1];\n      let c = i32(globalId.y);\n      let d = workgroupDepth + localDepth;\n\n      var x = 0.0;\n      if (xDepth >= 0 && xDepth < uniforms.xShape[3]) {\n        x = getX(b, r, c, xDepth);\n      }\n      lrnSub[localDepth] = x;\n      workgroupBarrier();\n\n      if (localDepth < elementsPerWorkgroup && d < uniforms.outShape[3]) {\n        var sum = 0.0;\n        let index = localDepth + maxAllowRadius;\n        for (var i = -uniforms.radius; i <= uniforms.radius; i = i + 1) {\n          let z = lrnSub[index + i];\n          sum = sum + z * z;\n        }\n        ${n}\n\n        setOutputAtCoords(b, r, c, d, lrnSub[index] * powValue);\n      }\n    } `}}},2578,[1158,2417,2419]);
__d(function(g,r,i,a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.lrnGrad=o,e.lrnGradConfig=void 0;var t=r(d[0]),n=r(d[1]);
/**
   * @license
   * Copyright 2023 Google LLC.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   */
function o(t){const{inputs:o,backend:l,attrs:p}=t,{x:u,y:f,dy:y}=o,{depthRadius:b,bias:c,alpha:s,beta:G}=p,k=new n.LRNGradProgram(u.shape),N=[{type:'int32',data:[b]},{type:'float32',data:[c]},{type:'float32',data:[s]},{type:'float32',data:[G]}];return l.runWebGPUProgram(k,[u,f,y],u.dtype,N)}e.lrnGradConfig={kernelName:t.LRNGrad,backendName:'webgpu',kernelFunc:o}},2579,[1158,2580]);
__d(function(g,r,i,a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.LRNGradProgram=void 0;var n=r(d[0]),t=r(d[1]);e.LRNGradProgram=
/**
   * @license
   * Copyright 2023 Google LLC.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   */
class{constructor(n){this.outputShape=[],this.variableNames=['inputImage','outputImage','dy'],this.uniforms='depthRadius : i32, bias : f32, alpha : f32, beta : f32,',this.workgroupSize=[64,1,1],this.size=!0,this.outputShape=n,this.dispatchLayout=(0,t.flatDispatchLayout)(this.outputShape),this.dispatch=(0,t.computeDispatch)(this.dispatchLayout,this.outputShape,this.workgroupSize),this.shaderKey='lrn_grad'}getUserCode(){return`\n    ${(0,n.getMainHeaderString)('index')} {\n      if (index < uniforms.size) {\n        let coords = getOutputCoords();\n        let b = coords[0];\n        let r = coords[1];\n        let c = coords[2];\n\n        let MIN_DEPTH_BEGIN = 0;\n        let MAX_DEPTH_END = uniforms.outShape[3];\n        var result = 0.0;\n        for (var d = MIN_DEPTH_BEGIN; d < MAX_DEPTH_END; d++) {\n          let depthBegin = max(MIN_DEPTH_BEGIN, d - uniforms.depthRadius);\n          let depthEnd = min(MAX_DEPTH_END, d + uniforms.depthRadius + 1);\n\n          var norm = 0.0;\n          for (var k = MIN_DEPTH_BEGIN; k < MAX_DEPTH_END; k++) {\n            if (k < depthBegin) {\n              continue;\n            } else if (k >= depthBegin && k < depthEnd) {\n              norm += getInputImage(b, r, c, k) * getInputImage(b, r, c, k);\n            } else {\n              break;\n            }\n          }\n\n          norm = uniforms.alpha * norm + uniforms.bias;\n\n          for (var k = MIN_DEPTH_BEGIN; k < MAX_DEPTH_END; k++) {\n            if (k < depthBegin) {\n              continue;\n            } else if (k >= depthBegin && k < depthEnd) {\n              var dyi = -2.0 * uniforms.alpha * uniforms.beta\n                * getInputImage(b, r, c, k) * getOutputImage(b, r, c, d) / norm;\n              if (k == d) {\n                dyi += pow(norm, -1.0 * uniforms.beta);\n              }\n              if (k == coords[3]) {\n                dyi *= getDy(b, r, c, d);\n                result += dyi;\n              }\n            } else {\n              break;\n            }\n          }\n        }\n\n        setOutputAtIndex(index, result);\n      }\n    }\n  `}}},2580,[2417,2419]);
__d(function(g,r,i,a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.maximumConfig=e.maximum=void 0;var n=r(d[0]),u=r(d[1]),p=r(d[2]),l=r(d[3]);
/**
   * @license
   * Copyright 2020 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   */
const o=e.maximum=(0,p.binaryKernelFunc)({opType:u.BinaryOpType.MAX,cpuKernelImpl:l.maximumImplCPU});e.maximumConfig={kernelName:n.Maximum,backendName:'webgpu',kernelFunc:o}},2581,[1158,2426,2435,2441]);
__d(function(g,r,i,a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.maxPool=l,e.maxPoolConfig=void 0;var o=r(d[0]),n=r(d[1]);
/**
   * @license
   * Copyright 2021 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   */
function l(l){const{inputs:t,backend:u,attrs:c}=l,{x:p}=t,{filterSize:f,strides:s,pad:x,dimRoundingMode:P}=c,b=o.backend_util.computePool2DInfo(p.shape,f,s,1,x,P);return(0,n.poolImpl)(p,b,'max',u)}e.maxPoolConfig={kernelName:o.MaxPool,backendName:'webgpu',kernelFunc:l}},2582,[1158,2463]);
__d(function(g,r,i,a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.maxPool3DConfig=void 0,e.maxPool3d=o;var t=r(d[0]),n=r(d[1]);
/**
   * @license
   * Copyright 2023 Google LLC.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   */
function o(o){const{inputs:f,backend:p,attrs:l}=o,{x:c}=f,{filterSize:u,strides:h,pad:s,dataFormat:P,dimRoundingMode:D}=l,b=t.backend_util.computePool3DInfo(c.shape,u,h,[1,1,1],s,D,P),v=new n.Pool3DProgram(b,'max'),x=[{type:'int32',data:[b.strideDepth,b.strideHeight,b.strideWidth]},{type:'int32',data:[b.padInfo.front,b.padInfo.top,b.padInfo.left]},{type:'int32',data:[b.inDepth,b.inHeight,b.inWidth]},{type:'int32',data:[b.effectiveFilterDepth,b.effectiveFilterHeight,b.effectiveFilterWidth]}];return p.runWebGPUProgram(v,[c],c.dtype,x)}e.maxPool3DConfig={kernelName:t.MaxPool3D,backendName:'webgpu',kernelFunc:o}},2583,[1158,2465]);
__d(function(g,r,i,a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.maxPool3DGrad=p,e.maxPool3DGradConfig=void 0;var t=r(d[0]),n=r(d[1]),o=r(d[2]);
/**
   * @license
   * Copyright 2023 Google LLC.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   */
function p(p){const{inputs:f,backend:l,attrs:h}=p,{dy:c,input:s}=f,u=s,{filterSize:D,strides:P,pad:y,dimRoundingMode:v}=h,F=t.backend_util.computePool3DInfo(u.shape,D,P,[1,1,1],y,v),W=new o.Pool3DProgram(F,'max',!0);let I=[{type:'int32',data:[F.strideDepth,F.strideHeight,F.strideWidth]},{type:'int32',data:[F.padInfo.front,F.padInfo.top,F.padInfo.left]},{type:'int32',data:[F.inDepth,F.inHeight,F.inWidth]},{type:'int32',data:[F.effectiveFilterDepth,F.effectiveFilterHeight,F.effectiveFilterWidth]}];const b=l.runWebGPUProgram(W,[u],'int32',I),H=new n.MaxPool3DBackpropProgram(F);I=[{type:'int32',data:[F.strideDepth,F.strideHeight,F.strideWidth]},{type:'int32',data:[F.effectiveFilterDepth-1-F.padInfo.front,F.effectiveFilterHeight-1-F.padInfo.top,F.effectiveFilterWidth-1-F.padInfo.left]},{type:'int32',data:[F.effectiveFilterDepth,F.effectiveFilterHeight,F.effectiveFilterWidth]},{type:'int32',data:[F.outDepth]},{type:'int32',data:[F.outHeight]},{type:'int32',data:[F.outWidth]}];const k=l.runWebGPUProgram(H,[c,b],u.dtype,I);return l.disposeData(b.dataId),k}e.maxPool3DGradConfig={kernelName:t.MaxPool3DGrad,backendName:'webgpu',kernelFunc:p}},2584,[1158,2585,2465]);
__d(function(g,r,i,a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.MaxPool3DBackpropProgram=e.MaxPool2DBackpropProgram=void 0;var t=r(d[0]),n=r(d[1]);e.MaxPool2DBackpropProgram=
/**
   * @license
   * Copyright 2023 Google LLC.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   */
class{constructor(t){this.variableNames=['dy','maxPos'],this.uniforms="strides : vec2<i32>, pads : vec2<i32>, dilations : vec2<i32>, filterDims : vec2<i32>,\n       outHeight : i32, outWidth : i32",this.workgroupSize=[64,1,1],this.size=!0,this.outputShape=t.inShape,this.dispatchLayout=(0,n.flatDispatchLayout)(this.outputShape),this.dispatch=(0,n.computeDispatch)(this.dispatchLayout,this.outputShape,this.workgroupSize),this.shaderKey='maxPool2DBackprop'}getUserCode(){return`\n      ${(0,t.getMainHeaderString)('index')} {\n      if (index < uniforms.size) {\n        let coords = getCoordsFromIndex(index);\n        let batch = coords[0];\n        let d = coords[3];\n\n        let dyRCCorner = vec2<i32>(coords.yz) - uniforms.pads;\n        let dyRCorner = dyRCCorner.x;\n        let dyCCorner = dyRCCorner.y;\n\n        // Convolve dy(?, ?, d) with pos mask(:, :, d) to get dx(xR, xC, d).\n        // ? = to be determined. : = across all values in that axis.\n        var dotProd = 0.0;\n        let lastIndex = uniforms.filterDims[0] * uniforms.filterDims[1] - 1;\n        for (var wR = 0; wR < uniforms.filterDims[0]; wR += uniforms.dilations[0]) {\n          let dyR = f32(dyRCorner + wR) / f32(uniforms.strides[0]);\n\n          if (dyR < 0.0 || dyR >= f32(uniforms.outHeight) || fract(dyR) > 0.0) {\n            continue;\n          }\n          let idyR = i32(dyR);\n\n          for (var wC = 0; wC < uniforms.filterDims[1]; wC += uniforms.dilations[1]) {\n            let dyC = f32(dyCCorner + wC) / f32(uniforms.strides[1]);\n\n            if (dyC < 0.0 || dyC >= f32(uniforms.outWidth) || fract(dyC) > 0.0) {\n              continue;\n            }\n            let idyC = i32(dyC);\n\n            let dyValue = getDy(batch, idyR, idyC, d);\n            let maxPosValue = lastIndex - i32(getMaxPos(batch, idyR, idyC, d));\n\n            // Get the current value, check it against the value from the\n            // position matrix.\n            let curPosValue = wR * uniforms.filterDims[1] + wC;\n            let mask = select(0.0, 1.0, maxPosValue == curPosValue);\n            dotProd += dyValue * mask;\n          }\n        }\n        setOutputAtIndex(index, dotProd);\n      }\n    }\n    `}};e.MaxPool3DBackpropProgram=class{constructor(t){this.variableNames=['dy','maxPos'],this.uniforms="strides : vec3<i32>, pads : vec3<i32>, filterDims : vec3<i32>,\n      outDepth : i32, outHeight : i32, outWidth : i32",this.workgroupSize=[64,1,1],this.size=!0,this.outputShape=t.inShape,this.dispatchLayout=(0,n.flatDispatchLayout)(this.outputShape),this.dispatch=(0,n.computeDispatch)(this.dispatchLayout,this.outputShape,this.workgroupSize),this.shaderKey='maxPool3DBackprop'}getUserCode(){return`\n      ${(0,t.getMainHeaderString)('index')} {\n      if (index < uniforms.size) {\n        let coords = getCoordsFromIndex(index);\n        let batch = coords.x;\n        let ch = coords.u;\n\n        let dyCorner = vec3<i32>(coords.y, coords.z, coords.w) - uniforms.pads;\n        let dyDCorner = dyCorner.x;\n        let dyRCorner = dyCorner.y;\n        let dyCCorner = dyCorner.z;\n\n        // Convolve dy(?, ?, ?, ch) with pos mask(:, :, :, d) to get\n        // dx(xD, xR, xC, ch).\n        // ? = to be determined. : = across all values in that axis.\n        var dotProd = 0.0;\n        let lastIndex = uniforms.filterDims[0] * uniforms.filterDims[1] * uniforms.filterDims[2] - 1;\n\n        for (var wD = 0; wD < uniforms.filterDims[0]; wD++) {\n          let dyD = f32(dyDCorner + wD) / f32(uniforms.strides[0]);\n\n          if (dyD < 0.0 || dyD >= f32(uniforms.outDepth) || fract(dyD) > 0.0) {\n            continue;\n          }\n          let idyD = i32(dyD);\n\n          for (var wR = 0; wR < uniforms.filterDims[1]; wR++) {\n            let dyR = f32(dyRCorner + wR) / f32(uniforms.strides[1]);\n\n            if (dyR < 0.0 || dyR >= f32(uniforms.outHeight) || fract(dyR) > 0.0) {\n              continue;\n            }\n            let idyR = i32(dyR);\n\n            for (var wC = 0; wC < uniforms.filterDims[2]; wC++) {\n              let dyC = f32(dyCCorner + wC) / f32(uniforms.strides[2]);\n\n              if (dyC < 0.0 || dyC >= f32(uniforms.outWidth) || fract(dyC) > 0.0) {\n                continue;\n              }\n              let idyC = i32(dyC);\n\n              let dyValue = getDy(batch, idyD, idyR, idyC, ch);\n              let maxPosValue = lastIndex - i32(getMaxPos(batch, idyD, idyR, idyC, ch));\n\n              // Get the current value, check it against the value from the\n              // position matrix.\n              let curPosValue = wD * uniforms.filterDims[1] * uniforms.filterDims[2] + wR * uniforms.filterDims[2] + wC;\n              let mask = select(0.0, 1.0, maxPosValue == curPosValue);\n              dotProd += dyValue * mask;\n            }\n          }\n        }\n\n        setOutputAtIndex(index, dotProd);\n      }\n    }\n    `}}},2585,[2417,2419]);
__d(function(g,r,i,a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.maxPoolGrad=l,e.maxPoolGradConfig=void 0;var t=r(d[0]),o=r(d[1]),n=r(d[2]),p=r(d[3]);
/**
   * @license
   * Copyright 2023 Google LLC.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   */
function l(l){const{inputs:f,backend:c,attrs:h}=l,{dy:s,input:u,output:P}=f,y=u;(0,p.assertNotComplex)([u,P],'maxPoolGrad');const{filterSize:W,strides:v,pad:H,dimRoundingMode:x}=h,b=t.backend_util.computePool2DInfo(y.shape,W,v,1,H,x),F=new n.Pool2DProgram(b,'max',!0);let G=[{type:'int32',data:[b.strideHeight,b.strideWidth]},{type:'int32',data:[b.padInfo.top,b.padInfo.left]},{type:'int32',data:[b.dilationHeight,b.dilationWidth]},{type:'int32',data:[b.inHeight,b.inWidth]},{type:'int32',data:[b.effectiveFilterHeight,b.effectiveFilterWidth]}];const k=c.runWebGPUProgram(F,[y],'int32',G),I=new o.MaxPool2DBackpropProgram(b);G=[{type:'int32',data:[b.strideHeight,b.strideWidth]},{type:'int32',data:[b.effectiveFilterHeight-1-b.padInfo.top,b.effectiveFilterWidth-1-b.padInfo.left]},{type:'int32',data:[b.dilationHeight,b.dilationWidth]},{type:'int32',data:[b.effectiveFilterHeight,b.effectiveFilterWidth]},{type:'int32',data:[b.outHeight]},{type:'int32',data:[b.outWidth]}];const _=c.runWebGPUProgram(I,[s,k],y.dtype,G);return c.disposeData(k.dataId),_}e.maxPoolGradConfig={kernelName:t.MaxPoolGrad,backendName:'webgpu',kernelFunc:l}},2586,[1158,2585,2465,2419]);
__d(function(g,r,i,a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.maxPoolWithArgmax=o,e.maxPoolWithArgmaxConfig=void 0;var t=r(d[0]),n=r(d[1]);
/**
   * @license
   * Copyright 2022 Google LLC.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   */
function o(o){const{inputs:l,backend:s,attrs:h}=o,{filterSize:u,strides:p,pad:c,includeBatchInIndex:P}=h,{x:f}=l;t.util.assert(4===f.shape.length,()=>`Error in maxPool: input must be rank 4 but got rank ${f.shape.length}.`);const x=[1,1];t.util.assert(t.backend_util.eitherStridesOrDilationsAreOne(p,x),()=>`Error in maxPool: Either strides or dilations must be 1. Got strides ${p} and dilations '${x}'`);const b=t.backend_util.computePool2DInfo(f.shape,u,p,x,c),W=[{type:'int32',data:[b.strideHeight,b.strideWidth]},{type:'int32',data:[b.padInfo.top,b.padInfo.left]},{type:'int32',data:[b.dilationHeight,b.dilationWidth]},{type:'int32',data:[b.inHeight,b.inWidth]},{type:'int32',data:[b.effectiveFilterHeight,b.effectiveFilterWidth]}];let k=new n.Pool2DProgram(b,'max',!1);const y=s.runWebGPUProgram(k,[f],f.dtype,W);k=new n.Pool2DProgram(b,'max',!0,!0,P);return[y,s.runWebGPUProgram(k,[f],'int32',W)]}e.maxPoolWithArgmaxConfig={kernelName:t.MaxPoolWithArgmax,backendName:'webgpu',kernelFunc:o}},2587,[1158,2465]);
__d(function(g,r,i,a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.min=u,e.minConfig=void 0;var n=r(d[0]),t=r(d[1]);
/**
   * @license
   * Copyright 2021 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   */
function u(n){const{inputs:u,backend:c,attrs:o}=n,{x:s}=u,{axis:f,keepDims:k}=o;return(0,t.reduce)(s,f,k,'min',c)}e.minConfig={kernelName:n.Min,backendName:'webgpu',kernelFunc:u}},2588,[1158,2448]);
__d(function(g,r,i,a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.minimumConfig=e.minimum=void 0;var n=r(d[0]),u=r(d[1]),p=r(d[2]),l=r(d[3]);
/**
   * @license
   * Copyright 2021 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   */
const o=e.minimum=(0,p.binaryKernelFunc)({opType:u.BinaryOpType.MIN,cpuKernelImpl:l.minimumImplCPU});e.minimumConfig={kernelName:n.Minimum,backendName:'webgpu',kernelFunc:o}},2589,[1158,2426,2435,2441]);
__d(function(g,r,i,a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.mirrorPadConfig=void 0;var n=r(d[0]),o=r(d[1]);
/**
   * @license
   * Copyright 2020 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   */
e.mirrorPadConfig={kernelName:n.MirrorPad,backendName:'webgpu',kernelFunc:({inputs:n,attrs:t,backend:p})=>{const{x:u}=n,{paddings:P,mode:c}=t,s=p,b=P.map(n=>({type:'int32',data:[n[0],n[1]]})),f=new o.MirrorPadProgram(u.shape,P,c);return s.runWebGPUProgram(f,[u],u.dtype,b)}}},2590,[1158,2591]);
__d(function(g,r,_i,a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.MirrorPadProgram=void 0;var t=r(d[0]),i=r(d[1]);e.MirrorPadProgram=
/**
   * @license
   * Copyright 2020 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   */
class{constructor(t,s,o){this.uniforms='',this.variableNames=['x'],this.workgroupSize=[64,1,1],this.size=!0,this.outputShape=s.map((i,s)=>i[0]+t[s]+i[1]),this.dispatchLayout=(0,i.flatDispatchLayout)(this.outputShape),this.dispatch=(0,i.computeDispatch)(this.dispatchLayout,this.outputShape,this.workgroupSize),this.xShape=t,s.map((t,i)=>{this.uniforms+=` pad${i} : vec2<i32>,`}),this.offset='reflect'===o?0:1,this.shaderKey=`mirrorPad_${o}`}getUserCode(){const i=this.xShape.length,s=this.xShape.map((t,i)=>`uniforms.pad${i}[0]`).join(','),o=this.xShape.map((t,s)=>`uniforms.pad${s}[0] + uniforms.xShape${i>1?`[${s}]`:''}`).join(','),n=1===i?'start':'start[i]',h=1===i?'end':'end[i]',p=1===i?'outC':'outC[i]',u=(0,t.getCoordsDataType)(i),$=i>1?['coords[0]','coords[1]','coords[2]','coords[3]'].slice(0,i):'coords';return`\n      ${(0,t.getMainHeaderString)('index')} {\n        if (index < uniforms.size) {\n          let start = ${u}(${s});\n          let end = ${u}(${o});\n          var outC = getCoordsFromIndex(index);\n          for (var i = 0; i < ${i}; i = i + 1) {\n            if (${p} < ${n}) {\n              ${p} = ${n} * 2 - ${p} - ${this.offset};\n            } else if(${p} >= ${h}) {\n              ${p} = (${h} - 1) * 2 - ${p} + ${this.offset};\n            }\n          }\n          let coords = outC - start;\n          setOutputAtIndex(index, getX(${$}));\n        }\n      }\n    `}}},2591,[2417,2419]);
__d(function(g,r,i,a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.modConfig=e.mod=void 0;var n=r(d[0]),o=r(d[1]),c=r(d[2]);
/**
   * @license
   * Copyright 2022 Google LLC.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   */
const p=e.mod=(0,c.binaryKernelFunc)({opType:o.BinaryOpType.MOD});e.modConfig={kernelName:n.Mod,backendName:'webgpu',kernelFunc:p}},2592,[1158,2426,2435]);
__d(function(g,r,i,a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.multinomial=l,e.multinomialConfig=void 0;var t=r(d[0]),n=r(d[1]),o=r(d[2]);
/**
   * @license
   * Copyright 2023 Google LLC.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   */
function l(t){const{inputs:l,backend:s,attrs:u}=t,{logits:p}=l,{numSamples:c,seed:f,normalized:b}=u,k=b?p:(0,o.softmax)({inputs:{logits:p},backend:s,attrs:{dim:p.shape.length-1}}),h=k.shape[0],P=k.shape[1],_=new n.MultinomialProgram(h,c),v=[{type:'float32',data:[f]},{type:'int32',data:[P]}],y=s.runWebGPUProgram(_,[k],'int32',v);return b||s.disposeData(k.dataId),y}e.multinomialConfig={kernelName:t.Multinomial,backendName:'webgpu',kernelFunc:l}},2593,[1158,2594,2595]);
__d(function(g,r,i,a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.MultinomialProgram=void 0;var t=r(d[0]),n=r(d[1]);e.MultinomialProgram=
/**
   * @license
   * Copyright 2023 Google LLC.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   */
class{constructor(t,o){this.variableNames=['probs'],this.outputShape=[],this.uniforms='seed : f32, numOutcomes: i32,',this.workgroupSize=[64,1,1],this.size=!0,this.outputShape=[t,o],this.dispatchLayout=(0,n.flatDispatchLayout)(this.outputShape),this.dispatch=(0,n.computeDispatch)(this.dispatchLayout,this.outputShape,this.workgroupSize),this.shaderKey='multinomial'}getUserCode(){return`\n    //Based on the work of Dave Hoskins\n    //https://www.shadertoy.com/view/4djSRW\n    fn random (seed : f32, resultUV : vec2<f32>) -> f32 {\n      let HASHSCALE1 = 443.8975;\n      let p = resultUV * seed;\n      var p3  = fract(vec3<f32>(p.xyx) * HASHSCALE1);\n      p3 = p3 + dot(p3, p3.yzx + 19.19);\n      return fract((p3.x + p3.y) * p3.z);\n    }\n\n    ${(0,t.getMainHeaderString)('index')} {\n      if (index < uniforms.size) {\n        let coords = getOutputCoords();\n        let batch = coords[0];\n\n        let resUV = vec2<f32>(f32(coords[1]) / f32(uniforms.outShape[1]),\n            f32(coords[0]) / f32(uniforms.outShape[0]));\n        let r = random(uniforms.seed, resUV);\n        var cdf = 0.0;\n        for (var i = 0; i < uniforms.numOutcomes - 1; i = i + 1) {\n          cdf = cdf + getProbs(batch, i);\n\n          if (r < cdf) {\n            setOutputAtIndexI32(index, i);\n            return;\n          }\n        }\n\n        // If no other event happened, last event happened.\n        setOutputAtIndexI32(index, uniforms.numOutcomes - 1);\n      }\n    }\n  `}}},2594,[2417,2419]);
__d(function(g,r,i,a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.softmax=o,e.softmaxConfig=void 0;var t=r(d[0]),s=r(d[1]),n=r(d[2]);
/**
   * @license
   * Copyright 2021 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   */
function o(o){const{inputs:p,backend:u,attrs:f}=o,{logits:h}=p,{dim:c}=f,b=(0,n.reshape)({inputs:{x:h},backend:u,attrs:{shape:[t.util.sizeFromShape(h.shape)/h.shape[c],h.shape[c]]}}),x=new s.SoftmaxProgram(b.shape),k=u.runWebGPUProgram(x,[b],h.dtype),l=(0,n.reshape)({inputs:{x:k},backend:u,attrs:{shape:h.shape}});return u.disposeData(b.dataId),u.disposeData(k.dataId),l}e.softmaxConfig={kernelName:t.Softmax,backendName:'webgpu',kernelFunc:o}},2595,[1158,2596,2433]);
__d(function(g,r,i,a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.SoftmaxProgram=void 0;var o=r(d[0]),t=r(d[1]);e.SoftmaxProgram=
/**
   * @license
   * Copyright 2023 Google LLC.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   */
class{constructor(o){this.variableNames=['logits'],this.outputShape=o,this.dispatchLayout=(0,t.flatDispatchLayout)(this.outputShape),this.dispatch=[this.outputShape[0],1,1],this.outputShape[1]>=4096?this.workgroupSize=[256,1,1]:this.workgroupSize=[64,1,1],this.shaderKey='softmax'}getUserCode(){return`\n    var<workgroup> buf : array<f32, ${this.workgroupSize[0]}>;\n    var<workgroup> rowMaxShared : f32;\n    var<workgroup> rowSumShared : f32;\n    const blockSize = ${this.workgroupSize[0]};\n    ${(0,o.getMainHeaderString)('index')} {\n      let row = index / blockSize;\n      let tid = i32(localId.x);\n      let cols = uniforms.outShape[1];\n\n      var threadMax = -3.402823e+38f;\n      for (var col = tid; col < cols; col += blockSize) {\n        let value = getLogits(row, col);\n        threadMax = max(threadMax, value);\n      }\n      if (tid < cols) {\n        buf[tid] = threadMax;\n      }\n      workgroupBarrier();\n\n      var reduceSize = min(cols, blockSize);\n      for (var currSize = reduceSize >> 1;  currSize > 0; currSize = reduceSize >> 1) {\n        reduceSize = currSize + (reduceSize & 1);\n        if (tid < currSize) {\n          buf[tid] = max(buf[tid], buf[tid + reduceSize]);\n        }\n        workgroupBarrier();\n      }\n\n      if (tid == 0) {\n        rowMaxShared = buf[0];\n      }\n      workgroupBarrier();\n\n      var threadSum = 0.0;\n      for (var col = tid; col < cols; col += blockSize) {\n        let subExp = exp(getLogits(row, col) - rowMaxShared);\n        threadSum += subExp;\n      }\n      buf[tid] = threadSum;\n      workgroupBarrier();\n\n      for (var currSize = blockSize >> 1;  currSize > 0; currSize = currSize >> 1) {\n        if (tid < currSize) {\n          buf[tid] = buf[tid] + buf[tid + currSize];\n        }\n        workgroupBarrier();\n      }\n\n      if (tid == 0) {\n        rowSumShared = buf[0];\n      }\n      workgroupBarrier();\n\n      for (var col = tid; col < cols; col += blockSize) {\n        let value = exp(getLogits(row, col) - rowMaxShared) / rowSumShared;\n        setOutputAtCoords(row, col, value);\n      }\n  }\n    `}}},2596,[2417,2419]);
__d(function(g,r,i,a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.neg=u,e.negConfig=void 0;var n=r(d[0]),t=r(d[1]),o=r(d[2]),p=r(d[3]);
/**
   * @license
   * Copyright 2021 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   */
function u(n){const{inputs:u,backend:s}=n,{x:c}=u;if(s.shouldExecuteOnCPU([c])){const n=s.tensorMap.get(c.dataId),[o,p]=(0,t.negImplCPU)(n.values,c.shape,c.dtype);return s.makeTensorInfo(p,c.dtype,o)}const f=new p.UnaryOpProgram(c.shape,o.UnaryOpType.NEG);return s.runWebGPUProgram(f,[c],c.dtype)}e.negConfig={kernelName:n.Neg,backendName:'webgpu',kernelFunc:u}},2597,[1158,2441,2427,2440]);
__d(function(g,r,i,a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.nonMaxSuppressionV3=o,e.nonMaxSuppressionV3Config=void 0;var n=r(d[0]);
/**
   * @license
   * Copyright 2020 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   */function o(o){console.warn("tf.nonMaxSuppression() in webgpu locks the UI thread. Call tf.nonMaxSuppressionAsync() instead");const{inputs:s,backend:t,attrs:p}=o,{boxes:u,scores:c}=s,{maxOutputSize:l,iouThreshold:S,scoreThreshold:x}=p,f=t.readSync(u.dataId),M=t.readSync(c.dataId),{selectedIndices:h}=n.kernel_impls.nonMaxSuppressionV3Impl(f,M,l,S,x);return t.makeTensorInfo([h.length],'int32',new Int32Array(h))}e.nonMaxSuppressionV3Config={kernelName:n.NonMaxSuppressionV3,backendName:'webgpu',kernelFunc:o}},2598,[1158]);
__d(function(g,r,i,a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.nonMaxSuppressionV5=o,e.nonMaxSuppressionV5Config=void 0;var n=r(d[0]);
/**
   * @license
   * Copyright 2020 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   */function o(o){console.warn("tf.nonMaxSuppression() in webgpu locks the UI thread. Call tf.nonMaxSuppressionAsync() instead");const{inputs:s,backend:t,attrs:p}=o,{boxes:l,scores:u}=s,{maxOutputSize:c,iouThreshold:S,scoreThreshold:f,softNmsSigma:x}=p,h=t.readSync(l.dataId),k=t.readSync(u.dataId),I=c,M=S,b=f,y=x,{selectedIndices:w,selectedScores:V}=n.kernel_impls.nonMaxSuppressionV5Impl(h,k,I,M,b,y);return[t.makeTensorInfo([w.length],'int32',new Int32Array(w)),t.makeTensorInfo([V.length],'float32',new Float32Array(V))]}e.nonMaxSuppressionV5Config={kernelName:n.NonMaxSuppressionV5,backendName:'webgpu',kernelFunc:o}},2599,[1158]);
__d(function(g,r,i,a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.oneHot=s,e.oneHotConfig=void 0;var t=r(d[0]),n=r(d[1]),o=r(d[2]);
/**
   * @license
   * Copyright 2022 Google LLC.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   */
function s(s){const{inputs:p,backend:u,attrs:c}=s,{indices:f}=p,{dtype:l,depth:h,onValue:b,offValue:k}=c,H=t.util.sizeFromShape(f.shape),y=new n.OneHotProgram(H,h),P=(0,o.reshape)({inputs:{x:f},backend:u,attrs:{shape:[H]}}),_=[{type:'float32',data:[b]},{type:'float32',data:[k]}],v=u.runWebGPUProgram(y,[P],l,_);u.disposeData(P.dataId);const O=[...f.shape,h],w=(0,o.reshape)({inputs:{x:v},backend:u,attrs:{shape:O}});return u.disposeData(v.dataId),w}e.oneHotConfig={kernelName:t.OneHot,backendName:'webgpu',kernelFunc:s}},2600,[1158,2601,2433]);
__d(function(g,r,i,a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.OneHotProgram=void 0;var t=r(d[0]),o=r(d[1]);e.OneHotProgram=
/**
   * @license
   * Copyright 2022 Google LLC.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   */
class{constructor(t,s){this.variableNames=['x'],this.uniforms='onValue : f32, offValue : f32,',this.workgroupSize=[64,1,1],this.size=!0,this.outputShape=[t,s],this.dispatchLayout=(0,o.flatDispatchLayout)(this.outputShape),this.dispatch=(0,o.computeDispatch)(this.dispatchLayout,this.outputShape,this.workgroupSize),this.shaderKey='onehot'}getUserCode(){return`\n      ${(0,t.getMainHeaderString)('index')} {\n        if(index < uniforms.size) {\n          let coords = getCoordsFromIndex(index);\n          setOutputAtIndex(index, mix(uniforms.offValue, uniforms.onValue,\n                                      f32(i32(round(getX(coords.x))) == coords.y)));\n        }\n      }\n    `}}},2601,[2417,2419]);
__d(function(g,_r,_i,a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.onesLike=r,e.onesLikeConfig=void 0;var n=_r(d[0]),t=_r(d[1]),i=_r(d[2]),s=_r(d[3]),p=_r(d[4]),o=_r(d[5]);
/**
   * @license
   * Copyright 2021 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   */
function r(n){const{inputs:u,backend:c}=n,{x:k}=u;if('string'===k.dtype)throw new Error('onesLike is not supported under string dtype');if('complex64'===k.dtype){const n=(0,p.real)({inputs:{input:k},backend:c}),i=r({inputs:{x:n},backend:c}),u=(0,s.imag)({inputs:{input:k},backend:c}),l=(0,o.zerosLike)({inputs:{x:u},backend:c}),b=(0,t.complex)({inputs:{real:i,imag:l},backend:c});return c.disposeData(n.dataId),c.disposeData(i.dataId),c.disposeData(u.dataId),c.disposeData(l.dataId),b}return(0,i.fill)({attrs:{shape:k.shape,dtype:k.dtype,value:1},backend:c})}e.onesLikeConfig={kernelName:n.OnesLike,backendName:'webgpu',kernelFunc:r}},2602,[1158,2438,2431,2493,2482,2603]);
__d(function(g,_r,_i,a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.zerosLike=o,e.zerosLikeConfig=void 0;var n=_r(d[0]),t=_r(d[1]),i=_r(d[2]),s=_r(d[3]),p=_r(d[4]);
/**
   * @license
   * Copyright 2021 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   */
function o(n){const{inputs:r,backend:u}=n,{x:c}=r;if('complex64'===c.dtype){const n=(0,p.real)({inputs:{input:c},backend:u}),i=o({inputs:{x:n},backend:u}),r=(0,s.imag)({inputs:{input:c},backend:u}),k=o({inputs:{x:r},backend:u}),l=(0,t.complex)({inputs:{real:i,imag:k},backend:u});return u.disposeData(n.dataId),u.disposeData(i.dataId),u.disposeData(r.dataId),u.disposeData(k.dataId),l}return(0,i.fill)({attrs:{shape:c.shape,dtype:c.dtype,value:'string'===c.dtype?'':0},backend:u})}e.zerosLikeConfig={kernelName:n.ZerosLike,backendName:'webgpu',kernelFunc:o}},2603,[1158,2438,2431,2493,2482]);
__d(function(g,r,i,a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.pack=c,e.packConfig=void 0;var t=r(d[0]),s=r(d[1]),n=r(d[2]);
/**
   * @license
   * Copyright 2021 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   */
function c(c){const{inputs:p,backend:u,attrs:o}=c,{axis:h}=o;if(1===p.length)return(0,n.expandDims)({inputs:{input:p[0]},backend:u,attrs:{dim:h}});const k=p[0].shape,l=p[0].dtype;p.forEach(s=>{t.util.assertShapesMatch(k,s.shape,'All tensors passed to stack must have matching shapes'),t.util.assert(l===s.dtype,()=>'All tensors passed to stack must have matching dtypes')});const f=[],b=p.map(t=>{const s=(0,n.expandDims)({inputs:{input:t},backend:u,attrs:{dim:h}});return f.push(s),s}),v=(0,s.concat)({inputs:b,backend:u,attrs:{axis:h}});return f.forEach(t=>u.disposeData(t.dataId)),v}e.packConfig={kernelName:t.Pack,backendName:'webgpu',kernelFunc:c}},2604,[1158,2490,2542]);
__d(function(g,r,_i,a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.padV2Config=e.padV2=void 0;var t=r(d[0]),n=r(d[1]),p=r(d[2]),s=r(d[3]);
/**
   * @license
   * Copyright 2021 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   */
const i=i=>{const{inputs:u,backend:o,attrs:c}=i,{x:l}=u,{paddings:y,constantValue:f}=c;if(y.every(n=>t.util.arraysEqual(n,[0,0])))return(0,n.identity)({inputs:{x:l},backend:o});if(0===t.util.sizeFromShape(l.shape)){const t=y.map((t,n)=>t[0]+l.shape[n]+t[1]);return(0,s.fill)({backend:o,attrs:{shape:t,value:f,dtype:l.dtype}})}const b=[{type:'float32',data:[f]}];y.map(t=>b.push({type:'int32',data:[t[0],t[1]]}));const h=new p.PadProgram(l.shape,y);return o.runWebGPUProgram(h,[l],l.dtype,b)};e.padV2=i;e.padV2Config={kernelName:t.PadV2,backendName:'webgpu',kernelFunc:i}},2605,[1158,2439,2606,2431]);
__d(function(g,r,_i,a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.PadProgram=void 0,e.padCommon=s;var t=r(d[0]),o=r(d[1]);
/**
   * @license
   * Copyright 2019 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   */
function s(o,s=!1){const n=o.length,i=(0,t.getCoordsDataType)(n),p=o.map((t,o)=>`uniforms.pad${o}[0]`).join(','),u=o.map((t,o)=>`uniforms.pad${o}[0] + uniforms.xShape${n>1?`[${o}]`:''}`).join(',');return`\n        let start = ${n>1?`${i}(${p})`:`${p}`};\n        let end = ${n>1?`${i}(${u})`:`${u}`};\n        if (${n>1?"any(paddedCoords < start)":"paddedCoords < start"} || ${n>1?"any(paddedCoords >= end)":"paddedCoords >= end"}) {\n          setOutputAtIndex(index, ${s?0:'uniforms.constantValue'});\n        } else {\n          let coords = paddedCoords - start;\n          setOutputAtIndex(index, getX(${n>1?['coords[0]','coords[1]','coords[2]','coords[3]'].slice(0,n):'coords'}));\n        }\n  `}e.PadProgram=class{constructor(t,s){this.variableNames=['x'],this.uniforms='constantValue : f32,',this.workgroupSize=[64,1,1],this.size=!0,this.outputShape=s.map((o,s)=>o[0]+t[s]+o[1]),this.dispatchLayout=(0,o.flatDispatchLayout)(this.outputShape),this.dispatch=(0,o.computeDispatch)(this.dispatchLayout,this.outputShape,this.workgroupSize),s.map((t,o)=>{this.uniforms+=` pad${o} : vec2<i32>,`}),this.xShape=t,this.shaderKey='pad'}getUserCode(){return`\n      ${(0,t.getMainHeaderString)('index')} {\n        if (index < uniforms.size) {\n          let paddedCoords = getCoordsFromIndex(index);\n          ${s(this.xShape)}\n        }\n      }\n    `}}},2606,[2417,2419]);
__d(function(g,r,i,a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.powConfig=e.pow=void 0;var n=r(d[0]),o=r(d[1]),p=r(d[2]);
/**
   * @license
   * Copyright 2021 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   */
const c=e.pow=(0,p.binaryKernelFunc)({opType:o.BinaryOpType.POW});e.powConfig={kernelName:n.Pow,backendName:'webgpu',kernelFunc:c}},2607,[1158,2426,2435]);
__d(function(g,r,i,a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.prelu=o,e.preluConfig=void 0;var n=r(d[0]),u=r(d[1]),p=r(d[2]);
/**
   * @license
   * Copyright 2021 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   */
function o(n){const{inputs:o,backend:l}=n,{x:t,alpha:c}=o,f=new p.BinaryOpProgram(u.BinaryOpType.PRELU,t.shape,c.shape);return l.runWebGPUProgram(f,[t,c],'float32')}e.preluConfig={kernelName:n.Prelu,backendName:'webgpu',kernelFunc:o}},2608,[1158,2426,2437]);
__d(function(g,r,i,a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.prod=t,e.prodConfig=void 0;var n=r(d[0]),o=r(d[1]);
/**
   * @license
   * Copyright 2021 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   */
function t(n){const{inputs:t,backend:u,attrs:c}=n,{x:p}=t,{axis:s,keepDims:f}=c;return(0,o.reduce)(p,s,f,'prod',u)}e.prodConfig={kernelName:n.Prod,backendName:'webgpu',kernelFunc:t}},2609,[1158,2448]);
__d(function(g,r,i,a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.rangeConfig=e.range=void 0;var n=r(d[0]),t=r(d[1]);
/**
   * @license
   * Copyright 2021 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   */
const o=n=>{const{backend:o,attrs:s}=n,{start:c,stop:l,step:p,dtype:u}=s,f=(0,t.rangeImplCPU)(c,l,p,u);return o.makeTensorInfo([f.length],u,f)};e.range=o;e.rangeConfig={kernelName:n.Range,backendName:'webgpu',kernelFunc:o}},2610,[1158,2441]);
__d(function(g,r,i,a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.realDivConfig=e.realDiv=void 0;var n=r(d[0]),l=r(d[1]),o=r(d[2]);
/**
   * @license
   * Copyright 2021 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   */
const v=e.realDiv=(0,o.binaryKernelFunc)({opType:l.BinaryOpType.DIV});e.realDivConfig={kernelName:n.RealDiv,backendName:'webgpu',kernelFunc:v}},2611,[1158,2426,2435]);
__d(function(g,r,i,a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.reciprocalConfig=e.reciprocal=void 0;var c=r(d[0]),n=r(d[1]),o=r(d[2]);
/**
   * @license
   * Copyright 2022 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   */
const p=e.reciprocal=(0,n.unaryKernelFunc)({opType:o.UnaryOpType.RECIPROCAL});e.reciprocalConfig={kernelName:c.Reciprocal,backendName:'webgpu',kernelFunc:p}},2612,[1158,2435,2427]);
__d(function(g,r,i,a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.reluConfig=e.relu=void 0;var n=r(d[0]),u=r(d[1]),l=r(d[2]);
/**
   * @license
   * Copyright 2021 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   */
const o=e.relu=(0,u.unaryKernelFunc)({opType:l.UnaryOpType.RELU});e.reluConfig={kernelName:n.Relu,backendName:'webgpu',kernelFunc:o}},2613,[1158,2435,2427]);
__d(function(g,r,i,a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.relu6Config=e.relu6=void 0;var n=r(d[0]),u=r(d[1]),l=r(d[2]);
/**
   * @license
   * Copyright 2021 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   */
const o=e.relu6=(0,u.unaryKernelFunc)({opType:l.UnaryOpType.RELU6});e.relu6Config={kernelName:n.Relu6,backendName:'webgpu',kernelFunc:o}},2614,[1158,2435,2427]);
__d(function(g,r,i,a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.resizeBilinear=l,e.resizeBilinearConfig=void 0;var n=r(d[0]),t=r(d[1]);
/**
   * @license
   * Copyright 2021 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   */
function l(n){const{inputs:l,backend:o,attrs:s}=n,{images:f}=l,{alignCorners:u,size:c,halfPixelCenters:p}=s,[z,b]=c,B=[{type:'float32',data:[u&&z>1?1:0,u&&b>1?1:0]},{type:'float32',data:[p?.5:0]}],P=new t.ResizeBilinearProgram(f.shape,z,b);return o.runWebGPUProgram(P,[f],'float32',B)}e.resizeBilinearConfig={kernelName:n.ResizeBilinear,backendName:'webgpu',kernelFunc:l}},2615,[1158,2616]);
__d(function(g,r,i,a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.ResizeBilinearProgram=void 0;var t=r(d[0]),o=r(d[1]);e.ResizeBilinearProgram=
/**
   * @license
   * Copyright 2019 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   */
class{constructor(t,n,s){this.variableNames=['x'],this.uniforms='adjustHeightWidth : vec2<f32>, halfPixelCenters : f32,',this.workgroupSize=[64,1,1],this.size=!0,this.outputShape=[t[0],n,s,t[3]],this.dispatchLayout=(0,o.flatDispatchLayout)(this.outputShape),this.dispatch=(0,o.computeDispatch)(this.dispatchLayout,this.outputShape,this.workgroupSize),this.shaderKey="resizeBilinear"}getUserCode(){return`\n      ${(0,t.getMainHeaderString)('index')} {\n        if (index < uniforms.size) {\n        let coords = getCoordsFromIndex(index);\n          let b = coords[0];\n          let d = coords[3];\n          let rc = coords.yz;\n\n          let effectiveInSize = vec2<f32>(\n            f32(uniforms.xShape.y) - uniforms.adjustHeightWidth[0],\n            f32(uniforms.xShape.z) - uniforms.adjustHeightWidth[1]);\n\n          let effectiveOutSize = vec2<f32>(\n            f32(uniforms.outShape.y) - uniforms.adjustHeightWidth[0],\n            f32(uniforms.outShape.z) - uniforms.adjustHeightWidth[1]);\n\n          let effectiveInputOverOutputRatioRC =\n              effectiveInSize / effectiveOutSize;\n\n          // Fractional source index\n          let sourceFracIndexRC =\n            (vec2<f32>(rc) + vec2<f32>(uniforms.halfPixelCenters)) *\n            effectiveInputOverOutputRatioRC - vec2<f32>(uniforms.halfPixelCenters);\n\n          // Compute the four integer indices.\n          let sourceFloorRC = vec2<i32>(sourceFracIndexRC);\n          let sourceCeilRC = vec2<i32>(\n            min(vec2<f32>(uniforms.xShape.yz) - vec2<f32>(1.0), ceil(sourceFracIndexRC)));\n\n          let topLeft = getX(b, sourceFloorRC.x, sourceFloorRC.y, d);\n          let bottomLeft = getX(b, sourceCeilRC.x, sourceFloorRC.y, d);\n          let topRight = getX(b, sourceFloorRC.x, sourceCeilRC.y, d);\n          let bottomRight = getX(b, sourceCeilRC.x, sourceCeilRC.y, d);\n\n          let fracRC = sourceFracIndexRC - vec2<f32>(sourceFloorRC);\n\n          let top = topLeft + (topRight - topLeft) * fracRC.y;\n          let bottom = bottomLeft + (bottomRight - bottomLeft) * fracRC.y;\n          let newValue = top + (bottom - top) * fracRC.x;\n\n          setOutputAtIndex(index, newValue);\n        }\n      }\n    `}}},2616,[2417,2419]);
__d(function(g,r,i,a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.resizeBilinearGrad=p,e.resizeBilinearGradConfig=void 0;var t=r(d[0]),n=r(d[1]);
/**
   * @license
   * Copyright 2023 Google LLC.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   */
function p(t){const{inputs:p,backend:l,attrs:o}=t,{images:s,dy:y}=p,{alignCorners:c}=o,[,f,u]=s.shape,[,B,b]=y.shape,h=[c&&B>1?f-1:f,c&&b>1?u-1:u],k=[c&&B>1?B-1:B,c&&b>1?b-1:b],z=h[0]/k[0],G=h[1]/k[1],P=1/z,_=1/G,v=2*Math.ceil(P)+2,C=2*Math.ceil(_)+2,M=new n.ResizeBilinearBackpropProgram(s.shape,c),w=[{type:'int32',data:h},{type:'int32',data:k},{type:'float32',data:[z]},{type:'float32',data:[G]},{type:'float32',data:[P]},{type:'float32',data:[_]},{type:'int32',data:[v]},{type:'int32',data:[C]}];return l.runWebGPUProgram(M,[y],y.dtype,w)}e.resizeBilinearGradConfig={kernelName:t.ResizeBilinearGrad,backendName:'webgpu',kernelFunc:p}},2617,[1158,2618]);
__d(function(g,r,i,a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.ResizeBilinearBackpropProgram=void 0;var t=r(d[0]),n=r(d[1]);e.ResizeBilinearBackpropProgram=
/**
   * @license
   * Copyright 2023 Google LLC.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   */
class{constructor(t,o){this.variableNames=['dy'],this.uniforms="effectiveXSize : vec2<i32>, effectiveYSize : vec2<i32>, heightScale : f32, widthScale : f32,\n       invHeightScale : f32, invWidthScale : f32, winHeight : i32, winWidth : i32,",this.workgroupSize=[64,1,1],this.size=!0,this.outputShape=t,this.dispatchLayout=(0,n.flatDispatchLayout)(this.outputShape),this.dispatch=(0,n.computeDispatch)(this.dispatchLayout,this.outputShape,this.workgroupSize),this.alignCorners=o,this.shaderKey=`resizeBilinearBackprop_${o}`}getUserCode(){return`\n      ${(0,t.getMainHeaderString)('index')} {\n        if (index < uniforms.size) {\n          let coords = getOutputCoords();\n          let b = coords[0];\n          let d = coords[3];\n          let r = coords[1];\n          let c = coords[2];\n\n          var accumulator = 0.0;\n\n          // Compute bounds for where in dy we will look\n          let startRLerp = floor(f32(r) * uniforms.invHeightScale);\n          let startDyR = i32(startRLerp - f32(uniforms.winHeight / 2));\n\n          let startCLerp = floor(f32(c) * uniforms.invWidthScale);\n          let startDyC = i32(startCLerp - f32(uniforms.winWidth / 2));\n\n          // Loop over dy\n          for (var dyROffset = 0; dyROffset < uniforms.winHeight; dyROffset++) {\n            let dyR = startDyR + dyROffset;\n\n            // Guard against the window exceeding the bounds of dy\n            if (dyR < 0 || dyR >= uniforms.dyShape[1]) {\n              continue;\n            }\n\n            for (var dyCOffset = 0; dyCOffset < uniforms.winWidth; dyCOffset++) {\n              let dyC = startDyC + dyCOffset;\n\n              // Guard against the window exceeding the bounds of dy\n              if (dyC < 0 || dyC >= uniforms.dyShape[2]) {\n                continue;\n              }\n\n              let dxR = f32(dyR) * uniforms.heightScale;\n              let topDxRIndex = i32(floor(dxR));\n              let bottomDxRIndex = i32(min(ceil(dxR), f32(uniforms.outShape[1] - 1)));\n              let dxRLerp = dxR - f32(topDxRIndex);\n              let inverseDxRLerp = 1.0 - dxRLerp;\n\n              let dxC = f32(dyC) * uniforms.widthScale;\n              let leftDxCIndex = i32(floor(dxC));\n              let rightDxCIndex = i32(min(ceil(dxC), f32(uniforms.outShape[2] - 1)));\n              let dxCLerp = dxC - f32(leftDxCIndex);\n              let inverseDxCLerp = 1.0 - dxCLerp;\n\n              if (r == topDxRIndex && c == leftDxCIndex) {\n                // topLeft\n                accumulator +=\n                  getDy(b, dyR, dyC, d) * inverseDxRLerp * inverseDxCLerp;\n              }\n\n              if (r == topDxRIndex && c == rightDxCIndex) {\n                // topRight\n                accumulator += getDy(b, dyR, dyC, d) * inverseDxRLerp * dxCLerp;\n              }\n\n              if (r == bottomDxRIndex && c == leftDxCIndex) {\n                // bottomLeft\n                accumulator += getDy(b, dyR, dyC, d) * dxRLerp * inverseDxCLerp;\n              }\n\n              if (r == bottomDxRIndex && c == rightDxCIndex) {\n                // bottomRight\n                accumulator += getDy(b, dyR, dyC, d) * dxRLerp * dxCLerp;\n              }\n            }\n          }\n          // End loop over dy\n\n          setOutputAtIndex(index, accumulator);\n        }\n      }\n    `}}},2618,[2417,2419]);
__d(function(g,r,i,a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.resizeNearestNeighbor=s,e.resizeNearestNeighborConfig=void 0;var t=r(d[0]),n=r(d[1]);
/**
   * @license
   * Copyright 2021 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   */
function s(t){const{inputs:s,backend:o,attrs:N}=t,{images:b}=s,{alignCorners:l,halfPixelCenters:u,size:f}=N,[c,h]=f,p=[{type:'float32',data:[l&&c>1?1:0,l&&h>1?1:0]},{type:'float32',data:[l?.5:0]}],z=new n.ResizeNearestNeighborProgram(b.shape,c,h,u);return o.runWebGPUProgram(z,[b],b.dtype,p)}e.resizeNearestNeighborConfig={kernelName:t.ResizeNearestNeighbor,backendName:'webgpu',kernelFunc:s}},2619,[1158,2620]);
__d(function(g,r,i,a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.ResizeNearestNeighborProgram=void 0;var t=r(d[0]),n=r(d[1]);e.ResizeNearestNeighborProgram=
/**
   * @license
   * Copyright 2021 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   */
class{constructor(t,s,o,u){this.variableNames=['x'],this.uniforms='adjustHeightWidth : vec2<f32>, roundBase : f32,',this.workgroupSize=[64,1,1],this.size=!0,this.outputShape=[t[0],s,o,t[3]],this.dispatchLayout=(0,n.flatDispatchLayout)(this.outputShape),this.dispatch=(0,n.computeDispatch)(this.dispatchLayout,this.outputShape,this.workgroupSize),this.halfPixelCenters=u,this.shaderKey=`resizeNearest_${u}`}getUserCode(){let n;n=this.halfPixelCenters?"max((vec2<f32>(rc) + vec2<f32>(0.5)) * effectiveInputOverOutputRatioRC, vec2<f32>(0.0))":"vec2<f32>(rc) * effectiveInputOverOutputRatioRC";return`\n      ${(0,t.getMainHeaderString)('index')} {\n        if (index < uniforms.size) {\n          let coords = getCoordsFromIndex(index);\n          let b = coords[0];\n          let d = coords[3];\n          let rc = coords.yz;\n\n          let effectiveInSize = vec2<f32>(\n            f32(uniforms.xShape.y) - uniforms.adjustHeightWidth[0],\n            f32(uniforms.xShape.z) - uniforms.adjustHeightWidth[1]);\n\n          let effectiveOutSize = vec2<f32>(\n            f32(uniforms.outShape.y) - uniforms.adjustHeightWidth[0],\n            f32(uniforms.outShape.z) - uniforms.adjustHeightWidth[1]);\n\n          let effectiveInputOverOutputRatioRC =\n              effectiveInSize / effectiveOutSize;\n\n          // Fractional source index\n          let sourceFracIndexRC = ${n};\n\n          // Compute the coordinators of nearest neighbor point.\n          let inputShapeRC = vec2<f32>(f32(uniforms.xShape.y), f32(uniforms.xShape.z));\n          let sourceNearestRC = vec2<i32>(\n            min(inputShapeRC - 1.0, floor(sourceFracIndexRC + uniforms.roundBase)));\n          let newValue = getX(b, sourceNearestRC.x, sourceNearestRC.y, d);\n\n          setOutputAtIndex(index, newValue);\n        }\n      }\n    `}}},2620,[2417,2419]);
__d(function(g,r,i,a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.resizeNearestNeighborGrad=o,e.resizeNearestNeighborGradConfig=void 0;var t=r(d[0]),n=r(d[1]);
/**
   * @license
   * Copyright 2023 Google LLC.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   */
function o(t){const{inputs:o,backend:s,attrs:p}=t,{images:N,dy:b}=o,{alignCorners:c}=p,[,h,l]=N.shape,[,u,y]=b.shape,f=[c&&u>1?h-1:h,c&&y>1?l-1:l],k=[c&&u>1?u-1:u,c&&y>1?y-1:y],z=1/(f[0]/k[0]),G=1/(f[1]/k[1]),P=2*Math.ceil(z)+2,_=2*Math.ceil(G)+2,v=new n.ResizeNearestNeigborBackpropProgram(N.shape,c),C=[{type:'int32',data:f},{type:'int32',data:k},{type:'float32',data:[z]},{type:'float32',data:[G]},{type:'int32',data:[P]},{type:'int32',data:[_]}];return s.runWebGPUProgram(v,[b],b.dtype,C)}e.resizeNearestNeighborGradConfig={kernelName:t.ResizeNearestNeighborGrad,backendName:'webgpu',kernelFunc:o}},2621,[1158,2622]);
__d(function(g,r,i,a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.ResizeNearestNeigborBackpropProgram=void 0;var t=r(d[0]),n=r(d[1]);e.ResizeNearestNeigborBackpropProgram=
/**
   * @license
   * Copyright 2023 Google LLC.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   */
class{constructor(t,o){this.variableNames=['dy'],this.uniforms="effectiveXSize : vec2<i32>, effectiveYSize : vec2<i32>, invHeightScale : f32, invWidthScale : f32,\n       winHeight : i32, winWidth : i32,",this.workgroupSize=[64,1,1],this.size=!0,this.outputShape=t,this.dispatchLayout=(0,n.flatDispatchLayout)(this.outputShape),this.dispatch=(0,n.computeDispatch)(this.dispatchLayout,this.outputShape,this.workgroupSize),this.alignCorners=o,this.shaderKey=`resizeNearestNeigborBackprop_${o}`}getUserCode(){return`\n      ${(0,t.getMainHeaderString)('index')} {\n        if (index < uniforms.size) {\n          let coords = getOutputCoords();\n          let b = coords[0];\n          let d = coords[3];\n          let r = coords[1];\n          let c = coords[2];\n\n          var accumulator = 0.0;\n\n          // Compute bounds for where in dy we will look\n          let startRLerp = floor(f32(r) * uniforms.invHeightScale);\n          let startDyR = i32(floor(startRLerp - f32(uniforms.winHeight / 2)));\n\n          let startCLerp = floor(f32(c) * uniforms.invWidthScale);\n          let startDyC = i32(floor(startCLerp - f32(uniforms.winWidth / 2)));\n\n          // Loop over dy\n          for (var dyROffset = 0; dyROffset < uniforms.winHeight; dyROffset++) {\n            let dyR = startDyR + dyROffset;\n\n            // Guard against the window exceeding the bounds of dy\n            if (dyR < 0 || dyR >= uniforms.dyShape[1]) {\n              continue;\n            }\n\n            for (var dyCOffset = 0; dyCOffset < uniforms.winWidth; dyCOffset++) {\n              let dyC = startDyC + dyCOffset;\n\n              // Guard against the window exceeding the bounds of dy\n              if (dyC < 0 || dyC >= uniforms.dyShape[2]) {\n                continue;\n              }\n\n              let sourceFracRow = f32(uniforms.effectiveXSize[0]) *\n                  (f32(dyR) / f32(uniforms.effectiveYSize[0]));\n\n              let sourceFracCol = f32(uniforms.effectiveXSize[1]) *\n                  (f32(dyC) / f32(uniforms.effectiveYSize[1]));\n\n              let sourceNearestRow =\n                  i32(min(f32(uniforms.outShape[1] - 1),\n                  ${this.alignCorners?'floor(sourceFracRow + 0.5)':'floor(sourceFracRow)'}));\n\n              let sourceNearestCol =\n                  i32(min(f32(uniforms.outShape[2] - 1),\n                  ${this.alignCorners?'floor(sourceFracCol + 0.5)':'floor(sourceFracCol)'}));\n\n              if (r == sourceNearestRow && c == sourceNearestCol) {\n                accumulator += getDy(b, dyR, dyC, d);\n              }\n            }\n          }\n          // End loop over dy\n\n          setOutputAtIndex(index, accumulator);\n        }\n      }\n    `}}},2622,[2417,2419]);
__d(function(g,r,_i,a,m,e,_d){Object.defineProperty(e,"__esModule",{value:!0}),e.reverse=i,e.reverseConfig=void 0;var t=r(_d[0]),s=r(_d[1]),n=r(_d[2]),d=r(_d[3]);
/**
   * @license
   * Copyright 2022 Google LLC.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   */
function i(i){const{inputs:o,backend:p,attrs:c}=i,{x:u}=o,{dims:h}=c,b=u.shape.length;if(0===b)return(0,n.identity)({inputs:{x:u},backend:p});const f=u.shape,v=[1,1,1,1];f.forEach((t,s)=>{v[s+4-b]=t});const k=t.util.parseAxisParam(h,u.shape),l=[0,0,0,0];k.forEach(t=>{l[t+4-b]=1});const x=[{type:'int32',data:l}],P=(0,d.reshape)({inputs:{x:u},backend:p,attrs:{shape:v}}),y=new s.ReverseProgram(v),_=p.runWebGPUProgram(y,[P],P.dtype,x);p.disposeData(P.dataId);const w=(0,d.reshape)({inputs:{x:_},backend:p,attrs:{shape:f}});return p.disposeData(_.dataId),w}e.reverseConfig={kernelName:t.Reverse,backendName:'webgpu',kernelFunc:i}},2623,[1158,2624,2439,2433]);
__d(function(g,r,i,a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.ReverseProgram=void 0;var s=r(d[0]),o=r(d[1]);e.ReverseProgram=
/**
   * @license
   * Copyright 2022 Google LLC.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   */
class{constructor(s){this.variableNames=['x'],this.workgroupSize=[64,1,1],this.size=!0,this.outputShape=s,this.dispatchLayout=(0,o.flatDispatchLayout)(this.outputShape),this.dispatch=(0,o.computeDispatch)(this.dispatchLayout,this.outputShape,this.workgroupSize),this.uniforms=" axis : vec4<i32>,",this.shaderKey='reverse'}getUserCode(){return`\n      \n      // Using uniform variables as judging conditions, so the function has\n      // coherent execution within all threads.\n      fn getReverseCoords(coords : vec4<i32>) -> vec4<i32> {\n        var reverseCoords = coords;\n        if (uniforms.axis[0] == 1) {\n          reverseCoords[0] = uniforms.xShape[0] - coords[0] - 1;\n        }\n        if (uniforms.axis[1] == 1) {\n          reverseCoords[1] = uniforms.xShape[1] - coords[1] - 1;\n        }\n        if (uniforms.axis[2] == 1) {\n          reverseCoords[2] = uniforms.xShape[2] - coords[2] - 1;\n        }\n        if (uniforms.axis[3] == 1) {\n          reverseCoords[3] = uniforms.xShape[3] - coords[3] - 1;\n        }\n\n        return reverseCoords;\n      }\n    \n      ${(0,s.getMainHeaderString)('index')} {\n        if (index < uniforms.size) {\n          let coords = getCoordsFromIndex(index);\n          let reverseCoords = getReverseCoords(coords);\n          setOutputAtIndex(index, getX(reverseCoords[0],\n              reverseCoords[1], reverseCoords[2], reverseCoords[3]));\n        }\n      }\n    `}}},2624,[2417,2419]);
__d(function(g,r,i,a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.rotateWithOffsetConfig=void 0;var t=r(d[0]),o=r(d[1]);
/**
   * @license
   * Copyright 2021 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   */
e.rotateWithOffsetConfig={kernelName:t.RotateWithOffset,backendName:'webgpu',kernelFunc:({inputs:n,attrs:f,backend:p})=>{const{image:s}=n,{radians:l,fillValue:u,center:h}=f,c=p,y=new o.RotateProgram(s.shape,u),[b,k]=t.backend_util.getImageCenter(h,s.shape[1],s.shape[2]),_=[{type:'float32',data:[b]},{type:'float32',data:[k]},{type:'float32',data:[Math.sin(l)]},{type:'float32',data:[Math.cos(l)]}];'number'==typeof u?_.push({type:'float32',data:[Number.parseFloat(u.toFixed(2))]}):_.push({type:'float32',data:u});return c.runWebGPUProgram(y,[s],s.dtype,_)}}},2625,[1158,2626]);
__d(function(g,r,i,a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.RotateProgram=void 0;var o=r(d[0]),t=r(d[1]);e.RotateProgram=
/**
   * @license
   * Copyright 2021 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   */
class{constructor(o,s){this.outputShape=[],this.variableNames=['x'],this.workgroupSize=[64,1,1],this.size=!0,this.outputShape=o,this.dispatchLayout=(0,t.flatDispatchLayout)(this.outputShape),this.dispatch=(0,t.computeDispatch)(this.dispatchLayout,this.outputShape,this.workgroupSize),this.uniforms="centerX : f32, centerY : f32, sinRadians : f32,\n          cosRadians : f32,",this.shaderKey='rotate',this.outputShape=o,'number'==typeof s?(this.uniforms+=" fillValue : f32,",this.fillSnippet="var outputValue = uniforms.fillValue;",this.shaderKey+='_float'):(this.uniforms+=" fillValue : vec3<f32>,",this.fillSnippet="var outputValue = uniforms.fillValue[coords[3]];",this.shaderKey+='_vec3')}getUserCode(){return`\n        ${(0,o.getMainHeaderString)('index')} {\n          if (index < uniforms.size) {\n            let coords = getCoordsFromIndex(index);\n            let coordXFloat = (f32(coords[2]) - uniforms.centerX) *\n                uniforms.cosRadians - (f32(coords[1]) - uniforms.centerY) *\n                uniforms.sinRadians;\n            let coordYFloat = (f32(coords[2]) - uniforms.centerX) *\n                uniforms.sinRadians + (f32(coords[1]) - uniforms.centerY) *\n                uniforms.cosRadians;\n            let coordX = i32(round(coordXFloat + uniforms.centerX));\n            let coordY = i32(round(coordYFloat + uniforms.centerY));\n            ${this.fillSnippet}\n            if(coordX >= 0 && coordX < uniforms.xShape[2] && coordY >= 0 &&\n                coordY < uniforms.xShape[1]) {\n              outputValue = getX(coords[0], coordY, coordX, coords[3]);\n            }\n            setOutputAtIndex(index, outputValue);\n          }\n        }\n      `}}},2626,[2417,2419]);
__d(function(g,r,i,a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.roundConfig=e.round=void 0;var n=r(d[0]),o=r(d[1]),u=r(d[2]);
/**
   * @license
   * Copyright 2022 Google LLC.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   */
const c=e.round=(0,o.unaryKernelFunc)({opType:u.UnaryOpType.ROUND});e.roundConfig={kernelName:n.Round,backendName:'webgpu',kernelFunc:c}},2627,[1158,2435,2427]);
__d(function(g,r,i,a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.rsqrtConfig=e.rsqrt=void 0;var n=r(d[0]),t=r(d[1]),p=r(d[2]),l=r(d[3]);
/**
   * @license
   * Copyright 2021 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   */
const o=e.rsqrt=(0,t.unaryKernelFunc)({opType:l.UnaryOpType.RSQRT,cpuKernelImpl:p.rsqrtImplCPU});e.rsqrtConfig={kernelName:n.Rsqrt,backendName:'webgpu',kernelFunc:o}},2628,[1158,2435,2441,2427]);
__d(function(g,r,i,a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.scatterNd=c,e.scatterNdConfig=void 0;var t=r(d[0]),s=r(d[1]),n=r(d[2]),p=r(d[3]);
/**
   * @license
   * Copyright 2021 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   */
function c(c){const{inputs:u,backend:o,attrs:h}=c,{indices:l,updates:k}=u,{shape:b}=h,{sliceRank:f,numUpdates:y,sliceSize:N,strides:S,outputSize:_}=t.backend_util.calculateShapes(k,l,b),v=[_/N,N];if(0===_)return o.makeTensorInfo(b,l.dtype);const I=(0,p.reshape)({inputs:{x:l},backend:o,attrs:{shape:[y,f]}}),P=(0,p.reshape)({inputs:{x:k},backend:o,attrs:{shape:[y,N]}}),x=P.dtype,z=(0,n.fill)({backend:o,attrs:{shape:v,value:0,dtype:x}}),D=[{type:'int32',data:[f]},{type:'int32',data:S},{type:'int32',data:[t.util.sizeFromShape(P.shape)]}],w=new s.ScatterProgram(P.shape,f,I.shape.length,P.shape.length,S,v,x),C=o.runWebGPUProgram(w,[P,I],x,D,z),F=(0,p.reshape)({inputs:{x:C},backend:o,attrs:{shape:b}});return o.disposeData(I.dataId),o.disposeData(P.dataId),o.disposeData(C.dataId),F}e.scatterNdConfig={kernelName:t.ScatterNd,backendName:'webgpu',kernelFunc:c}},2629,[1158,2630,2431,2433]);
__d(function(g,r,i,a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.ScatterProgram=void 0;var t=r(d[0]),n=r(d[1]),s=r(d[2]);e.ScatterProgram=
/**
   * @license
   * Copyright 2021 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   */
class{constructor(t,o,c,l,u,h,p,x=!0){this.variableNames=['updates','indices'],this.workgroupSize=[64,1,1],this.atomic=!0,this.outputShape=h,this.type=p,this.sumDupeIndices=x,this.dispatchLayout=(0,s.flatDispatchLayout)(t),this.dispatch=(0,s.computeDispatch)(this.dispatchLayout,t,this.workgroupSize),this.sliceDimGreaterThanOne=o>1,this.shaderKey=`scatter_${c}_${l}_${this.sliceDimGreaterThanOne}_${p}_${x}_${u.length}`;const f=(0,n.getCoordsDataType)(u.length);this.uniforms=`sliceDim : i32, strides: ${f}, updatesSize: i32,`,this.updatesRank=l,this.indicesRank=c}getUserCode(){let s='';1===this.indicesRank?s='coords[0]':2===this.indicesRank&&(s='coords[0], j');const o=`getIndices(${s})`,c=this.sliceDimGreaterThanOne?'uniforms.strides[j]':'uniforms.strides';let l='',u='';1===this.dispatchLayout.x.length?(l='flattenedIndex',u="\n      fn getUpdatesCoordsFromFlatIndex(index : i32) -> i32 {\n        return index;\n      }\n      "):2===this.dispatchLayout.x.length&&(l='vec2<i32>(flattenedIndex, coords[1])',u="\n      fn getUpdatesCoordsFromFlatIndex(index : i32) -> vec2<i32> {\n        // N.B. |updates| could be a scalar tensor, conceptually representing a\n        // 2D tensor with all values equal to that. By design, its size must be\n        // the same as |outShape[1]| in one dimension, and |indicesShape[0]|\n        // gives the other.\n        let sliceSize = uniforms.outShape[1];\n        let d0 = index / sliceSize;\n        let d1 = index - d0 * sliceSize;\n        return vec2<i32>(d0, d1);\n      }\n      ");const h=`getUpdates(${Array.from({length:this.updatesRank},(t,n)=>`coords[${n}]`).join(', ')})`;return`\n    ${u}\n      ${(0,n.getMainHeaderString)('index')} {\n        if (index < uniforms.updatesSize) {\n          let coords = getUpdatesCoordsFromFlatIndex(index);\n          var flattenedIndex = 0;\n          for (var j = 0; j < uniforms.sliceDim; j = j + 1) {\n            let indexInside = i32(round(${o}));\n            flattenedIndex = flattenedIndex + indexInside * ${c};\n          }\n          let updateValue =\n              ${(0,n.dataTypeToGPUType)(this.type)}(${h});\n          let flatIndex = getOutputIndexFromCoords(${l});\n\n          ${this.sumDupeIndices?(0,t.atomicAddSnippet)('&result[flatIndex]','updateValue',this.type):"atomicStore(&result[flatIndex], bitcast<i32>(updateValue));"}\n        }\n      }`}}},2630,[2418,2417,2419]);
__d(function(g,r,i,a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.searchSorted=o,e.searchSortedConfig=void 0;var n=r(d[0]),t=r(d[1]);
/**
   * @license
   * Copyright 2022 Google LLC.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   */
function o(n){const{inputs:o,backend:c,attrs:s}=n,{sortedSequence:u,values:h}=o,{side:S}=s,p=new t.SearchSortedProgram([h.shape[0],h.shape[1]],S),b=[{type:'int32',data:[u.shape[1]]}];return c.runWebGPUProgram(p,[u,h],'int32',b)}e.searchSortedConfig={kernelName:n.SearchSorted,backendName:'webgpu',kernelFunc:o}},2631,[1158,2632]);
__d(function(g,r,i,a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.SearchSortedProgram=void 0;var t=r(d[0]),n=r(d[1]);e.SearchSortedProgram=
/**
   * @license
   * Copyright 2022 Google LLC.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   */
class{constructor(t,s){this.outputShape=[],this.variableNames=['sortedSequence','values'],this.uniforms='numInputs : i32,',this.workgroupSize=[64,1,1],this.size=!0,this.outputShape=t,this.dispatchLayout=(0,n.flatDispatchLayout)(this.outputShape),this.dispatch=(0,n.computeDispatch)(this.dispatchLayout,this.outputShape,this.workgroupSize),this.side=s,this.shaderKey=`search_sorted_${s}`}getUserCode(){return`\n      fn findBound(batch: i32, value: f32) -> i32 {\n        var left = i32(0);\n        var right = uniforms.numInputs;\n        while (left < right) {\n          var mid = (left + right) / 2;\n          if (getSortedSequence(batch, mid) ${'left'===this.side?'<':'<='} value) {\n            left = mid + 1;\n          } else {\n            right = mid;\n          }\n        }\n        return right;\n      }\n\n      ${(0,t.getMainHeaderString)('index')} {\n        if (index < uniforms.size) {\n          let coords = getCoordsFromIndex(index);\n          let value = getValuesByOutputIndex(index);\n          setOutputAtIndexI32(index, findBound(coords[0], value));\n        }\n      }\n    `}}},2632,[2417,2419]);
__d(function(g,r,i,a,m,_e,d){Object.defineProperty(_e,"__esModule",{value:!0}),_e.select=t,_e.selectConfig=void 0;var e=r(d[0]),n=r(d[1]);
/**
   * @license
   * Copyright 2021 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   */
function t(t){const{inputs:c,backend:o}=t,{condition:l,t:p,e:s}=c,u=new n.SelectProgram(l.shape.length,p.shape,p.shape.length);return o.runWebGPUProgram(u,[l,p,s],(0,e.upcastType)(p.dtype,s.dtype))}_e.selectConfig={kernelName:e.Select,backendName:'webgpu',kernelFunc:t}},2633,[1158,2634]);
__d(function(g,r,_i,a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.SelectProgram=void 0;var t=r(d[0]),s=r(d[1]);e.SelectProgram=
/**
   * @license
   * Copyright 2019 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   */
class{constructor(t,i,n){this.variableNames=['c','a','b'],this.workgroupSize=[64,1,1],this.size=!0,this.outputShape=i,this.dispatchLayout=(0,s.flatDispatchLayout)(this.outputShape),this.dispatch=(0,s.computeDispatch)(this.dispatchLayout,this.outputShape,this.workgroupSize),this.cRank=t,this.rank=n,this.shaderKey='select'}getUserCode(){let s,i;if(this.rank>4)throw Error(`Where for rank ${this.rank} is not yet supported`);if(1===this.rank)i="resRC",s="resRC";else{const t=['resRC.x','resRC.y','resRC.z','resRC.w'],n=[],o=[];for(let s=0;s<this.outputShape.length;s++)o.push(`${t[s]}`),s<this.cRank&&n.push(`${t[s]}`);s=n.join(),i=o.join()}return`\n      ${(0,t.getMainHeaderString)('index')} {\n        if (index < uniforms.size) {\n          let resRC = getCoordsFromIndex(index);\n          let cVal = getC(${s});\n          if (cVal >= 1.0) {\n            setOutputAtIndex(index, getA(${i}));\n          } else {\n            setOutputAtIndex(index, getB(${i}));\n          }\n        }\n      }\n    `}}},2634,[2417,2419]);
__d(function(g,r,i,a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.seluConfig=e.selu=void 0;var n=r(d[0]),u=r(d[1]),l=r(d[2]);
/**
   * @license
   * Copyright 2022 Google LLC.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   */
const o=e.selu=(0,u.unaryKernelFunc)({opType:l.UnaryOpType.SELU});e.seluConfig={kernelName:n.Selu,backendName:'webgpu',kernelFunc:o}},2635,[1158,2435,2427]);
__d(function(g,r,i,a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.sigmoidConfig=e.sigmoid=void 0;var n=r(d[0]),o=r(d[1]),u=r(d[2]);
/**
   * @license
   * Copyright 2021 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   */
const c=e.sigmoid=(0,o.unaryKernelFunc)({opType:u.UnaryOpType.SIGMOID});e.sigmoidConfig={kernelName:n.Sigmoid,backendName:'webgpu',kernelFunc:c}},2636,[1158,2435,2427]);
__d(function(g,r,i,a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.signConfig=e.sign=void 0;var n=r(d[0]),o=r(d[1]),u=r(d[2]);
/**
   * @license
   * Copyright 2022 Google LLC.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   */
const c=e.sign=(0,o.unaryKernelFunc)({opType:u.UnaryOpType.SIGN});e.signConfig={kernelName:n.Sign,backendName:'webgpu',kernelFunc:c}},2637,[1158,2435,2427]);
__d(function(g,r,i,a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.sinConfig=e.sin=void 0;var n=r(d[0]),o=r(d[1]),u=r(d[2]);
/**
   * @license
   * Copyright 2021 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   */
const c=e.sin=(0,o.unaryKernelFunc)({opType:u.UnaryOpType.SIN});e.sinConfig={kernelName:n.Sin,backendName:'webgpu',kernelFunc:c}},2638,[1158,2435,2427]);
__d(function(g,r,i,a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.sinhConfig=e.sinh=void 0;var n=r(d[0]),o=r(d[1]),u=r(d[2]);
/**
   * @license
   * Copyright 2021 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   */
const c=e.sinh=(0,o.unaryKernelFunc)({opType:u.UnaryOpType.SINH});e.sinhConfig={kernelName:n.Sinh,backendName:'webgpu',kernelFunc:c}},2639,[1158,2435,2427]);
__d(function(g,r,i,a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.softplusConfig=e.softplus=void 0;var n=r(d[0]),o=r(d[1]),u=r(d[2]);
/**
   * @license
   * Copyright 2022 Google LLC.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   */
const p=e.softplus=(0,o.unaryKernelFunc)({opType:u.UnaryOpType.SOFTPLUS});e.softplusConfig={kernelName:n.Softplus,backendName:'webgpu',kernelFunc:p}},2640,[1158,2435,2427]);
__d(function(g,r,_i,_a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.spaceToBatchNDConfig=e.spaceToBatchND=void 0;var t=r(d[0]),a=r(d[1]),n=r(d[2]);
/**
   * @license
   * Copyright 2021 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   */
const p=p=>{const{inputs:c,backend:s,attrs:h}=p,{x:o}=c,{blockShape:u,paddings:i}=h;t.util.assert(o.shape.length<=4,()=>"spaceToBatchND for rank > 4 with a WebGPU backend not implemented yet");const l=u.reduce((t,a)=>t*a),b=[[0,0]];b.push(...i);for(let t=1+u.length;t<o.shape.length;++t)b.push([0,0]);const k=b.map((t,a)=>t[0]+o.shape[a]+t[1]),N=t.backend_util.getReshaped(k,u,l,!1),D=t.backend_util.getPermuted(N.length,u.length,!1),B=t.backend_util.getReshapedPermuted(k,u,l,!1),P=t.util.computeStrides(k),T=new a.SpaceToBatchNDProgram(o.shape,k,b,N,D,P.length),_=[{type:'int32',data:N},{type:'int32',data:P}];b.map(t=>_.push({type:'int32',data:[t[0],t[1]]}));const f=s.runWebGPUProgram(T,[o],o.dtype,_),y=(0,n.reshape)({inputs:{x:f},backend:s,attrs:{shape:B}});return s.disposeData(f.dataId),y};e.spaceToBatchND=p;e.spaceToBatchNDConfig={kernelName:t.SpaceToBatchND,backendName:'webgpu',kernelFunc:p}},2641,[1158,2642,2433]);
__d(function(g,r,_i,a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.SpaceToBatchNDProgram=void 0;var t=r(d[0]),o=r(d[1]),s=r(d[2]),h=r(d[3]);e.SpaceToBatchNDProgram=
/**
   * @license
   * Copyright 2023 Google LLC.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   */
class{constructor(t,o,i,p,n,u){this.variableNames=['x'],this.outputShape=[],this.uniforms='',this.workgroupSize=[64,1,1],this.size=!0;const c=new Array(p.length);for(let t=0;t<c.length;t++)c[t]=p[n[t]];this.outputShape=c,this.newDim=n,this.dispatchLayout=(0,h.flatDispatchLayout)(this.outputShape),this.dispatch=(0,h.computeDispatch)(this.dispatchLayout,this.outputShape,this.workgroupSize),this.xShape=t,this.paddedXShape=o,this.uniforms+=`reshapedPaddedXShape : ${(0,s.getCoordsDataType)(p.length)}, paddedXShapeStrides : ${(0,s.getCoordsDataType)(u)}, `,i.map((t,o)=>{this.uniforms+=` pad${o} : vec2<i32>,`}),this.shaderKey=`spaceToBatchND_${n}`}getUserCode(){const h=(0,s.getCoordsDataType)(this.outputShape.length),i=(0,o.getSwitchedCoords)(this.newDim);return`\n      ${(0,s.getCoordsFromIndexSnippet)(this.paddedXShape,'PaddedX')}\n      ${(0,s.getMainHeaderString)('index')} {\n        if(index < uniforms.size) {\n          let coords = getCoordsFromIndex(index);\n          let switchedIndex = getIndexFromCoords${this.outputShape.length}D(${h}(${i}), uniforms.reshapedPaddedXShape);\n          let paddedCoords = getPaddedXCoordsFromIndex(switchedIndex);\n          ${(0,t.padCommon)(this.xShape,!0)}\n        }\n      }\n    `}}},2642,[2606,2451,2417,2419]);
__d(function(g,r,i,a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.sparseSegmentMean=t,e.sparseSegmentMeanConfig=void 0;var n=r(d[0]),s=r(d[1]);
/**
   * @license
   * Copyright 2023 Google LLC.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   */
function t(n){const{inputs:t,backend:c}=n,{data:u,indices:o,segmentIds:p}=t;return(0,s.sparseSegmentReduce)(u,o,p,!1,c)}e.sparseSegmentMeanConfig={kernelName:n.SparseSegmentMean,backendName:'webgpu',kernelFunc:t}},2643,[1158,2644]);
__d(function(g,r,i,a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.sparseSegmentReduce=
/**
   * @license
   * Copyright 2023 Google LLC.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   */
function(p,o,l,u=!1,c){const S=t.util.sizeFromShape(p.shape)/p.shape[0],h=p.dtype,P=t.util.sizeFromShape(o.shape),y=c.readSync(l.dataId),b=P>0?y[P-1]+1:0;let f;const v=p.shape.slice();v[0]=b;const I=P*S,_=(0,n.fill)({backend:c,attrs:{shape:v,value:0,dtype:h}});f=new s.SparseSegmentSumProgram(v,I,h);let k=[{type:'int32',data:[S]},{type:'int32',data:[I]}];const w=c.runWebGPUProgram(f,[p,o,l],h,k,_);if(u)return w;const G=(0,n.fill)({backend:c,attrs:{shape:[b],value:0,dtype:'int32'}});f=new s.SparseSegmentIdCountProgram(b,l.shape);const U=c.runWebGPUProgram(f,[l],'int32',null,G),W=(0,n.fill)({backend:c,attrs:{shape:v,value:0,dtype:h}});f=new s.SparseSegmentMeanProgram(v,h),k=[{type:'int32',data:[S]}];const z=c.runWebGPUProgram(f,[w,U],h,k,W);return c.disposeData(w.dataId),c.disposeData(U.dataId),z};var t=r(d[0]),n=r(d[1]),s=r(d[2])},2644,[1158,2431,2645]);
__d(function(g,r,i,a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.SparseSegmentSumProgram=e.SparseSegmentMeanProgram=e.SparseSegmentIdCountProgram=void 0;var t=r(d[0]),n=r(d[1]),s=r(d[2]);e.SparseSegmentSumProgram=
/**
   * @license
   * Copyright 2023 Google LLC.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   */
class{constructor(t,n,u){this.variableNames=['input','indices','segmentIds'],this.outputShape=[],this.uniforms='segmentSize : i32, sparseSize : i32,',this.workgroupSize=[64,1,1],this.atomic=!0,this.outputShape=t,this.type=u,this.dispatchLayout=(0,s.flatDispatchLayout)([n]),this.dispatch=(0,s.computeDispatch)(this.dispatchLayout,[n],this.workgroupSize),this.shaderKey='sparseSegmentSum'}getUserCode(){return`\n    ${(0,n.getMainHeaderString)('index')} {\n      if (index < uniforms.sparseSize) {\n        let indexInSegmentIds = index / uniforms.segmentSize;\n        let indexInSegment = index % uniforms.segmentSize;\n        let indexInInput = indices[indexInSegmentIds];\n        let segmentId = segmentIds[indexInSegmentIds];\n\n        let value = input[indexInInput * uniforms.segmentSize + indexInSegment];\n        let outIndex = segmentId * uniforms.segmentSize + indexInSegment;\n        ${(0,t.atomicAddSnippet)('&result[outIndex]','value',this.type)}\n      }\n    }\n  `}};e.SparseSegmentIdCountProgram=class{constructor(t,n){this.variableNames=['segmentIds'],this.outputShape=[],this.workgroupSize=[64,1,1],this.atomic=!0,this.outputShape=[t],this.dispatchLayout=(0,s.flatDispatchLayout)(n),this.dispatch=(0,s.computeDispatch)(this.dispatchLayout,n,this.workgroupSize),this.shaderKey='sparseSegmentIdCountProgram'}getUserCode(){return`\n    ${(0,n.getMainHeaderString)('index')} {\n      if (index < uniforms.segmentIdsShape) {\n        let segmentId = segmentIds[index];\n        ${(0,t.atomicAddSnippet)('&result[segmentId]','1','int32')}\n      }\n    }\n  `}};e.SparseSegmentMeanProgram=class{constructor(t,n){this.variableNames=['segmentSum','sameSegmentIdCount'],this.outputShape=[],this.uniforms='segmentSize : i32',this.workgroupSize=[64,1,1],this.size=!0,this.outputShape=t,this.type=n,this.dispatchLayout=(0,s.flatDispatchLayout)(t),this.dispatch=(0,s.computeDispatch)(this.dispatchLayout,t,this.workgroupSize),this.shaderKey='sparseSegmentMean'}getUserCode(){return`\n    ${(0,n.getMainHeaderString)('index')} {\n      if (index < uniforms.size) {\n        let segmentId = index / uniforms.segmentSize;\n        let count = sameSegmentIdCount[segmentId];\n        if (count != 0) {\n          ${'float32'===this.type?'setOutputAtIndex(index, segmentSum[index] / f32(count));':'setOutputAtIndexI32(index, segmentSum[index] / count);'}\n        }\n      }\n    }\n  `}}},2645,[2418,2417,2419]);
__d(function(g,r,i,a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.sparseSegmentSum=t,e.sparseSegmentSumConfig=void 0;var n=r(d[0]),s=r(d[1]);
/**
   * @license
   * Copyright 2023 Google LLC.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   */
function t(n){const{inputs:t,backend:u}=n,{data:S,indices:c,segmentIds:o}=t;return(0,s.sparseSegmentReduce)(S,c,o,!0,u)}e.sparseSegmentSumConfig={kernelName:n.SparseSegmentSum,backendName:'webgpu',kernelFunc:t}},2646,[1158,2644]);
__d(function(g,r,i,a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.sparseToDense=u,e.sparseToDenseConfig=void 0;var t=r(d[0]),s=r(d[1]),n=r(d[2]),p=r(d[3]),o=r(d[4]),c=r(d[5]);
/**
   * @license
   * Copyright 2021 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   */
function u(u){const{inputs:l,backend:h,attrs:b}=u,{sparseIndices:k,sparseValues:f,defaultValue:y}=l,{outputShape:S}=b,{sliceRank:P,numUpdates:I,sliceSize:D,strides:T,outputSize:x}=t.backend_util.calculateShapes(f,k,S),w=!1;if('string'===f.dtype){const n=h.bufferSync(k),p=h.bufferSync(f),o=t.util.decodeString(h.readSync(y.dataId)[0]),c=(0,s.scatterImplCPU)(n,p,S,x,D,I,P,T,o,w);return h.makeTensorInfo(S,c.dtype,c.values)}const U=[x/D,D],_=(0,o.reshape)({inputs:{x:k},backend:h,attrs:{shape:[I,P]}}),v=f.shape.length?(0,o.reshape)({inputs:{x:f},backend:h,attrs:{shape:[I,D]}}):(0,p.identity)({inputs:{x:f},backend:h}),z=v.dtype,C=h.makeTensorInfo([],z,t.util.makeZerosTypedArray(1,z)),G=(0,o.reshape)({inputs:{x:y},backend:h,attrs:{shape:Array(U.length).fill(1)}}),W=(0,c.tile)({inputs:{x:G},backend:h,attrs:{reps:U}}),A=[{type:'int32',data:[P]},{type:'int32',data:T},{type:'int32',data:[t.util.sizeFromShape([I,D])]}];switch(I){case 0:break;case 1:{const t=new n.ScatterProgram([I,D],P,_.shape.length,v.shape.length,T,U,z,w);h.runWebGPUProgram(t,[v,_],z,A,W)}break;default:{const t=new n.ScatterProgram([I,D],P,_.shape.length,C.shape.length,T,U,z,w);h.runWebGPUProgram(t,[C,_],z,A,W)}{const t=new n.ScatterProgram([I,D],P,_.shape.length,v.shape.length,T,U,z);h.runWebGPUProgram(t,[v,_],z,A,W)}}const F=(0,o.reshape)({inputs:{x:W},backend:h,attrs:{shape:S}});return h.disposeData(_.dataId),h.disposeData(v.dataId),h.disposeData(G.dataId),h.disposeData(C.dataId),h.disposeData(W.dataId),F}e.sparseToDenseConfig={kernelName:t.SparseToDense,backendName:'webgpu',kernelFunc:u}},2647,[1158,2441,2630,2439,2433,2648]);
__d(function(g,r,i,a,m,e,_d){Object.defineProperty(e,"__esModule",{value:!0}),e.tile=o,e.tileConfig=void 0;var n=r(_d[0]),t=r(_d[1]),d=r(_d[2]);
/**
   * @license
   * Copyright 2021 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   */
function o(o){const{inputs:s,backend:l,attrs:p}=o,{x:u}=s,{reps:c}=p;if(l.shouldExecuteOnCPU([u])||'string'===u.dtype||u.shape.length>=5){const d=l.readSync(u.dataId),o='string'===u.dtype?d.map(t=>n.util.decodeString(t)):d,s=(0,n.buffer)(u.shape,u.dtype,o),p=(0,t.tileImplCPU)(s,c);return l.makeTensorInfo(p.shape,p.dtype,p.values)}const f=new d.TileProgram(u.shape,c);return l.runWebGPUProgram(f,[u],u.dtype)}e.tileConfig={kernelName:n.Tile,backendName:'webgpu',kernelFunc:o}},2648,[1158,2441,2649]);
__d(function(g,r,_i,a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.TileProgram=void 0;var t=r(d[0]),i=r(d[1]);function s(t,i=""){if(t>=5)throw Error(`Tile for rank ${t} is not yet supported`);if(1===t)return`(resRC % ${i}aShape)`;const s=['resRC.x','resRC.y','resRC.z','resRC.w'],n=[];for(let o=0;o<t;o++)n.push(`(${s[o]} % ${i}aShape[${o}])`);return n.join()}e.TileProgram=
/**
   * @license
   * Copyright 2021 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   */
class{constructor(t,s){this.variableNames=['A'],this.workgroupSize=[64,1,1],this.size=!0;const n=new Array(t.length);for(let i=0;i<n.length;i++)n[i]=t[i]*s[i];this.outputShape=n,this.dispatchLayout=(0,i.flatDispatchLayout)(this.outputShape),this.dispatch=(0,i.computeDispatch)(this.dispatchLayout,this.outputShape,this.workgroupSize),this.rank=this.outputShape.length,this.shaderKey='tile'}getUserCode(){const i=s(this.rank,'uniforms.');return`\n      ${(0,t.getMainHeaderString)('index')} {\n        if (index < uniforms.size) {\n          let resRC = getCoordsFromIndex(index);\n          setOutputAtIndex(index, getA(${i}));\n        }\n      }\n    `}}},2649,[2417,2419]);
__d(function(g,r,i,a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.splitV=s,e.splitVConfig=void 0;var n=r(d[0]),t=r(d[1]);
/**
   * @license
   * Copyright 2021 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   */
function s(s){const{inputs:l,backend:p,attrs:c}=s,{x:u}=l,{numOrSizeSplits:o,axis:b}=c,f=n.util.parseAxisParam(b,u.shape)[0],k=n.backend_util.prepareSplitSize(u,o,f),S=u.shape.length,_=new Array(S).fill(0),h=u.shape.slice();return k.map(n=>{const s=[...h];s[f]=n;const l=(0,t.slice)({inputs:{x:u},backend:p,attrs:{begin:_,size:s}});return _[f]+=n,l})}e.splitVConfig={kernelName:n.SplitV,backendName:'webgpu',kernelFunc:s}},2650,[1158,2474]);
__d(function(g,r,i,a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.sqrtConfig=e.sqrt=void 0;var n=r(d[0]),t=r(d[1]),o=r(d[2]);
/**
   * @license
   * Copyright 2021 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   */
const u=e.sqrt=(0,t.unaryKernelFunc)({opType:o.UnaryOpType.SQRT});e.sqrtConfig={kernelName:n.Sqrt,backendName:'webgpu',kernelFunc:u}},2651,[1158,2435,2427]);
__d(function(g,r,i,a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.squareConfig=void 0;var n=r(d[0]),u=r(d[1]),o=r(d[2]);
/**
   * @license
   * Copyright 2020 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   */
e.squareConfig={kernelName:n.Square,backendName:'webgpu',kernelFunc:({inputs:n,backend:p})=>{const{x:t}=n,c=p,s=new u.UnaryOpProgram(t.shape,o.UnaryOpType.SQUARE);return c.runWebGPUProgram(s,[t],t.dtype)}}},2652,[1158,2440,2427]);
__d(function(g,r,i,a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.squaredDifferenceConfig=e.squaredDifference=void 0;var n=r(d[0]),f=r(d[1]),c=r(d[2]);
/**
   * @license
   * Copyright 2020 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   */
const u=e.squaredDifference=(0,c.binaryKernelFunc)({opType:f.BinaryOpType.SQUARED_DIFFERENCE});e.squaredDifferenceConfig={kernelName:n.SquaredDifference,backendName:'webgpu',kernelFunc:u}},2653,[1158,2426,2435]);
__d(function(g,r,i,a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.step=o,e.stepConfig=void 0;var n=r(d[0]),t=r(d[1]),p=r(d[2]);
/**
   * @license
   * Copyright 2022 Google LLC.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   */
function o({inputs:n,attrs:o,backend:s}){const{x:u}=n,c=new p.UnaryOpProgram(u.shape,t.UnaryOpType.STEP,'stepAlpha : f32,'),f=[{type:'float32',data:[o.alpha]}];return s.runWebGPUProgram(c,[u],u.dtype,f)}e.stepConfig={kernelName:n.Step,backendName:'webgpu',kernelFunc:o}},2654,[1158,2427,2440]);
__d(function(g,r,i,a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.stridedSlice=c,e.stridedSliceConfig=void 0;var s=r(d[0]),t=r(d[1]),n=r(d[2]),l=r(d[3]),p=r(d[4]);
/**
   * @license
   * Copyright 2021 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   */
function c(c){const{inputs:u,backend:o,attrs:h}=c,{x:k}=u,{begin:S,end:b,strides:f,beginMask:x,endMask:y,ellipsisMask:I,newAxisMask:M,shrinkAxisMask:P}=h,{finalShapeSparse:_,finalShape:v,isIdentity:C,sliceDim0:w,isSimpleSlice:D,begin:O,end:U,strides:A}=s.slice_util.sliceInfo(k.shape,S,b,f,x,y,I,M,P);let N;if(C)N=(0,n.reshape)({inputs:{x:k},backend:o,attrs:{shape:v}});else if(w||D){s.util.assert(k.shape.length>=1,()=>`Input must have rank at least 1, got: ${k.shape.length}`);const t=s.slice_util.computeOutShape(O,U,A),p=(0,l.slice)({inputs:{x:k},backend:o,attrs:{begin:O,size:t}});N=(0,n.reshape)({inputs:{x:p},backend:o,attrs:{shape:v}}),o.disposeData(p.dataId)}else{if(o.shouldExecuteOnCPU([k])){const n=o.readSync(k.dataId),l=(0,s.buffer)(k.shape,k.dtype,n),p=(0,t.stridedSliceImplCPU)(_,l,A,O);N=o.makeTensorInfo(v,k.dtype,p.values)}else{const s=new p.StridedSliceProgram(_),t=[{type:'int32',data:O},{type:'int32',data:A}],l=o.runWebGPUProgram(s,[k],k.dtype,t);N=(0,n.reshape)({inputs:{x:l},backend:o,attrs:{shape:v}}),o.disposeData(l.dataId)}}return N}e.stridedSliceConfig={kernelName:s.StridedSlice,backendName:'webgpu',kernelFunc:c}},2655,[1158,2441,2433,2474,2656]);
__d(function(g,r,_i,a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.StridedSliceProgram=void 0;var t=r(d[0]),i=r(d[1]);e.StridedSliceProgram=
/**
   * @license
   * Copyright 2019 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   */
class{constructor(s){this.variableNames=['x'],this.workPerThread=1,this.workgroupSize=[64,1,1],this.size=!0,this.outputShape=s,this.dispatchLayout=(0,i.flatDispatchLayout)(this.outputShape),this.dispatch=(0,i.computeDispatch)(this.dispatchLayout,this.outputShape,this.workgroupSize,[this.workPerThread,1,1]);const o=(0,t.getCoordsDataType)(this.outputShape.length);this.uniforms=`begin : ${o},  strides : ${o}, `,this.shaderKey='stridedSlice'}getUserCode(){let i='';if(1===this.outputShape.length)i='coords * uniforms.strides + uniforms.begin';else{let t=0;i=this.outputShape.map((i,s)=>(t++,1===this.outputShape.length?`coords * uniforms.strides[${s}] + uniforms.begin[${s}]`:`coords[${t-1}] * uniforms.strides[${s}] + uniforms.begin[${s}]`)).join(',')}return`\n       ${(0,t.getMainHeaderString)('index')} {\n         if (index < uniforms.size) {\n           let coords = getCoordsFromIndex(index);\n           setOutputAtIndex(index, getX(${i}));\n         }\n       }\n     `}}},2656,[2417,2419]);
__d(function(g,r,i,a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.stringNGrams=s,e.stringNGramsConfig=void 0;var n=r(d[0]),t=r(d[1]);
/**
   * @license
   * Copyright 2021 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   */
function s(n){const{inputs:s,backend:o,attrs:c}=n,{separator:p,nGramWidths:u,leftPad:f,rightPad:l,padWidth:N,preserveShortSequences:h}=c,{data:k,dataSplits:G}=s,S=o.readSync(k.dataId),I=o.readSync(G.dataId),[b,v]=(0,t.stringNGramsImplCPU)(S,I,p,u,f,l,N,h);return[o.makeTensorInfo([b.length],'string',b),o.makeTensorInfo(G.shape,'int32',v)]}e.stringNGramsConfig={kernelName:n.StringNGrams,backendName:'webgpu',kernelFunc:s}},2657,[1158,2441]);
__d(function(g,r,i,a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.subConfig=e.sub=void 0;var n=r(d[0]),u=r(d[1]),p=r(d[2]),b=r(d[3]);
/**
   * @license
   * Copyright 2021 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   */
const o=e.sub=(0,p.binaryKernelFunc)({opType:u.BinaryOpType.SUB,cpuKernelImpl:b.subImplCPU,supportsComplex:!0});e.subConfig={kernelName:n.Sub,backendName:'webgpu',kernelFunc:o}},2658,[1158,2426,2435,2441]);
__d(function(g,r,i,a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.tanConfig=e.tan=void 0;var n=r(d[0]),o=r(d[1]),t=r(d[2]);
/**
   * @license
   * Copyright 2022 Google LLC.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   */
const u=e.tan=(0,o.unaryKernelFunc)({opType:t.UnaryOpType.TAN});e.tanConfig={kernelName:n.Tan,backendName:'webgpu',kernelFunc:u}},2659,[1158,2435,2427]);
__d(function(g,r,i,a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.tanhConfig=e.tanh=void 0;var n=r(d[0]),o=r(d[1]),t=r(d[2]);
/**
   * @license
   * Copyright 2021 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   */
const u=e.tanh=(0,o.unaryKernelFunc)({opType:t.UnaryOpType.TANH});e.tanhConfig={kernelName:n.Tanh,backendName:'webgpu',kernelFunc:u}},2660,[1158,2435,2427]);
__d(function(g,r,i,a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.tensorScatterUpdate=c,e.tensorScatterUpdateConfig=void 0;var t=r(d[0]),s=r(d[1]),n=r(d[2]),p=r(d[3]);
/**
   * @license
   * Copyright 2023 Google LLC.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   */
function c(c){const{inputs:o,backend:u,attrs:h}=c,{tensor:l,indices:k,updates:b}=o,{}=h,{sliceRank:f,numUpdates:S,sliceSize:y,strides:U,outputSize:x}=t.backend_util.calculateShapes(b,k,l.shape),_=[x/y,y];if(0===x)return u.makeTensorInfo(l.shape,k.dtype);const P=[],v=(0,n.reshape)({inputs:{x:k},backend:u,attrs:{shape:[S,f]}});P.push(v);const z=(0,n.reshape)({inputs:{x:b},backend:u,attrs:{shape:[S,y]}});P.push(z);const w=(0,n.reshape)({inputs:{x:l},backend:u,attrs:{shape:_}});P.push(w);const C=(0,p.tile)({inputs:{x:w},backend:u,attrs:{reps:Array(_.length).fill(1)}}),F=new s.ScatterProgram([S,y],f,v.shape.length,z.shape.length,U,_,l.dtype,!1),I=[{type:'int32',data:[f]},{type:'int32',data:U},{type:'int32',data:[t.util.sizeFromShape([S,y])]}],N=u.runWebGPUProgram(F,[z,v],w.dtype,I,C);P.push(N);const T=(0,n.reshape)({inputs:{x:N},backend:u,attrs:{shape:l.shape}});return P.forEach(t=>u.disposeData(t.dataId)),T}e.tensorScatterUpdateConfig={kernelName:t.TensorScatterUpdate,backendName:'webgpu',kernelFunc:c}},2661,[1158,2630,2433,2648]);
__d(function(g,r,i,a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.topK=h,e.topKConfig=void 0;var t=r(d[0]),n=r(d[1]),s=r(d[2]),o=r(d[3]),p=r(d[4]),l=r(d[5]),u=r(d[6]);
/**
   * @license
   * Copyright 2021 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   */
function c(t,n){null!==n&&t.disposeData(n.dataId)}function f(t){let n=1;for(;n<t;)n*=2;return n}function h(h){const{inputs:b,backend:k,attrs:y}=h,{x:I}=b,{k:P,sorted:x}=y,T=I.shape,v=T[T.length-1];if(k.shouldExecuteOnCPU([I])){const t=k.readSync(I.dataId),[s,o]=(0,n.topKImplCPU)(t,T,I.dtype,P,x);return[k.makeTensorInfo(s.shape,s.dtype,s.values),k.makeTensorInfo(o.shape,o.dtype,o.values)]}if(0===P)return T[T.length-1]=0,[k.makeTensorInfo(T,I.dtype,[]),k.makeTensorInfo(T,'int32',[])];if(1===v)return[I,(0,o.fill)({attrs:{shape:T,dtype:'int32',value:0},backend:k})];const N=t.util.sizeFromShape(T)/v,K=(0,l.reshape)({inputs:{x:I},attrs:{shape:[N,v]},backend:k}),_=f(P),w=f(v);let C=null;const U=()=>null===C?[K,K]:[K,C],E=(t,n,o)=>{const p=U(),l=new s.SwapProgram(o),u=[{type:'int32',data:[v]},{type:'int32',data:[null===C?1:0]},{type:'float32',data:[Number.NEGATIVE_INFINITY]},{type:'int32',data:[t]},{type:'int32',data:[n]}],f=C;C=k.runWebGPUProgram(l,p,'int32',u),c(k,f)};for(let t=1;t<_;t*=2){const n=2*t;for(let s=t;s>=1;s/=2)E(n,s,[N,w])}for(let t=w;t>_;t/=2){const n=U(),o=new s.MergeProgram([N,t/2]),p=[{type:'int32',data:[v]},{type:'int32',data:[null===C?1:0]},{type:'int32',data:[_]}],l=C;C=k.runWebGPUProgram(o,n,'int32',p),c(k,l);const u=_/2,f=2*u;for(let t=u;t>=1;t/=2)E(f,t,C.shape)}let F=C;C=(0,u.slice)({inputs:{x:C},backend:k,attrs:{begin:0,size:[N,P]}}),c(k,F);let G=(0,p.gatherV2)({inputs:{x:K,indices:C},backend:k,attrs:{axis:1,batchDims:1}});c(k,K);const S=T.slice(0,-1);S.push(P),F=C,C=(0,l.reshape)({inputs:{x:C},attrs:{shape:S},backend:k}),c(k,F);const z=G;return G=(0,l.reshape)({inputs:{x:G},attrs:{shape:S},backend:k}),c(k,z),[G,C]}e.topKConfig={kernelName:t.TopK,backendName:'webgpu',kernelFunc:h}},2662,[1158,2441,2663,2431,2559,2433,2474]);
__d(function(g,r,i,a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.SwapProgram=e.MergeProgram=void 0;var n=r(d[0]),t=r(d[1]);e.SwapProgram=
/**
   * @license
   * Copyright 2021 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   */
class{constructor(n){this.variableNames=['x','indices'],this.workgroupSize=[256,1,1],this.size=!0,this.outputShape=n,this.dispatchLayout=(0,t.flatDispatchLayout)(this.outputShape),this.dispatch=(0,t.computeDispatch)(this.dispatchLayout,this.outputShape,this.workgroupSize),this.uniforms="inputSize : i32, firstPass : i32, negativeInf : f32,\n        dir : i32, inc : i32,",this.shaderKey='swap'}getUserCode(){return`\n        ${(0,n.getMainHeaderString)('index')} {\n          if (index < uniforms.size) {\n            let outC = getCoordsFromIndex(index);\n            let batch = outC[0];\n            let elemIdx = outC[1];\n            // We compare elements pair-wise within a group of size 2 * inc.\n            // The comparing rule for each group alternates between ascending\n            // and descending. Within each group, we compare each pair at\n            // positions i and i+inc. To decide whether an element at position i\n            // is x0 or x1, we mod it by 2 * inc, if the result is smaller than\n            // inc, it is in the first half of the group, we denote it as x0,\n            // otherwise we denote it as x1.\n            // For example, as shown in the Bitonic top K paper referenced\n            // above, Figure5(a) shows that element[1] is in the second half of\n            // the group when group size is 2, but it is in the first half of\n            // the group when group size is 4.\n            let isFirstInPair = elemIdx % (2 * uniforms.inc) < uniforms.inc;\n            var i = 0;\n            if (isFirstInPair) {\n              i = elemIdx;\n            } else {\n              i = elemIdx - uniforms.inc;\n            }\n\n            var i0 = 0;\n            if (uniforms.firstPass == 1) {\n              i0 = i;\n            } else {\n              i0 = i32(getIndices(batch, i));\n            }\n\n            var i1 = 0;\n            if (uniforms.firstPass == 1) {\n              i1 = i + uniforms.inc;\n            } else {\n              i1 = i32(getIndices(batch, i + uniforms.inc));\n            }\n\n            var x0 = f32(0.0);\n            var x1 = f32(0.0);\n            if (i0 < uniforms.inputSize) {\n              x0 = getX(batch, i0);\n            } else {\n              x0 = uniforms.negativeInf;\n            }\n            if (i1 < uniforms.inputSize) {\n              x1 = getX(batch, i1);\n            } else {\n              x1 = uniforms.negativeInf;\n            }\n\n            let reverse = elemIdx % (2 * uniforms.dir) >= uniforms.dir;\n            let isGreater = x0 > x1 || (x0 == x1 && i1 > i0);\n            if (reverse == isGreater) {\n              // Elements in opposite order of direction\n              let iTemp = i0;\n              i0 = i1;\n              i1 = iTemp;\n            }\n            if (isFirstInPair) {\n              setOutputAtIndex(index, f32(i0));\n            } else {\n              setOutputAtIndex(index, f32(i1));\n            }\n          }\n        }\n      `}};e.MergeProgram=class{constructor(n){this.variableNames=['x','indices'],this.workgroupSize=[256,1,1],this.size=!0,this.outputShape=n,this.dispatchLayout=(0,t.flatDispatchLayout)(this.outputShape),this.dispatch=(0,t.computeDispatch)(this.dispatchLayout,this.outputShape,this.workgroupSize),this.uniforms="inputSize : i32, firstPass : i32, k : i32,",this.shaderKey='merge'}getUserCode(){return`\n        ${(0,n.getMainHeaderString)('index')} {\n          if (index < uniforms.size) {\n            let outC = getCoordsFromIndex(index);\n            let batch = outC[0];\n            let elemIdx = outC[1];\n            // The output size is half of the previous size.\n            // If the previous sequence is | | | | _ _ _ _  | | | |  _ _ _ _\n            // (k=4), we only need to output the indices at positions |, the\n            // indices at positions _ can be thrown away, see Figure5(b) After\n            // Phase 2 (Merge phase) in the Bitonic Top K paper referenced\n            // above.\n            // For example, the paper shows we only need to output the orange\n            // bars. The output sequence should look like this | | | | | | | |.\n            // Because the sequence is halved, to map the output index back to\n            // the previous sequence to find the corresponding value, we need\n            // to double the index. When we double the index, we basically\n            // interpolate a position, so 2i looks like\n            // | _ | _ | _ | _ | _ | _ | _. We move the | to the first k\n            // position of each 2k positions by - elemIdx % k. E.g. for output\n            // at index 4,5,6,7, we want to get the corresponding element at\n            // original index 8,9,10,11, for output at index 8,9,10,11,\n            // we want to get the corresponding element at original index\n            // 16,17,18,19, so on and so forth.\n\n            var i = 0;\n            if (elemIdx < uniforms.k) {\n              i = elemIdx;\n            } else {\n              i = elemIdx * 2 - elemIdx % uniforms.k;\n            }\n            var i0 = 0;\n            if (uniforms.firstPass == 1) {\n              i0 = i;\n            } else {\n              i0 = i32(getIndices(batch, i));\n            }\n            var i1 = 0;\n            if (uniforms.firstPass == 1) {\n              i1 = i + uniforms.k;\n            } else {\n              i1 = i32(getIndices(batch, i + uniforms.k));\n            }\n\n            let x0 = getX(batch, i0);\n            var x1 = f32(0.0);\n            if (i1 < uniforms.inputSize) {\n              x1 = getX(batch, i1);\n            } else {\n              x1 = x0;\n            }\n\n            if (x0 >= x1) {\n              setOutputAtIndex(index, f32(i0));\n            } else {\n              setOutputAtIndex(index, f32(i1));\n            }\n          }\n        }\n      `}}},2663,[2417,2419]);
__d(function(g,r,i,a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.transform=o,e.transformConfig=void 0;var t=r(d[0]),n=r(d[1]);
/**
   * @license
   * Copyright 2021 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   */
function o(t){const{inputs:o,backend:s,attrs:f}=t,{image:l,transforms:c}=o,{interpolation:u,fillMode:p,fillValue:b,outputShape:k}=f,[w,y,P,_]=l.shape,[h,v]=null!=k?k:[y,P],C=[w,h,v,_],M=new n.TransformProgram(C),N='nearest'===u?1:2;let T;switch(p){case'constant':default:T=1;break;case'reflect':T=2;break;case'wrap':T=3;break;case'nearest':T=4}const j=[{type:'int32',data:[N]},{type:'int32',data:[T]},{type:'float32',data:[b]}];return s.runWebGPUProgram(M,[l,c],'float32',j)}e.transformConfig={kernelName:t.Transform,backendName:'webgpu',kernelFunc:o}},2664,[1158,2665]);
__d(function(g,r,i,a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.TransformProgram=void 0;var n=r(d[0]),o=r(d[1]);e.TransformProgram=
/**
   * @license
   * Copyright 2021 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   */
class{constructor(n){this.variableNames=['Image','Transforms'],this.uniforms='interpolationModeId : i32, fillModeId : i32, fillValue : f32,',this.workgroupSize=[64,1,1],this.size=!0,this.outputShape=n,this.dispatchLayout=(0,o.flatDispatchLayout)(this.outputShape),this.dispatch=(0,o.computeDispatch)(this.dispatchLayout,this.outputShape,this.workgroupSize),this.shaderKey='transform'}getUserCode(){return`\n          fn mapCoord(outCoord : f32, len : f32) -> f32{\n            var inCoord = outCoord;\n            if(uniforms.fillModeId == 2) {\n              if (inCoord < 0.0) {\n                if (len <= 1.0) {\n                  inCoord = 0.0;\n                } else {\n                  let sz2 = 2.0 * len;\n                  if (inCoord < sz2) {\n                    inCoord = sz2 * f32(i32(f32(-inCoord / sz2))) +\n                    inCoord;\n                  }\n                  if (inCoord < -len) {\n                    inCoord = inCoord + sz2;\n                  } else {\n                    inCoord = -inCoord - 1.0;\n                  }\n                }\n              } else if (inCoord > len - 1.0) {\n                if (len <= 1.0) {\n                  inCoord = 0.0;\n                } else {\n                  let sz2 = 2.0 * len;\n                  inCoord = inCoord - sz2 * f32(i32(f32(inCoord / sz2)));\n                  if (inCoord >= len) {\n                    inCoord = sz2 - inCoord - 1.0;\n                  }\n                }\n              }\n              return clamp(inCoord, 0.0, len - 1.0);\n            } else if (uniforms.fillModeId == 3) {\n              if (inCoord < 0.0) {\n                if (len <= 1.0) {\n                  inCoord = 0.0;\n                } else {\n                  let sz = len - 1.0;\n                  inCoord = inCoord + len * (f32(i32(f32(-inCoord / sz))) + 1.0);\n                }\n              } else if (inCoord > len - 1.0) {\n                if (len <= 1.0) {\n                  inCoord = 0.0;\n                } else {\n                  let sz = len - 1.0;\n                  inCoord = inCoord - len * f32(i32(f32(inCoord / sz)));\n                }\n              }\n              return clamp(inCoord, 0.0, len - 1.0);\n            } else if (uniforms.fillModeId == 4) {\n              return clamp(outCoord, 0.0, len - 1.0);\n            }\n            return outCoord;\n          }\n          fn readWithFillValue(batch : i32, coordY : i32, coordX : i32,\n            channel : i32) -> f32 {\n            var outputValue : f32;\n            if (0 <= coordY && coordY < uniforms.imageShape[1] && 0 <= coordX && coordX < uniforms.imageShape[2]) {\n                outputValue = getImage(batch, coordY, coordX, channel);\n            } else {\n              outputValue = uniforms.fillValue;\n            }\n            return outputValue;\n          }\n\n          ${(0,n.getMainHeaderString)('index')} {\n            if (index < uniforms.size) {\n              let coords = getCoordsFromIndex(index);\n              var outputValue : f32;\n              let batch = coords[0];\n              let x = coords[2];\n              let y = coords[1];\n              let channel = coords[3];\n              let xf = f32(x);\n              let yf = f32(y);\n              let a1 = getTransforms(batch, 0);\n              let a2 = getTransforms(batch, 1);\n              let a3 = getTransforms(batch, 2);\n              let b1 = getTransforms(batch, 3);\n              let b2 = getTransforms(batch, 4);\n              let b3 = getTransforms(batch, 5);\n              let c1 = getTransforms(batch, 6);\n              let c2 = getTransforms(batch, 7);\n              let projection = c1 * xf + c2 * yf + 1.0;\n              if (projection == 0.0) {\n                outputValue = uniforms.fillValue;\n              } else {\n                let inX = (a1 * xf + a2 * yf + a3) / projection;\n                let inY = (b1 * xf + b2 * yf + b3) / projection;\n                let mapX = mapCoord(inX, f32(uniforms.imageShape[2]));\n                let mapY = mapCoord(inY, f32(uniforms.imageShape[1]));\n\n                if (uniforms.interpolationModeId == 1) {\n                  let coordY = i32(round(mapY));\n                  let coordX = i32(round(mapX));\n                  outputValue = readWithFillValue(batch, coordY, coordX,\n                    channel);\n                } else {\n                  let yFloor = floor(mapY);\n                  let xFloor = floor(mapX);\n                  let yCeil = yFloor + 1.0;\n                  let xCeil = xFloor + 1.0;\n                  let valueYFloor = (xCeil - mapX) *\n                  readWithFillValue(batch, i32(yFloor), i32(xFloor), channel) +\n                  (mapX - xFloor) *\n                  readWithFillValue(batch, i32(yFloor), i32(xCeil), channel);\n                  let valueYCeil = (xCeil - mapX) *\n                  readWithFillValue(batch, i32(yCeil), i32(xFloor), channel) +\n                  (mapX - xFloor) *\n                  readWithFillValue(batch, i32(yCeil), i32(xCeil), channel);\n                  outputValue = (yCeil - mapY) * valueYFloor +\n                  (mapY - yFloor) * valueYCeil;\n                }\n              }\n              setOutputAtIndex(index, outputValue);\n            }\n          }\n        `}}},2665,[2417,2419]);
__d(function(g,r,_i,a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.unpack=c,e.unpackConfig=void 0;var n=r(d[0]),t=r(d[1]),s=r(d[2]);
/**
   * @license
   * Copyright 2021 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   */
function c(n){const{inputs:c,backend:p,attrs:i}=n,{value:l}=c;let{axis:o}=i;o<0&&(o+=l.shape.length);const u=l,h=u.shape.length,k=l.shape[o],f=new Array(h-1);let b=0;for(let n=0;n<h;n++)n!==o&&(f[b++]=u.shape[n]);const v=[],w=new Array(h).fill(0),y=u.shape.slice();y[o]=1;const _=new Array(k);for(let n=0;n<_.length;n++){w[o]=n;const c=(0,s.slice)({inputs:{x:u},backend:p,attrs:{begin:w,size:y}}),i=(0,t.reshape)({inputs:{x:c},backend:p,attrs:{shape:f}});_[n]=i,v.push(c)}return v.forEach(n=>p.disposeData(n.dataId)),_}e.unpackConfig={kernelName:n.Unpack,backendName:'webgpu',kernelFunc:c}},2666,[1158,2433,2474]);
__d(function(g,r,i,a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.unsortedSegmentSum=o,e.unsortedSegmentSumConfig=void 0;var t=r(d[0]),n=r(d[1]),s=r(d[2]),u=r(d[3]),p=r(d[4]);
/**
   * @license
   * Copyright 2023 Google LLC.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   */
function o(o){const{inputs:c,backend:l,attrs:h}=o,{x:b,segmentIds:S}=c,{numSegments:k}=h,_=b.shape.length,f=[];let x=0;const P=t.backend_util.getAxesPermutation([x],_);let y=b;null!=P&&(y=(0,p.transpose)({inputs:{x:b},backend:l,attrs:{perm:P}}),f.push(y),x=t.backend_util.getInnerMostAxes(1,_)[0]);const v=t.backend_util.segment_util.computeOutShape(y.shape,x,k),U=t.util.sizeFromShape([y.shape[x]]),A=(0,u.reshape)({inputs:{x:y},backend:l,attrs:{shape:[-1,U]}});f.push(A);const F=b.dtype,I=[A.shape[0],k],w=(0,s.fill)({backend:l,attrs:{shape:I,value:0,dtype:F}}),z=new n.UnsortedSegmentSumProgram(A.shape,I,F),C=[{type:'int32',data:[k]},{type:'int32',data:[t.util.sizeFromShape(A.shape)]}],M=l.runWebGPUProgram(z,[A,S],F,C,w),N=(0,u.reshape)({inputs:{x:M},backend:l,attrs:{shape:v}});f.push(M);let O=N;if(null!=P){f.push(N);const n=t.backend_util.getUndoAxesPermutation(P);O=(0,p.transpose)({inputs:{x:O},backend:l,attrs:{perm:n}})}return f.forEach(t=>l.disposeData(t.dataId)),O}e.unsortedSegmentSumConfig={kernelName:t.UnsortedSegmentSum,backendName:'webgpu',kernelFunc:o}},2667,[1158,2668,2431,2433,2449]);
__d(function(g,r,i,a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.UnsortedSegmentSumProgram=void 0;var t=r(d[0]),n=r(d[1]),s=r(d[2]);e.UnsortedSegmentSumProgram=
/**
   * @license
   * Copyright 2023 Google LLC.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   */
class{constructor(t,n,o){if(this.outputShape=[],this.variableNames=['x','segmentIds'],this.uniforms='numSegments : i32, xSize: i32,',this.workgroupSize=[64,1,1],this.atomic=!0,this.outputShape=n,this.dispatchLayout=(0,s.flatDispatchLayout)(t),this.dispatch=(0,s.computeDispatch)(this.dispatchLayout,t,this.workgroupSize),'float32'!==o&&'int32'!==o)throw new Error(`UnsortedSegmentSum only supports float32 and int32\n              types, does not support ${o} type.`);this.type=o,this.shaderKey='unsortedSegmentSum'}getUserCode(){return`\n    ${(0,n.getMainHeaderString)('index')} {\n      if (index < uniforms.xSize) {\n        let coords = getXCoordsFromIndex(index);\n        let b = coords[0];\n        let inCol = coords[1];\n\n        let segmentId = i32(getSegmentIds(inCol));\n        if (segmentId >= 0) {\n          let flatIndex = b * uniforms.numSegments + segmentId % uniforms.numSegments;\n          let value = getX(b, inCol);\n\n          ${(0,t.atomicAddSnippet)('&result[flatIndex]','value',this.type)}\n        }\n      }\n    }\n  `}}},2668,[2418,2417,2419]);
__d(function(g,_r,_i,a,m,_e,d){Object.defineProperty(_e,"__esModule",{value:!0});var e={version:!0,data:!0};_e.version=_e.data=void 0;var t=_r(d[0]);Object.keys(t).forEach(function(r){"default"!==r&&"__esModule"!==r&&(Object.prototype.hasOwnProperty.call(e,r)||r in _e&&_e[r]===t[r]||Object.defineProperty(_e,r,{enumerable:!0,get:function(){return t[r]}}))}),_r(d[1]),_r(d[2]);var r=_r(d[3]);Object.keys(r).forEach(function(t){"default"!==t&&"__esModule"!==t&&(Object.prototype.hasOwnProperty.call(e,t)||t in _e&&_e[t]===r[t]||Object.defineProperty(_e,t,{enumerable:!0,get:function(){return r[t]}}))});var n=_r(d[4]);Object.keys(n).forEach(function(t){"default"!==t&&"__esModule"!==t&&(Object.prototype.hasOwnProperty.call(e,t)||t in _e&&_e[t]===n[t]||Object.defineProperty(_e,t,{enumerable:!0,get:function(){return n[t]}}))});var o=(function(e,t){if("function"==typeof WeakMap)var r=new WeakMap,n=new WeakMap;return(function(e,t){if(!t&&e&&e.__esModule)return e;var o,c,f={__proto__:null,default:e};if(null===e||"object"!=typeof e&&"function"!=typeof e)return f;if(o=t?n:r){if(o.has(e))return o.get(e);o.set(e,f)}for(const t in e)"default"!==t&&{}.hasOwnProperty.call(e,t)&&((c=(o=Object.defineProperty)&&Object.getOwnPropertyDescriptor(e,t))&&(c.get||c.set)?o(f,t,c):f[t]=e[t]);return f})(e,t)}
/**
   * @license
   * Copyright 2018 Google LLC. All Rights Reserved.
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
   */)(_r(d[5]));_e.data=o;var c=_r(d[6]);Object.keys(c).forEach(function(t){"default"!==t&&"__esModule"!==t&&(Object.prototype.hasOwnProperty.call(e,t)||t in _e&&_e[t]===c[t]||Object.defineProperty(_e,t,{enumerable:!0,get:function(){return c[t]}}))});var f=_r(d[7]);Object.keys(f).forEach(function(t){"default"!==t&&"__esModule"!==t&&(Object.prototype.hasOwnProperty.call(e,t)||t in _e&&_e[t]===f[t]||Object.defineProperty(_e,t,{enumerable:!0,get:function(){return f[t]}}))});var u=_r(d[8]);_e.version={'tfjs-core':t.version_core,'tfjs-backend-cpu':c.version_cpu,'tfjs-backend-webgl':f.version_webgl,'tfjs-data':o.version_data,'tfjs-layers':r.version_layers,'tfjs-converter':n.version_converter,tfjs:u.version}},1920,[1158,1922,2031,2169,1862,2237,2258,1576,2408]);
__d(function(g,r,i,a,m,e,d){var o=r(d[0]),n=r(d[1]),f=r(d[2]),C=r(d[3]),G=r(d[4]),s=r(d[5]),t=r(d[6]),c=r(d[7]),l=r(d[8]),p=r(d[9]),u=r(d[10]),h=r(d[11]),x=r(d[12]),v=r(d[13]),D=r(d[14]),N=r(d[15]),b=r(d[16]),k=r(d[17]),B=r(d[18]),q=r(d[19]),P=r(d[20]),V=r(d[21]),y=r(d[22]),M=r(d[23]),S=r(d[24]),T=r(d[25]),z=r(d[26]),w=r(d[27]),I=r(d[28]),L=r(d[29]),_=r(d[30]),A=r(d[31]),E=r(d[32]),F=r(d[33]),H=r(d[34]),R=r(d[35]),j=r(d[36]),J=r(d[37]),K=r(d[38]),O=r(d[39]),Q=r(d[40]),U=r(d[41]),W=r(d[42]),X=r(d[43]),Y=r(d[44]),Z=r(d[45]),$=r(d[46]),aa=r(d[47]),oa=r(d[48]),ia=r(d[49]),ra=r(d[50]),na=r(d[51]),da=r(d[52]),ga=r(d[53]),fa=r(d[54]),Ca=r(d[55]),Ga=r(d[56]),ea=r(d[57]),sa=r(d[58]),ta=r(d[59]),ca=r(d[60]),la=r(d[61]),pa=r(d[62]),ma=r(d[63]),ua=r(d[64]),ha=r(d[65]),xa=r(d[66]),va=r(d[67]),Da=r(d[68]),Na=r(d[69]),ba=r(d[70]),ka=r(d[71]),Ba=r(d[72]),qa=r(d[73]),Pa=r(d[74]),Va=r(d[75]),ya=r(d[76]),Ma=r(d[77]),Sa=r(d[78]),Ta=r(d[79]),za=r(d[80]),wa=r(d[81]),Ia=r(d[82]),La=r(d[83]),_a=r(d[84]),Aa=r(d[85]),Ea=r(d[86]),Fa=r(d[87]),Ha=r(d[88]),Ra=r(d[89]),ja=r(d[90]),Ja=r(d[91]),Ka=r(d[92]),Oa=r(d[93]),Qa=r(d[94]),Ua=r(d[95]),Wa=r(d[96]),Xa=r(d[97]),Ya=r(d[98]),Za=r(d[99]),$a=r(d[100]),ao=r(d[101]);
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
const oo=[o.absGradConfig,n.acosGradConfig,f.acoshGradConfig,C.addGradConfig,G.addNGradConfig,s.argMaxGradConfig,t.argMinGradConfig,c.asinGradConfig,l.asinhGradConfig,p.atan2GradConfig,u.atanGradConfig,h.atanhGradConfig,x.avgPool3DGradConfig,v.avgPoolGradConfig,D.batchMatMulGradConfig,N.batchToSpaceNDGradConfig,b.broadcastToGradConfig,k.castGradConfig,B.ceilGradConfig,q.clipByValueGradConfig,P.complexAbsGradConfig,V.concatGradConfig,M.conv2DBackpropInputGradConfig,y.conv2DGradConfig,S.conv3DGradConfig,T.cosGradConfig,z.coshGradConfig,w.cumsumGradConfig,I.depthwiseConv2dNativeGradConfig,L.dilation2dGradConfig,va.divGradConfig,_.eluGradConfig,A.erfGradConfig,E.expGradConfig,F.expandDimsGradConfig,H.expm1GradConfig,j.floorDivGradConfig,R.floorGradConfig,J.fusedBatchNormGradConfig,K.gatherGradConfig,O.greaterEqualGradConfig,Q.identityGradConfig,U.isFiniteGradConfig,W.isInfGradConfig,X.isNanGradConfig,Y.leakyReluGradConfig,Z.log1pGradConfig,$.logGradConfig,aa.logSoftmaxGradConfig,oa.lrnGradConfig,ia.maxGradConfig,ia.maxGradConfig,ra.maximumGradConfig,na.maxPool3DGradConfig,da.maxPoolGradConfig,ga.meanGradConfig,fa.minGradConfig,Ca.minimumGradConfig,Ga.mirrorPadGradConfig,ea.modGradConfig,sa.multiplyGradConfig,ta.negGradConfig,ca.oneHotGradConfig,la.onesLikeGradConfig,pa.packGradConfig,ma.padV2GradConfig,ma.padV2GradConfig,ua.powGradConfig,ha.preluGradConfig,xa.prodGradConfig,Da.reciprocalGradConfig,Na.relu6GradConfig,ba.reluGradConfig,ka.reshapeGradConfig,Ba.resizeBilinearGradConfig,qa.resizeNearestNeighborGradConfig,Pa.reverseGradConfig,Va.roundGradConfig,ya.rsqrtGradConfig,Ma.selectGradConfig,Sa.seluGradConfig,Ta.sigmoidGradConfig,za.signGradConfig,wa.sinGradConfig,Ia.sinhGradConfig,La.sliceGradConfig,_a.softmaxGradConfig,Aa.softplusGradConfig,Ea.spaceToBatchNDGradConfig,Ea.spaceToBatchNDGradConfig,Fa.splitVGradConfig,Fa.splitVGradConfig,Ha.sqrtGradConfig,ja.squaredDifferenceGradConfig,Ra.squareGradConfig,Ja.stepGradConfig,Ka.subGradConfig,Oa.sumGradConfig,Qa.tanGradConfig,Ua.tanhGradConfig,Wa.tileGradConfig,Xa.transposeGradConfig,Ya.unpackGradConfig,Za.unsortedSegmentSumGradConfig,$a.zerosLikeGradConfig];for(const o of oo)(0,ao.registerGradient)(o)},1922,[1923,1924,1925,1926,1927,1928,1929,1930,1931,1932,1933,1934,1935,1937,1939,1940,1941,1942,1943,1944,1945,1946,1947,1948,1949,1951,1952,1953,1954,1955,1956,1957,1958,1959,1960,1961,1962,1963,1964,1965,1966,1967,1968,1969,1970,1971,1972,1973,1974,1976,1978,1979,1981,1983,1984,1985,1986,1987,1988,1989,1990,1991,1992,1993,1994,1995,1996,1997,1998,1999,2000,2001,2002,2003,2004,2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,2024,2025,2026,2027,2028,2029,2030,1166]);
__d(function(g,r,i,a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.absGradConfig=void 0;var n=r(d[0]),o=r(d[1]),t=r(d[2]),s=r(d[3]);
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
e.absGradConfig={kernelName:n.Abs,inputsToSave:['x'],gradFunc:(n,u)=>{const[c]=u;return{x:()=>(0,t.mul)(n,(0,s.step)((0,o.cast)(c,'float32'),-1))}}}},1923,[1165,1196,1204,1392]);
__d(function(g,r,i,_a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.acosGradConfig=void 0;var a=r(d[0]),n=r(d[1]),o=r(d[2]),s=r(d[3]),t=r(d[4]),c=r(d[5]),u=r(d[6]),f=r(d[7]);
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
e.acosGradConfig={kernelName:a.Acos,inputsToSave:['x'],gradFunc:(a,l)=>{const[v]=l;return{x:()=>{const l=(0,u.square)((0,n.cast)(v,'float32')),_=(0,c.sqrt)((0,f.sub)((0,t.scalar)(1),l));return(0,s.neg)((0,o.div)(a,_))}}}}},1924,[1165,1196,1202,1304,1278,1279,1280,1307]);
__d(function(g,r,i,_a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.acoshGradConfig=void 0;var o=r(d[0]),a=r(d[1]),n=r(d[2]),s=r(d[3]),t=r(d[4]),c=r(d[5]);
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
e.acoshGradConfig={kernelName:o.Acosh,inputsToSave:['x'],gradFunc:(o,u)=>{const[f]=u;return{x:()=>{const u=(0,s.sqrt)((0,c.sub)((0,t.square)((0,a.cast)(f,'float32')),1));return(0,n.div)(o,u)}}}}},1925,[1165,1196,1202,1279,1280,1307]);
__d(function(g,_r,_i,_a,m,_e,d){Object.defineProperty(_e,"__esModule",{value:!0}),_e.addGradConfig=void 0;var e=_r(d[0]),t=(function(e,t){if("function"==typeof WeakMap)var n=new WeakMap,r=new WeakMap;return(function(e,t){if(!t&&e&&e.__esModule)return e;var a,o,s={__proto__:null,default:e};if(null===e||"object"!=typeof e&&"function"!=typeof e)return s;if(a=t?r:n){if(a.has(e))return a.get(e);a.set(e,s)}for(const t in e)"default"!==t&&{}.hasOwnProperty.call(e,t)&&((o=(a=Object.defineProperty)&&Object.getOwnPropertyDescriptor(e,t))&&(o.get||o.set)?a(s,t,o):s[t]=e[t]);return s})(e,t)}
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
   */)(_r(d[1])),n=_r(d[2]),r=_r(d[3]);_e.addGradConfig={kernelName:e.Add,inputsToSave:['a','b'],gradFunc:(e,a)=>{const[o,s]=a,u=t.assertAndGetBroadcastShape(o.shape,s.shape);return{a:()=>{let a=e;const s=t.getReductionAxes(o.shape,u);return s.length>0&&(a=(0,r.sum)(a,s)),(0,n.reshape)(a,o.shape)},b:()=>{let a=e;const o=t.getReductionAxes(s.shape,u);return o.length>0&&(a=(0,r.sum)(a,o)),(0,n.reshape)(a,s.shape)}}}}},1926,[1165,1264,1221,1281]);
__d(function(g,r,_i,a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.addNGradConfig=void 0;var n=r(d[0]);
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
   */e.addNGradConfig={kernelName:n.AddN,saveAllInputs:!0,gradFunc:(n,o)=>{const c={};return o.forEach((o,l)=>{c[l]=()=>n.clone()}),c}}},1927,[1165]);
__d(function(g,r,i,a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.argMaxGradConfig=void 0;var n=r(d[0]),o=r(d[1]);
/**
   * @license
   * Copyright 2020 Google Inc. All Rights Reserved.
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
e.argMaxGradConfig={kernelName:n.ArgMax,inputsToSave:['x'],gradFunc:(n,t)=>{const[u]=t;return{x:()=>(0,o.zerosLike)(u)}}}},1928,[1165,1266]);
__d(function(g,r,i,a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.argMinGradConfig=void 0;var n=r(d[0]),o=r(d[1]);
/**
   * @license
   * Copyright 2020 Google Inc. All Rights Reserved.
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
e.argMinGradConfig={kernelName:n.ArgMin,inputsToSave:['x'],gradFunc:(n,t)=>{const[u]=t;return{x:()=>(0,o.zerosLike)(u)}}}},1929,[1165,1266]);
__d(function(g,r,i,a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.asinGradConfig=void 0;var n=r(d[0]),s=r(d[1]),o=r(d[2]),t=r(d[3]),u=r(d[4]),c=r(d[5]),f=r(d[6]);
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
e.asinGradConfig={kernelName:n.Asin,inputsToSave:['x'],gradFunc:(n,l)=>{const[v]=l;return{x:()=>(0,o.div)(n,(0,u.sqrt)((0,f.sub)((0,t.scalar)(1),(0,c.square)((0,s.cast)(v,'float32')))))}}}},1930,[1165,1196,1202,1278,1279,1280,1307]);
__d(function(g,r,i,_a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.asinhGradConfig=void 0;var a=r(d[0]),n=r(d[1]),s=r(d[2]),t=r(d[3]),o=r(d[4]),u=r(d[5]),c=r(d[6]);
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
e.asinhGradConfig={kernelName:a.Asinh,inputsToSave:['x'],gradFunc:(a,f)=>{const[l]=f;return{x:()=>{const f=(0,u.sqrt)((0,n.add)((0,o.scalar)(1),(0,c.square)((0,s.cast)(l,'float32'))));return(0,t.div)(a,f)}}}}},1931,[1165,1201,1196,1202,1278,1279,1280]);
__d(function(g,r,i,_a,m,e,_d){Object.defineProperty(e,"__esModule",{value:!0}),e.atan2GradConfig=void 0;var a=r(_d[0]),s=r(_d[1]),t=r(_d[2]),n=r(_d[3]),u=r(_d[4]),d=r(_d[5]),o=r(_d[6]),c=r(_d[7]),h=r(_d[8]);
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
e.atan2GradConfig={kernelName:a.Atan2,inputsToSave:['a','b'],gradFunc:(a,p)=>{const[l,v]=p,f=(0,t.assertAndGetBroadcastShape)(l.shape,v.shape);return{a:()=>{const d=(0,s.add)((0,c.square)(l),(0,c.square)(v));let p=(0,u.mul)(a,(0,n.div)(v,d));const q=(0,t.getReductionAxes)(l.shape,f);return q.length>0&&(p=(0,h.sum)(p,q)),(0,o.reshape)(p,l.shape)},b:()=>{const p=(0,s.add)((0,c.square)(l),(0,c.square)(v));let q=(0,d.neg)((0,u.mul)(a,(0,n.div)(l,p)));const A=(0,t.getReductionAxes)(v.shape,f);return A.length>0&&(q=(0,h.sum)(q,A)),(0,o.reshape)(q,v.shape)}}}}},1932,[1165,1201,1264,1202,1204,1304,1221,1280,1281]);
__d(function(g,r,i,a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.atanGradConfig=void 0;var n=r(d[0]),t=r(d[1]),o=r(d[2]),u=r(d[3]),c=r(d[4]);
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
e.atanGradConfig={kernelName:n.Atan,inputsToSave:['x'],gradFunc:(n,f)=>{const[s]=f;return{x:()=>(0,u.div)(n,(0,t.add)((0,c.square)((0,o.cast)(s,'float32')),1))}}}},1933,[1165,1201,1196,1202,1280]);
__d(function(g,r,i,a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.atanhGradConfig=void 0;var n=r(d[0]),t=r(d[1]),o=r(d[2]),u=r(d[3]),s=r(d[4]),c=r(d[5]);
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
e.atanhGradConfig={kernelName:n.Atanh,inputsToSave:['x'],gradFunc:(n,f)=>{const[l]=f;return{x:()=>(0,o.div)(n,(0,s.sub)((0,c.scalar)(1),(0,u.square)((0,t.cast)(l,'float32'))))}}}},1934,[1165,1196,1202,1280,1307,1278]);
__d(function(g,r,i,a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.avgPool3DGradConfig=void 0;var o=r(d[0]),n=r(d[1]);
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
e.avgPool3DGradConfig={kernelName:o.AvgPool3D,inputsToSave:['x'],gradFunc:(o,l,t)=>{const[v]=l,{filterSize:u,strides:f,pad:s,dimRoundingMode:P}=t;return{x:()=>(0,n.avgPool3dGrad)(o,v,u,f,s,P)}}}},1935,[1165,1936]);
__d(function(g,_r,_i,a,m,_e,d){Object.defineProperty(_e,"__esModule",{value:!0}),_e.avgPool3dGrad=void 0;var e=_r(d[0]),r=_r(d[1]),o=_r(d[2]),n=(function(e,r){if("function"==typeof WeakMap)var o=new WeakMap,n=new WeakMap;return(function(e,r){if(!r&&e&&e.__esModule)return e;var t,s,p={__proto__:null,default:e};if(null===e||"object"!=typeof e&&"function"!=typeof e)return p;if(t=r?n:o){if(t.has(e))return t.get(e);t.set(e,p)}for(const r in e)"default"!==r&&{}.hasOwnProperty.call(e,r)&&((s=(t=Object.defineProperty)&&Object.getOwnPropertyDescriptor(e,r))&&(s.get||s.set)?t(p,r,s):p[r]=e[r]);return p})(e,r)}
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
   */)(_r(d[3])),t=_r(d[4]),s=_r(d[5]),p=_r(d[6]);_e.avgPool3dGrad=(0,s.op)({avgPool3dGrad_:function(s,u,i,l,f,c){const h=(0,o.convertToTensor)(s,'dy','avgPool3dGrad'),v=(0,o.convertToTensor)(u,'input','avgPool3dGrad');let P=h,k=v,_=!1;4===v.rank&&(_=!0,P=(0,p.reshape)(h,[1,h.shape[0],h.shape[1],h.shape[2],h.shape[3]]),k=(0,p.reshape)(v,[1,v.shape[0],v.shape[1],v.shape[2],v.shape[3]])),n.assert(5===P.rank,()=>`Error in avgPool3dGrad: dy must be rank 5 but got rank ${P.rank}.`),n.assert(5===k.rank,()=>`Error in avgPool3dGrad: input must be rank 5 but got rank ${k.rank}.`),(0,t.checkPadOnDimRoundingMode)('avgPool3dGrad',f,c);const y={dy:P,input:k},G={filterSize:i,strides:l,pad:f,dimRoundingMode:c},b=e.ENGINE.runKernel(r.AvgPool3DGrad,y,G);return _?(0,p.reshape)(b,[b.shape[1],b.shape[2],b.shape[3],b.shape[4]]):b}})},1936,[1160,1165,1184,1169,1220,1185,1221]);
__d(function(g,r,i,a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.avgPoolGradConfig=void 0;var o=r(d[0]),n=r(d[1]);
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
e.avgPoolGradConfig={kernelName:o.AvgPool,inputsToSave:['x'],gradFunc:(o,l,t)=>{const[v]=l,{filterSize:u,strides:f,pad:s}=t;return{x:()=>(0,n.avgPoolGrad)(o,v,u,f,s)}}}},1937,[1165,1938]);
__d(function(g,_r,_i,a,m,_e,d){Object.defineProperty(_e,"__esModule",{value:!0}),_e.avgPoolGrad=void 0;var e=_r(d[0]),r=_r(d[1]),n=_r(d[2]),o=(function(e,r){if("function"==typeof WeakMap)var n=new WeakMap,o=new WeakMap;return(function(e,r){if(!r&&e&&e.__esModule)return e;var t,s,p={__proto__:null,default:e};if(null===e||"object"!=typeof e&&"function"!=typeof e)return p;if(t=r?o:n){if(t.has(e))return t.get(e);t.set(e,p)}for(const r in e)"default"!==r&&{}.hasOwnProperty.call(e,r)&&((s=(t=Object.defineProperty)&&Object.getOwnPropertyDescriptor(e,r))&&(s.get||s.set)?t(p,r,s):p[r]=e[r]);return p})(e,r)}
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
   */)(_r(d[3])),t=_r(d[4]),s=_r(d[5]);_e.avgPoolGrad=(0,t.op)({avgPoolGrad_:function(t,p,u,i,f){const l=(0,n.convertToTensor)(t,'dy','avgPoolGrad'),c=(0,n.convertToTensor)(p,'input','avgPoolGrad');o.assert(c.rank===l.rank,()=>`Rank of input (${c.rank}) does not match rank of dy (${l.rank})`);let k=c,h=l,v=!1;3===c.rank&&(v=!0,k=(0,s.reshape)(c,[1,c.shape[0],c.shape[1],c.shape[2]]),h=(0,s.reshape)(l,[1,l.shape[0],l.shape[1],l.shape[2]])),o.assert(4===h.rank,()=>`Error in avgPoolGrad: dy must be rank 4 but got rank ${h.rank}.`),o.assert(4===k.rank,()=>`Error in avgPoolGrad: input must be rank 4 but got rank ${k.rank}.`);const P={dy:h,input:k},y={filterSize:u,strides:i,pad:f},_=e.ENGINE.runKernel(r.AvgPoolGrad,P,y);return v?(0,s.reshape)(_,[_.shape[1],_.shape[2],_.shape[3]]):_}})},1938,[1160,1165,1184,1169,1185,1221]);
__d(function(g,r,i,_a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.batchMatMulGradConfig=void 0;var a=r(d[0]),t=r(d[1]);
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
e.batchMatMulGradConfig={kernelName:a.BatchMatMul,inputsToSave:['a','b'],gradFunc:(a,u,M)=>{const[l,n]=u,{transposeA:o,transposeB:b}=M;return o||b?!o&&b?{a:()=>(0,t.matMul)(a,n,!1,!1),b:()=>(0,t.matMul)(a,l,!0,!1)}:o&&!b?{a:()=>(0,t.matMul)(n,a,!1,!0),b:()=>(0,t.matMul)(l,a,!1,!1)}:{a:()=>(0,t.matMul)(n,a,!0,!0),b:()=>(0,t.matMul)(a,l,!0,!0)}:{a:()=>(0,t.matMul)(a,n,!1,!0),b:()=>(0,t.matMul)(l,a,!0,!1)}}}},1939,[1165,1225]);
__d(function(g,r,i,a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.batchToSpaceNDGradConfig=void 0;var c=r(d[0]),o=r(d[1]);
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
e.batchToSpaceNDGradConfig={kernelName:c.BatchToSpaceND,gradFunc:(c,n,t)=>{const{blockShape:p,crops:h}=t;return{x:()=>(0,o.spaceToBatchND)(c,p,h)}}}},1940,[1165,1339]);
__d(function(g,r,_i,a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.broadcastToGradConfig=void 0;var o=r(d[0]),t=r(d[1]);
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
e.broadcastToGradConfig={kernelName:o.BroadcastTo,gradFunc:(o,n,s)=>{const c=s,f=c.inputShape,i=c.shape,l=Array.from(i);for(let o=f.length-1;o>=0;o--)if(f[o]===i[o])l[o]=1;else if(1!==f[o])throw new Error(`broadcastTo(): [${f}] cannot be broadcast to [${i}].`);const u=[];for(let o=0;o<l.length;o++)l[o]>1&&u.push(o);return{x:()=>(0,t.sum)(o,u,!0)}}}},1941,[1165,1281]);
__d(function(g,r,i,a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.castGradConfig=void 0;var n=r(d[0]);
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
   */e.castGradConfig={kernelName:n.Cast,gradFunc:n=>({x:()=>n.clone()})}},1942,[1165]);
__d(function(g,r,i,a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.ceilGradConfig=void 0;var n=r(d[0]),o=r(d[1]);
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
e.ceilGradConfig={kernelName:n.Ceil,gradFunc:n=>({x:()=>(0,o.zerosLike)(n)})}},1943,[1165,1266]);
__d(function(g,r,i,a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.clipByValueGradConfig=void 0;var l=r(d[0]),u=r(d[1]),n=r(d[2]),o=r(d[3]),c=r(d[4]),p=r(d[5]);
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
e.clipByValueGradConfig={kernelName:l.ClipByValue,inputsToSave:['x'],gradFunc:(l,t,s)=>{const[V]=t,{clipValueMin:f,clipValueMax:v}=s;return{x:()=>(0,c.where)((0,o.logicalAnd)((0,u.greaterEqual)(V,f),(0,n.lessEqual)(V,v)),l,(0,p.zerosLike)(l))}}}},1944,[1165,1290,1297,1309,1265,1266]);
__d(function(g,r,i,a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.complexAbsGradConfig=void 0;var o=r(d[0]),n=r(d[1]);
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
e.complexAbsGradConfig={kernelName:o.ComplexAbs,inputsToSave:['x'],gradFunc:n.absGradConfig.gradFunc}},1945,[1165,1923]);
__d(function(g,r,i,a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.concatGradConfig=void 0;var n=r(d[0]),o=r(d[1]),s=r(d[2]);
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
e.concatGradConfig={kernelName:n.Concat,saveAllInputs:!0,gradFunc:(n,t,c)=>{const p=t.map(n=>n.shape),{axis:l}=c,u=(0,s.parseAxisParam)(l,t[0].shape)[0],f=p.map(n=>n[u]);return(0,o.split)(n,f,u).map(n=>()=>n)}}},1946,[1165,1388,1169]);
__d(function(g,_r,_i,a,m,_e,d){Object.defineProperty(_e,"__esModule",{value:!0}),_e.conv2DGradConfig=void 0;var e=_r(d[0]),t=_r(d[1]),r=_r(d[2]),n=i(_r(d[3])),o=i(_r(d[4]));function i(e,t){if("function"==typeof WeakMap)var r=new WeakMap,n=new WeakMap;return(i=function(e,t){if(!t&&e&&e.__esModule)return e;var o,i,p={__proto__:null,default:e};if(null===e||"object"!=typeof e&&"function"!=typeof e)return p;if(o=t?n:r){if(o.has(e))return o.get(e);o.set(e,p)}for(const t in e)"default"!==t&&{}.hasOwnProperty.call(e,t)&&((i=(o=Object.defineProperty)&&Object.getOwnPropertyDescriptor(e,t))&&(i.get||i.set)?o(p,t,i):p[t]=e[t]);return p})(e,t)}
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
   */_e.conv2DGradConfig={kernelName:e.Conv2D,inputsToSave:['x','filter'],gradFunc:(e,i,p)=>{const[u,f]=i,{dilations:s,strides:c,pad:l,dataFormat:v}=p;return o.assert(n.tupleValuesAreOne(s),()=>`Error in gradient of conv2D: dilation rates greater than 1 are not yet supported in gradients. Got dilations '${s}'`),{x:()=>(0,r.conv2DBackpropInput)(u.shape,e,f,c,l,v),filter:()=>(0,t.conv2DBackpropFilter)(u,e,f.shape,c,l,v)}}}},1947,[1165,1425,1249,1220,1169]);
__d(function(g,r,i,a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.conv2DBackpropInputGradConfig=void 0;var n=r(d[0]),o=r(d[1]),p=r(d[2]);
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
e.conv2DBackpropInputGradConfig={kernelName:n.Conv2DBackpropInput,inputsToSave:['dy','filter'],gradFunc:(n,t,c)=>{const[u,v]=t,{strides:f,pad:l,dataFormat:s,dimRoundingMode:k}=c;return{dy:()=>(0,o.conv2d)(n,v,f,l,s,1,k),filter:()=>(0,p.conv2DBackpropFilter)(n,u,v.shape,f,l,s,k)}}}},1948,[1165,1247,1425]);
__d(function(g,_r,_i,a,m,_e,d){Object.defineProperty(_e,"__esModule",{value:!0}),_e.conv3DGradConfig=void 0;var e=_r(d[0]),t=_r(d[1]),n=_r(d[2]),r=_r(d[3]),o=(function(e,t){if("function"==typeof WeakMap)var n=new WeakMap,r=new WeakMap;return(function(e,t){if(!t&&e&&e.__esModule)return e;var o,i,p={__proto__:null,default:e};if(null===e||"object"!=typeof e&&"function"!=typeof e)return p;if(o=t?r:n){if(o.has(e))return o.get(e);o.set(e,p)}for(const t in e)"default"!==t&&{}.hasOwnProperty.call(e,t)&&((i=(o=Object.defineProperty)&&Object.getOwnPropertyDescriptor(e,t))&&(i.get||i.set)?o(p,t,i):p[t]=e[t]);return p})(e,t)}
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
   */)(_r(d[4]));_e.conv3DGradConfig={kernelName:e.Conv3D,inputsToSave:['x','filter'],gradFunc:(e,i,p)=>{const{dilations:u,strides:f,pad:s}=p;o.assert((0,r.tupleValuesAreOne)(u),()=>`Error in gradient of conv3D: dilation rates greater than 1 are not yet supported in gradients. Got dilations '${u}'`);const[c,l]=i;return{x:()=>(0,n.conv3DBackpropInput)(c.shape,e,l,f,s),filter:()=>(0,t.conv3DBackpropFilter)(c,e,l.shape,f,s)}}}},1949,[1165,1950,1252,1220,1169]);
__d(function(g,_r,_i,a,m,_e,d){Object.defineProperty(_e,"__esModule",{value:!0}),_e.conv3DBackpropFilter=void 0;var e=_r(d[0]),r=_r(d[1]),t=(function(e,r){if("function"==typeof WeakMap)var t=new WeakMap,n=new WeakMap;return(function(e,r){if(!r&&e&&e.__esModule)return e;var p,o,s={__proto__:null,default:e};if(null===e||"object"!=typeof e&&"function"!=typeof e)return s;if(p=r?n:t){if(p.has(e))return p.get(e);p.set(e,s)}for(const r in e)"default"!==r&&{}.hasOwnProperty.call(e,r)&&((o=(p=Object.defineProperty)&&Object.getOwnPropertyDescriptor(e,r))&&(o.get||o.set)?p(s,r,o):s[r]=e[r]);return s})(e,r)}
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
   */)(_r(d[2])),n=_r(d[3]),p=_r(d[4]);_e.conv3DBackpropFilter=(0,n.op)({conv3DBackpropFilter_:function(n,o,s,i,u){let h=n;4===n.rank&&(h=(0,p.reshape)(n,[1,n.shape[0],n.shape[1],n.shape[2],n.shape[3]]));let l=o;4===l.rank&&(l=(0,p.reshape)(o,[1,o.shape[0],o.shape[1],o.shape[2],o.shape[3]])),t.assert(5===h.rank,()=>`Error in conv3dDerFilter: input must be rank 5, but got shape ${h.shape}.`),t.assert(5===l.rank,()=>`Error in conv3dDerFilter: dy must be rank 5, but got shape ${l.shape}.`),t.assert(5===s.length,()=>`Error in conv3dDerFilter: filterShape must be length 5, but got ${s}.`),t.assert(h.shape[4]===s[3],()=>`Error in conv3dDerFilter: depth of input ${h.shape[4]}) must match input depth in filter (${s[3]}.`),t.assert(l.shape[4]===s[4],()=>`Error in conv3dDerFilter: depth of dy (${l.shape[4]}) must match output depth for filter (${s[4]}).`);const c={x:h,dy:l},f={strides:i,pad:u,filterShape:s};return e.ENGINE.runKernel(r.Conv3DBackpropFilterV2,c,f)}})},1950,[1160,1165,1169,1185,1221]);
__d(function(g,r,i,a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.cosGradConfig=void 0;var n=r(d[0]),o=r(d[1]),s=r(d[2]),t=r(d[3]),c=r(d[4]);
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
e.cosGradConfig={kernelName:n.Cos,inputsToSave:['x'],gradFunc:(n,u)=>{const[f]=u;return{x:()=>(0,s.mul)((0,t.neg)((0,c.sin)((0,o.cast)(f,'float32'))),n)}}}},1951,[1165,1196,1204,1304,1377]);
__d(function(g,r,i,a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.coshGradConfig=void 0;var o=r(d[0]),n=r(d[1]),s=r(d[2]),t=r(d[3]);
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
e.coshGradConfig={kernelName:o.Cosh,inputsToSave:['x'],gradFunc:(o,c)=>{const[u]=c;return{x:()=>(0,s.mul)((0,t.sinh)((0,n.cast)(u,'float32')),o)}}}},1952,[1165,1196,1204,1378]);
__d(function(g,r,i,a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.cumsumGradConfig=void 0;var u=r(d[0]),n=r(d[1]),s=r(d[2]),t=r(d[3]);
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
e.cumsumGradConfig={kernelName:u.Cumsum,inputsToSave:['x'],gradFunc:(u,o,c)=>{const[l]=o,{axis:v,exclusive:x,reverse:f}=c;return{x:()=>{const o=(0,n.getAxesPermutation)([v],l.rank);let c=(0,s.cumsum)(u,v,x,!f);return null!=o&&(c=(0,t.transpose)(c,o)),c}}}}},1953,[1165,1274,1256,1413]);
__d(function(g,_r,_i,a,m,_e,d){Object.defineProperty(_e,"__esModule",{value:!0}),_e.depthwiseConv2dNativeGradConfig=void 0;var e=_r(d[0]),t=o(_r(d[1])),n=_r(d[2]),r=_r(d[3]),i=o(_r(d[4]));function o(e,t){if("function"==typeof WeakMap)var n=new WeakMap,r=new WeakMap;return(o=function(e,t){if(!t&&e&&e.__esModule)return e;var i,o,s={__proto__:null,default:e};if(null===e||"object"!=typeof e&&"function"!=typeof e)return s;if(i=t?r:n){if(i.has(e))return i.get(e);i.set(e,s)}for(const t in e)"default"!==t&&{}.hasOwnProperty.call(e,t)&&((o=(i=Object.defineProperty)&&Object.getOwnPropertyDescriptor(e,t))&&(o.get||o.set)?i(s,t,o):s[t]=e[t]);return s})(e,t)}
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
   */_e.depthwiseConv2dNativeGradConfig={kernelName:e.DepthwiseConv2dNative,inputsToSave:['x','filter'],gradFunc:(e,o,s)=>{const{dilations:p,strides:u,pad:f,dimRoundingMode:l}=s,h=null==p?[1,1]:p;i.assert(t.tupleValuesAreOne(h),()=>`Error in gradient of depthwiseConv2dNative: dilation rates greater than 1 are not yet supported. Got dilations '${h}'`);const[v,c]=o;return i.assert(4===v.rank,()=>`Error in gradient of depthwiseConv2dNative: input must be rank 4, but got rank ${v.rank}.`),i.assert(4===c.rank,()=>`Error in gradient of depthwiseConv2dNative: filter must be rank 4, but got rank ${c.rank}.`),i.assert(v.shape[3]===c.shape[2],()=>`Error in gradient of depthwiseConv2d: number of input channels (${v.shape[3]}) must match the inChannels dimension in filter ${c.shape[2]}.`),i.assert(t.eitherStridesOrDilationsAreOne(u,h),()=>`Error in gradient of depthwiseConv2d: Either strides or dilations must be  1. Got strides ${u} and dilations '${h}'.`),t.checkPadOnDimRoundingMode('depthwiseConv2d',f,l),{x:()=>(0,r.depthwiseConv2dNativeBackpropInput)(v.shape,e,c,u,f,h,l),filter:()=>(0,n.depthwiseConv2dNativeBackpropFilter)(v,e,c.shape,u,f,h,l)}}}},1954,[1165,1220,1428,1429,1169]);
__d(function(g,r,i,a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.dilation2dGradConfig=void 0;var n=r(d[0]),t=r(d[1]);
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
e.dilation2dGradConfig={kernelName:t.Dilation2D,inputsToSave:['x','filter'],gradFunc:(l,o,u)=>{const[f,p]=o,c={x:f,filter:p,dy:l},D={x:f,filter:p,dy:l};return{x:()=>n.ENGINE.runKernel(t.Dilation2DBackpropInput,c,u),filter:()=>n.ENGINE.runKernel(t.Dilation2DBackpropFilter,D,u)}}}},1955,[1160,1165]);
__d(function(g,r,i,a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.eluGradConfig=void 0;var u=r(d[0]),n=r(d[1]);
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
e.eluGradConfig={kernelName:n.Elu,outputsToSave:[!0],gradFunc:(o,l)=>{const[t]=l,c={dy:o,y:t};return{x:()=>u.ENGINE.runKernel(n.EluGrad,c)}}}},1956,[1160,1165]);
__d(function(g,r,i,_a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.erfGradConfig=void 0;var n=r(d[0]),a=r(d[1]),t=r(d[2]),u=r(d[3]),o=r(d[4]);
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
e.erfGradConfig={kernelName:n.Erf,inputsToSave:['x'],gradFunc:(n,f)=>{const[l]=f,s=(0,t.mul)((0,a.exp)((0,u.neg)((0,o.square)(l))),2/Math.sqrt(Math.PI));return{x:()=>(0,t.mul)(n,s)}}}},1957,[1165,1282,1204,1304,1280]);
__d(function(g,r,i,a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.expGradConfig=void 0;var n=r(d[0]),o=r(d[1]);
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
e.expGradConfig={kernelName:n.Exp,outputsToSave:[!0],gradFunc:(n,u)=>{const[t]=u;return{x:()=>(0,o.mul)(n,t)}}}},1958,[1165,1204]);
__d(function(g,r,i,a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.expandDimsGradConfig=void 0;var n=r(d[0]),p=r(d[1]);
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
e.expandDimsGradConfig={kernelName:n.ExpandDims,inputsToSave:['input'],gradFunc:(n,o)=>{const[s]=o;return{input:()=>(0,p.reshape)(n,s.shape)}}}},1959,[1165,1221]);
__d(function(g,r,i,a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.expm1GradConfig=void 0;var n=r(d[0]),o=r(d[1]),u=r(d[2]);
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
e.expm1GradConfig={kernelName:n.Expm1,inputsToSave:['x'],gradFunc:(n,p)=>{const[t]=p;return{x:()=>(0,u.mul)(n,(0,o.exp)(t))}}}},1960,[1165,1282,1204]);
__d(function(g,r,i,a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.floorGradConfig=void 0;var o=r(d[0]),n=r(d[1]);
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
e.floorGradConfig={kernelName:o.Floor,gradFunc:o=>({x:()=>(0,n.zerosLike)(o)})}},1961,[1165,1266]);
__d(function(g,r,i,_a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.floorDivGradConfig=void 0;var a=r(d[0]),t=r(d[1]),s=r(d[2]),o=r(d[3]),n=r(d[4]),u=r(d[5]),c=r(d[6]),l=r(d[7]),h=r(d[8]);
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
e.floorDivGradConfig={kernelName:a.FloorDiv,inputsToSave:['a','b'],gradFunc:(a,p)=>{const[f,v]=p,_=(0,t.assertAndGetBroadcastShape)(f.shape,v.shape);return{a:()=>{const n=(0,o.div)(a,(0,s.cast)(v,'float32')),u=(0,t.getReductionAxes)(f.shape,_);return u.length>0?(0,c.reshape)((0,h.sum)(n,u),f.shape):n},b:()=>{let p=(0,n.mul)(a,(0,s.cast)(f,'float32'));const b=(0,t.getReductionAxes)(v.shape,_);b.length>0&&(p=(0,c.reshape)((0,h.sum)(p,b),v.shape));const A=(0,l.square)(v);return(0,u.neg)((0,o.div)(p,(0,s.cast)(A,'float32')))}}}}},1962,[1165,1264,1196,1202,1204,1304,1221,1280,1281]);
__d(function(g,r,_i,a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.fusedBatchNormGradConfig=void 0;var s=r(d[0]),u=r(d[1]),l=r(d[2]),n=r(d[3]),t=r(d[4]),h=r(d[5]),p=r(d[6]),c=r(d[7]),o=r(d[8]),i=r(d[9]);
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
e.fusedBatchNormGradConfig={kernelName:s.FusedBatchNorm,inputsToSave:['x','mean','variance','scale'],gradFunc:(s,f,k)=>{const{varianceEpsilon:v}=k,[N,_,x,B]=f,b=null==B?(0,p.scalar)(1):B,C=(0,l.getReductionAxes)(_.shape,N.shape),F=[];if(1===_.rank){for(let s=0;s<N.shape.length-1;++s)F.push(N.shape[s]);F.push(1)}const G=(0,c.sub)(N,_),j=(0,n.mul)(s,b),q=(0,h.rsqrt)((0,u.add)(x,(0,p.scalar)(v))),y=(0,n.mul)((0,n.mul)((0,n.mul)(q,q),q),(0,p.scalar)(-.5));return{x:()=>1===_.rank?(0,t.reshape)((0,n.mul)((0,n.mul)(s,(0,i.tile)((0,t.reshape)(q,[1,1,1,_.shape[0]]),F)),b),N.shape):(0,t.reshape)((0,n.mul)((0,n.mul)(s,q),b),N.shape),mean:()=>{let s=(0,n.mul)((0,n.mul)(q,(0,p.scalar)(-1)),j);return 1===_.rank&&(s=(0,o.sum)(s,C)),(0,t.reshape)(s,_.shape)},variance:()=>{let s=(0,n.mul)((0,n.mul)(y,G),j);return 1===_.rank&&(s=(0,o.sum)(s,C)),(0,t.reshape)(s,_.shape)},scale:()=>{const u=(0,n.mul)(G,q);let l=(0,n.mul)(s,u);return 1===_.rank&&(l=(0,o.sum)(l,C)),(0,t.reshape)(l,_.shape)},offset:()=>{let u=s;return 1===_.rank&&(u=(0,o.sum)(u,C)),(0,t.reshape)(u,_.shape)}}}}},1963,[1165,1201,1264,1204,1221,1372,1278,1307,1281,1286]);
__d(function(g,r,_i,a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.gatherGradConfig=void 0;var t=r(d[0]),s=r(d[1]),n=r(d[2]),i=r(d[3]),o=r(d[4]),c=r(d[5]),h=r(d[6]);
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
e.gatherGradConfig={kernelName:t.GatherV2,inputsToSave:['x','indices'],gradFunc:(t,p,f)=>{const[x,v]=p,{axis:_,batchDims:G}=f,P=(0,h.parseAxisParam)(_,x.shape)[0],S=(t,i,h)=>()=>{const p=t.shape,f=i.size,x=p.slice(0,P),v=x.length,G=p.slice(_,p.length).slice(1),S=G.length,b=l(0,v),k=l(v+1,v+1+S),A=u([x,[f],G]),C=(0,n.reshape)(h,A),j=(0,n.reshape)(i,[f]),y=u([[v],b,k]),z=(0,o.transpose)(C,y);let D=(0,c.unsortedSegmentSum)(z,j,t.shape[P]);const F=(0,s.getUndoAxesPermutation)(y);return D=(0,o.transpose)(D,F),D};if(1===G){const s=x.shape[0],n=x.split(s,0);return{x:()=>{const s=(0,i.stack)(n.map((s,n)=>S(s,v.slice(n,1),t.slice(n,1))()));return s.reshape(x.shape)},indices:()=>v}}return{x:S(x,v,t),indices:()=>v}}};function l(t,s){const n=[];for(let i=t;i<s;++i)n.push(i);return n}function u(t){const s=[];for(let n=0;n<t.length;++n)for(let i=0;i<t[n].length;++i)s.push(t[n][i]);return s}},1964,[1165,1274,1221,1391,1413,1406,1169]);
__d(function(g,r,i,_a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.greaterEqualGradConfig=void 0;var a=r(d[0]),n=r(d[1]);
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
e.greaterEqualGradConfig={kernelName:a.GreaterEqual,inputsToSave:['a','b'],gradFunc:(a,o)=>{const[t,u]=o;return{a:()=>(0,n.zerosLike)(t),b:()=>(0,n.zerosLike)(u)}}}},1965,[1165,1266]);
__d(function(g,r,i,a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.identityGradConfig=void 0;var t=r(d[0]),n=r(d[1]);
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
e.identityGradConfig={kernelName:t.Identity,gradFunc:t=>({x:()=>(0,n.cast)(t,'float32')})}},1966,[1165,1196]);
__d(function(g,r,i,a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.isFiniteGradConfig=void 0;var n=r(d[0]),o=r(d[1]);
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
e.isFiniteGradConfig={kernelName:n.IsFinite,gradFunc:n=>({x:()=>(0,o.zerosLike)(n)})}},1967,[1165,1266]);
__d(function(g,r,i,a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.isInfGradConfig=void 0;var n=r(d[0]),f=r(d[1]);
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
e.isInfGradConfig={kernelName:n.IsInf,gradFunc:n=>({x:()=>(0,f.zerosLike)(n)})}},1968,[1165,1266]);
__d(function(g,r,i,a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.isNanGradConfig=void 0;var n=r(d[0]),o=r(d[1]);
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
e.isNanGradConfig={kernelName:n.IsNan,gradFunc:n=>({x:()=>(0,o.zerosLike)(n)})}},1969,[1165,1266]);
__d(function(g,r,i,a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.leakyReluGradConfig=void 0;var l=r(d[0]),n=r(d[1]),u=r(d[2]),o=r(d[3]);
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
e.leakyReluGradConfig={kernelName:l.LeakyRelu,inputsToSave:['x'],gradFunc:(l,t,c)=>{const[f]=t,{alpha:k}=c,v=(0,n.greater)(f,0);return{x:()=>(0,o.where)(v,l,(0,u.mul)(l,k))}}}},1970,[1165,1289,1204,1265]);
__d(function(g,r,i,a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.log1pGradConfig=void 0;var o=r(d[0]),n=r(d[1]),t=r(d[2]);
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
e.log1pGradConfig={kernelName:o.Log1p,inputsToSave:['x'],gradFunc:(o,u)=>{const[l]=u;return{x:()=>(0,t.div)(o,(0,n.add)(l,1))}}}},1971,[1165,1201,1202]);
__d(function(g,r,i,a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.logGradConfig=void 0;var o=r(d[0]),n=r(d[1]),t=r(d[2]);
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
e.logGradConfig={kernelName:o.Log,inputsToSave:['x'],gradFunc:(o,l)=>{const[u]=l;return{x:()=>(0,t.div)(o,(0,n.cast)(u,'float32'))}}}},1972,[1165,1196,1202]);
__d(function(g,r,i,a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.logSoftmaxGradConfig=void 0;var o=r(d[0]),t=r(d[1]),n=r(d[2]),u=r(d[3]),s=r(d[4]);
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
e.logSoftmaxGradConfig={kernelName:o.LogSoftmax,inputsToSave:[],outputsToSave:[!0],gradFunc:(o,f,l)=>{const[c]=f,{axis:v}=l;return{logits:()=>{const f=(0,t.exp)(c);return(0,u.sub)(o,(0,n.mul)((0,s.sum)(o,v,!0),f))}}}}},1973,[1165,1282,1204,1307,1281]);
__d(function(g,r,i,a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.lrnGradConfig=void 0;var o=r(d[0]),n=r(d[1]);
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
e.lrnGradConfig={kernelName:o.LRN,inputsToSave:['x'],outputsToSave:[!0],gradFunc:(o,t,l)=>{const[u,p]=t,{depthRadius:s,bias:c,alpha:v,beta:f}=l;return{x:()=>(0,n.localResponseNormalizationBackprop)(u,p,o,s,c,v,f)}}}},1974,[1165,1975]);
__d(function(g,r,i,a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.localResponseNormalizationBackprop=void 0;var o=r(d[0]),n=r(d[1]),l=r(d[2]);e.localResponseNormalizationBackprop=(0,l.op)({localResponseNormalizationBackprop_:
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
function(l,p,t,c=5,s=1,u=1,N=.5){const R={x:l,y:p,dy:t},_={depthRadius:c,bias:s,alpha:u,beta:N};return o.ENGINE.runKernel(n.LRNGrad,R,_)}})},1975,[1160,1165,1185]);
__d(function(g,_r,_i,a,m,_e,d){Object.defineProperty(_e,"__esModule",{value:!0}),_e.maxGradConfig=void 0;var e=_r(d[0]),t=(function(e,t){if("function"==typeof WeakMap)var n=new WeakMap,r=new WeakMap;return(function(e,t){if(!t&&e&&e.__esModule)return e;var o,u,i={__proto__:null,default:e};if(null===e||"object"!=typeof e&&"function"!=typeof e)return i;if(o=t?r:n){if(o.has(e))return o.get(e);o.set(e,i)}for(const t in e)"default"!==t&&{}.hasOwnProperty.call(e,t)&&((u=(o=Object.defineProperty)&&Object.getOwnPropertyDescriptor(e,t))&&(u.get||u.set)?o(i,t,u):i[t]=e[t]);return i})(e,t)}
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
   */)(_r(d[1])),n=_r(d[2]);_e.maxGradConfig={kernelName:e.Max,inputsToSave:['x'],outputsToSave:[!0],gradFunc:(e,r,o)=>{const u=o,{reductionIndices:i}=u,f=r[0],c=r[1],p=t.parseAxisParam(i,f.shape),s=(0,n.gradForMinAndMax)(e,c,f,p);return{x:()=>s.x()}}}},1976,[1165,1169,1977]);
__d(function(g,_r,_i,a,m,_e,d){Object.defineProperty(_e,"__esModule",{value:!0}),_e.gradForMinAndMax=
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
function(p,u,f,i){u.rank<f.rank&&(u=(0,o.reshape)(u,e.expandShapeToKeepDim(u.shape,i)));p.rank<f.rank&&(p=(0,o.reshape)(p,e.expandShapeToKeepDim(p.shape,i)));return{x:()=>(0,t.mul)(p,(0,n.cast)((0,r.equal)(f,u),p.dtype))}};var e=(function(e,n){if("function"==typeof WeakMap)var r=new WeakMap,t=new WeakMap;return(function(e,n){if(!n&&e&&e.__esModule)return e;var o,p,u={__proto__:null,default:e};if(null===e||"object"!=typeof e&&"function"!=typeof e)return u;if(o=n?t:r){if(o.has(e))return o.get(e);o.set(e,u)}for(const n in e)"default"!==n&&{}.hasOwnProperty.call(e,n)&&((p=(o=Object.defineProperty)&&Object.getOwnPropertyDescriptor(e,n))&&(p.get||p.set)?o(u,n,p):u[n]=e[n]);return u})(e,n)})(_r(d[0])),n=_r(d[1]),r=_r(d[2]),t=_r(d[3]),o=_r(d[4])},1977,[1274,1196,1263,1204,1221]);
__d(function(g,r,i,_a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.maximumGradConfig=void 0;var a=r(d[0]),u=r(d[1]),t=r(d[2]),n=r(d[3]),o=r(d[4]);
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
e.maximumGradConfig={kernelName:a.Maximum,inputsToSave:['a','b'],gradFunc:(a,l)=>{const[s,c]=l;return{a:()=>(0,o.mul)(a,(0,u.cast)((0,t.greaterEqual)(s,c),'float32')),b:()=>(0,o.mul)(a,(0,u.cast)((0,n.less)(s,c),'float32'))}}}},1978,[1165,1196,1290,1296,1204]);
__d(function(g,r,i,a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.maxPool3DGradConfig=void 0;var o=r(d[0]),n=r(d[1]);
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
e.maxPool3DGradConfig={kernelName:o.MaxPool3D,inputsToSave:['x'],outputsToSave:[!0],gradFunc:(o,t,u)=>{const[l,s]=t,{filterSize:x,strides:f,pad:v,dimRoundingMode:P}=u;return{x:()=>(0,n.maxPool3dGrad)(o,l,s,x,f,v,P)}}}},1979,[1165,1980]);
__d(function(g,_r,_i,a,m,_e,d){Object.defineProperty(_e,"__esModule",{value:!0}),_e.maxPool3dGrad=void 0;var e=_r(d[0]),r=_r(d[1]),o=_r(d[2]),n=(function(e,r){if("function"==typeof WeakMap)var o=new WeakMap,n=new WeakMap;return(function(e,r){if(!r&&e&&e.__esModule)return e;var t,s,p={__proto__:null,default:e};if(null===e||"object"!=typeof e&&"function"!=typeof e)return p;if(t=r?n:o){if(t.has(e))return t.get(e);t.set(e,p)}for(const r in e)"default"!==r&&{}.hasOwnProperty.call(e,r)&&((s=(t=Object.defineProperty)&&Object.getOwnPropertyDescriptor(e,r))&&(s.get||s.set)?t(p,r,s):p[r]=e[r]);return p})(e,r)}
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
   */)(_r(d[3])),t=_r(d[4]),s=_r(d[5]),p=_r(d[6]);_e.maxPool3dGrad=(0,s.op)({maxPool3dGrad_:function(s,u,i,l,h,c,f){const k=(0,o.convertToTensor)(s,'dy','maxPool3dGrad'),P=(0,o.convertToTensor)(u,'input','maxPool3dGrad'),G=(0,o.convertToTensor)(i,'output','maxPool3dGrad');let x=k,_=P,b=G,y=!1;4===P.rank&&(y=!0,x=(0,p.reshape)(k,[1,k.shape[0],k.shape[1],k.shape[2],k.shape[3]]),_=(0,p.reshape)(P,[1,P.shape[0],P.shape[1],P.shape[2],P.shape[3]]),b=(0,p.reshape)(G,[1,G.shape[0],G.shape[1],G.shape[2],G.shape[3]])),n.assert(5===x.rank,()=>`Error in maxPool3dGrad: dy must be rank 5 but got rank ${x.rank}.`),n.assert(5===_.rank,()=>`Error in maxPool3dGrad: input must be rank 5 but got rank ${_.rank}.`),n.assert(5===b.rank,()=>`Error in maxPool3dGrad: output must be rank 5 but got rank ${b.rank}.`),(0,t.checkPadOnDimRoundingMode)('maxPool3dGrad',c,f);const v={dy:x,input:_,output:b},M={filterSize:l,strides:h,pad:c,dimRoundingMode:f},O=e.ENGINE.runKernel(r.MaxPool3DGrad,v,M);return y?(0,p.reshape)(O,[O.shape[1],O.shape[2],O.shape[3],O.shape[4]]):O}})},1980,[1160,1165,1184,1169,1220,1185,1221]);
__d(function(g,r,i,a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.maxPoolGradConfig=void 0;var o=r(d[0]),n=r(d[1]);
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
e.maxPoolGradConfig={kernelName:o.MaxPool,inputsToSave:['x'],outputsToSave:[!0],gradFunc:(o,t,l)=>{const[u,s]=t,{filterSize:x,strides:f,pad:v}=l;return{x:()=>(0,n.maxPoolGrad)(o,u,s,x,f,v)}}}},1981,[1165,1982]);
__d(function(g,_r,_i,a,m,_e,d){Object.defineProperty(_e,"__esModule",{value:!0}),_e.maxPoolGrad=void 0;var r=_r(d[0]),o=_r(d[1]),n=_r(d[2]),e=i(_r(d[3])),t=i(_r(d[4])),u=_r(d[5]);function i(r,o){if("function"==typeof WeakMap)var n=new WeakMap,e=new WeakMap;return(i=function(r,o){if(!o&&r&&r.__esModule)return r;var t,u,i={__proto__:null,default:r};if(null===r||"object"!=typeof r&&"function"!=typeof r)return i;if(t=o?e:n){if(t.has(r))return t.get(r);t.set(r,i)}for(const o in r)"default"!==o&&{}.hasOwnProperty.call(r,o)&&((u=(t=Object.defineProperty)&&Object.getOwnPropertyDescriptor(r,o))&&(u.get||u.set)?t(i,o,u):i[o]=r[o]);return i})(r,o)}
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
   */_e.maxPoolGrad=(0,u.op)({maxPoolGrad_:function(u,i,s,l,f,c,p){const k=(0,n.convertToTensor)(u,'dy','maxPoolGrad'),P=(0,n.convertToTensor)(i,'input','maxPoolGrad'),y=(0,n.convertToTensor)(s,'output','maxPoolGrad');e.assert(P.rank===k.rank,()=>`Rank of input (${P.rank}) does not match rank of dy (${k.rank})`),e.assert(4===k.rank,()=>`Error in maxPoolGrad: dy must be rank 4 but got rank ${k.rank}.`),e.assert(4===P.rank,()=>`Error in maxPoolGrad: input must be rank 4 but got rank ${P.rank}.`),t.checkPadOnDimRoundingMode('maxPoolGrad',c,p);const G={dy:k,input:P,output:y},_={filterSize:l,strides:f,pad:c,dimRoundingMode:p};return r.ENGINE.runKernel(o.MaxPoolGrad,G,_)}})},1982,[1160,1165,1184,1169,1220,1185]);
__d(function(g,_r,_i,a,m,_e,d){Object.defineProperty(_e,"__esModule",{value:!0}),_e.meanGradConfig=void 0;var e=_r(d[0]),n=_r(d[1]),t=_r(d[2]),r=_r(d[3]),o=_r(d[4]),u=_r(d[5]),s=(function(e,n){if("function"==typeof WeakMap)var t=new WeakMap,r=new WeakMap;return(function(e,n){if(!n&&e&&e.__esModule)return e;var o,u,s={__proto__:null,default:e};if(null===e||"object"!=typeof e&&"function"!=typeof e)return s;if(o=n?r:t){if(o.has(e))return o.get(e);o.set(e,s)}for(const n in e)"default"!==n&&{}.hasOwnProperty.call(e,n)&&((u=(o=Object.defineProperty)&&Object.getOwnPropertyDescriptor(e,n))&&(u.get||u.set)?o(s,n,u):s[n]=e[n]);return s})(e,n)}
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
   */)(_r(d[6]));_e.meanGradConfig={kernelName:e.Mean,inputsToSave:['x'],gradFunc:(e,i,f)=>{const[p]=i,{axis:c}=f,l=s.parseAxisParam(c,p.shape),h=(0,n.computeOutAndReduceShapes)(p.shape,l)[1],_=s.sizeFromShape(h);return{x:()=>{const n=p.shape.slice();l.forEach(e=>{n[e]=1});const s=(0,u.reshape)(e,n);return(0,t.div)((0,r.mul)(s,(0,o.ones)(p.shape,'float32')),_)}}}}},1983,[1165,1274,1202,1204,1321,1221,1169]);
__d(function(g,_r,_i,a,m,_e,d){Object.defineProperty(_e,"__esModule",{value:!0}),_e.minGradConfig=void 0;var e=_r(d[0]),n=(function(e,n){if("function"==typeof WeakMap)var t=new WeakMap,r=new WeakMap;return(function(e,n){if(!n&&e&&e.__esModule)return e;var o,i,u={__proto__:null,default:e};if(null===e||"object"!=typeof e&&"function"!=typeof e)return u;if(o=n?r:t){if(o.has(e))return o.get(e);o.set(e,u)}for(const n in e)"default"!==n&&{}.hasOwnProperty.call(e,n)&&((i=(o=Object.defineProperty)&&Object.getOwnPropertyDescriptor(e,n))&&(i.get||i.set)?o(u,n,i):u[n]=e[n]);return u})(e,n)}
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
   */)(_r(d[1])),t=_r(d[2]);_e.minGradConfig={kernelName:e.Min,inputsToSave:['x'],outputsToSave:[!0],gradFunc:(e,r,o)=>{const i=o,{axis:u}=i,[f,p]=r,s=n.parseAxisParam(u,f.shape),c=(0,t.gradForMinAndMax)(e,p,f,s);return{x:()=>c.x()}}}},1984,[1165,1169,1977]);
__d(function(g,r,i,_a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.minimumGradConfig=void 0;var a=r(d[0]),n=r(d[1]),u=r(d[2]),t=r(d[3]),o=r(d[4]);
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
e.minimumGradConfig={kernelName:a.Minimum,inputsToSave:['a','b'],gradFunc:(a,l)=>{const[s,c]=l;return{a:()=>(0,o.mul)(a,(0,n.cast)((0,t.lessEqual)(s,c),'float32')),b:()=>(0,o.mul)(a,(0,n.cast)((0,u.greater)(s,c),'float32'))}}}},1985,[1165,1196,1289,1297,1204]);
__d(function(g,r,i,a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.mirrorPadGradConfig=void 0;var n=r(d[0]),o=r(d[1]);
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
e.mirrorPadGradConfig={kernelName:n.MirrorPad,inputsToSave:['x'],gradFunc:(n,s,t)=>{const u=s[0],{paddings:c}=t,p=c.map(n=>n[0]);return{x:()=>(0,o.slice)(n,p,u.shape)}}}},1986,[1165,1227]);
__d(function(g,r,i,_a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.modGradConfig=void 0;var a=r(d[0]),n=r(d[1]),s=r(d[2]),t=r(d[3]),o=r(d[4]),u=r(d[5]),h=r(d[6]),p=r(d[7]);
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
e.modGradConfig={kernelName:a.Mod,inputsToSave:['a','b'],gradFunc:(a,c)=>{const[l,f]=c,v=(0,n.assertAndGetBroadcastShape)(l.shape,f.shape);return{a:()=>{const s=(0,n.getReductionAxes)(l.shape,v);return s.length>0?(0,h.reshape)((0,p.sum)(a,s),l.shape):a},b:()=>{const c=(0,o.mul)(a,(0,u.neg)((0,t.floor)((0,s.div)(l,f)))),_=(0,n.getReductionAxes)(f.shape,v);return _.length>0?(0,h.reshape)((0,p.sum)(c,_),f.shape):c}}}}},1987,[1165,1264,1202,1287,1204,1304,1221,1281]);
__d(function(g,r,i,_a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.multiplyGradConfig=void 0;var t=r(d[0]),a=r(d[1]),s=r(d[2]),n=r(d[3]),u=r(d[4]),l=r(d[5]);
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
e.multiplyGradConfig={kernelName:t.Multiply,inputsToSave:['a','b'],gradFunc:(t,o)=>{const[p,c]=o,h=(0,a.assertAndGetBroadcastShape)(p.shape,c.shape);return{a:()=>{const o=(0,n.mul)(t,(0,s.cast)(c,'float32')),f=(0,a.getReductionAxes)(p.shape,h);return f.length>0?(0,u.reshape)((0,l.sum)(o,f),p.shape):o},b:()=>{const o=(0,n.mul)(t,(0,s.cast)(p,'float32')),f=(0,a.getReductionAxes)(c.shape,h);return f.length>0?(0,u.reshape)((0,l.sum)(o,f),c.shape):o}}}}},1988,[1165,1264,1196,1204,1221,1281]);
__d(function(g,r,i,a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.negGradConfig=void 0;var n=r(d[0]),o=r(d[1]);
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
e.negGradConfig={kernelName:n.Neg,gradFunc:n=>({x:()=>(0,o.neg)(n)})}},1989,[1165,1304]);
__d(function(g,r,i,a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.oneHotGradConfig=void 0;var n=r(d[0]),o=r(d[1]);
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
e.oneHotGradConfig={kernelName:n.OneHot,inputsToSave:['indices'],gradFunc:(n,t)=>{const s=t[0];return{indices:()=>(0,o.zeros)(s.shape,'float32')}}}},1990,[1165,1322]);
__d(function(g,r,i,a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.onesLikeGradConfig=void 0;var n=r(d[0]),o=r(d[1]);
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
e.onesLikeGradConfig={kernelName:n.OnesLike,gradFunc:n=>({x:()=>(0,o.zerosLike)(n)})}},1991,[1165,1266]);
__d(function(g,r,i,a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.packGradConfig=void 0;var n=r(d[0]),c=r(d[1]);
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
e.packGradConfig={kernelName:n.Pack,saveAllInputs:!0,gradFunc:(n,o,t)=>{const{axis:u}=t;return(0,c.unstack)(n,u).map(n=>()=>n)}}},1992,[1165,1407]);
__d(function(g,r,i,a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.padV2GradConfig=void 0;var n=r(d[0]),o=r(d[1]);
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
e.padV2GradConfig={kernelName:n.PadV2,inputsToSave:['x'],gradFunc:(n,p,s)=>{const t=p[0],{paddings:u}=s,c=u.map(n=>n[0]);return{x:()=>(0,o.slice)(n,c,t.shape)}}}},1993,[1165,1227]);
__d(function(g,_r,_i,_a,m,_e,d){Object.defineProperty(_e,"__esModule",{value:!0}),_e.powGradConfig=void 0;var e=_r(d[0]),t=(function(e,t){if("function"==typeof WeakMap)var r=new WeakMap,n=new WeakMap;return(function(e,t){if(!t&&e&&e.__esModule)return e;var o,a,s={__proto__:null,default:e};if(null===e||"object"!=typeof e&&"function"!=typeof e)return s;if(o=t?n:r){if(o.has(e))return o.get(e);o.set(e,s)}for(const t in e)"default"!==t&&{}.hasOwnProperty.call(e,t)&&((a=(o=Object.defineProperty)&&Object.getOwnPropertyDescriptor(e,t))&&(a.get||a.set)?o(s,t,a):s[t]=e[t]);return s})(e,t)}
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
   */)(_r(d[1])),r=_r(d[2]),n=_r(d[3]),o=_r(d[4]),a=_r(d[5]),s=_r(d[6]),u=_r(d[7]),p=_r(d[8]),c=_r(d[9]),l=_r(d[10]),f=_r(d[11]),i=_r(d[12]);_e.powGradConfig={kernelName:e.Pow,inputsToSave:['a','b'],outputsToSave:[!0],gradFunc:(e,h)=>{const[_,w,b]=h,v=_,y=w,k=t.assertAndGetBroadcastShape(v.shape,y.shape);return{a:()=>{const n=(0,r.cast)(y,'float32');let o=(0,a.mul)(e,(0,a.mul)(n,(0,s.pow)(v,(0,c.sub)(n,(0,p.scalar)(1)))));const f=t.getReductionAxes(v.shape,k);return f.length>0&&(o=(0,l.sum)(o,f)),(0,u.reshape)(o,v.shape)},b:()=>{const r=(0,n.greater)(v,0),s=(0,f.where)(r,(0,o.log)(v),(0,i.zerosLike)(v));let p=(0,a.mul)(e,(0,a.mul)(b,s));const c=t.getReductionAxes(y.shape,k);return c.length>0&&(p=(0,l.sum)(p,c)),(0,u.reshape)(p,y.shape)}}}}},1994,[1165,1264,1196,1289,1300,1204,1277,1221,1278,1307,1281,1265,1266]);
__d(function(g,r,i,a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.preluGradConfig=void 0;var n=r(d[0]),u=r(d[1]),t=r(d[2]),l=r(d[3]),o=r(d[4]),s=r(d[5]),p=r(d[6]),h=r(d[7]);
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
e.preluGradConfig={kernelName:n.Prelu,inputsToSave:['x','alpha'],gradFunc:(n,c)=>{const[f,v]=c,_=(0,t.greater)(f,0);return{x:()=>(0,p.where)(_,n,(0,l.mul)(n,v)),alpha:()=>{let t=(0,p.where)(_,(0,h.zerosLike)(n),(0,l.mul)(n,f));const c=(0,u.getReductionAxes)(v.shape,n.shape);return c.length>0&&(t=(0,s.sum)(t,c)),(0,o.reshape)(t,v.shape)}}}}},1995,[1165,1264,1289,1204,1221,1281,1265,1266]);
__d(function(g,r,_i,a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.prodGradConfig=void 0;var n=r(d[0]),t=r(d[1]),s=r(d[2]),o=r(d[3]),u=r(d[4]),l=r(d[5]);
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
function p(n,t,l){const p=n.shape.slice();p[l]=1;const c=(0,u.reshape)(t,p),i=(0,s.cumprod)(n,l,!0,!1),h=(0,s.cumprod)(n,l,!0,!0),f=(0,o.mul)(i,h);return(0,o.mul)(c,f)}function c(t,s,o){const u=t.shape.length,c=u-o.length,i=n.backend_util.getAxesPermutation(o,u);let h=t;null!=i&&(h=(0,l.transpose)(t,i));const f=h.shape.slice(),_=f.splice(u-o.length,o.length).reduce((n,t)=>n*t,1);f.push(_);let x=p(h.reshape(f),s,c);if(x=x.reshape(h.shape),null!=i){const t=n.backend_util.getUndoAxesPermutation(i);x=(0,l.transpose)(x,t)}return x}e.prodGradConfig={kernelName:t.Prod,inputsToSave:['x'],gradFunc:(n,t,s)=>{const[o]=t,{axis:u}=s;let l=[];return l=null==u?o.shape.map((n,t)=>t):'number'==typeof u?[u]:u,{x:()=>c(o,n,l)}}}},1996,[1482,1165,1255,1204,1221,1413]);
__d(function(g,_r,_i,_a,m,_e,d){Object.defineProperty(_e,"__esModule",{value:!0}),_e.divGradConfig=void 0;var e=_r(d[0]),t=(function(e,t){if("function"==typeof WeakMap)var n=new WeakMap,a=new WeakMap;return(function(e,t){if(!t&&e&&e.__esModule)return e;var r,o,s={__proto__:null,default:e};if(null===e||"object"!=typeof e&&"function"!=typeof e)return s;if(r=t?a:n){if(r.has(e))return r.get(e);r.set(e,s)}for(const t in e)"default"!==t&&{}.hasOwnProperty.call(e,t)&&((o=(r=Object.defineProperty)&&Object.getOwnPropertyDescriptor(e,t))&&(o.get||o.set)?r(s,t,o):s[t]=e[t]);return s})(e,t)}
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
   */)(_r(d[1])),n=_r(d[2]),a=_r(d[3]),r=_r(d[4]),o=_r(d[5]),s=_r(d[6]),u=_r(d[7]),i=_r(d[8]);_e.divGradConfig={kernelName:e.RealDiv,inputsToSave:['a','b'],gradFunc:(e,c)=>{const[f,p]=c,l=t.assertAndGetBroadcastShape(f.shape,p.shape);return{a:()=>{const r=(0,a.div)(e,(0,n.cast)(p,'float32')),o=t.getReductionAxes(f.shape,l);return o.length>0?(0,s.reshape)((0,i.sum)(r,o),f.shape):r},b:()=>{let c=(0,r.mul)(e,(0,n.cast)(f,'float32'));const h=t.getReductionAxes(p.shape,l);h.length>0&&(c=(0,s.reshape)((0,i.sum)(c,h),p.shape));const v=(0,u.square)(p);return(0,o.neg)((0,a.div)(c,(0,n.cast)(v,'float32')))}}}}},1997,[1165,1264,1196,1202,1204,1304,1221,1280,1281]);
__d(function(g,r,i,a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.reciprocalGradConfig=void 0;var n=r(d[0]),o=r(d[1]),c=r(d[2]),u=r(d[3]);
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
e.reciprocalGradConfig={kernelName:n.Reciprocal,inputsToSave:['x'],gradFunc:(n,l)=>{const[t]=l;return{x:()=>(0,o.div)(n,(0,c.neg)((0,u.square)(t)))}}}},1998,[1165,1202,1304,1280]);
__d(function(g,r,i,a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.relu6GradConfig=void 0;var u=r(d[0]),l=r(d[1]),n=r(d[2]),o=r(d[3]),t=r(d[4]);
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
e.relu6GradConfig={kernelName:u.Relu6,inputsToSave:['x'],gradFunc:(u,s)=>{const[c]=s,f=(0,o.mul)((0,n.lessEqual)(c,6),(0,t.step)(c));return{x:()=>(0,o.mul)(u,(0,l.cast)(f,'float32'))}}}},1999,[1165,1196,1297,1204,1392]);
__d(function(g,r,i,a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.reluGradConfig=void 0;var n=r(d[0]),u=r(d[1]),o=r(d[2]),t=r(d[3]);
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
e.reluGradConfig={kernelName:n.Relu,inputsToSave:['x'],gradFunc:(n,l)=>{const[c]=l;return{x:()=>(0,o.mul)(n,(0,u.cast)((0,t.step)(c),'float32'))}}}},2000,[1165,1196,1204,1392]);
__d(function(g,r,i,a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.reshapeGradConfig=void 0;var n=r(d[0]),o=r(d[1]);
/**
   * @license
   * Copyright 2020 Google Inc. All Rights Reserved.
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
e.reshapeGradConfig={kernelName:n.Reshape,inputsToSave:['x'],gradFunc:(n,s)=>{const[p]=s;return{x:()=>(0,o.reshape)(n,p.shape)}}}},2001,[1165,1221]);
__d(function(g,r,i,a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.resizeBilinearGradConfig=void 0;var n=r(d[0]),s=r(d[1]);
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
e.resizeBilinearGradConfig={kernelName:s.ResizeBilinear,inputsToSave:['images'],gradFunc:(l,o,u)=>{const[t]=o,c={dy:l,images:t};return{images:()=>n.ENGINE.runKernel(s.ResizeBilinearGrad,c,u)}}}},2002,[1160,1165]);
__d(function(g,r,i,a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.resizeNearestNeighborGradConfig=void 0;var s=r(d[0]),n=r(d[1]);
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
e.resizeNearestNeighborGradConfig={kernelName:n.ResizeNearestNeighbor,inputsToSave:['images'],gradFunc:(o,N,t)=>{const[u]=N,b={dy:o,images:u};return{images:()=>s.ENGINE.runKernel(n.ResizeNearestNeighborGrad,b,t)}}}},2003,[1160,1165]);
__d(function(g,r,i,a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.reverseGradConfig=void 0;var s=r(d[0]),n=r(d[1]),o=r(d[2]);
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
e.reverseGradConfig={kernelName:s.Reverse,gradFunc:(s,v,t)=>{const{dims:u}=t,c=(0,o.parseAxisParam)(u,s.shape);return{x:()=>(0,n.reverse)(s,c)}}}},2004,[1165,1366,1169]);
__d(function(g,r,i,a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.roundGradConfig=void 0;var n=r(d[0]),o=r(d[1]);
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
e.roundGradConfig={kernelName:n.Round,gradFunc:n=>({x:()=>(0,o.zerosLike)(n)})}},2005,[1165,1266]);
__d(function(g,r,i,a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.rsqrtGradConfig=void 0;var n=r(d[0]),o=r(d[1]),t=r(d[2]),u=r(d[3]),s=r(d[4]);
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
e.rsqrtGradConfig={kernelName:n.Rsqrt,inputsToSave:['x'],gradFunc:(n,v)=>{const[c]=v;return{x:()=>(0,u.neg)((0,o.div)(n,(0,t.mul)((0,s.pow)(c,1.5),2)))}}}},2006,[1165,1202,1204,1304,1277]);
__d(function(g,r,i,a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.selectGradConfig=void 0;var t=r(d[0]),o=r(d[1]),n=r(d[2]),c=r(d[3]),l=r(d[4]);
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
e.selectGradConfig={kernelName:t.Select,inputsToSave:['condition'],gradFunc:(t,s)=>{const[u]=s;return{condition:()=>(0,o.cast)((0,l.zerosLike)(u),'float32'),t:()=>(0,c.mul)(t,(0,o.cast)(u,t.dtype)),e:()=>(0,c.mul)(t,(0,o.cast)((0,n.logicalNot)(u),t.dtype))}}}},2007,[1165,1196,1310,1204,1266]);
__d(function(g,r,i,a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.seluGradConfig=void 0;var l=r(d[0]),u=r(d[1]),n=r(d[2]),t=r(d[3]),o=r(d[4]),s=r(d[5]),c=r(d[6]),S=r(d[7]);
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
e.seluGradConfig={kernelName:l.Selu,inputsToSave:['x'],gradFunc:(l,_)=>{const[f]=_;return{x:()=>{const _=(0,t.greater)(f,(0,s.scalar)(0)),L=(0,s.scalar)(c.SELU_SCALEALPHA),v=(0,s.scalar)(c.SELU_SCALE),A=(0,o.mul)(l,v),C=(0,o.mul)((0,o.mul)(l,L),(0,n.exp)((0,u.cast)(f,'float32')));return(0,S.where)(_,A,C)}}}}},2008,[1165,1196,1282,1289,1204,1278,1505,1265]);
__d(function(g,r,i,a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.sigmoidGradConfig=void 0;var o=r(d[0]),u=r(d[1]),n=r(d[2]),s=r(d[3]);
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
e.sigmoidGradConfig={kernelName:o.Sigmoid,outputsToSave:[!0],gradFunc:(o,t)=>{const[l]=t;return{x:()=>(0,u.mul)(o,(0,u.mul)(l,(0,s.sub)((0,n.scalar)(1),l)))}}}},2009,[1165,1204,1278,1307]);
__d(function(g,r,i,a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.signGradConfig=void 0;var n=r(d[0]),o=r(d[1]);
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
e.signGradConfig={kernelName:n.Sign,gradFunc:n=>({x:()=>(0,o.zerosLike)(n)})}},2010,[1165,1266]);
__d(function(g,r,i,a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.sinGradConfig=void 0;var n=r(d[0]),o=r(d[1]),t=r(d[2]),s=r(d[3]);
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
e.sinGradConfig={kernelName:n.Sin,inputsToSave:['x'],gradFunc:(n,u)=>{const[c]=u;return{x:()=>(0,s.mul)((0,t.cos)((0,o.cast)(c,'float32')),n)}}}},2011,[1165,1196,1253,1204]);
__d(function(g,r,i,a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.sinhGradConfig=void 0;var n=r(d[0]),o=r(d[1]),t=r(d[2]),s=r(d[3]);
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
e.sinhGradConfig={kernelName:n.Sinh,inputsToSave:['x'],gradFunc:(n,u)=>{const[c]=u;return{x:()=>(0,s.mul)((0,t.cosh)((0,o.cast)(c,'float32')),n)}}}},2012,[1165,1196,1254,1204]);
__d(function(g,r,_i,a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.sliceGradConfig=void 0;var i=r(d[0]),n=r(d[1]),s=r(d[2]);
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
e.sliceGradConfig={kernelName:i.Slice,inputsToSave:['x'],gradFunc:(i,o,c)=>{const[l]=o,{begin:t,size:u}=c,p=l.shape,[f,v]=(0,s.parseSliceParams)(l,t,u),_=[];for(let n=0;n<i.rank;n++)_.push([f[n],p[n]-f[n]-v[n]]);return{x:()=>(0,n.pad)(i,_)}}}},2013,[1165,1333,1493]);
__d(function(g,r,i,a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.softmaxGradConfig=void 0;var o=r(d[0]),t=r(d[1]),u=r(d[2]),n=r(d[3]);
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
e.softmaxGradConfig={kernelName:o.Softmax,outputsToSave:[!0],gradFunc:(o,s,f)=>{const[l]=s,{dim:c}=f,v=(0,t.mul)(o,l);return{logits:()=>(0,u.sub)(v,(0,t.mul)((0,n.sum)(v,[c],true),l))}}}},2014,[1165,1204,1307,1281]);
__d(function(g,r,i,a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.softplusGradConfig=void 0;var o=r(d[0]),n=r(d[1]),u=r(d[2]);
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
e.softplusGradConfig={kernelName:o.Softplus,inputsToSave:['x'],gradFunc:(o,s)=>{const[t]=s;return{x:()=>(0,n.mul)(o,(0,u.sigmoid)(t))}}}},2015,[1165,1204,1226]);
__d(function(g,r,i,a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.spaceToBatchNDGradConfig=void 0;var c=r(d[0]),o=r(d[1]);
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
e.spaceToBatchNDGradConfig={kernelName:c.SpaceToBatchND,gradFunc:(c,n,t)=>{const{blockShape:p,paddings:h}=t;return{x:()=>(0,o.batchToSpaceND)(c,p,h)}}}},2016,[1165,1229]);
__d(function(g,r,i,a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.splitVGradConfig=void 0;var n=r(d[0]),t=r(d[1]);
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
e.splitVGradConfig={kernelName:n.SplitV,gradFunc:(n,o,c)=>{const{axis:l}=c;return{x:()=>(0,t.concat)(n,l)}}}},2017,[1165,1224]);
__d(function(g,r,i,a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.sqrtGradConfig=void 0;var t=r(d[0]),n=r(d[1]),o=r(d[2]),s=r(d[3]),u=r(d[4]);
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
e.sqrtGradConfig={kernelName:t.Sqrt,inputsToSave:['x'],gradFunc:(t,c)=>{const[f]=c;return{x:()=>(0,o.div)(t,(0,s.mul)((0,u.sqrt)((0,n.cast)(f,'float32')),2))}}}},2018,[1165,1196,1202,1204,1279]);
__d(function(g,r,i,a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.squareGradConfig=void 0;var u=r(d[0]),n=r(d[1]),o=r(d[2]);
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
e.squareGradConfig={kernelName:u.Square,inputsToSave:['x'],gradFunc:(u,t)=>{const[l]=t;return{x:()=>(0,o.mul)(u,(0,o.mul)((0,n.cast)(l,'float32'),2))}}}},2019,[1165,1196,1204]);
__d(function(g,r,i,_a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.squaredDifferenceGradConfig=void 0;var u=r(d[0]),a=r(d[1]),n=r(d[2]),f=r(d[3]);
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
e.squaredDifferenceGradConfig={kernelName:u.SquaredDifference,inputsToSave:['a','b'],gradFunc:(u,c)=>{const[l,o]=c,s=(0,n.scalar)(2);return{a:()=>(0,a.mul)(u,(0,a.mul)(s,(0,f.sub)(l,o))),b:()=>(0,a.mul)(u,(0,a.mul)(s,(0,f.sub)(o,l)))}}}},2020,[1165,1204,1278,1307]);
__d(function(g,r,i,a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.stepGradConfig=void 0;var n=r(d[0]),o=r(d[1]);
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
e.stepGradConfig={kernelName:n.Step,gradFunc:n=>({x:()=>(0,o.zerosLike)(n)})}},2021,[1165,1266]);
__d(function(g,_r,_i,_a,m,_e,d){Object.defineProperty(_e,"__esModule",{value:!0}),_e.subGradConfig=void 0;var e=_r(d[0]),t=(function(e,t){if("function"==typeof WeakMap)var n=new WeakMap,r=new WeakMap;return(function(e,t){if(!t&&e&&e.__esModule)return e;var a,o,s={__proto__:null,default:e};if(null===e||"object"!=typeof e&&"function"!=typeof e)return s;if(a=t?r:n){if(a.has(e))return a.get(e);a.set(e,s)}for(const t in e)"default"!==t&&{}.hasOwnProperty.call(e,t)&&((o=(a=Object.defineProperty)&&Object.getOwnPropertyDescriptor(e,t))&&(o.get||o.set)?a(s,t,o):s[t]=e[t]);return s})(e,t)}
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
   */)(_r(d[1])),n=_r(d[2]),r=_r(d[3]),a=_r(d[4]);_e.subGradConfig={kernelName:e.Sub,inputsToSave:['a','b'],gradFunc:(e,o)=>{const[s,u]=o,p=t.assertAndGetBroadcastShape(s.shape,u.shape);return{a:()=>{let n=e;const o=t.getReductionAxes(s.shape,p);return o.length>0&&(n=(0,a.sum)(n,o)),(0,r.reshape)(n,s.shape)},b:()=>{let o=e;const s=t.getReductionAxes(u.shape,p);return s.length>0&&(o=(0,a.sum)(o,s)),(0,r.reshape)((0,n.neg)(o),u.shape)}}}}},2022,[1165,1264,1304,1221,1281]);
__d(function(g,r,i,a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.sumGradConfig=void 0;var s=r(d[0]),n=r(d[1]),o=r(d[2]),u=r(d[3]),t=r(d[4]);
/**
   * @license
   * Copyright 2020 Google Inc. All Rights Reserved.
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
e.sumGradConfig={kernelName:s.Sum,inputsToSave:['x'],gradFunc:(s,c,p)=>{const[f]=c,l=f.shape.slice(),{axis:h}=p;(0,t.parseAxisParam)(h,f.shape).forEach(s=>{l[s]=1});const v=(0,u.reshape)(s,l),x=(0,n.mul)(v,(0,o.ones)(f.shape,'float32'));return{x:()=>x}}}},2023,[1165,1204,1321,1221,1169]);
__d(function(g,r,i,a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.tanGradConfig=void 0;var n=r(d[0]),o=r(d[1]),t=r(d[2]),u=r(d[3]);
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
e.tanGradConfig={kernelName:n.Tan,inputsToSave:['x'],gradFunc:(n,c)=>{const[s]=c;return{x:()=>(0,t.div)(n,(0,u.square)((0,o.cos)(s)))}}}},2024,[1165,1253,1202,1280]);
__d(function(g,r,i,a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.tanhGradConfig=void 0;var n=r(d[0]),u=r(d[1]),o=r(d[2]),t=r(d[3]),s=r(d[4]);
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
e.tanhGradConfig={kernelName:n.Tanh,outputsToSave:[!0],gradFunc:(n,c)=>{const[l]=c;return{x:()=>(0,u.mul)((0,s.sub)((0,o.scalar)(1),(0,t.square)(l)),n)}}}},2025,[1165,1204,1278,1280,1307]);
__d(function(g,r,_i,a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.tileGradConfig=void 0;var s=r(d[0]),t=r(d[1]),o=r(d[2]),l=r(d[3]);
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
e.tileGradConfig={kernelName:s.Tile,inputsToSave:['x'],gradFunc:(s,p,i)=>{const[n]=p,{reps:h}=i;return{x:()=>{let p=(0,l.zerosLike)(n);if(1===n.rank)for(let l=0;l<h[0];++l)p=(0,t.add)(p,(0,o.slice)(s,[l*n.shape[0]],[n.shape[0]]));else if(2===n.rank)for(let l=0;l<h[0];++l)for(let i=0;i<h[1];++i)p=(0,t.add)(p,(0,o.slice)(s,[l*n.shape[0],i*n.shape[1]],[n.shape[0],n.shape[1]]));else if(3===n.rank)for(let l=0;l<h[0];++l)for(let i=0;i<h[1];++i)for(let f=0;f<h[2];++f)p=(0,t.add)(p,(0,o.slice)(s,[l*n.shape[0],i*n.shape[1],f*n.shape[2]],[n.shape[0],n.shape[1],n.shape[2]]));else{if(4!==n.rank)throw new Error(`Gradient for tile operation is not implemented for rank-${n.rank} tensors yet.`);for(let l=0;l<h[0];++l)for(let i=0;i<h[1];++i)for(let f=0;f<h[2];++f)for(let c=0;c<h[3];++c)p=(0,t.add)(p,(0,o.slice)(s,[l*n.shape[0],i*n.shape[1],f*n.shape[2],c*n.shape[3]],[n.shape[0],n.shape[1],n.shape[2],n.shape[3]]))}return p}}}}},2026,[1165,1201,1227,1266]);
__d(function(g,_r,_i,a,m,_e,d){Object.defineProperty(_e,"__esModule",{value:!0}),_e.transposeGradConfig=void 0;var e=_r(d[0]),t=(function(e,t){if("function"==typeof WeakMap)var n=new WeakMap,r=new WeakMap;return(function(e,t){if(!t&&e&&e.__esModule)return e;var o,f,u={__proto__:null,default:e};if(null===e||"object"!=typeof e&&"function"!=typeof e)return u;if(o=t?r:n){if(o.has(e))return o.get(e);o.set(e,u)}for(const t in e)"default"!==t&&{}.hasOwnProperty.call(e,t)&&((f=(o=Object.defineProperty)&&Object.getOwnPropertyDescriptor(e,t))&&(f.get||f.set)?o(u,t,f):u[t]=e[t]);return u})(e,t)}
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
   */)(_r(d[1])),n=_r(d[2]);_e.transposeGradConfig={kernelName:e.Transpose,gradFunc:(e,r,o)=>{const f=o,{perm:u}=f,i=t.getUndoAxesPermutation(u);return{x:()=>(0,n.transpose)(e,i)}}}},2027,[1165,1274,1413]);
__d(function(g,r,i,a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.unpackGradConfig=void 0;var n=r(d[0]),c=r(d[1]);
/**
   * @license
   * Copyright 2020 Google Inc. All Rights Reserved.
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
e.unpackGradConfig={kernelName:n.Unpack,gradFunc:(n,u,o)=>{const t=o,{axis:k}=t;return{value:()=>(0,c.stack)(n,k)}}}},2028,[1165,1391]);
__d(function(g,r,_i,a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.unsortedSegmentSumGradConfig=void 0;var n=r(d[0]),t=r(d[1]),o=r(d[2]),s=r(d[3]),u=r(d[4]),i=r(d[5]),c=r(d[6]),l=r(d[7]),S=r(d[8]),f=r(d[9]);
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
e.unsortedSegmentSumGradConfig={kernelName:n.UnsortedSegmentSum,inputsToSave:['segmentIds'],gradFunc:(n,t)=>{const[o]=t;return{x:()=>k(n,o)}}};function k(n,k){const p=(0,i.maximum)(k,(0,f.zerosLike)(k)),v=(0,o.gather)(n,p);let _=(0,s.greaterEqual)(k,(0,l.scalar)(0,'int32'));const h=v.rank-_.rank;for(let n=0;n<h;++n)_=(0,t.expandDims)(_,n+1);_=(0,u.logicalAnd)(_,(0,c.ones)(v.shape,'bool'));const x=(0,f.zerosLike)(v);return(0,S.where)(_,v,x)}},2029,[1165,1283,1288,1290,1309,1318,1321,1278,1265,1266]);
__d(function(g,r,i,a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.zerosLikeGradConfig=void 0;var o=r(d[0]),n=r(d[1]);
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
e.zerosLikeGradConfig={kernelName:o.ZerosLike,gradFunc:o=>({x:()=>(0,n.zerosLike)(o)})}},2030,[1165,1266]);
__d(function(g,r,i,a,m,e,d){r(d[0]),r(d[1]),r(d[2]),r(d[3]),r(d[4]),r(d[5]),r(d[6]),r(d[7]),r(d[8]),r(d[9]),r(d[10]),r(d[11]),r(d[12]),r(d[13]),r(d[14]),r(d[15]),r(d[16]),r(d[17]),r(d[18]),r(d[19]),r(d[20]),r(d[21]),r(d[22]),r(d[23]),r(d[24]),r(d[25]),r(d[26]),r(d[27]),r(d[28]),r(d[29]),r(d[30]),r(d[31]),r(d[32]),r(d[33]),r(d[34]),r(d[35]),r(d[36]),r(d[37]),r(d[38]),r(d[39]),r(d[40]),r(d[41]),r(d[42]),r(d[43]),r(d[44]),r(d[45]),r(d[46]),r(d[47]),r(d[48]),r(d[49]),r(d[50]),r(d[51]),r(d[52]),r(d[53]),r(d[54]),r(d[55]),r(d[56]),r(d[57]),r(d[58]),r(d[59]),r(d[60]),r(d[61]),r(d[62]),r(d[63]),r(d[64]),r(d[65]),r(d[66]),r(d[67]),r(d[68]),r(d[69]),r(d[70]),r(d[71]),r(d[72]),r(d[73]),r(d[74]),r(d[75]),r(d[76]),r(d[77]),r(d[78]),r(d[79]),r(d[80]),r(d[81]),r(d[82]),r(d[83]),r(d[84]),r(d[85]),r(d[86]),r(d[87]),r(d[88]),r(d[89]),r(d[90]),r(d[91]),r(d[92]),r(d[93]),r(d[94]),r(d[95]),r(d[96]),r(d[97]),r(d[98]),r(d[99]),r(d[100]),r(d[101]),r(d[102]),r(d[103]),r(d[104]),r(d[105]),r(d[106]),r(d[107]),r(d[108]),r(d[109]),r(d[110]),r(d[111]),r(d[112]),r(d[113]),r(d[114]),r(d[115]),r(d[116]),r(d[117]),r(d[118]),r(d[119]),r(d[120]),r(d[121]),r(d[122]),r(d[123]),r(d[124]),r(d[125]),r(d[126]),r(d[127]),r(d[128]),r(d[129]),r(d[130]),r(d[131]),r(d[132]),r(d[133]),r(d[134]),r(d[135]),r(d[136])},2031,[2032,2033,2034,2035,2036,2037,2038,2039,2040,2041,2042,2043,2044,2045,2046,2047,2048,2049,2050,2051,2052,2053,2054,2055,2056,2057,2058,2059,2060,2061,2062,2063,2064,2065,2066,2067,2068,2069,2070,2071,2072,2073,2074,2075,2076,2077,2078,2079,2080,2081,2082,2083,2084,2085,2086,2087,2088,2089,2090,2091,2092,2093,2094,2095,2096,2097,2098,2099,2100,2101,2102,2103,2104,2105,2106,2107,2108,2109,2110,2111,2112,2113,2114,2115,2116,2117,2118,2119,2120,2121,2122,2123,2124,2125,2126,2127,2128,2129,2130,2131,2132,2133,2134,2135,2136,2137,2138,2139,2140,2141,2142,2143,2144,2145,2146,2147,2148,2149,2150,2151,2152,2153,2154,2155,2156,2157,2158,2159,2160,2161,2162,2163,2164,2165,2166,2167,2168]);
__d(function(g,r,i,a,m,e,d){var s=r(d[0]);
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
(0,r(d[1]).getGlobalTensorClass)().prototype.abs=function(){return this.throwIfDisposed(),(0,s.abs)(this)}},2032,[1205,1174]);
__d(function(g,r,i,a,m,e,d){var o=r(d[0]);
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
(0,r(d[1]).getGlobalTensorClass)().prototype.acos=function(){return this.throwIfDisposed(),(0,o.acos)(this)}},2033,[1205,1174]);
__d(function(g,r,i,a,m,e,d){var o=r(d[0]);
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
(0,r(d[1]).getGlobalTensorClass)().prototype.acosh=function(){return this.throwIfDisposed(),(0,o.acosh)(this)}},2034,[1205,1174]);
__d(function(g,r,i,a,m,e,d){var t=r(d[0]);
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
(0,r(d[1]).getGlobalTensorClass)().prototype.add=function(o){return this.throwIfDisposed(),(0,t.add)(this,o)}},2035,[1201,1174]);
__d(function(g,r,i,a,m,e,d){var t=r(d[0]);
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
(0,r(d[1]).getGlobalTensorClass)().prototype.all=function(o,l){return this.throwIfDisposed(),(0,t.all)(this,o,l)}},2036,[1210,1174]);
__d(function(g,r,i,a,m,e,d){var t=r(d[0]);
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
(0,r(d[1]).getGlobalTensorClass)().prototype.any=function(n,o){return this.throwIfDisposed(),(0,t.any)(this,n,o)}},2037,[1211,1174]);
__d(function(g,r,i,a,m,e,d){var t=r(d[0]);
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
(0,r(d[1]).getGlobalTensorClass)().prototype.argMax=function(o){return this.throwIfDisposed(),(0,t.argMax)(this,o)}},2038,[1212,1174]);
__d(function(g,r,i,a,m,e,d){var t=r(d[0]);
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
(0,r(d[1]).getGlobalTensorClass)().prototype.argMin=function(n){return this.throwIfDisposed(),(0,t.argMin)(this,n)}},2039,[1213,1174]);
__d(function(g,r,i,a,m,e,d){var s=r(d[0]),t=r(d[1]),o=r(d[2]);
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
(0,t.getGlobalTensorClass)().prototype.asScalar=function(){return this.throwIfDisposed(),(0,o.assert)(1===this.size,()=>'The array must have only 1 element.'),(0,s.reshape)(this,[])}},2040,[1221,1174,1169]);
__d(function(g,r,i,a,m,e,d){var t=r(d[0]);
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
(0,r(d[1]).getGlobalTensorClass)().prototype.asType=function(s){return this.throwIfDisposed(),(0,t.cast)(this,s)}},2041,[1205,1174]);
__d(function(g,r,i,a,m,e,d){var s=r(d[0]);
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
(0,r(d[1]).getGlobalTensorClass)().prototype.as1D=function(){return this.throwIfDisposed(),(0,s.reshape)(this,[this.size])}},2042,[1221,1174]);
__d(function(g,r,i,a,m,e,d){var s=r(d[0]);
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
(0,r(d[1]).getGlobalTensorClass)().prototype.as2D=function(t,o){return this.throwIfDisposed(),(0,s.reshape)(this,[t,o])}},2043,[1221,1174]);
__d(function(g,r,i,a,m,e,d){var s=r(d[0]);
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
(0,r(d[1]).getGlobalTensorClass)().prototype.as3D=function(t,o,n){return this.throwIfDisposed(),(0,s.reshape)(this,[t,o,n])}},2044,[1221,1174]);
__d(function(g,r,i,a,m,e,d){var s=r(d[0]);
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
(0,r(d[1]).getGlobalTensorClass)().prototype.as4D=function(t,o,n,h){return this.throwIfDisposed(),(0,s.reshape)(this,[t,o,n,h])}},2045,[1221,1174]);
__d(function(g,r,i,a,m,e,d){var s=r(d[0]);
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
(0,r(d[1]).getGlobalTensorClass)().prototype.as5D=function(t,o,n,h,p){return this.throwIfDisposed(),(0,s.reshape)(this,[t,o,n,h,p])}},2046,[1221,1174]);
__d(function(g,r,i,a,m,e,d){var s=r(d[0]);
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
(0,r(d[1]).getGlobalTensorClass)().prototype.asin=function(){return this.throwIfDisposed(),(0,s.asin)(this)}},2047,[1205,1174]);
__d(function(g,r,i,a,m,e,d){var s=r(d[0]);
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
(0,r(d[1]).getGlobalTensorClass)().prototype.asinh=function(){return this.throwIfDisposed(),(0,s.asinh)(this)}},2048,[1205,1174]);
__d(function(g,r,i,a,m,e,d){var t=r(d[0]);
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
(0,r(d[1]).getGlobalTensorClass)().prototype.atan=function(){return this.throwIfDisposed(),(0,t.atan)(this)}},2049,[1205,1174]);
__d(function(g,r,i,a,m,e,d){var t=r(d[0]);
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
(0,r(d[1]).getGlobalTensorClass)().prototype.atan2=function(n){return this.throwIfDisposed(),(0,t.atan2)(this,n)}},2050,[1217,1174]);
__d(function(g,r,i,a,m,e,d){var t=r(d[0]);
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
(0,r(d[1]).getGlobalTensorClass)().prototype.atanh=function(){return this.throwIfDisposed(),(0,t.atanh)(this)}},2051,[1205,1174]);
__d(function(g,r,i,a,m,e,d){var o=r(d[0]);(0,r(d[1]).getGlobalTensorClass)().prototype.avgPool=function(t,s,n,l){return this.throwIfDisposed(),(0,o.avgPool)(this,t,s,n,l)}},2052,[1219,1174]);
__d(function(g,r,i,a,m,e,d){var t=r(d[0]);
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
(0,r(d[1]).getGlobalTensorClass)().prototype.batchToSpaceND=function(o,s){return this.throwIfDisposed(),(0,t.batchToSpaceND)(this,o,s)}},2053,[1229,1174]);
__d(function(g,r,i,a,m,e,d){var t=r(d[0]);
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
(0,r(d[1]).getGlobalTensorClass)().prototype.batchNorm=function(o,s,n,h,c){return this.throwIfDisposed(),(0,t.batchNorm)(this,o,s,n,h,c)}},2054,[1230,1174]);
__d(function(g,r,i,a,m,e,d){var o=r(d[0]);
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
(0,r(d[1]).getGlobalTensorClass)().prototype.broadcastTo=function(t){return this.throwIfDisposed(),(0,o.broadcastTo)(this,t)}},2055,[1238,1174]);
__d(function(g,r,i,a,m,e,d){var t=r(d[0]);
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
(0,r(d[1]).getGlobalTensorClass)().prototype.cast=function(s){return this.throwIfDisposed(),(0,t.cast)(this,s)}},2056,[1205,1174]);
__d(function(g,r,i,a,m,e,d){var t=r(d[0]);
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
(0,r(d[1]).getGlobalTensorClass)().prototype.ceil=function(){return this.throwIfDisposed(),(0,t.ceil)(this)}},2057,[1205,1174]);
__d(function(g,r,i,a,m,e,d){var t=r(d[0]);
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
(0,r(d[1]).getGlobalTensorClass)().prototype.clipByValue=function(o,l){return this.throwIfDisposed(),(0,t.clipByValue)(this,o,l)}},2058,[1205,1174]);
__d(function(g,r,i,a,m,e,d){var o=r(d[0]),t=r(d[1]);
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
(0,t.getGlobalTensorClass)().prototype.concat=function(n,s){return this.throwIfDisposed(),n instanceof t.Tensor&&(n=[n]),(0,o.concat)([this,...n],s)}},2059,[1224,1174]);
__d(function(g,r,i,a,m,e,d){var o=r(d[0]);
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
(0,r(d[1]).getGlobalTensorClass)().prototype.conv1d=function(t,n,s,c,f,h){return this.throwIfDisposed(),(0,o.conv1d)(this,t,n,s,c,f,h)}},2060,[1246,1174]);
__d(function(g,r,i,a,m,e,d){var o=r(d[0]);
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
(0,r(d[1]).getGlobalTensorClass)().prototype.conv2dTranspose=function(s,n,t,p,c){return this.throwIfDisposed(),(0,o.conv2dTranspose)(this,s,n,t,p,c)}},2061,[1248,1174]);
__d(function(g,r,i,a,m,e,d){var o=r(d[0]);
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
(0,r(d[1]).getGlobalTensorClass)().prototype.conv2d=function(t,n,s,c,f,h){return this.throwIfDisposed(),(0,o.conv2d)(this,t,n,s,c,f,h)}},2062,[1247,1174]);
__d(function(g,r,i,a,m,e,d){var o=r(d[0]);
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
(0,r(d[1]).getGlobalTensorClass)().prototype.cos=function(){return this.throwIfDisposed(),(0,o.cos)(this)}},2063,[1205,1174]);
__d(function(g,r,i,a,m,e,d){var o=r(d[0]);
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
(0,r(d[1]).getGlobalTensorClass)().prototype.cosh=function(){return this.throwIfDisposed(),(0,o.cosh)(this)}},2064,[1205,1174]);
__d(function(g,r,i,a,m,e,d){var o=r(d[0]);
/**
   * @license
   * Copyright 2022 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the 'License');
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an 'AS IS' BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   */
/**
   * @license
   * Copyright 2022 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the 'License');
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an 'AS IS' BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   */
(0,r(d[1]).getGlobalTensorClass)().prototype.cumprod=function(t,s,n){return this.throwIfDisposed(),(0,o.cumprod)(this,t,s,n)}},2065,[1255,1174]);
__d(function(g,r,i,a,m,e,d){var s=r(d[0]);
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
(0,r(d[1]).getGlobalTensorClass)().prototype.cumsum=function(t,o,u){return this.throwIfDisposed(),(0,s.cumsum)(this,t,o,u)}},2066,[1256,1174]);
__d(function(g,r,i,a,m,e,d){var t=r(d[0]);
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
(0,r(d[1]).getGlobalTensorClass)().prototype.depthToSpace=function(o,p){return this.throwIfDisposed(),(0,t.depthToSpace)(this,o,p)}},2067,[1258,1174]);
__d(function(g,r,i,a,m,e,d){var t=r(d[0]);
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
(0,r(d[1]).getGlobalTensorClass)().prototype.depthwiseConv2d=function(o,s,n,h,p,f){return this.throwIfDisposed(),(0,t.depthwiseConv2d)(this,o,s,n,h,p,f)}},2068,[1259,1174]);
__d(function(g,r,i,a,m,e,d){var t=r(d[0]);
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
(0,r(d[1]).getGlobalTensorClass)().prototype.dilation2d=function(o,n,s,l,f){return this.throwIfDisposed(),(0,t.dilation2d)(this,o,n,s,l,f)}},2069,[1261,1174]);
__d(function(g,r,i,a,m,e,d){var o=r(d[0]);
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
(0,r(d[1]).getGlobalTensorClass)().prototype.divNoNan=function(t){return this.throwIfDisposed(),(0,o.divNoNan)(this,t)}},2070,[1262,1174]);
__d(function(g,r,i,a,m,e,d){var t=r(d[0]);
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
(0,r(d[1]).getGlobalTensorClass)().prototype.div=function(o){return this.throwIfDisposed(),(0,t.div)(this,o)}},2071,[1202,1174]);
__d(function(g,r,i,a,m,e,d){var t=r(d[0]);
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
(0,r(d[1]).getGlobalTensorClass)().prototype.dot=function(o){return this.throwIfDisposed(),(0,t.dot)(this,o)}},2072,[1267,1174]);
__d(function(g,r,i,a,m,e,d){var t=r(d[0]);
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
(0,r(d[1]).getGlobalTensorClass)().prototype.elu=function(){return this.throwIfDisposed(),(0,t.elu)(this)}},2073,[1269,1174]);
__d(function(g,r,i,a,m,e,d){var t=r(d[0]);
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
(0,r(d[1]).getGlobalTensorClass)().prototype.equal=function(o){return this.throwIfDisposed(),(0,t.equal)(this,o)}},2074,[1263,1174]);
__d(function(g,r,i,a,m,e,d){var t=r(d[0]);
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
(0,r(d[1]).getGlobalTensorClass)().prototype.erf=function(){return this.throwIfDisposed(),(0,t.erf)(this)}},2075,[1205,1174]);
__d(function(g,r,i,a,m,e,d){var o=r(d[0]);
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
(0,r(d[1]).getGlobalTensorClass)().prototype.euclideanNorm=function(t,n){return this.throwIfDisposed(),(0,o.euclideanNorm)(this,t,n)}},2076,[1272,1174]);
__d(function(g,r,i,a,m,e,d){var t=r(d[0]);
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
(0,r(d[1]).getGlobalTensorClass)().prototype.exp=function(){return this.throwIfDisposed(),(0,t.exp)(this)}},2077,[1205,1174]);
__d(function(g,r,i,a,m,e,d){var s=r(d[0]);
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
(0,r(d[1]).getGlobalTensorClass)().prototype.expandDims=function(t){return this.throwIfDisposed(),(0,s.expandDims)(this,t)}},2078,[1283,1174]);
__d(function(g,r,i,a,m,e,d){var t=r(d[0]);
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
(0,r(d[1]).getGlobalTensorClass)().prototype.expm1=function(){return this.throwIfDisposed(),(0,t.expm1)(this)}},2079,[1205,1174]);
__d(function(g,r,i,a,m,e,d){var t=r(d[0]);
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
(0,r(d[1]).getGlobalTensorClass)().prototype.fft=function(){return this.throwIfDisposed(),(0,t.fft)(this)}},2080,[1205,1174]);
__d(function(g,r,i,a,m,e,d){var t=r(d[0]);
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
(0,r(d[1]).getGlobalTensorClass)().prototype.flatten=function(){return this.throwIfDisposed(),(0,t.reshape)(this,[this.size])}},2081,[1221,1174]);
__d(function(g,r,i,a,m,e,d){var o=r(d[0]);
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
(0,r(d[1]).getGlobalTensorClass)().prototype.floor=function(){return this.throwIfDisposed(),(0,o.floor)(this)}},2082,[1205,1174]);
__d(function(g,r,i,a,m,e,d){var o=r(d[0]);
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
(0,r(d[1]).getGlobalTensorClass)().prototype.floorDiv=function(t){return this.throwIfDisposed(),(0,o.floorDiv)(this,t)}},2083,[1203,1174]);
__d(function(g,r,i,a,m,e,d){var t=r(d[0]);
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
(0,r(d[1]).getGlobalTensorClass)().prototype.gather=function(o,s,n){return this.throwIfDisposed(),(0,t.gather)(this,o,s,n)}},2084,[1288,1174]);
__d(function(g,r,i,a,m,e,d){var t=r(d[0]);
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
(0,r(d[1]).getGlobalTensorClass)().prototype.greaterEqual=function(o){return this.throwIfDisposed(),(0,t.greaterEqual)(this,o)}},2085,[1290,1174]);
__d(function(g,r,i,a,m,e,d){var t=r(d[0]);
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
(0,r(d[1]).getGlobalTensorClass)().prototype.greater=function(o){return this.throwIfDisposed(),(0,t.greater)(this,o)}},2086,[1289,1174]);
__d(function(g,r,i,a,m,e,d){var t=r(d[0]);
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
(0,r(d[1]).getGlobalTensorClass)().prototype.ifft=function(){return this.throwIfDisposed(),(0,t.ifft)(this)}},2087,[1205,1174]);
__d(function(g,r,i,a,m,e,d){var t=r(d[0]);
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
(0,r(d[1]).getGlobalTensorClass)().prototype.irfft=function(){return this.throwIfDisposed(),(0,t.irfft)(this)}},2088,[1205,1174]);
__d(function(g,r,i,a,m,e,d){var t=r(d[0]);
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
(0,r(d[1]).getGlobalTensorClass)().prototype.isFinite=function(){return this.throwIfDisposed(),(0,t.isFinite)(this)}},2089,[1205,1174]);
__d(function(g,r,i,a,m,e,d){var s=r(d[0]);
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
(0,r(d[1]).getGlobalTensorClass)().prototype.isInf=function(){return this.throwIfDisposed(),(0,s.isInf)(this)}},2090,[1205,1174]);
__d(function(g,r,i,a,m,e,d){var s=r(d[0]);
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
(0,r(d[1]).getGlobalTensorClass)().prototype.isNaN=function(){return this.throwIfDisposed(),(0,s.isNaN)(this)}},2091,[1205,1174]);
__d(function(g,r,i,a,m,e,d){var t=r(d[0]);
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
(0,r(d[1]).getGlobalTensorClass)().prototype.leakyRelu=function(o){return this.throwIfDisposed(),(0,t.leakyRelu)(this,o)}},2092,[1295,1174]);
__d(function(g,r,i,a,m,e,d){var s=r(d[0]);
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
(0,r(d[1]).getGlobalTensorClass)().prototype.lessEqual=function(t){return this.throwIfDisposed(),(0,s.lessEqual)(this,t)}},2093,[1297,1174]);
__d(function(g,r,i,a,m,e,d){var s=r(d[0]);
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
(0,r(d[1]).getGlobalTensorClass)().prototype.less=function(t){return this.throwIfDisposed(),(0,s.less)(this,t)}},2094,[1296,1174]);
__d(function(g,r,i,a,m,e,d){var o=r(d[0]);
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
(0,r(d[1]).getGlobalTensorClass)().prototype.localResponseNormalization=function(s,t,n,l){return this.throwIfDisposed(),(0,o.localResponseNormalization)(this,s,t,n,l)}},2095,[1299,1174]);
__d(function(g,r,i,a,m,e,d){var o=r(d[0]);
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
(0,r(d[1]).getGlobalTensorClass)().prototype.logSigmoid=function(){return this.throwIfDisposed(),(0,o.logSigmoid)(this)}},2096,[1205,1174]);
__d(function(g,r,i,a,m,e,d){var o=r(d[0]);
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
(0,r(d[1]).getGlobalTensorClass)().prototype.logSoftmax=function(t){return this.throwIfDisposed(),(0,o.logSoftmax)(this,t)}},2097,[1205,1174]);
__d(function(g,r,i,a,m,e,d){var o=r(d[0]);
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
(0,r(d[1]).getGlobalTensorClass)().prototype.logSumExp=function(t,s){return this.throwIfDisposed(),(0,o.logSumExp)(this,t,s)}},2098,[1308,1174]);
__d(function(g,r,i,a,m,e,d){var o=r(d[0]);
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
(0,r(d[1]).getGlobalTensorClass)().prototype.log=function(){return this.throwIfDisposed(),(0,o.log)(this)}},2099,[1205,1174]);
__d(function(g,r,i,a,m,e,d){var o=r(d[0]);
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
(0,r(d[1]).getGlobalTensorClass)().prototype.log1p=function(){return this.throwIfDisposed(),(0,o.log1p)(this)}},2100,[1205,1174]);
__d(function(g,r,i,a,m,e,d){var o=r(d[0]);
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
(0,r(d[1]).getGlobalTensorClass)().prototype.logicalAnd=function(t){return this.throwIfDisposed(),(0,o.logicalAnd)(this,t)}},2101,[1309,1174]);
__d(function(g,r,i,a,m,e,d){var o=r(d[0]);
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
(0,r(d[1]).getGlobalTensorClass)().prototype.logicalNot=function(){return this.throwIfDisposed(),(0,o.logicalNot)(this)}},2102,[1310,1174]);
__d(function(g,r,i,a,m,e,d){var o=r(d[0]);
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
(0,r(d[1]).getGlobalTensorClass)().prototype.logicalOr=function(t){return this.throwIfDisposed(),(0,o.logicalOr)(this,t)}},2103,[1311,1174]);
__d(function(g,r,i,a,m,e,d){var o=r(d[0]);
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
(0,r(d[1]).getGlobalTensorClass)().prototype.logicalXor=function(t){return this.throwIfDisposed(),(0,o.logicalXor)(this,t)}},2104,[1312,1174]);
__d(function(g,r,i,a,m,e,d){var t=r(d[0]);
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
(0,r(d[1]).getGlobalTensorClass)().prototype.matMul=function(o,s,n){return this.throwIfDisposed(),(0,t.matMul)(this,o,s,n)}},2105,[1225,1174]);
__d(function(g,r,i,a,m,e,d){var o=r(d[0]);(0,r(d[1]).getGlobalTensorClass)().prototype.maxPool=function(t,s,n,l){return this.throwIfDisposed(),(0,o.maxPool)(this,t,s,n,l)}},2106,[1315,1174]);
__d(function(g,r,i,a,m,e,d){var t=r(d[0]);
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
(0,r(d[1]).getGlobalTensorClass)().prototype.max=function(o,s){return this.throwIfDisposed(),(0,t.max)(this,o,s)}},2107,[1275,1174]);
__d(function(g,r,i,a,m,e,d){var t=r(d[0]);
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
(0,r(d[1]).getGlobalTensorClass)().prototype.maximum=function(o){return this.throwIfDisposed(),(0,t.maximum)(this,o)}},2108,[1318,1174]);
__d(function(g,r,i,a,m,e,d){var t=r(d[0]);
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
(0,r(d[1]).getGlobalTensorClass)().prototype.mean=function(n,o){return this.throwIfDisposed(),(0,t.mean)(this,n,o)}},2109,[1319,1174]);
__d(function(g,r,i,a,m,e,d){var t=r(d[0]);
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
(0,r(d[1]).getGlobalTensorClass)().prototype.min=function(n,o){return this.throwIfDisposed(),(0,t.min)(this,n,o)}},2110,[1276,1174]);
__d(function(g,r,i,a,m,e,d){var t=r(d[0]);
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
(0,r(d[1]).getGlobalTensorClass)().prototype.minimum=function(n){return this.throwIfDisposed(),(0,t.minimum)(this,n)}},2111,[1323,1174]);
__d(function(g,r,i,a,m,e,d){var o=r(d[0]);
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
(0,r(d[1]).getGlobalTensorClass)().prototype.mirrorPad=function(t,s){return this.throwIfDisposed(),(0,o.mirrorPad)(this,t,s)}},2112,[1324,1174]);
__d(function(g,r,i,a,m,e,d){var o=r(d[0]);
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
(0,r(d[1]).getGlobalTensorClass)().prototype.mod=function(t){return this.throwIfDisposed(),(0,o.mod)(this,t)}},2113,[1325,1174]);
__d(function(g,r,i,a,m,e,d){var t=r(d[0]);
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
(0,r(d[1]).getGlobalTensorClass)().prototype.mul=function(o){return this.throwIfDisposed(),(0,t.mul)(this,o)}},2114,[1204,1174]);
__d(function(g,r,i,a,m,e,d){var t=r(d[0]);
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
(0,r(d[1]).getGlobalTensorClass)().prototype.neg=function(){return this.throwIfDisposed(),(0,t.neg)(this)}},2115,[1205,1174]);
__d(function(g,r,i,a,m,e,d){var o=r(d[0]);
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
(0,r(d[1]).getGlobalTensorClass)().prototype.norm=function(t,n,s){return this.throwIfDisposed(),(0,o.norm)(this,t,n,s)}},2116,[1205,1174]);
__d(function(g,r,i,a,m,e,d){var t=r(d[0]);
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
(0,r(d[1]).getGlobalTensorClass)().prototype.notEqual=function(o){return this.throwIfDisposed(),(0,t.notEqual)(this,o)}},2117,[1329,1174]);
__d(function(g,r,i,a,m,e,d){var o=r(d[0]);
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
(0,r(d[1]).getGlobalTensorClass)().prototype.oneHot=function(t,n=1,s=0){return this.throwIfDisposed(),(0,o.oneHot)(this,t,n,s)}},2118,[1330,1174]);
__d(function(g,r,i,a,m,e,d){var o=r(d[0]);
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
(0,r(d[1]).getGlobalTensorClass)().prototype.onesLike=function(){return this.throwIfDisposed(),(0,o.onesLike)(this)}},2119,[1205,1174]);
__d(function(g,r,i,a,m,e,d){var t=r(d[0]);
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
(0,r(d[1]).getGlobalTensorClass)().prototype.pad=function(o,s){return this.throwIfDisposed(),(0,t.pad)(this,o,s)}},2120,[1333,1174]);
__d(function(g,r,i,a,m,e,d){var o=r(d[0]);(0,r(d[1]).getGlobalTensorClass)().prototype.pool=function(t,s,n,l,p,f){return this.throwIfDisposed(),(0,o.pool)(this,t,s,n,l,p,f)}},2121,[1338,1174]);
__d(function(g,r,i,a,m,e,d){var o=r(d[0]);
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
(0,r(d[1]).getGlobalTensorClass)().prototype.pow=function(t){return this.throwIfDisposed(),(0,o.pow)(this,t)}},2122,[1277,1174]);
__d(function(g,r,i,a,m,e,d){var t=r(d[0]);
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
(0,r(d[1]).getGlobalTensorClass)().prototype.prelu=function(o){return this.throwIfDisposed(),(0,t.prelu)(this,o)}},2123,[1340,1174]);
__d(function(g,r,i,a,m,e,d){var o=r(d[0]);
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
(0,r(d[1]).getGlobalTensorClass)().prototype.prod=function(t,s){return this.throwIfDisposed(),(0,o.prod)(this,t,s)}},2124,[1341,1174]);
__d(function(g,r,i,a,m,e,d){var o=r(d[0]);
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
(0,r(d[1]).getGlobalTensorClass)().prototype.reciprocal=function(){return this.throwIfDisposed(),(0,o.reciprocal)(this)}},2125,[1205,1174]);
__d(function(g,r,i,a,m,e,d){var t=r(d[0]);
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
(0,r(d[1]).getGlobalTensorClass)().prototype.relu=function(){return this.throwIfDisposed(),(0,t.relu)(this)}},2126,[1364,1174]);
__d(function(g,r,i,a,m,e,d){var t=r(d[0]);
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
(0,r(d[1]).getGlobalTensorClass)().prototype.relu6=function(){return this.throwIfDisposed(),(0,t.relu6)(this)}},2127,[1365,1174]);
__d(function(g,r,i,a,m,e,d){var s=r(d[0]);
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
(0,r(d[1]).getGlobalTensorClass)().prototype.reshapeAs=function(t){return this.throwIfDisposed(),(0,s.reshape)(this,t.shape)}},2128,[1221,1174]);
__d(function(g,r,i,a,m,e,d){var s=r(d[0]);
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
(0,r(d[1]).getGlobalTensorClass)().prototype.reshape=function(t){return this.throwIfDisposed(),(0,s.reshape)(this,t)}},2129,[1221,1174]);
__d(function(g,r,i,a,m,e,d){var s=r(d[0]);
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
(0,r(d[1]).getGlobalTensorClass)().prototype.resizeBilinear=function(t,n,o){return this.throwIfDisposed(),(0,s.resizeBilinear)(this,t,n,o)}},2130,[1449,1174]);
__d(function(g,r,i,a,m,e,d){var s=r(d[0]);
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
(0,r(d[1]).getGlobalTensorClass)().prototype.resizeNearestNeighbor=function(t,o,n){return this.throwIfDisposed(),(0,s.resizeNearestNeighbor)(this,t,o,n)}},2131,[1450,1174]);
__d(function(g,r,i,a,m,e,d){var s=r(d[0]);
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
(0,r(d[1]).getGlobalTensorClass)().prototype.reverse=function(t){return this.throwIfDisposed(),(0,s.reverse)(this,t)}},2132,[1366,1174]);
__d(function(g,r,i,a,m,e,d){var t=r(d[0]);
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
(0,r(d[1]).getGlobalTensorClass)().prototype.rfft=function(){return this.throwIfDisposed(),(0,t.rfft)(this)}},2133,[1205,1174]);
__d(function(g,r,i,a,m,e,d){var o=r(d[0]);
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
(0,r(d[1]).getGlobalTensorClass)().prototype.round=function(){return this.throwIfDisposed(),(0,o.round)(this)}},2134,[1205,1174]);
__d(function(g,r,i,a,m,e,d){var t=r(d[0]);
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
(0,r(d[1]).getGlobalTensorClass)().prototype.rsqrt=function(){return this.throwIfDisposed(),(0,t.rsqrt)(this)}},2135,[1205,1174]);
__d(function(g,r,i,a,m,e,d){var s=r(d[0]);
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
(0,r(d[1]).getGlobalTensorClass)().prototype.selu=function(){return this.throwIfDisposed(),(0,s.selu)(this)}},2136,[1373,1174]);
__d(function(g,r,i,a,m,e,d){var o=r(d[0]);
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
(0,r(d[1]).getGlobalTensorClass)().prototype.separableConv2d=function(s,t,n,l,p,b){return this.throwIfDisposed(),(0,o.separableConv2d)(this,s,t,n,l,p,b)}},2137,[1374,1174]);
__d(function(g,r,i,a,m,e,d){var o=r(d[0]);
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
(0,r(d[1]).getGlobalTensorClass)().prototype.sigmoid=function(){return this.throwIfDisposed(),(0,o.sigmoid)(this)}},2138,[1205,1174]);
__d(function(g,r,i,a,m,e,d){var s=r(d[0]);
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
(0,r(d[1]).getGlobalTensorClass)().prototype.sign=function(){return this.throwIfDisposed(),(0,s.sign)(this)}},2139,[1205,1174]);
__d(function(g,r,i,a,m,e,d){var s=r(d[0]);
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
(0,r(d[1]).getGlobalTensorClass)().prototype.sin=function(){return this.throwIfDisposed(),(0,s.sin)(this)}},2140,[1205,1174]);
__d(function(g,r,i,a,m,e,d){var s=r(d[0]);
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
(0,r(d[1]).getGlobalTensorClass)().prototype.sinh=function(){return this.throwIfDisposed(),(0,s.sinh)(this)}},2141,[1205,1174]);
__d(function(g,r,i,a,m,e,d){var s=r(d[0]);
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
(0,r(d[1]).getGlobalTensorClass)().prototype.slice=function(t,o){return this.throwIfDisposed(),(0,s.slice)(this,t,o)}},2142,[1205,1174]);
__d(function(g,r,i,a,m,e,d){var t=r(d[0]);
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
(0,r(d[1]).getGlobalTensorClass)().prototype.softmax=function(o){return this.throwIfDisposed(),(0,t.softmax)(this,o)}},2143,[1205,1174]);
__d(function(g,r,i,a,m,e,d){var s=r(d[0]);
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
(0,r(d[1]).getGlobalTensorClass)().prototype.softplus=function(){return this.throwIfDisposed(),(0,s.softplus)(this)}},2144,[1205,1174]);
__d(function(g,r,i,a,m,e,d){var t=r(d[0]);
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
(0,r(d[1]).getGlobalTensorClass)().prototype.spaceToBatchND=function(o,s){return this.throwIfDisposed(),(0,t.spaceToBatchND)(this,o,s)}},2145,[1339,1174]);
__d(function(g,r,i,a,m,e,d){var t=r(d[0]);
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
(0,r(d[1]).getGlobalTensorClass)().prototype.split=function(s,o){return this.throwIfDisposed(),(0,t.split)(this,s,o)}},2146,[1388,1174]);
__d(function(g,r,i,a,m,e,d){var t=r(d[0]);
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
(0,r(d[1]).getGlobalTensorClass)().prototype.sqrt=function(){return this.throwIfDisposed(),(0,t.sqrt)(this)}},2147,[1205,1174]);
__d(function(g,r,i,a,m,e,d){var s=r(d[0]);
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
(0,r(d[1]).getGlobalTensorClass)().prototype.square=function(){return this.throwIfDisposed(),(0,s.square)(this)}},2148,[1205,1174]);
__d(function(g,r,i,a,m,e,d){var s=r(d[0]);
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
(0,r(d[1]).getGlobalTensorClass)().prototype.squaredDifference=function(t){return this.throwIfDisposed(),(0,s.squaredDifference)(this,t)}},2149,[1389,1174]);
__d(function(g,r,i,a,m,e,d){var s=r(d[0]);
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
(0,r(d[1]).getGlobalTensorClass)().prototype.squeeze=function(t){return this.throwIfDisposed(),(0,s.squeeze)(this,t)}},2150,[1390,1174]);
__d(function(g,r,i,a,m,e,d){var t=r(d[0]),s=r(d[1]);
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
(0,s.getGlobalTensorClass)().prototype.stack=function(o,n){this.throwIfDisposed();const c=o instanceof s.Tensor?[this,o]:[this,...o];return(0,t.stack)(c,n)}},2151,[1391,1174]);
__d(function(g,r,i,a,m,e,d){var t=r(d[0]);
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
(0,r(d[1]).getGlobalTensorClass)().prototype.step=function(s){return this.throwIfDisposed(),(0,t.step)(this,s)}},2152,[1205,1174]);
__d(function(g,r,i,a,m,e,d){var t=r(d[0]);
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
(0,r(d[1]).getGlobalTensorClass)().prototype.stridedSlice=function(s,o,n,l,c,f,h,p){return this.throwIfDisposed(),(0,t.stridedSlice)(this,s,o,n,l,c,f,h,p)}},2153,[1205,1174]);
__d(function(g,r,i,a,m,e,d){var s=r(d[0]);
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
(0,r(d[1]).getGlobalTensorClass)().prototype.sub=function(t){return this.throwIfDisposed(),(0,s.sub)(this,t)}},2154,[1307,1174]);
__d(function(g,r,i,a,m,e,d){var s=r(d[0]);
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
(0,r(d[1]).getGlobalTensorClass)().prototype.sum=function(t,o){return this.throwIfDisposed(),(0,s.sum)(this,t,o)}},2155,[1281,1174]);
__d(function(g,r,i,a,m,e,d){var t=r(d[0]);
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
(0,r(d[1]).getGlobalTensorClass)().prototype.tan=function(){return this.throwIfDisposed(),(0,t.tan)(this)}},2156,[1205,1174]);
__d(function(g,r,i,a,m,e,d){var t=r(d[0]);
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
(0,r(d[1]).getGlobalTensorClass)().prototype.tanh=function(){return this.throwIfDisposed(),(0,t.tanh)(this)}},2157,[1205,1174]);
__d(function(g,r,i,a,m,e,d){var t=r(d[0]);
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
(0,r(d[1]).getGlobalTensorClass)().prototype.tile=function(o){return this.throwIfDisposed(),(0,t.tile)(this,o)}},2158,[1286,1174]);
__d(function(g,r,i,a,m,e,d){var o=r(d[0]);
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
(0,r(d[1]).getGlobalTensorClass)().prototype.toBool=function(){return this.throwIfDisposed(),(0,o.cast)(this,'bool')}},2159,[1205,1174]);
__d(function(g,r,i,a,m,e,d){var t=r(d[0]);
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
(0,r(d[1]).getGlobalTensorClass)().prototype.toFloat=function(){return this.throwIfDisposed(),(0,t.cast)(this,'float32')}},2160,[1205,1174]);
__d(function(g,r,i,a,m,e,d){var t=r(d[0]);
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
(0,r(d[1]).getGlobalTensorClass)().prototype.toInt=function(){return this.throwIfDisposed(),(0,t.cast)(this,'int32')}},2161,[1205,1174]);
__d(function(g,r,i,a,m,e,d){var t=r(d[0]);
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
(0,r(d[1]).getGlobalTensorClass)().prototype.topk=function(o,s){return this.throwIfDisposed(),(0,t.topk)(this,o,s)}},2162,[1403,1174]);
__d(function(g,r,i,a,m,e,d){var s=r(d[0]);
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
(0,r(d[1]).getGlobalTensorClass)().prototype.transpose=function(t){return this.throwIfDisposed(),(0,s.transpose)(this,t)}},2163,[1413,1174]);
__d(function(g,r,i,a,m,e,d){var t=r(d[0]);
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
(0,r(d[1]).getGlobalTensorClass)().prototype.unique=function(n){return this.throwIfDisposed(),(0,t.unique)(this,n)}},2164,[1405,1174]);
__d(function(g,r,i,a,m,e,d){var t=r(d[0]);
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
(0,r(d[1]).getGlobalTensorClass)().prototype.unsortedSegmentSum=function(n,o){return this.throwIfDisposed(),(0,t.unsortedSegmentSum)(this,n,o)}},2165,[1406,1174]);
__d(function(g,r,i,a,m,e,d){var t=r(d[0]);
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
(0,r(d[1]).getGlobalTensorClass)().prototype.unstack=function(s){return this.throwIfDisposed(),(0,t.unstack)(this,s)}},2166,[1407,1174]);
__d(function(g,r,i,a,m,e,d){var t=r(d[0]);
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
(0,r(d[1]).getGlobalTensorClass)().prototype.where=function(o,s){return this.throwIfDisposed(),(0,t.where)(o,this,s)}},2167,[1265,1174]);
__d(function(g,r,i,a,m,e,d){var o=r(d[0]);
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
(0,r(d[1]).getGlobalTensorClass)().prototype.zerosLike=function(){return this.throwIfDisposed(),(0,o.zerosLike)(this)}},2168,[1205,1174]);
__d(function(g,_r,_i,a,m,_e,d){Object.defineProperty(_e,"__esModule",{value:!0}),Object.defineProperty(_e,"Callback",{enumerable:!0,get:function(){return l.Callback}}),Object.defineProperty(_e,"CallbackList",{enumerable:!0,get:function(){return u.CallbackList}}),Object.defineProperty(_e,"CustomCallback",{enumerable:!0,get:function(){return u.CustomCallback}}),Object.defineProperty(_e,"EarlyStopping",{enumerable:!0,get:function(){return l.EarlyStopping}}),Object.defineProperty(_e,"History",{enumerable:!0,get:function(){return u.History}}),Object.defineProperty(_e,"InputSpec",{enumerable:!0,get:function(){return c.InputSpec}}),Object.defineProperty(_e,"LayerVariable",{enumerable:!0,get:function(){return y.LayerVariable}}),Object.defineProperty(_e,"LayersModel",{enumerable:!0,get:function(){return b.LayersModel}}),Object.defineProperty(_e,"RNN",{enumerable:!0,get:function(){return s.RNN}}),Object.defineProperty(_e,"Sequential",{enumerable:!0,get:function(){return p.Sequential}}),Object.defineProperty(_e,"SymbolicTensor",{enumerable:!0,get:function(){return c.SymbolicTensor}}),Object.defineProperty(_e,"callbacks",{enumerable:!0,get:function(){return l.callbacks}}),_e.initializers=_e.constraints=void 0,Object.defineProperty(_e,"input",{enumerable:!0,get:function(){return f.input}}),_e.layers=void 0,Object.defineProperty(_e,"loadLayersModel",{enumerable:!0,get:function(){return f.loadLayersModel}}),_e.metrics=void 0,Object.defineProperty(_e,"model",{enumerable:!0,get:function(){return f.model}}),_e.models=void 0,Object.defineProperty(_e,"registerCallbackConstructor",{enumerable:!0,get:function(){return f.registerCallbackConstructor}}),_e.regularizers=void 0,Object.defineProperty(_e,"sequential",{enumerable:!0,get:function(){return f.sequential}}),Object.defineProperty(_e,"version_layers",{enumerable:!0,get:function(){return O.version}}),_r(d[0]),_r(d[1]),_r(d[2]);var e=j(_r(d[3]));_e.constraints=e;var r=j(_r(d[4]));_e.initializers=r;var t=j(_r(d[5]));_e.layers=t;var n=j(_r(d[6]));_e.metrics=n;var i=j(_r(d[7]));_e.models=i;var o=j(_r(d[8]));_e.regularizers=o;var u=_r(d[9]),l=_r(d[10]),c=_r(d[11]),b=_r(d[12]),f=_r(d[13]),s=_r(d[14]),p=_r(d[15]),y=_r(d[16]),O=_r(d[17]);function j(e,r){if("function"==typeof WeakMap)var t=new WeakMap,n=new WeakMap;return(j=function(e,r){if(!r&&e&&e.__esModule)return e;var i,o,u={__proto__:null,default:e};if(null===e||"object"!=typeof e&&"function"!=typeof e)return u;if(i=r?n:t){if(i.has(e))return i.get(e);i.set(e,u)}for(const r in e)"default"!==r&&{}.hasOwnProperty.call(e,r)&&((o=(i=Object.defineProperty)&&Object.getOwnPropertyDescriptor(e,r))&&(o.get||o.set)?i(u,r,o):u[r]=e[r]);return u})(e,r)}},2169,[2170,1158,1922,2188,2190,2191,2233,2234,2235,2193,2236,2177,2195,2192,2216,2208,2187,2203]);
__d(function(g,r,i,a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.ENV=void 0;var _=r(d[0]),t=r(d[1]);(e.ENV=(0,_.env)()).registerFlag('TOPOLOGICAL_SORT_CACHE_MAX_ENTRIES',()=>100,t.updateCacheMaxEntries)},2170,[1158,2171]);
__d(function(g,r,_i,a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.cachedSorted=e.cachedRecipientCounts=e.FeedDict=void 0,e.execute=function(t,s,u,l){const y=null!=u&&u.training,k=Array.isArray(t),V=k?t:[t],w=V.map(n=>n.name),T=[],x=s.names();for(const n of w)-1!==x.indexOf(n)?T.push(s.getValue(n)):T.push(null);null!=l&&(l.maxNumTensors=-1/0,l.minNumTensors=1/0);const b=w.join(',')+'|'+s.names().sort().join(',');let E,L=h.get(b);if(null==L){const n=p(V,s);L=n.sorted,E=n.recipientCounts,h.put(b,L),f.put(b,E)}E={},y||Object.assign(E,f.get(b));const N=new c(s);for(let t=0;t<L.length;++t){if(null!=l){const t=(0,n.memory)().numTensors;t>l.maxNumTensors&&(l.maxNumTensors=t),t<l.minNumTensors&&(l.minNumTensors=t)}const c=L[t],h=c.sourceLayer;if(h instanceof i.InputLayer)continue;const f=[],p=[],k=[];let V=!1;for(const n of c.inputs){const t=N.getValue(n),o=N.getMask(n);f.push(t),p.push(o),null!=o&&(V=!0),y||(E[n.name]--,0!==E[n.name]||s.hasKey(n)||-1!==w.indexOf(n.name)||t.isDisposed||!0===n.sourceLayer.stateful||k.push(t))}V&&((u=u||{}).mask=p[0]);const x=(0,o.toList)(h.apply(f,u));let b=null;h.supportsMasking&&(b=h.computeMask(f,p));const S=M(c),$=Array.isArray(S)?S:[S];for(let n=0;n<$.length;++n){N.hasKey($[n])||N.add($[n],x[n],Array.isArray(b)?b[0]:b);const t=w.indexOf($[n].name);-1!==t&&(T[t]=x[n])}y||(0,n.dispose)(k)}return N.disposeMasks(),k?T:T[0]},e.getTopologicalSortAndRecipientCountsForOneFetch=k,e.updateCacheMaxEntries=function(n){null!=h&&h.setMaxEntries(n);null!=f&&f.setMaxEntries(n)};var n=r(d[0]),t=r(d[1]),s=r(d[2]),o=r(d[3]),i=r(d[4]),u=r(d[5]);
/**
   * @license
   * Copyright 2018 Google LLC
   *
   * Use of this source code is governed by an MIT-style
   * license that can be found in the LICENSE file or at
   * https://opensource.org/licenses/MIT.
   * =============================================================================
   */
function l(s,o){if(null==s.dtype||s.dtype===o.dtype)return o;try{return(0,n.cast)(o,s.dtype)}catch(n){throw new t.ValueError(`The dtype of the feed (${o.dtype}) can not be cast to the dtype of the key '${s.name}' (${s.dtype}).`)}}class c{constructor(n){if(this.id2Value={},this.id2Mask={},this.name2Id={},n instanceof c)for(const t in n.id2Value)this.id2Value[t]=n.id2Value[t],t in n.id2Mask&&(this.id2Mask[t]=n.id2Mask[t]);else{if(null==n)return;for(const t of n)this.add(t.key,t.value)}}add(n,s,o){if(null!=this.id2Value[n.id])throw new t.ValueError(`Duplicate key: name=${n.name}, id=${n.id}`);return this.id2Value[n.id]=l(n,s),this.name2Id[n.name]=n.id,null!=o&&(this.id2Mask[n.id]=o),this}addFeed(n){this.add(n.key,n.value)}hasKey(n){return null!=this.id2Value[n.id]}names(){return Object.keys(this.name2Id)}getValue(n){if(n instanceof u.SymbolicTensor){if(null==this.id2Value[n.id])throw new t.ValueError(`Nonexistent key: ${n.name}`);return this.id2Value[n.id]}{const s=this.name2Id[n];if(null==s)throw new t.ValueError(`Feed dict has no SymbolicTensor name: ${n}`);return this.id2Value[s]}}getMask(n){if(n instanceof u.SymbolicTensor){if(null==this.id2Value[n.id])throw new t.ValueError(`Nonexistent key: ${n.name}`);return this.id2Mask[n.id]}{const s=this.name2Id[n];if(null==s)throw new t.ValueError(`Feed dict has no SymbolicTensor name: ${n}`);return this.id2Mask[s]}}disposeMasks(){null!=this.id2Mask&&(0,n.dispose)(this.id2Mask)}}e.FeedDict=c;const h=e.cachedSorted=new s.LruCache,f=e.cachedRecipientCounts=new s.LruCache;function p(t,s){n.util.assert(null!=t&&t.length>0,()=>"Expected at least one fetch, got none");let o=[],i={};if(1===t.length){const n=k(t[0],s);o=n.sorted,i=n.recipientMap}else{const n=new Set;for(const u of t){const{sorted:t,recipientMap:l}=k(u,s);for(const s of t)n.has(s.name)||(o.push(s),n.add(s.name));for(const n in l)null==i[n]&&(i[n]=new Set),l[n].forEach(t=>i[n].add(t))}}return{sorted:o,recipientCounts:y(i)}}function y(n){const t={};for(const s in n)t[s]=n[s].size;return t}function k(n,t){const s=new Set,o=[],i={};for(const n of t.names())s.add(n);const u=[],l=[];for(u.push(n);u.length>0;){const n=u[u.length-1];if(s.has(n.name)){u.pop();continue}const t=l[l.length-1]===u.length-1;if(0===n.inputs.length||t)u.pop(),o.push(n),s.add(n.name),t&&l.pop();else{l.push(u.length-1);for(const t of n.inputs)null==i[t.name]&&(i[t.name]=new Set),i[t.name].add(n.name),s.has(t.name)||u.push(t)}}return{sorted:o,recipientMap:i}}function M(n){let t;if(1===n.sourceLayer.inboundNodes.length)t=n.sourceLayer.output;else{let s=null;for(let t=0;t<n.sourceLayer.inboundNodes.length;++t)for(const o of n.sourceLayer.inboundNodes[t].outputTensors)if(o.id===n.id){s=t;break}t=n.sourceLayer.getOutputAt(s)}return t}},2171,[1158,2172,2173,2174,2175,2177]);
__d(function(g,r,i,a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.ValueError=e.RuntimeError=e.NotImplementedError=e.IndexError=e.AttributeError=e.AssertionError=void 0;
/**
   * @license
   * Copyright 2018 Google LLC
   *
   * Use of this source code is governed by an MIT-style
   * license that can be found in the LICENSE file or at
   * https://opensource.org/licenses/MIT.
   * =============================================================================
   */
class t extends Error{constructor(o){super(o),Object.setPrototypeOf(this,t.prototype)}}e.AttributeError=t;class o extends Error{constructor(t){super(t),Object.setPrototypeOf(this,o.prototype)}}e.RuntimeError=o;class s extends Error{constructor(t){super(t),Object.setPrototypeOf(this,s.prototype)}}e.ValueError=s;class p extends Error{constructor(t){super(t),Object.setPrototypeOf(this,p.prototype)}}e.NotImplementedError=p;class c extends Error{constructor(t){super(t),Object.setPrototypeOf(this,c.prototype)}}e.AssertionError=c;class n extends Error{constructor(t){super(t),Object.setPrototypeOf(this,n.prototype)}}e.IndexError=n},2172,[]);
__d(function(g,r,_i,a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.LruCache=void 0;e.LruCache=
/**
   * @license
   * Copyright 2022 Google LLC
   *
   * Use of this source code is governed by an MIT-style
   * license that can be found in the LICENSE file or at
   * https://opensource.org/licenses/MIT.
   * =============================================================================
   */
class{constructor(t){this.maxEntries=t||100,this.cache=new Map}get(t){let s;return this.cache.has(t)&&(s=this.cache.get(t),this.cache.delete(t),this.cache.set(t,s)),s}put(t,s){if(this.cache.has(t))this.cache.delete(t);else if(this.cache.size>=this.maxEntries){const t=this.cache.keys().next().value;this.cache.delete(t)}this.cache.set(t,s)}getMaxEntries(){return this.maxEntries}setMaxEntries(t){if(t<0)throw new Error(`The maxEntries of LRU caches must be at least 0, but got ${t}.`);if(this.maxEntries>t)for(let s=0;s<this.maxEntries-t;s++){const t=this.cache.keys().next().value;this.cache.delete(t)}this.maxEntries=t}}},2173,[]);
__d(function(g,r,_i,_a,_m,_e,d){Object.defineProperty(_e,"__esModule",{value:!0}),_e.assert=t,_e.assertPositiveInteger=function n(t,o){Array.isArray(t)?(e.util.assert(t.length>0,()=>`${o} is unexpectedly an empty array.`),t.forEach((e,t)=>n(e,`element ${t+1} of ${o}`))):e.util.assert(Number.isInteger(t)&&t>0,()=>`Expected ${o} to be a positive integer, but got ${u(t)}.`)},_e.checkArrayTypeAndLength=function(e,n,o=0,i=1/0){return t(o>=0),t(i>=o),Array.isArray(e)&&e.length>=o&&e.length<=i&&e.every(e=>typeof e===n)},_e.checkStringTypeUnionValue=function(e,t,o){if(null==o)return;if(e.indexOf(o)<0)throw new n.ValueError(`${o} is not a valid ${t}.  Valid values are ${e} or null/undefined.`)},_e.count=function(e,n){let t=0;for(const o of e)o===n&&t++;return t},_e.debounce=function(n,t,o){let i,s=null!=o?o():e.util.now();return(...a)=>{const u=null!=o?o():e.util.now();return u-s<t||(s=u,i=n(...a)),i}},_e.deserializeKerasObject=function(e,t={},o={},a="object",u=!1){if('string'==typeof e){const s=e;let u;if(s in o)u=o[s];else if(s in i)u=i[s];else if(u=t[s],null==u)throw new n.ValueError(`Unknown ${a}: ${e}. This may be due to one of the following reasons:\n1. The ${a} is defined in Python, in which case it needs to be ported to TensorFlow.js or your JavaScript code.\n2. The custom ${a} is defined in JavaScript, but is not registered properly with tf.serialization.registerClass().`);return u}{const l=e;if(null==l.className||null==l.config)throw new n.ValueError(`${a}: Improper config format: ${JSON.stringify(l)}.\n'className' and 'config' must set.`);const f=l.className;let c,y;if(f in o?[c,y]=o[f]:f in i?[c,y]=i.className:f in t&&([c,y]=t[f]),null==c)throw new n.ValueError(`Unknown ${a}: ${f}. This may be due to one of the following reasons:\n1. The ${a} is defined in Python, in which case it needs to be ported to TensorFlow.js or your JavaScript code.\n2. The custom ${a} is defined in JavaScript, but is not registered properly with tf.serialization.registerClass().`);if(null!=y){const e={};for(const n of Object.keys(i))e[n]=i[n];for(const n of Object.keys(o))e[n]=o[n];l.config.customObjects=e;const n=Object.assign({},i);for(const e of Object.keys(o))i[e]=o[e];s(l.config);const t=y(c,l.config,o,u);return i=Object.assign({},n),t}{const e=Object.assign({},i);for(const e of Object.keys(o))i[e]=o[e];const n=new c(l.config);return i=Object.assign({},e),n}}},_e.formatAsFriendlyString=u,_e.getCartesianProductOfValues=function(...e){t(e.length>0,'arrayOfValues is empty');for(const n of e)t(Array.isArray(n),'one of the values is not an array'),t(n.length>0,'one of the values is empty');return e.reduce((e,n)=>0===e.length?n.map(e=>[e]):n.map(n=>e.map(e=>[...e,n])).reduce((e,n)=>e.concat(n),[]),[])},_e.isObjectEmpty=function(e){if(null==e)throw new n.ValueError(`Invalid value in obj: ${JSON.stringify(e)}`);for(const n in e)if(e.hasOwnProperty(n))return!1;return!0},_e.mapActivationToFusedKernel=function(e){if('relu'===e)return'relu';if('linear'===e)return'linear';if('elu'===e)return'elu';return null},_e.numberCompare=a,_e.objectListUid=function(e){const t=o(e);let i='';for(const e of t){if(null==e.id)throw new n.ValueError(`Object ${e} passed to objectListUid without an id`);''!==i&&(i+=', '),i=`${i}${Math.abs(e.id)}`}return i},_e.pyListRepeat=
/**
   * @license
   * Copyright 2018 Google LLC
   *
   * Use of this source code is governed by an MIT-style
   * license that can be found in the LICENSE file or at
   * https://opensource.org/licenses/MIT.
   * =============================================================================
   */
function(e,n){if(Array.isArray(e)){let t=[];for(let o=0;o<n;o++)t=t.concat(e);return t}{const t=new Array(n);return t.fill(e),t}},_e.reverseNumberCompare=function(e,n){return-1*a(e,n)},_e.serializeKerasObject=function(e){if(null==e)return null;const n={};return n.className=e.getClassName(),n.config=e.getConfig(),n},_e.singletonOrArray=function(e){if(1===e.length)return e[0];return e},_e.stringToDType=function(e){if('float32'===e)return'float32';throw new n.ValueError(`Invalid dtype: ${e}`)},_e.stringsEqual=function(e,n){if(null==e||null==n)return e===n;if(e.length!==n.length)return!1;for(let t=0;t<e.length;++t)if(e[t]!==n[t])return!1;return!0},_e.toCamelCase=function(e){if(e.length<=1)return e;if(-1===e.indexOf('_'))return e;return e.replace(/[_]+(\w|$)/g,(e,n)=>n.toUpperCase())},_e.toList=o,_e.toSnakeCase=function(e){const n=e.replace(/(.)([A-Z][a-z0-9]+)/g,'$1_$2').replace(/([a-z])([A-Z])/g,'$1_$2').toLowerCase();if('_'!==n[0])return n;return'private'+n},_e.unique=function(e){if(null==e)return e;const n=[];for(const t of e)-1===n.indexOf(t)&&n.push(t);return n};var e=r(d[0]),n=r(d[1]);function t(e,t){if(!e)throw new n.AssertionError(t)}function o(e){return Array.isArray(e)?e:[e]}let i={};function s(e){if(null!=e&&'object'==typeof e)if(Array.isArray(e))e.forEach(e=>s(e));else{const n=Object.keys(e);for(const t of n){const n=e[t];null!=n&&'object'==typeof n&&(Array.isArray(n)||'ndarray'!==n.type||'number'!=typeof n.value?s(n):e[t]=n.value)}}}function a(e,n){return e<n?-1:e>n?1:0}function u(e){return null===e?'null':Array.isArray(e)?'['+e.map(e=>u(e)).join(',')+']':'string'==typeof e?`"${e}"`:`${e}`}},2174,[1158,2172]);
__d(function(g,r,i,a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.Input=function(t){if(null==t.batchShape&&null==t.shape)throw new Error("Please provide to Input either a `shape` or a `batchShape` argument. Note that `shape` does not include the batch dimension.");if(null!=t.batchShape&&null!=t.shape)throw new p.ValueError("Please provide either a `shape` or `batchShape` argument to Input, but not both.");let n=t.batchShape;null!=t.shape&&null==n&&(n=[null].concat(t.shape));let s=t.dtype;null==s&&(s='float32');const h=new u({batchInputShape:n,name:t.name,dtype:s,sparse:t.sparse});return h.inboundNodes[0].outputTensors[0]},e.InputLayer=void 0;var t=r(d[0]),n=r(d[1]),p=r(d[2]),s=r(d[3]);
/**
   * @license
   * Copyright 2018 Google LLC
   *
   * Use of this source code is governed by an MIT-style
   * license that can be found in the LICENSE file or at
   * https://opensource.org/licenses/MIT.
   * =============================================================================
   */
class u extends s.Layer{constructor(t){if(super({dtype:t.dtype,name:null!=t.name?t.name:(0,n.getUid)('input').toString()}),null==t.batchSize&&(t.batchSize=null),null==t.sparse&&(t.sparse=!1),this.trainable=!1,this.built=!0,this.sparse=t.sparse,null!=t.inputShape&&null!=t.batchInputShape)throw new p.ValueError("Only provide the inputShape OR batchInputShape argument to inputLayer, not both at the same time.");let u=t.batchInputShape;if(null==u){if(null==t.inputShape)throw new p.ValueError("An InputLayer should be passed either a `batchInputShape` or an `inputShape`.");u=[t.batchSize].concat(t.inputShape)}else if(null!=t.batchSize)throw new p.ValueError("Cannot specify batchSize if batchInputShape is specified when creating an InputLayer.");const h=t.dtype||'float32';this.batchInputShape=u,this.dtype=h,this.inputSpec=[{shape:u}];const o=new s.SymbolicTensor(this.dtype,this.batchInputShape,this,[],{},this.name);o.nodeIndex=0,o.tensorIndex=0,new s.Node({outboundLayer:this,inboundLayers:[],nodeIndices:[],tensorIndices:[],inputTensors:[o],outputTensors:[o],inputMasks:[null],outputMasks:[null],inputShapes:[u],outputShapes:[u]})}apply(t,n){throw new p.ValueError(`Cannot pass any input to an InputLayer's apply() method. InputLayer name: ${this.name}`)}dispose(){return{refCountAfterDispose:this._refCount,numDisposedVariables:0}}getConfig(){return{batchInputShape:this.batchInputShape,dtype:this.dtype,sparse:this.sparse,name:this.name}}}e.InputLayer=u,u.className='InputLayer',t.serialization.registerClass(u)},2175,[1158,2176,2172,2177]);
__d(function(g,r,i,a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.getNextUniqueTensorId=function(){return n++},e.getUid=function(n=""){n in t||(t[n]=0);return t[n]+=1,n+t[n].toString()};
/**
   * @license
   * Copyright 2018 Google LLC
   *
   * Use of this source code is governed by an MIT-style
   * license that can be found in the LICENSE file or at
   * https://opensource.org/licenses/MIT.
   * =============================================================================
   */
let n=0;const t={}},2176,[]);
__d(function(t,e,n,i,s,o,r){Object.defineProperty(o,"__esModule",{value:!0}),o.SymbolicTensor=o.Node=o.Layer=o.InputSpec=void 0,o.getSourceInputs=function t(e,n,i){(null==n||null!=i&&i>0)&&(n=e.sourceLayer,i=e.nodeIndex);if(0===n.inboundNodes.length)return[e];{const e=n.inboundNodes[i];if(0===e.inboundLayers.length)return e.inputTensors;{const n=[];for(let i=0;i<e.inboundLayers.length;i++){const s=e.inputTensors[i],o=e.inboundLayers[i],r=e.nodeIndices[i],a=t(s,o,r);for(const t of a)-1===n.indexOf(t)&&n.push(t)}return n}}};var a=e(r[0]),h=e(r[1]),u=e(r[2]),l=e(r[3]),p=e(r[4]),d=b(e(r[5])),c=b(e(r[6])),f=b(e(r[7])),g=e(r[8]);function b(t,e){if("function"==typeof WeakMap)var n=new WeakMap,i=new WeakMap;return(b=function(t,e){if(!e&&t&&t.__esModule)return t;var s,o,r={__proto__:null,default:t};if(null===t||"object"!=typeof t&&"function"!=typeof t)return r;if(s=e?i:n){if(s.has(t))return s.get(t);s.set(t,r)}for(const e in t)"default"!==e&&{}.hasOwnProperty.call(t,e)&&((o=(s=Object.defineProperty)&&Object.getOwnPropertyDescriptor(t,e))&&(o.get||o.set)?s(r,e,o):r[e]=t[e]);return r})(t,e)}
/**
   * @license
   * Copyright 2018 Google LLC
   *
   * Use of this source code is governed by an MIT-style
   * license that can be found in the LICENSE file or at
   * https://opensource.org/licenses/MIT.
   * =============================================================================
   */o.InputSpec=class{constructor(t){this.dtype=t.dtype,this.shape=t.shape,null!=t.shape?this.ndim=t.shape.length:this.ndim=t.ndim,this.maxNDim=t.maxNDim,this.minNDim=t.minNDim,this.axes=t.axes||{}}};class y{constructor(t,e,n,i,s,o,r){this.dtype=t,this.shape=e,this.sourceLayer=n,this.inputs=i,this.callArgs=s,this.outputTensorIndex=r,this.id=(0,h.getNextUniqueTensorId)(),null!=o&&(this.originalName=(0,u.getScopedTensorName)(o),this.name=(0,u.getUniqueTensorName)(this.originalName)),this.rank=e.length}}o.SymbolicTensor=y;let m=0;class w{constructor(t,e){this.callArgs=e,this.id=m++,this.outboundLayer=t.outboundLayer,this.inboundLayers=t.inboundLayers,this.nodeIndices=t.nodeIndices,this.tensorIndices=t.tensorIndices,this.inputTensors=t.inputTensors,this.outputTensors=t.outputTensors,this.inputMasks=t.inputMasks,this.outputMasks=t.outputMasks,this.inputShapes=t.inputShapes,this.outputShapes=t.outputShapes;for(const e of t.inboundLayers)null!=e&&e.outboundNodes.push(this);t.outboundLayer.inboundNodes.push(this)}getConfig(){const t=[];for(const e of this.inboundLayers)null!=e?t.push(e.name):t.push(null);return{outboundLayer:this.outboundLayer?this.outboundLayer.name:null,inboundLayers:t,nodeIndices:this.nodeIndices,tensorIndices:this.tensorIndices}}}o.Node=w;let I=0;class $ extends a.serialization.Serializable{constructor(t={}){super(),this._callHook=null,this._addedWeightNames=[],this._stateful=!1,this.id=I++,this.activityRegularizer=null,this.inputSpec=null,this.supportsMasking=!1,this._trainableWeights=[],this._nonTrainableWeights=[],this._losses=[],this._updates=[],this._built=!1,this.inboundNodes=[],this.outboundNodes=[];let e=t.name;if(!e){const t=this.getClassName();e=d.toSnakeCase(t)+'_'+(0,h.getUid)(t)}if(this.name=e,this.trainable_=null==t.trainable||t.trainable,null!=t.inputShape||null!=t.batchInputShape){let e;if(null!=t.batchInputShape)e=t.batchInputShape;else if(null!=t.inputShape){let n=null;null!=t.batchSize&&(n=t.batchSize),e=[n].concat(t.inputShape)}this.batchInputShape=e;let n=t.dtype;null==n&&(n=t.inputDType),null==n&&(n='float32'),this.dtype=n}null!=t.weights?this.initialWeights=t.weights:this.initialWeights=null,this._refCount=null,this.fastWeightInitDuringBuild=!1}static nodeKey(t,e){return t.name+'_ib-'+e.toString()}getNodeAtIndex(t,e){if(0===this.inboundNodes.length)throw new l.RuntimeError(`The layer has never been called and thus has no defined ${e}.`);if(this.inboundNodes.length<=t)throw new l.ValueError(`Asked to get ${e} at node ${t}, but the layer has only ${this.inboundNodes.length} inbound nodes.`);return this.inboundNodes[t]}getInputAt(t){return d.singletonOrArray(this.getNodeAtIndex(t,'input').inputTensors)}getOutputAt(t){return d.singletonOrArray(this.getNodeAtIndex(t,'output').outputTensors)}get input(){if(this.inboundNodes.length>1)throw new l.AttributeError(`Layer ${this.name} has multiple inbound nodes, hence the notion of "layer input" is ill-defined. Use \`getInputAt(nodeIndex)\` instead.`);if(0===this.inboundNodes.length)throw new l.AttributeError(`Layer ${this.name} is not connected, no input to return.`);return d.singletonOrArray(this.getNodeAtIndex(0,'input').inputTensors)}get output(){if(0===this.inboundNodes.length)throw new l.AttributeError(`Layer ${this.name} has no inbound nodes.`);if(this.inboundNodes.length>1)throw new l.AttributeError(`Layer ${this.name} has multiple inbound nodes, hence the notion of "layer output" is ill-defined. Use \`getOutputAt(nodeIndex)\` instead.`);return d.singletonOrArray(this.getNodeAtIndex(0,'output').outputTensors)}get losses(){return this._losses}calculateLosses(){return this.losses.map(t=>t())}get updates(){return this._updates}get built(){return this._built}set built(t){this._built=t}get trainable(){return this.trainable_}set trainable(t){this._trainableWeights.forEach(e=>e.trainable=t),this.trainable_=t}get trainableWeights(){return this.trainable_?this._trainableWeights.filter(t=>t.trainable):[]}set trainableWeights(t){this._trainableWeights=t}get nonTrainableWeights(){return this.trainable?this._trainableWeights.filter(t=>!t.trainable).concat(this._nonTrainableWeights):this._trainableWeights.concat(this._nonTrainableWeights)}set nonTrainableWeights(t){this._nonTrainableWeights=t}get weights(){return this.trainableWeights.concat(this.nonTrainableWeights)}get stateful(){return this._stateful}resetStates(){if(!this.stateful)throw new Error("Cannot call the resetStates() method of a non-stateful Layer object.")}assertInputCompatibility(t){const e=d.toList(t);if(null==this.inputSpec||0===this.inputSpec.length)return;const n=d.toList(this.inputSpec);if(e.length!==n.length)throw new l.ValueError(`Layer ${this.name} expects ${n.length} inputs, but it received ${e.length} input tensors. Input received: ${t}`);for(let t=0;t<e.length;t++){const i=e[t],s=n[t];if(null==s)continue;const o=i.rank;if(null!=s.ndim&&o!==s.ndim)throw new l.ValueError(`Input ${t} is incompatible with layer ${this.name}: expected ndim=${s.ndim}, found ndim=${o}`);if(null!=s.maxNDim&&o>s.maxNDim)throw new l.ValueError(`Input ${t} is incompatible with layer ${this.name}: expected max_ndim=${s.maxNDim}, found ndim=${o}`);if(null!=s.minNDim&&o<s.minNDim)throw new l.ValueError(`Input ${t} is incompatible with layer ${this.name}: expected min_ndim=${s.minNDim}, found ndim=${o}.`);if(null!=s.dtype&&i.dtype!==s.dtype)throw new l.ValueError(`Input ${t} is incompatible with layer ${this.name} : expected dtype=${s.dtype}, found dtype=${i.dtype}.`);if(s.axes){const e=i.shape;for(const n in s.axes){const i=Number(n),o=s.axes[n],r=i>=0?e[i]:e[e.length+i];if(null!=o&&-1===[o,null].indexOf(r))throw new l.ValueError(`Input ${t} is incompatible with layer ${this.name}: expected axis ${i} of input shape to have value ${o} but got shape ${e}.`)}}if(null!=s.shape)for(let e=0;e<s.shape.length;++e){const n=s.shape[e],o=i.shape[e];if(null!=n&&null!=o&&n!==o)throw new l.ValueError(`Input ${t} is incompatible with layer ${this.name}: expected shape=${s.shape}, found shape=${i.shape}.`)}}}call(t,e){return t}invokeCallHook(t,e){null!=this._callHook&&this._callHook(t,e)}setCallHook(t){this._callHook=t}clearCallHook(){this._callHook=null}apply(t,e){e=e||{},this.assertNotDisposed();const n=d.toList(t),i=N(t),s=S(t);if(i===s)throw new l.ValueError("Arguments to apply() must be all SymbolicTensors or all Tensors");return(0,u.nameScope)(this.name,()=>{if(!this.built){this.assertInputCompatibility(t);const e=[];for(const n of d.toList(t))e.push(n.shape);this.build(d.singletonOrArray(e)),this.built=!0,this.initialWeights&&this.setWeights(this.initialWeights),null===this._refCount&&s&&(this._refCount=1)}if(this.assertInputCompatibility(t),s){let i=this.call(t,e);this.supportsMasking&&this.setMaskMetadata(t,i);const s=d.toList(i),o=[];for(let t of s)-1!==n.indexOf(t)&&(t=t.clone()),o.push(t);if(i=d.singletonOrArray(o),null!=this.activityRegularizer)throw new l.NotImplementedError("Layer invocation in the presence of activity regularizer(s) is not supported yet.");return i}{const n=L(t),i=this.computeOutputShape(n);let s;const o='float32';if(this.warnOnIncompatibleInputShape(Array.isArray(t)?n[0]:n),s=null!=i&&i.length>0&&Array.isArray(i[0])?i.map((n,i)=>new y(o,n,this,d.toList(t),e,this.name,i)):new y(o,i,this,d.toList(t),e,this.name),this.addInboundNode(t,s,null,null,n,i,e),this._refCount++,null!=this.activityRegularizer)throw new l.NotImplementedError("Layer invocation in the presence of activity regularizer(s) is not supported yet.");return s}})}warnOnIncompatibleInputShape(t){if(null!=this.batchInputShape)if(t.length!==this.batchInputShape.length)console.warn(`The rank of the input tensor provided (shape: ${JSON.stringify(t)}) does not match that of the batchInputShape (${JSON.stringify(this.batchInputShape)}) of the layer ${this.name}`);else{let e=!1;this.batchInputShape.forEach((n,i)=>{null!=n&&null!=t[i]&&t[i]!==n&&(e=!0)}),e&&console.warn(`The shape of the input tensor (${JSON.stringify(t)}) does not match the expectation of layer ${this.name}: ${JSON.stringify(this.batchInputShape)}`)}}get outputShape(){if(null==this.inboundNodes||0===this.inboundNodes.length)throw new l.AttributeError(`The layer ${this.name} has never been called and thus has no defined output shape.`);const t=[];for(const e of this.inboundNodes){const n=JSON.stringify(e.outputShapes);-1===t.indexOf(n)&&t.push(n)}if(1===t.length){const t=this.inboundNodes[0].outputShapes;return Array.isArray(t)&&Array.isArray(t[0])&&1===t.length?t[0]:t}throw new l.AttributeError(`The layer ${this.name} has multiple inbound nodes with different output shapes. Hence the notion of "output shape" is ill-defined for the layer.`)}countParams(){if(!this.built)throw new l.RuntimeError(`You tried to call countParams() on ${this.name}, but the layer is not built yet. Build it first by calling build(batchInputShape).`);return f.countParamsInWeights(this.weights)}build(t){this.built=!0}getWeights(t=!1){return(0,g.batchGetValue)(t?this.trainableWeights:this.weights)}setWeights(t){(0,a.tidy)(()=>{const e=this.weights;if(e.length!==t.length)throw new l.ValueError(`You called setWeights(weights) on layer "${this.name}" with a weight list of length ${t.length}, but the layer was expecting ${e.length} weights. Provided weights: ${t}...`);if(0===e.length)return;const n=[],i=(0,g.batchGetValue)(e);for(let s=0;s<i.length;++s){const o=i[s],r=e[s],h=t[s];if(!a.util.arraysEqual(o.shape,h.shape))throw new l.ValueError(`Layer weight shape ${o.shape} not compatible with provided weight shape ${h.shape}`);n.push([r,h])}(0,g.batchSetValue)(n)})}addWeight(t,e,n,i,s,o,r,a){if(-1!==this._addedWeightNames.indexOf(t))throw new l.ValueError(`Duplicate weight name ${t} for layer ${this.name}`);this._addedWeightNames.push(t),null==n&&(n='float32'),this.fastWeightInitDuringBuild&&(i=null!=a?a():(0,p.getInitializer)('zeros'));const h=i.apply(e,n),u=new g.LayerVariable(h,n,t,o,r);return h.dispose(),null!=s&&this.addLoss(()=>s.apply(u.read())),null==o&&(o=!0),o?this._trainableWeights.push(u):this._nonTrainableWeights.push(u),u}setFastWeightInitDuringBuild(t){this.fastWeightInitDuringBuild=t}addLoss(t){null==t||Array.isArray(t)&&0===t.length||(t=d.toList(t),void 0!==this._losses&&null!==this._losses&&this.losses.push(...t))}computeOutputShape(t){return t}computeMask(t,e){if(!this.supportsMasking){if(null!=e){if(!Array.isArray(e))throw new TypeError(`Layer ${this.name} does not support masking, but was passed an inputMask.`);e.forEach(t=>{if(null!=t)throw new TypeError(`Layer ${this.name} does not support masking, but was passed an inputMask.`)})}return null}return e}setMaskMetadata(t,e,n){if(!this.supportsMasking)return;const i=this.computeMask(t,n),s=d.toList(e),o=d.toList(i);if(s.length!==o.length)throw new Error(`${this.name} outputs ${s.length} tensors but ${s.length} masks for those tensors`);for(let t=0;t<s.length;t++)s[t].kerasMask=o[t]}addInboundNode(t,e,n,i,s,o,r=null){const a=d.toList(t);e=d.toList(e),n=d.toList(n),i=d.toList(i),s=c.normalizeShapeList(s),o=c.normalizeShapeList(o);const h=[],u=[],l=[];for(const t of a)h.push(t.sourceLayer),u.push(t.nodeIndex),l.push(t.tensorIndex);new w({outboundLayer:this,inboundLayers:h,nodeIndices:u,tensorIndices:l,inputTensors:a,outputTensors:e,inputMasks:n,outputMasks:i,inputShapes:s,outputShapes:o},r);for(let t=0;t<e.length;t++)e[t].sourceLayer=this,e[t].nodeIndex=this.inboundNodes.length-1,e[t].tensorIndex=t}getConfig(){const t={name:this.name,trainable:this.trainable};return null!=this.batchInputShape&&(t.batchInputShape=this.batchInputShape),null!=this.dtype&&(t.dtype=this.dtype),t}disposeWeights(){return this.weights.forEach(t=>t.dispose()),this.weights.length}assertNotDisposed(){if(0===this._refCount)throw new Error(`Layer '${this.name}' is already disposed.`)}dispose(){if(!this.built)throw new Error(`Cannot dispose Layer ${this.name} because it has not been built yet.`);if(null===this._refCount)throw new Error(`Cannot dispose Layer ${this.name} because it has not been used yet.`);this.assertNotDisposed();let t=0;return 0===--this._refCount&&(t=this.disposeWeights()),{refCountAfterDispose:this._refCount,numDisposedVariables:t}}}function L(t){t=d.toList(t);const e=[];for(const n of t)e.push(n.shape);return d.singletonOrArray(e)}function N(t){let e=!0;for(const n of d.toList(t))if(!(n instanceof y)){e=!1;break}return e}function S(t){let e=!0;for(const n of d.toList(t))if(n instanceof y){e=!1;break}return e}o.Layer=$},2177,[1158,2176,2178,2172,2180,2174,2185,2186,2187]);
__d(function(g,r,i,a,m,_e,d){Object.defineProperty(_e,"__esModule",{value:!0}),_e.checkDataFormat=function(t){(0,e.checkStringTypeUnionValue)(n.VALID_DATA_FORMAT_VALUES,'DataFormat',t)},_e.checkInterpolationFormat=function(t){(0,e.checkStringTypeUnionValue)(n.VALID_INTERPOLATION_FORMAT_VALUES,'InterpolationFormat',t)},_e.checkPaddingMode=function(t){(0,e.checkStringTypeUnionValue)(n.VALID_PADDING_MODE_VALUES,'PaddingMode',t)},_e.checkPoolMode=function(t){(0,e.checkStringTypeUnionValue)(n.VALID_POOL_MODE_VALUES,'PoolMode',t)},_e.getScopedTensorName=function(n){if(!_(n))throw new Error('Not a valid tensor name: \''+n+'\'');return u()+n},_e.getUniqueTensorName=function(n){if(!_(n))throw new Error('Not a valid tensor name: \''+n+'\'');t.has(n)||t.set(n,0);const e=t.get(n);if(t.set(n,t.get(n)+1),e>0){const o=`${n}_${e}`;return t.set(o,1),o}return n},_e.isValidTensorName=_,_e.nameScope=function(n,e){o.push(n);try{const n=e();return o.pop(),n}catch(n){throw o.pop(),n}};var n=r(d[0]),e=r(d[1]);
/**
   * @license
   * Copyright 2018 Google LLC
   *
   * Use of this source code is governed by an MIT-style
   * license that can be found in the LICENSE file or at
   * https://opensource.org/licenses/MIT.
   * =============================================================================
   */
const t=new Map;const o=[],c='/';function u(){return 0===o.length?'':o.join(c)+c}const s=new RegExp(/^[A-Za-z0-9][-A-Za-z0-9\._\/]*$/);function _(n){return!!n.match(s)}},2178,[2179,2174]);
__d(function(g,r,i,a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.VALID_SAMPLE_WEIGHT_MODES=e.VALID_POOL_MODE_VALUES=e.VALID_PADDING_MODE_VALUES=e.VALID_INTERPOLATION_FORMAT_VALUES=e.VALID_DATA_FORMAT_VALUES=e.VALID_BIDIRECTIONAL_MERGE_MODES=void 0;
/**
   * @license
   * Copyright 2018 Google LLC
   *
   * Use of this source code is governed by an MIT-style
   * license that can be found in the LICENSE file or at
   * https://opensource.org/licenses/MIT.
   * =============================================================================
   */
e.VALID_DATA_FORMAT_VALUES=['channelsFirst','channelsLast'],e.VALID_INTERPOLATION_FORMAT_VALUES=['nearest','bilinear'],e.VALID_PADDING_MODE_VALUES=['valid','same','causal'],e.VALID_POOL_MODE_VALUES=['max','avg'],e.VALID_BIDIRECTIONAL_MERGE_MODES=['sum','mul','concat','ave'],e.VALID_SAMPLE_WEIGHT_MODES=['temporal']},2179,[]);
__d(function(g,_r,_i,a,m,_e,d){Object.defineProperty(_e,"__esModule",{value:!0}),_e.Zeros=_e.VarianceScaling=_e.TruncatedNormal=_e.RandomUniform=_e.RandomNormal=_e.Orthogonal=_e.Ones=_e.LeCunUniform=_e.LeCunNormal=_e.Initializer=_e.Identity=_e.INITIALIZER_IDENTIFIER_REGISTRY_SYMBOL_MAP=_e.HeUniform=_e.HeNormal=_e.GlorotUniform=_e.GlorotNormal=_e.Constant=void 0,_e.checkDistribution=u,_e.checkFanMode=l,_e.getInitializer=function(e){if('string'==typeof e){const t=e in z?z[e]:e;if('GlorotNormal'===t)return new y;if('GlorotUniform'===t)return new _;if('HeNormal'===t)return new A;if('HeUniform'===t)return new v;if('LeCunNormal'===t)return new T;if('LeCunUniform'===t)return new M;{const e={};return e.className=t,e.config={},w(e)}}return e instanceof c?e:w(e)},_e.serializeInitializer=function(e){return(0,i.serializeKerasObject)(e)};var e=_r(d[0]),t=(function(e,t){if("function"==typeof WeakMap)var s=new WeakMap,n=new WeakMap;return(function(e,t){if(!t&&e&&e.__esModule)return e;var r,i,o={__proto__:null,default:e};if(null===e||"object"!=typeof e&&"function"!=typeof e)return o;if(r=t?n:s){if(r.has(e))return r.get(e);r.set(e,o)}for(const t in e)"default"!==t&&{}.hasOwnProperty.call(e,t)&&((i=(r=Object.defineProperty)&&Object.getOwnPropertyDescriptor(e,t))&&(i.get||i.set)?r(o,t,i):o[t]=e[t]);return o})(e,t)}
/**
   * @license
   * Copyright 2018 Google LLC
   *
   * Use of this source code is governed by an MIT-style
   * license that can be found in the LICENSE file or at
   * https://opensource.org/licenses/MIT.
   * =============================================================================
   */)(_r(d[1])),s=_r(d[2]),n=_r(d[3]),r=_r(d[4]),i=_r(d[5]),o=_r(d[6]);function l(e){(0,i.checkStringTypeUnionValue)(r.VALID_FAN_MODE_VALUES,'FanMode',e)}function u(e){(0,i.checkStringTypeUnionValue)(r.VALID_DISTRIBUTION_VALUES,'Distribution',e)}class c extends e.serialization.Serializable{fromConfigUsesCustomObjects(){return!1}getConfig(){return{}}}_e.Initializer=c;class h extends c{apply(t,s){return(0,e.zeros)(t,s)}}_e.Zeros=h,h.className='Zeros',e.serialization.registerClass(h);class f extends c{apply(t,s){return(0,e.ones)(t,s)}}_e.Ones=f,f.className='Ones',e.serialization.registerClass(f);class N extends c{constructor(e){if(super(),'object'!=typeof e)throw new n.ValueError(`Expected argument of type ConstantConfig but got ${e}`);if(void 0===e.value)throw new n.ValueError(`config must have value set but got ${e}`);this.value=e.value}apply(t,s){return(0,e.tidy)(()=>(0,e.mul)((0,e.scalar)(this.value),(0,e.ones)(t,s)))}getConfig(){return{value:this.value}}}_e.Constant=N,N.className='Constant',e.serialization.registerClass(N);class p extends c{constructor(e){super(),this.DEFAULT_MINVAL=-.05,this.DEFAULT_MAXVAL=.05,this.minval=e.minval||this.DEFAULT_MINVAL,this.maxval=e.maxval||this.DEFAULT_MAXVAL,this.seed=e.seed}apply(t,s){return(0,e.randomUniform)(t,this.minval,this.maxval,s,this.seed)}getConfig(){return{minval:this.minval,maxval:this.maxval,seed:this.seed}}}_e.RandomUniform=p,p.className='RandomUniform',e.serialization.registerClass(p);class E extends c{constructor(e){super(),this.DEFAULT_MEAN=0,this.DEFAULT_STDDEV=.05,this.mean=e.mean||this.DEFAULT_MEAN,this.stddev=e.stddev||this.DEFAULT_STDDEV,this.seed=e.seed}apply(e,s){if('float32'!==(s=s||'float32')&&'int32'!==s)throw new n.NotImplementedError(`randomNormal does not support dType ${s}.`);return t.randomNormal(e,this.mean,this.stddev,s,this.seed)}getConfig(){return{mean:this.mean,stddev:this.stddev,seed:this.seed}}}_e.RandomNormal=E,E.className='RandomNormal',e.serialization.registerClass(E);class C extends c{constructor(e){super(),this.DEFAULT_MEAN=0,this.DEFAULT_STDDEV=.05,this.mean=e.mean||this.DEFAULT_MEAN,this.stddev=e.stddev||this.DEFAULT_STDDEV,this.seed=e.seed}apply(t,s){if('float32'!==(s=s||'float32')&&'int32'!==s)throw new n.NotImplementedError(`truncatedNormal does not support dType ${s}.`);return(0,e.truncatedNormal)(t,this.mean,this.stddev,s,this.seed)}getConfig(){return{mean:this.mean,stddev:this.stddev,seed:this.seed}}}_e.TruncatedNormal=C,C.className='TruncatedNormal',e.serialization.registerClass(C);class U extends c{constructor(e){super(),this.gain=null!=e.gain?e.gain:1}apply(t,s){return(0,e.tidy)(()=>{if(2!==t.length||t[0]!==t[1])throw new n.ValueError("Identity matrix initializer can only be used for 2D square matrices.");return(0,e.mul)(this.gain,(0,e.eye)(t[0]))})}getConfig(){return{gain:this.gain}}}function I(e,t="channelsLast"){let n,r;if((0,s.checkDataFormat)(t),2===e.length)n=e[0],r=e[1];else if(-1!==[3,4,5].indexOf(e.length)){if('channelsFirst'===t){const t=(0,o.arrayProd)(e,2);n=e[1]*t,r=e[0]*t}else if('channelsLast'===t){const t=(0,o.arrayProd)(e,0,e.length-2);n=e[e.length-2]*t,r=e[e.length-1]*t}}else{const t=(0,o.arrayProd)(e);n=Math.sqrt(t),r=Math.sqrt(t)}return[n,r]}_e.Identity=U,U.className='Identity',e.serialization.registerClass(U);class L extends c{constructor(e){if(super(),e.scale<0)throw new n.ValueError(`scale must be a positive float. Got: ${e.scale}`);this.scale=null==e.scale?1:e.scale,this.mode=null==e.mode?'fanIn':e.mode,l(this.mode),this.distribution=null==e.distribution?'normal':e.distribution,u(this.distribution),this.seed=e.seed}apply(t,s){const r=I(t),i=r[0],o=r[1];let l=this.scale;if('fanIn'===this.mode?l/=Math.max(1,i):'fanOut'===this.mode?l/=Math.max(1,o):l/=Math.max(1,(i+o)/2),'normal'===this.distribution){const r=Math.sqrt(l);if('float32'!==(s=s||'float32')&&'int32'!==s)throw new n.NotImplementedError(`${this.getClassName()} does not support dType ${s}.`);return(0,e.truncatedNormal)(t,0,r,s,this.seed)}{const n=Math.sqrt(3*l);return(0,e.randomUniform)(t,-n,n,s,this.seed)}}getConfig(){return{scale:this.scale,mode:this.mode,distribution:this.distribution,seed:this.seed}}}_e.VarianceScaling=L,L.className='VarianceScaling',e.serialization.registerClass(L);class _ extends L{constructor(e){super({scale:1,mode:'fanAvg',distribution:'uniform',seed:null==e?null:e.seed})}getClassName(){return L.className}}_e.GlorotUniform=_,_.className='GlorotUniform',e.serialization.registerClass(_);class y extends L{constructor(e){super({scale:1,mode:'fanAvg',distribution:'normal',seed:null==e?null:e.seed})}getClassName(){return L.className}}_e.GlorotNormal=y,y.className='GlorotNormal',e.serialization.registerClass(y);class A extends L{constructor(e){super({scale:2,mode:'fanIn',distribution:'normal',seed:null==e?null:e.seed})}getClassName(){return L.className}}_e.HeNormal=A,A.className='HeNormal',e.serialization.registerClass(A);class v extends L{constructor(e){super({scale:2,mode:'fanIn',distribution:'uniform',seed:null==e?null:e.seed})}getClassName(){return L.className}}_e.HeUniform=v,v.className='HeUniform',e.serialization.registerClass(v);class T extends L{constructor(e){super({scale:1,mode:'fanIn',distribution:'normal',seed:null==e?null:e.seed})}getClassName(){return L.className}}_e.LeCunNormal=T,T.className='LeCunNormal',e.serialization.registerClass(T);class M extends L{constructor(e){super({scale:1,mode:'fanIn',distribution:'uniform',seed:null==e?null:e.seed})}getClassName(){return L.className}}_e.LeCunUniform=M,M.className='LeCunUniform',e.serialization.registerClass(M);class D extends c{constructor(e){super(),this.DEFAULT_GAIN=1,this.ELEMENTS_WARN_SLOW=2e3,this.gain=null==e.gain?this.DEFAULT_GAIN:e.gain,this.seed=e.seed}apply(s,r){return(0,e.tidy)(()=>{if(s.length<2)throw new n.NotImplementedError('Shape must be at least 2D.');if('int32'!==r&&'float32'!==r&&void 0!==r)throw new TypeError(`Unsupported data type ${r}.`);const i=e.util.sizeFromShape(s.slice(0,-1)),o=s[s.length-1],l=i*o;l>this.ELEMENTS_WARN_SLOW&&console.warn(`Orthogonal initializer is being called on a matrix with more than ${this.ELEMENTS_WARN_SLOW} (${l}) elements: Slowness may result.`);const u=[Math.max(o,i),Math.min(o,i)],c=t.randomNormal(u,0,1,r,this.seed),h=e.linalg.qr(c,!1);let f=h[0];const N=h[1].flatten().stridedSlice([0],[Math.min(o,i)*Math.min(o,i)],[Math.min(o,i)+1]);return f=(0,e.mul)(f,N.sign()),i<o&&(f=f.transpose()),(0,e.mul)((0,e.scalar)(this.gain),f.reshape(s))})}getConfig(){return{gain:this.gain,seed:this.seed}}}_e.Orthogonal=D,D.className='Orthogonal',e.serialization.registerClass(D);const z=_e.INITIALIZER_IDENTIFIER_REGISTRY_SYMBOL_MAP={constant:'Constant',glorotNormal:'GlorotNormal',glorotUniform:'GlorotUniform',heNormal:'HeNormal',heUniform:'HeUniform',identity:'Identity',leCunNormal:'LeCunNormal',leCunUniform:'LeCunUniform',ones:'Ones',orthogonal:'Orthogonal',randomNormal:'RandomNormal',randomUniform:'RandomUniform',truncatedNormal:'TruncatedNormal',varianceScaling:'VarianceScaling',zeros:'Zeros'};function w(t,s={}){return(0,i.deserializeKerasObject)(t,e.serialization.SerializationMap.getMap().classNameMap,s,'initializer')}},2180,[1158,2181,2178,2172,2184,2174,2182]);
__d(function(g,_r,_i,_a,m,_e,d){Object.defineProperty(_e,"__esModule",{value:!0}),_e.batchFlatten=function(e){if(e.rank<=1)throw new t.ValueError(`batchFlatten requires a minimum rank of 2. Got rank: ${e.rank}.`);const n=[e.shape[0],a.arrayProd(e.shape,1)];return r.reshape(e,n)},_e.biasAdd=function(t,a,o){return(0,e.tidy)(()=>(null==o&&(o=(0,s.imageDataFormat)()),(0,n.checkDataFormat)(o),r.add(t,l(t.rank,a,o))))},_e.cast=function(e,n){return r.cast(e,n)},_e.concatAlongFirstAxis=function(e,n){switch(e.rank){case 1:return r.concat1d([e,n]);case 2:return r.concat2d([e,n],0);case 3:return r.concat3d([e,n],0);case 4:return r.concat4d([e,n],0);default:throw new t.ValueError(`concatAlongFirstAxis() received an unsupported tensor rank: ${e.rank}`)}},_e.concatenate=function(e,n=-1){let t;n<0&&(t=e[0].rank,n=0!==t?t:0);n===e[0].rank&&(n=-1);return r.concat(e,n)},_e.countParams=function(e){const r=e.shape;return r.length>0?r.reduce((e,r)=>e*r):1},_e.dot=function(e,n,a,o){if(e.rank<2||n.rank<2)throw new t.NotImplementedError(`dot requires both inputs to be rank >= 2 but got x shape = ${e.shape} and y shape = ${n.shape}`);if(n.rank>=3){if(e.shape.slice(-1)[0]!==n.shape.slice(-2)[0])throw new t.NotImplementedError(`If rank y >= 3, then the second last dim of y must equal the last dim of x but got x shape = ${e.shape} and  y shape = ${n.shape}`)}if(2===e.rank&&2===n.rank){const t=!1,i=!1;return r.fused.matMul({a:e,b:n,transposeA:t,transposeB:i,bias:o?l(e.rank,o,(0,s.imageDataFormat)()):null,activation:a})}{const t=e.shape.slice(),i=t.pop();e=r.reshape(e,[-1,i]);const u=n.shape.slice(),c=u.pop(),h=u.pop(),p=[...u,c],f=Array.from({length:n.rank},(e,r)=>0===r?n.rank-2:r<=n.rank-2?r-1:r);n=r.reshape(r.transpose(n,f),[h,-1]);const k=[...t,...p],w=!1,y=!1;return r.reshape(r.fused.matMul({a:e,b:n,transposeA:w,transposeB:y,bias:o?l(e.rank,o,(0,s.imageDataFormat)()):null,activation:a}),k)}},_e.dropout=function(n,t,a,s){return(0,e.tidy)(()=>r.dropout(n,t,a,s))},_e.elu=function(e,n=1){if(1!==n)throw new t.NotImplementedError(`Support for alpha values other than 1 (${n}) is not implemented yet.`);return r.elu(e)},_e.expandDims=u,_e.flatten=function(e){const n=[a.arrayProd(e.shape)];return r.reshape(e,n)},_e.gather=function(n,t,a){return(0,e.tidy)(()=>(t=Array.isArray(t)?(0,e.tensor1d)(t,'int32'):r.cast(t,'int32'),r.gather(n,t,a)))},_e.getBackend=function(){return i},_e.hardSigmoid=function(n){return(0,e.tidy)(()=>{const e=r.add(.5,r.mul(.2,n));return r.clipByValue(e,0,1)})},_e.inTrainPhase=function(e,r,n=!1){return n?e():r()},_e.isBackendSymbolic=function(){return!1},_e.oneHot=function(n,t){return(0,e.tidy)(()=>{if(1!==n.rank)throw new Error("Only 1D one-hot tensors are supported in the deeplearn backend, at present.");return n=r.cast(n,'int32'),r.cast(r.oneHot(n,t),'float32')})},_e.pow=function(n,a){return(0,e.tidy)(()=>{if('number'==typeof a&&(a=(0,e.scalar)(Math.round(a),'int32')),'int32'!==a.dtype)throw new t.NotImplementedError(`Non-int32 dtype (${a.dtype}) is not supported by pow() yet`);return r.pow(n,a)})},_e.randomNormal=function(e,n=0,t=1,a,s){return r.randomNormal(e,n,t,a,s)},_e.repeat=function(r,n){return(0,e.tidy)(()=>{if(2!==r.shape.length)throw new t.ValueError(`repeat() expects a rank-2 tensor, but received a rank-${r.shape.length} tensor.`);return p(u(r,1),[1,n,1])})},_e.setBackend=function(e){r.setBackend(e),i=e},_e.sign=function(n){return(0,e.tidy)(()=>{const t=(0,e.zerosLike)(n),a=(0,e.onesLike)(n);return(0,e.where)(r.equal(n,t),t,(0,e.where)(r.greater(n,(0,e.zerosLike)(n)),a,r.mul(-1,a)))})},_e.sliceAlongAxis=function(n,a,s,o){return(0,e.tidy)(()=>{switch(n.rank){case 1:return r.slice1d(n,a,s);case 2:switch(o){case 1:return c(n,a,s);case 2:return h(n,a,s);default:throw new t.ValueError(`The axis is not within the rank of the tensor ${o}`)}case 3:switch(o){case 1:return c(n,a,s);case 2:return r.slice3d(n,[0,a,0],[n.shape[0],s,n.shape[2]]);case 3:return h(n,a,s);default:throw new t.ValueError(`The axis is not within the rank of the tensor ${o}`)}case 4:switch(o){case 1:return c(n,a,s);case 2:return r.slice4d(n,[0,a,0,0],[n.shape[0],s,n.shape[2],n.shape[3]]);case 3:return r.slice4d(n,[0,0,a,0],[n.shape[0],n.shape[1],s,n.shape[3]]);case 4:return h(n,a,s);default:throw new t.ValueError(`The axis is not within the rank of the tensor ${o}`)}default:throw new t.ValueError(`sliceAlongLastAxis() received an unsupported tensor rank: ${n.rank}`)}})},_e.sliceAlongFirstAxis=c,_e.sliceAlongLastAxis=h,_e.softsign=function(n){return(0,e.tidy)(()=>r.div(n,r.add(r.abs(n),1)))},_e.square=function(e){return r.mul(e,e)},_e.tile=p;var e=o(_r(d[0])),r=e,n=_r(d[1]),t=_r(d[2]),a=o(_r(d[3])),s=_r(d[4]);function o(e,r){if("function"==typeof WeakMap)var n=new WeakMap,t=new WeakMap;return(o=function(e,r){if(!r&&e&&e.__esModule)return e;var a,s,o={__proto__:null,default:e};if(null===e||"object"!=typeof e&&"function"!=typeof e)return o;if(a=r?t:n){if(a.has(e))return a.get(e);a.set(e,o)}for(const r in e)"default"!==r&&{}.hasOwnProperty.call(e,r)&&((s=(a=Object.defineProperty)&&Object.getOwnPropertyDescriptor(e,r))&&(s.get||s.set)?a(o,r,s):o[r]=e[r]);return o})(e,r)}
/**
   * @license
   * Copyright 2018 Google LLC
   *
   * Use of this source code is governed by an MIT-style
   * license that can be found in the LICENSE file or at
   * https://opensource.org/licenses/MIT.
   * =============================================================================
   */let i='webgl';function u(e,n=-1){const t=e.shape.slice();return n<0&&(n=t.length+n+1),t.splice(n,0,1),r.reshape(e,t)}function c(n,a,s){return(0,e.tidy)(()=>{switch(n.rank){case 1:return r.slice1d(n,a,s);case 2:return r.slice2d(n,[a,0],[s,n.shape[1]]);case 3:return r.slice3d(n,[a,0,0],[s,n.shape[1],n.shape[2]]);case 4:return r.slice4d(n,[a,0,0,0],[s,n.shape[1],n.shape[2],n.shape[3]]);case 5:return r.slice(n,[a,0,0,0,0],[s,n.shape[1],n.shape[2],n.shape[3],n.shape[4]]);case 6:return r.slice(n,[a,0,0,0,0,0],[s,n.shape[1],n.shape[2],n.shape[3],n.shape[4],n.shape[5]]);default:throw new t.ValueError(`sliceAlongFirstAxis() received an unsupported tensor rank: ${n.rank}`)}})}function h(n,a,s){return(0,e.tidy)(()=>{switch(n.rank){case 1:return r.slice1d(n,a,s);case 2:return r.slice2d(n,[0,a],[n.shape[0],s]);case 3:return r.slice3d(n,[0,0,a],[n.shape[0],n.shape[1],s]);case 4:return r.slice4d(n,[0,0,0,a],[n.shape[0],n.shape[1],n.shape[2],s]);default:throw new t.ValueError(`sliceAlongLastAxis() received an unsupported tensor rank: ${n.rank}`)}})}function p(e,n){if(Array.isArray(n)||(n=[n]),e.rank!==n.length)throw new t.ValueError(`The length of input n (${n.length}) does not match the number of dimensions in input x (${e.rank})`);return r.tile(e,n)}function l(e,n,a){const s=n.shape;if(1!==n.rank&&n.rank!==e)throw new t.ValueError(`Unexpected bias dimensions: ${n.rank}; expected it to be 1 or ${e}`);if(5===e){if('channelsFirst'===a)return 1===s.length?r.reshape(n,[1,s[0],1,1,1]):r.reshape(n,[1,s[3],s[0],s[1],s[2]]);if('channelsLast'===a)return 1===s.length?r.reshape(n,[1,1,1,1,s[0]]):r.reshape(n,[1].concat(s))}else if(4===e){if('channelsFirst'===a)return 1===s.length?r.reshape(n,[1,s[0],1,1]):r.reshape(n,[1,s[2],s[0],s[1]]);if('channelsLast'===a)return 1===s.length?r.reshape(n,[1,1,1,s[0]]):r.reshape(n,[1].concat(s))}else if(3===e){if('channelsFirst'===a)return 1===s.length?r.reshape(n,[1,s[0],1]):r.reshape(n,[1,s[1],s[0]]);if('channelsLast'===a)return 1===s.length?r.reshape(n,[1,1,s[0]]):r.reshape(n,[1].concat(s))}else if(e<3)return n;throw new t.ValueError(`Unsupported input rank by biasAdd: ${n.rank}`)}},2181,[1158,2178,2172,2182,2183]);
__d(function(g,r,_i,_a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.arrayProd=function(n,t,u){null==t&&(t=0);null==u&&(u=n.length);let l=1;for(let o=t;o<u;++o)l*=n[o];return l},e.isInteger=
/**
   * @license
   * Copyright 2018 Google LLC
   *
   * Use of this source code is governed by an MIT-style
   * license that can be found in the LICENSE file or at
   * https://opensource.org/licenses/MIT.
   * =============================================================================
   */
function(n){return n===parseInt(n.toString(),10)},e.max=function(n){if(0===n.length)return Number.NaN;let t=Number.NEGATIVE_INFINITY;for(let u=0;u<n.length;u++){const l=n[u];l>t&&(t=l)}return t},e.mean=u,e.median=function(n){const t=n.slice().sort((n,t)=>n-t),u=Math.floor((t.length-1)/2),l=Math.ceil((t.length-1)/2);if(u===l)return t[u];return(t[u]+t[l])/2},e.min=function(n){if(0===n.length)return Number.NaN;let t=Number.POSITIVE_INFINITY;for(let u=0;u<n.length;u++){const l=n[u];l<t&&(t=l)}return t},e.range=function(t,u){if(u<t)throw new n.ValueError(`end (${u}) < begin (${t}) is forbidden.`);const l=[];for(let n=t;n<u;++n)l.push(n);return l},e.sum=t,e.variance=function(n){const t=u(n),l=n.map(n=>n-t);let o=0;for(let n=0;n<l.length;n++){const t=l[n];o+=t*t}return o/n.length};var n=r(d[0]);function t(n){let t=0;for(let u=0;u<n.length;u++){t+=n[u]}return t}function u(n){return t(n)/n.length}},2182,[2172]);
__d(function(g,r,i,a,m,_e,d){Object.defineProperty(_e,"__esModule",{value:!0}),_e.epsilon=function(){null==e&&(e=(0,n.backend)().epsilon());return e},_e.imageDataFormat=function(){return'channelsLast'},_e.setEpsilon=function(n){e=n};var n=r(d[0]);
/**
   * @license
   * Copyright 2018 Google LLC
   *
   * Use of this source code is governed by an MIT-style
   * license that can be found in the LICENSE file or at
   * https://opensource.org/licenses/MIT.
   * =============================================================================
   */let e},2183,[1158]);
__d(function(g,r,i,a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.initializerClassNames=e.VALID_FAN_MODE_VALUES=e.VALID_DISTRIBUTION_VALUES=void 0;
/**
   * @license
   * Copyright 2018 Google LLC
   *
   * Use of this source code is governed by an MIT-style
   * license that can be found in the LICENSE file or at
   * https://opensource.org/licenses/MIT.
   * =============================================================================
   */
e.VALID_FAN_MODE_VALUES=['fanIn','fanOut','fanAvg'],e.VALID_DISTRIBUTION_VALUES=['normal','uniform','truncatedNormal'],e.initializerClassNames=['Zeros','Ones','Constant','RandomNormal','RandomUniform','TruncatedNormal','VarianceScaling','Orthogonal','Identity']},2184,[]);
__d(function(g,r,i,a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.getExactlyOneShape=function(n){if(Array.isArray(n)&&Array.isArray(n[0])){if(1===n.length)return n[0];throw new t.ValueError(`Expected exactly 1 Shape; got ${n.length}`)}return n},e.getExactlyOneTensor=function(n){let o;if(Array.isArray(n)){if(1!==n.length)throw new t.ValueError(`Expected Tensor length to be 1; got ${n.length}`);o=n[0]}else o=n;return o},e.isArrayOfShapes=
/**
   * @license
   * Copyright 2018 Google LLC
   *
   * Use of this source code is governed by an MIT-style
   * license that can be found in the LICENSE file or at
   * https://opensource.org/licenses/MIT.
   * =============================================================================
   */
function(t){return Array.isArray(t)&&Array.isArray(t[0])},e.normalizeShapeList=function(t){if(0===t.length)return[];if(!Array.isArray(t[0]))return[t];return t};var t=r(d[0])},2185,[2172]);
__d(function(g,r,i,_a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.countParamsInWeights=
/**
   * @license
   * Copyright 2018 Google LLC
   *
   * Use of this source code is governed by an MIT-style
   * license that can be found in the LICENSE file or at
   * https://opensource.org/licenses/MIT.
   * =============================================================================
   */
function(n){let t=0;for(const o of n)0===o.shape.length?t+=1:t+=o.shape.reduce((n,t)=>n*t);return t}},2186,[]);
__d(function(g,_r,_i,a,m,_e,d){Object.defineProperty(_e,"__esModule",{value:!0}),_e.LayerVariable=void 0,_e.batchGetValue=function(e){return e.map(e=>e.read())},_e.batchSetValue=function(e){e.forEach(e=>{e[0].write(e[1])})},_e.eyeVariable=function(e,r,n){return new s(t.eye(e),r,n)},_e.gradients=function(t,r){const n=r.map(e=>e.read()),i=(0,e.variableGrads)(t,n);return r.map(e=>i.grads[e.name])},_e.onesLike=function(e,r,n){const i=t.onesLike(e);return new s(i,r,n)},_e.onesVariable=function(e,r,n){const i=t.ones(e);return new s(i,r,n)},_e.randomNormalVariable=function(e,r=0,n=1,o,l,u="randomNormal"){if('float32'!==(o=o||'float32')&&'int32'!==o)throw new i.NotImplementedError(`randomNormalVariable does not support dType ${o}.`);return new s(t.randomNormal(e,r,n,o,l),o,u)},_e.randomUniformVariable=function(e,r,n,i,o,l="randomUniform"){return new s(t.randomUniform(e,r,n,i),i,l)},_e.truncatedNormalVariable=function(e,r=0,n=1,o,l,u="truncatedNormal"){if('float32'!==(o=o||'float32')&&'int32'!==o)throw new i.NotImplementedError(`randomNormal does not support dType ${o}.`);return new s(t.truncatedNormal(e,r,n,o,l),o,u)},_e.update=function(e,t){return e.write(t)},_e.updateAdd=function(e,r){return e.write(t.add(e.read(),r))},_e.updateSub=function(e,r){return e.write(t.sub(e.read(),r))},_e.variable=function(e,t,r,n){return new s(e,t,r,!0,n)},_e.zerosLike=function(e,r,n){return new s(t.zerosLike(e),r,n)},_e.zerosVariable=function(e,r,n){return new s(t.zeros(e),r,n)};var e=(function(e,t){if("function"==typeof WeakMap)var r=new WeakMap,n=new WeakMap;return(function(e,t){if(!t&&e&&e.__esModule)return e;var i,o,s={__proto__:null,default:e};if(null===e||"object"!=typeof e&&"function"!=typeof e)return s;if(i=t?n:r){if(i.has(e))return i.get(e);i.set(e,s)}for(const t in e)"default"!==t&&{}.hasOwnProperty.call(e,t)&&((o=(i=Object.defineProperty)&&Object.getOwnPropertyDescriptor(e,t))&&(o.get||o.set)?i(s,t,o):s[t]=e[t]);return s})(e,t)}
/**
   * @license
   * Copyright 2018 Google LLC
   *
   * Use of this source code is governed by an MIT-style
   * license that can be found in the LICENSE file or at
   * https://opensource.org/licenses/MIT.
   * =============================================================================
   */)(_r(d[0])),t=e,r=_r(d[1]),n=_r(d[2]),i=_r(d[3]);const o='Variable';class s{constructor(e,i="float32",s=o,l=!0,u=null){this.dtype=null==i?'float32':i,this.shape=e.shape,this.id=(0,r.getNextUniqueTensorId)(),s=null==s?o:s,this.originalName=(0,n.getScopedTensorName)(s),this.name=(0,n.getUniqueTensorName)(this.originalName),this.trainable_=l,this.constraint=u,this.val=t.variable(e,this.trainable_,this.name,this.dtype)}read(){return this.assertNotDisposed(),this.val}write(e){return this.assertNotDisposed(),l(this.val,e),this.val.id!==e.id&&(this.val.assign(e),null!=this.constraint&&this.val.assign(this.constraint.apply(this.val))),this}dispose(){this.assertNotDisposed(),this.val.dispose()}assertNotDisposed(){if(this.val.isDisposed)throw new Error(`LayersVariable ${this.name} is already disposed.`)}get trainable(){return this.trainable_}set trainable(e){this.trainable_=e,this.val.trainable=e}}function l(e,t){if(e.shape.toString()!==t.shape.toString())throw new Error('Shape mismatch: '+JSON.stringify(e.shape)+' vs. '+JSON.stringify(t.shape))}_e.LayerVariable=s},2187,[1158,2176,2178,2172]);
__d(function(g,r,i,a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.maxNorm=
/**
   * @license
   * Copyright 2018 Google LLC
   *
   * Use of this source code is governed by an MIT-style
   * license that can be found in the LICENSE file or at
   * https://opensource.org/licenses/MIT.
   * =============================================================================
   */
function(o){return new n.MaxNorm(o)},e.minMaxNorm=function(o){return new n.MinMaxNorm(o)},e.nonNeg=function(){return new n.NonNeg},e.unitNorm=function(o){return new n.UnitNorm(o)};var n=r(d[0])},2188,[2189]);
__d(function(g,_r,_i,a,m,_e,d){Object.defineProperty(_e,"__esModule",{value:!0}),_e.UnitNorm=_e.NonNeg=_e.MinMaxNorm=_e.MaxNorm=_e.Constraint=_e.CONSTRAINT_IDENTIFIER_REGISTRY_SYMBOL_MAP=void 0,_e.deserializeConstraint=c,_e.getConstraint=function(e){if(null==e)return null;if('string'==typeof e){return c({className:e in f?f[e]:e,config:{}})}return e instanceof r?e:c(e)},_e.serializeConstraint=function(e){return(0,s.serializeKerasObject)(e)};var e=(function(e,t){if("function"==typeof WeakMap)var i=new WeakMap,s=new WeakMap;return(function(e,t){if(!t&&e&&e.__esModule)return e;var n,r,l={__proto__:null,default:e};if(null===e||"object"!=typeof e&&"function"!=typeof e)return l;if(n=t?s:i){if(n.has(e))return n.get(e);n.set(e,l)}for(const t in e)"default"!==t&&{}.hasOwnProperty.call(e,t)&&((r=(n=Object.defineProperty)&&Object.getOwnPropertyDescriptor(e,t))&&(r.get||r.set)?n(l,t,r):l[t]=e[t]);return l})(e,t)}
/**
   * @license
   * Copyright 2018 Google LLC
   *
   * Use of this source code is governed by an MIT-style
   * license that can be found in the LICENSE file or at
   * https://opensource.org/licenses/MIT.
   * =============================================================================
   */)(_r(d[0])),t=e,i=_r(d[1]),s=_r(d[2]);function n(i,s){return(0,e.tidy)(()=>t.sqrt(t.sum(t.mul(i,i),s,!0)))}class r extends e.serialization.Serializable{getConfig(){return{}}}_e.Constraint=r;class l extends r{constructor(e){super(),this.defaultMaxValue=2,this.defaultAxis=0,this.maxValue=null!=e.maxValue?e.maxValue:this.defaultMaxValue,this.axis=null!=e.axis?e.axis:this.defaultAxis}apply(s){return(0,e.tidy)(()=>{const e=n(s,this.axis),r=t.clipByValue(e,0,this.maxValue);return t.mul(s,t.div(r,t.add((0,i.epsilon)(),e)))})}getConfig(){return{maxValue:this.maxValue,axis:this.axis}}}_e.MaxNorm=l,l.className='MaxNorm',e.serialization.registerClass(l);class u extends r{constructor(e){super(),this.defaultAxis=0,this.axis=null!=e.axis?e.axis:this.defaultAxis}apply(s){return(0,e.tidy)(()=>t.div(s,t.add((0,i.epsilon)(),n(s,this.axis))))}getConfig(){return{axis:this.axis}}}_e.UnitNorm=u,u.className='UnitNorm',e.serialization.registerClass(u);class o extends r{apply(e){return t.relu(e)}}_e.NonNeg=o,o.className='NonNeg',e.serialization.registerClass(o);class x extends r{constructor(e){super(),this.defaultMinValue=0,this.defaultMaxValue=1,this.defaultRate=1,this.defaultAxis=0,this.minValue=null!=e.minValue?e.minValue:this.defaultMinValue,this.maxValue=null!=e.maxValue?e.maxValue:this.defaultMaxValue,this.rate=null!=e.rate?e.rate:this.defaultRate,this.axis=null!=e.axis?e.axis:this.defaultAxis}apply(s){return(0,e.tidy)(()=>{const e=n(s,this.axis),r=t.add(t.mul(this.rate,t.clipByValue(e,this.minValue,this.maxValue)),t.mul(1-this.rate,e));return t.mul(s,t.div(r,t.add((0,i.epsilon)(),e)))})}getConfig(){return{minValue:this.minValue,maxValue:this.maxValue,rate:this.rate,axis:this.axis}}}_e.MinMaxNorm=x,x.className='MinMaxNorm',e.serialization.registerClass(x);const f=_e.CONSTRAINT_IDENTIFIER_REGISTRY_SYMBOL_MAP={maxNorm:'MaxNorm',minMaxNorm:'MinMaxNorm',nonNeg:'NonNeg',unitNorm:'UnitNorm'};function c(t,i={}){return(0,s.deserializeKerasObject)(t,e.serialization.SerializationMap.getMap().classNameMap,i,'constraint')}},2189,[1158,2183,2174]);
__d(function(g,r,i,a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.constant=function(o){return new n.Constant(o)},e.glorotNormal=function(o){return new n.GlorotNormal(o)},e.glorotUniform=function(o){return new n.GlorotUniform(o)},e.heNormal=function(o){return new n.HeNormal(o)},e.heUniform=function(o){return new n.HeUniform(o)},e.identity=function(o){return new n.Identity(o)},e.leCunNormal=function(o){return new n.LeCunNormal(o)},e.leCunUniform=function(o){return new n.LeCunUniform(o)},e.ones=function(){return new n.Ones},e.orthogonal=function(o){return new n.Orthogonal(o)},e.randomNormal=function(o){return new n.RandomNormal(o)},e.randomUniform=function(o){return new n.RandomUniform(o)},e.truncatedNormal=function(o){return new n.TruncatedNormal(o)},e.varianceScaling=function(o){return new n.VarianceScaling(o)},e.zeros=
/**
   * @license
   * Copyright 2018 Google LLC
   *
   * Use of this source code is governed by an MIT-style
   * license that can be found in the LICENSE file or at
   * https://opensource.org/licenses/MIT.
   * =============================================================================
   */
function(){return new n.Zeros};var n=r(d[0])},2190,[2180]);
__d(function(n,e,o,r,t,u,i){Object.defineProperty(u,"__esModule",{value:!0}),Object.defineProperty(u,"Layer",{enumerable:!0,get:function(){return l.Layer}}),Object.defineProperty(u,"RNN",{enumerable:!0,get:function(){return C.RNN}}),Object.defineProperty(u,"RNNCell",{enumerable:!0,get:function(){return C.RNNCell}}),u.activation=function(n){return new p.Activation(n)},u.add=function(n){return new s.Add(n)},u.alphaDropout=function(n){return new P.AlphaDropout(n)},u.average=function(n){return new s.Average(n)},u.averagePooling1d=h,u.averagePooling2d=S,u.averagePooling3d=A,u.avgPool1d=function(n){return h(n)},u.avgPool2d=function(n){return S(n)},u.avgPool3d=function(n){return A(n)},u.avgPooling1d=function(n){return h(n)},u.avgPooling2d=function(n){return S(n)},u.avgPooling3d=function(n){return A(n)},u.batchNormalization=function(n){return new v.BatchNormalization(n)},u.bidirectional=function(n){return new N.Bidirectional(n)},u.categoryEncoding=function(n){return new L.CategoryEncoding(n)},u.centerCrop=function(n){return new x.CenterCrop(n)},u.concatenate=function(n){return new s.Concatenate(n)},u.conv1d=function(n){return new d.Conv1D(n)},u.conv2d=function(n){return new d.Conv2D(n)},u.conv2dTranspose=function(n){return new d.Conv2DTranspose(n)},u.conv3d=function(n){return new d.Conv3D(n)},u.conv3dTranspose=function(n){return new d.Conv3DTranspose(n)},u.convLstm2d=function(n){return new w.ConvLSTM2D(n)},u.convLstm2dCell=function(n){return new w.ConvLSTM2DCell(n)},u.cropping2D=function(n){return new d.Cropping2D(n)},u.dense=function(n){return new p.Dense(n)},u.depthwiseConv2d=function(n){return new g.DepthwiseConv2D(n)},u.dot=function(n){return new s.Dot(n)},u.dropout=function(n){return new p.Dropout(n)},u.elu=function(n){return new f.ELU(n)},u.embedding=function(n){return new m.Embedding(n)},u.flatten=function(n){return new p.Flatten(n)},u.gaussianDropout=function(n){return new P.GaussianDropout(n)},u.gaussianNoise=function(n){return new P.GaussianNoise(n)},u.globalAveragePooling1d=function(n){return new b.GlobalAveragePooling1D(n)},u.globalAveragePooling2d=function(n){return new b.GlobalAveragePooling2D(n)},u.globalMaxPool2d=u.globalMaxPool1d=void 0,u.globalMaxPooling1d=U,u.globalMaxPooling2d=T,u.gru=function(n){return new C.GRU(n)},u.gruCell=function(n){return new C.GRUCell(n)},Object.defineProperty(u,"input",{enumerable:!0,get:function(){return c.input}}),u.inputLayer=
/**
   * @license
   * Copyright 2018 Google LLC
   *
   * Use of this source code is governed by an MIT-style
   * license that can be found in the LICENSE file or at
   * https://opensource.org/licenses/MIT.
   * =============================================================================
   */
function(n){return new a.InputLayer(n)},u.layerNormalization=function(n){return new v.LayerNormalization(n)},u.leakyReLU=function(n){return new f.LeakyReLU(n)},u.lstm=function(n){return new C.LSTM(n)},u.lstmCell=function(n){return new C.LSTMCell(n)},u.masking=function(n){return new p.Masking(n)},u.maxPool2d=u.maxPool1d=void 0,u.maxPooling1d=G,u.maxPooling2d=z,u.maxPooling3d=function(n){return new b.MaxPooling3D(n)},u.maximum=function(n){return new s.Maximum(n)},u.minimum=function(n){return new s.Minimum(n)},u.multiply=function(n){return new s.Multiply(n)},u.permute=function(n){return new p.Permute(n)},u.prelu=function(n){return new f.PReLU(n)},u.randomWidth=function(n){return new y.RandomWidth(n)},u.reLU=function(n){return new f.ReLU(n)},u.repeatVector=function(n){return new p.RepeatVector(n)},u.rescaling=function(n){return new R.Rescaling(n)},u.reshape=function(n){return new p.Reshape(n)},u.resizing=function(n){return new M.Resizing(n)},u.rnn=function(n){return new C.RNN(n)},u.separableConv2d=function(n){return new d.SeparableConv2D(n)},u.simpleRNN=function(n){return new C.SimpleRNN(n)},u.simpleRNNCell=function(n){return new C.SimpleRNNCell(n)},u.softmax=function(n){return new f.Softmax(n)},u.spatialDropout1d=function(n){return new p.SpatialDropout1D(n)},u.stackedRNNCells=function(n){return new C.StackedRNNCells(n)},u.thresholdedReLU=function(n){return new f.ThresholdedReLU(n)},u.timeDistributed=function(n){return new N.TimeDistributed(n)},u.upSampling2d=function(n){return new d.UpSampling2D(n)},u.zeroPadding2d=function(n){return new D.ZeroPadding2D(n)};var a=e(i[0]),l=e(i[1]),c=e(i[2]),f=e(i[3]),d=e(i[4]),g=e(i[5]),w=e(i[6]),p=e(i[7]),m=e(i[8]),s=e(i[9]),P=e(i[10]),v=e(i[11]),D=e(i[12]),b=e(i[13]),C=e(i[14]),N=e(i[15]),R=e(i[16]),x=e(i[17]),L=e(i[18]),M=e(i[19]),y=e(i[20]);function h(n){return new b.AveragePooling1D(n)}function S(n){return new b.AveragePooling2D(n)}function A(n){return new b.AveragePooling3D(n)}function U(n){return new b.GlobalMaxPooling1D(n)}function T(n){return new b.GlobalMaxPooling2D(n)}function G(n){return new b.MaxPooling1D(n)}function z(n){return new b.MaxPooling2D(n)}u.globalMaxPool1d=U,u.globalMaxPool2d=T,u.maxPool1d=G,u.maxPool2d=z},2191,[2175,2177,2192,2209,2212,2214,2215,2217,2218,2219,2220,2221,2222,2223,2216,2224,2225,2226,2227,2229,2230]);
__d(function(g,r,i,a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.input=function(n){return(0,t.Input)(n)},Object.defineProperty(e,"loadLayersModel",{enumerable:!0,get:function(){return u.loadLayersModel}}),e.model=
/**
   * @license
   * Copyright 2018 Google LLC
   *
   * Use of this source code is governed by an MIT-style
   * license that can be found in the LICENSE file or at
   * https://opensource.org/licenses/MIT.
   * =============================================================================
   */
function(n){return new o.LayersModel(n)},e.registerCallbackConstructor=function(t,o){n.CallbackConstructorRegistry.registerCallbackConstructor(t,o)},e.sequential=function(n){return new u.Sequential(n)};var n=r(d[0]),t=r(d[1]),o=r(d[2]),u=r(d[3])},2192,[2193,2175,2195,2208]);
__d(function(g,_r,_i,a,m,_e,d){Object.defineProperty(_e,"__esModule",{value:!0}),_e.ModelLoggingVerbosity=_e.History=_e.DEFAULT_YIELD_EVERY_MS=_e.CustomCallback=_e.CallbackList=_e.CallbackConstructorRegistry=_e.BaseLogger=_e.BaseCallback=void 0,_e.configureCallbacks=function(t,s,n,o,i,e,c,u,p){const E=new h,f=[new l,...y.createCallbacks(s)];null!=t&&f.push(...t);f.push(E);const b=new r(f);return b.setParams({epochs:n,initialEpoch:o,samples:i,steps:e,batchSize:c,verbose:s,doValidation:u,metrics:p}),{callbackList:b,history:E}},_e.standardizeCallbacks=function(t,s){null==t&&(t={});if(t instanceof c)return[t];if(Array.isArray(t)&&t[0]instanceof c)return t;return i.toList(t).map(t=>new u(t,s))};var t,s=_r(d[0]),n=_r(d[1]),o=_r(d[2]),i=(function(t,s){if("function"==typeof WeakMap)var n=new WeakMap,o=new WeakMap;return(function(t,s){if(!s&&t&&t.__esModule)return t;var i,e,c={__proto__:null,default:t};if(null===t||"object"!=typeof t&&"function"!=typeof t)return c;if(i=s?o:n){if(i.has(t))return i.get(t);i.set(t,c)}for(const s in t)"default"!==s&&{}.hasOwnProperty.call(t,s)&&((e=(i=Object.defineProperty)&&Object.getOwnPropertyDescriptor(t,s))&&(e.get||e.set)?i(c,s,e):c[s]=t[s]);return c})(t,s)}
/**
   * @license
   * Copyright 2018 Google LLC
   *
   * Use of this source code is governed by an MIT-style
   * license that can be found in the LICENSE file or at
   * https://opensource.org/licenses/MIT.
   * =============================================================================
   */)(_r(d[3]));!(function(t){t[t.SILENT=0]="SILENT",t[t.VERBOSE=1]="VERBOSE"})(t||(_e.ModelLoggingVerbosity=t={}));const e=_e.DEFAULT_YIELD_EVERY_MS=125;class c{constructor(){this.validationData=null}setParams(t){this.params=t}async onEpochBegin(t,s){}async onEpochEnd(t,s){}async onBatchBegin(t,s){}async onBatchEnd(t,s){}async onTrainBegin(t){}async onTrainEnd(t){}setModel(t){}}_e.BaseCallback=c;class r{constructor(t,s=10){null==t&&(t=[]),this.callbacks=t,this.queueLength=s}append(t){this.callbacks.push(t)}setParams(t){for(const s of this.callbacks)s.setParams(t)}setModel(t){for(const s of this.callbacks)s.setModel(t)}async onEpochBegin(t,s){null==s&&(s={});for(const n of this.callbacks)await n.onEpochBegin(t,s)}async onEpochEnd(t,s){null==s&&(s={});for(const n of this.callbacks)await n.onEpochEnd(t,s)}async onBatchBegin(t,s){null==s&&(s={});for(const n of this.callbacks)await n.onBatchBegin(t,s)}async onBatchEnd(t,s){null==s&&(s={});for(const n of this.callbacks)await n.onBatchEnd(t,s)}async onTrainBegin(t){null==t&&(t={});for(const s of this.callbacks)await s.onTrainBegin(t)}async onTrainEnd(t){null==t&&(t={});for(const s of this.callbacks)await s.onTrainEnd(t)}}_e.CallbackList=r;class l extends c{constructor(){super()}async onEpochBegin(t){this.seen=0,this.totals={}}async onBatchEnd(t,n){null==n&&(n={});const o=null==n.size?0:n.size;this.seen+=o;for(const t in n){const i=n[t];if('number'==typeof i)this.totals.hasOwnProperty(t)||(this.totals[t]=0),this.totals[t]=this.totals[t]+i*o;else{let n;t in this.totals?n=this.totals[t]:this.totals[t]=0;const e=(0,s.tidy)(()=>(0,s.add)(this.totals[t],(0,s.mul)(i,o)));this.totals[t]=e,null!=n&&n.dispose()}}}async onEpochEnd(t,n){if(null!=n)for(const t of this.params.metrics)null!=this.totals[t]&&('number'==typeof this.totals[t]?n[t]=this.totals[t]/this.seen:(0,s.tidy)(()=>{const o=(0,s.mul)((0,s.div)(1,this.seen),this.totals[t]);n[t]=o,this.totals[t].dispose(),(0,s.keep)(n[t])}))}}_e.BaseLogger=l;class h extends c{async onTrainBegin(t){this.epoch=[],this.history={}}async onEpochEnd(t,s){null==s&&(s={}),this.epoch.push(t);for(const t in s)null==this.history[t]&&(this.history[t]=[]),this.history[t].push(s[t])}async syncData(){const t=[],s=[],n=[];for(const o in this.history){const i=this.history[o];for(let e=0;e<i.length;++e)if('number'!=typeof i[e]){const c=i[e];t.push(c.data()),s.push(o),n.push(e)}}const o=await Promise.all(t);for(let t=0;t<o.length;++t){this.history[s[t]][n[t]].dispose(),this.history[s[t]][n[t]]=o[t][0]}}}_e.History=h;class u extends c{constructor(t,n){if(super(),this.currentEpoch=0,this.nowFunc=t.nowFunc,this.nextFrameFunc=t.nextFrameFunc||s.nextFrame,this.yieldEvery=n||'auto','auto'===this.yieldEvery&&(this.yieldEvery=e),'never'===this.yieldEvery&&null!=t.onYield)throw new Error("yieldEvery is `never` but you provided an `onYield` callback. Either change `yieldEvery` or remove the callback");s.util.isNumber(this.yieldEvery)&&(this.maybeWait=i.debounce(this.maybeWait.bind(this),this.yieldEvery,this.nowFunc)),this.trainBegin=t.onTrainBegin,this.trainEnd=t.onTrainEnd,this.epochBegin=t.onEpochBegin,this.epochEnd=t.onEpochEnd,this.batchBegin=t.onBatchBegin,this.batchEnd=t.onBatchEnd,this.yield=t.onYield}async maybeWait(t,s,n){const i=[];null!=this.yield&&(await(0,o.resolveScalarsInLogs)(n),i.push(this.yield(t,s,n))),i.push(this.nextFrameFunc()),await Promise.all(i)}async onEpochBegin(t,s){this.currentEpoch=t,null!=this.epochBegin&&(await(0,o.resolveScalarsInLogs)(s),await this.epochBegin(t,s))}async onEpochEnd(t,s){const n=[];null!=this.epochEnd&&(await(0,o.resolveScalarsInLogs)(s),n.push(this.epochEnd(t,s))),'epoch'===this.yieldEvery&&n.push(this.nextFrameFunc()),await Promise.all(n)}async onBatchBegin(t,s){null!=this.batchBegin&&(await(0,o.resolveScalarsInLogs)(s),await this.batchBegin(t,s))}async onBatchEnd(t,n){const i=[];null!=this.batchEnd&&(await(0,o.resolveScalarsInLogs)(n),i.push(this.batchEnd(t,n))),'batch'===this.yieldEvery?i.push(this.nextFrameFunc()):s.util.isNumber(this.yieldEvery)&&i.push(this.maybeWait(this.currentEpoch,t,n)),await Promise.all(i)}async onTrainBegin(t){null!=this.trainBegin&&(await(0,o.resolveScalarsInLogs)(t),await this.trainBegin(t))}async onTrainEnd(t){null!=this.trainEnd&&(await(0,o.resolveScalarsInLogs)(t),await this.trainEnd(t))}}_e.CustomCallback=u;class y{constructor(){}static registerCallbackConstructor(t,n){s.util.assert(t>=0&&Number.isInteger(t),()=>`Verbosity level is expected to be an integer >= 0, but got ${t}`),y.checkForDuplicate(n),null==y.constructors[t]&&(y.constructors[t]=[]),y.constructors[t].push(n)}static checkForDuplicate(t){for(const s in y.constructors){y.constructors[+s].forEach(s=>{if(s===t)throw new n.ValueError('Duplicate callback constructor.')})}}static clear(){y.constructors={}}static createCallbacks(t){const s=[];for(const n in y.constructors){const o=+n;t>=o&&s.push(...y.constructors[o])}return s.map(t=>new t)}}_e.CallbackConstructorRegistry=y,y.constructors={}},2193,[1158,2172,2194,2174]);
__d(function(g,r,_i,a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.disposeTensorsInLogs=function(n){if(null==n)return;for(const o in n){const s=n[o];'number'!=typeof s&&s.dispose()}},e.resolveScalarsInLogs=
/**
   * @license
   * Copyright 2018 Google LLC
   *
   * Use of this source code is governed by an MIT-style
   * license that can be found in the LICENSE file or at
   * https://opensource.org/licenses/MIT.
   * =============================================================================
   */
async function(o){if(null==o)return;const s=[],t=[],i=[];for(const n in o){const u=o[n];if('number'!=typeof u){const o=u;s.push(o.data()),t.push(n),i.push(o)}}if(s.length>0){const u=await Promise.all(s);for(let n=0;n<u.length;++n)o[t[n]]=u[n][0];(0,n.dispose)(i)}};var n=r(d[0])},2194,[1158]);
__d(function(e,t,s,i,n,r,o){Object.defineProperty(r,"__esModule",{value:!0}),r.LayersModel=r.Functional=void 0,r.checkArrayLengths=F,r.collectMetrics=M,r.isDataArray=D,r.isDataDict=_,r.isDataTensor=C,r.standardizeInputData=x;var a=S(t(o[0])),l=a,h=S(t(o[1])),c=t(o[2]),u=t(o[3]),p=t(o[4]),d=t(o[5]),f=t(o[6]),g=S(t(o[7])),m=S(t(o[8])),y=S(t(o[9])),w=t(o[10]),b=t(o[11]),T=t(o[12]),v=t(o[13]),E=t(o[14]),A=t(o[15]),O=t(o[16]),z=t(o[17]),$=t(o[18]),N=t(o[19]),k=t(o[20]);function S(e,t){if("function"==typeof WeakMap)var s=new WeakMap,i=new WeakMap;return(S=function(e,t){if(!t&&e&&e.__esModule)return e;var n,r,o={__proto__:null,default:e};if(null===e||"object"!=typeof e&&"function"!=typeof e)return o;if(n=t?i:s){if(n.has(e))return n.get(e);n.set(e,o)}for(const t in e)"default"!==t&&{}.hasOwnProperty.call(e,t)&&((r=(n=Object.defineProperty)&&Object.getOwnPropertyDescriptor(e,t))&&(r.get||r.set)?n(o,t,r):o[t]=e[t]);return o})(e,t)}
/**
   * @license
   * Copyright 2018 Google LLC
   *
   * Use of this source code is governed by an MIT-style
   * license that can be found in the LICENSE file or at
   * https://opensource.org/licenses/MIT.
   * =============================================================================
   */function C(e){return e instanceof a.Tensor}function D(e){return Array.isArray(e)}function _(e){return!C(e)&&!D(e)}function x(e,t,s,i=!0,n=""){if(null==t||0===t.length){if(null!=e){let t=!1;if(D(e)&&e.length>0)t=!0;else if(_(e)){for(const s in e)if(e.hasOwnProperty(s)){t=!0;break}}else t=!0;if(t)throw new p.ValueError(`Error when checking model ${n} expected no data, but got ${e}`)}return[]}if(null==e)return t.map(e=>null);let r;if(_(e)){r=[];for(const s of t){if(null==e[s])throw new p.ValueError(`No data provided for "${s}". Need data for each key in: ${t}`);r.push(e[s])}}else if(D(e)){if(e.length!==t.length)throw new p.ValueError(`Error when checking model ${n}: the Array of Tensors that you are passing to your model is not the size the model expected. Expected to see ${t.length} Tensor(s), but instead got the following list of Tensor(s): ${e}`);r=e}else{if(t.length>1)throw new p.ValueError(`The model ${n} expects ${t.length} Tensor(s), but only received one Tensor. Found: Tensor with shape ${e.shape}`);r=[e]}if(r=(0,N.ensureTensorsRank2OrHigher)(r),null!=s)for(let e=0;e<t.length;++e){if(null==s[e])continue;const o=r[e];if(o.shape.length!==s[e].length)throw new p.ValueError(`Error when checking ${n}: expected ${t[e]} to have ${s[e].length} dimension(s). but got array with shape ${o.shape}`);for(let t=0;t<s[e].length;++t){if(0===t&&!i)continue;const r=o.shape[t],a=s[e][t];if(null!=a&&a>=0&&r!==a)throw new p.ValueError(`${n} expected a batch of elements where each example has shape [${s[e].slice(1,s[e].length)}] (i.e.,tensor shape [*,${s[e].slice(1,s[e].length)}]) but the ${n} received an input with ${o.shape[0]} examples, each with shape [${o.shape.slice(1,o.shape.length)}] (tensor shape [${o.shape}])`)}}return r}function F(e,t,s){const i=(0,b.unique)(e.map(e=>e.shape[0]));i.sort();const n=(0,b.unique)(t.map(e=>e.shape[0]));if(n.sort(),i.length>1)throw new p.ValueError(`All input Tensors (x) should have the same number of samples. Got array shapes: ${JSON.stringify(e.map(e=>e.shape))}`);if(n.length>1)throw new p.ValueError(`All target Tensors (y) should have the same number of samples. Got array shapes: ${JSON.stringify(t.map(e=>e.shape))}`);if(i.length>0&&n.length>0&&!a.util.arraysEqual(i,n))throw new p.ValueError(`Input Tensors should have the same number of samples as target Tensors. Found ${i[0]} input sample(s) and ${n[0]} target sample(s).`)}function L(e,t,s){const i=[g.meanSquaredError,g.binaryCrossentropy,g.categoricalCrossentropy];for(let n=0;n<e.length;++n){const r=e[n],o=t[n],a=s[n];if(null!=o){if(o===g.categoricalCrossentropy&&1===r.shape[r.shape.length-1])throw new p.ValueError(`You are passing a target array of shape ${r.shape} while using a loss 'categorical_crossentropy'. 'categorical_crossentropy'expects targets to be binary matrices (1s and 0s) of shape [samples, classes].`);if(-1!==i.indexOf(o)){const e=r.shape.slice(1),t=a.slice(1);for(let s=0;s<e.length;++s){const i=e[s],n=t[s];if(null!=n&&i!==n)throw new p.ValueError(`A target Tensor with shape ${r.shape} was passed for an output of shape ${a}, while using a loss function that expects targets to have the same shape as the output.`)}}}}}function V(e,t,s,i=!0,n=""){let r;if(Array.isArray(e)){if(e.length!==t.length)throw new p.ValueError(`Error when checking model ${n}: the Array of Tensors that you are passing to your model is not the size the the model expected. Expected to see ${t.length} Tensor(s), but instead got ${e.length} Tensors(s).`);r=e}else{if(t.length>1)throw new p.ValueError(`The model expects ${t.length} ${n} Tensors, but only received one Tensor. Found: array with shape ${JSON.stringify(e.shape)}.`);r=[e]}if(null!=s)for(let e=0;e<t.length;++e){if(null==s[e])continue;const o=r[e];if(o.shape.length!==s[e].length)throw new p.ValueError(`Error when checking ${n}: expected ${t[e]} to have ${s[e].length} dimension(s), but got array with shape ${JSON.stringify(o.shape)}`);for(let r=0;r<s[e].length;++r){if(0===r&&!i)continue;const a=o.shape[r],l=s[e][r];if(null!=l&&l!==a)throw new p.ValueError(`Error when checking ${n}: expected ${t[e]} to have shape ${JSON.stringify(s[e])} but got array with shape ${JSON.stringify(o.shape)}.`)}}}function M(e,t){if(null==e||Array.isArray(e)&&0===e.length)return t.map(e=>[]);let s;if('string'==typeof e||'function'==typeof e)s=[e];else{if(!Array.isArray(e)&&'object'!=typeof e)throw new TypeError(`Type of metrics argument not understood. Expected an string,function, Array, or Object, found: ${e}`);s=e}if(Array.isArray(s))return t.map(e=>s);{const e=[];for(const i of t){let t=s.hasOwnProperty(i)?s[i]:[];Array.isArray(t)||(t=[t]),e.push(t)}return e}}class W extends O.Container{constructor(e){super(e),this.isTraining=!1}summary(e,t,s=console.log){if(!this.built)throw new p.ValueError("This model has never been called, thus its weights have not been created yet. So no summary can be displayed. Build the model first (e.g., by calling it on some test data).");(0,T.printSummary)(this,e,t,s)}compile(e){if(null==e.loss&&(e.loss=[]),this.loss=e.loss,'string'==typeof e.optimizer)this.optimizer_=y.getOptimizer(e.optimizer),this.isOptimizerOwned=!0;else{if(!(e.optimizer instanceof a.Optimizer))throw new p.ValueError("User-defined optimizer must be an instance of tf.Optimizer.");this.optimizer_=e.optimizer,this.isOptimizerOwned=!1}let t=[];if(Array.isArray(e.loss)||'string'==typeof e.loss||'function'==typeof e.loss)if(Array.isArray(e.loss)){if(e.loss.length!==this.outputs.length)throw new p.ValueError(`When passing an Array as loss, it should have one entry per model output. The model has ${this.outputs.length} output(s), but you passed loss=${e.loss}.`);const s=e.loss;t=s.map(e=>g.get(e))}else{const s=g.get(e.loss);this.outputs.forEach(e=>{t.push(s)})}else{e.loss=e.loss;for(const t in e.loss)if(-1===this.outputNames.indexOf(t))throw new p.ValueError(`Unknown entry in loss dictionary: "${t}". Only expected the following keys: ${this.outputNames}`);for(const s of this.outputNames)null==e.loss[s]&&console.warn(`Output "${s}" is missing from loss dictionary. We assume this was done on purpose, and we will not be expecting data to be passed to ${s} during training`),t.push(g.get(e.loss[s]))}this.lossFunctions=t,this.feedOutputNames=[],this.feedOutputShapes=[],this.feedLossFns=[];for(let e=0;e<this.outputs.length;++e){const t=this.internalOutputShapes[e],s=this.outputNames[e];this.feedOutputNames.push(s),this.feedOutputShapes.push(t),this.feedLossFns.push(this.lossFunctions[e])}const s=[];this.metrics=e.metrics,this.metricsNames=['loss'],this.metricsTensors=[],(0,u.nameScope)('loss',()=>{for(let e=0;e<this.outputs.length;++e){if(-1!==s.indexOf(e))continue;const t=this.lossFunctions[e];this.outputs.length>1&&(this.metricsTensors.push([t,e]),this.metricsNames.push(this.outputNames[e]+'_loss'))}});const i=M(e.metrics,this.outputNames),n=(e,t,s)=>{this.outputNames.length>1&&(t=this.outputNames[e]+'_'+t),this.metricsNames.push(t),this.metricsTensors.push([s,e])};(0,u.nameScope)('metric',()=>{for(let e=0;e<this.outputs.length;++e){if(-1!==s.indexOf(e))continue;(t=>{let s,i,r;for(const o of t){if('string'==typeof o&&-1!==['accuracy','acc','crossentropy','ce'].indexOf(o)){const t=this.internalOutputShapes[e];let n;1===t[t.length-1]||this.lossFunctions[e]===g.binaryCrossentropy?-1!==['accuracy','acc'].indexOf(o)?i=m.binaryAccuracy:-1!==['crossentropy','ce'].indexOf(o)&&(i=m.binaryCrossentropy):this.lossFunctions[e]===g.sparseCategoricalCrossentropy?-1!==['accuracy','acc'].indexOf(o)?i=m.sparseCategoricalAccuracy:-1!==['crossentropy','ce'].indexOf(o)&&(i=m.sparseCategoricalCrossentropy):-1!==['accuracy','acc'].indexOf(o)?i=m.categoricalAccuracy:-1!==['crossentropy','ce'].indexOf(o)&&(i=m.categoricalCrossentropy),-1!==['accuracy','acc'].indexOf(o)?n='acc':-1!==['crossentropy','ce'].indexOf(o)&&(n='ce'),r=i,s=""+n}else{const e=m.get(o);r=e,s=""+m.getLossOrMetricName(o)}let t;(0,u.nameScope)(s,()=>{t=r}),n(e,s,t)}})(i[e])}}),this.collectedTrainableWeights=this.trainableWeights}checkTrainableWeightsConsistency(){null!=this.collectedTrainableWeights&&this.trainableWeights.length!==this.collectedTrainableWeights.length&&console.warn("Discrepancy between trainableweights and collected trainable weights. Did you set `model.trainable` without calling `model.compile()` afterwards?")}evaluate(e,t,s={}){const i=null==s.batchSize?32:s.batchSize;(0,N.checkBatchSize)(i);const n=this.standardizeUserDataXY(e,t,!0,i);try{const e=n[0].concat(n[1]);this.makeTestFunction();const t=this.testFunction,r=this.testLoop(t,e,i,s.verbose,s.steps);return(0,b.singletonOrArray)(r)}finally{(0,N.disposeNewTensors)(n[0],e),(0,N.disposeNewTensors)(n[1],t)}}async evaluateDataset(e,t){return this.makeTestFunction(),(0,$.evaluateDataset)(this,e,t)}checkNumSamples(e,t,s,i="steps"){let n;if(null!=s){if(n=null,null!=t)throw new p.ValueError(`If ${i} is set, batchSize must be null or undefined.Got batchSize = ${t}`)}else{if(null==e)throw new p.ValueError(`Either the input data should have a defined shape, or ${i} shoud be specified.`);n=Array.isArray(e)?e[0].shape[0]:e.shape[0]}return n}execute(e,t){if(Array.isArray(t)&&0===t.length)throw new p.ValueError('`outputs` is an empty Array, which is not allowed.');const s=Array.isArray(t),i=s?t:[t],n=this.retrieveSymbolicTensors(i),r=new z.FeedDict;if(e instanceof a.Tensor&&(e=[e]),Array.isArray(e)){if(e.length!==this.inputs.length)throw new p.ValueError(`The number of inputs provided (${e.length}) does not match the number of inputs of this model (${this.inputs.length}).`);for(let t=0;t<this.inputs.length;++t)r.add(this.inputs[t],e[t])}else for(const t of this.inputs){const s=e[t.name];if(null==s)throw new p.ValueError(`No value is provided for the model's input ${t.name}`);r.add(t,s)}const o=(0,z.execute)(n,r);return s?o:o[0]}retrieveSymbolicTensors(e){const t=(0,b.pyListRepeat)(null,e.length);let s=e.length;for(const i of this.layers){const n=Array.isArray(i.output)?i.output:[i.output],r=n.map(e=>e.name);for(let i=0;i<e.length;++i){const o=r.indexOf(e[i]);if(-1!==o&&(t[i]=n[o],s--),0===s)break}if(0===s)break}if(s>0){const s=[];throw t.forEach((t,i)=>{null==t&&s.push(e[i])}),new p.ValueError(`Cannot find SymbolicTensors for output name(s): ${JSON.stringify(s)}`)}return t}predictLoop(e,t=32,s=!1){return l.tidy(()=>{const i=this.checkNumSamples(e);if(s)throw new p.NotImplementedError('Verbose predictLoop() is not implemented yet.');const n=(0,N.makeBatches)(i,t),r=this.outputs.map(e=>[]);for(let t=0;t<n.length;++t){l.tidy(()=>{const s=n[t][0],i=n[t][1],r=(0,N.sliceArrays)(e,s,i),o=[];if(Array.isArray(r))for(let e=0;e<r.length;++e)o.push({key:this.inputs[e],value:r[e]});else o.push({key:this.inputs[0],value:r});const a=new z.FeedDict(o);return(0,z.execute)(this.outputs,a)}).forEach((e,t)=>r[t].push(e))}return(0,b.singletonOrArray)(r.map(e=>l.concat(e,0)))})}predict(e,t={}){const s=(0,N.ensureTensorsRank2OrHigher)(e);V(s,this.inputNames,this.feedInputShapes,!1);try{const e=null==t.batchSize?32:t.batchSize;return(0,N.checkBatchSize)(e),this.predictLoop(s,e)}finally{(0,N.disposeNewTensors)(s,e)}}predictOnBatch(e){V(e,this.inputNames,this.feedInputShapes,!0);const t=(Array.isArray(e)?e[0]:e).shape[0];return this.predictLoop(e,t)}standardizeUserDataXY(e,t,s=!0,i){if(null==this.optimizer_)throw new p.RuntimeError("You must compile a model before training/testing. Use LayersModel.compile(modelCompileArgs).");const n=[];for(let e=0;e<this.feedOutputShapes.length;++e){const t=this.feedOutputShapes[e];this.feedLossFns[e]===g.sparseCategoricalCrossentropy?n.push(t.slice(0,t.length-1).concat([1])):n.push(t)}if(F(e=x(e,this.feedInputNames,this.feedInputShapes,!1,'input'),t=x(t,this.feedOutputNames,n,!1,'target')),L(t,this.feedLossFns,this.feedOutputShapes),this.stateful&&null!=i&&i>0&&e[0].shape[0]%i!==0)throw new p.ValueError(`In a stateful network, you should only pass inputs with a number of samples that is divisible by the batch size ${i}. Found: ${e[0].shape[0]} sample(s).`);return[e,t]}async standardizeUserData(e,t,s,i,n=!0,r){const[o,a]=this.standardizeUserDataXY(e,t,n,r);if(null!=s)throw new Error('sample weight is not supported yet.');let l=null;if(null!=i){const e=(0,k.standardizeClassWeights)(i,this.outputNames);l=[];for(let t=0;t<e.length;++t)l.push(await(0,k.standardizeWeights)(a[t],null,e[t]))}return[o,a,l]}testLoop(e,t,s,i=0,n){return l.tidy(()=>{const r=this.checkNumSamples(t,s,n,'steps'),o=[];if(i>0)throw new p.NotImplementedError('Verbose mode is not implemented yet.');if(null!=n)throw new p.NotImplementedError('steps mode in testLoop() is not implemented yet');{const i=(0,N.makeBatches)(r,s),n=(0,a.tensor1d)((0,v.range)(0,r));for(let s=0;s<i.length;++s){const r=i[s][0],c=i[s][1],u=h.sliceAlongFirstAxis(n,r,c-r),p=(0,N.sliceArraysByIndices)(t,u),d=e(p);if(0===s)for(let e=0;e<d.length;++e)o.push((0,a.scalar)(0));for(let e=0;e<d.length;++e){const t=d[e];o[e]=l.add(o[e],l.mul(c-r,t))}}for(let e=0;e<o.length;++e)o[e]=l.div(o[e],r)}return o})}getDedupedMetricsNames(){const e=this.metricsNames,t=[];for(let s=0;s<e.length;++s){const i=e[s];let n=i;if((0,b.count)(e,i)>1){n+=`_${(0,b.count)(e.slice(0,s),i)}`}t.push(n)}return t}makeTrainFunction(){return e=>{const t=[],s=e.slice(0,this.inputs.length),i=e.slice(this.inputs.length,this.inputs.length+this.outputs.length),n=e.slice(this.inputs.length+this.outputs.length,this.inputs.length+2*this.outputs.length),r=[],o=this.collectedTrainableWeights.map(e=>e.read());return[this.optimizer_.minimize(()=>{const e=[];for(let t=0;t<this.inputs.length;++t)e.push({key:this.inputs[t],value:s[t]});const o=new z.FeedDict(e),a=(0,z.execute)(this.outputs,o,{training:!0});let h;for(let e=0;e<this.lossFunctions.length;++e){let s=(0,this.lossFunctions[e])(i[e],a[e]);null!=n[e]&&(s=(0,k.computeWeightedLoss)(s,n[e]));const r=l.mean(s);t.push(r),h=0===e?s:l.add(h,s)}for(let e=0;e<this.metricsTensors.length;++e){let s;if(this.outputs.length>1&&e<this.outputs.length)s=t[e];else{const t=this.metricsTensors[e][0],n=this.metricsTensors[e][1];s=l.mean(t(i[n],a[n]))}l.keep(s),r.push(s)}return h=l.mean(h),this.calculateLosses().forEach(e=>{h=l.add(h,e)}),h},!0,o)].concat(r)}}makeTestFunction(){this.testFunction=e=>l.tidy(()=>{const t=[];let s;const i=e.slice(0,this.inputs.length),n=e.slice(this.inputs.length,this.inputs.length+this.outputs.length),r=[];for(let e=0;e<this.inputs.length;++e)r.push({key:this.inputs[e],value:i[e]});const o=new z.FeedDict(r),a=(0,z.execute)(this.outputs,o);for(let e=0;e<this.lossFunctions.length;++e){const i=this.lossFunctions[e],r=l.mean(i(n[e],a[e]));s=0===e?r:l.add(s,r),t.push(s)}for(let e=0;e<this.metricsTensors.length;++e){const s=this.metricsTensors[e][0],i=this.metricsTensors[e][1],r=l.mean(s(n[i],a[i]));t.push(r)}return t})}async fit(e,t,s={}){if(this.isTraining)throw new Error('Cannot start training because another fit() call is ongoing.');let i,n,r,o,a,h,u,d,f;this.isTraining=!0;try{const l=null==s.batchSize?32:s.batchSize;(0,N.checkBatchSize)(l);const g=!1,m=await this.standardizeUserData(e,t,s.sampleWeight,s.classWeight,g,l);i=m[0],n=m[1],f=m[2];let y,w=!1;if(null!=s.validationData&&s.validationData.length>0){if(w=!0,2!==s.validationData.length)throw 3===s.validationData.length?new p.NotImplementedError('validationData including sample weights is not supported yet.'):new p.ValueError(`When passing validation data, it must contain 2 (valX, valY) or 3 (valX, valY, valSampleWeight) items; ${s.validationData} is invalid.`);a=s.validationData[0],h=s.validationData[1];const e=!0,t=await this.standardizeUserData(a,h,null,null,e,l);u=t[0],d=t[1],y=u.concat(d)}else if(null!=s.validationSplit&&s.validationSplit>0&&s.validationSplit<1){w=!0;const e=Math.floor(i[0].shape[0]*(1-s.validationSplit)),t=i[0].shape[0];u=(0,N.sliceArrays)(i,e,t),r=i,i=(0,N.sliceArrays)(i,0,e),d=(0,N.sliceArrays)(n,e,t),o=n,n=(0,N.sliceArrays)(n,0,e),y=u.concat(d)}else null!=s.validationSteps&&(w=!0);const b=i.concat(n).concat(f);this.checkTrainableWeightsConsistency();const T=this.makeTrainFunction(),v=this.getDedupedMetricsNames();let E,A;w?(this.makeTestFunction(),E=this.testFunction,A=v.slice().concat(v.map(e=>'val_'+e))):(E=null,y=[],A=v.slice());const O=(0,c.standardizeCallbacks)(s.callbacks,s.yieldEvery);return await this.fitLoop(T,b,v,l,s.epochs,s.verbose,O,E,y,s.shuffle,A,s.initialEpoch,null,null)}finally{this.isTraining=!1,(0,N.disposeNewTensors)(i,e),(0,N.disposeNewTensors)(n,t),(0,N.disposeNewTensors)(r,e),(0,N.disposeNewTensors)(o,t),(0,N.disposeNewTensors)(u,a),(0,N.disposeNewTensors)(d,h),null!=f&&l.dispose(f)}}async fitLoop(e,t,s,i,n,r,o,u,d,g,m,y,w,b){null==i&&(i=32),null==n&&(n=1),null==g&&(g=!0),null==y&&(y=0);let T=!1;if(null!=u&&null!=d&&(T=!0),null!=b&&(T=!0,null==w))throw new p.ValueError("Can only use `validationSteps` when doing step-wise training, i.e., `stepsPerEpoch` must be set.");const E=this.checkNumSamples(t,i,w,'steps_per_epoch');let A;null!=E&&(A=(0,v.range)(0,E)),null==r&&(r=1);const{callbackList:O,history:z}=(0,c.configureCallbacks)(o,r,n,y,E,w,i,T,m);O.setModel(this),this.history=z,await O.onTrainBegin(),this.stopTraining_=!1;for(let r=y;r<n;++r){await O.onEpochBegin(r);const n={};if(null!=w)throw new p.NotImplementedError('stepsPerEpoch mode is not implemented yet.');{if('batch'===g)throw new p.NotImplementedError("batch shuffling is not implemneted yet");g&&a.util.shuffle(A);const r=(0,a.tensor1d)(A),o=(0,N.makeBatches)(E,i);for(let a=0;a<o.length;++a){const c={};if(await O.onBatchBegin(a,c),l.tidy(()=>{const p=o[a][0],f=o[a][1],g=h.sliceAlongFirstAxis(r,p,f-p);c.batch=a,c.size=f-p;const m=(0,N.sliceArraysByIndices)(t,g),y=e(m);for(let e=0;e<s.length;++e){const t=s[e],i=y[e];c[t]=i,l.keep(i)}if(a===o.length-1&&T){const e=this.testLoop(u,d,i);for(let t=0;t<s.length;++t){const i=s[t],r=e[t];l.keep(r),n['val_'+i]=r}}}),await O.onBatchEnd(a,c),(0,f.disposeTensorsInLogs)(c),this.stopTraining_)break}r.dispose()}if(await O.onEpochEnd(r,n),this.stopTraining_)break}return await O.onTrainEnd(),await this.history.syncData(),this.history}async fitDataset(e,t){return(0,$.fitDataset)(this,e,t)}async trainOnBatch(e,t){const s=await this.standardizeUserData(e,t),i=s[0],n=s[1],r=this.makeTrainFunction()(i.concat(n)),o=[];for(const e of r){const t=await e.data();o.push(t[0])}return l.dispose(r),(0,N.disposeNewTensors)(s[0],e),(0,N.disposeNewTensors)(s[1],t),(0,b.singletonOrArray)(o)}getNamedWeights(e){const t=[],s=null!=e&&e.trainableOnly,i=s?this.trainableWeights:this.weights,n=this.getWeights(s);for(let e=0;e<i.length;++e)s&&!i[e].trainable||t.push({name:i[e].originalName,tensor:n[e]});return t}set stopTraining(e){this.stopTraining_=e}get stopTraining(){return this.stopTraining_}get optimizer(){return this.optimizer_}set optimizer(e){this.optimizer_!==e&&(this.optimizer_=e,this.isOptimizerOwned=!1)}dispose(){const e=super.dispose();if(0===e.refCountAfterDispose&&null!=this.optimizer&&this.isOptimizerOwned){const t=l.memory().numTensors;this.optimizer_.dispose(),e.numDisposedVariables+=t-l.memory().numTensors}return e}getLossIdentifiers(){let e;if('string'==typeof this.loss)e=(0,b.toSnakeCase)(this.loss);else if(Array.isArray(this.loss)){for(const e of this.loss)if('string'!=typeof e)throw new Error('Serialization of non-string loss is not supported.');e=this.loss.map(e=>(0,b.toSnakeCase)(e))}else{const t=Object.keys(this.loss);e={};const s=this.loss;for(const i of t){if('string'!=typeof s[i])throw new Error('Serialization of non-string loss is not supported.');e[i]=(0,b.toSnakeCase)(s[i])}}return e}getMetricIdentifiers(){if('string'==typeof this.metrics||'function'==typeof this.metrics)return[(0,b.toSnakeCase)(m.getLossOrMetricName(this.metrics))];if(Array.isArray(this.metrics))return this.metrics.map(e=>(0,b.toSnakeCase)(m.getLossOrMetricName(e)));{const e={};for(const t in this.metrics)e[t]=(0,b.toSnakeCase)(m.getLossOrMetricName(this.metrics[t]));return e}}getTrainingConfig(){return{loss:this.getLossIdentifiers(),metrics:this.getMetricIdentifiers(),optimizer_config:{class_name:this.optimizer.getClassName(),config:this.optimizer.getConfig()}}}loadTrainingConfig(e){if(null!=e.weighted_metrics)throw new Error('Loading weight_metrics is not supported yet.');if(null!=e.loss_weights)throw new Error('Loading loss_weights is not supported yet.');if(null!=e.sample_weight_mode)throw new Error('Loading sample_weight_mode is not supported yet.');const t=(0,E.convertPythonicToTs)(e.optimizer_config),s=(0,d.deserialize)(t);let i,n;if('string'==typeof e.loss)i=(0,b.toCamelCase)(e.loss);else if(Array.isArray(e.loss))i=e.loss.map(e=>(0,b.toCamelCase)(e));else if(null!=e.loss){i={};for(const t in e.loss)i[t]=(0,b.toCamelCase)(e.loss[t])}if(Array.isArray(e.metrics))n=e.metrics.map(e=>(0,b.toCamelCase)(e));else if(null!=e.metrics){n={};for(const t in e.metrics)n[t]=(0,b.toCamelCase)(e.metrics[t])}this.compile({loss:i,metrics:n,optimizer:s})}async save(e,t){if('string'==typeof e){const t=a.io.getSaveHandlers(e);if(0===t.length)throw new p.ValueError(`Cannot find any save handlers for URL '${e}'`);if(t.length>1)throw new p.ValueError(`Found more than one (${t.length}) save handlers for URL '${e}'`);e=t[0]}if(null==e.save)throw new p.ValueError("LayersModel.save() cannot proceed because the IOHandler provided does not have the `save` attribute defined.");const s=await a.io.encodeWeights(this.getNamedWeights(t)),i={modelTopology:this.toJSON(null,!1),format:"layers-model",generatedBy:`TensorFlow.js tfjs-layers v${A.version}`,convertedBy:null};if(null!=t&&t.includeOptimizer&&null!=this.optimizer){i.trainingConfig=this.getTrainingConfig();const e='optimizer',{data:t,specs:n}=await a.io.encodeWeights(await this.optimizer.getWeights(),e);s.specs.push(...n),s.data=a.io.concatenateArrayBuffers([s.data,t])}if(null!=this.userDefinedMetadata){const e=!0;(0,w.checkUserDefinedMetadata)(this.userDefinedMetadata,this.name,e),i.userDefinedMetadata=this.userDefinedMetadata}return i.weightData=s.data,i.weightSpecs=s.specs,e.save(i)}setUserDefinedMetadata(e){(0,w.checkUserDefinedMetadata)(e,this.name),this.userDefinedMetadata=e}getUserDefinedMetadata(){return this.userDefinedMetadata}}r.LayersModel=W,W.className='Model',a.serialization.registerClass(W);class I extends W{}r.Functional=I,I.className='Functional',a.serialization.registerClass(I)},2195,[1158,2181,2193,2178,2172,2196,2194,2197,2198,2199,2200,2174,2201,2182,2202,2203,2204,2171,2205,2207,2206]);
__d(function(g,r,i,a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.deserialize=
/**
   * @license
   * Copyright 2018 Google LLC
   *
   * Use of this source code is governed by an MIT-style
   * license that can be found in the LICENSE file or at
   * https://opensource.org/licenses/MIT.
   * =============================================================================
   */
function(n,s={},o=!1){return(0,l.deserializeKerasObject)(n,t.serialization.SerializationMap.getMap().classNameMap,s,'layer',o)};var t=r(d[0]),l=r(d[1])},2196,[1158,2174]);
__d(function(g,_r,_i,a,m,_e,d){Object.defineProperty(_e,"__esModule",{value:!0}),_e.MSLE=_e.MSE=_e.MAPE=_e.MAE=_e.KLD=void 0,_e.binaryCrossentropy=A,_e.categoricalCrossentropy=E,_e.categoricalHinge=b,_e.cosine=void 0,_e.cosineProximity=_,_e.get=function(e){if('string'==typeof e){if(e in q)return q[e];let n=`Unknown loss ${e}`;throw e.toLowerCase().includes('softmaxcrossentropy')&&(n=`Unknown loss ${e}. Use "categoricalCrossentropy" as the string name for tf.losses.softmaxCrossEntropy`),new o.ValueError(n)}return e},_e.hinge=y,_e.kld=void 0,_e.kullbackLeiblerDivergence=L,_e.l2Normalize=i,_e.logcosh=h,_e.mape=_e.mae=_e.lossesMap=void 0,_e.meanAbsoluteError=l,_e.meanAbsolutePercentageError=c,_e.meanSquaredError=u,_e.meanSquaredLogarithmicError=p,_e.msle=_e.mse=void 0,_e.poisson=V,_e.sigmoidCrossEntropyWithLogits=v,_e.sparseCategoricalCrossentropy=M,_e.squaredHinge=f;var e=s(_r(d[0])),n=e,r=_r(d[1]),t=s(_r(d[2])),o=_r(d[3]);function s(e,n){if("function"==typeof WeakMap)var r=new WeakMap,t=new WeakMap;return(s=function(e,n){if(!n&&e&&e.__esModule)return e;var o,s,i={__proto__:null,default:e};if(null===e||"object"!=typeof e&&"function"!=typeof e)return i;if(o=n?t:r){if(o.has(e))return o.get(e);o.set(e,i)}for(const n in e)"default"!==n&&{}.hasOwnProperty.call(e,n)&&((s=(o=Object.defineProperty)&&Object.getOwnPropertyDescriptor(e,n))&&(s.get||s.set)?o(i,n,s):i[n]=e[n]);return i})(e,n)}
/**
   * @license
   * Copyright 2018 Google LLC
   *
   * Use of this source code is governed by an MIT-style
   * license that can be found in the LICENSE file or at
   * https://opensource.org/licenses/MIT.
   * =============================================================================
   */function i(o,s){return(0,e.tidy)(()=>{'float32'!==o.dtype&&(o=n.cast(o,'float32'));const e=n.sum(t.square(o),s,!0),i=n.fill(e.shape,(0,r.epsilon)()),u=n.sqrt(n.maximum(e,i));return n.div(o,u)})}function u(r,o){return(0,e.tidy)(()=>n.mean(t.square(n.sub(o,r)),-1))}function l(r,t){return(0,e.tidy)(()=>n.mean(n.abs(n.sub(t,r)),-1))}function c(t,o){return(0,e.tidy)(()=>{const e=n.sub(t,o),s=n.clipByValue(n.abs(t),(0,r.epsilon)(),Number.MAX_VALUE),i=n.abs(n.div(e,s));return n.mul(100,n.mean(i,-1))})}function p(o,s){return(0,e.tidy)(()=>{const e=n.clipByValue(s,(0,r.epsilon)(),Number.MAX_VALUE),i=n.log(n.add(1,e)),u=n.clipByValue(o,(0,r.epsilon)(),Number.MAX_VALUE),l=n.log(n.add(1,u));return n.mean(t.square(n.sub(i,l)),-1)})}function f(r,o){return(0,e.tidy)(()=>{const e=n.maximum(0,n.sub(1,n.mul(r,o)));return n.mean(t.square(e),-1)})}function y(r,t){return(0,e.tidy)(()=>{const e=n.maximum(0,n.sub(1,n.mul(r,t)));return n.mean(e,-1)})}function b(r,t){return(0,e.tidy)(()=>{const e=n.sum(n.mul(r,t),-1),o=n.max(n.mul(n.sub(1,r),t),-1);return n.maximum(0,n.add(1,n.sub(o,e)))})}function h(r,t){return(0,e.tidy)(()=>{const e=Math.log(2),o=n.sub(t,r),s=n.sub(n.add(o,n.softplus(n.mul(-2,o))),e);return n.mean(s,-1)})}function E(t,o,s=!1){return(0,e.tidy)(()=>{if(s)o=n.softmax(o);else{const e=n.sum(o,o.shape.length-1,!0);o=n.div(o,e)}return o=n.clipByValue(o,(0,r.epsilon)(),1-(0,r.epsilon)()),n.neg(n.sum(n.mul(n.cast(t,'float32'),n.log(o)),o.shape.length-1))})}function M(o,s,i=!1){return(0,e.tidy)(()=>{const e=n.cast(n.floor(t.flatten(o)),'int32'),u=(s=n.clipByValue(s,(0,r.epsilon)(),1-(0,r.epsilon)())).shape;return E(n.reshape(n.oneHot(e,u[u.length-1]),u),s,i)})}function v(r,t){if(!e.util.arraysEqual(r.shape,t.shape))throw new o.ValueError(`logits and labels must have the same shape, but got shapes ${JSON.stringify(r.shape)} and ${JSON.stringify(t.shape)}`);return(0,e.tidy)(()=>{const e=n.relu(t),o=n.neg(n.abs(t));return n.add(n.sub(e,n.mul(t,r)),n.log1p(n.exp(o)))})}function A(t,o){return(0,e.tidy)(()=>{let e;return e=n.clipByValue(o,(0,r.epsilon)(),1-(0,r.epsilon)()),e=n.log(n.div(e,n.sub(1,e))),n.mean(v(t,e),-1)})}function L(t,o){return(0,e.tidy)(()=>{const e=n.clipByValue(t,(0,r.epsilon)(),1),s=n.clipByValue(o,(0,r.epsilon)(),1);return n.sum(n.mul(t,n.log(n.div(e,s))),-1)})}function V(t,o){return(0,e.tidy)(()=>{const e=n.log(n.add((0,r.epsilon)(),o));return n.mean(n.sub(o,n.mul(t,e)),-1)})}function _(r,t){return(0,e.tidy)(()=>{const e=i(r,-1),o=i(t,-1),s=n.mul(e,o);return n.neg(n.sum(s,-1))})}_e.mse=u,_e.MSE=u,_e.mae=l,_e.MAE=l,_e.mape=c,_e.MAPE=c,_e.msle=p,_e.MSLE=p,_e.kld=L,_e.KLD=L,_e.cosine=_;const q=_e.lossesMap={meanSquaredError:u,meanAbsoluteError:l,meanAbsolutePercentageError:c,meanSquaredLogarithmicError:p,squaredHinge:f,hinge:y,categoricalHinge:b,logcosh:h,categoricalCrossentropy:E,sparseCategoricalCrossentropy:M,binaryCrossentropy:A,kullbackLeiblerDivergence:L,poisson:V,cosineProximity:_}},2197,[1158,2183,2181,2172]);
__d(function(g,_r,_i,a,m,_e,d){Object.defineProperty(_e,"__esModule",{value:!0}),_e.MSE=_e.MAPE=_e.MAE=void 0,_e.binaryAccuracy=i,_e.binaryCrossentropy=function(e,r){return(0,o.binaryCrossentropy)(e,r)},_e.categoricalAccuracy=u,_e.cosine=_e.categoricalCrossentropy=void 0,_e.get=function(e){if('string'==typeof e&&e in P)return P[e];if('string'!=typeof e&&null!=e)return e;throw new n.ValueError(`Unknown metric ${e}`)},_e.getLossOrMetricName=function(e){if(c.assert(null!==e,`Unknown LossOrMetricFn ${e}`),'string'==typeof e)return e;{let r;for(const t of Object.keys(o.lossesMap))if(o.lossesMap[t]===e){r=t;break}if(void 0!==r)return r;for(const t of Object.keys(P))if(P[t]===e){r=t;break}return void 0!==r?r:e.name}},_e.mse=_e.metricsMap=_e.mape=_e.mae=void 0,_e.precision=y,_e.r2Score=function(t,n){return(0,e.tidy)(()=>{const e=t.sub(n).square().sum(),o=t.sub(t.mean()).square().sum();return r.scalar(1).sub(e.div(o))})},_e.recall=function(t,n){return(0,e.tidy)(()=>{const e=l(t,n),o=f(t,n),c=r.add(e,o);return r.cast(r.where(r.greater(c,0),r.div(e,c),0),'float32')})},_e.sparseCategoricalAccuracy=function(e,t){e.rank===t.rank&&(e=r.squeeze(e,[e.rank-1]));(t=r.argMax(t,-1)).dtype!==e.dtype&&(t=r.cast(t,e.dtype));return r.cast(r.equal(e,t),'float32')},_e.sparseCategoricalCrossentropy=void 0,_e.sparseTopKCategoricalAccuracy=function(e,r){throw new n.NotImplementedError},_e.topKCategoricalAccuracy=function(e,r){throw new n.NotImplementedError};var e=s(_r(d[0])),r=e,t=s(_r(d[1])),n=_r(d[2]),o=_r(d[3]),c=s(_r(d[4]));function s(e,r){if("function"==typeof WeakMap)var t=new WeakMap,n=new WeakMap;return(s=function(e,r){if(!r&&e&&e.__esModule)return e;var o,c,s={__proto__:null,default:e};if(null===e||"object"!=typeof e&&"function"!=typeof e)return s;if(o=r?n:t){if(o.has(e))return o.get(e);o.set(e,s)}for(const r in e)"default"!==r&&{}.hasOwnProperty.call(e,r)&&((c=(o=Object.defineProperty)&&Object.getOwnPropertyDescriptor(e,r))&&(c.get||c.set)?o(s,r,c):s[r]=e[r]);return s})(e,r)}
/**
   * @license
   * Copyright 2018 Google LLC
   *
   * Use of this source code is governed by an MIT-style
   * license that can be found in the LICENSE file or at
   * https://opensource.org/licenses/MIT.
   * =============================================================================
   */function i(n,o){return(0,e.tidy)(()=>{const e=r.mul(.5,r.onesLike(o)),c=t.cast(r.greater(o,e),n.dtype);return r.mean(r.equal(n,c),-1)})}function u(n,o){return(0,e.tidy)(()=>t.cast(r.equal(r.argMax(n,-1),r.argMax(o,-1)),'float32'))}function l(t,n){return(0,e.tidy)(()=>r.cast(r.sum(r.logicalAnd(r.equal(t,1),r.equal(n,1))),'float32'))}function f(t,n){return(0,e.tidy)(()=>r.cast(r.sum(r.logicalAnd(r.equal(t,1),r.equal(n,0))),'float32'))}function p(t,n){return(0,e.tidy)(()=>r.cast(r.sum(r.logicalAnd(r.equal(t,0),r.equal(n,1))),'float32'))}function y(t,n){return(0,e.tidy)(()=>{const e=l(t,n),o=p(t,n),c=r.add(e,o);return r.cast(r.where(r.greater(c,0),r.div(e,c),0),'float32')})}const M=_e.mse=o.meanSquaredError,A=_e.MSE=o.meanSquaredError,b=_e.mae=o.meanAbsoluteError,E=_e.MAE=o.meanAbsoluteError,C=_e.mape=o.meanAbsolutePercentageError,q=_e.MAPE=o.meanAbsolutePercentageError,w=_e.categoricalCrossentropy=o.categoricalCrossentropy,k=_e.cosine=o.cosineProximity,v=_e.sparseCategoricalCrossentropy=o.sparseCategoricalCrossentropy,P=_e.metricsMap={binaryAccuracy:i,categoricalAccuracy:u,precision:y,categoricalCrossentropy:w,sparseCategoricalCrossentropy:v,mse:M,MSE:A,mae:b,MAE:E,mape:C,MAPE:q,cosine:k}},2198,[1158,2181,2172,2197,2174]);
__d(function(g,r,i,a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.getOptimizer=
/**
   * @license
   * Copyright 2018 Google LLC
   *
   * Use of this source code is governed by an MIT-style
   * license that can be found in the LICENSE file or at
   * https://opensource.org/licenses/MIT.
   * =============================================================================
   */
function(p){const l={Adagrad:()=>n.train.adagrad(.01),Adadelta:()=>n.train.adadelta(1,.95,(0,t.epsilon)()),Adam:()=>n.train.adam(.001,.9,.999,(0,t.epsilon)()),Adamax:()=>n.train.adamax(.002,.9,.999,(0,t.epsilon)(),0),RMSProp:()=>n.train.rmsprop(.001,.9,0,(0,t.epsilon)()),SGD:()=>n.train.sgd(.01)};if(l.adagrad=l.Adagrad,l.adadelta=l.Adadelta,l.adam=l.Adam,l.adamax=l.Adamax,l.rmsprop=l.RMSProp,l.sgd=l.SGD,p in l)return l[p]();throw new o.ValueError(`Unknown Optimizer ${p}`)};var n=r(d[0]),t=r(d[1]),o=r(d[2])},2199,[1158,2183,2172]);
__d(function(g,r,i,a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.MAX_USER_DEFINED_METADATA_SERIALIZED_LENGTH=void 0,e.checkUserDefinedMetadata=function(n,s,f=!1){if(null==n||'object'!=typeof n||Object.getPrototypeOf(n)!==Object.prototype||!o(n))throw new Error('User-defined metadata is expected to be a JSON object, but is not.');if(f){const o=JSON.stringify(n);o.length>t&&console.warn(`User-defined metadata of model "${s}" is too large in size (length=${o.length} when serialized). It is not recommended to store such large objects in user-defined metadata. Please make sure its serialized length is <= ${t}.`)}},e.plainObjectCheck=o;
/**
   * @license
   * Copyright 2019 Google LLC
   *
   * Use of this source code is governed by an MIT-style
   * license that can be found in the LICENSE file or at
   * https://opensource.org/licenses/MIT.
   * =============================================================================
   */
const t=e.MAX_USER_DEFINED_METADATA_SERIALIZED_LENGTH=1048576;function o(t){if(null===t)return!0;if('object'==typeof t){if(Object.getPrototypeOf(t)===Object.prototype){const n=Object.keys(t);for(const s of n){if('string'!=typeof s)return!1;if(!o(t[s]))return!1}return!0}if(Array.isArray(t)){for(const n of t)if(!o(n))return!1;return!0}return!1}{const o=typeof t;return'string'===o||'number'===o||'boolean'===o}}},2200,[]);
__d(function(g,r,_i,a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.printSummary=
/**
   * @license
   * Copyright 2018 Google LLC
   *
   * Use of this source code is governed by an MIT-style
   * license that can be found in the LICENSE file or at
   * https://opensource.org/licenses/MIT.
   * =============================================================================
   */
function(c,u,h,p=console.log){const f=o(c),y=['Layer (type)','Input Shape','Output shape','Param #'];f?(u=u||90,h=h||[.32,.61,.89,1]):(u=u||115,h=h||[.24,.48,.7,.8,1]);h[h.length-1]<=1&&(h=h.map(t=>Math.floor(u*t)));let b;if(!f){y.push('Receives inputs'),b=[];for(const t in c.nodesByDepth)b.push(...c.nodesByDepth[t])}p('_'.repeat(u)),s(y,h,p),p('='.repeat(u));const S=c.layers;for(let t=0;t<S.length;++t)f?i(S[t],h,p):l(S[t],h,b,p),p((t===S.length-1?'=':'_').repeat(u));c.checkTrainableWeightsConsistency();const N=n(c),$=(0,t.countParamsInWeights)(c.nonTrainableWeights);p(`Total params: ${N+$}`),p(`Trainable params: ${N}`),p(`Non-trainable params: ${$}`),p('_'.repeat(u))};var t=r(d[0]);function n(n){let o;return o=null!=n.collectedTrainableWeights?(0,t.countParamsInWeights)(n.collectedTrainableWeights):(0,t.countParamsInWeights)(n.trainableWeights),o}function o(t){let n=!0;const o=[],s=[];for(const n in t.nodesByDepth)o.push(t.nodesByDepth[n]);for(const t of o){if(t.length>1||1===t.length&&t[0].inboundLayers.length>1){n=!1;break}s.push(...t)}if(n)for(const o of t.layers){let t=!1;for(const i of o.inboundNodes)if(-1!==s.indexOf(i)){if(t){n=!1;break}t=!0}if(!n)break}return n}function s(t,n,o=console.log){let s='';for(let o=0;o<t.length;++o)o>0&&(s=s.slice(0,s.length-1)+' '),s+=t[o],s=s.slice(0,n[o]),s+=' '.repeat(n[o]-s.length);o(s)}function i(t,n,o){let i,l;try{l=t.inboundNodes.map(t=>JSON.stringify(t.inputShapes)).join(',')}catch(t){l='multiple'}try{i=JSON.stringify(t.outputShape)}catch(t){i='multiple'}s([`${t.name} (${t.getClassName()})`,l,i,t.countParams().toString()],n,o)}function l(t,n,o,i){let l,c;try{c=t.inboundNodes.map(t=>JSON.stringify(t.inputShapes)).join(',')}catch(t){c='multiple'}try{l=JSON.stringify(t.outputShape)}catch(t){l='multiple'}const u=[];for(const n of t.inboundNodes)if(!(null!=o&&o.length>0&&-1===o.indexOf(n)))for(let t=0;t<n.inboundLayers.length;++t){const o=n.inboundLayers[t].name,s=n.nodeIndices[t],i=n.tensorIndices[t];u.push(`${o}[${s}][${i}]`)}const h=t.name,p=t.getClassName(),f=0===u.length?'':u[0];s([`${h} (${p})`,c,l,t.countParams().toString(),f],n,i);for(let t=1;t<u.length;++t)s(['','','','',u[t]],n,i)}},2201,[2186]);
__d(function(g,_r,_i,a,m,_e,d){Object.defineProperty(_e,"__esModule",{value:!0}),_e.convertPythonicToTs=function n(o,r){if(null===o)return null;if('string'==typeof o)return e.toCamelCase(o);if('number'==typeof o||'boolean'==typeof o)return o;if(o instanceof Array){const e=[],f=o.length;for(let u=0;u<f;++u){const f=o[u];t(r,u,f)?e.push(f):e.push(n(f,r))}return e}{const t={};for(const r of Object.keys(o)){const f=o[r];if('name'===r&&'string'==typeof f)t[r]=f;else{const o=e.toCamelCase(r);t[o]=n(f,o)}}return t}},_e.convertTsToPythonic=function n(o,r){if(null==o)return null;if('string'==typeof o)return e.toSnakeCase(o);if('number'==typeof o||'boolean'==typeof o)return o;if(o instanceof Array){const e=[],f=o.length;for(let u=0;u<f;++u){const f=o[u];t(r,u,f)?e.push(f):e.push(n(f,r))}return e}{const t={};for(const r of Object.keys(o)){const f=o[r],u=e.toSnakeCase(r);t[u]='name'!==r&&'className'!==r||'string'!=typeof f?n(f,r):f}return t}};var e=(function(e,t){if("function"==typeof WeakMap)var n=new WeakMap,o=new WeakMap;return(function(e,t){if(!t&&e&&e.__esModule)return e;var r,f,u={__proto__:null,default:e};if(null===e||"object"!=typeof e&&"function"!=typeof e)return u;if(r=t?o:n){if(r.has(e))return r.get(e);r.set(e,u)}for(const t in e)"default"!==t&&{}.hasOwnProperty.call(e,t)&&((f=(r=Object.defineProperty)&&Object.getOwnPropertyDescriptor(e,t))&&(f.get||f.set)?r(u,t,f):u[t]=e[t]);return u})(e,t)}
/**
   * @license
   * Copyright 2018 Google LLC
   *
   * Use of this source code is governed by an MIT-style
   * license that can be found in the LICENSE file or at
   * https://opensource.org/licenses/MIT.
   * =============================================================================
   */)(_r(d[0]));function t(e,t,n){return('inboundNodes'===e||'outputLayers'===e||'inputLayers'===e)&&0===t&&'string'==typeof n}},2202,[2174]);
__d(function(g,r,i,a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.version=void 0;
/** @license See the LICENSE file. */
e.version='4.22.0'},2203,[]);
__d(function(t,e,s,n,o,i,r){Object.defineProperty(i,"__esModule",{value:!0}),i.Container=void 0;var a=e(r[0]),u=e(r[1]),l=e(r[2]),h=e(r[3]),c=L(e(r[4])),p=e(r[5]),d=L(e(r[6])),f=e(r[7]),y=e(r[8]),m=e(r[9]),g=e(r[10]),b=e(r[11]);function L(t,e){if("function"==typeof WeakMap)var s=new WeakMap,n=new WeakMap;return(L=function(t,e){if(!e&&t&&t.__esModule)return t;var o,i,r={__proto__:null,default:t};if(null===t||"object"!=typeof t&&"function"!=typeof t)return r;if(o=e?n:s){if(o.has(t))return o.get(t);o.set(t,r)}for(const e in t)"default"!==e&&{}.hasOwnProperty.call(t,e)&&((i=(o=Object.defineProperty)&&Object.getOwnPropertyDescriptor(t,e))&&(i.get||i.set)?o(r,e,i):r[e]=t[e]);return r})(t,e)}
/**
   * @license
   * Copyright 2018 Google LLC
   *
   * Use of this source code is governed by an MIT-style
   * license that can be found in the LICENSE file or at
   * https://opensource.org/licenses/MIT.
   * =============================================================================
   */const w=t=>{const e=Object.keys(t);if(0===e.length)return!1;const s=e[0].split('/');return!isNaN(parseInt(s[s.length-1],10))};class N extends b.Layer{constructor(t){if(super({}),this.containerNodes=new Set,this.name=t.name,null==this.name){const t=this.getClassName().toLowerCase();this.name=(0,u.getUid)(t)}if(this.supportsMasking=!1,this.trainable_=!0,Array.isArray(t.inputs)?this.inputs=t.inputs.slice():this.inputs=[t.inputs],Array.isArray(t.outputs)?this.outputs=t.outputs.slice():this.outputs=[t.outputs],c.unique(this.inputs).length!==this.inputs.length)throw new l.ValueError(`The list of inputs passed to the model is redundant. All inputs should only appear once. Found: ${this.inputs.map(t=>t.name)}`);c.unique(this.outputs).length!==this.outputs.length&&console.warn(`The list of outputs passed to the model is redundant. All outputs should only appear once. Found: ${this.outputs.map(t=>t.name)}`),this.inputLayers=[],this.inputLayersNodeIndices=[],this.inputLayersTensorIndices=[],this.outputLayers=[],this.outputLayersNodeIndices=[],this.outputLayersTensorIndices=[],this.layers=[],this.internalContainerRefs=[];for(const t of this.outputs){const e=t.sourceLayer,s=t.nodeIndex,n=t.tensorIndex;this.outputLayers.push(e),this.outputLayersNodeIndices.push(s),this.outputLayersTensorIndices.push(n)}for(const t of this.inputs){const e=t.sourceLayer,s=t.nodeIndex,n=t.tensorIndex;c.assert(0===s,'input layer has >1 nodes'),c.assert(0===n,'input layer has >1 tensors'),this.inputLayers.push(e),this.inputLayersNodeIndices.push(s),this.inputLayersTensorIndices.push(n)}this.inputNames=[],this.outputNames=[],this.feedInputShapes=[],this.feedInputNames=[],this.feedOutputNames=[];for(let e=0;e<this.inputLayers.length;e++){const s=this.inputLayers[e];if(!(s instanceof g.InputLayer))throw new TypeError(`Input layers to a LayersModel must be InputLayer objects. Received inputs: ${t.inputs}. Input ${e} (0-based) originates from layer type ${s.getClassName()}.`);this.inputNames.push(s.name),this.feedInputShapes.push(s.batchInputShape),this.feedInputNames.push(s.name)}for(const t of this.outputLayers)this.outputNames.push(t.name);this.internalInputShapes=this.inputs.map(t=>t.shape),this.internalOutputShapes=this.outputs.map(t=>t.shape);const e={},s={},n={},o={},i={},r=[],a=(t,e,s,n,o,u)=>{null!=n&&null!=o&&null!=u||(n=t.sourceLayer,o=t.nodeIndex,u=t.tensorIndex);const h=n.inboundNodes[o];if(-1!==s.indexOf(h))throw new l.RuntimeError(`The tensor ${t.name} at layer "${n.name}" is part of a cycle.`);if(-1!==e.indexOf(h))return;this.containerNodes.add(N.nodeKey(n,o)),n.id in i||(i[n.id]=Object.keys(i).length),-1===s.indexOf(h)&&s.push(h);const c=h.inboundLayers.length;for(let t=0;t<c;t++){const n=h.inputTensors[t],o=h.inboundLayers[t],i=h.nodeIndices[t],r=h.tensorIndices[t];a(n,e,s,o,i,r)}for(e.push(h);s.indexOf(h)>=0;)s.splice(s.indexOf(h),1);r.push(h)},h=[],p=[];for(const t of this.outputs)a(t,h,p);const d=r.slice().reverse();for(const t of d){s[t.id]=t,t.id in e||(e[t.id]=0);let i=e[t.id];const r=null==n[t.outboundLayer.id]?0:n[t.outboundLayer.id];i=Math.max(i,r),n[t.outboundLayer.id]=i,o[t.outboundLayer.id]=t.outboundLayer,e[t.id]=i;for(let n=0;n<t.inboundLayers.length;n++){const o=t.inboundLayers[n],r=t.nodeIndices[n],a=o.inboundNodes[r],u=null==e[a.id]?0:e[a.id];e[a.id]=Math.max(i+1,u),s[a.id]=a}}const f={};for(const t in e){const n=e[t];n in f||(f[n]=[]),f[n].push(s[t])}const y={};for(const t in n){const e=n[t];e in y||(y[e]=[]),y[e].push(o[t])}let m=Object.keys(y).map(t=>parseInt(t,10)).sort(c.reverseNumberCompare);this.layers=[];for(const t of m){const e=y[t];e.sort((t,e)=>{const s=i[t.id],n=i[e.id];return s<n?-1:s>n?1:0});for(const t of e)t instanceof N&&this.internalContainerRefs.push(t),this.layers.push(t)}this.layersByDepth=y,m=Object.keys(f).map(t=>parseInt(t,10)).sort(c.reverseNumberCompare);const L=this.inputs.slice(),w=[];for(const t of m)for(const e of f[t]){const t=e.outboundLayer;if(null!=t){for(const s of e.inputTensors)if(-1===L.indexOf(s))throw new l.RuntimeError(`Graph disconnected: cannot obtain value for tensor ${s} at layer "${t.name}". The following previous layers were accessed without issue: ${w}`);for(const t of e.outputTensors)L.push(t);w.push(t.name)}}this.nodesByDepth=f;const I=this.layers.map(t=>t.name);for(const t of I){const e=I.filter(e=>e===t).length;if(1!==e)throw new l.RuntimeError(`The name "${t}" is used ${e} times in the model. All layer names should be unique. Layer names: `+JSON.stringify(I))}this.outboundNodes=[],this.inboundNodes=[],new b.Node({outboundLayer:this,inboundLayers:[],nodeIndices:[],tensorIndices:[],inputTensors:this.inputs,outputTensors:this.outputs,inputMasks:this.inputs.map(t=>null),outputMasks:this.outputs.map(t=>null),inputShapes:this.inputs.map(t=>t.shape),outputShapes:this.outputs.map(t=>t.shape)}),this.built=!0,this._refCount=1}assertNotDisposed(){if(0===this._refCount)throw new Error(`Container '${this.name}' is already disposed.`)}dispose(){this.assertNotDisposed();const t={refCountAfterDispose:null,numDisposedVariables:0};if(0===--this._refCount){for(const e of this.layers)t.numDisposedVariables+=e.dispose().numDisposedVariables;for(const e of this.internalContainerRefs)t.numDisposedVariables+=e.dispose().numDisposedVariables}return t.refCountAfterDispose=this._refCount,t}get trainable(){return this.trainable_}set trainable(t){this.layers.forEach(e=>{e._trainableWeights.forEach(e=>e.trainable=t)}),this.trainable_=t}get trainableWeights(){if(this._trainableWeights.length>0)throw new l.ValueError("Container instance unexpectedly contains _trainableWeights.The trainable weights of a Container are a union of the trainable weights of its consituent Layers. Its own _trainableWeights must remain an empty Array.");if(!this.trainable)return[];let t=[];for(const e of this.layers)t=t.concat(e.trainableWeights);return t}get nonTrainableWeights(){const t=[];for(const e of this.layers)t.push(...e.nonTrainableWeights);if(!this.trainable){const e=[];for(const t of this.layers)e.push(...t.trainableWeights);return e.concat(t)}return t}get weights(){return this.trainableWeights.concat(this.nonTrainableWeights)}loadWeights(t,e=!0){const s={};let n=0;const o=w(t);o&&this.parseWeights(t);for(const t of this.layers)for(const[e,i]of t.weights.entries()){const t=o?`${i.name.split('/').slice(0,-1).join('/')+'/'}${e}`:i.originalName;if(null!=s[t])throw new l.ValueError(`Duplicate weight name: ${t}`);s[t]=i,n++}const i=[];for(const n in t){let o=n;if(null==s[n]){const t=n.split('/');o=t.slice(0,-2).concat([t[t.length-1]]).join('/')}if(null!=s[o])i.push([s[o],t[n]]);else if(e)throw new l.ValueError(`Provided weight data has no target variable: ${n}`);delete s[o]}if(e){const t=[];for(const e in s)t.push(e);if(t.length>0)throw new l.ValueError(`${t.length} of ${n} weights are not set: ${t}`)}(0,f.batchSetValue)(i)}parseWeights(t){for(const e in Object.keys(t)){const s=e.split('/'),n=['vars','layer_checkpoint_dependencies'],o=s.map(t=>t.startsWith('_')?t.slice(1):t).filter(t=>!n.includes(t)).join('/');o!==e&&(t[o]=t[e],delete t[e])}}updatedConfig(){const t=this.getConfig(),e={};return e.className=this.getClassName(),e.config=t,e.kerasVersion=`tfjs-layers ${y.version}`,e.backend='TensorFlow.js',e}toJSON(t,e=!0){const s=(0,p.convertTsToPythonic)(this.updatedConfig());return e?JSON.stringify(s):s}call(t,e){return(0,a.tidy)(()=>{t=c.toList(t);const s=new m.FeedDict;for(let e=0;e<this.inputs.length;++e)s.add(this.inputs[e],t[e]);return(0,m.execute)(this.outputs,s,e)})}computeMask(t,e){return(0,a.tidy)(()=>{let s;return t=c.toList(t),s=null==e?c.pyListRepeat(null,t.length):c.toList(e),this.runInternalGraph(t,s)[1]})}computeOutputShape(t){const e=d.normalizeShapeList(t);if(e.length!==this.inputLayers.length)throw new l.ValueError(`Invalid inputShape argument ${t}: model has ${this.inputLayers.length} tensor inputs.`);const s={};for(let t=0;t<e.length;t++){const n=this.inputLayers[t],o=e[t];s[n.name+'_0_0']=o}const n=Object.keys(this.nodesByDepth).map(t=>parseInt(t,10)).sort(c.reverseNumberCompare);if(n.length>1)for(const t of n){const e=this.nodesByDepth[t];for(const t of e){const e=t.outboundLayer;if(-1!==this.inputLayers.map(t=>t.id).indexOf(e.id))continue;const n=[];for(let e=0;e<t.inboundLayers.length;e++){const o=t.inboundLayers[e],i=t.nodeIndices[e],r=t.tensorIndices[e],a=s[`${o.name}_${i}_${r}`];n.push(a)}const o=e.computeOutputShape(c.singletonOrArray(n)),i=d.normalizeShapeList(o),r=e.inboundNodes.indexOf(t);for(let t=0;t<i.length;t++){s[`${e.name}_${r}_${t}`]=i[t]}}}const o=[],i=[];for(let t=0;t<this.outputLayers.length;t++){const e=this.outputLayers[t],s=this.outputLayersNodeIndices[t],n=this.outputLayersTensorIndices[t],o=`${e.name}_${s}_${n}`;i.push(o)}for(let t=0;t<i.length;t++){const e=i[t];c.assert(e in s),o.push(s[e])}return c.singletonOrArray(o)}runInternalGraph(t,e){null==e&&(e=c.pyListRepeat(null,t.length));const s={};for(let n=0;n<this.inputs.length;++n){const o=this.inputs[n],i=t[n],r=e[n];s[o.id]=[i,r]}const n=Object.keys(this.nodesByDepth).map(t=>parseInt(t,10)).sort(c.reverseNumberCompare);for(const t of n){const e=this.nodesByDepth[t];for(const t of e){const e=t.outboundLayer,n=t.inputTensors,o=t.outputTensors,i=new Array;for(const t of n)t.id in s&&i.push(s[t.id]);if(i.length===n.length){let n,r,a,u,h={};if(null!=t.callArgs&&(h=t.callArgs),1===i.length){const[t,s]=i[0];null==h.mask&&(h.mask=s),a=c.toList(e.call(t,h)),u=c.toList(e.computeMask(t,s)),n=[t],r=[s]}else n=i.map(t=>t[0]),r=i.map(t=>t[1]),null==h.mask&&(h.mask=r),a=c.toList(e.call(n,h)),u=c.toList(e.computeMask(n,r));if(e.activityRegularizer)throw new l.NotImplementedError("LayersModel invocation with concrete Tensor value(s) in the presence of activity regularizer(s) is not supported yet.");for(let t=0;t<o.length;++t){const e=o[t],n=a[t],i=u[t];s[e.id]=[n,i]}}}}const o=[],i=[],r=[];for(const t of this.outputs){c.assert(t.id in s,`Could not compute output ${t.name} : ${t.id}`);const[e,n]=s[t.id];r.push(e.shape),o.push(e),i.push(n)}return[o,i,r]}buildNodeConversionMap(t){const e={};let s;for(const t of this.layers){s=t instanceof N?1:0;for(let n=0;n<t.inboundNodes.length;n++){const o=N.nodeKey(t,n);this.containerNodes.has(o)&&(e[o]=s,s+=1)}}return e}getLayer(t,e){if(null!=e)return this.findLayer(e);if(null==t)throw new l.ValueError('Provide either a layer name or layer index');if('number'==typeof t)return this.findLayer(t);for(const e of this.layers)if(e.name===t)return e;throw new l.ValueError(`No such layer: ${t}`)}findLayer(t){if(this.layers.length<=t)throw new l.ValueError(`Was asked to retrieve layer at index ${t}, but model only has ${this.layers.length} layer(s).`);return this.layers[t]}calculateLosses(){return(0,a.tidy)(()=>{const t=[];for(const e of this.layers)for(let s=0;s<e.inboundNodes.length;++s){const n=N.nodeKey(e,s);this.containerNodes.has(n)&&t.push(...e.calculateLosses())}return t})}getConfig(){const t={name:this.name},e=this.buildNodeConversionMap(this.layers),s=[];for(const t of this.layers){const n=t.getClassName(),o=t.getConfig(),i=[];for(let s=0;s<t.inboundNodes.length;s++){const n=t.inboundNodes[s],o=N.nodeKey(t,s);let r={};if(this.containerNodes.has(o)){if(n.callArgs)try{JSON.stringify(n.callArgs),r=n.callArgs}catch(e){console.warn(`Layer ${t.name} was passed non-serializable keyword arguments: ${n.callArgs}. They will not be included in the serialized model (and thus will be missing at deserialization time).`),r={}}if(n.inboundLayers.length>0){const t=[];for(let s=0;s<n.inboundLayers.length;s++){const o=n.inboundLayers[s],i=n.nodeIndices[s],a=n.tensorIndices[s];let u=e[N.nodeKey(o,i)];null==u&&(u=0),t.push([o.name,u,a,r])}i.push(t)}}}const r={};r.name=t.name,r.className=n,r.config=o,r.inboundNodes=i,s.push(r)}t.layers=s;const n=[];for(let t=0;t<this.inputLayers.length;t++){const s=this.inputLayers[t],o=this.inputLayersNodeIndices[t],i=N.nodeKey(s,o);if(!this.containerNodes.has(i))continue;let r=e[i];null==r&&(r=0);const a=this.inputLayersTensorIndices[t];n.push([s.name,r,a])}t.inputLayers=n;const o=[];for(let t=0;t<this.outputLayers.length;t++){const s=this.outputLayers[t],n=this.outputLayersNodeIndices[t],i=N.nodeKey(s,n);if(!this.containerNodes.has(i))continue;let r=e[i];null==r&&(r=0);const a=this.outputLayersTensorIndices[t];o.push([s.name,r,a])}return t.outputLayers=o,t}static fromConfig(t,e,s={},n=!1){const o={},i={};function r(t,e){t.name in i?i[t.name].push(e):i[t.name]=[e]}function a(t,e){const s=[];let n;for(const i of e){const a=i[0],u=i[1],l=i[2];if(n=null==i[3]?{}:i[3],!(a in o))return void r(t,e);const h=o[a];if(h.inboundNodes.length<=u)return void r(t,e);const c=h.inboundNodes[u];s.push(c.outputTensors[l])}s.length>0&&t.apply(c.singletonOrArray(s),n)}function u(t){const s=t.name,i=(0,h.deserialize)(t,null!=e.customObjects?e.customObjects:{});i.setFastWeightInitDuringBuild(n),o[s]=i;t.inboundNodes.forEach(t=>{if(!(t instanceof Array))throw new l.ValueError(`Corrupted configuration, expected array for nodeData: ${t}`);r(i,t)})}const p=e.name,d=e.layers;for(const t of d)u(t);for(;!c.isObjectEmpty(i);)for(const t of d){const e=o[t.name];if(e.name in i){const t=i[e.name];delete i[e.name];for(const s of t)a(e,s)}}const f=[],y=[],m=e.inputLayers;for(const t of m){const e=t[0],s=t[1],n=t[2];c.assert(e in o);const i=o[e].inboundNodes[s].outputTensors;f.push(i[n])}const g=e.outputLayers;for(const t of g){const e=t[0],s=t[1],n=t[2];c.assert(e in o);const i=o[e].inboundNodes[s].outputTensors;y.push(i[n])}return new t({inputs:f,outputs:y,name:p})}get stateful(){if(this._stateful)throw new l.ValueError("Container instance unexpectedly has _stateful = true. The statefulness of a Container is determined by the Layers it contains. Its _stateful property must remain the default false.");for(const t of this.layers)if(t.stateful)return!0;return!1}resetStates(){(0,a.tidy)(()=>{this.layers.forEach(t=>{t.stateful&&t.resetStates()})})}}i.Container=N},2204,[1158,2176,2172,2196,2174,2202,2185,2187,2203,2171,2175,2177]);
__d(function(g,_r,_i,a,m,_e,d){Object.defineProperty(_e,"__esModule",{value:!0}),_e.evaluateDataset=async function(s,n,r){const l=null!=(r=r||{}).batches,u=s.testFunction;let h=[];if(r.verbose>0)throw new i.NotImplementedError('Verbose mode is not implemented yet.');e.util.assert(!l||r.batches>0&&Number.isInteger(r.batches),()=>`Test loop expects \`batches\` to be a positive integer, but received ${JSON.stringify(r.batches)}`);const p=(f=n,'function'==typeof f.next?n:await n.iterator());var f;let b=0,y=0;for(;!l||y<r.batches;){const i=await p.next();if(h=e.tidy(()=>{if(i.value){const{xs:n,ys:o}=c(s,i.value),r=n.concat(o),l=e.tidy(()=>u(r));if(e.dispose(r),0===y)for(let e=0;e<l.length;++e)h.push((0,t.scalar)(0));const p=r[0].shape[0];for(let t=0;t<l.length;++t){const s=l[t],i=h[t];h[t]=e.tidy(()=>e.add(h[t],e.mul(p,s))),y>0&&e.dispose(i)}e.dispose(l),b+=p,++y}return h}),i.done){l&&console.warn(`Your dataset iterator ran out of data during evaluateDataset(). Interrupting evalution. Make sure that your dataset can generate at least \`batches\` batches (in this case, ${r.batches} batches). You may need to use the repeat() function when building your dataset.`);break}}for(let t=0;t<h.length;++t){const s=h[t];h[t]=e.div(h[t],b),e.dispose(s)}return(0,o.singletonOrArray)(h)},_e.fitDataset=async function(t,i,u){const b=null!=u.batchesPerEpoch;if(e.util.assert(null!=t.optimizer,()=>"You must compile a model before training/testing. Use LayersModel.compile(modelCompileConfig)."),e.util.assert(null!=u,()=>"For fitDataset(), the 2nd argument (config) is required, but it is not provided in this call."),e.util.assert(null!=u.epochs&&u.epochs>0&&Number.isInteger(u.epochs),()=>`For fitDataset(), config.epochs is expected to be a positive integer, but got ${u.epochs}`),e.util.assert(!b||u.batchesPerEpoch>0&&Number.isInteger(u.batchesPerEpoch),()=>`For fitDataset(), config.batchesPerEpoch is expected to be a positive integer if specified, but got ${u.batchesPerEpoch}`),e.util.assert(null==u.validationSplit,()=>"`validationSplit` is not supported by `fitDataset()`. Use validationData instead."),t.isTraining)throw new Error('Cannot start training because another fit() call is ongoing.');t.isTraining=!0;try{const y=null!=u.validationData;let v,w;if(y)if(f(u.validationData))e.util.assert(null==u.validationBatches||u.validationBatches>0&&Number.isInteger(u.validationBatches),()=>`For fitDataset() with dataset-based validation, config.validationBatches is expected not to be provided, or to be a positive integer, but got ${u.validationBatches}`);else{const t=h(u.validationData);v=t.xs,w=t.ys}const $=t.makeTrainFunction(),E=t.getDedupedMetricsNames();let N;N=y?E.slice().concat(E.map(t=>'val_'+t)):E.slice();const k=(0,s.standardizeCallbacks)(u.callbacks,u.yieldEvery),x=null==u.verbose?1:u.verbose,{callbackList:D,history:T}=(0,s.configureCallbacks)(k,x,u.epochs,null,null,p(i,u),null,y,N);D.setModel(t),t.history=T,await D.onTrainBegin(),t.stopTraining_=!1;let P=null==u.initialEpoch?0:u.initialEpoch,B=await i.iterator();for(;P<u.epochs;){const s={};await D.onEpochBegin(P);let h=0,p=0;for(b||(B=await i.iterator());!b||h<u.batchesPerEpoch;){const i=await B.next();if(b&&i.done){console.warn(`You provided \`batchesPerEpoch\` as ${u.batchesPerEpoch}, but your dataset iterator ran out of data after ${h} batches; interrupting training. Make sure that your dataset can generate at least \`batchesPerEpoch * epochs\` batches (in this case, `+u.batchesPerEpoch*u.epochs+" batches). You may need to use the repeat() function when building your dataset.");break}if(null!=i.value){const{xs:s,ys:o}=c(t,i.value),l={};l.batch=p,l.size=s[0].shape[0],await D.onBatchBegin(p,l);const f=[];if(null!=u.classWeight){const e=(0,r.standardizeClassWeights)(u.classWeight,t.outputNames);for(let t=0;t<e.length;++t)f.push(await(0,r.standardizeWeights)(o[t],null,e[t]))}const b=s.concat(o).concat(f),y=$(b);e.dispose(b);for(let t=0;t<E.length;++t){const s=E[t],i=y[t];l[s]=i,e.keep(i)}await D.onBatchEnd(p,l),(0,n.disposeTensorsInLogs)(l),p++,h++}if(b?h>=u.batchesPerEpoch:i.done){if(y){let e;e=f(u.validationData)?(0,o.toList)(await t.evaluateDataset(u.validationData,{batches:u.validationBatches})):(0,o.toList)(t.evaluate(v,w,{batchSize:null==u.validationBatchSize?l:u.validationBatchSize,verbose:0}));for(let i=0;i<t.metricsNames.length;++i)s[`val_${t.metricsNames[i]}`]=e[i]}break}if(t.stopTraining_)break}if(await D.onEpochEnd(P,s),P++,t.stopTraining_)break}return await D.onTrainEnd(),await t.history.syncData(),t.history}finally{t.isTraining=!1}};var t=(function(t,e){if("function"==typeof WeakMap)var s=new WeakMap,i=new WeakMap;return(function(t,e){if(!e&&t&&t.__esModule)return t;var n,o,r={__proto__:null,default:t};if(null===t||"object"!=typeof t&&"function"!=typeof t)return r;if(n=e?i:s){if(n.has(t))return n.get(t);n.set(t,r)}for(const e in t)"default"!==e&&{}.hasOwnProperty.call(t,e)&&((o=(n=Object.defineProperty)&&Object.getOwnPropertyDescriptor(t,e))&&(o.get||o.set)?n(r,e,o):r[e]=t[e]);return r})(t,e)}
/**
   * @license
   * Copyright 2018 Google LLC
   *
   * Use of this source code is governed by an MIT-style
   * license that can be found in the LICENSE file or at
   * https://opensource.org/licenses/MIT.
   * =============================================================================
   */)(_r(d[0])),e=t,s=_r(d[1]),i=_r(d[2]),n=_r(d[3]),o=_r(d[4]),r=_r(d[5]);const l=32;function c(t,s){let i,n;const o=s;i=o.xs,n=o.ys,e.util.assert(null!=i&&null!=n,()=>`A Dataset iterator for fitDataset() is expected to generate objects of the form \`{xs: xVal, ys: yVal}\`, where the two values may be \`tf.Tensor\`, an array of Tensors, or a map of string to Tensor.  The provided Dataset instead generates ${s}`);const r=u('input',t.inputNames,i),l=u('output',t.outputNames,n),c=r[0].shape[0];e.util.assert(r.length===t.inputs.length,()=>`LayersModel has ${t.inputs.length} inputs, but the dataset provides ${r.length} inputs.  (Expected input keys: ${JSON.stringify(t.inputNames)})`),e.util.assert(l.length===t.outputs.length,()=>`LayersModel has ${t.outputs.length} outputs, but the dataset provides ${l.length} outputs.  (Expected output keys: ${JSON.stringify(t.outputNames)})`);for(let s=0;s<r.length;s++)e.util.assert(r[s].shape[0]===c,()=>`Batch size mismatch: input ${t.inputNames[s]} has ${r[s].shape[0]}; expected  ${c} based on input ${t.inputNames[0]}.`);for(let s=0;s<l.length;s++)e.util.assert(l[s].shape[0]===c,()=>`Batch size mismatch: output ${t.outputNames[s]} has ${l[s].shape[0]}; expected  ${c} based on input ${t.inputNames[0]}.`);return{xs:r,ys:l}}function u(t,s,n){if(n instanceof e.Tensor)return[n];if(Array.isArray(n))return e.util.assert(n.length===s.length,()=>`Received an array of ${n.length} Tensors, but expected ${s.length} to match the ${t} keys ${s}.`),n;{const e=[];for(const o of s){if(null==n[o])throw new i.ValueError(`The feature data generated by the dataset lacks the required ${t} key '${o}'.`);e.push(n[o])}return e}}function h(t){if(3===t.length)throw new i.NotImplementedError('Validation with sample weights is not implemented yet.');return{xs:t[0],ys:t[1]}}function p(t,e){let s=null;return null!=e.batchesPerEpoch?s=e.batchesPerEpoch:Number.isFinite(t.size)&&(s=t.size),s}function f(t){return'function'==typeof t.iterator}},2205,[1158,2193,2172,2194,2174,2206]);
__d(function(g,r,i,a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.computeWeightedLoss=function(n,s){return(0,t.mul)(n,s)},e.standardizeClassWeights=function(t,s){return n(t,s,'classWeight')},e.standardizeSampleWeights=function(t,s){return n(t,s,'sampleWeight')},e.standardizeWeights=async function(n,s,o,h){if(null!=s||null!=h)throw new Error('Support sampleWeight is not implemented yet');if(null!=o){const s=(0,t.tidy)(()=>{if(1===n.shape.length)return(0,t.clone)(n);if(2===n.shape.length){if(n.shape[1]>1){const s=1;return(0,t.argMax)(n,s)}if(1===n.shape[1])return(0,t.reshape)(n,[n.shape[0]]);throw new Error(`Encountered unexpected last-dimension size (${n.shape[1]}) during handling of class weights. The size is expected to be >= 1.`)}throw new Error(`Unexpected rank of target (y) tensor (${n.rank}) during handling of class weights. The rank is expected to be 1 or 2.`)}),h=Array.from(await s.data());(0,t.dispose)(s);const l=[];return h.forEach(t=>{if(null==o[t])throw new Error(`classWeight must contain all classes in the training data. The class ${t} exists in the data but not in classWeight`);l.push(o[t])}),(0,t.tensor1d)(l,'float32')}return null};var t=r(d[0]);
/**
   * @license
   * Copyright 2018 Google LLC
   *
   * Use of this source code is governed by an MIT-style
   * license that can be found in the LICENSE file or at
   * https://opensource.org/licenses/MIT.
   * =============================================================================
   */function n(t,n,s){const o=n.length;if(null==t||Array.isArray(t)&&0===t.length)return n.map(t=>null);if(1===o)return Array.isArray(t)&&1===t.length?t:'object'==typeof t&&n[0]in t?[t[n[0]]]:[t];if(Array.isArray(t)){if(t.length!==o)throw new Error(`Provided ${s} is an array of ${t.length} element(s), but the model has ${o} outputs. Make sure a set of weights is provided for each model output.`);return t}if('object'==typeof t&&Object.keys(t).length>0&&'object'==typeof t[Object.keys(t)[0]]){const s=[];return n.forEach(n=>{n in t?s.push(t[n]):s.push(null)}),s}throw new Error(`The model has multiple (${o}) outputs, so ${s} must be either an array with ${o} elements or an object with ${n} keys. Provided ${s} not understood: ${JSON.stringify(t)}`)}},2206,[1158]);
__d(function(g,_r,_i,a,m,_e,d){Object.defineProperty(_e,"__esModule",{value:!0}),_e.checkBatchSize=
/**
   * @license
   * Copyright 2018 Google LLC
   *
   * Use of this source code is governed by an MIT-style
   * license that can be found in the LICENSE file or at
   * https://opensource.org/licenses/MIT.
   * =============================================================================
   */
function(e){n.util.assert(e>0&&Number.isInteger(e),()=>`batchSize is required to be a positive integer, but got ${e}`)},_e.disposeNewTensors=function(n,r){if(null==n)return;const t=[];if(r instanceof e.Tensor)t.push(r.id);else if(Array.isArray(r))r.forEach(e=>t.push(e.id));else if(null!=r)for(const e in r){const n=r[e];t.push(n.id)}const s=[];if(n instanceof e.Tensor)-1===t.indexOf(n.id)&&s.push(n);else if(Array.isArray(n))n.forEach(e=>{-1===t.indexOf(e.id)&&s.push(e)});else if(null!=n)for(const e in n){const r=n[e];-1===t.indexOf(r.id)&&s.push(r)}s.forEach(e=>{e.isDisposed||e.dispose()})},_e.ensureTensorsRank2OrHigher=function(n){const t=[];n instanceof e.Tensor&&(n=[n]);for(let e=0;e<n.length;++e){const s=n[e];if(1===s.rank)t.push((0,r.expandDims)(s,1));else{if(0===s.rank)throw new Error("Expected tensor to be at least 1D, but received a 0D tensor (scalar).");t.push(s)}}return t},_e.makeBatches=function(e,n){const r=[];let t=0,s=null;for(;t<e;)s=t+n,s>=e&&(s=e),r.push([t,s]),t=s;return r},_e.sliceArrays=function(e,n,t){return null==e?[null]:Array.isArray(e)?e.map(e=>(0,r.sliceAlongFirstAxis)(e,n,t-n)):(0,r.sliceAlongFirstAxis)(e,n,t-n)},_e.sliceArraysByIndices=function e(t,s){return n.tidy(()=>null==t?null:Array.isArray(t)?t.map(n=>e(n,s)):(0,r.gather)(t,'int32'===s.dtype?s:n.cast(s,'int32')))};var e=(function(e,n){if("function"==typeof WeakMap)var r=new WeakMap,t=new WeakMap;return(function(e,n){if(!n&&e&&e.__esModule)return e;var s,i,o={__proto__:null,default:e};if(null===e||"object"!=typeof e&&"function"!=typeof e)return o;if(s=n?t:r){if(s.has(e))return s.get(e);s.set(e,o)}for(const n in e)"default"!==n&&{}.hasOwnProperty.call(e,n)&&((i=(s=Object.defineProperty)&&Object.getOwnPropertyDescriptor(e,n))&&(i.get||i.set)?s(o,n,i):o[n]=e[n]);return o})(e,n)})(_r(d[0])),n=e,r=_r(d[1])},2207,[1158,2181]);
__d(function(g,_r,_i,a,m,_e,d){Object.defineProperty(_e,"__esModule",{value:!0}),_e.Sequential=void 0,_e.loadLayersModel=async function(t,s){null==s&&(s={});if('string'==typeof t){const i=e.io.getLoadHandlers(t,s);if(0===i.length)i.push(e.io.browserHTTPRequest(t,s));else if(i.length>1)throw new n.ValueError(`Found more than one (${i.length}) load handlers for URL '${t}'`);t=i[0]}return p(t,void 0,s)},_e.loadLayersModelFromIOHandler=p,_e.modelFromJSON=
/**
   * @license
   * Copyright 2018 Google LLC
   *
   * Use of this source code is governed by an MIT-style
   * license that can be found in the LICENSE file or at
   * https://opensource.org/licenses/MIT.
   * =============================================================================
   */
async function(t,s){'modelTopology'in t||(t={modelTopology:t});let i=t.modelTopology;null!=i.model_config&&(i=i.model_config);const o=(0,u.convertPythonicToTs)(i),n=(0,r.deserialize)(o,s);if(null!=t.weightsManifest){const s=await e.io.loadWeights(t.weightsManifest,t.pathPrefix,n.weights.map(e=>e.originalName)),i={};for(const e of n.weights)i[e.originalName]=s[e.originalName];n.loadWeights(i),(0,e.dispose)(s)}return n};var e=_r(d[0]),t=_r(d[1]),s=_r(d[2]),i=_r(d[3]),o=_r(d[4]),n=_r(d[5]),r=_r(d[6]),l=(function(e,t){if("function"==typeof WeakMap)var s=new WeakMap,i=new WeakMap;return(function(e,t){if(!t&&e&&e.__esModule)return e;var o,n,r={__proto__:null,default:e};if(null===e||"object"!=typeof e&&"function"!=typeof e)return r;if(o=t?i:s){if(o.has(e))return o.get(e);o.set(e,r)}for(const t in e)"default"!==t&&{}.hasOwnProperty.call(e,t)&&((n=(o=Object.defineProperty)&&Object.getOwnPropertyDescriptor(e,t))&&(n.get||n.set)?o(r,t,n):r[t]=e[t]);return r})(e,t)})(_r(d[7])),u=_r(d[8]),h=_r(d[9]);async function p(t,s,i){if(null==i&&(i={}),null==t.load)throw new n.ValueError("Cannot proceed with model loading because the IOHandler provided does not have the `load` method implemented.");const o=await t.load();let l=o.modelTopology;null!=l.model_config&&(l=l.model_config);const h=null==i.strict||i.strict,p=null!=o.weightData&&null!=o.weightSpecs&&h,f=(0,r.deserialize)((0,u.convertPythonicToTs)(l),s,p),y=o.trainingConfig;if(null!=y&&f.loadTrainingConfig(y),null!=o.userDefinedMetadata&&f.setUserDefinedMetadata(o.userDefinedMetadata),null!=o.weightData){if(null==o.weightSpecs)throw new n.ValueError("LayersModel artifacts contains weight data, but not weight specs. Therefore loading of weights cannot proceed.");const{modelWeights:t,optimizerWeights:s}=c(o.weightData,o.weightSpecs);f.loadWeights(t,h),null!=f.optimizer&&s.length>0&&await f.optimizer.setWeights(s),(0,e.dispose)(t),(0,e.dispose)(s.map(e=>e.tensor))}return f}function c(t,s){const i=e.io.decodeWeights(t,s),o={},n=[];return s.forEach(e=>{'optimizer'===e.group?n.push({name:e.name,tensor:i[e.name]}):o[e.name]=i[e.name]}),{modelWeights:o,optimizerWeights:n}}class f extends o.LayersModel{constructor(e){if(super({inputs:[],outputs:[]}),e=e||{},this.trainable=!0,this.built=!1,this.name=null!=e.name?e.name:(0,t.getUid)('sequential_'),null!=e.layers)for(const t of e.layers)this.add(t)}checkShape(e){if(e.inboundNodes[0].outputTensors[0].shape.some(e=>e<0))throw new n.ValueError(`Negative dimension size caused by adding layer ${e.name} with input shape [${e.inboundNodes[0].inputTensors[0].shape}]`)}add(e){const t=e instanceof f||e instanceof o.LayersModel;let r;if(t){if(r=e,1!==r.outputs.length)throw new n.ValueError("All layers in a Sequential model should have a single output tensor. For multi-output layers, use the functional API.");if(1!==r.inputs.length)throw new n.ValueError("All layers in a Sequential model should have a single input tensor. For multi-input layers, use the functional API.")}if(0===this.outputs.length){if(0===e.inboundNodes.length){if(null==e.batchInputShape)throw new n.ValueError("The first layer in a Sequential model must get an `inputShape` or `batchInputShape` argument.");const t=(0,s.Input)({batchShape:e.batchInputShape,dtype:e.dtype,name:e.name+'_input'});e.apply(t)}if(t)this.outputs=r.outputs,this.inputs=r.inputs;else{if(1!==e.inboundNodes.length)throw new n.ValueError(`A layer added to a Sequential model must not already be connected somewhere else. LayersModel received layer ${e.name} which has ${e.inboundNodes.length} pre-existing inbound connections.`);if(1!==e.inboundNodes[0].outputTensors.length)throw new n.ValueError("All layers in a Sequential model should have a single output tensor. For multi-output layers, use the functional API.");this.checkShape(e),this.outputs=[e.inboundNodes[0].outputTensors[0]],this.inputs=(0,i.getSourceInputs)(this.outputs[0])}this.inboundNodes=[],new i.Node({outboundLayer:this,inboundLayers:[],nodeIndices:[],tensorIndices:[],inputTensors:this.inputs,outputTensors:this.outputs,inputMasks:l.pyListRepeat(null,this.inputs.length),outputMasks:[null],inputShapes:this.inputs.map(e=>e.shape),outputShapes:this.outputs[0].shape})}else{const t=e.apply(this.outputs[0]);if(Array.isArray(t))throw new TypeError("All layers in a Sequential model should have a single output tensor. For multi-output layers, use the functional API.");this.checkShape(e),this.outputs=[t],this.inboundNodes[0].outputTensors=this.outputs,this.inboundNodes[0].outputShapes=[this.outputs[0].shape]}this.layers.push(e),this.built=!1}pop(){if(0===this.layers.length)throw new TypeError('There are no layers in the model.');if(this.layers.pop(),0===this.layers.length)this.outputs=[],this.inboundNodes=[],this.outboundNodes=[];else{const e=this.layers.length-1;this.layers[e].outboundNodes=[],this.outputs=[this.layers[e].output],this.inboundNodes[0].outputTensors=this.outputs,this.inboundNodes[0].outputShapes=[this.outputs[0].shape]}}call(e,t){return null==this.model&&this.build(),this.model.call(e,t)}build(e){if((0,h.getExactlyOneShape)(e),0===this.inputs.length||0===this.outputs.length)throw new TypeError("Sequential model cannot be built: model is empty. Add some layers first.");this.model=new o.LayersModel({inputs:this.inputs,outputs:this.outputs[0],name:this.name+'_model'}),this.model.trainable=this.trainable,this.supportsMasking=this.model.supportsMasking,this.inputLayers=this.model.inputLayers,this.inputLayersNodeIndices=this.model.inputLayersNodeIndices,this.inputLayersTensorIndices=this.model.inputLayersTensorIndices,this.outputLayers=this.model.outputLayers,this.outputLayersNodeIndices=this.model.outputLayersNodeIndices,this.outputLayersTensorIndices=this.model.outputLayersTensorIndices,this.nodesByDepth=this.model.nodesByDepth,this.containerNodes=this.model.containerNodes,this.outputNames=this.model.outputNames,this.inputNames=this.model.inputNames,this.built=!0}countParams(){return this.built||this.build(),super.countParams()}summary(e,t,s=console.log){this.built||this.build(),super.summary(e,t,s)}setWeights(e){null==this.model&&this.build(),this.model.setWeights(e)}evaluate(e,t,s={}){if(!this.built)throw new n.RuntimeError('The model needs to be compiled before being used.');return this.model.evaluate(e,t,s)}async evaluateDataset(e,t){if(!this.built)throw new n.RuntimeError('The model needs to be compiled before being used.');return this.model.evaluateDataset(e,t)}predict(e,t={}){return null==this.model&&this.build(),this.model.predict(e,t)}predictOnBatch(e){return null==this.model&&this.build(),this.model.predictOnBatch(e)}compile(e){this.build(),this.model.compile(e),this.optimizer_=this.model.optimizer,this.isOptimizerOwned=this.model.isOptimizerOwned,this.loss=this.model.loss,this.metrics=this.model.metrics,this.metricsTensors=this.model.metricsTensors,this.metricsNames=this.model.metricsNames}get optimizer(){return null==this.model?void 0:this.model.optimizer}set optimizer(e){this.model.optimizer=e}async fit(e,t,s={}){if(!this.built)throw new n.RuntimeError("The model needs to be compiled before being used.");return this.model.fit(e,t,s)}async fitDataset(e,t){if(!this.built)throw new n.RuntimeError("The model needs to be compiled before being used.");return this.model.fitDataset(e,t)}async trainOnBatch(e,t){return this.model.trainOnBatch(e,t)}static fromConfig(t,s,i={},o=!1){let l,u={};if(s instanceof Array){if(null==s[0].className||'Merge'===s[0].className)throw new n.ValueError('Legacy serialization format not supported yet.');l=s}else e.util.assert(null!=s.layers,()=>"When the config data for a Sequential model is not an Array, it must be an Object that contains the 'layers' field."),l=s.layers,delete s.layers,u=s;const h=new t(u);if(!(h instanceof f))throw new n.NotImplementedError(`Sequential.fromConfig called on non-Sequential input: ${h}`);for(const e of l){const t=void 0,s=(0,r.deserialize)(e,t,o);o&&s.setFastWeightInitDuringBuild(!0),h.add(s)}return h}set stopTraining(e){if(null==this.model)throw new n.ValueError("Cannot set the stopTraining property of a sequential model before it is compiled.");this.model.stopTraining=e}get stopTraining(){if(null==this.model)throw new n.ValueError("Cannot get the stopTraining property of a sequential model before it is compiled.");return this.model.stopTraining}getConfig(){const e=[];for(const t of this.layers){const s={};s.className=t.getClassName(),s.config=t.getConfig(),e.push(s)}return{name:this.name,layers:e}}}_e.Sequential=f,f.className='Sequential',e.serialization.registerClass(f)},2208,[1158,2176,2175,2177,2195,2172,2196,2174,2202,2185]);
__d(function(g,r,_i,a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.ThresholdedReLU=e.Softmax=e.ReLU=e.PReLU=e.LeakyReLU=e.ELU=void 0;var t=r(d[0]),s=r(d[1]),l=r(d[2]),i=r(d[3]),n=r(d[4]),h=r(d[5]),u=r(d[6]),o=r(d[7]);
/**
   * @license
   * Copyright 2018 Google LLC
   *
   * Use of this source code is governed by an MIT-style
   * license that can be found in the LICENSE file or at
   * https://opensource.org/licenses/MIT.
   * =============================================================================
   */
class p extends i.Layer{constructor(t){super(null==t?{}:t),this.supportsMasking=!0,null!=t&&(this.maxValue=t.maxValue)}call(s,l){s=(0,o.getExactlyOneTensor)(s);let i=(0,t.relu)(s);return null!=this.maxValue&&(i=(0,t.clipByValue)(i,0,this.maxValue)),i}computeOutputShape(t){return t}getConfig(){const t={maxValue:this.maxValue},s=super.getConfig();return Object.assign(t,s),t}}e.ReLU=p,p.className='ReLU',t.serialization.registerClass(p);class c extends i.Layer{constructor(t){super(null==t?{}:t),this.DEFAULT_ALPHA=.3,null==t&&(t={}),this.alpha=null==t.alpha?this.DEFAULT_ALPHA:t.alpha}call(s,l){const i=(0,o.getExactlyOneTensor)(s);return(0,t.leakyRelu)(i,this.alpha)}computeOutputShape(t){return t}getConfig(){const t={alpha:this.alpha},s=super.getConfig();return Object.assign(t,s),t}}e.LeakyReLU=c,c.className='LeakyReLU',t.serialization.registerClass(c);class x extends i.Layer{constructor(t){if(super(null==t?{}:t),this.DEFAULT_ALPHA_INITIALIZER='zeros',null==t&&(t={}),this.supportsMasking=!0,this.alphaInitializer=(0,h.getInitializer)(t.alphaInitializer||this.DEFAULT_ALPHA_INITIALIZER),this.alphaRegularizer=(0,u.getRegularizer)(t.alphaRegularizer),this.alphaConstraint=(0,l.getConstraint)(t.alphaConstraint),null==t.sharedAxes)this.sharedAxes=null;else if(Array.isArray(t.sharedAxes))this.sharedAxes=t.sharedAxes;else{if('number'!=typeof t.sharedAxes)throw new n.ValueError(`Expected sharedAxes to be a number or an array of numbers, but got ${t.sharedAxes}`);this.sharedAxes=[t.sharedAxes]}}build(t){const s=(t=(0,o.getExactlyOneShape)(t)).slice(1);if(null!=this.sharedAxes)for(const t of this.sharedAxes)s[t-1]=1;this.alpha=this.addWeight('alpha',s,'float32',this.alphaInitializer,this.alphaRegularizer,!0,this.alphaConstraint);const l={};if(null!=this.sharedAxes)for(let s=1;s<t.length;++s)l[s]=t[s];this.inputSpec=[new i.InputSpec({ndim:t.length,axes:l})],this.built=!0}call(s,l){return s=(0,o.getExactlyOneTensor)(s),(0,t.prelu)(s,this.alpha.read())}getConfig(){const t={alphaInitializer:(0,h.serializeInitializer)(this.alphaInitializer),alphaRegularizer:(0,u.serializeRegularizer)(this.alphaRegularizer),alphaConstraint:(0,l.serializeConstraint)(this.alphaConstraint),sharedAxes:this.sharedAxes},s=super.getConfig();return Object.assign(t,s),t}}e.PReLU=x,x.className='PReLU',t.serialization.registerClass(x);class A extends i.Layer{constructor(t){if(super(null==t?{}:t),this.DEFAULT_ALPHA=1,null==t&&(t={}),null!=t.alpha&&t.alpha!==this.DEFAULT_ALPHA)throw new n.NotImplementedError(`Non-default alpha value (${t.alpha}) is not supported by the ELU layer yet.`);this.alpha=null==t.alpha?this.DEFAULT_ALPHA:t.alpha}call(s,l){const i=(0,o.getExactlyOneTensor)(s);return(0,t.elu)(i)}computeOutputShape(t){return t}getConfig(){const t={alpha:this.alpha},s=super.getConfig();return Object.assign(t,s),t}}e.ELU=A,A.className='ELU',t.serialization.registerClass(A);class L extends i.Layer{constructor(t){super(null==t?{}:t),this.DEFAULT_THETA=1,null==t&&(t={}),this.theta=null==t.theta?this.DEFAULT_THETA:t.theta}call(s,l){const i=(0,o.getExactlyOneTensor)(s);return(0,t.mul)(i,(0,t.cast)((0,t.greater)(i,this.theta),'float32'))}computeOutputShape(t){return t}getConfig(){const t={theta:this.theta},s=super.getConfig();return Object.assign(t,s),t}}e.ThresholdedReLU=L,L.className='ThresholdedReLU',t.serialization.registerClass(L);class f extends i.Layer{constructor(t){super(null==t?{}:t),this.DEFAULT_AXIS=1,null==t&&(t={}),this.softmax=(new s.Softmax).apply,this.axis=null==t.axis?this.DEFAULT_AXIS:t.axis}call(s,l){return(0,t.tidy)(()=>{let i=(0,o.getExactlyOneTensor)(s);const n=l.mask;if(null!=n){const s=(0,t.mul)((0,t.sub)((0,t.ones)(i.shape),(0,t.cast)(n,i.dtype)),(0,t.scalar)(-1e9));i=(0,t.add)(i,s)}return this.axis instanceof Array?this.axis.length>1?(0,t.exp)((0,t.sub)(i,(0,t.logSumExp)(i,this.axis,!0))):this.softmax(i,this.axis[0]):this.softmax(i,this.axis)})}computeOutputShape(t){return t}getConfig(){const t={axis:this.axis},s=super.getConfig();return Object.assign(t,s),t}}e.Softmax=f,f.className='Softmax',t.serialization.registerClass(f)},2209,[1158,2210,2189,2177,2172,2180,2211,2185]);
__d(function(g,_r,_i,a,m,_e,d){Object.defineProperty(_e,"__esModule",{value:!0}),_e.Tanh=_e.Swish=_e.Softsign=_e.Softplus=_e.Softmax=_e.Sigmoid=_e.Selu=_e.Relu6=_e.Relu=_e.Mish=_e.LogSoftmax=_e.Linear=_e.HardSigmoid=_e.GeluNew=_e.Gelu=_e.Elu=_e.Activation=void 0,_e.deserializeActivation=_,_e.getActivation=function(e){if(null==e){const e={className:'linear',config:{}};return _(e)}if('string'==typeof e){const s={};return s.className=e,s.config={},_(s)}return e instanceof r?e:_(e)},_e.serializeActivation=function(e){return e.getClassName()};var e=l(_r(d[0])),s=e,t=l(_r(d[1])),i=_r(d[2]);function l(e,s){if("function"==typeof WeakMap)var t=new WeakMap,i=new WeakMap;return(l=function(e,s){if(!s&&e&&e.__esModule)return e;var l,r,n={__proto__:null,default:e};if(null===e||"object"!=typeof e&&"function"!=typeof e)return n;if(l=s?i:t){if(l.has(e))return l.get(e);l.set(e,n)}for(const s in e)"default"!==s&&{}.hasOwnProperty.call(e,s)&&((r=(l=Object.defineProperty)&&Object.getOwnPropertyDescriptor(e,s))&&(r.get||r.set)?l(n,s,r):n[s]=e[s]);return n})(e,s)}
/**
   * @license
   * Copyright 2018 Google LLC
   *
   * Use of this source code is governed by an MIT-style
   * license that can be found in the LICENSE file or at
   * https://opensource.org/licenses/MIT.
   * =============================================================================
   */class r extends e.serialization.Serializable{getConfig(){return{}}}_e.Activation=r;class n extends r{apply(e,s=1){return t.elu(e,s)}}_e.Elu=n,n.className='elu',e.serialization.registerClass(n);class o extends r{apply(e){return s.selu(e)}}_e.Selu=o,o.className='selu',e.serialization.registerClass(o);class u extends r{apply(e){return s.relu(e)}}_e.Relu=u,u.className='relu',e.serialization.registerClass(u);class c extends r{apply(t){return(0,e.tidy)(()=>s.minimum(6,s.relu(t)))}}_e.Relu6=c,c.className='relu6',e.serialization.registerClass(c);class p extends r{apply(e){return e}}_e.Linear=p,p.className='linear',e.serialization.registerClass(p);class f extends r{apply(e){return s.sigmoid(e)}}_e.Sigmoid=f,f.className='sigmoid',e.serialization.registerClass(f);class y extends r{apply(e){return t.hardSigmoid(e)}}_e.HardSigmoid=y,y.className='hardSigmoid',e.serialization.registerClass(y);class x extends r{apply(e){return s.softplus(e)}}_e.Softplus=x,x.className='softplus',e.serialization.registerClass(x);class z extends r{apply(e){return t.softsign(e)}}_e.Softsign=z,z.className='softsign',e.serialization.registerClass(z);class N extends r{apply(e){return s.tanh(e)}}_e.Tanh=N,N.className='tanh',e.serialization.registerClass(N);class S extends r{apply(e,t=-1){return s.softmax(e,t)}}_e.Softmax=S,S.className='softmax',e.serialization.registerClass(S);class h extends r{apply(e,t=-1){return s.logSoftmax(e,t)}}_e.LogSoftmax=h,h.className='logSoftmax',e.serialization.registerClass(h);class C extends r{apply(t){return(0,e.tidy)(()=>s.tidy(()=>{const e=Math.sqrt(2),i=s.mul(.5,s.add(1,s.erf(s.div(t,e))));return s.mul(t,i)}))}}_e.Gelu=C,C.className='gelu',e.serialization.registerClass(C);class v extends r{apply(t){return(0,e.tidy)(()=>s.mul(.5,s.mul(t,s.add(1,s.tanh(s.mul(s.sqrt(s.div(2,Math.PI)),s.add(t,s.mul(.044715,s.pow(t,3)))))))))}}_e.GeluNew=v,v.className='gelu_new',e.serialization.registerClass(v);class M extends r{apply(t){return(0,e.tidy)(()=>s.mul(t,s.tanh(s.softplus(t))))}}_e.Mish=M,M.className='mish',e.serialization.registerClass(M);class w extends r{apply(t,i=1){return(0,e.tidy)(()=>s.mul(s.sigmoid(s.mul(t,i)),t))}}function _(s,t={}){return(0,i.deserializeKerasObject)(s,e.serialization.SerializationMap.getMap().classNameMap,t,'activation')}_e.Swish=w,w.className='swish',e.serialization.registerClass(w)},2210,[1158,2181,2174]);
__d(function(g,_r,_i,a,m,_e,d){Object.defineProperty(_e,"__esModule",{value:!0}),_e.Regularizer=_e.REGULARIZER_IDENTIFIER_REGISTRY_SYMBOL_MAP=_e.L1L2=void 0,_e.deserializeRegularizer=c,_e.getRegularizer=function(e){if(null==e)return null;if('string'==typeof e){return c({className:e in o?o[e]:e,config:{}})}return e instanceof s?e:c(e)},_e.l1=function(e){return i(e),new u({l1:null!=e?e.l1:null,l2:0})},_e.l2=function(e){return i(e),new u({l2:null!=e?e.l2:null,l1:0})},_e.serializeRegularizer=function(e){return(0,l.serializeKerasObject)(e)};var e=n(_r(d[0])),t=e,r=n(_r(d[1])),l=_r(d[2]);function n(e,t){if("function"==typeof WeakMap)var r=new WeakMap,l=new WeakMap;return(n=function(e,t){if(!t&&e&&e.__esModule)return e;var n,i,s={__proto__:null,default:e};if(null===e||"object"!=typeof e&&"function"!=typeof e)return s;if(n=t?l:r){if(n.has(e))return n.get(e);n.set(e,s)}for(const t in e)"default"!==t&&{}.hasOwnProperty.call(e,t)&&((i=(n=Object.defineProperty)&&Object.getOwnPropertyDescriptor(e,t))&&(i.get||i.set)?n(s,t,i):s[t]=e[t]);return s})(e,t)}
/**
   * @license
   * Copyright 2018 Google LLC
   *
   * Use of this source code is governed by an MIT-style
   * license that can be found in the LICENSE file or at
   * https://opensource.org/licenses/MIT.
   * =============================================================================
   */function i(e){if(null!=e&&'object'!=typeof e)throw new Error(`Argument to L1L2 regularizer's constructor is expected to be an object, but received: ${e}`)}class s extends e.serialization.Serializable{}_e.Regularizer=s;class u extends s{constructor(e){super(),i(e),this.l1=null==e||null==e.l1?.01:e.l1,this.l2=null==e||null==e.l2?.01:e.l2,this.hasL1=0!==this.l1,this.hasL2=0!==this.l2}apply(l){return(0,e.tidy)(()=>{let n=(0,e.zeros)([1]);return this.hasL1&&(n=(0,e.add)(n,(0,e.sum)(t.mul(this.l1,(0,e.abs)(l))))),this.hasL2&&(n=(0,e.add)(n,(0,e.sum)(t.mul(this.l2,r.square(l))))),t.reshape(n,[])})}getConfig(){return{l1:this.l1,l2:this.l2}}static fromConfig(e,t){return new e({l1:t.l1,l2:t.l2})}}_e.L1L2=u,u.className='L1L2',e.serialization.registerClass(u);const o=_e.REGULARIZER_IDENTIFIER_REGISTRY_SYMBOL_MAP={l1l2:'L1L2'};function c(t,r={}){return(0,l.deserializeKerasObject)(t,e.serialization.SerializationMap.getMap().classNameMap,r,'regularizer')}},2211,[1158,2181,2174]);
__d(function(e,t,i,n,s,r,a){Object.defineProperty(r,"__esModule",{value:!0}),r.UpSampling2D=r.SeparableConv2D=r.SeparableConv=r.Cropping2D=r.Conv3DTranspose=r.Conv3D=r.Conv2DTranspose=r.Conv2D=r.Conv1D=r.Conv=r.BaseConv=void 0,r.conv1d=function(e,t,i=1,n="valid",s,r=1){return(0,o.tidy)(()=>((0,u.checkDataFormat)(s),S(e,t,null,i,n,s,r)))},r.conv1dWithBias=S,r.conv2d=function(e,t,i=[1,1],n="valid",s,r){return(0,o.tidy)(()=>((0,u.checkDataFormat)(s),I(e,t,null,i,n,s,r)))},r.conv2dWithBiasActivation=I,r.conv3d=function(e,t,i=[1,1,1],n="valid",s,r){return(0,o.tidy)(()=>((0,u.checkDataFormat)(s),F(e,t,null,i,n,s,r)))},r.conv3dWithBias=F,r.preprocessConv2DInput=C,r.preprocessConv3DInput=y;var o=w(t(a[0])),l=o,h=t(a[1]),d=t(a[2]),p=w(t(a[3])),u=t(a[4]),c=t(a[5]),g=t(a[6]),f=t(a[7]),m=t(a[8]),z=t(a[9]),v=t(a[10]),k=w(t(a[11])),b=t(a[12]);function w(e,t){if("function"==typeof WeakMap)var i=new WeakMap,n=new WeakMap;return(w=function(e,t){if(!t&&e&&e.__esModule)return e;var s,r,a={__proto__:null,default:e};if(null===e||"object"!=typeof e&&"function"!=typeof e)return a;if(s=t?n:i){if(s.has(e))return s.get(e);s.set(e,a)}for(const t in e)"default"!==t&&{}.hasOwnProperty.call(e,t)&&((r=(s=Object.defineProperty)&&Object.getOwnPropertyDescriptor(e,t))&&(r.get||r.set)?s(a,t,r):a[t]=e[t]);return a})(e,t)}
/**
   * @license
   * Copyright 2018 Google LLC
   *
   * Use of this source code is governed by an MIT-style
   * license that can be found in the LICENSE file or at
   * https://opensource.org/licenses/MIT.
   * =============================================================================
   */function C(e,t){return(0,o.tidy)(()=>((0,u.checkDataFormat)(t),'channelsFirst'===t?l.transpose(e,[0,2,3,1]):e))}function y(e,t){return(0,o.tidy)(()=>((0,u.checkDataFormat)(t),'channelsFirst'===t?l.transpose(e,[0,2,3,4,1]):e))}function S(e,t,i,n=1,s="valid",r,a=1){return(0,o.tidy)(()=>{if(null==r&&(r=(0,d.imageDataFormat)()),(0,u.checkDataFormat)(r),3!==e.shape.length)throw new f.ValueError(`The input of a conv1dWithBias operation should be 3, but is ${e.shape.length} instead.`);if(3!==t.shape.length)throw new f.ValueError(`The kernel for a conv1dWithBias operation should be 3, but is ${t.shape.length} instead`);if(null!=i&&1!==i.shape.length)throw new f.ValueError(`The bias for a conv1dWithBias operation should be 1, but is ${i.shape.length} instead`);if('channelsFirst'===r&&(e=l.transpose(e,[0,2,1])),'causal'===s)throw new f.NotImplementedError("The support for CAUSAL padding mode in conv1dWithBias is not implemented yet.");let o=l.conv1d(e,t,n,'same'===s?'same':'valid','NWC',a);return null!=i&&(o=p.biasAdd(o,i)),o})}function I(e,t,i,n=[1,1],s="valid",r,a,h=null){return(0,o.tidy)(()=>{if(null==r&&(r=(0,d.imageDataFormat)()),(0,u.checkDataFormat)(r),3!==e.rank&&4!==e.rank)throw new f.ValueError(`conv2dWithBiasActivation expects input to be of rank 3 or 4, but received ${e.rank}.`);if(3!==t.rank&&4!==t.rank)throw new f.ValueError(`conv2dWithBiasActivation expects kernel to be of rank 3 or 4, but received ${e.rank}.`);let o=C(e,r);if('causal'===s)throw new f.NotImplementedError("The support for CAUSAL padding mode in conv1dWithBias is not implemented yet.");return o=l.fused.conv2d({x:o,filter:t,strides:n,pad:'same'===s?'same':'valid',dilations:a,dataFormat:'NHWC',bias:i,activation:h}),'channelsFirst'===r&&(o=l.transpose(o,[0,3,1,2])),o})}function F(e,t,i,n=[1,1,1],s="valid",r,a){return(0,o.tidy)(()=>{if(null==r&&(r=(0,d.imageDataFormat)()),(0,u.checkDataFormat)(r),4!==e.rank&&5!==e.rank)throw new f.ValueError(`conv3dWithBias expects input to be of rank 4 or 5, but received ${e.rank}.`);if(4!==t.rank&&5!==t.rank)throw new f.ValueError(`conv3dWithBias expects kernel to be of rank 4 or 5, but received ${e.rank}.`);let o=y(e,r);if('causal'===s)throw new f.NotImplementedError("The support for CAUSAL padding mode in conv3dWithBias is not implemented yet.");return o=l.conv3d(o,t,n,'same'===s?'same':'valid','NDHWC',a),null!=i&&(o=p.biasAdd(o,i)),'channelsFirst'===r&&(o=l.transpose(o,[0,4,1,2,3])),o})}class R extends g.Layer{constructor(e,t){if(super(t),this.bias=null,this.DEFAULT_KERNEL_INITIALIZER='glorotNormal',this.DEFAULT_BIAS_INITIALIZER='zeros',R.verifyArgs(t),this.rank=e,k.assertPositiveInteger(this.rank,'rank'),1!==this.rank&&2!==this.rank&&3!==this.rank)throw new f.NotImplementedError(`Convolution layer for rank other than 1, 2, or 3 (${this.rank}) is not implemented yet.`);if(this.kernelSize=(0,v.normalizeArray)(t.kernelSize,e,'kernelSize'),this.strides=(0,v.normalizeArray)(null==t.strides?1:t.strides,e,'strides'),this.padding=null==t.padding?'valid':t.padding,(0,u.checkPaddingMode)(this.padding),this.dataFormat=null==t.dataFormat?'channelsLast':t.dataFormat,(0,u.checkDataFormat)(this.dataFormat),this.activation=(0,h.getActivation)(t.activation),this.useBias=null==t.useBias||t.useBias,this.biasInitializer=(0,m.getInitializer)(t.biasInitializer||this.DEFAULT_BIAS_INITIALIZER),this.biasConstraint=(0,c.getConstraint)(t.biasConstraint),this.biasRegularizer=(0,z.getRegularizer)(t.biasRegularizer),this.activityRegularizer=(0,z.getRegularizer)(t.activityRegularizer),this.dilationRate=(0,v.normalizeArray)(null==t.dilationRate?1:t.dilationRate,e,'dilationRate'),1===this.rank&&Array.isArray(this.dilationRate)&&1!==this.dilationRate.length)throw new f.ValueError(`dilationRate must be a number or an array of a single number for 1D convolution, but received ${JSON.stringify(this.dilationRate)}`);if(2===this.rank){if('number'==typeof this.dilationRate)this.dilationRate=[this.dilationRate,this.dilationRate];else if(2!==this.dilationRate.length)throw new f.ValueError(`dilationRate must be a number or array of two numbers for 2D convolution, but received ${JSON.stringify(this.dilationRate)}`)}else if(3===this.rank)if('number'==typeof this.dilationRate)this.dilationRate=[this.dilationRate,this.dilationRate,this.dilationRate];else if(3!==this.dilationRate.length)throw new f.ValueError(`dilationRate must be a number or array of three numbers for 3D convolution, but received ${JSON.stringify(this.dilationRate)}`)}static verifyArgs(e){if(k.assert('kernelSize'in e,"required key 'kernelSize' not in config"),'number'!=typeof e.kernelSize&&!k.checkArrayTypeAndLength(e.kernelSize,'number',1,3))throw new f.ValueError(`BaseConv expects config.kernelSize to be number or number[] with length 1, 2, or 3, but received ${JSON.stringify(e.kernelSize)}.`)}getConfig(){const e={kernelSize:this.kernelSize,strides:this.strides,padding:this.padding,dataFormat:this.dataFormat,dilationRate:this.dilationRate,activation:(0,h.serializeActivation)(this.activation),useBias:this.useBias,biasInitializer:(0,m.serializeInitializer)(this.biasInitializer),biasRegularizer:(0,z.serializeRegularizer)(this.biasRegularizer),activityRegularizer:(0,z.serializeRegularizer)(this.activityRegularizer),biasConstraint:(0,c.serializeConstraint)(this.biasConstraint)},t=super.getConfig();return Object.assign(e,t),e}}r.BaseConv=R;class E extends R{constructor(e,t){super(e,t),this.kernel=null,E.verifyArgs(t),this.filters=t.filters,k.assertPositiveInteger(this.filters,'filters'),this.kernelInitializer=(0,m.getInitializer)(t.kernelInitializer||this.DEFAULT_KERNEL_INITIALIZER),this.kernelConstraint=(0,c.getConstraint)(t.kernelConstraint),this.kernelRegularizer=(0,z.getRegularizer)(t.kernelRegularizer)}build(e){e=(0,b.getExactlyOneShape)(e);const t='channelsFirst'===this.dataFormat?1:e.length-1;if(null==e[t])throw new f.ValueError(`The channel dimension of the input should be defined. Found ${e[t]}`);const i=e[t],n=this.kernelSize.concat([i,this.filters]);this.kernel=this.addWeight('kernel',n,null,this.kernelInitializer,this.kernelRegularizer,!0,this.kernelConstraint),this.useBias&&(this.bias=this.addWeight('bias',[this.filters],null,this.biasInitializer,this.biasRegularizer,!0,this.biasConstraint)),this.inputSpec=[{ndim:this.rank+2,axes:{[t]:i}}],this.built=!0}call(e,t){return(0,o.tidy)(()=>{let t;e=(0,b.getExactlyOneTensor)(e);const i=null==this.bias?null:this.bias.read(),n=k.mapActivationToFusedKernel(this.activation.getClassName());if(null!=n&&2===this.rank)t=I(e,this.kernel.read(),i,this.strides,this.padding,this.dataFormat,this.dilationRate,n);else{if(1===this.rank)t=S(e,this.kernel.read(),i,this.strides[0],this.padding,this.dataFormat,this.dilationRate[0]);else if(2===this.rank)t=I(e,this.kernel.read(),i,this.strides,this.padding,this.dataFormat,this.dilationRate);else{if(3!==this.rank)throw new f.NotImplementedError('convolutions greater than 3D are not implemented yet.');t=F(e,this.kernel.read(),i,this.strides,this.padding,this.dataFormat,this.dilationRate)}null!=this.activation&&(t=this.activation.apply(t))}return t})}computeOutputShape(e){e=(0,b.getExactlyOneShape)(e);const t=[],i='channelsLast'===this.dataFormat?e.slice(1,e.length-1):e.slice(2);for(let e=0;e<i.length;++e){const n=(0,v.convOutputLength)(i[e],this.kernelSize[e],this.padding,this.strides[e],'number'==typeof this.dilationRate?this.dilationRate:this.dilationRate[e]);t.push(n)}let n=[e[0]];return'channelsLast'===this.dataFormat?(n=n.concat(t),n.push(this.filters)):(n.push(this.filters),n=n.concat(t)),n}getConfig(){const e={filters:this.filters,kernelInitializer:(0,m.serializeInitializer)(this.kernelInitializer),kernelRegularizer:(0,z.serializeRegularizer)(this.kernelRegularizer),kernelConstraint:(0,c.serializeConstraint)(this.kernelConstraint)},t=super.getConfig();return Object.assign(e,t),e}static verifyArgs(e){if(!('filters'in e)||'number'!=typeof e.filters||e.filters<1)throw new f.ValueError(`Convolution layer expected config.filters to be a 'number' > 0 but got ${JSON.stringify(e.filters)}`)}}r.Conv=E;class A extends E{constructor(e){super(2,e),A.verifyArgs(e)}getConfig(){const e=super.getConfig();return delete e.rank,e}static verifyArgs(e){if('number'!=typeof e.kernelSize&&!k.checkArrayTypeAndLength(e.kernelSize,'number',1,2))throw new f.ValueError(`Conv2D expects config.kernelSize to be number or number[] with length 1 or 2, but received ${JSON.stringify(e.kernelSize)}.`)}}r.Conv2D=A,A.className='Conv2D',o.serialization.registerClass(A);class D extends E{constructor(e){super(3,e),D.verifyArgs(e)}getConfig(){const e=super.getConfig();return delete e.rank,e}static verifyArgs(e){if('number'!=typeof e.kernelSize&&(!Array.isArray(e.kernelSize)||1!==e.kernelSize.length&&3!==e.kernelSize.length))throw new f.ValueError(`Conv3D expects config.kernelSize to be number or [number, number, number], but received ${JSON.stringify(e.kernelSize)}.`)}}r.Conv3D=D,D.className='Conv3D',o.serialization.registerClass(D);class T extends A{constructor(e){if(super(e),this.inputSpec=[new g.InputSpec({ndim:4})],'same'!==this.padding&&'valid'!==this.padding)throw new f.ValueError(`Conv2DTranspose currently supports only padding modes 'same' and 'valid', but received padding mode ${this.padding}`)}build(e){if(4!==(e=(0,b.getExactlyOneShape)(e)).length)throw new f.ValueError('Input should have rank 4; Received input shape: '+JSON.stringify(e));const t='channelsFirst'===this.dataFormat?1:e.length-1;if(null==e[t])throw new f.ValueError("The channel dimension of the inputs should be defined. Found `None`.");const i=e[t],n=this.kernelSize.concat([this.filters,i]);this.kernel=this.addWeight('kernel',n,'float32',this.kernelInitializer,this.kernelRegularizer,!0,this.kernelConstraint),this.useBias&&(this.bias=this.addWeight('bias',[this.filters],'float32',this.biasInitializer,this.biasRegularizer,!0,this.biasConstraint)),this.inputSpec=[new g.InputSpec({ndim:4,axes:{[t]:i}})],this.built=!0}call(e,t){return l.tidy(()=>{let t=(0,b.getExactlyOneTensor)(e);if(4!==t.shape.length)throw new f.ValueError(`Conv2DTranspose.call() expects input tensor to be rank-4, but received a tensor of rank-${t.shape.length}`);const i=t.shape,n=i[0];let s,r;'channelsFirst'===this.dataFormat?(s=2,r=3):(s=1,r=2);const a=i[s],o=i[r],h=this.kernelSize[0],d=this.kernelSize[1],u=this.strides[0],c=this.strides[1],g=[n,(0,v.deconvLength)(a,u,h,this.padding),(0,v.deconvLength)(o,c,d,this.padding),this.filters];'channelsLast'!==this.dataFormat&&(t=l.transpose(t,[0,2,3,1]));let m=l.conv2dTranspose(t,this.kernel.read(),g,this.strides,this.padding);return'channelsLast'!==this.dataFormat&&(m=l.transpose(m,[0,3,1,2])),null!=this.bias&&(m=p.biasAdd(m,this.bias.read(),this.dataFormat)),null!=this.activation&&(m=this.activation.apply(m)),m})}computeOutputShape(e){const t=(e=(0,b.getExactlyOneShape)(e)).slice();let i,n,s;'channelsFirst'===this.dataFormat?(i=1,n=2,s=3):(i=3,n=1,s=2);const r=this.kernelSize[0],a=this.kernelSize[1],o=this.strides[0],l=this.strides[1];return t[i]=this.filters,t[n]=(0,v.deconvLength)(t[n],o,r,this.padding),t[s]=(0,v.deconvLength)(t[s],l,a,this.padding),t}getConfig(){const e=super.getConfig();return delete e.dilationRate,e}}r.Conv2DTranspose=T,T.className='Conv2DTranspose',o.serialization.registerClass(T);class N extends D{constructor(e){if(super(e),this.inputSpec=[new g.InputSpec({ndim:5})],'same'!==this.padding&&'valid'!==this.padding)throw new f.ValueError(`Conv3DTranspose currently supports only padding modes 'same' and 'valid', but received padding mode ${this.padding}`)}build(e){if(5!==(e=(0,b.getExactlyOneShape)(e)).length)throw new f.ValueError('Input should have rank 5; Received input shape: '+JSON.stringify(e));const t='channelsFirst'===this.dataFormat?1:e.length-1;if(null==e[t])throw new f.ValueError("The channel dimension of the inputs should be defined. Found `None`.");const i=e[t],n=this.kernelSize.concat([this.filters,i]);this.kernel=this.addWeight('kernel',n,'float32',this.kernelInitializer,this.kernelRegularizer,!0,this.kernelConstraint),this.useBias&&(this.bias=this.addWeight('bias',[this.filters],'float32',this.biasInitializer,this.biasRegularizer,!0,this.biasConstraint)),this.inputSpec=[new g.InputSpec({ndim:5,axes:{[t]:i}})],this.built=!0}call(e,t){return l.tidy(()=>{let t=(0,b.getExactlyOneTensor)(e);if(5!==t.shape.length)throw new f.ValueError(`Conv3DTranspose.call() expects input tensor to be rank-4, but received a tensor of rank-${t.shape.length}`);const i=t.shape,n=i[0];let s,r,a;'channelsFirst'===this.dataFormat?(a=2,s=3,r=4):(a=1,s=2,r=3);const o=i[a],h=i[s],d=i[r],u=this.kernelSize[0],c=this.kernelSize[1],g=this.kernelSize[2],m=this.strides[0],z=this.strides[1],k=this.strides[2],w=[n,(0,v.deconvLength)(o,m,u,this.padding),(0,v.deconvLength)(h,z,c,this.padding),(0,v.deconvLength)(d,k,g,this.padding),this.filters];'channelsLast'!==this.dataFormat&&(t=l.transpose(t,[0,2,3,4,1]));let C=l.conv3dTranspose(t,this.kernel.read(),w,this.strides,this.padding);return'channelsLast'!==this.dataFormat&&(C=l.transpose(C,[0,4,1,2,3])),null!==this.bias&&(C=p.biasAdd(C,this.bias.read(),this.dataFormat)),null!==this.activation&&(C=this.activation.apply(C)),C})}computeOutputShape(e){const t=(e=(0,b.getExactlyOneShape)(e)).slice();let i,n,s,r;'channelsFirst'===this.dataFormat?(i=1,n=2,s=3,r=4):(i=4,n=1,s=2,r=3);const a=this.kernelSize[0],o=this.kernelSize[1],l=this.kernelSize[2],h=this.strides[0],d=this.strides[1],p=this.strides[2];return t[i]=this.filters,t[n]=(0,v.deconvLength)(t[n],h,a,this.padding),t[s]=(0,v.deconvLength)(t[s],d,o,this.padding),t[r]=(0,v.deconvLength)(t[r],p,l,this.padding),t}getConfig(){const e=super.getConfig();return delete e.dilationRate,e}}r.Conv3DTranspose=N,N.className='Conv3DTranspose',o.serialization.registerClass(N);class L extends E{constructor(e,t){if(super(e,t),this.DEFAULT_DEPTHWISE_INITIALIZER='glorotUniform',this.DEFAULT_POINTWISE_INITIALIZER='glorotUniform',this.depthwiseKernel=null,this.pointwiseKernel=null,null==t.filters)throw new f.ValueError("The `filters` configuration field is required by SeparableConv, but is unspecified.");if(null!=t.kernelInitializer||null!=t.kernelRegularizer||null!=t.kernelConstraint)throw new f.ValueError("Fields kernelInitializer, kernelRegularizer and kernelConstraint are invalid for SeparableConv2D. Use depthwiseInitializer, depthwiseRegularizer, depthwiseConstraint, pointwiseInitializer, pointwiseRegularizer and pointwiseConstraint instead.");if(null!=t.padding&&'same'!==t.padding&&'valid'!==t.padding)throw new f.ValueError(`SeparableConv${this.rank}D supports only padding modes: 'same' and 'valid', but received ${JSON.stringify(t.padding)}`);this.depthMultiplier=null==t.depthMultiplier?1:t.depthMultiplier,this.depthwiseInitializer=(0,m.getInitializer)(t.depthwiseInitializer||this.DEFAULT_DEPTHWISE_INITIALIZER),this.depthwiseRegularizer=(0,z.getRegularizer)(t.depthwiseRegularizer),this.depthwiseConstraint=(0,c.getConstraint)(t.depthwiseConstraint),this.pointwiseInitializer=(0,m.getInitializer)(t.depthwiseInitializer||this.DEFAULT_POINTWISE_INITIALIZER),this.pointwiseRegularizer=(0,z.getRegularizer)(t.pointwiseRegularizer),this.pointwiseConstraint=(0,c.getConstraint)(t.pointwiseConstraint)}build(e){if((e=(0,b.getExactlyOneShape)(e)).length<this.rank+2)throw new f.ValueError(`Inputs to SeparableConv${this.rank}D should have rank ${this.rank+2}, but received input shape: ${JSON.stringify(e)}`);const t='channelsFirst'===this.dataFormat?1:e.length-1;if(null==e[t]||e[t]<0)throw new f.ValueError(`The channel dimension of the inputs should be defined, but found ${JSON.stringify(e[t])}`);const i=e[t],n=this.kernelSize.concat([i,this.depthMultiplier]),s=[];for(let e=0;e<this.rank;++e)s.push(1);s.push(i*this.depthMultiplier,this.filters);const r=!0;this.depthwiseKernel=this.addWeight('depthwise_kernel',n,'float32',this.depthwiseInitializer,this.depthwiseRegularizer,r,this.depthwiseConstraint),this.pointwiseKernel=this.addWeight('pointwise_kernel',s,'float32',this.pointwiseInitializer,this.pointwiseRegularizer,r,this.pointwiseConstraint),this.useBias?this.bias=this.addWeight('bias',[this.filters],'float32',this.biasInitializer,this.biasRegularizer,r,this.biasConstraint):this.bias=null,this.inputSpec=[new g.InputSpec({ndim:this.rank+2,axes:{[t]:i}})],this.built=!0}call(e,t){return(0,o.tidy)(()=>{let t;if(e=(0,b.getExactlyOneTensor)(e),1===this.rank)throw new f.NotImplementedError('1D separable convolution is not implemented yet.');return 2===this.rank&&('channelsFirst'===this.dataFormat&&(e=l.transpose(e,[0,2,3,1])),t=l.separableConv2d(e,this.depthwiseKernel.read(),this.pointwiseKernel.read(),this.strides,this.padding,this.dilationRate,'NHWC')),this.useBias&&(t=p.biasAdd(t,this.bias.read(),this.dataFormat)),null!=this.activation&&(t=this.activation.apply(t)),'channelsFirst'===this.dataFormat&&(t=l.transpose(t,[0,3,1,2])),t})}getConfig(){const e=super.getConfig();return delete e.rank,delete e.kernelInitializer,delete e.kernelRegularizer,delete e.kernelConstraint,e.depthwiseInitializer=(0,m.serializeInitializer)(this.depthwiseInitializer),e.pointwiseInitializer=(0,m.serializeInitializer)(this.pointwiseInitializer),e.depthwiseRegularizer=(0,z.serializeRegularizer)(this.depthwiseRegularizer),e.pointwiseRegularizer=(0,z.serializeRegularizer)(this.pointwiseRegularizer),e.depthwiseConstraint=(0,c.serializeConstraint)(this.depthwiseConstraint),e.pointwiseConstraint=(0,c.serializeConstraint)(this.pointwiseConstraint),e}}r.SeparableConv=L,L.className='SeparableConv';class x extends L{constructor(e){super(2,e)}}r.SeparableConv2D=x,x.className='SeparableConv2D',o.serialization.registerClass(x);class O extends E{constructor(e){super(1,e),O.verifyArgs(e),this.inputSpec=[{ndim:3}]}getConfig(){const e=super.getConfig();return delete e.rank,delete e.dataFormat,e}static verifyArgs(e){if('number'!=typeof e.kernelSize&&!k.checkArrayTypeAndLength(e.kernelSize,'number',1,1))throw new f.ValueError(`Conv1D expects config.kernelSize to be number or number[] with length 1, but received ${JSON.stringify(e.kernelSize)}.`)}}r.Conv1D=O,O.className='Conv1D',o.serialization.registerClass(O);class W extends g.Layer{constructor(e){super(e),'number'==typeof e.cropping?this.cropping=[[e.cropping,e.cropping],[e.cropping,e.cropping]]:'number'==typeof e.cropping[0]?this.cropping=[[e.cropping[0],e.cropping[0]],[e.cropping[1],e.cropping[1]]]:this.cropping=e.cropping,this.dataFormat=void 0===e.dataFormat?'channelsLast':e.dataFormat,this.inputSpec=[{ndim:4}]}computeOutputShape(e){return'channelsFirst'===this.dataFormat?[e[0],e[1],e[2]-this.cropping[0][0]-this.cropping[0][1],e[3]-this.cropping[1][0]-this.cropping[1][1]]:[e[0],e[1]-this.cropping[0][0]-this.cropping[0][1],e[2]-this.cropping[1][0]-this.cropping[1][1],e[3]]}call(e,t){return(0,o.tidy)(()=>{if(e=(0,b.getExactlyOneTensor)(e),'channelsLast'===this.dataFormat){const t=p.sliceAlongAxis(e,this.cropping[0][0],e.shape[1]-this.cropping[0][0]-this.cropping[0][1],2);return p.sliceAlongAxis(t,this.cropping[1][0],e.shape[2]-this.cropping[1][1]-this.cropping[1][0],3)}{const t=p.sliceAlongAxis(e,this.cropping[0][0],e.shape[2]-this.cropping[0][0]-this.cropping[0][1],3);return p.sliceAlongAxis(t,this.cropping[1][0],e.shape[3]-this.cropping[1][1]-this.cropping[1][0],4)}})}getConfig(){const e={cropping:this.cropping,dataFormat:this.dataFormat},t=super.getConfig();return Object.assign(e,t),e}}r.Cropping2D=W,W.className='Cropping2D',o.serialization.registerClass(W);class B extends g.Layer{constructor(e){super(e),this.DEFAULT_SIZE=[2,2],this.inputSpec=[{ndim:4}],this.size=null==e.size?this.DEFAULT_SIZE:e.size,this.dataFormat=null==e.dataFormat?'channelsLast':e.dataFormat,(0,u.checkDataFormat)(this.dataFormat),this.interpolation=null==e.interpolation?'nearest':e.interpolation,(0,u.checkInterpolationFormat)(this.interpolation)}computeOutputShape(e){if('channelsFirst'===this.dataFormat){const t=null==e[2]?null:this.size[0]*e[2],i=null==e[3]?null:this.size[1]*e[3];return[e[0],e[1],t,i]}{const t=null==e[1]?null:this.size[0]*e[1],i=null==e[2]?null:this.size[1]*e[2];return[e[0],t,i,e[3]]}}call(e,t){return l.tidy(()=>{let t=(0,b.getExactlyOneTensor)(e);const i=t.shape;if('channelsFirst'===this.dataFormat){t=l.transpose(t,[0,2,3,1]);const e=this.size[0]*i[2],n=this.size[1]*i[3],s='nearest'===this.interpolation?l.image.resizeNearestNeighbor(t,[e,n]):l.image.resizeBilinear(t,[e,n]);return l.transpose(s,[0,3,1,2])}{const e=this.size[0]*i[1],n=this.size[1]*i[2];return'nearest'===this.interpolation?l.image.resizeNearestNeighbor(t,[e,n]):l.image.resizeBilinear(t,[e,n])}})}getConfig(){const e={size:this.size,dataFormat:this.dataFormat,interpolation:this.interpolation},t=super.getConfig();return Object.assign(e,t),e}}r.UpSampling2D=B,B.className='UpSampling2D',o.serialization.registerClass(B)},2212,[1158,2210,2183,2181,2178,2189,2177,2172,2180,2211,2213,2174,2185]);
__d(function(g,r,_i,a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.convOutputLength=function(n,t,u,i,o=1){if(null==n)return n;const l=t+(t-1)*(o-1);let f;f='same'===u?n:n-l+1;return Math.floor((f+i-1)/i)},e.deconvLength=function(t,i,o,l){if(null==t)return null;if('valid'===l)t=t*i+(0,u.max)([o-i,0]);else{if('same'!==l)throw new n.ValueError(`Unsupport padding mode: ${l}.`);t*=i}return t},e.normalizeArray=
/**
   * @license
   * Copyright 2018 Google LLC
   *
   * Use of this source code is governed by an MIT-style
   * license that can be found in the LICENSE file or at
   * https://opensource.org/licenses/MIT.
   * =============================================================================
   */
function(i,o,l){if('number'==typeof i)return(0,t.pyListRepeat)(i,o);if(i.length!==o)throw new n.ValueError(`The ${l} argument must be an integer or tuple of ${o} integers. Received: ${i.length} elements.`);for(let t=0;t<o;++t){const f=i[t];if(!(0,u.isInteger)(f))throw new n.ValueError(`The ${l} argument must be an integer or tuple of ${o} integers. Received: ${JSON.stringify(i)} including a non-integer number ${f}`)}return i};var n=r(d[0]),t=r(d[1]),u=r(d[2])},2213,[2172,2174,2182]);
__d(function(g,_r,_i,a,m,_e,d){Object.defineProperty(_e,"__esModule",{value:!0}),_e.DepthwiseConv2D=void 0,_e.depthwiseConv2d=f;var e=w(_r(d[0])),t=e,i=_r(d[1]),s=w(_r(d[2])),r=_r(d[3]),n=_r(d[4]),h=_r(d[5]),l=_r(d[6]),o=_r(d[7]),p=_r(d[8]),u=_r(d[9]),c=_r(d[10]);function w(e,t){if("function"==typeof WeakMap)var i=new WeakMap,s=new WeakMap;return(w=function(e,t){if(!t&&e&&e.__esModule)return e;var r,n,h={__proto__:null,default:e};if(null===e||"object"!=typeof e&&"function"!=typeof e)return h;if(r=t?s:i){if(r.has(e))return r.get(e);r.set(e,h)}for(const t in e)"default"!==t&&{}.hasOwnProperty.call(e,t)&&((n=(r=Object.defineProperty)&&Object.getOwnPropertyDescriptor(e,t))&&(n.get||n.set)?r(h,t,n):h[t]=e[t]);return h})(e,t)}
/**
   * @license
   * Copyright 2018 Google LLC
   *
   * Use of this source code is governed by an MIT-style
   * license that can be found in the LICENSE file or at
   * https://opensource.org/licenses/MIT.
   * =============================================================================
   */function f(s,n,l=[1,1],o="valid",p,u){return(0,e.tidy)(()=>{null==p&&(p=(0,i.imageDataFormat)()),(0,r.checkDataFormat)(p);let e=(0,c.preprocessConv2DInput)(s,p);if(4!==s.rank)throw new h.ValueError(`Input for depthwiseConv2d is required to be 4-D, but is instead ${s.rank}-D`);if(4!==n.rank)throw new h.ValueError(`depthwiseKernel is required to be 4-D, but is instead ${n.rank}-D`);return e=t.depthwiseConv2d(e,n,l,'same'===o?'same':'valid','NHWC',u),'channelsFirst'===p&&(e=t.transpose(e,[0,3,1,2])),e})}class z extends c.BaseConv{constructor(e){super(2,e),this.depthwiseKernel=null,this.depthMultiplier=null==e.depthMultiplier?1:e.depthMultiplier,this.depthwiseInitializer=(0,l.getInitializer)(e.depthwiseInitializer||this.DEFAULT_KERNEL_INITIALIZER),this.depthwiseConstraint=(0,n.getConstraint)(e.depthwiseConstraint),this.depthwiseRegularizer=(0,o.getRegularizer)(e.depthwiseRegularizer)}build(e){if((e=(0,u.getExactlyOneShape)(e)).length<4)throw new h.ValueError(`Inputs to DepthwiseConv2D should have rank 4. Received input shape: ${JSON.stringify(e)}.`);const t='channelsFirst'===this.dataFormat?1:3;if(null==e[t]||e[t]<0)throw new h.ValueError(`The channel dimension of the inputs to DepthwiseConv2D should be defined, but is not (${e[t]}).`);const i=e[t],s=[this.kernelSize[0],this.kernelSize[1],i,this.depthMultiplier];this.depthwiseKernel=this.addWeight('depthwise_kernel',s,null,this.depthwiseInitializer,this.depthwiseRegularizer,!0,this.depthwiseConstraint),this.useBias?this.bias=this.addWeight('bias',[i*this.depthMultiplier],null,this.biasInitializer,this.biasRegularizer,!0,this.biasConstraint):this.bias=null,this.built=!0}call(t,i){return(0,e.tidy)(()=>{let e=f(t=(0,u.getExactlyOneTensor)(t),this.depthwiseKernel.read(),this.strides,this.padding,this.dataFormat,null);return this.useBias&&(e=s.biasAdd(e,this.bias.read(),this.dataFormat)),null!=this.activation&&(e=this.activation.apply(e)),e})}computeOutputShape(e){e=(0,u.getExactlyOneShape)(e);const t='channelsFirst'===this.dataFormat?e[2]:e[1],i='channelsFirst'===this.dataFormat?e[3]:e[2],s='channelsFirst'===this.dataFormat?e[1]*this.depthMultiplier:e[3]*this.depthMultiplier,r=(0,p.convOutputLength)(t,this.kernelSize[0],this.padding,this.strides[0]),n=(0,p.convOutputLength)(i,this.kernelSize[1],this.padding,this.strides[1]);return'channelsFirst'===this.dataFormat?[e[0],s,r,n]:[e[0],r,n,s]}getConfig(){const e=super.getConfig();return e.depthMultiplier=this.depthMultiplier,e.depthwiseInitializer=(0,l.serializeInitializer)(this.depthwiseInitializer),e.depthwiseRegularizer=(0,o.serializeRegularizer)(this.depthwiseRegularizer),e.depthwiseConstraint=(0,n.serializeConstraint)(this.depthwiseRegularizer),e}}_e.DepthwiseConv2D=z,z.className='DepthwiseConv2D',e.serialization.registerClass(z)},2214,[1158,2183,2181,2178,2189,2172,2180,2211,2213,2185,2212]);
__d(function(g,_r,_i,a,m,_e,d){Object.defineProperty(_e,"__esModule",{value:!0}),_e.ConvLSTM2DCell=_e.ConvLSTM2D=void 0;var t=p(_r(d[0])),e=t,s=p(_r(d[1])),i=_r(d[2]),r=_r(d[3]),n=_r(d[4]),l=_r(d[5]),o=_r(d[6]),u=_r(d[7]),h=_r(d[8]),c=_r(d[9]);function p(t,e){if("function"==typeof WeakMap)var s=new WeakMap,i=new WeakMap;return(p=function(t,e){if(!e&&t&&t.__esModule)return t;var r,n,l={__proto__:null,default:t};if(null===t||"object"!=typeof t&&"function"!=typeof t)return l;if(r=e?i:s){if(r.has(t))return r.get(t);r.set(t,l)}for(const e in t)"default"!==e&&{}.hasOwnProperty.call(t,e)&&((n=(r=Object.defineProperty)&&Object.getOwnPropertyDescriptor(t,e))&&(n.get||n.set)?r(l,e,n):l[e]=t[e]);return l})(t,e)}
/**
   * @license
   * Copyright 2020 Google LLC
   *
   * Use of this source code is governed by an MIT-style
   * license that can be found in the LICENSE file or at
   * https://opensource.org/licenses/MIT.
   * =============================================================================
   */var f=this&&this.__rest||function(t,e){var s={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.indexOf(i)<0&&(s[i]=t[i]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(i=Object.getOwnPropertySymbols(t);r<i.length;r++)e.indexOf(i[r])<0&&Object.prototype.propertyIsEnumerable.call(t,i[r])&&(s[i[r]]=t[i[r]])}return s};c.RNNCell;class y extends c.RNN{constructor(t){if(t.unroll)throw new n.NotImplementedError('Unrolling is not possible with convolutional RNNs.');if(Array.isArray(t.cell))throw new n.NotImplementedError('It is not possible at the moment to stack convolutional cells.');super(t),this.inputSpec=[new r.InputSpec({ndim:5})]}call(t,s){return e.tidy(()=>{if(null!=this.cell.dropoutMask&&(e.dispose(this.cell.dropoutMask),this.cell.dropoutMask=null),null!=this.cell.recurrentDropoutMask&&(e.dispose(this.cell.recurrentDropoutMask),this.cell.recurrentDropoutMask=null),s&&s.constants)throw new n.ValueError('ConvRNN2D cell does not support constants');const i=null==s?null:s.mask,r=null==s?null:s.training,l=null==s?null:s.initialState;return super.call(t,{mask:i,training:r,initialState:l})})}computeOutputShape(t){let e=this.computeSingleOutputShape(t);return this.returnSequences||(e=[e[0],...e.slice(2)]),this.returnState&&(e=[e,...Array(2).fill([t[0],...e.slice(-3)])]),e}getInitialState(t){return e.tidy(()=>{const{stateSize:s}=this.cell,i=t.shape,r=this.computeSingleOutputShape(i),n=[r[0],...r.slice(2)],l=e.zeros(n);return Array.isArray(s)?Array(s.length).fill(l):[l]})}resetStates(s,i=!1){e.tidy(()=>{if(!this.stateful)throw new n.AttributeError('Cannot call resetStates() on an RNN Layer that is not stateful.');const r=this.inputSpec[0].shape,l=this.computeSingleOutputShape(r),o=[l[0],...l.slice(2)];if(null==r[0])throw new n.ValueError("If an RNN is stateful, it needs to know its batch size. Specify the batch size of your input tensors: \n- If using a Sequential model, specify the batch size by passing a `batchInputShape` option to your first layer.\n- If using the functional API, specify the batch size by passing a `batchShape` option to your Input layer.");if(null==this.getStates())Array.isArray(this.cell.stateSize)?this.states_=this.cell.stateSize.map(()=>e.zeros(o)):this.states_=[e.zeros(o)];else if(null==s)e.dispose(this.states_),null!=this.keptStates&&(e.dispose(this.keptStates),this.keptStates=[]),Array.isArray(this.cell.stateSize)?this.states_=this.cell.stateSize.map(()=>e.zeros(o)):this.states_[0]=e.zeros(o);else{if(Array.isArray(s)||(s=[s]),s.length!==this.states_.length)throw new n.ValueError(`Layer ${this.name} expects ${this.states_.length} state(s), but it received ${s.length} state value(s). Input received: ${s}`);i?this.keptStates.push(this.states_.slice()):e.dispose(this.states_);for(let e=0;e<this.states_.length;++e){const i=s[e],r=o;if(!t.util.arraysEqual(i.shape,r))throw new n.ValueError(`State ${e} is incompatible with layer ${this.name}: expected shape=${r}, received shape=${i.shape}`);this.states_[e]=i}}this.states_=this.states_.map(t=>e.keep(t.clone()))})}computeSingleOutputShape(t){const{dataFormat:e,filters:s,kernelSize:i,padding:r,strides:n,dilationRate:l}=this.cell,u='channelsFirst'===e,h=t[u?3:2],c=t[u?4:3],p=(0,o.convOutputLength)(h,i[0],r,n[0],l[0]),f=(0,o.convOutputLength)(c,i[1],r,n[1],l[1]);return[...t.slice(0,2),...u?[s,p,f]:[p,f,s]]}}y.className='ConvRNN2D';class S extends c.LSTMCell{constructor(t){const{filters:e,kernelSize:s,strides:r,padding:n,dataFormat:l,dilationRate:h}=t;super(Object.assign(Object.assign({},t),{units:e})),this.filters=e,(0,u.assertPositiveInteger)(this.filters,'filters'),this.kernelSize=(0,o.normalizeArray)(s,2,'kernelSize'),this.kernelSize.forEach(t=>(0,u.assertPositiveInteger)(t,'kernelSize')),this.strides=(0,o.normalizeArray)(r||1,2,'strides'),this.strides.forEach(t=>(0,u.assertPositiveInteger)(t,'strides')),this.padding=n||'valid',(0,i.checkPaddingMode)(this.padding),this.dataFormat=l||'channelsLast',(0,i.checkDataFormat)(this.dataFormat),this.dilationRate=(0,o.normalizeArray)(h||1,2,'dilationRate'),this.dilationRate.forEach(t=>(0,u.assertPositiveInteger)(t,'dilationRate'))}build(t){var i;t=(0,h.getExactlyOneShape)(t);const r='channelsFirst'===this.dataFormat?1:t.length-1;if(null==t[r])throw new n.ValueError(`The channel dimension of the input should be defined. Found ${t[r]}`);const o=t[r],u=this.kernelSize.concat([o,4*this.filters]);this.kernel=this.addWeight('kernel',u,null,this.kernelInitializer,this.kernelRegularizer,!0,this.kernelConstraint);const c=this.kernelSize.concat([this.filters,4*this.filters]);if(this.recurrentKernel=this.addWeight('recurrent_kernel',c,null,this.recurrentInitializer,this.recurrentRegularizer,!0,this.recurrentConstraint),this.useBias){let t;if(this.unitForgetBias){const r=this.biasInitializer,n=this.filters;t=new((i=class extends l.Initializer{apply(t,i){const l=r.apply([n]),o=e.ones([n]),u=r.apply([2*n]);return s.concatenate([l,o,u])}}).className='CustomInit',i)}else t=this.biasInitializer;this.bias=this.addWeight('bias',[4*this.filters],null,t,this.biasRegularizer,!0,this.biasConstraint)}this.built=!0}call(t,s){return e.tidy(()=>{if(3!==t.length)throw new n.ValueError(`ConvLSTM2DCell expects 3 input Tensors (inputs, h, c), got ${t.length}.`);const i=s.training||!1,r=t[0],l=t[1],o=t[2];0<this.dropout&&this.dropout<1&&null==this.dropoutMask&&(this.dropoutMask=(0,c.generateDropoutMask)({ones:()=>e.onesLike(r),rate:this.dropout,training:i,count:4,dropoutFunc:this.dropoutFunc}));const u=this.dropoutMask,h=(t,s,i)=>s&&s[i]?e.mul(s[i],t):t;let p=h(r,u,0),f=h(r,u,1),y=h(r,u,2),S=h(r,u,3);0<this.recurrentDropout&&this.recurrentDropout<1&&null==this.recurrentDropoutMask&&(this.recurrentDropoutMask=(0,c.generateDropoutMask)({ones:()=>e.onesLike(l),rate:this.recurrentDropout,training:i,count:4,dropoutFunc:this.dropoutFunc}));const v=this.recurrentDropoutMask;let k=h(l,v,0),b=h(l,v,1),C=h(l,v,2),z=h(l,v,3);const[w,M,O,_]=e.split(this.kernel.read(),4,3),[N,I,D,A]=this.useBias?e.split(this.bias.read(),4):[null,null,null,null];p=this.inputConv(p,w,N,this.padding),f=this.inputConv(f,M,I,this.padding),y=this.inputConv(y,O,D,this.padding),S=this.inputConv(S,_,A,this.padding);const[F,R,E,L]=e.split(this.recurrentKernel.read(),4,3);k=this.recurrentConv(k,F),b=this.recurrentConv(b,R),C=this.recurrentConv(C,E),z=this.recurrentConv(z,L);const j=this.recurrentActivation.apply(e.add(p,k)),P=this.recurrentActivation.apply(e.add(f,b)),x=e.add(e.mul(P,o),e.mul(j,this.activation.apply(e.add(y,C)))),T=e.mul(this.recurrentActivation.apply(e.add(S,z)),this.activation.apply(x));return[T,T,x]})}getConfig(){const t=super.getConfig(),{units:e}=t,s=f(t,['units']),i={filters:this.filters,kernelSize:this.kernelSize,padding:this.padding,dataFormat:this.dataFormat,dilationRate:this.dilationRate,strides:this.strides};return Object.assign(Object.assign({},s),i)}inputConv(t,i,r,n){const l=e.conv2d(t,i,this.strides,n||'valid','channelsFirst'===this.dataFormat?'NCHW':'NHWC',this.dilationRate);return r?s.biasAdd(l,r,this.dataFormat):l}recurrentConv(t,s){return e.conv2d(t,s,1,'same','channelsFirst'===this.dataFormat?'NCHW':'NHWC')}}_e.ConvLSTM2DCell=S,S.className='ConvLSTM2DCell',e.serialization.registerClass(S);class v extends y{constructor(t){const e=new S(t);super(Object.assign(Object.assign({},t),{cell:e}))}static fromConfig(t,e){return new t(e)}}_e.ConvLSTM2D=v,v.className='ConvLSTM2D',e.serialization.registerClass(v)},2215,[1158,2181,2178,2177,2172,2180,2213,2174,2185,2216]);
__d(function(t,e,i,r,s,n,a){Object.defineProperty(n,"__esModule",{value:!0}),n.StackedRNNCells=n.SimpleRNNCell=n.SimpleRNN=n.RNNCell=n.RNN=n.LSTMCell=n.LSTM=n.GRUCell=n.GRU=void 0,n.generateDropoutMask=F,n.rnn=b,n.standardizeArgs=C;var l=S(e(a[0])),u=l,o=e(a[1]),h=S(e(a[2])),c=e(a[3]),p=e(a[4]),g=e(a[5]),d=e(a[6]),z=e(a[7]),I=e(a[8]),R=e(a[9]),k=S(e(a[10])),A=e(a[11]),m=e(a[12]),f=e(a[13]);function S(t,e){if("function"==typeof WeakMap)var i=new WeakMap,r=new WeakMap;return(S=function(t,e){if(!e&&t&&t.__esModule)return t;var s,n,a={__proto__:null,default:t};if(null===t||"object"!=typeof t&&"function"!=typeof t)return a;if(s=e?r:i){if(s.has(t))return s.get(t);s.set(t,a)}for(const e in t)"default"!==e&&{}.hasOwnProperty.call(t,e)&&((n=(s=Object.defineProperty)&&Object.getOwnPropertyDescriptor(t,e))&&(n.get||n.set)?s(a,e,n):a[e]=t[e]);return a})(t,e)}
/**
   * @license
   * Copyright 2018 Google LLC
   *
   * Use of this source code is governed by an MIT-style
   * license that can be found in the LICENSE file or at
   * https://opensource.org/licenses/MIT.
   * =============================================================================
   */function C(t,e,i,r){if(Array.isArray(t)){if(null!=e||null!=i)throw new d.ValueError("When inputs is an array, neither initialState or constants should be provided");null!=r&&(i=t.slice(t.length-r,t.length),t=t.slice(0,t.length-r)),t.length>1&&(e=t.slice(1,t.length)),t=t[0]}function s(t){return null==t||Array.isArray(t)?t:[t]}return{inputs:t,initialState:e=s(e),constants:i=s(i)}}function b(t,e,i,r=!1,s,n,a=!1,l=!1){return u.tidy(()=>{const o=e.shape.length;if(o<3)throw new d.ValueError(`Input should be at least 3D, but is ${o}D.`);const h=[1,0].concat(k.range(2,o));if(e=u.transpose(e,h),null!=n)throw new d.NotImplementedError("The rnn() functoin of the deeplearn.js backend does not support constants yet.");a&&console.warn("Backend rnn(): the unroll = true option is not applicable to the imperative deeplearn.js backend."),null!=s&&((s=u.cast(u.cast(s,'bool'),'float32')).rank===o-1&&(s=u.expandDims(s,-1)),s=u.transpose(s,h)),r&&(e=u.reverse(e,0),null!=s&&(s=u.reverse(s,0)));const c=[];let p,g=i;const z=e.shape[0],I=u.unstack(e);let R,A;null!=s&&(R=u.unstack(s));for(let e=0;e<z;++e){const i=I[e],r=u.tidy(()=>t(i,g));if(null==s)p=r[0],g=r[1];else{const t=u.tidy(()=>{const t=R[e],i=u.sub(u.onesLike(t),t);return{output:u.add(u.mul(r[0],t),u.mul(g[0],i)),newStates:g.map((e,s)=>u.add(u.mul(r[1][s],t),u.mul(e,i)))}});p=t.output,g=t.newStates}l&&c.push(p)}if(l){const t=1;A=u.stack(c,t)}return[p,A,g]})}class y extends g.Layer{constructor(t){let e;if(super(t),null==t.cell)throw new d.ValueError('cell property is missing for the constructor of RNN.');if(e=Array.isArray(t.cell)?new L({cells:t.cell}):t.cell,null==e.stateSize)throw new d.ValueError("The RNN cell should have an attribute `stateSize` (tuple of integers, one integer per RNN state).");this.cell=e,this.returnSequences=null!=t.returnSequences&&t.returnSequences,this.returnState=null!=t.returnState&&t.returnState,this.goBackwards=null!=t.goBackwards&&t.goBackwards,this._stateful=null!=t.stateful&&t.stateful,this.unroll=null!=t.unroll&&t.unroll,this.supportsMasking=!0,this.inputSpec=[new g.InputSpec({ndim:3})],this.stateSpec=null,this.states_=null,this.numConstants=null,this.keptStates=[]}getStates(){if(null==this.states_){const t=Array.isArray(this.cell.stateSize)?this.cell.stateSize.length:1;return k.range(0,t).map(t=>null)}return this.states_}setStates(t){this.states_=t}computeOutputShape(t){(0,A.isArrayOfShapes)(t)&&(t=t[0]);let e=this.cell.stateSize;Array.isArray(e)||(e=[e]);const i=e[0];let r;if(r=this.returnSequences?[t[0],t[1],i]:[t[0],i],this.returnState){const i=[];for(const r of e)i.push([t[0],r]);return[r].concat(i)}return r}computeMask(t,e){return u.tidy(()=>{Array.isArray(e)&&(e=e[0]);const t=this.returnSequences?e:null;if(this.returnState){const e=this.states.map(t=>null);return[t].concat(e)}return t})}get states(){if(null==this.states_){const t=Array.isArray(this.cell.stateSize)?this.cell.stateSize.length:1,e=[];for(let i=0;i<t;++i)e.push(null);return e}return this.states_}set states(t){this.states_=t}build(t){if(null!=this.numConstants)throw new d.NotImplementedError('Constants support is not implemented in RNN yet.');(0,A.isArrayOfShapes)(t)&&(t=t[0]);const e=this.stateful?t[0]:null,i=t.slice(2);this.inputSpec[0]=new g.InputSpec({shape:[e,null,...i]});const r=[t[0]].concat(t.slice(2));let s;if(this.cell.build(r),s=Array.isArray(this.cell.stateSize)?this.cell.stateSize:[this.cell.stateSize],null!=this.stateSpec){if(!l.util.arraysEqual(this.stateSpec.map(t=>t.shape[t.shape.length-1]),s))throw new d.ValueError(`An initialState was passed that is not compatible with cell.stateSize. Received stateSpec=${this.stateSpec}; However cell.stateSize is ${this.cell.stateSize}`)}else this.stateSpec=s.map(t=>new g.InputSpec({shape:[null,t]}));this.stateful&&this.resetStates()}resetStates(t,e=!1){(0,l.tidy)(()=>{if(!this.stateful)throw new d.AttributeError('Cannot call resetStates() on an RNN Layer that is not stateful.');const i=this.inputSpec[0].shape[0];if(null==i)throw new d.ValueError("If an RNN is stateful, it needs to know its batch size. Specify the batch size of your input tensors: \n- If using a Sequential model, specify the batch size by passing a `batchInputShape` option to your first layer.\n- If using the functional API, specify the batch size by passing a `batchShape` option to your Input layer.");if(null==this.states_)Array.isArray(this.cell.stateSize)?this.states_=this.cell.stateSize.map(t=>u.zeros([i,t])):this.states_=[u.zeros([i,this.cell.stateSize])];else if(null==t)u.dispose(this.states_),null!=this.keptStates&&(u.dispose(this.keptStates),this.keptStates=[]),Array.isArray(this.cell.stateSize)?this.states_=this.cell.stateSize.map(t=>u.zeros([i,t])):this.states_[0]=u.zeros([i,this.cell.stateSize]);else{if(Array.isArray(t)||(t=[t]),t.length!==this.states_.length)throw new d.ValueError(`Layer ${this.name} expects ${this.states_.length} state(s), but it received ${t.length} state value(s). Input received: ${t}`);!0===e?this.keptStates.push(this.states_.slice()):u.dispose(this.states_);for(let e=0;e<this.states_.length;++e){const r=t[e],s=Array.isArray(this.cell.stateSize)?this.cell.stateSize[e]:this.cell.stateSize,n=[i,s];if(!l.util.arraysEqual(r.shape,n))throw new d.ValueError(`State ${e} is incompatible with layer ${this.name}: expected shape=${n}, received shape=${r.shape}`);this.states_[e]=r}}this.states_=this.states_.map(t=>u.keep(t.clone()))})}apply(t,e){let i=null==e?null:e.initialState,r=null==e?null:e.constants;null==e&&(e={});const s=C(t,i,r,this.numConstants);t=s.inputs,i=s.initialState,r=s.constants;let n=[],a=[];if(null!=i){e.initialState=i,n=n.concat(i),this.stateSpec=[];for(const t of i)this.stateSpec.push(new g.InputSpec({shape:t.shape}));a=a.concat(this.stateSpec)}null!=r&&(e.constants=r,n=n.concat(r),this.numConstants=r.length);if(n[0]instanceof g.SymbolicTensor){const i=[t].concat(n),r=this.inputSpec.concat(a),s=this.inputSpec;this.inputSpec=r;const l=super.apply(i,e);return this.inputSpec=s,l}return super.apply(t,e)}call(t,e){return(0,l.tidy)(()=>{const i=null==e?null:e.mask,r=null==e?null:e.training;let s=null==e?null:e.initialState;t=(0,A.getExactlyOneTensor)(t),null==s&&(s=this.stateful?this.states_:this.getInitialState(t));const n=Array.isArray(this.cell.stateSize)?this.cell.stateSize.length:1;if(s.length!==n)throw new d.ValueError(`RNN Layer has ${n} state(s) but was passed ${s.length} initial state(s).`);this.unroll&&console.warn('Ignoring unroll = true for RNN layer, due to imperative backend.');const a={training:r},l=b((t,e)=>{const i=this.cell.call([t].concat(e),a);return[i[0],i.slice(1)]},t,s,this.goBackwards,i,null,this.unroll,this.returnSequences),u=l[0],o=l[1],h=l[2];this.stateful&&this.resetStates(h,r);const c=this.returnSequences?o:u;return this.returnState?[c].concat(h):c})}getInitialState(t){return(0,l.tidy)(()=>{let e=u.zeros(t.shape);return e=u.sum(e,[1,2]),e=h.expandDims(e),Array.isArray(this.cell.stateSize)?this.cell.stateSize.map(t=>t>1?h.tile(e,[1,t]):e):this.cell.stateSize>1?[h.tile(e,[1,this.cell.stateSize])]:[e]})}get trainableWeights(){return this.trainable?this.cell.trainableWeights:[]}get nonTrainableWeights(){return this.trainable?this.cell.nonTrainableWeights:this.cell.weights}setFastWeightInitDuringBuild(t){super.setFastWeightInitDuringBuild(t),null!=this.cell&&this.cell.setFastWeightInitDuringBuild(t)}getConfig(){const t=super.getConfig(),e={returnSequences:this.returnSequences,returnState:this.returnState,goBackwards:this.goBackwards,stateful:this.stateful,unroll:this.unroll};null!=this.numConstants&&(e.numConstants=this.numConstants);const i=this.cell.getConfig();return this.getClassName()===y.className&&(e.cell={className:this.cell.getClassName(),config:i}),Object.assign(Object.assign(Object.assign({},i),t),e)}static fromConfig(t,e,i={}){const r=e.cell,s=(0,f.deserialize)(r,i);return new t(Object.assign(e,{cell:s}))}}n.RNN=y,y.className='RNN',l.serialization.registerClass(y);class N extends g.Layer{}n.RNNCell=N;class E extends N{constructor(t){super(t),this.DEFAULT_ACTIVATION='tanh',this.DEFAULT_KERNEL_INITIALIZER='glorotNormal',this.DEFAULT_RECURRENT_INITIALIZER='orthogonal',this.DEFAULT_BIAS_INITIALIZER='zeros',this.units=t.units,(0,R.assertPositiveInteger)(this.units,"units"),this.activation=(0,o.getActivation)(null==t.activation?this.DEFAULT_ACTIVATION:t.activation),this.useBias=null==t.useBias||t.useBias,this.kernelInitializer=(0,z.getInitializer)(t.kernelInitializer||this.DEFAULT_KERNEL_INITIALIZER),this.recurrentInitializer=(0,z.getInitializer)(t.recurrentInitializer||this.DEFAULT_RECURRENT_INITIALIZER),this.biasInitializer=(0,z.getInitializer)(t.biasInitializer||this.DEFAULT_BIAS_INITIALIZER),this.kernelRegularizer=(0,I.getRegularizer)(t.kernelRegularizer),this.recurrentRegularizer=(0,I.getRegularizer)(t.recurrentRegularizer),this.biasRegularizer=(0,I.getRegularizer)(t.biasRegularizer),this.kernelConstraint=(0,p.getConstraint)(t.kernelConstraint),this.recurrentConstraint=(0,p.getConstraint)(t.recurrentConstraint),this.biasConstraint=(0,p.getConstraint)(t.biasConstraint),this.dropout=k.min([1,k.max([0,null==t.dropout?0:t.dropout])]),this.recurrentDropout=k.min([1,k.max([0,null==t.recurrentDropout?0:t.recurrentDropout])]),this.dropoutFunc=t.dropoutFunc,this.stateSize=this.units,this.dropoutMask=null,this.recurrentDropoutMask=null}build(t){t=(0,A.getExactlyOneShape)(t),this.kernel=this.addWeight('kernel',[t[t.length-1],this.units],null,this.kernelInitializer,this.kernelRegularizer,!0,this.kernelConstraint),this.recurrentKernel=this.addWeight('recurrent_kernel',[this.units,this.units],null,this.recurrentInitializer,this.recurrentRegularizer,!0,this.recurrentConstraint),this.useBias?this.bias=this.addWeight('bias',[this.units],null,this.biasInitializer,this.biasRegularizer,!0,this.biasConstraint):this.bias=null,this.built=!0}call(t,e){return(0,l.tidy)(()=>{if(2!==t.length)throw new d.ValueError(`SimpleRNNCell expects 2 input Tensors, got ${t.length}.`);let i=t[1];t=t[0];const r=null!=e.training&&e.training;let s;0<this.dropout&&this.dropout<1&&null==this.dropoutMask&&(this.dropoutMask=F({ones:()=>u.onesLike(t),rate:this.dropout,training:r,dropoutFunc:this.dropoutFunc})),0<this.recurrentDropout&&this.recurrentDropout<1&&null==this.recurrentDropoutMask&&(this.recurrentDropoutMask=F({ones:()=>u.onesLike(i),rate:this.recurrentDropout,training:r,dropoutFunc:this.dropoutFunc}));const n=this.dropoutMask,a=this.recurrentDropoutMask;s=null!=n?h.dot(u.mul(t,n),this.kernel.read()):h.dot(t,this.kernel.read()),null!=this.bias&&(s=h.biasAdd(s,this.bias.read())),null!=a&&(i=u.mul(i,a));let l=u.add(s,h.dot(i,this.recurrentKernel.read()));return null!=this.activation&&(l=this.activation.apply(l)),[l,l]})}getConfig(){const t=super.getConfig(),e={units:this.units,activation:(0,o.serializeActivation)(this.activation),useBias:this.useBias,kernelInitializer:(0,z.serializeInitializer)(this.kernelInitializer),recurrentInitializer:(0,z.serializeInitializer)(this.recurrentInitializer),biasInitializer:(0,z.serializeInitializer)(this.biasInitializer),kernelRegularizer:(0,I.serializeRegularizer)(this.kernelRegularizer),recurrentRegularizer:(0,I.serializeRegularizer)(this.recurrentRegularizer),biasRegularizer:(0,I.serializeRegularizer)(this.biasRegularizer),activityRegularizer:(0,I.serializeRegularizer)(this.activityRegularizer),kernelConstraint:(0,p.serializeConstraint)(this.kernelConstraint),recurrentConstraint:(0,p.serializeConstraint)(this.recurrentConstraint),biasConstraint:(0,p.serializeConstraint)(this.biasConstraint),dropout:this.dropout,recurrentDropout:this.recurrentDropout};return Object.assign(Object.assign({},t),e)}}n.SimpleRNNCell=E,E.className='SimpleRNNCell',l.serialization.registerClass(E);class T extends y{constructor(t){t.cell=new E(t),super(t)}call(t,e){return(0,l.tidy)(()=>{null!=this.cell.dropoutMask&&(u.dispose(this.cell.dropoutMask),this.cell.dropoutMask=null),null!=this.cell.recurrentDropoutMask&&(u.dispose(this.cell.recurrentDropoutMask),this.cell.recurrentDropoutMask=null);const i=null==e?null:e.mask,r=null==e?null:e.training,s=null==e?null:e.initialState;return super.call(t,{mask:i,training:r,initialState:s})})}static fromConfig(t,e){return new t(e)}}n.SimpleRNN=T,T.className='SimpleRNN',l.serialization.registerClass(T);class _ extends N{constructor(t){if(super(t),this.DEFAULT_ACTIVATION='tanh',this.DEFAULT_RECURRENT_ACTIVATION='hardSigmoid',this.DEFAULT_KERNEL_INITIALIZER='glorotNormal',this.DEFAULT_RECURRENT_INITIALIZER='orthogonal',this.DEFAULT_BIAS_INITIALIZER='zeros',t.resetAfter)throw new d.ValueError("GRUCell does not support reset_after parameter set to true.");this.units=t.units,(0,R.assertPositiveInteger)(this.units,'units'),this.activation=(0,o.getActivation)(void 0===t.activation?this.DEFAULT_ACTIVATION:t.activation),this.recurrentActivation=(0,o.getActivation)(void 0===t.recurrentActivation?this.DEFAULT_RECURRENT_ACTIVATION:t.recurrentActivation),this.useBias=null==t.useBias||t.useBias,this.kernelInitializer=(0,z.getInitializer)(t.kernelInitializer||this.DEFAULT_KERNEL_INITIALIZER),this.recurrentInitializer=(0,z.getInitializer)(t.recurrentInitializer||this.DEFAULT_RECURRENT_INITIALIZER),this.biasInitializer=(0,z.getInitializer)(t.biasInitializer||this.DEFAULT_BIAS_INITIALIZER),this.kernelRegularizer=(0,I.getRegularizer)(t.kernelRegularizer),this.recurrentRegularizer=(0,I.getRegularizer)(t.recurrentRegularizer),this.biasRegularizer=(0,I.getRegularizer)(t.biasRegularizer),this.kernelConstraint=(0,p.getConstraint)(t.kernelConstraint),this.recurrentConstraint=(0,p.getConstraint)(t.recurrentConstraint),this.biasConstraint=(0,p.getConstraint)(t.biasConstraint),this.dropout=k.min([1,k.max([0,null==t.dropout?0:t.dropout])]),this.recurrentDropout=k.min([1,k.max([0,null==t.recurrentDropout?0:t.recurrentDropout])]),this.dropoutFunc=t.dropoutFunc,this.implementation=t.implementation,this.stateSize=this.units,this.dropoutMask=null,this.recurrentDropoutMask=null}build(t){const e=(t=(0,A.getExactlyOneShape)(t))[t.length-1];this.kernel=this.addWeight('kernel',[e,3*this.units],null,this.kernelInitializer,this.kernelRegularizer,!0,this.kernelConstraint),this.recurrentKernel=this.addWeight('recurrent_kernel',[this.units,3*this.units],null,this.recurrentInitializer,this.recurrentRegularizer,!0,this.recurrentConstraint),this.useBias?this.bias=this.addWeight('bias',[3*this.units],null,this.biasInitializer,this.biasRegularizer,!0,this.biasConstraint):this.bias=null,this.built=!0}call(t,e){return(0,l.tidy)(()=>{if(2!==t.length)throw new d.ValueError(`GRUCell expects 2 input Tensors (inputs, h, c), got ${t.length}.`);const i=null!=e.training&&e.training;let r=t[1];t=t[0],0<this.dropout&&this.dropout<1&&null==this.dropoutMask&&(this.dropoutMask=F({ones:()=>u.onesLike(t),rate:this.dropout,training:i,count:3,dropoutFunc:this.dropoutFunc})),0<this.recurrentDropout&&this.recurrentDropout<1&&null==this.recurrentDropoutMask&&(this.recurrentDropoutMask=F({ones:()=>u.onesLike(r),rate:this.recurrentDropout,training:i,count:3,dropoutFunc:this.dropoutFunc}));const s=this.dropoutMask,n=this.recurrentDropoutMask;let a,l,o;0<this.dropout&&this.dropout<1&&(t=u.mul(t,s[0]));let c=h.dot(t,this.kernel.read());this.useBias&&(c=h.biasAdd(c,this.bias.read())),0<this.recurrentDropout&&this.recurrentDropout<1&&(r=u.mul(r,n[0]));const p=this.recurrentKernel.read(),[g,z]=u.split(p,[2*this.units,this.units],p.rank-1),I=h.dot(r,g),[R,k,A]=u.split(c,3,c.rank-1),[m,f]=u.split(I,2,I.rank-1);a=this.recurrentActivation.apply(u.add(R,m)),l=this.recurrentActivation.apply(u.add(k,f));const S=h.dot(u.mul(l,r),z);o=this.activation.apply(u.add(A,S));const C=u.add(u.mul(a,r),u.mul(u.add(1,u.neg(a)),o));return[C,C]})}getConfig(){const t=super.getConfig(),e={units:this.units,activation:(0,o.serializeActivation)(this.activation),recurrentActivation:(0,o.serializeActivation)(this.recurrentActivation),useBias:this.useBias,kernelInitializer:(0,z.serializeInitializer)(this.kernelInitializer),recurrentInitializer:(0,z.serializeInitializer)(this.recurrentInitializer),biasInitializer:(0,z.serializeInitializer)(this.biasInitializer),kernelRegularizer:(0,I.serializeRegularizer)(this.kernelRegularizer),recurrentRegularizer:(0,I.serializeRegularizer)(this.recurrentRegularizer),biasRegularizer:(0,I.serializeRegularizer)(this.biasRegularizer),activityRegularizer:(0,I.serializeRegularizer)(this.activityRegularizer),kernelConstraint:(0,p.serializeConstraint)(this.kernelConstraint),recurrentConstraint:(0,p.serializeConstraint)(this.recurrentConstraint),biasConstraint:(0,p.serializeConstraint)(this.biasConstraint),dropout:this.dropout,recurrentDropout:this.recurrentDropout,implementation:this.implementation,resetAfter:!1};return Object.assign(Object.assign({},t),e)}}n.GRUCell=_,_.className='GRUCell',l.serialization.registerClass(_);class D extends y{constructor(t){0===t.implementation&&console.warn("`implementation=0` has been deprecated, and now defaults to `implementation=1`. Please update your layer call."),t.cell=new _(t),super(t)}call(t,e){return(0,l.tidy)(()=>{null!=this.cell.dropoutMask&&(u.dispose(this.cell.dropoutMask),this.cell.dropoutMask=null),null!=this.cell.recurrentDropoutMask&&(u.dispose(this.cell.recurrentDropoutMask),this.cell.recurrentDropoutMask=null);const i=null==e?null:e.mask,r=null==e?null:e.training,s=null==e?null:e.initialState;return super.call(t,{mask:i,training:r,initialState:s})})}static fromConfig(t,e){return 0===e.implmentation&&(e.implementation=1),new t(e)}}n.GRU=D,D.className='GRU',l.serialization.registerClass(D);class v extends N{constructor(t){super(t),this.DEFAULT_ACTIVATION='tanh',this.DEFAULT_RECURRENT_ACTIVATION='hardSigmoid',this.DEFAULT_KERNEL_INITIALIZER='glorotNormal',this.DEFAULT_RECURRENT_INITIALIZER='orthogonal',this.DEFAULT_BIAS_INITIALIZER='zeros',this.units=t.units,(0,R.assertPositiveInteger)(this.units,'units'),this.activation=(0,o.getActivation)(void 0===t.activation?this.DEFAULT_ACTIVATION:t.activation),this.recurrentActivation=(0,o.getActivation)(void 0===t.recurrentActivation?this.DEFAULT_RECURRENT_ACTIVATION:t.recurrentActivation),this.useBias=null==t.useBias||t.useBias,this.kernelInitializer=(0,z.getInitializer)(t.kernelInitializer||this.DEFAULT_KERNEL_INITIALIZER),this.recurrentInitializer=(0,z.getInitializer)(t.recurrentInitializer||this.DEFAULT_RECURRENT_INITIALIZER),this.biasInitializer=(0,z.getInitializer)(t.biasInitializer||this.DEFAULT_BIAS_INITIALIZER),this.unitForgetBias=t.unitForgetBias,this.kernelRegularizer=(0,I.getRegularizer)(t.kernelRegularizer),this.recurrentRegularizer=(0,I.getRegularizer)(t.recurrentRegularizer),this.biasRegularizer=(0,I.getRegularizer)(t.biasRegularizer),this.kernelConstraint=(0,p.getConstraint)(t.kernelConstraint),this.recurrentConstraint=(0,p.getConstraint)(t.recurrentConstraint),this.biasConstraint=(0,p.getConstraint)(t.biasConstraint),this.dropout=k.min([1,k.max([0,null==t.dropout?0:t.dropout])]),this.recurrentDropout=k.min([1,k.max([0,null==t.recurrentDropout?0:t.recurrentDropout])]),this.dropoutFunc=t.dropoutFunc,this.implementation=t.implementation,this.stateSize=[this.units,this.units],this.dropoutMask=null,this.recurrentDropoutMask=null}build(t){var e;const i=(t=(0,A.getExactlyOneShape)(t))[t.length-1];let r;if(this.kernel=this.addWeight('kernel',[i,4*this.units],null,this.kernelInitializer,this.kernelRegularizer,!0,this.kernelConstraint),this.recurrentKernel=this.addWeight('recurrent_kernel',[this.units,4*this.units],null,this.recurrentInitializer,this.recurrentRegularizer,!0,this.recurrentConstraint),this.useBias){if(this.unitForgetBias){const t=this.biasInitializer,i=this.units;r=new((e=class extends z.Initializer{apply(e,r){const s=t.apply([i]),n=(new z.Ones).apply([i]),a=t.apply([2*i]);return h.concatAlongFirstAxis(h.concatAlongFirstAxis(s,n),a)}}).className='CustomInit',e)}else r=this.biasInitializer;this.bias=this.addWeight('bias',[4*this.units],null,r,this.biasRegularizer,!0,this.biasConstraint)}else this.bias=null;this.built=!0}call(t,e){return(0,l.tidy)(()=>{const i=null!=e.training&&e.training;if(3!==t.length)throw new d.ValueError(`LSTMCell expects 3 input Tensors (inputs, h, c), got ${t.length}.`);let r=t[1];const s=t[2];t=t[0],0<this.dropout&&this.dropout<1&&null==this.dropoutMask&&(this.dropoutMask=F({ones:()=>u.onesLike(t),rate:this.dropout,training:i,count:4,dropoutFunc:this.dropoutFunc})),0<this.recurrentDropout&&this.recurrentDropout<1&&null==this.recurrentDropoutMask&&(this.recurrentDropoutMask=F({ones:()=>u.onesLike(r),rate:this.recurrentDropout,training:i,count:4,dropoutFunc:this.dropoutFunc}));const n=this.dropoutMask,a=this.recurrentDropoutMask;let l,o,c,p;0<this.dropout&&this.dropout<1&&(t=u.mul(t,n[0]));let g=h.dot(t,this.kernel.read());0<this.recurrentDropout&&this.recurrentDropout<1&&(r=u.mul(r,a[0])),g=u.add(g,h.dot(r,this.recurrentKernel.read())),this.useBias&&(g=h.biasAdd(g,this.bias.read()));const[z,I,R,k]=u.split(g,4,g.rank-1);l=this.recurrentActivation.apply(z),o=this.recurrentActivation.apply(I),c=u.add(u.mul(o,s),u.mul(l,this.activation.apply(R))),p=this.recurrentActivation.apply(k);const A=u.mul(p,this.activation.apply(c));return[A,A,c]})}getConfig(){const t=super.getConfig(),e={units:this.units,activation:(0,o.serializeActivation)(this.activation),recurrentActivation:(0,o.serializeActivation)(this.recurrentActivation),useBias:this.useBias,kernelInitializer:(0,z.serializeInitializer)(this.kernelInitializer),recurrentInitializer:(0,z.serializeInitializer)(this.recurrentInitializer),biasInitializer:(0,z.serializeInitializer)(this.biasInitializer),unitForgetBias:this.unitForgetBias,kernelRegularizer:(0,I.serializeRegularizer)(this.kernelRegularizer),recurrentRegularizer:(0,I.serializeRegularizer)(this.recurrentRegularizer),biasRegularizer:(0,I.serializeRegularizer)(this.biasRegularizer),activityRegularizer:(0,I.serializeRegularizer)(this.activityRegularizer),kernelConstraint:(0,p.serializeConstraint)(this.kernelConstraint),recurrentConstraint:(0,p.serializeConstraint)(this.recurrentConstraint),biasConstraint:(0,p.serializeConstraint)(this.biasConstraint),dropout:this.dropout,recurrentDropout:this.recurrentDropout,implementation:this.implementation};return Object.assign(Object.assign({},t),e)}}n.LSTMCell=v,v.className='LSTMCell',l.serialization.registerClass(v);class w extends y{constructor(t){0===t.implementation&&console.warn("`implementation=0` has been deprecated, and now defaults to `implementation=1`. Please update your layer call."),t.cell=new v(t),super(t)}call(t,e){return(0,l.tidy)(()=>{null!=this.cell.dropoutMask&&(u.dispose(this.cell.dropoutMask),this.cell.dropoutMask=null),null!=this.cell.recurrentDropoutMask&&(u.dispose(this.cell.recurrentDropoutMask),this.cell.recurrentDropoutMask=null);const i=null==e?null:e.mask,r=null==e?null:e.training,s=null==e?null:e.initialState;return super.call(t,{mask:i,training:r,initialState:s})})}static fromConfig(t,e){return 0===e.implmentation&&(e.implementation=1),new t(e)}}n.LSTM=w,w.className='LSTM',l.serialization.registerClass(w);class L extends N{constructor(t){super(t),this.cells=t.cells}get stateSize(){const t=[];for(const e of this.cells.slice().reverse())Array.isArray(e.stateSize)?t.push(...e.stateSize):t.push(e.stateSize);return t}call(t,e){return(0,l.tidy)(()=>{let i=t.slice(1);const r=[];for(const t of this.cells.slice().reverse())Array.isArray(t.stateSize)?r.push(i.splice(0,t.stateSize.length)):r.push(i.splice(0,1));r.reverse();const s=[];let n;for(let a=0;a<this.cells.length;++a){const l=this.cells[a];i=r[a],n=0===a?[t[0]].concat(i):[n[0]].concat(i),n=l.call(n,e),s.push(n.slice(1))}i=[];for(const t of s.slice().reverse())i.push(...t);return[n[0]].concat(i)})}build(t){let e;(0,A.isArrayOfShapes)(t)&&(t=t[0]),this.cells.forEach((i,r)=>{(0,c.nameScope)(`RNNCell_${r}`,()=>{i.build(t),e=Array.isArray(i.stateSize)?i.stateSize[0]:i.stateSize,t=[t[0],e]})}),this.built=!0}getConfig(){const t=super.getConfig(),e={cells:this.cells.map(t=>({className:t.getClassName(),config:t.getConfig()}))};return Object.assign(Object.assign({},t),e)}static fromConfig(t,e,i={}){const r=[];for(const t of e.cells)r.push((0,f.deserialize)(t,i));return new t({cells:r})}get trainableWeights(){if(!this.trainable)return[];const t=[];for(const e of this.cells)t.push(...e.trainableWeights);return t}get nonTrainableWeights(){const t=[];for(const e of this.cells)t.push(...e.nonTrainableWeights);if(!this.trainable){const e=[];for(const t of this.cells)e.push(...t.trainableWeights);return e.concat(t)}return t}getWeights(){const t=[];for(const e of this.cells)t.push(...e.weights);return(0,m.batchGetValue)(t)}setWeights(t){const e=[];for(const i of this.cells){const r=i.weights.length,s=t.splice(r);for(let t=0;t<i.weights.length;++t)e.push([i.weights[t],s[t]])}(0,m.batchSetValue)(e)}}function F(t){const{ones:e,rate:i,training:r=!1,count:s=1,dropoutFunc:n}=t,a=()=>null!=n?n(e(),i):h.dropout(e(),i),l=()=>h.inTrainPhase(a,e,r);if(!s||s<=1)return u.keep(l().clone());return Array(s).fill(void 0).map(l).map(t=>u.keep(t.clone()))}n.StackedRNNCells=L,L.className='StackedRNNCells',l.serialization.registerClass(L)},2216,[1158,2210,2181,2178,2189,2177,2172,2180,2211,2174,2182,2185,2187,2196]);
__d(function(g,_r,_i,a,m,_e,d){Object.defineProperty(_e,"__esModule",{value:!0}),_e.SpatialDropout1D=_e.Reshape=_e.RepeatVector=_e.Permute=_e.Masking=_e.Flatten=_e.Dropout=_e.Dense=_e.Activation=void 0;var t=_r(d[0]),e=_r(d[1]),i=(function(t,e){if("function"==typeof WeakMap)var i=new WeakMap,s=new WeakMap;return(function(t,e){if(!e&&t&&t.__esModule)return t;var n,r,l={__proto__:null,default:t};if(null===t||"object"!=typeof t&&"function"!=typeof t)return l;if(n=e?s:i){if(n.has(t))return n.get(t);n.set(t,l)}for(const e in t)"default"!==e&&{}.hasOwnProperty.call(t,e)&&((r=(n=Object.defineProperty)&&Object.getOwnPropertyDescriptor(t,e))&&(r.get||r.set)?n(l,e,r):l[e]=t[e]);return l})(t,e)}
/**
   * @license
   * Copyright 2018 Google LLC
   *
   * Use of this source code is governed by an MIT-style
   * license that can be found in the LICENSE file or at
   * https://opensource.org/licenses/MIT.
   * =============================================================================
   */)(_r(d[2])),s=_r(d[3]),n=_r(d[4]),r=_r(d[5]),l=_r(d[6]),o=_r(d[7]),u=_r(d[8]),h=_r(d[9]),c=_r(d[10]);class p extends n.Layer{constructor(t){super(t),this.rate=Math.max(Math.min(t.rate,1),0),this.noiseShape=t.noiseShape,this.seed=t.seed,this.supportsMasking=!0}getNoiseShape(t){if(null==this.noiseShape)return this.noiseShape;const e=t.shape,i=[];for(let t=0;t<this.noiseShape.length;++t)i.push(null==this.noiseShape[t]?e[t]:this.noiseShape[t]);return i}call(e,s){return(0,t.tidy)(()=>{this.invokeCallHook(e,s);const t=(0,c.getExactlyOneTensor)(e);if(0<this.rate&&this.rate<1){const e=null!=s.training&&s.training,n=this.getNoiseShape(t);return i.inTrainPhase(()=>i.dropout(t,this.rate,n,this.seed),()=>t,e)}return e})}getConfig(){const t={rate:this.rate,noiseShape:this.noiseShape,seed:this.seed},e=super.getConfig();return Object.assign(t,e),t}dispose(){return super.dispose()}}_e.Dropout=p,p.className='Dropout',t.serialization.registerClass(p);class f extends p{constructor(t){super(t),this.inputSpec=[{ndim:3}]}getNoiseShape(t){const e=t.shape;return[e[0],1,e[2]]}}_e.SpatialDropout1D=f,f.className='SpatialDropout1D',t.serialization.registerClass(f);class k extends n.Layer{constructor(t){if(super(t),this.activation=null,this.useBias=!0,this.kernel=null,this.bias=null,this.DEFAULT_KERNEL_INITIALIZER='glorotNormal',this.DEFAULT_BIAS_INITIALIZER='zeros',null==t.batchInputShape&&null==t.inputShape&&null!=t.inputDim){let e=null;null!=t.batchSize&&(e=t.batchSize),this.batchInputShape=[e,t.inputDim]}this.units=t.units,(0,u.assertPositiveInteger)(this.units,'units'),this.activation=(0,e.getActivation)(t.activation),null!=t.useBias&&(this.useBias=t.useBias),this.kernelInitializer=(0,l.getInitializer)(t.kernelInitializer||this.DEFAULT_KERNEL_INITIALIZER),this.biasInitializer=(0,l.getInitializer)(t.biasInitializer||this.DEFAULT_BIAS_INITIALIZER),this.kernelConstraint=(0,s.getConstraint)(t.kernelConstraint),this.biasConstraint=(0,s.getConstraint)(t.biasConstraint),this.kernelRegularizer=(0,o.getRegularizer)(t.kernelRegularizer),this.biasRegularizer=(0,o.getRegularizer)(t.biasRegularizer),this.activityRegularizer=(0,o.getRegularizer)(t.activityRegularizer),this.supportsMasking=!0,this.inputSpec=[{minNDim:2}]}build(t){const e=(t=(0,c.getExactlyOneShape)(t))[t.length-1];null==this.kernel&&(this.kernel=this.addWeight('kernel',[e,this.units],null,this.kernelInitializer,this.kernelRegularizer,!0,this.kernelConstraint),this.useBias&&(this.bias=this.addWeight('bias',[this.units],null,this.biasInitializer,this.biasRegularizer,!0,this.biasConstraint))),this.inputSpec=[{minNDim:2,axes:{[-1]:e}}],this.built=!0}computeOutputShape(t){const e=(t=(0,c.getExactlyOneShape)(t)).slice();return e[e.length-1]=this.units,e}call(e,s){return(0,t.tidy)(()=>{this.invokeCallHook(e,s);const t=(0,c.getExactlyOneTensor)(e),n=(0,u.mapActivationToFusedKernel)(this.activation.getClassName());let r;return null!=n?r=i.dot(t,this.kernel.read(),n,this.bias?this.bias.read():null):(r=i.dot(t,this.kernel.read()),null!=this.bias&&(r=i.biasAdd(r,this.bias.read())),null!=this.activation&&(r=this.activation.apply(r))),r})}getConfig(){const t={units:this.units,activation:(0,e.serializeActivation)(this.activation),useBias:this.useBias,kernelInitializer:(0,l.serializeInitializer)(this.kernelInitializer),biasInitializer:(0,l.serializeInitializer)(this.biasInitializer),kernelRegularizer:(0,o.serializeRegularizer)(this.kernelRegularizer),biasRegularizer:(0,o.serializeRegularizer)(this.biasRegularizer),activityRegularizer:(0,o.serializeRegularizer)(this.activityRegularizer),kernelConstraint:(0,s.serializeConstraint)(this.kernelConstraint),biasConstraint:(0,s.serializeConstraint)(this.biasConstraint)},i=super.getConfig();return Object.assign(t,i),t}}_e.Dense=k,k.className='Dense',t.serialization.registerClass(k);class y extends n.Layer{constructor(t){super(t=t||{}),this.inputSpec=[{minNDim:3}],this.dataFormat=t.dataFormat}computeOutputShape(t){t=(0,c.getExactlyOneShape)(t);for(const e of t.slice(1))if(null==e)throw new r.ValueError(`The shape of the input to "Flatten" is not fully defined (got ${t.slice(1)}). Make sure to pass a complete "input_shape" or "batch_input_shape" argument to the first layer in your model.`);return[t[0],(0,h.arrayProd)(t,1)]}call(e,s){return(0,t.tidy)(()=>{this.invokeCallHook(e,s);let n=(0,c.getExactlyOneTensor)(e);if('channelsFirst'===this.dataFormat&&n.rank>1){const e=[0];for(let t=2;t<n.rank;++t)e.push(t);e.push(1),n=(0,t.transpose)(n,e)}return i.batchFlatten(n)})}getConfig(){const t={};null!=this.dataFormat&&(t.dataFormat=this.dataFormat);const e=super.getConfig();return Object.assign(t,e),t}}_e.Flatten=y,y.className='Flatten',t.serialization.registerClass(y);class z extends n.Layer{constructor(t){super(t),this.supportsMasking=!0,this.activation=(0,e.getActivation)(t.activation)}call(e,i){return(0,t.tidy)(()=>{this.invokeCallHook(e,i);const t=(0,c.getExactlyOneTensor)(e);return this.activation.apply(t)})}getConfig(){const t={activation:(0,e.serializeActivation)(this.activation)},i=super.getConfig();return Object.assign(t,i),t}}_e.Activation=z,z.className='Activation',t.serialization.registerClass(z);class S extends n.Layer{constructor(t){super(t),this.n=t.n,this.inputSpec=[{ndim:2}]}computeOutputShape(t){return[t[0],this.n,t[1]]}call(e,s){return(0,t.tidy)(()=>(e=(0,c.getExactlyOneTensor)(e),i.repeat(e,this.n)))}getConfig(){const t={n:this.n},e=super.getConfig();return Object.assign(t,e),t}}_e.RepeatVector=S,S.className='RepeatVector',t.serialization.registerClass(S);class b extends n.Layer{constructor(t){super(t),this.targetShape=t.targetShape;for(let t=0;t<this.targetShape.length;++t)this.isUnknown(this.targetShape[t])&&(this.targetShape[t]=null)}isUnknown(t){return t<0||null==t}fixUnknownDimension(t,e){const i='Total size of new array must be unchanged.',s=e.slice();let n=1,l=null;for(let t=0;t<s.length;++t){const e=s[t];if(this.isUnknown(e)){if(null!==l)throw new r.ValueError('Can only specifiy one unknown dimension.');l=t}else n*=e}const o=(0,h.arrayProd)(t);if(null!==l){if(0===n||o%n!==0)throw new r.ValueError(i);s[l]=o/n}else if(o!==n)throw new r.ValueError(i);return s}computeOutputShape(t){let e=!1;for(let i=0;i<t.length;++i)if(this.isUnknown(t[i])){e=!0;break}return e?t.slice(0,1).concat(this.targetShape):t.slice(0,1).concat(this.fixUnknownDimension(t.slice(1),this.targetShape))}call(e,i){return(0,t.tidy)(()=>{this.invokeCallHook(e,i);const s=(0,c.getExactlyOneTensor)(e),n=s.shape,r=n.slice(0,1).concat(this.fixUnknownDimension(n.slice(1),this.targetShape));return(0,t.reshape)(s,r)})}getConfig(){const t={targetShape:this.targetShape},e=super.getConfig();return Object.assign(t,e),t}}_e.Reshape=b,b.className='Reshape',t.serialization.registerClass(b);class C extends n.Layer{constructor(e){if(super(e),null==e.dims)throw new Error("Required configuration field `dims` is missing during Permute constructor call.");if(!Array.isArray(e.dims))throw new Error(`Permute constructor requires \`dims\` to be an Array, but received ${e.dims} instead.`);const i=(0,h.range)(1,e.dims.length+1);if(!t.util.arraysEqual(e.dims.slice().sort(),i))throw new Error('Invalid permutation `dims`: '+JSON.stringify(e.dims)+' `dims` must contain consecutive integers starting from 1.');this.dims=e.dims,this.dimsIncludingBatch=[0].concat(this.dims),this.inputSpec=[new n.InputSpec({ndim:this.dims.length+1})]}computeOutputShape(t){const e=(t=(0,c.getExactlyOneShape)(t)).slice();return this.dims.forEach((i,s)=>{e[s+1]=t[i]}),e}call(e,i){return(0,t.transpose)((0,c.getExactlyOneTensor)(e),this.dimsIncludingBatch)}getConfig(){const t={dims:this.dims},e=super.getConfig();return Object.assign(t,e),t}}_e.Permute=C,C.className='Permute',t.serialization.registerClass(C);class v extends n.Layer{constructor(t){super(null==t?{}:t),this.supportsMasking=!0,this.maskValue=null!=t?null==t.maskValue?0:t.maskValue:0}computeOutputShape(t){return t}getConfig(){const t=super.getConfig(),e={maskValue:this.maskValue};return Object.assign(e,t),e}computeMask(e,i){const s=(0,c.getExactlyOneTensor)(e);return(0,t.any)((0,t.notEqual)(s,this.maskValue),-1)}call(e,i){return(0,t.tidy)(()=>{this.invokeCallHook(e,i);const s=(0,c.getExactlyOneTensor)(e),n=(0,t.any)((0,t.notEqual)(s,this.maskValue),-1,!0);return(0,t.mul)(s,(0,t.cast)(n,s.dtype))})}}_e.Masking=v,v.className='Masking',t.serialization.registerClass(v)},2217,[1158,2210,2181,2189,2177,2172,2180,2211,2174,2182,2185]);
__d(function(g,_r,_i,a,m,_e,d){Object.defineProperty(_e,"__esModule",{value:!0}),_e.Embedding=void 0;var t=_r(d[0]),e=o(_r(d[1])),i=_r(d[2]),n=_r(d[3]),s=_r(d[4]),r=_r(d[5]),u=_r(d[6]),h=o(_r(d[7])),l=_r(d[8]);function o(t,e){if("function"==typeof WeakMap)var i=new WeakMap,n=new WeakMap;return(o=function(t,e){if(!e&&t&&t.__esModule)return t;var s,r,u={__proto__:null,default:t};if(null===t||"object"!=typeof t&&"function"!=typeof t)return u;if(s=e?n:i){if(s.has(t))return s.get(t);s.set(t,u)}for(const e in t)"default"!==e&&{}.hasOwnProperty.call(t,e)&&((r=(s=Object.defineProperty)&&Object.getOwnPropertyDescriptor(t,e))&&(r.get||r.set)?s(u,e,r):u[e]=t[e]);return u})(t,e)}
/**
   * @license
   * Copyright 2018 Google LLC
   *
   * Use of this source code is governed by an MIT-style
   * license that can be found in the LICENSE file or at
   * https://opensource.org/licenses/MIT.
   * =============================================================================
   */class p extends n.Layer{constructor(t){if(super(t),this.embeddings=null,this.DEFAULT_EMBEDDINGS_INITIALIZER='randomUniform',null==t.batchInputShape&&null==t.inputShape){let e=null;null!=t.batchSize&&(e=t.batchSize),null==t.inputLength?this.batchInputShape=[e,null]:this.batchInputShape=[e].concat(h.toList(t.inputLength))}this.inputDim=t.inputDim,h.assertPositiveInteger(this.inputDim,'inputDim'),this.outputDim=t.outputDim,h.assertPositiveInteger(this.outputDim,'outputDim'),this.embeddingsInitializer=(0,r.getInitializer)(t.embeddingsInitializer||this.DEFAULT_EMBEDDINGS_INITIALIZER),this.embeddingsRegularizer=(0,u.getRegularizer)(t.embeddingsRegularizer),this.activityRegularizer=(0,u.getRegularizer)(t.activityRegularizer),this.embeddingsConstraint=(0,i.getConstraint)(t.embeddingsConstraint),this.maskZero=t.maskZero,this.supportsMasking=t.maskZero,this.inputLength=t.inputLength}build(t){this.embeddings=this.addWeight('embeddings',[this.inputDim,this.outputDim],this.dtype,this.embeddingsInitializer,this.embeddingsRegularizer,!0,this.embeddingsConstraint),this.built=!0}warnOnIncompatibleInputShape(t){}computeMask(e,i){return(0,t.tidy)(()=>this.maskZero?(e=(0,l.getExactlyOneTensor)(e),(0,t.notEqual)(e,(0,t.zerosLike)(e))):null)}computeOutputShape(t){if(t=(0,l.getExactlyOneShape)(t),null==this.inputLength)return[...t,this.outputDim];const e=h.toList(this.inputLength);if(e.length!==t.length-1)throw new s.ValueError(`"inputLength" is ${this.inputLength}, but received input shape has shape ${t}`);{let i=0;for(let n=0;n<e.length;++n){const r=e[n],u=t[n+1];if(null!=r&&null!=u&&r!==u)throw new s.ValueError(`"inputLength" is ${this.inputLength}, but received input shape has shape ${t}`);null==r&&(e[i]=u),i++}}return[t[0],...e,this.outputDim]}call(i,n){return(0,t.tidy)(()=>{this.invokeCallHook(i,n);let s=(0,l.getExactlyOneTensor)(i);'int32'!==s.dtype&&(s=e.cast(s,'int32'));const r=e.gather(this.embeddings.read(),(0,t.reshape)(s,[s.size]));return(0,t.reshape)(r,(0,l.getExactlyOneShape)(this.computeOutputShape(s.shape)))})}getConfig(){const t={inputDim:this.inputDim,outputDim:this.outputDim,embeddingsInitializer:(0,r.serializeInitializer)(this.embeddingsInitializer),embeddingsRegularizer:(0,u.serializeRegularizer)(this.embeddingsRegularizer),activityRegularizer:(0,u.serializeRegularizer)(this.activityRegularizer),embeddingsConstraint:(0,i.serializeConstraint)(this.embeddingsConstraint),maskZero:this.maskZero,inputLength:this.inputLength},e=super.getConfig();return Object.assign(t,e),t}}_e.Embedding=p,p.className='Embedding',t.serialization.registerClass(p)},2218,[1158,2181,2189,2177,2172,2180,2211,2174,2185]);
__d(function(g,_r,_i,a,_m,_e,d){Object.defineProperty(_e,"__esModule",{value:!0}),_e.Multiply=_e.Minimum=_e.Merge=_e.Maximum=_e.Dot=_e.Concatenate=_e.Average=_e.Add=void 0,_e.add=function(e){if(Array.isArray(e)){return new p({}).apply(e)}return new p(e)},_e.average=function(e){if(Array.isArray(e)){return new y({}).apply(e)}return new y(e)},_e.concatenate=function(e){if(Array.isArray(e)){return new w({}).apply(e)}return new w(e)},_e.maximum=function(e){if(Array.isArray(e)){return new m({}).apply(e)}return new m(e)},_e.minimum=function(e){if(Array.isArray(e)){return new A({}).apply(e)}return new A(e)},_e.multiply=function(e){if(Array.isArray(e)){return new f({}).apply(e)}return new f(e)};var e=h(_r(d[0])),t=e,r=h(_r(d[1])),n=_r(d[2]),s=_r(d[3]),l=_r(d[4]),i=h(_r(d[5])),o=h(_r(d[6])),u=_r(d[7]);function h(e,t){if("function"==typeof WeakMap)var r=new WeakMap,n=new WeakMap;return(h=function(e,t){if(!t&&e&&e.__esModule)return e;var s,l,i={__proto__:null,default:e};if(null===e||"object"!=typeof e&&"function"!=typeof e)return i;if(s=t?n:r){if(s.has(e))return s.get(e);s.set(e,i)}for(const t in e)"default"!==t&&{}.hasOwnProperty.call(e,t)&&((l=(s=Object.defineProperty)&&Object.getOwnPropertyDescriptor(e,t))&&(l.get||l.set)?s(i,t,l):i[t]=e[t]);return i})(e,t)}
/**
   * @license
   * Copyright 2018 Google LLC
   *
   * Use of this source code is governed by an MIT-style
   * license that can be found in the LICENSE file or at
   * https://opensource.org/licenses/MIT.
   * =============================================================================
   */class c extends n.Layer{constructor(e){super(e||{}),this.supportsMasking=!0}mergeFunction(e){throw new s.NotImplementedError}computeElementwiseOpOutputShape(e,t){if(null==e||null==t)return null;if(e.length<t.length)return this.computeElementwiseOpOutputShape(t,e);if(0===t.length)return e;const r=e.slice(0,e.length-t.length);for(let n=0;n<t.length;++n){const l=e[e.length-t.length+n],i=t[n];if(null==l||null==i||l<0||i<0)r.push(null);else if(1===l)r.push(i);else if(1===i)r.push(l);else{if(l!==i)throw new s.ValueError('Operands could not be broadcast together with shapes '+JSON.stringify(e)+' '+JSON.stringify(t));r.push(l)}}return r}build(e){if(Array.isArray(e)&&!Array.isArray(e[0])&&(e=[(0,u.getExactlyOneShape)(e)]),e.length<2)throw new s.ValueError(`A merge layer should be called on an Array of at least 2 inputs. Got ${e.length} input(s).`);let t=[];for(const r of e)null!=r&&null!==r[0]&&t.push(r[0]);if(t=i.unique(t),t.length>1)throw new s.ValueError(`Can not merge tensors with different batch sizes. Got tensors with shapes: ${JSON.stringify(e)}.`);let r=null==e[0]?null:e[0].slice(1);for(let t=1;t<e.length;++t){const n=null==e[t]?null:e[t].slice(1);r=this.computeElementwiseOpOutputShape(r,n)}const n=e.map(e=>e.length);-1===e.indexOf(null)&&1===i.unique(n).length?this.reshapeRequired=!1:this.reshapeRequired=!0}call(n,s){return(0,e.tidy)(()=>{if(this.reshapeRequired){const e=[],s=n.map(e=>e.rank);if(-1===s.indexOf(null)){const t=o.max(s);for(let s of n){const n=s.rank;for(let e=0;e<t-n;++e)s=r.expandDims(s,1);e.push(s)}return this.mergeFunction(e)}{let r=!1;for(const s of n){const n=s.rank;if(null==n){const n=s.shape,l=n[0],i=n.slice(1).concat([l]);let u=t.reshape(s,[l].concat(o.arrayProd(n.slice(1))));u=t.transpose(u,[1,0]),u=t.reshape(u,i),e.push(u),r=!0}else if(n>1){const l=o.range(1,n).concat([0]);e.push(t.transpose(s,l)),r=!0}else e.push(s)}let s=this.mergeFunction(e);const l=s.rank;if(r)if(null==l){const e=s.shape,r=e[e.length-1],n=[r].concat(e.slice(0,e.length-1));s=t.reshape(t.transpose(t.reshape(s,[-1,r]),[1,0]),n)}else if(l>1){const e=[l-1].concat(o.range(0,l-1));s=t.transpose(s,e)}return s}}return this.mergeFunction(n)})}computeOutputShape(e){let t;t=null==e[0]?null:e[0].slice(1);for(let r=1;r<e.length;++r){const n=null==e[r]?null:e[r].slice(1);t=this.computeElementwiseOpOutputShape(t,n)}let r=[];for(const t of e)null!=t&&null!==t[0]&&r.push(t[0]);return r=i.unique(r),t=1===r.length?r.concat(t):[null].concat(t),t}computeMask(e,r){return t.tidy(()=>{if(null==r)return null;if(!Array.isArray(r))throw new s.ValueError('`mask` should be an Array');if(!Array.isArray(e))throw new s.ValueError('`inputs` should be an Array');if(r.length!==e.length)throw new s.ValueError(`The Array 'inputs' and 'mask' are expected to have the same length, but have different lengths (${e.length} vs ${r.length})`);if(r.every(e=>null==e))return null;let n=(r=r.map(e=>null==e?e:t.expandDims(e,0)))[0];for(let e=1;e<r.length-1;++e)n=t.logicalAnd(n,r[e]);return n})}}_e.Merge=c;class p extends c{constructor(e){super(e)}mergeFunction(r){return(0,e.tidy)(()=>{let e=r[0].clone();for(let n=1;n<r.length;++n)e=t.add(e,r[n]);return e})}}_e.Add=p,p.className='Add',e.serialization.registerClass(p);class f extends c{constructor(e){super(e)}mergeFunction(r){return(0,e.tidy)(()=>{let e=r[0].clone();for(let n=1;n<r.length;++n)e=t.mul(e,r[n]);return e})}}_e.Multiply=f,f.className='Multiply',e.serialization.registerClass(f);class y extends c{constructor(e){super(e)}mergeFunction(r){return(0,e.tidy)(()=>{let e=r[0].clone();for(let n=1;n<r.length;++n)e=t.add(e,r[n]);return t.mul(1/r.length,e)})}}_e.Average=y,y.className='Average',e.serialization.registerClass(y);class m extends c{constructor(e){super(e)}mergeFunction(r){return(0,e.tidy)(()=>{let e=r[0];for(let n=1;n<r.length;++n)e=t.maximum(e,r[n]);return e})}}_e.Maximum=m,m.className='Maximum',e.serialization.registerClass(m);class A extends c{constructor(e){super(e)}mergeFunction(r){return(0,e.tidy)(()=>{let e=r[0];for(let n=1;n<r.length;++n)e=t.minimum(e,r[n]);return e})}}_e.Minimum=A,A.className='Minimum',e.serialization.registerClass(A);class w extends c{constructor(e){super(e),this.DEFAULT_AXIS=-1,null==e&&(e={}),this.axis=null==e.axis?this.DEFAULT_AXIS:e.axis,this.supportsMasking=!0,this.reshapeRequired=!1}build(t){if(!Array.isArray(t)||!Array.isArray(t[0])||1===t.length)throw new s.ValueError("A `Concatenate` layer should be called on a list of at least 2 inputs");let r=!0;for(const e of t)if(null!=e){r=!1;break}if(r)return;const n=[];for(let r=0;r<t.length;++r){const s=t[r].slice();s.splice(this.axis,1);let l=!1;for(const t of n)if(e.util.arraysEqual(t,s)){l=!0;break}l||n.push(s)}if(n.length>1)throw new s.ValueError("A `Concatenate` layer requires inputs with matching shapes except for the concat axis. Got input shapes: "+JSON.stringify(t))}mergeFunction(t){return(0,e.tidy)(()=>r.concatenate(t,this.axis))}computeOutputShape(e){if(!Array.isArray(e)||!Array.isArray(e[0]))throw new s.ValueError('A `Concatenate` layer should be called on a list of inputs.');const t=e,r=t[0].slice(),n=this.axis<0?r.length+this.axis:this.axis;for(const e of t.slice(1)){if(null==r[n]||null==e[n]){r[n]=null;break}r[n]+=e[n]}return r}computeMask(e,r){if(null==r)return null;if(!Array.isArray(r))throw new s.ValueError('`mask` should be an array for Concatenate');if(!Array.isArray(e))throw new s.ValueError('`inputs` should be an array for Concatenate');if(r.length!==e.length)throw new s.ValueError(`Mismatch in the length of mask (${r.length}) and the legnth of inputs (${e.length})`);return t.tidy(()=>{let n=!0;if(r.forEach(e=>{null==e||(n=!1)}),n)return null;const s=[];for(let n=0;n<e.length;++n)null==r[n]?s.push(t.cast(t.onesLike(e[n]),'bool')):r[n].rank<e[n].rank?s.push(t.expandDims(r[n],-1)):s.push(r[n]);const l=t.concat(s,this.axis);return t.all(l,-1,!1)})}getConfig(){const e={axis:this.axis},t=super.getConfig();return Object.assign(e,t),e}}function x(e,t){for(;e<0;)e+=t;return e}function b(e,r,n){if(e.shape.length>3||r.shape.length>3)throw new s.NotImplementedError('batchDot is not implemented for tensors of 4D or higher rank yet');if(t.util.assert(e.shape.length>=2,()=>`batchDot requires the rank of x to be >= 2, but got ${e.shape.length}`),t.util.assert(e.shape.length>=2,()=>`batchDot requires the rank of y to be >= 2, but got ${r.shape.length}`),'number'==typeof n&&(n=[n,n]),'complex64'===e.dtype||'complex64'===r.dtype)throw new s.NotImplementedError('batchDot is not implemented for complex64-type Tensors yet.');const l=e.shape.length,i=r.shape.length;null==n&&(n=[l-1,i-2]);const o=n;return t.tidy(()=>{let n,s;if(l>i){n=l-i;const e=[];for(let t=0;t<n;++t)e.push(1);r=t.reshape(r,r.shape.concat(e))}else if(i>l){n=i-l;const r=[];for(let e=0;e<n;++e)r.push(1);e=t.reshape(e,e.shape.concat(r))}else n=0;if(2===e.shape.length&&2===r.shape.length)s=o[0]===o[1]?t.sum(t.mul(e,r),o[0]):t.sum(t.mul(t.transpose(e,[1,0]),r),o[1]);else{const n=o[0]!==e.shape.length-1,l=o[1]===r.shape.length-1;s=t.matMul(e,r,n,l)}if(n>0){let e;e=l>i?l+i-3:l-1;const r=[];for(let t=e;t<e+n;++t)r.push(t);s=t.squeeze(s,r)}return 1===s.shape.length&&(s=t.expandDims(s,1)),s})}_e.Concatenate=w,w.className='Concatenate',e.serialization.registerClass(w);class k extends c{constructor(e){super(e),this.axes=e.axes,this.normalize=null!=e.normalize&&e.normalize,this.supportsMasking=!0,this.reshapeRequired=!1}build(e){t.util.assert(Array.isArray(e)&&2===e.length&&Array.isArray(e[0])&&Array.isArray(e[1]),()=>'A `Dot` layer should be called on a list of exactly 2 inputs.');const r=e[0],n=e[1];if(r.length>3||n.length>3)throw new s.NotImplementedError('Dot layer does not support tensors of 4D or higher rank yet.');const l=this.interpretAxes(r,n);if(r[l[0]]!==n[l[1]])throw new s.ValueError(`Dimension incompatibility: ${r[l[0]]} !== ${n[l[1]]}`)}mergeFunction(e){if(2!==e.length)throw new s.ValueError(`A \`Dot\` layer must be called on exactly 2 inputs, but received ${e.length} input(s).`);let t,r=e[0],n=e[1];return t=Array.isArray(this.axes)?this.axes.map((t,r)=>x(t,e[r].shape.length)):[x(this.axes,r.shape.length),x(this.axes,n.shape.length)],this.normalize&&(r=(0,l.l2Normalize)(r,t[0]),n=(0,l.l2Normalize)(n,t[1])),b(r,n,t)}interpretAxes(e,t){let r;return r=Array.isArray(this.axes)?this.axes:[x(this.axes,e.length),x(this.axes,t.length)],r}computeOutputShape(e){t.util.assert(Array.isArray(e)&&2===e.length&&Array.isArray(e[0])&&Array.isArray(e[1]),()=>'A `Dot` layer should be called on a list of exactly 2 inputs.');const r=e[0].slice(),n=e[1].slice();if(r.length>3||n.length>3)throw new s.NotImplementedError('Dot layer does not support tensors of 4D or higher rank yet.');const l=this.interpretAxes(r,n);r.splice(l[0],1),n.splice(l[1],1),n.splice(0,1);const i=r.concat(n);return 1===i.length&&i.push(1),i}computeMask(e,t){return null}getConfig(){const e={axes:this.axes,normalize:this.normalize},t=super.getConfig();return Object.assign(e,t),e}}_e.Dot=k,k.className='Dot',e.serialization.registerClass(k)},2219,[1158,2181,2177,2172,2197,2174,2182,2185]);
__d(function(g,_r,_i,_a,m,_e,d){Object.defineProperty(_e,"__esModule",{value:!0}),_e.GaussianNoise=_e.GaussianDropout=_e.AlphaDropout=void 0;var t=_r(d[0]),e=(function(t,e){if("function"==typeof WeakMap)var s=new WeakMap,r=new WeakMap;return(function(t,e){if(!e&&t&&t.__esModule)return t;var a,n,i={__proto__:null,default:t};if(null===t||"object"!=typeof t&&"function"!=typeof t)return i;if(a=e?r:s){if(a.has(t))return a.get(t);a.set(t,i)}for(const e in t)"default"!==e&&{}.hasOwnProperty.call(t,e)&&((n=(a=Object.defineProperty)&&Object.getOwnPropertyDescriptor(t,e))&&(n.get||n.set)?a(i,e,n):i[e]=t[e]);return i})(t,e)}
/**
   * @license
   * Copyright 2018 Google LLC
   *
   * Use of this source code is governed by an MIT-style
   * license that can be found in the LICENSE file or at
   * https://opensource.org/licenses/MIT.
   * =============================================================================
   */)(_r(d[1])),s=_r(d[2]),r=_r(d[3]);class a extends s.Layer{constructor(t){super(t),this.supportsMasking=!0,this.stddev=t.stddev}computeOutputShape(t){return t}getConfig(){const t=super.getConfig(),e={stddev:this.stddev};return Object.assign(e,t),e}call(s,a){return(0,t.tidy)(()=>{this.invokeCallHook(s,a);const n=(0,r.getExactlyOneTensor)(s);return e.inTrainPhase(()=>(0,t.add)(e.randomNormal(n.shape,0,this.stddev),n),()=>n,a.training||!1)})}}_e.GaussianNoise=a,a.className='GaussianNoise',t.serialization.registerClass(a);class n extends s.Layer{constructor(t){super(t),this.supportsMasking=!0,this.rate=t.rate}computeOutputShape(t){return t}getConfig(){const t=super.getConfig(),e={rate:this.rate};return Object.assign(e,t),e}call(s,a){return(0,t.tidy)(()=>{this.invokeCallHook(s,a);const n=(0,r.getExactlyOneTensor)(s);if(this.rate>0&&this.rate<1){const s=()=>{const s=Math.sqrt(this.rate/(1-this.rate));return(0,t.mul)(n,e.randomNormal(n.shape,1,s))};return e.inTrainPhase(s,()=>n,a.training||!1)}return n})}}_e.GaussianDropout=n,n.className='GaussianDropout',t.serialization.registerClass(n);class i extends s.Layer{constructor(t){super(t),this.supportsMasking=!0,this.rate=t.rate,this.noiseShape=t.noiseShape}_getNoiseShape(t){return this.noiseShape||(0,r.getExactlyOneTensor)(t).shape}computeOutputShape(t){return t}getConfig(){const t=super.getConfig(),e={rate:this.rate};return Object.assign(e,t),e}call(s,a){return(0,t.tidy)(()=>{if(this.rate<1&&this.rate>0){const n=this._getNoiseShape(s),i=()=>{const a=(0,r.getExactlyOneTensor)(s),i=-1.7580993408473766;let o=(0,t.greaterEqual)((0,t.randomUniform)(n),this.rate);o=e.cast(o,'float32');const u=((1-this.rate)*(1+3.09091329228798*this.rate))**-.5,l=-u*i*this.rate,p=(0,t.add)((0,t.mul)(a,o),(0,t.mul)((0,t.add)(o,-1),i));return(0,t.add)((0,t.mul)(p,u),l)};return e.inTrainPhase(i,()=>(0,r.getExactlyOneTensor)(s),a.training||!1)}return s})}}_e.AlphaDropout=i,i.className='AlphaDropout',t.serialization.registerClass(i)},2220,[1158,2181,2177,2185]);
__d(function(g,_r,_i,a,m,_e,d){Object.defineProperty(_e,"__esModule",{value:!0}),_e.LayerNormalization=_e.BatchNormalization=void 0,_e.batchNormalization=z,_e.normalizeBatchInTraining=f;var i=c(_r(d[0])),e=i,t=_r(d[1]),n=_r(d[2]),r=_r(d[3]),s=_r(d[4]),l=_r(d[5]),o=c(_r(d[6])),h=c(_r(d[7])),u=_r(d[8]);function c(i,e){if("function"==typeof WeakMap)var t=new WeakMap,n=new WeakMap;return(c=function(i,e){if(!e&&i&&i.__esModule)return i;var r,s,l={__proto__:null,default:i};if(null===i||"object"!=typeof i&&"function"!=typeof i)return l;if(r=e?n:t){if(r.has(i))return r.get(i);r.set(i,l)}for(const e in i)"default"!==e&&{}.hasOwnProperty.call(i,e)&&((s=(r=Object.defineProperty)&&Object.getOwnPropertyDescriptor(i,e))&&(s.get||s.set)?r(l,e,s):l[e]=i[e]);return l})(i,e)}
/**
   * @license
   * Copyright 2018 Google LLC
   *
   * Use of this source code is governed by an MIT-style
   * license that can be found in the LICENSE file or at
   * https://opensource.org/licenses/MIT.
   * =============================================================================
   */function z(i,t,n,s,l,o=.001){let h;if(2===i.rank)h=e.batchNorm2d(i,t,n,s,l,o);else if(3===i.rank)h=e.batchNorm3d(i,t,n,s,l,o);else{if(4!==i.rank)throw new r.NotImplementedError(`batchNormalization is not implemented for array of rank ${i.rank} yet`);h=e.batchNorm4d(i,t,n,s,l,o)}return h}function p(t,n,r,s,l=.001){return(0,i.tidy)(()=>{const i=e.moments(t,s),o=i.mean,h=i.variance;return[z(t,o,h,r,n,l),o,h]})}function b(t,n,r,s,l=.001){return(0,i.tidy)(()=>{const o=e.moments(t,s),u=o.mean,c=o.variance,p=[];for(const i of h.range(0,t.rank))-1!==s.indexOf(i)?p.push(1):p.push(t.shape[i]);const b=(0,i.reshape)(u,p),f=(0,i.reshape)(c,p),x=null==n?null:(0,i.reshape)(n,p),I=null==r?null:(0,i.reshape)(r,p);return[z(t,b,f,I,x,l),u,c]})}function f(e,t,n,r,s=.001){return i.util.arraysEqual(r.slice().sort(),h.range(0,e.rank-1))?p(e,t,n,r,s):b(e,t,n,r,s)}class x extends n.Layer{constructor(i){null==i&&(i={}),super(i),this.supportsMasking=!0,this.axis=null==i.axis?-1:i.axis,this.momentum=null==i.momentum?.99:i.momentum,this.epsilon=null==i.epsilon?.001:i.epsilon,this.center=null==i.center||i.center,this.scale=null==i.scale||i.scale,this.betaInitializer=(0,s.getInitializer)(i.betaInitializer||'zeros'),this.gammaInitializer=(0,s.getInitializer)(i.gammaInitializer||'ones'),this.movingMeanInitializer=(0,s.getInitializer)(i.movingMeanInitializer||'zeros'),this.movingVarianceInitializer=(0,s.getInitializer)(i.movingVarianceInitializer||'ones'),this.betaConstraint=(0,t.getConstraint)(i.betaConstraint),this.gammaConstraint=(0,t.getConstraint)(i.gammaConstraint),this.betaRegularizer=(0,l.getRegularizer)(i.betaRegularizer),this.gammaRegularizer=(0,l.getRegularizer)(i.gammaRegularizer)}build(i){i=(0,u.getExactlyOneShape)(i);const e=this.axis>=0?this.axis:this.axis+i.length,t=i[e];if(null==t)throw new r.ValueError(`Axis ${e} of input tensor should have a defined dimension but the layer received an input with shape ${JSON.stringify(i)}.`);this.inputSpec=[new n.InputSpec({ndim:i.length,axes:{[e]:t}})];const s=[t];this.scale&&(this.gamma=this.addWeight('gamma',s,null,this.gammaInitializer,this.gammaRegularizer,!0,this.gammaConstraint)),this.center&&(this.beta=this.addWeight('beta',s,null,this.betaInitializer,this.betaRegularizer,!0,this.betaConstraint)),this.movingMean=this.addWeight('moving_mean',s,null,this.movingMeanInitializer,null,!1),this.movingVariance=this.addWeight('moving_variance',s,null,this.movingVarianceInitializer,null,!1),this.built=!0}call(t,n){return(0,i.tidy)(()=>{const r=null!=n.training&&n.training,s=(0,u.getExactlyOneTensor)(t),l=s.shape,c=l.length,p=h.range(0,c),b=this.axis>=0?this.axis:this.axis+c;p.splice(b,1);const x=o.pyListRepeat(1,c);x[b]=l[b];const I=p.slice();I.sort();const y=!i.util.arraysEqual(I,h.range(0,c).slice(0,c-1));if(!r)return(()=>{if(y){const e=(0,i.reshape)(this.movingMean.read(),x),t=(0,i.reshape)(this.movingVariance.read(),x),n=this.center?(0,i.reshape)(this.beta.read(),x):null,r=this.scale?(0,i.reshape)(this.gamma.read(),x):null;return z(s,e,t,n,r,this.epsilon)}return z(s,this.movingMean.read(),this.movingVariance.read(),null==this.beta?null:this.beta.read(),null==this.gamma?null:this.gamma.read(),this.epsilon)})();const[v,R,w]=f(s,this.gamma.read(),this.beta.read(),p,this.epsilon),C=(i,t,n)=>{e.tidy(()=>{const r=1-n,s=i.read(),l=e.mul(e.sub(s,t),r);i.write(e.sub(s,l))})};return(()=>{C(this.movingMean,R,this.momentum),C(this.movingVariance,w,this.momentum)})(),v})}getConfig(){const i={axis:this.axis,momentum:this.momentum,epsilon:this.epsilon,center:this.center,scale:this.scale,betaInitializer:(0,s.serializeInitializer)(this.betaInitializer),gammaInitializer:(0,s.serializeInitializer)(this.gammaInitializer),movingMeanInitializer:(0,s.serializeInitializer)(this.movingMeanInitializer),movingVarianceInitializer:(0,s.serializeInitializer)(this.movingVarianceInitializer),betaRegularizer:(0,l.serializeRegularizer)(this.betaRegularizer),gammaRegularizer:(0,l.serializeRegularizer)(this.gammaRegularizer),betaConstraint:(0,t.serializeConstraint)(this.betaConstraint),gammaConstraint:(0,t.serializeConstraint)(this.gammaConstraint)},e=super.getConfig();return Object.assign(i,e),i}}_e.BatchNormalization=x,x.className='BatchNormalization',i.serialization.registerClass(x);class I extends n.Layer{constructor(i){if(null==i&&(i={}),super(i),this.axis=null==i.axis?-1:i.axis,'number'==typeof this.axis){if(!Number.isInteger(this.axis))throw new Error(`Expected axis to be an integer, but received ${this.axis}`)}else{if(!Array.isArray(this.axis))throw new Error(`Expected axis to be an integer or an array of integers, but received ${JSON.stringify(this.axis)}`);for(const i of this.axis)if(!Number.isInteger(i))throw new Error(`Expected axis to be an array of integers, but received ${JSON.stringify(this.axis)}`)}this.epsilon=null==i.epsilon?.001:i.epsilon,this.center=null==i.center||i.center,this.scale=null==i.scale||i.scale,this.betaInitializer=(0,s.getInitializer)(i.betaInitializer||'zeros'),this.gammaInitializer=(0,s.getInitializer)(i.gammaInitializer||'ones'),this.betaRegularizer=(0,l.getRegularizer)(i.betaRegularizer),this.gammaRegularizer=(0,l.getRegularizer)(i.gammaRegularizer),this.supportsMasking=!0}build(i){const e=(i=(0,u.getExactlyOneShape)(i)).length;'number'==typeof this.axis&&(this.axis=[this.axis]);for(let i=0;i<this.axis.length;++i)this.axis[i]<0&&(this.axis[i]+=e);for(const i of this.axis)if(i<0||i>=e)throw new Error(`Invalid axis: ${i}`);if(this.axis.length!==o.unique(this.axis).length)throw new Error(`Found duplicate axes in: ${this.axis}`);const t=this.axis.map(e=>i[e]),n=!0;this.scale?this.gamma=this.addWeight('gamma',t,'float32',this.gammaInitializer,this.gammaRegularizer,n):this.gamma=null,this.center?this.beta=this.addWeight('beta',t,'float32',this.betaInitializer,this.betaRegularizer,n):this.beta=null,this.built=!0}call(t,n){const r=(0,u.getExactlyOneTensor)(t),s=r.shape,l=s.length;return(0,i.tidy)(()=>{let{mean:t,variance:n}=(0,i.moments)(r,this.axis,!0);const h=o.pyListRepeat(1,l);for(const i of this.axis)h[i]=s[i];const u=i=>null!=i&&i.shape.length!==l?e.reshape(i,h):i;let c=this.scale?u(this.gamma.read()):null,p=this.center?u(this.beta.read()):null;const b=[],f=[];for(let i=0;i<l;++i)-1!==this.axis.indexOf(i)?(b.push(s[i]),f.push(1)):(b.push(1),f.push(s[i]));return t=e.tile(t,b),n=e.tile(n,b),null!=c&&(c=e.tile(c,f)),null!=p&&(p=e.tile(p,f)),z(r,t,n,p,c,this.epsilon)})}getConfig(){const i={axis:this.axis,epsilon:this.epsilon,center:this.center,scale:this.scale,betaInitializer:(0,s.serializeInitializer)(this.betaInitializer),gammaInitializer:(0,s.serializeInitializer)(this.gammaInitializer),betaRegularizer:(0,l.serializeRegularizer)(this.betaRegularizer),gammaRegularizer:(0,l.serializeRegularizer)(this.gammaRegularizer)},e=super.getConfig();return Object.assign(i,e),i}}_e.LayerNormalization=I,I.className='LayerNormalization',i.serialization.registerClass(I)},2221,[1158,2189,2177,2172,2180,2211,2174,2182,2185]);
__d(function(g,_r,_i,a,m,_e,d){Object.defineProperty(_e,"__esModule",{value:!0}),_e.ZeroPadding2D=void 0,_e.spatial2dPadding=o,_e.temporalPadding=
/**
   * @license
   * Copyright 2018 Google LLC
   *
   * Use of this source code is governed by an MIT-style
   * license that can be found in the LICENSE file or at
   * https://opensource.org/licenses/MIT.
   * =============================================================================
   */
function(n,r){return(0,e.tidy)(()=>{if(3!==n.rank)throw new i.ValueError(`temporalPadding expects input tensor to be 3-D, but received a ${n.rank}-D tensor.`);if(null==r&&(r=[1,1]),2!==r.length)throw new i.ValueError(`temporalPadding expects input padding pattern to be a length-2 array, but received a length-${r.length} array.`);const e=[[0,0],r,[0,0]];return t.pad(n,e)})};var e=(function(e,t){if("function"==typeof WeakMap)var n=new WeakMap,r=new WeakMap;return(function(e,t){if(!t&&e&&e.__esModule)return e;var i,l,o={__proto__:null,default:e};if(null===e||"object"!=typeof e&&"function"!=typeof e)return o;if(i=t?r:n){if(i.has(e))return i.get(e);i.set(e,o)}for(const t in e)"default"!==t&&{}.hasOwnProperty.call(e,t)&&((l=(i=Object.defineProperty)&&Object.getOwnPropertyDescriptor(e,t))&&(l.get||l.set)?i(o,t,l):o[t]=e[t]);return o})(e,t)})(_r(d[0])),t=e,n=_r(d[1]),r=_r(d[2]),i=_r(d[3]),l=_r(d[4]);function o(r,l,o){return(0,e.tidy)(()=>{if(4!==r.rank)throw new i.ValueError(`temporalPadding expects input tensor to be 4-D, but received a ${r.rank}-D tensor.`);if(null==l&&(l=[[1,1],[1,1]]),2!==l.length||2!==l[0].length||2!==l[1].length)throw new i.ValueError("spatial2dPadding expects `padding` to be an Array of two Arrays, each of which is an Array of two integers.");if(null==o&&(o=(0,n.imageDataFormat)()),'channelsLast'!==o&&'channelsFirst'!==o)throw new i.ValueError(`Unknown data format: ${o}. Supported data formats are 'channelsLast' and 'channelsFirst.`);let e;return e='channelsFirst'===o?[[0,0],[0,0],l[0],l[1]]:[[0,0],l[0],l[1],[0,0]],t.pad(r,e)})}class p extends r.Layer{constructor(e){if(null==e&&(e={}),super(e),this.dataFormat=null==e.dataFormat?(0,n.imageDataFormat)():e.dataFormat,null==e.padding)this.padding=[[1,1],[1,1]];else if('number'==typeof e.padding)this.padding=[[e.padding,e.padding],[e.padding,e.padding]];else{if(e.padding=e.padding,2!==e.padding.length)throw new i.ValueError(`ZeroPadding2D expects padding to be a length-2 array, but received a length-${e.padding.length} array.`);let t,n;if('number'==typeof e.padding[0])t=[e.padding[0],e.padding[0]],n=[e.padding[1],e.padding[1]];else{if(e.padding=e.padding,2!==e.padding[0].length)throw new i.ValueError(`ZeroPadding2D expects height padding to be a length-2 array, but received a length-${e.padding[0].length} array.`);if(t=e.padding[0],2!==e.padding[1].length)throw new i.ValueError(`ZeroPadding2D expects width padding to be a length-2 array, but received a length-${e.padding[1].length} array.`);n=e.padding[1]}this.padding=[t,n]}this.inputSpec=[new r.InputSpec({ndim:4})]}computeOutputShape(e){let t,n;return e=(0,l.getExactlyOneShape)(e),'channelsFirst'===this.dataFormat?(t=null!=e[2]&&e[2]>=0?e[2]+this.padding[0][0]+this.padding[0][1]:null,n=null!=e[3]&&e[3]>=0?e[3]+this.padding[1][0]+this.padding[1][1]:null,[e[0],e[1],t,n]):(t=null!=e[1]&&e[1]>=0?e[1]+this.padding[0][0]+this.padding[0][1]:null,n=null!=e[2]&&e[2]>=0?e[2]+this.padding[1][0]+this.padding[1][1]:null,[e[0],t,n,e[3]])}call(t,n){return(0,e.tidy)(()=>o((0,l.getExactlyOneTensor)(t),this.padding,this.dataFormat))}getConfig(){const e={padding:this.padding,dataFormat:this.dataFormat},t=super.getConfig();return Object.assign(e,t),e}}_e.ZeroPadding2D=p,p.className='ZeroPadding2D',e.serialization.registerClass(p)},2222,[1158,2183,2177,2172,2185]);
__d(function(g,_r,_i,a,m,_e,d){Object.defineProperty(_e,"__esModule",{value:!0}),_e.Pooling3D=_e.Pooling2D=_e.Pooling1D=_e.MaxPooling3D=_e.MaxPooling2D=_e.MaxPooling1D=_e.GlobalPooling2D=_e.GlobalPooling1D=_e.GlobalMaxPooling2D=_e.GlobalMaxPooling1D=_e.GlobalAveragePooling2D=_e.GlobalAveragePooling1D=_e.AveragePooling3D=_e.AveragePooling2D=_e.AveragePooling1D=void 0,_e.pool2d=S,_e.pool3d=P;var e=u(_r(d[0])),t=e,s=_r(d[1]),i=u(_r(d[2])),o=_r(d[3]),r=_r(d[4]),n=_r(d[5]),l=_r(d[6]),c=_r(d[7]),p=_r(d[8]),h=_r(d[9]);function u(e,t){if("function"==typeof WeakMap)var s=new WeakMap,i=new WeakMap;return(u=function(e,t){if(!t&&e&&e.__esModule)return e;var o,r,n={__proto__:null,default:e};if(null===e||"object"!=typeof e&&"function"!=typeof e)return n;if(o=t?i:s){if(o.has(e))return o.get(e);o.set(e,n)}for(const t in e)"default"!==t&&{}.hasOwnProperty.call(e,t)&&((r=(o=Object.defineProperty)&&Object.getOwnPropertyDescriptor(e,t))&&(r.get||r.set)?o(n,t,r):n[t]=e[t]);return n})(e,t)}
/**
   * @license
   * Copyright 2018 Google LLC
   *
   * Use of this source code is governed by an MIT-style
   * license that can be found in the LICENSE file or at
   * https://opensource.org/licenses/MIT.
   * =============================================================================
   */function S(i,r,n,l,c,p){return(0,e.tidy)(()=>{let e;(0,o.checkDataFormat)(c),(0,o.checkPoolMode)(p),(0,o.checkPaddingMode)(l),null==n&&(n=[1,1]),null==l&&(l='valid'),null==c&&(c=(0,s.imageDataFormat)()),null==p&&(p='max'),i=(0,h.preprocessConv2DInput)(i,c);const u='same'===l?'same':'valid';return e='max'===p?t.maxPool(i,r,n,u):t.avgPool(i,r,n,u),'channelsFirst'===c&&(e=t.transpose(e,[0,3,1,2])),e})}function P(i,r,n,l,c,p){return(0,e.tidy)(()=>{let e;(0,o.checkDataFormat)(c),(0,o.checkPoolMode)(p),(0,o.checkPaddingMode)(l),null==n&&(n=[1,1,1]),null==l&&(l='valid'),null==c&&(c=(0,s.imageDataFormat)()),null==p&&(p='max'),i=(0,h.preprocessConv3DInput)(i,c);const u='same'===l?'same':'valid';return e='max'===p?t.maxPool3d(i,r,n,u):t.avgPool3d(i,r,n,u),'channelsFirst'===c&&(e=t.transpose(e,[0,4,1,2,3])),e})}class z extends r.Layer{constructor(e){if(null==e.poolSize&&(e.poolSize=2),super(e),'number'==typeof e.poolSize)this.poolSize=[e.poolSize];else{if(!Array.isArray(e.poolSize)||1!==e.poolSize.length||'number'!=typeof e.poolSize[0])throw new n.ValueError(`poolSize for 1D convolutional layer must be a number or an Array of a single number, but received ${JSON.stringify(e.poolSize)}`);this.poolSize=e.poolSize}if((0,c.assertPositiveInteger)(this.poolSize,'poolSize'),null==e.strides)this.strides=this.poolSize;else if('number'==typeof e.strides)this.strides=[e.strides];else{if(!Array.isArray(e.strides)||1!==e.strides.length||'number'!=typeof e.strides[0])throw new n.ValueError(`strides for 1D convolutional layer must be a number or an Array of a single number, but received ${JSON.stringify(e.strides)}`);this.strides=e.strides}(0,c.assertPositiveInteger)(this.strides,'strides'),this.padding=null==e.padding?'valid':e.padding,(0,o.checkPaddingMode)(this.padding),this.inputSpec=[new r.InputSpec({ndim:3})]}computeOutputShape(e){e=(0,p.getExactlyOneShape)(e);const t=(0,l.convOutputLength)(e[1],this.poolSize[0],this.padding,this.strides[0]);return[e[0],t,e[2]]}call(s,o){return(0,e.tidy)(()=>{this.invokeCallHook(s,o),s=i.expandDims((0,p.getExactlyOneTensor)(s),2);const e=this.poolingFunction((0,p.getExactlyOneTensor)(s),[this.poolSize[0],1],[this.strides[0],1],this.padding,'channelsLast');return t.squeeze(e,[2])})}getConfig(){const e={poolSize:this.poolSize,padding:this.padding,strides:this.strides},t=super.getConfig();return Object.assign(e,t),e}}_e.Pooling1D=z;class D extends z{constructor(e){super(e)}poolingFunction(e,t,s,i,r){return(0,o.checkDataFormat)(r),(0,o.checkPaddingMode)(i),S(e,t,s,i,r,'max')}}_e.MaxPooling1D=D,D.className='MaxPooling1D',e.serialization.registerClass(D);class F extends z{constructor(e){super(e)}poolingFunction(e,t,s,i,r){return(0,o.checkDataFormat)(r),(0,o.checkPaddingMode)(i),S(e,t,s,i,r,'avg')}}_e.AveragePooling1D=F,F.className='AveragePooling1D',e.serialization.registerClass(F);class y extends r.Layer{constructor(e){if(null==e.poolSize&&(e.poolSize=[2,2]),super(e),this.poolSize=Array.isArray(e.poolSize)?e.poolSize:[e.poolSize,e.poolSize],null==e.strides)this.strides=this.poolSize;else if(Array.isArray(e.strides)){if(2!==e.strides.length)throw new n.ValueError(`If the strides property of a 2D pooling layer is an Array, it is expected to have a length of 2, but received length ${e.strides.length}.`);this.strides=e.strides}else this.strides=[e.strides,e.strides];(0,c.assertPositiveInteger)(this.poolSize,'poolSize'),(0,c.assertPositiveInteger)(this.strides,'strides'),this.padding=null==e.padding?'valid':e.padding,this.dataFormat=null==e.dataFormat?'channelsLast':e.dataFormat,(0,o.checkDataFormat)(this.dataFormat),(0,o.checkPaddingMode)(this.padding),this.inputSpec=[new r.InputSpec({ndim:4})]}computeOutputShape(e){e=(0,p.getExactlyOneShape)(e);let t='channelsFirst'===this.dataFormat?e[2]:e[1],s='channelsFirst'===this.dataFormat?e[3]:e[2];return t=(0,l.convOutputLength)(t,this.poolSize[0],this.padding,this.strides[0]),s=(0,l.convOutputLength)(s,this.poolSize[1],this.padding,this.strides[1]),'channelsFirst'===this.dataFormat?[e[0],e[1],t,s]:[e[0],t,s,e[3]]}call(t,s){return(0,e.tidy)(()=>(this.invokeCallHook(t,s),this.poolingFunction((0,p.getExactlyOneTensor)(t),this.poolSize,this.strides,this.padding,this.dataFormat)))}getConfig(){const e={poolSize:this.poolSize,padding:this.padding,strides:this.strides,dataFormat:this.dataFormat},t=super.getConfig();return Object.assign(e,t),e}}_e.Pooling2D=y;class v extends y{constructor(e){super(e)}poolingFunction(e,t,s,i,r){return(0,o.checkDataFormat)(r),(0,o.checkPaddingMode)(i),S(e,t,s,i,r,'max')}}_e.MaxPooling2D=v,v.className='MaxPooling2D',e.serialization.registerClass(v);class x extends y{constructor(e){super(e)}poolingFunction(e,t,s,i,r){return(0,o.checkDataFormat)(r),(0,o.checkPaddingMode)(i),S(e,t,s,i,r,'avg')}}_e.AveragePooling2D=x,x.className='AveragePooling2D',e.serialization.registerClass(x);class f extends r.Layer{constructor(e){if(null==e.poolSize&&(e.poolSize=[2,2,2]),super(e),this.poolSize=Array.isArray(e.poolSize)?e.poolSize:[e.poolSize,e.poolSize,e.poolSize],null==e.strides)this.strides=this.poolSize;else if(Array.isArray(e.strides)){if(3!==e.strides.length)throw new n.ValueError(`If the strides property of a 3D pooling layer is an Array, it is expected to have a length of 3, but received length ${e.strides.length}.`);this.strides=e.strides}else this.strides=[e.strides,e.strides,e.strides];(0,c.assertPositiveInteger)(this.poolSize,'poolSize'),(0,c.assertPositiveInteger)(this.strides,'strides'),this.padding=null==e.padding?'valid':e.padding,this.dataFormat=null==e.dataFormat?'channelsLast':e.dataFormat,(0,o.checkDataFormat)(this.dataFormat),(0,o.checkPaddingMode)(this.padding),this.inputSpec=[new r.InputSpec({ndim:5})]}computeOutputShape(e){e=(0,p.getExactlyOneShape)(e);let t='channelsFirst'===this.dataFormat?e[2]:e[1],s='channelsFirst'===this.dataFormat?e[3]:e[2],i='channelsFirst'===this.dataFormat?e[4]:e[3];return t=(0,l.convOutputLength)(t,this.poolSize[0],this.padding,this.strides[0]),s=(0,l.convOutputLength)(s,this.poolSize[1],this.padding,this.strides[1]),i=(0,l.convOutputLength)(i,this.poolSize[2],this.padding,this.strides[2]),'channelsFirst'===this.dataFormat?[e[0],e[1],t,s,i]:[e[0],t,s,i,e[4]]}call(t,s){return(0,e.tidy)(()=>(this.invokeCallHook(t,s),this.poolingFunction((0,p.getExactlyOneTensor)(t),this.poolSize,this.strides,this.padding,this.dataFormat)))}getConfig(){const e={poolSize:this.poolSize,padding:this.padding,strides:this.strides,dataFormat:this.dataFormat},t=super.getConfig();return Object.assign(e,t),e}}_e.Pooling3D=f;class b extends f{constructor(e){super(e)}poolingFunction(e,t,s,i,r){return(0,o.checkDataFormat)(r),(0,o.checkPaddingMode)(i),P(e,t,s,i,r,'max')}}_e.MaxPooling3D=b,b.className='MaxPooling3D',e.serialization.registerClass(b);class k extends f{constructor(e){super(e)}poolingFunction(e,t,s,i,r){return(0,o.checkDataFormat)(r),(0,o.checkPaddingMode)(i),P(e,t,s,i,r,'avg')}}_e.AveragePooling3D=k,k.className='AveragePooling3D',e.serialization.registerClass(k);class M extends r.Layer{constructor(e){super(e),this.inputSpec=[new r.InputSpec({ndim:3})]}computeOutputShape(e){return[e[0],e[2]]}call(e,t){throw new n.NotImplementedError}}_e.GlobalPooling1D=M;class O extends M{constructor(e){super(e||{})}call(s,i){return(0,e.tidy)(()=>{const e=(0,p.getExactlyOneTensor)(s);return t.mean(e,1)})}}_e.GlobalAveragePooling1D=O,O.className='GlobalAveragePooling1D',e.serialization.registerClass(O);class A extends M{constructor(e){super(e||{})}call(s,i){return(0,e.tidy)(()=>{const e=(0,p.getExactlyOneTensor)(s);return t.max(e,1)})}}_e.GlobalMaxPooling1D=A,A.className='GlobalMaxPooling1D',e.serialization.registerClass(A);class C extends r.Layer{constructor(e){super(e),this.dataFormat=null==e.dataFormat?'channelsLast':e.dataFormat,(0,o.checkDataFormat)(this.dataFormat),this.inputSpec=[new r.InputSpec({ndim:4})]}computeOutputShape(e){return'channelsLast'===this.dataFormat?[e[0],e[3]]:[e[0],e[1]]}call(e,t){throw new n.NotImplementedError}getConfig(){const e={dataFormat:this.dataFormat},t=super.getConfig();return Object.assign(e,t),e}}_e.GlobalPooling2D=C;class w extends C{call(s,i){return(0,e.tidy)(()=>{const e=(0,p.getExactlyOneTensor)(s);return'channelsLast'===this.dataFormat?t.mean(e,[1,2]):t.mean(e,[2,3])})}}_e.GlobalAveragePooling2D=w,w.className='GlobalAveragePooling2D',e.serialization.registerClass(w);class L extends C{call(s,i){return(0,e.tidy)(()=>{const e=(0,p.getExactlyOneTensor)(s);return'channelsLast'===this.dataFormat?t.max(e,[1,2]):t.max(e,[2,3])})}}_e.GlobalMaxPooling2D=L,L.className='GlobalMaxPooling2D',e.serialization.registerClass(L)},2223,[1158,2183,2181,2178,2177,2172,2213,2174,2185,2212]);
__d(function(g,_r,_i,a,m,_e,d){Object.defineProperty(_e,"__esModule",{value:!0}),_e.Wrapper=_e.TimeDistributed=_e.Bidirectional=void 0,_e.checkBidirectionalMergeMode=b;var e=y(_r(d[0])),t=e,r=y(_r(d[1])),i=_r(d[2]),s=_r(d[3]),n=_r(d[4]),l=_r(d[5]),o=y(_r(d[6])),c=_r(d[7]),u=_r(d[8]),h=_r(d[9]);function y(e,t){if("function"==typeof WeakMap)var r=new WeakMap,i=new WeakMap;return(y=function(e,t){if(!t&&e&&e.__esModule)return e;var s,n,l={__proto__:null,default:e};if(null===e||"object"!=typeof e&&"function"!=typeof e)return l;if(s=t?i:r){if(s.has(e))return s.get(e);s.set(e,l)}for(const t in e)"default"!==t&&{}.hasOwnProperty.call(e,t)&&((n=(s=Object.defineProperty)&&Object.getOwnPropertyDescriptor(e,t))&&(n.get||n.set)?s(l,t,n):l[t]=e[t]);return l})(e,t)}
/**
   * @license
   * Copyright 2018 Google LLC
   *
   * Use of this source code is governed by an MIT-style
   * license that can be found in the LICENSE file or at
   * https://opensource.org/licenses/MIT.
   * =============================================================================
   */class p extends s.Layer{constructor(e){super(e),this.layer=e.layer}build(e){this.built=!0}get trainable(){return null!=this.layer&&this.layer.trainable}set trainable(e){null!=this.layer&&(this.layer.trainable=e)}get trainableWeights(){return this.layer.trainableWeights}get nonTrainableWeights(){return this.layer.nonTrainableWeights}get updates(){return this.layer._updates}get losses(){return this.layer.losses}getWeights(){return this.layer.getWeights()}setWeights(e){this.layer.setWeights(e)}getConfig(){const e={layer:{className:this.layer.getClassName(),config:this.layer.getConfig()}},t=super.getConfig();return Object.assign(e,t),e}setFastWeightInitDuringBuild(e){super.setFastWeightInitDuringBuild(e),null!=this.layer&&this.layer.setFastWeightInitDuringBuild(e)}static fromConfig(e,t,r={}){const i=t.layer,s=(0,h.deserialize)(i,r);delete t.layer;const n={layer:s};return Object.assign(n,t),new e(n)}}_e.Wrapper=p;class f extends p{constructor(e){super(e),this.supportsMasking=!0}build(e){if((e=(0,c.getExactlyOneShape)(e)).length<3)throw new n.ValueError(`TimeDistributed layer expects an input shape >= 3D, but received input shape ${JSON.stringify(e)}`);this.inputSpec=[{shape:e}];const t=[e[0]].concat(e.slice(2));this.layer.built||(this.layer.build(t),this.layer.built=!0),super.build(e)}computeOutputShape(e){const t=[(e=(0,c.getExactlyOneShape)(e))[0]].concat(e.slice(2)),r=this.layer.computeOutputShape(t),i=e[1];return[r[0],i].concat(r.slice(1))}call(t,r){return(0,e.tidy)(()=>{t=(0,c.getExactlyOneTensor)(t);return(0,u.rnn)((e,t)=>[(0,c.getExactlyOneTensor)(this.layer.call(e,r)),[]],t,[],!1,null,null,!1,!0)[1]})}}function b(e){o.checkStringTypeUnionValue(l.VALID_BIDIRECTIONAL_MERGE_MODES,'BidirectionalMergeMode',e)}_e.TimeDistributed=f,f.className='TimeDistributed',e.serialization.registerClass(f);class w extends p{constructor(e){super(e);const t=e.layer.getConfig(),r={};r.className=e.layer.getClassName(),r.config=t,this.forwardLayer=(0,h.deserialize)(r),t.goBackwards=!0!==t.goBackwards;const i={};if(i.className=e.layer.getClassName(),i.config=t,this.backwardLayer=(0,h.deserialize)(i),this.forwardLayer.name='forward_'+this.forwardLayer.name,this.backwardLayer.name='backward_'+this.backwardLayer.name,this.mergeMode=void 0===e.mergeMode?"concat":e.mergeMode,b(this.mergeMode),e.weights)throw new n.NotImplementedError('weights support is not implemented for Bidirectional layer yet.');this._stateful=e.layer.stateful,this.returnSequences=e.layer.returnSequences,this.returnState=e.layer.returnState,this.supportsMasking=!0,this._trainable=!0,this.inputSpec=e.layer.inputSpec,this.numConstants=null}get trainable(){return this._trainable}set trainable(e){this._trainable=e,null!=this.forwardLayer&&(this.forwardLayer.trainable=e),null!=this.backwardLayer&&(this.backwardLayer.trainable=e)}getWeights(){return this.forwardLayer.getWeights().concat(this.backwardLayer.getWeights())}setWeights(e){const t=e.length,r=Math.floor(t/2);this.forwardLayer.setWeights(e.slice(0,r)),this.backwardLayer.setWeights(e.slice(r))}computeOutputShape(e){let t,r,i,s=this.forwardLayer.computeOutputShape(e);return Array.isArray(s)&&Array.isArray(s[0])||(s=[s]),this.returnState?(i=s.slice(1),t=s[0]):t=s[0],'concat'===this.mergeMode?(t[t.length-1]*=2,r=[t]):r=null==this.mergeMode?[t,t.slice()]:[t],this.returnState?null==this.mergeMode?r.concat(i).concat(i.slice()):[t].concat(i).concat(i.slice()):o.singletonOrArray(r)}apply(e,t){let r=null==t?null:t.initialState,i=null==t?null:t.constants;null==t&&(t={});const l=(0,u.standardizeArgs)(e,r,i,this.numConstants);if(e=l.inputs,r=l.initialState,i=l.constants,Array.isArray(e)&&(r=e.slice(1),e=e[0]),(null==r||0===r.length)&&null==i)return super.apply(e,t);const o=[],c=[];if(null!=r){const e=r.length;if(e%2>0)throw new n.ValueError("When passing `initialState` to a Bidrectional RNN, the state should be an Array containing the states of the underlying RNNs.");t.initialState=r,o.push(...r);const i=r.map(e=>new s.InputSpec({shape:e.shape}));this.forwardLayer.stateSpec=i.slice(0,e/2),this.backwardLayer.stateSpec=i.slice(e/2),c.push(...i)}if(null!=i)throw new n.NotImplementedError("Support for constants in Bidirectional layers is not implemented yet.");const h=o[0]instanceof s.SymbolicTensor;for(const e of o)if(e instanceof s.SymbolicTensor!==h)throw new n.ValueError("The initial state of a Bidirectional layer cannot be specified as a mix of symbolic and non-symbolic tensors");if(h){const r=[e].concat(o),i=this.inputSpec.concat(c),s=this.inputSpec;this.inputSpec=i;const n=super.apply(r,t);return this.inputSpec=s,n}return super.apply(e,t)}call(i,s){return(0,e.tidy)(()=>{const e=s.initialState;let n,l,o,c;if(null==e)n=this.forwardLayer.call(i,s),l=this.backwardLayer.call(i,s);else{const t=e.slice(0,e.length/2),r=e.slice(e.length/2);n=this.forwardLayer.call(i,Object.assign(s,{initialState:t})),l=this.backwardLayer.call(i,Object.assign(s,{initialState:r}))}return this.returnState&&(Array.isArray(n)&&(o=n.slice(1).concat(l.slice(1))),n=n[0],l=l[0]),this.returnSequences&&(l=t.reverse(l,1)),'concat'===this.mergeMode?c=r.concatenate([n,l]):'sum'===this.mergeMode?c=t.add(n,l):'ave'===this.mergeMode?c=t.mul(.5,t.add(n,l)):'mul'===this.mergeMode?c=t.mul(n,l):null==this.mergeMode&&(c=[n,l]),this.returnState?null==this.mergeMode?c.concat(o):[c].concat(o):c})}resetStates(e){this.forwardLayer.resetStates(),this.backwardLayer.resetStates()}build(e){(0,i.nameScope)(this.forwardLayer.name,()=>{this.forwardLayer.build(e)}),(0,i.nameScope)(this.backwardLayer.name,()=>{this.backwardLayer.build(e)}),this.built=!0}computeMask(e,t){let r;if(Array.isArray(t)&&(t=t[0]),r=this.returnSequences?null==this.mergeMode?[t,t]:t:null==this.mergeMode?[null,null]:null,this.returnState){const e=this.forwardLayer.states.map(e=>null);return Array.isArray(r)?r.concat(e).concat(e):[r].concat(e).concat(e)}return r}get trainableWeights(){return this.forwardLayer.trainableWeights.concat(this.backwardLayer.trainableWeights)}get nonTrainableWeights(){return this.forwardLayer.nonTrainableWeights.concat(this.backwardLayer.nonTrainableWeights)}setFastWeightInitDuringBuild(e){super.setFastWeightInitDuringBuild(e),null!=this.forwardLayer&&this.forwardLayer.setFastWeightInitDuringBuild(e),null!=this.backwardLayer&&this.backwardLayer.setFastWeightInitDuringBuild(e)}getConfig(){const e={mergeMode:this.mergeMode},t=super.getConfig();return Object.assign(e,t),e}static fromConfig(e,t){const r=(0,h.deserialize)(t.layer);if(delete t.layer,null!=t.numConstants)throw new n.NotImplementedError("Deserialization of a Bidirectional layer with numConstants present is not supported yet.");const i=t;return i.layer=r,new e(i)}}_e.Bidirectional=w,w.className='Bidirectional',e.serialization.registerClass(w)},2224,[1158,2181,2178,2177,2172,2179,2174,2185,2216,2196]);
__d(function(g,_r,_i,a,m,_e,d){Object.defineProperty(_e,"__esModule",{value:!0}),_e.Rescaling=void 0;var e=_r(d[0]),t=_r(d[1]),s=_r(d[2]),n=(function(e,t){if("function"==typeof WeakMap)var s=new WeakMap,n=new WeakMap;return(function(e,t){if(!t&&e&&e.__esModule)return e;var r,o,f={__proto__:null,default:e};if(null===e||"object"!=typeof e&&"function"!=typeof e)return f;if(r=t?n:s){if(r.has(e))return r.get(e);r.set(e,f)}for(const t in e)"default"!==t&&{}.hasOwnProperty.call(e,t)&&((o=(r=Object.defineProperty)&&Object.getOwnPropertyDescriptor(e,t))&&(o.get||o.set)?r(f,t,o):f[t]=e[t]);return f})(e,t)}
/**
   * @license
   * Copyright 2022 CodeSmith LLC
   *
   * Use of this source code is governed by an MIT-style
   * license that can be found in the LICENSE file or at
   * https://opensource.org/licenses/MIT.
   * =============================================================================
   */)(_r(d[3]));class r extends e.Layer{constructor(e){super(e),this.scale=e.scale,e.offset?this.offset=e.offset:this.offset=0}getConfig(){const e={scale:this.scale,offset:this.offset},t=super.getConfig();return Object.assign(e,t),e}call(e,r){return(0,t.tidy)(()=>('float32'!==(e=(0,s.getExactlyOneTensor)(e)).dtype&&(e=n.cast(e,'float32')),(0,t.add)((0,t.mul)(e,this.scale),this.offset)))}}_e.Rescaling=r,r.className='Rescaling',t.serialization.registerClass(r)},2225,[2177,1158,2185,2181]);
__d(function(g,_r,_i,a,m,_e,d){Object.defineProperty(_e,"__esModule",{value:!0}),_e.CenterCrop=void 0;var t=_r(d[0]),e=_r(d[1]),r=_r(d[2]),n=(function(t,e){if("function"==typeof WeakMap)var r=new WeakMap,n=new WeakMap;return(function(t,e){if(!e&&t&&t.__esModule)return t;var i,s,h={__proto__:null,default:t};if(null===t||"object"!=typeof t&&"function"!=typeof t)return h;if(i=e?n:r){if(i.has(t))return i.get(t);i.set(t,h)}for(const e in t)"default"!==e&&{}.hasOwnProperty.call(t,e)&&((s=(i=Object.defineProperty)&&Object.getOwnPropertyDescriptor(t,e))&&(s.get||s.set)?i(h,e,s):h[e]=t[e]);return h})(t,e)}
/**
   * @license
   * Copyright 2022 CodeSmith LLC
   *
   * Use of this source code is governed by an MIT-style
   * license that can be found in the LICENSE file or at
   * https://opensource.org/licenses/MIT.
   * =============================================================================
   */)(_r(d[3]));const{resizeBilinear:i,cropAndResize:s}=t.image;class h extends r.Layer{constructor(t){super(t),this.height=t.height,this.width=t.width}centerCrop(r,i,h,o,c,u,l,p){return(0,t.tidy)(()=>{let f,y=!1;const w=[i/u,h/l,(o+i)/u,(c+h)/l],C=[];3===r.rank?(y=!0,f=(0,t.stack)([r])):f=r;for(let t=0;t<f.shape[0];t++)C.push(w);const O=(0,t.tensor)(C,[C.length,4]),_=(0,t.range)(0,C.length,1,'int32'),M=s(f,O,_,[o,c],'nearest');return y?n.cast((0,e.getExactlyOneTensor)((0,t.unstack)(M)),p):n.cast(M,p)})}upsize(e,r,s,h){return(0,t.tidy)(()=>{const t=i(e,[r,s]);return n.cast(t,h)})}call(r,n){return(0,t.tidy)(()=>{const t=(0,e.getExactlyOneTensor)(r),n=t.dtype,i=t.shape,s=i[i.length-3],h=i[i.length-2];let o=0;s!==this.height&&(o=Math.floor((s-this.height)/2));let c=0;return h!==this.width&&(c=Math.floor((h-this.width)/2),0===c&&(c=1)),o>=0&&c>=0?this.centerCrop(t,o,c,this.height,this.width,s,h,n):this.upsize(r,this.height,this.width,n)})}getConfig(){const t={height:this.height,width:this.width},e=super.getConfig();return Object.assign(t,e),t}computeOutputShape(t){const r=(t=(0,e.getExactlyOneShape)(t)).length-3,n=t.length-2;return t[r]=this.height,t[n]=this.width,t}}_e.CenterCrop=h,h.className='CenterCrop',t.serialization.registerClass(h)},2226,[1158,2185,2177,2181]);
__d(function(g,_r,_i,a,m,_e,d){Object.defineProperty(_e,"__esModule",{value:!0}),_e.CategoryEncoding=void 0;var t=_r(d[0]),e=_r(d[1]),n=_r(d[2]),o=_r(d[3]),u=r(_r(d[4])),s=r(_r(d[5]));function r(t,e){if("function"==typeof WeakMap)var n=new WeakMap,o=new WeakMap;return(r=function(t,e){if(!e&&t&&t.__esModule)return t;var u,s,r={__proto__:null,default:t};if(null===t||"object"!=typeof t&&"function"!=typeof t)return r;if(u=e?o:n){if(u.has(t))return u.get(t);u.set(t,r)}for(const e in t)"default"!==e&&{}.hasOwnProperty.call(t,e)&&((s=(u=Object.defineProperty)&&Object.getOwnPropertyDescriptor(t,e))&&(s.get||s.set)?u(r,e,s):r[e]=t[e]);return r})(t,e)}
/**
   * @license
   * Copyright 2022 CodeSmith LLC
   *
   * Use of this source code is governed by an MIT-style
   * license that can be found in the LICENSE file or at
   * https://opensource.org/licenses/MIT.
   * =============================================================================
   */class i extends t.Layer{constructor(t){super(t),this.numTokens=t.numTokens,t.outputMode?this.outputMode=t.outputMode:this.outputMode='multiHot'}getConfig(){const t={numTokens:this.numTokens,outputMode:this.outputMode},e=super.getConfig();return Object.assign(t,e),t}computeOutputShape(t){return null==(t=(0,n.getExactlyOneShape)(t))?[this.numTokens]:'oneHot'===this.outputMode&&1!==t[t.length-1]?(t.push(this.numTokens),t):(t[t.length-1]=this.numTokens,t)}call(t,r){return(0,e.tidy)(()=>{let i;if('int32'!==(t=(0,n.getExactlyOneTensor)(t)).dtype&&(t=u.cast(t,'int32')),void 0!==r.countWeights){if('count'!==this.outputMode)throw new o.ValueError(`countWeights is not used when outputMode !== count.\n              Received countWeights=${r.countWeights}`);i=(0,n.getExactlyOneTensor)(r.countWeights)}const c=(0,e.max)(t),l=(0,e.min)(t),p=(0,e.greater)(this.numTokens,c).bufferSync().get(0),h=(0,e.greaterEqual)(l,0).bufferSync().get(0);if(!p||!h)throw new o.ValueError(`Input values must be between 0 < values <= numTokens with numTokens=${this.numTokens}`);return s.encodeCategoricalInputs(t,this.outputMode,this.numTokens,i)})}}_e.CategoryEncoding=i,i.className='CategoryEncoding',e.serialization.registerClass(i)},2227,[2177,1158,2185,2172,2181,2228]);
__d(function(g,_r,_i,a,m,_e,d){Object.defineProperty(_e,"__esModule",{value:!0}),_e.encodeCategoricalInputs=
/**
   * @license
   * Copyright 2022 CodeSmith LLC
   *
   * Use of this source code is governed by an MIT-style
   * license that can be found in the LICENSE file or at
   * https://opensource.org/licenses/MIT.
   * =============================================================================
   */
function(r,u,i,s){let f=(0,t.getExactlyOneTensor)(r);'int32'!==f.dtype&&(f=o.cast(f,'int32'));if('int'===u)return f;const p=f.shape;0===f.rank&&(f=(0,e.expandDims)(f,-1));'oneHot'===u&&1!==f.shape[f.shape.length-1]&&(f=(0,e.expandDims)(f,-1));if(f.rank>2)throw new n.ValueError(`When outputMode is not int, maximum output rank is 2 Received outputMode ${u} and input shape ${p} which would result in output rank ${f.rank}.`);const c=['multiHot','oneHot'].includes(u),l=f;let h;h=void 0!==s&&'count'===u?(0,e.denseBincount)(l,s,i,c):(0,e.denseBincount)(l,[],i,c);if('tfIdf'!==u)return h;if(s)return(0,e.mul)(h,s);throw new n.ValueError("When outputMode is 'tfIdf', weights must be provided.")};var e=_r(d[0]),t=_r(d[1]),n=_r(d[2]),o=(function(e,t){if("function"==typeof WeakMap)var n=new WeakMap,o=new WeakMap;return(function(e,t){if(!t&&e&&e.__esModule)return e;var r,u,i={__proto__:null,default:e};if(null===e||"object"!=typeof e&&"function"!=typeof e)return i;if(r=t?o:n){if(r.has(e))return r.get(e);r.set(e,i)}for(const t in e)"default"!==t&&{}.hasOwnProperty.call(e,t)&&((u=(r=Object.defineProperty)&&Object.getOwnPropertyDescriptor(e,t))&&(u.get||u.set)?r(i,t,u):i[t]=e[t]);return i})(e,t)})(_r(d[3]))},2228,[1158,2185,2172,2181]);
__d(function(g,r,i,a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.Resizing=void 0;var t=r(d[0]),o=r(d[1]),n=r(d[2]),s=r(d[3]);
/**
   * @license
   * Copyright 2022 CodeSmith LLC
   *
   * Use of this source code is governed by an MIT-style
   * license that can be found in the LICENSE file or at
   * https://opensource.org/licenses/MIT.
   * =============================================================================
   */
const h=new Set(['bilinear','nearest']);class p extends o.Layer{constructor(t){if(super(t),this.height=t.height,this.width=t.width,t.interpolation){if(!h.has(t.interpolation))throw new n.ValueError(`Invalid interpolation parameter: ${t.interpolation} is not implemented`);this.interpolation=t.interpolation}else this.interpolation='bilinear';this.cropToAspectRatio=Boolean(t.cropToAspectRatio)}computeOutputShape(t){const o=(t=(0,s.getExactlyOneShape)(t))[2];return[this.height,this.width,o]}getConfig(){const t={height:this.height,width:this.width,interpolation:this.interpolation,cropToAspectRatio:this.cropToAspectRatio},o=super.getConfig();return Object.assign(t,o),t}call(o,n){return(0,t.tidy)(()=>{const n=[this.height,this.width];if('bilinear'===this.interpolation)return t.image.resizeBilinear(o,n,!this.cropToAspectRatio);if('nearest'===this.interpolation)return t.image.resizeNearestNeighbor(o,n,!this.cropToAspectRatio);throw new Error(`Interpolation is ${this.interpolation} but only ${[...h]} are supported`)})}}e.Resizing=p,p.className='Resizing',t.serialization.registerClass(p)},2229,[1158,2177,2172,2185]);
__d(function(g,r,i,a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.RandomWidth=e.INTERPOLATION_METHODS=void 0;var t=r(d[0]),o=r(d[1]),n=r(d[2]),s=r(d[3]);
/**
   * @license
   * Copyright 2023 CodeSmith LLC
   *
   * Use of this source code is governed by an MIT-style
   * license that can be found in the LICENSE file or at
   * https://opensource.org/licenses/MIT.
   * =============================================================================
   */
const h=e.INTERPOLATION_METHODS=new Set(['bilinear','nearest']);class l extends s.BaseRandomLayer{constructor(t){super(t);const{factor:o,interpolation:s="bilinear"}=t;if(this.factor=o,Array.isArray(this.factor)&&2===this.factor.length)this.widthLower=this.factor[0],this.widthUpper=this.factor[1];else{if(Array.isArray(this.factor)||!(this.factor>0))throw new n.ValueError(`Invalid factor: ${this.factor}. Must be positive number or tuple of 2 numbers`);this.widthLower=-this.factor,this.widthUpper=this.factor}if(this.widthLower<-1||this.widthUpper<-1)throw new n.ValueError(`factor must have values larger than -1. Got: ${this.factor}`);if(this.widthUpper<this.widthLower)throw new n.ValueError(`factor cannot have upper bound less than lower bound.\n        Got upper bound: ${this.widthUpper}.\n        Got lower bound: ${this.widthLower}\n      `);if(s){if(!h.has(s))throw new n.ValueError(`Invalid interpolation parameter: ${s} is not implemented`);this.interpolation=s}}getConfig(){const t={factor:this.factor,interpolation:this.interpolation},o=super.getConfig();return Object.assign(t,o),t}computeOutputShape(t){const n=(t=(0,o.getExactlyOneShape)(t))[2];return[this.imgHeight,-1,n]}call(n,s){return(0,t.tidy)(()=>{const s=(0,o.getExactlyOneTensor)(n);this.imgHeight=s.shape[s.shape.length-3];const l=s.shape[s.shape.length-2];this.widthFactor=(0,t.randomUniform)([1],1+this.widthLower,1+this.widthUpper,'float32',this.randomGenerator.next());let c=this.widthFactor.dataSync()[0]*l;c=Math.round(c);const p=[this.imgHeight,c];switch(this.interpolation){case'bilinear':return t.image.resizeBilinear(n,p);case'nearest':return t.image.resizeNearestNeighbor(n,p);default:throw new Error(`Interpolation is ${this.interpolation}\n          but only ${[...h]} are supported`)}})}}e.RandomWidth=l,l.className='RandomWidth',t.serialization.registerClass(l)},2230,[1158,2185,2172,2231]);
__d(function(g,r,i,a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.BaseRandomLayer=void 0;var s=r(d[0]),n=r(d[1]);
/**
   * @license
   * Copyright 2023 CodeSmith LLC
   *
   * Use of this source code is governed by an MIT-style
   * license that can be found in the LICENSE file or at
   * https://opensource.org/licenses/MIT.
   * =============================================================================
   */
class o extends s.Layer{constructor(s){super(s),this.randomGenerator=new n.RandomSeed(s.seed)}getConfig(){const s={seed:this.randomGenerator.seed},n=super.getConfig();return Object.assign(s,n),s}}e.BaseRandomLayer=o,o.className='BaseRandomLayer'},2231,[2177,2232]);
__d(function(g,r,i,a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.RandomSeed=void 0;
/**
   * @license
   * Copyright 2023 CodeSmith LLC
   *
   * Use of this source code is governed by an MIT-style
   * license that can be found in the LICENSE file or at
   * https://opensource.org/licenses/MIT.
   * =============================================================================
   */
class s{constructor(s){this.seed=s}next(){if(void 0!==this.seed)return this.seed++}}e.RandomSeed=s,s.className='RandomSeed'},2232,[]);
__d(function(g,_r,_i,a,m,_e,d){Object.defineProperty(_e,"__esModule",{value:!0}),_e.MAPE=function(e,n){return r.meanAbsolutePercentageError(e,n)},_e.MSE=function(e,n){return r.meanSquaredError(e,n)},_e.binaryAccuracy=function(r,n){return e.binaryAccuracy(r,n)},_e.binaryCrossentropy=function(r,n){return e.binaryCrossentropy(r,n)},_e.categoricalAccuracy=function(r,n){return e.categoricalAccuracy(r,n)},_e.categoricalCrossentropy=function(r,n){return e.categoricalCrossentropy(r,n)},_e.cosineProximity=function(e,n){return r.cosineProximity(e,n)},_e.mape=function(e,n){return r.meanAbsolutePercentageError(e,n)},_e.meanAbsoluteError=function(e,n){return r.meanAbsoluteError(e,n)},_e.meanAbsolutePercentageError=function(e,n){return r.meanAbsolutePercentageError(e,n)},_e.meanSquaredError=function(e,n){return r.meanSquaredError(e,n)},_e.mse=function(e,n){return r.meanSquaredError(e,n)},_e.precision=function(r,n){return e.precision(r,n)},_e.r2Score=function(r,n){return e.r2Score(r,n)},_e.recall=function(r,n){return e.recall(r,n)},_e.sparseCategoricalAccuracy=function(r,n){return e.sparseCategoricalAccuracy(r,n)};var r=n(_r(d[0])),e=n(_r(d[1]));function n(r,e){if("function"==typeof WeakMap)var t=new WeakMap,o=new WeakMap;return(n=function(r,e){if(!e&&r&&r.__esModule)return r;var n,c,u={__proto__:null,default:r};if(null===r||"object"!=typeof r&&"function"!=typeof r)return u;if(n=e?o:t){if(n.has(r))return n.get(r);n.set(r,u)}for(const e in r)"default"!==e&&{}.hasOwnProperty.call(r,e)&&((c=(n=Object.defineProperty)&&Object.getOwnPropertyDescriptor(r,e))&&(c.get||c.set)?n(u,e,c):u[e]=r[e]);return u})(r,e)}},2233,[2197,2198]);
__d(function(g,r,i,a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"modelFromJSON",{enumerable:!0,get:function(){return o.modelFromJSON}});var o=r(d[0])},2234,[2208]);
__d(function(g,_r,_i,a,m,_e,d){Object.defineProperty(_e,"__esModule",{value:!0}),_e.l1=function(e){return t.l1(e)},_e.l1l2=
/**
   * @license
   * Copyright 2018 Google LLC
   *
   * Use of this source code is governed by an MIT-style
   * license that can be found in the LICENSE file or at
   * https://opensource.org/licenses/MIT.
   * =============================================================================
   */
function(t){return new e.L1L2(t)},_e.l2=function(e){return t.l2(e)};var e=(function(e,t){if("function"==typeof WeakMap)var n=new WeakMap,r=new WeakMap;return(function(e,t){if(!t&&e&&e.__esModule)return e;var o,u,f={__proto__:null,default:e};if(null===e||"object"!=typeof e&&"function"!=typeof e)return f;if(o=t?r:n){if(o.has(e))return o.get(e);o.set(e,f)}for(const t in e)"default"!==t&&{}.hasOwnProperty.call(e,t)&&((u=(o=Object.defineProperty)&&Object.getOwnPropertyDescriptor(e,t))&&(u.get||u.set)?o(f,t,u):f[t]=e[t]);return f})(e,t)})(_r(d[0])),t=e},2235,[2211]);
__d(function(g,r,i,a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.callbacks=e.EarlyStopping=e.Callback=void 0,e.earlyStopping=u;var t=r(d[0]),o=r(d[1]),s=r(d[2]),n=r(d[3]);
/**
   * @license
   * Copyright 2018 Google LLC
   *
   * Use of this source code is governed by an MIT-style
   * license that can be found in the LICENSE file or at
   * https://opensource.org/licenses/MIT.
   * =============================================================================
   */
class l extends t.BaseCallback{constructor(){super(...arguments),this.model=null}setModel(t){if(!(t instanceof o.LayersModel))throw new Error('model must be a LayersModel, not some other Container');this.model=t}}function h(t,o){return t<o}function c(t,o){return t>o}e.Callback=l;class p extends l{constructor(t){if(super(),null==t&&(t={}),t.restoreBestWeights)throw new s.NotImplementedError('restoreBestWeights = True is not implemented in EarlyStopping yet.');this.monitor=t.monitor||'val_loss',this.minDelta=Math.abs(t.minDelta||0),this.patience=t.patience||0,this.verbose=t.verbose||0,this.mode=t.mode||'auto',this.baseline=t.baseline,-1===['auto','min','max'].indexOf(this.mode)&&(console.warn(`EarlyStopping mode '${this.mode}' is invalid. Falling back to mode 'auto'.`),this.mode='auto'),'min'===this.mode?this.monitorFunc=h:'max'===this.mode||-1!==this.monitor.indexOf('acc')?this.monitorFunc=c:this.monitorFunc=h,this.monitorFunc===h&&(this.minDelta*=-1)}async onTrainBegin(t){this.wait=0,this.stoppedEpoch=0,null!=this.baseline?this.best=this.baseline:this.best=this.monitorFunc===h?1/0:-1/0}async onEpochEnd(t,o){await(0,n.resolveScalarsInLogs)(o);const s=this.getMonitorValue(o);null!=s&&(this.monitorFunc(s-this.minDelta,this.best)?(this.best=s,this.wait=0):(this.wait++,this.wait>=this.patience&&(this.stoppedEpoch=t,this.model.stopTraining=!0)))}async onTrainEnd(t){this.stoppedEpoch>0&&this.verbose&&console.log(`Epoch ${this.stoppedEpoch}: early stopping.`)}getMonitorValue(t){null==t&&(t={});const o=t[this.monitor];return null==o&&console.warn(`Metric for EarlyStopping ${this.monitor} is not available. Available metrics are: ${Object.keys(t)}`),o}}function u(t){return new p(t)}e.EarlyStopping=p;e.callbacks={earlyStopping:u}},2236,[2193,2195,2172,2194]);
__d(function(g,r,i,a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"CSVDataset",{enumerable:!0,get:function(){return n.CSVDataset}}),Object.defineProperty(e,"Dataset",{enumerable:!0,get:function(){return t.Dataset}}),Object.defineProperty(e,"FileDataSource",{enumerable:!0,get:function(){return c.FileDataSource}}),Object.defineProperty(e,"TextLineDataset",{enumerable:!0,get:function(){return u.TextLineDataset}}),Object.defineProperty(e,"URLDataSource",{enumerable:!0,get:function(){return f.URLDataSource}}),Object.defineProperty(e,"array",{enumerable:!0,get:function(){return t.array}}),Object.defineProperty(e,"csv",{enumerable:!0,get:function(){return o.csv}}),Object.defineProperty(e,"func",{enumerable:!0,get:function(){return o.func}}),Object.defineProperty(e,"generator",{enumerable:!0,get:function(){return o.generator}}),Object.defineProperty(e,"microphone",{enumerable:!0,get:function(){return o.microphone}}),Object.defineProperty(e,"version_data",{enumerable:!0,get:function(){return b.version}}),Object.defineProperty(e,"webcam",{enumerable:!0,get:function(){return o.webcam}}),Object.defineProperty(e,"zip",{enumerable:!0,get:function(){return t.zip}});var t=r(d[0]),n=r(d[1]),u=r(d[2]),o=r(d[3]),c=r(d[4]),f=r(d[5]),b=r(d[6])},2237,[2238,2244,2245,2246,2256,2249,2257]);
__d(function(g,_r,_i,a,m,_e,_d){Object.defineProperty(_e,"__esModule",{value:!0}),_e.Dataset=void 0,_e.array=function(t){return o(async()=>(0,r.iteratorFromItems)(t),t.length)},_e.datasetFromIteratorFn=o,_e.zip=function(t){if(!(0,i.isIterable)(t))throw new Error('The argument to zip() must be an object or array.');let e;if(Array.isArray(t))for(let r=0;r<t.length;r++)e=null==e?t[r].size:Math.min(e,t[r].size);else if(t instanceof Object)for(const r in t)e=null==e?t[r].size:Math.min(e,t[r].size);return o(async()=>{const e=await(0,i.deepMapAndAwaitAll)(t,t=>{if(t instanceof n)return{value:t.iterator(),recurse:!1};if((0,i.isIterable)(t))return{value:null,recurse:!0};throw new Error("Leaves of the structure passed to zip() must be Datasets, not primitives.")});return(0,r.iteratorFromZipped)(e,r.ZipMismatchMode.SHORTEST)},e)};var t=s(_r(_d[0])),e=s(_r(_d[1])),r=_r(_d[2]),i=_r(_d[3]);function s(t,e){if("function"==typeof WeakMap)var r=new WeakMap,i=new WeakMap;return(s=function(t,e){if(!e&&t&&t.__esModule)return t;var s,n,o={__proto__:null,default:t};if(null===t||"object"!=typeof t&&"function"!=typeof t)return o;if(s=e?i:r){if(s.has(t))return s.get(t);s.set(t,o)}for(const e in t)"default"!==e&&{}.hasOwnProperty.call(t,e)&&((n=(s=Object.defineProperty)&&Object.getOwnPropertyDescriptor(t,e))&&(n.get||n.set)?s(o,e,n):o[e]=t[e]);return o})(t,e)}
/**
   * @license
   * Copyright 2018 Google LLC. All Rights Reserved.
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
   *
   * =============================================================================
   */class n{constructor(){this.size=null}batch(e,r=!0){const i=this;let s;return t.util.assert(e>0,()=>`batchSize needs to be positive, but it is\n      ${e}`),s=this.size===1/0||null==this.size?this.size:r?Math.ceil(this.size/e):Math.floor(this.size/e),o(async()=>(await i.iterator()).columnMajorBatch(e,r,u),s)}concatenate(t){const e=this;let r;return r=this.size===1/0||t.size===1/0?1/0:null!=this.size&&null!=t.size?this.size+t.size:null,o(async()=>(await e.iterator()).concatenate(await t.iterator()),r)}filter(e){const r=this;let i;return i=this.size===1/0?1/0:null,o(async()=>(await r.iterator()).filter(r=>t.tidy(()=>e(r))),i)}async forEachAsync(t){return(await this.iterator()).forEachAsync(t)}map(e){const r=this;return o(async()=>(await r.iterator()).map(r=>t.tidy(()=>e(r))),this.size)}mapAsync(t){const e=this;return o(async()=>(await e.iterator()).mapAsync(t),this.size)}prefetch(t){if(null==t)throw new RangeError('`Dataset.prefetch()` requires bufferSize to be specified.');const e=this;return o(async()=>(await e.iterator()).prefetch(t),this.size)}repeat(t){const e=this;let i;return i=null!=this.size&&t>0?this.size*t:0===t?0:null!=this.size&&(void 0===t||t<0)?1/0:null,o(async()=>{const i=(0,r.iteratorFromFunction)(async()=>({value:await e.iterator(),done:!1}));return(0,r.iteratorFromConcatenated)(i.take(t))},i)}skip(t){const e=this;let r;return r=null!=this.size&&t>=0&&this.size>=t?this.size-t:null!=this.size&&(this.size<t||void 0===t||t<0)?0:null,o(async()=>(await e.iterator()).skip(t),r)}shuffle(r,i,s=!0){if(null==r||r<0)throw null==this.size?new RangeError('`Dataset.shuffle()` requires bufferSize to be specified.'):new RangeError(`\`Dataset.shuffle()\` requires bufferSize to be specified.  If your data fits in main memory (for regular JS objects), and/or GPU memory (for \`tf.Tensor\`s), consider setting bufferSize to the dataset size (${this.size} elements)`);const n=this,u=e.alea(i||t.util.now().toString());return o(async()=>{let t=u.int32();return s&&(t+=u.int32()),(await n.iterator()).shuffle(r,t.toString())},this.size)}take(t){const e=this;let r;return r=null!=this.size&&this.size>t?t:null!=this.size&&this.size<=t?this.size:null,o(async()=>(await e.iterator()).take(t),r)}async toArray(){if(this.size===1/0)throw new Error('Can not convert infinite data stream to array.');return(await this.iterator()).toArray()}async toArrayForTest(){if(this.size===1/0)throw new Error('Can not convert infinite data stream to array.');return(await this.iterator()).toArrayForTest()}}function o(t,e=null){return new class extends n{constructor(){super(...arguments),this.size=e}async iterator(){return t()}}}function u(t){if(null===t)return null;const e=t[0];if((0,i.canTensorify)(e)){return{value:l(t),recurse:!1}}return{value:null,recurse:!0}}function l(e){if(0===e.length)throw new Error('Can\'t make a batch of zero elements.');return e[0]instanceof t.Tensor?t.stack(e):t.tensor(e)}_e.Dataset=n,n.MAX_BUFFER_SIZE=1e4},2238,[1158,1348,2239,2241]);
__d(function(g,_r,_i,a,m,_e,d){Object.defineProperty(_e,"__esModule",{value:!0}),_e.ZipMismatchMode=_e.ShuffleIterator=_e.PrefetchIterator=_e.OneToManyIterator=_e.LazyIterator=_e.ChainedIterator=void 0,_e.iteratorFromConcatenated=c,_e.iteratorFromConcatenatedFunction=function(t,e,s){return c(h(t).take(e),s)},_e.iteratorFromFunction=h,_e.iteratorFromIncrementing=function(t){let e=t;return h(()=>({value:e++,done:!1}))},_e.iteratorFromItems=l,_e.iteratorFromZipped=function(e,s=t.FAIL){return new C(e,s)};var t,e=o(_r(d[0])),s=o(_r(d[1])),r=_r(d[2]),n=_r(d[3]),i=_r(d[4]),u=_r(d[5]);function o(t,e){if("function"==typeof WeakMap)var s=new WeakMap,r=new WeakMap;return(o=function(t,e){if(!e&&t&&t.__esModule)return t;var n,i,u={__proto__:null,default:t};if(null===t||"object"!=typeof t&&"function"!=typeof t)return u;if(n=e?r:s){if(n.has(t))return n.get(t);n.set(t,u)}for(const e in t)"default"!==e&&{}.hasOwnProperty.call(t,e)&&((i=(n=Object.defineProperty)&&Object.getOwnPropertyDescriptor(t,e))&&(i.get||i.set)?n(u,e,i):u[e]=t[e]);return u})(t,e)}
/**
   * @license
   * Copyright 2018 Google LLC. All Rights Reserved.
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
   *
   * =============================================================================
   */function l(t){return new f(t)}function h(t){return new x(t)}function c(t,e){return new b(t,e)}class p{async toArray(){const t=[];let e=await this.next();for(;!e.done;)t.push(e.value),e=await this.next();return t}async toArrayForTest(){const t=this.prefetch(100),e=[];let s=await t.next();for(;!s.done;)e.push(s.value),s=await t.next();return e}async resolveFully(){let t=await this.next();for(;!t.done;)t=await this.next()}async resolveWhile(t){let e=await this.next(),s=t(e.value);for(;!e.done&&s;)e=await this.next(),s=t(e.value)}handleErrors(t){return new T(this,t)}filter(t){return new I(this,t)}map(t){return new F(this,t)}mapAsync(t){return new M(this,t)}serialMapAsync(t){return new M(this,t).serial()}flatmap(t){return new E(this,t)}async forEachAsync(t){return this.map(t).resolveFully()}async serialForEach(t){return this.serialMapAsync(t).resolveWhile(t=>!0===t)}rowMajorBatch(t,e=!0){return new R(this,t,e)}columnMajorBatch(t,e=!0,s=n.zipToList){return this.rowMajorBatch(t,e).map(t=>(0,n.deepZip)(t,s))}concatenate(t,e){return new b(l([this,t]),e)}take(t){return t<0||null==t?this:new w(this,t)}skip(t){return t<0||null==t?this:new v(this,t)}prefetch(t){return new _(this,t)}shuffle(t,e){return new P(this,t,e)}serial(){return new y(this)}}_e.LazyIterator=p;class f extends p{constructor(t){super(),this.items=t,this.trav=0}summary(){return`Array of ${this.items.length} items`}async next(){if(this.trav>=this.items.length)return{value:null,done:!0};const t=this.items[this.trav];return this.trav++,{value:(0,r.deepClone)(t),done:!1}}}class x extends p{constructor(t){super(),this.nextFn=t}summary(){return"Function call"}async next(){try{return this.nextFn()}catch(t){throw t.message=`Error thrown while iterating through a dataset: ${t.message}`,t}}}class y extends p{constructor(t){super(),this.upstream=t,this.lastRead=Promise.resolve({value:null,done:!1})}summary(){return`${this.upstream.summary()} -> Serial`}async next(){return this.lastRead=this.lastRead.then(()=>this.serialNext()),this.lastRead}async serialNext(){return this.upstream.next()}}class v extends p{constructor(t,e){super(),this.upstream=t,this.maxCount=e,this.count=0,this.lastRead=Promise.resolve({value:null,done:!1})}summary(){return`${this.upstream.summary()} -> Skip`}async next(){return this.lastRead=this.lastRead.then(()=>this.serialNext()),this.lastRead}async serialNext(){for(;this.count++<this.maxCount;){const t=await this.upstream.next();if(t.done)return t;e.dispose(t.value)}return this.upstream.next()}}class w extends p{constructor(t,e){super(),this.upstream=t,this.maxCount=e,this.count=0}summary(){return`${this.upstream.summary()} -> Take`}async next(){return this.count++>=this.maxCount?{value:null,done:!0}:this.upstream.next()}}class R extends p{constructor(t,e,s=!0){super(),this.upstream=t,this.batchSize=e,this.enableSmallLastBatch=s,this.lastRead=Promise.resolve({value:null,done:!1})}summary(){return`${this.upstream.summary()} -> RowMajorBatch`}async next(){return this.lastRead=this.lastRead.then(()=>this.serialNext()),this.lastRead}async serialNext(){const t=[];for(;t.length<this.batchSize;){const e=await this.upstream.next();if(e.done)return this.enableSmallLastBatch&&t.length>0?{value:t,done:!1}:{value:null,done:!0};t.push(e.value)}return{value:t,done:!1}}}class I extends p{constructor(t,e){super(),this.upstream=t,this.predicate=e,this.lastRead=Promise.resolve({value:null,done:!1})}summary(){return`${this.upstream.summary()} -> Filter`}async next(){return this.lastRead=this.lastRead.then(()=>this.serialNext()),this.lastRead}async serialNext(){for(;;){const t=await this.upstream.next();if(t.done||this.predicate(t.value))return t;e.dispose(t.value)}}}class F extends p{constructor(t,e){super(),this.upstream=t,this.transform=e}summary(){return`${this.upstream.summary()} -> Map`}async next(){const t=await this.upstream.next();if(t.done)return{value:null,done:!0};const s=e.tensor_util.getTensorsInContainer(t.value),r=this.transform(t.value),n=e.tensor_util.getTensorsInContainer(r);for(const t of s)e.tensor_util.isTensorInList(t,n)||t.dispose();return{value:r,done:!1}}}class T extends p{constructor(t,e){super(),this.upstream=t,this.handler=e,this.count=0,this.lastRead=Promise.resolve({value:null,done:!1})}summary(){return`${this.upstream.summary()} -> handleErrors`}async next(){return this.lastRead=this.lastRead.then(()=>this.serialNext()),this.lastRead}async serialNext(){for(;;)try{return await this.upstream.next()}catch(t){if(!this.handler(t))return{value:null,done:!0}}}}class M extends p{constructor(t,e){super(),this.upstream=t,this.transform=e}summary(){return`${this.upstream.summary()} -> AsyncMap`}async next(){const t=await this.upstream.next();if(t.done)return{value:null,done:!0};const s=e.tensor_util.getTensorsInContainer(t.value),r=await this.transform(t.value),n=e.tensor_util.getTensorsInContainer(r);for(const t of s)e.tensor_util.isTensorInList(t,n)||t.dispose();return{value:r,done:!1}}}class S extends p{constructor(){super(),this.outputQueue=new i.GrowingRingBuffer,this.lastRead=Promise.resolve({value:null,done:!1})}async next(){return this.lastRead=this.lastRead.then(()=>this.serialNext()),this.lastRead}async serialNext(){for(;0===this.outputQueue.length();)if(!await this.pump())return{value:null,done:!0};return{value:this.outputQueue.shift(),done:!1}}}_e.OneToManyIterator=S;class E extends S{constructor(t,e){super(),this.upstream=t,this.transform=e}summary(){return`${this.upstream.summary()} -> Flatmap`}async pump(){const t=await this.upstream.next();if(t.done)return!1;const s=e.tensor_util.getTensorsInContainer(t.value),r=this.transform(t.value),n=e.tensor_util.getTensorsInContainer(r);this.outputQueue.pushAll(r);for(const t of s)e.tensor_util.isTensorInList(t,n)||t.dispose();return!0}}class b extends p{constructor(t,e){super(),this.baseErrorHandler=e,this.lastRead=null,this.iterator=null,this.moreIterators=t}summary(){return"TODO: fill in upstream of chained summaries -> Chained"}async next(){return this.lastRead=this.readFromChain(this.lastRead),this.lastRead}async readFromChain(t){if(await t,null==this.iterator){const t=await this.moreIterators.next();if(t.done)return{value:null,done:!0};this.iterator=t.value,null!=this.baseErrorHandler&&(this.iterator=this.iterator.handleErrors(this.baseErrorHandler))}const e=await this.iterator.next();return e.done?(this.iterator=null,this.readFromChain(t)):e}}_e.ChainedIterator=b,(function(t){t[t.FAIL=0]="FAIL",t[t.SHORTEST=1]="SHORTEST",t[t.LONGEST=2]="LONGEST"})(t||(_e.ZipMismatchMode=t={}));class C extends p{constructor(e,s=t.FAIL){super(),this.iterators=e,this.mismatchMode=s,this.count=0,this.currentPromise=null}summary(){return"{TODO: fill in upstream of zip summaries} -> Zip"}async nextState(e){await e;let s=0,r=0;const i=await(0,n.deepMapAndAwaitAll)(this.iterators,function(t){if(t instanceof p){return{value:t.next().then(t=>(s++,t.done&&r++,t.value)),recurse:!1}}return{value:null,recurse:!0}});if(s===r)return{value:null,done:!0};if(r>0)switch(this.mismatchMode){case t.FAIL:throw new Error(`Zipped streams should have the same length. Mismatched at element ${this.count}.`);case t.SHORTEST:return{value:null,done:!0};case t.LONGEST:}return this.count++,{value:i,done:!1}}async next(){return this.currentPromise=this.nextState(this.currentPromise),this.currentPromise}}class _ extends p{constructor(t,e){super(),this.upstream=t,this.bufferSize=e,this.buffer=new u.RingBuffer(e)}summary(){return`${this.upstream.summary()} -> Prefetch`}refill(){for(;!this.buffer.isFull();){const t=this.upstream.next();this.buffer.push(t)}}next(){return this.refill(),this.buffer.shift()}}_e.PrefetchIterator=_;class P extends _{constructor(t,r,n){super(t,r),this.upstream=t,this.windowSize=r,this.upstreamExhausted=!1,this.random=s.alea(n||e.util.now().toString()),this.lastRead=Promise.resolve({value:null,done:!1})}async next(){return this.lastRead=this.lastRead.then(()=>this.serialNext()),this.lastRead}randomInt(t){return Math.floor(this.random()*t)}chooseIndex(){return this.randomInt(this.buffer.length())}async serialNext(){for(this.upstreamExhausted||this.refill();!this.buffer.isEmpty();){const t=this.chooseIndex(),e=await this.buffer.shuffleExcise(t);if(!e.done)return this.refill(),e;this.upstreamExhausted=!0}return{value:null,done:!0}}}_e.ShuffleIterator=P},2239,[1158,1348,2240,2241,2242,2243]);
__d(function(g,_r,_i,a,m,_e,d){Object.defineProperty(_e,"__esModule",{value:!0}),_e.deepClone=
/**
   * @license
   * Copyright 2018 Google LLC. All Rights Reserved.
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
   *
   * =============================================================================
   */
function(e){return(0,n.deepMap)(e,r)};var e=(function(e,n){if("function"==typeof WeakMap)var r=new WeakMap,t=new WeakMap;return(function(e,n){if(!n&&e&&e.__esModule)return e;var u,o,f={__proto__:null,default:e};if(null===e||"object"!=typeof e&&"function"!=typeof e)return f;if(u=n?t:r){if(u.has(e))return u.get(e);u.set(e,f)}for(const n in e)"default"!==n&&{}.hasOwnProperty.call(e,n)&&((o=(u=Object.defineProperty)&&Object.getOwnPropertyDescriptor(e,n))&&(o.get||o.set)?u(f,n,o):f[n]=e[n]);return f})(e,n)})(_r(d[0])),n=_r(d[1]);function r(r){return r instanceof e.Tensor?{value:r.clone(),recurse:!1}:(0,n.isIterable)(r)?{value:null,recurse:!0}:{value:r,recurse:!1}}},2240,[1158,2241]);
__d(function(g,_r,_i,a,m,_e,d){Object.defineProperty(_e,"__esModule",{value:!0}),_e.canTensorify=function(r){return null==r||(n=r,null===n||'object'!=typeof n&&'function'!=typeof n)||Array.isArray(r)||'object'==typeof r&&r instanceof e.Tensor||e.util.isTypedArray(r);var n},_e.deepMap=
/**
   * @license
   * Copyright 2018 Google LLC. All Rights Reserved.
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
   *
   * =============================================================================
   */
function(e,n){return r(e,n)},_e.deepMapAndAwaitAll=async function(n,t){const o=new Map;r(n,t,o);for(const r of Array.from(o.keys())){const n=o.get(r);if(e.util.isPromise(n)){const e=await n;o.set(r,e)}}return r(n,t,o)},_e.deepZip=function(e,r=t){return n(e,r)},_e.isIterable=o,_e.zipToList=t;var e=(function(e,r){if("function"==typeof WeakMap)var n=new WeakMap,t=new WeakMap;return(function(e,r){if(!r&&e&&e.__esModule)return e;var o,u,i={__proto__:null,default:e};if(null===e||"object"!=typeof e&&"function"!=typeof e)return i;if(o=r?t:n){if(o.has(e))return o.get(e);o.set(e,i)}for(const r in e)"default"!==r&&{}.hasOwnProperty.call(e,r)&&((u=(o=Object.defineProperty)&&Object.getOwnPropertyDescriptor(e,r))&&(u.get||u.set)?o(i,r,u):i[r]=e[r]);return i})(e,r)})(_r(d[0]));function r(e,n,t=new Map,u=new Set){if(null==e)return null;if('function'==typeof Blob&&e instanceof Blob)return e.slice();if(u.has(e))throw new Error('Circular references are not supported.');if(t.has(e))return t.get(e);const i=n(e);if(i.recurse&&null!==i.value)throw new Error('A deep map function may not return both a value and recurse=true.');if(i.recurse){if(o(e)){const o=Array.isArray(e)?[]:{};u.add(e);for(const i in e){const c=r(e[i],n,t,u);o[i]=c}return u.delete(e),e.__proto__&&(o.__proto__=e.__proto__),o}throw new Error(`Can't recurse into non-iterable type: ${e}`)}return t.set(e,i.value),i.value}function n(e,r,t=new Set){const u=e[0];if(t.has(u))throw new Error('Circular references are not supported.');const i=r(e);if(i.recurse&&null!==i.value)throw new Error('A deep zip function may not return both a value and recurse=true.');if(i.recurse){if(o(u)){const o=Array.isArray(u)?[]:{};t.add(u);for(const i in u){const u=n(e.map(e=>e[i]),r,t);o[i]=u}return t.delete(u),o}throw new Error(`Can't recurse into non-iterable type: ${u}`)}return i.value}function t(e){return null===e?null:o(e[0])?{value:null,recurse:!0}:{value:e,recurse:!1}}function o(r){let n=!1;if(e.env().get('IS_BROWSER'))n=r instanceof TextDecoder;else{const{StringDecoder:e}=_r(d[1]);n=r instanceof e}return null!=r&&!ArrayBuffer.isView(r)&&(Array.isArray(r)||'object'==typeof r&&!(r instanceof e.Tensor)&&!(r instanceof Promise)&&!n)}},2241,[1158,479]);
__d(function(g,r,_i,a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.GrowingRingBuffer=void 0;var i=r(d[0]);
/**
   * @license
   * Copyright 2018 Google LLC. All Rights Reserved.
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
   *
   * =============================================================================
   */class s extends i.RingBuffer{constructor(){super(s.INITIAL_CAPACITY)}isFull(){return!1}push(i){super.isFull()&&this.expand(),super.push(i)}unshift(i){super.isFull()&&this.expand(),super.unshift(i)}expand(){const i=2*this.capacity,s=new Array(i),t=this.length();for(let i=0;i<t;i++)s[i]=this.get(this.wrap(this.begin+i));this.data=s,this.capacity=i,this.doubledCapacity=2*this.capacity,this.begin=0,this.end=t}}e.GrowingRingBuffer=s,s.INITIAL_CAPACITY=32},2242,[2243]);
__d(function(g,r,i,a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.RingBuffer=void 0;e.RingBuffer=
/**
   * @license
   * Copyright 2018 Google LLC. All Rights Reserved.
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
   *
   * =============================================================================
   */
class{constructor(t){if(this.capacity=t,this.begin=0,this.end=0,null==t)throw new RangeError('Can\'t create a ring buffer of unknown capacity.');if(t<1)throw new RangeError('Can\'t create ring buffer of capacity < 1.');this.data=new Array(t),this.doubledCapacity=2*t}wrap(t){for(;t<0;)t+=this.doubledCapacity;return t%this.doubledCapacity}get(t){if(t<0)throw new RangeError('Can\'t get item at a negative index.');return this.data[t%this.capacity]}set(t,s){if(t<0)throw new RangeError('Can\'t set item at a negative index.');this.data[t%this.capacity]=s}length(){let t=this.end-this.begin;return t<0&&(t=this.doubledCapacity+t),t}isFull(){return this.length()===this.capacity}isEmpty(){return 0===this.length()}push(t){if(this.isFull())throw new RangeError('Ring buffer is full.');this.set(this.end,t),this.end=this.wrap(this.end+1)}pushAll(t){for(const s of t)this.push(s)}pop(){if(this.isEmpty())throw new RangeError('Ring buffer is empty.');this.end=this.wrap(this.end-1);const t=this.get(this.end);return this.set(this.end,void 0),t}unshift(t){if(this.isFull())throw new RangeError('Ring buffer is full.');this.begin=this.wrap(this.begin-1),this.set(this.begin,t)}shift(){if(this.isEmpty())throw new RangeError('Ring buffer is empty.');const t=this.get(this.begin);return this.set(this.begin,void 0),this.begin=this.wrap(this.begin+1),t}shuffleExcise(t){if(this.isEmpty())throw new RangeError('Ring buffer is empty.');const s=this.wrap(this.begin+t),n=this.get(s);return this.set(s,this.pop()),n}}},2243,[]);
__d(function(g,r,_i,a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.CSVDataset=void 0;var t=r(d[0]),s=r(d[1]),i=r(d[2]);
/**
   * @license
   * Copyright 2018 Google LLC. All Rights Reserved.
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
   *
   * =============================================================================
   */
const l='"',n=Symbol('out'),o=Symbol('field'),u=Symbol('quote'),h=Symbol('quoteafterquote'),c=Symbol('quoteinquote');class f extends s.Dataset{async columnNames(){return this.columnNamesValidated||await this.setColumnNames(),this.configuredColumnsOnly?Object.keys(this.columnConfigs):this.fullColumnNames}async setColumnNames(){const s=await this.maybeReadHeaderLine();if(!this.fullColumnNames&&!s)throw new Error('Column names must be provided if there is no header line.');this.fullColumnNames&&s&&t.util.assert(s.length===this.fullColumnNames.length,()=>'The length of provided columnNames ('+this.fullColumnNames.length.toString()+") does not match the length of the header line read from file ("+s.length.toString()+').'),this.fullColumnNames||(this.fullColumnNames=s);const i=this.fullColumnNames.reduce((t,s)=>(t[s]=t[s]+1||1,t),{}),l=Object.keys(i).filter(t=>i[t]>1);if(t.util.assert(0===l.length,()=>'Duplicate column names found: '+l.toString()),this.columnConfigs)for(const t of Object.keys(this.columnConfigs)){if(-1===this.fullColumnNames.indexOf(t))throw new Error('The key "'+t+"\" provided in columnConfigs does not match any of the column names ("+this.fullColumnNames.toString()+').')}this.columnNamesValidated=!0}async maybeReadHeaderLine(){if(this.hasHeader){const t=await this.base.iterator(),s=await t.next();if(s.done)throw new Error('No data was found for CSV parsing.');const i=s.value;return this.parseRow(i,!1)}return null}constructor(s,l){super(),this.input=s,this.hasHeader=!0,this.fullColumnNames=null,this.columnNamesValidated=!1,this.columnConfigs=null,this.configuredColumnsOnly=!1,this.delimiter=',',this.delimWhitespace=!1,this.base=new i.TextLineDataset(s),l||(l={}),this.hasHeader=!1!==l.hasHeader,this.fullColumnNames=l.columnNames,this.columnConfigs=l.columnConfigs,this.configuredColumnsOnly=l.configuredColumnsOnly,l.delimWhitespace?(t.util.assert(null==l.delimiter,()=>'Delimiter should not be provided when delimWhitespace is true.'),this.delimWhitespace=!0,this.delimiter=' '):this.delimiter=l.delimiter?l.delimiter:','}async iterator(){this.columnNamesValidated||await this.setColumnNames();let t=await this.base.iterator();return this.hasHeader&&(t=t.skip(1)),t.map(t=>this.makeDataElement(t))}makeDataElement(t){const s=this.parseRow(t),i={},l={};for(let n=0;n<this.fullColumnNames.length;n++){const o=this.fullColumnNames[n],u=this.columnConfigs?this.columnConfigs[o]:null;if(!this.configuredColumnsOnly||u){const h=s[n];let c=null;if(''===h)if(u&&void 0!==u.default)c=u.default;else{if(u&&(u.required||u.isLabel))throw new Error(`Required column ${o} is empty in this line: ${t}`);c=void 0}else{const t=Number(h);if(isNaN(t))c=u&&'bool'===u.dtype?this.getBoolean(h):h;else if(u&&u.dtype)switch(u.dtype){case'float32':default:c=t;break;case'int32':c=Math.floor(t);break;case'bool':c=this.getBoolean(h)}else c=t}u&&u.isLabel?l[o]=c:i[o]=c}}return 0===Object.keys(l).length?i:{xs:i,ys:l}}getBoolean(t){return'1'===t||'true'===t.toLowerCase()?1:0}parseRow(t,s=!0){const i=[];let f=0;const b=t.length;let C=n;for(let s=0;s<b;s++)switch(C){case n:switch(t.charAt(s)){case l:f=s+1,C=u;break;case this.delimiter:if(f=s+1,' '===this.delimiter&&this.delimWhitespace)break;i.push(''),C=n;break;default:C=o,f=s}break;case o:if(t.charAt(s)===this.delimiter)i.push(t.substring(f,s)),C=n,f=s+1;break;case u:if(t.charAt(s)===l)C=h;break;case h:switch(t.charAt(s)){case this.delimiter:i.push(t.substring(f,s-1)),C=n,f=s+1;break;case l:C=u;break;default:C=c}break;case c:if(t.charAt(s)===l)C=u}if(C===h?i.push(t.substring(f,b-1)):i.push(t.substring(f)),s&&i.length!==this.fullColumnNames.length)throw new Error(`Invalid row in csv file. Should have ${this.fullColumnNames.length} elements in a row, but got ${i}`);return i}}e.CSVDataset=f},2244,[1158,2238,2245]);
__d(function(g,r,i,a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.TextLineDataset=void 0;var t=r(d[0]);
/**
   * @license
   * Copyright 2018 Google LLC. All Rights Reserved.
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
   *
   * =============================================================================
   */class s extends t.Dataset{constructor(t){super(),this.input=t}async iterator(){return(await this.input.iterator()).decodeUTF8().split('\n').map(t=>(t.endsWith('\r')&&(t=t.slice(0,-1)),t))}}e.TextLineDataset=s},2245,[2238]);
__d(function(g,r,i,a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.csv=
/**
   * @license
   * Copyright 2018 Google LLC. All Rights Reserved.
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
   *
   * =============================================================================
   */
function(t,o={}){return new n.CSVDataset(new s.URLDataSource(t),o)},e.func=function(n){const c=(0,o.iteratorFromFunction)(n);return(0,t.datasetFromIteratorFn)(async()=>c)},e.generator=function(n){return(0,t.datasetFromIteratorFn)(async()=>{const t=await n();return(0,o.iteratorFromFunction)(()=>t.next())})},e.microphone=async function(t){return c.MicrophoneIterator.create(t)},e.webcam=async function(t,n){return u.WebcamIterator.create(t,n)};var t=r(d[0]),n=r(d[1]),o=r(d[2]),c=r(d[3]),u=r(d[4]),s=r(d[5])},2246,[2238,2244,2239,2247,2248,2249]);
__d(function(g,r,_i,a,m,_e,d){Object.defineProperty(_e,"__esModule",{value:!0}),_e.MicrophoneIterator=void 0;var t=r(d[0]),e=r(d[1]);
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
   *
   * =============================================================================
   */
class i extends e.LazyIterator{constructor(t){super(),this.microphoneConfig=t,this.isClosed=!1,this.fftSize=t.fftSize||1024;const e=Math.log2(this.fftSize);if(this.fftSize<0||e<4||e>14||!Number.isInteger(e))throw new Error(`Invalid fftSize: it must be a power of 2 between 2 to 4 and 2 to 14, but got ${this.fftSize}`);if(this.numFrames=t.numFramesPerSpectrogram||43,this.sampleRateHz=t.sampleRateHz,this.columnTruncateLength=t.columnTruncateLength||this.fftSize,this.audioTrackConstraints=t.audioTrackConstraints,this.smoothingTimeConstant=t.smoothingTimeConstant||0,this.includeSpectrogram=!1!==t.includeSpectrogram,this.includeWaveform=!0===t.includeWaveform,!this.includeSpectrogram&&!this.includeWaveform)throw new Error("Both includeSpectrogram and includeWaveform are false. At least one type of data should be returned.")}summary(){return"microphone"}static async create(e={}){if(!(0,t.env)().get('IS_BROWSER'))throw new Error('microphone API is only supported in browser environment.');const s=new i(e);return await s.start(),s}async start(){try{this.stream=await navigator.mediaDevices.getUserMedia({audio:null==this.audioTrackConstraints||this.audioTrackConstraints,video:!1})}catch(t){throw new Error(`Error thrown while initializing video stream: ${t.message}`)}if(!this.stream)throw new Error('Could not obtain audio from microphone.');const t=window.AudioContext||window.webkitAudioContext;if(this.audioContext=new t,this.sampleRateHz){if(this.audioContext.sampleRate!==this.sampleRateHz)throw new Error(`Mismatch in sampling rate: Expected: ${this.sampleRateHz}; Actual: ${this.audioContext.sampleRate}`)}else this.sampleRateHz=this.audioContext.sampleRate;const e=this.audioContext.createMediaStreamSource(this.stream);this.analyser=this.audioContext.createAnalyser(),this.analyser.fftSize=2*this.fftSize,this.analyser.smoothingTimeConstant=this.smoothingTimeConstant,e.connect(this.analyser),this.freqData=new Float32Array(this.fftSize),this.timeData=new Float32Array(this.fftSize)}async next(){if(this.isClosed)return{value:null,done:!0};let t,e;const i=await this.getAudioData();if(this.includeSpectrogram){const e=this.flattenQueue(i.freqDataQueue);t=this.getTensorFromAudioDataArray(e,[this.numFrames,this.columnTruncateLength,1])}if(this.includeWaveform){const t=this.flattenQueue(i.timeDataQueue);e=this.getTensorFromAudioDataArray(t,[this.numFrames*this.fftSize,1])}return{value:{spectrogram:t,waveform:e},done:!1}}async capture(){return(await this.next()).value}async getAudioData(){const t=[],e=[];let i=0;return new Promise(s=>{const n=setInterval(()=>{this.includeSpectrogram&&(this.analyser.getFloatFrequencyData(this.freqData),this.freqData[0]===-1/0&&s({freqDataQueue:t,timeDataQueue:e}),t.push(this.freqData.slice(0,this.columnTruncateLength))),this.includeWaveform&&(this.analyser.getFloatTimeDomainData(this.timeData),e.push(this.timeData.slice())),++i===this.numFrames&&(clearInterval(n),s({freqDataQueue:t,timeDataQueue:e}))},this.fftSize/this.sampleRateHz*1e3)})}stop(){this.isClosed||(this.isClosed=!0,this.analyser.disconnect(),this.audioContext.close(),null!=this.stream&&this.stream.getTracks().length>0&&this.stream.getTracks()[0].stop())}toArray(){throw new Error('Can not convert infinite audio stream to array.')}getSampleRate(){return this.sampleRateHz}flattenQueue(t){const e=t[0].length,i=new Float32Array(t.length*e);return t.forEach((t,s)=>i.set(t,s*e)),i}getTensorFromAudioDataArray(e,i){const s=new Float32Array(t.util.sizeFromShape(i));return s.set(e,s.length-e.length),(0,t.tensor)(s,i)}}_e.MicrophoneIterator=i},2247,[1158,2239]);
__d(function(g,r,i,a,m,_e,d){Object.defineProperty(_e,"__esModule",{value:!0}),_e.WebcamIterator=void 0;var e=r(d[0]),t=r(d[1]);
/**
   * @license
   * Copyright 2018 Google LLC. All Rights Reserved.
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
   *
   * =============================================================================
   */
class s extends t.LazyIterator{constructor(t,s){if(super(),this.webcamVideoElement=t,this.webcamConfig=s,this.isClosed=!0,this.resize=!1,this.needToResize())if(this.resize=!0,this.cropSize=[this.webcamConfig.resizeHeight,this.webcamConfig.resizeWidth],this.cropBoxInd=(0,e.tensor1d)([0],'int32'),this.webcamConfig.centerCrop){const t=1*this.webcamConfig.resizeWidth/this.webcamVideoElement.width,s=1*this.webcamConfig.resizeHeight/this.webcamVideoElement.height,o=(1-t)/2,n=(1-s)/2,c=o+t,h=s+n;this.cropBox=(0,e.tensor2d)([n,o,h,c],[1,4])}else this.cropBox=(0,e.tensor2d)([0,0,1,1],[1,4])}summary(){return"webcam"}static async create(t,o={}){if(!(0,e.env)().get('IS_BROWSER'))throw new Error('tf.data.webcam is only supported in browser environment.');if(!t){if(t=document.createElement('video'),!o.resizeWidth||!o.resizeHeight)throw new Error("Please provide webcam video element, or resizeWidth and resizeHeight to create a hidden video element.");t.width=o.resizeWidth,t.height=o.resizeHeight}const n=new s(t,o);return await n.start(),n}async start(){this.webcamConfig.facingMode&&e.util.assert('user'===this.webcamConfig.facingMode||'environment'===this.webcamConfig.facingMode,()=>`Invalid webcam facing mode: ${this.webcamConfig.facingMode}. Please provide 'user' or 'environment'`);try{this.stream=await navigator.mediaDevices.getUserMedia({video:{deviceId:this.webcamConfig.deviceId,facingMode:this.webcamConfig.facingMode?this.webcamConfig.facingMode:'user',width:this.webcamVideoElement.width,height:this.webcamVideoElement.height}})}catch(e){throw e.message=`Error thrown while initializing video stream: ${e.message}`,e}if(!this.stream)throw new Error('Could not obtain video from webcam.');try{this.webcamVideoElement.srcObject=this.stream}catch(e){console.log(e),this.webcamVideoElement.src=window.URL.createObjectURL(this.stream)}return this.webcamVideoElement.play(),this.isClosed=!1,new Promise(e=>{this.webcamVideoElement.onloadedmetadata=()=>{e()}})}async next(){if(this.isClosed)return{value:null,done:!0};let t;try{t=e.browser.fromPixels(this.webcamVideoElement)}catch(e){throw new Error(`Error thrown converting video to pixels: ${JSON.stringify(e)}`)}if(!this.resize)return{value:t,done:!1};try{return{value:this.cropAndResizeFrame(t),done:!1}}catch(e){throw new Error(`Error thrown cropping the video: ${e.message}`)}finally{t.dispose()}}needToResize(){return!(!this.webcamConfig.resizeWidth||!this.webcamConfig.resizeHeight||this.webcamVideoElement.width===this.webcamConfig.resizeWidth&&this.webcamVideoElement.height===this.webcamConfig.resizeHeight)}cropAndResizeFrame(t){return(0,e.tidy)(()=>{const s=(0,e.expandDims)((0,e.cast)(t,'float32'),0);let o;o=e.image.cropAndResize(s,this.cropBox,this.cropBoxInd,this.cropSize,'bilinear');const n=o.shape;return(0,e.reshape)(o,n.slice(1))})}async capture(){return(await this.next()).value}stop(){this.stream.getTracks().forEach(e=>e.stop());try{this.webcamVideoElement.srcObject=null}catch(e){console.log(e),this.webcamVideoElement.src=null}this.isClosed=!0}toArray(){throw new Error('Can not convert infinite video stream to array.')}}_e.WebcamIterator=s},2248,[1158,2239]);
__d(function(g,r,i,a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.URLDataSource=void 0;var t=r(d[0]),s=r(d[1]),o=r(d[2]),u=r(d[3]);
/**
   * @license
   * Copyright 2018 Google LLC. All Rights Reserved.
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
   *
   * =============================================================================
   */
class l extends t.DataSource{constructor(t,s={}){super(),this.url=t,this.fileOptions=s}async iterator(){return(0,o.isLocalPath)(this.url)?new u.FileDataSource(this.url,this.fileOptions).iterator():(0,s.urlChunkIterator)(this.url,this.fileOptions)}}e.URLDataSource=l},2249,[2250,2251,2255,2256]);
__d(function(g,r,i,a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.DataSource=void 0;e.DataSource=
/**
   * @license
   * Copyright 2018 Google LLC. All Rights Reserved.
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
   *
   * =============================================================================
   */
class{}},2250,[]);
__d(function(g,r,i,a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.urlChunkIterator=
/**
   * @license
   * Copyright 2018 Google LLC. All Rights Reserved.
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
   *
   * =============================================================================
   */
async function(c,s={},u){let f,h;'string'==typeof c?f=c:(f=c.url,h=o(c));const l=await(u||t.util.fetch)(f,h);if(l.ok){const t=new Uint8Array(await l.arrayBuffer());return new n.FileChunkIterator(t,s)}throw new Error(l.statusText)};var t=r(d[0]),n=r(d[1]);const o=t=>({method:t.method,headers:t.headers,body:t.body,mode:t.mode,credentials:t.credentials,cache:t.cache,redirect:t.redirect,referrer:t.referrer,integrity:t.integrity})},2251,[1158,2252]);
__d(function(g,r,i,a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.FileChunkIterator=void 0;var t=r(d[0]),n=r(d[1]);
/**
   * @license
   * Copyright 2018 Google LLC. All Rights Reserved.
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
   *
   * =============================================================================
   */
class s extends n.ByteChunkIterator{constructor(n,s={}){super(),this.file=n,this.options=s,t.util.assert(n instanceof Uint8Array||!!(0,t.env)().get('IS_BROWSER')&&(n instanceof File||n instanceof Blob),()=>"FileChunkIterator only supports File, Blob and Uint8Array right now."),this.offset=s.offset||0,this.chunkSize=s.chunkSize||1048576}summary(){return`FileChunks ${this.file}`}async next(){if(this.offset>=(this.file instanceof Uint8Array?this.file.byteLength:this.file.size))return{value:null,done:!0};const t=new Promise((t,n)=>{const s=this.offset+this.chunkSize;if(this.file instanceof Uint8Array)t(new Uint8Array(this.file.slice(this.offset,s)));else{const o=new FileReader;o.onload=s=>{let f=o.result;if(f instanceof ArrayBuffer&&(f=new Uint8Array(f)),!(f instanceof Uint8Array))return n(new TypeError('FileReader returned unknown type.'));t(f)},o.onabort=t=>n(new Error('Aborted')),o.onerror=t=>n(new Error(t.type));const f=this.file.slice(this.offset,s);o.readAsArrayBuffer(f)}this.offset=s});return{value:await t,done:!1}}}e.FileChunkIterator=s},2252,[1158,2253]);
__d(function(g,r,i,a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.ByteChunkIterator=void 0;var t=r(d[0]),s=r(d[1]),n=r(d[2]);
/**
   * @license
   * Copyright 2018 Google LLC. All Rights Reserved.
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
   *
   * =============================================================================
   */
class u extends s.LazyIterator{decodeUTF8(){return new o(this)}}e.ByteChunkIterator=u;class o extends n.StringIterator{constructor(t){super(),this.upstream=t,this.impl=new c(t)}summary(){return this.impl.summary()}async next(){return this.impl.next()}}class c extends s.OneToManyIterator{constructor(s){if(super(),this.upstream=s,(0,t.env)().get('IS_BROWSER'))this.decoder=new TextDecoder('utf-8');else{const{StringDecoder:t}=r(d[3]);this.decoder=new t('utf8')}}summary(){return`${this.upstream.summary()} -> Utf8`}async pump(){const s=await this.upstream.next();let n,u;return!s.done&&(n=s.value,u=(0,t.env)().get('IS_BROWSER')?this.decoder.decode(n,{stream:!0}):this.decoder.write(Buffer.from(n.buffer)),this.outputQueue.push(u),!0)}}},2253,[1158,2239,2254,479]);
__d(function(g,r,i,a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.StringIterator=void 0;var t=r(d[0]);
/**
   * @license
   * Copyright 2018 Google LLC. All Rights Reserved.
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
   *
   * =============================================================================
   */class s extends t.LazyIterator{split(t){return new u(this,t)}}e.StringIterator=s;class u extends s{constructor(t,s){super(),this.upstream=t,this.impl=new n(t,s)}summary(){return this.impl.summary()}async next(){return this.impl.next()}}class n extends t.OneToManyIterator{constructor(t,s){super(),this.upstream=t,this.separator=s,this.carryover=''}summary(){return`${this.upstream.summary()} -> Split('${this.separator}')`}async pump(){const t=await this.upstream.next();if(t.done)return''!==this.carryover&&(this.outputQueue.push(this.carryover),this.carryover='',!0);const s=t.value.split(this.separator);s[0]=this.carryover+s[0];for(const t of s.slice(0,-1))this.outputQueue.push(t);return this.carryover=s[s.length-1],!0}}},2254,[2239]);
__d(function(g,r,i,a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.isLocalPath=
/**
   * @license
   * Copyright 2018 Google LLC. All Rights Reserved.
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
   *
   * =============================================================================
   */
function(t){return'string'==typeof t&&'file://'===t.slice(0,7)}},2255,[]);
__d(function(g,r,i,a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.FileDataSource=void 0;var t=r(d[0]),n=r(d[1]),s=r(d[2]),o=r(d[3]);
/**
   * @license
   * Copyright 2018 Google LLC. All Rights Reserved.
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
   *
   * =============================================================================
   */
class u extends n.DataSource{constructor(t,n={}){super(),this.input=t,this.options=n}async iterator(){if((0,o.isLocalPath)(this.input)&&(0,t.env)().get('IS_NODE')){const t=r(d[4]);this.input=t.readFileSync(this.input.slice(7))}return new s.FileChunkIterator(this.input,this.options)}}e.FileDataSource=u},2256,[1158,2250,2252,2255,479]);
__d(function(g,r,i,a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.version=void 0;
/** @license See the LICENSE file. */
e.version='4.22.0'},2257,[]);
__d(function(g,r,i,a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0});var n=r(d[0]);Object.keys(n).forEach(function(t){"default"!==t&&"__esModule"!==t&&(t in e&&e[t]===n[t]||Object.defineProperty(e,t,{enumerable:!0,get:function(){return n[t]}}))}),r(d[1])},2258,[2259,2262]);
__d(function(g,_r,_i,a,m,_e,d){Object.defineProperty(_e,"__esModule",{value:!0}),Object.defineProperty(_e,"MathBackendCPU",{enumerable:!0,get:function(){return t.MathBackendCPU}}),_e.shared=void 0,Object.defineProperty(_e,"version_cpu",{enumerable:!0,get:function(){return r.version}});var e=_r(d[0]),t=_r(d[1]),n=(function(e,t){if("function"==typeof WeakMap)var n=new WeakMap,r=new WeakMap;return(function(e,t){if(!t&&e&&e.__esModule)return e;var o,u,c={__proto__:null,default:e};if(null===e||"object"!=typeof e&&"function"!=typeof e)return c;if(o=t?r:n){if(o.has(e))return o.get(e);o.set(e,c)}for(const t in e)"default"!==t&&{}.hasOwnProperty.call(e,t)&&((u=(o=Object.defineProperty)&&Object.getOwnPropertyDescriptor(e,t))&&(u.get||u.set)?o(c,t,u):c[t]=e[t]);return c})(e,t)}
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
   */)(_r(d[2]));_e.shared=n;var r=_r(d[3]);(0,e.registerBackend)('cpu',()=>new t.MathBackendCPU,1)},2259,[1158,2260,1516,2261]);
__d(function(g,r,i,a,m,e,_d){Object.defineProperty(e,"__esModule",{value:!0}),e.MathBackendCPU=void 0;var t=r(_d[0]),n=r(_d[1]);
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
const s=t.kernel_impls.whereImpl;class d extends t.KernelBackend{nextDataId(){return d.nextDataId++}constructor(){super(),this.blockSize=48,this.firstUse=!0,this.data=new t.DataStorage(this,(0,t.engine)())}write(n,s,d){this.firstUse&&(this.firstUse=!1,(0,t.env)().get('IS_NODE')&&t.backend_util.warn("\n============================\nHi, looks like you are running TensorFlow.js in Node.js. To speed things up dramatically, install our node backend, visit https://github.com/tensorflow/tfjs-node for more details. \n============================"));const o={id:this.nextDataId()};return this.data.set(o,{values:n,dtype:d,refCount:1}),o}makeTensorInfo(n,s,d){let o;if('string'===s&&null!=d&&d.length>0&&t.util.isString(d[0])){const u=d.map(n=>t.util.encodeString(n));o=this.write(u,n,s)}else o=this.write(d,n,s);return{dataId:o,shape:n,dtype:s}}refCount(t){if(this.data.has(t)){return this.data.get(t).refCount}return 0}incRef(t){this.data.get(t).refCount++}decRef(t){if(this.data.has(t)){this.data.get(t).refCount--}}move(t,n,s,d,o){this.data.set(t,{values:n,dtype:d,refCount:o})}numDataIds(){return this.data.numDataIds()}async read(t){return this.readSync(t)}readSync(n){const{dtype:s,complexTensorInfos:d}=this.data.get(n);if('complex64'===s){const n=this.readSync(d.real.dataId),s=this.readSync(d.imag.dataId);return t.backend_util.mergeRealAndImagArrays(n,s)}return t.util.convertBackendValuesAndArrayBuffer(this.data.get(n).values,s)}bufferSync(n){const s=this.readSync(n.dataId);if('string'===n.dtype)try{const d=s.map(n=>t.util.decodeString(n));return(0,t.buffer)(n.shape,n.dtype,d)}catch(t){throw new Error('Failed to decode encoded string bytes into utf-8')}return(0,t.buffer)(n.shape,n.dtype,s)}makeOutput(n,s,d){return(0,t.engine)().makeTensorFromTensorInfo(this.makeTensorInfo(s,d,n),this)}disposeData(t,n=!1){if(this.data.has(t)){if(this.data.get(t).refCount--,!n&&this.data.get(t).refCount>0)return!1;const{complexTensorInfos:s}=this.data.get(t);null!=s&&(this.disposeData(s.real.dataId,!0),this.disposeData(s.imag.dataId,!0)),this.data.delete(t)}return!0}disposeIntermediateTensorInfo(t){this.disposeData(t.dataId)}async time(n){const s=t.util.now();n();return{kernelMs:t.util.now()-s}}memory(){return{unreliable:!0,reasons:["The reported memory is an upper bound. Due to automatic garbage collection, the true allocated memory may be less."]}}where(t){(0,n.assertNotComplex)([t],'where');const d=this.readSync(t.dataId);return s(t.shape,d)}dispose(){}floatPrecision(){return 32}epsilon(){return super.epsilon()}}e.MathBackendCPU=d,d.nextDataId=0},2260,[1158,1515]);
__d(function(g,r,i,a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.version=void 0;
/** @license See the LICENSE file. */
e.version='4.22.0'},2261,[]);
__d(function(g,r,i,a,m,e,d){var o=r(d[0]),n=r(d[1]),f=r(d[2]),C=r(d[3]),s=r(d[4]),t=r(d[5]),l=r(d[6]),p=r(d[7]),c=r(d[8]),u=r(d[9]),h=r(d[10]),D=r(d[11]),v=r(d[12]),x=r(d[13]),N=r(d[14]),S=r(d[15]),k=r(d[16]),B=r(d[17]),b=r(d[18]),G=r(d[19]),M=r(d[20]),P=r(d[21]),R=r(d[22]),q=r(d[23]),V=r(d[24]),w=r(d[25]),T=r(d[26]),F=r(d[27]),y=r(d[28]),z=r(d[29]),A=r(d[30]),I=r(d[31]),L=r(d[32]),E=r(d[33]),_=r(d[34]),H=r(d[35]),K=r(d[36]),O=r(d[37]),W=r(d[38]),U=r(d[39]),j=r(d[40]),J=r(d[41]),Q=r(d[42]),X=r(d[43]),Y=r(d[44]),Z=r(d[45]),$=r(d[46]),oo=r(d[47]),io=r(d[48]),no=r(d[49]),go=r(d[50]),fo=r(d[51]),Co=r(d[52]),eo=r(d[53]),ao=r(d[54]),ro=r(d[55]),so=r(d[56]),to=r(d[57]),lo=r(d[58]),po=r(d[59]),co=r(d[60]),uo=r(d[61]),mo=r(d[62]),ho=r(d[63]),Do=r(d[64]),vo=r(d[65]),xo=r(d[66]),No=r(d[67]),So=r(d[68]),ko=r(d[69]),Bo=r(d[70]),bo=r(d[71]),Go=r(d[72]),Mo=r(d[73]),Po=r(d[74]),Ro=r(d[75]),qo=r(d[76]),Vo=r(d[77]),wo=r(d[78]),To=r(d[79]),Fo=r(d[80]),yo=r(d[81]),zo=r(d[82]),Ao=r(d[83]),Io=r(d[84]),Lo=r(d[85]),Eo=r(d[86]),_o=r(d[87]),Ho=r(d[88]),Ko=r(d[89]),Oo=r(d[90]),Wo=r(d[91]),Uo=r(d[92]),jo=r(d[93]),Jo=r(d[94]),Qo=r(d[95]),Xo=r(d[96]),Yo=r(d[97]),Zo=r(d[98]),$o=r(d[99]),oi=r(d[100]),ii=r(d[101]),ni=r(d[102]),gi=r(d[103]),fi=r(d[104]),Ci=r(d[105]),ei=r(d[106]),ai=r(d[107]),ri=r(d[108]),si=r(d[109]),ti=r(d[110]),li=r(d[111]),pi=r(d[112]),ci=r(d[113]),di=r(d[114]),ui=r(d[115]),mi=r(d[116]),hi=r(d[117]),Di=r(d[118]),vi=r(d[119]),xi=r(d[120]),Ni=r(d[121]),Si=r(d[122]),ki=r(d[123]),Bi=r(d[124]),bi=r(d[125]),Gi=r(d[126]),Mi=r(d[127]),Pi=r(d[128]),Ri=r(d[129]),qi=r(d[130]),Vi=r(d[131]),wi=r(d[132]),Ti=r(d[133]),Fi=r(d[134]),yi=r(d[135]),zi=r(d[136]),Ai=r(d[137]),Ii=r(d[138]),Li=r(d[139]),Ei=r(d[140]),_i=r(d[141]),Hi=r(d[142]),Ki=r(d[143]),Oi=r(d[144]),Wi=r(d[145]),Ui=r(d[146]),ji=r(d[147]),Ji=r(d[148]),Qi=r(d[149]),Xi=r(d[150]),Yi=r(d[151]),Zi=r(d[152]),$i=r(d[153]),on=r(d[154]),nn=r(d[155]),gn=r(d[156]),fn=r(d[157]),Cn=r(d[158]),en=r(d[159]),an=r(d[160]),rn=r(d[161]),sn=r(d[162]),tn=r(d[163]),ln=r(d[164]),pn=r(d[165]),cn=r(d[166]),dn=r(d[167]),un=r(d[168]),mn=r(d[169]),hn=r(d[170]),Dn=r(d[171]),vn=r(d[172]);
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
const xn=[n._fusedMatMulConfig,f.absConfig,C.acosConfig,s.acoshConfig,t.addConfig,l.addNConfig,p.allConfig,c.anyConfig,u.argMaxConfig,h.argMinConfig,D.asinConfig,v.asinhConfig,x.atanConfig,N.atan2Config,S.atanhConfig,k.avgPoolConfig,B.avgPool3DConfig,b.avgPool3DGradConfig,G.avgPoolGradConfig,M.batchMatMulConfig,P.batchNormConfig,R.batchToSpaceNDConfig,q.bincountConfig,V.bitwiseAndConfig,w.broadcastArgsConfig,T.castConfig,F.ceilConfig,y.clipByValueConfig,z.complexConfig,A.complexAbsConfig,I.concatConfig,L.conv2DConfig,E.conv2DBackpropFilterConfig,_.conv2DBackpropInputConfig,H.conv3DConfig,K.conv3DBackpropFilterV2Config,O.conv3DBackpropInputV2Config,W.cosConfig,U.coshConfig,j.cropAndResizeConfig,J.cumprodConfig,Q.cumsumConfig,X.denseBincountConfig,Y.depthToSpaceConfig,Z.depthwiseConv2dNativeConfig,$.depthwiseConv2dNativeBackpropFilterConfig,oo.depthwiseConv2dNativeBackpropInputConfig,io.diagConfig,no.dilation2DConfig,go.dilation2DBackpropFilterConfig,fo.dilation2DBackpropInputConfig,Co.drawConfig,eo.einsumConfig,ao.eluConfig,ro.eluGradConfig,so.equalConfig,to.erfConfig,lo.expConfig,po.expandDimsConfig,co.expm1Config,uo.fftConfig,mo.fillConfig,ho.flipLeftRightConfig,Do.floorConfig,vo.floorDivConfig,xo.fusedConv2DConfig,No.fusedDepthwiseConv2DConfig,So.gatherNdConfig,ko.gatherV2Config,Bo.greaterConfig,bo.greaterEqualConfig,Go.identityConfig,Mo.ifftConfig,Po.imagConfig,Ro.isFiniteConfig,qo.isInfConfig,Vo.isNaNConfig,wo.leakyReluConfig,To.lessConfig,Fo.lessEqualConfig,yo.linSpaceConfig,zo.logConfig,Ao.log1pConfig,Io.logicalAndConfig,Lo.logicalNotConfig,Eo.logicalOrConfig,_o.LRNConfig,Ho.LRNGradConfig,Ko.maxConfig,Oo.maximumConfig,Wo.maxPoolConfig,Uo.maxPool3DConfig,jo.maxPool3DGradConfig,Jo.maxPoolGradConfig,Qo.maxPoolWithArgmaxConfig,Xo.meanConfig,Yo.minConfig,Zo.minimumConfig,$o.mirrorPadConfig,oi.modConfig,ii.multinomialConfig,ni.multiplyConfig,gi.negConfig,fi.nonMaxSuppressionV3Config,Ci.nonMaxSuppressionV4Config,ei.nonMaxSuppressionV5Config,ai.notEqualConfig,ri.oneHotConfig,si.onesLikeConfig,ti.packConfig,li.padV2Config,pi.powConfig,ci.preluConfig,di.prodConfig,ui.raggedGatherConfig,mi.raggedRangeConfig,hi.raggedTensorToTensorConfig,Di.rangeConfig,vi.realConfig,xi.realDivConfig,Ni.reciprocalConfig,Si.reluConfig,ki.relu6Config,Bi.reshapeConfig,bi.resizeBilinearConfig,Gi.resizeBilinearGradConfig,Mi.resizeNearestNeighborConfig,Pi.resizeNearestNeighborGradConfig,Ri.reverseConfig,qi.rotateWithOffsetConfig,Vi.roundConfig,wi.rsqrtConfig,Ti.scatterNdConfig,Fi.searchSortedConfig,yi.selectConfig,zi.seluConfig,Ai.sigmoidConfig,Ii.signConfig,Li.sinConfig,Ei.sinhConfig,_i.sliceConfig,Hi.softmaxConfig,Ki.softplusConfig,Oi.spaceToBatchNDConfig,Wi.sparseFillEmptyRowsConfig,Ui.sparseReshapeConfig,ji.sparseSegmentMeanConfig,Ji.sparseSegmentSumConfig,Qi.sparseToDenseConfig,Xi.splitVConfig,Yi.sqrtConfig,Zi.squareConfig,$i.squaredDifferenceConfig,on.staticRegexReplaceConfig,nn.stepConfig,gn.stridedSliceConfig,fn.stringNGramsConfig,Cn.stringSplitConfig,en.stringToHashBucketFastConfig,an.subConfig,rn.sumConfig,sn.tanConfig,tn.tanhConfig,ln.tensorScatterUpdateConfig,pn.tileConfig,cn.topKConfig,dn.transformConfig,un.transposeConfig,mn.uniqueConfig,hn.unpackConfig,Dn.unsortedSegmentSumConfig,vn.zerosLikeConfig];for(const n of xn)(0,o.registerKernel)(n)},2262,[1158,2263,1517,2272,2273,1518,2274,2275,2276,2277,2278,2279,2280,2281,2282,2283,2284,2286,2287,2288,2270,2289,2290,2291,1527,2292,1521,1528,2293,1523,2294,2295,2297,2298,2299,2300,2301,2302,2303,2304,2305,2306,2307,2308,2309,2310,2311,2312,2313,2314,2315,2316,2317,2318,2265,2320,1532,2321,1533,2322,1534,2323,2326,2327,1535,1536,2328,2329,2330,2331,1539,1540,1524,2332,2296,2333,2334,2335,2266,1541,1542,2336,1544,2337,2338,2339,2340,2341,2342,2343,1546,2344,2345,2346,2347,2348,2350,2351,1547,2352,2353,2354,1548,1549,2356,2357,2358,1550,2359,2360,2362,2363,2364,2267,1551,2365,2366,2367,2368,1525,2325,2369,2268,2269,2271,2370,2371,2372,2373,2374,2375,2376,1558,2377,2378,2380,2381,1560,2382,2383,2384,1561,2355,2385,2386,2387,2388,2389,2390,2391,2392,1565,2393,1566,1567,2394,2395,2396,2397,2398,1572,2319,2399,2400,2401,2402,2403,2404,1552,2405,2406,2407,2361]);
__d(function(g,r,_i,_a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e._fusedMatMul=u,e._fusedMatMulConfig=void 0;var t=r(d[0]),a=r(d[1]),n=r(d[2]),s=r(d[3]);
/**
   * @license
   * Copyright 2020 Google LLC. All Rights Reserved.
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
function u(t){const{inputs:u,backend:o,attrs:i}=t,{a:c,b:p,bias:l,preluActivationWeights:f}=u,{transposeA:M,transposeB:b,activation:_,leakyreluAlpha:k}=i;let v,h,A;const y=[];v=(0,s.batchMatMul)({inputs:{a:c,b:p},attrs:{transposeA:M,transposeB:b},backend:o}),l&&(h=(0,n.add)({inputs:{a:v,b:l},backend:o}),y.push(v),v=h),_&&(A=(0,a.applyActivation)(o,v,_,f,k),y.push(v),v=A);for(const t of y)o.disposeIntermediateTensorInfo(t);return v}e._fusedMatMulConfig={kernelName:t._FusedMatMul,backendName:'cpu',kernelFunc:u}},2263,[1158,2264,1518,2270]);
__d(function(g,r,i,a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.applyActivation=
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
function(s,f,b,k,x){if('linear'===b)return(0,t.identity)({inputs:{x:f},backend:s});if('relu'===b)return(0,p.relu)({inputs:{x:f},backend:s});if('elu'===b)return(0,n.elu)({inputs:{x:f},backend:s});if('relu6'===b)return(0,c.relu6)({inputs:{x:f},backend:s});if('prelu'===b)return(0,l.prelu)({inputs:{x:f,alpha:k},backend:s});if('leakyrelu'===b)return(0,u.leakyRelu)({inputs:{x:f},backend:s,attrs:{alpha:x}});if('sigmoid'===b)return(0,o.sigmoid)({inputs:{x:f},backend:s});throw new Error(`Activation ${b} has not been implemented for the CPU backend.`)};var n=r(d[0]),t=r(d[1]),u=r(d[2]),l=r(d[3]),p=r(d[4]),c=r(d[5]),o=r(d[6])},2264,[2265,1524,2266,2267,2268,2269,1560]);
__d(function(g,r,i,a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.eluConfig=e.elu=void 0;var n=r(d[0]),u=r(d[1]);
/**
   * @license
   * Copyright 2020 Google LLC. All Rights Reserved.
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
const l=e.elu=(0,u.unaryKernelFunc)(n.Elu,n=>n>=0?n:Math.exp(n)-1);e.eluConfig={kernelName:n.Elu,backendName:'cpu',kernelFunc:l}},2265,[1158,1530]);
__d(function(g,r,_i,a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.leakyRelu=n,e.leakyReluConfig=void 0;var l=r(d[0]),t=r(d[1]);
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
function n(n){const{inputs:o,backend:u,attrs:s}=n,{x:i}=o,{alpha:k}=s;(0,t.assertNotComplex)([i],'leakyRelu');const p=l.util.sizeFromShape(i.shape),c=u.data.get(i.dataId).values,f=l.util.getTypedArrayFromDType('float32',p);for(let l=0;l<c.length;l++)f[l]=c[l]<0?k*c[l]:c[l];return u.makeTensorInfo(i.shape,'float32',f)}e.leakyReluConfig={kernelName:l.LeakyRelu,backendName:'cpu',kernelFunc:n}},2266,[1158,1515]);
__d(function(g,r,i,a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.prelu=o,e.preluConfig=void 0;var n=r(d[0]),t=r(d[1]);
/**
   * @license
   * Copyright 2020 Google LLC. All Rights Reserved.
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
const l=(0,r(d[2]).createSimpleBinaryKernelImpl)((n,t)=>n<0?t*n:n);function o(n){const{inputs:o,backend:u}=n,{x:p,alpha:s}=o;(0,t.assertNotComplex)([p,s],'prelu');const c=u.data.get(p.dataId).values,f=u.data.get(s.dataId).values,[k,v]=l(p.shape,s.shape,c,f,'float32');return u.makeTensorInfo(v,'float32',k)}e.preluConfig={kernelName:n.Prelu,backendName:'cpu',kernelFunc:o}},2267,[1158,1515,1519]);
__d(function(g,r,i,a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.reluConfig=e.relu=void 0;var n=r(d[0]),u=r(d[1]);
/**
   * @license
   * Copyright 2020 Google LLC. All Rights Reserved.
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
const l=e.relu=(0,u.unaryKernelFunc)(n.Relu,n=>Math.max(0,n));e.reluConfig={kernelName:n.Relu,backendName:'cpu',kernelFunc:l}},2268,[1158,1530]);
__d(function(g,r,i,a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.relu6Config=e.relu6=void 0;var n=r(d[0]),u=r(d[1]);
/**
   * @license
   * Copyright 2020 Google LLC. All Rights Reserved.
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
const l=e.relu6=(0,u.unaryKernelFunc)(n.Relu6,n=>Math.min(Math.max(0,n),6));e.relu6Config={kernelName:n.Relu6,backendName:'cpu',kernelFunc:l}},2269,[1158,1530]);
__d(function(g,r,_i,_a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.batchMatMul=n,e.batchMatMulConfig=void 0;var a=r(d[0]),s=r(d[1]),t=r(d[2]);
/**
   * @license
   * Copyright 2020 Google LLC. All Rights Reserved.
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
function n(n){const{inputs:p,backend:o,attrs:h}=n,{a:l,b:i}=p,{transposeA:c,transposeB:u}=h;(0,s.assertNotComplex)([l,i],'matMul');const f=l.shape.length,M=i.shape.length,b=c?l.shape[f-2]:l.shape[f-1],k=u?i.shape[M-1]:i.shape[M-2],v=c?l.shape[f-1]:l.shape[f-2],I=u?i.shape[M-2]:i.shape[M-1],S=l.shape.slice(0,-2),$=i.shape.slice(0,-2),_=a.util.sizeFromShape(S),x=a.util.sizeFromShape($),B=a.broadcast_util.assertAndGetBroadcastShape(l.shape.slice(0,-2),i.shape.slice(0,-2)).concat([v,I]);a.util.assert(b===k,()=>`Error in matMul: inner shapes (${b}) and (${k}) of Tensors with shapes ${l.shape} and ${i.shape} and transposeA=${c} and transposeB=${u} must match.`);const T=c?[_,b,v]:[_,v,b],y=u?[x,I,k]:[x,k,I],z=(0,t.reshape)({inputs:{x:l},backend:o,attrs:{shape:T}}),A=(0,t.reshape)({inputs:{x:i},backend:o,attrs:{shape:y}}),C=c?z.shape[1]:z.shape[2],F=c?z.shape[2]:z.shape[1],N=u?A.shape[1]:A.shape[2],j=Math.max(_,x),w=o.data.get(z.dataId).values,E=o.data.get(A.dataId).values,G=a.util.computeStrides(z.shape),O=a.util.computeStrides(A.shape),[P,q,D]=c?[G[0],1,G[1]]:[G[0],G[1],1],[H,J,K]=u?[1,O[1],O[0]]:[O[1],1,O[0]],L=F*N,Q=(0,a.buffer)([j,F,N],z.dtype),R=Q.values,U=o.blockSize;for(let a=0;a<j;a++){const s=a%_,t=a%x;for(let n=0;n<F;n+=U){const p=Math.min(n+U,F);for(let o=0;o<N;o+=U){const h=Math.min(o+U,N);for(let l=0;l<C;l+=U){const i=Math.min(l+U,C);for(let c=n;c<p;c++)for(let n=o;n<h;n++){let p=0;for(let a=l;a<i;a++){p+=w[s*P+c*q+a*D]*E[a*H+n*J+t*K]}R[a*L+(c*N+n)]+=p}}}}}return o.disposeIntermediateTensorInfo(z),o.disposeIntermediateTensorInfo(A),o.makeTensorInfo(B,Q.dtype,Q.values)}e.batchMatMulConfig={kernelName:a.BatchMatMul,backendName:'cpu',kernelFunc:n}},2270,[1158,1515,2271]);
__d(function(g,r,i,a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.reshape=n,e.reshapeConfig=void 0;var s=r(d[0]);
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
   */function n(n){const{inputs:t,backend:p,attrs:o}=n,{x:h}=t,{shape:l}=o,c=s.util.sizeFromShape(h.shape),u=s.util.inferFromImplicitShape(l,c),f=s.util.sizeFromShape(u);s.util.assert(c===f,()=>`The new shape (${u}) has ${f} elements and the old shape (${h.shape}) has ${c} elements. The new shape and old shape must have the same number of elements.`),p.incRef(h.dataId);const I=p.data.get(h.dataId);if(null!=I.complexTensorInfos){const s=I.complexTensorInfos.real,n=I.complexTensorInfos.imag;s.shape=u,n.shape=u}return{dataId:h.dataId,shape:u,dtype:h.dtype}}e.reshapeConfig={kernelName:s.Reshape,backendName:'cpu',kernelFunc:n}},2271,[1158]);
__d(function(g,r,i,a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.acosConfig=e.acos=void 0;var c=r(d[0]),o=r(d[1]);
/**
   * @license
   * Copyright 2020 Google LLC. All Rights Reserved.
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
const n=e.acos=(0,o.unaryKernelFunc)(c.Acos,c=>Math.acos(c));e.acosConfig={kernelName:c.Acos,backendName:'cpu',kernelFunc:n}},2272,[1158,1530]);
__d(function(g,r,i,a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.acoshConfig=e.acosh=void 0;var c=r(d[0]),o=r(d[1]);
/**
   * @license
   * Copyright 2020 Google LLC. All Rights Reserved.
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
const n=e.acosh=(0,o.unaryKernelFunc)(c.Acosh,c=>Math.acosh(c));e.acoshConfig={kernelName:c.Acosh,backendName:'cpu',kernelFunc:n}},2273,[1158,1530]);
__d(function(g,r,_i,a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.addN=o,e.addNConfig=void 0;var n=r(d[0]),t=r(d[1]);
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
function o(o){const{inputs:s,backend:l}=o,u=s;(0,t.assertNotComplex)(s,'addN');const c=u.map(n=>l.data.get(n.dataId).values),f=(0,n.buffer)(u[0].shape,u[0].dtype),p=f.values;for(let n=0;n<u.length;n++){const t=c[n];for(let n=0;n<p.length;n++)p[n]+=t[n]}return l.makeTensorInfo(f.shape,f.dtype,f.values)}e.addNConfig={kernelName:n.AddN,backendName:'cpu',kernelFunc:o}},2274,[1158,1515]);
__d(function(g,r,_i,a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.all=o,e.allConfig=void 0;var t=r(d[0]),n=r(d[1]),s=r(d[2]),l=r(d[3]);
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
function o(o){const{inputs:i,backend:p,attrs:u}=o,{x:c}=i,{axis:h,keepDims:k}=u;(0,n.assertNotComplex)(c,'all');const f=t.util.parseAxisParam(h,c.shape);let b=f;const x=t.backend_util.getAxesPermutation(b,c.shape.length);let _=c;null!=x&&(_=(0,l.transpose)({inputs:{x:c},backend:p,attrs:{perm:x}}),b=t.backend_util.getInnerMostAxes(b.length,c.shape.length)),t.backend_util.assertAxesAreInnerMostDims('all',b,_.shape.length);const[A,I]=t.backend_util.computeOutAndReduceShapes(_.shape,b),y=t.util.sizeFromShape(I),T=t.util.makeZerosTypedArray(t.util.sizeFromShape(A),_.dtype),v=p.data.get(_.dataId).values;for(let t=0;t<T.length;++t){const n=t*y;let s=v[n];for(let t=0;t<y;++t){const l=v[n+t];s=s&&l}T[t]=s}null!=x&&p.disposeIntermediateTensorInfo(_);const S=p.makeTensorInfo(A,_.dtype,T);if(k){const n=t.backend_util.expandShapeToKeepDim(A,f),l=(0,s.reshape)({inputs:{x:S},backend:p,attrs:{shape:n}});return p.disposeIntermediateTensorInfo(S),l}return S}e.allConfig={kernelName:t.All,backendName:'cpu',kernelFunc:o}},2275,[1158,1515,2271,1552]);
__d(function(g,r,_i,a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.any=i,e.anyConfig=void 0;var t=r(d[0]),n=r(d[1]),s=r(d[2]),o=r(d[3]);
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
function i(i){const{inputs:l,backend:p,attrs:u}=i,{x:c}=l,{axis:h,keepDims:k}=u;(0,n.assertNotComplex)(c,'any');const f=t.util.parseAxisParam(h,c.shape);let y=f;const b=t.backend_util.getAxesPermutation(y,c.shape.length);let x=c;null!=b&&(x=(0,o.transpose)({inputs:{x:c},backend:p,attrs:{perm:b}}),y=t.backend_util.getInnerMostAxes(y.length,c.shape.length)),t.backend_util.assertAxesAreInnerMostDims('any',y,x.shape.length);const[_,A]=t.backend_util.computeOutAndReduceShapes(x.shape,y),I=t.util.sizeFromShape(A),T=t.util.makeZerosTypedArray(t.util.sizeFromShape(_),x.dtype),v=p.data.get(x.dataId).values;for(let t=0;t<T.length;++t){const n=t*I;let s=v[n];for(let t=0;t<I;++t){const o=v[n+t];s=s||o}T[t]=s}null!=b&&p.disposeIntermediateTensorInfo(x);const S=p.makeTensorInfo(_,x.dtype,T);if(k){const n=t.backend_util.expandShapeToKeepDim(_,f),o=(0,s.reshape)({inputs:{x:S},backend:p,attrs:{shape:n}});return p.disposeIntermediateTensorInfo(S),o}return S}e.anyConfig={kernelName:t.Any,backendName:'cpu',kernelFunc:i}},2276,[1158,1515,2271,1552]);
__d(function(g,r,_i,a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.argMax=o,e.argMaxConfig=void 0;var t=r(d[0]),n=r(d[1]),s=r(d[2]);
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
function o(o){const{inputs:i,backend:l,attrs:u}=o,{x:c}=i,{axis:p}=u;(0,n.assertNotComplex)(c,'argMax');let h=t.util.parseAxisParam(p,c.shape);const x=t.backend_util.getAxesPermutation(h,c.shape.length);let k=c;const f=[];null!=x&&(k=(0,s.transpose)({inputs:{x:c},backend:l,attrs:{perm:x}}),f.push(k),h=t.backend_util.getInnerMostAxes(h.length,k.shape.length)),h=[h[0]],t.backend_util.assertAxesAreInnerMostDims('argMax',h,k.shape.length);const[M,b]=t.backend_util.computeOutAndReduceShapes(k.shape,h),A=t.util.sizeFromShape(M),_=t.util.makeZerosTypedArray(A,'int32'),I=t.util.sizeFromShape(b),v=l.data.get(k.dataId).values;for(let t=0;t<_.length;++t){const n=t*I;let s=v[n],o=0;for(let t=0;t<I;++t){const i=v[n+t];i>s&&(s=i,o=t)}_[t]=o}return f.forEach(t=>l.disposeIntermediateTensorInfo(t)),l.makeTensorInfo(M,'int32',_)}e.argMaxConfig={kernelName:t.ArgMax,backendName:'cpu',kernelFunc:o}},2277,[1158,1515,1552]);
__d(function(g,r,_i,a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.argMin=i,e.argMinConfig=void 0;var t=r(d[0]),n=r(d[1]),s=r(d[2]);
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
function i(i){const{inputs:o,backend:l,attrs:u}=i,{x:c}=o,{axis:p}=u;(0,n.assertNotComplex)(c,'argMin');let h=t.util.parseAxisParam(p,c.shape);const k=t.backend_util.getAxesPermutation(h,c.shape.length);let f=c;const M=[];null!=k&&(f=(0,s.transpose)({inputs:{x:c},backend:l,attrs:{perm:k}}),M.push(f),h=t.backend_util.getInnerMostAxes(h.length,f.shape.length)),h=[h[0]],t.backend_util.assertAxesAreInnerMostDims('argMin',h,f.shape.length);const[b,x]=t.backend_util.computeOutAndReduceShapes(f.shape,h),A=t.util.sizeFromShape(b),_=t.util.makeZerosTypedArray(A,'int32'),I=t.util.sizeFromShape(x),v=l.data.get(f.dataId).values;for(let t=0;t<_.length;++t){const n=t*I;let s=v[n],i=0;for(let t=0;t<I;++t){const o=v[n+t];o<s&&(s=o,i=t)}_[t]=i}return M.forEach(t=>l.disposeIntermediateTensorInfo(t)),l.makeTensorInfo(b,'int32',_)}e.argMinConfig={kernelName:t.ArgMin,backendName:'cpu',kernelFunc:i}},2278,[1158,1515,1552]);
__d(function(g,r,i,a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.asinConfig=e.asin=void 0;var n=r(d[0]),s=r(d[1]);
/**
   * @license
   * Copyright 2020 Google LLC. All Rights Reserved.
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
const c=e.asin=(0,s.unaryKernelFunc)(n.Asin,n=>Math.asin(n));e.asinConfig={kernelName:n.Asin,backendName:'cpu',kernelFunc:c}},2279,[1158,1530]);
__d(function(g,r,i,a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.asinhConfig=e.asinh=void 0;var n=r(d[0]),s=r(d[1]);
/**
   * @license
   * Copyright 2020 Google LLC. All Rights Reserved.
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
const h=e.asinh=(0,s.unaryKernelFunc)(n.Asinh,n=>Math.asinh(n));e.asinhConfig={kernelName:n.Asinh,backendName:'cpu',kernelFunc:h}},2280,[1158,1530]);
__d(function(g,r,i,a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.atanConfig=e.atan=void 0;var n=r(d[0]),t=r(d[1]);
/**
   * @license
   * Copyright 2020 Google LLC. All Rights Reserved.
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
const c=e.atan=(0,t.unaryKernelFunc)(n.Atan,n=>Math.atan(n));e.atanConfig={kernelName:n.Atan,backendName:'cpu',kernelFunc:c}},2281,[1158,1530]);
__d(function(g,r,i,a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.atan2Impl=e.atan2Config=e.atan2=void 0;var n=r(d[0]),t=r(d[1]),l=r(d[2]);
/**
   * @license
   * Copyright 2020 Google LLC. All Rights Reserved.
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
const c=e.atan2Impl=(0,t.createSimpleBinaryKernelImpl)((n,t)=>Math.atan2(n,t)),o=e.atan2=(0,l.binaryKernelFunc)(n.Atan2,c);e.atan2Config={kernelName:n.Atan2,backendName:'cpu',kernelFunc:o}},2282,[1158,1519,1520]);
__d(function(g,r,i,a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.atanhConfig=e.atanh=void 0;var n=r(d[0]),t=r(d[1]);
/**
   * @license
   * Copyright 2020 Google LLC. All Rights Reserved.
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
const h=e.atanh=(0,t.unaryKernelFunc)(n.Atanh,n=>Math.atanh(n));e.atanhConfig={kernelName:n.Atanh,backendName:'cpu',kernelFunc:h}},2283,[1158,1530]);
__d(function(g,r,i,a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.avgPool=l,e.avgPoolConfig=void 0;var t=r(d[0]),o=r(d[1]),n=r(d[2]),s=r(d[3]);
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
function l(l){const{inputs:u,backend:p,attrs:c}=l,{x:v}=u;(0,o.assertNotComplex)(v,'avgPool');const{filterSize:f,strides:h,pad:k,dimRoundingMode:P}=c;t.util.assert(t.backend_util.eitherStridesOrDilationsAreOne(h,1),()=>`Error in avgPool: Either strides or dilations must be 1. Got strides ${h} and dilations '1'`);const b=t.backend_util.computePool2DInfo(v.shape,f,h,1,k,P);let S;if(1===b.filterWidth&&1===b.filterHeight&&t.util.arraysEqual(b.inShape,b.outShape))S=(0,s.identity)({inputs:{x:v},backend:p});else{const o=p.data.get(v.dataId).values,s=t.util.computeStrides(v.shape),l=(0,n.pool)(o,v.shape,v.dtype,s,b,'avg');S=p.makeTensorInfo(b.outShape,v.dtype,l.values)}return S}e.avgPoolConfig={kernelName:t.AvgPool,backendName:'cpu',kernelFunc:l}},2284,[1158,1515,2285,1524]);
__d(function(g,r,i,a,m,e,_d){Object.defineProperty(e,"__esModule",{value:!0}),e.maxPool3dPositions=function(o,n){const h=(0,t.buffer)(n.outShape,'int32'),f=n.strideDepth,l=n.strideHeight,s=n.strideWidth,d=n.dilationDepth,c=n.dilationHeight,u=n.dilationWidth,p=n.effectiveFilterDepth,I=n.effectiveFilterHeight,N=n.effectiveFilterWidth,S=n.padInfo.front,W=n.padInfo.top,H=n.padInfo.left;for(let t=0;t<n.batchSize;++t)for(let b=0;b<n.inChannels;++b)for(let v=0;v<n.outDepth;++v){const F=v*f-S;let M=F;for(;M<0;)M+=d;const T=Math.min(n.inDepth,p+F);for(let f=0;f<n.outHeight;++f){const p=f*l-W;let S=p;for(;S<0;)S+=c;const D=Math.min(n.inHeight,I+p);for(let l=0;l<n.outWidth;++l){const W=l*s-H;let E=W;for(;E<0;)E+=u;const _=Math.min(n.inWidth,N+W);let x=Number.NEGATIVE_INFINITY,P=-1;for(let n=M;n<T;n+=d){const h=n-F;for(let f=S;f<D;f+=c){const l=f-p;for(let s=E;s<_;s+=u){const d=s-W,c=o.get(t,n,f,s,b);c>=x&&(x=c,P=h*I*N+l*I+d)}}}h.set(P,t,v,f,l,b)}}}return h},e.maxPoolPositions=function(o,n,h,f,l=!1,s=!1){const d=(0,t.buffer)(f.outShape,'int32'),c=f.strideHeight,u=f.strideWidth,p=f.dilationHeight,I=f.dilationWidth,N=f.effectiveFilterHeight,S=f.effectiveFilterWidth,W=f.padInfo.top,H=f.padInfo.left,b=(0,t.buffer)(n,h,o);for(let t=0;t<f.batchSize;++t)for(let o=0;o<f.inChannels;++o)for(let n=0;n<f.outHeight;++n){const h=n*c-W;let v=h;for(;v<0;)v+=p;const F=Math.min(f.inHeight,N+h);for(let c=0;c<f.outWidth;++c){const N=c*u-H;let W=N;for(;W<0;)W+=I;const M=Math.min(f.inWidth,S+N);let T=Number.NEGATIVE_INFINITY,D=-1;for(let n=v;n<F;n+=p){const d=n-h;for(let h=W;h<M;h+=I){const c=h-N,u=b.get(t,n,h,o);u>T&&(T=u,D=l?s?((t*f.inHeight+n)*f.inWidth+h)*f.inChannels+o:(n*f.inWidth+h)*f.inChannels+o:d*S+c)}}d.set(D,t,n,c,o)}}return d},e.pool=
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
function(o,n,h,f,l,s){const d=l.strideHeight,c=l.strideWidth,u=l.dilationHeight,p=l.dilationWidth,I=l.effectiveFilterHeight,N=l.effectiveFilterWidth,S=l.padInfo.top,W=l.padInfo.left,H='max'===s?Number.NEGATIVE_INFINITY:Number.POSITIVE_INFINITY,b=(0,t.buffer)(l.outShape,h),v=b.values,F=l.outShape[1]*l.outShape[2]*l.outShape[3],M=l.outShape[2]*l.outShape[3],T=l.outShape[3];for(let t=0;t<l.batchSize;++t){const n=t*F,h=t*f[0];for(let t=0;t<l.inChannels;++t)for(let b=0;b<l.outHeight;++b){const F=b*d-S,D=Math.max(0,F),E=Math.min(l.inHeight,I+F),_=n+b*M;for(let n=0;n<l.outWidth;++n){const d=n*c-W,I=Math.max(0,d),S=Math.min(l.inWidth,N+d);let b=H,F=0,M=0;for(let n=D;n<E;n+=u){const l=h+n*f[1];for(let n=I;n<S;n+=p){const h=o[l+n*f[2]+t];'max'===s&&h>b?b=h:'avg'===s&&(F+=h,M++)}if(isNaN(b))break}v[_+n*T+t]='avg'===s?F/M:b}}}return b},e.pool3d=function(o,n,h,f,l,s){const d=l.strideDepth,c=l.strideHeight,u=l.strideWidth,p=l.dilationDepth,I=l.dilationHeight,N=l.dilationWidth,S=l.effectiveFilterDepth,W=l.effectiveFilterHeight,H=l.effectiveFilterWidth,b=l.padInfo.front,v=l.padInfo.top,F=l.padInfo.left,M='max'===s?Number.NEGATIVE_INFINITY:Number.POSITIVE_INFINITY,T=(0,t.buffer)(l.outShape,h),D=T.values,E=l.outShape[1]*l.outShape[2]*l.outShape[3]*l.outShape[4],_=l.outShape[2]*l.outShape[3]*l.outShape[4],x=l.outShape[3]*l.outShape[4],P=l.outShape[4];for(let t=0;t<l.batchSize;++t){const n=t*E,h=t*f[0];for(let t=0;t<l.inChannels;++t)for(let T=0;T<l.outDepth;++T){const E=T*d-b;let C=E;for(;C<0;)C+=p;const V=Math.min(l.inDepth,S+E),Y=n+T*_;for(let n=0;n<l.outHeight;++n){const d=n*c-v;let S=d;for(;S<0;)S+=I;const b=Math.min(l.inHeight,W+d),T=Y+n*x;for(let n=0;n<l.outWidth;++n){const d=n*u-F;let c=d;for(;c<0;)c+=N;const W=Math.min(l.inWidth,H+d),v=T+n*P;let E=M,_=0,x=0;for(let n=C;n<V;n+=p){const l=h+n*f[1];for(let n=S;n<b;n+=I){const h=l+n*f[2];for(let n=c;n<W;n+=N){const l=o[h+n*f[3]+t];if('max'===s&&l>E?E=l:'avg'===s&&(_+=l,x++),isNaN(E))break}if(isNaN(E))break}if(isNaN(E))break}D[v+t]='avg'===s?_/Math.max(x,1):E}}}}return T};var t=r(_d[0])},2285,[1158]);
__d(function(g,r,i,a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.avgPool3D=l,e.avgPool3DConfig=void 0;var o=r(d[0]),t=r(d[1]),n=r(d[2]);
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
function l(l){const{inputs:s,backend:u,attrs:p}=l,{x:c}=s,{filterSize:v,strides:f,pad:P,dimRoundingMode:k,dataFormat:D}=p;(0,t.assertNotComplex)(c,'avgPool3d');const _=o.backend_util.computePool3DInfo(c.shape,v,f,1,P,k,D),b=u.data.get(c.dataId).values,h=(0,n.pool3d)(b,c.shape,c.dtype,o.util.computeStrides(c.shape),_,'avg');return u.makeTensorInfo(h.shape,'float32',h.values)}e.avgPool3DConfig={kernelName:o.AvgPool3D,backendName:'cpu',kernelFunc:l}},2286,[1158,1515,2285]);
__d(function(g,r,i,a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.avgPool3DGrad=n,e.avgPool3DGradConfig=void 0;var t=r(d[0]),o=r(d[1]);
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
function n(n){const{inputs:f,backend:l,attrs:h}=n,{dy:s,input:c}=f,{filterSize:p,strides:u,pad:v,dimRoundingMode:D}=h;(0,o.assertNotComplex)([s,c],'avgPool3DGrad');const b=t.backend_util.computePool3DInfo(c.shape,p,u,1,v,D),P=b.strideDepth,k=b.strideHeight,H=b.strideWidth,W=b.filterDepth,G=b.filterHeight,I=b.filterWidth,M=b.dilationDepth,_=b.dilationHeight,y=b.dilationWidth,C=b.effectiveFilterDepth,F=b.effectiveFilterHeight,N=b.effectiveFilterWidth,S=C-1-b.padInfo.front,z=N-1-b.padInfo.left,j=F-1-b.padInfo.top,x=(0,t.buffer)(c.shape,'float32'),A=1/(W*G*I),O=l.bufferSync(s);for(let t=0;t<b.batchSize;++t)for(let o=0;o<b.inChannels;++o)for(let n=0;n<b.inDepth;++n)for(let f=0;f<b.inHeight;++f)for(let l=0;l<b.inWidth;++l){const h=n-S,s=f-j,c=l-z;let p=0;for(let n=0;n<C;n+=M){const f=(h+n)/P;if(!(f<0||f>=b.outDepth||Math.floor(f)!==f))for(let n=0;n<F;n+=_){const l=(s+n)/k;if(!(l<0||l>=b.outHeight||Math.floor(l)!==l))for(let n=0;n<N;n+=y){const h=(c+n)/H;if(h<0||h>=b.outWidth||Math.floor(h)!==h)continue;p+=O.get(t,f,l,h,o)}}}x.set(p*A,t,n,f,l,o)}return l.makeTensorInfo(x.shape,x.dtype,x.values)}e.avgPool3DGradConfig={kernelName:t.AvgPool3DGrad,backendName:'cpu',kernelFunc:n}},2287,[1158,1515]);
__d(function(g,r,i,a,m,e,_d){Object.defineProperty(e,"__esModule",{value:!0}),e.avgPoolGrad=n,e.avgPoolGradConfig=void 0;var t=r(_d[0]),o=r(_d[1]);
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
function n(n){const{inputs:l,backend:f,attrs:d}=n,{dy:s,input:h}=l,c=h;(0,o.assertNotComplex)([s,h],'avgPoolGrad');const{filterSize:u,strides:p,pad:v}=d,b=t.backend_util.computePool2DInfo(c.shape,u,p,1,v),P=b.strideHeight,k=b.strideWidth,H=b.filterHeight,W=b.filterWidth,G=b.dilationHeight,I=b.dilationWidth,_=b.effectiveFilterHeight,C=b.effectiveFilterWidth,y=C-1-b.padInfo.left,F=_-1-b.padInfo.top,M=(0,t.buffer)(c.shape,'float32'),N=1/(H*W),z=f.data.get(s.dataId).values,S=(0,t.buffer)(s.shape,'float32',z);for(let t=0;t<b.batchSize;++t)for(let o=0;o<b.inChannels;++o)for(let n=0;n<b.inHeight;++n)for(let l=0;l<b.inWidth;++l){const f=n-F,d=l-y;let s=0;for(let n=0;n<_;n+=G){const l=(f+n)/P;if(!(l<0||l>=b.outHeight||Math.floor(l)!==l))for(let n=0;n<C;n+=I){const f=(d+n)/k;if(f<0||f>=b.outWidth||Math.floor(f)!==f)continue;s+=S.get(t,l,f,o)}}M.set(s*N,t,n,l,o)}return f.makeTensorInfo(M.shape,M.dtype,M.values)}e.avgPoolGradConfig={kernelName:t.AvgPoolGrad,backendName:'cpu',kernelFunc:n}},2288,[1158,1515]);
__d(function(g,r,_i,a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.batchNorm=l,e.batchNormConfig=void 0;var t=r(d[0]),n=r(d[1]);
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
function l(l){const{inputs:s,backend:o,attrs:h}=l,{x:i,scale:u,offset:c,mean:v,variance:p}=s;t.util.assert(v.shape.length===p.shape.length,()=>"Batch normalization gradient requires mean and variance to have equal ranks."),t.util.assert(null==c||v.shape.length===c.shape.length,()=>"Batch normalization gradient requires mean and offset to have equal ranks."),t.util.assert(null==u||v.shape.length===u.shape.length,()=>"Batch normalization gradient requires mean and scale to have equal ranks."),(0,n.assertNotComplex)([i,v,p,u,c],'batchNorm');let{varianceEpsilon:f}=h;null==f&&(f=.001);const k=o.data.get(i.dataId).values,N=o.data.get(v.dataId).values,b=o.data.get(p.dataId).values,q=u?o.data.get(u.dataId).values:new Float32Array([1]),I=c?o.data.get(c.dataId).values:new Float32Array([0]),y=new Float32Array(k.length),F=I.length,B=q.length,_=b.length,w=N.length;let z=0,A=0,C=0,x=0;for(let t=0;t<k.length;++t)y[t]=I[z++]+(k[t]-N[A++])*q[C++]/Math.sqrt(b[x++]+f),z>=F&&(z=0),A>=w&&(A=0),C>=B&&(C=0),x>=_&&(x=0);return o.makeTensorInfo(i.shape,i.dtype,y)}e.batchNormConfig={kernelName:t.FusedBatchNorm,backendName:'cpu',kernelFunc:l}},2289,[1158,1515]);
__d(function(g,r,i,_a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.batchToSpaceND=o,e.batchToSpaceNDConfig=void 0;var t=r(d[0]),n=r(d[1]),a=r(d[2]),s=r(d[3]),c=r(d[4]);
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
function o(o){const{inputs:p,backend:u,attrs:b}=o,{x:h}=p,{blockShape:l,crops:k}=b;(0,n.assertNotComplex)([h],'batchToSpaceND');const S=l.reduce((t,n)=>t*n),_=t.backend_util.getReshaped(h.shape,l,S),f=t.backend_util.getPermuted(_.length,l.length),N=t.backend_util.getReshapedPermuted(h.shape,l,S),T=t.backend_util.getSliceBeginCoords(k,l.length),x=t.backend_util.getSliceSize(N,k,l.length),I=(0,a.reshape)({inputs:{x:h},backend:u,attrs:{shape:_}}),D=(0,c.transpose)({inputs:{x:I},backend:u,attrs:{perm:f}}),C=(0,a.reshape)({inputs:{x:D},backend:u,attrs:{shape:N}}),v=(0,s.slice)({inputs:{x:C},backend:u,attrs:{begin:T,size:x}});return u.disposeIntermediateTensorInfo(I),u.disposeIntermediateTensorInfo(D),u.disposeIntermediateTensorInfo(C),v}e.batchToSpaceNDConfig={kernelName:t.BatchToSpaceND,backendName:'cpu',kernelFunc:o}},2290,[1158,1515,2271,1561,1552]);
__d(function(g,r,i,a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.bincount=o,e.bincountConfig=void 0;var n=r(d[0]),t=r(d[1]);
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
function o(n){const{inputs:o,backend:u,attrs:c}=n,{x:s,weights:b}=o,{size:l}=c,p=u.data.get(s.dataId).values,f=u.data.get(b.dataId).values,k=(0,t.bincountImpl)(p,f,b.dtype,b.shape,l);return u.makeTensorInfo([l],b.dtype,k)}e.bincountConfig={kernelName:n.Bincount,backendName:'cpu',kernelFunc:o}},2291,[1158,1526]);
__d(function(g,r,i,a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.broadcastArgs=n,e.broadcastArgsConfig=void 0;var t=r(d[0]);
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
   */function n(n){const{inputs:s,backend:o}=n,{s0:c,s1:u}=s,f=o.data.get(c.dataId).values,l=o.data.get(u.dataId).values,A=t.backend_util.assertAndGetBroadcastShape(Array.from(f),Array.from(l));return o.makeTensorInfo([A.length],'int32',Int32Array.from(A))}e.broadcastArgsConfig={kernelName:t.BroadcastArgs,backendName:'cpu',kernelFunc:n}},2292,[1158]);
__d(function(g,r,i,a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.clipByValueConfig=e.clipByValue=void 0;var l=r(d[0]),u=r(d[1]);
/**
   * @license
   * Copyright 2020 Google LLC. All Rights Reserved.
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
const n=e.clipByValue=(0,u.unaryKernelFunc)(l.ClipByValue,(l,u)=>{const n=u;return l>n.clipValueMax?n.clipValueMax:l<n.clipValueMin?n.clipValueMin:l});e.clipByValueConfig={kernelName:l.ClipByValue,backendName:'cpu',kernelFunc:n}},2293,[1158,1530]);
__d(function(g,r,_i,a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.complexAbsConfig=e.complexAbs=void 0;var t=r(d[0]);
/**
   * @license
   * Copyright 2020 Google LLC. All Rights Reserved.
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
   */const o=o=>{const{x:n}=o.inputs,l=o.backend,s=new Float32Array(t.util.sizeFromShape(n.shape)),c=l.data.get(n.dataId),p=c.complexTensorInfos.real,u=c.complexTensorInfos.imag,i=l.data.get(p.dataId).values,b=l.data.get(u.dataId).values;for(let t=0;t<i.length;t++){const o=i[t],n=b[t];s[t]=Math.hypot(o,n)}return l.makeOutput(s,n.shape,'float32')};e.complexAbs=o;e.complexAbsConfig={kernelName:t.ComplexAbs,backendName:'cpu',kernelFunc:o}},2294,[1158]);
__d(function(g,_r,_i,a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.concat=c,e.concatConfig=void 0;var t=_r(d[0]),n=_r(d[1]),s=_r(d[2]),p=_r(d[3]),i=_r(d[4]),o=_r(d[5]),r=_r(d[6]);
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
function c(u){const{inputs:l,backend:h,attrs:f}=u,{axis:k}=f,b=t.util.parseAxisParam(k,l[0].shape)[0],I=l.map(t=>t.shape);t.backend_util.assertParamsConsistent(I,b);let x=t.backend_util.computeOutShape(l.map(t=>t.shape),b);if(0===t.util.sizeFromShape(x))return h.makeTensorInfo(x,l[0].dtype,[]);const _=l.filter(n=>t.util.sizeFromShape(n.shape)>0);if(1===_.length)return(0,p.identity)({inputs:{x:_[0]},backend:h});if('complex64'===_[0].dtype){const t=_.map(t=>(0,o.real)({inputs:{input:t},backend:h})),s=_.map(t=>(0,i.imag)({inputs:{input:t},backend:h})),p=c({inputs:t,backend:h,attrs:{axis:b}}),r=c({inputs:s,backend:h,attrs:{axis:b}}),u=(0,n.complex)({inputs:{real:p,imag:r},backend:h});return t.forEach(t=>h.disposeIntermediateTensorInfo(t)),s.forEach(t=>h.disposeIntermediateTensorInfo(t)),h.disposeIntermediateTensorInfo(p),h.disposeIntermediateTensorInfo(r),u}const T=_.map(n=>{const s=[-1,t.util.sizeFromShape(n.shape.slice(b))];return(0,r.reshape)({inputs:{x:n},backend:h,attrs:{shape:s}})}),y=T.map(t=>({vals:h.data.get(t.dataId).values,shape:t.shape}));x=t.backend_util.computeOutShape(T.map(t=>t.shape),1);const S=1===T[0].shape[0],v=(0,s.concatImpl)(y,x,l[0].dtype,S),C=t.backend_util.computeOutShape(_.map(t=>t.shape),b),F=h.makeTensorInfo(C,l[0].dtype,v);return T.forEach(t=>h.disposeIntermediateTensorInfo(t)),F}e.concatConfig={kernelName:t.Concat,backendName:'cpu',kernelFunc:c}},2295,[1158,1523,1531,1524,2296,1525,2271]);
__d(function(g,r,i,a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.imag=t,e.imagConfig=void 0;var n=r(d[0]);
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
   */function t(n){const{inputs:t,backend:o}=n,{input:u}=t,c=o.data.get(u.dataId).complexTensorInfos.imag,s=o.data.get(c.dataId).values;return o.makeTensorInfo(c.shape,c.dtype,s)}e.imagConfig={kernelName:n.Imag,backendName:'cpu',kernelFunc:t}},2296,[1158]);
__d(function(g,r,i,a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.conv2D=o,e.conv2DConfig=void 0;var t=r(d[0]),n=r(d[1]);
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
function o(o){const{inputs:s,backend:c,attrs:l}=o,{x:u,filter:f}=s,{strides:h,pad:p,dataFormat:v,dilations:C,dimRoundingMode:k}=l;(0,n.assertNotComplex)([u,f],'conv2d');const D=t.backend_util.convertConv2DDataFormat(v),b=t.backend_util.computeConv2DInfo(u.shape,f.shape,h,C,p,k,!1,D),I=b.filterHeight,_=b.filterWidth,H=b.dilationHeight,W=b.dilationWidth,F=b.padInfo.left,S=b.padInfo.top,y='channelsLast'===b.dataFormat,N=new t.TensorBuffer(b.outShape,u.dtype),x=t.util.computeStrides(u.shape),M=t.util.computeStrides(f.shape),T=x[0],j=y?x[1]:x[2],w=y?x[2]:1,z=y?1:x[1],B=N.strides[0],L=y?N.strides[1]:N.strides[2],O=y?N.strides[2]:1,P=y?1:N.strides[1],R=c.data.get(u.dataId).values,q=c.data.get(f.dataId).values,A=N.values;for(let t=0;t<b.batchSize;++t){const n=t*T,o=t*B;for(let t=0;t<b.outHeight;++t){const s=o+t*L,c=t*b.strideHeight-S;for(let t=0;t<I;++t){const o=c+t*H;if(o<0||o>=b.inHeight)continue;const l=t*M[0],u=n+o*j;for(let t=0;t<b.outWidth;++t){const n=s+t*O,o=t*b.strideWidth-F;for(let t=0;t<_;++t){const s=o+t*W;if(s<0||s>=b.inWidth)continue;const c=u+s*w;let f=l+t*M[1];for(let t=0;t<b.inChannels;++t){const o=R[c+t*z];for(let t=0;t<b.outChannels;++t)A[n+t*P]+=o*q[f+t];f+=b.outChannels}}}}}}return c.makeTensorInfo(N.shape,N.dtype,A)}e.conv2DConfig={kernelName:t.Conv2D,backendName:'cpu',kernelFunc:o}},2297,[1158,1515]);
__d(function(g,r,i,a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.conv2DBackpropFilter=o,e.conv2DBackpropFilterConfig=void 0;var t=r(d[0]),n=r(d[1]);
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
function o(o){const{inputs:l,backend:s,attrs:c}=o,{x:f,dy:p}=l,{strides:h,pad:u,dataFormat:v,dimRoundingMode:k,filterShape:F}=c;(0,n.assertNotComplex)([f,p],'conv2dBackpropFilter');const B=t.backend_util.convertConv2DDataFormat(v),C=t.backend_util.computeConv2DInfo(f.shape,F,h,1,u,k,!1,B),{strideHeight:M,strideWidth:D,filterHeight:b,filterWidth:I}=C,_='channelsLast'===C.dataFormat,y=new t.TensorBuffer(C.filterShape,'float32'),x=C.padInfo.left,H=C.padInfo.top,T=s.data.get(f.dataId).values,W=s.data.get(p.dataId).values,w=new t.TensorBuffer(f.shape,f.dtype,T),N=new t.TensorBuffer(p.shape,p.dtype,W);for(let t=0;t<b;++t){const n=Math.max(0,Math.ceil((H-t)/M)),o=Math.min(C.outHeight,(C.inHeight+H-t)/M);for(let l=0;l<I;++l){const s=Math.max(0,Math.ceil((x-l)/D)),c=Math.min(C.outWidth,(C.inWidth+x-l)/D);for(let f=0;f<C.inChannels;++f)for(let p=0;p<C.outChannels;++p){let h=0;for(let u=0;u<C.batchSize;++u)for(let v=n;v<o;++v){const n=t+v*M-H;for(let t=s;t<c;++t){const o=l+t*D-x;h+=_?w.get(u,n,o,f)*N.get(u,v,t,p):w.get(u,f,n,o)*N.get(u,p,v,t)}}y.set(h,t,l,f,p)}}}return s.makeTensorInfo(y.shape,y.dtype,y.values)}e.conv2DBackpropFilterConfig={kernelName:t.Conv2DBackpropFilter,backendName:'cpu',kernelFunc:o}},2298,[1158,1515]);
__d(function(g,r,i,a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.conv2DBackpropInput=o,e.conv2DBackpropInputConfig=void 0;var t=r(d[0]),n=r(d[1]);
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
function o(o){const{inputs:s,backend:c,attrs:p}=o,{dy:l,filter:u}=s,{inputShape:h,strides:f,pad:v,dataFormat:k,dimRoundingMode:I}=p;(0,n.assertNotComplex)([l,u],'conv2dBackpropInput');const C=t.util.computeStrides(u.shape),M=t.util.computeStrides(l.shape);let D=t.backend_util.convertConv2DDataFormat(k);const b=t.backend_util.computeConv2DInfo(h,u.shape,f,1,v,I,!1,D),B=new t.TensorBuffer(b.inShape,'float32'),_=B.values,S=c.data.get(l.dataId).values,F=c.data.get(u.dataId).values,[H,W,x]=C,{batchSize:y,filterHeight:N,filterWidth:T,inChannels:j,inHeight:w,inWidth:z,outChannels:L,outHeight:O,outWidth:P,strideHeight:R,strideWidth:q}=b;D=b.dataFormat;const A=N-1-b.padInfo.top,E=T-1-b.padInfo.left,G='channelsLast'===D,J=B.strides[0],K=G?B.strides[1]:B.strides[2],Q=G?B.strides[2]:1,U=G?1:B.strides[1],V=M[0],X=G?M[1]:M[2],Y=G?M[2]:1,Z=G?1:M[1];for(let t=0;t<y;++t)for(let n=0;n<j;++n)for(let o=0;o<w;++o){const s=o-A,c=Math.max(0,Math.ceil(s/R)),p=Math.min(O,(N+s)/R);for(let l=0;l<z;++l){const u=l-E,h=Math.max(0,Math.ceil(u/q)),f=Math.min(P,(T+u)/q);let v=0;for(let o=c;o<p;++o){const c=o*R-s;for(let s=h;s<f;++s){const p=V*t+X*o+Y*s,l=H*(N-1-c)+W*(T-1-(s*q-u))+x*n;for(let t=0;t<L;++t){v+=S[p+Z*t]*F[l+t]}}}_[J*t+K*o+Q*l+U*n]=v}}return c.makeTensorInfo(B.shape,B.dtype,B.values)}e.conv2DBackpropInputConfig={kernelName:t.Conv2DBackpropInput,backendName:'cpu',kernelFunc:o}},2299,[1158,1515]);
__d(function(g,r,i,a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.conv3D=o,e.conv3DConfig=void 0;var t=r(d[0]),n=r(d[1]);
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
function o(o){const{inputs:s,backend:l,attrs:c}=o,{x:u,filter:f}=s,{strides:h,pad:p,dilations:v}=c;(0,n.assertNotComplex)([u,f],'conv3d');const C=t.backend_util.computeConv3DInfo(u.shape,f.shape,h,v,p),{filterDepth:D,filterHeight:k,filterWidth:b,dilationDepth:H,dilationHeight:I,dilationWidth:W,padInfo:_}=C,S=_.front,y=_.left,N=_.top,x=new t.TensorBuffer(C.outShape,u.dtype),T=l.data.get(u.dataId).values,j=l.data.get(f.dataId).values,w=x.values,z=t.util.computeStrides(u.shape),B=t.util.computeStrides(f.shape);for(let t=0;t<C.batchSize;++t){const n=t*z[0],o=t*x.strides[0];for(let t=0;t<C.outDepth;++t){const s=o+t*x.strides[1],l=t*C.strideDepth-S;for(let t=0;t<D;++t){const o=l+t*H;if(o<0||o>=C.inDepth)continue;const c=t*B[0],u=n+o*z[1];for(let t=0;t<C.outHeight;++t){const n=s+t*x.strides[2],o=t*C.strideHeight-N;for(let t=0;t<k;++t){const s=o+t*I;if(s<0||s>=C.inHeight)continue;const l=c+t*B[1],f=u+s*z[2];for(let t=0;t<C.outWidth;++t){const o=n+t*C.outChannels,s=t*C.strideWidth-y;for(let t=0;t<b;++t){const n=s+t*W;if(n<0||n>=C.inWidth)continue;const c=l+t*B[2],u=f+n*C.inChannels;let h=c;for(let t=0;t<C.inChannels;++t){const n=T[u+t];for(let t=0;t<C.outChannels;++t)w[o+t]+=n*j[h+t];h+=C.outChannels}}}}}}}}return l.makeTensorInfo(x.shape,x.dtype,x.values)}e.conv3DConfig={kernelName:t.Conv3D,backendName:'cpu',kernelFunc:o}},2300,[1158,1515]);
__d(function(g,r,i,a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.conv3DBackpropFilterV2=n,e.conv3DBackpropFilterV2Config=void 0;var t=r(d[0]),o=r(d[1]);
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
function n(n){const{inputs:l,backend:s,attrs:c}=n,{x:p,dy:h}=l,{strides:f,pad:u,filterShape:v}=c;(0,o.assertNotComplex)([p,h],'conv3dBackpropFilterV2');const k=t.util.computeStrides(p.shape),M=t.util.computeStrides(h.shape),D=t.backend_util.computeConv3DInfo(p.shape,v,f,1,u),C=D.strideDepth,I=D.strideHeight,B=D.strideWidth,F=D.filterDepth,b=D.filterHeight,x=D.filterWidth,S=new t.TensorBuffer(D.filterShape,'float32'),V=S.values,[_,H,W,y]=S.strides,N=s.data.get(h.dataId).values,[T,j,w,z]=M,O=s.data.get(p.dataId).values,[P,q,A,E]=k,G=D.padInfo.front,J=D.padInfo.left,K=D.padInfo.top;for(let t=0;t<F;++t){const o=Math.max(0,Math.ceil((G-t)/C)),n=Math.min(D.outDepth,(D.inDepth+G-t)/C),l=t*_;for(let s=0;s<b;++s){const c=Math.max(0,Math.ceil((K-s)/I)),p=Math.min(D.outHeight,(D.inHeight+K-s)/I),h=s*H+l;for(let l=0;l<x;++l){const f=Math.max(0,Math.ceil((J-l)/B)),u=Math.min(D.outWidth,(D.inWidth+J-l)/B),v=l*W+h;for(let h=0;h<D.inChannels;++h){const k=h*y+v;for(let v=0;v<D.outChannels;++v){let M=0;for(let k=0;k<D.batchSize;++k){const D=k*P,F=k*T;for(let k=o;k<n;++k){const o=(t+k*C-G)*q+D,n=k*j+F;for(let t=c;t<p;++t){const c=(s+t*I-K)*A+o,p=t*w+n;for(let t=f;t<u;++t){const o=t*z+p;M+=O[(l+t*B-J)*E+c+h]*N[o+v]}}}}V[k+v]=M}}}}}return s.makeTensorInfo(S.shape,S.dtype,S.values)}e.conv3DBackpropFilterV2Config={kernelName:t.Conv3DBackpropFilterV2,backendName:'cpu',kernelFunc:n}},2301,[1158,1515]);
__d(function(g,r,i,a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.conv3DBackpropInputV2=o,e.conv3DBackpropInputV2Config=void 0;var t=r(d[0]),n=r(d[1]);
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
function o(o){const{inputs:p,backend:s,attrs:l}=o,{dy:c,filter:h}=p,{pad:u,strides:f,inputShape:v}=l;(0,n.assertNotComplex)([c],'conv3dBackpropInputV2');const I=t.util.computeStrides(c.shape),k=t.util.computeStrides(h.shape),M=t.backend_util.computeConv3DInfo(v,h.shape,f,1,u),D=new t.TensorBuffer(M.inShape,'float32'),C=D.values,[B,b,S,V]=D.strides,_=s.data.get(c.dataId).values,[x,H,W,y]=I,N=s.data.get(h.dataId).values,[T,j,w,z]=k,{batchSize:F,filterDepth:O,filterHeight:P,filterWidth:q,inChannels:A,inDepth:E,inHeight:G,inWidth:J,outChannels:K,outDepth:L,outHeight:Q,outWidth:R,strideDepth:U,strideHeight:X,strideWidth:Y}=M,Z=O-1-M.padInfo.front,$=P-1-M.padInfo.top,tt=q-1-M.padInfo.left;for(let t=0;t<F;++t)for(let n=0;n<A;++n)for(let o=0;o<E;++o){const p=o-Z,s=Math.max(0,Math.ceil(p/U)),l=Math.min(L,(O+p)/U);for(let c=0;c<G;++c){const h=c-$,u=Math.max(0,Math.ceil(h/X)),f=Math.min(Q,(P+h)/X);for(let v=0;v<J;++v){const I=v-tt,k=Math.max(0,Math.ceil(I/Y)),M=Math.min(R,(q+I)/Y);let D=0;for(let o=s;o<l;++o){const s=o*U-p;for(let p=u;p<f;++p){const l=p*X-h;for(let c=k;c<M;++c){const h=x*t+H*o+W*p+y*c,u=T*(O-1-s)+j*(P-1-l)+w*(q-1-(c*Y-I))+z*n;for(let t=0;t<K;++t){D+=_[h+t]*N[u+t]}}}}C[B*t+b*o+S*c+V*v+n]=D}}}return s.makeTensorInfo(D.shape,D.dtype,D.values)}e.conv3DBackpropInputV2Config={kernelName:t.Conv3DBackpropInputV2,backendName:'cpu',kernelFunc:o}},2302,[1158,1515]);
__d(function(g,r,i,a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.cosConfig=e.cos=void 0;var o=r(d[0]),n=r(d[1]);
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
const c=e.cos=(0,n.unaryKernelFunc)(o.Cos,o=>Math.cos(o));e.cosConfig={kernelName:o.Cos,backendName:'cpu',kernelFunc:c}},2303,[1158,1530]);
__d(function(g,r,i,a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.coshConfig=e.cosh=void 0;var o=r(d[0]),n=r(d[1]);
/**
   * @license
   * Copyright 2020 Google LLC. All Rights Reserved.
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
const c=e.cosh=(0,n.unaryKernelFunc)(o.Cosh,o=>Math.cosh(o));e.coshConfig={kernelName:o.Cosh,backendName:'cpu',kernelFunc:c}},2304,[1158,1530]);
__d(function(g,r,i,a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.cropAndResize=o,e.cropAndResizeConfig=void 0;var t=r(d[0]);
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
   */function o(o){const{inputs:n,backend:s,attrs:l}=o,{image:c,boxes:u,boxInd:f}=n,{cropSize:p,method:h,extrapolationValue:v}=l,[b,M,k,z]=c.shape,I=u.shape[0],[A,R]=p,_=(0,t.buffer)([I,A,R,z],'float32'),x=s.data.get(u.dataId).values,C=s.data.get(f.dataId).values,S=s.data.get(c.dataId).values,y=t.util.computeStrides(c.shape),N=t.util.computeStrides(_.shape);for(let t=0;t<I;t++){const o=4*t,n=x[o],s=x[o+1],l=x[o+2],c=x[o+3],u=C[t];if(u>=b)continue;const f=A>1?(l-n)*(M-1)/(A-1):0,p=R>1?(c-s)*(k-1)/(R-1):0;for(let o=0;o<A;o++){const b=A>1?n*(M-1)+o*f:.5*(n+l)*(M-1);if(b<0||b>M-1)for(let n=0;n<R;n++)for(let s=0;s<z;s++){const l=s+n*N[2]+o*N[1]+t*N[0];_.values[l]=v}else if('bilinear'===h){const n=Math.floor(b),l=Math.ceil(b),f=b-n;for(let h=0;h<R;h++){const b=R>1?s*(k-1)+h*p:.5*(s+c)*(k-1);if(b<0||b>k-1){for(let n=0;n<z;n++){const s=n+h*N[2]+o*N[1]+t*N[0];_.values[s]=v}continue}const M=Math.floor(b),I=Math.ceil(b),A=b-M;for(let s=0;s<z;s++){let c=s+M*y[2]+n*y[1]+u*y[0];const p=S[c];c=s+I*y[2]+n*y[1]+u*y[0];const v=S[c];c=s+M*y[2]+l*y[1]+u*y[0];const b=S[c];c=s+I*y[2]+l*y[1]+u*y[0];const k=p+(v-p)*A,z=b+(S[c]-b)*A;c=s+h*N[2]+o*N[1]+t*N[0],_.values[c]=k+(z-k)*f}}}else for(let n=0;n<R;++n){const l=R>1?s*(k-1)+n*p:.5*(s+c)*(k-1);if(l<0||l>k-1){for(let s=0;s<z;s++){const l=s+n*N[2]+o*N[1]+t*N[0];_.values[l]=v}continue}const f=Math.round(l),h=Math.round(b);for(let s=0;s<z;s++){const l=s+f*y[2]+h*y[1]+u*y[0],c=s+n*N[2]+o*N[1]+t*N[0];_.values[c]=S[l]}}}}return s.makeTensorInfo(_.shape,_.dtype,_.values)}e.cropAndResizeConfig={kernelName:t.CropAndResize,backendName:'cpu',kernelFunc:o}},2305,[1158]);
__d(function(g,r,_i,a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.cumprod=o,e.cumprodConfig=void 0;var t=r(d[0]),n=r(d[1]),s=r(d[2]);
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
function o(o){const{inputs:p,backend:i,attrs:u}=o,{x:c}=p,{axis:l,exclusive:h,reverse:f}=u;(0,n.assertNotComplex)(c,'cumprod');const k=t.backend_util.getAxesPermutation([l],c.shape.length);let x=c;null!=k&&(x=(0,s.transpose)({inputs:{x:c},backend:i,attrs:{perm:k}}));const b=t.backend_util.getInnerMostAxes(1,c.shape.length)[0];if(b!==x.shape.length-1)throw new Error(`backend.cumprod in CPU expects an inner-most axis=${x.shape.length-1} but got axis=${b}`);const I=(0,t.upcastType)(x.dtype,'int32'),_=t.util.makeOnesTypedArray(t.util.sizeFromShape(x.shape),I),v=i.data.get(x.dataId).values,y=x.shape[x.shape.length-1],C=f?(t,n)=>t+y-n-1:(t,n)=>t+n;for(let t=0;t<v.length;t+=y)for(let n=0;n<y;n++){const s=C(t,n);if(0===n)_[s]=h?1:v[s];else{const o=C(t,n-1);_[s]=h?v[o]*_[o]:v[s]*_[o]}}const T=i.makeTensorInfo(x.shape,I,_);if(null!=k){const n=t.backend_util.getUndoAxesPermutation(k),o=(0,s.transpose)({inputs:{x:T},backend:i,attrs:{perm:n}});return i.disposeIntermediateTensorInfo(T),i.disposeIntermediateTensorInfo(x),o}return T}e.cumprodConfig={kernelName:t.Cumprod,backendName:'cpu',kernelFunc:o}},2306,[1158,1515,1552]);
__d(function(g,r,_i,a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.cumsum=o,e.cumsumConfig=void 0;var t=r(d[0]),n=r(d[1]),s=r(d[2]);
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
function o(o){const{inputs:u,backend:i,attrs:c}=o,{x:l}=u,{axis:p,exclusive:h,reverse:f}=c;(0,n.assertNotComplex)(l,'cumsum');const k=t.backend_util.getAxesPermutation([p],l.shape.length);let x=l;null!=k&&(x=(0,s.transpose)({inputs:{x:l},backend:i,attrs:{perm:k}}));const b=t.backend_util.getInnerMostAxes(1,l.shape.length)[0];if(b!==x.shape.length-1)throw new Error(`backend.cumsum in CPU expects an inner-most axis=${x.shape.length-1} but got axis=${b}`);const I=(0,t.upcastType)(x.dtype,'int32'),_=t.util.makeZerosTypedArray(t.util.sizeFromShape(x.shape),I),v=i.data.get(x.dataId).values,y=x.shape[x.shape.length-1],C=f?(t,n)=>t+y-n-1:(t,n)=>t+n;for(let t=0;t<v.length;t+=y)for(let n=0;n<y;n++){const s=C(t,n);if(0===n)_[s]=h?0:v[s];else{const o=C(t,n-1);_[s]=h?v[o]+_[o]:v[s]+_[o]}}const T=i.makeTensorInfo(x.shape,I,_);if(null!=k){const n=t.backend_util.getUndoAxesPermutation(k),o=(0,s.transpose)({inputs:{x:T},backend:i,attrs:{perm:n}});return i.disposeIntermediateTensorInfo(T),i.disposeIntermediateTensorInfo(x),o}return T}e.cumsumConfig={kernelName:t.Cumsum,backendName:'cpu',kernelFunc:o}},2307,[1158,1515,1552]);
__d(function(g,r,i,a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.denseBincount=u,e.denseBincountConfig=void 0;var n=r(d[0]),t=r(d[1]);
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
function u(n){const{inputs:u,backend:o,attrs:s}=n,{x:c,weights:p}=u,{size:f,binaryOutput:l}=s;if(1===c.shape.length){const n=o.data.get(c.dataId).values,u=o.data.get(p.dataId).values,s=(0,t.bincountImpl)(n,u,p.dtype,p.shape,f);return o.makeTensorInfo([f],p.dtype,s)}if(2===c.shape.length){const n=o.bufferSync(c),u=o.bufferSync(p),s=(0,t.bincountReduceImpl)(n,u,f,l);return o.makeTensorInfo(s.shape,p.dtype,s.values)}throw new Error(`Error in denseBincount: input must be at most rank 2, but got rank${c.shape.length}.`)}e.denseBincountConfig={kernelName:n.DenseBincount,backendName:'cpu',kernelFunc:u}},2308,[1158,1526]);
__d(function(g,r,i,a,m,e,_d){Object.defineProperty(e,"__esModule",{value:!0}),e.depthToSpace=o,e.depthToSpaceConfig=void 0;var t=r(_d[0]);
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
   */function o(o){const{inputs:n,backend:p,attrs:c}=o,{x:d}=n,{blockSize:s,dataFormat:l}=c;t.util.assert('NHWC'===l,()=>`Only NHWC dataFormat supported on CPU for depthToSpace. Got ${l}`);const f=d.shape[0],h=d.shape[1],u=d.shape[2],k=d.shape[3],S=h*s,T=u*s,C=k/(s*s),b=p.data.get(d.dataId).values,v=new Float32Array(f*S*T*C);let y=0;for(let t=0;t<f;++t)for(let o=0;o<S;++o){const n=Math.floor(o/s),p=o%s;for(let o=0;o<T;++o){const c=Math.floor(o/s),d=(p*s+o%s)*C;for(let o=0;o<C;++o){const p=o+d+k*(c+u*(n+h*t));v[y++]=b[p]}}}return p.makeTensorInfo([f,S,T,C],d.dtype,v)}e.depthToSpaceConfig={kernelName:t.DepthToSpace,backendName:'cpu',kernelFunc:o}},2309,[1158]);
__d(function(g,r,i,a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.depthwiseConv2dNative=s,e.depthwiseConv2dNativeConfig=void 0;var t=r(d[0]),n=r(d[1]);
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
function s(s){const{inputs:o,backend:l,attrs:u}=s,{x:h,filter:c}=o,{strides:p,pad:f,dilations:v,dimRoundingMode:C}=u;(0,n.assertNotComplex)([h,c],'depthwiseConv2DNative');const N=t.util.computeStrides(h.shape),b=t.util.computeStrides(c.shape);let k=v;null==k&&(k=[1,1]),t.util.assert(t.backend_util.eitherStridesOrDilationsAreOne(p,k),()=>`Error in depthwiseConv2d: Either strides or dilations must be 1. Got strides ${p} and dilations '${k}'`);const w=t.backend_util.computeConv2DInfo(h.shape,c.shape,p,k,f,C,!0),{filterHeight:_,filterWidth:H,dilationHeight:I,dilationWidth:S,padInfo:W}=w,D=W.left,y=W.top,O=w.outChannels/w.inChannels,x=new t.TensorBuffer(w.outShape,h.dtype),E=l.data.get(h.dataId).values,M=l.data.get(c.dataId).values,T=x.values;for(let t=0;t<w.batchSize;++t){const n=t*N[0],s=t*x.strides[0];for(let t=0;t<w.outHeight;++t){const o=s+t*x.strides[1],l=t*w.strideHeight-y;for(let t=0;t<_;++t){const s=l+t*I;if(s<0||s>=w.inHeight)continue;const u=t*b[0],h=n+s*N[1];for(let t=0;t<w.outWidth;++t){const n=o+t*x.strides[2],s=t*w.strideWidth-D;for(let t=0;t<H;++t){const o=s+t*S;if(o<0||o>=w.inWidth)continue;const l=u+t*b[1],c=h+o*w.inChannels;let p=n,f=l;for(let t=0;t<w.inChannels;++t){const n=E[c+t];for(let t=0;t<O;++t)T[p+t]+=n*M[f+t];p+=O,f+=O}}}}}}return l.makeTensorInfo(x.shape,x.dtype,x.values)}e.depthwiseConv2dNativeConfig={kernelName:t.DepthwiseConv2dNative,backendName:'cpu',kernelFunc:s}},2310,[1158,1515]);
__d(function(g,r,i,a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.depthwiseConv2dNativeBackpropFilter=o,e.depthwiseConv2dNativeBackpropFilterConfig=void 0;var t=r(d[0]),n=r(d[1]);
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
function o(o){const{inputs:s,backend:l,attrs:p}=o,{x:h,dy:f}=s,{strides:c,dilations:u,pad:v,dimRoundingMode:C,filterShape:k}=p;(0,n.assertNotComplex)([h,f],'depthwiseConv2dNativeBackpropFilter');const M=t.backend_util.computeConv2DInfo(h.shape,k,c,u,v,C,!0),{strideHeight:w,strideWidth:B,filterHeight:N,filterWidth:F}=M,I=new t.TensorBuffer(M.filterShape,'float32'),b=M.padInfo.left,y=M.padInfo.top,_=M.outChannels/M.inChannels,x=l.data.get(h.dataId).values,H=new t.TensorBuffer(h.shape,h.dtype,x),T=l.data.get(f.dataId).values,W=new t.TensorBuffer(f.shape,f.dtype,T);for(let t=0;t<N;++t){const n=Math.max(0,Math.ceil((y-t)/w)),o=Math.min(M.outHeight,(M.inHeight+y-t)/w);for(let s=0;s<F;++s){const l=Math.max(0,Math.ceil((b-s)/B)),p=Math.min(M.outWidth,(M.inWidth+b-s)/B);for(let h=0;h<M.outChannels;++h){const f=Math.trunc(h/_),c=h%_;let u=0;for(let c=0;c<M.batchSize;++c)for(let v=n;v<o;++v){const n=t+v*w-y;for(let t=l;t<p;++t){const o=s+t*B-b;u+=H.get(c,n,o,f)*W.get(c,v,t,h)}}I.set(u,t,s,f,c)}}}return l.makeTensorInfo(I.shape,I.dtype,I.values)}e.depthwiseConv2dNativeBackpropFilterConfig={kernelName:t.DepthwiseConv2dNativeBackpropFilter,backendName:'cpu',kernelFunc:o}},2311,[1158,1515]);
__d(function(g,r,i,a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.depthwiseConv2dNativeBackpropInput=o,e.depthwiseConv2dNativeBackpropInputConfig=void 0;var t=r(d[0]),n=r(d[1]);
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
function o(o){const{inputs:p,backend:s,attrs:l}=o,{dy:u,filter:h}=p,{strides:c,dilations:f,pad:v,dimRoundingMode:k,inputShape:C}=l;(0,n.assertNotComplex)([u,h],'depthwiseConv2DNativeBackpropInput');const I=t.util.computeStrides(u.shape),M=t.util.computeStrides(h.shape),N=t.backend_util.computeConv2DInfo(C,h.shape,c,f,v,k,!0),w=new t.TensorBuffer(N.inShape,'float32'),B=w.values,[b,S,_]=w.strides,H=s.data.get(u.dataId).values,[W,x,y]=I,D=s.data.get(h.dataId).values,[T,j,z]=M,{batchSize:F,filterHeight:O,filterWidth:P,inChannels:R,inHeight:q,inWidth:A,outChannels:E,outHeight:G,outWidth:J,strideHeight:K,strideWidth:L}=N,Q=O-1-N.padInfo.top,U=P-1-N.padInfo.left,V=E/R;for(let t=0;t<F;++t)for(let n=0;n<R;++n)for(let o=0;o<q;++o){const p=o-Q,s=Math.max(0,Math.ceil(p/K)),l=Math.min(G,(O+p)/K);for(let u=0;u<A;++u){const h=u-U,c=Math.max(0,Math.ceil(h/L)),f=Math.min(J,(P+h)/L);let v=0;for(let o=s;o<l;++o){const s=o*K-p;for(let p=c;p<f;++p){const l=W*t+x*o+y*p,u=T*(O-1-s)+j*(P-1-(p*L-h))+z*n;for(let t=0;t<V;++t){v+=H[l+(n*V+t)]*D[u+t]}}}B[b*t+S*o+_*u+n]=v}}return s.makeTensorInfo(w.shape,w.dtype,w.values)}e.depthwiseConv2dNativeBackpropInputConfig={kernelName:t.DepthwiseConv2dNativeBackpropInput,backendName:'cpu',kernelFunc:o}},2312,[1158,1515]);
__d(function(g,r,_i,a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.diag=t,e.diagConfig=void 0;var n=r(d[0]);
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
   */function t(t){const{inputs:i,backend:o}=t,{x:u}=i,s=n.util.sizeFromShape(u.shape),l=o.data.get(u.dataId).values,c=(0,n.buffer)([s,s],u.dtype),f=c.values;for(let n=0;n<l.length;n++)f[n*s+n]=l[n];const p=[...u.shape,...u.shape];return o.makeTensorInfo(p,c.dtype,c.values)}e.diagConfig={kernelName:n.Diag,backendName:'cpu',kernelFunc:t}},2313,[1158]);
__d(function(g,r,i,a,m,e,_d){Object.defineProperty(e,"__esModule",{value:!0}),e.dilation2DConfig=void 0;var t=r(_d[0]);
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
   */e.dilation2DConfig={kernelName:t.Dilation2D,backendName:'cpu',kernelFunc:({inputs:o,backend:d,attrs:l})=>{const{x:n,filter:s}=o,{strides:u,pad:p,dilations:h}=l,c=d,f=c.data.get(n.dataId).values,y=n.shape.length,I=c.data.get(s.dataId).values,D=s.shape.length,{batchSize:S,inHeight:_,inWidth:b,inChannels:H,outHeight:N,outWidth:T,padInfo:W,strideHeight:k,strideWidth:v,filterHeight:x,filterWidth:C,dilationHeight:F,dilationWidth:A,outShape:E}=t.backend_util.computeDilation2DInfo(n.shape,s.shape,u,p,'NHWC',h),z=t.util.sizeFromShape(E),M=E.length,j=t.util.getArrayFromDType(n.dtype,z);for(let o=0;o<S;++o)for(let d=0;d<N;++d){const l=d*k-W.top;for(let u=0;u<T;++u){const p=u*v-W.left;for(let h=0;h<H;++h){let c=Number.MIN_SAFE_INTEGER;for(let d=0;d<x;++d){const u=l+d*F;if(u>=0&&u<_)for(let l=0;l<C;++l){const S=p+l*A;if(S>=0&&S<b){const p=t.util.locToIndex([o,u,S,h],y,t.util.computeStrides(n.shape)),_=t.util.locToIndex([d,l,h],D,t.util.computeStrides(s.shape)),b=f[p]+I[_];b>c&&(c=b)}}}j[t.util.locToIndex([o,d,u,h],M,t.util.computeStrides(E))]=c}}}return{dataId:c.write(t.util.toTypedArray(j,n.dtype),E,n.dtype),shape:E,dtype:n.dtype}}}},2314,[1158]);
__d(function(g,r,i,a,m,e,_d){Object.defineProperty(e,"__esModule",{value:!0}),e.dilation2DBackpropFilterConfig=void 0;var t=r(_d[0]);
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
   */e.dilation2DBackpropFilterConfig={kernelName:t.Dilation2DBackpropFilter,backendName:'cpu',kernelFunc:({inputs:d,backend:o,attrs:n})=>{const{x:l,filter:s,dy:p}=d,{strides:u,pad:h,dilations:c}=n,f=o,y=t.util.toNestedArray(l.shape,f.data.get(l.dataId).values),k=t.util.toNestedArray(s.shape,f.data.get(s.dataId).values),{batchSize:N,inHeight:D,inWidth:I,inChannels:b,outHeight:v,outWidth:_,padInfo:A,strideHeight:F,strideWidth:H,filterHeight:W,filterWidth:B,dilationHeight:C,dilationWidth:E,outShape:S}=t.backend_util.computeDilation2DInfo(l.shape,s.shape,u,h,'NHWC',c);t.util.assert(p.rank===S.length,()=>`Error in ${t.Dilation2DBackpropFilter}, dy must have the same rank as output ${S.length}, but got ${p.rank}`);const T=t.util.toNestedArray(S,f.data.get(p.dataId).values),$=t.util.makeZerosNestedTypedArray(s.shape,s.dtype);for(let t=0;t<N;++t)for(let d=0;d<v;++d){const o=d*F-A.top;for(let n=0;n<_;++n){const l=n*H-A.left;for(let s=0;s<b;++s){let p=Number.MIN_SAFE_INTEGER,u=0,h=0;for(let d=0;d<W;++d){const n=o+d*C;if(n>=0&&n<D)for(let o=0;o<B;++o){const c=l+o*E;if(c>=0&&c<I){const l=y[t][n][c][s]+k[d][o][s];l>p&&(p=l,u=d,h=o)}}}$[u][h][s]+=T[t][d][n][s]}}}return{dataId:f.write(t.util.toTypedArray($,l.dtype),s.shape,s.dtype),shape:s.shape,dtype:s.dtype}}}},2315,[1158]);
__d(function(g,r,i,a,m,e,_d){Object.defineProperty(e,"__esModule",{value:!0}),e.dilation2DBackpropInputConfig=void 0;var t=r(_d[0]);
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
   */e.dilation2DBackpropInputConfig={kernelName:t.Dilation2DBackpropInput,backendName:'cpu',kernelFunc:({inputs:d,backend:o,attrs:n})=>{const{x:s,filter:l,dy:p}=d,{strides:u,pad:h,dilations:c}=n,f=o,y=t.util.toNestedArray(s.shape,f.data.get(s.dataId).values),k=t.util.toNestedArray(l.shape,f.data.get(l.dataId).values),{batchSize:I,inHeight:N,inWidth:D,inChannels:b,outHeight:v,outWidth:_,padInfo:A,strideHeight:H,strideWidth:W,filterHeight:B,filterWidth:C,dilationHeight:E,dilationWidth:S,outShape:T}=t.backend_util.computeDilation2DInfo(s.shape,l.shape,u,h,'NHWC',c);t.util.assert(p.rank===T.length,()=>`Error in ${t.Dilation2DBackpropInput}, dy must have the same rank as output ${T.length}, but got ${p.rank}`);const $=t.util.toNestedArray(T,f.data.get(p.dataId).values),F=t.util.makeZerosNestedTypedArray(s.shape,s.dtype);for(let t=0;t<I;++t)for(let d=0;d<v;++d){const o=d*H-A.top;for(let n=0;n<_;++n){const s=n*W-A.left;for(let l=0;l<b;++l){let p=Number.MIN_SAFE_INTEGER,u=o<0?0:o,h=s<0?0:s;for(let d=0;d<B;++d){const n=o+d*E;if(n>=0&&n<N)for(let o=0;o<C;++o){const c=s+o*S;if(c>=0&&c<D){const s=y[t][n][c][l]+k[d][o][l];s>p&&(p=s,u=n,h=c)}}}F[t][u][h][l]+=$[t][d][n][l]}}}return{dataId:f.write(t.util.toTypedArray(F,s.dtype),s.shape,s.dtype),shape:s.shape,dtype:s.dtype}}}},2316,[1158]);
__d(function(g,r,_i,a,m,e,_d){Object.defineProperty(e,"__esModule",{value:!0}),e.draw=n,e.drawConfig=void 0;var t=r(_d[0]);
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
   */function n(t){const{inputs:n,backend:o,attrs:d}=t,{image:i}=n,{canvas:s,options:u}=d,{contextOptions:l,imageOptions:c}=u||{},h=(null==c?void 0:c.alpha)||1,p=(null==l?void 0:l.contextType)||'2d';if('2d'!==p)throw new Error(`Context type ${l.contextType} is not supported by the CPU backend.`);const f=s.getContext(p,(null==l?void 0:l.contextAttributes)||{});if(null==f)throw new Error(`Could not get the context with ${p} type.`);const[w,b]=i.shape.slice(0,2),v=2===i.shape.length?1:i.shape[2],y=o.data.get(i.dataId).values,x='float32'===i.dtype?255:1,C=new Uint8ClampedArray(b*w*4);for(let t=0;t<w*b;++t){const n=[0,0,0,255*h];for(let o=0;o<v;o++){const d=y[t*v+o];if('float32'===i.dtype){if(d<0||d>1)throw new Error(`Tensor values for a float32 Tensor must be in the range [0 - 1] but encountered ${d}.`)}else if('int32'===i.dtype&&(d<0||d>255))throw new Error(`Tensor values for a int32 Tensor must be in the range [0 - 255] but encountered ${d}.`);1===v?(n[0]=d*x,n[1]=d*x,n[2]=d*x):n[o]=d*x}const o=4*t;C[o+0]=Math.round(n[0]),C[o+1]=Math.round(n[1]),C[o+2]=Math.round(n[2]),C[o+3]=Math.round(n[3])}s.width=b,s.height=w;const T=new ImageData(C,b,w);return f.putImageData(T,0,0),i}e.drawConfig={kernelName:t.Draw,backendName:'cpu',kernelFunc:n}},2317,[1158]);
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
function l(l){const{inputs:o,backend:c,attrs:p}=l,{equation:h}=p,k=o,{allDims:b,summedDims:f,idDims:_}=n.backend_util.decodeEinsumEquation(h,k.length);n.backend_util.checkEinsumDimSizes(b.length,_,k);const{path:E,steps:D}=n.backend_util.getEinsumComputePath(f,_),x=D.length;let y=null,I=b.length;const P=[];for(let l=0;l<x;++l){for(const i of D[l]){const{permutationIndices:l,expandDims:o}=n.backend_util.getEinsumPermutation(I,_[i]);let p;n.backend_util.isIdentityPermutation(l)?p=k[i]:(p=(0,u.transpose)({inputs:{x:k[i]},backend:c,attrs:{perm:l}}),P.push(p));const h=p.shape.slice();for(let n=0;n<o.length;++n)h.splice(o[n],0,1);n.util.arraysEqual(p.shape,h)||(p=(0,s.reshape)({inputs:{x:p},backend:c,attrs:{shape:h}}),P.push(p)),null===y?y=p:(y=(0,t.multiply)({inputs:{a:p,b:y},backend:c}),P.push(y))}l<x-1&&(E[l]>=0&&(y=(0,i.sum)({inputs:{x:y},backend:c,attrs:{axis:E[l]-(b.length-I),keepDims:!1}}),P.push(y)),I--)}for(const n of P)n!==y&&c.disposeIntermediateTensorInfo(n);return y}e.einsumConfig={kernelName:n.Einsum,backendName:'cpu',kernelFunc:l}},2318,[1158,1548,2271,2319,1552]);
__d(function(g,r,_i,a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.sum=l,e.sumConfig=void 0;var t=r(d[0]),n=r(d[1]),s=r(d[2]),i=r(d[3]),o=r(d[4]),u=r(d[5]),p=r(d[6]);
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
function l(l){const{inputs:c,backend:k,attrs:b}=l,{x:h}=c,{axis:x,keepDims:f}=b;let I;(0,n.assertNotComplex)(h,'sum'),I='bool'===h.dtype?(0,i.cast)({inputs:{x:h},backend:k,attrs:{dtype:'int32'}}):(0,o.identity)({inputs:{x:h},backend:k});const _=I.shape.length,y=t.util.parseAxisParam(x,I.shape),A=t.backend_util.getAxesPermutation(y,_);let v=y,T=I;null!=A&&(T=(0,p.transpose)({inputs:{x:I},backend:k,attrs:{perm:A}}),v=t.backend_util.getInnerMostAxes(v.length,_)),t.backend_util.assertAxesAreInnerMostDims('sum',v,T.shape.length);const[S,C]=t.backend_util.computeOutAndReduceShapes(T.shape,v),D=t.backend_util.upcastType(T.dtype,'int32');let M=(0,s.zeros)(k,S,D);const N=t.util.sizeFromShape(C),P=k.data.get(M.dataId).values,z=k.data.get(T.dataId).values;for(let t=0;t<P.length;++t){const n=t*N;let s=0;for(let t=0;t<N;++t)s+=z[n+t];P[t]=s}if(f){const n=t.backend_util.expandShapeToKeepDim(M.shape,y),s=M;M=(0,u.reshape)({inputs:{x:M},backend:k,attrs:{shape:n}}),k.disposeIntermediateTensorInfo(s)}return k.disposeIntermediateTensorInfo(I),null!=A&&k.disposeIntermediateTensorInfo(T),M}e.sumConfig={kernelName:t.Sum,backendName:'cpu',kernelFunc:l}},2319,[1158,1515,1522,1521,1524,2271,1552]);
__d(function(g,r,_i,a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.eluGrad=o,e.eluGradConfig=void 0;var t=r(d[0]),n=r(d[1]);
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
function o(o){const{inputs:l,backend:u}=o,{dy:s,y:c}=l;(0,n.assertNotComplex)([s,c],'eluGrad');const i=new Float32Array(t.util.sizeFromShape(c.shape)),f=u.data.get(c.dataId).values,p=u.data.get(s.dataId).values;for(let t=0;t<f.length;++t){const n=f[t];i[t]=n>=0?p[t]:p[t]*(n+1)}return u.makeTensorInfo(c.shape,'float32',i)}e.eluGradConfig={kernelName:t.EluGrad,backendName:'cpu',kernelFunc:o}},2320,[1158,1515]);
__d(function(g,r,i,a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.erfConfig=e.erf=void 0;var n=r(d[0]),_=r(d[1]);
/**
   * @license
   * Copyright 2020 Google LLC. All Rights Reserved.
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
const t=n.backend_util.ERF_P,c=n.backend_util.ERF_A1,u=n.backend_util.ERF_A2,l=n.backend_util.ERF_A3,f=n.backend_util.ERF_A4,b=n.backend_util.ERF_A5,k=e.erf=(0,_.unaryKernelFunc)(n.Erf,n=>{const _=Math.sign(n),k=Math.abs(n),o=1/(1+t*k);return _*(1-((((b*o+f)*o+l)*o+u)*o+c)*o*Math.exp(-k*k))});e.erfConfig={kernelName:n.Erf,backendName:'cpu',kernelFunc:k}},2321,[1158,1530]);
__d(function(g,r,i,a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.expandDims=t,e.expandDimsConfig=void 0;var n=r(d[0]),s=r(d[1]);
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
function t(t){const{inputs:p,backend:u,attrs:c}=t,{input:l}=p,{dim:o}=c,h=l.shape.length,x=l.shape.slice();let b=o;return o<0&&(n.util.assert(-(h+1)<=o,()=>`Axis must be in the interval [${-(h+1)}, ${h}]`),b=h+o+1),x.splice(b,0,1),(0,s.reshape)({inputs:{x:l},backend:u,attrs:{shape:x}})}e.expandDimsConfig={kernelName:n.ExpandDims,backendName:'cpu',kernelFunc:t}},2322,[1158,2271]);
__d(function(g,r,i,a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.fft=p,e.fftConfig=void 0;var n=r(d[0]),t=r(d[1]),s=r(d[2]);
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
function p(p){const{inputs:f,backend:o}=p,{input:u}=f,c=n.util.sizeFromShape(u.shape),h=u.shape[u.shape.length-1],k=c/h,l=(0,s.reshape)({inputs:{x:u},backend:o,attrs:{shape:[k,h]}}),b=(0,t.fftBatch)(l,!1,o),F=(0,s.reshape)({inputs:{x:b},backend:o,attrs:{shape:u.shape}});return o.disposeIntermediateTensorInfo(l),o.disposeIntermediateTensorInfo(b),F}e.fftConfig={kernelName:n.FFT,backendName:'cpu',kernelFunc:p}},2323,[1158,2324,2271]);
__d(function(g,_r,_i,a,m,_e,_d){Object.defineProperty(_e,"__esModule",{value:!0}),_e.fftBatch=
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
function(n,o,s){const r=n.shape,i=r[0],d=r[1],l=s.data.get(n.dataId),p=l.complexTensorInfos.real,c=l.complexTensorInfos.imag,u=[i,d],T=e.util.sizeFromShape(u),k=e.util.getTypedArrayFromDType('float32',T),b=e.util.getTypedArrayFromDType('float32',T);for(let n=0;n<i;n++){const r=(0,I.slice)({inputs:{x:p},backend:s,attrs:{begin:[n,0],size:[1,d]}}),i=(0,I.slice)({inputs:{x:c},backend:s,attrs:{begin:[n,0],size:[1,d]}}),l=(0,t.complex)({inputs:{real:r,imag:i},backend:s}),{real:u,imag:T}=f(l,o,s),x=e.backend_util.mergeRealAndImagArrays(u,T);for(let t=0;t<d;t++){const o=e.backend_util.getComplexWithIndex(x,t);k[n*d+t]=o.real,b[n*d+t]=o.imag}s.disposeIntermediateTensorInfo(r),s.disposeIntermediateTensorInfo(i),s.disposeIntermediateTensorInfo(l)}const x=s.makeTensorInfo(u,'float32',k),h=s.makeTensorInfo(u,'float32',b),y=(0,t.complex)({inputs:{real:x,imag:h},backend:s});return s.disposeIntermediateTensorInfo(x),s.disposeIntermediateTensorInfo(h),y},_e.fftImpl=f;var e=_r(_d[0]),n=_r(_d[1]),t=_r(_d[2]),o=_r(_d[3]),s=_r(_d[4]),r=_r(_d[5]),i=_r(_d[6]),d=_r(_d[7]),l=_r(_d[8]),I=_r(_d[9]),p=_r(_d[10]);function f(n,t,o){const r=e.util.sizeFromShape(n.shape),i=o.data.get(n.dataId),d=o.data.get(i.complexTensorInfos.real.dataId).values,I=o.data.get(i.complexTensorInfos.imag.dataId).values;if((p=r)&p-1){const n=u(e.backend_util.mergeRealAndImagArrays(d,I),r,t);return e.backend_util.splitRealAndImagArrays(n)}{const i=c(d,I,r,t,o),p=[n.shape[0],n.shape[1]];if(t){const n=o.makeTensorInfo(p,'float32',i.real),t=o.makeTensorInfo(p,'float32',i.imag),d=o.makeTensorInfo([],'float32',e.util.createScalarValue(r,'float32')),I=(0,s.identity)({inputs:{x:d},backend:o}),f=l.realDivConfig.kernelFunc({inputs:{a:n,b:d},backend:o}),c=l.realDivConfig.kernelFunc({inputs:{a:t,b:I},backend:o}),u=o.data.get(f.dataId).values,T=o.data.get(c.dataId).values;return o.disposeIntermediateTensorInfo(n),o.disposeIntermediateTensorInfo(t),o.disposeIntermediateTensorInfo(d),o.disposeIntermediateTensorInfo(I),o.disposeIntermediateTensorInfo(f),o.disposeIntermediateTensorInfo(c),{real:u,imag:T}}return i}var p}function c(s,l,I,f,u){if(1===I)return{real:s,imag:l};const T=e.backend_util.mergeRealAndImagArrays(s,l),k=I/2,b=e.backend_util.complexWithEvenIndex(T),x=b.real,h=b.imag,y=[x.length],_=u.makeTensorInfo(y,'float32',x),v=u.makeTensorInfo(y,'float32',h),A=(0,t.complex)({inputs:{real:_,imag:v},backend:u}),F=e.backend_util.complexWithOddIndex(T),z=F.real,C=F.imag,D=[z.length],R=u.makeTensorInfo(D,'float32',z),W=u.makeTensorInfo(D,'float32',C),S=(0,t.complex)({inputs:{real:R,imag:W},backend:u}),O=c(x,h,k,f,u),j=O.real,w=O.imag,B=[j.length],E=u.makeTensorInfo(B,'float32',j),M=u.makeTensorInfo(B,'float32',w),P=(0,t.complex)({inputs:{real:E,imag:M},backend:u}),V=c(z,C,k,f,u),q=V.real,G=V.imag,H=[q.length],J=u.makeTensorInfo(H,'float32',q),K=u.makeTensorInfo(H,'float32',G),L=(0,t.complex)({inputs:{real:J,imag:K},backend:u}),N=e.backend_util.exponents(I,f),Q=[N.real.length],U=u.makeTensorInfo(Q,'float32',N.real),X=u.makeTensorInfo(Q,'float32',N.imag),Y=(0,t.complex)({inputs:{real:U,imag:X},backend:u}),Z=(0,i.multiply)({inputs:{a:Y,b:L},backend:u}),$=(0,n.add)({inputs:{a:P,b:Z},backend:u}),ee=(0,p.sub)({inputs:{a:P,b:Z},backend:u}),ne=(0,d.real)({inputs:{input:$},backend:u}),ae=(0,d.real)({inputs:{input:ee},backend:u}),te=(0,r.imag)({inputs:{input:$},backend:u}),oe=(0,r.imag)({inputs:{input:ee},backend:u}),se=(0,o.concat)({inputs:[ne,ae],backend:u,attrs:{axis:0}}),re=(0,o.concat)({inputs:[te,oe],backend:u,attrs:{axis:0}}),ie=u.data.get(se.dataId).values,de=u.data.get(re.dataId).values;return u.disposeIntermediateTensorInfo(_),u.disposeIntermediateTensorInfo(v),u.disposeIntermediateTensorInfo(A),u.disposeIntermediateTensorInfo(R),u.disposeIntermediateTensorInfo(W),u.disposeIntermediateTensorInfo(S),u.disposeIntermediateTensorInfo(E),u.disposeIntermediateTensorInfo(M),u.disposeIntermediateTensorInfo(P),u.disposeIntermediateTensorInfo(J),u.disposeIntermediateTensorInfo(K),u.disposeIntermediateTensorInfo(L),u.disposeIntermediateTensorInfo(U),u.disposeIntermediateTensorInfo(X),u.disposeIntermediateTensorInfo(Y),u.disposeIntermediateTensorInfo(Z),u.disposeIntermediateTensorInfo($),u.disposeIntermediateTensorInfo(ee),u.disposeIntermediateTensorInfo(ne),u.disposeIntermediateTensorInfo(te),u.disposeIntermediateTensorInfo(ae),u.disposeIntermediateTensorInfo(oe),u.disposeIntermediateTensorInfo(se),u.disposeIntermediateTensorInfo(re),{real:ie,imag:de}}function u(n,t,o){const s=new Float32Array(2*t);for(let r=0;r<t;r++){let i=0,d=0;for(let s=0;s<t;s++){const l=e.backend_util.exponent(r*s,t,o),I=e.backend_util.getComplexWithIndex(n,s);i+=I.real*l.real-I.imag*l.imag,d+=I.real*l.imag+I.imag*l.real}o&&(i/=t,d/=t),e.backend_util.assignToTypedArray(s,i,d,r)}return s}},2324,[1158,1518,1523,2295,1524,2296,1548,1525,2325,1561,1572]);
__d(function(g,r,i,_a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.realDivImpl=e.realDivConfig=e.div=void 0;var l=r(d[0]),n=r(d[1]),a=r(d[2]);
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
const v=e.realDivImpl=(0,n.createSimpleBinaryKernelImpl)((l,n)=>l/n),c=e.div=(0,a.binaryKernelFunc)(l.RealDiv,v);e.realDivConfig={kernelName:l.RealDiv,backendName:'cpu',kernelFunc:c}},2325,[1158,1519,1520]);
__d(function(g,r,i,a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.fill=l,e.fillConfig=void 0;var n=r(d[0]);
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
   */function l(l){const{backend:o,attrs:f}=l,{shape:u,value:c,dtype:p}=f,s=p||n.util.inferDtype(c),k=n.util.getArrayFromDType(s,n.util.sizeFromShape(u));return t(k,c,s),o.makeTensorInfo(u,s,k)}e.fillConfig={kernelName:n.Fill,backendName:'cpu',kernelFunc:l};function t(n,l,t){n.fill(l)}},2326,[1158]);
__d(function(g,r,i,a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.flipLeftRightConfig=void 0;var t=r(d[0]);
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
   */e.flipLeftRightConfig={kernelName:t.FlipLeftRight,backendName:'cpu',kernelFunc:({inputs:n,attrs:o,backend:p})=>{const{image:l}=n,s=p,f=t.util.getTypedArrayFromDType(l.dtype,t.util.sizeFromShape(l.shape)),[c,u,h,y]=l.shape,k=s.data.get(l.dataId).values;for(let t=0;t<c;t++){const n=t*h*u*y;for(let t=0;t<u;t++){const o=t*(h*y);for(let t=0;t<h;t++){const p=t*y;for(let l=0;l<y;l++){const s=Math.round(h-t-1),c=n+o+p+l;let u=k[c];if(s>=0&&s<h){u=k[n+o+s*y+l]}f[c]=u}}}}return{dataId:s.write(f,l.shape,l.dtype),shape:l.shape,dtype:l.dtype}}}},2327,[1158]);
__d(function(g,r,i,a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.fusedConv2D=c,e.fusedConv2DConfig=void 0;var n=r(d[0]),t=r(d[1]),s=r(d[2]),o=r(d[3]),p=r(d[4]);
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
function c(n){const{inputs:c,backend:u,attrs:l}=n,{x:f,filter:h,bias:v,preluActivationWeights:b}=c,{strides:k,pad:C,dataFormat:I,dilations:D,dimRoundingMode:x,activation:y,leakyreluAlpha:A}=l;let F=(0,o.conv2D)({inputs:{x:f,filter:h},backend:u,attrs:{strides:k,pad:C,dataFormat:I,dilations:D,dimRoundingMode:x}});if(v){const n=F;if('NCHW'===I&&1===v.shape.length&&1!==v.shape[0]){const n=(0,p.reshape)({inputs:{x:v},backend:u,attrs:{shape:[v.shape[0],1,1]}});F=(0,s.add)({inputs:{a:F,b:n},backend:u}),u.disposeIntermediateTensorInfo(n)}else F=(0,s.add)({inputs:{a:F,b:v},backend:u});u.disposeIntermediateTensorInfo(n)}if(y){const n=F;if('NCHW'===I&&'prelu'===y&&1===b.shape.length&&1!==b.shape[0]){const n=(0,p.reshape)({inputs:{x:b},backend:u,attrs:{shape:[b.shape[0],1,1]}});F=(0,t.applyActivation)(u,F,y,n,A),u.disposeIntermediateTensorInfo(n)}else F=(0,t.applyActivation)(u,F,y,b,A);u.disposeIntermediateTensorInfo(n)}return F}e.fusedConv2DConfig={kernelName:n.FusedConv2D,backendName:'cpu',kernelFunc:c}},2328,[1158,2264,1518,2297,2271]);
__d(function(g,r,i,a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.fusedDepthwiseConv2D=p,e.fusedDepthwiseConv2DConfig=void 0;var t=r(d[0]),n=r(d[1]),o=r(d[2]),s=r(d[3]);
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
function p(t){const{inputs:p,backend:u,attrs:c}=t,{x:f,filter:l,bias:v,preluActivationWeights:D}=p,{strides:b,pad:h,dataFormat:k,dilations:C,dimRoundingMode:w,activation:F,leakyreluAlpha:I}=c;let _=(0,s.depthwiseConv2dNative)({inputs:{x:f,filter:l},backend:u,attrs:{strides:b,pad:h,dataFormat:k,dilations:C,dimRoundingMode:w}});if(v){const t=_;_=(0,o.add)({inputs:{a:_,b:v},backend:u}),u.disposeIntermediateTensorInfo(t)}if(F){const t=_;_=(0,n.applyActivation)(u,_,F,D,I),u.disposeIntermediateTensorInfo(t)}return _}e.fusedDepthwiseConv2DConfig={kernelName:t.FusedDepthwiseConv2D,backendName:'cpu',kernelFunc:p}},2329,[1158,2264,1518,2310]);
__d(function(g,r,i,a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.gatherNd=o,e.gatherNdConfig=void 0;var n=r(d[0]),t=r(d[1]);
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
function o(o){const{inputs:p,backend:s}=o,{params:u,indices:c}=p,l=n.util.sizeFromShape(u.shape),f=c.shape,h=f[f.length-1],[k,N,b,v]=n.backend_util.prepareAndValidate(u,c);if(0===N)return s.makeTensorInfo(k,u.dtype,[]);const y=s.data.get(c.dataId).values,_=s.bufferSync(u),I=(0,t.gatherNdImpl)(y,_,u.dtype,N,h,b,v,u.shape,l);return s.makeTensorInfo(k,u.dtype,I.values)}e.gatherNdConfig={kernelName:n.GatherNd,backendName:'cpu',kernelFunc:o}},2330,[1158,1537]);
__d(function(g,r,_i,a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.gatherV2=o,e.gatherV2Config=void 0;var t=r(d[0]),n=r(d[1]),s=r(d[2]),i=r(d[3]);
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
function o(o){const{inputs:c,backend:h,attrs:u}=o,{x:l,indices:p}=c,{axis:S,batchDims:b}=u;(0,n.assertNotComplex)([l,p],'gatherV2');const f=t.util.parseAxisParam(S,l.shape)[0],z=h.data.get(p.dataId).values,k=l.shape[f];for(let n=0;n<z.length;++n){const s=z[n];t.util.assert(s<=k-1&&s>=0,()=>`GatherV2: the index value ${s} is not in [0, ${k-1}]`)}let I=b;null==b&&(I=0);const x=t.util.sizeFromShape(p.shape),V=t.backend_util.segment_util.collectGatherOpShapeInfo(l,p,f,I),v=(0,i.reshape)({inputs:{x:l},backend:h,attrs:{shape:[V.batchSize,V.outerSize,V.dimSize,V.sliceSize]}}),_=(0,i.reshape)({inputs:{x:p},backend:h,attrs:{shape:[V.batchSize,x/V.batchSize]}}),y=[V.batchSize,V.outerSize,x/V.batchSize,V.sliceSize],C=h.bufferSync(_),G=h.bufferSync(v),N=(0,s.gatherV2Impl)(G,C,y);return h.disposeIntermediateTensorInfo(v),h.disposeIntermediateTensorInfo(_),h.makeTensorInfo(V.outputShape,N.dtype,N.values)}e.gatherV2Config={kernelName:t.GatherV2,backendName:'cpu',kernelFunc:o}},2331,[1158,1515,1538,2271]);
__d(function(g,r,i,a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.ifft=p,e.ifftConfig=void 0;var n=r(d[0]),t=r(d[1]),s=r(d[2]);
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
function p(p){const{inputs:f,backend:o}=p,{input:u}=f,c=n.util.sizeFromShape(u.shape),h=u.shape[u.shape.length-1],k=c/h,l=(0,s.reshape)({inputs:{x:u},backend:o,attrs:{shape:[k,h]}}),b=(0,t.fftBatch)(l,!0,o),I=(0,s.reshape)({inputs:{x:b},backend:o,attrs:{shape:u.shape}});return o.disposeIntermediateTensorInfo(l),o.disposeIntermediateTensorInfo(b),I}e.ifftConfig={kernelName:n.IFFT,backendName:'cpu',kernelFunc:p}},2332,[1158,2324,2271]);
__d(function(g,r,i,a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.isFiniteConfig=e.isFinite=void 0;var n=r(d[0]),t=r(d[1]);
/**
   * @license
   * Copyright 2020 Google LLC. All Rights Reserved.
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
const o=e.isFinite=(0,t.unaryKernelFunc)(n.IsFinite,n=>Number.isFinite(n)?1:0,'bool');e.isFiniteConfig={kernelName:n.IsFinite,backendName:'cpu',kernelFunc:o}},2333,[1158,1530]);
__d(function(g,r,i,a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.isInfConfig=e.isInf=void 0;var n=r(d[0]),f=r(d[1]);
/**
   * @license
   * Copyright 2020 Google LLC. All Rights Reserved.
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
const o=e.isInf=(0,f.unaryKernelFunc)(n.IsInf,n=>Math.abs(n)===1/0?1:0,'bool');e.isInfConfig={kernelName:n.IsInf,backendName:'cpu',kernelFunc:o}},2334,[1158,1530]);
__d(function(g,r,i,a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.isNaNConfig=e.isNaN=void 0;var n=r(d[0]),N=r(d[1]);
/**
   * @license
   * Copyright 2020 Google LLC. All Rights Reserved.
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
const o=e.isNaN=(0,N.unaryKernelFunc)(n.IsNan,n=>Number.isNaN(n)?1:0,'bool');e.isNaNConfig={kernelName:n.IsNan,backendName:'cpu',kernelFunc:o}},2335,[1158,1530]);
__d(function(g,r,i,a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.linSpace=t,e.linSpaceConfig=void 0;var n=r(d[0]),c=r(d[1]);
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
function t(n){const{backend:t,attrs:o}=n,{start:l,stop:p,num:u}=o,f=(0,c.linSpaceImpl)(l,p,u);return t.makeTensorInfo([f.length],'float32',f)}e.linSpaceConfig={kernelName:n.LinSpace,backendName:'cpu',kernelFunc:t}},2336,[1158,1543]);
__d(function(g,r,i,a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.log1pConfig=e.log1p=void 0;var o=r(d[0]),n=r(d[1]);
/**
   * @license
   * Copyright 2020 Google LLC. All Rights Reserved.
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
const l=e.log1p=(0,n.unaryKernelFunc)(o.Log1p,o=>Math.log1p(o));e.log1pConfig={kernelName:o.Log1p,backendName:'cpu',kernelFunc:l}},2337,[1158,1530]);
__d(function(g,r,i,_a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.logicalAndImpl=e.logicalAndConfig=e.logicalAnd=void 0;var l=r(d[0]),n=r(d[1]),o=r(d[2]);
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
const a=e.logicalAndImpl=(0,n.createSimpleBinaryKernelImpl)((l,n)=>l&&n),c=e.logicalAnd=(0,o.binaryKernelFunc)(l.LogicalAnd,a,null,'bool');e.logicalAndConfig={kernelName:l.LogicalAnd,backendName:'cpu',kernelFunc:c}},2338,[1158,1519,1520]);
__d(function(g,r,i,a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.logicalNotConfig=e.logicalNot=void 0;var o=r(d[0]),l=r(d[1]);
/**
   * @license
   * Copyright 2020 Google LLC. All Rights Reserved.
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
const c=e.logicalNot=(0,l.unaryKernelFunc)(o.LogicalNot,o=>o?0:1,'bool');e.logicalNotConfig={kernelName:o.LogicalNot,backendName:'cpu',kernelFunc:c}},2339,[1158,1530]);
__d(function(g,r,i,_a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.logicalOrImpl=e.logicalOrConfig=e.logicalOr=void 0;var l=r(d[0]),o=r(d[1]),a=r(d[2]);
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
const c=e.logicalOrImpl=(0,o.createSimpleBinaryKernelImpl)((l,o)=>l||o),n=e.logicalOr=(0,a.binaryKernelFunc)(l.LogicalOr,c,null,'bool');e.logicalOrConfig={kernelName:l.LogicalOr,backendName:'cpu',kernelFunc:n}},2340,[1158,1519,1520]);
__d(function(g,r,i,a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.LRNConfig=void 0,e.lRN=o;var t=r(d[0]),n=r(d[1]);
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
function o(o){const{inputs:s,backend:c,attrs:l}=o,{x:u}=s,{depthRadius:p,bias:f,alpha:h,beta:N}=l;(0,n.assertNotComplex)(u,'LRN');const R=u.shape[3],b=R-1,k=c.data.get(u.dataId).values,v=t.util.sizeFromShape(u.shape),L=new Float32Array(v);function M(t){const n=t%R;let o=t-n+Math.max(0,n-p);const s=t-n+Math.min(n+p,b);let c=0;for(;o<=s;o++){const t=k[o];c+=t*t}return c}for(let t=0;t<v;t++){const n=M(t),o=k[t]*Math.pow(f+h*n,-N);L[t]=o}return c.makeTensorInfo(u.shape,u.dtype,L)}e.LRNConfig={kernelName:t.LRN,backendName:'cpu',kernelFunc:o}},2341,[1158,1515]);
__d(function(g,r,i,a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.LRNGradConfig=void 0,e.lRNGrad=o;var t=r(d[0]),n=r(d[1]);
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
function o(o){const{inputs:s,backend:l,attrs:p}=o,{x:u,y:c,dy:h}=s,{depthRadius:f,bias:N,alpha:v,beta:R}=p;(0,n.assertNotComplex)(h,'LRNGrad');const b=t.util.sizeFromShape(h.shape),k=h.shape[3],y=l.data.get(h.dataId).values,G=l.data.get(u.dataId).values,M=l.data.get(c.dataId).values,I=new Float32Array(b),L=b;for(let t=0;t<L;t++){const n=t%k,o=t-n+Math.max(0,n-f),s=t-n+Math.min(k,n+f+1);let l=0;for(let t=o;t<s;t++)l+=Math.pow(G[t],2);l=v*l+N;for(let n=o;n<s;n++){let o=-2*v*R*G[n]*M[t]/l;t===n&&(o+=Math.pow(l,-R)),o*=y[t],I[n]+=o}}return l.makeTensorInfo(h.shape,u.dtype,I)}e.LRNGradConfig={kernelName:t.LRNGrad,backendName:'cpu',kernelFunc:o}},2342,[1158,1515]);
__d(function(g,r,_i,a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.max=l,e.maxConfig=void 0;var t=r(d[0]),n=r(d[1]),s=r(d[2]),i=r(d[3]);
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
function l(l){const{inputs:o,backend:p,attrs:u}=l,{x:c}=o,{reductionIndices:x,keepDims:k}=u,_=p;let b=c.shape;const f=b.length,h=t.util.parseAxisParam(x,b);let y=h;const A=t.backend_util.getAxesPermutation(y,f);let I=_.data.get(c.dataId).values;if(null!=A){const n=new Array(f);for(let t=0;t<n.length;t++)n[t]=b[A[t]];I=(0,i.transposeImpl)(I,b,c.dtype,A,n),y=t.backend_util.getInnerMostAxes(y.length,f),b=n}(0,n.assertNotComplex)(c,'max'),t.backend_util.assertAxesAreInnerMostDims('max',y,f);const[v,M]=t.backend_util.computeOutAndReduceShapes(b,y),C=t.util.sizeFromShape(M),D=(0,s.maxImpl)(I,C,v,c.dtype),N=_.write(D,v,c.dtype);let P=v;if(k){P=t.backend_util.expandShapeToKeepDim(v,h)}return{dataId:N,shape:P,dtype:c.dtype}}e.maxConfig={kernelName:t.Max,backendName:'cpu',kernelFunc:l}},2343,[1158,1515,1545,1553]);
__d(function(g,r,i,a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.maxPool=l,e.maxPoolConfig=void 0;var t=r(d[0]),o=r(d[1]),n=r(d[2]),s=r(d[3]);
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
function l(l){const{inputs:u,backend:p,attrs:c}=l,{x:f}=u;(0,o.assertNotComplex)(f,'maxPool');const{filterSize:h,strides:x,pad:k,dimRoundingMode:P}=c;t.util.assert(t.backend_util.eitherStridesOrDilationsAreOne(x,1),()=>`Error in maxPool: Either strides or dilations must be 1. Got strides ${x} and dilations '1'`);const b=t.backend_util.computePool2DInfo(f.shape,h,x,1,k,P);let S;if(1===b.filterWidth&&1===b.filterHeight&&t.util.arraysEqual(b.inShape,b.outShape))S=(0,s.identity)({inputs:{x:f},backend:p});else{const o=p.data.get(f.dataId).values,s=t.util.computeStrides(f.shape),l=(0,n.pool)(o,f.shape,f.dtype,s,b,'max');S=p.makeTensorInfo(b.outShape,f.dtype,l.values)}return S}e.maxPoolConfig={kernelName:t.MaxPool,backendName:'cpu',kernelFunc:l}},2344,[1158,1515,2285,1524]);
__d(function(g,r,i,a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.maxPool3D=l,e.maxPool3DConfig=void 0;var o=r(d[0]),t=r(d[1]),n=r(d[2]);
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
function l(l){const{inputs:s,backend:u,attrs:p}=l,{x:c}=s,{filterSize:f,strides:x,pad:P,dimRoundingMode:k,dataFormat:v}=p;(0,t.assertNotComplex)(c,'maxPool3d');const D=o.backend_util.computePool3DInfo(c.shape,f,x,1,P,k,v),_=u.data.get(c.dataId).values,b=(0,n.pool3d)(_,c.shape,c.dtype,o.util.computeStrides(c.shape),D,'max');return u.makeTensorInfo(b.shape,'float32',b.values)}e.maxPool3DConfig={kernelName:o.MaxPool3D,backendName:'cpu',kernelFunc:l}},2345,[1158,1515,2285]);
__d(function(g,r,i,a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.maxPool3DGrad=f,e.maxPool3DGradConfig=void 0;var t=r(d[0]),o=r(d[1]),n=r(d[2]);
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
function f(f){const{inputs:l,backend:s,attrs:c}=f,{dy:h,input:u}=l,{filterSize:p,strides:D,pad:P,dimRoundingMode:b}=c;(0,o.assertNotComplex)([h,u],'maxPool3DGrad');const v=t.backend_util.computePool3DInfo(u.shape,p,D,1,P,b),x=s.bufferSync(u),k=(0,n.maxPool3dPositions)(x,v),M=v.strideDepth,y=v.strideHeight,G=v.strideWidth,H=v.dilationDepth,I=v.dilationHeight,W=v.dilationWidth,_=v.effectiveFilterDepth,C=v.effectiveFilterHeight,F=v.effectiveFilterWidth,S=_-1-v.padInfo.front,N=F-1-v.padInfo.left,z=C-1-v.padInfo.top,j=(0,t.buffer)(u.shape,'float32'),O=s.bufferSync(h);for(let t=0;t<v.batchSize;++t)for(let o=0;o<v.inChannels;++o)for(let n=0;n<v.inDepth;++n)for(let f=0;f<v.inHeight;++f)for(let l=0;l<v.inWidth;++l){const s=n-S,c=f-z,h=l-N;let u=0;for(let n=0;n<_;n+=H){const f=(s+n)/M;if(!(f<0||f>=v.outDepth||Math.floor(f)!==f))for(let l=0;l<C;l+=I){const s=(c+l)/y;if(!(s<0||s>=v.outHeight||Math.floor(s)!==s))for(let c=0;c<F;c+=W){const p=(h+c)/G;if(p<0||p>=v.outWidth||Math.floor(p)!==p)continue;const D=_*C*F-1-k.get(t,f,s,p,o)===n*C*F+l*F+c?1:0;if(0===D)continue;u+=O.get(t,f,s,p,o)*D}}}j.set(u,t,n,f,l,o)}return s.makeTensorInfo(j.shape,j.dtype,j.values)}e.maxPool3DGradConfig={kernelName:t.MaxPool3DGrad,backendName:'cpu',kernelFunc:f}},2346,[1158,1515,2285]);
__d(function(g,r,i,a,m,e,_d){Object.defineProperty(e,"__esModule",{value:!0}),e.maxPoolGrad=d,e.maxPoolGradConfig=void 0;var t=r(_d[0]),o=r(_d[1]),n=r(_d[2]);
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
function d(d){const{inputs:l,backend:f,attrs:s}=d,{dy:u,input:c,output:h}=l,p=c;(0,o.assertNotComplex)([c,h],'maxPoolGrad');const{filterSize:v,strides:P,pad:b,dimRoundingMode:x}=s,k=t.backend_util.computePool2DInfo(p.shape,v,P,1,b,x),I=f.data.get(p.dataId).values,y=(0,t.buffer)(k.outShape,p.dtype,(0,n.maxPoolPositions)(I,p.shape,p.dtype,k).values),G=k.strideHeight,H=k.strideWidth,M=k.dilationHeight,W=k.dilationWidth,_=k.effectiveFilterHeight,C=k.effectiveFilterWidth,F=C-1-k.padInfo.left,N=_-1-k.padInfo.top,S=(0,t.buffer)(p.shape,'float32'),z=f.data.get(u.dataId).values,j=(0,t.buffer)(u.shape,'float32',z);for(let t=0;t<k.batchSize;++t)for(let o=0;o<k.inChannels;++o)for(let n=0;n<k.inHeight;++n)for(let d=0;d<k.inWidth;++d){const l=n-N,f=d-F;let s=0;for(let n=0;n<_;n+=M){const d=(l+n)/G;if(!(d<0||d>=k.outHeight||Math.floor(d)!==d))for(let l=0;l<C;l+=W){const u=(f+l)/H;if(u<0||u>=k.outWidth||Math.floor(u)!==u)continue;const c=_*C-1-y.get(t,d,u,o)===n*C+l?1:0;if(0===c)continue;s+=j.get(t,d,u,o)*c}}S.set(s,t,n,d,o)}return f.makeTensorInfo(S.shape,S.dtype,S.values)}e.maxPoolGradConfig={kernelName:t.MaxPoolGrad,backendName:'cpu',kernelFunc:d}},2347,[1158,1515,2285]);
__d(function(g,r,i,a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.maxPoolWithArgmaxConfig=void 0;var t=r(d[0]),o=r(d[1]),p=r(d[2]);
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
e.maxPoolWithArgmaxConfig={kernelName:t.MaxPoolWithArgmax,backendName:'cpu',kernelFunc:({inputs:n,attrs:l,backend:u})=>{const{x:h}=n,{filterSize:s,strides:x,pad:c,includeBatchInIndex:y}=l,I=u;(0,o.assertNotComplex)(h,'MaxPoolWithArgmax');const P=I.data.get(h.dataId).values,f=t.backend_util.computePool2DInfo(h.shape,s,x,[1,1],c),[k,A]=(0,p.maxPoolWithArgmaxImpl)(P,h.shape,h.dtype,y,f),S=I.write(k,f.outShape,h.dtype),W=I.write(A,f.outShape,h.dtype);return[{dataId:S,shape:f.outShape,dtype:h.dtype},{dataId:W,shape:f.outShape,dtype:'int32'}]}}},2348,[1158,1515,2349]);
__d(function(g,r,i,a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.maxPoolWithArgmaxImpl=
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
function(l,u,n,s,c){const p=o.util.computeStrides(u),v=(0,t.pool)(l,u,n,p,c,'max'),x=(0,t.maxPoolPositions)(l,u,n,c,!0,s);return[v.values,x.values]};var o=r(d[0]),t=r(d[1])},2349,[1158,2285]);
__d(function(g,r,i,a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.mean=u,e.meanConfig=void 0;var n=r(d[0]),s=r(d[1]),t=r(d[2]),o=r(d[3]);
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
function u(u){const{inputs:c,backend:p,attrs:k}=u,{x:f}=c,{axis:l,keepDims:b}=k,h=n.util.parseAxisParam(l,f.shape),x=n.backend_util.computeOutAndReduceShapes(f.shape,h)[1],_=n.util.sizeFromShape(x),v=[],y=p.makeTensorInfo([],'float32',new Float32Array([_]));v.push(y);const A=(0,s.cast)({inputs:{x:f},backend:p,attrs:{dtype:'float32'}});v.push(A);const F=(0,t.div)({inputs:{a:A,b:y},backend:p});v.push(F);const I=(0,o.sum)({inputs:{x:F},backend:p,attrs:{axis:l,keepDims:b}});return v.forEach(n=>p.disposeIntermediateTensorInfo(n)),I}e.meanConfig={kernelName:n.Mean,backendName:'cpu',kernelFunc:u}},2350,[1158,1521,2325,2319]);
__d(function(g,r,_i,a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.min=o,e.minConfig=void 0;var t=r(d[0]),n=r(d[1]),s=r(d[2]),i=r(d[3]);
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
function o(o){const{inputs:l,backend:p,attrs:u}=o,{x:c}=l,{axis:h,keepDims:k}=u;(0,n.assertNotComplex)(c,'min');const b=t.util.parseAxisParam(h,c.shape);let f=b;const x=t.backend_util.getAxesPermutation(f,c.shape.length);let _=c;null!=x&&(_=(0,i.transpose)({inputs:{x:c},backend:p,attrs:{perm:x}}),f=t.backend_util.getInnerMostAxes(f.length,c.shape.length)),t.backend_util.assertAxesAreInnerMostDims('min',f,_.shape.length);const[I,A]=t.backend_util.computeOutAndReduceShapes(_.shape,f),N=t.util.sizeFromShape(A),y=t.util.makeZerosTypedArray(t.util.sizeFromShape(I),_.dtype),T=p.data.get(_.dataId).values;for(let t=0;t<y.length;++t){const n=t*N;let s=T[n];for(let t=0;t<N;++t){const i=T[n+t];(Number.isNaN(i)||i<s)&&(s=i)}y[t]=s}null!=x&&p.disposeIntermediateTensorInfo(_);const v=p.makeTensorInfo(I,_.dtype,y);if(k){const n=t.backend_util.expandShapeToKeepDim(I,b),i=(0,s.reshape)({inputs:{x:v},backend:p,attrs:{shape:n}});return p.disposeIntermediateTensorInfo(v),i}return v}e.minConfig={kernelName:t.Min,backendName:'cpu',kernelFunc:o}},2351,[1158,1515,2271,1552]);
__d(function(g,r,_i,a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.mirrorPad=i,e.mirrorPadConfig=void 0;var t=r(d[0]),o=r(d[1]);
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
function i(i){const{inputs:p,backend:n,attrs:l}=i,{x:s}=p,{paddings:u,mode:c}=l;(0,o.assertNotComplex)(s,'mirrorPad');const f=u.map((t,o)=>t[0]+s.shape[o]+t[1]),h=u.map(t=>t[0]),y=u.map((t,o)=>t[0]+s.shape[o]),P='reflect'===c?0:1,k=n.data.get(s.dataId).values,v=s.shape.length,x=t.util.computeStrides(s.shape),T=t.util.sizeFromShape(f),_=f.length,b=t.util.computeStrides(f),C=t.util.getTypedArrayFromDType(s.dtype,T);for(let o=0;o<T;o++){let i=t.util.indexToLoc(o,_,b);for(let t=0;t<_;t++)i[t]<h[t]?i[t]=2*h[t]-i[t]-P:i[t]>=y[t]&&(i[t]=2*(y[t]-1)-i[t]+P);i=i.map((t,o)=>t-h[o]);const p=t.util.locToIndex(i,v,x);C[o]=k[p]}return{dataId:n.write(C,f,s.dtype),shape:f,dtype:s.dtype}}e.mirrorPadConfig={kernelName:t.MirrorPad,backendName:'cpu',kernelFunc:i}},2352,[1158,1515]);
__d(function(g,r,i,a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.modImpl=e.modConfig=e.mod=void 0;var n=r(d[0]),o=r(d[1]),l=r(d[2]);
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
const c=e.modImpl=(0,o.createSimpleBinaryKernelImpl)((n,o)=>{const l=n%o;return n<0&&o<0||n>=0&&o>=0?l:(l+o)%o}),t=e.mod=(0,l.binaryKernelFunc)(n.Mod,c);e.modConfig={kernelName:n.Mod,backendName:'cpu',kernelFunc:t}},2353,[1158,1519,1520]);
__d(function(g,_r,_i,a,m,_e,d){Object.defineProperty(_e,"__esModule",{value:!0}),_e.multinomial=r,_e.multinomialConfig=void 0;var e=_r(d[0]),t=(function(e,t){if("function"==typeof WeakMap)var n=new WeakMap,o=new WeakMap;return(function(e,t){if(!t&&e&&e.__esModule)return e;var r,i,l={__proto__:null,default:e};if(null===e||"object"!=typeof e&&"function"!=typeof e)return l;if(r=t?o:n){if(r.has(e))return r.get(e);r.set(e,l)}for(const t in e)"default"!==t&&{}.hasOwnProperty.call(e,t)&&((i=(r=Object.defineProperty)&&Object.getOwnPropertyDescriptor(e,t))&&(i.get||i.set)?r(l,t,i):l[t]=e[t]);return l})(e,t)}
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
   */)(_r(d[1])),n=_r(d[2]),o=_r(d[3]);function r(r){const{inputs:i,backend:l,attrs:s}=r,{logits:u}=i,{numSamples:f,seed:c,normalized:p}=s;(0,n.assertNotComplex)(u,'multinomial');const k=p?u:(0,o.softmax)({inputs:{logits:u},backend:l,attrs:{dim:-1}}),y=k.shape[0],_=k.shape[1],b=l.data.get(k.dataId).values,h=[y,f],v=e.util.makeZerosTypedArray(e.util.sizeFromShape(h),'int32');for(let e=0;e<y;++e){const n=e*_,o=new Float32Array(_-1);o[0]=b[n];for(let e=1;e<o.length;++e)o[e]=o[e-1]+b[n+e];const r=t.alea(c.toString()),i=e*f;for(let e=0;e<f;++e){const t=r();v[i+e]=o.length;for(let n=0;n<o.length;n++)if(t<o[n]){v[i+e]=n;break}}}return p||l.disposeIntermediateTensorInfo(k),l.makeTensorInfo(h,'int32',v)}_e.multinomialConfig={kernelName:e.Multinomial,backendName:'cpu',kernelFunc:r}},2354,[1158,1348,1515,2355]);
__d(function(g,r,i,_a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.softmax=c,e.softmaxConfig=void 0;var n=r(d[0]),s=r(d[1]),t=r(d[2]),a=r(d[3]),o=r(d[4]),p=r(d[5]),u=r(d[6]);
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
function c(c){const{inputs:f,backend:k,attrs:x}=c,{logits:b}=f,{dim:I}=x,l=b.shape.length;let h=I;if(-1===h&&(h=l-1),h!==l-1)throw Error(`Softmax along a non-last dimension is not yet supported. Logits was rank ${l} and dim was ${h}`);const T=n.util.parseAxisParam([h],b.shape),_=(0,t.max)({inputs:{x:b},backend:k,attrs:{reductionIndices:T,keepDims:!1}}),v=n.backend_util.expandShapeToKeepDim(_.shape,T),w=(0,o.reshape)({inputs:{x:_},backend:k,attrs:{shape:v}}),D=(0,p.sub)({inputs:{a:b,b:w},backend:k}),S=(0,s.exp)({inputs:{x:D},backend:k}),y=(0,u.sum)({inputs:{x:S},backend:k,attrs:{axis:T,keepDims:!1}}),C=(0,o.reshape)({inputs:{x:y},backend:k,attrs:{shape:v}}),N=(0,a.div)({inputs:{a:S,b:C},backend:k});return k.disposeIntermediateTensorInfo(_),k.disposeIntermediateTensorInfo(w),k.disposeIntermediateTensorInfo(D),k.disposeIntermediateTensorInfo(S),k.disposeIntermediateTensorInfo(y),k.disposeIntermediateTensorInfo(C),N}e.softmaxConfig={kernelName:n.Softmax,backendName:'cpu',kernelFunc:c}},2355,[1158,1533,2343,2325,2271,1572,2319]);
__d(function(g,r,i,a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.nonMaxSuppressionV3=t,e.nonMaxSuppressionV3Config=void 0;var n=r(d[0]),o=r(d[1]);
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
const s=n.kernel_impls.nonMaxSuppressionV3Impl;function t(n){const{inputs:t,backend:p,attrs:u}=n,{boxes:c,scores:l}=t,{maxOutputSize:x,iouThreshold:M,scoreThreshold:S}=u;(0,o.assertNotComplex)(c,'NonMaxSuppression');const f=p.data.get(c.dataId).values,k=p.data.get(l.dataId).values,{selectedIndices:I}=s(f,k,x,M,S);return p.makeTensorInfo([I.length],'int32',new Int32Array(I))}e.nonMaxSuppressionV3Config={kernelName:n.NonMaxSuppressionV3,backendName:'cpu',kernelFunc:t}},2356,[1158,1515]);
__d(function(g,r,i,a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.nonMaxSuppressionV4=t,e.nonMaxSuppressionV4Config=void 0;var n=r(d[0]),o=r(d[1]);
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
const s=n.kernel_impls.nonMaxSuppressionV4Impl;function t(n){const{inputs:t,backend:u,attrs:p}=n,{boxes:l,scores:c}=t,{maxOutputSize:x,iouThreshold:I,scoreThreshold:M,padToMaxOutputSize:S}=p;(0,o.assertNotComplex)(l,'NonMaxSuppressionPadded');const f=u.data.get(l.dataId).values,k=u.data.get(c.dataId).values,{selectedIndices:v,validOutputs:h}=s(f,k,x,I,M,S);return[u.makeTensorInfo([v.length],'int32',new Int32Array(v)),u.makeTensorInfo([],'int32',new Int32Array([h]))]}e.nonMaxSuppressionV4Config={kernelName:n.NonMaxSuppressionV4,backendName:'cpu',kernelFunc:t}},2357,[1158,1515]);
__d(function(g,r,i,a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.nonMaxSuppressionV5=t,e.nonMaxSuppressionV5Config=void 0;var n=r(d[0]),o=r(d[1]);
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
const s=n.kernel_impls.nonMaxSuppressionV5Impl;function t(n){const{inputs:t,backend:p,attrs:u}=n,{boxes:l,scores:c}=t,{maxOutputSize:S,iouThreshold:f,scoreThreshold:x,softNmsSigma:h}=u;(0,o.assertNotComplex)(l,'NonMaxSuppressionWithScore');const k=p.data.get(l.dataId).values,I=p.data.get(c.dataId).values,M=S,N=f,v=x,V=h,{selectedIndices:_,selectedScores:b}=s(k,I,M,N,v,V);return[p.makeTensorInfo([_.length],'int32',new Int32Array(_)),p.makeTensorInfo([b.length],'float32',new Float32Array(b))]}e.nonMaxSuppressionV5Config={kernelName:n.NonMaxSuppressionV5,backendName:'cpu',kernelFunc:t}},2358,[1158,1515]);
__d(function(g,r,i,a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.oneHot=t,e.oneHotConfig=void 0;var o=r(d[0]),n=r(d[1]);
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
function t(t){const{inputs:s,backend:l,attrs:u}=t,{indices:c}=s,{dtype:f,depth:p,onValue:k,offValue:H}=u;(0,n.assertNotComplex)(c,'oneHot');const h=o.util.sizeFromShape(c.shape),v=new Float32Array(h*p);v.fill(H);const _=l.data.get(c.dataId).values;for(let o=0;o<h;++o)_[o]>=0&&_[o]<p&&(v[o*p+_[o]]=k);return l.makeTensorInfo([...c.shape,p],f,v)}e.oneHotConfig={kernelName:o.OneHot,backendName:'cpu',kernelFunc:t}},2359,[1158,1515]);
__d(function(g,_r,_i,a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.onesLike=p,e.onesLikeConfig=void 0;var n=_r(d[0]),i=_r(d[1]),s=_r(d[2]),t=_r(d[3]),o=_r(d[4]),r=_r(d[5]);
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
function p(n){const{inputs:u,backend:c}=n,{x:k}=u;if('string'===k.dtype)throw new Error('onesLike is not supported for string tensors');if('complex64'===k.dtype){const n=(0,o.real)({inputs:{input:k},backend:c}),s=p({inputs:{x:n},backend:c}),u=(0,t.imag)({inputs:{input:k},backend:c}),f=(0,r.zerosLike)({inputs:{x:u},backend:c}),l=(0,i.complex)({inputs:{real:s,imag:f},backend:c});return c.disposeIntermediateTensorInfo(n),c.disposeIntermediateTensorInfo(s),c.disposeIntermediateTensorInfo(u),c.disposeIntermediateTensorInfo(f),l}return(0,s.fill)({backend:c,attrs:{shape:k.shape,value:1,dtype:k.dtype}})}e.onesLikeConfig={kernelName:n.OnesLike,backendName:'cpu',kernelFunc:p}},2360,[1158,1523,2326,2296,1525,2361]);
__d(function(g,_r,_i,a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.zerosLike=r,e.zerosLikeConfig=void 0;var n=_r(d[0]),t=_r(d[1]),i=_r(d[2]),s=_r(d[3]),o=_r(d[4]);
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
function r(n){const{inputs:p,backend:u}=n,{x:c}=p;if('string'===c.dtype)throw new Error('zerosLike is not supported for string tensors');if('complex64'===c.dtype){const n=(0,o.real)({inputs:{input:c},backend:u}),i=r({inputs:{x:n},backend:u}),p=(0,s.imag)({inputs:{input:c},backend:u}),k=r({inputs:{x:p},backend:u}),f=(0,t.complex)({inputs:{real:i,imag:k},backend:u});return u.disposeIntermediateTensorInfo(n),u.disposeIntermediateTensorInfo(i),u.disposeIntermediateTensorInfo(p),u.disposeIntermediateTensorInfo(k),f}return(0,i.fill)({backend:u,attrs:{shape:c.shape,value:0,dtype:c.dtype}})}e.zerosLikeConfig={kernelName:n.ZerosLike,backendName:'cpu',kernelFunc:r}},2361,[1158,1523,2326,2296,1525]);
__d(function(g,r,i,a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.pack=c,e.packConfig=void 0;var t=r(d[0]),s=r(d[1]),n=r(d[2]);
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
function c(c){const{inputs:p,backend:o,attrs:u}=c,{axis:h}=u;if(1===p.length)return(0,n.expandDims)({inputs:{input:p[0]},backend:o,attrs:{dim:h}});const k=p[0].shape,l=p[0].dtype;p.forEach(s=>{t.util.assertShapesMatch(k,s.shape,'All tensors passed to stack must have matching shapes'),t.util.assert(l===s.dtype,()=>'All tensors passed to stack must have matching dtypes')});const f=[],b=p.map(t=>{const s=(0,n.expandDims)({inputs:{input:t},backend:o,attrs:{dim:h}});return f.push(s),s}),v=(0,s.concat)({inputs:b,backend:o,attrs:{axis:h}});return f.forEach(t=>o.disposeIntermediateTensorInfo(t)),v}e.packConfig={kernelName:t.Pack,backendName:'cpu',kernelFunc:c}},2362,[1158,2295,2322]);
__d(function(g,r,_i,a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.padV2=n,e.padV2Config=void 0;var t=r(d[0]),p=r(d[1]);
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
function n(n){const{inputs:o,backend:i,attrs:l}=n,{x:s}=o,{paddings:u,constantValue:c}=l;(0,p.assertNotComplex)(s,'pad');const h=u.map((t,p)=>t[0]+s.shape[p]+t[1]),y=u.map(t=>t[0]),f=i.data.get(s.dataId).values,V=t.util.sizeFromShape(s.shape),k=s.shape.length,v=t.util.computeStrides(s.shape),x=t.util.sizeFromShape(h),F=h.length,S=t.util.computeStrides(h),T=t.util.getTypedArrayFromDType(s.dtype,x);0!==c&&T.fill(c);for(let p=0;p<V;p++){const n=t.util.indexToLoc(p,k,v).map((t,p)=>t+y[p]);T[t.util.locToIndex(n,F,S)]=f[p]}return{dataId:i.write(T,h,s.dtype),shape:h,dtype:s.dtype}}e.padV2Config={kernelName:t.PadV2,backendName:'cpu',kernelFunc:n}},2363,[1158,1515]);
__d(function(g,r,i,_a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.powImpl=e.powConfig=e.pow=void 0;var o=r(d[0]),n=r(d[1]),p=r(d[2]);
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
const l=e.powImpl=(0,n.createSimpleBinaryKernelImpl)((o,n)=>Math.pow(o,n)),a=e.pow=(0,p.binaryKernelFunc)(o.Pow,l);e.powConfig={kernelName:o.Pow,backendName:'cpu',kernelFunc:a}},2364,[1158,1519,1520]);
__d(function(g,r,i,a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.raggedGather=s,e.raggedGatherConfig=void 0;var t=r(d[0]),n=r(d[1]);
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
function s(t){const{inputs:s,backend:p,attrs:o}=t,{paramsNestedSplits:u,paramsDenseValues:c,indices:l}=s,{outputRaggedRank:h}=o,f=u.map(t=>p.data.get(t.dataId).values),k=u.map(t=>t.shape),v=p.data.get(c.dataId).values,I=p.data.get(l.dataId).values,[G,_,b]=(0,n.raggedGatherImpl)(f,k,v,c.shape,c.dtype,I,l.shape,h),y=G.map(t=>p.makeTensorInfo([t.length],'int32',t)),N=p.makeTensorInfo(b,c.dtype,_);return y.concat([N])}e.raggedGatherConfig={kernelName:t.RaggedGather,backendName:'cpu',kernelFunc:s}},2365,[1158,1554]);
__d(function(g,r,i,a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.raggedRange=s,e.raggedRangeConfig=void 0;var n=r(d[0]),t=r(d[1]);
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
function s(n){const{inputs:s,backend:l}=n,{starts:o,limits:u,deltas:p}=s,c=l.data.get(o.dataId).values,f=l.data.get(u.dataId).values,k=l.data.get(p.dataId).values,[v,I]=(0,t.raggedRangeImpl)(c,o.shape,o.dtype,f,u.shape,k,p.shape);return[l.makeTensorInfo([v.length],'int32',v),l.makeTensorInfo([I.length],o.dtype,I)]}e.raggedRangeConfig={kernelName:n.RaggedRange,backendName:'cpu',kernelFunc:s}},2366,[1158,1555]);
__d(function(g,r,i,a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.raggedTensorToTensor=s,e.raggedTensorToTensorConfig=void 0;var n=r(d[0]),o=r(d[1]);
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
function s(n){const{inputs:s,backend:t,attrs:T}=n,{shape:u,values:p,defaultValue:l,rowPartitionTensors:c}=s,{rowPartitionTypes:v}=T,f=t.data.get(u.dataId).values,I=t.data.get(p.dataId).values,h=t.data.get(l.dataId).values,k=c.map(n=>t.data.get(n.dataId).values),y=c.map(n=>n.shape),[_,b]=(0,o.raggedTensorToTensorImpl)(f,u.shape,I,p.shape,p.dtype,h,l.shape,k,y,v);return t.makeTensorInfo(_,p.dtype,b)}e.raggedTensorToTensorConfig={kernelName:n.RaggedTensorToTensor,backendName:'cpu',kernelFunc:s}},2367,[1158,1556]);
__d(function(g,r,i,a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.range=o,e.rangeConfig=void 0;var n=r(d[0]),t=r(d[1]);
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
function o(n){const{backend:o,attrs:c}=n,{start:s,stop:u,dtype:f,step:l}=c,p=(0,t.rangeImpl)(s,u,l,f);return o.makeTensorInfo([p.length],f,p)}e.rangeConfig={kernelName:n.Range,backendName:'cpu',kernelFunc:o}},2368,[1158,1557]);
__d(function(g,r,i,a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.reciprocalConfig=e.reciprocal=void 0;var c=r(d[0]),n=r(d[1]);
/**
   * @license
   * Copyright 2020 Google LLC. All Rights Reserved.
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
const o=e.reciprocal=(0,n.unaryKernelFunc)(c.Reciprocal,c=>1/c);e.reciprocalConfig={kernelName:c.Reciprocal,backendName:'cpu',kernelFunc:o}},2369,[1158,1530]);
__d(function(g,_r,i,a,m,e,_d){Object.defineProperty(e,"__esModule",{value:!0}),e.resizeBilinear=r,e.resizeBilinearConfig=void 0;var t=_r(_d[0]),n=_r(_d[1]);
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
function r(r){const{inputs:o,backend:l,attrs:s}=r,{images:c}=o,{alignCorners:f,halfPixelCenters:h,size:u}=s;(0,n.assertNotComplex)(c,'resizeBilinear');const d=t.util.computeStrides(c.shape),[M,p]=u,[z,k,B,C]=c.shape,v=l.data.get(c.dataId).values,x=new Float32Array(t.util.sizeFromShape([z,M,p,C])),_=[f&&M>1?k-1:k,f&&p>1?B-1:B],b=[f&&M>1?M-1:M,f&&p>1?p-1:p];let F=0;const N=_[0]/b[0],y=_[1]/b[1];for(let t=0;t<z;t++)for(let n=0;n<M;n++){let r;r=h?N*(n+.5)-.5:N*n;const o=Math.max(0,Math.floor(r)),l=r-o,s=Math.min(k-1,Math.ceil(r)),c=t*d[0]+o*d[1],f=t*d[0]+s*d[1];for(let t=0;t<p;t++){let n;n=h?y*(t+.5)-.5:y*t;const r=Math.max(0,Math.floor(n)),o=n-r,s=Math.min(B-1,Math.ceil(n)),u=c+r*d[2],M=f+r*d[2],p=c+s*d[2],z=f+s*d[2];for(let t=0;t<C;t++){const n=v[u+t],r=v[M+t],s=n+(v[p+t]-n)*o,c=s+(r+(v[z+t]-r)*o-s)*l;x[F++]=c}}}return l.makeTensorInfo([z,M,p,C],'float32',x)}e.resizeBilinearConfig={kernelName:t.ResizeBilinear,backendName:'cpu',kernelFunc:r}},2370,[1158,1515]);
__d(function(g,_r,i,a,m,e,_d){Object.defineProperty(e,"__esModule",{value:!0}),e.resizeBilinearGrad=n,e.resizeBilinearGradConfig=void 0;var r=_r(_d[0]),t=_r(_d[1]);
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
function n(n){const{inputs:o,backend:l,attrs:s}=n,{images:c,dy:d}=o,{alignCorners:f}=s;(0,t.assertNotComplex)([d,c],'resizeBilinearGrad');const u=r.util.computeStrides(c.shape),[h,p,M,k]=c.shape,[,z,B]=d.shape,G=new Float32Array(h*p*M*k),v=[f&&z>1?p-1:p,f&&B>1?M-1:M],C=[f&&z>1?z-1:z,f&&B>1?B-1:B],_=v[0]/C[0],b=v[1]/C[1],y=l.data.get(d.dataId).values;let N=0;for(let r=0;r<h;r++){const t=r*u[0];for(let r=0;r<z;r++){const n=r*_,o=Math.floor(n),l=Math.min(Math.ceil(n),p-1),s=t+o*u[1],c=t+l*u[1],d=n-o,f=1-d;for(let r=0;r<B;r++){const t=r*b,n=Math.floor(t),o=Math.min(Math.ceil(t),M-1),l=t-n,h=1-l,p=s+n*u[2],z=s+o*u[2],B=c+n*u[2],v=c+o*u[2],C=f*h,_=f*l,F=d*h,I=d*l;for(let r=0;r<k;r++){const t=y[N++];G[p+r]+=t*C,G[z+r]+=t*_,G[B+r]+=t*F,G[v+r]+=t*I}}}}return l.makeTensorInfo([h,M,p,k],'float32',G)}e.resizeBilinearGradConfig={kernelName:r.ResizeBilinearGrad,backendName:'cpu',kernelFunc:n}},2371,[1158,1515]);
__d(function(g,_r,i,a,m,e,_d){Object.defineProperty(e,"__esModule",{value:!0}),e.resizeNearestNeighbor=o,e.resizeNearestNeighborConfig=void 0;var t=_r(_d[0]),r=_r(_d[1]);
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
function o(o){const{inputs:n,backend:s,attrs:l}=o,{images:c}=n,{alignCorners:h,halfPixelCenters:d,size:f}=l;(0,r.assertNotComplex)(c,'resizeNearestNeighbor');const u=t.util.computeStrides(c.shape),[N,M]=f,[b,p,z,k]=c.shape,C=s.data.get(c.dataId).values,v=new Float32Array(b*N*M*k),x=[h&&N>1?p-1:p,h&&M>1?z-1:z],_=[h&&N>1?N-1:N,h&&M>1?M-1:M],y=x[0]/_[0],F=x[1]/_[1];let I=0;for(let t=0;t<b;t++){const r=t*u[0];for(let t=0;t<N;t++){const o=d?y*(t+.5):y*t;let n=Math.min(p-1,h?Math.round(o):Math.floor(o));d&&(n=Math.max(0,n));const s=r+n*u[1];for(let t=0;t<M;t++){const r=d?F*(t+.5):F*t;let o=Math.min(z-1,h?Math.round(r):Math.floor(r));d&&(o=Math.max(0,o));const n=s+o*u[2];for(let t=0;t<k;t++){const r=C[n+t];v[I++]=r}}}}return s.makeTensorInfo([b,N,M,k],c.dtype,v)}e.resizeNearestNeighborConfig={kernelName:t.ResizeNearestNeighbor,backendName:'cpu',kernelFunc:o}},2372,[1158,1515]);
__d(function(g,_r,i,a,m,e,_d){Object.defineProperty(e,"__esModule",{value:!0}),e.resizeNearestNeighborGrad=r,e.resizeNearestNeighborGradConfig=void 0;var t=_r(_d[0]),o=_r(_d[1]);
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
function r(r){const{inputs:n,backend:s,attrs:l}=r,{images:c,dy:h}=n,{alignCorners:f}=l;(0,o.assertNotComplex)([h,c],'resizeNearestNeighborGrad');const d=t.util.computeStrides(c.shape),u=t.util.computeStrides(h.shape),[M,N,p,b]=c.shape,[,k,z]=h.shape,G=new Float32Array(M*N*p*b),v=s.data.get(h.dataId).values,y=[f&&k>1?N-1:N,f&&z>1?p-1:p],C=[f&&k>1?k-1:k,f&&z>1?z-1:z],_=y[0]/C[0],F=y[1]/C[1],I=1/_,S=1/F,j=2*Math.ceil(I)+2,w=2*Math.ceil(S)+2;for(let t=0;t<M;t++){const o=t*d[0];for(let t=0;t<N;t++){const r=o+t*d[1],n=Math.floor(t*I),s=Math.floor(n-j/2);for(let n=0;n<p;n++){const l=r+n*d[2],c=Math.floor(n*S),h=Math.floor(c-w/2);for(let r=0;r<b;r++){let c=0;for(let l=0;l<j;l++){const d=l+s;if(d<0||d>=k)continue;const M=o+d*u[1],b=d*_;if(t===Math.min(N-1,f?Math.round(b):Math.floor(b)))for(let t=0;t<w;t++){const o=t+h;if(o<0||o>=z)continue;const s=M+o*u[2],l=o*F;n===Math.min(p-1,f?Math.round(l):Math.floor(l))&&(c+=v[s+r])}}G[l+r]=c}}}}return s.makeTensorInfo(c.shape,c.dtype,G)}e.resizeNearestNeighborGradConfig={kernelName:t.ResizeNearestNeighborGrad,backendName:'cpu',kernelFunc:r}},2373,[1158,1515]);
__d(function(g,r,_i,a,m,e,_d){Object.defineProperty(e,"__esModule",{value:!0}),e.reverse=o,e.reverseConfig=void 0;var n=r(_d[0]),s=r(_d[1]),t=r(_d[2]);
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
function o(o){const{inputs:i,backend:c,attrs:u}=o,{x:f}=i,{dims:p}=u;(0,s.assertNotComplex)(f,'reverse');const d=f.shape.length,l=n.util.parseAxisParam(p,f.shape);if(0===d)return(0,t.identity)({inputs:{x:f},backend:c});const v=new n.TensorBuffer(f.shape,f.dtype),h=c.bufferSync(f);for(let n=0;n<v.size;n++){const s=v.indexToLoc(n),t=s.slice();l.forEach(n=>t[n]=f.shape[n]-1-t[n]),v.set(h.get(...t),...s)}return c.makeTensorInfo(v.shape,v.dtype,v.values)}e.reverseConfig={kernelName:n.Reverse,backendName:'cpu',kernelFunc:o}},2374,[1158,1515,1524]);
__d(function(g,r,i,a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.rotateWithOffsetConfig=void 0;var t=r(d[0]);
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
   */e.rotateWithOffsetConfig={kernelName:t.RotateWithOffset,backendName:'cpu',kernelFunc:({inputs:n,attrs:o,backend:s})=>{const{image:f}=n,{radians:l,fillValue:p,center:u}=o,c=s,h=t.util.getTypedArrayFromDType(f.dtype,t.util.sizeFromShape(f.shape)),[y,b,k,M]=f.shape,[_,v]=t.backend_util.getImageCenter(u,b,k),O=Math.sin(l),C=Math.cos(l),F=c.data.get(f.dataId).values;for(let t=0;t<y;t++){const n=t*k*b*M;for(let t=0;t<b;t++){const o=t*(k*M);for(let s=0;s<k;s++){const f=s*M;for(let l=0;l<M;l++){const u=[y,t,s,l],c=u[2],I=u[1];let W=(c-_)*C-(I-v)*O,N=(c-_)*O+(I-v)*C;W=Math.round(W+_),N=Math.round(N+v);let T=p;if('number'!=typeof p&&(T=3===l?255:p[l]),W>=0&&W<k&&N>=0&&N<b){T=F[n+N*(k*M)+W*M+l]}h[n+o+f+l]=T}}}}return{dataId:c.write(h,f.shape,f.dtype),shape:f.shape,dtype:f.dtype}}}},2375,[1158]);
__d(function(g,r,i,a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.roundConfig=e.round=void 0;var n=r(d[0]),o=r(d[1]);
/**
   * @license
   * Copyright 2020 Google LLC. All Rights Reserved.
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
const u=e.round=(0,o.unaryKernelFunc)(n.Round,n=>{const o=Math.floor(n);return n-o<.5?Math.floor(n):n-o>.5?Math.ceil(n):o%2==0?o:o+1});e.roundConfig={kernelName:n.Round,backendName:'cpu',kernelFunc:u}},2376,[1158,1530]);
__d(function(g,r,i,a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.scatterNd=c,e.scatterNdConfig=void 0;var t=r(d[0]),n=r(d[1]);
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
function c(c){const{inputs:s,backend:u,attrs:l}=c,{indices:o,updates:f}=s,{shape:p}=l,{sliceRank:k,numUpdates:b,sliceSize:N,strides:S,outputSize:_}=t.backend_util.calculateShapes(f,o,p),v=u.bufferSync(o),y=u.bufferSync(f),h=(0,n.scatterImpl)(v,y,p,_,N,b,k,S,0,!0);return u.makeTensorInfo(p,h.dtype,h.values)}e.scatterNdConfig={kernelName:t.ScatterNd,backendName:'cpu',kernelFunc:c}},2377,[1158,1559]);
__d(function(g,r,i,a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.searchSorted=s,e.searchSortedConfig=void 0;var t=r(d[0]),n=r(d[1]);
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
function s(t){const{inputs:s,backend:o,attrs:c}=t,{sortedSequence:u,values:h}=s,{side:l}=c,p=o.data.get(u.dataId).values,S=o.data.get(h.dataId).values,f=(0,n.searchSortedImpl)(p,S,u.shape[0],u.shape[1],h.shape[1],l);return o.makeTensorInfo(h.shape,'int32',f)}e.searchSortedConfig={kernelName:t.SearchSorted,backendName:'cpu',kernelFunc:s}},2378,[1158,2379]);
__d(function(g,r,_i,a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.searchSortedImpl=function(l,f,u,c,i,h){const s=t.util.getArrayFromDType('int32',u*i);for(let t=0;t<u;++t){const u=l.slice(t*c,(t+1)*c),_=t*i;for(let t=0;t<i;++t)s[_+t]='left'===h?o(u,f[t+_]):n(u,f[t+_])}return s};var t=r(d[0]);
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
   */function o(t,o){let n=0,l=t.length,f=0;for(;n<l;)f=Math.floor((n+l)/2),t[f]<o?n=f+1:l=f;return l}function n(t,o){let n=0,l=t.length,f=0;for(;n<l;)f=Math.floor((n+l)/2),t[f]<=o?n=f+1:l=f;return l}},2379,[1158]);
__d(function(g,r,_i,a,m,_e,d){Object.defineProperty(_e,"__esModule",{value:!0}),_e.select=s,_e.selectConfig=void 0;var e=r(d[0]),t=r(d[1]);
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
function s(s){const{inputs:n,backend:l}=s,{condition:o,t:c,e:p}=n;(0,t.assertNotComplex)([o,c,p],'select');const i=o.shape.length,u=l.data.get(o.dataId).values,h=l.data.get(c.dataId).values,f=l.data.get(p.dataId).values,k=(0,e.upcastType)(c.dtype,p.dtype),v=e.util.makeZerosTypedArray(e.util.sizeFromShape(c.shape),k);let y=0;const I=0===i||i>1||1===c.shape.length?1:e.util.sizeFromShape(c.shape.slice(1));for(let e=0;e<u.length;e++)for(let t=0;t<I;t++)1===u[e]?v[y++]=h[e]:v[y++]=f[e];return l.makeTensorInfo(c.shape,k,v)}_e.selectConfig={kernelName:e.Select,backendName:'cpu',kernelFunc:s}},2380,[1158,1515]);
__d(function(g,r,i,a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.seluConfig=e.selu=void 0;var n=r(d[0]),u=r(d[1]);
/**
   * @license
   * Copyright 2020 Google LLC. All Rights Reserved.
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
const l=n.backend_util.SELU_SCALEALPHA,c=n.backend_util.SELU_SCALE,_=e.selu=(0,u.unaryKernelFunc)(n.Selu,n=>n>=0?c*n:l*(Math.exp(n)-1));e.seluConfig={kernelName:n.Selu,backendName:'cpu',kernelFunc:_}},2381,[1158,1530]);
__d(function(g,r,i,a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.signConfig=e.sign=void 0;var n=r(d[0]),c=r(d[1]);
/**
   * @license
   * Copyright 2020 Google LLC. All Rights Reserved.
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
const o=e.sign=(0,c.unaryKernelFunc)(n.Sign,n=>n<0?-1:n>0?1:0);e.signConfig={kernelName:n.Sign,backendName:'cpu',kernelFunc:o}},2382,[1158,1530]);
__d(function(g,r,i,a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.sinConfig=e.sin=void 0;var n=r(d[0]),c=r(d[1]);
/**
   * @license
   * Copyright 2020 Google LLC. All Rights Reserved.
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
const o=e.sin=(0,c.unaryKernelFunc)(n.Sin,n=>Math.sin(n));e.sinConfig={kernelName:n.Sin,backendName:'cpu',kernelFunc:o}},2383,[1158,1530]);
__d(function(g,r,i,a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.sinhConfig=e.sinh=void 0;var n=r(d[0]),h=r(d[1]);
/**
   * @license
   * Copyright 2020 Google LLC. All Rights Reserved.
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
const c=e.sinh=(0,h.unaryKernelFunc)(n.Sinh,n=>Math.sinh(n));e.sinhConfig={kernelName:n.Sinh,backendName:'cpu',kernelFunc:c}},2384,[1158,1530]);
__d(function(g,r,i,a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.softplusConfig=e.softplus=void 0;var o=r(d[0]),t=r(d[1]);
/**
   * @license
   * Copyright 2020 Google LLC. All Rights Reserved.
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
const n=Math.log(1.1920928955078125e-7)+2,l=e.softplus=(0,t.unaryKernelFunc)(o.Softplus,o=>{const t=o>13.942385152878742,l=o<n,u=Math.exp(o);let s;return s=l?u:t?o:Math.log(1+u),s});e.softplusConfig={kernelName:o.Softplus,backendName:'cpu',kernelFunc:l}},2385,[1158,1530]);
__d(function(g,r,_i,a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.spaceToBatchND=c,e.spaceToBatchNDConfig=void 0;var t=r(d[0]),n=r(d[1]),s=r(d[2]),p=r(d[3]),o=r(d[4]);
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
function c(c){const{inputs:i,backend:h,attrs:u}=c,{x:l}=i,{blockShape:k,paddings:b}=u;(0,n.assertNotComplex)([l],'spaceToBatchND');const f=t.util.sizeFromShape(k),N=[[0,0]];N.push(...b);for(let t=1+k.length;t<l.shape.length;++t)N.push([0,0]);const T=s.padV2Config.kernelFunc({inputs:{x:l},backend:h,attrs:{paddings:N,constantValue:0}}),_=t.backend_util.getReshaped(T.shape,k,f,!1),x=t.backend_util.getPermuted(_.length,k.length,!1),I=t.backend_util.getReshapedPermuted(T.shape,k,f,!1),B={x:T},D={shape:_},C=(0,p.reshape)({inputs:B,backend:h,attrs:D}),v={x:C},F={perm:x},P=(0,o.transpose)({inputs:v,backend:h,attrs:F}),S={x:P},R={shape:I},V=(0,p.reshape)({inputs:S,backend:h,attrs:R});return h.disposeIntermediateTensorInfo(T),h.disposeIntermediateTensorInfo(C),h.disposeIntermediateTensorInfo(P),V}e.spaceToBatchNDConfig={kernelName:t.SpaceToBatchND,backendName:'cpu',kernelFunc:c}},2386,[1158,1515,2363,2271,1552]);
__d(function(g,r,i,a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.sparseFillEmptyRows=n,e.sparseFillEmptyRowsConfig=void 0;var s=r(d[0]),t=r(d[1]);
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
function n(s){const{inputs:n,backend:o}=s,{indices:l,values:p,denseShape:u,defaultValue:h}=n;if(1!==u.shape.length)throw new Error(`Dense shape must be a vector, saw:\n        ${u.shape}`);if(2!==l.shape.length)throw new Error(`Indices must be a matrix, saw:\n        ${l.shape}`);if(1!==p.shape.length)throw new Error(`Values must be a vector, saw:\n        ${p.shape}`);if(0!==h.shape.length)throw new Error(`Default value must be a scalar, saw:\n        ${h.shape}`);const w=o.data.get(l.dataId).values,f=o.data.get(p.dataId).values,c=o.data.get(u.dataId).values,y=o.data.get(h.dataId).values[0],[v,I,b,E,k]=(0,t.sparseFillEmptyRowsImpl)(w,l.shape,l.dtype,f,p.dtype,c,y);return[o.makeTensorInfo(I,l.dtype,v),o.makeTensorInfo([I[0]],p.dtype,b),o.makeTensorInfo([E.length],'bool',new Uint8Array(E.map(s=>Number(s)))),o.makeTensorInfo([k.length],l.dtype,new Int32Array(k))]}e.sparseFillEmptyRowsConfig={kernelName:s.SparseFillEmptyRows,backendName:'cpu',kernelFunc:n}},2387,[1158,1562]);
__d(function(g,r,i,a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.sparseReshape=n,e.sparseReshapeConfig=void 0;var s=r(d[0]),t=r(d[1]);
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
function n(s){const{inputs:n,backend:p}=s,{inputIndices:h,inputShape:o,newShape:u}=n;if(2!==h.shape.length)throw new Error(`Input indices should be a matrix but received shape\n        ${h.shape}`);if(1!==o.shape.length)throw new Error(`Input shape should be a vector but received shape\n        ${o.shape}`);if(1!==u.shape.length)throw new Error(`Target shape should be a vector but received shape ${u.shape}`);const c=Array.from(p.data.get(o.dataId).values),l=p.data.get(h.dataId).values,f=Array.from(p.data.get(u.dataId).values),[v,I,b]=(0,t.sparseReshapeImpl)(l,h.shape,h.dtype,c,f);return[p.makeTensorInfo(I,h.dtype,v),p.makeTensorInfo([b.length],u.dtype,new Int32Array(b))]}e.sparseReshapeConfig={kernelName:s.SparseReshape,backendName:'cpu',kernelFunc:n}},2388,[1158,1563]);
__d(function(g,r,i,a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.sparseSegmentMean=t,e.sparseSegmentMeanConfig=void 0;var n=r(d[0]),s=r(d[1]);
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
function t(n){const{inputs:t,backend:o}=n,{data:h,indices:p,segmentIds:c}=t;if(h.shape.length<1)throw new Error("Data should be at least 1 dimensional but received scalar");if(1!==p.shape.length)throw new Error(`Indices should be a vector but received shape\n          ${p.shape}`);if(1!==c.shape.length)throw new Error(`Segment ids should be a vector but received shape\n          ${c.shape}`);if(p.shape[0]!==c.shape[0])throw new Error("segmentIds and indices should have same size.");const u=o.data.get(h.dataId).values,l=o.data.get(p.dataId).values,v=o.data.get(c.dataId).values,[f,b]=(0,s.sparseSegmentReductionImpl)(u,h.shape,h.dtype,l,v,!0);return o.makeTensorInfo(b,h.dtype,f)}e.sparseSegmentMeanConfig={kernelName:n.SparseSegmentMean,backendName:'cpu',kernelFunc:t}},2389,[1158,1564]);
__d(function(g,r,i,a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.sparseSegmentSum=n,e.sparseSegmentSumConfig=void 0;var s=r(d[0]),t=r(d[1]);
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
function n(s){const{inputs:n,backend:o}=s,{data:u,indices:h,segmentIds:p}=n;if(u.shape.length<1)throw new Error("Data should be at least 1 dimensional but received scalar");if(1!==h.shape.length)throw new Error(`Indices should be a vector but received shape\n         ${h.shape}`);if(1!==p.shape.length)throw new Error(`Segment ids should be a vector but received shape\n         ${p.shape}`);if(h.shape[0]!==p.shape[0])throw new Error("segmentIds and indices should have same size.");const c=o.data.get(u.dataId).values,l=o.data.get(h.dataId).values,v=o.data.get(p.dataId).values,[S,f]=(0,t.sparseSegmentReductionImpl)(c,u.shape,u.dtype,l,v);return o.makeTensorInfo(f,u.dtype,S)}e.sparseSegmentSumConfig={kernelName:s.SparseSegmentSum,backendName:'cpu',kernelFunc:n}},2390,[1158,1564]);
__d(function(g,r,i,a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.sparseToDense=n,e.sparseToDenseConfig=void 0;var t=r(d[0]),s=r(d[1]);
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
function n(n){const{inputs:c,backend:u,attrs:o}=n,{sparseIndices:l,sparseValues:p,defaultValue:f}=c,{outputShape:b}=o,{sliceRank:k,numUpdates:S,sliceSize:y,strides:I,outputSize:v}=t.backend_util.calculateShapes(p,l,b),T=!1,_=u.bufferSync(l);let h;switch(p.dtype){case'bool':{const t=u.bufferSync(p),n=Boolean(u.data.get(f.dataId).values[0]);h=(0,s.scatterImpl)(_,t,b,v,y,S,k,I,n,T);break}case'float32':{const t=u.bufferSync(p),n=u.data.get(f.dataId).values[0];h=(0,s.scatterImpl)(_,t,b,v,y,S,k,I,n,T);break}case'int32':{const t=u.bufferSync(p),n=u.data.get(f.dataId).values[0];h=(0,s.scatterImpl)(_,t,b,v,y,S,k,I,n,T);break}case'string':{const n=u.bufferSync(p),c=t.util.decodeString(u.data.get(f.dataId).values[0]);h=(0,s.scatterImpl)(_,n,b,v,y,S,k,I,c,T);break}default:throw new Error(`Unsupported type ${p.dtype}`)}return u.makeTensorInfo(b,h.dtype,h.values)}e.sparseToDenseConfig={kernelName:t.SparseToDense,backendName:'cpu',kernelFunc:n}},2391,[1158,1559]);
__d(function(g,r,i,a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.splitV=s,e.splitVConfig=void 0;var n=r(d[0]),t=r(d[1]);
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
function s(s){const{inputs:l,backend:p,attrs:c}=s,{x:u}=l,{numOrSizeSplits:o,axis:b}=c,f=n.util.parseAxisParam(b,u.shape)[0],k=n.backend_util.prepareSplitSize(u,o,f),S=new Array(u.shape.length).fill(0),_=u.shape.slice();return k.map(n=>{const s=[..._];s[f]=n;const l=(0,t.slice)({inputs:{x:u},backend:p,attrs:{begin:S,size:s}});return S[f]+=n,l})}e.splitVConfig={kernelName:n.SplitV,backendName:'cpu',kernelFunc:s}},2392,[1158,1561]);
__d(function(g,r,_i,a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.squareConfig=void 0;var t=r(d[0]),n=r(d[1]);
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
e.squareConfig={kernelName:t.Square,backendName:'cpu',kernelFunc:({inputs:t,backend:s})=>{const{x:o}=t,u=s;(0,n.assertNotComplex)(o,'square');const l=u.data.get(o.dataId).values,p=new Float32Array(l.length);for(let t=0;t<l.length;++t){const n=l[t];p[t]=n*n}return{dataId:u.write(p,o.shape,o.dtype),shape:o.shape,dtype:o.dtype}}}},2393,[1158,1515]);
__d(function(g,r,i,a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.stepConfig=e.step=void 0;var n=r(d[0]),t=r(d[1]);
/**
   * @license
   * Copyright 2020 Google LLC. All Rights Reserved.
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
const p=e.step=(0,t.unaryKernelFunc)(n.Step,(n,t)=>{const p=t;return isNaN(n)?NaN:n>0?1:p.alpha});e.stepConfig={kernelName:n.Step,backendName:'cpu',kernelFunc:p}},2394,[1158,1530]);
__d(function(g,r,i,a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.stridedSlice=p,e.stridedSliceConfig=void 0;var s=r(d[0]),t=r(d[1]),n=r(d[2]),l=r(d[3]),c=r(d[4]);
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
function p(p){const{inputs:o,backend:u,attrs:k}=p,{x:f}=o,{begin:h,end:S,strides:b,beginMask:x,endMask:I,ellipsisMask:M,newAxisMask:_,shrinkAxisMask:v}=k;(0,t.assertNotComplex)(f,'stridedSlice');const{finalShapeSparse:y,finalShape:C,isIdentity:N,sliceDim0:A,isSimpleSlice:O,begin:T,end:j,strides:w}=s.slice_util.sliceInfo(f.shape,h,S,b,x,I,M,_,v);let z;if(N)z=(0,n.reshape)({inputs:{x:f},backend:u,attrs:{shape:C}});else if(A||O){s.util.assert(f.shape.length>=1,()=>`Input must have rank at least 1, got: ${f.shape.length}`);const t=s.slice_util.computeOutShape(T,j,w),c=(0,l.slice)({inputs:{x:f},backend:u,attrs:{begin:T,size:t}});z=(0,n.reshape)({inputs:{x:c},backend:u,attrs:{shape:C}}),u.disposeIntermediateTensorInfo(c)}else{const s=u.bufferSync(f),t=(0,c.stridedSliceImpl)(y,s,w,T);z=u.makeTensorInfo(C,t.dtype,t.values)}return z}e.stridedSliceConfig={kernelName:s.StridedSlice,backendName:'cpu',kernelFunc:p}},2395,[1158,1515,2271,1561,1568]);
__d(function(g,r,i,a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.stringNGrams=s,e.stringNGramsConfig=void 0;var t=r(d[0]),n=r(d[1]);
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
function s(t){const{inputs:s,backend:o,attrs:u}=t,{separator:l,nGramWidths:c,leftPad:p,rightPad:f,padWidth:N,preserveShortSequences:h}=u,{data:k,dataSplits:v}=s,G=o.data.get(k.dataId).values,I=o.data.get(v.dataId).values,[S,_]=(0,n.stringNGramsImpl)(G,I,l,c,p,f,N,h);return[o.makeTensorInfo([S.length],'string',S),o.makeTensorInfo(v.shape,'int32',_)]}e.stringNGramsConfig={kernelName:t.StringNGrams,backendName:'cpu',kernelFunc:s}},2396,[1158,1569]);
__d(function(g,r,i,a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.stringSplit=s,e.stringSplitConfig=void 0;var t=r(d[0]),n=r(d[1]);
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
function s(t){const{inputs:s,backend:o,attrs:p}=t,{skipEmpty:l}=p,{input:u,delimiter:f}=s;if('string'!==u.dtype)throw new Error('Input must be of datatype string');if(1!==u.shape.length)throw new Error(`Input must be a vector, got shape: ${u.shape}`);if(0!==f.shape.length)throw new Error(`Delimiter must be a scalar, got shape: ${f.shape}`);const h=o.data.get(u.dataId).values,c=o.data.get(f.dataId).values[0],[I,k,w]=(0,n.stringSplitImpl)(h,c,l),b=k.length;return[o.makeTensorInfo([b,2],'int32',I),o.makeTensorInfo([b],'string',k),o.makeTensorInfo([2],'int32',new Int32Array(w))]}e.stringSplitConfig={kernelName:t.StringSplit,backendName:'cpu',kernelFunc:s}},2397,[1158,1570]);
__d(function(g,r,i,a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.stringToHashBucketFast=s,e.stringToHashBucketFastConfig=void 0;var t=r(d[0]),n=r(d[1]);
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
function s(t){const{inputs:s,backend:o,attrs:u}=t,{numBuckets:c}=u,{input:k}=s;if('string'!==k.dtype)throw new Error('Input must be of datatype string');if(c<=0)throw new Error("Number of buckets must be at least 1");const f=o.data.get(k.dataId).values,p=(0,n.stringToHashBucketFastImpl)(f,c);return o.makeTensorInfo(k.shape,'int32',p)}e.stringToHashBucketFastConfig={kernelName:t.StringToHashBucketFast,backendName:'cpu',kernelFunc:s}},2398,[1158,1571]);
__d(function(g,r,i,a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.tanConfig=e.tan=void 0;var n=r(d[0]),t=r(d[1]);
/**
   * @license
   * Copyright 2020 Google LLC. All Rights Reserved.
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
const c=e.tan=(0,t.unaryKernelFunc)(n.Tan,n=>Math.tan(n));e.tanConfig={kernelName:n.Tan,backendName:'cpu',kernelFunc:c}},2399,[1158,1530]);
__d(function(g,r,i,a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.tanhConfig=e.tanh=void 0;var n=r(d[0]),t=r(d[1]);
/**
   * @license
   * Copyright 2020 Google LLC. All Rights Reserved.
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
const h=e.tanh=(0,t.unaryKernelFunc)(n.Tanh,n=>Math.tanh(n));e.tanhConfig={kernelName:n.Tanh,backendName:'cpu',kernelFunc:h}},2400,[1158,1530]);
__d(function(g,r,i,a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.tensorScatterUpdate=c,e.tensorScatterUpdateConfig=void 0;var t=r(d[0]),n=r(d[1]);
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
function c(c){const{inputs:s,backend:u}=c,{tensor:o,indices:p,updates:f}=s,{sliceRank:l,numUpdates:S,sliceSize:b,strides:k,outputSize:y}=t.backend_util.calculateShapes(f,p,o.shape),U=u.bufferSync(p),_=u.bufferSync(f),h=u.bufferSync(o),v=(0,n.scatterImpl)(U,_,o.shape,y,b,S,l,k,h,!1);return u.makeTensorInfo(o.shape,v.dtype,v.values)}e.tensorScatterUpdateConfig={kernelName:t.TensorScatterUpdate,backendName:'cpu',kernelFunc:c}},2401,[1158,1559]);
__d(function(g,r,i,a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.tile=o,e.tileConfig=void 0;var n=r(d[0]),t=r(d[1]),l=r(d[2]);
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
function o(n){const{inputs:o,backend:s,attrs:c}=n,{x:u}=o,{reps:f}=c;(0,t.assertNotComplex)(u,'tile');const p=(0,l.tileImpl)(s.bufferSync(u),f);return s.makeTensorInfo(p.shape,p.dtype,p.values)}e.tileConfig={kernelName:n.Tile,backendName:'cpu',kernelFunc:o}},2402,[1158,1515,1573]);
__d(function(g,r,i,a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.topK=p,e.topKConfig=void 0;var t=r(d[0]),o=r(d[1]),n=r(d[2]);
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
function p(t){const{inputs:p,backend:s,attrs:u}=t,{x:c}=p,{k:l,sorted:k}=u;(0,o.assertNotComplex)(c,'topk');const f=s.data.get(c.dataId).values,[v,K]=(0,n.topKImpl)(f,c.shape,c.dtype,l,k);return[s.makeTensorInfo(v.shape,v.dtype,v.values),s.makeTensorInfo(K.shape,K.dtype,K.values)]}e.topKConfig={kernelName:t.TopK,backendName:'cpu',kernelFunc:p}},2403,[1158,1515,1574]);
__d(function(g,r,i,a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.transform=n,e.transformConfig=void 0;var t=r(d[0]);
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
   */function n(n){const{inputs:u,attrs:s,backend:l}=n,{image:c,transforms:f}=u,{interpolation:y,fillMode:M,fillValue:b,outputShape:k}=s,[w,v,T,I]=c.shape,[S,_]=null!=k?k:[v,T],E=[w,S,_,I],F=t.util.computeStrides(c.shape),C=F[0],N=F[1],j=F[2],x=t.util.computeStrides(E),z=x[0],A=x[1],D=x[2],O=t.util.getTypedArrayFromDType(c.dtype,t.util.sizeFromShape(E));O.fill(b);const P=l.data.get(c.dataId).values,V=l.data.get(f.dataId).values;for(let t=0;t<w;++t){const n=1===f.shape[0]?V:V.subarray(8*t,8*t+8);for(let u=0;u<S;++u)for(let s=0;s<_;++s)for(let l=0;l<I;++l){let c;const f=n[6]*s+n[7]*u+1;if(0===f)continue;const k=(n[0]*s+n[1]*u+n[2])/f,w=(n[3]*s+n[4]*u+n[5])/f,I=o(k,T,M),S=o(w,v,M);switch(y){case'nearest':c=p(P,v,T,C,N,j,t,S,I,l,b);break;case'bilinear':c=h(P,v,T,C,N,j,t,S,I,l,b);break;default:throw new Error(`Error in Transform: Expect 'nearest' or 'bilinear', but got ${y}`)}O[t*z+u*A+s*D+l]=c}return l.makeTensorInfo(E,c.dtype,O)}return{dataId:l.write(O,E,c.dtype),shape:c.shape,dtype:c.dtype}}e.transformConfig={kernelName:t.Transform,backendName:'cpu',kernelFunc:n};function o(t,n,o){switch(o){case'reflect':return u(t,n);case'wrap':return s(t,n);case'nearest':return c(t,n);default:return l(t,n)}}function u(n,o){let u=n;if(u<0)if(o<=1)u=0;else{const t=2*o;u<t&&(u=t*Math.trunc(-u/t)+u),u=u<-o?u+t:-u-1}else if(u>o-1)if(o<=1)u=0;else{const t=2*o;u-=t*Math.trunc(u/t),u>=o&&(u=t-u-1)}return t.util.clamp(0,u,o-1)}function s(n,o){let u=n;if(u<0)if(o<=1)u=0;else{const t=o-1;u+=o*(Math.trunc(-u/t)+1)}else if(u>o-1)if(o<=1)u=0;else{const t=o-1;u-=o*Math.trunc(u/t)}return t.util.clamp(0,u,o-1)}function l(t,n){return t}function c(n,o){return t.util.clamp(0,n,o-1)}function f(t,n,o,u,s,l,c,f,p,h,y){return 0<=f&&f<n&&0<=p&&p<o?t[c*u+f*s+p*l+h]:y}function p(t,n,o,u,s,l,c,p,h,y,M){return f(t,n,o,u,s,l,c,Math.round(p),Math.round(h),y,M)}function h(t,n,o,u,s,l,c,p,h,y,M){const b=Math.floor(p),k=Math.floor(h),w=b+1,v=k+1;return(w-p)*((v-h)*f(t,n,o,u,s,l,c,b,k,y,M)+(h-k)*f(t,n,o,u,s,l,c,b,v,y,M))+(p-b)*((v-h)*f(t,n,o,u,s,l,c,w,k,y,M)+(h-k)*f(t,n,o,u,s,l,c,w,v,y,M))}},2404,[1158]);
__d(function(g,r,i,a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.unique=o,e.uniqueConfig=void 0;var n=r(d[0]),u=r(d[1]),t=r(d[2]);
/**
   * @license
   * Copyright 2020 Google LLC. All Rights Reserved.
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
function o(n){const{inputs:o,attrs:s,backend:p}=n,{axis:c}=s,{x:l}=o;(0,u.assertNotComplex)(l,'unique');const f=p.data.get(l.dataId).values,{outputValues:k,outputShape:q,indices:v}=(0,t.uniqueImpl)(f,c,l.shape,l.dtype);return[p.makeTensorInfo(q,l.dtype,k),p.makeTensorInfo([v.length],'int32',v)]}e.uniqueConfig={kernelName:n.Unique,backendName:'cpu',kernelFunc:o}},2405,[1158,1515,1575]);
__d(function(g,r,_i,a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.unpack=c,e.unpackConfig=void 0;var n=r(d[0]),t=r(d[1]),s=r(d[2]);
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
function c(n){const{inputs:c,backend:i,attrs:o}=n,{value:p}=c;let{axis:l}=o;l<0&&(l+=p.shape.length);const u=p.shape.length,h=p.shape[l],k=new Array(u-1);let f=0;for(let n=0;n<u;n++)n!==l&&(k[f++]=p.shape[n]);const b=new Array(u).fill(0),v=p.shape.slice();v[l]=1;const y=new Array(h);for(let n=0;n<y.length;n++){b[l]=n;const c=(0,s.slice)({inputs:{x:p},backend:i,attrs:{begin:b,size:v}});y[n]=(0,t.reshape)({inputs:{x:c},backend:i,attrs:{shape:k}}),i.disposeIntermediateTensorInfo(c)}return y}e.unpackConfig={kernelName:n.Unpack,backendName:'cpu',kernelFunc:c}},2406,[1158,2271,1561]);
__d(function(g,r,_i,a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.unsortedSegmentSum=l,e.unsortedSegmentSumConfig=void 0;var t=r(d[0]),n=r(d[1]),s=r(d[2]),u=r(d[3]),o=r(d[4]),p=r(d[5]),i=r(d[6]),c=r(d[7]);
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
function l(l){const{inputs:k,backend:h,attrs:S}=l,{x:b,segmentIds:f}=k,{numSegments:x}=S;(0,n.assertNotComplex)(b,'unsortedSegmentSum');const I=[],_=[],v=b.shape.length-f.shape.length;let y=f;for(let t=0;t<v;++t){const n=(0,o.expandDims)({inputs:{input:y},backend:h,attrs:{dim:t+1}});y=n,_.push(n)}for(let n=0;n<x;++n){const o=t.util.createScalarValue(n,'int32'),i=h.makeTensorInfo([],'int32',o),l=(0,u.equal)({inputs:{a:i,b:y},backend:h}),k=(0,s.cast)({inputs:{x:l},backend:h,attrs:{dtype:'float32'}}),S=(0,p.multiply)({inputs:{a:k,b:b},backend:h}),f=(0,c.sum)({inputs:{x:S},backend:h,attrs:{axis:0,keepDims:!1}});I.push(f),_.push(i),_.push(l),_.push(k),_.push(S),_.push(f)}const C=(0,i.pack)({inputs:I,backend:h,attrs:{axis:0}});return _.forEach(t=>h.disposeIntermediateTensorInfo(t)),C}e.unsortedSegmentSumConfig={kernelName:t.UnsortedSegmentSum,backendName:'cpu',kernelFunc:l}},2407,[1158,1515,1521,1532,2322,1548,2362,2319]);
__d(function(g,r,i,a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.version=void 0;
/** @license See the LICENSE file. */
e.version='4.22.0'},2408,[]);
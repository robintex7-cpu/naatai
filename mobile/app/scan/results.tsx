import { useEffect, useState, useId } from "react";
import {
  View, Text, StyleSheet, ScrollView, TouchableOpacity,
  ActivityIndicator, Platform, Alert, Dimensions,
} from "react-native";
import { useRouter, useLocalSearchParams } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";
import Svg, {
  Path, Line, Text as SvgText, G, Defs, ClipPath, Rect as SvgRect, Circle,
} from "react-native-svg";
import { scanAPI } from "../../services/api";

const GOLD  = "#C9A84C";
const GREEN = "#4caf50";

// ─── Parametric body geometry ─────────────────────────────────────────────────

// Shared reference values so generateBodyPath and BodyMeshDiagram stay in sync.
const BODY_REF  = { neck:38, shoulder:44, chest:95, waist:82, hips:98, thigh:58 };
const BODY_REF_PX = { nk:13, sh:52, ch:50, wa:42, hi:50, th:30 };

function getBodyGeometry(m: any) {
  const cx = 140;
  const A = {
    neck:     Math.max(m?.neck_cm           || BODY_REF.neck,     28),
    shoulder: Math.max(m?.shoulder_width_cm || BODY_REF.shoulder, 32),
    chest:    Math.max(m?.chest_cm          || BODY_REF.chest,    70),
    waist:    Math.max(m?.waist_cm          || BODY_REF.waist,    58),
    hips:     Math.max(m?.hips_cm           || BODY_REF.hips,     72),
    thigh:    Math.max(m?.thigh_cm          || BODY_REF.thigh,    40),
  };
  const nk  = BODY_REF_PX.nk * (A.neck     / BODY_REF.neck);
  const sh  = BODY_REF_PX.sh * (A.shoulder / BODY_REF.shoulder);
  const ch  = BODY_REF_PX.ch * (A.chest    / BODY_REF.chest);
  const wa  = BODY_REF_PX.wa * (A.waist    / BODY_REF.waist);
  const hi  = BODY_REF_PX.hi * (A.hips     / BODY_REF.hips);
  const thR = BODY_REF_PX.th * (A.thigh    / BODY_REF.thigh);
  const thSc   = A.thigh / BODY_REF.thigh;
  const kn     = 24 * thSc;
  const an     = 17 * thSc;
  const ft     = 24 * thSc;
  const legCtr = hi * 0.36;
  const roLeg  = legCtr + thR;
  const riLeg  = Math.max(3, legCtr - thR);
  const roKn   = legCtr + kn;
  const riKn   = Math.max(3, legCtr - kn);
  const roAn   = legCtr + an;
  const riAn   = Math.max(3, legCtr - an);
  const roFt   = legCtr + ft;
  const riFt   = Math.max(3, legCtr - an);
  // Fixed Y anchors (body always spans y:10 → y:438)
  const yHdT=10, yHdB=68, yNkB=79, ySh=84, yAB=138, yCh=144;
  const yWa=194, yHi=240, yCr=266, yKn=340, yAn=410, yFl=438;
  const yThigh = Math.round((yCr + yKn) / 2);
  return {
    cx, nk, sh, ch, wa, hi, thR, legCtr,
    roLeg, riLeg, roKn, riKn, roAn, riAn, roFt, riFt,
    yHdT, yHdB, yNkB, ySh, yAB, yCh, yWa, yHi, yCr, yKn, yAn, yFl, yThigh,
    // annotation contact points (left/right body surface)
    leftCh:  cx - ch,   leftWa: cx - wa,
    leftHi:  cx - hi,   leftTh: cx - roLeg,
    rightNk: cx + nk,   rightSh: cx + sh,
  };
}

function generateBodyPath(m: any): string {
  const g = getBodyGeometry(m);
  const { cx, nk, sh, ch, wa, hi,
    roLeg, riLeg, roKn, riKn, roAn, riAn, roFt, riFt,
    yHdT, yHdB, yNkB, ySh, yAB, yCh, yWa, yHi, yCr, yKn, yAn, yFl } = g;

  const r  = (v: number) => Math.round(v * 10) / 10;
  const X  = (dx: number) => r(cx + dx);

  const hRx = nk * 1.45;
  const hCy = (yHdT + yHdB) / 2;
  const aOx = sh + 10; // arm outer X offset

  let d = `M ${X(0)} ${yHdT} `;

  // Right head arc
  d += `C ${X(hRx*.7)} ${yHdT} ${X(hRx)} ${r(hCy-8)} ${X(hRx)} ${r(hCy)} `;
  d += `C ${X(hRx)} ${r(hCy+10)} ${X(nk*1.1)} ${r(yHdB-3)} ${X(nk)} ${yHdB} `;
  // Right neck → shoulder
  d += `L ${X(nk)} ${yNkB} `;
  d += `C ${X(nk)} ${r(yNkB+2)} ${X(sh)} ${r(ySh-3)} ${X(sh)} ${ySh} `;
  // Right arm outer loop
  d += `C ${X(aOx)} ${r(ySh+18)} ${X(aOx)} ${r(yAB-18)} ${X(aOx)} ${yAB} `;
  d += `C ${X(sh-2)} ${r(yAB+6)} ${X(ch)} ${r(yCh-8)} ${X(ch)} ${yCh} `;
  // Right torso down
  d += `C ${X(ch)} ${r(yCh+(yWa-yCh)*.5)} ${X(wa)} ${r(yWa-12)} ${X(wa)} ${yWa} `;
  d += `C ${X(wa)} ${r(yWa+(yHi-yWa)*.5)} ${X(hi)} ${r(yHi-10)} ${X(hi)} ${yHi} `;
  d += `C ${X(hi)} ${r(yHi+(yCr-yHi)*.55)} ${X(roLeg)} ${r(yCr-4)} ${X(roLeg)} ${yCr} `;
  // Right leg outer → foot
  d += `C ${X(roLeg)} ${r(yCr+(yKn-yCr)*.4)} ${X(roKn)} ${r(yKn-20)} ${X(roKn)} ${yKn} `;
  d += `C ${X(roKn)} ${r(yKn+(yAn-yKn)*.5)} ${X(roAn)} ${r(yAn-10)} ${X(roAn)} ${yAn} `;
  d += `L ${X(roFt)} ${yFl} L ${X(riFt)} ${yFl} L ${X(riAn)} ${yAn} `;
  // Right leg inner → crotch
  d += `C ${X(riKn)} ${r(yAn-(yAn-yKn)*.4)} ${X(riKn)} ${r(yKn+20)} ${X(riKn)} ${yKn} `;
  d += `C ${X(riLeg)} ${r(yKn-(yKn-yCr)*.4)} ${X(riLeg)} ${r(yCr+6)} ${X(riLeg)} ${yCr} `;
  // Crotch V
  d += `C ${X(riLeg*.5)} ${r(yCr+9)} ${X(2)} ${r(yCr+11)} ${X(0)} ${r(yCr+11)} `;
  d += `C ${X(-2)} ${r(yCr+11)} ${X(-riLeg*.5)} ${r(yCr+9)} ${X(-riLeg)} ${yCr} `;
  // Left leg inner → foot
  d += `C ${X(-riLeg)} ${r(yCr+6)} ${X(-riKn)} ${r(yKn-20)} ${X(-riKn)} ${yKn} `;
  d += `C ${X(-riKn)} ${r(yKn+20)} ${X(-riAn)} ${r(yAn-(yAn-yKn)*.4)} ${X(-riAn)} ${yAn} `;
  d += `L ${X(-riFt)} ${yFl} L ${X(-roFt)} ${yFl} L ${X(-roAn)} ${yAn} `;
  // Left leg outer → crotch
  d += `C ${X(-roKn)} ${r(yAn-10)} ${X(-roKn)} ${r(yKn+(yAn-yKn)*.5)} ${X(-roKn)} ${yKn} `;
  d += `C ${X(-roLeg)} ${r(yKn-20)} ${X(-roLeg)} ${r(yCr+(yKn-yCr)*.4)} ${X(-roLeg)} ${yCr} `;
  // Left torso up
  d += `C ${X(-roLeg)} ${r(yCr-(yCr-yHi)*.4)} ${X(-hi)} ${r(yHi+(yCr-yHi)*.2)} ${X(-hi)} ${yHi} `;
  d += `C ${X(-hi)} ${r(yHi-(yHi-yWa)*.5)} ${X(-wa)} ${r(yWa+(yHi-yWa)*.2)} ${X(-wa)} ${yWa} `;
  d += `C ${X(-wa)} ${r(yWa-(yWa-yCh)*.5)} ${X(-ch)} ${r(yCh+(yWa-yCh)*.2)} ${X(-ch)} ${yCh} `;
  d += `C ${X(-ch)} ${r(yCh-(yCh-yAB)*.6)} ${X(-(sh-2))} ${r(yAB+8)} ${X(-aOx)} ${yAB} `;
  // Left arm up
  d += `C ${X(-aOx)} ${r(yAB-18)} ${X(-aOx)} ${r(ySh+18)} ${X(-sh)} ${ySh} `;
  // Left shoulder → neck → head
  d += `C ${X(-sh)} ${r(ySh-3)} ${X(-nk)} ${r(yNkB+2)} ${X(-nk)} ${yNkB} `;
  d += `L ${X(-nk)} ${yHdB} `;
  d += `C ${X(-nk*1.1)} ${r(yHdB-3)} ${X(-hRx)} ${r(hCy+10)} ${X(-hRx)} ${r(hCy)} `;
  d += `C ${X(-hRx)} ${r(hCy-8)} ${X(-hRx*.7)} ${yHdT} ${X(0)} ${yHdT} Z`;

  return d;
}

// Horizontal scan-slice Y positions (SMPL mesh rings)
const SLICES = [
  50, 60, 70, 79, 88, 100, 112, 124, 138, 144,
  155, 168, 180, 194, 208, 222, 240, 254, 266,
  280, 295, 310, 325, 340, 356, 372, 388, 402, 418, 434,
];

// ─── SMPL-X style body mesh diagram ─────────────────────────────────────────
function BodyMeshDiagram({ m }: { m: any }) {
  const uid    = useId().replace(/:/g, "");
  const clipId = `bc_${uid}`;
  const { width: SW } = Dimensions.get("window");
  const VW = 280, VH = 450;
  const rW = SW - 40;
  const rH = Math.round(rW * VH / VW);

  const bodyD = generateBodyPath(m);
  const g = getBodyGeometry(m);
  const { cx, sh, ySh, yNkB, yCh, yWa, yHi, yCr, yFl, yThigh,
          leftCh, leftWa, leftHi, leftTh, rightNk, rightSh } = g;

  const midInseam = Math.round((yCr + yFl) / 2);

  return (
    <View style={{ width: rW, height: rH, alignSelf: "center" }}>
      <Svg width={rW} height={rH} viewBox={`0 0 ${VW} ${VH}`}>
        <Defs>
          <ClipPath id={clipId}>
            <Path d={bodyD} />
          </ClipPath>
        </Defs>

        {/* Body fill */}
        <Path d={bodyD} fill="#181818" />

        {/* SMPL-X scan rings clipped to body */}
        <G clipPath={`url(#${clipId})`}>
          {SLICES.map((y) => (
            <Line key={y} x1={0} y1={y} x2={VW} y2={y} stroke="#303030" strokeWidth="0.9" />
          ))}
          <Line x1={cx}    y1={0} x2={cx}    y2={VH} stroke="#2a2a2a" strokeWidth="0.7" />
          <Line x1={cx-32} y1={0} x2={cx-32} y2={VH} stroke="#252525" strokeWidth="0.5" />
          <Line x1={cx+32} y1={0} x2={cx+32} y2={VH} stroke="#252525" strokeWidth="0.5" />
        </G>

        {/* Body outline */}
        <Path d={bodyD} fill="none" stroke="#505050" strokeWidth="1.3" />

        {/* HEIGHT bar (right) */}
        {m?.height_cm && (
          <G>
            <Line x1={248} y1={12} x2={248} y2={436} stroke={GOLD} strokeWidth="0.8" strokeOpacity="0.55" />
            <Line x1={244} y1={12}  x2={252} y2={12}  stroke={GOLD} strokeWidth="1" />
            <Line x1={244} y1={436} x2={252} y2={436} stroke={GOLD} strokeWidth="1" />
            <SvgText x={258} y={224} fill={GOLD} fontSize="8"
              rotation="-90" origin="258,224" textAnchor="middle" fontWeight="300" letterSpacing="1">
              {m.height_cm} cm  HEIGHT
            </SvgText>
          </G>
        )}

        {/* SHOULDER bracket (top) */}
        {m?.shoulder_width_cm && (
          <G>
            <Line x1={Math.round(cx-sh)} y1={ySh+2} x2={Math.round(cx+sh)} y2={ySh+2}
              stroke={GOLD} strokeWidth="0.9" strokeDasharray="3,2" strokeOpacity="0.8" />
            <Line x1={Math.round(cx-sh)} y1={ySh-3} x2={Math.round(cx-sh)} y2={ySh+7} stroke={GOLD} strokeWidth="1" />
            <Line x1={Math.round(cx+sh)} y1={ySh-3} x2={Math.round(cx+sh)} y2={ySh+7} stroke={GOLD} strokeWidth="1" />
            <SvgText x={cx} y={ySh-4} fill={GOLD} fontSize="7.5" textAnchor="middle" fontWeight="400">
              {m.shoulder_width_cm} cm
            </SvgText>
            <SvgText x={cx} y={ySh-11} fill="#777" fontSize="5.5" textAnchor="middle" letterSpacing="1">
              SHOULDER
            </SvgText>
          </G>
        )}

        {/* NECK (right side) */}
        {m?.neck_cm && (
          <G>
            <Line x1={Math.round(rightNk)} y1={yNkB} x2={238} y2={yNkB}
              stroke={GOLD} strokeWidth="0.8" strokeDasharray="3,2" strokeOpacity="0.75" />
            <Circle cx={Math.round(rightNk)} cy={yNkB} r="2" fill={GOLD} opacity="0.8" />
            <SvgText x={240} y={yNkB-3} fill={GOLD} fontSize="8" textAnchor="start" fontWeight="400">{m.neck_cm}</SvgText>
            <SvgText x={240} y={yNkB+6} fill="#666" fontSize="5.5" textAnchor="start" letterSpacing="0.8">NECK</SvgText>
          </G>
        )}

        {/* CHEST (left) */}
        {m?.chest_cm && (
          <G>
            <Line x1={Math.round(leftCh)} y1={yCh} x2={36} y2={yCh}
              stroke={GOLD} strokeWidth="0.8" strokeDasharray="3,2" strokeOpacity="0.75" />
            <Circle cx={Math.round(leftCh)} cy={yCh} r="2" fill={GOLD} opacity="0.8" />
            <SvgText x={34} y={yCh-3} fill={GOLD} fontSize="8" textAnchor="end" fontWeight="400">{m.chest_cm}</SvgText>
            <SvgText x={34} y={yCh+6} fill="#666" fontSize="5.5" textAnchor="end" letterSpacing="0.8">CHEST</SvgText>
          </G>
        )}

        {/* WAIST (left) */}
        {m?.waist_cm && (
          <G>
            <Line x1={Math.round(leftWa)} y1={yWa} x2={36} y2={yWa}
              stroke={GOLD} strokeWidth="0.8" strokeDasharray="3,2" strokeOpacity="0.75" />
            <Circle cx={Math.round(leftWa)} cy={yWa} r="2" fill={GOLD} opacity="0.8" />
            <SvgText x={34} y={yWa-3} fill={GOLD} fontSize="8" textAnchor="end" fontWeight="400">{m.waist_cm}</SvgText>
            <SvgText x={34} y={yWa+6} fill="#666" fontSize="5.5" textAnchor="end" letterSpacing="0.8">WAIST</SvgText>
          </G>
        )}

        {/* HIPS (left) */}
        {m?.hips_cm && (
          <G>
            <Line x1={Math.round(leftHi)} y1={yHi} x2={36} y2={yHi}
              stroke={GOLD} strokeWidth="0.8" strokeDasharray="3,2" strokeOpacity="0.75" />
            <Circle cx={Math.round(leftHi)} cy={yHi} r="2" fill={GOLD} opacity="0.8" />
            <SvgText x={34} y={yHi-3} fill={GOLD} fontSize="8" textAnchor="end" fontWeight="400">{m.hips_cm}</SvgText>
            <SvgText x={34} y={yHi+6} fill="#666" fontSize="5.5" textAnchor="end" letterSpacing="0.8">HIPS</SvgText>
          </G>
        )}

        {/* THIGH (left) */}
        {m?.thigh_cm && (
          <G>
            <Line x1={Math.round(leftTh)} y1={yThigh} x2={36} y2={yThigh}
              stroke={GOLD} strokeWidth="0.8" strokeDasharray="3,2" strokeOpacity="0.75" />
            <Circle cx={Math.round(leftTh)} cy={yThigh} r="2" fill={GOLD} opacity="0.8" />
            <SvgText x={34} y={yThigh-3} fill={GOLD} fontSize="8" textAnchor="end" fontWeight="400">{m.thigh_cm}</SvgText>
            <SvgText x={34} y={yThigh+6} fill="#666" fontSize="5.5" textAnchor="end" letterSpacing="0.8">THIGH</SvgText>
          </G>
        )}

        {/* INSEAM center */}
        {m?.inseam_cm && (
          <G>
            <Line x1={cx} y1={yCr+12} x2={cx} y2={yFl-2}
              stroke={GOLD} strokeWidth="0.7" strokeDasharray="2,3" strokeOpacity="0.4" />
            <SvgText x={cx+3} y={midInseam}   fill={GOLD} fontSize="7" textAnchor="start" fontWeight="300">{m.inseam_cm}</SvgText>
            <SvgText x={cx+3} y={midInseam+8} fill="#666" fontSize="5"  textAnchor="start" letterSpacing="0.8">INSEAM</SvgText>
          </G>
        )}
      </Svg>
    </View>
  );
}

// ─── PDF generation ────────────────────────────────────────────────────────────
function buildPdfHtml(scan: any): string {
  const m    = scan?.measurements ?? {};
  const recs = scan?.size_recommendations ?? {};
  const topsRec   = recs?.tops?.recommended   ?? recs?.primary   ?? "—";
  const bottomRec = recs?.bottom?.recommended ?? recs?.secondary ?? "—";
  const date       = new Date().toLocaleDateString("en-GB", { day: "2-digit", month: "long", year: "numeric" });
  const confidence = m?.confidence ? Math.round(m.confidence * 100) : null;

  const rows = [
    ["Height",             m.height_cm,          "cm"],
    ["Chest / Bust",       m.chest_cm,            "cm"],
    ["Waist",              m.waist_cm,            "cm"],
    ["Hips",               m.hips_cm,             "cm"],
    ["Shoulder Width",     m.shoulder_width_cm,   "cm"],
    ["Inseam",             m.inseam_cm,           "cm"],
    ["Sleeve Length",      m.sleeve_length_cm,    "cm"],
    ["Neck Circumference", m.neck_cm,             "cm"],
    ["Thigh",              m.thigh_cm,            "cm"],
  ].filter(([, v]) => v != null);

  const tableRows = rows.map(([label, val, unit]) => `
    <tr>
      <td>${label}</td>
      <td><strong>${val}</strong> <span class="unit">${unit}</span></td>
    </tr>`).join("");

  // ── Parametric mesh SVG (unique shape per person) ─────────────────────────
  const bodyPath = generateBodyPath(m);
  const pg = getBodyGeometry(m);
  const { cx: pcx, ySh: pySh, yNkB: pyNkB, yCh: pyCh, yWa: pyWa, yHi: pyHi,
          yCr: pyCr, yFl: pyFl, yThigh: pyThigh,
          leftCh: plCh, leftWa: plWa, leftHi: plHi, leftTh: plTh,
          rightNk: prNk, rightSh: prSh } = pg;

  const sliceLines = SLICES
    .map(y => `<line x1="0" y1="${y}" x2="280" y2="${y}" stroke="#d0c8b8" stroke-width="0.7"/>`)
    .join("");

  const pHt = m.height_cm ?? "";
  const pSw = m.shoulder_width_cm ?? "";
  const pN  = m.neck_cm ?? "";
  const pC  = m.chest_cm ?? "";
  const pW  = m.waist_cm ?? "";
  const pH  = m.hips_cm ?? "";
  const pTh = m.thigh_cm ?? "";
  const R   = (v: number) => Math.round(v);

  const meshSvg = `
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 280 450" width="100%" height="100%"
       style="display:block;" font-family="Inter,Helvetica,sans-serif">
    <defs>
      <clipPath id="pdf-bc">
        <path d="${bodyPath}"/>
      </clipPath>
    </defs>

    <rect width="280" height="450" fill="#0d0d0d" rx="4"/>
    <path d="${bodyPath}" fill="#1c1c1c"/>

    <g clip-path="url(#pdf-bc)">
      ${sliceLines}
      <line x1="${pcx}" y1="0" x2="${pcx}" y2="450" stroke="#ccc0aa" stroke-width="0.5"/>
      <line x1="${pcx-32}" y1="0" x2="${pcx-32}" y2="450" stroke="#b8b0a0" stroke-width="0.4"/>
      <line x1="${pcx+32}" y1="0" x2="${pcx+32}" y2="450" stroke="#b8b0a0" stroke-width="0.4"/>
    </g>

    <path d="${bodyPath}" fill="none" stroke="#888" stroke-width="1.5"/>

    ${pHt ? `
    <line x1="248" y1="12" x2="248" y2="436" stroke="#C9A84C" stroke-width="1" stroke-opacity="0.6"/>
    <line x1="243" y1="12" x2="253" y2="12" stroke="#C9A84C" stroke-width="1.2"/>
    <line x1="243" y1="436" x2="253" y2="436" stroke="#C9A84C" stroke-width="1.2"/>
    <text x="259" y="230" fill="#C9A84C" font-size="7.5" text-anchor="middle"
          transform="rotate(-90,259,230)" letter-spacing="1">${pHt} cm  HEIGHT</text>` : ""}

    ${pSw ? `
    <line x1="${R(pcx-pg.sh)}" y1="${pySh+2}" x2="${R(prSh)}" y2="${pySh+2}" stroke="#C9A84C" stroke-width="0.9" stroke-dasharray="3,2" stroke-opacity="0.85"/>
    <line x1="${R(pcx-pg.sh)}" y1="${pySh-4}" x2="${R(pcx-pg.sh)}" y2="${pySh+8}" stroke="#C9A84C" stroke-width="1.2"/>
    <line x1="${R(prSh)}" y1="${pySh-4}" x2="${R(prSh)}" y2="${pySh+8}" stroke="#C9A84C" stroke-width="1.2"/>
    <text x="${pcx}" y="${pySh-5}" fill="#C9A84C" font-size="7.5" text-anchor="middle" font-weight="500">${pSw} cm</text>
    <text x="${pcx}" y="${pySh-13}" fill="#999" font-size="5.5" text-anchor="middle" letter-spacing="1.5">SHOULDER</text>` : ""}

    ${pN ? `
    <line x1="${R(prNk)}" y1="${pyNkB}" x2="238" y2="${pyNkB}" stroke="#C9A84C" stroke-width="0.8" stroke-dasharray="3,2" stroke-opacity="0.8"/>
    <circle cx="${R(prNk)}" cy="${pyNkB}" r="2.2" fill="#C9A84C" opacity="0.9"/>
    <text x="240" y="${pyNkB-3}" fill="#C9A84C" font-size="8" text-anchor="start" font-weight="500">${pN} cm</text>
    <text x="240" y="${pyNkB+6}" fill="#999" font-size="5.5" text-anchor="start" letter-spacing="1">NECK</text>` : ""}

    ${pC ? `
    <line x1="${R(plCh)}" y1="${pyCh}" x2="36" y2="${pyCh}" stroke="#C9A84C" stroke-width="0.8" stroke-dasharray="3,2" stroke-opacity="0.8"/>
    <circle cx="${R(plCh)}" cy="${pyCh}" r="2.2" fill="#C9A84C" opacity="0.9"/>
    <text x="34" y="${pyCh-3}" fill="#C9A84C" font-size="8" text-anchor="end" font-weight="500">${pC} cm</text>
    <text x="34" y="${pyCh+6}" fill="#999" font-size="5.5" text-anchor="end" letter-spacing="1">CHEST</text>` : ""}

    ${pW ? `
    <line x1="${R(plWa)}" y1="${pyWa}" x2="36" y2="${pyWa}" stroke="#C9A84C" stroke-width="0.8" stroke-dasharray="3,2" stroke-opacity="0.8"/>
    <circle cx="${R(plWa)}" cy="${pyWa}" r="2.2" fill="#C9A84C" opacity="0.9"/>
    <text x="34" y="${pyWa-3}" fill="#C9A84C" font-size="8" text-anchor="end" font-weight="500">${pW} cm</text>
    <text x="34" y="${pyWa+6}" fill="#999" font-size="5.5" text-anchor="end" letter-spacing="1">WAIST</text>` : ""}

    ${pH ? `
    <line x1="${R(plHi)}" y1="${pyHi}" x2="36" y2="${pyHi}" stroke="#C9A84C" stroke-width="0.8" stroke-dasharray="3,2" stroke-opacity="0.8"/>
    <circle cx="${R(plHi)}" cy="${pyHi}" r="2.2" fill="#C9A84C" opacity="0.9"/>
    <text x="34" y="${pyHi-3}" fill="#C9A84C" font-size="8" text-anchor="end" font-weight="500">${pH} cm</text>
    <text x="34" y="${pyHi+6}" fill="#999" font-size="5.5" text-anchor="end" letter-spacing="1">HIPS</text>` : ""}

    ${pTh ? `
    <line x1="${R(plTh)}" y1="${pyThigh}" x2="36" y2="${pyThigh}" stroke="#C9A84C" stroke-width="0.8" stroke-dasharray="3,2" stroke-opacity="0.8"/>
    <circle cx="${R(plTh)}" cy="${pyThigh}" r="2.2" fill="#C9A84C" opacity="0.9"/>
    <text x="34" y="${pyThigh-3}" fill="#C9A84C" font-size="8" text-anchor="end" font-weight="500">${pTh} cm</text>
    <text x="34" y="${pyThigh+6}" fill="#999" font-size="5.5" text-anchor="end" letter-spacing="1">THIGH</text>` : ""}
  </svg>`;

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8"/>
  <meta name="viewport" content="width=device-width, initial-scale=1"/>
  <title>Naatai Fit – Measurement Report</title>
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&display=swap');
    * { margin:0; padding:0; box-sizing:border-box; }
    body { font-family:'Inter',Helvetica,sans-serif; background:#fff; color:#111; padding:36px; }

    .header { display:flex; justify-content:space-between; align-items:flex-start;
              border-bottom:2px solid #C9A84C; padding-bottom:20px; margin-bottom:28px; }
    .brand-name { font-size:22px; font-weight:300; letter-spacing:8px; color:#C9A84C; }
    .brand-sub  { font-size:10px; letter-spacing:5px; color:#aaa; margin-top:4px; }
    .report-meta { text-align:right; font-size:11px; color:#888; line-height:1.9; }
    .report-meta strong { color:#111; }

    /* Two-column layout: mesh left, data right */
    .body-layout { display:flex; gap:32px; align-items:flex-start; }
    .mesh-col    { flex:0 0 220px; }
    .mesh-label  { font-size:8px; letter-spacing:3px; color:#aaa; text-transform:uppercase;
                   margin-bottom:8px; }
    .mesh-box    { width:220px; height:354px; border-radius:6px; overflow:hidden;
                   background:#0d0d0d; }

    .data-col    { flex:1; }

    .section-title { font-size:8px; letter-spacing:3px; color:#aaa;
                     text-transform:uppercase; margin-bottom:12px; }

    .sizes-row { display:flex; gap:12px; margin-bottom:24px; }
    .size-badge { flex:1; border:1px solid #C9A84C; border-radius:4px; padding:14px;
                  text-align:center; background:#fffdf5; }
    .size-label { font-size:8px; letter-spacing:3px; color:#C9A84C; margin-bottom:4px; }
    .size-value { font-size:44px; font-weight:200; color:#C9A84C; line-height:1; }
    .size-type  { font-size:8px; color:#bbb; margin-top:4px; letter-spacing:2px; }

    ${confidence != null ? `.acc-row { display:flex; align-items:center; gap:10px; margin-bottom:24px; }
    .acc-label { font-size:10px; color:#888; width:68px; }
    .acc-bar   { flex:1; height:3px; background:#f0e8d0; border-radius:2px; overflow:hidden; }
    .acc-fill  { height:100%; background:#C9A84C; border-radius:2px; width:${confidence}%; }
    .acc-val   { font-size:11px; color:#C9A84C; font-weight:500; width:32px; text-align:right; }` : ""}

    table { width:100%; border-collapse:collapse; }
    th    { text-align:left; font-size:8px; letter-spacing:3px; color:#aaa;
            padding:8px 0; border-bottom:1px solid #ede5d0; }
    td    { padding:9px 0; border-bottom:1px solid #f5f5f5; font-size:12px; color:#555; }
    td:last-child { text-align:right; font-size:14px; font-weight:300; color:#111; }
    .unit { font-size:9px; color:#C9A84C; }

    .footer { margin-top:32px; padding-top:14px; border-top:1px solid #ede5d0;
              display:flex; justify-content:space-between; font-size:9px; color:#bbb; }
    @media print { body { padding:16px; } }
  </style>
</head>
<body>

<div class="header">
  <div>
    <div class="brand-name">NAATAI</div>
    <div class="brand-sub">FIT · MEASUREMENT REPORT</div>
  </div>
  <div class="report-meta">
    <div>Date: <strong>${date}</strong></div>
    <div>Scan ID: <strong>#${scan?.id ?? "—"}</strong></div>
    ${confidence != null ? `<div>Accuracy: <strong>${confidence}%</strong></div>` : ""}
    <div>naatai.de</div>
  </div>
</div>

<div class="body-layout">
  <!-- 3D mesh column -->
  <div class="mesh-col">
    <div class="mesh-label">3D Body Mesh</div>
    <div class="mesh-box">${meshSvg}</div>
  </div>

  <!-- Data column -->
  <div class="data-col">
    <div class="section-title">Recommended Sizes</div>
    <div class="sizes-row">
      <div class="size-badge">
        <div class="size-label">TOPS</div>
        <div class="size-value">${topsRec}</div>
        <div class="size-type">EU SIZE</div>
      </div>
      <div class="size-badge">
        <div class="size-label">BOTTOM</div>
        <div class="size-value">${bottomRec}</div>
        <div class="size-type">EU SIZE</div>
      </div>
    </div>

    ${confidence != null ? `
    <div class="acc-row">
      <div class="acc-label">Accuracy</div>
      <div class="acc-bar"><div class="acc-fill"></div></div>
      <div class="acc-val">${confidence}%</div>
    </div>` : ""}

    <div class="section-title">Body Measurements</div>
    ${rows.length > 0 ? `
    <table>
      <thead><tr><th>Measurement</th><th>Value</th></tr></thead>
      <tbody>${tableRows}</tbody>
    </table>` : `
    <p style="color:#bbb;font-size:12px;padding:12px 0;">
      Measurements not available — scan may still be processing.
    </p>`}
  </div>
</div>

<div class="footer">
  <div>Generated by Naatai Fit · naatai.de</div>
  <div>Present this report when shopping for accurate size guidance</div>
</div>

</body>
</html>`;
}

async function exportPdf(scan: any) {
  const html = buildPdfHtml(scan);

  if (Platform.OS === "web") {
    const blob   = new Blob([html], { type: "text/html;charset=utf-8" });
    const url    = URL.createObjectURL(blob);
    const opened = window.open(url, "_blank");
    if (!opened) {
      const a = document.createElement("a");
      a.href = url; a.download = `naatai-fit-${scan?.id ?? "report"}.html`;
      document.body.appendChild(a); a.click(); document.body.removeChild(a);
    }
    setTimeout(() => URL.revokeObjectURL(url), 30_000);
    return;
  }
  try {
    const Print   = require("expo-print");
    const Sharing = require("expo-sharing");
    const { uri } = await Print.printToFileAsync({ html });
    await Sharing.shareAsync(uri, { mimeType: "application/pdf", dialogTitle: "Save Measurement Report" });
  } catch {
    Alert.alert("PDF Export", "Install expo-print and expo-sharing for PDF export on device.");
  }
}

// ─── Screen ───────────────────────────────────────────────────────────────────

export default function ResultsScreen() {
  const { scanId, error } = useLocalSearchParams<{ scanId: string; error?: string }>();
  const [scan,      setScan]      = useState<any>(null);
  const [loading,   setLoading]   = useState(true);
  const [exporting, setExporting] = useState(false);
  const router = useRouter();

  useEffect(() => { if (scanId) loadScan(); }, [scanId]);

  const loadScan = async () => {
    try {
      const { data } = await scanAPI.getScan(Number(scanId));
      setScan(data);
    } catch { } finally { setLoading(false); }
  };

  const handleExportPdf = async () => {
    setExporting(true);
    try { await exportPdf(scan); }
    finally { setExporting(false); }
  };

  if (loading) return (
    <View style={[st.container, st.center]}>
      <ActivityIndicator color={GOLD} size="large" />
    </View>
  );

  if (error || scan?.status === "failed") return (
    <View style={[st.container, st.center]}>
      <Ionicons name="alert-circle-outline" size={48} color="#ef5350" />
      <Text style={st.errorTitle}>Scan Failed</Text>
      <Text style={st.errorSub}>{scan?.error_message ?? "Could not process. Please try again."}</Text>
      <TouchableOpacity style={st.retryBtn} onPress={() => router.replace("/(tabs)/home")}>
        <Text style={st.retryText}>TRY AGAIN</Text>
      </TouchableOpacity>
    </View>
  );

  const m           = scan?.measurements ?? {};
  const recs        = scan?.size_recommendations ?? {};
  const topsRec     = recs?.tops?.recommended   ?? recs?.primary   ?? null;
  const bottomRec   = recs?.bottom?.recommended ?? recs?.secondary ?? null;
  const topsSizes   = recs?.tops?.all_sizes   ?? [];
  const bottomSizes = recs?.bottom?.all_sizes ?? [];
  const confidence  = m?.confidence ? Math.round(m.confidence * 100) : null;

  return (
    <ScrollView
      style={st.container}
      contentContainerStyle={{ paddingBottom: 56 }}
      showsVerticalScrollIndicator={false}>

      {/* ── Hero header ── */}
      <LinearGradient colors={["#1a1400", "#0A0A0A"]} style={st.hero}>
        <View style={st.heroTop}>
          <TouchableOpacity onPress={() => router.replace("/(tabs)/home")} hitSlop={12}>
            <Ionicons name="close" size={22} color="rgba(255,255,255,0.4)" />
          </TouchableOpacity>
          <Text style={st.heroTitle}>YOUR RESULTS</Text>
          <TouchableOpacity onPress={handleExportPdf} disabled={exporting} hitSlop={12}>
            {exporting
              ? <ActivityIndicator color={GOLD} size="small" />
              : <Ionicons name="document-text-outline" size={22} color={GOLD} />}
          </TouchableOpacity>
        </View>

        {/* Size badges */}
        <View style={st.sizesRow}>
          {topsRec && (
            <View style={st.sizeBadge}>
              <Text style={st.sizeBadgeLabel}>TOPS</Text>
              <Text style={st.sizeBadgeValue}>{topsRec}</Text>
              <Text style={st.sizeBadgeSub}>EU SIZE</Text>
            </View>
          )}
          {bottomRec && (
            <View style={[st.sizeBadge, { borderColor: "rgba(201,168,76,0.2)" }]}>
              <Text style={st.sizeBadgeLabel}>BOTTOM</Text>
              <Text style={st.sizeBadgeValue}>{bottomRec}</Text>
              <Text style={st.sizeBadgeSub}>EU SIZE</Text>
            </View>
          )}
        </View>

        {confidence != null && (
          <View style={st.confRow}>
            <Text style={st.confLabel}>Accuracy</Text>
            <View style={st.confBar}>
              <View style={[st.confFill, { width: `${confidence}%` as any }]} />
            </View>
            <Text style={st.confVal}>{confidence}%</Text>
          </View>
        )}

        <TouchableOpacity style={st.pdfHint} onPress={handleExportPdf} disabled={exporting}>
          <Ionicons name="download-outline" size={14} color={GOLD} />
          <Text style={st.pdfHintText}>Download PDF with 3D mesh & full measurements</Text>
        </TouchableOpacity>
      </LinearGradient>

      {/* ── 3D Body Mesh ── */}
      <View style={st.section}>
        <Text style={st.sectionTitle}>3D BODY MESH</Text>
        <View style={st.meshWrap}>
          <BodyMeshDiagram m={m} />
        </View>
        <Text style={st.meshCaption}>
          SMPL-X parametric body model · scan slices at anatomical heights
        </Text>
      </View>

      {/* ── Size charts ── */}
      {(topsSizes.length > 0 || bottomSizes.length > 0) && (
        <View style={st.section}>
          <Text style={st.sectionTitle}>SIZE FIT CHART</Text>
          {topsSizes.length > 0   && <SizeChart label="TOPS"   sizes={topsSizes}   recommended={topsRec} />}
          {bottomSizes.length > 0 && <SizeChart label="BOTTOM" sizes={bottomSizes} recommended={bottomRec} />}
        </View>
      )}

      {/* ── Full measurements table ── */}
      <View style={st.section}>
        <Text style={st.sectionTitle}>BODY MEASUREMENTS</Text>

        {/* 2×2 key grid */}
        <View style={st.keyGrid}>
          {[
            { label: "Chest / Bust", key: "chest_cm" },
            { label: "Waist",        key: "waist_cm" },
            { label: "Hips",         key: "hips_cm" },
            { label: "Shoulder",     key: "shoulder_width_cm" },
          ].map((item) => {
            const val = m?.[item.key];
            if (!val) return null;
            return (
              <View key={item.key} style={st.keyCell}>
                <Text style={st.keyCellVal}>{val}</Text>
                <Text style={st.keyCellUnit}>cm</Text>
                <Text style={st.keyCellLabel}>{item.label}</Text>
              </View>
            );
          })}
        </View>

        {/* Secondary list */}
        <View style={st.table}>
          {[
            { label: "Height",        key: "height_cm",        unit: "cm" },
            { label: "Inseam",        key: "inseam_cm",        unit: "cm" },
            { label: "Sleeve Length", key: "sleeve_length_cm", unit: "cm" },
            { label: "Neck",          key: "neck_cm",          unit: "cm" },
            { label: "Thigh",         key: "thigh_cm",         unit: "cm" },
          ].map((row) => {
            const val = m?.[row.key];
            if (!val) return null;
            return (
              <View key={row.key} style={st.tableRow}>
                <Text style={st.tableLabel}>{row.label}</Text>
                <Text style={st.tableVal}>
                  {val} <Text style={st.tableUnit}>{row.unit}</Text>
                </Text>
              </View>
            );
          })}
        </View>
      </View>

      {/* ── Actions ── */}
      <View style={[st.section, { gap: 10 }]}>
        <TouchableOpacity style={st.primaryBtn} onPress={handleExportPdf} disabled={exporting}>
          {exporting
            ? <ActivityIndicator color="#000" size="small" />
            : <><Ionicons name="document-text-outline" size={18} color="#000" />
               <Text style={st.primaryBtnText}>SAVE AS PDF</Text></>}
        </TouchableOpacity>
        <TouchableOpacity style={st.secondaryBtn} onPress={() => router.push("/(tabs)/home")}>
          <Text style={st.secondaryBtnText}>SCAN ANOTHER ITEM</Text>
        </TouchableOpacity>
        <TouchableOpacity style={st.ghostBtn} onPress={() => router.push("/(tabs)/history")}>
          <Text style={st.ghostBtnText}>VIEW HISTORY</Text>
        </TouchableOpacity>
      </View>

    </ScrollView>
  );
}

// ─── Size chart ───────────────────────────────────────────────────────────────
function SizeChart({ label, sizes, recommended }: { label: string; sizes: any[]; recommended: string | null }) {
  return (
    <View style={ch.wrap}>
      <Text style={ch.label}>{label}</Text>
      <View style={ch.bars}>
        {sizes.map((item: any) => {
          const score = typeof item === "object" ? item.score : 0;
          const size  = typeof item === "object" ? item.size  : item;
          const isRec = size === recommended;
          return (
            <View key={size} style={ch.barCol}>
              <View style={ch.barTrack}>
                <View style={[ch.barFill, {
                  height: `${Math.round(score * 100)}%` as any,
                  backgroundColor: isRec ? GOLD : "rgba(201,168,76,0.25)",
                }]} />
              </View>
              <Text style={[ch.barLabel, isRec && { color: GOLD }]}>{size}</Text>
              {isRec && <View style={ch.bestDot} />}
            </View>
          );
        })}
      </View>
    </View>
  );
}

// ─── Styles ───────────────────────────────────────────────────────────────────
const st = StyleSheet.create({
  container:      { flex: 1, backgroundColor: "#0A0A0A" },
  center:         { alignItems: "center", justifyContent: "center", padding: 32, gap: 16 },

  hero:           { padding: 24, paddingTop: 60, paddingBottom: 28 },
  heroTop:        { flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginBottom: 28 },
  heroTitle:      { color: "rgba(255,255,255,0.35)", fontSize: 10, letterSpacing: 4 },

  sizesRow:       { flexDirection: "row", gap: 12, marginBottom: 20 },
  sizeBadge:      { flex: 1, borderColor: "rgba(201,168,76,0.4)", borderWidth: 1, borderRadius: 4, padding: 16, alignItems: "center", backgroundColor: "rgba(201,168,76,0.05)" },
  sizeBadgeLabel: { color: GOLD, fontSize: 9, letterSpacing: 3, marginBottom: 6 },
  sizeBadgeValue: { color: GOLD, fontSize: 52, fontWeight: "200", lineHeight: 56 },
  sizeBadgeSub:   { color: "rgba(255,255,255,0.25)", fontSize: 9, letterSpacing: 2, marginTop: 4 },

  confRow:        { flexDirection: "row", alignItems: "center", gap: 10, marginBottom: 16 },
  confLabel:      { color: "rgba(255,255,255,0.3)", fontSize: 11, width: 60 },
  confBar:        { flex: 1, height: 2, backgroundColor: "rgba(255,255,255,0.08)", borderRadius: 1, overflow: "hidden" },
  confFill:       { height: "100%", backgroundColor: GOLD, borderRadius: 1 },
  confVal:        { color: GOLD, fontSize: 11, width: 36, textAlign: "right" },

  pdfHint:        { flexDirection: "row", alignItems: "center", gap: 8, paddingTop: 12, borderTopColor: "rgba(255,255,255,0.05)", borderTopWidth: 1 },
  pdfHintText:    { color: "rgba(201,168,76,0.6)", fontSize: 11 },

  section:        { paddingHorizontal: 20, paddingTop: 28 },
  sectionTitle:   { color: "rgba(255,255,255,0.25)", fontSize: 9, letterSpacing: 4, marginBottom: 16 },

  meshWrap:       { backgroundColor: "#0d0d0d", borderRadius: 6, overflow: "hidden", borderColor: "rgba(201,168,76,0.1)", borderWidth: 1 },
  meshCaption:    { color: "rgba(255,255,255,0.2)", fontSize: 9, letterSpacing: 1, marginTop: 10, textAlign: "center" },

  keyGrid:        { flexDirection: "row", flexWrap: "wrap", gap: 10, marginBottom: 14 },
  keyCell:        { flex: 1, minWidth: "45%", backgroundColor: "#111", borderColor: "rgba(255,255,255,0.06)", borderWidth: 1, borderRadius: 4, padding: 16, alignItems: "center", gap: 2 },
  keyCellVal:     { color: GOLD, fontSize: 32, fontWeight: "200", lineHeight: 36 },
  keyCellUnit:    { color: "rgba(201,168,76,0.5)", fontSize: 10, marginTop: -4 },
  keyCellLabel:   { color: "rgba(255,255,255,0.4)", fontSize: 10, letterSpacing: 1.5, marginTop: 4, textAlign: "center" },

  table:          { backgroundColor: "#111", borderColor: "rgba(255,255,255,0.05)", borderWidth: 1, borderRadius: 4, overflow: "hidden" },
  tableRow:       { flexDirection: "row", justifyContent: "space-between", alignItems: "center", paddingHorizontal: 16, paddingVertical: 13, borderBottomColor: "rgba(255,255,255,0.04)", borderBottomWidth: 1 },
  tableLabel:     { color: "rgba(255,255,255,0.5)", fontSize: 13 },
  tableVal:       { color: "#fff", fontSize: 16, fontWeight: "300" },
  tableUnit:      { color: GOLD, fontSize: 11 },

  primaryBtn:     { backgroundColor: GOLD, flexDirection: "row", justifyContent: "center", alignItems: "center", gap: 10, padding: 16, borderRadius: 2 },
  primaryBtnText: { color: "#000", fontSize: 13, letterSpacing: 3, fontWeight: "600" },
  secondaryBtn:   { borderColor: "rgba(255,255,255,0.1)", borderWidth: 1, padding: 14, alignItems: "center", borderRadius: 2 },
  secondaryBtnText:{ color: "rgba(255,255,255,0.5)", fontSize: 12, letterSpacing: 3 },
  ghostBtn:       { padding: 14, alignItems: "center" },
  ghostBtnText:   { color: "rgba(255,255,255,0.25)", fontSize: 11, letterSpacing: 3 },

  errorTitle:     { color: "#fff", fontSize: 22, fontWeight: "300" },
  errorSub:       { color: "rgba(255,255,255,0.4)", fontSize: 13, textAlign: "center" },
  retryBtn:       { backgroundColor: GOLD, paddingHorizontal: 28, paddingVertical: 12, borderRadius: 2 },
  retryText:      { color: "#000", letterSpacing: 3, fontSize: 13, fontWeight: "600" },
});

const ch = StyleSheet.create({
  wrap:     { marginBottom: 20 },
  label:    { color: "rgba(255,255,255,0.3)", fontSize: 9, letterSpacing: 3, marginBottom: 10 },
  bars:     { flexDirection: "row", alignItems: "flex-end", gap: 8, height: 80, backgroundColor: "#111", borderRadius: 4, padding: 12, borderColor: "rgba(255,255,255,0.05)", borderWidth: 1 },
  barCol:   { flex: 1, alignItems: "center", gap: 4 },
  barTrack: { flex: 1, width: "100%", backgroundColor: "rgba(255,255,255,0.05)", borderRadius: 2, justifyContent: "flex-end" },
  barFill:  { width: "100%", borderRadius: 2 },
  barLabel: { color: "rgba(255,255,255,0.4)", fontSize: 10, fontWeight: "500" },
  bestDot:  { width: 4, height: 4, borderRadius: 2, backgroundColor: GOLD },
});

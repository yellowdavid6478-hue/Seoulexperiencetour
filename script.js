/* -----------------------------------------------------------
   SEOUL EXPERIENCE TOUR — vanilla JS
----------------------------------------------------------- */

const PROGRAMS = [
  {
    id: "kimchi",
    tag: "PROGRAM 01",
    color: "#C93838",
    colorSoft: "#FBEAE8",
    title: "김치 체험 투어",
    subtitle: "한끼를 맛보다, 김치로 하나되는 시간",
    desc: "김치의 역사와 문화를 배우고, 직접 담근 김치를 포장해 가는 손끝의 여행.",
    bullets: [
      "김치의 역사와 문화 소개",
      "김치 만들기 체험 (개인접시)",
      "한복 체험 및 포토타임",
      "한식 시식 (갓김치, 잡채 등)",
      "완성한 김치 포장 및 기념품 제공",
    ],
    meta: [
      { label: "소요시간", value: "2–3시간" },
      { label: "운영장소", value: "종로 · 인사동 인근" },
      { label: "대상", value: "외국인 관광객 · 가족" },
    ],
    glyph: "kimchi",
  },
  {
    id: "mbti",
    tag: "PROGRAM 02",
    color: "#3B4C8C",
    colorSoft: "#EAEDF7",
    title: "MBTI 서울 투어",
    subtitle: "나에게 맞는 서울을 여행하다",
    desc: "간단한 MBTI 검사로 16가지 유형을 분석하고, 유형별 맞춤 코스로 서울을 걷는다.",
    bullets: [
      "간단한 MBTI 검사 후 16개 유형 분석",
      "유형별 맞춤 코스 추천",
      "미션 수행 및 인증 스탬프 투어",
      "기념품 & 인증서 제공",
    ],
    meta: [
      { label: "소요시간", value: "4–6시간" },
      { label: "운영형태", value: "가이드 투어 · 자유투어" },
      { label: "대상", value: "MZ세대 · 친구 · 연인" },
    ],
    glyph: "compass",
  },
  {
    id: "seongsu",
    tag: "PROGRAM 03",
    color: "#8B6A3F",
    colorSoft: "#F3ECDF",
    title: "성수동 브랜드 투어",
    subtitle: "브랜드의 발생을 걷다, 성수 감성 투어",
    desc: "팝업스토어와 로컬 브랜드 매장을 도장깨듯 순회하는 감성 카페 투어.",
    bullets: [
      "성수동 브랜드 스트리트 소개",
      "팝업스토어 & 플래그십 스토어 탐방",
      "로컬 브랜드 매장 방문",
      "감성 카페 & 디저트 체험",
      "포토스팟 투어 & 굿즈 구매",
    ],
    meta: [
      { label: "소요시간", value: "4–5시간" },
      { label: "운영장소", value: "성수동 일대" },
      { label: "대상", value: "MZ세대 · 브랜드 관심층" },
    ],
    glyph: "storefront",
  },
];

const TIMELINE = [
  { step: "1", label: "프로그램 개발", period: "2025.6 – 8월", detail: "콘텐츠 기획 · 코스 개발 · 파트너 발굴" },
  { step: "2", label: "시범 운영", period: "2025.9 – 10월", detail: "파일럿 투어 운영 · 피드백 수집" },
  { step: "3", label: "관광상품 출시", period: "2025.11 – 12월", detail: "정식 프로그램 오픈 · 온라인 예약 구성" },
  { step: "4", label: "해외 홍보", period: "2026.1 – 3월", detail: "글로벌 플랫폼 연계 · 인플루언서 협업" },
  { step: "5", label: "성과 평가 및 고도화", period: "2026.4월 ~", detail: "성과 분석 · 만족도 조사 · 프로그램 고도화" },
];

const KPI = [
  { label: "연간 참가자 수", value: "5,000", unit: "명" },
  { label: "외국인 참가 비율", value: "60", unit: "%" },
  { label: "고객 만족도", value: "95", unit: "% 이상" },
  { label: "재방문 의향", value: "80", unit: "% 이상" },
];

const FEATURES = [
  ["체험 중심 관광", "보는 관광에서 벗어나 직접 만들고 경험하는 여행"],
  ["맞춤형 투어", "MBTI 기반 맞춤 코스로 나에게 맞는 서울 여행"],
  ["SNS 인증 여행", "인증 미션과 포토존으로 추억을 공유하는 여행"],
  ["지역 상권 활성화", "성수동 등 로컬 브랜드와 지역 경제 동반 성장"],
];

/* ---------- glyph icon markup (SVG strings) ---------- */
function glyphSVG(type, color) {
  const s = `stroke="${color}" stroke-width="1.6" fill="none" stroke-linecap="round" stroke-linejoin="round"`;
  if (type === "kimchi") {
    return `<svg viewBox="0 0 48 48" width="34" height="34">
      <path d="M14 20c0-8 4-13 10-13s10 5 10 13" ${s} />
      <ellipse cx="24" cy="30" rx="15" ry="9" ${s} />
      <path d="M11 30c0 6 6 10 13 10s13-4 13-10" ${s} />
    </svg>`;
  }
  if (type === "compass") {
    return `<svg viewBox="0 0 48 48" width="34" height="34">
      <circle cx="24" cy="24" r="15" ${s} />
      <path d="M29 19l-6 10-8 5 6-10 8-5z" ${s} />
    </svg>`;
  }
  return `<svg viewBox="0 0 48 48" width="34" height="34">
    <path d="M9 20l15-11 15 11" ${s} />
    <path d="M11 20v16h26V20" ${s} />
    <path d="M20 36V26h8v10" ${s} />
  </svg>`;
}

/* ---------- build skyline buildings/windows ---------- */
function buildSkyline() {
  const buildingsG = document.getElementById("buildings");
  const windowsG = document.getElementById("windows");
  const rects = [
    [20, 210, 60], [95, 180, 45], [150, 230, 70], [235, 160, 55], [300, 200, 90],
    [405, 150, 50], [470, 190, 65], [550, 130, 60], [625, 205, 80], [720, 170, 45],
    [780, 220, 95], [890, 160, 55], [960, 195, 70], [1040, 140, 50], [1105, 210, 85],
    [1205, 175, 60], [1270, 225, 100], [1385, 165, 55],
  ];
  const frag = document.createDocumentFragment();
  rects.forEach(([x, h, w]) => {
    const rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
    rect.setAttribute("x", x);
    rect.setAttribute("y", 360 - h);
    rect.setAttribute("width", w);
    rect.setAttribute("height", h);
    rect.setAttribute("fill", "#20264a");
    rect.setAttribute("opacity", "0.85");
    frag.appendChild(rect);
  });
  buildingsG.appendChild(frag);

  const wfrag = document.createDocumentFragment();
  for (let i = 0; i < 90; i++) {
    const x = 20 + ((i * 47) % 1400);
    const y = 130 + ((i * 71) % 200);
    const rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
    rect.setAttribute("x", x);
    rect.setAttribute("y", y);
    rect.setAttribute("width", 4);
    rect.setAttribute("height", 6);
    rect.setAttribute("fill", "#D4A94A");
    rect.setAttribute("opacity", 0.15 + (i % 5) * 0.12);
    wfrag.appendChild(rect);
  }
  windowsG.appendChild(wfrag);
}

/* ---------- feature strip ---------- */
function buildFeatureStrip() {
  const el = document.getElementById("featureStrip");
  el.innerHTML = FEATURES.map(
    ([t, d], i) => `
    <div class="reveal feature-item" data-delay="${i * 80}">
      <div class="feature-item-title">${t}</div>
      <div class="feature-item-desc">${d}</div>
    </div>`
  ).join("");
}

/* ---------- program tabs + panel ---------- */
let activeProgram = 0;

function buildTabs() {
  const tabRow = document.getElementById("tabRow");
  tabRow.innerHTML = PROGRAMS.map(
    (p, i) => `<button class="tab-btn${i === activeProgram ? " active" : ""}" data-index="${i}"
      style="background:${i === activeProgram ? p.color : "#fff"};border-color:${i === activeProgram ? p.color : "rgba(26,32,56,0.12)"}">
      ${p.tag} · ${p.title}
    </button>`
  ).join("");

  tabRow.querySelectorAll(".tab-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      activeProgram = parseInt(btn.dataset.index, 10);
      buildTabs();
      buildProgramPanel();
    });
  });
}

function buildProgramPanel() {
  const prog = PROGRAMS[activeProgram];
  const panel = document.getElementById("programPanel");
  panel.style.borderColor = prog.colorSoft;

  panel.innerHTML = `
    <div class="program-grid">
      <div class="program-content">
        <div class="program-icon-badge" style="background:${prog.colorSoft}">
          ${glyphSVG(prog.glyph, prog.color)}
        </div>
        <div class="program-tag" style="color:${prog.color}">${prog.tag}</div>
        <h3 class="program-title">${prog.title}</h3>
        <p class="program-subtitle">${prog.subtitle}</p>
        <p class="program-desc">${prog.desc}</p>
        <ul class="program-bullets">
          ${prog.bullets.map((b) => `<li><span class="dot" style="color:${prog.color}">·</span>${b}</li>`).join("")}
        </ul>
        <div class="program-meta">
          ${prog.meta.map((m) => `
            <div>
              <div class="program-meta-label">${m.label}</div>
              <div class="program-meta-value">${m.value}</div>
            </div>`).join("")}
        </div>
        <button class="btn program-apply-btn" id="programApplyBtn" style="background:${prog.color}">
          ${prog.title} 신청하기
        </button>
      </div>
      <div class="program-visual" style="background:linear-gradient(160deg, ${prog.colorSoft}, #fff)">
        <div class="program-visual-box" style="background:linear-gradient(135deg, ${prog.color}22, ${prog.color}05); border-color:${prog.color}55">
          <div class="program-visual-circle" style="box-shadow:0 10px 24px ${prog.color}33">
            ${glyphSVG(prog.glyph, prog.color)}
          </div>
          <div class="program-visual-label" style="color:${prog.color}">${prog.subtitle}</div>
        </div>
      </div>
    </div>`;

  document.getElementById("programApplyBtn").addEventListener("click", () => {
    document.getElementById("fieldProgram").value = prog.title;
    openModal();
  });
}

/* ---------- timeline ---------- */
function buildTimeline() {
  const el = document.getElementById("timelineGrid");
  el.innerHTML = TIMELINE.map(
    (t, i) => `
    <div class="reveal timeline-item" data-delay="${i * 90}">
      <div class="timeline-num">${t.step}</div>
      <div class="timeline-label">${t.label}</div>
      <div class="timeline-period">${t.period}</div>
      <div class="timeline-detail">${t.detail}</div>
    </div>`
  ).join("");
}

/* ---------- kpi ---------- */
function buildKPI() {
  const el = document.getElementById("kpiGrid");
  el.innerHTML = KPI.map(
    (k, i) => `
    <div class="reveal kpi-card" data-delay="${i * 90}">
      <div class="kpi-value">${k.value}<span class="kpi-unit">${k.unit}</span></div>
      <div class="kpi-label">${k.label}</div>
    </div>`
  ).join("");
}

/* ---------- program select in modal ---------- */
function buildProgramSelect() {
  const sel = document.getElementById("fieldProgram");
  sel.innerHTML = PROGRAMS.map((p) => `<option value="${p.title}">${p.title}</option>`).join("");
}

/* ---------- reveal-on-scroll ---------- */
function initReveal() {
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const delay = entry.target.dataset.delay || 0;
          entry.target.style.transitionDelay = `${delay}ms`;
          entry.target.classList.add("is-visible");
          io.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );
  document.querySelectorAll(".reveal").forEach((el) => io.observe(el));
}

/* ---------- modal ---------- */
const modalOverlay = document.getElementById("modalOverlay");
const modalFormView = document.getElementById("modalFormView");
const modalSuccessView = document.getElementById("modalSuccessView");
const applyForm = document.getElementById("applyForm");

function openModal() {
  modalOverlay.classList.add("open");
  modalFormView.hidden = false;
  modalSuccessView.hidden = true;
  applyForm.reset();
}

function closeModal() {
  modalOverlay.classList.remove("open");
}

function initModal() {
  document.getElementById("navApplyBtn").addEventListener("click", openModal);
  document.getElementById("heroApplyBtn").addEventListener("click", openModal);
  document.getElementById("ctaApplyBtn").addEventListener("click", openModal);
  document.getElementById("modalCloseBtn").addEventListener("click", closeModal);
  modalOverlay.addEventListener("click", (e) => {
    if (e.target === modalOverlay) closeModal();
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modalOverlay.classList.contains("open")) closeModal();
  });

  applyForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("fieldName").value;
    const program = document.getElementById("fieldProgram").value;
    document.getElementById("successDesc").innerHTML =
      `${name}님, ${program} 신청이 완료되었어요.<br />담당자가 입력하신 연락처로 안내드릴게요.`;
    modalFormView.hidden = true;
    modalSuccessView.hidden = false;
  });
}

/* ---------- init ---------- */
document.addEventListener("DOMContentLoaded", () => {
  buildSkyline();
  buildFeatureStrip();
  buildProgramSelect();
  buildTabs();
  buildProgramPanel();
  buildTimeline();
  buildKPI();
  initModal();
  initReveal();
});

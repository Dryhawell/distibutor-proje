// === VERİLER ===
const products = {
  espSingle: [
    {
      step: 3000,
      model: "SDC-3000 ESP",
      airflowMin: 2500,
      airflowMax: 3000,
      effHigh: 98.7,
      effLow: 94.5,
      cells: 1,
      collectorAreaM2: 17.2,
      powerKw: 0.3,
      pressureLossPa: 150,
      size: "690 x 600 x 550 mm",
      duct: "503 x 450 mm"
    },
    {
      step: 6000,
      model: "SDC-6000 ESP",
      airflowMin: 5000,
      airflowMax: 6000,
      effHigh: 98.7,
      effLow: 94.5,
      cells: 2,
      collectorAreaM2: 34.4,
      powerKw: 0.3,
      pressureLossPa: 150,
      size: "1170 x 600 x 550 mm",
      duct: "503 x 927 mm"
    },
    {
      step: 9000,
      model: "SDC-9000 ESP",
      airflowMin: 7500,
      airflowMax: 9000,
      effHigh: 98.7,
      effLow: 94.5,
      cells: 3,
      collectorAreaM2: 51.6,
      powerKw: 0.3,
      pressureLossPa: 150,
      size: "1640 x 600 x 550 mm",
      duct: "503 x 1417 mm"
    },
    {
      step: 12000,
      model: "SDC-12000 ESP",
      airflowMin: 10000,
      airflowMax: 12000,
      effHigh: 98.7,
      effLow: 94.5,
      cells: 4,
      collectorAreaM2: 68.8,
      powerKw: 0.6,
      pressureLossPa: 150,
      size: "1170 x 1200 x 550 mm",
      duct: "1103 x 927 mm"
    },
    {
      step: 18000,
      model: "SDC-18000 ESP",
      airflowMin: 15000,
      airflowMax: 18000,
      effHigh: 98.7,
      effLow: 94.5,
      cells: 6,
      collectorAreaM2: 103.2,
      powerKw: 0.6,
      pressureLossPa: 150,
      size: "1640 x 1200 x 550 mm",
      duct: "1103 x 1417 mm"
    },
    {
      step: 27000,
      model: "SDC-27000 ESP",
      airflowMin: 22500,
      airflowMax: 27000,
      effHigh: 98.7,
      effLow: 94.5,
      cells: 9,
      collectorAreaM2: 154.8,
      powerKw: 0.9,
      pressureLossPa: 150,
      size: "1640 x 1800 x 550 mm",
      duct: "1703 x 1417 mm"
    }
  ],

  espDouble: [
    {
      step: 3000,
      model: "SDC-3000 ESP Çift Geçiş",
      airflowMin: 2500,
      airflowMax: 3000,
      effHigh: 98.7,
      effLow: 94.5,
      cells: 2,
      collectorAreaM2: 34.4,
      powerKw: 0.6,
      pressureLossPa: 150,
      size: "690 x 600 x 1100 mm",
      duct: "503 x 450 mm"
    },
    {
      step: 6000,
      model: "SDC-6000 ESP Çift Geçiş",
      airflowMin: 5000,
      airflowMax: 6000,
      effHigh: 98.7,
      effLow: 94.5,
      cells: 4,
      collectorAreaM2: 68.8,
      powerKw: 0.6,
      pressureLossPa: 150,
      size: "1170 x 600 x 1100 mm",
      duct: "503 x 927 mm"
    },
    {
      step: 9000,
      model: "SDC-9000 ESP Çift Geçiş",
      airflowMin: 7500,
      airflowMax: 9000,
      effHigh: 98.7,
      effLow: 94.5,
      cells: 6,
      collectorAreaM2: 102,
      powerKw: 0.6,
      pressureLossPa: 150,
      size: "1640 x 600 x 1100 mm",
      duct: "503 x 1417 mm"
    },
    {
      step: 12000,
      model: "SDC-12000 ESP Çift Geçiş",
      airflowMin: 10000,
      airflowMax: 12000,
      effHigh: 98.7,
      effLow: 94.5,
      cells: 8,
      collectorAreaM2: 137.6,
      powerKw: 1.2,
      pressureLossPa: 150,
      size: "1170 x 1200 x 1100 mm",
      duct: "1103 x 927 mm"
    },
    {
      step: 18000,
      model: "SDC-18000 ESP Çift Geçiş",
      airflowMin: 15000,
      airflowMax: 18000,
      effHigh: 98.7,
      effLow: 94.5,
      cells: 12,
      collectorAreaM2: 206.4,
      powerKw: 1.2,
      pressureLossPa: 150,
      size: "1640 x 1200 x 1100 mm",
      duct: "1103 x 1417 mm"
    },
    {
      step: 27000,
      model: "SDC-27000 ESP Çift Geçiş",
      airflowMin: 22500,
      airflowMax: 27000,
      effHigh: 98.7,
      effLow: 94.5,
      cells: 18,
      collectorAreaM2: 309,
      powerKw: 0.9,
      pressureLossPa: 150,
      size: "1640 x 1800 x 1100 mm",
      duct: "1703 x 1417 mm"
    }
  ],

  uvc: [
    {
      step: 3000,
      model: "SDC-UV 3000",
      airflowMin: 2500,
      airflowMax: 3000,
      effHigh: 98.7,
      effLow: 94.5,
      uvcLampCount: 3,
      totalPowerW: 450,
      powerKw: 0.45,
      pressureLossPa: 10,
      size: "690 x 600 x 550 mm",
      duct: "503 x 450 mm"
    },
    {
      step: 6000,
      model: "SDC-UV 6000",
      airflowMin: 5000,
      airflowMax: 6000,
      effHigh: 98.7,
      effLow: 94.5,
      uvcLampCount: 6,
      totalPowerW: 900,
      powerKw: 0.9,
      pressureLossPa: 10,
      size: "1170 x 600 x 550 mm",
      duct: "503 x 927 mm"
    },
    {
      step: 9000,
      model: "SDC-UV 9000",
      airflowMin: 7500,
      airflowMax: 9000,
      effHigh: 98.7,
      effLow: 94.5,
      uvcLampCount: 9,
      totalPowerW: 1350,
      powerKw: 1.35,
      pressureLossPa: 10,
      size: "1640 x 600 x 550 mm",
      duct: "503 x 1417 mm"
    },
    {
      step: 12000,
      model: "SDC-UV 12000",
      airflowMin: 10000,
      airflowMax: 12000,
      effHigh: 98.7,
      effLow: 94.5,
      uvcLampCount: 12,
      totalPowerW: 1800,
      powerKw: 1.8,
      pressureLossPa: 10,
      size: "1170 x 1200 x 550 mm",
      duct: "1103 x 927 mm"
    },
    {
      step: 18000,
      model: "SDC-UV 18000",
      airflowMin: 16000,
      airflowMax: 18000,
      effHigh: 98.7,
      effLow: 94.5,
      uvcLampCount: 18,
      totalPowerW: 2700,
      powerKw: 2.7,
      pressureLossPa: 10,
      size: "1640 x 1200 x 550 mm",
      duct: "1103 x 1417 mm"
    },
    {
      step: 27000,
      model: "SDC-UV 27000",
      airflowMin: 22500,
      airflowMax: 27000,
      effHigh: 98.7,
      effLow: 94.5,
      uvcLampCount: 27,
      totalPowerW: 4050,
      powerKw: 4.05,
      pressureLossPa: 10,
      size: "1640 x 1800 x 550 mm",
      duct: "1703 x 1417 mm"
    }
  ],

  plugFan: [
    {
      step: 3000,
      model: "SDC 3000 Plug Fan",
      fanCount: 1,
      totalPowerW: 275,
      powerKw: 0.275,
      maxAirflow: 4300,
      size: "690 x 600 x 550 mm",
      duct: "503 x 450 mm"
    },
    {
      step: 6000,
      model: "SDC 6000 Plug Fan",
      fanCount: 2,
      totalPowerW: 400,
      powerKw: 0.4,
      maxAirflow: 6200,
      size: "1170 x 600 x 550 mm",
      duct: "503 x 927 mm"
    },
    {
      step: 9000,
      model: "SDC 9000 Plug Fan",
      fanCount: 3,
      totalPowerW: 600,
      powerKw: 0.6,
      maxAirflow: 9300,
      size: "1640 x 600 x 550 mm",
      duct: "503 x 1417 mm"
    },
    {
      step: 12000,
      model: "SDC 12000 Plug Fan",
      fanCount: 4,
      totalPowerW: 800,
      powerKw: 0.8,
      maxAirflow: 12400,
      size: "1170 x 1200 x 550 mm",
      duct: "1103 x 927 mm"
    },
    {
      step: 18000,
      model: "SDC 18000 Plug Fan",
      fanCount: 6,
      totalPowerW: 1200,
      powerKw: 1.2,
      maxAirflow: 18600,
      size: "1640 x 1200 x 550 mm",
      duct: "1103 x 1417 mm"
    },
    {
      step: 27000,
      model: "SDC 27000 Plug Fan",
      fanCount: 9,
      totalPowerW: 1800,
      powerKw: 1.8,
      maxAirflow: 27900,
      size: "1640 x 1800 x 550 mm",
      duct: "1703 x 1417 mm"
    }
  ],

  carbon: [
    {
      step: 3000,
      model: "SDC-3 Karbon Filtre",
      airflowMin: 2500,
      airflowMax: 3000,
      effHigh: 98.7,
      effLow: 94.5,
      carbonCount: 16,
      pressureLossPa: 190,
      size: "690 x 600 x 550 mm",
      duct: "503 x 450 mm"
    },
    {
      step: 6000,
      model: "SDC-6 Karbon Filtre",
      airflowMin: 5000,
      airflowMax: 6000,
      effHigh: 98.7,
      effLow: 94.5,
      carbonCount: 24,
      pressureLossPa: 190,
      size: "1170 x 600 x 550 mm",
      duct: "503 x 927 mm"
    },
    {
      step: 9000,
      model: "SDC-9 Karbon Filtre",
      airflowMin: 7500,
      airflowMax: 9000,
      effHigh: 98.7,
      effLow: 94.5,
      carbonCount: 36,
      pressureLossPa: 190,
      size: "1640 x 600 x 550 mm",
      duct: "503 x 1417 mm"
    },
    {
      step: 12000,
      model: "SDC-12 Karbon Filtre",
      airflowMin: 10000,
      airflowMax: 12000,
      effHigh: 98.7,
      effLow: 94.5,
      carbonCount: 48,
      pressureLossPa: 190,
      size: "1170 x 1200 x 550 mm",
      duct: "1103 x 927 mm"
    },
    {
      step: 18000,
      model: "SDC-18 Karbon Filtre",
      airflowMin: 16000,
      airflowMax: 18000,
      effHigh: 98.7,
      effLow: 94.5,
      carbonCount: 72,
      pressureLossPa: 150,
      size: "1640 x 1200 x 550 mm",
      duct: "1103 x 1417 mm"
    },
    {
      step: 27000,
      model: "SDC-27 Karbon Filtre",
      airflowMin: 22500,
      airflowMax: 27000,
      effHigh: 98.7,
      effLow: 94.5,
      carbonCount: 108,
      pressureLossPa: 150,
      size: "1640 x 1800 x 550 mm",
      duct: "1703 x 1417 mm"
    }
  ],

  oilMistFan: [
    {
      step: 3000,
      model: "SDC Oil Mist Fan 3000",
      airflowMin: 3000,
      airflowMax: 4000,
      fanCount: 1,
      totalPowerW: 450,
      powerKw: 0.45,
      pressureLossPa: 10,
      size: "690 x 600 x 550 mm",
      duct: "503 x 450 mm"
    },
    {
      step: 6000,
      model: "SDC Oil Mist Fan 6000",
      airflowMin: 5000,
      airflowMax: 6000,
      effHigh: 98.7,
      effLow: 94.5,
      fanCount: 2,
      totalPowerW: 900,
      powerKw: 0.9,
      pressureLossPa: 10,
      size: "1170 x 600 x 550 mm",
      duct: "503 x 927 mm"
    },
    {
      step: 9000,
      model: "SDC Oil Mist Fan 9000",
      airflowMin: 7500,
      airflowMax: 9000,
      effHigh: 98.7,
      effLow: 94.5,
      fanCount: 3,
      totalPowerW: 1350,
      powerKw: 1.35,
      pressureLossPa: 10,
      size: "1640 x 600 x 550 mm",
      duct: "503 x 1417 mm"
    },
    {
      step: 12000,
      model: "SDC Oil Mist Fan 12000",
      airflowMin: 10000,
      airflowMax: 12000,
      effHigh: 98.7,
      effLow: 94.5,
      fanCount: 4,
      totalPowerW: 1800,
      powerKw: 1.8,
      pressureLossPa: 10,
      size: "1170 x 1200 x 550 mm",
      duct: "1103 x 927 mm"
    },
    {
      step: 18000,
      model: "SDC Oil Mist Fan 18000",
      airflowMin: 16000,
      airflowMax: 18000,
      effHigh: 98.7,
      effLow: 94.5,
      fanCount: 6,
      totalPowerW: 2700,
      powerKw: 2.7,
      pressureLossPa: 10,
      size: "1640 x 1200 x 550 mm",
      duct: "1103 x 1417 mm"
    },
    {
      step: 27000,
      model: "SDC Oil Mist Fan 27000",
      airflowMin: 22500,
      airflowMax: 27000,
      effHigh: 98.7,
      effLow: 94.5,
      fanCount: 9,
      totalPowerW: 4050,
      powerKw: 4.05,
      pressureLossPa: 10,
      size: "1640 x 1800 x 550 mm",
      duct: "1703 x 1417 mm"
    }
  ]
};

// === HESAPLAMA ===
function chooseModel(seriesKey, airflow) {
  const series = products[seriesKey];
  if (!series) return null;

  const match = series.find(p => {
    const max = p.airflowMax || p.maxAirflow;
    return airflow <= max;
  });

  return match || series[series.length - 1];
}

// Davlumbaz için U hesabı
function calcU(type, A, B) {
  switch (type) {
    case "type1":
      return A + B;
    case "type2":
      return 2 * A + B;
    case "type3":
      return 2 * (A + B);
    default:
      return 0;
  }
}

// Q = 3600 * U * (h2 - h1) * Vx   (m³/h)
function calcQ(U, h1, h2, Vx) {
  const dh = h2 - h1;
  if (dh <= 0) return 0;
  return 3600 * U * dh * Vx;
}

// Konsol için:
window.products = products;
window.chooseModel = chooseModel;
window.calcU = calcU;
window.calcQ = calcQ;

// === FORM / UI ===
const seriesNames = {
  espSingle: "ESP Tek Geçiş",
  espDouble: "ESP Çift Geçiş",
  uvc: "UVC",
  carbon: "Karbon Filtre",
  plugFan: "Plug Fan",
  oilMistFan: "Oil Mist Fan"
};

function setupForms() {
  // --- BÖLÜM 1: Cihaz seçimi ---
  const form = document.getElementById("calcForm");
  const resultsEl = document.getElementById("results");
  const messageEl = document.getElementById("message");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const airflowValue = Number(document.getElementById("airflow").value);
    if (!airflowValue || airflowValue <= 0) {
      messageEl.textContent = "Lütfen geçerli bir hava debisi (m³/h) girin.";
      messageEl.style.display = "block";
      resultsEl.innerHTML = "";
      return;
    }

    const checkedSeries = Array.from(
      form.querySelectorAll("input[name='series']:checked")
    ).map((input) => input.value);

    if (checkedSeries.length === 0) {
      messageEl.textContent = "En az bir cihaz serisi seçmeniz gerekiyor.";
      messageEl.style.display = "block";
      resultsEl.innerHTML = "";
      return;
    }

    messageEl.style.display = "none";

    let html = "";
    checkedSeries.forEach((key) => {
      const model = chooseModel(key, airflowValue);
      if (!model) return;

      html += `
        <div class="card">
          <h3>${seriesNames[key]}</h3>
          <p><strong>Model:</strong> ${model.model || "-"}</p>
          <p><strong>Kapasite Aralığı:</strong> ${
            model.airflowMin || "–"
          } – ${model.airflowMax || model.maxAirflow || "–"} m³/h</p>
          ${
            model.powerKw
              ? `<p><strong>Toplam Güç:</strong> ${model.powerKw} kW</p>`
              : ""
          }
          ${
            model.pressureLossPa
              ? `<p><strong>Basınç Kaybı:</strong> ${model.pressureLossPa} Pa</p>`
              : ""
          }
          ${
            model.size ? `<p><strong>Boyut:</strong> ${model.size}</p>` : ""
          }
          ${
            model.duct ? `<p><strong>Bağlantı Kanalı:</strong> ${model.duct}</p>` : ""
          }
        </div>
      `;
    });

    resultsEl.innerHTML = html;
  });

  // --- BÖLÜM 2: Davlumbaz hesabı ---
  const hoodForm = document.getElementById("hoodForm");
  const hoodMsg = document.getElementById("hoodMessage");
  const copyBtn = document.getElementById("copyToAirflow");

  hoodForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const type = document.getElementById("hoodType").value;
    const A = Number(document.getElementById("A").value);
    const B = Number(document.getElementById("B").value);
    const h1 = Number(document.getElementById("h1").value);
    const h2 = Number(document.getElementById("h2").value);
    const vx = Number(document.getElementById("vx").value);

    if ([A, B, h1, h2, vx].some(v => !v || v < 0)) {
      hoodMsg.textContent = "A, B, h₁, h₂ ve Vₓ için geçerli değerler girin.";
      hoodMsg.style.display = "block";
      copyBtn.style.display = "none";
      return;
    }

    const U = calcU(type, A, B);
    const Q = calcQ(U, h1, h2, vx);

    if (!U || !Q) {
      hoodMsg.textContent = "Hesaplama yapılamadı. h₂, h₁'den büyük olmalıdır.";
      hoodMsg.style.display = "block";
      copyBtn.style.display = "none";
      return;
    }

    const Qrounded = Math.round(Q);

    hoodMsg.innerHTML =
      `U = ${U.toFixed(2)} m` +
      ` &nbsp; | &nbsp; Q = ${Qrounded.toLocaleString("tr-TR")} m³/h`;
    hoodMsg.style.display = "block";

    // debiyi yukarı aktarma butonunu aktif et
    copyBtn.style.display = "inline-block";
    copyBtn.onclick = () => {
      const airflowInput = document.getElementById("airflow");
      airflowInput.value = Qrounded;
      airflowInput.focus();
      airflowInput.scrollIntoView({ behavior: "smooth", block: "center" });
    };
  });
}

document.addEventListener("DOMContentLoaded", setupForms);

// Her-Needs Salon JS

// Set year
(function setYear() {
  const el = document.getElementById('year');
  if (el) el.textContent = new Date().getFullYear();
})();

// Booking form validation + summary
(function bookingController() {
  const form = document.getElementById('bookingForm');
  if (!form) return;

  const nama = document.getElementById('nama');
  const tanggal = document.getElementById('tanggal');
  const layanan = document.getElementById('layanan');

  const namaHint = document.getElementById('namaHint');
  const tanggalHint = document.getElementById('tanggalHint');
  const layananHint = document.getElementById('layananHint');

  const sumNama = document.getElementById('sumNama');
  const sumTanggal = document.getElementById('sumTanggal');
  const sumLayanan = document.getElementById('sumLayanan');

  function setHint(inputHintEl, message) {
    if (!inputHintEl) return;
    inputHintEl.textContent = message || '';
  }

  function formatTanggal(value) {
    if (!value) return '-';
    try {
      const d = new Date(value + 'T00:00:00');
      return d.toLocaleDateString('id-ID', { day: '2-digit', month: 'long', year: 'numeric' });
    } catch {
      return value;
    }
  }

  function validate() {
    let ok = true;

    if (!nama.value.trim()) {
      setHint(namaHint, 'Nama wajib diisi.');
      ok = false;
    } else {
      setHint(namaHint, '');
    }

    if (!tanggal.value) {
      setHint(tanggalHint, 'Tanggal wajib dipilih.');
      ok = false;
    } else {
      setHint(tanggalHint, '');
    }

    if (!layanan.value) {
      setHint(layananHint, 'Pilih salah satu layanan.');
      ok = false;
    } else {
      setHint(layananHint, '');
    }

    return ok;
  }

  // Initial summary
  if (sumNama) sumNama.textContent = '-';
  if (sumTanggal) sumTanggal.textContent = '-';
  if (sumLayanan) sumLayanan.textContent = '-';

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    const isValid = validate();
    if (!isValid) {
      alert('Periksa kembali input form booking kamu ya.');
      return;
    }

    if (sumNama) sumNama.textContent = nama.value.trim();
    if (sumTanggal) sumTanggal.textContent = formatTanggal(tanggal.value);
    if (sumLayanan) sumLayanan.textContent = layanan.value;

    alert('Booking berhasil dibuat! ✿');
  });

  form.addEventListener('reset', function () {
    setHint(namaHint, '');
    setHint(tanggalHint, '');
    setHint(layananHint, '');

    if (sumNama) sumNama.textContent = '-';
    if (sumTanggal) sumTanggal.textContent = '-';
    if (sumLayanan) sumLayanan.textContent = '-';
  });
})();


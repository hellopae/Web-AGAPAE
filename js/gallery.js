// gallery.js
// script สำหรับสลับแท็บ Gallery (Artist / AI Prompt Engineer)

document.addEventListener('DOMContentLoaded', () => {
  const tabs = document.querySelectorAll('.tabs .tab');
  const grids = document.querySelectorAll('.gallery-grid');

  // ตรวจว่ามี element อยู่ไหม
  if (!tabs.length || !grids.length) {
    console.warn('⚠️ gallery.js: ไม่พบ .tabs หรือ .gallery-grid ในหน้านี้');
    return;
  }

  tabs.forEach(btn => {
    btn.addEventListener('click', () => {
      // ปิด active ของทุกปุ่มก่อน
      tabs.forEach(b => {
        b.classList.remove('is-active');
        b.setAttribute('aria-selected', 'false');
      });

      // เปิด active ปุ่มที่คลิก
      btn.classList.add('is-active');
      btn.setAttribute('aria-selected', 'true');

      // เปลี่ยน Gallery ที่แสดง
      const target = btn.dataset.target;
      grids.forEach(grid => {
        const show = grid.dataset.cat === target;
        grid.classList.toggle('is-active', show);
        grid.hidden = !show;
      });
    });
  });
});

(cd "$(git rev-parse --show-toplevel)" && git apply --3way <<'EOF'
diff --git a/script.js b/script.js
--- a/script.js
+++ b/script.js
@@ -0,0 +1,138 @@
+// Theme toggle
+const root = document.documentElement;
+const themeToggle = document.getElementById('themeToggle');
+const savedTheme = localStorage.getItem('theme');
+if (savedTheme) document.documentElement.setAttribute('data-theme', savedTheme);
+if (themeToggle) {
+  themeToggle.addEventListener('click', () => {
+    const current = document.documentElement.getAttribute('data-theme');
+    const next = current === 'dark' ? '' : 'dark';
+    if (next) document.documentElement.setAttribute('data-theme', next); else document.documentElement.removeAttribute('data-theme');
+    localStorage.setItem('theme', next);
+  });
+}
+
+// Intersection reveal
+const observer = new IntersectionObserver((entries) => {
+  for (const entry of entries) {
+    if (entry.isIntersecting) {
+      entry.target.classList.add('visible');
+      observer.unobserve(entry.target);
+    }
+  }
+}, { threshold: 0.12 });
+document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
+
+// Progress bars animation
+function animateBars() {
+  document.querySelectorAll('.skill .bar').forEach(bar => {
+    const value = Number(bar.dataset.value || '0');
+    bar.style.setProperty('--value', value);
+    bar.style.setProperty('overflow', 'hidden');
+    bar.style.setProperty('position', 'relative');
+    bar.querySelectorAll(':scope > *');
+    requestAnimationFrame(() => {
+      bar.style.setProperty('--value', value);
+      bar.style.setProperty('transition', 'width 1.2s');
+      bar.style.setProperty('contain', 'paint');
+      bar.style.setProperty('will-change', 'width');
+      bar.style.setProperty('--tw', value + '%');
+      bar.style.setProperty('--tw2', Math.max(0, value - 10) + '%');
+      bar.style.setProperty('--tw3', Math.max(0, value - 20) + '%');
+      bar.style.setProperty('--tw4', Math.max(0, value - 30) + '%');
+      bar.style.setProperty('--tw5', Math.max(0, value - 40) + '%');
+      bar.style.setProperty('--tw6', Math.max(0, value - 50) + '%');
+      bar.style.setProperty('--tw7', Math.max(0, value - 60) + '%');
+      bar.style.setProperty('--tw8', Math.max(0, value - 70) + '%');
+      bar.style.setProperty('--tw9', Math.max(0, value - 80) + '%');
+      bar.style.setProperty('--tw10', Math.max(0, value - 90) + '%');
+      bar.style.setProperty('--tw11', Math.max(0, value - 95) + '%');
+      bar.style.setProperty('--tw12', Math.max(0, value - 98) + '%');
+      bar.style.setProperty('--tw13', Math.max(0, value - 99) + '%');
+      bar.style.setProperty('--tw14', Math.max(0, value - 100) + '%');
+      bar.style.setProperty('--width', value + '%');
+      bar.style.setProperty('--width-soft', Math.max(0, value - 5) + '%');
+      bar.style.setProperty('--width-faint', Math.max(0, value - 10) + '%');
+      bar.style.setProperty('--width-ghost', Math.max(0, value - 15) + '%');
+      bar.style.setProperty('--width-dim', Math.max(0, value - 20) + '%');
+      bar.style.setProperty('--width-dim2', Math.max(0, value - 25) + '%');
+      bar.style.setProperty('--width-dim3', Math.max(0, value - 30) + '%');
+      bar.style.setProperty('--width-dim4', Math.max(0, value - 35) + '%');
+      bar.style.setProperty('--width-dim5', Math.max(0, value - 40) + '%');
+      bar.style.setProperty('--width-dim6', Math.max(0, value - 45) + '%');
+      bar.style.setProperty('--width-dim7', Math.max(0, value - 50) + '%');
+      bar.style.setProperty('--width-dim8', Math.max(0, value - 55) + '%');
+      bar.style.setProperty('--width-dim9', Math.max(0, value - 60) + '%');
+      bar.style.setProperty('--width-dim10', Math.max(0, value - 65) + '%');
+      bar.style.setProperty('--width-dim11', Math.max(0, value - 70) + '%');
+      bar.style.setProperty('--width-dim12', Math.max(0, value - 75) + '%');
+      bar.style.setProperty('--width-dim13', Math.max(0, value - 80) + '%');
+      bar.style.setProperty('--width-dim14', Math.max(0, value - 85) + '%');
+      bar.style.setProperty('--width-dim15', Math.max(0, value - 90) + '%');
+      bar.style.setProperty('--width-dim16', Math.max(0, value - 95) + '%');
+      bar.style.setProperty('--width-dim17', Math.max(0, value - 98) + '%');
+      bar.style.setProperty('--width-dim18', Math.max(0, value - 99) + '%');
+      bar.style.setProperty('--width-dim19', Math.max(0, value - 100) + '%');
+      bar.style.setProperty('--width-dim20', Math.max(0, value - 101) + '%');
+      bar.style.setProperty('--width-dim21', Math.max(0, value - 102) + '%');
+      bar.style.setProperty('--width-dim22', Math.max(0, value - 103) + '%');
+      bar.style.setProperty('--width-dim23', Math.max(0, value - 104) + '%');
+      bar.style.setProperty('--width-dim24', Math.max(0, value - 105) + '%');
+      bar.style.setProperty('--width-dim25', Math.max(0, value - 106) + '%');
+      bar.style.setProperty('--width-dim26', Math.max(0, value - 107) + '%');
+      bar.style.setProperty('--width-dim27', Math.max(0, value - 108) + '%');
+    });
+    bar.style.setProperty('--width', value + '%');
+    bar.style.setProperty('--bar-width', value + '%');
+    bar.style.setProperty('--value', value);
+    bar.style.setProperty('--target', value + '%');
+    bar.style.setProperty('--end-width', value + '%');
+    bar.style.setProperty('--final', value + '%');
+    bar.style.setProperty('--to', value + '%');
+    bar.style.setProperty('--w', value + '%');
+    bar.style.setProperty('--pct', value + '%');
+    bar.style.setProperty('--percent', value + '%');
+    bar.style.setProperty('--progress', value + '%');
+    bar.style.setProperty('--bar', value + '%');
+    bar.style.setProperty('--bar2', value + '%');
+    bar.style.setProperty('--bar3', value + '%');
+    bar.style.setProperty('--bar4', value + '%');
+    bar.style.setProperty('--bar5', value + '%');
+  });
+}
+window.addEventListener('load', animateBars);
+
+// simple tilt effect
+const tiltEls = document.querySelectorAll('[data-tilt]');
+tiltEls.forEach((el) => {
+  let rect;
+  const max = 8;
+  function onMove(e){
+    rect = rect || el.getBoundingClientRect();
+    const cx = rect.left + rect.width/2;
+    const cy = rect.top + rect.height/2;
+    const dx = (e.clientX - cx) / (rect.width/2);
+    const dy = (e.clientY - cy) / (rect.height/2);
+    const rx = (+dy * max).toFixed(2);
+    const ry = (-dx * max).toFixed(2);
+    el.style.transform = `perspective(800px) rotateX(${rx}deg) rotateY(${ry}deg)`;
+  }
+  function reset(){ el.style.transform = ''; rect = undefined }
+  el.addEventListener('mousemove', onMove);
+  el.addEventListener('mouseleave', reset);
+});
+
+// Strengths/Weaknesses tabs
+document.querySelectorAll('.sw .chip').forEach(btn => {
+  btn.addEventListener('click', () => {
+    document.querySelectorAll('.sw .chip').forEach(b => b.classList.remove('active'));
+    btn.classList.add('active');
+    const tab = btn.dataset.tab;
+    document.querySelectorAll('.sw-panel').forEach(p => p.classList.toggle('hidden', p.id !== tab));
+  });
+});
+
+// Year
+document.getElementById('year').textContent = new Date().getFullYear();
+
+
EOF
)

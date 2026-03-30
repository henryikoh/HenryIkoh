<template>
  <div class="system-cover-wrapper">
    <div class="canvas">
      <div class="grid"></div>
      <div class="scanlines"></div>
      <div class="glow-center"></div>

      <div class="left-bar"></div>
      <div class="right-bar"></div>
      <div class="top-bar"></div>
      <div class="bottom-bar"></div>

      <div class="corner corner-tl"></div>
      <div class="corner corner-tr"></div>
      <div class="corner corner-bl"></div>
      <div class="corner corner-br"></div>

      <div class="ref-left">
        ZPS-001<br>
        Strategic Systems
      </div>

      <div class="ref">
        Phase 01 — 05<br>
        Architecture
      </div>

      <div class="content">
        <div class="eyebrow">Strategic Systems Architecture</div>

        <div class="title-block">
          <div class="title-row-1">
            <span class="word-the">The</span>
            <span class="word-zero">Zero</span>
          </div>
          <div class="title-row-2">
            <span class="word-point">Point</span>
            <span class="word-system">System</span>
          </div>
        </div>

        <div class="divider"></div>
        <div class="tagline">Diagnose · Design · Prove</div>
      </div>

      <div class="phases">
        <div class="phase-node active"></div>
        <div class="phase-line"></div>
        <div class="phase-node"></div>
        <div class="phase-line"></div>
        <div class="phase-node"></div>
        <div class="phase-line"></div>
        <div class="phase-node"></div>
        <div class="phase-line"></div>
        <div class="phase-node"></div>
      </div>

      <div class="byline">
        <div class="byline-rule"></div>
        <div class="byline-text">By Henry Ikoh</div>
        <div class="byline-rule"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SystemCover'
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;700;800&family=DM+Mono:wght@300;400&display=swap');

.system-cover-wrapper {
  width: 100%;
  aspect-ratio: 1200 / 630;
  overflow: hidden;
}

.canvas {
  position: relative;
  width: 1200px;
  height: 630px;
  background: #040805;
  overflow: hidden;
  font-family: 'Syne', sans-serif;
  transform-origin: top left;
  transform: scale(var(--cover-scale, 1));
}

.grid {
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(rgba(0,255,159,0.035) 1px, transparent 1px),
    linear-gradient(90deg, rgba(0,255,159,0.035) 1px, transparent 1px);
  background-size: 60px 60px;
}

.scanlines {
  position: absolute;
  inset: 0;
  background: repeating-linear-gradient(
    0deg,
    transparent,
    transparent 3px,
    rgba(0,0,0,0.08) 3px,
    rgba(0,0,0,0.08) 4px
  );
  pointer-events: none;
}

.glow-center {
  position: absolute;
  width: 800px;
  height: 500px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: radial-gradient(ellipse, rgba(0,255,159,0.06) 0%, transparent 65%);
}

.left-bar {
  position: absolute;
  left: 56px;
  top: 0;
  bottom: 0;
  width: 1px;
  background: linear-gradient(to bottom, transparent 5%, rgba(0,255,159,0.15) 30%, rgba(0,255,159,0.15) 70%, transparent 95%);
}

.right-bar {
  position: absolute;
  right: 56px;
  top: 0;
  bottom: 0;
  width: 1px;
  background: linear-gradient(to bottom, transparent 5%, rgba(0,255,159,0.15) 30%, rgba(0,255,159,0.15) 70%, transparent 95%);
}

.top-bar {
  position: absolute;
  top: 48px;
  left: 56px;
  right: 56px;
  height: 1px;
  background: linear-gradient(to right, transparent, rgba(0,255,159,0.15), transparent);
}

.bottom-bar {
  position: absolute;
  bottom: 48px;
  left: 56px;
  right: 56px;
  height: 1px;
  background: linear-gradient(to right, transparent, rgba(0,255,159,0.15), transparent);
}

.corner {
  position: absolute;
  width: 12px;
  height: 12px;
}
.corner-tl { top: 44px; left: 52px; border-top: 1px solid rgba(0,255,159,0.3); border-left: 1px solid rgba(0,255,159,0.3); }
.corner-tr { top: 44px; right: 52px; border-top: 1px solid rgba(0,255,159,0.3); border-right: 1px solid rgba(0,255,159,0.3); }
.corner-bl { bottom: 44px; left: 52px; border-bottom: 1px solid rgba(0,255,159,0.3); border-left: 1px solid rgba(0,255,159,0.3); }
.corner-br { bottom: 44px; right: 52px; border-bottom: 1px solid rgba(0,255,159,0.3); border-right: 1px solid rgba(0,255,159,0.3); }

.phases {
  position: absolute;
  bottom: 100px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  gap: 0;
}

.phase-node {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: rgba(0,255,159,0.25);
  border: 1px solid rgba(0,255,159,0.4);
}

.phase-node.active {
  background: #00ff9f;
  box-shadow: 0 0 8px rgba(0,255,159,0.6);
}

.phase-line {
  width: 48px;
  height: 1px;
  background: rgba(0,255,159,0.12);
}

.content {
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.eyebrow {
  font-family: 'DM Mono', monospace;
  font-size: 10.5px;
  font-weight: 300;
  color: rgba(0,255,159,0.5);
  letter-spacing: 0.28em;
  text-transform: uppercase;
  margin-bottom: 32px;
}

.title-block {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0;
}

.title-row-1 {
  display: flex;
  align-items: baseline;
  gap: 18px;
  line-height: 1;
}

.word-the {
  font-size: 52px;
  font-weight: 400;
  color: rgba(255,255,255,0.5);
  letter-spacing: 0.06em;
  text-transform: uppercase;
}

.word-zero {
  font-size: 148px;
  font-weight: 800;
  color: #00ff9f;
  letter-spacing: -0.03em;
  line-height: 0.9;
  text-shadow:
    0 0 40px rgba(0,255,159,0.4),
    0 0 80px rgba(0,255,159,0.15),
    0 0 120px rgba(0,255,159,0.06);
}

.title-row-2 {
  display: flex;
  align-items: baseline;
  gap: 18px;
  margin-top: -12px;
  line-height: 1;
  align-self: flex-end;
  margin-right: 6px;
}

.word-point {
  font-size: 72px;
  font-weight: 400;
  color: rgba(255,255,255,0.18);
  letter-spacing: 0.18em;
  text-transform: uppercase;
}

.word-system {
  font-size: 72px;
  font-weight: 800;
  color: rgba(255,255,255,0.88);
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.divider {
  margin-top: 32px;
  width: 280px;
  height: 1px;
  background: linear-gradient(to right, transparent, rgba(0,255,159,0.3), transparent);
}

.tagline {
  margin-top: 20px;
  font-family: 'DM Mono', monospace;
  font-size: 11px;
  font-weight: 300;
  color: rgba(255,255,255,0.22);
  letter-spacing: 0.18em;
  text-transform: uppercase;
  text-align: center;
}

.byline {
  position: absolute;
  bottom: 62px;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 14px;
}

.byline-rule {
  width: 36px;
  height: 1px;
  background: rgba(0,255,159,0.2);
}

.byline-text {
  font-family: 'DM Mono', monospace;
  font-size: 10px;
  font-weight: 400;
  color: rgba(255,255,255,0.28);
  letter-spacing: 0.2em;
  text-transform: uppercase;
}

.ref {
  position: absolute;
  top: 62px;
  right: 72px;
  font-family: 'DM Mono', monospace;
  font-size: 9px;
  font-weight: 300;
  color: rgba(0,255,159,0.2);
  letter-spacing: 0.15em;
  text-align: right;
  line-height: 1.8;
}

.ref-left {
  position: absolute;
  top: 62px;
  left: 72px;
  font-family: 'DM Mono', monospace;
  font-size: 9px;
  font-weight: 300;
  color: rgba(0,255,159,0.2);
  letter-spacing: 0.15em;
  line-height: 1.8;
}
</style>

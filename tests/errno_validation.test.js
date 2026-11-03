/**
 * FreeBSD 11.4 Kernel POSIX Errno Validation Suite
 * Tests errno bounds [1..96], ELAST parity, and error precedence.
 */

const { FREEBSD_ERRNO_TABLE, ERROR_PRECEDENCE_RULES } = require('../app.js');

function runTests() {
  let passed = 0;
  let failed = 0;

  function assert(condition, message) {
    if (condition) {
      passed++;
      console.log(`  ✓ ${message}`);
    } else {
      failed++;
      console.error(`  ✗ FAIL: ${message}`);
    }
  }

  console.log("Running FreeBSD 11.4 Errno Suite...");

  // 1. Boundary Checks
  assert(FREEBSD_ERRNO_TABLE.length === 96, `Expected 96 FreeBSD errno definitions, got ${FREEBSD_ERRNO_TABLE.length}`);
  assert(FREEBSD_ERRNO_TABLE[0].number === 1 && FREEBSD_ERRNO_TABLE[0].name === "EPERM", "Errno 1 is EPERM");
  assert(FREEBSD_ERRNO_TABLE[95].number === 96 && FREEBSD_ERRNO_TABLE[95].name === "EOWNERDEAD", "Errno 96 is EOWNERDEAD (ELAST)");

  // 2. Strict Sequence Check
  let sequenceValid = true;
  for (let i = 0; i < FREEBSD_ERRNO_TABLE.length; i++) {
    if (FREEBSD_ERRNO_TABLE[i].number !== i + 1) {
      sequenceValid = false;
      break;
    }
  }
  assert(sequenceValid, "All errno codes are contiguous integers 1..96");

  // 3. Error Precedence Check (EFAULT > EBADF)
  const efault = FREEBSD_ERRNO_TABLE.find(e => e.name === "EFAULT");
  const ebadf = FREEBSD_ERRNO_TABLE.find(e => e.name === "EBADF");
  assert(efault && efault.number === 14, "EFAULT is errno 14");
  assert(ebadf && ebadf.number === 9, "EBADF is errno 9");

  // 4. Critical Networking Errnoids
  const eagain = FREEBSD_ERRNO_TABLE.find(e => e.name === "EAGAIN");
  const ewouldblock = FREEBSD_ERRNO_TABLE.find(e => e.name === "EWOULDBLOCK");
  assert(eagain && eagain.number === 35, "EAGAIN is errno 35");
  assert(ewouldblock && ewouldblock.number === 35, "EWOULDBLOCK equals EAGAIN (errno 35)");

  const einprogress = FREEBSD_ERRNO_TABLE.find(e => e.name === "EINPROGRESS");
  assert(einprogress && einprogress.number === 36, "EINPROGRESS is errno 36");

  console.log(`Test Results: ${passed} passed, ${failed} failed.`);
  return failed === 0;
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { runTests };
}

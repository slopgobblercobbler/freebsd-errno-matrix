// Complete FreeBSD 11.4 Errno Database (1 through ELAST = 96)
const errnoData = [
    { code: 1, name: 'EPERM', category: 'Permission & Security', desc: 'Operation not permitted', syscalls: ['setuid', 'kill', 'chown', 'mount'] },
    { code: 2, name: 'ENOENT', category: 'VFS / Filesystem', desc: 'No such file or directory', syscalls: ['open', 'stat', 'unlink', 'access'] },
    { code: 3, name: 'ESRCH', category: 'Process & Memory', desc: 'No such process', syscalls: ['kill', 'ptrace', 'waitpid'] },
    { code: 4, name: 'EINTR', category: 'IPC & Threading', desc: 'Interrupted system call', syscalls: ['read', 'write', 'select', 'poll'] },
    { code: 5, name: 'EIO', category: 'Device & I/O', desc: 'Input/output error', syscalls: ['read', 'write', 'ioctl', 'fsync'] },
    { code: 6, name: 'ENXIO', category: 'Device & I/O', desc: 'Device not configured', syscalls: ['open', 'ioctl', 'read', 'write'] },
    { code: 7, name: 'E2BIG', category: 'Process & Memory', desc: 'Argument list too long', syscalls: ['execve'] },
    { code: 8, name: 'ENOEXEC', category: 'Process & Memory', desc: 'Exec format error', syscalls: ['execve'] },
    { code: 9, name: 'EBADF', category: 'Device & I/O', desc: 'Bad file descriptor', syscalls: ['read', 'write', 'close', 'dup'] },
    { code: 10, name: 'ECHILD', category: 'Process & Memory', desc: 'No child processes', syscalls: ['wait', 'waitpid', 'wait4'] },
    { code: 11, name: 'EDEADLK', category: 'IPC & Threading', desc: 'Resource deadlock avoided', syscalls: ['pthread_mutex_lock', 'flock'] },
    { code: 12, name: 'ENOMEM', category: 'Process & Memory', desc: 'Cannot allocate memory', syscalls: ['malloc', 'mmap', 'brk', 'fork'] },
    { code: 13, name: 'EACCES', category: 'Permission & Security', desc: 'Permission denied', syscalls: ['open', 'execve', 'connect', 'access'] },
    { code: 14, name: 'EFAULT', category: 'Process & Memory', desc: 'Bad address', syscalls: ['read', 'write', 'memcpy', 'gettimeofday'] },
    { code: 15, name: 'ENOTBLK', category: 'Device & I/O', desc: 'Block device required', syscalls: ['mount', 'swapon'] },
    { code: 16, name: 'EBUSY', category: 'Device & I/O', desc: 'Device busy', syscalls: ['mount', 'unmount', 'ioctl', 'chroot'] },
    { code: 17, name: 'EEXIST', category: 'VFS / Filesystem', desc: 'File exists', syscalls: ['mkdir', 'link', 'symlink', 'mknod'] },
    { code: 18, name: 'EXDEV', category: 'VFS / Filesystem', desc: 'Cross-device link', syscalls: ['link', 'rename'] },
    { code: 19, name: 'ENODEV', category: 'Device & I/O', desc: 'Operation not supported by device', syscalls: ['ioctl', 'sysctl'] },
    { code: 20, name: 'ENOTDIR', category: 'VFS / Filesystem', desc: 'Not a directory', syscalls: ['chdir', 'open', 'stat', 'mkdir'] },
    { code: 21, name: 'EISDIR', category: 'VFS / Filesystem', desc: 'Is a directory', syscalls: ['write', 'open', 'mknod'] },
    { code: 22, name: 'EINVAL', category: 'Process & Memory', desc: 'Invalid argument', syscalls: ['ioctl', 'setsockopt', 'mmap', 'fcntl'] },
    { code: 23, name: 'ENFILE', category: 'System Limit', desc: 'Too many open files in system', syscalls: ['open', 'socket', 'pipe'] },
    { code: 24, name: 'EMFILE', category: 'System Limit', desc: 'Too many open files', syscalls: ['open', 'dup', 'socket'] },
    { code: 25, name: 'ENOTTY', category: 'Device & I/O', desc: 'Inappropriate ioctl for device', syscalls: ['ioctl', 'tcgetattr'] },
    { code: 26, name: 'ETXTBSY', category: 'VFS / Filesystem', desc: 'Text file busy', syscalls: ['execve', 'open'] },
    { code: 27, name: 'EFBIG', category: 'VFS / Filesystem', desc: 'File too large', syscalls: ['write', 'truncate', 'lseek'] },
    { code: 28, name: 'ENOSPC', category: 'VFS / Filesystem', desc: 'No space left on device', syscalls: ['write', 'mkdir', 'fallocate'] },
    { code: 29, name: 'ESPIPE', category: 'VFS / Filesystem', desc: 'Illegal seek', syscalls: ['lseek', 'pipe', 'socket'] },
    { code: 30, name: 'EROFS', category: 'VFS / Filesystem', desc: 'Read-only file system', syscalls: ['unlink', 'mkdir', 'mount', 'chmod'] },
    { code: 31, name: 'EMLINK', category: 'VFS / Filesystem', desc: 'Too many links', syscalls: ['link'] },
    { code: 32, name: 'EPIPE', category: 'Networking & Sockets', desc: 'Broken pipe', syscalls: ['write', 'send'] },
    { code: 33, name: 'EDOM', category: 'Process & Memory', desc: 'Numerical argument out of domain', syscalls: ['math functions', 'sysctl'] },
    { code: 34, name: 'ERANGE', category: 'Process & Memory', desc: 'Result too large', syscalls: ['math functions', 'sysctl'] },
    { code: 35, name: 'EAGAIN', category: 'IPC & Threading', desc: 'Resource temporarily unavailable', syscalls: ['read', 'write', 'accept', 'select'] },
    { code: 36, name: 'EINPROGRESS', category: 'Networking & Sockets', desc: 'Operation now in progress', syscalls: ['connect', 'fcntl'] },
    { code: 37, name: 'EALREADY', category: 'Networking & Sockets', desc: 'Operation already in progress', syscalls: ['connect'] },
    { code: 38, name: 'ENOTSOCK', category: 'Networking & Sockets', desc: 'Socket operation on non-socket', syscalls: ['send', 'recv', 'setsockopt', 'bind'] },
    { code: 39, name: 'EDESTADDRREQ', category: 'Networking & Sockets', desc: 'Destination address required', syscalls: ['sendto', 'connect'] },
    { code: 40, name: 'EMSGSIZE', category: 'Networking & Sockets', desc: 'Message too long', syscalls: ['send', 'recv', 'sendto'] },
    { code: 41, name: 'EPROTOTYPE', category: 'Networking & Sockets', desc: 'Protocol wrong type for socket', syscalls: ['socket', 'setsockopt'] },
    { code: 42, name: 'ENOPROTOOPT', category: 'Networking & Sockets', desc: 'Protocol not available', syscalls: ['getsockopt', 'setsockopt'] },
    { code: 43, name: 'EPROTONOSUPPORT', category: 'Networking & Sockets', desc: 'Protocol not supported', syscalls: ['socket'] },
    { code: 44, name: 'ESOCKTNOSUPPORT', category: 'Networking & Sockets', desc: 'Socket type not supported', syscalls: ['socket'] },
    { code: 45, name: 'EOPNOTSUPP', category: 'Networking & Sockets', desc: 'Operation not supported on socket', syscalls: ['accept', 'listen', 'send'] },
    { code: 46, name: 'EPFNOSUPPORT', category: 'Networking & Sockets', desc: 'Protocol family not supported', syscalls: ['socket'] },
    { code: 47, name: 'EAFNOSUPPORT', category: 'Networking & Sockets', desc: 'Address family not supported by protocol family', syscalls: ['socket', 'bind'] },
    { code: 48, name: 'EADDRINUSE', category: 'Networking & Sockets', desc: 'Address already in use', syscalls: ['bind'] },
    { code: 49, name: 'EADDRNOTAVAIL', category: 'Networking & Sockets', desc: 'Can not assign requested address', syscalls: ['bind', 'connect'] },
    { code: 50, name: 'ENETDOWN', category: 'Networking & Sockets', desc: 'Network is down', syscalls: ['connect', 'sendto'] },
    { code: 51, name: 'ENETUNREACH', category: 'Networking & Sockets', desc: 'Network is unreachable', syscalls: ['connect', 'sendto'] },
    { code: 52, name: 'ENETRESET', category: 'Networking & Sockets', desc: 'Network dropped connection on reset', syscalls: ['recv', 'getsockopt'] },
    { code: 53, name: 'ECONNABORTED', category: 'Networking & Sockets', desc: 'Software caused connection abort', syscalls: ['accept', 'read', 'write'] },
    { code: 54, name: 'ECONNRESET', category: 'Networking & Sockets', desc: 'Connection reset by peer', syscalls: ['read', 'write', 'recv'] },
    { code: 55, name: 'ENOBUFS', category: 'System Limit', desc: 'No buffer space available', syscalls: ['socket', 'setsockopt', 'malloc'] },
    { code: 56, name: 'EISCONN', category: 'Networking & Sockets', desc: 'Socket is already connected', syscalls: ['connect'] },
    { code: 57, name: 'ENOTCONN', category: 'Networking & Sockets', desc: 'Socket is not connected', syscalls: ['send', 'recv', 'getsockopt'] },
    { code: 58, name: 'ESHUTDOWN', category: 'Networking & Sockets', desc: 'Cannot send after socket shutdown', syscalls: ['write', 'send'] },
    { code: 59, name: 'ETOOMANYREFS', category: 'System Limit', desc: 'Too many references: splice prohibited', syscalls: ['splice', 'sendfile'] },
    { code: 60, name: 'ETIMEDOUT', category: 'Networking & Sockets', desc: 'Operation timed out', syscalls: ['connect', 'recv', 'select'] },
    { code: 61, name: 'ECONNREFUSED', category: 'Networking & Sockets', desc: 'Connection refused', syscalls: ['connect'] },
    { code: 62, name: 'ELOOP', category: 'VFS / Filesystem', desc: 'Too many levels of symbolic links', syscalls: ['open', 'stat', 'readlink'] },
    { code: 63, name: 'ENAMETOOLONG', category: 'VFS / Filesystem', desc: 'File name too long', syscalls: ['open', 'stat', 'mkdir'] },
    { code: 64, name: 'EHOSTDOWN', category: 'Networking & Sockets', desc: 'Host is down', syscalls: ['connect', 'sendto'] },
    { code: 65, name: 'EHOSTUNREACH', category: 'Networking & Sockets', desc: 'No route to host', syscalls: ['connect', 'sendto'] },
    { code: 66, name: 'ENOTEMPTY', category: 'VFS / Filesystem', desc: 'Directory not empty', syscalls: ['rmdir', 'rename'] },
    { code: 67, name: 'EPROCLIM', category: 'System Limit', desc: 'Too many processes', syscalls: ['fork'] },
    { code: 68, name: 'EUSERS', category: 'System Limit', desc: 'Too many users', syscalls: ['quotactl'] },
    { code: 69, name: 'EDQUOT', category: 'VFS / Filesystem', desc: 'Disc quota exceeded', syscalls: ['write', 'mkdir', 'chown'] },
    { code: 70, name: 'ESTALE', category: 'VFS / Filesystem', desc: 'Stale NFS file handle', syscalls: ['open', 'stat', 'read'] },
    { code: 71, name: 'EREMOTE', category: 'Networking & Sockets', desc: 'Too many levels of remote in path', syscalls: ['open'] },
    { code: 72, name: 'EBADRPC', category: 'Networking & Sockets', desc: 'RPC struct is bad', syscalls: ['rpc', 'nfs'] },
    { code: 73, name: 'ERPCMISMATCH', category: 'Networking & Sockets', desc: 'RPC version wrong', syscalls: ['rpc'] },
    { code: 74, name: 'EPROGUNAVAIL', category: 'Networking & Sockets', desc: 'RPC program not available', syscalls: ['rpc'] },
    { code: 75, name: 'EPROGMISMATCH', category: 'Networking & Sockets', desc: 'Program version wrong', syscalls: ['rpc'] },
    { code: 76, name: 'EPROCUNAVAIL', category: 'Networking & Sockets', desc: 'Bad procedure for program', syscalls: ['rpc'] },
    { code: 77, name: 'ENOLCK', category: 'System Limit', desc: 'No locks available', syscalls: ['flock', 'fcntl'] },
    { code: 78, name: 'ENOSYS', category: 'Process & Memory', desc: 'Function not implemented', syscalls: ['syscall'] },
    { code: 79, name: 'EFTYPE', category: 'Process & Memory', desc: 'Inappropriate file type or format', syscalls: ['execve', 'mmap', 'mount'] },
    { code: 80, name: 'EAUTH', category: 'Permission & Security', desc: 'Authentication error', syscalls: ['mount', 'getfh'] },
    { code: 81, name: 'ENEEDAUTH', category: 'Permission & Security', desc: 'Need authenticator', syscalls: ['mount', 'getfh'] },
    { code: 82, name: 'EIDRM', category: 'IPC & Threading', desc: 'Identifier removed', syscalls: ['msgrcv', 'semop'] },
    { code: 83, name: 'ENOMSG', category: 'IPC & Threading', desc: 'No message of desired type', syscalls: ['msgrcv'] },
    { code: 84, name: 'EOVERFLOW', category: 'Process & Memory', desc: 'Value too large to be stored in data type', syscalls: ['read', 'stat', 'readdir'] },
    { code: 85, name: 'ECANCELED', category: 'IPC & Threading', desc: 'Operation canceled', syscalls: ['aio_cancel', 'pthread_cancel'] },
    { code: 86, name: 'EILSEQ', category: 'Process & Memory', desc: 'Illegal byte sequence', syscalls: ['mbtowc', 'iconv'] },
    { code: 87, name: 'ENOATTR', category: 'VFS / Filesystem', desc: 'Attribute not found', syscalls: ['extattr_get_file'] },
    { code: 88, name: 'EDOOFUS', category: 'Process & Memory', desc: 'Programming error / function not implemented properly', syscalls: ['internal assert'] },
    { code: 89, name: 'EBADMSG', category: 'Networking & Sockets', desc: 'Bad message', syscalls: ['recvmsg', 'streams'] },
    { code: 90, name: 'EMULTIHOP', category: 'Networking & Sockets', desc: 'Multihop attempted', syscalls: ['nfs'] },
    { code: 91, name: 'ENOLINK', category: 'Networking & Sockets', desc: 'Link has been severed', syscalls: ['nfs'] },
    { code: 92, name: 'EPROTO', category: 'Networking & Sockets', desc: 'Protocol error', syscalls: ['streams', 'socket'] },
    { code: 93, name: 'ENOTCAPABLE', category: 'Permission & Security', desc: 'Capabilities insufficient (Capsicum)', syscalls: ['cap_enter', 'openat'] },
    { code: 94, name: 'ECAPMODE', category: 'Permission & Security', desc: 'Not permitted in capability mode', syscalls: ['cap_enter', 'sysctl'] },
    { code: 95, name: 'ENOTRECOVERABLE', category: 'IPC & Threading', desc: 'State not recoverable', syscalls: ['pthread_mutex_lock'] },
    { code: 96, name: 'EOWNERDEAD', category: 'IPC & Threading', desc: 'Previous owner died', syscalls: ['pthread_mutex_lock'] }
];

document.addEventListener('DOMContentLoaded', () => {
    initTabs();
    initMatrix();
    initSimulator();
    initElastAuditor();
});

// Tab Navigation
function initTabs() {
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');

    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const targetId = btn.getAttribute('data-tab');

            tabBtns.forEach(b => b.classList.remove('active'));
            tabContents.forEach(c => c.classList.remove('active'));

            btn.classList.add('active');
            document.getElementById(targetId).classList.add('active');
        });
    });
}

// Matrix Functionality
function initMatrix() {
    const tbody = document.getElementById('errnoTableBody');
    const searchInput = document.getElementById('searchInput');
    const categoryFilter = document.getElementById('categoryFilter');
    const resetFiltersBtn = document.getElementById('resetFilters');
    const visibleCountEl = document.getElementById('visibleCount');
    const totalCountEl = document.getElementById('totalCount');

    totalCountEl.textContent = errnoData.length;

    function renderTable(data) {
        tbody.innerHTML = '';
        visibleCountEl.textContent = data.length;

        if (data.length === 0) {
            tbody.innerHTML = `<tr><td colspan="5" style="text-align: center; color: var(--text-secondary); padding: 2rem;">No matching errno constants found.</td></tr>`;
            return;
        }

        data.forEach(item => {
            const tr = document.createElement('tr');
            
            const syscallTags = item.syscalls.map(s => `<span class="syscall-tag">${s}</span>`).join('');

            tr.innerHTML = `
                <td class="code-cell">${item.code}</td>
                <td class="name-cell">${item.name}</td>
                <td><span class="category-badge">${item.category}</span></td>
                <td>${item.desc}</td>
                <td>${syscallTags}</td>
            `;
            tbody.appendChild(tr);
        });
    }

    function filterData() {
        const query = searchInput.value.toLowerCase().trim();
        const category = categoryFilter.value;

        const filtered = errnoData.filter(item => {
            const matchesQuery = 
                item.name.toLowerCase().includes(query) ||
                item.code.toString().includes(query) ||
                item.desc.toLowerCase().includes(query) ||
                item.syscalls.some(s => s.toLowerCase().includes(query));

            const matchesCategory = category === '' || item.category === category;

            return matchesQuery && matchesCategory;
        });

        renderTable(filtered);
    }

    searchInput.addEventListener('input', filterData);
    categoryFilter.addEventListener('change', filterData);
    resetFiltersBtn.addEventListener('click', () => {
        searchInput.value = '';
        categoryFilter.value = '';
        renderTable(errnoData);
    });

    renderTable(errnoData);
}

// Syscall Precedence Simulator
function initSimulator() {
    const runSimBtn = document.getElementById('runSimBtn');
    const simSyscall = document.getElementById('simSyscall');
    const badPointerCheckbox = document.getElementById('badPointer');
    const badFdCheckbox = document.getElementById('badFd');
    const badArgCheckbox = document.getElementById('badArg');
    const permDeniedCheckbox = document.getElementById('permissionDenied');
    const simMemoryLimit = document.getElementById('simMemoryLimit');
    
    const pipelineStepsEl = document.getElementById('pipelineSteps');
    const verdictResultEl = document.getElementById('verdictResult');

    function runSimulation() {
        const syscall = simSyscall.value;
        const hasBadPtr = badPointerCheckbox.checked;
        const hasBadFd = badFdCheckbox.checked;
        const hasBadArg = badArgCheckbox.checked;
        const hasPerm = permDeniedCheckbox.checked;
        const isNoMem = simMemoryLimit.value === 'nomem';

        let steps = [];
        let triggeredErrno = 'Success (0)';

        // FreeBSD kernel validation precedence rules:
        // 1. File Descriptor validation (EBADF) for fd-based syscalls
        // 2. Pointer / Address validation (EFAULT) before memory access
        // 3. Argument / Flag validation (EINVAL)
        // 4. Permission / Capability checks (EPERM / EACCES)
        // 5. Resource exhaustion (ENOMEM / ENOSPC)

        const isFdSyscall = ['read', 'write', 'connect'].includes(syscall);

        if (isFdSyscall) {
            if (hasBadFd) {
                steps.push({ text: 'Validate File Descriptor table entry', status: 'FAIL', errno: 'EBADF (9)' });
                triggeredErrno = 'EBADF (9)';
            } else {
                steps.push({ text: 'Validate File Descriptor table entry', status: 'PASS', errno: null });
            }
        }

        // Pointer validation
        if (triggeredErrno === 'Success (0)') {
            if (hasBadPtr && ['read', 'write', 'connect', 'mmap'].includes(syscall)) {
                steps.push({ text: 'Validate user buffer pointer & VM mapping (copyin/copyout boundary)', status: 'FAIL', errno: 'EFAULT (14)' });
                triggeredErrno = 'EFAULT (14)';
            } else {
                steps.push({ text: 'Validate user buffer pointer & VM mapping', status: 'PASS', errno: null });
            }
        }

        // Argument / Flags validation
        if (triggeredErrno === 'Success (0)') {
            if (hasBadArg) {
                steps.push({ text: 'Verify argument bounds, reserved flags, and alignments', status: 'FAIL', errno: 'EINVAL (22)' });
                triggeredErrno = 'EINVAL (22)';
            } else {
                steps.push({ text: 'Verify argument bounds, reserved flags, and alignments', status: 'PASS', errno: null });
            }
        }

        // Permission / Security checks
        if (triggeredErrno === 'Success (0)') {
            if (hasPerm) {
                steps.push({ text: 'Check process credentials, ucred, and Capsicum sandboxing', status: 'FAIL', errno: 'EACCES (13)' });
                triggeredErrno = 'EACCES (13)';
            } else {
                steps.push({ text: 'Check process credentials and security policies', status: 'PASS', errno: null });
            }
        }

        // Memory / Resource limit checks
        if (triggeredErrno === 'Success (0)') {
            if (isNoMem) {
                steps.push({ text: 'Allocate kernel buffers / VM pages', status: 'FAIL', errno: 'ENOMEM (12)' });
                triggeredErrno = 'ENOMEM (12)';
            } else {
                steps.push({ text: 'Allocate kernel buffers / VM pages', status: 'PASS', errno: null });
            }
        }

        if (triggeredErrno === 'Success (0)') {
            steps.push({ text: 'Execute syscall operation successfully', status: 'PASS', errno: null });
        }

        // Render pipeline
        pipelineStepsEl.innerHTML = '';
        steps.forEach(step => {
            const div = document.createElement('div');
            div.className = `pipeline-step ${step.status === 'PASS' ? 'passed' : 'failed'}`;
            div.innerHTML = `
                <span>${step.text}</span>
                <span class="step-status ${step.status.toLowerCase()}">${step.status}${step.errno ? ' -> ' + step.errno : ''}</span>
            `;
            pipelineStepsEl.appendChild(div);
        });

        verdictResultEl.textContent = triggeredErrno;
    }

    runSimBtn.addEventListener('click', runSimulation);
    runSimulation();
}

// ELAST & Boundary Auditor
function initElastAuditor() {
    const input = document.getElementById('testErrnoInput');
    const btn = document.getElementById('checkErrnoBtn');
    const resultEl = document.getElementById('boundaryResult');

    function checkBoundary() {
        const val = parseInt(input.value, 10);
        
        if (isNaN(val)) {
            resultEl.innerHTML = `<span style="color: var(--danger-color);">Error: Please enter a valid integer.</span>`;
            return;
        }

        if (val < 1) {
            resultEl.innerHTML = `<span style="color: var(--warning-color);">${val}: Invalid errno (< 1). Errno 0 indicates success.</span>`;
        } else if (val <= 96) {
            const match = errnoData.find(e => e.code === val);
            resultEl.innerHTML = `<span style="color: var(--success-color);">${val} (${match ? match.name : 'Unknown'}): VALID FreeBSD 11.4 errno. Category: ${match ? match.category : 'N/A'}. Description: ${match ? match.desc : 'N/A'}</span>`;
        } else {
            resultEl.innerHTML = `<span style="color: var(--danger-color);">${val}: OUT OF BOUNDS. Exceeds FreeBSD 11.4 ELAST (96). Requires translation or raw kernel fallback.</span>`;
        }
    }

    btn.addEventListener('click', checkBoundary);
    input.addEventListener('input', checkBoundary);
    checkBoundary();
}

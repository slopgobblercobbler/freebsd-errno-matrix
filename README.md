# FreeBSD 11.4 Errno Matrix & Syscall Precedence Simulator

A high-utility, dark-mode single-page interactive web application for exploring FreeBSD 11.4 POSIX error numbers (`errno` values 1 through `ELAST = 96`, plus special extensions like `EOWNERDEAD`), filtering by category, searching constants, and simulating syscall error precedence rules.

## Live Demo
https://slopgobblercobbler.github.io/freebsd-errno-matrix/

## Features
- **Comprehensive Errno Database**: All FreeBSD 11.4 errnos with numeric codes, constant names, descriptions, POSIX/FreeBSD categories, and typical syscall sources.
- **Interactive Search & Filters**: Instant fuzzy filtering by name, code, category, or description.
- **Syscall Error Precedence Simulator**: Test how FreeBSD kernel validation precedence behaves (e.g. invalid pointer `EFAULT` vs invalid file descriptor `EBADF` vs invalid argument `EINVAL`).
- **ELAST = 96 Validator & Edge Cases**: Quick reference for FreeBSD 11.4 errno boundaries.
- **Responsive Dark-Mode UI**: Built with modern CSS variables, responsive tables, and clean typography tailored for systems developers and reverse engineers.

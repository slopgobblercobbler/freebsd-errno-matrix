# FreeBSD 11.4 POSIX Socket Options & Precedence

## Option Levels
- `SOL_SOCKET` (Level 0xffff): Generic socket layer options.
- `IPPROTO_IP` (Level 0): IPv4 protocol layer options.
- `IPPROTO_IPV6` (Level 41): IPv6 protocol layer options.
- `IPPROTO_TCP` (Level 6): TCP transport layer options.

## Error Precedence
1. Faulty pointer checks: When `optval` or `optlen` pointer is invalid, return `EFAULT` immediately.
2. Descriptor checks: If socket descriptor is invalid or closed, return `EBADF`.
3. Option name validation: If option is unknown for the specified level, return `ENOPROTOOPT`.
4. Option length validation: If `optlen` is smaller than expected struct size, return `EINVAL`.

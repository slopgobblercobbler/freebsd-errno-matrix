#pragma once
#include <string_view>

namespace freebsd {
struct TcpMd5SigDef {
    static constexpr int opt_name = 16;
    static constexpr std::string_view name = "TCP_MD5SIG";
    static constexpr std::string_view desc = "Enable RFC 2385 MD5 signature option for BGP sessions";
};
}

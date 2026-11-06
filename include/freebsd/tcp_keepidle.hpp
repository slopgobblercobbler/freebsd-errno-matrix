#pragma once
#include <string_view>

namespace freebsd {
struct TcpKeepIdleDef {
    static constexpr int opt_name = 256;
    static constexpr std::string_view name = "TCP_KEEPIDLE";
    static constexpr std::string_view desc = "Idle duration before starting keepalive probes";
};
}

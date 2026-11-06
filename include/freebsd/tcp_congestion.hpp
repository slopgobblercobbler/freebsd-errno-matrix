#pragma once
#include <string_view>

namespace freebsd {
struct TcpCongestionDef {
    static constexpr int opt_name = 64;
    static constexpr std::string_view name = "TCP_CONGESTION";
    static constexpr std::string_view desc = "Configure congestion control algorithm module";
};
}

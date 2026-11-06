#pragma once
#include <string_view>

namespace freebsd {
struct TcpCongestionCdgDef {
    static constexpr std::string_view algo_name = "cdg";
    static constexpr std::string_view desc = "CAIA Delay-Gradient TCP congestion avoidance module";
};
}

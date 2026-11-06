#pragma once
#include <string_view>

namespace freebsd {
struct TcpCongestionVegasDef {
    static constexpr std::string_view algo_name = "vegas";
    static constexpr std::string_view desc = "Delay-based TCP Vegas congestion avoidance module";
};
}

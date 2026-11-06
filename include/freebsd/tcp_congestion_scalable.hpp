#pragma once
#include <string_view>

namespace freebsd {
struct TcpCongestionScalableDef {
    static constexpr std::string_view algo_name = "scalable";
    static constexpr std::string_view desc = "Scalable TCP high-speed network congestion avoidance module";
};
}

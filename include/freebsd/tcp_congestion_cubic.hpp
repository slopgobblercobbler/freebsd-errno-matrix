#pragma once
#include <string_view>

namespace freebsd {
struct TcpCongestionCubicDef {
    static constexpr std::string_view algo_name = "cubic";
    static constexpr std::string_view desc = "CUBIC window-growth congestion control algorithm";
};
}

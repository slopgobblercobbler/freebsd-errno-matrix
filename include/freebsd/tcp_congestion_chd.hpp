#pragma once
#include <string_view>

namespace freebsd {
struct TcpCongestionChdDef {
    static constexpr std::string_view algo_name = "chd";
    static constexpr std::string_view desc = "CAIA Hamilton-Delay TCP congestion avoidance module";
};
}

#pragma once
#include <string_view>

namespace freebsd {
struct TcpCongestionWestwoodDef {
    static constexpr std::string_view algo_name = "westwood";
    static constexpr std::string_view desc = "Bandwidth-estimation based TCP Westwood+ congestion module";
};
}

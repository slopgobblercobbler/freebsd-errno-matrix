#pragma once
#include <string_view>

namespace freebsd {
struct TcpCongestionWestwoodLossDef {
    static constexpr std::string_view name = "westwood_loss";
    static constexpr std::string_view desc = "TCP Westwood+ loss-tolerant bandwidth estimation refinement";
};
}

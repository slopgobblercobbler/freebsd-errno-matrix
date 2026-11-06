#pragma once
#include <string_view>

namespace freebsd {
struct TcpCongestionHyblaDef {
    static constexpr std::string_view algo_name = "hybla";
    static constexpr std::string_view desc = "TCP Hybla satellite and high-RTT path congestion module";
};
}

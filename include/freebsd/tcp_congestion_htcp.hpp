#pragma once
#include <string_view>

namespace freebsd {
struct TcpCongestionHtcpDef {
    static constexpr std::string_view algo_name = "htcp";
    static constexpr std::string_view desc = "Hamilton TCP high-speed congestion control module";
};
}

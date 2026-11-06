#pragma once
#include <string_view>

namespace freebsd {
struct TcpCongestionDctcpDef {
    static constexpr std::string_view algo_name = "dctcp";
    static constexpr std::string_view desc = "Data Center TCP ECN-based congestion control module";
};
}

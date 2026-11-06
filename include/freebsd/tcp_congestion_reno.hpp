#pragma once
#include <string_view>

namespace freebsd {
struct TcpCongestionRenoDef {
    static constexpr std::string_view algo_name = "reno";
    static constexpr std::string_view desc = "Standard NewReno loss-based congestion control";
};
}

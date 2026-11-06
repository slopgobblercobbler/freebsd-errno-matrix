#pragma once
#include <string_view>

namespace freebsd {
struct IpDontFragDef {
    static constexpr int opt_name = 67;
    static constexpr std::string_view name = "IP_DONTFRAG";
    static constexpr std::string_view desc = "Set DF bit to avoid IP-level fragmentation";
};
}

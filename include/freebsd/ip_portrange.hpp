#pragma once
#include <string_view>

namespace freebsd {
struct IpPortRangeDef {
    static constexpr int opt_name = 19;
    static constexpr std::string_view name = "IP_PORTRANGE";
    static constexpr std::string_view desc = "Select port range policy for ephemeral ports";
};
}

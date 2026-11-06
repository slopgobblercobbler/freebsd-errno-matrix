#pragma once
#include <string_view>

namespace freebsd {
struct IpOrigIfDef {
    static constexpr int opt_name = 73;
    static constexpr std::string_view name = "IP_ORIGIF";
    static constexpr std::string_view desc = "Receive arrival network interface index in ancillary control data";
};
}

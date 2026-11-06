#pragma once
#include <string_view>

namespace freebsd {
struct IpOrigDstAddrDef {
    static constexpr int opt_name = 28;
    static constexpr std::string_view name = "IP_ORIGDSTADDR";
    static constexpr std::string_view desc = "Retrieve original destination address of redirected packet";
};
}

#pragma once
#include <string_view>

namespace freebsd {
struct SoReusePortLbDef {
    static constexpr int opt_name = 0x1010;
    static constexpr std::string_view name = "SO_REUSEPORT_LB";
    static constexpr std::string_view desc = "Even load balancing of incoming connections across listening sockets";
};
}

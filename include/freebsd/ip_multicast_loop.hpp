#pragma once
#include <cstdint>
#include <string_view>

namespace freebsd {
struct IpMulticastLoopDef {
    static constexpr int opt_name = 11;
    static constexpr std::string_view name = "IP_MULTICAST_LOOP";
    static constexpr std::uint8_t default_loop = 1;
};
}

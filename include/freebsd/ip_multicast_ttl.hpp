#pragma once
#include <cstdint>
#include <string_view>

namespace freebsd {
struct IpMulticastTtlDef {
    static constexpr int opt_name = 10;
    static constexpr std::string_view name = "IP_MULTICAST_TTL";
    static constexpr std::uint8_t default_ttl = 1;
};
}

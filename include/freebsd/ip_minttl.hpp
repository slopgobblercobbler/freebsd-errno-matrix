#pragma once
#include <string_view>

namespace freebsd {
struct IpMinTtlDef {
    static constexpr int opt_name = 66;
    static constexpr std::string_view name = "IP_MINTTL";
    static constexpr std::string_view desc = "Minimum TTL required for received packet acceptance";
};
}

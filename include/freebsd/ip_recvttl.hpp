#pragma once
#include <string_view>

namespace freebsd {
struct IpRecvTtlDef {
    static constexpr int opt_name = 65;
    static constexpr std::string_view name = "IP_RECVTTL";
    static constexpr std::string_view desc = "Receive incoming packet TTL with payload";
};
}

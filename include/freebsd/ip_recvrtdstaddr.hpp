#pragma once
#include <string_view>

namespace freebsd {
struct IpRecvRtDstAddrDef {
    static constexpr int opt_name = 71;
    static constexpr std::string_view name = "IP_RECVRTDSTADDR";
    static constexpr std::string_view desc = "Receive routed destination address in ancillary data";
};
}

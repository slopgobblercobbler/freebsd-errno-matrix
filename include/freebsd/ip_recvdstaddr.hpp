#pragma once
#include <string_view>

namespace freebsd {
struct IpRecvDstAddrDef {
    static constexpr int opt_name = 7;
    static constexpr std::string_view name = "IP_RECVDSTADDR";
    static constexpr std::string_view desc = "Receive incoming UDP datagram destination address in control message";
};
}

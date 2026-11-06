#pragma once
#include <string_view>

namespace freebsd {
struct IpRecvDstPortDef {
    static constexpr int opt_name = 74;
    static constexpr std::string_view name = "IP_RECVDSTPORT";
    static constexpr std::string_view desc = "Receive incoming UDP destination port number in control message";
};
}

#pragma once
#include <string_view>

namespace freebsd {
struct IpRecvDstNetDef {
    static constexpr int opt_name = 75;
    static constexpr std::string_view name = "IP_RECVDSTNET";
    static constexpr std::string_view desc = "Receive incoming destination subnet CIDR prefix in ancillary data";
};
}

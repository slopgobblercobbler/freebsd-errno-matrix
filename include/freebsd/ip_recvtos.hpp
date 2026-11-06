#pragma once
#include <string_view>

namespace freebsd {
struct IpRecvTosDef {
    static constexpr int opt_name = 66;
    static constexpr std::string_view name = "IP_RECVTOS";
    static constexpr std::string_view desc = "Receive incoming IP type-of-service/DSCP byte in control message";
};
}

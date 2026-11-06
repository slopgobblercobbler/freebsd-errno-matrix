#pragma once
#include <string_view>

namespace freebsd {
struct IpRecvSllDef {
    static constexpr int opt_name = 72;
    static constexpr std::string_view name = "IP_RECVSLL";
    static constexpr std::string_view desc = "Receive link-layer sockaddr header in ancillary packet data";
};
}

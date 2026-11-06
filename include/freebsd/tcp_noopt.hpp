#pragma once
#include <string_view>

namespace freebsd {
struct TcpNoOptDef {
    static constexpr int opt_name = 8;
    static constexpr std::string_view name = "TCP_NOOPT";
    static constexpr std::string_view desc = "Disable all optional TCP headers on the socket";
};
}

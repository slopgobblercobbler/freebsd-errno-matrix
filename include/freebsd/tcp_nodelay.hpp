#pragma once
#include <string_view>

namespace freebsd {
struct TcpNoDelayDef {
    static constexpr int opt_name = 1;
    static constexpr std::string_view name = "TCP_NODELAY";
    static constexpr std::string_view desc = "Disable Nagle algorithm for immediate packet delivery";
};
}

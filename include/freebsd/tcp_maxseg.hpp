#pragma once
#include <string_view>

namespace freebsd {
struct TcpMaxSegDef {
    static constexpr int opt_name = 2;
    static constexpr std::string_view name = "TCP_MAXSEG";
    static constexpr std::string_view desc = "Maximum TCP segment size configuration";
};
}

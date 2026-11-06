#pragma once
#include <string_view>

namespace freebsd {
struct SoListenQDef {
    static constexpr int opt_name = 0x1020;
    static constexpr std::string_view name = "SO_LISTENQ";
    static constexpr std::string_view desc = "Query current pending connection queue length for socket";
};
}

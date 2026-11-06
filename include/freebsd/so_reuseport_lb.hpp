#pragma once
#include <string_view>

namespace freebsd {
struct SoReuseportLbDef {
    static constexpr int opt_name = 0x10000;
    static constexpr std::string_view name = "SO_REUSEPORT_LB";
    static constexpr std::string_view desc = "Load-balanced port reuse across threads";
};
}

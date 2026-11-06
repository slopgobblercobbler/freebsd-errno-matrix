#pragma once
#include <string_view>

namespace freebsd {
struct SoFibDef {
    static constexpr int opt_name = 0x1014;
    static constexpr std::string_view name = "SO_SETFIB";
    static constexpr std::string_view desc = "Set or query socket routing table Forward Information Base (FIB)";
};
}
